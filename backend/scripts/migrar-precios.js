// ============================================================
// scripts/migrar-precios.js
// ------------------------------------------------------------
// Crea la tabla "precios": una sola fila (id = 1) con los dos
// montos que hoy estaban fijos en el codigo (PRECIOS en
// routes/pagos.js) -- "flipbook" (acceso al sitio) y "pdf" (descarga).
// Son globales, los mismos para todos los libros del catalogo; un
// admin los puede cambiar desde frontend/admin/libros.html.
//
// Idempotente como el resto de los scripts de este proyecto (ver
// migrar-descuentos.js): se puede correr mas de una vez sin romper
// nada. Si la tabla ya existe pero esta vacia (no deberia pasar salvo
// que alguien la haya tocado a mano), tambien inserta la fila
// semilla.
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/migrar-precios.js
// ============================================================

const pool = require('../config/db');

// Los mismos valores que tenia el objeto PRECIOS hardcodeado en
// routes/pagos.js antes de esta migracion -- asi el sitio sigue
// cobrando exactamente lo mismo el dia que se corra esto, hasta que
// un admin decida cambiarlos.
const FLIPBOOK_INICIAL = 6640;
const PDF_INICIAL = 9990;

async function existeTabla(nombreTabla) {
  const [filas] = await pool.query(
    `SELECT COUNT(*) AS total FROM INFORMATION_SCHEMA.TABLES
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ?`,
    [nombreTabla]
  );
  return filas[0].total > 0;
}

async function migrarTablaPrecios() {
  if (!(await existeTabla('precios'))) {
    await pool.query(`
      CREATE TABLE precios (
        id INT PRIMARY KEY,
        flipbook INT NOT NULL,
        pdf INT NOT NULL,
        actualizado_por INT NULL,
        actualizado_en DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (actualizado_por) REFERENCES usuarios(id) ON DELETE SET NULL
      )
    `);
    console.log('  - Tabla "precios" creada.');
  } else {
    console.log('  - Tabla "precios" ya existía.');
  }

  const [filas] = await pool.query('SELECT id FROM precios WHERE id = 1');
  if (filas.length === 0) {
    await pool.query(
      'INSERT INTO precios (id, flipbook, pdf) VALUES (1, ?, ?)',
      [FLIPBOOK_INICIAL, PDF_INICIAL]
    );
    console.log(`  - Fila de precios inicial creada (flipbook: ${FLIPBOOK_INICIAL}, pdf: ${PDF_INICIAL}).`);
  } else {
    console.log('  - Fila de precios ya existía.');
  }
}

async function main() {
  console.log('Migración de precios: empezando...\n');
  await migrarTablaPrecios();
  console.log('\nMigración completa.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError durante la migración:', error);
  process.exit(1);
});
