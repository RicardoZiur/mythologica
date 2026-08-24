// ============================================================
// scripts/ampliar-personajes-mapuche-parte3.js
// ------------------------------------------------------------
// Amplia mortales (5) de Mitologia Mapuche con un parrafo extra
// en descripcion_larga. Mismo criterio que
// ampliar-personajes-mapuche-parte1.js -- ver ese archivo para el
// detalle del patron. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-mapuche-parte3.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  manil: `Fue el toqui real que a mediados del siglo XIX encabezó un prolongado esfuerzo por unificar a distintas parcialidades mapuche en una confederación más amplia, con el fin de resistir el avance del Estado chileno y argentino a ambos lados de la cordillera, anticipando por varias décadas las campañas de la "Pacificación de la Araucanía" que comenzarían en la década de 1860.`,
  quilapan: `Hijo de Mañil, continuó los esfuerzos de resistencia de su padre y lideró fuerzas mapuche durante las propias campañas militares de la "Pacificación de la Araucanía" (décadas de 1860 a 1880), la fase final de resistencia armada organizada antes de la pérdida definitiva del territorio independiente al sur del río Biobío.`,
  tucapel: `El sitio del fuerte y la batalla donde murió Pedro de Valdivia en 1553 sigue conmemorándose hasta hoy: la actual comuna chilena de Tucapel, en la Región del Biobío, lleva directamente su nombre.`,
  rengo: `Su nombre en español puede significar literalmente "cojo" o "rengueante", aunque no está claro si refleja un rasgo físico real o fue simplemente asignado por los cronistas españoles. Aparece registrado junto a Lautaro y líderes posteriores a lo largo de varias campañas sucesivas de la Guerra de Arauco, lo que sugiere, según algunos historiadores, que "Rengo" pudo funcionar en parte como un título heredado y transmitido entre distintos líderes a lo largo del tiempo, más que como el nombre de una sola persona.`,
  lientur: `Quedó registrado históricamente por una táctica de emboscada específica y bien documentada: atraer a la caballería española en persecución hacia pasos boscosos angostos (los "esteros"), donde los caballos perdían maniobrabilidad. Los propios informes militares españoles de la época citaban explícitamente esta táctica como una amenaza recurrente y efectiva durante los levantamientos mapuche de la década de 1650.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-mapuche'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-mapuche".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando mortales de Mitologia Mapuche (parte 3)...\n');
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
