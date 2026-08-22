// ============================================================
// scripts/sembrar-personajes-mapuche-parte1.js
// ------------------------------------------------------------
// Primer lote de Mitologia Mapuche: 5 titanes/primordiales y 15
// dioses -- el nucleo del cosmos mapuche (Ngenechen y su
// naturaleza tetralogica, los ngen o "duenos" de la naturaleza)
// mas las deidades marinas de la tradicion chilota, emparentada.
// Contenido completo desde el inicio. Idempotente via
// slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-mapuche-parte1.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- TITANES / PRIMORDIALES ---
  {
    tipo: 'titan', slug: 'trentren-vilu', nombre: 'Trentren Vilu', nombre_griego: 'Trentren Vilu',
    epitetos: 'La Serpiente de la Tierra, Salvadora del Pueblo',
    descripcion_corta: 'Gigantesca serpiente primordial de la tierra que elevó los cerros para salvar a los mapuche del diluvio desatado por su eterna rival marina.',
    descripcion_larga: `Trentren Vilu es una de las dos grandes serpientes primordiales que dieron forma al territorio mapuche en los tiempos más antiguos, hija de las fuerzas de la tierra y protectora natural de todo lo que vive sobre ella. Se le describe como una serpiente colosal cubierta de escamas doradas y verdes, capaz de reptar bajo el suelo mismo y de levantar montañas con el simple movimiento de su cuerpo, una fuerza tan vasta que su rivalidad con Caicai Vilu, la serpiente del mar, determinó literalmente la geografía que hoy conocen los pueblos originarios del sur.

Cuando Caicai Vilu, furiosa, decidió inundar el mundo entero para castigar o dominar a los primeros habitantes, Trentren Vilu se enfrentó a ella en una batalla que se prolongó durante días completos, elevando los cerros cada vez que las aguas subían para que la gente y los animales pudieran refugiarse en las alturas. Se dice que quienes permanecían fieles a Trentren Vilu y honraban a la tierra lograban trepar a tiempo hacia la seguridad de las cumbres, mientras que quienes se demoraban o desconfiaban de las advertencias quedaban convertidos en las rocas y peñascos que hoy se observan salpicando las costas del sur de Chile, testigos petrificados de aquella lucha primordial. Tras muchos días de combate, ambas serpientes quedaron agotadas y se transformaron en piedra, aunque la tradición sostiene que Trentren Vilu sigue habitando bajo los cerros más antiguos, lista para volver a elevarlos si el mar amenazara de nuevo con reclamar la tierra de los vivos.`,
    origen: 'Serpiente primordial de la tierra, una de las dos fuerzas fundacionales del cosmos mapuche.',
    dominio: 'La tierra, los cerros y la protección ante el diluvio', naturaleza: 'Serpiente primordial protectora', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'antu', nombre: 'Antü', nombre_griego: 'Antü',
    epitetos: 'El Padre Sol, Dador de Luz y Calor',
    descripcion_corta: 'El Sol, fuerza primordial masculina que recorre el cielo dando vida a las cosechas y marcando junto a Kuyen el ritmo sagrado del tiempo.',
    descripcion_larga: `Antü es la fuerza primordial del sol dentro de la cosmovisión mapuche, concebido como un padre celestial cuya luz y calor resultan indispensables para la maduración de las cosechas, el crecimiento de los animales y el bienestar general de las personas sobre la tierra. Junto a Kuyen, la luna, forma una pareja cósmica fundamental que ordena el tiempo mapuche: los ciclos agrícolas, las ceremonias religiosas como el We Tripantu (el año nuevo mapuche, que celebra precisamente el solsticio de invierno y el renacer de la fuerza del sol) y buena parte del calendario ritual dependen directamente del movimiento observado de Antü a través del cielo.

En las oraciones y rogativas tradicionales, especialmente durante el Nguillatún, la gran ceremonia colectiva de agradecimiento y petición dirigida a las fuerzas superiores, Antü es invocado junto a Ngenechen como parte de la totalidad divina que sostiene el equilibrio del mundo, recibiendo ofrendas y súplicas para asegurar buenas cosechas y protección contra las enfermedades. Algunas tradiciones orales asocian a Antü con un rostro visible en el propio disco solar, y advierten que mirarlo directamente durante demasiado tiempo podía atraer la ceguera como castigo por la osadía de intentar contemplar de frente una fuerza tan poderosa; otras narrativas lo presentan librando un combate diario contra las fuerzas de la oscuridad para poder volver a elevarse cada amanecer, un ciclo eterno de renovación que los mapuche consideraban directamente responsable de la continuidad misma de la vida sobre la tierra.`,
    origen: 'Fuerza primordial del sol, complemento masculino de Kuyen en el cielo mapuche.',
    dominio: 'La luz, el calor y el ciclo del tiempo sagrado', naturaleza: 'Astro primordial masculino', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'kuyen', nombre: 'Kuyen', nombre_griego: 'Kuyen',
    epitetos: 'La Madre Luna, Guardiana de las Mujeres',
    descripcion_corta: 'La Luna, fuerza primordial femenina que vela por el parto, la fertilidad y las ceremonias nocturnas junto a su compañero eterno, Antü.',
    descripcion_larga: `Kuyen es la fuerza primordial de la luna, concebida dentro de la tradición mapuche como una presencia protectora especialmente vinculada a las mujeres, el embarazo, el parto y los ciclos de fertilidad que rigen tanto los cuerpos humanos como el crecimiento de las plantas cultivadas. Se le atribuye una influencia directa sobre las mareas, las cosechas sembradas en determinadas fases lunares, y sobre el bienestar general de las machis, las autoridades espirituales femeninas o masculinas del pueblo mapuche, que suelen orientar buena parte de sus rituales de sanación según la fase visible de Kuyen en el cielo nocturno.

Junto a Antü, Kuyen completa la pareja cósmica fundamental que ordena el tiempo sagrado mapuche, y ambos son frecuentemente representados juntos en la platería tradicional mapuche, especialmente en las trarilonko, las piezas de plata que las mujeres usan sobre la frente, donde discos solares y lunares aparecen entrelazados como símbolo de equilibrio entre las fuerzas complementarias del cosmos. Algunas narrativas orales explican los eclipses como momentos de peligro extremo en los que Kuyen es atacada o devorada temporalmente por fuerzas oscuras, y describen cómo las comunidades respondían tradicionalmente haciendo ruido con instrumentos y gritos para ahuyentar a esas fuerzas y ayudar a que la luna recuperara su brillo completo, un ritual de protección colectiva que refleja la relación profundamente activa y participativa que el pueblo mapuche mantenía con las fuerzas celestiales que gobernaban su mundo.`,
    origen: 'Fuerza primordial de la luna, complemento femenino de Antü en el cielo mapuche.',
    dominio: 'La fertilidad, el parto y los ciclos nocturnos', naturaleza: 'Astro primordial femenino', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'wangulen', nombre: 'Wangülen', nombre_griego: 'Wangülen',
    epitetos: 'El Espíritu de las Estrellas, Camino de los Antepasados',
    descripcion_corta: 'Fuerza primordial de las estrellas y la vía láctea, considerada el sendero luminoso que recorren los espíritus de los ancestros tras la muerte.',
    descripcion_larga: `Wangülen representa dentro de la cosmovisión mapuche la totalidad luminosa del cielo nocturno estrellado, concebida no como un simple telón de fondo sino como una fuerza viva y activa que guía tanto a los navegantes y viajeros nocturnos como, de manera más profunda, a los espíritus de los muertos en su tránsito hacia el Wenu Mapu, la tierra de arriba donde habitan los antepasados y las fuerzas superiores del cosmos. La franja luminosa de la Vía Láctea, claramente visible en los cielos despejados del sur de Chile y Argentina, era interpretada tradicionalmente como el propio camino trazado por Wangülen, una ruta espiritual que las almas debían recorrer después de abandonar el cuerpo físico.

Ciertas estrellas y constelaciones específicas recibían además nombres y significados propios dentro de esta tradición: se prestaba especial atención a determinadas agrupaciones estelares cuya aparición en el cielo anunciaba el inicio de las labores agrícolas o marcaba el comienzo del nuevo ciclo anual durante el We Tripantu. Las machis, en sus cantos y rogativas nocturnas, invocaban con frecuencia a Wangülen como parte del conjunto de fuerzas celestiales capaces de interceder ante Ngenechen en favor de la comunidad, y se creía que una noche particularmente estrellada, libre de nubes, constituía un buen augurio para las ceremonias que se realizaban bajo el cielo abierto, especialmente el propio Nguillatún, cuyos participantes dirigían regularmente la mirada hacia el firmamento en busca de señales favorables.`,
    origen: 'Fuerza primordial de las estrellas y la Vía Láctea.',
    dominio: 'El firmamento nocturno y el camino de los espíritus', naturaleza: 'Fuerza celestial primordial', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'pillan', nombre: 'Pillán', nombre_griego: 'Pillán',
    epitetos: 'El Gran Espíritu del Fuego y el Trueno, Padre de los Pillanes',
    descripcion_corta: 'Espíritu ancestral primordial del fuego, el trueno y los volcanes, del que descienden todos los pillanes que habitan las cumbres humeantes de la cordillera.',
    descripcion_larga: `Pillán es, en su forma más antigua y primordial, el espíritu del fuego subterráneo, el trueno y la actividad volcánica que atraviesa toda la cordillera de los Andes en el territorio mapuche, considerado el ancestro original del que descienden innumerables pillanes menores, cada uno asociado a un volcán específico y venerado por las comunidades que viven bajo su sombra directa. Se creía que los grandes volcanes del sur —el Villarrica, el Llaima, el Osorno entre otros— albergaban en su interior a estos espíritus, capaces de manifestar su ira mediante erupciones, temblores y el rugido del trueno cuando se sentían ofendidos por el mal comportamiento de la comunidad o por la falta de las ofrendas y rituales debidos.

Más allá de su aspecto temible, Pillán cumplía también una función protectora fundamental: se le consideraba guardián de las almas de los grandes toquis y caciques fallecidos en batalla, que tras su muerte ascendían a habitar dentro de los volcanes convertidos en nuevos pillanes, uniéndose así al linaje espiritual del gran ancestro primordial y continuando desde allí su labor de protección hacia los vivos. Las machis dirigían plegarias específicas hacia el Pillán correspondiente al volcán más cercano a su comunidad antes de cualquier ceremonia importante, buscando calmar su ánimo y asegurar su favor, mientras que las erupciones repentinas o los terremotos se interpretaban tradicionalmente como manifestaciones directas de su descontento, obligando a realizar rogativas urgentes para restaurar el equilibrio roto entre el pueblo y esta fuerza ancestral del fuego subterráneo.`,
    origen: 'Espíritu ancestral primordial del fuego, el trueno y los volcanes.',
    dominio: 'El fuego subterráneo, el trueno y los volcanes', naturaleza: 'Espíritu primordial ancestral', es_preview: 1
  },

  // --- DIOSES ---
  {
    tipo: 'dios', slug: 'ngenechen', nombre: 'Ngenechen', nombre_griego: 'Ngenechen',
    epitetos: 'El Dueño de la Gente, Ser Supremo Tetralógico',
    descripcion_corta: 'El ser supremo de la cosmovisión mapuche, dueño y creador de las personas, concebido a la vez como una unidad y como cuatro presencias complementarias.',
    descripcion_larga: `Ngenechen —cuyo nombre puede traducirse aproximadamente como "el dueño de la gente" o "el que gobierna a las personas"— ocupa el lugar más elevado dentro de la jerarquía espiritual mapuche, considerado el creador y sostenedor último de la humanidad y de todo el orden natural que la rodea. A diferencia de muchas otras tradiciones con un dios supremo estrictamente unitario, Ngenechen se concibe con frecuencia como una entidad de naturaleza tetralógica, compuesta simultáneamente por cuatro presencias complementarias —un anciano, una anciana, un hombre joven y una mujer joven— que representan juntas la totalidad completa del ciclo vital humano, desde la sabiduría de la vejez hasta la fuerza y fertilidad de la juventud, reunidas en una sola voluntad divina.

Ngenechen es invocado como la máxima autoridad durante el Nguillatún, la gran rogativa colectiva mapuche celebrada periódicamente para agradecer las cosechas, pedir lluvia, salud y protección para la comunidad entera, y buscar el perdón por las faltas cometidas contra el orden natural del mundo. Las machis actúan tradicionalmente como intermediarias privilegiadas entre Ngenechen y la comunidad, entrando en trance ceremonial para transmitir sus mensajes o para elevar las súplicas colectivas hacia él a través del rewe, el altar ceremonial de madera tallada que simboliza el eje vertical de comunicación entre la tierra y el mundo superior donde habita esta divinidad. Se le atribuye también la capacidad última de decidir sobre la vida y la muerte de cada persona, y de determinar el destino final de las almas tras el fallecimiento, otorgándole autoridad tanto sobre el mundo de los vivos como sobre el reino de los antepasados.`,
    origen: 'Ser supremo creador de la cosmovisión mapuche.',
    dominio: 'La creación, la vida humana y el orden del cosmos', naturaleza: 'Divinidad suprema tetralógica', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'fucha', nombre: 'Fücha', nombre_griego: 'Fücha',
    epitetos: 'El Anciano Sabio, Aspecto Paterno de Ngenechen',
    descripcion_corta: 'El aspecto de anciano dentro de la naturaleza tetralógica de Ngenechen, encarnación de la sabiduría acumulada y la autoridad paterna sobre la comunidad.',
    descripcion_larga: `Fücha —palabra mapuche que designa directamente al "hombre anciano"— constituye uno de los cuatro aspectos complementarios que integran, según buena parte de la tradición oral mapuche, la naturaleza completa de Ngenechen, representando específicamente la sabiduría acumulada por los años, la experiencia y la autoridad paterna serena que corresponde tradicionalmente a los ancianos dentro de la organización social mapuche, donde el respeto hacia los mayores ocupa un lugar central en la transmisión del conocimiento y las normas de convivencia.

En las rogativas del Nguillatún, Fücha es invocado de manera específica junto a los otros tres aspectos divinos, y su presencia se asocia particularmente con las decisiones importantes de la comunidad, las resoluciones de conflictos internos y la guía espiritual que los propios lonkos —los jefes o autoridades tradicionales de cada comunidad— buscaban reflejar en su propio ejercicio del liderazgo, tomando como modelo precisamente esta cualidad paterna y ponderada del anciano divino. Algunas versiones de la tradición sostienen que Fücha vela de manera especial por los ancianos mortales de cada comunidad, protegiendo su salud y su lugar de respeto dentro de la sociedad, y que su favor se buscaba activamente en cualquier ceremonia que involucrara decisiones colectivas de largo alcance, reflejando la convicción mapuche de que la sabiduría genuina solo se alcanza plenamente después de una vida larga y bien vivida.`,
    origen: 'Uno de los cuatro aspectos complementarios de Ngenechen.',
    dominio: 'La sabiduría, la autoridad paterna y el consejo', naturaleza: 'Aspecto divino masculino de la vejez', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'kushe', nombre: 'Kushe', nombre_griego: 'Kushe',
    epitetos: 'La Anciana Sabia, Aspecto Materno de Ngenechen',
    descripcion_corta: 'El aspecto de anciana dentro de la naturaleza tetralógica de Ngenechen, guardiana de la memoria, la curación y la continuidad de las familias.',
    descripcion_larga: `Kushe, la "mujer anciana" dentro del conjunto tetralógico que compone a Ngenechen, representa la sabiduría femenina acumulada a lo largo de una vida completa, particularmente vinculada al conocimiento de las plantas medicinales, la curación de enfermedades y la memoria histórica y espiritual que las mujeres mayores transmitían tradicionalmente a las nuevas generaciones dentro de las comunidades mapuche. Se la asocia estrechamente con el rol social y espiritual desempeñado por las machis de mayor edad, que combinan décadas de experiencia ritual con un conocimiento profundo de las hierbas curativas y los cantos ceremoniales heredados de sus propias maestras.

Dentro de las grandes rogativas colectivas, Kushe es invocada junto a Fücha como parte del par de ancianos que completa, junto a la pareja joven, la totalidad divina de Ngenechen, y su intercesión se busca de manera particular en asuntos relacionados con la salud, la fertilidad de las mujeres de la comunidad y la protección de los recién nacidos durante sus primeros meses de vida, un periodo considerado especialmente vulnerable dentro de la cosmovisión mapuche. Algunas tradiciones orales narran que Kushe aparece en sueños a las futuras machis mucho antes de su iniciación formal, transmitiéndoles en esas visiones nocturnas fragmentos del conocimiento que más tarde deberán desarrollar durante años de aprendizaje junto a una machi ya establecida, sugiriendo un vínculo directo entre esta divinidad y la vocación espiritual femenina dentro del pueblo mapuche.`,
    origen: 'Uno de los cuatro aspectos complementarios de Ngenechen.',
    dominio: 'La curación, la memoria y la protección de la familia', naturaleza: 'Aspecto divino femenino de la vejez', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'weche', nombre: 'Weche', nombre_griego: 'Weche',
    epitetos: 'El Joven Guerrero, Aspecto de Fuerza de Ngenechen',
    descripcion_corta: 'El aspecto de hombre joven dentro de la naturaleza tetralógica de Ngenechen, encarnación de la fuerza física, el valor y la energía guerrera.',
    descripcion_larga: `Weche, el "hombre joven" dentro de la totalidad tetralógica de Ngenechen, encarna la fuerza física, el vigor y el valor propios de la juventud masculina, cualidades altamente valoradas dentro de una sociedad mapuche que históricamente debió defender su territorio y su autonomía frente a sucesivas amenazas externas, primero incaicas y después españolas, a lo largo de siglos de resistencia prolongada conocida como la Guerra de Arauco. Se le asocia directamente con las capacidades necesarias para el combate, la caza y el trabajo físico más exigente que sostenía la vida cotidiana de las comunidades.

Los jóvenes guerreros mapuche, antes de participar en su primer combate o en las pruebas físicas y rituales que marcaban su tránsito hacia la adultez plena, invocaban tradicionalmente el favor de Weche buscando que les transmitiera algo de su fuerza y su coraje divinos. En las grandes rogativas, Weche completa junto a Ülcha la pareja joven que equilibra a los dos ancianos dentro de la totalidad de Ngenechen, representando conjuntamente la promesa de continuidad y renovación que cada nueva generación aporta a la comunidad. Algunas narrativas asocian también a Weche con la protección específica de los toquis y ülmenes más jóvenes que asumían roles de liderazgo militar durante los periodos de conflicto, sugiriendo que su favor divino resultaba decisivo para el éxito de las campañas de resistencia libradas por el pueblo mapuche a lo largo de su historia.`,
    origen: 'Uno de los cuatro aspectos complementarios de Ngenechen.',
    dominio: 'La fuerza, el valor y el vigor de la juventud', naturaleza: 'Aspecto divino masculino de la juventud', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'ulcha', nombre: 'Ülcha', nombre_griego: 'Ülcha',
    epitetos: 'La Doncella, Aspecto de Fertilidad de Ngenechen',
    descripcion_corta: 'El aspecto de mujer joven dentro de la naturaleza tetralógica de Ngenechen, encarnación de la fertilidad, la belleza y la promesa de nueva vida.',
    descripcion_larga: `Ülcha, la "mujer joven" o doncella dentro de la totalidad tetralógica de Ngenechen, representa la fertilidad, la belleza y el potencial de nueva vida que la juventud femenina aporta a la continuidad de la comunidad mapuche, cualidades profundamente valoradas dentro de una cultura que dependía directamente de la fertilidad tanto humana como agrícola para su supervivencia y prosperidad a lo largo de las generaciones. Se le asocia con el florecimiento de las plantas cultivadas, la maduración de las cosechas y el momento vital en que las jóvenes mapuche alcanzaban la edad de contraer matrimonio y formar sus propias familias.

Durante el Nguillatún, las jóvenes solteras de la comunidad ocupaban tradicionalmente un lugar destacado en ciertas danzas y cantos rituales dedicados específicamente a honrar a Ülcha, buscando su favor para asegurar matrimonios prósperos y una descendencia sana en el futuro. Junto a Weche, Ülcha completa la pareja joven que equilibra dentro de Ngenechen a los dos aspectos ancianos, formando en conjunto una representación simbólica del ciclo vital completo, desde la promesa de la juventud hasta la sabiduría de la vejez, unificadas todas en una sola voluntad divina suprema. Algunas tradiciones orales vinculan también a Ülcha con la protección especial de las machis más jóvenes durante su periodo de formación e iniciación, sugiriendo que su energía vital resultaba indispensable para sostener la exigente preparación física y espiritual que ese camino demandaba.`,
    origen: 'Uno de los cuatro aspectos complementarios de Ngenechen.',
    dominio: 'La fertilidad, la belleza y la promesa de nueva vida', naturaleza: 'Aspecto divino femenino de la juventud', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'nuke-mapu', nombre: 'Ñuke Mapu', nombre_griego: 'Ñuke Mapu',
    epitetos: 'La Madre Tierra, Sustento de Toda Vida',
    descripcion_corta: 'La Madre Tierra, fuente directa de todo alimento y toda vida, honrada con las primeras ofrendas de cada cosecha y cada ceremonia importante.',
    descripcion_larga: `Ñuke Mapu —literalmente "madre tierra"— es la divinidad que encarna directamente el suelo fértil, las montañas, los bosques y todo el territorio físico que sostiene la vida del pueblo mapuche, concebida como la fuente última de la que provienen los alimentos, el agua y los materiales necesarios para la supervivencia diaria. Su nombre está en el origen mismo de la identidad del pueblo mapuche, que se autodenomina precisamente "gente de la tierra" (mapu significa tierra, che significa gente), un vínculo lingüístico que refleja hasta qué punto esta divinidad se encuentra entrelazada con la propia noción de pertenencia e identidad colectiva.

Antes de sembrar, cosechar, construir una nueva vivienda o incluso antes de que una machi iniciara una ceremonia de sanación, era costumbre tradicional derramar sobre el suelo una porción de muday, la bebida fermentada de maíz o trigo, como ofrenda directa a Ñuke Mapu, agradeciendo su generosidad y pidiendo permiso para usar los recursos que ella proporciona. Se consideraba una falta grave explotar la tierra sin mesura o sin las debidas ofrendas de retribución, y las malas cosechas o la escasez prolongada se interpretaban con frecuencia como señales de que la comunidad había descuidado su relación de reciprocidad con esta divinidad fundamental. El concepto de Ñuke Mapu ha cobrado además una relevancia renovada en las últimas décadas dentro de los movimientos mapuche contemporáneos de defensa territorial y ambiental, que invocan explícitamente esta relación ancestral de respeto y reciprocidad hacia la tierra como fundamento de sus demandas actuales.`,
    origen: 'Divinidad de la tierra fértil y el territorio, fuente de todo sustento.',
    dominio: 'La tierra fértil, las cosechas y el territorio', naturaleza: 'Divinidad materna de la tierra', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'epunamun', nombre: 'Epunamún', nombre_griego: 'Epunamún',
    epitetos: 'El Dios de la Guerra, Señor de Dos Rostros',
    descripcion_corta: 'Divinidad de la guerra invocada por los toquis antes del combate, representado con dos rostros que vigilan simultáneamente el frente y la retaguardia.',
    descripcion_larga: `Epunamún —nombre que algunos investigadores relacionan con la idea de "dos" (epu) unida a un rostro o presencia guerrera— es la divinidad mapuche asociada directamente a la guerra, invocada tradicionalmente por los toquis, los grandes líderes militares elegidos específicamente para tiempos de conflicto, antes de emprender una campaña importante contra un enemigo. Se le representaba a veces con dos rostros o dos frentes de atención simultánea, una imagen que aludía tanto a su capacidad de vigilar el avance como la retaguardia de un ejército en movimiento, como a la doble naturaleza de la guerra misma, capaz de traer tanto la victoria gloriosa como la destrucción devastadora según el favor que la divinidad decidiera conceder.

Antes de las grandes batallas de la extendida Guerra de Arauco contra los conquistadores españoles, los toquis y sus consejos de lonkos realizaban ceremonias específicas dedicadas a Epunamún, buscando su favor y solicitando presagios sobre el resultado probable del enfrentamiento venidero a través de las machis, que entraban en trance para comunicar la voluntad de la divinidad. Se creía que Epunamún castigaba con derrotas humillantes a los ejércitos que entraban en combate sin la debida preparación espiritual o sin el consenso adecuado del consejo de caciques, reforzando así la importancia que la sociedad mapuche otorgaba tanto a la unidad interna como a la legitimidad ritual de cualquier decisión que involucrara el uso colectivo de la fuerza contra un adversario externo.`,
    origen: 'Divinidad de la guerra dentro del panteón mapuche.',
    dominio: 'La guerra, las batallas y la estrategia militar', naturaleza: 'Divinidad guerrera', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'meulen', nombre: 'Meulen', nombre_griego: 'Meulen',
    epitetos: 'El Espíritu del Torbellino, Protector contra el Mal',
    descripcion_corta: 'Espíritu benévolo del viento y el torbellino, aliado constante contra las fuerzas del wekufe, que socorre a viajeros perdidos y purifica los espacios malditos.',
    descripcion_larga: `Meulen es un espíritu fundamentalmente benévolo asociado al viento arremolinado y al torbellino, considerado dentro de la cosmovisión mapuche como una de las principales fuerzas protectoras que se oponen activamente al wekufe, el mal genérico y las entidades oscuras que buscan hacer daño a las personas y a la comunidad. A diferencia de otros espíritus del viento presentes en distintas tradiciones que resultan temidos o ambivalentes, Meulen se presenta consistentemente como un aliado confiable de los vivos, dispuesto a intervenir directamente cuando alguien se encuentra en peligro espiritual o físico grave.

Las narrativas orales describen a Meulen apareciendo en forma de un remolino repentino de viento y polvo que despeja el camino de viajeros extraviados en la noche, ahuyentando a los espíritus maléficos que pudieran estar acechándolos, o irrumpiendo de manera oportuna para romper el maleficio que un kalku, un brujo maligno, hubiera lanzado sobre una persona o una familia. Las machis, durante sus ceremonias de sanación más exigentes, invocaban con frecuencia a Meulen como parte del conjunto de fuerzas aliadas al que recurrían para expulsar del cuerpo del enfermo la influencia dañina de algún wekufe, confiando en que el torbellino sagrado barrería literalmente esa presencia maligna. Se consideraba además que un remolino de viento repentino y localizado, sin relación aparente con las condiciones climáticas generales, constituía una señal directa de la presencia protectora de Meulen actuando en las cercanías.`,
    origen: 'Espíritu benévolo del viento y el torbellino.',
    dominio: 'El viento protector y la lucha contra el mal', naturaleza: 'Espíritu benévolo', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'ngen-mapu', nombre: 'Ngen Mapu', nombre_griego: 'Ngen Mapu',
    epitetos: 'El Dueño de la Tierra',
    descripcion_corta: 'El ngen o espíritu-dueño que cuida específicamente del suelo y el territorio, guardián directo del equilibrio entre la comunidad y la tierra que habita.',
    descripcion_larga: `Dentro de la cosmovisión mapuche, cada elemento significativo de la naturaleza —el agua, las piedras, los bosques, las montañas— cuenta con su propio ngen, un espíritu-dueño o guardián específico responsable de velar por ese elemento particular y de autorizar o negar su uso a los seres humanos según el respeto que estos demuestren. Ngen Mapu es el espíritu-dueño del suelo y el territorio en su sentido más amplio, la presencia invisible que vigila directamente cómo la comunidad trata la tierra que habita, cultiva y sobre la que construye sus viviendas.

Antes de roturar un nuevo terreno para la siembra o de establecer una nueva ruka, la vivienda tradicional mapuche, era costumbre pedir permiso simbólico a Ngen Mapu, generalmente mediante una breve ofrenda o palabra ritual, evitando así ofender a este guardián y provocar su descontento, que podía manifestarse en cosechas pobres, terrenos infértiles o una sucesión de desgracias menores pero persistentes afectando a quienes hubieran actuado con descuido. Las machis y los mayores de la comunidad transmitían de generación en generación el conocimiento necesario para reconocer las señales de enojo de Ngen Mapu y los rituales apropiados para restaurar la armonía, reforzando la idea central de que la tierra no era un recurso pasivo a disposición humana sino una entidad viva con voluntad propia, merecedora de respeto y reciprocidad constante.`,
    origen: 'Espíritu-dueño (ngen) del suelo y el territorio.',
    dominio: 'La tierra cultivable y el territorio habitado', naturaleza: 'Espíritu guardián de la naturaleza', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'ngen-ko', nombre: 'Ngen Ko', nombre_griego: 'Ngen Ko',
    epitetos: 'El Dueño del Agua',
    descripcion_corta: 'El ngen o espíritu-dueño de ríos, lagos y vertientes, cuyo favor determina si las aguas nutren a la comunidad o se vuelven traicioneras.',
    descripcion_larga: `Ngen Ko es el espíritu-dueño del agua en todas sus formas dulces —ríos, lagos, esteros y vertientes— considerado responsable directo de que estas fuentes permanezcan limpias, abundantes y seguras para el uso de la comunidad mapuche que depende de ellas tanto para beber y regar como para pescar y realizar ceremonias de purificación ritual. Se le atribuye un temperamento más variable que el de otros ngen, capaz de mostrarse generoso y protector con quienes tratan el agua con el debido respeto, pero también de volverse peligroso o incluso letal para quienes la contaminan, la desperdician o la usan de manera irrespetuosa.

Las machis realizaban ofrendas específicas a Ngen Ko antes de recolectar agua para las ceremonias de sanación más importantes, y ciertos manantiales o pozos considerados particularmente sagrados dentro del territorio mapuche eran tratados con un cuidado especial, evitándose bañarse en ellos o arrojar cualquier tipo de desecho bajo la creencia de que hacerlo despertaría la ira de su ngen guardián. Algunas narrativas orales advierten también sobre el peligro de acercarse a ciertos pozos profundos o remolinos de río durante la noche, momentos en que Ngen Ko se consideraba más activo y menos tolerante ante la presencia humana descuidada, un temor que coexistía y a veces se entrelazaba con la presencia de otros seres acuáticos temidos, como el propio Ngürüvilu, que habitaban las mismas aguas bajo la vigilancia general de este espíritu guardián mayor.`,
    origen: 'Espíritu-dueño (ngen) de las aguas dulces.',
    dominio: 'Los ríos, lagos y vertientes de agua dulce', naturaleza: 'Espíritu guardián de la naturaleza', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'ngen-kura', nombre: 'Ngen Kura', nombre_griego: 'Ngen Kura',
    epitetos: 'El Dueño de las Piedras',
    descripcion_corta: 'El ngen o espíritu-dueño de las rocas y peñascos sagrados, guardián de los lugares de piedra donde se realizan ceremonias y ofrendas.',
    descripcion_larga: `Ngen Kura es el espíritu-dueño de las piedras, las rocas y los grandes peñascos que salpican el paisaje del territorio mapuche, muchos de los cuales —según explican diversas narrativas orales, incluida la propia leyenda de Trentren Vilu y Caicai Vilu— eran considerados los restos petrificados de personas o animales transformados durante los grandes eventos primordiales que dieron forma al mundo actual. Ciertas formaciones rocosas específicas, particularmente aquellas de forma inusual o ubicadas en lugares de difícil acceso, eran tratadas como sitios sagrados directamente vinculados a la presencia activa de este espíritu guardián.

Se evitaba tradicionalmente golpear, remover o dañar de cualquier forma las piedras consideradas moradas de Ngen Kura, bajo la creencia de que hacerlo podía liberar sobre quien cometiera la falta una serie de desgracias o enfermedades difíciles de curar sin la intervención directa de una machi experimentada. Al mismo tiempo, ciertas piedras pequeñas y lisas, recogidas con el debido respeto y tras solicitar permiso ritual, eran empleadas por las propias machis como parte de sus instrumentos de sanación, incorporadas en collares ceremoniales o utilizadas durante los ritos de diagnóstico para detectar la presencia de algún mal oculto dentro del cuerpo del paciente, reflejando la doble naturaleza de Ngen Kura como fuerza tanto potencialmente peligrosa como, correctamente honrada, genuinamente útil para el bienestar de la comunidad.`,
    origen: 'Espíritu-dueño (ngen) de las piedras y formaciones rocosas.',
    dominio: 'Las piedras, rocas y peñascos sagrados', naturaleza: 'Espíritu guardián de la naturaleza', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'ngen-mawida', nombre: 'Ngen Mawida', nombre_griego: 'Ngen Mawida',
    epitetos: 'El Dueño del Bosque',
    descripcion_corta: 'El ngen o espíritu-dueño del bosque nativo, guardián de los árboles centenarios y de los animales silvestres que habitan bajo su follaje.',
    descripcion_larga: `Ngen Mawida es el espíritu-dueño del bosque nativo, el mawida, uno de los entornos más venerados dentro de la cosmovisión mapuche por la abundancia de recursos que proporciona: madera, plantas medicinales, frutos silvestres y la caza que sostenía tradicionalmente buena parte de la alimentación de las comunidades del sur. Se le representaba como una presencia protectora pero exigente, capaz de guiar a los recolectores hacia los árboles y plantas que necesitaban, pero también de confundir y extraviar deliberadamente a quienes entraban al bosque con intenciones de sobreexplotación o sin el respeto ritual debido.

Antes de talar un árbol grande, especialmente los ejemplares centenarios como el canelo —considerado un árbol sagrado en la tradición mapuche y utilizado activamente en ceremonias religiosas— era costumbre pedir permiso a Ngen Mawida y explicar en voz alta el propósito legítimo del corte, evitando así generar su descontento. Las machis recolectaban buena parte de sus plantas medicinales directamente del bosque bajo la protección y con el conocimiento transmitido generación tras generación sobre qué especies honrar de manera especial, y se creía que Ngen Mawida podía manifestarse a través del canto particular de ciertas aves del bosque, interpretado como una señal favorable o de advertencia según el contexto en que se escuchara, reforzando la idea de un bosque vivo y comunicativo antes que un simple recurso pasivo a disposición humana.`,
    origen: 'Espíritu-dueño (ngen) del bosque nativo.',
    dominio: 'El bosque, los árboles sagrados y la fauna silvestre', naturaleza: 'Espíritu guardián de la naturaleza', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'ngen-kutral', nombre: 'Ngen Kütral', nombre_griego: 'Ngen Kütral',
    epitetos: 'El Dueño del Fuego',
    descripcion_corta: 'El ngen o espíritu-dueño del fuego doméstico y ceremonial, guardián de la llama que calienta el hogar y purifica los rituales más importantes.',
    descripcion_larga: `Ngen Kütral es el espíritu-dueño del fuego, tanto en su forma cotidiana y doméstica —la llama que arde en el centro de cada ruka, calentando el hogar y cocinando los alimentos— como en su forma ceremonial más elevada, empleada durante rituales de purificación y en ofrendas específicas dirigidas a las distintas divinidades del panteón mapuche. El fuego ocupaba un lugar central en la vida cotidiana y espiritual de las comunidades, y se consideraba que mantenerlo encendido de manera adecuada, sin descuidos ni usos irrespetuosos, era una responsabilidad que reflejaba directamente el orden y el bienestar general del hogar.

Se creía que Ngen Kütral podía manifestar su descontento a través de un fuego que se apagaba sin razón aparente, que ardía con un color inusual, o que se resistía obstinadamente a encenderse pese a las condiciones favorables, señales todas interpretadas como advertencias de que algo dentro del hogar o la comunidad requería atención o corrección espiritual. Durante el Nguillatún y otras ceremonias importantes, se encendían fogatas rituales específicas cuya llama, cuidadosamente alimentada durante toda la duración del rito, se consideraba un vehículo directo de comunicación con las fuerzas superiores, llevando consigo el humo de las ofrendas quemadas hacia el Wenu Mapu; apagar deliberadamente o de forma descuidada uno de estos fuegos ceremoniales antes de tiempo se consideraba una falta grave capaz de invalidar por completo el propósito de la ceremonia entera.`,
    origen: 'Espíritu-dueño (ngen) del fuego doméstico y ceremonial.',
    dominio: 'El fuego del hogar y de las ceremonias', naturaleza: 'Espíritu guardián de la naturaleza', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'millalobo', nombre: 'Millalobo', nombre_griego: 'Millalobo',
    epitetos: 'El Rey del Mar, Señor de Oro de los Lobos Marinos',
    descripcion_corta: 'Rey del mar en la tradición chilota, mitad hombre y mitad lobo marino, cuyo favor determina la abundancia de peces y la seguridad de los pescadores.',
    descripcion_larga: `Millalobo —cuyo nombre combina el mapudungun milla, "oro", con la palabra castellana "lobo" en referencia al lobo marino— es el gobernante supremo del mundo submarino dentro de la rica tradición mitológica del archipiélago de Chiloé, un cuerpo de creencias profundamente entrelazado con la cosmovisión mapuche continental pero enriquecido también por siglos de mestizaje cultural entre los pueblos huilliche, chono y los colonizadores españoles que se asentaron en la isla. Se le describe con el torso de un hombre robusto de piel dorada y la parte inferior del cuerpo de un lobo marino, gobernando desde un palacio submarino de piedra y coral un vasto reino que incluye a todas las criaturas del mar cercano.

Millalobo es hijo, según la tradición más extendida, de una mujer mortal seducida por un lobo marino transformado en hombre, y con el tiempo asumió el trono absoluto sobre las aguas costeras, decidiendo personalmente la abundancia o escasez de peces y mariscos disponibles para las comunidades pescadoras de la zona según el respeto que estas demostraran hacia el mar y sus criaturas. Se le atribuye también una relación estrecha, en algunas versiones incluso de esposo, con la Pincoya, la joven espíritu que danza en las playas trayendo consigo la buena pesca; juntos gobiernan el ciclo completo de la abundancia marina, y los pescadores tradicionales de Chiloé aún realizan pequeñas ofrendas y observan ciertas costumbres de respeto hacia el mar antes de zarpar, conscientes de que el favor o el disgusto de Millalobo puede determinar el éxito o el fracaso de toda una temporada de pesca.`,
    origen: 'Rey del mar en la tradición chilota, hijo de una mujer mortal y un lobo marino.',
    dominio: 'El mar, los peces y las criaturas marinas', naturaleza: 'Divinidad marina mitad hombre, mitad lobo marino', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'pincoya', nombre: 'Pincoya', nombre_griego: 'Pincoya',
    epitetos: 'La Doncella del Mar, Danzante de la Abundancia',
    descripcion_corta: 'Joven espíritu del mar de la tradición chilota que danza descalza en las playas anunciando, según su rostro, la abundancia o la escasez de la pesca.',
    descripcion_larga: `La Pincoya es uno de los espíritus más queridos y hermosos de toda la tradición marina de Chiloé, descrita como una joven de belleza extraordinaria, cabello dorado y largo que suele aparecer danzando descalza sobre las playas y en las orillas rocosas, especialmente durante la marea baja, siempre vestida con algas y conchas marinas entrelazadas en su cabello y su cuerpo. Su danza, observada solo por quienes tienen la fortuna o la sensibilidad espiritual necesaria para percibirla, constituye una señal directa sobre el estado de la pesca en esa zona particular de la costa: si la Pincoya danza mirando hacia el mar, la temporada será abundante y generosa; si danza mirando hacia la tierra, en cambio, anuncia escasez y dificultades para los pescadores locales.

Se le atribuye la función de renovar y multiplicar activamente los bancos de peces y mariscos a lo largo de la costa chilota, y algunas versiones de la tradición la vinculan como esposa o compañera cercana del rey Millalobo, formando juntos una pareja que gobierna en conjunto la fertilidad y abundancia del mar. Los pescadores que se topaban con su danza durante la noche debían evitar interrumpirla o intentar tocarla, bajo el riesgo de ofenderla y provocar que se marchara llevándose consigo la buena fortuna pesquera de la zona durante mucho tiempo. La Pincoya sigue siendo hoy uno de los símbolos más reconocibles y queridos de la identidad cultural chilota, presente en el arte, la artesanía y las narraciones que los propios isleños continúan transmitiendo a las nuevas generaciones.`,
    origen: 'Espíritu del mar de la tradición chilota, asociado a Millalobo.',
    dominio: 'La abundancia de peces y mariscos en la costa', naturaleza: 'Espíritu marino femenino', es_preview: 1
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-mapuche'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-mapuche" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando titanes y dioses de Mitologia Mapuche (parte 1)...\n');
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
