// ============================================================
// scripts/sembrar-personajes-celta-parte3.js
// ------------------------------------------------------------
// Tercer lote de Mitologia Celta: 5 mortales.
// Contenido completo desde el inicio. Idempotente via
// slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-celta-parte3.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  {
    tipo: 'mortal', slug: 'grainne', nombre: 'Gráinne', nombre_griego: 'Gráinne',
    epitetos: 'La Princesa que Huyó de su Propia Boda',
    descripcion_corta: 'Princesa irlandesa que, mediante una geis vinculante, forzó al guerrero Diarmuid a huir con ella la misma noche de su compromiso con Fionn mac Cumhaill.',
    descripcion_larga: `Gráinne era hija del Rey Supremo de Irlanda, Cormac mac Airt, y fue prometida en matrimonio a Fionn mac Cumhaill, líder de los Fianna, ya entrado en años para la época del compromiso. Durante el banquete de celebración del pacto, Gráinne observó a los guerreros reunidos y, según distintas versiones, se sintió decepcionada al comprobar que su futuro esposo le llevaba una diferencia de edad considerable; fue entonces cuando vislumbró accidentalmente el ball seirce, el lunar mágico de amor irresistible oculto bajo el cabello del joven guerrero Diarmuid Ua Duibhne, enamorándose de él de manera instantánea.

Usando una geis, obligación mágica vinculante que ningún guerrero de honor podía rehusar sin consecuencias graves, Gráinne exigió a Diarmuid que la sacara de la fortaleza esa misma noche antes de que el matrimonio con Fionn se consumara. Pese a la lealtad que Diarmuid sentía hacia su líder, la obligación de la geis resultó más fuerte, y ambos huyeron juntos, iniciando una persecución que se prolongaría por años a través de toda Irlanda. Gráinne demostró a lo largo de la huida una determinación y una astucia notables, participando activamente en las estrategias para evadir a las tropas de Fionn en lugar de limitarse al papel de fugitiva pasiva. Tras la muerte de Diarmuid durante la cacería del jabalí mágico —permitida, según se sugiere, por el propio rencor no resuelto de Fionn—, Gráinne, para sorpresa de muchos, terminó reconciliándose con este y convirtiéndose finalmente en su esposa, un giro final del relato que la tradición irlandesa presenta con cierta ambigüedad moral, sin condenarla del todo por la decisión.`,
    origen: 'Hija del Rey Supremo de Irlanda Cormac mac Airt.',
    dominio: 'El amor desafiante y la fuga', naturaleza: 'Princesa mortal de Irlanda', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'naoise', nombre: 'Naoise', nombre_griego: 'Naoise',
    epitetos: 'El Amado de Deirdre',
    descripcion_corta: 'Joven guerrero del Ulster amado por Deirdre, asesinado por orden del rey Conchobar tras una falsa promesa de perdón — su muerte cumplió la profecía de destrucción anunciada al nacer ella.',
    descripcion_larga: `Naoise, hijo de Usnach y hermano mayor de Ainnle y Ardan, era un joven guerrero del Ulster reconocido por su valentía y su atractivo, cualidades que atrajeron directamente el interés de Deirdre, la joven criada en aislamiento por el rey Conchobar mac Nessa con la intención de convertirla en su propia esposa. Al conocerse, Deirdre y Naoise se enamoraron de inmediato, y ella lo convenció de huir juntos a Escocia junto con sus dos hermanos, escapando así del destino que Conchobar tenía planeado para ella.

Durante varios años, Naoise, Deirdre y los hermanos de Naoise vivieron relativamente tranquilos en tierras escocesas, lejos del alcance directo de la corte del Ulster, hasta que Conchobar, aparentando finalmente haber perdonado la afrenta original, envió una invitación formal para que regresaran a Irlanda bajo promesa expresa de seguridad plena. Naoise, pese a las dudas y advertencias de Deirdre —que había tenido visiones inquietantes sobre el desenlace del viaje—, confió en la palabra del rey y aceptó el regreso. La promesa resultó ser una trampa deliberada: en cuanto llegaron a la fortaleza de Conchobar, los hombres del rey atacaron y mataron a Naoise junto a sus dos hermanos, rompiendo con ello uno de los juramentos de hospitalidad y protección más sagrados de la sociedad irlandesa antigua. La traición y muerte de Naoise desencadenaron la ruptura definitiva de varios guerreros del Ulster con su propio rey, quienes abandonaron el reino en señal de protesta por la deshonra cometida, debilitando structuralmente al Ulster en las décadas siguientes.`,
    origen: 'Hijo de Usnach, guerrero del Ulster.',
    dominio: 'La lealtad traicionada', naturaleza: 'Guerrero mortal del Ulster', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'conchobar-mac-nessa', nombre: 'Conchobar mac Nessa', nombre_griego: 'Conchobar mac Nessa',
    epitetos: 'El Rey del Ulster',
    descripcion_corta: 'Rey del Ulster cuya obsesión por Deirdre y traición hacia Naoise fracturaron su propio reino — su muerte llegó años después por una herida antigua reabierta en un ataque de furia.',
    descripcion_larga: `Conchobar mac Nessa gobernó el Ulster durante una de las épocas de mayor esplendor legendario de esa provincia, rodeado de la Rama Roja (Craobh Ruadh), la orden de guerreros de élite que incluía entre sus filas a figuras como Cú Chulainn, su propio sobrino, y Fergus mac Róich, antiguo rey que había cedido el trono a Conchobar mediante una artimaña orquestada por Ness, madre de este. Pese a su prestigio como gobernante, la parte más recordada de su historia es la profundamente sombría relacionada con Deirdre, a quien mandó criar en aislamiento desde su nacimiento con la intención expresa de convertirla en su esposa al llegar a la edad adulta, ignorando por completo su voluntad propia sobre el asunto.

Cuando Deirdre huyó con Naoise en lugar de aceptar el matrimonio planeado, Conchobar dedicó años a idear su regreso, ofreciendo finalmente un perdón falso que utilizó como trampa para asesinar a Naoise y a sus hermanos en cuanto regresaron a Irlanda, un acto de traición que rompió juramentos sagrados de hospitalidad y provocó la deserción de varios de sus mejores guerreros, entre ellos el propio Fergus mac Róich, que se pasó al bando de Connacht en represalia directa. Conchobar murió años más tarde de una manera peculiar: llevaba alojado en el cráneo, desde una batalla anterior, el cerebro petrificado de un enemigo caído, usado como munición de honda según la costumbre guerrera de la época; los médicos le habían advertido que jamás debía alterarse ni montar en cólera, pero al enterarse de la crucifixión de Jesucristo —según la cristianización posterior del relato— entró en tal furia que la vieja herida se reabrió, causando su muerte instantánea.`,
    origen: 'Rey del Ulster, hijo de Ness.',
    dominio: 'El poder real y sus consecuencias trágicas', naturaleza: 'Rey mortal del Ulster', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'medb', nombre: 'Medb', nombre_griego: 'Medb',
    epitetos: 'La Reina Guerrera de Connacht',
    descripcion_corta: 'Poderosa reina de Connacht que invadió el Ulster para robar un toro legendario, desatando la Táin Bó Cúailnge — no aceptaba a ningún esposo que temiera su autoridad.',
    descripcion_larga: `Medb gobernó Connacht como una de las reinas guerreras más poderosas y temidas de toda la tradición irlandesa, célebre por exigir de cualquier esposo una condición muy específica: debía ser un hombre sin celos, sin miedo y sin tacañería, capaz de aceptar plenamente que ella tomara otros amantes según su propia voluntad sin cuestionarla jamás. Su matrimonio con Ailill mac Máta se sostenía precisamente sobre ese acuerdo, aunque no exento de tensiones, como quedó demostrado cuando ambos, discutiendo una noche sobre cuál de los dos poseía mayor riqueza personal, descubrieron que estaban prácticamente igualados en todo salvo en un solo detalle: Ailill poseía un toro blanco extraordinario que Medb no tenía forma de igualar.

Decidida a no quedar por debajo de su esposo en ningún aspecto, Medb organizó una expedición militar masiva para apoderarse del único animal comparable existente en toda Irlanda, el Donn Cúailnge, un toro pardo legendario propiedad de un terrateniente del Ulster que se negó a prestarlo voluntariamente. Esa negativa desató la Táin Bó Cúailnge, "la razzia de las vacas de Cooley", una de las grandes epopeyas del ciclo del Ulster, durante la cual el ejército invasor de Medb se enfrentó una y otra vez al único defensor disponible del Ulster, Cú Chulainn, gracias a que el resto de los guerreros ulaidos permanecían debilitados por una maldición ancestral. Aunque Medb finalmente logró capturar el toro pardo, este terminó enfrentándose y matando al propio toro blanco de Ailill antes de morir él mismo de puro agotamiento, dejando la campaña completa en un empate simbólicamente amargo que no benefició realmente a ninguno de los dos bandos.`,
    origen: 'Reina de Connacht, hija del Rey Supremo Eochaid Feidlech.',
    dominio: 'El poder soberano y la ambición guerrera', naturaleza: 'Reina mortal de Connacht', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'brendan-el-navegante', nombre: 'San Brendan el Navegante', nombre_griego: 'Naomh Bréanainn',
    epitetos: 'El Navegante, Buscador de la Tierra Prometida de los Santos',
    descripcion_corta: 'Monje irlandés que, según la leyenda medieval, navegó siete años por el Atlántico en busca de una isla paradisíaca, encontrando en el camino ballenas gigantes y prodigios sin cuenta.',
    descripcion_larga: `San Brendan, monje y abad irlandés que vivió realmente entre los siglos V y VI, se convirtió con el tiempo en protagonista de una de las leyendas de viaje más influyentes de toda la literatura medieval europea, la Navigatio Sancti Brendani, un relato semi-legendario que mezcla elementos históricos verificables con un imaginario mitológico que bebe directamente de las tradiciones de navegación al Otro Mundo ya presentes en figuras anteriores como Bran mac Febail. Según el relato, Brendan, tras escuchar de otro monje sobre la existencia de una "Tierra Prometida de los Santos" situada en algún punto del océano Atlántico, decidió emprender su búsqueda junto a un grupo reducido de compañeros monjes, embarcados en un currach, la tradicional embarcación irlandesa de cuero curtido sobre armazón de madera.

Durante un viaje que se prolongó, según la tradición, a lo largo de siete años completos, Brendan y sus compañeros encontraron una sucesión de maravillas: una isla que resultó ser en realidad el lomo de una ballena gigantesca dormida, sobre la que celebraron misa de Pascua sin saberlo; columnas de cristal flotando en medio del mar; aves que cantaban salmos con voces angelicales; y finalmente, tras años de búsqueda, la propia Tierra Prometida, una isla de una belleza y una luz extraordinarias de la que regresaron con relatos que se transmitirían durante siglos por toda Europa medieval. La leyenda de Brendan influyó de manera directa en la cartografía europea posterior, con una supuesta "Isla de San Brendan" apareciendo representada en mapas del Atlántico durante siglos, e incluso ha sido citada, sin confirmación histórica definitiva, como posible precedente de un cruce del Atlántico anterior al de los vikingos y muy anterior al de Cristóbal Colón.`,
    origen: 'Monje y abad irlandés histórico, protagonista de una leyenda de navegación medieval.',
    dominio: 'La búsqueda del paraíso a través del mar', naturaleza: 'Monje navegante mortal', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-celta'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-celta" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando mortales de Mitologia Celta (parte 3)...\n');
  const libroId = await obtenerLibroId();

  for (const p of PERSONAJES) {
    const [existente] = await pool.query('SELECT id FROM personajes WHERE slug = ? AND libro_id = ?', [p.slug, libroId]);
    if (existente.length > 0) {
      console.log(`  - Personaje "${p.nombre}" ya existía.`);
      continue;
    }
    await pool.query(
      `INSERT INTO personajes (tipo, nombre, nombre_griego, epitetos, descripcion_corta, descripcion_larga, origen, dominio, naturaleza, slug, es_preview, libro_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [p.tipo, p.nombre, p.nombre_griego, p.epitetos, p.descripcion_corta, p.descripcion_larga, p.origen, p.dominio, p.naturaleza, p.slug, p.es_preview, libroId]
    );
    console.log(`  - Personaje "${p.nombre}" creado.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
