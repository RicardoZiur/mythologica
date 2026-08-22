// ============================================================
// scripts/sembrar-personajes-demonologia-parte2.js
// ------------------------------------------------------------
// Segundo lote de Demonologia: 10 heroes (reyes, sacerdotes y
// estudiosos historicos/legendarios que ataron, catalogaron o
// enfrentaron demonios) y 12 monstruos (demonios menores de los
// grandes grimorios y criaturas demoniacas del folclore mundial).
// Contenido completo desde el inicio. Idempotente via
// slug+libro_id -- IMPORTANTE: personajes.slug es UNICO A NIVEL
// GLOBAL (no solo por libro), verificar contra toda la tabla
// antes de correr si se agregan mas nombres.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-demonologia-parte2.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- HEROES ---
  {
    tipo: 'heroe', slug: 'solomon', nombre: 'El Rey Salomón', nombre_griego: 'Solomon',
    epitetos: 'El Rey que Ató a los Setenta y Dos Espíritus',
    descripcion_corta: 'Rey bíblico de sabiduría legendaria a quien la tradición posterior atribuyó el poder de atrapar a setenta y dos demonios en un vaso de bronce sellado con su propio anillo mágico.',
    descripcion_larga: `El rey Salomón, hijo de David, es recordado en el texto bíblico principalmente por su sabiduría legendaria, su prosperidad extraordinaria y la construcción del primer gran Templo de Jerusalén, sin que los textos canónicos le atribuyan de manera directa ningún poder específico sobre el mundo demoníaco. Fue durante los siglos posteriores, especialmente a partir de tradiciones judías del periodo del Segundo Templo y consolidadas más tarde en textos como el "Testamento de Salomón" —un texto pseudoepigráfico probablemente compuesto entre los siglos I y III de nuestra era—, donde se desarrolló la leyenda que asociaría para siempre su nombre con el dominio sobre los espíritus infernales.

Según esa tradición, Dios le habría concedido a Salomón un anillo mágico grabado con un sello especial (el llamado Sello de Salomón, frecuentemente representado como una estrella de cinco o seis puntas), capaz de otorgarle autoridad y poder de mando sobre cualquier demonio que se atreviera a desafiarlo. El "Testamento de Salomón" narra cómo el rey empleó ese anillo para capturar y atar, uno tras otro, a setenta y dos espíritus demoníacos distintos, obligándolos a colaborar en la construcción del propio Templo de Jerusalén antes de encerrarlos definitivamente dentro de un vaso de bronce, que habría sido arrojado después a un lago profundo para impedir su liberación. Esta tradición sirvió como base directa para la estructura de la Ars Goetia, el más célebre de los grimorios de magia ceremonial renacentista, cuya lista completa de setenta y dos demonios catalogados —Bael, Paimon, Asmodeo y muchos otros— se presenta explícitamente como derivada de aquellos mismos espíritus que, según la leyenda, el propio Salomón había sometido siglos antes bajo el poder de su anillo mágico.`,
    origen: 'Rey bíblico, hijo de David, cuya sabiduría legendaria se transformó en tradición de dominio sobre los demonios.',
    dominio: 'El dominio ritual sobre los espíritus demoníacos', naturaleza: 'Rey sabio, legendario domador de demonios', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'fausto', nombre: 'Fausto', nombre_griego: 'Faust',
    epitetos: 'El Erudito que Firmó con Sangre',
    descripcion_corta: 'Erudito legendario, basado en un personaje histórico real, que vendió su alma a Mefistófeles a cambio de conocimiento y poder ilimitados durante veinticuatro años.',
    descripcion_larga: `Fausto tiene su origen en Johann Georg Faust, un erudito, alquimista y supuesto mago itinerante que vivió realmente en el territorio alemán durante las primeras décadas del siglo XVI, cuya reputación de conocimientos ocultos y poderes mágicos, ya considerable en vida según diversos testimonios contemporáneos, se convirtió con el tiempo en el núcleo de una tradición legendaria mucho más elaborada que trascendió por completo cualquier biografía histórica verificable. Apenas unas décadas después de su muerte, comenzaron a circular en Alemania relatos populares que narraban cómo Fausto habría hecho un pacto directo con el demonio, generalmente identificado bajo el nombre de Mefistófeles, intercambiando su propia alma a cambio de veinticuatro años de conocimiento ilimitado, poder mágico y placeres sin restricción alguna.

La primera compilación impresa conocida de estas leyendas, el llamado "Faustbuch" (Libro de Fausto), se publicó en 1587, y sirvió como base directa para la célebre obra teatral "La trágica historia del doctor Fausto" del dramaturgo inglés Christopher Marlowe, estrenada apenas unos años después. Sin embargo, fue la versión posterior del poeta y dramaturgo alemán Johann Wolfgang von Goethe, publicada en dos partes entre 1808 y 1832, la que consolidó definitivamente la versión más influyente y filosóficamente compleja del mito, presentando a Fausto no simplemente como un pecador condenado por su propia codicia de conocimiento, sino como una figura trágica y profundamente humana cuya búsqueda incesante de sentido, pese al pacto con Mefistófeles, termina finalmente redimida en el desenlace de la obra. El nombre "Fausto" se ha convertido desde entonces en sinónimo universal, dentro de la cultura occidental, de cualquier pacto que intercambie principios morales fundamentales por poder, conocimiento o beneficio material inmediato.`,
    origen: 'Basado en Johann Georg Faust, erudito y alquimista alemán histórico del siglo XVI.',
    dominio: 'El pacto demoníaco y la búsqueda de conocimiento prohibido', naturaleza: 'Erudito legendario, protagonista del pacto fáustico', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'johann-weyer', nombre: 'Johann Weyer', nombre_griego: 'Johann Weyer',
    epitetos: 'El Médico que Catalogó a los Demonios',
    descripcion_corta: 'Médico holandés del siglo XVI que compiló el primer gran catálogo sistemático de demonios en su Pseudomonarchia Daemonum, y argumentó que las acusadas de brujería estaban enfermas, no poseídas.',
    descripcion_larga: `Johann Weyer, médico holandés formado bajo la tutela del célebre ocultista y erudito Heinrich Cornelius Agrippa, ocupa un lugar singular y considerablemente adelantado a su época dentro de la historia de la demonología europea: en 1563 publicó su obra más influyente, "De praestigiis daemonum" ("Sobre las ilusiones de los demonios"), que incluía como apéndice la "Pseudomonarchia Daemonum", un catálogo sistemático de sesenta y nueve demonios distintos con sus respectivos rangos jerárquicos, poderes atribuidos y las legiones de espíritus subordinados que cada uno comandaba, un trabajo que sirvió como base directa e insustituible para la posterior Ars Goetia y su lista final de setenta y dos espíritus.

Pese a haber compilado ese catálogo detallado del mundo demoníaco, Weyer adoptó dentro de su obra principal una postura notablemente escéptica y adelantada a su tiempo respecto a la caza de brujas que asolaba Europa durante esos mismos años: argumentó de manera sostenida que la inmensa mayoría de las mujeres acusadas de brujería y de mantener pactos directos con demonios no eran en realidad agentes conscientes del mal, sino víctimas de enfermedades mentales, melancolía severa o engaños provocados directamente por la propia manipulación demoníaca sobre mentes vulnerables, y que por lo tanto merecían tratamiento médico compasivo en lugar de tortura y ejecución. Esta postura, considerablemente moderada para los estándares de su época, le valió tanto reconocimiento posterior como historiador pionero de la psiquiatría, como críticas contemporáneas de teólogos e inquisidores que consideraban su escepticismo peligrosamente indulgente hacia el mal genuino que, según ellos, representaba efectivamente la brujería practicada.`,
    origen: 'Médico holandés del siglo XVI, discípulo de Heinrich Cornelius Agrippa.',
    dominio: 'La catalogación erudita de los demonios y la defensa médica de las acusadas', naturaleza: 'Médico y demonólogo histórico', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'girolamo-menghi', nombre: 'Girolamo Menghi', nombre_griego: 'Girolamo Menghi',
    epitetos: 'El Fraile Exorcista',
    descripcion_corta: 'Fraile franciscano italiano del siglo XVI cuyo manual práctico de exorcismo, el Flagellum Daemonum, se convirtió en referencia estándar para generaciones de sacerdotes exorcistas.',
    descripcion_larga: `Girolamo Menghi, fraile franciscano italiano activo durante la segunda mitad del siglo XVI, se dedicó a lo largo de buena parte de su vida religiosa a la práctica activa del exorcismo, ejerciendo directamente ese ministerio en numerosos casos documentados de supuesta posesión demoníaca dentro del territorio italiano, y consolidando a partir de esa experiencia práctica considerable una autoridad reconocida sobre la materia dentro de los círculos eclesiásticos de su época. Su obra más influyente y perdurable, el "Flagellum Daemonum" ("Azote de los Demonios"), publicada originalmente en 1577 y ampliada en ediciones posteriores, se convirtió rápidamente en uno de los manuales prácticos de exorcismo más consultados y reproducidos de toda la Europa católica durante los siglos siguientes.

A diferencia de otros textos demonológicos de la época centrados principalmente en la identificación, el juicio y el castigo de presuntas brujas y hechiceros, la obra de Menghi se orientaba de manera muy específica hacia el procedimiento práctico y ritual del exorcismo mismo: proporcionaba fórmulas latinas detalladas, oraciones específicas, instrucciones sobre los objetos y sustancias sagradas necesarias, y consejos concretos sobre cómo interrogar y distinguir a un demonio genuinamente presente dentro de una persona poseída frente a otras posibles causas naturales de comportamiento inusual, un enfoque relativamente sistemático que influyó de manera notable en el desarrollo posterior del Rituale Romanum oficial de la Iglesia Católica, publicado en 1614, que estandarizaría definitivamente el procedimiento formal del exorcismo católico durante los siglos siguientes hasta prácticamente la actualidad.`,
    origen: 'Fraile franciscano italiano del siglo XVI, exorcista practicante.',
    dominio: 'La práctica ritual del exorcismo', naturaleza: 'Fraile exorcista y autor histórico', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'leon-xiii', nombre: 'El Papa León XIII', nombre_griego: 'Leo XIII',
    epitetos: 'El Papa de la Visión y la Oración a San Miguel',
    descripcion_corta: 'Pontífice del siglo XIX que, tras una visión perturbadora, compuso la célebre Oración a San Miguel Arcángel, ordenando su recitación en toda la Iglesia Católica tras la misa.',
    descripcion_larga: `El Papa León XIII, cuyo pontificado se extendió entre 1878 y 1903, ocupa un lugar singular dentro de la historia moderna de la lucha simbólica de la Iglesia Católica contra las fuerzas del mal gracias a un episodio ampliamente narrado, aunque de autenticidad histórica debatida por algunos historiadores eclesiásticos, ocurrido en 1884: según la tradición, el propio Papa habría experimentado una visión o experiencia perturbadora durante la cual escuchó una conversación entre Dios y Satán, en la que este último solicitaba un periodo de tiempo mayor y un poder ampliado para intentar destruir a la Iglesia, una petición que, según el relato, le fue concedida bajo ciertas condiciones específicas.

Profundamente afectado por esa experiencia, León XIII compuso poco después la célebre "Oración a San Miguel Arcángel", una plegaria que invoca directamente la protección del arcángel guerrero contra "las asechanzas y maldades del demonio", solicitando específicamente que Dios "arroje al infierno a Satanás y a los demás espíritus malignos que vagan por el mundo para la perdición de las almas". El propio Papa ordenó que esta oración se recitara obligatoriamente después de cada misa rezada en toda la Iglesia Católica, una práctica que se mantuvo de manera generalizada hasta la reforma litúrgica posterior al Concilio Vaticano II en la década de 1960, cuando la recitación obligatoria fue suprimida del rito ordinario, aunque la oración misma continuó circulando ampliamente y experimentó un notable resurgimiento de popularidad entre comunidades católicas tradicionalistas durante las décadas posteriores, e incluso recibió respaldo renovado de pontífices posteriores como recurso espiritual recomendado frente a las fuerzas del mal.`,
    origen: 'Pontífice católico entre 1878 y 1903, autor de la Oración a San Miguel Arcángel.',
    dominio: 'La oración protectora contra las fuerzas demoníacas', naturaleza: 'Pontífice histórico y autor de plegarias de protección', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'honorius-de-tebas', nombre: 'Honorio de Tebas', nombre_griego: 'Honorius',
    epitetos: 'El Papa Legendario Autor del Gran Grimorio',
    descripcion_corta: 'Figura semi-legendaria a la que se atribuyó falsamente la autoría de El Grimorio del Papa Honorio, un manual de magia ceremonial destinado, según su propio texto, a sacerdotes.',
    descripcion_larga: `Honorio de Tebas es el nombre atribuido al supuesto autor de "El Grimorio del Papa Honorio", un influyente y controvertido texto de magia ceremonial impreso por primera vez a comienzos del siglo XVIII, aunque probablemente basado en manuscritos manuscritos más antiguos que circulaban desde varios siglos antes dentro de círculos herméticos y ocultistas europeos. El propio grimorio afirma dentro de su texto haber sido compuesto originalmente por un Papa llamado Honorio, presentándose como una autoridad eclesiástica legítima que habría compilado esas fórmulas mágicas específicamente para uso restringido del clero, una afirmación que la inmensa mayoría de los historiadores modernos considera una atribución completamente ficticia, dado que ningún Papa histórico documentado llevó ese nombre durante el periodo relevante, aunque sí existieron tres pontífices reales llamados Honorio en siglos anteriores, cuyos nombres probablemente sirvieron de inspiración vaga para la atribución legendaria posterior.

El contenido del grimorio, marcadamente distinto de otros textos de magia ceremonial de la época centrados en la invocación de demonios con fines de conocimiento o poder personal, se presentaba explícitamente orientado hacia el exorcismo y el dominio eclesiástico legítimo sobre las fuerzas infernales, incorporando abundantes referencias a la misa católica, oraciones litúrgicas genuinas y una estructura ritual que imitaba deliberadamente el formato de un texto religioso oficial, una estrategia que le otorgó una autoridad simbólica considerable entre practicantes de la magia ceremonial de los siglos siguientes, pese a las repetidas condenas explícitas que la propia Iglesia Católica emitió contra el texto, negando categóricamente cualquier vínculo legítimo con su autoridad institucional real.`,
    origen: 'Autor atribuido, probablemente ficticio, de un influyente grimorio de magia ceremonial del siglo XVIII.',
    dominio: 'La magia ceremonial eclesiástica atribuida', naturaleza: 'Figura semi-legendaria, supuesto autor de grimorio', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'eliphas-levi', nombre: 'Éliphas Lévi', nombre_griego: 'Éliphas Lévi',
    epitetos: 'El Padre del Ocultismo Moderno',
    descripcion_corta: 'Ocultista francés del siglo XIX que reinterpretó y sistematizó buena parte de la tradición mágica occidental, creando además la imagen visual moderna de Baphomet.',
    descripcion_larga: `Éliphas Lévi, nombre adoptado por el francés Alphonse Louis Constant tras abandonar sus estudios eclesiásticos iniciales, se convirtió durante la segunda mitad del siglo XIX en una de las figuras más influyentes de todo el resurgimiento moderno del ocultismo occidental, publicando obras fundamentales como "Dogme et Rituel de la Haute Magie" (1856), en las que buscó sistematizar y reinterpretar de manera coherente una amplia variedad de tradiciones mágicas, cabalísticas y herméticas dispersas a lo largo de siglos anteriores, presentándolas dentro de un marco filosófico unificado que ejercería una influencia decisiva sobre prácticamente todo el desarrollo posterior del ocultismo occidental durante los siglos XIX y XX.

Es precisamente dentro de esa obra fundamental donde Lévi creó, en 1856, la imagen visual de Baphomet que se ha convertido desde entonces en la representación universalmente reconocida de esa figura: una entidad con cabeza de cabra, cuerpo humano, alas de murciélago y un pentagrama sobre la frente, diseñada deliberadamente por el propio Lévi como un símbolo filosófico complejo del equilibrio entre opuestos —lo masculino y lo femenino, el bien y el mal, la materia y el espíritu— más que como la representación de una entidad demoníaca destinada a inspirar temor genuino. Lévi insistía repetidamente en sus escritos en que la verdadera magia no consistía en la invocación literal de demonios ni en pactos sobrenaturales reales, sino en el dominio disciplinado de la propia voluntad humana y la comprensión simbólica profunda de las fuerzas universales, una perspectiva considerablemente más filosófica y psicológica que la de buena parte de la tradición de grimorios anteriores, y que influiría de manera decisiva en figuras posteriores del ocultismo como Aleister Crowley y en el desarrollo mismo de organizaciones esotéricas modernas como la Orden Hermética del Alba Dorada.`,
    origen: 'Ocultista francés del siglo XIX, nombre adoptado por Alphonse Louis Constant.',
    dominio: 'La sistematización filosófica del ocultismo occidental', naturaleza: 'Ocultista histórico, creador de la imagen de Baphomet', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'san-ciriaco', nombre: 'San Ciriaco', nombre_griego: 'Cyriacus',
    epitetos: 'El Patrón Invocado contra la Posesión',
    descripcion_corta: 'Diácono romano del siglo IV, venerado como uno de los Catorce Santos Auxiliadores, invocado tradicionalmente para la protección contra la posesión y la tentación demoníaca.',
    descripcion_larga: `San Ciriaco, diácono romano martirizado según la tradición cristiana durante las persecuciones del emperador Diocleciano a comienzos del siglo IV, ocupa un lugar particular dentro de la piedad popular europea medieval y posterior como uno de los llamados Catorce Santos Auxiliadores, un grupo de santos venerados de manera especial por su intercesión eficaz contra dolencias y peligros específicos, atribuyéndose a San Ciriaco de manera particular la protección contra la posesión demoníaca y las tentaciones diabólicas más severas, un patronazgo que según la hagiografía tradicional se remonta a un episodio específico de su propia vida: se le atribuye haber exorcizado exitosamente a la hija del propio emperador Diocleciano, liberándola de un espíritu maligno que la atormentaba.

La devoción a San Ciriaco y al conjunto de los Catorce Santos Auxiliadores alcanzó su mayor difusión durante la Baja Edad Media, especialmente en el territorio de habla alemana, en un contexto marcado por epidemias recurrentes, guerras y una ansiedad religiosa generalizada respecto a la presencia activa del mal en el mundo cotidiano, factores que impulsaron a las comunidades a buscar protectores celestiales específicos y especializados para cada tipo particular de amenaza que enfrentaban. Pese a que la investigación histórica moderna considera que los detalles biográficos concretos atribuidos a San Ciriaco descansan sobre bases documentales relativamente escasas y en gran medida legendarias, su culto se mantuvo extraordinariamente vivo durante siglos, y su nombre sigue apareciendo hasta la actualidad en oraciones y letanías tradicionales católicas específicamente dirigidas a solicitar protección contra la influencia demoníaca.`,
    origen: 'Diácono romano martirizado durante las persecuciones de Diocleciano, siglo IV.',
    dominio: 'La protección contra la posesión demoníaca', naturaleza: 'Santo mártir, patrón contra la posesión', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'jaime-vi-i', nombre: 'Jacobo VI y I', nombre_griego: 'James VI and I',
    epitetos: 'El Rey que Escribió el Tratado sobre la Demonología',
    descripcion_corta: 'Rey de Escocia e Inglaterra que, tras presidir personalmente juicios por brujería, escribió Daemonologie, un tratado influyente sobre la realidad y los peligros de la magia negra.',
    descripcion_larga: `Jacobo VI de Escocia, más tarde también Jacobo I de Inglaterra, desarrolló un interés personal e intenso en la demonología y la brujería a raíz de los llamados Juicios de Brujas de North Berwick, un proceso judicial de finales del siglo XVI en el que numerosas personas fueron acusadas de haber conspirado mediante magia negra para provocar tormentas destinadas a hundir el barco en el que el propio rey regresaba de Dinamarca junto a su nueva esposa. Convencido de la realidad genuina de esa conspiración sobrenatural contra su propia vida, Jacobo participó personalmente en el interrogatorio de varias de las acusadas, y a partir de esa experiencia directa desarrolló un conocimiento y un interés académico considerable sobre toda la materia demonológica.

En 1597, Jacobo publicó "Daemonologie", un tratado estructurado en forma de diálogo filosófico que defendía con firmeza la realidad objetiva de la brujería, la magia negra y el pacto demoníaco, argumentando en contra de posturas más escépticas como la de Reginald Scot, y abogando explícitamente por el castigo severo de quienes practicaran esas artes prohibidas, una postura que influiría de manera directa en la legislación británica posterior contra la brujería. El propio texto de Jacobo sirvió también como fuente reconocida de inspiración para William Shakespeare en la composición de "Macbeth", cuyas célebres brujas reflejan directamente buena parte de las creencias sobre la hechicería que el propio rey había plasmado en su tratado. Pese a la severidad de sus posturas iniciales, algunos historiadores señalan que Jacobo se volvió considerablemente más escéptico respecto a acusaciones individuales concretas de brujería durante los años posteriores de su reinado, tras descubrir personalmente varios casos de fraude y falso testimonio entre acusadores.`,
    origen: 'Rey de Escocia e Inglaterra, autor del tratado Daemonologie (1597).',
    dominio: 'El tratado erudito sobre la brujería y la magia negra', naturaleza: 'Monarca histórico y demonólogo', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'miguel-psellos', nombre: 'Miguel Pselo', nombre_griego: 'Michael Psellos',
    epitetos: 'El Erudito Bizantino de los Demonios',
    descripcion_corta: 'Polímata bizantino del siglo XI cuyo tratado sobre la operación de los demonios sistematizó la clasificación de espíritus malignos según los elementos que habitaban.',
    descripcion_larga: `Miguel Pselo, uno de los eruditos más destacados y prolíficos del Imperio bizantino durante el siglo XI, activo como filósofo, historiador, teólogo y asesor de varios emperadores sucesivos en la corte de Constantinopla, dedicó también parte de su extensa obra intelectual a la sistematización del conocimiento demonológico de su época, plasmada principalmente en su tratado "De Operatione Daemonum" ("Sobre la operación de los demonios"), redactado en forma de diálogo filosófico entre dos interlocutores que discuten la naturaleza, las capacidades y la clasificación de los espíritus malignos según la tradición cristiana bizantina.

En ese tratado, Pselo desarrolló un sistema de clasificación de los demonios considerablemente influyente para la tradición posterior, organizándolos según su asociación con los distintos elementos y regiones del cosmos: demonios ígneos que habitaban cerca del cielo, demonios aéreos que vagaban por la atmósfera cercana a la tierra, demonios terrestres, acuáticos, subterráneos, y finalmente los demonios "lucífugos", que evitaban por completo cualquier forma de luz, cada categoría con propiedades y comportamientos característicos propios de su elemento asociado. Esta clasificación sistemática, considerablemente más elaborada y filosóficamente rigurosa que buena parte de la demonología popular contemporánea a su época, ejerció una influencia notable sobre demonólogos occidentales posteriores durante el Renacimiento, que tuvieron acceso a su obra a través de traducciones latinas, incorporando su marco clasificatorio elemental dentro de sistemas demonológicos europeos considerablemente posteriores a su propia época bizantina original.`,
    origen: 'Polímata bizantino del siglo XI, autor del tratado De Operatione Daemonum.',
    dominio: 'La clasificación filosófica y elemental de los demonios', naturaleza: 'Erudito bizantino histórico', es_preview: 0
  },

  // --- MONSTRUOS ---
  {
    tipo: 'monstruo', slug: 'incubo', nombre: 'Íncubo', nombre_griego: 'Incubus',
    epitetos: 'El Demonio que Visita a las Mujeres Dormidas',
    descripcion_corta: 'Demonio masculino de la tradición medieval europea que atormenta y seduce a mujeres dormidas, empleado durante siglos como explicación sobrenatural para embarazos inexplicados.',
    descripcion_larga: `El íncubo (del latín incubare, "acostarse sobre") es una figura demoníaca ampliamente documentada dentro del folclore y la demonología medieval europea, descrita como un espíritu masculino que visita a mujeres durante el sueño con el propósito específico de mantener relaciones sexuales con ellas, generalmente sin su consentimiento consciente, provocando según la creencia popular una sensación de peso opresivo sobre el pecho y una parálisis corporal característica que la medicina moderna reconoce hoy como parálisis del sueño, un fenómeno neurológico real cuya experiencia subjetiva —incapacidad de moverse acompañada de una sensación de presencia amenazante— coincide de manera notable con las descripciones tradicionales del ataque de un íncubo.

Durante buena parte de la Edad Media y el Renacimiento, la creencia en los íncubos sirvió también como explicación sobrenatural conveniente para embarazos que resultaban socialmente inexplicables o inaceptables dentro de las normas morales de la época, permitiendo a mujeres solteras o viudas atribuir su condición a un ataque demoníaco involuntario en lugar de a una relación humana que podría acarrear consecuencias sociales considerablemente más severas. El influyente tratado inquisitorial "Malleus Maleficarum" (1487), uno de los manuales de caza de brujas más citados de toda la historia europea, dedica una atención considerable a discutir la naturaleza teológica exacta de los íncubos y su capacidad, según algunos teólogos de la época, de recolectar semen humano bajo su forma de súcubo femenina para transferirlo posteriormente bajo su forma de íncubo masculino, una explicación elaborada destinada a resolver el complejo problema teológico de cómo un ser puramente espiritual podía llegar a engendrar descendencia física con seres humanos mortales.`,
    origen: 'Demonio masculino de la tradición medieval europea.',
    dominio: 'La seducción nocturna y la parálisis del sueño', naturaleza: 'Demonio íncubo masculino', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'sucubo', nombre: 'Súcubo', nombre_griego: 'Succubus',
    epitetos: 'La Demonia que Visita a los Hombres Dormidos',
    descripcion_corta: 'Contraparte femenina del íncubo, demonio que seduce a hombres durante el sueño, frecuentemente identificada con Lilith o presentada como su forma más común de manifestación.',
    descripcion_larga: `El súcubo (del latín succubare, "acostarse debajo") es la contraparte femenina directa del íncubo dentro de la tradición demonológica medieval europea, descrito como un demonio que adopta la apariencia de una mujer seductora de gran belleza para visitar y mantener relaciones sexuales con hombres durante el sueño, drenando en el proceso, según distintas versiones de la tradición, su energía vital o incluso su fuerza vital de manera más literal y peligrosa. Su figura se encuentra estrechamente entrelazada con la de Lilith dentro de buena parte de la tradición judía y cabalística, que la presenta con frecuencia como la reina y prototipo original de todos los súcubos posteriores, y también con Naamah, ambas asociadas de manera similar a la tentación nocturna masculina y la generación de descendencia demoníaca a partir de esos encuentros.

Los teólogos medievales debatieron extensamente la naturaleza exacta de estas entidades, particularmente la cuestión teológica compleja de cómo un espíritu puro sin cuerpo material propio podía ejercer una influencia física tan directa sobre seres humanos mortales; la explicación más extendida, desarrollada especialmente dentro del "Malleus Maleficarum", proponía que un mismo demonio podía adoptar alternativamente la forma de súcubo para recolectar semen de un hombre dormido, transformándose después en íncubo para transferir ese mismo material a una mujer distinta, resolviendo así el problema de la reproducción demoníaca sin necesidad de atribuir capacidades creadoras genuinas a entidades consideradas fundamentalmente estériles por su propia naturaleza espiritual. La figura del súcubo ha permanecido extraordinariamente vigente dentro de la cultura popular contemporánea, apareciendo con frecuencia en videojuegos, cómics y literatura fantástica moderna como arquetipo reconocible de la seducción peligrosa.`,
    origen: 'Contraparte femenina del íncubo, entrelazada con Lilith y Naamah.',
    dominio: 'La seducción nocturna y el drenaje vital', naturaleza: 'Demonio súcubo femenino', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'furfur', nombre: 'Furfur', nombre_griego: 'Furfur',
    epitetos: 'El Conde de las Tormentas y el Amor Verdadero',
    descripcion_corta: 'Conde de la Ars Goetia con forma de ciervo alado y cola de fuego, capaz de invocar tormentas y truenos, y de revelar los secretos divinos y humanos con voz áspera.',
    descripcion_larga: `Furfur ocupa una posición notable entre los grandes condes catalogados en la Ars Goetia, descrito según ese influyente grimorio renacentista con la apariencia de un ciervo alado con una cola en llamas, una imagen visual particularmente distintiva dentro del amplio bestiario de los setenta y dos espíritus. Según el texto, Furfur se niega inicialmente a hablar con la verdad a menos que sea obligado a entrar dentro de un triángulo mágico específico durante el ritual de invocación, un requisito ritual particular que lo distingue de otros espíritus más directamente cooperativos dentro del mismo catálogo, sugiriendo una naturaleza especialmente evasiva o propensa al engaño si no se le somete correctamente a las restricciones rituales apropiadas.

Una vez invocado y correctamente contenido dentro del triángulo ritual, Furfur revelaba con su voz áspera y ronca secretos tanto divinos como humanos que de otro modo permanecerían ocultos al conocimiento mortal, y poseía además la capacidad de provocar amor genuino entre un hombre y una mujer, convirtiéndolo en un espíritu especialmente solicitado por quienes buscaban asistencia mágica en asuntos románticos durante la práctica de la magia ceremonial renacentista. Se le atribuía también un poder considerable sobre los elementos atmosféricos, capaz de generar relámpagos, truenos y tormentas violentas con relativa facilidad cuando así se lo ordenaba su invocador. Dentro de la jerarquía infernal descrita por la Ars Goetia, Furfur aparece gobernando sobre veintiséis legiones de espíritus subordinados, ocupando el rango de conde dentro de la estructura nobiliaria que este grimorio en particular aplicaba sistemáticamente a la organización jerárquica completa del infierno.`,
    origen: 'Espíritu catalogado en la Ars Goetia, la Clavícula de Salomón.',
    dominio: 'Las tormentas, el amor y la revelación de secretos', naturaleza: 'Conde infernal de la Ars Goetia', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'andras', nombre: 'Andras', nombre_griego: 'Andras',
    epitetos: 'El Marqués de la Discordia',
    descripcion_corta: 'Marqués de la Ars Goetia con cabeza de búho sobre cuerpo de ángel oscuro, montado sobre un lobo negro, sembrador deliberado de discordia mortal entre quienes lo invocan sin cuidado.',
    descripcion_larga: `Andras aparece descrito en la Ars Goetia con una apariencia particularmente inquietante incluso entre el amplio catálogo de figuras híbridas que componen esa tradición demonológica: cabeza de búho sobre un cuerpo de forma angélica oscura, empuñando una espada afilada y brillante, montado sobre la grupa de un feroz lobo negro. A diferencia de numerosos otros espíritus catalogados en el mismo grimorio, cuyas funciones se orientan hacia el conocimiento, la seducción o la revelación de secretos, Andras es descrito de manera explícita como un demonio particularmente peligroso y propenso a sembrar discordia y disputas violentas, capaz de provocar conflictos tan intensos entre las personas que estos podían culminar, según advierte el propio texto, en muerte violenta.

Los grimorios advierten con especial insistencia sobre el peligro directo que representaba invocar a Andras sin la preparación ritual y la protección adecuadas, señalando que este demonio en particular podía volverse fácilmente contra el propio invocador si este cometía algún error durante el ritual o mostraba cualquier signo de debilidad o falta de control durante la ceremonia de invocación, un riesgo considerablemente mayor que el atribuido a la mayoría de los demás espíritus del catálogo, que se presentan generalmente como más cooperativos siempre que se respetaran correctamente los protocolos rituales establecidos. Dentro de la jerarquía infernal de la Ars Goetia, Andras ocupa el rango de marqués, gobernando sobre treinta legiones de espíritus subordinados, y su asociación consistente con la discordia y el conflicto interpersonal violento lo convirtió en uno de los espíritus más temidos y menos solicitados voluntariamente entre los practicantes de la magia ceremonial renacentista, reservado generalmente para propósitos maliciosos deliberados contra enemigos específicos.`,
    origen: 'Espíritu catalogado en la Ars Goetia, la Clavícula de Salomón.',
    dominio: 'La discordia violenta y el conflicto mortal', naturaleza: 'Marqués infernal de la Ars Goetia', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'vassago', nombre: 'Vassago', nombre_griego: 'Vassago',
    epitetos: 'El Príncipe de Naturaleza Benévola',
    descripcion_corta: 'Uno de los pocos espíritus de la Ars Goetia descrito explícitamente como de naturaleza buena, capaz de revelar cosas pasadas y futuras y localizar objetos perdidos.',
    descripcion_larga: `Vassago ocupa un lugar singular dentro del catálogo completo de la Ars Goetia por ser explícitamente descrito, a diferencia de la inmensa mayoría de los demás espíritus listados en ese grimorio, como poseedor de una naturaleza fundamentalmente buena, en marcado contraste con la caracterización habitualmente amenazante o directamente maligna que el texto atribuye a la generalidad de los setenta y dos demonios catalogados. Esta descripción particular ha generado considerable debate y comentario entre estudiosos de la tradición grimórica moderna, dado que el propio grimorio, pese a esa afirmación explícita de benevolencia, sigue clasificándolo dentro de la misma jerarquía infernal aplicada al resto de las entidades, sin ofrecer una explicación teológica clara sobre cómo un espíritu genuinamente bueno podía ocupar un rango dentro de esa misma estructura demoníaca.

Se le atribuye la capacidad de revelar tanto acontecimientos pasados como futuros, así como de localizar objetos perdidos o extraviados, convirtiéndolo en un espíritu especialmente solicitado por quienes buscaban asistencia en cuestiones de adivinación y recuperación de bienes desaparecidos durante la práctica de la magia ceremonial renacentista. Dentro de la jerarquía infernal descrita por la Ars Goetia, Vassago ocupa el rango de príncipe, gobernando sobre veintiséis legiones de espíritus subordinados, un rango relativamente elevado dentro de la estructura general del catálogo pese a su caracterización inusualmente benévola. Algunos comentaristas modernos de la tradición grimórica han sugerido que esta descripción particular podría reflejar la incorporación, dentro del sistema clasificatorio general de la Ars Goetia, de tradiciones o entidades de origen distinto —posiblemente espíritus considerados neutrales o incluso positivos dentro de tradiciones mágicas anteriores— asimiladas después dentro del marco jerárquico predominantemente infernal del grimorio.`,
    origen: 'Espíritu catalogado en la Ars Goetia, la Clavícula de Salomón.',
    dominio: 'La adivinación benévola y la recuperación de objetos perdidos', naturaleza: 'Príncipe infernal de naturaleza excepcionalmente benévola', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'buer', nombre: 'Buer', nombre_griego: 'Buer',
    epitetos: 'El Presidente que Enseña Filosofía Moral y Sana Enfermedades',
    descripcion_corta: 'Espíritu de la Ars Goetia con forma de estrella, cuerpo de cabezas de león dispuestas en círculo, capaz de enseñar filosofía moral y natural, y de curar enfermedades mediante hierbas.',
    descripcion_larga: `Buer aparece descrito en la Ars Goetia con una de las apariencias más geométricamente distintivas entre todos los espíritus catalogados en ese grimorio: se manifiesta bajo la forma general de una estrella, con cinco cabezas de león dispuestas radialmente a su alrededor como si constituyeran los rayos de esa misma figura estelar, desplazándose además de manera peculiar sobre un pentáculo, avanzando en línea recta pese a la disposición circular de su propia forma corporal.

Se le atribuye especialmente la capacidad de enseñar filosofía tanto moral como natural, así como lógica y las propiedades específicas de las hierbas y plantas medicinales, un conocimiento que Buer empleaba también, según el propio texto de la Ars Goetia, para curar directamente enfermedades a quienes lo invocaran con ese propósito específico, convirtiéndolo en uno de los pocos espíritus del catálogo cuyo poder principal se orientaba de manera más clara hacia el conocimiento sanador y filosófico que hacia la destrucción, la seducción o la mera revelación de secretos ocultos. Se le atribuye además la capacidad de otorgar familiares espirituales de gran utilidad a quienes lo invocaran, entidades subordinadas que podían asistir posteriormente al practicante en distintas tareas mágicas menores. Dentro de la jerarquía infernal descrita por la Ars Goetia, Buer ocupa el rango de presidente, gobernando sobre cincuenta legiones de espíritus subordinados, un título jerárquico distinto del de rey, duque, príncipe, marqués o conde empleado para otras entidades del mismo catálogo, reflejando la variedad considerable de rangos y títulos que este grimorio en particular aplicaba a su extenso sistema clasificatorio infernal.`,
    origen: 'Espíritu catalogado en la Ars Goetia, la Clavícula de Salomón.',
    dominio: 'La filosofía moral y natural, y la curación mediante hierbas', naturaleza: 'Presidente infernal de la Ars Goetia', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'gremory', nombre: 'Gremory', nombre_griego: 'Gremory',
    epitetos: 'La Duquesa del Amor y los Tesoros Ocultos',
    descripcion_corta: 'Duque o duquesa de la Ars Goetia que se manifiesta como una hermosa mujer sobre un camello, capaz de revelar tesoros ocultos y despertar el amor de cualquier mujer deseada.',
    descripcion_larga: `Gremory ocupa una posición particular dentro del catálogo de la Ars Goetia por la ambigüedad de género que rodea a su figura desde las fuentes originales del propio grimorio: aunque formalmente clasificado dentro del rango nobiliario de "duque" siguiendo la terminología general empleada por el texto para la mayoría de sus entidades, la Ars Goetia describe específicamente su manifestación bajo la forma de una hermosa mujer joven, con una corona ducal ceñida a la cabeza, montada sobre un camello, una descripción que ha llevado a numerosos comentaristas y practicantes posteriores de la tradición grimórica a referirse a esta entidad directamente como "duquesa" en lugar de duque, pese a la terminología formal originalmente empleada por el texto medieval.

Se le atribuye especialmente la capacidad de revelar la ubicación de tesoros ocultos, tanto pasados como presentes, así como de despertar el amor genuino de cualquier mujer que el invocador deseara, convirtiéndola en un espíritu particularmente solicitado tanto por quienes buscaban riqueza material rápida como por quienes recurrían a la magia ceremonial con propósitos románticos específicos. Se le atribuye además un conocimiento considerable sobre asuntos pasados, presentes y futuros, complementando así sus poderes principales con una capacidad adivinatoria adicional de utilidad general para el invocador. Dentro de la jerarquía infernal descrita por la Ars Goetia, Gremory gobierna sobre veintiséis legiones de espíritus subordinados, y su combinación particular de poderes vinculados tanto al amor romántico como a la riqueza material la convirtió en una de las entidades más consultadas dentro de la práctica histórica documentada de la magia ceremonial renacentista y sus derivados posteriores.`,
    origen: 'Espíritu catalogado en la Ars Goetia, la Clavícula de Salomón.',
    dominio: 'El amor y los tesoros ocultos', naturaleza: 'Duquesa infernal de la Ars Goetia', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'marbas', nombre: 'Marbas', nombre_griego: 'Marbas',
    epitetos: 'El Presidente de las Enfermedades y las Artes Mecánicas',
    descripcion_corta: 'Espíritu de la Ars Goetia con forma de león que puede transformarse en hombre, capaz tanto de causar como de curar enfermedades, y de revelar secretos ocultos y artes mecánicas.',
    descripcion_larga: `Marbas aparece descrito en la Ars Goetia manifestándose inicialmente bajo la forma de un león poderoso, aunque el propio texto especifica que, si el invocador así lo requería durante el ritual correspondiente, el espíritu podía transformarse a voluntad en forma humana completa, facilitando una comunicación más directa y comprensible con quien lo hubiera convocado mediante los ritos apropiados de la magia ceremonial. Esta capacidad de transformación entre forma animal y humana lo distingue de otros espíritus del catálogo cuya apariencia permanece generalmente fija durante toda la duración del ritual de invocación.

Se le atribuye una dualidad de poderes particularmente notable dentro del catálogo completo: la capacidad tanto de causar enfermedades graves en cualquier persona señalada por el invocador, como, de manera inversa, de curar esas mismas dolencias cuando así se le solicitaba, otorgándole un control prácticamente completo sobre la salud física de terceros según la voluntad específica de quien lo convocara. Además de ese poder principal sobre la enfermedad, Marbas revelaba secretos ocultos de diversa naturaleza y poseía conocimientos considerables sobre las artes mecánicas, un dominio particular relacionado con la construcción, la ingeniería y el funcionamiento de mecanismos complejos que lo distingue de la mayoría de los demás espíritus del catálogo, generalmente asociados con dominios más abstractos como el amor, la riqueza o el conocimiento filosófico. Dentro de la jerarquía infernal descrita por la Ars Goetia, Marbas ocupa el rango de presidente, gobernando sobre treinta y seis legiones de espíritus subordinados según especifica el propio texto del grimorio.`,
    origen: 'Espíritu catalogado en la Ars Goetia, la Clavícula de Salomón.',
    dominio: 'La enfermedad, la curación y las artes mecánicas', naturaleza: 'Presidente infernal cambiaformas de la Ars Goetia', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'empusa', nombre: 'Empusa', nombre_griego: 'Empousa',
    epitetos: 'La Devoradora de Hombres Jóvenes',
    descripcion_corta: 'Espíritu femenino cambiaformas de la tradición griega antigua, hija de Hécate, que seduce a viajeros solitarios adoptando formas hermosas antes de devorar su carne y beber su sangre.',
    descripcion_larga: `Empusa es una figura demoníaca femenina documentada ya dentro de la tradición griega antigua, mencionada por autores clásicos como Aristófanes en sus comedias y por otros escritores helenísticos posteriores, descrita generalmente como una hija de la diosa Hécate, asociada estrechamente al mundo de las sombras, la brujería y los caminos nocturnos que esa divinidad gobernaba dentro del panteón griego. Se le atribuía la capacidad de cambiar de forma a voluntad, apareciendo ante viajeros solitarios, particularmente hombres jóvenes que recorrían caminos desiertos durante la noche, bajo la apariencia de una mujer de belleza extraordinaria con el propósito específico de seducirlos y atraerlos hacia un lugar apartado.

Una vez que lograba seducir a su víctima, Empusa revelaba su verdadera naturaleza monstruosa, frecuentemente descrita con una pierna de bronce y otra de estiércol de burro, colmillos afilados similares a los de un vampiro, y la capacidad de devorar la carne de su víctima mientras bebía simultáneamente su sangre, un ataque del que muy pocos lograban escapar con vida una vez que la criatura había revelado completamente su forma real. Los relatos griegos antiguos ofrecían también algunos consejos prácticos transmitidos como protección tradicional contra su ataque: insultarla directamente, especialmente con maldiciones o insultos groseros, podía provocar que Empusa huyera despavorida antes de completar su ataque, una debilidad peculiar que distingue su figura de la de otras criaturas devoradoras similares dentro del folclore mundial. Su figura guarda notables similitudes con otras entidades femeninas devoradoras de la tradición mediterránea antigua, particularmente Lamia, con la que frecuentemente se la vincula o incluso confunde dentro de distintas fuentes clásicas.`,
    origen: 'Espíritu femenino cambiaformas de la tradición griega antigua, hija de Hécate.',
    dominio: 'La seducción mortal y la devoración de viajeros', naturaleza: 'Demonio cambiaformas devorador', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'mara', nombre: 'Mara', nombre_griego: 'Mara',
    epitetos: 'El Espíritu que Cabalga sobre el Pecho Dormido',
    descripcion_corta: 'Espíritu de la tradición folclórica escandinava y eslava que se sienta sobre el pecho de quienes duermen, provocando pesadillas y una sensación de sofocante parálisis nocturna.',
    descripcion_larga: `Mara es un espíritu demoníaco documentado ampliamente dentro del folclore tradicional escandinavo, germánico y eslavo, cuyo propio nombre ha dado origen directamente al término inglés "nightmare" (pesadilla), reflejando de manera directa la naturaleza específica de su ataque: se creía que Mara visitaba a las personas mientras dormían, sentándose literalmente sobre su pecho o su cuerpo entero, provocando una sensación física de peso opresivo, dificultad respiratoria severa y una parálisis corporal total que impedía a la víctima moverse o gritar pese a permanecer plenamente consciente durante todo el ataque, una descripción que coincide de manera notable con lo que la medicina moderna reconoce hoy como parálisis del sueño y pesadillas particularmente vívidas asociadas a ese fenómeno neurológico específico.

Distintas tradiciones folclóricas regionales atribuían orígenes diversos a Mara: en algunas versiones se trataba de un espíritu independiente de naturaleza puramente maligna, mientras que en otras se creía que ciertas personas vivas, generalmente mujeres, podían convertirse involuntariamente en Mara durante el sueño, proyectando su propio espíritu fuera del cuerpo dormido para atormentar a otros sin ser plenamente conscientes de sus propias acciones nocturnas. Los caballos también aparecían frecuentemente vinculados a los ataques de Mara dentro de la tradición folclórica, con crines enredadas de manera inexplicable durante la noche atribuidas a su actividad, y el propio término "pesadilla" en varios idiomas europeos conserva hasta hoy esa asociación etimológica directa entre el espíritu opresor nocturno y el mundo equino. Diversos amuletos protectores, incluidas figuras geométricas específicas colgadas sobre la cama, se empleaban tradicionalmente como protección preventiva contra sus visitas nocturnas.`,
    origen: 'Espíritu de la tradición folclórica escandinava, germánica y eslava.',
    dominio: 'Las pesadillas y la parálisis nocturna', naturaleza: 'Espíritu opresor del sueño', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'krampus', nombre: 'Krampus', nombre_griego: 'Krampus',
    epitetos: 'El Castigador de los Niños Traviesos',
    descripcion_corta: 'Criatura demoníaca cornuda de la tradición alpina, compañera oscura de San Nicolás, que castiga a los niños desobedientes mientras este recompensa a los bien portados.',
    descripcion_larga: `Krampus es una figura folclórica de origen preCristiano probablemente asociada originalmente a antiguos rituales paganos alpinos de invierno, incorporada con el tiempo dentro de las tradiciones navideñas cristianas de Austria, Baviera y otras regiones de habla alemana del centro de Europa, donde se convirtió en la contraparte oscura y castigadora de San Nicolás, el santo bondadoso que recompensa tradicionalmente a los niños bien portados con regalos durante la temporada navideña. Se le representa con una apariencia claramente demoníaca: cuerpo cubierto de pelaje oscuro, largos cuernos curvados, una lengua larga y puntiaguda que sobresale de su boca, pezuñas de cabra, y cadenas que arrastra ruidosamente mientras se desplaza, portando además un manojo de varas con las que castiga simbólicamente a los niños desobedientes.

Según la tradición todavía viva en numerosas comunidades alpinas, Krampus visita los hogares durante la víspera del día de San Nicolás, el 5 de diciembre, acompañando al propio santo en sus recorridos nocturnos: mientras San Nicolás premia con dulces y pequeños regalos a los niños que se han comportado bien durante el año, Krampus se encarga de asustar, azotar simbólicamente con sus varas, o incluso, según las versiones más severas de la leyenda, de llevarse consigo dentro de un saco o cesta a los niños particularmente traviesos hacia su propio reino infernal. Numerosas comunidades alpinas mantienen hasta la actualidad la tradición viva del "Krampuslauf" (la corrida de Krampus), un desfile festivo nocturno en el que participantes disfrazados con máscaras y trajes elaborados de la criatura recorren las calles asustando alegremente a los transeúntes, una celebración que ha experimentado un notable resurgimiento de popularidad internacional durante las últimas décadas, extendiéndose considerablemente más allá de su territorio alpino original.`,
    origen: 'Criatura folclórica de origen preCristiano de la región alpina de Europa central.',
    dominio: 'El castigo de los niños desobedientes durante el invierno', naturaleza: 'Criatura demoníaca folclórica invernal', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'ifrit', nombre: 'Ifrit', nombre_griego: 'Ifrit',
    epitetos: 'El Espíritu de Fuego más Poderoso',
    descripcion_corta: 'La categoría más poderosa y temida de los djinn dentro de la tradición islámica, seres de fuego dotados de una fuerza e inteligencia formidables, mencionados incluso en el propio Corán.',
    descripcion_larga: `Los ifrit constituyen, dentro de la extensa tradición islámica sobre los djinn —seres espirituales creados por Dios a partir de fuego sin humo, distintos tanto de los ángeles como de los seres humanos, dotados de libre albedrío y capaces tanto del bien como del mal—, la categoría considerada más poderosa, formidable e independiente entre todas las clasificaciones tradicionales de estas entidades. El propio Corán menciona explícitamente a un ifrit en la Sura de las Hormigas, cuando este se ofrece ante el rey Salomón para transportar el trono de la reina de Saba antes de que este se levantara de su asiento, demostrando con esa oferta una velocidad y una fuerza sobrenatural extraordinarias que distinguen a los ifrit del resto de los djinn ordinarios.

Dentro de la tradición popular islámica desarrollada posteriormente, especialmente reflejada en colecciones narrativas célebres como "Las mil y una noches", los ifrit aparecen frecuentemente como entidades poderosas y orgullosas, capaces de adoptar formas gigantescas y aterradoras, de construir estructuras monumentales en cuestión de una sola noche, y de ejercer una influencia considerable, tanto benévola como maliciosa, sobre los asuntos humanos según su propia voluntad individual. Se les asociaba tradicionalmente con lugares específicos considerados peligrosos o malditos —ruinas antiguas, cementerios, hornos y espacios subterráneos vinculados al fuego—, y se creía que, al igual que ocurría con otros djinn, podían ser vinculados o controlados por un ser humano que conociera su verdadero nombre secreto o que poseyera objetos mágicos específicos capaces de dominarlos, un motivo narrativo que ha permanecido extraordinariamente popular dentro de la literatura y el cine de fantasía contemporáneos alrededor de todo el mundo.`,
    origen: 'La categoría más poderosa de djinn dentro de la tradición islámica.',
    dominio: 'El fuego, la fuerza sobrenatural y la independencia orgullosa', naturaleza: 'Espíritu de fuego, la más poderosa clase de djinn', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'demonologia'");
  if (filas.length === 0) throw new Error('No existe el libro "demonologia" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando heroes y monstruos de Demonologia (parte 2)...\n');
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
