// ============================================================
// scripts/migrar-historias-timestamp.js
// ------------------------------------------------------------
// Agrega "actualizado_en" a "historias" -- "personajes" y "libros" ya
// la tienen (con ON UPDATE CURRENT_TIMESTAMP, se actualiza sola con
// cualquier UPDATE, sin que la aplicacion tenga que tocarla a mano),
// pero "historias" nunca la tuvo. Hace falta para que el cache de PDF
// por libro (ver "obtenerPdfBaseLibro" en routes/pdf.js) sepa cuando
// una historia cambio de contenido, sin importar si el cambio vino de
// una ruta del admin o de un UPDATE directo contra la base (el patron
// mas comun en este proyecto, ver los scripts "ampliar-*"/"agregar-*").
//
// Es idempotente: revisa INFORMATION_SCHEMA antes de alterar la tabla,
// se puede correr mas de una vez sin problema.
//
// Importante: al agregar la columna con DEFAULT CURRENT_TIMESTAMP,
// TODAS las filas existentes quedan marcadas con la fecha en que se
// corre esta migracion, no con su fecha real de ultima edicion -- no
// afecta la logica del cache (que solo compara contra el archivo
// cacheado, no le importa la fecha exacta), pero significa que la
// primera vez que se pida el PDF de cada libro despues de correr esto
// se va a regenerar el cache una vez mas de lo estrictamente
// necesario. Sin costo real: es exactamente el mismo comportamiento
// que la primera descarga despues de cualquier deploy.
//
// COMO CORRERLO (desde backend/):
//   node scripts/migrar-historias-timestamp.js
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
  console.log('Migrando "historias.actualizado_en"...\n');

  if (await existeColumna('historias', 'actualizado_en')) {
    console.log('  - La columna "actualizado_en" ya existe en "historias", no se toca nada.');
  } else {
    await pool.query(
      `ALTER TABLE historias
       ADD COLUMN actualizado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
       ON UPDATE CURRENT_TIMESTAMP AFTER creado_en`
    );
    console.log('  - Columna "actualizado_en" agregada a "historias".');
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
