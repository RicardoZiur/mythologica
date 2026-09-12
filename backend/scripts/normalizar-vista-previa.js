// ============================================================
// scripts/normalizar-vista-previa.js
// ------------------------------------------------------------
// Deja exactamente 3 historias y 3 personajes marcados "es_preview"
// (muestra gratuita, visible sin comprar el libro) en CADA libro del
// catalogo -- hoy el valor era inconsistente entre libros: algunos
// tenian bastante mas de 3 (ej. mitologia-japonesa, 11 historias),
// otros tenian de menos o incluso 0 (angelologia no tenia ninguna
// historia de muestra, solo personajes), porque "es_preview" se fijaba
// una sola vez al armar cada libro, a mano, sin una regla comun.
//
// Criterio para elegir cuales 3: las de menor id (orden de insercion),
// que en la practica suele coincidir con las primeras/mas
// fundacionales de cada mitologia (cosmogonia, dioses principales) --
// no hay forma automatica de saber cuales son "las mejores" para
// enganchar a un lector nuevo, asi que este es un default razonable,
// no una curaduria editorial.
//
// Es idempotente: se puede correr las veces que haga falta, siempre
// deja el mismo resultado (3 preview, el resto no).
//
// COMO CORRERLO (desde backend/):
//   node scripts/normalizar-vista-previa.js
// ============================================================

const pool = require('../config/db');

const CANTIDAD_PREVIEW = 3;

async function normalizarTabla(tabla, libroId) {
  const [filas] = await pool.query(`SELECT id FROM ${tabla} WHERE libro_id = ? ORDER BY id ASC`, [libroId]);
  const idsPreview = filas.slice(0, CANTIDAD_PREVIEW).map(f => f.id);
  const idsResto = filas.slice(CANTIDAD_PREVIEW).map(f => f.id);

  if (idsPreview.length > 0) {
    await pool.query(`UPDATE ${tabla} SET es_preview = 1 WHERE id IN (?)`, [idsPreview]);
  }
  if (idsResto.length > 0) {
    await pool.query(`UPDATE ${tabla} SET es_preview = 0 WHERE id IN (?)`, [idsResto]);
  }

  return { total: filas.length, preview: idsPreview.length };
}

async function main() {
  console.log(`Dejando ${CANTIDAD_PREVIEW} historias y ${CANTIDAD_PREVIEW} personajes de muestra gratuita por libro...\n`);

  const [libros] = await pool.query('SELECT id, slug, titulo FROM libros ORDER BY slug ASC');

  for (const libro of libros) {
    const historias = await normalizarTabla('historias', libro.id);
    const personajes = await normalizarTabla('personajes', libro.id);
    console.log(`  - ${libro.titulo}: historias ${historias.preview}/${historias.total} en muestra, personajes ${personajes.preview}/${personajes.total} en muestra`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
