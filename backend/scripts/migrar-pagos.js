// ============================================================
// scripts/migrar-pagos.js
// ------------------------------------------------------------
// Crea la tabla "pagos": un registro por cada intento de compra
// (uno por preferencia de MercadoPago creada). Sirve para tres
// cosas:
//   1. Nunca otorgar acceso sin haber verificado el pago contra la
//      API real de MercadoPago (nunca confiamos en datos que llegan
//      de afuera sin chequear).
//   2. Ser idempotentes: si el webhook de MercadoPago llega mas de
//      una vez para el mismo pago, no procesarlo dos veces.
//   3. Tener algo para auditar/soporte si alguien reclama que pago
//      y no le llego el acceso.
//
// Idempotente como el resto de los scripts de migracion de este
// proyecto (ver migrar-multi-libro.js): se puede correr mas de una
// vez sin romper nada.
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/migrar-pagos.js
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

async function migrarTablaPagos() {
  if (await existeTabla('pagos')) {
    console.log('  - Tabla "pagos" ya existía.');
    return;
  }

  await pool.query(`
    CREATE TABLE pagos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      usuario_id INT NOT NULL,
      libro_id INT NOT NULL,
      nivel_acceso ENUM('flipbook','completo') NOT NULL,
      monto INT NOT NULL,
      moneda VARCHAR(10) NOT NULL DEFAULT 'CLP',
      mercadopago_preference_id VARCHAR(120),
      mercadopago_payment_id VARCHAR(120),
      estado ENUM('pendiente','aprobado','rechazado') NOT NULL DEFAULT 'pendiente',
      creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
      actualizado_en DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
      FOREIGN KEY (libro_id) REFERENCES libros(id) ON DELETE CASCADE
    )
  `);
  console.log('  - Tabla "pagos" creada.');
}

async function main() {
  console.log('Migración de pagos: empezando...\n');
  await migrarTablaPagos();
  console.log('\nMigración completa.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError durante la migración:', error);
  process.exit(1);
});
