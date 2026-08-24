// ============================================================
// scripts/ampliar-personajes-mapuche-parte1.js
// ------------------------------------------------------------
// Amplia titanes/primordiales (5) y dioses (15) de Mitologia
// Mapuche con un parrafo extra en descripcion_larga -- datos
// reales adicionales (etimologia mapudungun, practicas vigentes,
// debates academicos) que no estaban cubiertos en el seed
// original. Simbolos/poderes/familia ya fueron poblados por
// sembrar-detalles-mapuche.js, asi que este script NO los toca.
// Idempotente (chequea si el extra ya esta presente antes de
// agregarlo).
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-mapuche-parte1.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- TITANES / PRIMORDIALES ---
  'trentren-vilu': `Distintas comunidades del centro-sur de Chile señalan lugares reales concretos como escenario de esta lucha primordial, entre ellos el cerro Ñielol, en pleno Temuco, popularmente asociado a la elevación de la tierra que salvó a los sobrevivientes de la inundación. Tras los grandes terremotos y tsunamis de 1960 y 2010, ambos con epicentro frente a las costas del sur de Chile, algunas comunidades mapuche-huilliche recurrieron explícitamente a esta antigua rivalidad entre Trentren Vilu y Caicai Vilu como marco para interpretar y procesar colectivamente la catástrofe.`,
  antu: `Existe un debate académico genuino sobre si Antü constituye realmente una divinidad independiente o si se trata más bien de un aspecto o manifestación del propio Ngenechen dentro del cielo (Wenu Mapu), reflejando la tendencia general de la cosmovisión mapuche a fusionar entidades de apariencia distinta dentro de un mismo principio superior en lugar de tratarlas como dioses estrictamente separados entre sí.`,
  kuyen: `Sus fases siguen guiando ciertas prácticas agrícolas tradicionales todavía vigentes en comunidades rurales mapuche, como sembrar tubérculos durante la luna menguante. Los eclipses lunares se explicaban tradicionalmente como un ataque contra Kuyen, y ante ellos era costumbre documentada hacer ruido —gritos, golpes de utensilios— para "ayudarla" a recuperarse y ahuyentar a quien intentaba devorarla.`,
  wangulen: `El término también se usa de forma general para "estrella" en mapudungun, y ciertas constelaciones conservan nombres y relatos propios dentro de esta misma familia de espíritus estelares; el grupo de las Pléyades, en particular, funciona tradicionalmente como marcador de un calendario agrícola y ceremonial, señalando la proximidad del We Tripantu, el año nuevo mapuche que coincide con el solsticio de invierno.`,
  pillan: `La palabra "pillán" se usa además de forma genérica en mapudungun para referirse al espíritu que habita dentro de cada volcán activo en particular, de modo que, además de la figura primordial, existirían tantos pillanes menores como volcanes en erupción. El volcán Villarrica, uno de los más activos de Chile, se consideraba tradicionalmente una de las moradas más poderosas de un pillán, y algunas comunidades mantuvieron ceremonias dirigidas a él hasta bien entrado el siglo XX.`,

  // --- DIOSES ---
  ngenechen: `Su naturaleza cuádruple —anciano, anciana, joven y joven mujer— refleja de manera directa la estructura ceremonial real de un nguillatún, la gran rogativa mapuche, donde representantes de cada una de estas cuatro etapas de la vida participan activamente del ritual. Algunas machis contemporáneas describen a Ngenechen menos como cuatro personas distintas y más como un único ser cuya completitud exige representar simultáneamente cada etapa de la existencia humana.`,
  fucha: `La palabra "fücha" significa literalmente "anciano" o "esposo" en mapudungun, y dentro de la propia tradición se lo entiende menos como una divinidad individual con relatos propios y más como el aspecto masculino de mayor edad dentro de la totalidad de Ngenechen, reflejo de la reticencia general de la cosmovisión mapuche a separar del todo estos cuatro aspectos en personalidades completamente independientes.`,
  kushe: `De manera equivalente a Fücha, "kushe" significa "anciana" o "esposa" en mapudungun, y el término se sigue empleando hoy como forma de respeto hacia las mujeres mayores dentro de las comunidades mapuche, vinculando directamente la autoridad y sabiduría atribuidas a esta divinidad con el lugar social real que ocupan las ancianas en la vida comunitaria contemporánea.`,
  weche: `"Weche" significa simplemente "joven" o "hombre joven" en mapudungun, y el término sigue usándose activamente hoy en el contexto del movimiento de reivindicación territorial mapuche para referirse a los jóvenes militantes y organizadores comunitarios, una continuidad directa entre el nombre del aspecto divino y el vocabulario político actual.`,
  ulcha: `De modo equivalente a Weche, "ülcha" designa a la "mujer joven" en mapudungun, y se usa hasta hoy con ese mismo sentido cotidiano, reforzando que estos cuatro aspectos de Ngenechen no son tanto personajes narrativos independientes como categorías vivas de la propia lengua y organización social mapuche.`,
  'nuke-mapu': `La expresión "Ñuke Mapu" ("Madre Tierra") sustenta directamente buena parte del activismo territorial mapuche contemporáneo: la "defensa de la Ñuke Mapu" es una consigna habitual dentro del conflicto en curso por las tierras ancestrales de la Araucanía, un ejemplo concreto de cómo este concepto religioso sigue informando la identidad política actual mucho más allá de su origen mitológico.`,
  epunamun: `Su nombre combina "epu" (dos) y "namun" (pie o huella) en mapudungun, una referencia directa a su naturaleza de dos rostros. Antes de emprender una incursión se buscaba tradicionalmente su favor mediante rituales adivinatorios que interpretaban las entrañas de animales sacrificados, una práctica de augurio compartida con otras tradiciones religiosas sudamericanas.`,
  meulen: `"Meulen" significa "remolino" o "torbellino" en mapudungun, y el término sigue empleándose hoy en el Chile rural para describir los pequeños torbellinos de polvo reales, distinguiendo popularmente entre remolinos benévolos —asociados a Meulen— y otros de naturaleza maligna atribuidos a la actividad de algún wekufe, una distinción folclórica que algunas comunidades todavía hacen.`,
  'ngen-mapu': `Forma parte de una categoría más amplia de espíritus "ngen" que, según la cosmovisión mapuche, habitan prácticamente cualquier accidente natural significativo. La agricultura tradicional incluye dejar sin cosechar los primeros frutos de un campo, o realizar una pequeña ofrenda al ngen del propio terreno antes de sembrar, una práctica de reciprocidad comunitaria que perdura en ciertas familias.`,
  'ngen-ko': `Determinados manantiales y pozos de agua se tratan todavía hoy con particular cuidado en comunidades rurales, evitando contaminarlos o comportarse con irrespeto cerca de ellos, por la creencia de que el ngen ko residente podría retirar su protección, secar la fuente o causar enfermedad a quien la trate sin el debido respeto.`,
  'ngen-kura': `Ciertas rocas de gran tamaño, algunas hoy dentro de parques nacionales chilenos, siguen siendo identificadas localmente como moradas de un ngen kura, y se las evita o se les rinde respeto antes de acercarse, una práctica que en ocasiones entra en tensión directa con el desarrollo del turismo en esas mismas áreas protegidas.`,
  'ngen-mawida': `Este concepto sustenta buena parte de la oposición de comunidades tradicionalistas al reemplazo del bosque nativo por plantaciones comerciales de pino y eucalipto, entendido no solo como una pérdida económica o ecológica sino como el desplazamiento directo del propio ngen mawida de su territorio.`,
  'ngen-kutral': `El fuego central de una ruka tradicionalmente no debía apagarse nunca, y se lo trataba con particular respeto —evitando escupirlo o pasar por encima de él—, en la creencia de que el propio ngen kütral habitaba en su interior y protegía con su presencia constante a toda la familia reunida a su alrededor.`,
  millalobo: `"Milla" significa "oro" en mapudungun, mientras que "lobo" proviene directamente del español (por el lobo marino). Forma parte específicamente del ciclo mitológico de Chiloé, el archipiélago al sur del territorio mapuche continental, de tradición huilliche-chilota sincrética, junto a otras figuras como el Trauco, la Pincoya, la Fiura y el Caleuche.`,
  pincoya: `Se dice que si baila de cara al mar anuncia abundancia de peces y mariscos, mientras que si baila de cara a la tierra anuncia escasez, una creencia que algunos pescadores tradicionales de Chiloé todavía mencionan al decidir cuándo y dónde faenar. Su figura es hoy uno de los símbolos culturales más reconocibles del archipiélago, reconocido dentro de su patrimonio cultural.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-mapuche'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-mapuche".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando titanes y dioses de Mitologia Mapuche (parte 1)...\n');
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
