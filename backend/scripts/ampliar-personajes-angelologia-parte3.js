// ============================================================
// scripts/ampliar-personajes-angelologia-parte3.js
// ------------------------------------------------------------
// Amplia mortales (5) de Angelologia con un parrafo extra en
// descripcion_larga. Mismo criterio que
// ampliar-personajes-angelologia-parte1.js -- ver ese archivo para
// el detalle del patron. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-angelologia-parte3.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  'pseudo-dionisio-areopagita': `Su obra "La Jerarquía Celestial", de fines del siglo V o comienzos del VI, estableció la enormemente influyente clasificación de nueve órdenes angelicales (Serafines, Querubines, Tronos, Dominaciones, Virtudes, Potestades, Principados, Arcángeles y Ángeles) todavía citada hoy como esquema de referencia estándar, pese a haber sido escrita siglos después de la figura bíblica real (Dionisio el Areopagita, converso del siglo I mencionado en Hechos 17:34) a la que se le atribuyó falsamente durante más de mil años. El propio prefijo "pseudo" refleja que la erudición moderna confirmó ese caso de autoría equivocada sostenido durante siglos.`,
  'tomas-de-aquino': `Dedicó una extensa sección de su "Summa Theologica" específicamente a los ángeles (a la que informalmente se llama su "angelología" o "tratado sobre los ángeles"), abordando preguntas escolásticas célebremente abstractas como si varios ángeles pueden ocupar el mismo lugar y cómo funciona el conocimiento y la comunicación angelical sin cuerpo físico. La popular caricatura posterior —y en gran medida apócrifa— de los eruditos medievales "debatiendo cuántos ángeles caben en la cabeza de un alfiler" se asocia ampliamente, aunque de forma inexacta, con este cuerpo de angelología tomista.`,
  'emanuel-swedenborg': `Fue un científico e inventor sueco del siglo XVIII con logros científicos y de ingeniería genuinamente considerables antes de que comenzaran sus visiones religiosas pasados los cincuenta años, tras lo cual escribió extensamente (en latín) sobre conversaciones detalladas con ángeles y viajes por el cielo y el infierno. Sus seguidores fundaron la Nueva Iglesia (Iglesia Swedenborgiana), todavía activa hoy, y su angelología influyó directamente en movimientos esotéricos y espiritistas posteriores, así como en figuras literarias como William Blake y Jorge Luis Borges, ambos admiradores declarados de su obra.`,
  'john-dee': `Astrónomo de corte y asesor de la reina Isabel I de Inglaterra, dedicó después años a la "magia enoquiana", un supuesto lenguaje angelical y sistema de comunicación ritual que afirmaba recibir a través de su vidente Edward Kelley usando una "piedra de visión" de obsidiana (un artefacto azteca hoy conservado en el Museo Británico). Sus diarios angelicales siguen siendo un texto fundacional para tradiciones posteriores de magia ceremonial occidental, incluidos grupos del siglo XIX como la Orden Hermética del Amanecer Dorado.`,
  'gregorio-magno': `Como papa (590-604), escribió extensamente sobre los ángeles en sus homilías, y se le atribuye tradicionalmente haber sistematizado la jerarquía angelical de nueve órdenes para el público latino occidental a partir del original griego de Pseudo-Dionisio, contribuyendo a consolidarla como esquema de referencia estándar en la teología y el arte cristiano occidental durante el milenio siguiente. También se le atribuye históricamente, mediante una anécdota célebre aunque probablemente apócrifa, el juego de palabras "non Angli, sed Angeli" ("no anglos, sino ángeles") al ver esclavos ingleses en un mercado romano, episodio que habría inspirado su misión de evangelizar Inglaterra.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'angelologia'");
  if (filas.length === 0) throw new Error('No existe el libro "angelologia".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando mortales de Angelologia (parte 3)...\n');
  const libroId = await obtenerLibroId();
  const [filas] = await pool.query('SELECT id, slug, nombre FROM personajes WHERE libro_id = ?', [libroId]);
  const porSlug = {};
  filas.forEach(f => { porSlug[f.slug] = f; });

  for (const [slug, extra] of Object.entries(DATOS)) {
    const personaje = porSlug[slug];
    if (!personaje) {
      console.log(`  ! Personaje "${slug}" no encontrado, se salta.`);
      continue;
    }
    const [[fila]] = await pool.query('SELECT descripcion_larga FROM personajes WHERE id = ?', [personaje.id]);
    if (fila.descripcion_larga.includes(extra.slice(0, 40))) {
      console.log(`  - "${personaje.nombre}" ya ampliado.`);
      continue;
    }
    const nueva = `${fila.descripcion_larga}\n\n${extra}`;
    await pool.query('UPDATE personajes SET descripcion_larga = ? WHERE id = ?', [nueva, personaje.id]);
    console.log(`  - "${personaje.nombre}" ampliado.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
