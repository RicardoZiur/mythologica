// ============================================================
// scripts/ampliar-personajes-celta-parte1.js
// ------------------------------------------------------------
// Amplia titanes (5) y dioses (15) de Mitologia Celta con un
// parrafo extra en descripcion_larga -- datos reales adicionales
// (festivales, fuentes medievales, relatos secundarios) que no
// estaban cubiertos en el seed original. Simbolos/poderes/familia
// ya fueron poblados por sembrar-detalles-celta.js, asi que este
// script NO los toca. Idempotente (chequea si el extra ya esta
// presente antes de agregarlo).
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-celta-parte1.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- TITANES ---
  cailleach: `Su figura se identifica con el paisaje real de Escocia e Irlanda de una manera muy directa: la tradición le atribuye haber formado montañas enteras al dejar caer piedras de su cesta, entre ellas picos escoceses como Ben Nevis, y se dice que lava su gran manto en el estrecho de Corryvreckan, generando el remolino marino que lleva ese nombre. En las cosechas de otoño, la última gavilla de grano cortada del campo se conservaba tradicionalmente bajo el nombre de "Cailleach" hasta la siguiente siembra, un ritual agrícola que sobrevivió en zonas rurales de Escocia hasta bien entrado el siglo XX.`,
  ler: `A diferencia de su hijo Manannán, quien terminó opacándolo casi por completo en la tradición posterior, Ler protagoniza escaso relato propio más allá de ser el padre desconsolado de la célebre historia de los Hijos de Lir, transformados en cisnes por su segunda esposa Aoife durante novecientos años repartidos en tres etapas —el lago Derravaragh, el mar de Moyle entre Irlanda y Escocia, y la isla de Inishglora—, hasta recuperar su forma humana al escuchar la campana de un monje cristiano. Una escultura dedicada a esta leyenda preside hoy el Jardín del Recuerdo de Dublín.`,
  eriu: `Junto a sus hermanas Banba y Fódla, Ériu recibió a los invasores milesios exigiendo cada una que la isla llevara su propio nombre; el poeta Amergin les prometió a las tres que así sería, aunque Ériu terminó siendo la que prevaleció en el uso cotidiano, dando origen al nombre moderno "Éire" y, a través del inglés, a "Ireland". Estaba casada con Mac Gréine ("hijo del sol"), uno de los tres últimos reyes de los Tuatha Dé Danann, derrotados precisamente por los milesios cuyo desembarco ella misma presenció.`,
  domnu: `Su nombre deriva de una raíz que significa "abismo" o "profundidad", la misma que da origen al término "Fir Domnann" con que se designaba a un grupo de los propios fomorianos, y se le opone tradicionalmente a Danu como matriarca rival: mientras los Tuatha Dé Danann reclaman su linaje del cielo y la abundancia asociados a Danu, los fomorianos de Domnu representan el caos primordial del mar y las profundidades que precede a cualquier orden establecido.`,
  cesair: `Según el Lebor Gabála Érenn, el gran compendio medieval sobre los orígenes de Irlanda, Cesair llegó a la isla apenas cuarenta días antes del Diluvio Universal, acompañada de cincuenta mujeres y solo tres hombres, entre ellos Fintan mac Bóchra, el único superviviente de toda la expedición. Fintan escapó de las aguas transformándose sucesivamente en salmón, águila y halcón a lo largo de los siglos siguientes, y reaparece como testigo viviente en relatos posteriores de la mitología irlandesa, recordando personalmente cada invasión sucesiva de la isla.`,

  // --- DIOSES ---
  dagda: `Poseía tres tesoros que resumen su doble naturaleza de proveedor y guerrero: un caldero inagotable llamado Undry, capaz de alimentar a cualquier ejército sin vaciarse jamás; una maza tan enorme que debía arrastrarla sobre ruedas, capaz de matar con un extremo y resucitar con el otro; y un arpa llamada Uaithne que, al tocarla, obligaba a las estaciones a sucederse en el orden correcto. Se dice que residía en Newgrange (Brú na Bóinne), el gran túmulo neolítico a orillas del río Boyne, donde según la tradición engendró a Aengus en un solo día tras detener el sol durante nueve meses.`,
  morrigan: `Se le describe a menudo como una divinidad triple, formada junto a Badb y Macha (o, en otras versiones, Nemain), cada una encarnando un aspecto distinto de la guerra y el destino. Antes de una batalla decisiva se aparecía como lavandera junto a un vado, lavando la armadura ensangrentada de los guerreros condenados a morir —un presagio que, según el Táin Bó Cúailnge, ella misma mostró al joven Cú Chulainn poco antes de su muerte. Su unión ritual con el Dagda sobre un río en la víspera de Samhain se interpreta tradicionalmente como el pacto que aseguró la victoria de los Tuatha Dé Danann en la Segunda Batalla de Mag Tuired.`,
  lugh: `Se le conoce como "Samildánach" ("el de todas las artes") por una escena célebre en la que, al llegar a las puertas de Tara, el portero le niega la entrada alegando que ya cuentan con un especialista para cada oficio que Lugh menciona, hasta que este pregunta si tienen a alguien capaz de dominarlos todos a la vez; nadie responde, y se le permite entrar. Su festividad, Lughnasadh (1 de agosto), sigue marcándose hasta hoy en Irlanda mediante celebraciones de cosecha como la Reek Sunday, cristianización directa de los juegos fúnebres que el propio Lugh instituyó en honor a su madre adoptiva Tailtiu.`,
  brigid: `Su culto en Kildare incluía un fuego perpetuo custodiado tradicionalmente por diecinueve sacerdotisas que se turnaban para mantenerlo encendido sin interrupción; tras la cristianización, las monjas del convento de Santa Brígida continuaron la misma práctica durante siglos, hasta su supresión en el siglo XVI, y fue finalmente reencendido en 1993 por las Hermanas Brígidas en el mismo emplazamiento. Las cruces de Santa Brígida, tejidas con juncos en forma de aspa durante la festividad de Imbolc (1 de febrero), se siguen colgando hoy en numerosos hogares irlandeses como protección para el año entrante.`,
  nuada: `Perdió su brazo en la Primera Batalla de Mag Tuired contra los Fir Bolg, y la ley de los Tuatha Dé Danann exigía que ningún rey gobernara con una imperfección física visible, por lo que debió abdicar temporalmente en favor de Bres. Dian Cécht le fabricó el famoso brazo de plata que le permitió recuperar el trono, aunque solo de manera simbólica, hasta que Miach, hijo del propio Dian Cécht, logró hacerle crecer un brazo de carne y hueso genuino —un logro que despertó tal envidia en su padre que este terminó matándolo por ello.`,
  danu: `A diferencia de la mayoría de las divinidades del panteón, no se conserva ningún relato mitológico protagonizado directamente por Danu, y su existencia se infiere principalmente por ser la que da nombre a los Tuatha Dé Danann ("la gente de la diosa Danu"). Su nombre guarda una llamativa semejanza con el de varios grandes ríos europeos —el Danubio, el Don, el Dniéper—, lo que ha llevado a numerosos estudiosos a considerarla una diosa-río de raíz indoeuropea muy anterior a la propia Irlanda, posteriormente identificada con Anu y con las colinas gemelas de Kerry conocidas como "Dá Chích Anann" (los Pechos de Anu).`,
  'manannan-mac-lir': `Poseía una serie de objetos mágicos que reaparecen en numerosos relatos posteriores: un manto de invisibilidad llamado Féth Fíada, un caballo llamado Enbarr capaz de galopar tanto sobre el mar como sobre tierra firme, un barco sin velas llamado Sguaba Tuinne ("barre-olas") que navegaba solo con el pensamiento de su dueño, y una bolsa de grulla que contenía tesoros que aparecían o desaparecían según la marea. La Isla de Man toma su nombre directamente de él, y se le consideraba soberano de Emain Ablach y Tír Tairngire, la Tierra de la Promesa.`,
  ogma: `Se le atribuye la invención del ogham, el antiguo alfabeto irlandés compuesto por líneas talladas sobre el canto de piedras verticales, empleado durante siglos para marcar límites territoriales y conmemorar a los muertos; numerosas piedras ogham originales sobreviven hasta hoy repartidas por Irlanda y Gales. Su equivalente galo, Ogmios, fue descrito por el escritor griego Luciano de Samósata como un anciano que arrastraba tras de sí a un grupo de hombres encadenados por delicadas cadenas que iban de sus propios oídos a la lengua del dios, una imagen que simboliza el poder de la elocuencia por sobre la fuerza bruta.`,
  aengus: `Fue concebido en un único día: el Dagda logró detener el curso del sol durante nueve meses completos para que el marido de Boann, Elcmar, no notara jamás el embarazo. Ya adulto, Aengus le arrebató a Elcmar la residencia de Newgrange pidiéndosela prestada "por un día y una noche", un juego de palabras que aprovechaba la ausencia de artículo indefinido en irlandés antiguo para quedarse con ella de manera permanente. Su historia de amor con Caer Ibormeith, una doncella que se transformaba en cisne cada año, culmina con Aengus transformándose él mismo en cisne para poder estar junto a ella.`,
  'dian-cecht': `Además del brazo de plata que fabricó para Nuada, se le atribuye la creación de un pozo curativo —llamado según las fuentes Loch Sláine o el Pozo de Sláine— en el que sumergía a los guerreros de los Tuatha Dé Danann caídos en batalla, devolviéndolos con vida a la lucha durante la Segunda Batalla de Mag Tuired. Tuvo dos hijos igual de dotados que él en el arte de curar, Miach y Airmed, cuya rivalidad con su propio padre es una de las historias más recordadas de toda la tradición médica irlandesa antigua.`,
  goibniu: `Forjaba armas capaces de no fallar jamás su objetivo y de resultar siempre mortales con solo tres golpes de martillo, un ritmo de trabajo tan veloz que ningún otro herrero podía igualarlo. Junto a Credne, el orfebre, y Luchta, el carpintero, formaba el trío conocido como "na trí dée Dána" (los tres dioses del oficio), encargados de proveer de armamento a los Tuatha Dé Danann antes de la Segunda Batalla de Mag Tuired. Su Fled Goibnenn ("el Festín de Goibniu") ofrecía una cerveza especial que garantizaba a quien la bebiera protección contra la vejez y la enfermedad.`,
  epona: `Es una rareza dentro de la mitología celta: una de las pocas divinidades célticas adoptadas directamente por el propio panteón romano, con un festival oficial fijado el 18 de diciembre en el calendario romano, algo que ninguna otra deidad de origen no romano llegó a alcanzar. Se han hallado cientos de esculturas suyas repartidas por toda la Galia, Britania y Germania, representándola habitualmente sentada de lado sobre un caballo o rodeada de potrillos, un motivo que sugiere su papel como protectora tanto de los caballos como de la caballería militar romana.`,
  cernunnos: `Su nombre solo aparece confirmado en una única inscripción antigua, el llamado Pilar de los Nautas hallado en París, y su imagen más famosa —sentado con las piernas cruzadas, un torque colgando de un cuerno y rodeado de animales— proviene del Caldero de Gundestrup, hallado en Dinamarca. A diferencia de casi cualquier otra figura de este libro, no se conserva ningún relato mitológico narrado sobre él, solo representaciones iconográficas, lo que ha llevado a algunos estudiosos a vincularlo con figuras folclóricas británicas posteriores como Herne el Cazador.`,
  rhiannon: `Tras el nacimiento de su hijo Pryderi, fue acusada injustamente de haberlo devorado cuando el niño desapareció misteriosamente (en realidad, robado por una criatura sobrenatural y criado por el noble Teyrnon), y se le impuso como penitencia sentarse junto al portón del castillo, contarle su historia a cualquier visitante y ofrecerse a llevarlos sobre su propia espalda como si fuera un caballo, penitencia que cumplió durante siete años hasta que su hijo fue finalmente reconocido y devuelto. Su nombre probablemente deriva de "Rigantona" ("gran reina"), y su estrecha asociación con los caballos la vincula directamente con la diosa gala Epona.`,
  arawn: `Intercambió su lugar con el príncipe galés Pwyll durante un año completo para que este derrotara en su nombre a su rival Hafgan, un pacto de honor tan bien cumplido por ambas partes que dio origen al título "Pwyll Pen Annwn" ("Pwyll, Cabeza de Annwn") con el que se conoció al príncipe desde entonces. Arawn era además dueño de una piara de cerdos mágicos, un regalo del Otro Mundo nunca antes visto en Gales, cuyo robo por parte del hechicero Gwydion desencadena buena parte de los sucesos narrados en la Cuarta Rama del Mabinogion.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-celta'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-celta".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando titanes y dioses de Mitologia Celta (parte 1)...\n');
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
