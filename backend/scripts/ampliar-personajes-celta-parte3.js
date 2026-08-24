// ============================================================
// scripts/ampliar-personajes-celta-parte3.js
// ------------------------------------------------------------
// Amplia mortales (5) de Mitologia Celta con un parrafo extra en
// descripcion_larga. Mismo criterio que
// ampliar-personajes-celta-parte1.js -- ver ese archivo para el
// detalle del patron. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-celta-parte3.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  grainne: `A diferencia de la mayoría de las heroínas de este ciclo, es ella quien toma la iniciativa: prometida en matrimonio a un Fionn ya anciano, lo rechaza en el propio banquete de bodas y coloca sobre Diarmuid un juramento vinculante (geis) que lo obliga, contra su voluntad, a huir con ella. Años después de la muerte de Diarmuid, terminó casándose finalmente con Fionn, un giro que los propios narradores irlandeses consideraron tan insincero que dio origen a la expresión popular "una reconciliación como la de Gráinne" para describir cualquier paz de conveniencia.`,
  naoise: `Era el mayor de los tres "Hijos de Uisneach", junto a sus hermanos Ardan y Ainnle, ambos asesinados junto a él por la traición del rey Conchobar pese a la palabra de honor dada para su regreso seguro a Irlanda. La muerte de los tres hermanos se cuenta entre las causas directas de la posterior guerra civil entre los propios nobles del Ulster, narrada en textos posteriores del Ciclo del Ulster.`,
  'conchobar-mac-nessa': `Fue concebido gracias a una artimaña de su madre, Ness, quien engañó al druida Cathbad para que este proclamara heredero al trono a cualquier niño que naciera en un día específico, asegurándose así el futuro de su propio hijo. Murió décadas después de una manera singular: por la presión de una "bola cerebral" —el cerebro calcificado de un enemigo muerto en combate, Mesgegra, conservado como trofeo de guerra— que llevaba alojada en el cráneo desde años atrás y que finalmente se desprendió en un momento de furia extrema.`,
  medb: `Como reina de Connacht, desató la Táin Bó Cúailnge (la Razzia de las Vacas de Cooley) simplemente para igualar la riqueza de su esposo Ailill, al descubrir que este poseía un único toro más valioso que la totalidad de su propio ganado. Exigía como condición explícita de cualquier matrimonio una igualdad total de posesiones con su marido, una postura de independencia notablemente inusual para una narración de esta antigüedad. Murió golpeada por un trozo de queso disparado con una honda por su propio sobrino Furbaide, mientras se bañaba en un lago de la isla de Inis Cloithreann.`,
  'brendan-el-navegante': `Fue un monje irlandés real del siglo VI cuya leyenda medieval, la "Navigatio Sancti Brendani", describe un viaje de siete años en un pequeño currach de cuero en busca de la "Isla de los Bienaventurados", durante el cual la tripulación confunde a una ballena gigante con una isla y acampa sobre su lomo para encender una fogata. En 1976, el explorador Tim Severin construyó una réplica exacta de un currach medieval y navegó con ella desde Irlanda hasta Terranova, demostrando que la ruta descrita en la leyenda era técnicamente posible con la tecnología naval de la época de Brendan.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-celta'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-celta".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando mortales de Mitologia Celta (parte 3)...\n');
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
