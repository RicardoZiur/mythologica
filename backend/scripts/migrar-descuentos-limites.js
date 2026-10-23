// ============================================================
// scripts/migrar-descuentos-limites.js
// ------------------------------------------------------------
// Agrega a "descuentos" dos limites opcionales (ver
// routes/descuentos.js y calcularCarrito en routes/pagos.js):
//   - max_items: a cuantos libros de UNA compra se aplica el codigo
//     (NULL = a todos los del carrito, como antes). Con 1, el
//     descuento va solo al libro mas caro del carrito -- asi "50% en
//     tu primer libro" se cumple aunque el carrito tenga varios.
//   - vence_en: desde cuando el descuento deja de valer (NULL = no
//     vence; se apaga a mano desde el panel, como antes).
//
// Idempotente como el resto de los scripts de este proyecto: se puede
// correr mas de una vez sin romper nada.
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/migrar-descuentos-limites.js
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

async function agregarColumna(nombreColumna, definicion) {
  if (await existeColumna('descuentos', nombreColumna)) {
    console.log(`  - Columna "descuentos.${nombreColumna}" ya existía.`);
    return;
  }
  await pool.query(`ALTER TABLE descuentos ADD COLUMN ${nombreColumna} ${definicion}`);
  console.log(`  - Columna "descuentos.${nombreColumna}" agregada.`);
}

async function main() {
  console.log('Migración de límites de descuentos: empezando...\n');
  await agregarColumna('max_items', 'TINYINT UNSIGNED NULL AFTER libro_id');
  await agregarColumna('vence_en', 'DATETIME NULL AFTER max_items');
  console.log('\nMigración completa.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError durante la migración:', error);
  process.exit(1);
});
