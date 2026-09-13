// ============================================================
// scripts/migrar-sesion-version.js
// ------------------------------------------------------------
// Agrega "sesion_version" a "usuarios": permite invalidar tokens JWT
// ya emitidos sin guardar una lista de sesiones activas en el
// servidor (el diseño de este proyecto es deliberadamente sin estado
// de sesion, ver el comentario grande en routes/auth.js). Cada token
// lleva la version que tenia el usuario al loguearse ("v" en el
// payload, ver generarSesion); si alguien restablece su contraseña,
// esta columna se incrementa (ver POST /restablecer-password) y
// cualquier token viejo deja de servir en el acto, sin importar
// cuanto le quede de vigencia.
//
// Es idempotente: revisa INFORMATION_SCHEMA antes de alterar la tabla.
//
// Nota: correr esta migracion (o desplegar el codigo que la acompaña)
// invalida de una TODAS las sesiones activas en ese momento -- ningun
// token emitido antes trae "v" en su payload, asi que nunca va a
// coincidir con el valor por defecto (1) de una fila existente. Es
// esperado: todo el mundo tiene que volver a loguearse una vez, el
// costo de fondo de reforzar esto.
//
// COMO CORRERLO (desde backend/):
//   node scripts/migrar-sesion-version.js
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
  console.log('Migrando "usuarios.sesion_version"...\n');

  if (await existeColumna('usuarios', 'sesion_version')) {
    console.log('  - La columna "sesion_version" ya existe en "usuarios", no se toca nada.');
  } else {
    await pool.query('ALTER TABLE usuarios ADD COLUMN sesion_version INT NOT NULL DEFAULT 1');
    console.log('  - Columna "sesion_version" agregada a "usuarios".');
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
