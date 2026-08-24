// ============================================================
// scripts/ampliar-personajes-celta-parte2.js
// ------------------------------------------------------------
// Amplia heroes (10) y monstruos (12) de Mitologia Celta con un
// parrafo extra en descripcion_larga. Mismo criterio que
// ampliar-personajes-celta-parte1.js -- ver ese archivo para el
// detalle del patron. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-celta-parte2.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- HEROES ---
  'cu-chulainn': `Nació con el nombre Sétanta, y solo lo cambió tras matar accidentalmente al perro guardián del herrero Culann, ofreciéndose a ocupar su lugar como guardián personal hasta que se criara un cachorro de reemplazo —de ahí "Cú Chulainn", "el sabueso de Culann". Entrenado en el arte de las armas por la guerrera Scáthach en la Isla de Skye, allí engendró un hijo, Connla, con la propia hermana rival de su maestra, Aífe; años después, sin reconocerlo, terminaría matándolo en combate singular, una de las mayores tragedias del Ciclo del Ulster.`,
  'fionn-mac-cumhaill': `El folclore de toda Irlanda y Escocia le atribuye la creación de accidentes geográficos enteros, el más famoso de ellos la Calzada del Gigante, en la costa norirlandesa, que según la tradición popular construyó como puente de piedra para enfrentarse al gigante escocés Benandonner. Numerosos lugares de Irlanda afirman ser el sitio exacto donde Fionn y los guerreros de la Fianna duermen bajo tierra, aguardando el momento de mayor necesidad de Irlanda para despertar y regresar a defenderla.`,
  'diarmuid-ua-duibhne': `Llevaba oculta bajo el cabello una marca de nacimiento llamada "ball seirce" (la mancha del amor), que hacía enamorarse instantáneamente a cualquier mujer que la viera por casualidad —origen directo de la persecución de Gráinne. Murió por la herida de un jabalí encantado (su propio hermanastro transformado), pese a que Fionn poseía la capacidad de curarlo con agua recogida en sus manos; dejó que el agua se escurriera entre sus dedos dos veces por celos antes de decidirse, demasiado tarde, a intentar salvarlo.`,
  oisin: `Tras pasar trescientos años en Tír na nÓg junto a Niamh, regresó a Irlanda y, al poner un pie en tierra firme, envejeció de golpe hasta convertirse en un anciano frágil, pues el tiempo que no había transcurrido para él allí se le vino encima de una sola vez. En versiones posteriores, ya cristianizadas, se le representa dialogando con san Patricio sobre el contraste entre los valores paganos de la Fianna y los nuevos valores cristianos, un texto conocido como "Agallamh na Seanórach" (el Coloquio de los Ancianos).`,
  deirdre: `El druida Cathbad profetizó en su nacimiento que su extraordinaria belleza traería la ruina al Ulster, por lo que fue criada en aislamiento total para convertirse en la esposa del rey Conchobar; al enamorarse en cambio de Naoise, huyó con él a Escocia durante años, hasta que Conchobar los engañó para que regresaran y ordenó su muerte. Su historia se cuenta entre las "Tres Penas de la Narración" de la tradición irlandesa, junto a la de los Hijos de Lir y la de los Hijos de Tuireann.`,
  etain: `Convertida en mosca por la magia celosa de Fúamnach, la primera esposa de Midir, fue arrastrada por el viento durante siete años hasta caer en la copa de una reina mortal, quien sin saberlo la tragó junto a su bebida; Étaín renació así como una niña humana más de mil años después, sin memoria alguna de su vida anterior como diosa. Midir tuvo que reconquistarla por segunda vez, esta vez de su esposo mortal Eochaid, mediante una partida de fidchell (el ajedrez celta) cuya apuesta secreta era un beso.`,
  'bran-mac-febail': `Su viaje, narrado en el antiguo relato "Immram Brain", comenzó tras la visita de una misteriosa mujer del Otro Mundo que le mostró una rama de plata florecida y lo invitó a Emain Ablach. Al regresar a Irlanda tras lo que a ellos les había parecido apenas un año, uno de sus tripulantes saltó impaciente a tierra y se desintegró instantáneamente en polvo, pues en realidad habían transcurrido siglos enteros desde su partida.`,
  pwyll: `Antes del pacto que le dio su título, Pwyll ofendió gravemente a Arawn al robarle sin saberlo un ciervo ya cazado por su jauría sobrenatural, los Cŵn Annwn —perros blancos de orejas rojas que anuncian la muerte—, apartando de él a sus propios sabuesos para quedarse con la presa. Ese desaire fue precisamente lo que llevó a Arawn a proponerle el intercambio de un año que terminaría dándole a Pwyll el título honorífico de "Pwyll Pen Annwn".`,
  branwen: `Casada con el rey irlandés Matholwch para sellar la paz entre Gales e Irlanda, fue maltratada tras la boda y envió un mensaje atado a la pata de un estornino, criado por ella misma, para pedir auxilio a su hermano Brân. Este, un gigante capaz de vadear el mar de Irlanda a pie, desató una guerra catastrófica que dejó con vida solo a cinco mujeres irlandesas embarazadas y siete galeses; la cabeza cortada de Brân continuó hablando y festejando junto a sus compañeros durante ochenta años antes de ser enterrada en Londres mirando hacia Francia, como protección mágica de la isla.`,
  culhwch: `Primo del rey Arturo, fue maldecido por su madrastra a no poder casarse con nadie más que con Olwen, hija del gigante Ysbaddaden, quien le impuso una lista de tareas prácticamente imposibles ("anoethau") para conceder su mano, entre ellas cazar al gran jabalí Twrch Trwyth para arrancarle el peine, la navaja y las tijeras escondidos entre sus cerdas. Su relato, "Culhwch y Olwen", es considerado una de las primeras historias artúricas conservadas en lengua galesa, incluida en el Mabinogion.`,

  // --- MONSTRUOS ---
  balor: `Su único ojo era tan destructivo que se necesitaban cuatro hombres para levantar el pesado párpado con un gancho de hierro, y cualquier cosa que quedara a la vista moría al instante. Una profecía advertía que moriría a manos de su propio nieto, por lo que encerró a su hija Ethniu en una torre para impedir que tuviera descendencia; pese a ello, esta concibió a Lugh, quien terminaría cumpliendo la profecía al atravesarle el ojo con una honda durante la Segunda Batalla de Mag Tuired.`,
  dullahan: `Cabalga sobre un caballo negro (o conduce el "coiste bodhar", un carruaje sin conductor) llevando su propia cabeza cortada bajo el brazo, iluminando el camino con un farol hecho de una calavera hueca, y pronuncia en voz alta el nombre de la persona que está a punto de morir. Ninguna cerradura logra impedirle la entrada a la casa donde se detiene, aunque la tradición sostiene que arrojarle un objeto de oro puede hacer que continúe su camino sin llevarse a nadie.`,
  banshee: `Su lamento (caoineadh) está tradicionalmente asociado a determinados apellidos gaélicos antiguos —O'Brien, O'Neill, O'Grady, entre otros—, cuyas familias consideraban un honor, más que una maldición, contar con una banshee propia que anunciara la muerte de uno de los suyos. En Escocia, una figura equivalente conocida como "bean nighe" aparece lavando en un río las ropas ensangrentadas de quien está próximo a morir, en vez de simplemente llorar su pérdida.`,
  sluagh: `Se los describía como "los muertos sin perdón", bandadas de espíritus inquietos que llegaban volando desde el oeste durante la noche y entraban en las casas por cualquier ventana que mirara hacia ese punto cardinal para llevarse el alma de los moribundos. Por esta razón, en las Tierras Altas de Escocia existía la costumbre extendida de mantener siempre cerrada la ventana orientada al oeste en el cuarto de cualquier persona gravemente enferma.`,
  'cu-sith': `Este enorme sabueso feérico de las Tierras Altas escocesas, de pelaje verde oscuro y tamaño comparable al de un ternero, se desplazaba en completo silencio, salvo por tres ladridos espantosos que emitía antes de dar caza a su presa; la tradición advertía que había que refugiarse antes del tercer ladrido, porque después de eso ya era imposible escapar. Se lo consideraba además un guía de almas hacia el Otro Mundo, similar en función a los Cŵn Annwn galeses.`,
  'each-uisge': `Considerado el más peligroso de todos los espíritus acuáticos escoceses, se presentaba como un hermoso caballo manso junto a la orilla de un loch; quien lo montaba quedaba pegado a su piel sin poder soltarse, mientras la criatura se sumergía en las profundidades para ahogarlo y devorarlo, dejando únicamente el hígado flotando en la superficie como único resto. También podía adoptar forma de hombre apuesto para seducir mujeres, delatado solo por restos de algas enredadas en su cabello.`,
  kelpie: `A diferencia del each-uisge, asociado a los lochs profundos, el kelpie se vincula tradicionalmente a ríos y arroyos de corriente rápida, y generaciones de padres escoceses lo emplearon como advertencia para mantener a los niños alejados de las orillas peligrosas. Su leyenda sigue viva hoy de forma monumental: "The Kelpies", en Falkirk, son dos esculturas de acero de treinta metros con forma de cabeza de caballo, la escultura equina más grande del mundo, un homenaje directo a esta criatura.`,
  oilliphéist: `La tradición popular le atribuye haber abierto con su propio cuerpo el cauce del río Shannon, el más largo de Irlanda, mientras huía de un santo local (en algunas versiones, el propio san Patricio) que lo perseguía para expulsarlo de la isla. Forma parte de una tradición irlandesa más amplia de "peists" —grandes gusanos o serpientes monstruosas— a las que se atribuye el origen de numerosos lagos y ríos repartidos por todo el país.`,
  'cichol-gricenchos': `Según el Lebor Gabála Érenn, fue el primer rey conocido de los fomorianos, descrito como carente de piernas útiles desde las rodillas hacia abajo, y lideró la primera resistencia fomoriana contra los colonos de Partholón en la Batalla de Mag Itha, considerada la primera batalla registrada en toda la mitología irlandesa.`,
  afanc: `Esta bestia lacustre del folclore galés causaba inundaciones catastróficas al agitarse violentamente en el agua, y varios lagos de Gales reclaman haber sido su hogar, sobre todo Llyn yr Afanc, en el río Conwy. En algunas versiones del relato, solo pudo ser capturado tras quedarse dormido sobre el regazo de una doncella, momento que los aldeanos aprovecharon para encadenarlo con bueyes y arrastrarlo hasta un lago remoto en las montañas, lejos de cualquier poblado.`,
  puca: `Se le asociaba tradicionalmente con la noche de Samhain (31 de octubre), cuando se creía que escupía o directamente orinaba sobre las moras silvestres que quedaban aún sin cosechar, marcando así el último día seguro del año para recolectarlas. Pese a su fama de embaucador, también podía mostrarse generoso: algunos agricultores dejaban deliberadamente sin cosechar una porción del último campo del año, conocida como "la parte del Púca", como ofrenda para asegurarse una buena cosecha al año siguiente.`,
  abhartach: `Este tirano enano irlandés fue asesinado por un rival, pero regresó de la tumba para beber la sangre de sus antiguos súbditos, obligando a que tuviera que ser abatido por segunda vez con una espada de madera de tejo y enterrado boca abajo bajo una piedra enorme para impedir que resucitara una tercera vez. El propio Bram Stoker investigó este tipo de leyendas irlandesas sobre muertos vivientes antes de escribir "Drácula", y numerosos folcloristas señalan a Abhartach como una de sus posibles influencias directas.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-celta'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-celta".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando heroes y monstruos de Mitologia Celta (parte 2)...\n');
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
