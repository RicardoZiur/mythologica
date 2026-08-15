// ============================================================
// scripts/migrar-recuperacion-password.js
// ------------------------------------------------------------
// Agrega a "usuarios" lo necesario para "olvidé mi contraseña":
// un token de un solo uso con vencimiento, igual en espíritu al
// de verificación de email (ver migrar-seguridad.js) pero en sus
// propias columnas porque son cosas distintas (un usuario podría
// tener un link de verificación Y uno de recuperación vivos al
// mismo tiempo).
//
// Idempotente como el resto de los scripts de este proyecto: se
// puede correr mas de una vez sin romper nada.
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/migrar-recuperacion-password.js
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
  console.log('Migración de recuperación de contraseña: empezando...\n');

  await agregarColumnaSiFalta('usuarios', 'token_recuperacion', 'VARCHAR(64) NULL');
  await agregarColumnaSiFalta('usuarios', 'token_recuperacion_expira', 'DATETIME NULL');

  console.log('\nMigración completa.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError durante la migración:', error);
  process.exit(1);
});
