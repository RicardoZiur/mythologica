// ============================================================
// scripts/sembrar-personajes-angelologia-parte1.js
// ------------------------------------------------------------
// Primer lote de Angelologia: 5 primordiales (titan) y 15
// grandes arcangeles y angeles nombrados (dios) -- catalogados a
// partir de la tradicion biblica, la Cabala, el Corán y los
// grandes textos apocrifos (Libro de Enoc). Contenido completo
// desde el inicio. Idempotente via slug -- IMPORTANTE:
// personajes.slug es UNICO A NIVEL GLOBAL, verificar contra toda
// la tabla antes de correr si se agregan mas nombres.
//
// Nota de tono: mismo criterio enciclopedico/narrativo y
// respetuoso que el resto del catalogo, incluido Demonologia --
// sin postura religiosa propia ni sensacionalismo. Se evita
// deliberadamente incluir al profeta Mahoma como personaje, dado
// el rechazo generalizado dentro del islam a su representacion
// visual.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-angelologia-parte1.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- PRIMORDIALES ---
  {
    tipo: 'titan', slug: 'metatron', nombre: 'Metatrón', nombre_griego: 'Metatron',
    epitetos: 'El Príncipe del Semblante, la Pequeña YHVH',
    descripcion_corta: 'El más alto de los ángeles según la tradición judía mística, transformado, según una tradición extendida, a partir del hombre Enoc, ascendido al cielo en cuerpo y alma.',
    descripcion_larga: `Metatrón ocupa el rango más elevado dentro de la jerarquía angelical descrita por buena parte de la mística judía, particularmente dentro de la tradición de la Merkavá y textos cabalísticos posteriores como el Zohar y el Sefer Hejalot ("Libro de los Palacios"), donde recibe el sorprendente título de "la pequeña YHVH", una designación que refleja la cercanía extraordinaria y prácticamente sin precedentes que se le atribuye respecto a la presencia divina misma. Según la tradición más extendida, Metatrón no fue creado directamente como ángel desde el principio de los tiempos, sino que se trata en realidad de Enoc, el patriarca bíblico mencionado brevemente en el Génesis como un hombre que "caminó con Dios" y que, en lugar de morir como el resto de los mortales, fue llevado directamente al cielo, donde se transformó por completo en esta entidad angelical suprema.

Se le atribuye la función de escriba celestial, encargado de registrar con precisión absoluta las acciones de toda la humanidad, así como la de intermediario privilegiado entre la divinidad y el resto de las huestes angelicales, ocupando en ciertos textos místicos un trono propio junto al de Dios, una posición de honor tan elevada que motivó, según narra el propio Talmud, que el sabio Elisha ben Abuya, al presenciar a Metatrón sentado, llegara a confundirlo momentáneamente con una segunda divinidad, un error que la tradición rabínica posterior consideró necesario corregir enfáticamente para evitar cualquier ambigüedad respecto a la unicidad absoluta de Dios. Su nombre, cuya etimología exacta sigue siendo objeto de debate académico considerable entre estudiosos de la Cábala, aparece asociado en algunos textos con la idea del "trono junto al trono", reforzando su posición como el ángel más cercano posible a la presencia divina sin llegar jamás a confundirse con ella.`,
    origen: 'El más alto ángel de la tradición mística judía, según una tradición transformado a partir del patriarca Enoc.',
    dominio: 'El registro celestial y la cercanía al trono divino', naturaleza: 'Príncipe angelical supremo', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'sandalfon', nombre: 'Sandalfón', nombre_griego: 'Sandalphon',
    epitetos: 'El Ángel más Alto, Recolector de Plegarias',
    descripcion_corta: 'Considerado gemelo celestial de Metatrón y ángel de estatura tan colosal que separa el cielo de la tierra por quinientos años de camino, encargado de recoger las plegarias humanas.',
    descripcion_larga: `Sandalfón aparece en numerosos textos de la mística judía como una entidad estrechamente vinculada a Metatrón, descrito con frecuencia como su hermano gemelo celestial o su contraparte directa, aunque, a diferencia de este, la tradición no le atribuye habitualmente un origen humano previo, presentándolo en cambio como un ángel de naturaleza puramente celestial desde el principio. Su rasgo más distintivo dentro de la tradición talmúdica y cabalística es su tamaño verdaderamente colosal: se le describe como tan alto que la distancia entre sus pies y su cabeza equivaldría a quinientos años de camino, una magnitud tan extraordinaria que el propio texto talmúdico advierte del riesgo de que cualquier otro ángel que intentara contemplarlo directamente pudiera resultar cegado por la experiencia.

Se le atribuye una función particularmente entrañable dentro del orden celestial: la de recoger personalmente las plegarias que ascienden desde toda la humanidad, tejiéndolas en coronas simbólicas antes de presentarlas ante el trono divino, una labor que lo convierte en un intermediario directo y activo entre las súplicas humanas más cotidianas y la atención divina. Dentro de la tradición judía, se le asocia también de manera específica con la música, considerado en algunas fuentes el ángel encargado de dirigir el coro celestial, y su nombre aparece mencionado, entre otras referencias culturales posteriores, en el célebre poema del escritor estadounidense Henry Wadsworth Longfellow titulado precisamente "Sandalphon", que popularizó su figura entre audiencias considerablemente más amplias que las estrictamente versadas en la mística judía tradicional. Junto a Metatrón, Sandalfón representa dentro de esta tradición una de las escasas excepciones de ángeles cuya biografía y naturaleza particular reciben un desarrollo narrativo tan extenso como el de los grandes patriarcas o profetas bíblicos.`,
    origen: 'Ángel gemelo celestial de Metatrón dentro de la tradición mística judía.',
    dominio: 'La recolección de plegarias y la música celestial', naturaleza: 'Ángel de estatura colosal', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'shekinah', nombre: 'Shejiná', nombre_griego: 'Shekinah',
    epitetos: 'La Presencia Divina que Habita entre los Hombres',
    descripcion_corta: 'La manifestación visible y habitante de la presencia de Dios entre la humanidad, personificada dentro de la mística judía como una entidad de naturaleza marcadamente femenina.',
    descripcion_larga: `La Shejiná —término hebreo derivado de la raíz shajan, "habitar" o "morar"— designa dentro de la tradición judía la manifestación tangible y perceptible de la presencia divina descendiendo activamente para habitar entre la humanidad, un concepto documentado ya en textos rabínicos tempranos para describir fenómenos bíblicos como la nube y el fuego que acompañaron al pueblo de Israel durante su travesía por el desierto, o la gloria luminosa que llenó tanto el Tabernáculo como posteriormente el Templo de Jerusalén. A diferencia de la trascendencia absoluta y distante que la tradición judía atribuye habitualmente a Dios en su esencia más pura, la Shejiná representa específicamente el aspecto inmanente y cercano de esa misma divinidad, capaz de acompañar directamente al pueblo incluso durante sus periodos más difíciles de exilio y sufrimiento.

Dentro de la mística cabalística desarrollada especialmente a partir de la Edad Media, la Shejiná adquirió progresivamente una personificación considerablemente más definida y marcadamente femenina, identificada con Maljut, la última de las diez sefirot que estructuran simbólicamente la Cábala, y descrita en textos como el Zohar mediante metáforas que la presentan como una novia, una madre o una reina exiliada, cuya reunión definitiva con las sefirot superiores, particularmente con Tiferet, representaría la restauración final y completa de la armonía cósmica esperada por la tradición mística judía. Se creía que la Shejiná acompañaba de manera especial a cualquier grupo reunido para el estudio genuino de la Torá, y que su presencia, aunque generalmente invisible para los ojos ordinarios, podía manifestarse de manera perceptible ante individuos de una santidad excepcional, otorgándole un papel central y profundamente venerado dentro de toda la tradición espiritual judía posterior.`,
    origen: 'Manifestación de la presencia divina dentro de la tradición judía.',
    dominio: 'La presencia divina habitando entre la humanidad', naturaleza: 'Personificación femenina de la presencia divina', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'serafines', nombre: 'Los Serafines de la Visión de Isaías', nombre_griego: 'Seraphim',
    epitetos: 'Los Ardientes que Claman "Santo, Santo, Santo"',
    descripcion_corta: 'La visión original de seres de seis alas cantando incesantemente "Santo, Santo, Santo" ante el trono de Dios, descrita por el profeta Isaías como el coro más elevado del cielo.',
    descripcion_larga: `La visión de los serafines documentada en el capítulo sexto del Libro de Isaías constituye una de las descripciones más vívidas e influyentes de toda la literatura profética bíblica: el propio profeta narra haber contemplado al Señor sentado sobre un trono elevado y sublime, rodeado por seres identificados como serafines, cada uno de ellos dotado de seis alas —dos para cubrir su rostro, dos para cubrir sus pies, y dos para volar—, que se llamaban unos a otros proclamando incesantemente la célebre fórmula "Santo, Santo, Santo es el Señor de los ejércitos, toda la tierra está llena de su gloria", un canto tan poderoso que, según el relato, hacía temblar los cimientos mismos del umbral del templo mientras la casa entera se llenaba de humo.

El propio nombre "serafín" proviene de una raíz hebrea relacionada con "quemar" o "arder", reflejando directamente la naturaleza ígnea y abrasadora que la tradición atribuye a estos seres, considerados generalmente el coro más elevado dentro de las jerarquías angelicales desarrolladas posteriormente tanto en la tradición judía como cristiana, situados en inmediata cercanía al trono divino mismo. En la propia narrativa de Isaías, uno de estos serafines desciende directamente hacia el profeta, tocando sus labios con un carbón ardiente tomado del altar como acto simbólico de purificación, preparándolo así para recibir la misión profética que Dios está a punto de encomendarle. Esta visión particular ejerció una influencia decisiva sobre el desarrollo posterior de toda la teología angelical cristiana, incluida la célebre "Jerarquía Celestial" del Pseudo-Dionisio Areopagita, que situaría definitivamente a los serafines en el primer y más elevado de los nueve coros angelicales que estructuraría formalmente toda la tradición cristiana occidental durante los siglos siguientes.`,
    origen: 'Visión del profeta Isaías, capítulo sexto de su Libro.',
    dominio: 'La adoración incesante y la proximidad más cercana al trono divino', naturaleza: 'El coro angelical más elevado', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'criaturas-vivientes', nombre: 'Las Cuatro Criaturas Vivientes de Ezequiel', nombre_griego: 'Chayot HaKodesh',
    epitetos: 'Los Portadores del Trono, con Rostros de León, Buey, Águila y Hombre',
    descripcion_corta: 'Cuatro seres híbridos de rostro cuádruple y alas cubiertas de ojos, descritos por el profeta Ezequiel sosteniendo el trono divino en su visión más célebre y desconcertante.',
    descripcion_larga: `Las cuatro criaturas vivientes descritas por el profeta Ezequiel en el primer capítulo de su libro constituyen una de las visiones más elaboradas, desconcertantes y visualmente extraordinarias de toda la literatura apocalíptica bíblica: el profeta narra haber contemplado, en medio de una tormenta que se aproximaba desde el norte acompañada de fuego y un resplandor incesante, cuatro seres con apariencia general humana pero dotados cada uno de cuatro rostros distintos —de hombre, de león, de buey y de águila— dispuestos simultáneamente en direcciones opuestas, permitiéndoles avanzar hacia cualquier dirección sin necesidad de girar sus cuerpos, además de cuatro alas cada uno, dos de las cuales se extendían para tocar las alas de las criaturas vecinas, formando así una unidad de movimiento perfectamente coordinada.

Junto a estas criaturas, Ezequiel describe también unas ruedas complejas y entrelazadas, conocidas posteriormente como los Ofanim, cuyos aros estaban completamente cubiertos de ojos, y que se movían en perfecta sincronía con las criaturas vivientes, elevándose y desplazándose juntas siempre que el espíritu de estas lo determinaba. Sobre las cabezas de las criaturas se extendía una superficie semejante a un cristal reluciente, y por encima de esa superficie se alzaba un trono con la apariencia de un zafiro, sobre el cual Ezequiel percibió una figura de aspecto humano rodeada de un resplandor semejante al arco iris, interpretada tradicionalmente como una manifestación visible de la gloria divina misma. La tradición judía posterior identificaría a estas cuatro criaturas con los Chayot HaKodesh ("santas criaturas vivientes"), situándolas en algunos sistemas de jerarquía angelical como equivalentes o estrechamente relacionadas con los propios querubines, mientras que la tradición cristiana adoptaría también esta imagen, particularmente a través del Apocalipsis de Juan, asociando finalmente cada una de las cuatro criaturas con los cuatro evangelistas del Nuevo Testamento en la iconografía cristiana posterior.`,
    origen: 'Visión del profeta Ezequiel, primer capítulo de su Libro.',
    dominio: 'El sostén del trono divino y el movimiento perfectamente sincronizado', naturaleza: 'Cuatro seres híbridos primordiales', es_preview: 0
  },

  // --- GRANDES ARCANGELES Y ANGELES NOMBRADOS ---
  {
    tipo: 'dios', slug: 'miguel', nombre: 'Miguel', nombre_griego: 'Michael',
    epitetos: '"¿Quién como Dios?", el Comandante de las Huestes Celestiales',
    descripcion_corta: 'El gran arcángel guerrero, líder de los ejércitos del cielo, que derrota personalmente al dragón en la batalla final descrita en el Apocalipsis.',
    descripcion_larga: `Miguel —cuyo nombre en hebreo se traduce como "¿Quién como Dios?", una pregunta retórica que afirma implícitamente la incomparabilidad absoluta de la divinidad— ocupa el lugar del gran arcángel guerrero dentro de las tres grandes tradiciones abrahámicas, considerado el príncipe y comandante supremo de los ejércitos celestiales, encargado de liderar directamente la defensa del cielo frente a cualquier amenaza que se atreva a desafiarlo. Aparece nombrado explícitamente en el Libro de Daniel como "el gran príncipe que está de parte de los hijos de tu pueblo", protector particular y designado del pueblo de Israel frente a las fuerzas que se le oponen, y su papel guerrero alcanza su expresión más célebre en el Apocalipsis de Juan, donde se narra que Miguel y sus ángeles combaten directamente contra el dragón —identificado explícitamente con Satán— y sus propios ángeles rebeldes, logrando finalmente derrotarlos y expulsarlos del cielo de manera definitiva.

Dentro de la tradición cristiana posterior, Miguel se consolidó como el arcángel psicopompo por excelencia, encargado de pesar las almas de los difuntos en la balanza durante el juicio final, una función iconográfica extraordinariamente extendida en el arte medieval y renacentista europeo, que lo representa con frecuencia empuñando una espada o una lanza mientras somete bajo sus pies a una figura demoníaca claramente derrotada. Su culto se extendió con particular fuerza durante la Edad Media, con numerosos santuarios dedicados específicamente a su veneración erigidos con frecuencia en lugares elevados —montañas, promontorios rocosos—, reflejando simbólicamente su papel como defensor situado en el punto más alto y expuesto de la batalla espiritual. Es precisamente a Miguel a quien el Papa León XIII dedicó su célebre "Oración a San Miguel Arcángel" tras la visión perturbadora de 1884, solicitando su intercesión directa como el gran defensor histórico contra las fuerzas del mal.`,
    origen: 'Gran arcángel guerrero de las tres tradiciones abrahámicas.',
    dominio: 'La guerra celestial y el liderazgo de las huestes angelicales', naturaleza: 'Arcángel comandante y guerrero', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'gabriel', nombre: 'Gabriel', nombre_griego: 'Gabriel',
    epitetos: '"La Fuerza de Dios", el Gran Mensajero',
    descripcion_corta: 'El arcángel mensajero por excelencia, portador de las revelaciones más decisivas de la tradición abrahámica, desde las visiones de Daniel hasta el anuncio a María.',
    descripcion_larga: `Gabriel —cuyo nombre significa "la fuerza de Dios" o "Dios es mi fuerza"— ocupa dentro de la tradición abrahámica el papel del gran arcángel mensajero, encargado de transmitir directamente a la humanidad algunas de las revelaciones más decisivas y transformadoras de toda la historia religiosa. Aparece explícitamente nombrado en el Libro de Daniel, donde interpreta para el propio profeta el significado de sus visiones más complejas, incluida la célebre profecía de las setenta semanas, estableciendo así su función específica como intérprete y clarificador de mensajes divinos particularmente difíciles de comprender por sí solos.

Dentro del Nuevo Testamento, Gabriel protagoniza dos de los episodios más célebres de toda la narrativa cristiana: primero anuncia a Zacarías, en el templo de Jerusalén, el nacimiento inminente de su hijo Juan el Bautista pese a la avanzada edad tanto de él como de su esposa Isabel, y después, en el episodio conocido como la Anunciación, se presenta ante la joven María en Nazaret para revelarle que concebiría y daría a luz a Jesús, un encuentro que se convertiría en uno de los temas iconográficos más representados en toda la historia del arte occidental. Dentro de la tradición islámica, Gabriel es identificado como Jibril, el ángel encargado de transmitir directamente la revelación coránica, ocupando dentro de esa tradición una posición de importancia prácticamente insuperable como el vehículo directo de la palabra divina hacia la humanidad. Esta presencia compartida y consistente a lo largo de las tres grandes tradiciones abrahámicas convierte a Gabriel en, posiblemente, el ángel individual más universalmente reconocido de toda la religión monoteísta occidental.`,
    origen: 'Gran arcángel mensajero de las tres tradiciones abrahámicas.',
    dominio: 'La revelación divina y el anuncio de nacimientos decisivos', naturaleza: 'Arcángel mensajero', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'rafael', nombre: 'Rafael', nombre_griego: 'Raphael',
    epitetos: '"Dios Sana", el Ángel Compañero de Viaje',
    descripcion_corta: 'El arcángel sanador que, disfrazado de simple compañero de viaje, guía a Tobías a través de su travesía y libera a Sara de la maldición de Asmodeo.',
    descripcion_larga: `Rafael —cuyo nombre se traduce directamente como "Dios sana"— protagoniza el relato angelical más extenso y narrativamente completo de todo el corpus bíblico deuterocanónico, desarrollado íntegramente a lo largo del Libro de Tobías. En ese relato, Rafael desciende del cielo disfrazado bajo la apariencia de un compañero de viaje mortal común, acompañando al joven Tobías durante un largo trayecto sin revelar en ningún momento su verdadera naturaleza angelical, guiándolo a través de peligros diversos, incluida la instrucción precisa sobre cómo capturar y emplear las partes de un pez específico para expulsar al demonio Asmodeo, que había asesinado sucesivamente a los siete esposos anteriores de Sara, la joven con la que Tobías terminaría casándose.

Además de resolver esa amenaza demoníaca específica, Rafael proporciona también la cura definitiva para la ceguera del padre de Tobías, aplicando la hiel del mismo pez capturado durante el viaje directamente sobre sus ojos, completando así una doble misión de liberación y sanación que justifica plenamente el significado de su propio nombre. Solo al final del relato, tras cumplir completamente su encomienda, Rafael revela su verdadera identidad angelical ante la familia entera, explicando que había sido enviado directamente por Dios como respuesta a las plegarias sinceras de ambas familias afectadas. Dentro de la tradición cristiana posterior, Rafael se consolidó como el arcángel patrón de los viajeros, los médicos, los farmacéuticos y todos aquellos dedicados profesionalmente a la sanación, y su festividad se celebra junto a la de Miguel y Gabriel, formando el trío de arcángeles cuyo culto y veneración se mantiene explícitamente reconocido y celebrado dentro del calendario litúrgico católico oficial hasta la actualidad.`,
    origen: 'Arcángel sanador del Libro de Tobías.',
    dominio: 'La sanación y la protección de los viajeros', naturaleza: 'Arcángel sanador', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'uriel', nombre: 'Uriel', nombre_griego: 'Uriel',
    epitetos: '"El Fuego de Dios", Guía a través del Cosmos',
    descripcion_corta: 'Ángel de sabiduría y revelación cósmica que, según el Libro de Enoc, guía al propio patriarca a través de los secretos del universo, los astros y el destino de las almas.',
    descripcion_larga: `Uriel —cuyo nombre significa "el fuego de Dios" o "Dios es mi luz"— ocupa un lugar particularmente destacado dentro de la literatura apocalíptica y mística judía, especialmente documentado a través del Libro de Enoc, un texto apócrifo de gran influencia dentro de ciertas tradiciones judías y cristianas tempranas aunque finalmente excluido del canon bíblico oficial de la mayoría de las denominaciones. En ese texto, Uriel actúa como guía cósmico directo del propio Enoc durante su recorrido visionario a través de los secretos más profundos del universo, revelándole el funcionamiento exacto del sol, la luna y las estrellas, los almacenes celestiales del viento y la lluvia, y los destinos finales que aguardan tanto a los justos como a los pecadores tras la muerte.

Se le atribuye también, dentro de distintas tradiciones que lo mencionan, un papel activo en el anuncio del diluvio a Noé, advirtiéndole con antelación suficiente sobre la catástrofe inminente para que pudiera prepararse debidamente, así como una función de guardián específico sobre el trueno y el terror, cualidades que reflejan la naturaleza ígnea y cósmica implícita en su propio nombre. Aunque Uriel no aparece mencionado por su nombre exacto dentro del canon bíblico hebreo o del Nuevo Testamento oficial, su figura se consolidó con fuerza considerable dentro de tradiciones cristianas posteriores, apareciendo en algunas listas medievales como uno de los siete arcángeles principales que se presentan directamente ante el trono de Dios, aunque su estatus oficial ha variado considerablemente según la denominación cristiana específica y el periodo histórico consultado, siendo reconocido con mayor firmeza dentro de las tradiciones ortodoxas orientales que dentro del catolicismo occidental posterior al Concilio de Trento.`,
    origen: 'Ángel de sabiduría cósmica documentado principalmente en el Libro de Enoc.',
    dominio: 'La sabiduría cósmica y la revelación de los secretos del universo', naturaleza: 'Arcángel de la sabiduría', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'raguel', nombre: 'Raguel', nombre_griego: 'Raguel',
    epitetos: 'El Ángel que Vigila a los Ángeles',
    descripcion_corta: 'Según el Libro de Enoc, el ángel encargado específicamente de supervisar el comportamiento correcto del resto de las huestes celestiales, vengando cualquier transgresión cometida contra la luz.',
    descripcion_larga: `Raguel aparece mencionado dentro del Libro de Enoc como uno de los siete arcángeles principales que rodean el trono divino, atribuyéndosele una función particularmente singular dentro de toda la jerarquía angelical: mientras que la inmensa mayoría de los ángeles nombrados en la tradición se encargan de supervisar aspectos específicos del mundo humano o natural —la sanación, la guerra, la sabiduría cósmica—, Raguel es descrito específicamente como el ángel encargado de vigilar el comportamiento correcto del propio mundo angelical, actuando como una suerte de guardián interno de la disciplina y el orden dentro de las huestes celestiales mismas.

Su función se relaciona directamente con el episodio de los ángeles vigilantes o Grigori, aquellos que, liderados por Semyaza y Azazel, descendieron a la tierra transgrediendo el límite establecido entre el orden angelical y el orden mortal; se atribuye a Raguel un papel activo en la ejecución del juicio y el castigo correspondiente contra estos ángeles transgresores, vengando la afrenta cometida contra la luz y el orden celestial que estos habían quebrantado con su propia conducta. Esta función particular de supervisor interno, relativamente poco común dentro del amplio catálogo de ángeles nombrados en la literatura apocalíptica, refleja una preocupación teológica específica presente en textos como el Libro de Enoc: la idea de que incluso los seres celestiales, pese a su naturaleza elevada, no se encontraban completamente exentos de la posibilidad de transgresión, y que el orden cósmico requería, por tanto, de mecanismos internos de vigilancia y corrección aplicables al propio mundo angelical.`,
    origen: 'Uno de los siete arcángeles principales según el Libro de Enoc.',
    dominio: 'La disciplina y la vigilancia del comportamiento angelical', naturaleza: 'Arcángel supervisor', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'remiel', nombre: 'Remiel', nombre_griego: 'Remiel',
    epitetos: 'El Ángel de la Esperanza y las Visiones Verdaderas',
    descripcion_corta: 'Uno de los siete arcángeles del Libro de Enoc, encargado de guiar a las almas ascendentes y de garantizar la autenticidad de las visiones proféticas verdaderas.',
    descripcion_larga: `Remiel (también documentado bajo variantes como Ramiel o Jeremiel, según distintas tradiciones y manuscritos) aparece igualmente listado dentro del Libro de Enoc entre los siete arcángeles principales que rodean el trono divino, atribuyéndosele generalmente una función relacionada con la conducción de las almas de los justos durante su tránsito hacia el más allá, así como un papel específico en la garantía de la autenticidad de las revelaciones proféticas genuinas, distinguiéndolas de posibles visiones falsas o engañosas que pudieran confundir a quienes las recibían.

Dentro de tradiciones judías posteriores, particularmente en el Segundo Libro de Baruc, un texto apócrifo relacionado con la literatura apocalíptica del periodo del Segundo Templo, Remiel aparece explícitamente encargado de supervisar las visiones proféticas otorgadas a los seres humanos, asegurando que estas transmitieran fielmente la voluntad divina sin distorsión alguna, una función que lo vincula estrechamente con la esperanza y la certeza espiritual que una revelación auténtica y confiable podía proporcionar a quien la recibía en momentos de duda o crisis personal. Su presencia dentro de las distintas listas de arcángeles varía considerablemente según la fuente consultada, reflejando la naturaleza fluida y no completamente estandarizada que caracterizó buena parte de la angelología del periodo del Segundo Templo antes de que tradiciones posteriores, tanto judías como cristianas, intentaran sistematizar de manera más definitiva y jerárquica la totalidad del panteón angelical reconocido oficialmente por cada denominación religiosa particular.`,
    origen: 'Uno de los siete arcángeles principales según el Libro de Enoc y el Segundo Libro de Baruc.',
    dominio: 'La esperanza, las visiones verdaderas y el tránsito de las almas', naturaleza: 'Arcángel de la revelación auténtica', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'saraqael', nombre: 'Saraqael', nombre_griego: 'Saraqael',
    epitetos: 'El Ángel que Vigila a los Espíritus que Pecan',
    descripcion_corta: 'Uno de los siete arcángeles del Libro de Enoc, encargado específicamente de supervisar a los espíritus humanos que transgreden mediante su propio aliento vital.',
    descripcion_larga: `Saraqael completa el grupo de siete arcángeles principales nombrados en el Libro de Enoc, con una función particularmente específica y poco común dentro del catálogo general de responsabilidades angelicales documentadas en la tradición: se le atribuye la vigilancia directa de los "espíritus de los hijos de los hombres que pecan a través de sus propios espíritus", una formulación que los estudiosos han interpretado de distintas maneras, incluyendo la supervisión específica de transgresiones cometidas mediante el aliento vital o la propia naturaleza espiritual interior de cada ser humano, más allá de las transgresiones puramente físicas o externas atribuidas a otros ámbitos de vigilancia angelical.

Esta función particular de Saraqael, aunque descrita con relativa brevedad dentro del propio texto del Libro de Enoc, refleja la complejidad considerable que caracterizaba a buena parte de la angelología del periodo del Segundo Templo, un sistema que, lejos de presentar una jerarquía simple y uniforme, desarrollaba con frecuencia divisiones de responsabilidad extraordinariamente específicas y matizadas entre los distintos ángeles nombrados, cada uno encargado de un aspecto particular del comportamiento humano o cósmico bajo supervisión celestial directa. Su presencia dentro de las listas de arcángeles varía considerablemente según la versión y tradición manuscrita del propio Libro de Enoc consultada, y su figura ha permanecido considerablemente menos desarrollada en tradiciones posteriores que la de otros arcángeles más prominentes como Miguel, Gabriel o Rafael, permaneciendo principalmente como una referencia erudita dentro de los estudios especializados sobre la literatura apocalíptica del periodo del Segundo Templo judío.`,
    origen: 'Uno de los siete arcángeles principales según el Libro de Enoc.',
    dominio: 'La vigilancia de las transgresiones espirituales internas', naturaleza: 'Arcángel supervisor del espíritu humano', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'israfil', nombre: 'Israfil', nombre_griego: 'Israfil',
    epitetos: 'El Ángel de la Trompeta del Juicio Final',
    descripcion_corta: 'Dentro de la tradición islámica, el ángel encargado de tocar la trompeta que anunciará tanto el fin del mundo como la resurrección final de toda la humanidad.',
    descripcion_larga: `Israfil ocupa un lugar de enorme trascendencia escatológica dentro de la tradición islámica, aunque su nombre no aparece mencionado de manera explícita dentro del propio texto coránico, siendo identificado en cambio a través de una tradición hadiz extensa y ampliamente aceptada como el ángel encargado específicamente de tocar la trompeta (as-sur) que marcará dos momentos absolutamente decisivos en la historia cósmica según la escatología islámica: primero, un toque que provocará la destrucción completa del mundo tal como se conoce, causando la muerte instantánea de todos los seres vivos existentes en ese momento; y posteriormente, tras un periodo indeterminado, un segundo toque que resucitará a la totalidad de la humanidad para presentarse ante el juicio final divino.

La tradición islámica lo describe como un ángel de proporciones y poder verdaderamente extraordinarios, permanentemente listo con la trompeta llevada a sus labios, aguardando la orden divina precisa para proceder con el toque que desencadenará el fin de la era actual del mundo. Algunas tradiciones adicionales le atribuyen también funciones relacionadas con la música celestial y la inspiración poética, sugiriendo cierta continuidad conceptual con figuras angelicales de otras tradiciones abrahámicas asociadas igualmente con el sonido y la proclamación, como el propio Sandalfón dentro de la mística judía. Israfil se cuenta habitualmente entre los cuatro grandes arcángeles reconocidos de manera más consistente dentro del islam, junto a Jibril (Gabriel), Mikail (Miguel) y Azrael, formando así un cuarteto de figuras angelicales de responsabilidad cósmica y escatológica considerablemente elevada dentro de la estructura teológica islámica.`,
    origen: 'Ángel de la trompeta del juicio final dentro de la tradición islámica.',
    dominio: 'El fin del mundo y la resurrección final de la humanidad', naturaleza: 'Gran arcángel escatológico del islam', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'azrael', nombre: 'Azrael', nombre_griego: 'Azrael',
    epitetos: 'El Ángel de la Muerte',
    descripcion_corta: 'Dentro de la tradición islámica, el ángel encargado de separar el alma del cuerpo en el momento exacto de la muerte de cada persona, cumpliendo su tarea con compasión más que con crueldad.',
    descripcion_larga: `Azrael, cuyo nombre tampoco aparece mencionado de manera explícita en el propio texto coránico pero que se identifica firmemente a través de la tradición islámica posterior como Malak al-Mawt ("el ángel de la muerte"), cumple la función específica y universal de separar el alma del cuerpo de cada persona en el momento exacto determinado por Dios para su fallecimiento, una tarea que la tradición presenta generalmente no como un acto de crueldad o malicia, sino como el cumplimiento fiel y compasivo de una responsabilidad divina asignada, ejecutada con la delicadeza apropiada según la propia disposición espiritual de la persona en cuestión al momento de morir.

Distintas tradiciones y relatos populares desarrollados a lo largo de los siglos describen a Azrael con miles de ojos y alas, cada uno correspondiente simbólicamente a las innumerables almas que debe recoger a lo largo de la existencia, y con un registro completo, otorgado directamente por Dios, de la duración exacta de vida asignada a cada ser humano. Algunas narrativas populares presentan a Azrael reflexionando sobre la naturaleza inevitable pero necesaria de su propia tarea, e incluso experimentando cierta compasión genuina hacia la humanidad cuya vida debe finalmente concluir según el momento predeterminado. Su figura guarda paralelismos considerables con la de Samael dentro de la tradición judía, ambos cumpliendo la función específica de ángel de la muerte dentro de sus respectivas tradiciones religiosas, aunque con matices teológicos y narrativos considerablemente distintos entre ambas figuras, reflejando las diferencias particulares en cómo cada tradición abrahámica concibe la relación exacta entre la divinidad, sus intermediarios angelicales y el destino final inevitable de cada vida humana individual.`,
    origen: 'El ángel de la muerte dentro de la tradición islámica.',
    dominio: 'La separación del alma y el cuerpo en el momento de la muerte', naturaleza: 'Gran arcángel de la muerte', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'malik', nombre: 'Malik', nombre_griego: 'Malik',
    epitetos: 'El Guardián del Infierno',
    descripcion_corta: 'Dentro de la tradición islámica, el ángel jefe encargado de custodiar el Infierno (Jahannam), mencionado directamente en el Corán respondiendo con severidad a las súplicas de los condenados.',
    descripcion_larga: `Malik ocupa dentro de la tradición islámica el cargo específico de ángel jefe encargado de custodiar y administrar el Infierno (Jahannam), asistido en esa tarea por un extenso número de ángeles subordinados conocidos como los zabaniyah, encargados directamente de la vigilancia y el castigo de las almas condenadas dentro de ese mismo reino. Su nombre aparece mencionado de manera directa dentro del propio texto coránico, en la Sura Az-Zukhruf, donde se narra que los condenados, sufriendo el castigo eterno, claman directamente a Malik suplicándole que interceda ante Dios para que ponga fin a sus vidas y así terminar con su tormento, a lo que Malik responde con una severidad y una firmeza absolutas que "permanecerán allí para siempre", una respuesta que subraya de manera contundente la naturaleza definitiva e irrevocable del castigo infernal dentro de la escatología islámica.

A diferencia de figuras angelicales asociadas a funciones más benévolas o compasivas dentro de la tradición islámica, Malik se presenta consistentemente como una figura de una severidad implacable, cumpliendo su función administrativa sobre el castigo eterno sin la más mínima concesión emocional hacia las súplicas de quienes sufren bajo su custodia, un rasgo que refuerza directamente la seriedad absoluta con la que el islam presenta las consecuencias del juicio final y la importancia decisiva de la conducta moral y espiritual durante la vida terrenal como determinante único del destino eterno de cada alma. Su función guarda paralelismos evidentes con figuras equivalentes de otras tradiciones religiosas encargadas de administrar los reinos de castigo eterno, reflejando una preocupación teológica compartida entre distintas culturas religiosas sobre la necesidad de una autoridad clara y firme que administre la justicia divina en su forma más severa y definitiva.`,
    origen: 'Ángel guardián del Infierno mencionado directamente en el Corán.',
    dominio: 'La custodia y administración del castigo eterno', naturaleza: 'Ángel jefe del Infierno', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'ridwan', nombre: 'Ridwán', nombre_griego: 'Ridwan',
    epitetos: 'El Guardián del Paraíso',
    descripcion_corta: 'Dentro de la tradición islámica, el ángel encargado de custodiar las puertas del Paraíso, recibiendo con generosidad y alegría a las almas que han merecido entrar en él.',
    descripcion_larga: `Ridwán ocupa dentro de la tradición islámica el cargo directamente opuesto y complementario al de Malik, encargado específicamente de custodiar las puertas del Paraíso (Jannah) y de recibir con generosidad, respeto y considerable alegría a las almas que, tras el juicio final, han merecido finalmente el acceso a ese reino de recompensa eterna. Aunque, al igual que ocurre con Malik, su nombre exacto no aparece mencionado de manera explícita dentro del propio texto coránico, la tradición islámica posterior lo identifica consistentemente y de manera prácticamente universal como el guardián específico encargado de esa función, complementando así de manera simétrica y equilibrada la figura de Malik dentro de la estructura escatológica completa del islam.

Distintos relatos y descripciones tradicionales presentan a Ridwán dando la bienvenida a las almas justas con palabras de paz y felicitación genuina, abriendo personalmente las puertas del Paraíso ante ellas, y guiándolas hacia los distintos niveles y jardines que componen ese reino de recompensa eterna, descrito extensamente dentro del Corán con imágenes de ríos, frutos abundantes, sombra fresca y compañía placentera reservada específicamente para quienes han vivido conforme a los preceptos de la fe. La figura de Ridwán, aunque considerablemente menos desarrollada en detalle narrativo específico que la de otros grandes arcángeles como Jibril, Mikail o Israfil, cumple una función simbólica y teológica de enorme importancia dentro de la cosmovisión islámica, representando directamente la contraparte de esperanza, recompensa y bienvenida gozosa frente a la severidad implacable atribuida a Malik en su rol equivalente sobre el castigo eterno del Infierno.`,
    origen: 'Ángel guardián del Paraíso dentro de la tradición islámica.',
    dominio: 'La bienvenida a las almas justas en el Paraíso', naturaleza: 'Ángel jefe del Paraíso', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'munkar-y-nakir', nombre: 'Múnkar y Nakir', nombre_griego: 'Munkar wa Nakir',
    epitetos: 'Los Interrogadores de la Tumba',
    descripcion_corta: 'Dos ángeles de aspecto aterrador que, según la tradición islámica, visitan a cada persona recién fallecida dentro de su propia tumba para interrogarla sobre su fe.',
    descripcion_larga: `Múnkar y Nakir, cuyos nombres pueden traducirse aproximadamente como "el desconocido" o "el negado" y "el negador", son, según la tradición islámica desarrollada principalmente a través de hadices posteriores al propio texto coránico, dos ángeles encargados de visitar a cada persona recién fallecida dentro del breve periodo comprendido entre su propia muerte física y la resurrección final del juicio, un intervalo conocido como el barzaj. Según esta tradición, ambos ángeles descienden a la tumba de cada difunto, restaurando temporalmente cierta forma de conciencia en el cuerpo del fallecido para someterlo a un interrogatorio decisivo sobre los fundamentos centrales de su fe: quién es su Señor, cuál es su religión, y quién fue el mensajero enviado a guiarlo durante su vida.

Se les describe tradicionalmente con una apariencia deliberadamente aterradora —voces atronadoras, ojos como relámpagos, dientes de hierro— destinada a poner a prueba genuinamente la firmeza espiritual del difunto en un momento de vulnerabilidad extrema, aunque la tradición aclara que su temible apariencia responde únicamente a la naturaleza de la prueba misma y no a una malicia inherente hacia el fallecido. Aquellos que responden correctamente y con sinceridad genuina a las preguntas planteadas experimentan, según esta tradición, un anticipo de la paz y comodidad que les espera en el Paraíso incluso dentro de su propia tumba, mientras que quienes fallan en responder adecuadamente experimentan de manera anticipada un castigo doloroso también dentro de la tumba, un concepto conocido como "el castigo de la tumba" (adhab al-qabr), que ocupa un lugar significativo dentro de la escatología popular islámica pese a las variaciones considerables en su interpretación exacta entre distintas escuelas teológicas dentro de la tradición.`,
    origen: 'Dos ángeles interrogadores de la tumba dentro de la tradición islámica.',
    dominio: 'El interrogatorio de fe tras la muerte', naturaleza: 'Pareja de ángeles examinadores', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'harut-y-marut', nombre: 'Harut y Marut', nombre_griego: 'Harut wa Marut',
    epitetos: 'Los Ángeles Puestos a Prueba en Babilonia',
    descripcion_corta: 'Dos ángeles mencionados en el Corán que, enviados a la tierra en Babilonia para enseñar sobre la magia como advertencia, se convirtieron ellos mismos en objeto de tentación.',
    descripcion_larga: `Harut y Marut son dos ángeles mencionados directamente dentro del texto coránico, específicamente en la Sura Al-Baqarah, en un pasaje que ha generado considerable debate interpretativo a lo largo de los siglos entre comentaristas y estudiosos islámicos respecto al significado exacto y las circunstancias precisas de su historia. Según la interpretación más extendida de ese pasaje, ambos ángeles fueron enviados por Dios a la ciudad de Babilonia con el propósito específico de enseñar a la humanidad sobre la existencia y el funcionamiento de la magia y la hechicería, no con la intención de que la practicaran libremente, sino como una prueba deliberada destinada a poner a prueba la firmeza espiritual de quienes recibieran ese conocimiento, advirtiéndoles explícitamente, según narra el propio texto, de que ese conocimiento constituía en sí mismo una tentación y que no debían emplearlo de manera indebida bajo ningún concepto.

Distintas tradiciones interpretativas posteriores, desarrolladas particularmente a través de relatos extra-coránicos transmitidos entre generaciones de comentaristas islámicos, elaboraron considerablemente la historia original, sugiriendo en algunas versiones que los propios Harut y Marut, pese a su naturaleza angelical, se sintieron tentados por los placeres terrenales durante su misión en Babilonia, cometiendo ellos mismos transgresiones que los llevarían a enfrentar un castigo específico como consecuencia de su propia falla. La exégesis coránica más ortodoxa, sin embargo, tiende a interpretar el pasaje original de manera considerablemente más cautelosa, enfatizando principalmente su función como advertencia general sobre los peligros de la magia y la brujería antes que como una narrativa detallada sobre una supuesta caída angelical específica, un debate interpretativo que continúa activo hasta la actualidad entre distintos estudiosos y escuelas de pensamiento dentro de la tradición islámica.`,
    origen: 'Dos ángeles mencionados directamente en el Corán, enviados a Babilonia.',
    dominio: 'La advertencia sobre los peligros de la magia', naturaleza: 'Pareja de ángeles puestos a prueba', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'jofiel', nombre: 'Jofiel', nombre_griego: 'Jophiel',
    epitetos: 'La Belleza de Dios, Guardián del Árbol de la Vida',
    descripcion_corta: 'Ángel asociado a la sabiduría y la belleza dentro de la tradición cabalística, identificado en algunos textos como el querubín encargado de custodiar el Jardín del Edén tras la expulsión de Adán y Eva.',
    descripcion_larga: `Jofiel —cuyo nombre puede traducirse aproximadamente como "la belleza de Dios"— aparece documentado dentro de distintas fuentes de la tradición mística judía y cabalística posterior, generalmente asociado con la sabiduría, el entendimiento intelectual y, en particular, la belleza como cualidad genuinamente espiritual antes que meramente estética, reflejando la convicción de que la percepción de la belleza auténtica constituye en sí misma una forma valiosa de conocimiento espiritual capaz de acercar a quien la experimenta hacia una comprensión más profunda del orden divino del universo.

Algunas tradiciones específicas dentro de este corpus místico identifican a Jofiel con el querubín encargado, según el relato del Génesis, de custodiar la entrada al Jardín del Edén tras la expulsión de Adán y Eva, empuñando una espada de fuego que giraba en todas direcciones para impedir cualquier posibilidad de regreso al paraíso original, una función que combina de manera particular la belleza atribuida a su propio nombre con la severidad necesaria para cumplir cabalmente su responsabilidad como guardián inflexible de un límite establecido directamente por Dios. Se le asocia también, dentro de ciertas corrientes esotéricas modernas que retoman y reinterpretan libremente elementos de la tradición angelical más antigua, con la protección específica de artistas, escritores y cualquier persona dedicada profesionalmente a la creación de belleza, aunque esta asociación particular corresponde principalmente a desarrollos considerablemente más recientes dentro del ocultismo y la espiritualidad contemporánea, más que a fuentes documentadas dentro de la tradición cabalística clásica original.`,
    origen: 'Ángel de la sabiduría y la belleza dentro de la tradición cabalística.',
    dominio: 'La sabiduría, la belleza espiritual y la custodia del Edén', naturaleza: 'Ángel de la sabiduría estética', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'chamuel', nombre: 'Chamuel', nombre_griego: 'Chamuel',
    epitetos: 'Aquel que Busca a Dios, Ángel del Amor',
    descripcion_corta: 'Uno de los siete arcángeles tradicionales de la cristiandad occidental, asociado al amor, la reconciliación y la búsqueda genuina de la presencia divina en tiempos de dificultad.',
    descripcion_larga: `Chamuel —cuyo nombre puede interpretarse como "aquel que busca a Dios" o "el que ve a Dios"— se cuenta tradicionalmente entre los siete arcángeles principales reconocidos por diversas fuentes de la cristiandad occidental medieval, aunque, al igual que ocurre con varios otros ángeles de esta lista, su presencia exacta y su posición específica varía considerablemente según la fuente consultada y el periodo histórico particular, reflejando la falta de un consenso completamente unificado sobre la composición definitiva del grupo de siete arcángeles principales a lo largo de la historia de la tradición cristiana.

Se le atribuye tradicionalmente una asociación estrecha con el amor en su forma más amplia —tanto el amor romántico entre personas como el amor familiar, la amistad genuina y, de manera particularmente significativa, el amor y la búsqueda activa de la presencia divina misma—, así como una función relacionada con la reconciliación de conflictos y la sanación de relaciones dañadas o rotas. Algunas tradiciones, aunque de origen y respaldo histórico considerablemente más débil que el de figuras como Miguel o Gabriel, le atribuyen incluso haber sido el ángel que fortaleció a Jesús durante su agonía en el Huerto de Getsemaní, un episodio narrado en el Evangelio de Lucas que menciona la aparición de un ángel sin especificar su identidad concreta, atribución que distintas tradiciones posteriores han intentado completar asignándole diversos nombres específicos, entre ellos el de Chamuel, sin que exista un consenso teológico definitivo al respecto entre las distintas denominaciones cristianas.`,
    origen: 'Uno de los siete arcángeles tradicionales de la cristiandad occidental.',
    dominio: 'El amor, la reconciliación y la búsqueda de la presencia divina', naturaleza: 'Arcángel del amor', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'angelologia'");
  if (filas.length === 0) throw new Error('No existe el libro "angelologia" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando primordiales y grandes arcangeles de Angelologia (parte 1)...\n');
  const libroId = await obtenerLibroId();

  for (const p of PERSONAJES) {
    const [existente] = await pool.query('SELECT id FROM personajes WHERE slug = ?', [p.slug]);
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
