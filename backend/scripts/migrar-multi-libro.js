// ============================================================
// scripts/migrar-multi-libro.js
// ------------------------------------------------------------
// Migra el esquema de "un solo libro" al modelo de catalogo con
// varios libros (mitologia griega hoy, otras mitologias despues).
//
// Que hace, en orden:
//   1. Crea la tabla "libros" e inserta la fila del libro griego
//      (si no existe ya).
//   2. Agrega "libro_id" a "personajes" y "historias", y le pone a
//      todas las filas existentes el id del libro griego.
//   3. Crea la tabla "accesos" (nivel de acceso por usuario Y libro,
//      reemplaza a usuarios.nivel_acceso que era global).
//   4. Copia el nivel_acceso actual de cada usuario a "accesos",
//      apuntando al libro griego.
//   5. Borra la columna usuarios.nivel_acceso.
//
// Es idempotente: antes de cada CREATE/ALTER revisa INFORMATION_SCHEMA,
// asi que se puede correr mas de una vez sin romper nada si se corta
// a mitad de camino.
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/migrar-multi-libro.js
//
// Recomendado: hacer un mysqldump de la base antes de correrlo, ya
// que el ultimo paso borra una columna.
// ============================================================

const pool = require('../config/db');

const SLUG_LIBRO_GRIEGO = 'mitologia-griega';
const TITULO_LIBRO_GRIEGO = 'Mitología Griega';

async function existeTabla(nombreTabla) {
  const [filas] = await pool.query(
    `SELECT COUNT(*) AS total FROM INFORMATION_SCHEMA.TABLES
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?`,
    [nombreTabla]
  );
  return filas[0].total > 0;
}

async function existeColumna(nombreTabla, nombreColumna) {
  const [filas] = await pool.query(
    `SELECT COUNT(*) AS total FROM INFORMATION_SCHEMA.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
    [nombreTabla, nombreColumna]
  );
  return filas[0].total > 0;
}

// ------------------------------------------------------------
// 1. Tabla "libros" + fila del libro griego
// ------------------------------------------------------------
// La tabla "libros" YA EXISTIA en la base (vacia, sin usar por
// ninguna ruta): quedo de un diseño anterior mas ambicioso
// (libros -> capitulos -> paginas -> plantillas, con tablas puente
// pagina_historias/pagina_personajes) que nunca se conecto al codigo
// real. Ese esquema se deja intacto, sin tocar; aca solo le agregamos
// lo minimo que faltaba para lo que sí usamos hoy: un "slug" con el
// que identificar el libro desde la URL (?libro=<slug>), y usamos su
// columna "estado" (enum 'borrador'/'en_revision'/'publicado') como
// el equivalente de "activo" en el catalogo publico.
// ------------------------------------------------------------
async function migrarTablaLibros() {
  if (!(await existeColumna('libros', 'slug'))) {
    await pool.query('ALTER TABLE libros ADD COLUMN slug VARCHAR(100) NULL');
    console.log('  - Columna "slug" agregada a "libros".');
  }

  const [indiceExistente] = await pool.query(
    `SELECT COUNT(*) AS total FROM INFORMATION_SCHEMA.STATISTICS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'libros' AND INDEX_NAME = 'uniq_libros_slug'`
  );
  if (indiceExistente[0].total === 0) {
    await pool.query('ALTER TABLE libros ADD UNIQUE INDEX uniq_libros_slug (slug)');
    console.log('  - Índice único en "libros.slug" agregado.');
  }

  const [existente] = await pool.query('SELECT id FROM libros WHERE slug = ?', [SLUG_LIBRO_GRIEGO]);
  if (existente.length > 0) {
    console.log(`  - Libro "${SLUG_LIBRO_GRIEGO}" ya existía (id ${existente[0].id}).`);
    return existente[0].id;
  }

  const [resultado] = await pool.query(
    `INSERT INTO libros (slug, titulo, estado) VALUES (?, ?, 'publicado')`,
    [SLUG_LIBRO_GRIEGO, TITULO_LIBRO_GRIEGO]
  );
  console.log(`  - Libro "${SLUG_LIBRO_GRIEGO}" insertado (id ${resultado.insertId}).`);
  return resultado.insertId;
}

// ------------------------------------------------------------
// 2. libro_id en "personajes" y "historias"
// ------------------------------------------------------------
async function migrarLibroIdEnTabla(nombreTabla, libroGriegoId) {
  if (!(await existeColumna(nombreTabla, 'libro_id'))) {
    await pool.query(`ALTER TABLE ${nombreTabla} ADD COLUMN libro_id INT NULL`);
    console.log(`  - Columna "libro_id" agregada a "${nombreTabla}".`);
  }

  const [resultado] = await pool.query(
    `UPDATE ${nombreTabla} SET libro_id = ? WHERE libro_id IS NULL`,
    [libroGriegoId]
  );
  if (resultado.affectedRows > 0) {
    console.log(`  - ${resultado.affectedRows} fila(s) de "${nombreTabla}" asignadas al libro griego.`);
  }

  // Una vez que ya no quedan NULL, la dejamos NOT NULL + con su FK.
  const [columnaInfo] = await pool.query(
    `SELECT IS_NULLABLE FROM INFORMATION_SCHEMA.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = 'libro_id'`,
    [nombreTabla]
  );
  if (columnaInfo[0].IS_NULLABLE === 'YES') {
    await pool.query(`ALTER TABLE ${nombreTabla} MODIFY COLUMN libro_id INT NOT NULL`);
    console.log(`  - Columna "libro_id" de "${nombreTabla}" ahora es NOT NULL.`);
  }

  const [fkExistente] = await pool.query(
    `SELECT COUNT(*) AS total FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = 'libro_id'
       AND REFERENCED_TABLE_NAME = 'libros'`,
    [nombreTabla]
  );
  if (fkExistente[0].total === 0) {
    await pool.query(
      `ALTER TABLE ${nombreTabla} ADD CONSTRAINT fk_${nombreTabla}_libro FOREIGN KEY (libro_id) REFERENCES libros(id)`
    );
    console.log(`  - FK "${nombreTabla}.libro_id" -> "libros.id" agregada.`);
  }
}

// ------------------------------------------------------------
// 3. Tabla "accesos"
// ------------------------------------------------------------
async function migrarTablaAccesos() {
  if (await existeTabla('accesos')) {
    console.log('  - Tabla "accesos" ya existía.');
    return;
  }
  await pool.query(`
    CREATE TABLE accesos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      usuario_id INT NOT NULL,
      libro_id INT NOT NULL,
      nivel_acceso ENUM('ninguno','flipbook','completo') NOT NULL DEFAULT 'ninguno',
      actualizado_en DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      UNIQUE KEY uniq_usuario_libro (usuario_id, libro_id),
      FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
      FOREIGN KEY (libro_id) REFERENCES libros(id) ON DELETE CASCADE
    )
  `);
  console.log('  - Tabla "accesos" creada.');
}

// ------------------------------------------------------------
// 4. Copiar usuarios.nivel_acceso -> accesos (libro griego)
// ------------------------------------------------------------
async function migrarNivelesDeUsuarios(libroGriegoId) {
  if (!(await existeColumna('usuarios', 'nivel_acceso'))) {
    console.log('  - "usuarios.nivel_acceso" ya no existe, nada que copiar.');
    return;
  }

  const [usuarios] = await pool.query(
    `SELECT id, nivel_acceso FROM usuarios WHERE nivel_acceso IS NOT NULL AND nivel_acceso <> 'ninguno'`
  );

  let migrados = 0;
  for (const usuario of usuarios) {
    await pool.query(
      `INSERT INTO accesos (usuario_id, libro_id, nivel_acceso)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE nivel_acceso = VALUES(nivel_acceso)`,
      [usuario.id, libroGriegoId, usuario.nivel_acceso]
    );
    migrados++;
  }
  console.log(`  - ${migrados} usuario(s) migrado(s) a "accesos" con su nivel_acceso previo.`);
}

// ------------------------------------------------------------
// 5. Borrar usuarios.nivel_acceso
// ------------------------------------------------------------
async function borrarColumnaNivelAcceso() {
  if (!(await existeColumna('usuarios', 'nivel_acceso'))) {
    console.log('  - Columna "usuarios.nivel_acceso" ya estaba borrada.');
    return;
  }
  await pool.query('ALTER TABLE usuarios DROP COLUMN nivel_acceso');
  console.log('  - Columna "usuarios.nivel_acceso" borrada.');
}

async function main() {
  console.log('Migración multi-libro: empezando...\n');

  console.log('1. Tabla "libros"');
  const libroGriegoId = await migrarTablaLibros();

  console.log('\n2. "libro_id" en "personajes" y "historias"');
  await migrarLibroIdEnTabla('personajes', libroGriegoId);
  await migrarLibroIdEnTabla('historias', libroGriegoId);

  console.log('\n3. Tabla "accesos"');
  await migrarTablaAccesos();

  console.log('\n4. Migrar niveles de acceso existentes');
  await migrarNivelesDeUsuarios(libroGriegoId);

  console.log('\n5. Borrar "usuarios.nivel_acceso"');
  await borrarColumnaNivelAcceso();

  console.log('\nMigración completa.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError durante la migración:', error);
  process.exit(1);
});
