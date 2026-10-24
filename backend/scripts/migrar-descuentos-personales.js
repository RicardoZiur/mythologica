// ============================================================
// scripts/migrar-descuentos-personales.js
// ------------------------------------------------------------
// Codigos de descuento PERSONALES (ver otorgarRecompensaPrimeraCompra
// en routes/descuentos.js): agrega a "descuentos"
//   - usuario_id: si tiene valor, el codigo solo lo puede usar esa
//     cuenta (y se le aplica solo en su carrito). NULL = codigo comun.
//   - origen: por que se creo ('primera_compra' = regalo despues de la
//     primera compra pagada). Sirve para no regalarlo dos veces.
//
// Idempotente como el resto de los scripts de este proyecto: se puede
// correr mas de una vez sin romper nada.
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/migrar-descuentos-personales.js
// ============================================================

const pool = require('../config/db');

async function existeColumna(nombreTabla, nombreColumna) {
  const [filas] = await pool.query(
    `SELECT COUNT(*) AS total FROM INFORMATION_SCHEMA.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
    [nombreTabla, nombreColumna]
  );
  return filas[0].total > 0;
}

async function main() {
  console.log('Migración de descuentos personales: empezando...\n');

  if (await existeColumna('descuentos', 'usuario_id')) {
    console.log('  - Columna "descuentos.usuario_id" ya existía.');
  } else {
    await pool.query(`
      ALTER TABLE descuentos
      ADD COLUMN usuario_id INT NULL AFTER libro_id,
      ADD FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
    `);
    console.log('  - Columna "descuentos.usuario_id" agregada.');
  }

  if (await existeColumna('descuentos', 'origen')) {
    console.log('  - Columna "descuentos.origen" ya existía.');
  } else {
    await pool.query(`
      ALTER TABLE descuentos
      ADD COLUMN origen VARCHAR(30) NULL AFTER usuario_id,
      ADD INDEX idx_descuentos_usuario_origen (usuario_id, origen)
    `);
    console.log('  - Columna "descuentos.origen" agregada.');
  }

  console.log('\nMigración completa.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError durante la migración:', error);
  process.exit(1);
});
