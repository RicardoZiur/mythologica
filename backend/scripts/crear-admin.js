// ============================================================
// scripts/crear-admin.js
// ------------------------------------------------------------
// Crea (o actualiza) tu cuenta de administrador. Es la UNICA forma
// de conseguir una cuenta con rol "admin": el formulario publico de
// registro (/api/auth/registro) solo crea cuentas de "lector", a
// proposito, para que nadie pueda auto-asignarse permisos de admin.
//
// Un admin no necesita filas en "accesos": el rol "admin" ya da
// acceso total a cualquier libro (ver tieneNivel en middleware/auth.js).
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/crear-admin.js "Tu Nombre" tu@email.com tuPasswordSegura
// ============================================================

const bcrypt = require('bcryptjs');
const pool = require('../config/db');

async function main() {
  const [nombre, email, password] = process.argv.slice(2);

  if (!nombre || !email || !password) {
    console.log('Uso: node scripts/crear-admin.js "Tu Nombre" tu@email.com tuPasswordSegura');
    process.exit(1);
  }
  if (password.length < 8) {
    console.log('La contraseña debe tener al menos 8 caracteres.');
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const [existente] = await pool.query('SELECT id FROM usuarios WHERE email = ?', [email]);

  if (existente.length > 0) {
    await pool.query(
      `UPDATE usuarios SET nombre = ?, password_hash = ?, rol = 'admin' WHERE email = ?`,
      [nombre, passwordHash, email]
    );
    console.log(`Cuenta existente actualizada a administrador: ${email}`);
  } else {
    await pool.query(
      `INSERT INTO usuarios (nombre, email, password_hash, rol)
       VALUES (?, ?, ?, 'admin')`,
      [nombre, email, passwordHash]
    );
    console.log(`Cuenta de administrador creada: ${email}`);
  }

  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
