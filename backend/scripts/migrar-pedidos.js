// ============================================================
// scripts/migrar-pedidos.js
// ------------------------------------------------------------
// Crea la tabla "pedidos" (cabecera de una compra que puede incluir
// varios libros/niveles a la vez, ver el carrito en
// frontend/carrito.html) y le agrega a "pagos" la columna
// "pedido_id": cada fila de "pagos" pasa a ser UN ITEM de un pedido,
// en vez de ser la compra completa como era antes de que existiera
// el carrito (un pedido puede tener una o varias filas de "pagos").
//
// "pedido_id" es NULL-able a proposito: las filas de "pagos" de
// compras viejas (de antes del carrito) se quedan con pedido_id NULL
// sin romper nada -- frontend/admin/pagos.html sigue leyendo "pagos"
// directo, sin depender de esta columna.
//
// Idempotente como el resto de los scripts de este proyecto (ver
// migrar-descuentos.js/migrar-multi-libro.js): se puede correr mas de
// una vez sin romper nada.
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/migrar-pedidos.js
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

async function existeColumna(nombreTabla, nombreColumna) {
  const [filas] = await pool.query(
    `SELECT COUNT(*) AS total FROM INFORMATION_SCHEMA.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?`,
    [nombreTabla, nombreColumna]
  );
  return filas[0].total > 0;
}

async function migrarTablaPedidos() {
  if (await existeTabla('pedidos')) {
    console.log('  - Tabla "pedidos" ya existía.');
    return;
  }

  await pool.query(`
    CREATE TABLE pedidos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      usuario_id INT NOT NULL,
      monto_total INT NOT NULL,
      moneda VARCHAR(10) NOT NULL DEFAULT 'CLP',
      estado ENUM('pendiente','aprobado','rechazado') NOT NULL DEFAULT 'pendiente',
      mercadopago_preference_id VARCHAR(120),
      mercadopago_payment_id VARCHAR(120),
      creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
      actualizado_en DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
    )
  `);
  console.log('  - Tabla "pedidos" creada.');
}

async function migrarColumnaPedidoEnPagos() {
  if (await existeColumna('pagos', 'pedido_id')) {
    console.log('  - Columna "pagos.pedido_id" ya existía.');
    return;
  }

  await pool.query(`
    ALTER TABLE pagos
    ADD COLUMN pedido_id INT NULL,
    ADD FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE
  `);
  console.log('  - Columna "pagos.pedido_id" agregada.');
}

async function main() {
  console.log('Migración de pedidos (carrito): empezando...\n');
  await migrarTablaPedidos();
  await migrarColumnaPedidoEnPagos();
  console.log('\nMigración completa.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError durante la migración:', error);
  process.exit(1);
});
