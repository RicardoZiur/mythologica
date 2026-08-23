// ============================================================
// scripts/ampliar-personajes-africana-parte3.js
// ------------------------------------------------------------
// Amplia mortales (5) de Mitologia Africana con un parrafo extra
// en descripcion_larga. Mismo criterio que las partes 1 y 2.
// Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-africana-parte3.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  'balla-fasseke': `Los griots Kouyaté que descienden de su linaje siguen activos hasta hoy en Malí y Guinea, considerados los guardianes oficiales y hereditarios de la epopeya de Sundiata, que transmiten todavía de memoria en representaciones públicas que pueden extenderse durante varias horas continuas. La tradición sostiene que ningún detalle esencial del relato original se ha perdido a lo largo de los siglos, precisamente gracias al riguroso entrenamiento memorístico que cada nueva generación de griots Kouyaté recibe directamente de sus propios mayores.`,
  yennenga: `El Festival Panafricano de Cine de Uagadugú (FESPACO), el evento cinematográfico más importante de todo el continente africano, otorga como su máximo galardón el "Étalon de Yennenga" ("El Semental de Yennenga"), un reconocimiento directo a la propia leyenda fundacional que honra a la princesa guerrera como símbolo nacional de Burkina Faso. Numerosas estatuas y monumentos públicos en Uagadugú, la capital del país, representan a Yennenga montada a caballo, consolidando su imagen como una de las figuras fundacionales más veneradas de toda la región.`,
  'amina-de-zazzau': `Vestigios arqueológicos de las murallas defensivas atribuidas a su reinado, conocidas localmente como "las murallas de Amina", sobreviven parcialmente hasta la actualidad en distintas localidades del norte de Nigeria, y continúan siendo objeto de estudio por parte de arqueólogos interesados en la ingeniería militar de los estados hausa precoloniales. Su figura ha sido honrada en tiempos recientes con una estatua monumental erigida en Abuja, la capital nigeriana, como reconocimiento oficial a su legado histórico como una de las grandes gobernantes guerreras de la región.`,
  'kimpa-vita': `Su movimiento religioso, el antonianismo, continuó existiendo de manera clandestina durante algún tiempo después de su ejecución en 1706, pese a los esfuerzos sostenidos de las autoridades eclesiásticas coloniales por erradicarlo por completo. Historiadores contemporáneos la han reivindicado como una de las primeras figuras conocidas de la historia africana en desafiar abiertamente la autoridad religiosa europea impuesta desde fuera, proponiendo en su lugar una reinterpretación del cristianismo centrada explícitamente en la propia identidad y dignidad del pueblo congolés.`,
  idia: `La máscara de marfil que representa su rostro, conocida internacionalmente como la "Máscara de la Reina Idia", fue seleccionada como símbolo oficial del festival cultural FESTAC 77, celebrado en Lagos en 1977, aunque la pieza original permanecía entonces —y permanece todavía hoy— fuera de Nigeria, en manos del Museo Británico, tras haber sido saqueada durante la expedición punitiva británica de 1897. Su reclamo de repatriación continúa siendo, hasta la actualidad, uno de los casos más citados dentro del debate internacional sobre la restitución de patrimonio cultural africano sustraído durante el periodo colonial.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-africana'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-africana".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando mortales de Mitologia Africana (parte 3)...\n');
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
