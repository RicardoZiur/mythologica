// ============================================================
// scripts/migrar-descuentos.js
// ------------------------------------------------------------
// Crea la tabla "descuentos" (códigos de descuento + descuentos
// generales automáticos, ver frontend/admin/descuentos.html) y le
// agrega a "pagos" la columna "descuento_id" para dejar trazabilidad
// de que descuento se uso en cada compra.
//
// Un descuento puede aplicar a UN libro (libro_id apunta a esa fila
// de "libros") o a TODOS (libro_id = NULL). Los de tipo "general" no
// llevan codigo (codigo = NULL); MySQL permite varios NULL en una
// UNIQUE KEY, asi que eso no choca entre si -- solo los codigos de
// texto (tipo "codigo") tienen que ser unicos.
//
// Idempotente como el resto de los scripts de este proyecto (ver
// migrar-pagos.js/migrar-multi-libro.js): se puede correr mas de una
// vez sin romper nada.
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/migrar-descuentos.js
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

async function migrarTablaDescuentos() {
  if (await existeTabla('descuentos')) {
    console.log('  - Tabla "descuentos" ya existía.');
    return;
  }

  await pool.query(`
    CREATE TABLE descuentos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      tipo ENUM('codigo','general') NOT NULL,
      codigo VARCHAR(50) NULL,
      porcentaje TINYINT UNSIGNED NOT NULL,
      libro_id INT NULL,
      activo TINYINT(1) NOT NULL DEFAULT 1,
      creado_por INT NULL,
      creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE KEY uniq_codigo (codigo),
      FOREIGN KEY (libro_id) REFERENCES libros(id) ON DELETE CASCADE,
      FOREIGN KEY (creado_por) REFERENCES usuarios(id) ON DELETE SET NULL
    )
  `);
  console.log('  - Tabla "descuentos" creada.');
}

async function migrarColumnaDescuentoEnPagos() {
  if (await existeColumna('pagos', 'descuento_id')) {
    console.log('  - Columna "pagos.descuento_id" ya existía.');
    return;
  }

  await pool.query(`
    ALTER TABLE pagos
    ADD COLUMN descuento_id INT NULL,
    ADD FOREIGN KEY (descuento_id) REFERENCES descuentos(id) ON DELETE SET NULL
  `);
  console.log('  - Columna "pagos.descuento_id" agregada.');
}

async function main() {
  console.log('Migración de descuentos: empezando...\n');
  await migrarTablaDescuentos();
  await migrarColumnaDescuentoEnPagos();
  console.log('\nMigración completa.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError durante la migración:', error);
  process.exit(1);
});
