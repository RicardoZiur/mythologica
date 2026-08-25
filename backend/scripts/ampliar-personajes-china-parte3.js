// ============================================================
// scripts/ampliar-personajes-china-parte3.js
// ------------------------------------------------------------
// Amplia mortales (5) de Mitologia China con un parrafo extra en
// descripcion_larga. Mismo criterio que
// ampliar-personajes-china-parte1.js -- ver ese archivo para el
// detalle del patron. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-china-parte3.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  'meng-jiangnu': `Su historia se cuenta entre los Cuatro Grandes Relatos Populares de China. Sitios concretos a lo largo de la Gran Muralla, sobre todo cerca del paso de Shanhaiguan, se promocionan hoy como el "Templo de Meng Jiangnü", un destino real de peregrinación y turismo dedicado a la leyenda. Históricamente, el relato también funcionó como una crítica popular velada al enorme costo humano de las obras de trabajo forzado de la dinastía Qin, dándole un trasfondo político por debajo de su superficie de tragedia romántica.`,
  'zhang-daoling': `Figura histórica real del siglo II de nuestra era, considerado tradicionalmente fundador del Camino de los Maestros Celestiales (Tianshi Dao), el primer movimiento religioso taoísta organizado, a diferencia del taoísmo puramente filosófico anterior. Sus descendientes reclamaron la sucesión hereditaria del título de "Maestro Celestial" durante casi dos mil años, un cargo que continuó, con interrupciones, hasta la Taiwán actual, uno de los títulos religiosos hereditarios más longevos de la historia mundial.`,
  'xu-fu': `Figura histórica real enviada por el primer emperador de China, Qin Shi Huang, en una expedición para hallar el elixir de la inmortalidad, de la que nunca habría regresado. Diversas leyendas posteriores, y parte del folclore japonés, sostienen que en realidad llegó a Japón y se convirtió allí en una figura cultural fundadora; varias localidades japonesas se disputan hoy, sin pruebas históricas sólidas, ser su lugar final de desembarco o sepultura, un ejemplo notable de cómo una figura histórica-legendaria china terminó absorbida dentro del propio folclore fundacional de un país vecino.`,
  'bao-zheng': `Funcionario real de la dinastía Song (999-1062), célebre por su genuina incorruptibilidad y sentido de la justicia como magistrado. Su reputación histórica fue tan sólida que generó después una enorme cantidad de embellecimiento operístico y literario (los relatos de "Bao Gong"), que le añadió elementos sobrenaturales completamente inventados, como juzgar casos que involucraban fantasmas y espíritus de los muertos —un caso poco común de un funcionario civil real y documentado convertido, siglos después de su muerte, en un juez sobrenatural del folclore popular.`,
  'dong-yong': `Su historia de piedad filial —venderse como sirviente para pagar el funeral de su padre— es uno de los "Veinticuatro Ejemplos de Piedad Filial" (二十四孝), una colección compilada en la dinastía Yuan y usada durante siglos en la educación moral tradicional china para enseñar devoción filial a los niños. Esto significa que su relato circuló históricamente menos como fantasía romántica y más como texto didáctico de educación moral, por encima incluso de los elementos de romance con el hada tejedora que hoy se recuerdan más.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-china'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-china".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando mortales de Mitologia China (parte 3)...\n');
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
