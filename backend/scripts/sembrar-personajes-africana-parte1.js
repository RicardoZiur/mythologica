// ============================================================
// scripts/sembrar-personajes-africana-parte1.js
// ------------------------------------------------------------
// Primer lote de Mitologia Africana: 5 titanes/primordiales y 15
// dioses -- predominantemente el panteon yoruba (orishas), con
// figuras primordiales del Africa occidental y austral (fon,
// akan, zulu, san) para dar diversidad regional.
// Contenido completo desde el inicio. Idempotente via
// slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-africana-parte1.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- TITANES / PRIMORDIALES ---
  {
    tipo: 'titan', slug: 'mawu', nombre: 'Mawu', nombre_griego: 'Mawu',
    epitetos: 'La Madre Luna, Creadora del Mundo Nocturno',
    descripcion_corta: 'Diosa primordial de la luna en la tradición fon de Dahomey, que junto a su gemelo Lisa dio forma al universo entero antes de retirarse a gobernar la noche.',
    descripcion_larga: `Mawu es, dentro de la tradición religiosa del pueblo fon del actual Benín, la mitad femenina de la gran divinidad primordial dual Mawu-Lisa, concebida como la creadora original del universo junto a su hermano gemelo y complemento masculino, Lisa. Se le representa asociada directamente a la luna, la noche, la frescura y la sabiduría materna, en contraste con la fuerza solar y diurna de su contraparte. Según la tradición, Mawu y Lisa nacieron de la serpiente primordial Aido-Hwedo, que sostuvo el mundo recién creado en su boca mientras ambos hermanos completaban la obra de la creación, viajando sobre su cuerpo enroscado para dar forma a las montañas, los valles y los ríos del mundo entero.

Tras completar la creación del universo, incluidos los primeros seres humanos, Mawu decidió retirarse de la intervención directa y cotidiana en los asuntos del mundo, delegando la administración concreta de la existencia terrenal en un vasto panteón de vodun, las divinidades menores que gobiernan aspectos específicos de la vida —el trueno, el hierro, la enfermedad, el mar— mientras ella misma permanecía como una presencia distante pero fundamental, gobernando específicamente la noche y ofreciendo consuelo y sabiduría a quienes la invocaban durante sus horas. Se creía que Mawu pesaba las almas de los muertos antes de permitirles el descanso final, y que su juicio, sereno pero firme, determinaba en última instancia si una vida había sido vivida con la rectitud necesaria. Su culto, junto al de Lisa, sigue vivo hasta hoy dentro de la tradición vodun practicada en Benín, Togo y también, transformada por la diáspora atlántica, en Haití y otras partes de América.`,
    origen: 'Divinidad primordial lunar del pueblo fon de Dahomey (actual Benín).',
    dominio: 'La luna, la noche y el juicio de las almas', naturaleza: 'Diosa primordial creadora', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'lisa', nombre: 'Lisa', nombre_griego: 'Lisa',
    epitetos: 'El Padre Sol, Fuerza de la Creación Diurna',
    descripcion_corta: 'Dios primordial del sol en la tradición fon, gemelo y complemento de Mawu, portador de la fuerza, el calor y el poder transformador del fuego.',
    descripcion_larga: `Lisa es, dentro de la cosmovisión religiosa del pueblo fon, la mitad masculina de la gran divinidad dual Mawu-Lisa, asociado directamente al sol, el calor, la fuerza física y el poder del fuego, en complemento directo a la naturaleza lunar y nocturna de su hermana gemela. Junto a Mawu, Lisa participó activamente en la creación del universo entero, viajando sobre el cuerpo enroscado de la serpiente primordial Aido-Hwedo para dar forma a la geografía del mundo recién creado, y aportando específicamente la fuerza necesaria para forjar las herramientas y las técnicas que permitirían a la humanidad transformar su entorno.

Se le atribuye la introducción de la herrería y el trabajo del metal entre los primeros seres humanos, considerado un don directo de su propia naturaleza ígnea y transformadora, y su culto se asocia estrechamente con la fuerza física, la resistencia y la capacidad de superar obstáculos mediante el esfuerzo sostenido. Al igual que Mawu, Lisa se retiró tras la creación del mundo hacia una posición más distante, delegando la gestión cotidiana de los asuntos terrenales en el amplio panteón de vodun subordinados, aunque su presencia sigue invocándose de manera especial durante el día y en cualquier empresa que requiera fuerza, determinación y la superación de una dificultad considerable. La pareja Mawu-Lisa, unida pero complementaria, representa dentro de la tradición fon un modelo fundamental de equilibrio cósmico entre lo femenino y lo masculino, lo nocturno y lo diurno, la sabiduría serena y la fuerza activa.`,
    origen: 'Divinidad primordial solar del pueblo fon de Dahomey (actual Benín).',
    dominio: 'El sol, el fuego y la fuerza transformadora', naturaleza: 'Dios primordial creador', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'nyame', nombre: 'Nyame', nombre_griego: 'Nyankopon',
    epitetos: 'El Dios del Cielo, Fuente de Toda Sabiduría',
    descripcion_corta: 'Dios supremo y distante del cielo en la tradición akan, dueño original de todas las historias del mundo hasta que Anansi, la astuta araña, se las ganó con ingenio.',
    descripcion_larga: `Nyame (también conocido como Nyankopon, "el gran amigo del cielo") es el dios supremo del cielo dentro de la tradición religiosa del pueblo akan, predominante en el actual Ghana y zonas vecinas de Costa de Marfil, concebido como una fuerza creadora distante y trascendente, responsable último del origen del universo y de todas las cosas que en él existen, pero generalmente poco involucrado en los asuntos cotidianos de los seres humanos, que se relacionan más directamente con divinidades menores y espíritus de la naturaleza más accesibles.

El relato más célebre asociado a Nyame cuenta que, en los tiempos antiguos, todas las historias que existían en el mundo pertenecían exclusivamente a él, guardadas como su tesoro más preciado y conocidas simplemente como "las historias de Nyame". Anansi, la astuta araña, decidido a poseer esas historias para compartirlas con toda la humanidad, se presentó ante Nyame solicitando comprarlas; el dios del cielo, considerando el precio que exigiría demasiado alto para que cualquiera pudiera pagarlo —capturar vivos a un enjambre de avispas peligrosas, una serpiente pitón gigante, un leopardo feroz y un espíritu invisible temido por todos—, aceptó el trato convencido de que resultaría imposible de cumplir. Anansi, sin embargo, logró capturar a las cuatro criaturas mediante una serie de engaños ingeniosos, y Nyame, honrando su palabra, le entregó las historias, que desde entonces pasaron a conocerse en la tradición akan como "las historias de Anansi" en lugar de "las historias de Nyame", explicando así por qué la tradición oral de ese pueblo se transmite hasta hoy bajo el nombre de la astuta araña en lugar del propio dios supremo del cielo.`,
    origen: 'Dios supremo y distante del cielo dentro de la tradición akan.',
    dominio: 'El cielo, la sabiduría y el origen de las historias', naturaleza: 'Divinidad suprema distante', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'unkulunkulu', nombre: 'Unkulunkulu', nombre_griego: 'Unkulunkulu',
    epitetos: 'El Muy Antiguo, Primer Hombre y Ancestro Original',
    descripcion_corta: 'El primer ser humano y ancestro original dentro de la tradición zulu, que emergió de un lecho de juncos primordiales para dar origen a toda la humanidad y sus costumbres.',
    descripcion_larga: `Unkulunkulu —cuyo nombre puede traducirse aproximadamente como "el muy grande" o "el muy antiguo"— ocupa un lugar fundamental dentro de la cosmovisión religiosa del pueblo zulu, concebido como el primer ser humano en existir y, al mismo tiempo, como una fuerza creadora primordial responsable del origen de buena parte del mundo conocido. Según la tradición, Unkulunkulu emergió en los tiempos más antiguos de un extenso lecho de juncos (uhlanga), un lugar primordial de origen que la tradición zulu considera el punto de partida de toda existencia humana y animal, y desde el cual comenzó a dar forma al mundo, enseñando a los primeros seres humanos las costumbres, las técnicas de caza y agricultura, y las normas sociales necesarias para vivir en comunidad.

A diferencia de otras divinidades supremas más distantes, Unkulunkulu mantiene una relación particular con la humanidad precisamente por haber sido él mismo, en su origen, un ser humano ancestral antes que una fuerza puramente divina, lo que lo convierte en el ancestro definitivo de todos los linajes zulu, el punto de referencia último al que se remontan simbólicamente todas las líneas de descendencia familiar. Se le atribuye también haber enviado al camaleón como mensajero a la humanidad para anunciarle que los hombres no morirían para siempre, un mensaje que el lento camaleón entregó demasiado tarde tras haberse distraído por el camino, permitiendo que un segundo mensajero, el veloz lagarto, llegara antes con el mensaje contrario —que la muerte sería definitiva—, explicando así, según la tradición, por qué la muerte humana resulta irreversible pese a la intención original y benévola de Unkulunkulu.`,
    origen: 'Primer ser humano y ancestro original dentro de la tradición zulu.',
    dominio: 'El origen de la humanidad y sus costumbres', naturaleza: 'Ancestro primordial y fuerza creadora', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'kaggen', nombre: '/Kaggen', nombre_griego: '/Kaggen',
    epitetos: 'La Mantis Sagrada, Creador Astuto del Pueblo San',
    descripcion_corta: 'Deidad primordial con forma de mantis religiosa en la tradición del pueblo san, creador astuto y a menudo travieso responsable del origen de los animales y la luna.',
    descripcion_larga: `/Kaggen es la divinidad primordial más importante dentro de la rica tradición espiritual del pueblo san (a veces llamados bosquimanos), los habitantes originarios más antiguos del sur de África, concebido habitualmente bajo la forma de una mantis religiosa, aunque capaz también de adoptar otras formas animales o incluso apariencia humana según las circunstancias de cada relato particular. Lejos de presentarse como una figura de dignidad solemne y distante, /Kaggen combina en su naturaleza rasgos de creador genuino con una vena marcadamente traviesa y a veces torpe, protagonizando numerosos relatos en los que sus propias artimañas terminan volviéndose en su contra de maneras cómicas o instructivas.

Se le atribuye la creación de buena parte de los animales del mundo, incluido el eland, el gran antílope considerado el animal más sagrado dentro de la cosmovisión san y protagonista central de numerosas ceremonias rituales y pinturas rupestres que han perdurado durante milenios en las cuevas y refugios rocosos del sur de África. Según uno de los relatos más conocidos, /Kaggen creó también la luna arrojando al cielo uno de sus propios zapatos viejos y gastados, explicando así el origen de ese astro nocturno mediante un gesto tan cotidiano como pintoresco, característico del tono narrativo particular de la tradición san, que combina la grandeza cosmogónica con una calidez y un humor cercano poco frecuentes en las tradiciones de creación de otras culturas. /Kaggen sigue siendo invocado hasta hoy por los sanadores tradicionales san durante sus danzas de trance curativas, consideradas un vínculo directo con el mundo espiritual que él mismo ayudó a establecer en los tiempos primordiales.`,
    origen: 'Divinidad primordial con forma de mantis del pueblo san del sur de África.',
    dominio: 'La creación de los animales y el mundo espiritual', naturaleza: 'Creador astuto con forma de mantis', es_preview: 0
  },

  // --- DIOSES ---
  {
    tipo: 'dios', slug: 'olodumare', nombre: 'Olodumare', nombre_griego: 'Olodumare',
    epitetos: 'El Ser Supremo, Dueño del Cielo y la Existencia',
    descripcion_corta: 'El ser supremo yoruba, fuente última de toda existencia, que delega el gobierno concreto del mundo en los orishas mientras permanece como autoridad final e inapelable.',
    descripcion_larga: `Olodumare ocupa la posición más elevada dentro del panteón yoruba, concebido como el ser supremo y trascendente, fuente última de toda existencia y de todo el poder que fluye a través de los orishas, las divinidades menores que gobiernan aspectos concretos del mundo natural y de la vida humana. A diferencia de los orishas, que poseen personalidades vívidas, historias detalladas y relaciones complejas entre sí, Olodumare se presenta generalmente como una presencia más abstracta y distante, rara vez objeto de culto directo mediante templos o sacerdocios específicos, precisamente porque su autoridad se considera tan absoluta y fundamental que trasciende la necesidad de una relación ritual cotidiana comparable a la que se mantiene con los orishas más cercanos.

Según la tradición, fue Olodumare quien encargó originalmente a Obatala la tarea de crear la tierra firme sobre las aguas primordiales y de dar forma a los primeros cuerpos humanos, insuflándoles después él mismo el hálito de vida (emi) necesario para completar la creación, una división de tareas que refleja el patrón general de la religión yoruba: Olodumare como autoridad suprema y última, y los orishas como agentes activos que ejecutan y administran su voluntad en el mundo concreto. Se le atribuye también la función de juez final sobre el destino de cada alma humana tras la muerte, decidiendo su reencarnación futura según la rectitud con la que hubiera vivido su existencia anterior. Pese a su naturaleza distante, la expresión "Olodumare lo permita" o fórmulas equivalentes siguen apareciendo con frecuencia en las oraciones y bendiciones cotidianas del pueblo yoruba, reconociendo su autoridad última incluso en los asuntos más pequeños de la vida diaria.`,
    origen: 'Ser supremo y trascendente del panteón yoruba.',
    dominio: 'La existencia última y el destino de las almas', naturaleza: 'Divinidad suprema trascendente', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'obatala', nombre: 'Obatala', nombre_griego: 'Obatala',
    epitetos: 'El Padre de la Blancura, Escultor de los Cuerpos Humanos',
    descripcion_corta: 'Orisha creador encargado por Olodumare de formar la tierra firme y esculpir los cuerpos humanos, venerado por su pureza aunque marcado por un célebre episodio de embriaguez.',
    descripcion_larga: `Obatala es uno de los orishas más antiguos y venerados del panteón yoruba, encargado directamente por Olodumare de la tarea fundacional de crear la tierra firme sobre las aguas primordiales que cubrían originalmente el mundo entero, y de dar forma física a los primeros cuerpos humanos antes de que Olodumare les insuflara el hálito de vida necesario para completar la creación. Se le representa vestido enteramente de blanco, color que simboliza directamente su pureza y su asociación con la paz, la sabiduría y la justicia moral, cualidades por las que es profundamente venerado como una de las figuras más respetadas de todo el panteón.

Un episodio célebre y ampliamente narrado dentro de la tradición yoruba cuenta que, mientras Obatala se dedicaba a la delicada tarea de moldear los cuerpos humanos a partir de arcilla, comenzó a beber vino de palma en exceso, y bajo los efectos de esa embriaguez creció progresivamente descuidado en su trabajo, dando forma a algunos cuerpos con imperfecciones físicas —personas con discapacidades, albinismo o diferencias corporales notables— sin darse cuenta plenamente de lo que estaba haciendo. Al recuperar la sobriedad y comprender el alcance de su descuido, Obatala se sintió profundamente avergonzado, y desde entonces se convirtió en el protector especial y particular de todas las personas con discapacidades o diferencias físicas notables, considerándolas bajo su cuidado directo como una forma de reparación por aquel episodio de embriaguez primordial. Por esa misma razón, sus devotos se abstienen tradicionalmente de consumir vino de palma como muestra de respeto hacia su propia experiencia y hacia la lección de humildad que ese episodio representa dentro de la tradición oral yoruba.`,
    origen: 'Orisha creador encargado por Olodumare de formar la tierra y los cuerpos humanos.',
    dominio: 'La creación, la pureza y la protección de la diferencia física', naturaleza: 'Orisha creador y padre de la pureza', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'yemoja', nombre: 'Yemoja', nombre_griego: 'Yemoja',
    epitetos: 'La Madre de los Peces, Reina del Río y el Mar',
    descripcion_corta: 'Orisha madre de las aguas y de la mayoría de los demás orishas, protectora especial de las mujeres, la maternidad y todos los que dependen del río y el mar.',
    descripcion_larga: `Yemoja es una de las orishas más veneradas y queridas de todo el panteón yoruba, asociada originalmente al río Ogun en el suroeste de Nigeria pero extendida con el tiempo, especialmente a través de la diáspora atlántica, a la totalidad de las aguas oceánicas, donde se la conoce en América bajo el nombre de Yemayá. Se le considera la madre de la mayoría de los demás orishas, incluidos varios de los más poderosos del panteón, ganándose así el epíteto de "madre de todos", y su culto se asocia estrechamente con la maternidad, la fertilidad, la protección de las mujeres embarazadas y el cuidado general de los niños pequeños.

Se le representa habitualmente como una mujer de gran belleza, vestida con telas azules y blancas que evocan el movimiento de las olas, adornada con collares de cuentas de cristal que representan la espuma del mar, y frecuentemente sosteniendo un espejo, símbolo tanto de su propia vanidad como de la superficie reflectante del agua sobre la que gobierna. Numerosos relatos narran episodios de su maternidad extraordinaria, incluido uno especialmente célebre en el que, tras un intento de agresión por parte de su propio hijo Orungan, huyó hacia el mar y, al caer, su cuerpo se transformó en un río caudaloso cuyas aguas, al llegar al mar, dieron origen a numerosos orishas adicionales que brotaron directamente de su vientre transformado. Sus devotos, tanto en África occidental como en las tradiciones afroamericanas que descienden de ella —la santería cubana, el candomblé brasileño— acuden a las orillas del mar o del río para ofrecerle flores, perfumes y melaza, buscando su protección maternal y su favor en asuntos de fertilidad y bienestar familiar.`,
    origen: 'Orisha madre de las aguas, asociada originalmente al río Ogun.',
    dominio: 'Las aguas, la maternidad y la fertilidad', naturaleza: 'Orisha madre de los ríos y el mar', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'oshun', nombre: 'Oshun', nombre_griego: 'Oshun',
    epitetos: 'La Dueña del Río Dulce, Orisha del Amor y la Belleza',
    descripcion_corta: 'Orisha del amor, la belleza y el agua dulce, cuya intervención astuta y generosa salvó a la humanidad cuando los demás orishas la habían excluido de sus planes.',
    descripcion_larga: `Oshun es la orisha del amor, la belleza, la feminidad, el placer y la riqueza dentro del panteón yoruba, asociada directamente al río que lleva su mismo nombre en el suroeste de Nigeria, y considerada una de las divinidades más queridas y cercanas a la experiencia cotidiana de sus devotos, precisamente por gobernar aspectos de la vida —el amor, la alegría, la prosperidad personal— con los que la gente se identifica de manera inmediata y afectuosa. Se le representa como una mujer de una belleza extraordinaria, ataviada con telas amarillas y doradas, adornada con miel, abanicos ornamentados y espejos, símbolos todos de su vanidad orgullosa pero también de su generosidad genuina hacia quienes la honran debidamente.

Un relato especialmente célebre narra que, en cierta ocasión, los demás orishas masculinos, planeando una misión importante para resolver una crisis que amenazaba a toda la humanidad, decidieron excluir deliberadamente a Oshun de sus deliberaciones, considerándola, por su naturaleza asociada al placer y la belleza, poco relevante para asuntos de mayor gravedad. Ofendida por el desprecio, Oshun decidió retirar su propia energía vital y fértil del mundo, provocando que los ríos se secaran y las cosechas fallaran por completo, una crisis que los demás orishas, pese a todo su poder combinado, fueron incapaces de resolver sin su participación. Obligados finalmente a reconocer su error, los orishas acudieron a suplicarle su perdón y su ayuda, y Oshun, tras hacerse rogar lo suficiente para dejar clara la lección, accedió a restaurar la fertilidad del mundo, demostrando de manera contundente que ni siquiera los orishas más poderosos podían prescindir de su presencia esencial. La historia se transmite hasta hoy como recordatorio de que la belleza, el placer y la alegría no son cualidades secundarias sino fuerzas genuinamente indispensables para el equilibrio del mundo.`,
    origen: 'Orisha del amor y el agua dulce, asociada al río que lleva su nombre.',
    dominio: 'El amor, la belleza y la fertilidad de los ríos', naturaleza: 'Orisha del amor y la abundancia', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'shango', nombre: 'Shango', nombre_griego: 'Sango',
    epitetos: 'El Rey del Trueno, Señor del Hacha Doble',
    descripcion_corta: 'Orisha del trueno y el rayo, antiguo rey histórico de Oyo deificado tras su muerte, temido y venerado por su justicia feroz y su temperamento apasionado.',
    descripcion_larga: `Shango ocupa un lugar único dentro del panteón yoruba por su doble naturaleza histórica y divina: se le identifica tradicionalmente como un antiguo rey (alaafin) del poderoso imperio de Oyo, cuyo reinado extraordinario y cuyo temperamento apasionado y feroz lo convirtieron, tras su muerte, en objeto de veneración como orisha del trueno y el rayo, uno de los más poderosos y temidos de todo el panteón. Se le representa como un guerrero de gran fuerza física, empuñando un hacha de doble filo (oshe) que simboliza directamente el rayo, y frecuentemente acompañado de un carnero, animal asociado a su energía viril y combativa.

Según la tradición, Shango poseía el poder de escupir fuego por la boca y de invocar rayos y truenos con solo desearlo, una capacidad que empleó tanto para defender su reino como, en ocasiones, de manera imprudente contra sus propios súbditos y familiares cuando su temperamento volátil se desbordaba. Se casó con tres esposas orishas de gran poder por derecho propio —Oba, Oshun y Oya—, cada una aportando a la relación cualidades y tensiones distintas que la tradición oral desarrolla en numerosos relatos sobre los celos, las rivalidades y las alianzas entre ellas. La muerte de Shango, según la versión más extendida, ocurrió cuando, tras un episodio experimental con poderes mágicos que se le escaparon de control provocando la destrucción de su propio palacio y la muerte de miembros de su familia, decidió ahorcarse de la vergüenza; sus seguidores, sin embargo, sostienen que no murió realmente sino que ascendió directamente al cielo convertido en el propio trueno, y su culto sigue siendo hasta hoy uno de los más extendidos y vitales de toda la tradición yoruba, tanto en África como en sus expresiones americanas a través de la santería y el candomblé.`,
    origen: 'Antiguo rey histórico de Oyo, deificado como orisha tras su muerte.',
    dominio: 'El trueno, el rayo y la justicia feroz', naturaleza: 'Orisha guerrero del trueno', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'ogun', nombre: 'Ogún', nombre_griego: 'Ogun',
    epitetos: 'El Señor del Hierro, Abridor de Caminos',
    descripcion_corta: 'Orisha del hierro, la guerra y la tecnología, pionero que abrió camino a través de la selva primordial para que los demás orishas pudieran habitar la tierra.',
    descripcion_larga: `Ogún es el orisha del hierro, la guerra, la caza y toda forma de tecnología que dependa del metal, considerado uno de los orishas más antiguos y fundamentales del panteón yoruba precisamente por su papel decisivo en un momento crítico de la creación: cuando los orishas descendieron por primera vez del cielo hacia la tierra recién formada, se encontraron con una selva primordial tan densa e impenetrable que ninguno de ellos lograba abrirse paso a través de ella, hasta que Ogún, empuñando un machete de hierro que él mismo había forjado, se abrió camino a golpes sistemáticos a través de la vegetación, permitiendo así que el resto de los orishas pudiera finalmente establecerse sobre la tierra.

Por esa hazaña fundacional, Ogún es venerado como el pionero por excelencia, el abridor de caminos tanto en sentido literal como simbólico, y su patronazgo se extiende hoy sobre cualquier oficio o actividad que involucre el trabajo del metal: herreros, mecánicos, cirujanos, soldados y, en tiempos más recientes, incluso conductores de vehículos motorizados, todos ellos considerados bajo su protección directa por depender de herramientas e instrumentos de metal para su trabajo. Se le representa como un guerrero robusto y austero, poco interesado en el lujo o la ostentación, prefiriendo la vida sencilla del trabajo físico constante y la disciplina guerrera. Un juramento hecho sobre un pedazo de hierro, dentro de la tradición yoruba y sus derivados americanos, se considera uno de los más solemnes y vinculantes posibles, invocando directamente la ira de Ogún sobre cualquiera que se atreviera a romperlo, un reflejo directo de la reputación de rectitud feroz e inflexible que acompaña a este orisha desde los tiempos primordiales de la creación del mundo.`,
    origen: 'Orisha del hierro, pionero que abrió camino a través de la selva primordial.',
    dominio: 'El hierro, la guerra y la tecnología', naturaleza: 'Orisha guerrero y pionero', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'eshu', nombre: 'Eshu', nombre_griego: 'Eshu',
    epitetos: 'El Guardián de las Encrucijadas, Mensajero entre los Mundos',
    descripcion_corta: 'Orisha embaucador y guardián de las encrucijadas, mensajero indispensable entre la humanidad y los demás orishas, capaz de sembrar discordia solo para enseñar una lección.',
    descripcion_larga: `Eshu ocupa una posición absolutamente indispensable dentro de la religión yoruba como el guardián de las encrucijadas, los umbrales y los caminos, así como el mensajero exclusivo encargado de transmitir las ofrendas y súplicas humanas hasta Olodumare y los demás orishas, una función que lo convierte en el primer destinatario obligatorio de cualquier ofrenda ritual, sin cuya intervención ninguna súplica lograría alcanzar jamás a la divinidad a la que iba dirigida. Se le representa de maneras variables según la tradición local, a veces como un joven ágil y sonriente, a veces como un anciano de bastón, pero siempre con un rasgo distintivo: un gorro o tocado dividido en dos colores contrastantes, generalmente rojo y negro, símbolo directo de su naturaleza ambigua y dual, capaz de ser tanto benévolo como perturbador según las circunstancias.

Numerosos relatos narran cómo Eshu, lejos de limitarse a un papel puramente funcional de mensajero, disfruta genuinamente sembrando pequeñas discordias y malentendidos entre las personas, no por pura malicia sino como una forma de enseñanza indirecta sobre las consecuencias de la comunicación descuidada, la arrogancia o la falta de respeto hacia lo sagrado. Uno de los relatos más célebres cuenta que Eshu caminó un día por un camino entre dos amigos inseparables, vistiendo un sombrero mitad rojo y mitad negro; cuando ambos amigos discutieron después acaloradamente sobre el color exacto del sombrero que el viajero llevaba, cada uno convencido de haber visto el color correcto desde su propia perspectiva, Eshu regresó para revelarles la verdad completa, enseñándoles con ese episodio una lección duradera sobre la importancia de considerar siempre más de una perspectiva antes de asumir que la propia visión de las cosas es la única verdad posible.`,
    origen: 'Orisha guardián de las encrucijadas y mensajero entre los mundos.',
    dominio: 'Los caminos, los umbrales y la comunicación con lo divino', naturaleza: 'Orisha embaucador y mensajero', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'oya', nombre: 'Oya', nombre_griego: 'Oya',
    epitetos: 'La Señora de la Tormenta, Guardiana del Umbral de la Muerte',
    descripcion_corta: 'Orisha guerrera de las tormentas, el viento violento y los cambios drásticos, guardiana especial del cementerio y de la transición entre la vida y la muerte.',
    descripcion_larga: `Oya es la orisha de las tormentas, los vientos violentos, los rayos que acompañan a las tempestades y, de manera más profunda, de todo tipo de cambio drástico y transformación radical, tanto en la naturaleza como en la vida de las personas que la veneran. Guerrera formidable por derecho propio, se le asocia estrechamente con el río Níger, cuyo curso caudaloso y a veces impredecible refleja directamente su propia naturaleza. Fue una de las tres esposas de Shango, y numerosos relatos destacan su papel activo y decisivo durante las batallas de su esposo, en las que Oya solía tomar la delantera empuñando su propia espada, demostrando una valentía y una ferocidad en combate que igualaban o incluso superaban las de muchos orishas masculinos del panteón.

Un aspecto particularmente significativo de Oya es su rol como guardiana del cementerio y de la frontera entre el mundo de los vivos y el de los muertos, una responsabilidad que comparte de manera especial con Egungun, el culto ancestral yoruba dedicado a honrar a los antepasados fallecidos; se cree que Oya escolta personalmente a las almas en su tránsito hacia el más allá, y que ningún espíritu puede cruzar completamente ese umbral sin su intervención directa. Pese a esa asociación con la muerte, Oya no se considera una figura sombría o temible en un sentido negativo, sino más bien una fuerza necesaria de renovación: así como una tormenta violenta puede destruir estructuras viejas y débiles para abrir paso a un nuevo crecimiento, Oya representa el tipo de cambio radical y a veces doloroso que resulta, en última instancia, indispensable para el progreso y la renovación genuina, tanto a nivel personal como colectivo.`,
    origen: 'Orisha guerrera de las tormentas, esposa de Shango.',
    dominio: 'Las tormentas, el cambio y la transición hacia la muerte', naturaleza: 'Orisha guerrera de la transformación', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'orunmila', nombre: 'Orunmila', nombre_griego: 'Orunmila',
    epitetos: 'El Testigo del Destino, Dueño del Oráculo de Ifá',
    descripcion_corta: 'Orisha de la sabiduría y la profecía, testigo presente en la creación del destino de cada persona, dueño del sistema oracular de Ifá que revela ese destino a los mortales.',
    descripcion_larga: `Orunmila ocupa un lugar singular y profundamente reverenciado dentro del panteón yoruba como el orisha de la sabiduría, la profecía y el destino, considerado el único testigo presente cuando Olodumare determinó el destino individual (ori) de cada ser humano antes de su nacimiento, un conocimiento privilegiado que lo convierte en la única fuente fiable a la que la humanidad puede recurrir para comprender su propio camino vital, las decisiones que debe tomar y las precauciones rituales necesarias para evitar el infortunio. Es el dueño y creador original del sistema oracular de Ifá, un complejo método de adivinación basado en la manipulación de semillas sagradas o una cadena adivinatoria (opele), capaz de revelar, mediante la interpretación experta de sus sacerdotes especializados (babalawos), cuál de los 256 patrones fundamentales (odu) que componen el sistema corresponde a la situación particular de cada consultante.

Los babalawos, tras años de riguroso entrenamiento memorizando los innumerables versos poéticos y relatos asociados a cada odu específico, actúan como intermediarios indispensables entre Orunmila y quienes buscan orientación sobre asuntos de salud, matrimonio, negocios o cualquier otra decisión importante de su vida, consultando el oráculo en su nombre y transmitiéndoles después la sabiduría revelada junto con las ofrendas o precauciones rituales necesarias para asegurar un resultado favorable. Orunmila es descrito frecuentemente como un compañero cercano y paciente de la humanidad, presente en la creación del mundo junto a los demás orishas principales pero dedicado específicamente a preservar y transmitir el conocimiento necesario para que cada persona pudiera vivir en armonía con el destino que le había sido asignado antes incluso de nacer, un sistema de sabiduría cuya vigencia y prestigio se mantiene extraordinariamente vivo hasta hoy tanto en Nigeria como en las tradiciones religiosas afroamericanas que descienden directamente de la religión yoruba.`,
    origen: 'Orisha de la sabiduría, testigo de la creación del destino humano.',
    dominio: 'La profecía, la sabiduría y el oráculo de Ifá', naturaleza: 'Orisha adivino y guía del destino', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'osanyin', nombre: 'Osanyin', nombre_griego: 'Osanyin',
    epitetos: 'El Guardián de las Hojas, Dueño de la Medicina Vegetal',
    descripcion_corta: 'Orisha de las hierbas medicinales y el bosque, guardián del conocimiento botánico curativo, representado con un solo brazo, una sola pierna y un solo ojo.',
    descripcion_larga: `Osanyin es el orisha del bosque, las hierbas medicinales y todo el conocimiento botánico necesario para la curación y la práctica de la magia ritual dentro de la tradición yoruba, considerado el guardián supremo del ewe, las hojas y plantas sagradas cuyo uso correcto resulta indispensable para casi cualquier ceremonia religiosa, ritual de sanación o preparación de remedios tradicionales practicados dentro de esta religión. Ningún otro orisha, por poderoso que sea, puede prescindir completamente de la colaboración de Osanyin, dado que las ofrendas, los baños rituales y los remedios que se emplean en su honor dependen directamente del conocimiento botánico que solo él posee de manera completa.

Se le representa con una apariencia física físicamente asimétrica y particular: un solo brazo, una sola pierna, un solo ojo y una oreja diminuta junto a otra de tamaño desproporcionadamente grande, una descripción que distintas interpretaciones dentro de la tradición explican como reflejo de su naturaleza especializada y extremadamente enfocada, capaz de percibir con una sola oreja agudizada los sonidos más sutiles del bosque que revelan las propiedades ocultas de cada planta. Osanyin habita permanentemente en lo profundo del bosque, y quienes desean acceder a su conocimiento deben acudir personalmente a recolectar las plantas necesarias directamente de su dominio, pidiendo siempre su permiso ritual antes de cortar cualquier hoja, bajo la creencia de que ignorar ese protocolo despoja a la planta recolectada de su poder medicinal genuino. Su relación cercana y a veces tensa con Eshu, que en algunos relatos intenta robar su conocimiento mediante engaños, añade una capa adicional de complejidad narrativa a la figura de este orisha fundamental mas discreto que muchos de sus pares más célebres del panteón yoruba.`,
    origen: 'Orisha del bosque y las hierbas medicinales.',
    dominio: 'Las plantas medicinales y el conocimiento botánico', naturaleza: 'Orisha curandero del bosque', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'oba', nombre: 'Oba', nombre_griego: 'Oba',
    epitetos: 'La Esposa Traicionada del Río',
    descripcion_corta: 'Orisha del río Oba, primera esposa de Shango, engañada por sus propias rivales para cortarse la oreja creyendo que así conservaría el amor de su esposo para siempre.',
    descripcion_larga: `Oba es la orisha asociada al río que lleva su nombre en el suroeste de Nigeria, y ocupa un lugar particular dentro del panteón yoruba como la primera esposa de Shango, el poderoso orisha del trueno, aunque su relación con él se vio complicada de manera trágica por la rivalidad que mantenía con las otras dos esposas de su marido, Oshun y Oya, cada una favorecida por Shango de maneras que Oba, profundamente insegura sobre el afecto de su esposo, sentía como una amenaza constante a su propia posición dentro del hogar compartido.

Según el relato más extendido de la tradición yoruba, Oba, desesperada por asegurar el amor permanente de Shango, acudió a Oshun buscando el secreto de su indudable atractivo ante los ojos de su esposo compartido. Oshun, movida por la rivalidad más que por la sinceridad, le mintió deliberadamente, asegurándole que el secreto de mantener satisfecho a Shango consistía en cocinarle sopa preparada con un trozo de su propia oreja cortada, un ingrediente que ella misma, según afirmaba falsamente, empleaba con regularidad. Oba, confiando ingenuamente en el consejo de su rival, se cortó efectivamente una porción de su propia oreja y la incorporó a la sopa que sirvió después a Shango; cuando este descubrió, horrorizado, la naturaleza real del ingrediente, la rechazó con repulsión y humillación pública, y Oba, devastada por la vergüenza y la traición sufrida, huyó y se transformó en el río que hoy lleva su nombre. Se dice que, en el punto donde el río Oba se encuentra con el río Oshun, las aguas de ambos se vuelven turbulentas y peligrosas, un reflejo permanente, según la tradición, de la rivalidad y el dolor que persisten entre ambas orishas incluso después de haberse transformado para siempre en las corrientes de agua que hoy llevan sus nombres.`,
    origen: 'Orisha del río Oba, primera esposa de Shango.',
    dominio: 'El río y las consecuencias de los celos', naturaleza: 'Orisha trágica de las aguas', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'aganju', nombre: 'Aganju', nombre_griego: 'Aganju',
    epitetos: 'El Señor del Desierto y los Volcanes',
    descripcion_corta: 'Orisha de la tierra salvaje, los volcanes y los espacios inhóspitos, hermano o padre de Shango según distintas versiones, patrón de barqueros y viajeros.',
    descripcion_larga: `Aganju es el orisha asociado a la tierra salvaje e inhóspita —los desiertos, las sabanas remotas, las montañas volcánicas y todo terreno difícil de habitar o atravesar—, considerado dentro de distintas versiones de la tradición yoruba tanto hermano como, según otras fuentes, padre del propio Shango, una ambigüedad genealógica que refleja la naturaleza fragmentada y regionalmente variable de buena parte de la tradición oral yoruba, transmitida durante siglos entre comunidades dispersas sin un canon único centralizado. Se le representa como una figura robusta y solitaria, asociada al fuego volcánico y al calor abrasador de los territorios más áridos del mundo.

Uno de los relatos más conocidos vinculados a Aganju cuenta que, en cierta ocasión, se negó a ayudar a Shango a cruzar un río caudaloso que separaba sus respectivos territorios, obligándolo a esperar durante mucho tiempo bajo el sol abrasador antes de finalmente acceder a transportarlo en su barca; ese episodio explicaría, según la tradición, por qué Aganju es venerado especialmente como patrón de los barqueros, los transportistas y todos aquellos cuyo oficio consiste en ayudar a otros a cruzar obstáculos difíciles, aunque su ayuda, como demuestra el propio relato, no siempre llega con la rapidez o la generosidad que quien la solicita desearía. Se le asocia también con la resistencia física extrema y la capacidad de sobrevivir en condiciones adversas, cualidades que sus devotos invocan especialmente antes de emprender viajes largos o peligrosos a través de territorios desconocidos o inhóspitos, confiando en que su favor les otorgue la fortaleza necesaria para completar con éxito el trayecto.`,
    origen: 'Orisha de la tierra salvaje, los volcanes y los desiertos.',
    dominio: 'Los territorios inhóspitos y el cruce de obstáculos', naturaleza: 'Orisha solitario de la tierra salvaje', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'anansi', nombre: 'Anansi', nombre_griego: 'Kwaku Ananse',
    epitetos: 'El Dios Araña, Dueño de Todas las Historias',
    descripcion_corta: 'Araña astuta y trickster del panteón akan, que ganó de Nyame la posesión de todas las historias del mundo mediante una serie de engaños tan ingeniosos como memorables.',
    descripcion_larga: `Anansi es, sin lugar a dudas, la figura más célebre y querida de toda la tradición oral akan, una araña dotada de inteligencia extraordinaria y una vena traviesa prácticamente inagotable, protagonista de un vastísimo repertorio de relatos que se transmiten hasta hoy no solo en Ghana y el resto de África occidental, sino también, transformados por la diáspora atlántica, en el Caribe y otras regiones de América donde su figura se conserva bajo nombres ligeramente distintos como "Anancy" o "Nancy". Aunque frecuentemente se le representa como un simple embaucador cómico interesado únicamente en su propio beneficio, Anansi es también, dentro de la tradición akan, una figura con estatus divino genuino, capaz de interactuar directamente con Nyame, el dios supremo del cielo, en un plano de relativa igualdad astuta.

El relato más célebre asociado a su figura cuenta cómo Anansi logró comprarle a Nyame la totalidad de las historias que existían en el mundo, entonces conocidas simplemente como "las historias del cielo", mediante el cumplimiento de un precio que el propio dios supremo consideraba imposible de pagar: capturar vivos a un enjambre completo de avispas peligrosas, una serpiente pitón de gran tamaño, un leopardo feroz y un espíritu invisible temido por todos. Anansi logró cada captura mediante un engaño distinto y particularmente ingenioso —convenciendo a la pitón de medirse contra una rama para demostrar cuál era más larga, atrapando a las avispas con la promesa de refugio bajo la lluvia, cazando al leopardo con una trampa disfrazada de pozo— y al presentar las cuatro criaturas capturadas ante Nyame, este, honrando su palabra, le entregó la propiedad completa de todas las historias, que desde entonces se conocen en la tradición akan como "las historias de Anansi", explicando de manera definitiva por qué la tradición narrativa oral de ese pueblo lleva hasta hoy el nombre de la astuta araña en lugar del propio dios del cielo que originalmente las poseía.`,
    origen: 'Araña trickster del panteón akan, dueña de todas las historias del mundo.',
    dominio: 'La astucia, el ingenio y la tradición oral', naturaleza: 'Divinidad trickster con forma de araña', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'mami-wata', nombre: 'Mami Wata', nombre_griego: 'Mami Wata',
    epitetos: 'La Madre del Agua, Espíritu Pan-Africano de Riqueza y Peligro',
    descripcion_corta: 'Espíritu del agua venerado a lo largo de toda la costa occidental y central de África, de belleza hipnótica, capaz de otorgar riqueza y fortuna a un precio peligrosamente alto.',
    descripcion_larga: `Mami Wata es un espíritu del agua venerado con enorme extensión geográfica a lo largo de toda la costa occidental y central de África, desde Senegal hasta Angola, adoptando nombres y detalles ligeramente distintos según la región pero manteniendo un núcleo de rasgos consistentes: se le describe generalmente como una mujer de una belleza hipnótica y sobrenatural, de piel a menudo pálida en contraste con las poblaciones locales, cabello largo y lustroso, y frecuentemente con la mitad inferior de su cuerpo transformada en cola de pez o serpiente, sosteniendo con frecuencia un espejo, un peine y a veces una serpiente enroscada alrededor de su propio cuerpo.

Mami Wata gobierna la riqueza material, la buena fortuna y el atractivo personal, y quienes logran ganarse su favor —a menudo a través de encuentros oníricos o visiones cerca del agua— pueden recibir de ella prosperidad económica considerable, aunque casi siempre a un precio significativo: sus devotos más cercanos suelen renunciar a la posibilidad de tener hijos propios, o deben mantener un compromiso ritual de fidelidad hacia ella que puede complicar sus relaciones humanas convencionales, un pacto que la tradición presenta con una ambivalencia deliberada entre la bendición genuina y el peligro latente. Se cree que quienes se ahogan de manera misteriosa en ríos o el mar, sin causa aparente que lo explique, pueden haber sido llevados por Mami Wata hacia su propio reino submarino, donde permanecen bajo su cuidado durante un tiempo antes de, en algunos relatos, regresar transformados con dones y conocimientos especiales. Su culto ha demostrado una capacidad extraordinaria de adaptación y supervivencia a lo largo de los siglos, incorporando con el tiempo elementos de sirenas europeas traídas por comerciantes coloniales y manteniéndose extraordinariamente vivo hasta hoy en numerosas comunidades a lo largo de toda la costa africana occidental y central.`,
    origen: 'Espíritu del agua venerado a lo largo de la costa occidental y central de África.',
    dominio: 'El agua, la riqueza y la belleza peligrosa', naturaleza: 'Espíritu acuático pan-africano', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'amadioha', nombre: 'Amadioha', nombre_griego: 'Amadioha',
    epitetos: 'El Dios del Trueno y la Justicia Igbo',
    descripcion_corta: 'Dios del trueno, el rayo y la justicia dentro de la tradición igbo, cuyo rayo castiga directamente a mentirosos, ladrones y a quienes rompen juramentos solemnes.',
    descripcion_larga: `Amadioha es una de las divinidades más importantes y temidas dentro de la tradición religiosa del pueblo igbo, predominante en el sureste de la actual Nigeria, gobernando específicamente el trueno, el rayo y, de manera más profunda, la justicia moral y el castigo directo de la maldad y la falsedad dentro de la comunidad. Se le considera un dios activo y presente, dispuesto a intervenir de manera directa y visible en los asuntos humanos cuando la gravedad de una transgresión lo justifica, a diferencia de otras divinidades más distantes que actúan de manera más indirecta o simbólica.

Los juramentos hechos invocando el nombre de Amadioha se consideraban entre los más solemnes y temidos de toda la tradición igbo, y se creía que romper deliberadamente una promesa sellada bajo su nombre invitaba directamente su castigo, manifestado habitualmente en forma de un rayo que caía sobre el perjuro o sobre su propiedad como consecuencia inmediata de la transgresión. De manera similar, se recurría tradicionalmente a Amadioha para resolver disputas particularmente difíciles de arbitrar por medios humanos ordinarios, especialmente casos de robo o mentira donde no existían pruebas concluyentes contra el sospechoso: se creía que, si la persona acusada era efectivamente culpable, Amadioha se encargaría de revelarlo mediante algún castigo visible en un plazo razonable, mientras que la ausencia de cualquier consecuencia se interpretaba como una confirmación tácita de inocencia. El culto a Amadioha, pese a la presión sostenida de siglos de evangelización cristiana en la región, ha demostrado una resiliencia notable, y su nombre sigue siendo reconocido e invocado hasta hoy dentro de las comunidades igbo tanto en Nigeria como en su extensa diáspora.`,
    origen: 'Dios del trueno y la justicia dentro de la tradición igbo.',
    dominio: 'El trueno, el rayo y la justicia moral', naturaleza: 'Divinidad justiciera del trueno', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-africana'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-africana" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando titanes y dioses de Mitologia Africana (parte 1)...\n');
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
