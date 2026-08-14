// ============================================================
// scripts/migrar-seguridad.js
// ------------------------------------------------------------
// Agrega a "usuarios" lo necesario para:
//   1. Verificacion de email (email_verificado, token_verificacion,
//      token_verificacion_expira).
//   2. Bloqueo temporal por intentos de login fallidos
//      (intentos_fallidos, bloqueado_hasta).
//
// No hace falta una tabla aparte: cada usuario tiene a lo sumo un
// token de verificacion "vivo" a la vez (uno nuevo pisa al anterior
// si se reenvia).
//
// Idempotente como el resto de los scripts de este proyecto (ver
// migrar-multi-libro.js, migrar-pagos.js): se puede correr mas de
// una vez sin romper nada.
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/migrar-seguridad.js
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
  console.log('Migración de seguridad: empezando...\n');

  console.log('1. Verificación de email');
  const columnaNueva = !(await existeColumna('usuarios', 'email_verificado'));
  await agregarColumnaSiFalta('usuarios', 'email_verificado', 'TINYINT(1) NOT NULL DEFAULT 0');
  await agregarColumnaSiFalta('usuarios', 'token_verificacion', 'VARCHAR(64) NULL');
  await agregarColumnaSiFalta('usuarios', 'token_verificacion_expira', 'DATETIME NULL');

  // Los usuarios que ya existian antes de esta migracion (vos, y las
  // cuentas de prueba que ya veniamos usando) quedan marcados como
  // verificados de una: ya "probaron" ser reales usando la app antes
  // de que existiera este chequeo. Solo los registros NUEVOS de aca
  // en adelante van a tener que verificar el email.
  if (columnaNueva) {
    const [resultado] = await pool.query('UPDATE usuarios SET email_verificado = 1');
    console.log(`  - ${resultado.affectedRows} usuario(s) existente(s) marcados como verificados (no tienen que re-verificar).`);
  }

  console.log('\n2. Bloqueo por intentos fallidos de login');
  await agregarColumnaSiFalta('usuarios', 'intentos_fallidos', 'INT NOT NULL DEFAULT 0');
  await agregarColumnaSiFalta('usuarios', 'bloqueado_hasta', 'DATETIME NULL');

  console.log('\nMigración completa.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError durante la migración:', error);
  process.exit(1);
});
