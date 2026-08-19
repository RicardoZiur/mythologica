// ============================================================
// scripts/migrar-proximos-libros.js
// ------------------------------------------------------------
// Crea la tabla "proximos_libros": la lista de mitologias/temas que
// se van a convertir en libros mas adelante, mostrada como "vitrina"
// atenuada en el landing (ver frontend/js/landing.js) y administrable
// desde frontend/admin/proximos.html. No tiene relacion con la tabla
// "libros" real -- estos todavia no existen como libro comprable, son
// solo un anuncio de que viene despues.
//
// Idempotente como el resto de los scripts de este proyecto: se
// puede correr mas de una vez sin romper nada. La primera vez que
// crea la tabla, la deja sembrada con los 10 que ya se mostraban fijos
// en el HTML, para que el cambio a datos dinamicos no borre nada de
// lo que ya se veia en el sitio.
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/migrar-proximos-libros.js
// ============================================================

const pool = require('../config/db');

async function existeTabla(nombreTabla) {
  const [filas] = await pool.query(
    `SELECT COUNT(*) AS total FROM INFORMATION_SCHEMA.TABLES
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?`,
    [nombreTabla]
  );
  return filas[0].total > 0;
}

const SEED = [
  ['Azteca', 'Dioses del sol, la guerra y el sacrificio'],
  ['Maya', 'Calendarios, el inframundo y las profecías del tiempo'],
  ['Japonesa', 'Kami, espíritus y los mitos del sol naciente'],
  ['China', 'Dragones, emperadores celestiales y el equilibrio del cosmos'],
  ['Celta', 'Druidas, hadas y los ciclos del Otro Mundo'],
  ['Mapuche', 'Ngenechen, la machi y los espíritus de la tierra'],
  ['Africana', 'Orishas, ancestros y las mitologías del continente'],
  ['Sumeria', 'Los primeros dioses y el mito más antiguo del mundo'],
  ['Demonología', 'Jerarquías infernales y las bestias del inframundo'],
  ['Angelología', 'Coros celestiales y los mensajeros entre mundos']
];

async function main() {
  console.log('Migración de proximos_libros: empezando...\n');

  if (await existeTabla('proximos_libros')) {
    console.log('  - Tabla "proximos_libros" ya existía.');
    process.exit(0);
  }

  await pool.query(`
    CREATE TABLE proximos_libros (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(80) NOT NULL,
      descripcion VARCHAR(200) NOT NULL,
      orden INT NOT NULL DEFAULT 0,
      activo TINYINT(1) NOT NULL DEFAULT 1,
      creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log('  - Tabla "proximos_libros" creada.');

  for (let i = 0; i < SEED.length; i++) {
    const [nombre, descripcion] = SEED[i];
    await pool.query(
      'INSERT INTO proximos_libros (nombre, descripcion, orden) VALUES (?, ?, ?)',
      [nombre, descripcion, i]
    );
  }
  console.log(`  - ${SEED.length} filas sembradas.`);

  console.log('\nMigración completa.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError durante la migración:', error);
  process.exit(1);
});
