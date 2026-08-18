// ============================================================
// scripts/migrar-status-detail.js
// ------------------------------------------------------------
// Agrega "status_detail" a "pedidos" y "pagos": el motivo especifico
// que da Mercado Pago para el estado de un pago (ej.
// "cc_rejected_insufficient_amount", "cc_rejected_call_for_authorize")
// -- "estado" (aprobado/pendiente/rechazado) ya lo teniamos, pero esa
// es nuestra version simplificada de 3 valores; status_detail es el
// dato real de MercadoPago para diagnosticar POR QUE se rechazo un
// pago puntual (ver frontend/admin/pagos.html).
//
// Idempotente como el resto de los scripts de este proyecto: se
// puede correr mas de una vez sin romper nada.
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/migrar-status-detail.js
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

async function agregarColumnaSiFalta(nombreTabla, nombreColumna, definicionSql) {
  if (await existeColumna(nombreTabla, nombreColumna)) {
    console.log(`  - "${nombreTabla}.${nombreColumna}" ya existía.`);
    return;
  }
  await pool.query(`ALTER TABLE ${nombreTabla} ADD COLUMN ${nombreColumna} ${definicionSql}`);
  console.log(`  - Columna "${nombreTabla}.${nombreColumna}" agregada.`);
}

async function main() {
  console.log('Migración de status_detail: empezando...\n');
  await agregarColumnaSiFalta('pedidos', 'status_detail', 'VARCHAR(60) NULL');
  await agregarColumnaSiFalta('pagos', 'status_detail', 'VARCHAR(60) NULL');
  console.log('\nMigración completa.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError durante la migración:', error);
  process.exit(1);
});
