// ============================================================
// scripts/sembrar-personajes-sumeria-parte1.js
// ------------------------------------------------------------
// Primer lote de contenido para Mitologia Sumeria: 17 dioses y
// 5 titanes/primordiales. Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-sumeria-parte1.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  {
    tipo: 'dios', slug: 'anu', nombre: 'Anu', nombre_griego: 'An',
    epitetos: 'Padre de los Dioses, Señor del Cielo',
    descripcion_corta: 'Dios supremo del cielo, padre de los dioses — su autoridad es absoluta pero distante, delegada casi siempre en Enlil.',
    descripcion_larga: `An —conocido en acadio como Anu— es el dios del cielo y la cabeza nominal de todo el panteón mesopotámico, padre de la mayoría de las grandes divinidades y fuente última de la realeza y la autoridad legítima. Su símbolo, un tocado de cuernos, se convirtió en el emblema visual de la divinidad misma: cualquier dios representado con ese tocado quedaba identificado de inmediato como un ser sagrado, sin importar su rango. A pesar de su posición en la cúspide, An rara vez interviene directamente en los mitos: su poder es real pero remoto, ejercido casi siempre a través de su hijo Enlil, a quien entrega la administración activa del cielo y la tierra.

Su templo principal, el Eanna ("casa del cielo"), se levantaba en la ciudad de Uruk, y allí lo compartía —de forma reveladora sobre cómo cambiaba el poder religioso con el tiempo— con el culto cada vez más popular de Inanna, hasta el punto de que en algunos períodos la diosa eclipsó al propio An como patrona principal de la ciudad. En el mito de Anzu, es An quien convoca a los dioses ante la crisis de las Tablillas del Destino robadas, y en el Enuma Elish babilónico aparece como ancestro de Marduk, transmitiendo su legitimidad hacia las generaciones divinas más jóvenes que terminarían gobernando en su lugar.`,
    origen: 'Hijo de los primeros principios cósmicos (An y Ki emergen de Nammu); padre de la mayoría de los grandes dioses.',
    dominio: 'El cielo y la autoridad suprema',
    naturaleza: 'Dios supremo, distante'
  },
  {
    tipo: 'dios', slug: 'enlil', nombre: 'Enlil', nombre_griego: 'Enlil',
    epitetos: 'Señor del Viento, Rey de los Dioses y los Hombres',
    descripcion_corta: 'Dios del viento y la tormenta, gobernante activo del cosmos — otorga la realeza y puede decidir el destino de ciudades enteras.',
    descripcion_larga: `Enlil, "señor del viento", es el hijo de An y el dios que efectivamente gobierna el mundo en nombre de su padre: la administración del cielo, la tierra y el destino de los mortales recae sobre él, y es quien reparte la realeza a los gobernantes humanos mediante el otorgamiento simbólico del "me" —los decretos divinos que sostienen la civilización—. Su templo, el Ekur ("casa de la montaña") en Nippur, era considerado el centro espiritual de toda Mesopotamia, el lugar donde literalmente se pronunciaban los destinos.

Enlil es una divinidad temible además de poderosa: en el mito del diluvio, es Enlil quien decide destruir a la humanidad entera porque el ruido de las ciudades ya no lo dejaba dormir, y se enfurece al descubrir que Enki había desobedecido el pacto entre los dioses para salvar en secreto a Ziusudra. Esta tensión entre Enlil (el orden que castiga sin piedad) y Enki (la astucia que encuentra resquicios para proteger a los mortales) es uno de los ejes narrativos más constantes de toda la mitología sumeria. Fuera de los mitos de destrucción, Enlil también aparece como padre de Nanna, el dios luna, tras una unión con Ninlil que él mismo forzó y por la cual fue desterrado temporalmente al inframundo.`,
    origen: 'Hijo de An, hermano/rival de Enki.',
    dominio: 'El viento, la tormenta y el destino',
    naturaleza: 'Rey activo de los dioses'
  },
  {
    tipo: 'dios', slug: 'enki', nombre: 'Enki', nombre_griego: 'Ea',
    epitetos: 'Señor de la Tierra, Dios de las Aguas Dulces y la Sabiduría',
    descripcion_corta: 'Dios de la sabiduría, la magia y las aguas dulces del Abzu — el más astuto e ingenioso de los grandes dioses, protector encubierto de la humanidad.',
    descripcion_larga: `Enki —Ea entre los acadios— gobierna el Abzu, el vasto océano de agua dulce que los sumerios creían que se extendía bajo la tierra, y desde ahí ejerce su dominio sobre la sabiduría, la magia, la artesanía y la ingeniería que hacen posible la civilización. Es, junto a An y Enlil, uno de los tres grandes dioses del panteón, pero se distingue de ambos por su carácter: donde Enlil administra con severidad inflexible, Enki resuelve los problemas del mundo con astucia, rodeos e ingenio, incluso cuando eso significa desobedecer abiertamente los acuerdos entre dioses.

Es el creador y protector recurrente de la humanidad: modela a los primeros seres humanos con arcilla del Abzu para liberar a los dioses menores del trabajo agotador de cavar los canales, y cuando Enlil decide destruir a la humanidad con un diluvio, es Enki quien —sin romper técnicamente su juramento de silencio— le susurra la advertencia a la pared de juncos de la casa de Ziusudra, permitiéndole construir un barco y sobrevivir. También entrega a Inanna, tras emborracharse ante su visita, los "me" que rigen la civilización, y es él quien finalmente cura sus propias heridas autoinfligidas en el mito de Ninhursag en Dilmun. Su templo, el E-abzu, se ubicaba en la ciudad de Eridu, considerada la primera ciudad fundada por los dioses después de la creación.`,
    origen: 'Hijo de An y Nammu (según algunas tradiciones); hermano/rival de Enlil.',
    dominio: 'La sabiduría, la magia y las aguas dulces',
    naturaleza: 'Dios astuto, protector de la humanidad'
  },
  {
    tipo: 'dios', slug: 'ninhursag', nombre: 'Ninhursag', nombre_griego: 'Ninmah / Nintu',
    epitetos: 'Madre de las Montañas, Señora de la Forma',
    descripcion_corta: 'Diosa madre de la tierra y la fertilidad, co-creadora de la humanidad junto a Enki — la partera divina de todos los seres vivos.',
    descripcion_larga: `Ninhursag, "señora de las montañas sagradas", es la gran diosa madre de la tradición sumeria, asociada a la tierra fértil, las estribaciones rocosas y el nacimiento de toda criatura viva. Bajo distintos nombres —Ninmah ("la gran señora"), Nintu ("la que da a luz"), Damgalnuna— aparece en los mitos de creación como la partera de los dioses y, en las versiones más tempranas, como co-creadora de la humanidad junto a Enki, moldeando cuerpos humanos de arcilla mientras él insufla en ellos el destino.

Su relato más elaborado es el de Dilmun, el paraíso primordial donde Enki la corteja y engendra con ella una sucesión de diosas vegetales, hasta que —furiosa por la conducta desmedida del dios— maldice las ocho plantas nacidas de su último encuentro, provocando que Enki, al comerlas, enferme gravemente en ocho órganos distintos. Solo tras una larga negociación mediada por un zorro, Ninhursag accede a curarlo, engendrando de su propio cuerpo ocho deidades menores, una por cada órgano dañado, entre ellas Ninti, "la señora de la costilla", cuyo nombre resuena de manera notable con la Eva bíblica creada de una costilla. Ninhursag representa así la doble cara de la fertilidad mesopotámica: generosa y protectora, pero también capaz de un castigo tan preciso como la vida misma que ella otorga.`,
    origen: 'Diosa primordial de la tierra, asociada a An en algunas genealogías.',
    dominio: 'La tierra, la fertilidad y el nacimiento',
    naturaleza: 'Diosa madre'
  },
  {
    tipo: 'dios', slug: 'inanna', nombre: 'Inanna', nombre_griego: 'Ishtar',
    epitetos: 'Reina del Cielo, Estrella de la Mañana y la Tarde',
    descripcion_corta: 'Diosa del amor, la guerra y el poder — la más impredecible y venerada de las diosas mesopotámicas, dueña de la ciudad de Uruk.',
    descripcion_larga: `Inanna —Ishtar en acadio— es la diosa del amor, el deseo, la guerra y el poder político, identificada con el planeta Venus tanto en su aparición matutina como vespertina. Es, con enorme diferencia, la divinidad femenina más venerada y mejor documentada de toda la mitología mesopotámica: cientos de himnos, oraciones y relatos narran su ambición insaciable, su sexualidad abierta y su disposición a desafiar cualquier límite —incluida la muerte misma— con tal de expandir su dominio.

En uno de sus mitos más célebres, emborracha a Enki durante una visita a Eridu y consigue que, en su estado de embriaguez generosa, le entregue los "me", los decretos sagrados que sostienen la civilización entera, llevándolos en triunfo de regreso a Uruk antes de que Enki, ya sobrio, pueda arrepentirse. Es también la diosa que desciende voluntariamente al inframundo para desafiar a su hermana Ereshkigal, un viaje que la lleva a morir y renacer, y quien, furiosa por el rechazo de Gilgamesh, envía al Toro del Cielo para destruir Uruk cuando el héroe se niega a convertirse en su amante. Casada con el dios pastor Dumuzi, su historia de amor y traición con él —ella misma lo condena al inframundo tras su propio regreso— es una de las tragedias centrales del ciclo mítico sumerio.`,
    origen: 'Hija de Nanna y Ningal (o de An, según otras tradiciones); hermana gemela de Utu.',
    dominio: 'El amor, la guerra y el poder',
    naturaleza: 'Diosa del deseo y la ambición'
  },
  {
    tipo: 'dios', slug: 'utu', nombre: 'Utu', nombre_griego: 'Shamash',
    epitetos: 'Juez de Dioses y Hombres, el que Todo lo Ve',
    descripcion_corta: 'Dios del sol y la justicia, hermano gemelo de Inanna — recorre el cielo cada día vigilando la verdad y el engaño de los mortales.',
    descripcion_larga: `Utu —Shamash en acadio— es el dios del sol y, por extensión, el garante divino de la justicia, la verdad y los juramentos, ya que su luz alcanza cada rincón del mundo y no deja lugar donde ocultar una mentira. Hijo del dios luna Nanna y hermano gemelo de Inanna, recorre el cielo de este a oeste durante el día, y cada noche desciende al inframundo, atravesándolo para volver a emerger al amanecer siguiente.

Es un dios activamente protector de los héroes: en el ciclo de Gilgamesh, es Utu quien favorece la expedición contra Humbaba, enviando ocho vientos poderosos que inmovilizan al monstruo en el momento decisivo del combate, y a quien Gilgamesh invoca repetidamente pidiendo guía antes de cada gran peligro. En el mito de Etana, es Utu quien, compadecido del águila mutilada atrapada en un pozo, guía al rey mortal hasta ella para que la rescate. Se le representaba con una sierra dentada, símbolo tanto de su capacidad para cortar a través del engaño como de su vínculo con la resolución de disputas legales, y su templo principal, el E-babbar ("casa blanca"), se erigía en Sippar.`,
    origen: 'Hijo de Nanna y Ningal, hermano gemelo de Inanna.',
    dominio: 'El sol y la justicia',
    naturaleza: 'Dios juez, protector de héroes'
  },
  {
    tipo: 'dios', slug: 'nanna', nombre: 'Nanna', nombre_griego: 'Sin',
    epitetos: 'Señor de la Sabiduría, el Toro Reluciente',
    descripcion_corta: 'Dios de la luna, padre de Utu e Inanna — su ciclo mensual medía el calendario sagrado de toda Mesopotamia.',
    descripcion_larga: `Nanna —Sin en acadio— es el dios de la luna, hijo de Enlil y Ninlil concebido en circunstancias violentas que llevaron a Enlil a un exilio temporal en el inframundo. Su ciclo de fases, observado con precisión desde los primeros tiempos sumerios, servía como base del calendario lunar que regía las festividades y las cuentas agrícolas de toda la región, otorgándole un rol práctico tan importante como su prestigio religioso.

Era el patrono de la ciudad de Ur, cuyo gran zigurat estaba dedicado a su culto, y padre de dos de las divinidades más activas del panteón: Utu, el sol, y Inanna, el amor y la guerra —una genealogía que hacía de Nanna, pese a su relativa pasividad narrativa en comparación con sus hijos, una figura de enorme peso simbólico como origen de la luz celeste en todas sus formas. Se le representaba a menudo como un anciano de barba de lapislázuli, montado en un toro alado o navegando el cielo nocturno en una barca en forma de media luna, y su templo Ekishnugal en Ur fue uno de los centros religiosos más venerados de toda la civilización mesopotámica.`,
    origen: 'Hijo de Enlil y Ninlil.',
    dominio: 'La luna y el calendario sagrado',
    naturaleza: 'Dios lunar, patrono de Ur'
  },
  {
    tipo: 'dios', slug: 'ereshkigal', nombre: 'Ereshkigal', nombre_griego: 'Ereshkigal',
    epitetos: 'Reina del Gran Abajo, Señora de la Tierra Sin Retorno',
    descripcion_corta: 'Diosa soberana del inframundo — gobierna el reino de los muertos con una autoridad tan absoluta como implacable.',
    descripcion_larga: `Ereshkigal, "señora de la gran tierra", gobierna Kur, el inframundo sumerio conocido también como "la tierra sin retorno" —un reino de polvo y silencio al que todo mortal desciende tras la muerte, sin distinción entre justos e injustos, y del que ni siquiera los dioses pueden regresar sin pagar un precio—. Se dice que fue raptada al inframundo en tiempos primordiales y desde entonces gobierna ese reino sola, hermana tanto de Inanna como, en algunas genealogías, de Ninlil.

Su mito más conocido narra el enfrentamiento con su propia hermana Inanna, que desciende a desafiarla en su propio territorio: Ereshkigal la recibe, la despoja de toda insignia de poder en las siete puertas del inframundo, y finalmente la mata con "la mirada de la muerte", colgando su cadáver de un gancho —un castigo que solo se revierte gracias a la intervención de Enki. Más tarde, en el mito de Nergal, un dios enviado a un banquete divino la insulta al negarse a levantarse ante su mensajero; Ereshkigal exige su entrega para ejecutarlo, pero termina, tras un enfrentamiento que casi la destrona, aceptándolo como esposo y corregente, dividiendo el año entre la presencia de Nergal en el inframundo y su ausencia en el mundo de los vivos.`,
    origen: 'Hermana de Inanna, raptada al inframundo en tiempos primordiales.',
    dominio: 'El inframundo y los muertos',
    naturaleza: 'Diosa soberana, implacable'
  },
  {
    tipo: 'dios', slug: 'nergal', nombre: 'Nergal', nombre_griego: 'Nergal',
    epitetos: 'Señor de la Peste y la Guerra, Rey del Inframundo',
    descripcion_corta: 'Dios de la guerra, la peste y el fuego abrasador del mediodía — se convirtió en co-regente del inframundo tras desafiar a Ereshkigal.',
    descripcion_larga: `Nergal es el dios de la guerra, las plagas y el calor destructivo del sol de mediodía —el aspecto agresivo y devastador de una fuerza solar que Utu representa en su forma justa y ordenada—. Patrono de la ciudad de Kutha, cuyo templo Meslam le daba también el epíteto de Meslamtaea, era invocado tanto para pedir victoria en la guerra como para alejar epidemias, dos caras de la misma capacidad de causar muerte masiva.

Su mito más célebre —la historia de su matrimonio con Ereshkigal— comienza con una afrenta: al no ponerse de pie ante Namtar, el mensajero de la reina del inframundo, durante un banquete celestial, Nergal provoca la furia de Ereshkigal, que exige su entrega para ejecutarlo. Armado con catorce demonios que sostiene bajo control en las puertas del inframundo, Nergal enfrenta a la diosa dispuesto a matarla, pero al verla desnuda y vulnerable, se detiene; ella le suplica que se convierta en su esposo en vez de su verdugo, y él acepta, gobernando el inframundo a su lado. Su unión resuelve narrativamente una pregunta central de la religión mesopotámica: cómo un dios de la muerte violenta pudo llegar a compartir el trono con la más antigua soberana del reino de los muertos.`,
    origen: 'Dios celeste que desciende al inframundo tras el conflicto con Ereshkigal.',
    dominio: 'La guerra, la peste y el fuego destructivo',
    naturaleza: 'Dios agresivo, corregente del inframundo'
  },
  {
    tipo: 'dios', slug: 'ninurta', nombre: 'Ninurta', nombre_griego: 'Ninurta',
    epitetos: 'Señor del Arado, Campeón de los Dioses',
    descripcion_corta: 'Dios guerrero y agrícola, hijo de Enlil — el héroe divino que derrotó a Anzu y recuperó las Tablillas del Destino.',
    descripcion_larga: `Ninurta es el dios de la guerra, la caza y también, de forma menos esperada, de la agricultura y el arado —una dualidad que refleja su rol como fuerza que primero destruye el caos y después hace posible que la tierra vuelva a producir—. Hijo de Enlil, es el campeón militar de los dioses, invocado en tiempos de crisis cósmica cuando ninguna otra divinidad se atreve a enfrentar la amenaza.

Su hazaña más célebre es la derrota de Anzu, el ave tormentosa que robó las Tablillas del Destino del santuario de Enlil, sumiendo al universo entero en el caos al despojar a los dioses de su autoridad legítima. Varios dioses poderosos —Adad, Girra, Shara— rechazan la misión de enfrentarlo, hasta que Ninurta acepta el desafío; en la batalla, Anzu usa el poder de las propias Tablillas para deshacer cada arma que Ninurta dispara contra él, revirtiendo flechas a caña y plumas a aves vivas, hasta que el dios logra finalmente arrancarle las alas y degollarlo con ayuda del viento del sur. Por esta victoria, Ninurta es recompensado con un lugar de honor permanente entre los grandes dioses, y se convierte en el arquetipo del guerrero divino cuya fuerza sostiene el orden cósmico establecido por su padre.`,
    origen: 'Hijo de Enlil.',
    dominio: 'La guerra, la caza y la agricultura',
    naturaleza: 'Dios guerrero, campeón divino'
  },
  {
    tipo: 'dios', slug: 'dumuzi', nombre: 'Dumuzi', nombre_griego: 'Tammuz',
    epitetos: 'El Pastor Fiel, Amado de Inanna',
    descripcion_corta: 'Dios pastor, esposo de Inanna — condenado al inframundo por su propia esposa, su ausencia y retorno marcan el ciclo de las estaciones.',
    descripcion_larga: `Dumuzi, "hijo verdadero", es el dios pastor cuyo cortejo y matrimonio con Inanna se celebra en algunos de los poemas de amor más antiguos que se conservan de toda la literatura humana —composiciones explícitamente sensuales que celebraban la unión sagrada entre la diosa y el rey de Uruk, representado ritualmente por Dumuzi, como garantía de fertilidad para toda la tierra.

Su destino se ensombrece de manera abrupta en el mito del descenso de Inanna: cuando la diosa regresa del inframundo tras su propia muerte y resurrección, se le exige encontrar un sustituto que ocupe su lugar entre los muertos. Al llegar a su palacio y encontrar a Dumuzi vestido con lujo, sentado en su trono, sin señal alguna de duelo por su ausencia, Inanna —furiosa— lo señala a los demonios gallu que la acompañan, y estos lo arrastran al inframundo en su lugar. Su hermana Geshtinanna, devastada, se ofrece a compartir su condena, y los dioses finalmente acuerdan que ambos, hermano y hermana, se turnen: seis meses cada uno bajo tierra, seis meses en el mundo de los vivos, un ciclo que los sumerios entendían como la explicación mítica detrás de las estaciones agrícolas.`,
    origen: 'Dios pastor, esposo mítico de Inanna.',
    dominio: 'Los pastores, los rebaños y la vegetación estacional',
    naturaleza: 'Dios consorte, víctima trágica'
  },
  {
    tipo: 'dios', slug: 'nisaba', nombre: 'Nisaba', nombre_griego: 'Nidaba',
    epitetos: 'Señora de la Escritura, Escriba de los Dioses',
    descripcion_corta: 'Diosa del grano y la escritura — patrona de los escribas, cuyo nombre cerraba la mayoría de los textos sumerios como acto de reverencia.',
    descripcion_larga: `Nisaba es la diosa del grano y, por extensión natural en una civilización que inventó la escritura precisamente para llevar cuentas agrícolas, también de la escritura, la contabilidad y el conocimiento registrado. Su vínculo con ambos dominios no es casual: los primeros textos cuneiformes sumerios eran, en su inmensa mayoría, registros de cosechas, raciones de grano y transacciones económicas, así que la diosa del cereal y la diosa de la escritura eran, en la práctica, la misma fuerza vista desde dos ángulos.

Era la patrona indiscutida de los escribas, la profesión más prestigiosa y mejor pagada de toda la sociedad sumeria, y una enorme cantidad de textos —himnos, listas de reyes, contratos— terminaban con una fórmula fija de alabanza a su nombre, como firma ritual del escriba que los había compuesto. Con el ascenso de Babilonia y el dios Marduk, Nisaba fue gradualmente desplazada de su rol como patrona suprema de la escritura por Nabu, el hijo de Marduk, pasando en algunos relatos posteriores a ser presentada como su esposa —un ejemplo claro de cómo el prestigio de las diosas más antiguas se fue reduciendo a medida que el panteón se reorganizaba en torno a dioses masculinos más jóvenes.`,
    origen: 'Diosa antigua del grano, hija de An en algunas tradiciones.',
    dominio: 'El grano, la escritura y el conocimiento registrado',
    naturaleza: 'Diosa patrona de los escribas'
  },
  {
    tipo: 'dios', slug: 'ninkasi', nombre: 'Ninkasi', nombre_griego: 'Ninkasi',
    epitetos: 'La que Sacia el Corazón',
    descripcion_corta: 'Diosa de la cerveza — su himno es también la receta más antigua conservada, tan sagrada como práctica.',
    descripcion_larga: `Ninkasi es la diosa de la cerveza, una de las bebidas más importantes de toda la dieta y la vida ritual sumeria, consumida a diario por prácticamente toda la población y ofrecida generosamente a los dioses en templos y festividades. Según el mito, nació de las "aguas resplandecientes" por voluntad de Ninhursag, ya predestinada desde su nacimiento a convertirse en la patrona de esta bebida fundamental.

El "Himno a Ninkasi", uno de los textos sumerios mejor conservados, funciona simultáneamente como alabanza religiosa y como la receta de cerveza más antigua que se conoce en el mundo: describe paso a paso el proceso de maltear el grano, hornear el pan de cerveza (bappir), remojarlo y fermentarlo, todo enmarcado como una serie de actos que la propia diosa realiza con sus manos. Este doble carácter —devoción y manual práctico a la vez— refleja algo esencial de la religión sumeria: no había una separación clara entre lo sagrado y lo cotidiano, y aprender a fabricar cerveza correctamente era, en sí mismo, un acto de comunión con la diosa que había enseñado ese oficio a la humanidad.`,
    origen: 'Nacida de las aguas resplandecientes por voluntad de Ninhursag.',
    dominio: 'La cerveza y la fermentación',
    naturaleza: 'Diosa artesana, patrona de un oficio cotidiano'
  },
  {
    tipo: 'dios', slug: 'geshtinanna', nombre: 'Geshtinanna', nombre_griego: 'Geshtinanna',
    epitetos: 'La Vid Celestial, Hermana de Dumuzi',
    descripcion_corta: 'Diosa del vino y la interpretación de sueños — se ofreció a compartir la condena de su hermano Dumuzi en el inframundo.',
    descripcion_larga: `Geshtinanna, "vid del cielo", es la diosa del vino, la poesía y la interpretación de sueños, hermana de Dumuzi y una de las pocas figuras del ciclo mítico sumerio cuya lealtad familiar se describe sin ninguna ambigüedad. Cuando su hermano tiene una pesadilla que presagia su propia muerte, es Geshtinanna quien logra interpretar correctamente cada uno de sus símbolos aterradores, aunque no consigue evitar el destino que anuncian.

Tras la condena de Dumuzi al inframundo por orden de la propia Inanna, Geshtinanna lo busca sin descanso, y cuando finalmente los demonios gallu lo capturan, se ofrece voluntariamente a ocupar su lugar. Conmovidos, los dioses no aceptan el sacrificio completo, sino que instauran el reparto: Dumuzi y Geshtinanna se turnarán, cada uno pasando la mitad del año en el inframundo mientras el otro permanece arriba. La devoción de Geshtinanna, sin el componente romántico que rodea a Inanna, representa un tipo distinto de amor en la mitología sumeria: el lazo entre hermanos, capaz de sostener una promesa incluso cuando implica descender, ella misma, al reino de los muertos.`,
    origen: 'Hermana de Dumuzi.',
    dominio: 'El vino, la poesía y los sueños',
    naturaleza: 'Diosa leal, corregente estacional del inframundo'
  },
  {
    tipo: 'dios', slug: 'ninlil', nombre: 'Ninlil', nombre_griego: 'Ninlil',
    epitetos: 'Señora del Aire, Madre de Nanna',
    descripcion_corta: 'Diosa del grano y el aire, esposa de Enlil — su unión forzada con el dios llevó a ambos a un exilio temporal en el inframundo.',
    descripcion_larga: `Ninlil es la diosa asociada al aire y al grano, esposa de Enlil y madre de Nanna, el dios luna. Su mito de origen es uno de los relatos más perturbadores de toda la mitología sumeria, y los propios textos antiguos lo narran sin suavizar su naturaleza: siendo una joven diosa, Ninlil es advertida por su madre de no bañarse en cierto canal sagrado, pero lo hace de todos modos, y allí es vista y forzada por Enlil, quien queda embarazado de Nanna a través de ese encuentro.

Por esta transgresión, la asamblea de los dioses destierra a Enlil al inframundo. Ninlil, decidida a no separarse de él, lo sigue hasta ese reino, donde Enlil, disfrazado sucesivamente de tres guardianes distintos, vuelve a unirse a ella, engendrando en cada encuentro a un dios del inframundo que sirve como "sustituto" para permitir que Nanna, el hijo original, pueda finalmente ascender al cielo y ocupar su lugar como astro. El relato, incómodo para la sensibilidad moderna, funcionaba dentro de la lógica mítica sumeria como una explicación de por qué el linaje de Nanna estaba legitimado tanto en el cielo como en el inframundo al mismo tiempo.`,
    origen: 'Diosa del grano, esposa de Enlil.',
    dominio: 'El aire y el grano',
    naturaleza: 'Diosa madre, ligada al inframundo por matrimonio'
  },
  {
    tipo: 'dios', slug: 'ninsun', nombre: 'Ninsun', nombre_griego: 'Ninsun',
    epitetos: 'La Vaca Salvaje Sagrada, Madre de Gilgamesh',
    descripcion_corta: 'Diosa menor de la sabiduría, madre divina de Gilgamesh — interpreta sus sueños y ruega por él ante Utu antes de cada peligro.',
    descripcion_larga: `Ninsun, "la señora vaca salvaje", es una diosa menor asociada a la sabiduría, célebre sobre todo por su papel como madre divina de Gilgamesh, el legendario rey de Uruk —una unión entre diosa y mortal que explicaba, dentro de la lógica mítica sumeria, por qué Gilgamesh era descrito como dos tercios dios y solo un tercio hombre—.

En la Epopeya de Gilgamesh, Ninsun cumple un papel activo y protector: cuando su hijo tiene sueños extraños que presagian la llegada de Enkidu, es ella quien los interpreta correctamente, anunciando que se trata de un compañero poderoso enviado para equilibrar el carácter impetuoso del rey. Antes de que Gilgamesh y Enkidu partan hacia el peligroso Bosque de los Cedros a enfrentar a Humbaba, Ninsun sube a la azotea de su templo, se purifica y ruega directamente a Utu, el dios sol, pidiéndole protección para su hijo durante toda la expedición —incluso llega a adoptar formalmente a Enkidu como hijo propio, atándolo simbólicamente al destino real de Gilgamesh. Su presencia en el relato, aunque secundaria frente a las grandes hazañas de su hijo, encarna el arquetipo de la madre divina cuya intercesión silenciosa hace posible cada victoria del héroe.`,
    origen: 'Diosa menor, madre de Gilgamesh con el rey mortal Lugalbanda.',
    dominio: 'La sabiduría y la intercesión materna',
    naturaleza: 'Diosa protectora'
  },
  {
    tipo: 'dios', slug: 'marduk', nombre: 'Marduk', nombre_griego: 'Marduk',
    epitetos: 'Señor de Babilonia, Vencedor de Tiamat',
    descripcion_corta: 'Dios patrono de Babilonia — venció a la primordial Tiamat y ordenó el cosmos a partir de su cuerpo, heredando la autoridad de los dioses sumerios más antiguos.',
    descripcion_larga: `Marduk es el dios patrono de Babilonia, cuya ascensión al liderazgo del panteón mesopotámico —relatada en el Enuma Elish, el poema de la creación babilónico— representa el momento en que la tradición religiosa heredada de los sumerios se reorganiza en torno a una nueva generación de dioses más jóvenes. Cuando la primordial Tiamat, enfurecida por la muerte de su esposo Apsu, reúne un ejército de monstruos para destruir a los dioses más recientes, ninguno de los grandes nombres antiguos se atreve a enfrentarla. Solo Marduk acepta el desafío, a condición de que se le reconozca como rey supremo si triunfa.

En un combate que se convirtió en el mito de batalla cósmica más influyente de todo el Cercano Oriente antiguo, Marduk atrapa a Tiamat en una red, la mata con una flecha certera y parte su cuerpo colosal en dos mitades: de una forma el cielo, de la otra la tierra. Después crea a la humanidad con la sangre del dios rebelde Qingu, aliado de Tiamat, específicamente para que sirva a los dioses. Por esta hazaña, Marduk hereda buena parte de la autoridad que antes correspondía a Anu y Enlil, y su templo, el Esagila de Babilonia, se convirtió en el centro religioso más importante de Mesopotamia durante siglos.`,
    origen: 'Hijo de Enki/Ea, elevado a rey de los dioses tras vencer a Tiamat.',
    dominio: 'El orden cósmico y la realeza divina',
    naturaleza: 'Dios rey, heredero del panteón antiguo'
  },
  // --- TITANES / PRIMORDIALES ---
  {
    tipo: 'titan', slug: 'nammu', nombre: 'Nammu', nombre_griego: 'Nammu',
    epitetos: 'La Que Dio a Luz al Cielo y la Tierra',
    descripcion_corta: 'Diosa primordial del océano cósmico — de sus aguas sin origen nacieron An y Ki, el cielo y la tierra, y todos los dioses que siguieron.',
    descripcion_larga: `Nammu es la personificación del océano primordial, el agua sin origen ni creador que existía antes que cualquier otra cosa en la cosmología sumeria más antigua. De su vasta extensión, sin intervención de ningún otro dios, nacieron An (el cielo) y Ki (la tierra), originalmente fusionados en una sola masa que sus propios hijos tuvieron que separar para que el mundo tal como se conoce pudiera existir.

Nammu es también, en algunas de las versiones más tempranas del mito de la creación humana, la verdadera artífice del primer ser humano: es ella quien acude a su hijo Enki, quejándose de que los dioses menores están agotados de cavar canales y sembrar la tierra sin descanso, y le pide que idee una solución. Enki le indica que ella misma, junto a Ninmah, pellizque arcilla del Abzu y le dé forma, mientras él pronuncia sobre esa arcilla el destino que la convertirá en un ser viviente. A diferencia de otras diosas primordiales de mitologías vecinas, Nammu no es una fuerza hostil que deba ser derrotada por dioses más jóvenes: permanece como un origen sereno, casi abstracto, la matriz silenciosa de la que todo lo demás emergió.`,
    origen: 'El océano primordial mismo, sin origen anterior.',
    dominio: 'El océano cósmico primordial',
    naturaleza: 'Diosa madre absoluta, origen de todo'
  },
  {
    tipo: 'titan', slug: 'ki', nombre: 'Ki', nombre_griego: 'Ki',
    epitetos: 'La Tierra Primordial',
    descripcion_corta: 'La tierra misma en su forma primordial, separada del cielo (An) en el amanecer de los tiempos — origen cósmico más que diosa de culto activo.',
    descripcion_larga: `Ki, cuyo nombre significa simplemente "tierra", es la personificación primordial del suelo y la masa terrestre, contraparte y en tiempos primigenios pareja indivisible de An, el cielo. Según la cosmogonía sumeria más antigua, ambos surgieron unidos de las aguas de Nammu como una sola montaña cósmica, hasta que Enlil —nacido de su unión— se interpuso entre ellos y los separó, empujando a An hacia arriba y dejando a Ki abajo, un acto fundacional que hizo posible que existiera el espacio habitable entre el cielo y la tierra donde después crecería todo lo demás.

A diferencia de Ninhursag, con quien terminó fusionándose parcialmente en el imaginario posterior, Ki apenas recibió culto independiente ni templos propios: su función es casi puramente cosmológica, la de representar el principio de la tierra como entidad primordial más que como una diosa activa con voluntad e intervención en los mitos posteriores. Con el paso de los siglos, la mayoría de los atributos y el culto que en teoría le correspondían a Ki fueron absorbidos por diosas más activas y mejor documentadas —sobre todo Ninhursag—, dejando a Ki como una presencia casi puramente conceptual: la tierra como principio, no como personaje.`,
    origen: 'Surge junto a An de las aguas primordiales de Nammu.',
    dominio: 'La tierra como principio cósmico',
    naturaleza: 'Principio primordial, escasamente venerada de forma independiente'
  },
  {
    tipo: 'titan', slug: 'apsu', nombre: 'Apsu', nombre_griego: 'Apsu',
    epitetos: 'El Agua Dulce Primordial',
    descripcion_corta: 'Dios primordial de las aguas dulces subterráneas, esposo de Tiamat — su muerte a manos de Enki desencadena la guerra cósmica del Enuma Elish.',
    descripcion_larga: `Apsu personifica las aguas dulces primordiales que, según la tradición babilónica del Enuma Elish, existían mezcladas con las aguas saladas de Tiamat desde antes del principio de los tiempos, sin límites ni forma definida. De la unión de ambos surgieron las primeras generaciones de dioses, cada vez más numerosas y ruidosas, hasta que su bullicio constante comenzó a resultarle intolerable a Apsu, que propuso a Tiamat destruir a su propia descendencia para poder descansar en paz.

Antes de que pudiera actuar, los dioses jóvenes descubren el plan a través de Enki (Ea), el más astuto de todos, que pronuncia un hechizo poderoso sobre Apsu, lo sume en un sueño profundo y lo mata mientras duerme, estableciendo su propia morada —el Abzu— directamente sobre su cuerpo derrotado. Este asesinato es lo que enfurece definitivamente a Tiamat y la empuja a formar un ejército de monstruos primordiales para vengar a su esposo, desencadenando la guerra cósmica que terminaría, generaciones después, con la victoria de Marduk. Apsu representa así el primer eslabón de un patrón que se repite en varias mitologías: el conflicto irreconciliable entre el silencio del orden primordial y el ruido creciente de la vida que ese mismo orden hizo posible.`,
    origen: 'Principio primordial de las aguas dulces, esposo de Tiamat.',
    dominio: 'Las aguas dulces primordiales',
    naturaleza: 'Dios primordial, asesinado por Enki'
  },
  {
    tipo: 'titan', slug: 'tiamat', nombre: 'Tiamat', nombre_griego: 'Tiamat',
    epitetos: 'El Mar Primordial, Madre de los Monstruos',
    descripcion_corta: 'Diosa primordial del agua salada — tras la muerte de su esposo Apsu, reúne un ejército de monstruos para destruir a los dioses más jóvenes.',
    descripcion_larga: `Tiamat es la personificación del agua salada primordial en la tradición babilónica, madre —junto a Apsu— de las primeras generaciones de dioses, y la fuerza cósmica que estuvo a punto de deshacer la creación entera antes de que esta terminara de tomar forma. Tras el asesinato de Apsu a manos de Enki, Tiamat, hasta entonces reacia a la violencia, cambia por completo: toma como nuevo consorte al dios Qingu, le entrega las Tablillas del Destino para darle autoridad suprema sobre su ejército, y da a luz a once clases de monstruos híbridos para marchar contra los dioses jóvenes.

Ningún dios se atreve a enfrentarla hasta que Marduk acepta el desafío a cambio de ser proclamado rey supremo. En el combate final, Marduk despliega una red para atraparla, la obliga a abrir la boca lanzando los vientos que él mismo controla, y le dispara una flecha directo al corazón cuando no puede cerrarla. Con su cuerpo colosal ya sin vida, Marduk lo parte en dos: de la mitad superior forma el cielo, sosteniéndolo para que las aguas de arriba no inunden el mundo, y de la inferior, la tierra. Tiamat es, en ese sentido, tanto la amenaza que casi destruye la creación como la materia prima literal de la que el cosmos ordenado terminó fabricándose.`,
    origen: 'Principio primordial del agua salada, madre de los primeros dioses.',
    dominio: 'El caos primordial y el mar',
    naturaleza: 'Diosa dragón primordial, madre de monstruos'
  },
  {
    tipo: 'titan', slug: 'qingu', nombre: 'Qingu', nombre_griego: 'Qingu',
    epitetos: 'El Consorte Elevado, Portador de las Tablillas Robadas',
    descripcion_corta: 'Segundo esposo de Tiamat, elevado a general de su ejército — su sangre, tras su derrota, fue usada por Marduk para crear a la humanidad.',
    descripcion_larga: `Qingu es el dios elevado por Tiamat a la posición de comandante supremo de su ejército de monstruos y nuevo consorte, tras la muerte de Apsu. Para asegurar su lealtad absoluta, Tiamat le entrega las Tablillas del Destino, colgándolas de su pecho y proclamándolo con un poder equiparable al de los dioses más antiguos —una decisión que, en la lógica del mito, resulta ser tan desmedida como frágil.

Cuando Marduk derrota a Tiamat, Qingu es capturado junto con el resto del ejército derrotado, y es sometido a juicio ante la asamblea de los dioses como el responsable directo de haber instigado la guerra. Declarado culpable, es ejecutado, y de su sangre —mezclada con arcilla, según el relato del Enuma Elish— Marduk ordena crear a la humanidad, con el propósito explícito de que los seres humanos sirvan a los dioses y los liberen del trabajo manual que hasta entonces recaía sobre las divinidades menores. Qingu representa así una figura trágica e irónica: el dios cuya sangre culpable termina siendo, sin buscarlo, el origen material de toda la especie humana.`,
    origen: 'Dios elevado por Tiamat como consorte y general de su ejército.',
    dominio: 'Ninguno propio — su poder dependía de las Tablillas del Destino robadas',
    naturaleza: 'Dios rebelde, ejecutado tras la derrota de Tiamat'
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-sumeria'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-sumeria".');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando parte 1: dioses y titanes de Mitologia Sumeria...\n');
  const libroId = await obtenerLibroId();

  for (const p of PERSONAJES) {
    const [existente] = await pool.query('SELECT id FROM personajes WHERE slug = ? AND libro_id = ?', [p.slug, libroId]);
    if (existente.length > 0) {
      console.log(`  - "${p.nombre}" ya existía.`);
      continue;
    }
    await pool.query(
      `INSERT INTO personajes (tipo, nombre, nombre_griego, epitetos, descripcion_corta, descripcion_larga, origen, dominio, naturaleza, slug, es_preview, libro_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?)`,
      [p.tipo, p.nombre, p.nombre_griego, p.epitetos, p.descripcion_corta, p.descripcion_larga, p.origen, p.dominio, p.naturaleza, p.slug, libroId]
    );
    console.log(`  - "${p.nombre}" creado.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
