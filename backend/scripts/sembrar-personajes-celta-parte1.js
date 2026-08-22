// ============================================================
// scripts/sembrar-personajes-celta-parte1.js
// ------------------------------------------------------------
// Primer lote de Mitologia Celta: 5 titanes/primordiales y 15
// dioses (mayormente del ciclo mitologico irlandes -- Tuatha De
// Danann -- mas algunas figuras galesas del Mabinogion). Contenido
// completo desde el inicio. Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-celta-parte1.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- TITANES / PRIMORDIALES ---
  {
    tipo: 'titan', slug: 'cailleach', nombre: 'Cailleach', nombre_griego: 'Cailleach Bhéara',
    epitetos: 'La Vieja del Invierno, Dadora de Forma a la Tierra',
    descripcion_corta: 'Diosa primordial del invierno y la creación del paisaje — con un solo golpe de su martillo dio forma a montañas y valles enteros.',
    descripcion_larga: `La Cailleach, "la vieja" o "la encapuchada", es una de las figuras más antiguas y extendidas de toda la tradición mitológica de las islas británicas e Irlanda, venerada bajo nombres ligeramente distintos en Escocia, Irlanda y la Isla de Man, pero siempre asociada al mismo papel fundamental: la creadora primordial del paisaje montañoso mismo. Según la tradición escocesa, la Cailleach recorría el territorio con un enorme martillo, dando forma a valles y montañas con cada golpe que asestaba contra el suelo, y dejando caer rocas de su delantal para formar colinas enteras allí donde tropezaba.

Se le representa como una anciana de piel azulada o gris, un solo ojo, y dientes rojizos como el óxido, gobernando específicamente la temporada de invierno: en muchas tradiciones, se transforma cada primavera en una joven hermosa —a menudo identificada con Brigid— para gobernar la mitad cálida del año, retornando a su forma de anciana cuando el frío regresa en otoño, un ciclo que algunos estudiosos interpretan como una de las expresiones más antiguas documentadas de la dualidad estacional en el folclore europeo. Se le atribuye también el control directo de las tormentas invernales y el poder de convertir a cualquier persona en piedra con solo tocarla, un motivo que se repite en numerosas leyendas locales sobre formaciones rocosas específicas del paisaje escocés e irlandés.`,
    origen: 'Diosa primordial del invierno, dadora de forma al paisaje montañoso.',
    dominio: 'El invierno y la creación del paisaje', naturaleza: 'Diosa primordial anciana', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'ler', nombre: 'Ler', nombre_griego: 'Lir',
    epitetos: 'El Antiguo Señor del Mar',
    descripcion_corta: 'Dios primordial del mar, padre de Manannán — figura tan antigua que apenas protagoniza mitos propios, eclipsada por el culto mucho más activo de su propio hijo.',
    descripcion_larga: `Ler gobierna el mar en su aspecto más primordial y abstracto, una divinidad tan antigua dentro de la tradición irlandesa que su propio nombre —relacionado con la palabra irlandesa para "mar"— funciona casi como sinónimo directo del elemento que representa, más que como el nombre propio de una personalidad narrativa activa. A diferencia de su hijo Manannán mac Lir, "hijo de Ler", que sí protagoniza numerosos relatos como guía activo entre el mundo mortal y el Otro Mundo, Ler aparece en las fuentes escritas sobre todo como una presencia distante y fundacional, mencionado casi siempre en relación con su descendencia más que por sus propias hazañas directas.

El relato irlandés más célebre asociado a su nombre, "Los hijos de Lir", en realidad involucra principalmente a otro Lir distinto —un rey mortal de los Tuatha Dé Danann cuyos hijos son transformados en cisnes por una madrastra celosa—, una coincidencia de nombres que generaciones de estudiosos han debatido sin llegar a una conclusión definitiva sobre si se trata del mismo personaje bajo dos tradiciones distintas o de dos figuras completamente separadas que terminaron fusionándose en la memoria popular. En cualquier caso, la propia existencia de Ler como padre del mucho más activo Manannán refleja un patrón habitual en las mitologías indoeuropeas: una divinidad primordial y abstracta que cede protagonismo narrativo a una generación posterior más cercana y accesible a los mortales.`,
    origen: 'Dios primordial del mar, padre de Manannán mac Lir.',
    dominio: 'El mar en su aspecto primordial', naturaleza: 'Dios primordial distante', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'eriu', nombre: 'Ériu', nombre_griego: 'Ériu',
    epitetos: 'La Diosa que da Nombre a Irlanda',
    descripcion_corta: 'Diosa primordial de la tierra, una de las tres hermanas epónimas de Irlanda — su nombre sigue siendo, hasta hoy, el nombre gaélico oficial del país.',
    descripcion_larga: `Ériu es una de las tres diosas hermanas —junto a Banba y Fódla— que personificaban la soberanía misma de Irlanda en el momento en que los Milesios, los últimos invasores legendarios de la isla según el Lebor Gabála Érenn ("Libro de las Invasiones"), llegaron a sus costas. Cada una de las tres hermanas pidió a los recién llegados que la isla llevara su propio nombre; los Milesios prometieron honrar a las tres, pero fue el nombre de Ériu el que terminó consolidándose como el más usado, sobreviviendo hasta el día de hoy como Éire, el nombre oficial en gaélico irlandés de la propia República de Irlanda.

Como diosa de la soberanía territorial, Ériu representa un concepto central en la mitología política irlandesa: la idea de que el legítimo gobernante de la tierra debía, simbólicamente, "casarse" con la diosa que encarnaba el territorio mismo, un motivo ritual conocido como banais ríghe ("boda real") que aparece repetido en numerosos relatos sobre la entronización de reyes irlandeses legendarios. Ériu no gobierna, por tanto, un dominio natural específico como el mar o el trueno, sino la tierra de Irlanda en su totalidad como entidad viva y consciente, cuya aceptación o rechazo determinaba la legitimidad misma de cualquier poder político ejercido sobre ella.`,
    origen: 'Una de las tres diosas hermanas epónimas de Irlanda.',
    dominio: 'La soberanía y la tierra de Irlanda', naturaleza: 'Diosa primordial de la tierra', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'domnu', nombre: 'Domnu', nombre_griego: 'Domnu',
    epitetos: 'La Diosa del Abismo Profundo',
    descripcion_corta: 'Diosa primordial del abismo, madre de los Fomorianos — la fuerza caótica y ancestral que precedió a la llegada de los Tuatha Dé Danann a Irlanda.',
    descripcion_larga: `Domnu personifica el abismo primordial, una fuerza asociada al mar profundo y desconocido y a la oscuridad anterior a cualquier orden establecido, y se le considera la madre ancestral de los Fomorianos, la raza semi-monstruosa que gobernaba Irlanda antes de la llegada sucesiva de otros pueblos legendarios, incluidos finalmente los propios Tuatha Dé Danann. Su propio nombre está relacionado con una raíz lingüística que significa "profundidad" o "abismo", reforzando su identidad como encarnación de un caos primordial anterior a la civilización organizada que representarían después las divinidades más activas del panteón irlandés.

A diferencia de los Fomorianos individuales que sí protagonizan episodios narrativos concretos —como Balor, con su ojo capaz de matar con la sola mirada—, Domnu permanece en las fuentes como una presencia mucho más abstracta y remota, mencionada sobre todo como origen genealógico de esa raza antigua antes que como participante directa en ningún conflicto específico. Su función mitológica se asemeja a la de otras grandes madres primordiales de mitologías comparadas —como Tiamat en Mesopotamia o Nammu en Sumeria—: una fuerza ancestral asociada al caos acuático original, de la que emergen tanto amenazas como, en última instancia, el propio material genealógico sobre el que se construiría después el orden divino más organizado.`,
    origen: 'Diosa primordial del abismo, madre ancestral de los Fomorianos.',
    dominio: 'El abismo y el caos primordial', naturaleza: 'Diosa primordial ancestral', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'cesair', nombre: 'Cesair', nombre_griego: 'Cesair',
    epitetos: 'La Primera en Pisar Irlanda',
    descripcion_corta: 'Según el Libro de las Invasiones, la primera persona en llegar a Irlanda, cuarenta días antes del Diluvio Universal — con cincuenta mujeres y apenas tres hombres.',
    descripcion_larga: `Según el Lebor Gabála Érenn, el "Libro de las Invasiones" que narra la historia mítica completa de los sucesivos pueblos que poblaron Irlanda, Cesair fue la primerísima persona en pisar la isla, llegando desde algún punto remoto —descrita a veces como nieta del propio Noé bíblico, en un intento medieval de fusionar la mitología irlandesa nativa con la cronología cristiana— apenas cuarenta días antes de que el Diluvio Universal cubriera la tierra entera. Cesair llegó acompañada de un grupo compuesto por cincuenta mujeres y tan solo tres hombres, una desproporción que el propio texto explica como resultado de haber sido rechazada previamente en otras tierras por la misma razón.

Los tres hombres del grupo se repartieron a las cincuenta mujeres entre ellos, pero uno de los tres murió poco después, dejando a los dos restantes con la tarea imposible de repartirse entre ambos a todo el grupo femenino completo. Cuando finalmente llegó el Diluvio anunciado, Cesair y prácticamente todo su pueblo perecieron ahogados, salvo un único superviviente, Fintan mac Bóchra, que según la tradición se transformó sucesivamente en salmón, águila y halcón para sobrevivir durante milenios, convirtiéndose en testigo viviente de toda la historia posterior de Irlanda a través de las siguientes oleadas de invasores legendarios que poblarían la isla generaciones después de la desaparición completa del pueblo original de Cesair.`,
    origen: 'La primera persona legendaria en llegar a Irlanda, según el Libro de las Invasiones.',
    dominio: 'La primera colonización mítica de Irlanda', naturaleza: 'Figura primordial fundacional', es_preview: 0
  },

  // --- DIOSES ---
  {
    tipo: 'dios', slug: 'dagda', nombre: 'El Dagda', nombre_griego: 'An Dagda',
    epitetos: 'El Buen Dios, Padre de Todos',
    descripcion_corta: 'Dios padre de los Tuatha Dé Danann, dueño de un caldero que nunca se vacía y una maza capaz de matar con un extremo y revivir con el otro.',
    descripcion_larga: `El Dagda, cuyo nombre significa literalmente "el buen dios" —no en sentido moral, sino en el de "hábil en todo" o "excelente en cada cosa"—, es el padre y líder de los Tuatha Dé Danann, el pueblo divino que gobernaba Irlanda antes de la llegada de los mortales Milesios. Posee tres objetos de poder extraordinario: un caldero de abundancia tan grande que nadie jamás se retira de él insatisfecho, capaz de alimentar a un ejército entero sin vaciarse jamás; un arpa mágica capaz de controlar las estaciones y las emociones de quienes la escuchan con solo tocarla; y una maza descomunal cuyo extremo pesado puede matar a nueve hombres de un solo golpe, mientras el extremo opuesto tiene el poder de devolver la vida a los muertos.

Pese a su enorme poder, el Dagda se representa frecuentemente con un humor tosco y una apariencia poco refinada —una túnica demasiado corta, un apetito descomunal—, cualidades que contrastan deliberadamente con la solemnidad esperada de un dios supremo, y que forman parte de su carácter entrañable dentro de las fuentes irlandesas. Antes de la Segunda Batalla de Mag Tuired contra los Fomorianos, el Dagda tuvo un encuentro con la Morrígan junto a un río, y ella le prometió su ayuda en la batalla venidera a cambio de esa unión. Es padre, entre otros, de Aengus y Brigid, y su papel como proveedor inagotable de alimento lo convierte en una de las divinidades más queridas y menos temidas de todo el panteón irlandés.`,
    origen: 'Padre y líder de los Tuatha Dé Danann.',
    dominio: 'La abundancia, la sabiduría y la fuerza', naturaleza: 'Dios padre supremo', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'morrigan', nombre: 'La Morrígan', nombre_griego: 'Mór-Ríoghain',
    epitetos: 'La Reina Fantasma, Diosa de la Guerra y el Destino',
    descripcion_corta: 'Diosa de la guerra, la profecía y el destino, capaz de transformarse en cuervo — su aparición sobre un campo de batalla anuncia siempre quién está destinado a morir.',
    descripcion_larga: `La Morrígan gobierna la guerra no como simple fuerza de combate directo sino como destino inevitable: recorre los campos de batalla transformada en cuervo, decidiendo o al menos anticipando quién vivirá y quién morirá, y su sola presencia lavando armaduras ensangrentadas junto a un río —una imagen conocida como "la lavandera del vado"— se convirtió en presagio inequívoco de muerte inminente para cualquier guerrero que la viera antes de una batalla decisiva. Su nombre puede interpretarse tanto como "gran reina" como "reina fantasma", una ambigüedad que refleja su naturaleza dual entre la majestad y el terror.

Antes de la Segunda Batalla de Mag Tuired contra los Fomorianos, la Morrígan se unió al Dagda junto a un río en un encuentro que selló su promesa de intervenir a favor de los Tuatha Dé Danann, y durante la batalla misma incitó a las tropas con versos proféticos capaces de inspirar tanto un valor desesperado como el terror paralizante, según a quién dirigiera sus palabras. Su relación más célebre con un héroe individual es la que mantiene con Cú Chulainn: tras ofrecerle su amor y ser rechazada, la Morrígan se convierte en su adversaria persistente, atacándolo bajo distintas formas animales durante el Táin Bó Cúailnge, hasta que finalmente, ya anciana y ordeñando una vaca, consigue que él mismo, sin reconocerla, la bendiga sin saberlo, sanando las heridas que él mismo le había infligido en sus enfrentamientos anteriores.`,
    origen: 'Diosa de la guerra y el destino de los Tuatha Dé Danann.',
    dominio: 'La guerra, la profecía y el destino', naturaleza: 'Diosa de la guerra metamórfica', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'lugh', nombre: 'Lugh', nombre_griego: 'Lugh Lámhfhada',
    epitetos: 'El de la Mano Larga, el Maestro de Todas las Artes',
    descripcion_corta: 'Dios joven dominador de todas las artes y oficios a la vez, cuya lanza infalible y cuya astucia resultaron decisivas para derrotar al gigante Balor.',
    descripcion_larga: `Lugh se presentó ante las puertas de Tara, la corte de los Tuatha Dé Danann, exigiendo entrada pese a que el portero le advertía que solo se admitía a quienes dominaran un oficio específico de utilidad para la corte. Lugh respondió, uno tras otro, que era carpintero, herrero, guerrero, arpista, poeta, historiador, hechicero y médico, y ante cada oficio el portero le indicaba que ya había alguien capacitado en la corte para esa tarea; finalmente, Lugh preguntó si existía alguien que dominara todas esas artes al mismo tiempo, y al no haber respuesta, fue admitido de inmediato, ganándose el epíteto de Samildánach, "el de muchos talentos".

Su papel resultó decisivo en la Segunda Batalla de Mag Tuired contra los Fomorianos, liderados por su propio abuelo materno, el temible Balor de ojo mortal. Con su lanza infalible y una honda certera, Lugh logró alcanzar el ojo destructivo de Balor en el instante exacto en que este se abría para fulminar al ejército enemigo, empujando el proyectil con tal fuerza que atravesó el ojo y salió por la nuca, dirigiendo el rayo mortal del propio ojo contra las filas fomorianas en retirada en lugar de contra los Tuatha Dé Danann. Su nombre dio origen al festival de Lughnasadh, celebrado a comienzos de agosto en honor tanto a Lugh como a su madre adoptiva Tailtiu, cuya muerte tras despejar las llanuras irlandesas para el cultivo se conmemoraba con juegos y competencias atléticas cada año.`,
    origen: 'Nieto de Balor por parte materna, criado en secreto lejos de su abuelo.',
    dominio: 'Todas las artes y oficios', naturaleza: 'Dios polifacético', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'brigid', nombre: 'Brigid', nombre_griego: 'Bríd',
    epitetos: 'La Diosa de Tres Aspectos: Poesía, Forja y Sanación',
    descripcion_corta: 'Diosa hija del Dagda, venerada simultáneamente como tres hermanas del mismo nombre — patrona de la poesía, la forja y la curación.',
    descripcion_larga: `Brigid es hija del Dagda y una de las divinidades más veneradas de todo el panteón irlandés, descrita en algunas fuentes tempranas no como una sola diosa sino como tres hermanas que comparten el mismo nombre, cada una presidiendo un dominio distinto: la poesía y la inspiración artística, la herrería y el trabajo del metal, y la medicina y la curación. Esta estructura triple, lejos de fragmentar su culto, parece haber reforzado su presencia como fuerza creativa completa, capaz de abarcar tanto la palabra inspirada como el fuego transformador de la forja y el cuidado del cuerpo herido.

Su culto resultó tan profundamente arraigado en la sociedad irlandesa que sobrevivió casi sin interrupción a la llegada del cristianismo, transformándose en la devoción a Santa Brígida de Kildare, una de las santas patronas más veneradas de toda Irlanda hasta hoy, cuyas festividades conservan elementos rituales —cruces tejidas de junco, fuegos perpetuos mantenidos por sacerdotisas o monjas— que los estudiosos consideran continuidad directa del culto pagano original más que una simple coincidencia de nombres. El festival de Imbolc, celebrado a comienzos de febrero para marcar el inicio simbólico de la primavera y asociado tradicionalmente con la lactancia de las ovejas, se dedicaba originalmente a Brigid, y su fuego sagrado, según la tradición, ardía sin apagarse jamás en su santuario principal.`,
    origen: 'Hija del Dagda, venerada como tres hermanas de un mismo nombre.',
    dominio: 'La poesía, la forja y la sanación', naturaleza: 'Diosa triple', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'nuada', nombre: 'Nuada', nombre_griego: 'Nuada Airgetlám',
    epitetos: 'El del Brazo de Plata',
    descripcion_corta: 'Primer rey de los Tuatha Dé Danann, obligado a ceder el trono al perder un brazo en batalla — recuperó la corona solo tras recibir un brazo de plata funcional.',
    descripcion_larga: `Nuada gobernaba como rey de los Tuatha Dé Danann cuando su pueblo libró la Primera Batalla de Mag Tuired contra los Fir Bolg, los habitantes previos de Irlanda; durante el combate, Nuada perdió un brazo completo, cercenado por la espada de su adversario Sreng. Aunque los Tuatha Dé Danann ganaron finalmente la batalla, la ley tradicional irlandesa prohibía que un rey gobernara con cualquier imperfección física visible, obligando a Nuada a renunciar al trono pese a haber liderado la victoria.

El médico divino Dian Cécht le fabricó entonces un brazo protésico completo de plata pura, funcional en apariencia pero incapaz de sentir o moverse con la naturalidad de un miembro real; más tarde, el propio hijo de Dian Cécht, Miach, logró superar ese límite curando el brazo original hasta devolverle sensación y movimiento plenos —un logro médico tan extraordinario que despertó los celos de su padre, quien terminó matando a su propio hijo por haberlo superado—. Con su cuerpo ya completamente restaurado, Nuada recuperó el trono que había perdido, gobernando durante un periodo más antes de cederlo voluntariamente a Lugh cuando la amenaza fomoriana, liderada por Balor, resultó demasiado grave como para no contar con el liderazgo del guerrero más capaz disponible. Nuada murió finalmente en la Segunda Batalla de Mag Tuired a manos del propio Balor.`,
    origen: 'Primer rey de los Tuatha Dé Danann tras su llegada a Irlanda.',
    dominio: 'La realeza y el liderazgo en batalla', naturaleza: 'Dios rey guerrero', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'danu', nombre: 'Danu', nombre_griego: 'Anu',
    epitetos: 'La Madre de los Dioses',
    descripcion_corta: 'Diosa madre ancestral cuyo nombre da origen al de los Tuatha Dé Danann, "el pueblo de la diosa Danu" — su culto es tan antiguo que apenas sobreviven relatos directos sobre ella.',
    descripcion_larga: `Danu da nombre directamente a los Tuatha Dé Danann, "el pueblo de la diosa Danu", el linaje divino completo que gobernó Irlanda antes de la llegada de los mortales Milesios, un vínculo que la sitúa como ancestro genealógico simbólico de prácticamente todo el panteón irlandés documentado. Pese a esa posición fundacional tan destacada, las fuentes escritas que sobreviven ofrecen sorprendentemente poca información narrativa directa sobre ella: ningún mito extenso la tiene como protagonista activa, y su presencia se deduce principalmente a través del propio nombre colectivo de su pueblo divino más que a través de relatos donde ella misma actúe.

Algunos estudiosos comparativos han señalado paralelismos lingüísticos y funcionales entre Danu y otras grandes diosas madre de tradiciones indoeuropeas relacionadas, incluida la diosa hindú Danu mencionada en textos védicos antiguos, sugiriendo una raíz mitológica compartida mucho más antigua que cualquiera de las tradiciones particulares que la heredaron por separado. Su asociación frecuente con ríos y aguas corrientes —el río Danubio en Europa central lleva, según algunas teorías, una raíz etimológica relacionada— refuerza su papel como fuerza fértil y generativa primordial, la fuente ancestral silenciosa de la que desciende simbólicamente toda la generación posterior de dioses activos que sí protagonizan los grandes relatos irlandeses conservados hasta hoy.`,
    origen: 'Diosa madre ancestral, epónima de los Tuatha Dé Danann.',
    dominio: 'La maternidad ancestral divina', naturaleza: 'Diosa madre primordial', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'manannan-mac-lir', nombre: 'Manannán mac Lir', nombre_griego: 'Manannán mac Lir',
    epitetos: 'El Señor del Mar, Guardián del Otro Mundo',
    descripcion_corta: 'Dios del mar y guardián de las fronteras hacia el Otro Mundo — posee un manto de niebla que oculta islas enteras y un caballo capaz de galopar sobre las olas.',
    descripcion_larga: `Manannán mac Lir, "hijo de Ler", gobierna el mar que rodea Irlanda y actúa además como guardián principal de las fronteras hacia el Otro Mundo, el reino sobrenatural paralelo al mundo mortal donde habitan los Tuatha Dé Danann tras su retirada de Irlanda a manos de los Milesios. Posee un manto mágico de niebla capaz de ocultar islas enteras de la vista mortal, protegiendo así el acceso al Otro Mundo de cualquier intruso no invitado, y monta un caballo llamado Enbarr capaz de galopar sobre la superficie del mar con la misma facilidad que sobre tierra firme.

Se le atribuye también la posesión de una espada infalible, Fragarach ("el que responde"), capaz de atravesar cualquier armadura y de obligar a cualquiera bajo su filo a decir la verdad, y de un barco mágico, Sguaba Tuinne ("barredora de olas"), que navega sin necesidad de velas ni remos, obedeciendo solo el pensamiento de quien lo dirige. La Isla de Man, situada en el mar irlandés entre Irlanda, Escocia, Inglaterra y Gales, lleva tradicionalmente su nombre, y su culto se extendió con fuerza particular en esa región. Manannán aparece con frecuencia como figura guía en los relatos de tipo immram, "voyage" o navegación mítica, ofreciendo consejo, objetos mágicos o transporte directo a los mortales y héroes que se aventuran hacia las islas del Otro Mundo.`,
    origen: 'Hijo del dios primordial del mar Ler.',
    dominio: 'El mar y las fronteras del Otro Mundo', naturaleza: 'Dios del mar y guía sobrenatural', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'ogma', nombre: 'Ogma', nombre_griego: 'Ogma Grianainech',
    epitetos: 'El de Rostro Solar, Inventor del Ogam',
    descripcion_corta: 'Dios de la elocuencia y campeón de fuerza física de los Tuatha Dé Danann — se le atribuye la invención del alfabeto ogham, el más antiguo sistema de escritura irlandés.',
    descripcion_larga: `Ogma combina dos dominios que en muchas otras mitologías aparecen completamente separados: la fuerza física bruta, como campeón guerrero de los Tuatha Dé Danann en numerosas batallas, y la elocuencia persuasiva, como patrono de la palabra hablada capaz de convencer o dominar sin necesidad de violencia directa. Esta doble naturaleza —fuerza y lenguaje unidos en una sola figura— refleja una valoración cultural irlandesa muy particular sobre el poder genuino de la palabra bien empleada, considerada tan decisiva como cualquier arma en un conflicto.

Se le atribuye la invención del alfabeto ogham, el sistema de escritura más antiguo documentado en lengua irlandesa, compuesto por líneas y muescas talladas sobre el canto de piedras o maderos, usado principalmente en inscripciones conmemorativas y, según algunas interpretaciones posteriores, también con fines mágicos o adivinatorios. Ogma participó activamente en ambas batallas de Mag Tuired, primero contra los Fir Bolg y después contra los Fomorianos, demostrando en cada una su fuerza física excepcional; en algunas fuentes se le representa también arrastrando cautivos mediante cadenas doradas que salen de su propia lengua, unidas a los oídos de sus seguidores, una imagen que ilustra visualmente su capacidad de cautivar y dominar mediante el puro poder de la palabra elocuente.`,
    origen: 'Hijo del Dagda, campeón guerrero de los Tuatha Dé Danann.',
    dominio: 'La elocuencia, la fuerza y la escritura', naturaleza: 'Dios guerrero y orador', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'aengus', nombre: 'Aengus', nombre_griego: 'Aengus Óg',
    epitetos: 'El Joven Eterno, Dios del Amor',
    descripcion_corta: 'Dios joven del amor y la belleza, hijo del Dagda concebido en un día que jamás existió — su morada, Brú na Bóinne, obtuvo mediante una artimaña lingüística de su propio padre.',
    descripcion_larga: `Aengus nació de la unión entre el Dagda y Boann, la diosa del río Boyne, en circunstancias extraordinarias ideadas deliberadamente por su propio padre: el Dagda, consciente de que el esposo legítimo de Boann, Elcmar, no debía enterarse de la infidelidad, hizo que el sol permaneciera detenido en el cielo durante nueve meses completos comprimidos en la duración de un solo día, de modo que Aengus fuera concebido y nacido en ese mismo periodo artificial, sin que transcurriera jamás el tiempo real necesario para que Elcmar sospechara del engaño.

Aengus se crio deseando la posesión de Brú na Bóinne, el gran túmulo junto al río Boyne donde vivía su padre el Dagda, y logró obtenerlo mediante una artimaña puramente lingüística: le pidió a su padre vivir ahí "por un día y una noche", una petición que el Dagda concedió sin sospechar nada; pero en irlandés antiguo, la expresión usada para "día y noche" podía interpretarse también como "todos los días y todas las noches", de manera que Aengus, aprovechando esa ambigüedad, reclamó la posesión permanente del lugar. Es protagonista además de una de las historias de amor más célebres de la tradición irlandesa, Aislinge Óenguso ("El sueño de Aengus"), donde persigue durante años a una mujer que se le aparece únicamente en sueños, hasta descubrir finalmente que se trata de Cáer Ibormeith, una doncella que se transforma cada dos años en cisne, y con quien Aengus termina uniéndose transformado él mismo también en cisne.`,
    origen: 'Hijo del Dagda y Boann, concebido en un día artificialmente prolongado.',
    dominio: 'El amor juvenil y la belleza', naturaleza: 'Dios del amor eternamente joven', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'dian-cecht', nombre: 'Dian Cécht', nombre_griego: 'Dian Cécht',
    epitetos: 'El Médico Divino de los Tuatha Dé Danann',
    descripcion_corta: 'Dios de la medicina que fabricó el brazo de plata de Nuada — su envidia hacia su propio hijo, más talentoso que él, terminó en tragedia.',
    descripcion_larga: `Dian Cécht sirve como médico principal de los Tuatha Dé Danann, capaz de curar heridas y enfermedades que ningún otro sanador lograría tratar, y se le atribuye la creación de un pozo sagrado, Tiobra Sláine, junto al cual se recitaban encantamientos curativos capaces de revivir a los guerreros caídos en batalla —siempre que no hubieran sido decapitados—, permitiéndoles regresar a combatir al día siguiente completamente restaurados. Su hazaña más célebre fue fabricar para el rey Nuada, que había perdido un brazo en combate, una prótesis funcional de plata pura tan bien construida que le permitió recuperar por completo su capacidad de movimiento, aunque sin la sensibilidad de un miembro orgánico real.

Su carácter, sin embargo, se vio marcado por un episodio profundamente trágico protagonizado por su propio hijo, Miach, también médico de considerable talento. Cuando Miach logró superar la obra de su padre curando directamente el brazo original de Nuada —devolviéndole no solo el movimiento sino también la sensación completa, algo que la prótesis de plata jamás había podido ofrecer—, Dian Cécht, consumido por los celos ante una hazaña que superaba abiertamente la suya propia, atacó a su hijo en tres ocasiones sucesivas hasta finalmente matarlo. De la tumba de Miach, según cuenta la leyenda, brotaron después trescientas sesenta y cinco hierbas curativas distintas, una para cada enfermedad y articulación del cuerpo humano, que su hermana Airmed intentó catalogar cuidadosamente antes de que el propio Dian Cécht, todavía celoso incluso más allá de la muerte de su hijo, esparciera las hierbas mezclándolas sin remedio, privando a la humanidad del conocimiento médico completo que esa clasificación habría preservado.`,
    origen: 'Médico principal de los Tuatha Dé Danann.',
    dominio: 'La medicina y la curación', naturaleza: 'Dios sanador', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'goibniu', nombre: 'Goibniu', nombre_griego: 'Goibniu',
    epitetos: 'El Herrero Divino, Anfitrión del Banquete de la Inmortalidad',
    descripcion_corta: 'Dios herrero de los Tuatha Dé Danann, capaz de forjar un arma perfecta en apenas tres golpes — su cerveza especial mantenía eternamente jóvenes a quienes la bebían.',
    descripcion_larga: `Goibniu forja las armas y herramientas de los Tuatha Dé Danann con una habilidad tan extraordinaria que, según la tradición, cualquier lanza o espada fabricada por sus manos jamás fallaba su objetivo una vez lanzada o blandida, y podía completar el proceso completo de forja de un arma nueva en apenas tres golpes de martillo, una velocidad sobrehumana que ningún otro herrero, divino o mortal, lograba igualar. Junto a Credne, orfebre especializado en el trabajo de metales preciosos, y Luchta, carpintero experto, formaba parte de un trío de artesanos conocido colectivamente como "la trinidad de Dana", responsables de equipar completamente al ejército de los Tuatha Dé Danann antes de sus grandes batallas.

Además de su papel como armero, Goibniu presidía un banquete especial conocido como Fled Goibnenn, "el festín de Goibniu", donde servía una cerveza o hidromiel de propiedades extraordinarias: quienes la bebían quedaban protegidos de la vejez y la enfermedad, manteniéndose eternamente jóvenes mientras continuaran participando de ese banquete periódico. Durante la Segunda Batalla de Mag Tuired, mientras los Fomorianos intentaban sabotear las armas fabricadas por Goibniu enviando espías a corromper su trabajo, él continuó forjando reemplazos con una eficiencia tal que el ejército de los Tuatha Dé Danann jamás llegó a quedarse sin armamento efectivo durante todo el conflicto, un factor decisivo en su victoria final.`,
    origen: 'Herrero divino de los Tuatha Dé Danann.',
    dominio: 'La forja y la juventud eterna', naturaleza: 'Dios herrero', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'epona', nombre: 'Epona', nombre_griego: 'Epona',
    epitetos: 'La Gran Yegua',
    descripcion_corta: 'Diosa de los caballos venerada en toda la Galia y Britania, la única deidad celta cuyo culto fue adoptado directamente por el propio ejército romano.',
    descripcion_larga: `Epona, cuyo nombre deriva directamente de la raíz celta para "caballo", gobierna a estos animales y por extensión la fertilidad, la abundancia y el viaje seguro, representada casi siempre montada de lado sobre un caballo o rodeada de varios ejemplares, a menudo sosteniendo una cornucopia o una llave que simboliza su capacidad de abrir el paso entre el mundo de los vivos y el más allá. Su culto se documenta con especial fuerza entre los pueblos galos —los celtas del territorio de la actual Francia—, pero se extendió con una rapidez notable por prácticamente todo el territorio del Imperio Romano gracias a un vector muy particular: las tropas de caballería auxiliar romana reclutadas entre poblaciones célticas, que llevaron su devoción personal hacia Epona consigo a cada nueva guarnición donde fueron destinadas.

Este fenómeno convirtió a Epona en un caso verdaderamente excepcional dentro de la historia religiosa antigua: la única divinidad de origen celta cuyo culto fue adoptado oficialmente por el propio panteón romano, con un festival dedicado a ella —el 18 de diciembre— incluido formalmente en el calendario religioso romano, algo que ninguna otra deidad "extranjera" no mediterránea logró jamás alcanzar dentro de esa estructura religiosa tan cerrada. Su culto se extendió, gracias a esa ruta militar, desde Britania hasta los Balcanes, con inscripciones y esculturas dedicadas a ella encontradas en establos, cuarteles de caballería y santuarios domésticos a lo largo de fronteras imperiales extraordinariamente distantes entre sí.`,
    origen: 'Diosa de los caballos venerada en toda la Galia y Britania.',
    dominio: 'Los caballos, la fertilidad y el viaje', naturaleza: 'Diosa panceltica de amplio culto', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'cernunnos', nombre: 'Cernunnos', nombre_griego: 'Cernunnos',
    epitetos: 'El Dios Cornudo, Señor de las Bestias Salvajes',
    descripcion_corta: 'Dios cornudo asociado a los animales salvajes, la fertilidad y la abundancia — conocido casi exclusivamente por representaciones artísticas, sin ningún mito narrativo escrito que haya sobrevivido.',
    descripcion_larga: `Cernunnos se representa casi invariablemente sentado en posición de meditación, con un par de grandes cuernos de ciervo emergiendo directamente de su cabeza, rodeado a menudo de animales salvajes —ciervos, toros, serpientes con cabeza de carnero— y sosteniendo con frecuencia un torque (collar rígido de metal, símbolo de estatus entre los pueblos celtas) en una mano y una bolsa o serpiente en la otra. Su representación más célebre y mejor conservada aparece en el Caldero de Gundestrup, un objeto ritual de plata trabajada hallado en Dinamarca pero de manufactura y estilo claramente célticos, donde aparece rodeado de la fauna salvaje que preside.

A diferencia de casi cualquier otra gran divinidad céltica documentada, Cernunnos es conocido casi exclusivamente a través de representaciones visuales dispersas por distintas regiones del territorio celta europeo, sin que haya sobrevivido ningún relato mitológico narrativo escrito que explique su origen, sus hazañas o su papel específico dentro de una jerarquía divina más amplia —su propio nombre, de hecho, aparece documentado por escrito en una única inscripción conocida, hallada en París—. Esta escasez de fuentes textuales ha llevado a los estudiosos modernos a reconstruir su significado probable basándose casi enteramente en el análisis iconográfico comparado: una divinidad asociada a la fertilidad de la naturaleza salvaje, la abundancia animal y quizás también, dada su postura meditativa recurrente, algún aspecto de trascendencia espiritual o transición entre mundos.`,
    origen: 'Dios cornudo documentado principalmente a través del arte celta continental.',
    dominio: 'Los animales salvajes y la fertilidad natural', naturaleza: 'Dios cornudo de la naturaleza', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'rhiannon', nombre: 'Rhiannon', nombre_griego: 'Rhiannon',
    epitetos: 'La Gran Reina, Diosa Galesa de los Caballos',
    descripcion_corta: 'Diosa galesa asociada a los caballos y el Otro Mundo, protagonista de la Primera y Tercera Rama del Mabinogion — acusada injustamente de devorar a su propio hijo recién nacido.',
    descripcion_larga: `Rhiannon aparece por primera vez en la mitología galesa montada sobre un caballo blanco extraordinario que, pese a avanzar aparentemente al paso, resultaba imposible de alcanzar por ningún jinete que intentara perseguirla, hasta que Pwyll, príncipe de Dyfed, finalmente la interceptó pidiéndole directamente que se detuviera —a lo que ella accedió de inmediato, revelando que había venido específicamente buscando casarse con él en lugar del pretendiente no deseado al que su familia la había prometido—. Rhiannon y Pwyll se casaron, y su unión se narra en la Primera Rama del Mabinogion, la colección medieval de relatos galeses más importante que ha sobrevivido.

Poco después del nacimiento de su hijo, este desapareció misteriosamente durante la noche, y las sirvientas encargadas de su cuidado, temiendo el castigo por su propia negligencia, untaron sangre de un cachorro alrededor de la boca dormida de Rhiannon y la acusaron falsamente de haber devorado a su propio hijo. Condenada injustamente sin que nadie creyera su inocencia, Rhiannon fue obligada durante años a sentarse junto a la entrada del palacio, contando a cada visitante la falsa historia de su crimen y ofreciéndose a cargarlos sobre su espalda como si fuera un caballo, hasta que el niño, en realidad rescatado y criado por otra familia tras ser raptado por una fuerza sobrenatural nunca completamente explicada, fue finalmente identificado y devuelto, limpiando por completo el nombre de su madre. Su figura se asocia estrechamente con la diosa Epona del continente, compartiendo ambas el vínculo simbólico entre la soberanía, los caballos y el paso hacia el Otro Mundo.`,
    origen: 'Diosa galesa del Otro Mundo, esposa de Pwyll, príncipe de Dyfed.',
    dominio: 'Los caballos y la soberanía galesa', naturaleza: 'Diosa galesa del Otro Mundo', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'arawn', nombre: 'Arawn', nombre_griego: 'Arawn',
    epitetos: 'El Rey de Annwn, Señor del Otro Mundo Galés',
    descripcion_corta: 'Rey galés del Otro Mundo, Annwn — intercambió su propia identidad con un príncipe mortal durante un año entero para vencer a su rival Hafgan.',
    descripcion_larga: `Arawn gobierna Annwn, el Otro Mundo de la mitología galesa, un reino paralelo descrito no como un lugar de castigo sino como una tierra de abundancia eterna, cacerías interminables y festines que jamás se agotan, aunque también amenazado constantemente por conflictos internos, especialmente su rivalidad prolongada con otro rey del mismo reino, Hafgan, a quien Arawn no lograba derrotar en combate directo por más que lo intentara repetidamente.

Según la Primera Rama del Mabinogion, Arawn se encontró un día por casualidad con Pwyll, príncipe mortal de Dyfed, durante una cacería, y le propuso un intercambio extraordinario: ambos cambiarían de apariencia y de reino durante un año completo, con Pwyll gobernando Annwn bajo la forma exacta de Arawn mientras este gobernaba Dyfed bajo la forma de Pwyll, con la única condición de que Pwyll debía enfrentar y derrotar a Hafgan en su nombre exactamente un año después, asestándole un único golpe fatal sin repetirlo nunca sin importar cuánto suplicara la víctima. Pwyll cumplió el pacto con honestidad absoluta —incluida la decisión honorable de no compartir lecho con la esposa de Arawn durante todo el año pese a dormir junto a ella cada noche—, derrotó finalmente a Hafgan tal como se le había pedido, y ambos reyes, agradecidos mutuamente por la lealtad demostrada durante el intercambio, forjaron una alianza duradera entre Dyfed y Annwn que beneficiaría a ambos reinos en las generaciones siguientes.`,
    origen: 'Rey del Otro Mundo galés, Annwn.',
    dominio: 'El Otro Mundo galés y la cacería eterna', naturaleza: 'Rey del Otro Mundo', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-celta'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-celta" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando titanes y dioses de Mitologia Celta (parte 1)...\n');
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
