// ============================================================
// scripts/sembrar-mitologia-hindu.js
// ------------------------------------------------------------
// Tercer libro del catalogo: Mitologia Hindu. Mismo patron que
// sembrar-mitologia-egipcia.js: idempotente (revisa antes de
// insertar por slug), crea la fila en "libros" y carga personajes +
// historias con libro_id apuntando a este libro.
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/sembrar-mitologia-hindu.js
// ============================================================

const pool = require('../config/db');

const LIBRO = {
  slug: 'mitologia-hindu',
  titulo: 'Mitología Hindú',
  subtitulo: 'Dioses, avatares y héroes del dharma',
  descripcion: 'La Trimurti, los avatares de Vishnu, las diosas guerreras y los héroes del Ramayana y el Mahabharata: la creación por el sacrificio de Purusha, el batido del océano de leche, la guerra contra Ravana y la gran guerra de Kurukshetra.',
  estado: 'publicado'
};

// ------------------------------------------------------------
// PERSONAJES
// ------------------------------------------------------------
const PERSONAJES = [
  {
    slug: 'brahma', tipo: 'dios', nombre: 'Brahma', nombre_griego: 'ब्रह्मा',
    epitetos: 'El Creador, el de las Cuatro Cabezas', naturaleza: 'dios creador', es_preview: 0,
    descripcion_corta: 'Dios creador del universo, primer miembro de la Trimurti, que surgió de un loto brotado del ombligo de Vishnu.',
    descripcion_larga: 'Brahma es el creador del cosmos dentro de la Trimurti, la tríada suprema que comparte con Vishnu y Shiva. Según la tradición más extendida, nació de un loto dorado que brotó del ombligo de Vishnu mientras este dormía sobre las aguas primordiales, y desde ese loto dio forma al universo entero y a los primeros seres. Se lo representa con cuatro cabezas, una mirando hacia cada punto cardinal, que surgieron de su intento de contemplar a su propia hija, Saraswati, en todas direcciones a la vez. Pese a ser el creador de todo lo que existe, Brahma recibe hoy muy poco culto directo en la India, ya que se considera que su labor de crear el universo ya está cumplida, mientras que Vishnu y Shiva, encargados de preservarlo y transformarlo, siguen activos en el destino diario del mundo.',
    origen: 'Nacido de un loto brotado del ombligo de Vishnu',
    dominio: 'La creación, el conocimiento primordial',
    simbolos: ['El loto', 'Los cuatro Vedas', 'El cisne (su montura, Hamsa)'],
    poderes: [
      { nombre: 'Creación universal', descripcion: 'Dio forma al cosmos y a los primeros seres.' }
    ]
  },
  {
    slug: 'vishnu', tipo: 'dios', nombre: 'Vishnu', nombre_griego: 'विष्णु',
    epitetos: 'El Preservador, el que Todo lo Sostiene', naturaleza: 'dios preservador', es_preview: 1,
    descripcion_corta: 'Dios preservador del universo, que desciende a la tierra en forma de avatares —como Rama y Krishna— cada vez que el orden cósmico está en peligro.',
    descripcion_larga: 'Vishnu es el sostén del universo dentro de la Trimurti: mientras Brahma crea y Shiva transforma, a Vishnu le corresponde preservar el orden cósmico, el dharma, frente a las fuerzas que constantemente amenazan con desequilibrarlo. Se lo representa reclinado sobre la serpiente cósmica Shesha, flotando en el océano de leche primordial, con su esposa Lakshmi a los pies y un loto brotando de su ombligo del que nace Brahma. Cuando el mundo enfrenta una crisis que ningún otro dios puede resolver, Vishnu desciende a la tierra en forma de avatar —diez encarnaciones principales, entre ellas el pez Matsya, el jabalí Varaha, el hombre-león Narasimha, y sobre todo Rama y Krishna, los más venerados de todos—, cada una adaptada exactamente a la amenaza que debe enfrentar. Esta capacidad de renovarse una y otra vez en formas distintas, sin perder jamás su esencia, es lo que lo convierte en el dios más ampliamente adorado de la India.',
    origen: 'Presente desde antes de la creación, flotando sobre las aguas primordiales',
    dominio: 'La preservación del orden cósmico, los avatares',
    simbolos: ['La caracola (shankha)', 'El disco (chakra)', 'La maza (gada)', 'El loto'],
    poderes: [
      { nombre: 'Encarnación en avatares', descripcion: 'Puede descender a la tierra en la forma que la crisis del momento requiera.' }
    ]
  },
  {
    slug: 'shiva', tipo: 'dios', nombre: 'Shiva', nombre_griego: 'शिव',
    epitetos: 'El Destructor, Señor de la Danza Cósmica', naturaleza: 'dios transformador', es_preview: 1,
    descripcion_corta: 'Dios de la destrucción y la transformación, tercero de la Trimurti, cuya danza cósmica marca el fin y el renacer de cada ciclo del universo.',
    descripcion_larga: 'Shiva completa la Trimurti como el dios de la destrucción, aunque su papel no es aniquilar por crueldad sino disolver lo viejo para permitir que algo nuevo pueda nacer. Vive en austera meditación en el monte Kailasa, cubierto de ceniza sagrada, con una serpiente enroscada al cuello, una media luna sobre su cabellera enmarañada, y el río Ganges cayendo eternamente desde su pelo, donde amortiguó la fuerza de su descenso desde el cielo para que no destruyera la tierra. Su tercer ojo, situado en el centro de la frente, permanece cerrado la mayor parte del tiempo, pero cuando se abre libera un fuego capaz de reducir a cenizas cualquier cosa —incluso, en una ocasión, al propio dios del deseo, Kama—. Como Nataraja, el Señor de la Danza, Shiva ejecuta la danza cósmica que marca el ritmo de creación y destrucción de cada era del universo, un ciclo que se repite sin fin.',
    origen: 'Asceta eterno, meditando en el monte Kailasa',
    dominio: 'La destrucción, la transformación, el ascetismo',
    simbolos: ['El tercer ojo', 'El tridente (trishula)', 'La serpiente al cuello', 'El río Ganges en su cabellera'],
    poderes: [
      { nombre: 'El tercer ojo', descripcion: 'Su mirada abierta puede reducir a cenizas cualquier cosa.' },
      { nombre: 'La danza cósmica', descripcion: 'Su danza marca el fin y el renacer de cada era del universo.' }
    ]
  },
  {
    slug: 'saraswati', tipo: 'dios', nombre: 'Saraswati', nombre_griego: 'सरस्वती',
    epitetos: 'La Diosa del Conocimiento, Señora de las Artes', naturaleza: 'diosa del conocimiento', es_preview: 0,
    descripcion_corta: 'Diosa del conocimiento, la música y las artes, esposa de Brahma y personificación de un río sagrado.',
    descripcion_larga: 'Saraswati preside todo lo que tiene que ver con el saber: el aprendizaje, la música, la poesía y la elocuencia le pertenecen. Se la representa vestida de blanco, sentada sobre un loto o un cisne, tocando una vina, el instrumento de cuerdas que ella misma inventó. Es hija y a la vez esposa de Brahma, quien la creó de su propio cuerpo y luego, prendado de su belleza, hizo brotar cuatro cabezas con tal de poder contemplarla desde todas direcciones. Saraswati es también el nombre de un río sagrado mencionado en los textos védicos más antiguos, que con el tiempo se secó o cambió de curso, pero cuya memoria se conservó personificada en esta diosa; hasta hoy, los estudiantes indios la invocan antes de los exámenes y los músicos antes de una actuación, pidiendo su bendición para la claridad de la mente.',
    origen: 'Hija y esposa de Brahma',
    dominio: 'El conocimiento, la música, la elocuencia',
    simbolos: ['La vina (instrumento de cuerdas)', 'El cisne blanco', 'El loto blanco'],
    poderes: [
      { nombre: 'Sabiduría e inspiración', descripcion: 'Concede claridad mental y talento artístico a quien la invoca.' }
    ]
  },
  {
    slug: 'lakshmi', tipo: 'dios', nombre: 'Lakshmi', nombre_griego: 'लक्ष्मी',
    epitetos: 'La Diosa de la Fortuna, Señora de la Abundancia', naturaleza: 'diosa de la riqueza', es_preview: 0,
    descripcion_corta: 'Diosa de la riqueza, la fortuna y la belleza, esposa de Vishnu, que emergió del batido del océano de leche.',
    descripcion_larga: 'Lakshmi es la diosa de la riqueza material y espiritual, de la buena fortuna y de la belleza, venerada en casi todos los hogares de la India con la esperanza de que su presencia traiga prosperidad. Nació de forma espectacular durante el Batido del Océano de Leche, cuando dioses y demonios agitaron juntos las aguas primordiales en busca del néctar de la inmortalidad: Lakshmi emergió de la espuma sentada sobre un loto, radiante, y de inmediato eligió a Vishnu como su esposo eterno, acompañándolo desde entonces en cada uno de sus descensos a la tierra —como Sita junto a Rama—. Se la representa con cuatro brazos, sentada o de pie sobre un loto, con monedas de oro cayendo de una de sus manos, y elefantes a sus costados rociándola con agua en un gesto de realeza y abundancia.',
    origen: 'Nacida del batido del océano de leche, sobre un loto',
    dominio: 'La riqueza, la fortuna, la belleza',
    simbolos: ['El loto', 'Monedas de oro', 'El elefante'],
    poderes: [
      { nombre: 'Concesión de fortuna', descripcion: 'Su presencia trae prosperidad material y espiritual.' }
    ]
  },
  {
    slug: 'parvati', tipo: 'dios', nombre: 'Parvati', nombre_griego: 'पार्वती',
    epitetos: 'La Diosa Madre, Hija de la Montaña', naturaleza: 'diosa madre', es_preview: 0,
    descripcion_corta: 'Diosa madre, esposa de Shiva, cuya devoción y penitencia lograron sacar al dios de su meditación eterna.',
    descripcion_larga: 'Parvati es la hija de Himavat, el rey de las montañas del Himalaya, y la reencarnación de Sati, la primera esposa de Shiva, que se había arrojado al fuego tras un profundo insulto a su marido. Renacida como Parvati, dedicó años enteros a una penitencia extrema en la montaña para atraer la atención de Shiva, sumido en una meditación tan profunda que ni siquiera el dios del deseo, Kama, logró interrumpirla sin pagar con su propia forma física. Solo la devoción constante de Parvati logró finalmente conmover a Shiva, y su matrimonio se convirtió en uno de los más celebrados de la mitología hindú. Como madre, dio a luz a Ganesha —a quien creó ella misma de arcilla— y a Kartikeya, y en sus formas más feroces se transforma en Durga o en Kali para enfrentar amenazas que ningún dios masculino puede vencer, recordando que la energía femenina, la Shakti, es la fuerza que anima a todo el panteón.',
    origen: 'Hija de Himavat, rey de las montañas; reencarnación de Sati',
    dominio: 'La maternidad, la devoción, la energía femenina (Shakti)',
    simbolos: ['El loto rosa', 'El león (su montura en algunas formas)'],
    poderes: [
      { nombre: 'Transformación en Shakti', descripcion: 'Puede manifestarse como Durga o Kali cuando el mundo lo requiere.' }
    ]
  },
  {
    slug: 'ganesha', tipo: 'dios', nombre: 'Ganesha', nombre_griego: 'गणेश',
    epitetos: 'El que Remueve los Obstáculos, Señor de los Comienzos', naturaleza: 'dios elefante', es_preview: 1,
    descripcion_corta: 'Dios de cabeza de elefante, hijo de Shiva y Parvati, invocado al inicio de cualquier empresa importante como removedor de obstáculos.',
    descripcion_larga: 'Ganesha es quizás el dios más reconocible y querido de todo el panteón hindú: su cabeza de elefante, su vientre redondeado y su naturaleza amable lo convierten en el primero a quien se invoca antes de comenzar cualquier proyecto, viaje, boda o negocio importante, ya que se le atribuye el poder de remover los obstáculos del camino —o de ponerlos, si no se lo honra debidamente—. Nació de la propia Parvati, que lo modeló con arcilla y pasta de cúrcuma para que la protegiera mientras se bañaba; cuando Shiva, sin saber quién era ese joven guardián, le impidió el paso hacia su esposa, le cortó la cabeza en un arrebato de furia. Al descubrir la verdad, Parvati exigió que le devolvieran la vida a su hijo, y Shiva, incapaz de encontrar la cabeza original, ordenó traer la del primer animal que encontraran: un elefante, que se convirtió para siempre en la cabeza de Ganesha. Se lo representa a menudo escribiendo con su colmillo roto, montado sobre un pequeño ratón.',
    origen: 'Creado por Parvati de arcilla y pasta de cúrcuma',
    dominio: 'La eliminación de obstáculos, los nuevos comienzos, la sabiduría',
    simbolos: ['El colmillo roto', 'El modak (dulce que sostiene)', 'El ratón (su montura)'],
    poderes: [
      { nombre: 'Remoción de obstáculos', descripcion: 'Puede despejar o interponer obstáculos en el camino de cualquiera.' }
    ]
  },
  {
    slug: 'kartikeya', tipo: 'dios', nombre: 'Kartikeya', nombre_griego: 'कार्तिकेय',
    epitetos: 'El Comandante Celestial, Señor de la Guerra', naturaleza: 'dios de la guerra', es_preview: 0,
    descripcion_corta: 'Dios de la guerra, hijo de Shiva y Parvati, engendrado específicamente para liderar a los dioses contra un demonio invencible.',
    descripcion_larga: 'Kartikeya nació con un propósito muy concreto: los dioses necesitaban desesperadamente un hijo de Shiva capaz de derrotar al demonio Taraka, protegido por una profecía que aseguraba que solo un hijo de Shiva podría matarlo, en un momento en que Shiva llevaba siglos sumido en meditación ascética y no tenía intención alguna de casarse ni de tener descendencia. Tras el episodio en el que Kama fue reducido a cenizas por intentar despertar el deseo de Shiva hacia Parvati, la propia devoción de esta finalmente logró lo que las flechas del dios del amor no pudieron, y de esa unión nació Kartikeya, criado por seis estrellas (las Krittikas) que lo amamantaron, lo que le dio seis cabezas en algunas representaciones. Convertido en comandante supremo de los ejércitos celestiales, lideró a los devas a la victoria contra Taraka, cumpliendo exactamente el destino para el que había nacido. Es especialmente venerado en el sur de la India, donde se lo conoce como Murugan.',
    origen: 'Hijo de Shiva y Parvati, criado por las seis estrellas Krittikas',
    dominio: 'La guerra, el liderazgo militar, la juventud',
    simbolos: ['La lanza (vel)', 'El pavo real (su montura)'],
    poderes: [
      { nombre: 'Maestría militar', descripcion: 'Comanda los ejércitos de los devas con habilidad suprema.' }
    ]
  },
  {
    slug: 'indra', tipo: 'dios', nombre: 'Indra', nombre_griego: 'इन्द्र',
    epitetos: 'El Rey de los Devas, Señor del Rayo', naturaleza: 'dios del cielo y la tormenta', es_preview: 0,
    descripcion_corta: 'Rey de los dioses y señor de la tormenta, que empuña el rayo y monta el elefante blanco Airavata.',
    descripcion_larga: 'Indra fue, en los tiempos más antiguos del Rig Veda, el dios más invocado de todos: rey de los devas, señor del cielo, la lluvia y la tormenta, empuñando el vajra, un rayo forjado con los huesos de un sabio que se sacrificó voluntariamente para crear el arma definitiva contra los demonios. Su hazaña más célebre fue la derrota de Vritra, una serpiente gigante que había atrapado todas las aguas del mundo, liberándolas para que la vida pudiera continuar. Con el paso de los siglos, sin embargo, Indra fue perdiendo protagonismo frente a la Trimurti, y en varios mitos posteriores aparece incluso como un personaje orgulloso y falible, capaz de cometer errores que otros dioses deben corregir. Monta a Airavata, un elefante blanco de varias trompas, y gobierna Amaravati, la espléndida capital del cielo, donde celebra festines eternos junto a las apsaras, las danzarinas celestiales.',
    origen: 'Rey de los devas desde los tiempos más antiguos',
    dominio: 'El cielo, la tormenta, el rayo',
    simbolos: ['El vajra (rayo)', 'El elefante blanco Airavata'],
    poderes: [
      { nombre: 'Dominio de la tormenta', descripcion: 'Controla el rayo, el trueno y la lluvia.' }
    ]
  },
  {
    slug: 'agni', tipo: 'dios', nombre: 'Agni', nombre_griego: 'अग्नि',
    epitetos: 'El Dios del Fuego, Mensajero entre Mundos', naturaleza: 'dios del fuego', es_preview: 0,
    descripcion_corta: 'Dios del fuego, mensajero que lleva las ofrendas de los mortales hasta los demás dioses a través de las llamas del sacrificio.',
    descripcion_larga: 'Agni es el fuego mismo hecho divinidad: arde en cada hogar, en cada altar y en cada ceremonia de sacrificio, y por eso se lo considera el intermediario perfecto entre los seres humanos y el resto de los dioses. Cuando un sacerdote vierte manteca clarificada sobre el fuego ritual y pronuncia los mantras correctos, se entiende que es Agni quien recoge esa ofrenda entre sus llamas y la transporta personalmente hasta la divinidad a la que está dirigida. Se lo representa con dos o siete lenguas de fuego a modo de cabezas, montado sobre un carnero, y se le atribuye una naturaleza doble: destructivo cuando arrasa un bosque sin control, pero purificador y esencial cuando cocina el alimento, calienta el hogar o transmite las plegarias humanas al cielo. Ningún ritual védico importante puede realizarse sin invocarlo primero.',
    origen: 'Presente en cada fuego encendido desde los tiempos védicos',
    dominio: 'El fuego, el sacrificio ritual, la comunicación entre mundos',
    simbolos: ['Las llamas', 'El carnero (su montura)'],
    poderes: [
      { nombre: 'Mensajero divino', descripcion: 'Transporta las ofrendas humanas hasta los dioses a través del fuego.' }
    ]
  },
  {
    slug: 'varuna', tipo: 'dios', nombre: 'Varuna', nombre_griego: 'वरुण',
    epitetos: 'El Guardián del Orden Cósmico, Señor de los Océanos', naturaleza: 'dios del orden cósmico', es_preview: 0,
    descripcion_corta: 'Antiguo dios supremo del orden cósmico (rita), hoy asociado principalmente a los océanos y las aguas.',
    descripcion_larga: 'En los himnos más antiguos del Rig Veda, Varuna era considerado el dios supremo, guardián del rita, el orden cósmico y moral que mantiene el universo funcionando correctamente: nada escapaba a su mirada, ni siquiera los pensamientos más secretos de los mortales, y se creía que castigaba con enfermedades a quienes rompían sus juramentos. Con el paso de los siglos, su papel como juez universal fue cedido gradualmente a otros dioses, y Varuna pasó a asociarse principalmente con los océanos y las aguas, convirtiéndose en el señor de todo lo que vive bajo la superficie del mar. Se lo representa montado sobre Makara, una criatura híbrida con cuerpo de cocodrilo y cola de pez, sosteniendo un lazo (pasha) con el que captura a quienes rompen sus votos. Pese a su disminuido protagonismo en los mitos posteriores, sigue siendo invocado en rituales relacionados con el agua, la lluvia y los juramentos.',
    origen: 'Uno de los dioses supremos de los himnos védicos más antiguos',
    dominio: 'El orden cósmico, los océanos, los juramentos',
    simbolos: ['El lazo (pasha)', 'Makara (criatura híbrida, su montura)'],
    poderes: [
      { nombre: 'Guardián del orden', descripcion: 'Vigila que se cumplan los juramentos y castiga a quien los rompe.' }
    ]
  },
  {
    slug: 'vayu', tipo: 'dios', nombre: 'Vayu', nombre_griego: 'वायु',
    epitetos: 'El Dios del Viento, Padre de Héroes', naturaleza: 'dios del viento', es_preview: 0,
    descripcion_corta: 'Dios del viento y del aliento vital, padre de dos de los héroes más fuertes de la mitología hindú: Hanuman y Bhima.',
    descripcion_larga: 'Vayu es el viento mismo, la fuerza invisible que mueve las nubes, agita los árboles y llena los pulmones de cada ser vivo con el aliento de la vida (prana). Se le atribuye una velocidad y una fuerza sin igual entre los dioses, cualidades que transmitió directamente a dos de los personajes más poderosos de toda la mitología hindú: Hanuman, el dios mono nacido de una bendición que Vayu concedió a su madre Anjana, y Bhima, el más fuerte de los cinco hermanos Pándavas, concebido cuando Vayu respondió al llamado de la reina Kunti para darle un hijo. Ambos heredaron de su padre una fuerza descomunal y una velocidad extraordinaria, cualidades que resultarían decisivas en los grandes relatos del Ramayana y el Mahabharata respectivamente.',
    origen: 'Presente desde los tiempos védicos más antiguos como personificación del viento',
    dominio: 'El viento, el aliento vital, la velocidad',
    simbolos: ['La bandera ondeante'],
    poderes: [
      { nombre: 'Velocidad y fuerza supremas', descripcion: 'Transmite su fuerza descomunal a sus hijos divinos.' }
    ]
  },
  {
    slug: 'surya', tipo: 'dios', nombre: 'Surya', nombre_griego: 'सूर्य',
    epitetos: 'El Dios Sol, el que Todo lo Ve', naturaleza: 'dios solar', es_preview: 0,
    descripcion_corta: 'Dios del sol, que cruza el cielo cada día en un carro tirado por siete caballos conducido por el auriga Aruna.',
    descripcion_larga: 'Surya cruza el cielo cada día montado en un carro dorado tirado por siete caballos —o por un solo caballo de siete cabezas, según otras versiones—, conducido por Aruna, su propio auriga, que se coloca frente a los rayos del sol para amortiguar su fuerza y que la tierra no sea calcinada por su calor directo. Es padre de varios personajes fundamentales: entre ellos Karna, el gran guerrero trágico del Mahabharata, concebido en secreto con la joven Kunti antes de su matrimonio, y Yama, el dios de la muerte. Se le rinden ofrendas al amanecer en muchos hogares hindúes, y su culto se remonta a los himnos védicos más antiguos, donde se lo invoca como el ojo que todo lo ve y ante quien nada puede permanecer oculto.',
    origen: 'Presente en el cielo desde los tiempos védicos más antiguos',
    dominio: 'El sol, la visión que todo lo alcanza, la energía vital',
    simbolos: ['El carro de siete caballos', 'El disco solar'],
    poderes: [
      { nombre: 'Visión universal', descripcion: 'Su luz alcanza y revela todo lo que existe.' }
    ]
  },
  {
    slug: 'chandra', tipo: 'dios', nombre: 'Chandra', nombre_griego: 'चन्द्र',
    epitetos: 'El Dios Luna, el Amado de Rohini', naturaleza: 'dios lunar', es_preview: 0,
    descripcion_corta: 'Dios de la luna, casado con las veintisiete estrellas nakshatra, cuyo favoritismo hacia una de ellas le costó una maldición que explica las fases lunares.',
    descripcion_larga: 'Chandra gobierna la luna y, con ella, el ritmo de las noches, las mareas y el calendario religioso hindú. Se casó con las veintisiete nakshatras, las constelaciones lunares, hijas del sabio Daksha, pero pronto mostró un favoritismo evidente hacia una de ellas, Rohini, descuidando por completo a sus otras veintiséis esposas. Indignado por la injusticia hacia sus hijas, Daksha maldijo a Chandra a consumirse hasta desaparecer por completo. Ante las súplicas de las esposas abandonadas y del propio Chandra arrepentido, Daksha suavizó la maldición: en lugar de desaparecer para siempre, Chandra menguaría y volvería a crecer en un ciclo eterno de quince días, lo que según la tradición hindú explica hasta hoy las fases de la luna que se observan cada mes.',
    origen: 'Hijo del sabio Atri, casado con las veintisiete nakshatras',
    dominio: 'La luna, el tiempo, las mareas',
    simbolos: ['El creciente lunar', 'El carro tirado por antílopes'],
    poderes: [
      { nombre: 'Ciclo lunar', descripcion: 'Su cuerpo mengua y crece cada mes, marcando el calendario.' }
    ]
  },
  {
    slug: 'yama', tipo: 'dios', nombre: 'Yama', nombre_griego: 'यम',
    epitetos: 'El Señor de la Muerte, el Primer Mortal', naturaleza: 'dios de la muerte', es_preview: 0,
    descripcion_corta: 'Dios de la muerte y juez de las almas, que según la tradición fue el primer ser mortal en morir, abriendo así el camino al más allá.',
    descripcion_larga: 'Yama gobierna el reino de los muertos y preside el juicio de cada alma que llega a él, decidiendo su destino según las acciones (karma) acumuladas en vida. Según los himnos más antiguos, Yama fue el primer ser mortal en morir, y precisamente por haber sido el primero en recorrer ese camino se convirtió en el guía y soberano de todos los que le siguieran después, mostrando el sendero hacia el más allá a quienes vinieran detrás de él. Se lo representa con piel oscura o verdosa, montado en un búfalo, portando una maza y un lazo con el que captura el alma de los moribundos en el momento exacto de su muerte. Aunque temido, Yama no es un dios cruel sino justo: su juicio, registrado por su escriba Chitragupta, se basa estrictamente en las acciones de cada persona, sin favoritismos ni excepciones, ni siquiera para los propios dioses.',
    origen: 'El primer ser mortal en morir, según la tradición védica',
    dominio: 'La muerte, el juicio de las almas, el karma',
    simbolos: ['El búfalo (su montura)', 'El lazo (pasha)', 'La maza'],
    poderes: [
      { nombre: 'Juicio del karma', descripcion: 'Determina con total justicia el destino de cada alma.' }
    ]
  },
  {
    slug: 'kubera', tipo: 'dios', nombre: 'Kubera', nombre_griego: 'कुबेर',
    epitetos: 'El Dios de la Riqueza, Rey de los Yakshas', naturaleza: 'dios de la riqueza', es_preview: 0,
    descripcion_corta: 'Dios de la riqueza y rey de los yakshas, guardián del tesoro del mundo y hermanastro del demonio Ravana.',
    descripcion_larga: 'Kubera custodia toda la riqueza oculta del mundo —oro, joyas y tesoros enterrados— desde su reino en la ciudad de Alaká, en algún lugar del Himalaya, gobernando a los yakshas, espíritus de la naturaleza asociados a la prosperidad. Originalmente reinaba también sobre la isla de Lanka, hasta que su hermanastro, el demonio Ravana, lo expulsó por la fuerza y se apoderó tanto de la isla como de su carro volador, el Pushpaka Vimana, obligando a Kubera a establecer un nuevo reino en el norte. Pese a esa humillación, Kubera conservó su título de guardián de la riqueza y sigue siendo invocado hasta hoy por comerciantes y familias que buscan prosperidad económica, representado como una figura corpulenta cargada de joyas, a menudo con una mangosta que escupe monedas de oro.',
    origen: 'Hijo del sabio Vishrava, hermanastro de Ravana',
    dominio: 'La riqueza, los tesoros ocultos, la prosperidad',
    simbolos: ['La mangosta que escupe monedas', 'El mazo (gada)'],
    poderes: [
      { nombre: 'Custodia de tesoros', descripcion: 'Guarda y concede la riqueza oculta del mundo.' }
    ]
  },
  {
    slug: 'kama', tipo: 'dios', nombre: 'Kama', nombre_griego: 'काम',
    epitetos: 'El Dios del Deseo, el Sin Cuerpo', naturaleza: 'dios del amor y el deseo', es_preview: 0,
    descripcion_corta: 'Dios del amor y el deseo, reducido a cenizas por la mirada de Shiva y condenado desde entonces a existir sin forma física.',
    descripcion_larga: 'Kama es el dios que despierta el deseo y el amor romántico en dioses y mortales por igual, armado con un arco hecho de caña de azúcar y flechas de flores, cada una capaz de encender una pasión distinta. Cuando los dioses necesitaron desesperadamente que Shiva, sumido en una meditación ascética inquebrantable, se enamorara de Parvati para engendrar un hijo capaz de derrotar al demonio Taraka, encomendaron la tarea a Kama. El dios del deseo se acercó en silencio y disparó su flecha justo cuando Shiva abría los ojos, pero la interrupción de su meditación provocó una furia tan intensa que Shiva abrió su tercer ojo y redujo a Kama a cenizas al instante. Ante los ruegos desesperados de Rati, la esposa de Kama, Shiva concedió que el dios del deseo siguiera existiendo, pero sin cuerpo físico: desde entonces Kama es real e invisible a la vez, presente en cada corazón que se enamora sin que nadie pueda verlo llegar.',
    origen: 'Hijo de Brahma o de Lakshmi y Vishnu, según la tradición',
    dominio: 'El amor, el deseo, la atracción',
    simbolos: ['El arco de caña de azúcar', 'Las flechas de flores'],
    poderes: [
      { nombre: 'Despertar del deseo', descripcion: 'Sus flechas encienden el amor y la pasión en quien alcanzan.' }
    ]
  },
  {
    slug: 'durga', tipo: 'dios', nombre: 'Durga', nombre_griego: 'दुर्गा',
    epitetos: 'La Diosa Guerrera, la Invencible', naturaleza: 'diosa guerrera', es_preview: 1,
    descripcion_corta: 'Diosa guerrera creada por la energía combinada de todos los dioses para derrotar a un demonio que ninguno de ellos podía vencer por separado.',
    descripcion_larga: 'Durga nació de una emergencia: el demonio búfalo Mahishasura había obtenido, gracias a una larga penitencia, la bendición de no poder ser derrotado por ningún dios ni por ningún hombre, y con esa protección aterrorizaba tanto a los mortales como a los propios devas, que se vieron expulsados del cielo. Desesperados, los dioses combinaron sus energías individuales —Shiva aportó su rostro, Vishnu sus brazos, Indra su fuerza— en un único haz de luz que tomó la forma de una mujer de belleza sobrecogedora y diez brazos, cada uno empuñando un arma distinta entregada por un dios diferente. Montada sobre un león, Durga libró una batalla feroz de nueve días y nueve noches contra Mahishasura, que cambiaba de forma constantemente para escapar de ella, hasta que finalmente lo atravesó con su tridente en su forma de búfalo, liberando al mundo de su tiranía. Esta victoria se celebra hasta hoy en el festival de Durga Puja, uno de los más importantes del calendario hindú.',
    origen: 'Creada por la energía combinada de todos los dioses',
    dominio: 'La guerra, la protección, la energía femenina invencible',
    simbolos: ['El tridente', 'El león (su montura)', 'Las diez armas de los dioses'],
    poderes: [
      { nombre: 'Fuerza combinada', descripcion: 'Reúne en un solo cuerpo el poder de todos los dioses.' }
    ]
  },
  {
    slug: 'kali', tipo: 'dios', nombre: 'Kali', nombre_griego: 'काली',
    epitetos: 'La Diosa Negra, Señora del Tiempo', naturaleza: 'diosa feroz', es_preview: 1,
    descripcion_corta: 'Forma más feroz de la diosa madre, que emergió de la furia de Durga en batalla y solo pudo ser calmada cuando pisó, sin saberlo, el pecho de su propio esposo Shiva.',
    descripcion_larga: 'Kali surgió del entrecejo furioso de Durga durante una batalla contra los demonios Chanda y Munda, encarnando la ira más pura e incontrolable de la diosa. De piel oscura como la noche, con una guirnalda de cráneos al cuello y la lengua afuera, Kali se lanzó a la matanza con tal ferocidad que, tras vencer a sus enemigos, no logró detenerse: siguió destruyendo todo a su paso en un frenesí que amenazaba con desatar el caos sobre el mundo entero. Desesperado por detenerla, Shiva se tendió en el suelo, en medio del campo de batalla, justo en el camino de la diosa enloquecida. Kali, sin reconocerlo en medio de su furia, le pisó el pecho, y al darse cuenta de que había pisoteado a su propio esposo, sacó la lengua de vergüenza y su ira se disolvió al instante. Esa imagen —Kali de pie sobre Shiva, con la lengua afuera— se convirtió en una de las representaciones más icónicas y profundas de toda la mitología hindú: el tiempo destructor, encarnado en ella, solo se detiene ante la quietud absoluta, representada por Shiva.',
    origen: 'Surgida del entrecejo furioso de Durga en batalla',
    dominio: 'El tiempo, la destrucción, la transformación radical',
    simbolos: ['La guirnalda de cráneos', 'La lengua afuera', 'La espada'],
    poderes: [
      { nombre: 'Furia imparable', descripcion: 'Una vez desatada, su destrucción es casi imposible de detener.' }
    ]
  },
  {
    slug: 'hanuman', tipo: 'semidios', nombre: 'Hanuman', nombre_griego: 'हनुमान्',
    epitetos: 'El Dios Mono, el Devoto Perfecto', naturaleza: 'semidiós mono', es_preview: 1,
    descripcion_corta: 'Dios mono, hijo de Vayu, dotado de fuerza y velocidad sobrehumanas, célebre por su devoción absoluta a Rama.',
    descripcion_larga: 'Hanuman nació de la unión mágica entre Anjana, una ninfa celestial maldecida a nacer como mona, y una bendición del dios del viento Vayu, que le transmitió su propia velocidad y fuerza descomunal. De niño, confundió al sol con una fruta madura y saltó a devorarlo, una hazaña que Indra tuvo que detener con un rayo, dejándole la mandíbula ligeramente deformada —de ahí su nombre, "el de la mandíbula prominente"—. Se convirtió en el aliado más fiel de Rama durante la búsqueda de Sita, capaz de crecer hasta un tamaño colosal o encogerse hasta ser invisible según la ocasión lo requiriera, y protagonizó el salto legendario a través del océano hasta la isla de Lanka para encontrar a la princesa cautiva. Su devoción hacia Rama es tan absoluta que, cuando alguien le preguntó qué era para él, respondió que en el cuerpo era su sirviente, en el alma su parte, y en esencia, uno con él. Es venerado hoy como símbolo perfecto de fuerza puesta al servicio de la devoción.',
    origen: 'Hijo de Anjana y del dios Vayu',
    dominio: 'La fuerza, la devoción, la lealtad',
    simbolos: ['La maza (gada)', 'La montaña con hierbas medicinales que cargó en un vuelo'],
    poderes: [
      { nombre: 'Fuerza y velocidad sobrehumanas', descripcion: 'Puede crecer, encogerse y volar a voluntad.' }
    ]
  },
  {
    slug: 'rama', tipo: 'semidios', nombre: 'Rama', nombre_griego: 'राम',
    epitetos: 'El Príncipe Ideal, Séptimo Avatar de Vishnu', naturaleza: 'semidiós, avatar de Vishnu', es_preview: 0,
    descripcion_corta: 'Séptimo avatar de Vishnu, príncipe de Ayodhya y héroe del Ramayana, considerado el modelo del hijo, esposo y rey ideal.',
    descripcion_larga: 'Rama es la séptima encarnación de Vishnu en la tierra, enviado para derrotar al demonio Ravana, cuya arrogancia se había vuelto tan peligrosa que amenazaba el equilibrio del mundo entero. Criado como príncipe heredero de Ayodhya, fue desterrado catorce años al bosque por una promesa que su padre, el rey Dasharatha, se vio obligado a cumplir, y partió sin quejarse, acompañado por su esposa Sita y su hermano Lakshmana. Cuando Ravana secuestró a Sita, Rama emprendió una búsqueda que lo llevó a aliarse con el ejército de monos liderado por Hanuman y Sugriva, construir un puente hasta la isla de Lanka y librar una guerra decisiva contra el rey demonio. Su historia, narrada en el Ramayana, se cuenta y se celebra en toda la India como el modelo del comportamiento ideal en cada etapa de la vida: el hijo obediente, el hermano leal, el esposo devoto y, finalmente, el rey justo cuyo reinado —Ram Rajya— se recuerda como una era de paz y prosperidad perfectas.',
    origen: 'Encarnación de Vishnu, nacido príncipe de Ayodhya',
    dominio: 'El deber (dharma), la realeza justa, la devoción conyugal',
    simbolos: ['El arco y las flechas', 'El color azul de su piel (como Vishnu)'],
    poderes: [
      { nombre: 'Poder divino contenido', descripcion: 'Como avatar de Vishnu, posee un poder que rara vez revela por completo.' }
    ]
  },
  {
    slug: 'krishna', tipo: 'semidios', nombre: 'Krishna', nombre_griego: 'कृष्ण',
    epitetos: 'El Encantador, Octavo Avatar de Vishnu', naturaleza: 'semidiós, avatar de Vishnu', es_preview: 1,
    descripcion_corta: 'Octavo avatar de Vishnu, pastor y príncipe cuya vida abarca la travesura infantil, el amor y la guerra, y cuyas enseñanzas forman el Bhagavad Gita.',
    descripcion_larga: 'Krishna es quizás la encarnación más amada y multifacética de Vishnu: nació en una prisión, escapó de niño de un tío tirano que buscaba matarlo, y creció como un pastor travieso en las aldeas de Vraja, robando mantequilla y encantando a todos con su flauta. De joven regresó a Mathura para derrocar al rey Kamsa, cumpliendo la profecía que había puesto en peligro su vida desde el nacimiento. Años después, en el campo de batalla de Kurukshetra, actuó como auriga del príncipe Arjuna, y cuando este, paralizado por el horror de tener que luchar contra su propia familia, se negó a combatir, Krishna le reveló su forma cósmica universal y le transmitió las enseñanzas que se conservan hasta hoy como el Bhagavad Gita, uno de los textos más influyentes de toda la filosofía india. Esta combinación única de dios travieso, amante, guerrero y maestro espiritual convierte a Krishna en una de las figuras más ricas y veneradas de la mitología hindú.',
    origen: 'Encarnación de Vishnu, nacido príncipe de Mathura',
    dominio: 'El amor divino, la sabiduría, la guerra justa',
    simbolos: ['La flauta', 'La pluma de pavo real', 'El disco (chakra) Sudarshana'],
    poderes: [
      { nombre: 'La forma cósmica universal', descripcion: 'Puede revelar su verdadera naturaleza como el universo entero contenido en un solo cuerpo.' }
    ]
  },
  {
    slug: 'sita', tipo: 'semidios', nombre: 'Sita', nombre_griego: 'सीता',
    epitetos: 'La Princesa de la Tierra, Avatar de Lakshmi', naturaleza: 'semidiosa, avatar de Lakshmi', es_preview: 0,
    descripcion_corta: 'Esposa de Rama y avatar de Lakshmi, hallada de niña brotando de un surco de tierra arada, símbolo de fidelidad y fortaleza inquebrantables.',
    descripcion_larga: 'Sita fue hallada cuando era niña por el rey Janaka mientras araba un campo ritual, brotando literalmente de la tierra removida por su arado, lo que le dio su nombre —"surco"— y la hizo considerar desde entonces un avatar de la propia Lakshmi, diosa de la fortuna. Se casó con Rama tras ganar este una competencia en la que ningún otro pretendiente logró siquiera doblar el arco divino que ella exigía como condición. Acompañó a su esposo al exilio sin dudarlo, y fue secuestrada por Ravana mediante un engaño que involucró a un ciervo dorado, pasando meses cautiva en los jardines de Lanka sin ceder jamás ante las presiones del rey demonio para que lo aceptara como esposo. Tras ser rescatada, tuvo que someterse a una prueba de fuego para demostrar su pureza ante la corte, una injusticia que soportó con una dignidad que la convirtió, para generaciones de indios, en el símbolo definitivo de la fidelidad, la paciencia y la fortaleza frente a la adversidad.',
    origen: 'Hallada brotando de la tierra arada, hija adoptiva del rey Janaka',
    dominio: 'La fidelidad, la fortaleza, la tierra',
    simbolos: ['El surco de tierra', 'El loto'],
    poderes: []
  },
  {
    slug: 'purusha', tipo: 'otro', nombre: 'Purusha', nombre_griego: 'पुरुष',
    epitetos: 'El Ser Cósmico Primordial', naturaleza: 'ser primordial', es_preview: 0,
    descripcion_corta: 'Ser cósmico primordial, sacrificado por los propios dioses para dar forma al universo y a las cuatro grandes clases de la sociedad humana.',
    descripcion_larga: 'Purusha es el ser cósmico original, un gigante primordial que contenía en su cuerpo todo lo que llegaría a existir: mil cabezas, mil ojos y mil pies, extendido sobre todo el universo y más allá de él. Según el himno más antiguo que narra su historia, los propios dioses lo sacrificaron ritualmente al principio de los tiempos, y de las distintas partes de su cuerpo desmembrado surgió absolutamente todo: de su mente nació la luna, de su ojo el sol, de su boca Indra y Agni, de su aliento el viento. De ese mismo sacrificio surgieron también las cuatro grandes clases (varnas) de la sociedad humana tradicional: los sacerdotes de su boca, los guerreros de sus brazos, los comerciantes de sus muslos y los trabajadores de sus pies. Purusha representa así la idea de que el universo entero, incluida la sociedad humana, nació de un único sacrificio primordial cuyo eco se repite simbólicamente en cada ritual védico posterior.',
    origen: 'Ser primordial anterior a la creación misma',
    dominio: 'La totalidad del cosmos, el origen de todas las cosas',
    simbolos: [],
    poderes: [
      { nombre: 'Origen de todo', descripcion: 'De su cuerpo sacrificado surgió el universo entero.' }
    ]
  },
  {
    slug: 'shesha', tipo: 'otro', nombre: 'Shesha', nombre_griego: 'शेष',
    epitetos: 'La Serpiente Infinita, el Lecho de Vishnu', naturaleza: 'serpiente cósmica primordial', es_preview: 0,
    descripcion_corta: 'Serpiente cósmica de mil cabezas sobre la que reposa Vishnu, que sostiene además a todos los planetas del universo.',
    descripcion_larga: 'Shesha —cuyo nombre significa "lo que permanece"— es una serpiente cósmica de mil cabezas que existió incluso antes de que el universo actual comenzara, y que continuará existiendo después de que termine. Flota eternamente sobre las aguas primordiales, y sobre sus anillos enroscados descansa Vishnu durante los períodos de disolución del universo, esperando el momento de la siguiente creación. Además de servir de lecho cósmico a Vishnu, Shesha sostiene sobre una de sus innumerables cabezas el peso de todos los planetas del universo, sin esfuerzo aparente y sin queja alguna, motivo por el cual también se lo conoce como Ananta, "el infinito". En algunas tradiciones, se cree que el héroe Balarama, hermano mayor de Krishna, es en realidad una encarnación parcial de esta misma serpiente cósmica, descendida a la tierra junto a su hermano divino.',
    origen: 'Existente desde antes del universo actual, y después de su disolución',
    dominio: 'La eternidad, el sostén cósmico, el descanso de Vishnu',
    simbolos: ['Las mil cabezas de serpiente'],
    poderes: [
      { nombre: 'Sostén universal', descripcion: 'Carga sobre sí el peso de todos los planetas sin esfuerzo.' }
    ]
  },
  {
    slug: 'ravana', tipo: 'monstruo', nombre: 'Ravana', nombre_griego: 'रावण',
    epitetos: 'El Rey Demonio de las Diez Cabezas', naturaleza: 'rakshasa (demonio), rey de Lanka', es_preview: 0,
    descripcion_corta: 'Rey demonio de diez cabezas y veinte brazos, gobernante de Lanka, cuyo secuestro de Sita desencadenó la guerra narrada en el Ramayana.',
    descripcion_larga: 'Ravana gobierna Lanka con un poder que pocos seres, divinos o mortales, pueden igualar: obtuvo de Brahma, tras siglos de severa penitencia, la bendición de ser invulnerable ante dioses, demonios y espíritus, un descuido que dejó abierta, sin que él lo notara, la posibilidad de ser derrotado por un simple mortal —o por un avatar disfrazado de tal—. Erudito consumado, gran músico y devoto sincero de Shiva, Ravana no era solo un monstruo bruto: su tragedia nace precisamente de combinar una inteligencia y un poder extraordinarios con una arrogancia que terminó por consumirlo. Enamorado obsesivamente de Sita tras un encuentro casual, la secuestró mediante el engaño de un ciervo dorado y la mantuvo cautiva en los jardines de su palacio durante meses, sin lograr jamás quebrar su resistencia. Su negativa a devolverla desencadenó la guerra que Rama libró contra él en Lanka, un conflicto que terminó con la muerte de Ravana a manos del príncipe exiliado, cerrando así el ciclo que su propia arrogancia había puesto en marcha.',
    origen: 'Hijo del sabio Vishrava, rey de Lanka',
    dominio: 'El poder usurpado, el orgullo, la erudición',
    simbolos: ['Las diez cabezas', 'El carro volador Pushpaka Vimana'],
    poderes: [
      { nombre: 'Invulnerabilidad casi total', descripcion: 'No puede ser derrotado por ningún dios ni demonio, solo por un mortal.' }
    ]
  },
  {
    slug: 'hiranyakashipu', tipo: 'monstruo', nombre: 'Hiranyakashipu', nombre_griego: 'हिरण्यकशिपु',
    epitetos: 'El Rey Demonio Casi Invencible', naturaleza: 'asura (demonio), rey tirano', es_preview: 0,
    descripcion_corta: 'Rey demonio que obtuvo una bendición de casi total invulnerabilidad y se proclamó dios, hasta que Vishnu encontró el resquicio exacto para derrotarlo.',
    descripcion_larga: 'Hiranyakashipu odiaba a Vishnu con una furia especial: el dios había matado a su hermano en forma del avatar jabalí Varaha, y desde entonces juró vengarse de toda la estirpe divina. Tras una penitencia extrema, obtuvo de Brahma una bendición que parecía hacerlo invencible: no podría morir de día ni de noche, dentro ni fuera de una vivienda, en la tierra ni en el cielo, a manos de un hombre ni de un animal, ni por ningún arma. Convencido de su propia invulnerabilidad, se proclamó dios supremo y exigió que todo su reino lo adorara a él en lugar de a Vishnu, una orden que su propio hijo Prahlada, devoto inquebrantable del dios, se negó a obedecer pese a todos los castigos que su padre le infligió. Furioso, Hiranyakashipu desafió a Prahlada a demostrar que Vishnu estaba presente incluso en un pilar del palacio; cuando lo golpeó, el pilar se abrió y de él emergió Narasimha, el avatar mitad hombre mitad león de Vishnu, que lo despedazó al atardecer, sobre el umbral de una puerta y sobre su propio regazo, esquivando con precisión cada una de las condiciones de su bendición.',
    origen: 'Rey de los asuras, hermano de Hiranyaksha',
    dominio: 'El poder tiránico, la arrogancia, el desafío a los dioses',
    simbolos: [],
    poderes: [
      { nombre: 'Casi invulnerabilidad', descripcion: 'Protegido por una bendición que solo un resquicio preciso podía burlar.' }
    ]
  },
  {
    slug: 'mahishasura', tipo: 'monstruo', nombre: 'Mahishasura', nombre_griego: 'महिषासुर',
    epitetos: 'El Demonio Búfalo', naturaleza: 'asura metamorfo', es_preview: 0,
    descripcion_corta: 'Demonio capaz de transformarse en búfalo, protegido por una bendición que le impedía ser vencido por cualquier dios o mortal varón, hasta que Durga lo enfrentó.',
    descripcion_larga: 'Mahishasura obtuvo, tras años de penitencia, una bendición que parecía hacerlo invulnerable: ningún dios ni ningún hombre podría jamás derrotarlo. Envalentonado por esa protección, atacó el cielo y expulsó a los propios devas de su reino, sumiendo al universo en el caos. Su naturaleza metamorfa —capaz de transformarse en búfalo, león o cualquier otra bestia en pleno combate— hacía casi imposible predecir o contrarrestar sus ataques. Cuando los dioses, desesperados, comprendieron que ningún varón divino podría cumplir la condición de su bendición, combinaron sus energías para crear a Durga, una guerrera que no era ni dios ni hombre en el sentido literal de la maldición. Durante nueve días de combate feroz, Mahishasura cambió de forma una y otra vez para escapar de ella, hasta que, en el instante en que emergía a medias de su forma de búfalo, Durga lo atravesó con su tridente, poniendo fin a su reinado de terror y devolviendo el equilibrio al universo.',
    origen: 'Asura nacido con la capacidad de transformarse en búfalo',
    dominio: 'El caos, la usurpación del poder celestial',
    simbolos: [],
    poderes: [
      { nombre: 'Metamorfosis en combate', descripcion: 'Cambia de forma constantemente para evadir a sus enemigos.' }
    ]
  },
  {
    slug: 'kamsa', tipo: 'monstruo', nombre: 'Kamsa', nombre_griego: 'कंस',
    epitetos: 'El Tirano de Mathura', naturaleza: 'rey tirano de naturaleza demoníaca', es_preview: 0,
    descripcion_corta: 'Rey tirano de Mathura, tío de Krishna, que aterrorizado por una profecía intentó matar a cada uno de los hijos de su propia hermana.',
    descripcion_larga: 'Kamsa usurpó el trono de Mathura encarcelando a su propio padre, y gobernó con una crueldad que muchos atribuían a una naturaleza demoníaca oculta bajo forma humana. Cuando una voz profética le advirtió, el mismo día de la boda de su hermana Devaki, que el octavo hijo de esta lo mataría, Kamsa encerró a Devaki y a su esposo Vasudeva en una prisión y asesinó personalmente a cada uno de sus primeros hijos apenas nacían. Pero cuando llegó el octavo, Krishna, un milagro divino hizo que los guardias cayeran dormidos y las cadenas se soltaran por sí solas, permitiendo que Vasudeva cruzara el río Yamuna en plena tormenta para intercambiar al bebé por la hija recién nacida de otra pareja en un pueblo cercano. Años después, convocando a Krishna, ya crecido, a un torneo en su palacio con la intención de matarlo de una vez por todas, Kamsa terminó por enfrentarlo directamente en combate, y el joven que había intentado eliminar de niño finalmente lo derrotó y le dio muerte, cumpliendo así la profecía que Kamsa había pasado toda su vida tratando de evitar.',
    origen: 'Rey usurpador de Mathura, tío materno de Krishna',
    dominio: 'La tiranía, el miedo al destino',
    simbolos: [],
    poderes: []
  },
  {
    slug: 'arjuna', tipo: 'heroe', nombre: 'Arjuna', nombre_griego: 'अर्जुन',
    epitetos: 'El Arquero Perfecto, Discípulo de Krishna', naturaleza: 'príncipe guerrero', es_preview: 0,
    descripcion_corta: 'Tercero de los cinco hermanos Pándavas, arquero sin igual, cuya crisis de conciencia en el campo de batalla dio origen al Bhagavad Gita.',
    descripcion_larga: 'Arjuna es el más talentoso de los cinco hermanos Pándavas en el arte del combate, un arquero cuya puntería nadie en el mundo podía igualar, ganada a través de años de entrenamiento bajo el maestro Drona y de pruebas sobrehumanas de concentración. Su vínculo más importante, sin embargo, no es con un arma sino con Krishna, que actúa como su auriga personal durante la gran guerra de Kurukshetra. Al ver frente a él, en el campo de batalla, a sus propios primos, maestros y parientes formando el bando enemigo, Arjuna sintió que las fuerzas lo abandonaban y se negó a luchar, incapaz de justificar derramar la sangre de su propia familia por un trono. Fue en ese momento de colapso moral cuando Krishna le reveló las enseñanzas que conforman el Bhagavad Gita, sobre el deber, el desapego del resultado de las acciones y la naturaleza eterna del alma, convenciéndolo finalmente de cumplir su deber como guerrero. Con ese conflicto resuelto, Arjuna se convirtió en una de las figuras centrales de la victoria final de los Pándavas.',
    origen: 'Tercero de los cinco hermanos Pándavas, hijo de Indra',
    dominio: 'El arco y la flecha, el deber del guerrero',
    simbolos: ['El arco Gandiva', 'El carro conducido por Krishna'],
    poderes: [
      { nombre: 'Puntería sobrehumana', descripcion: 'Su habilidad con el arco no tiene igual entre los mortales.' }
    ]
  },
  {
    slug: 'bhima', tipo: 'heroe', nombre: 'Bhima', nombre_griego: 'भीम',
    epitetos: 'El Más Fuerte de los Pándavas', naturaleza: 'príncipe guerrero', es_preview: 0,
    descripcion_corta: 'Segundo de los cinco hermanos Pándavas, hijo del dios Vayu, dotado de una fuerza descomunal y un apetito legendario.',
    descripcion_larga: 'Bhima heredó del dios del viento Vayu una fuerza física que ningún otro guerrero de su generación pudo igualar, capaz desde niño de arrancar árboles de raíz y de vencer a decenas de enemigos él solo en batalla. Su apetito era tan legendario como su fuerza, y su temperamento, mucho más impulsivo que el de sus hermanos más calculadores, lo llevó a protagonizar algunos de los episodios más violentos y memorables del Mahabharata: mató con sus propias manos a varios de los primos Kaurava que habían humillado a Draupadi, y cumplió su juramento de romper el muslo de Duryodhana en un duelo final que decidió gran parte del destino de la guerra. Pese a su ferocidad en combate, Bhima siempre actuó movido por una lealtad absoluta hacia sus hermanos y por la necesidad de vengar cada agravio cometido contra su familia, convirtiéndose en el brazo ejecutor de la justicia que sus hermanos, más comedidos, preferían posponer.',
    origen: 'Segundo de los cinco hermanos Pándavas, hijo del dios Vayu',
    dominio: 'La fuerza descomunal, la venganza justa',
    simbolos: ['La maza (gada)'],
    poderes: [
      { nombre: 'Fuerza sobrehumana', descripcion: 'Hereda de su padre divino una fuerza que ningún mortal puede igualar.' }
    ]
  },
  {
    slug: 'karna', tipo: 'heroe', nombre: 'Karna', nombre_griego: 'कर्ण',
    epitetos: 'El Guerrero del Sol, el Hijo No Reconocido', naturaleza: 'príncipe guerrero', es_preview: 0,
    descripcion_corta: 'Hijo secreto de Kunti y del dios Surya, abandonado al nacer, que se convirtió en un guerrero extraordinario despreciado por su origen humilde hasta el final de sus días.',
    descripcion_larga: 'Karna nació de una unión entre la joven Kunti y el dios Surya, invocado por ella antes de su matrimonio con solo un mantra que había recibido de un sabio, sin comprender del todo sus consecuencias. Avergonzada, Kunti abandonó al recién nacido en una cesta que dejó flotar por el río, y el niño fue recogido y criado por un auriga y su esposa, ajeno por completo a su verdadero origen divino. Karna creció como un guerrero de un talento extraordinario, capaz de rivalizar con el propio Arjuna en el manejo del arco, pero fue despreciado durante toda su vida por los guerreros de clase noble debido a su nacimiento humilde, hasta que Duryodhana, príncipe Kaurava, lo nombró rey de un territorio propio solo para poder incluirlo entre sus aliados. Esa lealtad se convirtió en el eje trágico de su vida: cuando finalmente Kunti le reveló, la noche antes de la gran guerra, que era en realidad el hermano mayor de los Pándavas, Karna se negó a abandonar a Duryodhana, el único que lo había tratado con dignidad, y eligió luchar y morir del lado equivocado de la guerra por pura lealtad.',
    origen: 'Hijo secreto de Kunti y el dios Surya',
    dominio: 'El arco y la flecha, la lealtad trágica',
    simbolos: ['El arco', 'La armadura y los pendientes dorados con los que nació'],
    poderes: [
      { nombre: 'Habilidad con el arco', descripcion: 'Rivaliza con Arjuna como el mejor arquero de su generación.' }
    ]
  },
  {
    slug: 'yudhishthira', tipo: 'heroe', nombre: 'Yudhishthira', nombre_griego: 'युधिष्ठिर',
    epitetos: 'El Rey del Dharma', naturaleza: 'príncipe y rey', es_preview: 0,
    descripcion_corta: 'Mayor de los cinco hermanos Pándavas, conocido por su honestidad casi absoluta, cuyo único gran error —un juego de dados— desencadenó la guerra de Kurukshetra.',
    descripcion_larga: 'Yudhishthira es el mayor de los cinco hermanos Pándavas, hijo del dios Yama, y su cualidad definitoria es una honestidad tan estricta que se dice que su carro, a diferencia del de cualquier otro guerrero, flotaba ligeramente sobre el suelo por el peso casi nulo de sus mentiras —hasta el único momento en que dijo una verdad a medias en batalla, tras lo cual el carro tocó tierra por primera y única vez. Su defecto más trágico fue una debilidad por el juego de dados: manipulado por su primo Duryodhana y el tramposo Shakuni, perdió en una sola partida su reino, a sus hermanos, a sí mismo y finalmente a su esposa Draupadi, desencadenando la cadena de humillaciones que llevaría directamente a la guerra de Kurukshetra. Pese a ese error, Yudhishthira gobernó después con una justicia y una entrega al dharma tan ejemplares que, al final de sus días, fue el único de los grandes héroes admitido en el cielo con su cuerpo mortal intacto, tras superar una última prueba de lealtad hacia un perro que lo había acompañado en su ascenso final a la montaña.',
    origen: 'Mayor de los cinco hermanos Pándavas, hijo del dios Yama',
    dominio: 'La justicia, la verdad, el dharma',
    simbolos: ['Los dados (su debilidad)', 'El carro que flotaba sobre el suelo'],
    poderes: [
      { nombre: 'Honestidad casi absoluta', descripcion: 'Su compromiso con la verdad es prácticamente inquebrantable.' }
    ]
  },
  {
    slug: 'prahlada', tipo: 'heroe', nombre: 'Prahlada', nombre_griego: 'प्रह्लाद',
    epitetos: 'El Niño Devoto, el que Nunca Dudó', naturaleza: 'príncipe devoto', es_preview: 0,
    descripcion_corta: 'Hijo del rey demonio Hiranyakashipu, devoto inquebrantable de Vishnu pese a los castigos de su propio padre, salvado finalmente por el avatar Narasimha.',
    descripcion_larga: 'Prahlada nació hijo del temido rey demonio Hiranyakashipu, pero desde niño mostró una devoción hacia Vishnu que ninguna amenaza logró quebrar. Cuando su padre, furioso por proclamarse él mismo dios supremo, exigió que todo el reino lo adorara en lugar de a Vishnu, Prahlada se negó rotundamente, sin importarle las consecuencias. Hiranyakashipu intentó matarlo de todas las formas imaginables —arrojándolo por un precipicio, dejándolo pisotear por elefantes, exponiéndolo a serpientes venenosas, incluso sentándolo en el regazo de su propia tía sobre una hoguera—, pero en cada ocasión Prahlada sobrevivió ileso gracias a su fe inquebrantable. Finalmente, cuando su padre lo desafió a demostrar que Vishnu estaba presente incluso en un pilar del palacio, Prahlada respondió con total serenidad que sí, que Vishnu estaba en todas partes, y el pilar se abrió para revelar a Narasimha, que acabó con Hiranyakashipu y coronó a Prahlada como el nuevo rey, un gobernante tan justo como devoto había sido de niño.',
    origen: 'Hijo del rey demonio Hiranyakashipu',
    dominio: 'La devoción inquebrantable, la fe',
    simbolos: [],
    poderes: [
      { nombre: 'Fe inquebrantable', descripcion: 'Ninguna amenaza ni tortura logró hacerlo dudar de su devoción.' }
    ]
  },
  {
    slug: 'draupadi', tipo: 'mortal', nombre: 'Draupadi', nombre_griego: 'द्रौपदी',
    epitetos: 'La Princesa de Fuego, Esposa de los Cinco Pándavas', naturaleza: 'princesa', es_preview: 0,
    descripcion_corta: 'Princesa nacida del fuego de un sacrificio, esposa compartida de los cinco hermanos Pándavas, cuya humillación en la corte desencadenó la guerra de Kurukshetra.',
    descripcion_larga: 'Draupadi nació de forma extraordinaria: emergió ya adulta de las llamas de un altar de sacrificio que su padre, el rey Drupada, había encargado con el propósito específico de obtener un hijo capaz de vengarlo de sus enemigos. Se casó con los cinco hermanos Pándavas a la vez, un arreglo poco común que la tradición justifica de distintas maneras, y se convirtió en una figura de enorme fuerza de carácter e inteligencia dentro de la corte. El momento que definiría el resto de su historia llegó cuando Yudhishthira, su esposo mayor, la perdió a ella misma en una partida de dados amañada contra los primos Kaurava: arrastrada por los cabellos hasta la corte real, Draupadi fue sometida al intento de Dushasana de desnudarla públicamente como humillación final, pero cada vez que él tiraba de su sari, una tela nueva aparecía milagrosamente debajo, en un prodigio que la tradición atribuye a la intervención de Krishna. Esa humillación pública se convirtió en el agravio que Draupadi exigió vengar antes que ninguna otra cosa, y su ira alimentó directamente la determinación de los Pándavas de ir a la guerra contra sus primos.',
    origen: 'Nacida del fuego de un altar de sacrificio, hija del rey Drupada',
    dominio: 'La dignidad, la venganza justa, la fuerza de carácter',
    simbolos: ['El fuego del sacrificio', 'El sari infinito'],
    poderes: []
  },
  {
    slug: 'dasharatha', tipo: 'mortal', nombre: 'Dasharatha', nombre_griego: 'दशरथ',
    epitetos: 'El Rey de Ayodhya, Padre de Rama', naturaleza: 'rey', es_preview: 0,
    descripcion_corta: 'Rey de Ayodhya y padre de Rama, obligado por una promesa antigua a desterrar a su hijo favorito, una decisión que le costó la vida de dolor.',
    descripcion_larga: 'Dasharatha gobernó Ayodhya con sabiduría durante décadas, pero su vida quedó marcada por dos promesas que había hecho años atrás a su esposa más joven, Kaikeyi, tras salvarle la vida en batalla. Cuando llegó el momento de coronar a Rama, su hijo mayor y su heredero natural, como nuevo rey, Kaikeyi, manipulada por su sirvienta, exigió que Dasharatha cumpliera esas promesas: desterrar a Rama al bosque durante catorce años y coronar en su lugar a su propio hijo Bharata. Atrapado por su propia palabra de honor, Dasharatha no pudo negarse, pese a que la decisión le partía el corazón, y tuvo que ver partir a su hijo favorito hacia el exilio sin poder hacer nada para impedirlo. El dolor de la separación resultó demasiado grande para el anciano rey, que murió de pena poco después, sin llegar a ver el regreso de Rama ni la reconciliación final de su familia.',
    origen: 'Rey de la dinastía solar de Ayodhya',
    dominio: 'La realeza, el honor de la palabra dada',
    simbolos: [],
    poderes: []
  }
];

// ------------------------------------------------------------
// RELACIONES FAMILIARES (se insertan en las dos direcciones que
// tengan sentido narrativo -- misma estructura que el libro egipcio)
// ------------------------------------------------------------
const RELACIONES = [
  { de: 'brahma', tipoDeADestino: 'conyuge', a: 'saraswati', tipoDeDestinoADe: 'conyuge' },
  { de: 'vishnu', tipoDeADestino: 'conyuge', a: 'lakshmi', tipoDeDestinoADe: 'conyuge' },
  { de: 'vishnu', tipoDeADestino: 'otro', a: 'shesha', tipoDeDestinoADe: 'otro', notaDeADestino: 'Reposa sobre sus anillos entre creaciones del universo', notaDestinoADe: 'Es el lecho cósmico de Vishnu' },
  { de: 'vishnu', tipoDeADestino: 'creador', a: 'rama', tipoDeDestinoADe: 'otro', notaDestinoADe: 'Séptimo avatar de Vishnu' },
  { de: 'vishnu', tipoDeADestino: 'creador', a: 'krishna', tipoDeDestinoADe: 'otro', notaDestinoADe: 'Octavo avatar de Vishnu' },
  { de: 'vishnu', tipoDeADestino: 'otro', a: 'brahma', tipoDeDestinoADe: 'otro', notaDeADestino: 'Nació de un loto brotado de su ombligo', notaDestinoADe: 'Nació de un loto brotado del ombligo de Vishnu' },
  { de: 'shiva', tipoDeADestino: 'conyuge', a: 'parvati', tipoDeDestinoADe: 'conyuge' },
  { de: 'shiva', tipoDeADestino: 'padre', a: 'ganesha', tipoDeDestinoADe: 'hijo' },
  { de: 'shiva', tipoDeADestino: 'padre', a: 'kartikeya', tipoDeDestinoADe: 'hijo' },
  { de: 'parvati', tipoDeADestino: 'madre', a: 'ganesha', tipoDeDestinoADe: 'madre' },
  { de: 'parvati', tipoDeADestino: 'madre', a: 'kartikeya', tipoDeDestinoADe: 'madre' },
  { de: 'parvati', tipoDeADestino: 'otro', a: 'durga', tipoDeDestinoADe: 'otro', notaDeADestino: 'Puede manifestarse como Durga', notaDestinoADe: 'Una de las formas feroces de Parvati' },
  { de: 'parvati', tipoDeADestino: 'otro', a: 'kali', tipoDeDestinoADe: 'otro', notaDeADestino: 'Puede manifestarse como Kali', notaDestinoADe: 'Una de las formas feroces de Parvati' },
  { de: 'shiva', tipoDeADestino: 'verdugo', a: 'kama', tipoDeDestinoADe: 'otro', notaDestinoADe: 'Reducido a cenizas por su mirada' },
  { de: 'shiva', tipoDeADestino: 'conyuge', a: 'kali', tipoDeDestinoADe: 'conyuge' },
  { de: 'vayu', tipoDeADestino: 'padre', a: 'hanuman', tipoDeDestinoADe: 'hijo' },
  { de: 'vayu', tipoDeADestino: 'padre', a: 'bhima', tipoDeDestinoADe: 'hijo' },
  { de: 'surya', tipoDeADestino: 'padre', a: 'karna', tipoDeDestinoADe: 'hijo' },
  { de: 'surya', tipoDeADestino: 'padre', a: 'yama', tipoDeDestinoADe: 'hijo' },
  { de: 'rama', tipoDeADestino: 'conyuge', a: 'sita', tipoDeDestinoADe: 'conyuge' },
  { de: 'rama', tipoDeADestino: 'aliado', a: 'hanuman', tipoDeDestinoADe: 'aliado' },
  { de: 'rama', tipoDeADestino: 'enemigo', a: 'ravana', tipoDeDestinoADe: 'enemigo' },
  { de: 'rama', tipoDeADestino: 'hijo', a: 'dasharatha', tipoDeDestinoADe: 'padre' },
  { de: 'sita', tipoDeADestino: 'enemigo', a: 'ravana', tipoDeDestinoADe: 'otro', notaDestinoADe: 'La mantuvo cautiva en Lanka' },
  { de: 'krishna', tipoDeADestino: 'mentor', a: 'arjuna', tipoDeDestinoADe: 'aliado' },
  { de: 'krishna', tipoDeADestino: 'verdugo', a: 'kamsa', tipoDeDestinoADe: 'enemigo' },
  { de: 'krishna', tipoDeADestino: 'aliado', a: 'draupadi', tipoDeDestinoADe: 'aliado' },
  { de: 'arjuna', tipoDeADestino: 'hermano', a: 'bhima', tipoDeDestinoADe: 'hermano' },
  { de: 'arjuna', tipoDeADestino: 'hermano', a: 'yudhishthira', tipoDeDestinoADe: 'hermano' },
  { de: 'bhima', tipoDeADestino: 'hermano', a: 'yudhishthira', tipoDeDestinoADe: 'hermano' },
  { de: 'yudhishthira', tipoDeADestino: 'conyuge', a: 'draupadi', tipoDeDestinoADe: 'conyuge' },
  { de: 'karna', tipoDeADestino: 'enemigo', a: 'arjuna', tipoDeDestinoADe: 'enemigo' },
  { de: 'karna', tipoDeADestino: 'hermano', a: 'yudhishthira', tipoDeDestinoADe: 'hermano', notaDeADestino: 'Hermano mayor, revelado la noche antes de la guerra', notaDestinoADe: 'Hermano mayor, revelado la noche antes de la guerra' },
  { de: 'durga', tipoDeADestino: 'enemigo', a: 'mahishasura', tipoDeDestinoADe: 'enemigo' },
  { de: 'ganesha', tipoDeADestino: 'hermano', a: 'kartikeya', tipoDeDestinoADe: 'hermano' },
  { de: 'hiranyakashipu', tipoDeADestino: 'enemigo', a: 'vishnu', tipoDeDestinoADe: 'enemigo' },
  { de: 'prahlada', tipoDeADestino: 'hijo', a: 'hiranyakashipu', tipoDeDestinoADe: 'padre' },
  { de: 'prahlada', tipoDeADestino: 'aliado', a: 'vishnu', tipoDeDestinoADe: 'aliado' },
  { de: 'purusha', tipoDeADestino: 'creador', a: 'indra', tipoDeDestinoADe: 'otro', notaDestinoADe: 'Nació de su boca, según el mito de su sacrificio' },
  { de: 'purusha', tipoDeADestino: 'creador', a: 'agni', tipoDeDestinoADe: 'otro', notaDestinoADe: 'Nació de su boca, según el mito de su sacrificio' },
  { de: 'purusha', tipoDeADestino: 'creador', a: 'chandra', tipoDeDestinoADe: 'otro', notaDestinoADe: 'Nació de su mente, según el mito de su sacrificio' },
  { de: 'purusha', tipoDeADestino: 'creador', a: 'surya', tipoDeDestinoADe: 'otro', notaDestinoADe: 'Nació de su ojo, según el mito de su sacrificio' }
];

// ------------------------------------------------------------
// HISTORIAS
// ------------------------------------------------------------
const HISTORIAS = [
  {
    slug: 'creacion-por-el-sacrificio-de-purusha', tipo: 'cosmogonia', periodo: 'Antes del tiempo', es_preview: 1,
    titulo: 'La creación por el sacrificio de Purusha',
    resumen: 'Los dioses sacrifican al ser cósmico primordial Purusha, y de su cuerpo desmembrado surgen el sol, la luna, los dioses y las clases de la sociedad humana.',
    texto_completo: `En el principio, antes de que el tiempo mismo comenzara a contarse, existía Purusha, un ser cósmico de proporciones imposibles: mil cabezas, mil ojos y mil pies, que se extendía por todo el universo y todavía sobraba diez dedos más allá de sus límites. Todo lo que había existido, existía y existiría jamás estaba contenido dentro de él, como si el cosmos entero no fuera más que una parte de su propio cuerpo inmenso.\n\nLos dioses, deseosos de dar forma al mundo ordenado que después habitarían, decidieron ofrecer a Purusha como sacrificio ritual, atándolo sobre la hierba sagrada y desmembrándolo con sus propias manos según los ritos más antiguos. De ese sacrificio primordial surgió absolutamente todo lo que existe: de su mente nació la luna, de su ojo el sol, de su boca Indra y Agni, y de su aliento el viento Vayu. El cielo se formó de su cabeza, la tierra de sus pies, y las direcciones del espacio de sus oídos.\n\nDel mismo cuerpo desmembrado de Purusha nacieron también las cuatro grandes clases de la sociedad humana: de su boca surgieron los brahmanes, sacerdotes y maestros; de sus brazos los kshatriyas, guerreros y gobernantes; de sus muslos los vaishyas, comerciantes y agricultores; y de sus pies los shudras, trabajadores y artesanos. Cada parte del cuerpo cósmico encontró así su lugar correspondiente en el mundo ordenado que emergía del sacrificio.\n\nEste mito, uno de los más antiguos conservados en los himnos védicos, no se entendía como una historia de violencia sino como el modelo mismo de todo sacrificio posterior: cada ofrenda que un sacerdote arroja al fuego desde entonces repite, en miniatura, el sacrificio original de Purusha, recordando que el universo entero nació de un acto de entrega total.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Rig Veda (Himno del Purusha Sukta)', anio_aprox: 'c. 1200 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'purusha', rol: 'protagonista' },
      { slug: 'indra', rol: 'mencionado' },
      { slug: 'agni', rol: 'mencionado' },
      { slug: 'chandra', rol: 'mencionado' },
      { slug: 'surya', rol: 'mencionado' }
    ]
  },
  {
    slug: 'batido-del-oceano-de-leche', tipo: 'cosmogonia', periodo: 'La era de los dioses y los asuras', es_preview: 0,
    titulo: 'El batido del océano de leche',
    resumen: 'Dioses y demonios agitan juntos el océano primordial en busca del néctar de la inmortalidad, y de sus aguas emergen Lakshmi, un veneno mortal y finalmente el amrita.',
    texto_completo: `Los devas, debilitados tras perder una batalla contra los asuras y despojados sin querer de su fuerza por la maldición de un sabio ofendido, acudieron a Vishnu en busca de ayuda. El dios les reveló un secreto: en el fondo del océano de leche primordial descansaba el amrita, el néctar de la inmortalidad, capaz de devolverles su poder para siempre. Pero para extraerlo necesitarían la ayuda de sus propios enemigos, así que Vishnu les aconsejó proponer una tregua temporal a los asuras y batir juntos el océano.\n\nUsaron el monte Mandara como eje de batido, y a la serpiente Vasuki, enroscada alrededor de la montaña, como cuerda: los devas tiraban de la cola y los asuras de la cabeza, girando la montaña una y otra vez sobre las aguas lechosas. Como la montaña, sin apoyo firme, comenzaba a hundirse bajo su propio peso, Vishnu se transformó en Kurma, una tortuga colosal, y se sumergió bajo el monte para sostenerlo sobre su caparazón mientras el batido continuaba durante siglos enteros.\n\nDel océano agitado surgieron, uno tras otro, tesoros y prodigios: la vaca celestial Kamadhenu, el árbol que concede deseos, apsaras danzarinas, y finalmente Lakshmi misma, la diosa de la fortuna, que emergió sentada sobre un loto y eligió a Vishnu como esposo de inmediato. Pero antes de que llegara el amrita, del fondo del océano brotó también un veneno mortal, el Halahala, tan potente que amenazaba con destruir el universo entero; fue Shiva quien, para salvar a todos los seres, bebió el veneno sin tragarlo, conteniéndolo para siempre en su garganta, que desde entonces quedó teñida de un azul oscuro permanente.\n\nCuando finalmente emergió el amrita, los asuras intentaron arrebatárselo por la fuerza, pero Vishnu se transformó en Mohini, una mujer de belleza irresistible, y distrajo a los demonios el tiempo suficiente para repartir el néctar únicamente entre los devas, devolviéndoles su poder eterno y dejando a los asuras, una vez más, sin la inmortalidad que tanto habían codiciado.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Puranas (Bhagavata Purana y Vishnu Purana)', anio_aprox: 'c. 400-1000 d.C. (compilando tradición más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'vishnu', rol: 'protagonista' },
      { slug: 'shiva', rol: 'secundario' },
      { slug: 'indra', rol: 'secundario' },
      { slug: 'lakshmi', rol: 'secundario' }
    ]
  },
  {
    slug: 'nacimiento-de-ganesha', tipo: 'heroica', periodo: 'La era de los dioses', es_preview: 0,
    titulo: 'El nacimiento de Ganesha y su cabeza de elefante',
    resumen: 'Parvati crea a Ganesha de arcilla para que la proteja, Shiva lo decapita sin reconocerlo, y solo la cabeza de un elefante logra devolverle la vida.',
    texto_completo: `Parvati deseaba un momento de intimidad para bañarse sin interrupciones, así que modeló con sus propias manos, usando arcilla y pasta de cúrcuma de su propio cuerpo, la figura de un joven robusto, y le insufló vida. Le ordenó que vigilara la entrada de su casa mientras ella se bañaba, sin permitir el paso a nadie bajo ninguna circunstancia, y el joven, fiel a su única instrucción, se plantó en la puerta dispuesto a cumplirla al pie de la letra.\n\nCuando Shiva regresó de su meditación y encontró a un desconocido impidiéndole el paso hacia su propia casa, se indignó: exigió pasar, y al ser rechazado una y otra vez por aquel joven que no reconocía ninguna autoridad más que la de Parvati, la furia de Shiva estalló, y con un golpe de su tridente le cortó la cabeza sin darle más oportunidades de explicarse.\n\nAl salir y descubrir el cuerpo decapitado de su propia creación, Parvati cayó en una desesperación tan profunda que amenazó con destruir el universo entero si no le devolvían la vida a su hijo de inmediato. Shiva, arrepentido, ordenó a sus sirvientes que salieran a buscar la cabeza del primer ser vivo que encontraran durmiendo con la cabeza orientada hacia el norte, y le trajeran esa cabeza para reemplazar la perdida. El primer animal que hallaron fue un elefante, y con su cabeza Shiva revivió al joven, convirtiéndolo para siempre en Ganesha, el dios de cabeza de elefante.\n\nConsciente del error cometido, Shiva no solo revivió a su hijo sino que lo bendijo por encima de todos los demás dioses: decretó que, a partir de entonces, Ganesha debería ser invocado primero, antes que cualquier otra divinidad, al comienzo de cualquier empresa importante, asegurando así que ningún otro dios volviera jamás a subestimar a un guardián tan leal como aquel joven había sido.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Shiva Purana', anio_aprox: 'c. 700-1000 d.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'ganesha', rol: 'protagonista' },
      { slug: 'parvati', rol: 'secundario' },
      { slug: 'shiva', rol: 'secundario' }
    ]
  },
  {
    slug: 'destierro-de-rama', tipo: 'tragedia', periodo: 'La era de Rama', es_preview: 0,
    titulo: 'El destierro de Rama al bosque',
    resumen: 'Una promesa antigua obliga al rey Dasharatha a desterrar a Rama al bosque durante catorce años, justo cuando estaba a punto de coronarlo.',
    texto_completo: `El rey Dasharatha de Ayodhya, ya anciano, decidió finalmente coronar a su hijo mayor, Rama, como su sucesor, una decisión celebrada por todo el reino que amaba profundamente al príncipe por su virtud y su justicia. Pero la noche antes de la ceremonia, Manthara, sirvienta de la reina Kaikeyi, envenenó el corazón de su señora con envidia, recordándole dos promesas que Dasharatha le había hecho años atrás, cuando ella le salvó la vida en batalla, y que hasta entonces había dejado sin cobrar.\n\nKaikeyi exigió el cumplimiento de ambas: que su propio hijo Bharata fuera coronado rey en lugar de Rama, y que Rama fuera desterrado al bosque durante catorce años completos. Atado por su palabra de honor, un principio que ningún rey de su dinastía había roto jamás, Dasharatha no pudo negarse, pese a que la sola idea le desgarraba el corazón. Cuando Rama se enteró de la decisión, la aceptó sin un solo reproche hacia su padre ni hacia Kaikeyi, dispuesto a cumplir su deber filial por encima de cualquier ambición personal.\n\nSu esposa Sita se negó rotundamente a quedarse en el palacio mientras su esposo sufría en el exilio, así que los tres —Rama, Sita y su hermano Lakshmana— partieron juntos hacia el bosque, dejando atrás la vida de lujo y poder que les correspondía por derecho. Dasharatha, incapaz de soportar la separación de su hijo favorito, cayó en una tristeza tan profunda que murió poco después, sin la fuerza para sobrevivir a la ausencia de Rama, dejando a Ayodhya sumida en el duelo justo cuando más necesitaba de un gobernante firme.`,
    fuentes: [{ autor: 'Valmiki', obra: 'Ramayana', anio_aprox: 'c. 500-100 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'rama', rol: 'protagonista' },
      { slug: 'dasharatha', rol: 'secundario' },
      { slug: 'sita', rol: 'secundario' }
    ]
  },
  {
    slug: 'hanuman-y-el-salto-a-lanka', tipo: 'heroica', periodo: 'La era de Rama', es_preview: 1,
    titulo: 'Hanuman y el salto a Lanka',
    resumen: 'Hanuman crece a un tamaño colosal y salta a través del océano hasta Lanka para encontrar a Sita cautiva, dejando la ciudad en llamas antes de regresar.',
    texto_completo: `Tras semanas de búsqueda infructuosa por toda la India, Rama y su ejército de monos, liderados por Sugriva, finalmente descubrieron que Sita había sido llevada a Lanka, la isla-fortaleza de Ravana, separada del continente por un vasto océano que ningún guerrero común podría cruzar. Solo Hanuman, hijo del dios del viento Vayu, poseía el poder necesario para semejante hazaña: podía crecer hasta un tamaño colosal o encogerse hasta volverse invisible, y su fuerza y velocidad no tenían comparación entre los mortales.\n\nHanuman se irguió en la cima de una montaña, se expandió hasta un tamaño gigantesco, y saltó con tal fuerza que atravesó el cielo entero sobre el océano, esquivando montañas que intentaban ofrecerle descanso, una serpiente marina que trató de tragarlo, y una demonia que atrapaba las sombras de quienes volaban sobre el mar. Al llegar a Lanka, se encogió hasta un tamaño diminuto para explorar el palacio de Ravana sin ser detectado, hasta encontrar finalmente a Sita, cautiva pero inquebrantable, en un jardín de árboles ashoka.\n\nLe entregó el anillo de Rama como prueba de que su rescate estaba en marcha, y ella, conmovida hasta las lágrimas, le confió a su vez una joya para que se la llevara de vuelta como señal de su fe. Antes de partir, Hanuman decidió dejar una muestra de su poder: destruyó parte de los jardines reales, y cuando los guardias de Ravana finalmente lo capturaron y le prendieron fuego a su cola como castigo, Hanuman aprovechó las propias llamas para incendiar buena parte de la ciudad de Lanka antes de apagar el fuego en el mar y regresar volando junto a Rama con la noticia de que Sita seguía con vida.`,
    fuentes: [{ autor: 'Valmiki', obra: 'Ramayana', anio_aprox: 'c. 500-100 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'hanuman', rol: 'protagonista' },
      { slug: 'sita', rol: 'secundario' },
      { slug: 'ravana', rol: 'antagonista' }
    ]
  },
  {
    slug: 'caida-de-ravana', tipo: 'heroica', periodo: 'La era de Rama', es_preview: 0,
    titulo: 'La caída de Ravana y el regreso de Rama',
    resumen: 'Rama construye un puente hasta Lanka, derrota a Ravana en una guerra decisiva y regresa a Ayodhya, donde es coronado rey tras catorce años de exilio.',
    texto_completo: `Con la ubicación de Sita confirmada, Rama reunió un ejército inmenso de monos y osos bajo el mando de Sugriva y Hanuman, y ordenó construir un puente de piedra flotante a través del océano hasta Lanka, una obra tan monumental que se conservó en la memoria como uno de los grandes prodigios de toda la epopeya. Cruzado el puente, el ejército de Rama se enfrentó a las fuerzas de Ravana en una guerra feroz que se prolongó durante días, con batallas que involucraron armas mágicas, transformaciones y la intervención directa de varios dioses.\n\nRavana, protegido por la bendición que lo hacía invulnerable ante dioses y demonios, se sintió seguro durante buena parte del combate, sin considerar jamás que un simple mortal pudiera representar una amenaza real. Fue precisamente esa arrogancia la que lo perdió: Rama, como avatar de Vishnu disfrazado de hombre, no estaba cubierto por la protección de Ravana, y tras un duelo final devastador, le atravesó el corazón con una flecha bendecida por los propios dioses, poniendo fin al reinado de terror del rey demonio.\n\nLiberada finalmente, Sita se reencontró con Rama, pero la alegría del reencuentro se vio empañada por las dudas que meses de cautiverio en el palacio de otro hombre habían sembrado entre algunos súbditos de Ayodhya. Para disipar cualquier sospecha sobre su pureza, Sita se sometió voluntariamente a una prueba de fuego, caminando hacia una hoguera encendida; las llamas, reconociendo su virtud intacta, no le causaron el menor daño, y los propios dioses descendieron a atestiguar su inocencia.\n\nCon los catorce años de exilio finalmente cumplidos, Rama, Sita y Lakshmana regresaron triunfantes a Ayodhya, donde toda la ciudad los recibió encendiendo hileras de lámparas de aceite en cada casa y cada calle, una celebración que se conserva hasta hoy en el festival de Diwali. Rama fue coronado rey, y su reinado, conocido como Ram Rajya, se recuerda como una era de justicia, prosperidad y paz absolutas, el modelo ideal de gobierno que toda la India ha invocado desde entonces.`,
    fuentes: [{ autor: 'Valmiki', obra: 'Ramayana', anio_aprox: 'c. 500-100 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'rama', rol: 'protagonista' },
      { slug: 'ravana', rol: 'antagonista' },
      { slug: 'hanuman', rol: 'secundario' },
      { slug: 'sita', rol: 'secundario' }
    ]
  },
  {
    slug: 'indra-ahalya-y-la-maldicion', tipo: 'castigo', periodo: 'La era de Rama', es_preview: 0,
    titulo: 'Indra, Ahalya y la maldición de los mil ojos',
    resumen: 'Indra engaña a Ahalya disfrazado de su esposo y es maldecido con mil marcas por ello, mientras ella queda convertida en piedra hasta que Rama la libera siglos después.',
    texto_completo: `El sabio Gautama vivía en un tranquilo ashram junto a su esposa Ahalya, una mujer de una belleza tan extraordinaria que había sido creada directamente por Brahma como la más hermosa de todas las mujeres. Indra, rey de los devas, quedó tan prendado de ella que ideó un engaño: esperó a que Gautama saliera de su ermita antes del amanecer para realizar sus abluciones rituales, y tomó su forma exacta para presentarse ante Ahalya como si fuera su propio esposo.\n\nExisten distintas versiones sobre si Ahalya reconoció el engaño o no, pero cuando Gautama regresó inesperadamente y descubrió a Indra saliendo disfrazado de su propia casa, su furia fue inmediata y terrible. Maldijo a Indra a llevar sobre su cuerpo mil marcas que revelaran para siempre su lujuria descontrolada ante los ojos de todos los demás dioses, una maldición que con el tiempo se reinterpretó como mil ojos repartidos por todo su cuerpo, un recordatorio permanente y humillante de su falta.\n\nA Ahalya, Gautama le impuso un castigo distinto: la condenó a convertirse en piedra, invisible incluso al aire y al alimento, condenada a permanecer inmóvil durante siglos hasta que un ser de pureza absoluta la liberara con su sola presencia. Durante generaciones, la piedra permaneció olvidada en el bosque, hasta que Rama, en su camino hacia el reino de Mithila para participar en la competencia por la mano de Sita, pasó junto a ella sin saberlo. El simple contacto de su pie con la piedra bastó para romper la maldición: Ahalya recobró su forma humana al instante, purificada por completo, y Gautama, informado del milagro, la recibió de vuelta con un perdón sincero.`,
    fuentes: [{ autor: 'Valmiki', obra: 'Ramayana', anio_aprox: 'c. 500-100 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'indra', rol: 'protagonista' },
      { slug: 'rama', rol: 'mencionado' }
    ]
  },
  {
    slug: 'nacimiento-de-krishna', tipo: 'heroica', periodo: 'La era de Krishna', es_preview: 0,
    titulo: 'El nacimiento de Krishna y la huida a Gokul',
    resumen: 'Krishna nace en una prisión, y su padre lo cruza a través de un río en tormenta para salvarlo del tirano Kamsa, que había jurado matarlo.',
    texto_completo: `Kamsa, rey tirano de Mathura, había encerrado a su propia hermana Devaki y a su esposo Vasudeva en una prisión el mismo día de su boda, tras escuchar una voz profética que le advertía que el octavo hijo de la pareja lo mataría. Decidido a impedirlo a cualquier precio, Kamsa asesinó personalmente a cada uno de los primeros siete hijos de Devaki apenas nacían, sin que nada pudiera detenerlo.\n\nCuando llegó el momento del octavo nacimiento, en una noche de tormenta torrencial, ocurrió un milagro: los guardias de la prisión cayeron en un sueño profundo, las cadenas que sujetaban a Vasudeva se soltaron por sí solas, y las puertas de la celda se abrieron sin necesidad de llave alguna. Vasudeva comprendió que debía actuar de inmediato: tomó al recién nacido Krishna en una cesta y salió a cruzar el río Yamuna, crecido y furioso por la tormenta, para llevarlo a un lugar seguro antes del amanecer.\n\nMientras cruzaba las aguas turbulentas con el niño sobre la cabeza, la serpiente cósmica Shesha emergió para extender su capucha sobre ellos y protegerlos de la lluvia torrencial, mientras el propio río bajaba su nivel lo suficiente para permitirles el paso. Al llegar al otro lado, en el pueblo de Gokul, Vasudeva intercambió a Krishna por la hija recién nacida de Yashoda y Nanda, una pareja de pastores, y regresó a la prisión con la niña antes de que nadie notara el cambio.\n\nCuando Kamsa se enteró del nacimiento e intentó matar también a esa niña, esta se transformó ante sus propios ojos en una diosa que le advirtió que su verdadero destructor ya estaba a salvo, creciendo lejos de su alcance. Krishna pasó así su infancia protegido en Gokul, ajeno durante años al peligro del que había escapado la misma noche de su nacimiento.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Bhagavata Purana', anio_aprox: 'c. 800-1000 d.C. (compilando tradición más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'krishna', rol: 'protagonista' },
      { slug: 'kamsa', rol: 'antagonista' },
      { slug: 'vishnu', rol: 'secundario' }
    ]
  },
  {
    slug: 'hazanas-del-joven-krishna', tipo: 'heroica', periodo: 'La era de Krishna', es_preview: 0,
    titulo: 'Las hazañas del joven Krishna en Vraja',
    resumen: 'Criado como pastor en Vraja, el joven Krishna roba mantequilla, doma a la serpiente Kaliya y levanta la montaña Govardhana para desafiar la furia de Indra.',
    texto_completo: `Criado como un simple pastor en las aldeas de Vraja, Krishna pronto demostró que no era un niño ordinario. Su gusto por la mantequilla lo llevó a robarla de las vasijas de sus vecinas con tanta frecuencia y tanto encanto que las mujeres del pueblo, lejos de enfadarse en serio, contaban sus travesuras con una ternura que se convirtió en leyenda; en una ocasión, cuando su madre Yashoda le exigió abrir la boca para comprobar si había comido tierra, vio dentro de ella el universo entero, con todas las estrellas y todos los mundos, antes de que la ilusión se desvaneciera y volviera a ver solo a su hijo travieso.\n\nSu hazaña más recordada llegó cuando los pastores de Vraja se preparaban, como cada año, para ofrecer un gran sacrificio a Indra en agradecimiento por las lluvias. Krishna los convenció de que, en cambio, honraran a la montaña Govardhana, que los alimentaba directamente con sus pastos, un consejo que Indra interpretó como una afrenta imperdonable. Furioso, el rey de los devas desató una tormenta devastadora sobre Vraja, decidido a inundar el pueblo entero para castigar su desobediencia.\n\nKrishna, sin inmutarse, levantó la montaña Govardhana entera con un solo dedo meñique, y sostuvo el enorme peso sobre su mano durante siete días y siete noches, ofreciendo refugio bajo ella a todos los habitantes y su ganado mientras la tormenta de Indra rugía sin poder alcanzarlos. Al ver que su furia no lograba doblegar ni siquiera a un pastor, Indra finalmente comprendió que se enfrentaba a algo mucho más grande que un simple mortal, y detuvo la tormenta, descendiendo personalmente a disculparse ante Krishna y a reconocer su superioridad.\n\nOtra de sus hazañas de juventud fue enfrentar a Kaliya, una serpiente venenosa de múltiples cabezas que había envenenado las aguas del río Yamuna, matando a cuantos bebían de ellas o se bañaban en su corriente. Krishna se zambulló directamente en el río, y tras una danza feroz sobre las cabezas de la serpiente, la sometió sin matarla, exigiéndole que abandonara para siempre esas aguas y se marchara al océano, devolviendo así la pureza al río del que todo el pueblo dependía.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Bhagavata Purana', anio_aprox: 'c. 800-1000 d.C. (compilando tradición más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'krishna', rol: 'protagonista' },
      { slug: 'indra', rol: 'secundario' }
    ]
  },
  {
    slug: 'muerte-de-kamsa', tipo: 'castigo', periodo: 'La era de Krishna', es_preview: 0,
    titulo: 'La muerte de Kamsa',
    resumen: 'Convocado a Mathura para un torneo trampa, el joven Krishna esquiva a un elefante asesino y a los mejores luchadores del tirano antes de darle muerte con sus propias manos.',
    texto_completo: `Convencido de que Krishna, criado lejos de Mathura, ya no representaba ninguna amenaza real, Kamsa decidió finalmente convocarlo a la capital bajo la excusa de un gran torneo de arquería y lucha, con la intención secreta de hacerlo matar por sus mejores guerreros y por un elefante entrenado para aplastar a cualquiera que entrara por la puerta principal del recinto. Krishna, ya un joven fuerte y consciente de su verdadero destino, aceptó la invitación sin dudarlo.\n\nAl llegar a Mathura, Krishna esquivó al elefante asesino con una agilidad sobrehumana y lo derribó sin esfuerzo aparente, para desconcierto de toda la corte reunida para presenciar su muerte. Uno tras otro, los luchadores y guerreros que Kamsa había preparado cayeron derrotados ante él y ante su hermano Balarama, hasta que el propio tirano, viendo fracasar todos sus planes, bajó él mismo a la arena decidido a acabar con Krishna con sus propias manos.\n\nKrishna lo enfrentó sin miedo, y en un combate breve pero decisivo, lo derribó y le dio muerte, cumpliendo así, dieciocho años después de que Kamsa intentara evitarlo asesinando recién nacidos, la profecía que había marcado toda su vida de tirano y de terror. Con la muerte de Kamsa, Krishna liberó a sus verdaderos padres, Devaki y Vasudeva, de la prisión donde habían pasado años encerrados, y restauró en el trono de Mathura al abuelo de Kamsa, devolviendo la justicia a un reino que había vivido bajo el miedo durante toda una generación.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Bhagavata Purana', anio_aprox: 'c. 800-1000 d.C. (compilando tradición más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'krishna', rol: 'protagonista' },
      { slug: 'kamsa', rol: 'antagonista' }
    ]
  },
  {
    slug: 'bhagavad-gita-en-kurukshetra', tipo: 'otro', periodo: 'La gran guerra', es_preview: 1,
    titulo: 'Krishna y el Bhagavad Gita en el campo de batalla',
    resumen: 'Paralizado por el horror de luchar contra su propia familia, Arjuna recibe de Krishna las enseñanzas sobre el deber y el alma eterna que forman el Bhagavad Gita.',
    texto_completo: `En la llanura de Kurukshetra, los dos ejércitos —los Pándavas y sus primos Kaurava— se alinearon frente a frente, listos para una guerra que decidiría el destino de todo el reino. Arjuna, montado en su carro conducido por Krishna, pidió que lo llevaran hasta el centro del campo para observar de cerca a sus enemigos antes de que comenzara la batalla. Lo que vio lo destrozó por dentro: entre las filas contrarias reconoció a sus propios primos, a maestros que le habían enseñado todo lo que sabía, a tíos y abuelos que había amado desde niño.\n\nEl arco se le resbaló de las manos, y Arjuna se dejó caer en el carro, incapaz de justificar la matanza de su propia familia por un trono, sin importar cuán legítima fuera su causa. Fue en ese momento de colapso total cuando Krishna, revelando gradualmente su verdadera naturaleza divina, comenzó a exponerle las enseñanzas que se conservarían para siempre como el Bhagavad Gita: le habló del alma eterna que no puede ser destruida por ninguna arma, del deber (dharma) que cada persona debe cumplir según su propia naturaleza, y de la posibilidad de actuar sin apego al resultado, ofreciendo cada acción como un sacrificio en lugar de perseguir la recompensa personal.\n\nCuando Arjuna, todavía dudoso, le pidió una prueba definitiva de su divinidad, Krishna le concedió una visión temporal de su forma cósmica universal, el Vishvarupa: un cuerpo infinito que contenía dentro de sí todos los mundos, todos los dioses, todos los seres pasados y futuros, un espectáculo tan sobrecogedor que Arjuna suplicó que volviera a su forma humana familiar, incapaz de soportar la visión por más tiempo. Convencido finalmente de la verdad de las enseñanzas recibidas, Arjuna recogió su arco y se preparó para cumplir su deber como guerrero, transformado por completo por lo que acababa de escuchar.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Bhagavad Gita (parte del Mahabharata)', anio_aprox: 'c. 400 a.C. - 200 d.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'krishna', rol: 'protagonista' },
      { slug: 'arjuna', rol: 'secundario' }
    ]
  },
  {
    slug: 'juego-de-dados-y-draupadi', tipo: 'tragedia', periodo: 'La gran guerra', es_preview: 0,
    titulo: 'El juego de dados y la humillación de Draupadi',
    resumen: 'Yudhishthira pierde su reino, a sus hermanos, a sí mismo y finalmente a Draupadi en una partida de dados amañada, desencadenando la ruta hacia la guerra.',
    texto_completo: `Duryodhana, príncipe de los Kaurava, envidiaba profundamente la prosperidad de sus primos Pándavas, y convenció a su tío Shakuni, un maestro tramposo del juego de dados, para que ideara una partida en la que Yudhishthira, conocido por su debilidad hacia el juego, no pudiera negarse a participar. Invitado a un torneo amistoso en el palacio de los Kaurava, Yudhishthira comenzó apostando sus riquezas, luego su reino, después a sus propios hermanos, y finalmente a sí mismo, perdiendo cada partida sucesiva ante los dados cargados de Shakuni.\n\nCuando ya no le quedaba nada propio que perder, Duryodhana lo instó a apostar a su esposa Draupadi, y Yudhishthira, atrapado en la espiral del juego, aceptó también esa última apuesta —y la perdió. Duryodhana ordenó entonces que Draupadi fuera arrastrada por los cabellos hasta la corte real, pese a sus protestas de que un esposo que ya se había perdido a sí mismo no tenía derecho legítimo a apostarla a ella también. Dushasana, hermano de Duryodhana, comenzó a desenrollar su sari frente a toda la corte en un intento deliberado de humillarla públicamente.\n\nDraupadi, sin nadie más a quien recurrir, elevó una plegaria desesperada a Krishna, y ocurrió entonces un prodigio: cada vez que Dushasana tiraba de la tela, una capa nueva aparecía debajo, infinita, hasta que el propio Dushasana, agotado y humillado él mismo por el fracaso, tuvo que detenerse sin haber logrado desvestirla. Aun así, el agravio ya estaba hecho, y Draupadi, con el cabello suelto en señal de duelo, juró no volver a recogerlo hasta poder lavarlo con la sangre de quienes la habían humillado, un juramento que alimentaría la determinación de los Pándavas durante todos los años previos a la guerra que finalmente estallaría entre ambas familias.`,
    fuentes: [{ autor: 'Vyasa', obra: 'Mahabharata', anio_aprox: 'c. 400 a.C. - 400 d.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'draupadi', rol: 'protagonista' },
      { slug: 'yudhishthira', rol: 'secundario' },
      { slug: 'krishna', rol: 'secundario' }
    ]
  },
  {
    slug: 'gran-guerra-de-kurukshetra', tipo: 'heroica', periodo: 'La gran guerra', es_preview: 0,
    titulo: 'La gran guerra de Kurukshetra',
    resumen: 'Dieciocho días de batalla entre los Pándavas y los Kaurava terminan con la muerte de Duryodhana y la victoria devastadora de los cinco hermanos.',
    texto_completo: `Tras años de negociaciones fallidas y humillaciones acumuladas, los Pándavas y los Kaurava reunieron sus ejércitos en la llanura de Kurukshetra para una guerra que duraría dieciocho días y cambiaría para siempre el destino de la India entera. Guerreros legendarios cayeron en ambos bandos: Bhishma, el patriarca que había jurado servir al trono sin importar quién lo ocupara, resistió durante diez días hasta que Arjuna, obligado a enfrentarlo con el corazón partido, lo derribó con una lluvia de flechas; Drona, maestro de armas de ambos bandos, cayó poco después, engañado por una noticia a medias sobre la muerte de su propio hijo.\n\nBhima, fiel a un juramento hecho años atrás tras la humillación de Draupadi, buscó a cada uno de los cien hermanos Kaurava en el campo de batalla y los fue derrotando uno a uno, cumpliendo su venganza hermano por hermano. El duelo más esperado, sin embargo, fue el de Arjuna contra Karna, dos de los mejores arqueros que el mundo había conocido, que finalmente se enfrentaron directamente cuando la rueda del carro de Karna quedó atascada en el barro en pleno combate; pese a las reglas de honor que exigían una tregua en tal situación, Krishna instó a Arjuna a disparar de todos modos, recordándole las muchas injusticias que Karna había cometido en el pasado.\n\nEl decimoctavo día, Bhima cumplió su último juramento en un duelo de mazas contra Duryodhana, rompiéndole el muslo tal como había prometido tras la humillación de Draupadi. Con la muerte de Duryodhana, la guerra llegó a su fin: de los cien hermanos Kaurava no quedó ninguno con vida, y de los grandes ejércitos reunidos en ambos bandos, apenas un puñado de guerreros sobrevivió para contar lo ocurrido. Los Pándavas, victoriosos pero devastados por el precio pagado, asumieron finalmente el trono que tanto les había costado recuperar, con Yudhishthira coronado rey sobre un reino cubierto de duelo.`,
    fuentes: [{ autor: 'Vyasa', obra: 'Mahabharata', anio_aprox: 'c. 400 a.C. - 400 d.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'arjuna', rol: 'protagonista' },
      { slug: 'bhima', rol: 'protagonista' },
      { slug: 'karna', rol: 'antagonista' },
      { slug: 'yudhishthira', rol: 'secundario' },
      { slug: 'krishna', rol: 'secundario' }
    ]
  },
  {
    slug: 'karna-el-heroe-tragico', tipo: 'tragedia', periodo: 'La gran guerra', es_preview: 0,
    titulo: 'Karna, el héroe trágico del sol',
    resumen: 'Hijo secreto de Kunti y el dios Surya, abandonado al nacer y despreciado por su origen humilde, Karna elige la lealtad hacia Duryodhana por encima de sus propios hermanos.',
    texto_completo: `Kunti, todavía soltera, había recibido de un sabio un mantra capaz de invocar a cualquier dios para concebir un hijo con él, y por pura curiosidad juvenil decidió probarlo invocando a Surya, el dios del sol. Para su sorpresa y su terror, el dios respondió de inmediato, y del encuentro nació un niño ya cubierto con una armadura dorada y pendientes que crecían soldados a su piel, protecciones divinas que su padre le había concedido al nacer. Avergonzada por un embarazo fuera del matrimonio, Kunti colocó al recién nacido en una cesta y lo dejó flotar por el río, incapaz de criarlo ella misma sin arruinar su reputación.\n\nEl niño fue encontrado y criado por un auriga y su esposa, que lo llamaron Karna y lo educaron sin revelarle jamás su verdadero origen. Pese a crecer en una familia humilde, Karna demostró un talento extraordinario para el arco, rivalizando en habilidad con el propio Arjuna, pero fue rechazado una y otra vez por los maestros y las cortes nobles debido a su nacimiento como hijo de auriga. Solo Duryodhana, príncipe de los Kaurava, reconoció su valor y lo nombró rey de un territorio propio con tal de contar con él entre sus aliados, ganándose así una lealtad que Karna jamás traicionaría.\n\nLa noche antes de la gran guerra de Kurukshetra, Kunti finalmente se presentó ante Karna y le reveló la verdad: era en realidad el hermano mayor de los cinco Pándavas contra los que estaba a punto de luchar. Le suplicó que cambiara de bando y se uniera a sus verdaderos hermanos, pero Karna, pese a la conmoción de la revelación, se negó: Duryodhana había sido el único en tratarlo con dignidad cuando el resto del mundo lo despreciaba, y no pensaba abandonarlo ahora que la guerra estaba a punto de estallar. Eligió así luchar y finalmente morir del lado equivocado del conflicto, no por convicción sino por una lealtad que valoraba más que su propia vida, cerrando una de las historias más trágicas de toda la epopeya.`,
    fuentes: [{ autor: 'Vyasa', obra: 'Mahabharata', anio_aprox: 'c. 400 a.C. - 400 d.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'karna', rol: 'protagonista' },
      { slug: 'surya', rol: 'secundario' },
      { slug: 'arjuna', rol: 'secundario' },
      { slug: 'yudhishthira', rol: 'mencionado' }
    ]
  },
  {
    slug: 'durga-y-mahishasura', tipo: 'heroica', periodo: 'La era de los dioses', es_preview: 0,
    titulo: 'Durga y la derrota del demonio búfalo Mahishasura',
    resumen: 'Los dioses combinan sus energías para crear a la guerrera Durga, la única capaz de derrotar al demonio metamorfo Mahishasura tras nueve días de combate.',
    texto_completo: `Mahishasura, un asura capaz de transformarse en búfalo a voluntad, obtuvo de Brahma, tras años de rigurosa penitencia, una bendición que parecía hacerlo invencible: ningún dios ni ningún hombre podría jamás derrotarlo en combate. Envalentonado por esa protección, atacó el cielo, expulsó a los devas de sus propios reinos y se proclamó soberano del universo entero, sumiendo a dioses y mortales por igual en un terror que nadie sabía cómo enfrentar.\n\nLos dioses, reunidos en consejo de emergencia, comprendieron que la única salida era crear algo completamente nuevo: combinaron sus energías individuales en un único haz de luz resplandeciente, del que emergió una mujer guerrera de belleza sobrecogedora y diez brazos. Cada dios le entregó su arma más poderosa —Shiva su tridente, Vishnu su disco, Indra su rayo— y el propio Himavat le regaló un león como montura. Así nació Durga, ni dios ni hombre, y por lo tanto libre de la condición exacta que protegía a Mahishasura.\n\nLa batalla que siguió se prolongó durante nueve días y nueve noches: Mahishasura, desesperado, cambiaba de forma constantemente —búfalo, león, elefante, hombre armado— tratando de encontrar un ángulo que le permitiera vencer a la diosa, pero Durga anticipaba cada transformación con una destreza sobrehumana. Finalmente, en el instante exacto en que el demonio emergía a medias de su forma de búfalo hacia su forma humana, vulnerable por un instante entre ambas naturalezas, Durga lo atravesó con su tridente, poniendo fin de una vez por todas a su reinado de terror.\n\nLa victoria de Durga sobre Mahishasura se celebra hasta hoy como uno de los momentos más importantes del calendario religioso hindú, conmemorada durante nueve noches en el festival de Navaratri y culminando en Durga Puja, quizás la mayor celebración del año en buena parte de la India, especialmente en Bengala.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Devi Mahatmya (parte del Markandeya Purana)', anio_aprox: 'c. 400-600 d.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'durga', rol: 'protagonista' },
      { slug: 'mahishasura', rol: 'antagonista' },
      { slug: 'shiva', rol: 'secundario' },
      { slug: 'vishnu', rol: 'secundario' },
      { slug: 'indra', rol: 'secundario' }
    ]
  },
  {
    slug: 'kali-y-la-furia-imparable', tipo: 'castigo', periodo: 'La era de los dioses', es_preview: 0,
    titulo: 'Kali y la furia que no podía detenerse',
    resumen: 'Nacida de la furia de Durga en batalla, Kali se descontrola tras la victoria hasta que Shiva se tiende en su camino para detenerla.',
    texto_completo: `Durante otra de las grandes batallas de Durga contra las fuerzas del caos, dos generales demoníacos, Chanda y Munda, avanzaron hacia ella al frente de un ejército aparentemente interminable. La furia de Durga ante semejante afrenta se concentró en su entrecejo hasta que, de pronto, brotó de allí una figura completamente distinta: Kali, de piel oscura como la noche eterna, con los ojos inyectados de sangre y una lengua que colgaba famélica entre sus dientes afilados.\n\nKali se lanzó contra el ejército demoníaco con una ferocidad que ni la propia Durga había anticipado, decapitando a Chanda y a Munda con sus propias manos y devorando a los soldados enemigos entre carcajadas terribles, ensartando sus cabezas cortadas en un collar que fue creciendo alrededor de su cuello a medida que la batalla avanzaba. Cuando finalmente no quedó un solo enemigo en pie, Kali, lejos de detenerse, continuó su danza de destrucción, incapaz o poco dispuesta a contener el frenesí que la propia batalla había desatado en ella.\n\nEl campo de batalla temblaba bajo sus pasos, y los propios dioses, aterrados de que su furia terminara por destruir el universo entero que acababan de salvar, no encontraban manera de detenerla: ni súplicas ni ofrendas lograban aplacar su sed de destrucción. Fue Shiva quien encontró finalmente la solución: se tendió boca arriba directamente en el camino de la diosa enloquecida, sabiendo que ni siquiera Kali se atrevería a herirlo deliberadamente.\n\nKali, cegada por la batalla, no lo reconoció a tiempo y le pisó el pecho con todo su peso. El contacto la sacó de golpe de su frenesí: al bajar la mirada y descubrir que había pisoteado a su propio esposo, un gesto de profunda falta de respeto según toda tradición, Kali sacó la lengua de vergüenza absoluta, y su furia se disolvió al instante como si jamás hubiera existido. Esa imagen —la diosa negra, lengua afuera, de pie sobre el cuerpo tendido de Shiva— quedó grabada para siempre como uno de los retratos más poderosos y complejos de toda la mitología hindú: el recordatorio de que incluso la fuerza destructora más pura necesita, tarde o temprano, encontrarse con la quietud absoluta para poder detenerse.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Devi Mahatmya (parte del Markandeya Purana)', anio_aprox: 'c. 400-600 d.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'kali', rol: 'protagonista' },
      { slug: 'shiva', rol: 'secundario' },
      { slug: 'durga', rol: 'mencionado' }
    ]
  },
  {
    slug: 'hiranyakashipu-y-narasimha', tipo: 'castigo', periodo: 'La era de los dioses', es_preview: 0,
    titulo: 'El castigo de Hiranyakashipu y el avatar Narasimha',
    resumen: 'Protegido por una bendición de casi total invulnerabilidad, el rey demonio Hiranyakashipu tortura a su propio hijo devoto hasta que Vishnu encuentra el resquicio exacto para derrotarlo.',
    texto_completo: `Hiranyakashipu odiaba a Vishnu con una furia que no conocía límites: el dios había matado a su hermano Hiranyaksha bajo la forma del avatar jabalí Varaha, y desde ese día juró destruir tanto a Vishnu como a todo aquel que osara adorarlo. Tras años de penitencia extrema, obtuvo de Brahma una bendición que parecía volverlo completamente invulnerable: no podría morir de día ni de noche, dentro ni fuera de una vivienda, en la tierra ni en el cielo, a manos de un hombre ni de un animal, ni herido por ningún arma existente.\n\nConvencido de su propia invencibilidad, Hiranyakashipu se proclamó dios supremo y ordenó a todo su reino que lo adorara a él en lugar de a cualquier otra divinidad. Su propio hijo, el joven Prahlada, se negó rotundamente: devoto de Vishnu desde la cuna, ninguna amenaza de su padre logró hacerlo dudar. Furioso, Hiranyakashipu intentó matarlo de todas las formas imaginables —arrojándolo por precipicios, exponiéndolo a serpientes venenosas, aplastándolo bajo elefantes entrenados, quemándolo en el regazo de su propia tía—, pero Prahlada sobrevivió a cada intento completamente ileso, protegido siempre por su fe inquebrantable.\n\nExasperado, Hiranyakashipu desafió finalmente a su hijo a demostrar que Vishnu estaba realmente presente en todas partes, señalando con desprecio un simple pilar del salón del palacio. Prahlada respondió con total calma que sí, que Vishnu estaba también allí, y Hiranyakashipu, furioso, golpeó el pilar con todas sus fuerzas. La columna se abrió en ese instante, y de su interior emergió Narasimha, una forma terrible de Vishnu mitad hombre y mitad león, ni una cosa ni la otra tal como exigía la bendición.\n\nNarasimha arrastró a Hiranyakashipu hasta el umbral de la puerta del palacio —ni dentro ni fuera de la vivienda—, lo colocó sobre su propio regazo —ni en la tierra ni en el cielo—, esperó a que cayera el crepúsculo —ni de día ni de noche— y lo destrozó con sus propias garras, sin usar ningún arma. Cada condición de la bendición fue respetada al pie de la letra y, al mismo tiempo, completamente burlada. Con la muerte del tirano, Prahlada, el niño cuya fe nunca flaqueó, fue coronado como el nuevo rey, gobernando con la misma devoción que lo había protegido durante toda su infancia.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Bhagavata Purana (Canto Séptimo)', anio_aprox: 'c. 800-1000 d.C. (compilando tradición más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'vishnu', rol: 'protagonista' },
      { slug: 'hiranyakashipu', rol: 'antagonista' },
      { slug: 'prahlada', rol: 'secundario' }
    ]
  },
  {
    slug: 'surya-chandra-y-el-ritmo-del-cielo', tipo: 'otro', periodo: 'La era de los dioses', es_preview: 0,
    titulo: 'Surya, Chandra y el ritmo del cielo',
    resumen: 'El favoritismo de Chandra hacia una sola de sus veintisiete esposas le cuesta una maldición que, suavizada por sus súplicas, explica desde entonces las fases de la luna.',
    texto_completo: `Chandra, dios de la luna, se casó con las veintisiete nakshatras, las estrellas que marcan las constelaciones lunares, todas ellas hijas del sabio Daksha, que había arreglado el matrimonio esperando que su yerno tratara a cada una de sus hijas por igual. Pero Chandra pronto mostró una preferencia evidente por una sola de ellas, Rohini, dedicándole todo su tiempo y su afecto mientras descuidaba por completo a las otras veintiséis, que comenzaron a quejarse amargamente ante su padre.\n\nDaksha, furioso al enterarse del trato desigual hacia sus hijas, maldijo a Chandra a consumirse gradualmente hasta desaparecer por completo, un castigo que amenazaba con sumir al mundo entero en una oscuridad permanente, ya que sin la luna las mareas, los rituales y el calendario religioso quedarían sin gobierno alguno. Las nakshatras abandonadas, pese a sus quejas iniciales, no deseaban en realidad la desaparición total de su esposo, y se unieron a él para suplicar ante Daksha una modificación de la maldición.\n\nDaksha, conmovido por la súplica conjunta, no pudo retirar la maldición por completo —una palabra pronunciada con tal poder no puede deshacerse del todo—, pero accedió a suavizarla: en lugar de desaparecer para siempre, Chandra menguaría hasta casi desvanecerse y luego volvería a crecer, en un ciclo eterno que se repetiría cada mes sin falta, explicando desde entonces las fases de la luna que cualquiera puede observar en el cielo nocturno.\n\nMientras tanto, su hermano Surya continúa cruzando el cielo cada día montado en su carro de siete caballos, conducido por Aruna, que se coloca frente a los rayos más intensos del sol para proteger a la tierra de un calor que, sin ese amortiguador, la calcinaría por completo. Juntos, el ciclo menguante de Chandra y el recorrido diario de Surya marcan el ritmo entero del calendario hindú, un recordatorio constante de que hasta los propios dioses del cielo siguen un orden que ni ellos mismos pueden alterar del todo.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Puranas (Vishnu Purana / Matsya Purana)', anio_aprox: 'c. 400-1000 d.C. (compilando tradición más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'chandra', rol: 'protagonista' },
      { slug: 'surya', rol: 'secundario' }
    ]
  },
  {
    slug: 'shiva-kama-y-las-cenizas-del-deseo', tipo: 'heroica', periodo: 'La era de los dioses', es_preview: 0,
    titulo: 'Shiva, Kama y las cenizas del deseo',
    resumen: 'Encomendado a despertar el amor de Shiva por Parvati, Kama es reducido a cenizas por interrumpir su meditación, y desde entonces existe sin cuerpo físico.',
    texto_completo: `El demonio Taraka había obtenido una bendición que lo hacía prácticamente invencible: solo un hijo de Shiva podría derrotarlo, una condición que parecía imposible de cumplir mientras Shiva permaneciera sumido en la meditación ascética eterna en la que llevaba siglos, sin intención alguna de casarse ni de engendrar descendencia. Desesperados, los dioses encomendaron a Kama, el dios del deseo, la peligrosa tarea de despertar en Shiva un amor por Parvati, que ya llevaba años de penitencia propia tratando de conquistar su corazón.\n\nKama se acercó con extremo sigilo al lugar donde Shiva meditaba, acompañado de la primavera misma, que hizo florecer el bosque entero para favorecer su misión, y en el instante justo en que Shiva abrió ligeramente los ojos, disparó una de sus flechas de flores directamente hacia su corazón. Pero la interrupción de una meditación tan profunda provocó en Shiva una furia inmediata y devastadora: abrió su tercer ojo, normalmente cerrado, y de él brotó un fuego que redujo a Kama a cenizas en el acto, ante la mirada horrorizada de todos los dioses que habían orquestado el plan.\n\nRati, esposa de Kama, cayó de rodillas junto a las cenizas de su marido, suplicando a Shiva que le devolviera al menos algún tipo de existencia. Conmovido por su dolor genuino, Shiva accedió parcialmente: Kama no recuperaría jamás un cuerpo físico, pero continuaría existiendo como una fuerza invisible, presente en cada corazón que se enamora sin que nadie pueda verlo llegar, de ahí que también se le conozca desde entonces como Ananga, "el sin cuerpo".\n\nLa flecha de Kama, aunque le costara la existencia física, no había fallado del todo: la devoción constante de Parvati, sumada a ese instante de vulnerabilidad, terminó finalmente por conmover a Shiva, que aceptó casarse con ella. De esa unión nacería después Kartikeya, el hijo destinado a derrotar a Taraka tal como la profecía había anticipado, cerrando el círculo que Kama había comenzado a trazar con su propia vida.`,
    fuentes: [{ autor: 'Kalidasa', obra: 'Kumarasambhava', anio_aprox: 'c. siglo V d.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'kama', rol: 'protagonista' },
      { slug: 'shiva', rol: 'secundario' },
      { slug: 'parvati', rol: 'secundario' },
      { slug: 'kartikeya', rol: 'mencionado' }
    ]
  }
];

// ------------------------------------------------------------
// FUNCIONES DE INSERCION (idempotentes)
// ------------------------------------------------------------

async function obtenerOCrearLibro() {
  const [existente] = await pool.query('SELECT id FROM libros WHERE slug = ?', [LIBRO.slug]);
  if (existente.length > 0) {
    console.log(`  - Libro "${LIBRO.slug}" ya existía (id ${existente[0].id}).`);
    return existente[0].id;
  }
  const [resultado] = await pool.query(
    `INSERT INTO libros (slug, titulo, subtitulo, descripcion, estado) VALUES (?, ?, ?, ?, ?)`,
    [LIBRO.slug, LIBRO.titulo, LIBRO.subtitulo, LIBRO.descripcion, LIBRO.estado]
  );
  console.log(`  - Libro "${LIBRO.slug}" creado (id ${resultado.insertId}).`);
  return resultado.insertId;
}

async function obtenerOCrearSimbolo(nombre) {
  const [existente] = await pool.query('SELECT id FROM simbolos WHERE nombre = ?', [nombre]);
  if (existente.length > 0) return existente[0].id;
  const [resultado] = await pool.query('INSERT INTO simbolos (nombre) VALUES (?)', [nombre]);
  return resultado.insertId;
}

async function obtenerOCrearFuente(fuente) {
  const [existente] = await pool.query(
    'SELECT id FROM fuentes WHERE autor = ? AND obra = ?',
    [fuente.autor, fuente.obra]
  );
  if (existente.length > 0) return existente[0].id;
  const [resultado] = await pool.query(
    'INSERT INTO fuentes (autor, obra, tipo, anio_aprox) VALUES (?, ?, ?, ?)',
    [fuente.autor, fuente.obra, fuente.tipo, fuente.anio_aprox]
  );
  return resultado.insertId;
}

async function sembrarPersonajes(libroId) {
  const idsPorSlug = {};

  for (const p of PERSONAJES) {
    const [existente] = await pool.query('SELECT id FROM personajes WHERE slug = ?', [p.slug]);
    let personajeId;

    if (existente.length > 0) {
      personajeId = existente[0].id;
      console.log(`  - Personaje "${p.slug}" ya existía.`);
    } else {
      const [resultado] = await pool.query(
        `INSERT INTO personajes
           (tipo, nombre, nombre_griego, epitetos, descripcion_corta, descripcion_larga,
            origen, dominio, naturaleza, es_preview, libro_id, slug)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [p.tipo, p.nombre, p.nombre_griego || null, p.epitetos, p.descripcion_corta, p.descripcion_larga,
         p.origen || null, p.dominio || null, p.naturaleza || null, p.es_preview ? 1 : 0, libroId, p.slug]
      );
      personajeId = resultado.insertId;
      console.log(`  - Personaje "${p.slug}" creado.`);
    }

    idsPorSlug[p.slug] = personajeId;

    // Simbolos
    for (const nombreSimbolo of (p.simbolos || [])) {
      const simboloId = await obtenerOCrearSimbolo(nombreSimbolo);
      await pool.query(
        'INSERT IGNORE INTO personaje_simbolos (personaje_id, simbolo_id) VALUES (?, ?)',
        [personajeId, simboloId]
      );
    }

    // Poderes (solo si este personaje todavia no tiene poderes cargados)
    const [poderesExistentes] = await pool.query('SELECT id FROM poderes WHERE personaje_id = ?', [personajeId]);
    if (poderesExistentes.length === 0) {
      let orden = 0;
      for (const poder of (p.poderes || [])) {
        await pool.query(
          'INSERT INTO poderes (personaje_id, nombre, descripcion, orden) VALUES (?, ?, ?, ?)',
          [personajeId, poder.nombre, poder.descripcion, orden++]
        );
      }
    }
  }

  return idsPorSlug;
}

async function sembrarRelaciones(idsPorSlug) {
  let creadas = 0;

  for (const r of RELACIONES) {
    const deId = idsPorSlug[r.de];
    const aId = idsPorSlug[r.a];
    if (!deId || !aId) continue;

    const [existente] = await pool.query(
      'SELECT id FROM relaciones_personajes WHERE personaje_id = ? AND personaje_relacionado_id = ?',
      [deId, aId]
    );
    if (existente.length > 0) continue;

    await pool.query(
      'INSERT INTO relaciones_personajes (personaje_id, personaje_relacionado_id, tipo_relacion, nota) VALUES (?, ?, ?, ?)',
      [deId, aId, r.tipoDeADestino, r.notaDeADestino || null]
    );
    await pool.query(
      'INSERT INTO relaciones_personajes (personaje_id, personaje_relacionado_id, tipo_relacion, nota) VALUES (?, ?, ?, ?)',
      [aId, deId, r.tipoDeDestinoADe, r.notaDestinoADe || null]
    );
    creadas++;
  }
  console.log(`  - ${creadas * 2} relaciones familiares creadas (de ${RELACIONES.length * 2} definidas).`);
}

async function sembrarHistorias(libroId, idsPersonajesPorSlug) {
  for (const h of HISTORIAS) {
    const [existente] = await pool.query('SELECT id FROM historias WHERE slug = ?', [h.slug]);
    let historiaId;

    if (existente.length > 0) {
      historiaId = existente[0].id;
      console.log(`  - Historia "${h.slug}" ya existía.`);
    } else {
      const [resultado] = await pool.query(
        `INSERT INTO historias (titulo, resumen, texto_completo, tipo, periodo, slug, es_preview, libro_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [h.titulo, h.resumen, h.texto_completo, h.tipo, h.periodo, h.slug, h.es_preview ? 1 : 0, libroId]
      );
      historiaId = resultado.insertId;
      console.log(`  - Historia "${h.slug}" creada.`);
    }

    // Personajes relacionados
    for (const rel of h.personajes) {
      const personajeId = idsPersonajesPorSlug[rel.slug];
      if (!personajeId) continue;
      await pool.query(
        'INSERT IGNORE INTO historia_personajes (historia_id, personaje_id, rol) VALUES (?, ?, ?)',
        [historiaId, personajeId, rel.rol]
      );
    }

    // Fuentes
    for (const fuente of h.fuentes) {
      const fuenteId = await obtenerOCrearFuente(fuente);
      await pool.query(
        'INSERT IGNORE INTO historia_fuentes (historia_id, fuente_id) VALUES (?, ?)',
        [historiaId, fuenteId]
      );
    }
  }
}

async function main() {
  console.log('Sembrando Mitología Hindú: empezando...\n');

  console.log('1. Libro');
  const libroId = await obtenerOCrearLibro();

  console.log('\n2. Personajes, símbolos y poderes');
  const idsPersonajes = await sembrarPersonajes(libroId);

  console.log('\n3. Relaciones familiares');
  await sembrarRelaciones(idsPersonajes);

  console.log('\n4. Historias, personajes relacionados y fuentes');
  await sembrarHistorias(libroId, idsPersonajes);

  console.log('\nSiembra completa.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError durante la siembra:', error);
  process.exit(1);
});
