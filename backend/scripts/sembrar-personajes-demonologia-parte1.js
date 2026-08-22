// ============================================================
// scripts/sembrar-personajes-demonologia-parte1.js
// ------------------------------------------------------------
// Primer lote de Demonologia: 5 primordiales (titan) y 15
// grandes principes/gobernantes infernales (dios) -- catalogados
// principalmente a partir de la tradicion biblica, la Cabala, la
// demonologia mesopotamica y los grandes grimorios (Ars Goetia,
// Pseudomonarchia Daemonum). Contenido completo desde el inicio.
// Idempotente via slug+libro_id.
//
// Nota de tono: se trata el material con el mismo criterio
// enciclopedico/narrativo que el resto del catalogo -- fuentes
// historicas y literarias reales, sin adoptar una postura
// religiosa propia ni sensacionalismo.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-demonologia-parte1.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- PRIMORDIALES ---
  {
    tipo: 'titan', slug: 'leviatan', nombre: 'Leviatán', nombre_griego: 'Leviatán',
    epitetos: 'La Serpiente Retorcida del Abismo Marino',
    descripcion_corta: 'Monstruo marino primordial del Antiguo Testamento, tan colosal que solo Dios mismo podía domarlo, convertido con el tiempo en el príncipe demoníaco de la envidia.',
    descripcion_larga: `Leviatán aparece descrito en el Libro de Job, los Salmos y el Libro de Isaías como una criatura marina de proporciones colosales, una serpiente o dragón retorcido cuya fuerza escapaba por completo a la capacidad de dominio humano, presentado en esos textos bíblicos como prueba viviente del poder absoluto de Dios sobre la creación entera: si ningún mortal podía siquiera acercarse a Leviatán sin sucumbir ante su ferocidad, ¿cómo podría entonces cuestionar la autoridad del propio creador que sí lograba contenerlo? El Libro de Job dedica un pasaje extenso a describir su piel imposible de perforar, sus fauces llenas de dientes terribles, y el fuego que, según el texto, brotaba de sus propias narices.

Con el paso de los siglos, y especialmente durante la Edad Media cristiana, Leviatán fue incorporado progresivamente a los catálogos demonológicos como uno de los grandes príncipes del infierno, asociado específicamente con el pecado capital de la envidia dentro de sistemas clasificatorios que vinculaban a cada príncipe infernal con una falta moral concreta. Los demonólogos medievales y renacentistas lo describieron habitualmente como un ser que gobernaba las profundidades oceánicas del inframundo, complementando en esa jerarquía a Behemot, que gobernaba la tierra firme, en una pareja simbólica que representaba el caos primordial anterior al orden divino. Su nombre ha trascendido ampliamente el ámbito estrictamente religioso, empleado célebremente por el filósofo Thomas Hobbes como título de su obra fundamental sobre el poder absoluto del Estado, una referencia directa a la imagen bíblica de una fuerza tan colosal que ningún poder menor podía esperar contenerla por sí solo.`,
    origen: 'Monstruo marino primordial del Antiguo Testamento, posteriormente incorporado a la demonología cristiana.',
    dominio: 'Las profundidades del mar y la envidia', naturaleza: 'Monstruo primordial devenido príncipe infernal', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'behemot', nombre: 'Behemot', nombre_griego: 'Behemot',
    epitetos: 'La Bestia Primordial de la Tierra',
    descripcion_corta: 'Criatura terrestre colosal del Libro de Job, de fuerza descomunal, considerada la contraparte de Leviatán y asociada posteriormente con el pecado de la gula.',
    descripcion_larga: `Behemot aparece descrito, al igual que Leviatán, en el Libro de Job, como una criatura terrestre de una fuerza y un tamaño verdaderamente descomunales, con huesos como tubos de bronce y músculos comparados con barras de hierro, capaz de beber ríos enteros sin apenas esfuerzo y de permanecer completamente inmóvil bajo la sombra de los lotos y los juncos de los pantanos. El texto bíblico presenta a Behemot, de manera similar a Leviatán, como una demostración directa del poder creador de Dios: una bestia tan formidable que ningún ser humano podría jamás esperar dominarla o capturarla por sus propios medios.

Dentro de la tradición judía posterior, incluidos textos apocalípticos y rabínicos, se desarrolló la creencia de que Behemot y Leviatán estaban destinados a enfrentarse en un combate final durante los tiempos mesiánicos, un duelo cuya carne, según ciertas tradiciones, sería servida como banquete a los justos en el mundo venidero. La demonología cristiana medieval y renacentista incorporó posteriormente a Behemot dentro de sus catálogos de grandes príncipes infernales, asociándolo generalmente con el pecado capital de la gula, dada la descripción bíblica original de su apetito descomunal y su tamaño desmedido. En algunas tradiciones de brujería documentadas durante los procesos de la caza de brujas europea, Behemot aparece descrito con la forma de un elefante gigantesco, una imagen que combinaba la descripción bíblica original con la creciente familiaridad europea hacia esos animales exóticos importados desde África y Asia durante los siglos posteriores.`,
    origen: 'Criatura terrestre primordial del Libro de Job, posteriormente incorporada a la demonología cristiana.',
    dominio: 'La tierra firme y la gula', naturaleza: 'Bestia primordial devenida príncipe infernal', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'abaddon', nombre: 'Abadón', nombre_griego: 'Apollyon',
    epitetos: 'El Destructor, Ángel del Abismo',
    descripcion_corta: 'El ángel gobernante del abismo en el Apocalipsis, cuyo nombre significa literalmente "destrucción", liberado para comandar una plaga de langostas monstruosas.',
    descripcion_larga: `Abadón —cuyo nombre hebreo se traduce literalmente como "destrucción" o "lugar de perdición", y cuyo equivalente griego, Apollyon, significa "destructor"— aparece nombrado específicamente en el Libro del Apocalipsis como el ángel gobernante del abismo, liberado durante la quinta trompeta apocalíptica para comandar un ejército de langostas monstruosas dotadas de colas de escorpión, enviadas a atormentar durante cinco meses a toda la humanidad que no llevara el sello protector de Dios sobre su frente. El texto bíblico describe estas langostas con una apariencia híbrida aterradora: rostros humanos, cabellos de mujer, dientes de león y corazas como de hierro, un ejército de pesadilla bajo el mando directo de Abadón.

Antes de su aparición en el Apocalipsis, el término hebreo "Abadón" ya se empleaba en el Antiguo Testamento, particularmente en los libros de Job y Proverbios, como sinónimo poético del propio Seol, el reino de los muertos, funcionando más como un concepto abstracto de destrucción y perdición que como una figura personal claramente definida. Fue el propio texto del Apocalipsis el que personificó de manera definitiva ese concepto en la figura de un ángel-gobernante concreto, y la tradición demonológica posterior terminó de consolidar a Abadón como una entidad claramente asociada al inframundo y la destrucción apocalíptica, aunque su naturaleza exacta —si se trata de un ángel caído propiamente dicho, o de una figura de castigo divino que actúa bajo autorización directa de Dios— permanece objeto de debate teológico entre distintas tradiciones cristianas hasta la actualidad.`,
    origen: 'Ángel gobernante del abismo mencionado en el Libro del Apocalipsis.',
    dominio: 'El abismo y la destrucción apocalíptica', naturaleza: 'Ángel del abismo devenido figura demoníaca', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'samael', nombre: 'Samael', nombre_griego: 'Samael',
    epitetos: 'El Veneno de Dios, Ángel Acusador',
    descripcion_corta: 'Figura ambigua de la tradición judía, ángel de la muerte y acusador celestial cuyo nombre significa "veneno de Dios", equiparado en textos posteriores con Satán.',
    descripcion_larga: `Samael ocupa un lugar particularmente complejo y ambivalente dentro de la tradición judía, donde su naturaleza oscila entre la de un ángel legítimo al servicio de funciones divinas específicas —principalmente como ángel de la muerte, encargado de separar el alma del cuerpo en el momento del fallecimiento— y la de una figura acusadora y tentadora identificada en textos rabínicos y cabalísticos posteriores directamente con Satán, el gran adversario. Su propio nombre, que combina el término hebreo para "veneno" con el sufijo "El" reservado habitualmente para nombres angélicos, refleja ya en sí mismo esa naturaleza dual: una entidad de origen y función celestial, pero cuya labor resulta amarga y temida por la humanidad.

Dentro de la mística cabalística, particularmente en textos como el Zohar, Samael aparece con frecuencia como esposo o consorte de Lilith, formando juntos una pareja que representa las fuerzas del rigor excesivo y el desequilibrio dentro del sistema de las sefirot, el marco simbólico que la Cábala emplea para describir la estructura de la creación divina. Se le atribuye también, en ciertas tradiciones rabínicas, el papel de la serpiente que tentó a Eva en el Jardín del Edén, o de haber cabalgado sobre esa misma serpiente como su montura durante la tentación original. Pese a su asociación consolidada con fuerzas oscuras y destructivas, algunos textos judíos más antiguos preservan todavía una imagen de Samael como parte legítima de la corte celestial, cumpliendo funciones necesarias dentro del orden divino, una ambigüedad que distingue claramente su figura de la concepción cristiana más unívocamente maligna de Satán.`,
    origen: 'Ángel de la muerte y figura acusadora de la tradición judía y cabalística.',
    dominio: 'La muerte, la acusación y el veneno', naturaleza: 'Ángel ambivalente devenido figura demoníaca', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'lilith', nombre: 'Lilith', nombre_griego: 'Lilith',
    epitetos: 'La Primera Mujer, Reina de la Noche',
    descripcion_corta: 'Según una tradición judía posterior a la Biblia, la primera esposa de Adán, que se negó a someterse a él y se convirtió, tras huir del Edén, en reina de los demonios nocturnos.',
    descripcion_larga: `Lilith no aparece nombrada de manera explícita en el texto bíblico canónico salvo en una única mención aislada dentro del Libro de Isaías, donde se la cita entre las criaturas que habitarán las ruinas desoladas de Edom, un término que algunos estudiosos interpretan como una simple criatura nocturna del desierto y otros como un nombre propio heredado de tradiciones mesopotámicas anteriores sobre demonios femeninos de la noche. Fue en textos rabínicos posteriores, especialmente el Alfabeto de Ben Sira, compuesto varios siglos después de la redacción bíblica, donde se desarrolló la narrativa que hoy resulta más conocida sobre su figura: Lilith habría sido creada por Dios al mismo tiempo y de la misma tierra que Adán, como su primera esposa e igual absoluta, en contraste con la Eva posterior, formada a partir de una costilla del propio Adán.

Según ese relato rabínico, la igualdad original entre Lilith y Adán se rompió cuando este exigió que ella se sometiera a una posición de subordinación, particularmente durante las relaciones íntimas entre ambos; Lilith, negándose rotundamente a aceptar esa desigualdad, pronunció el nombre inefable de Dios y abandonó el Jardín del Edén por su propia voluntad, huyendo hacia el Mar Rojo, donde se unió a demonios y engendró con ellos una descendencia numerosa de criaturas nocturnas. Cuando Dios envió tres ángeles a buscarla y ordenarle su regreso bajo amenaza de que cien de sus hijos demoníacos morirían cada día que ella se negara, Lilith rechazó igualmente esa exigencia, aceptando la pérdida en lugar de renunciar a su independencia recién conquistada. Desde entonces, la tradición popular judía la asoció con el peligro que amenazaba específicamente a los recién nacidos durante sus primeras noches de vida, y amuletos inscritos con los nombres de los tres ángeles enviados a buscarla se emplearon durante siglos como protección tradicional contra su influencia. En las últimas décadas, la figura de Lilith ha sido reivindicada además, fuera del ámbito estrictamente demonológico, como un símbolo cultural de independencia y resistencia femenina frente a estructuras de poder impuestas.`,
    origen: 'Según el Alfabeto de Ben Sira, la primera esposa de Adán, creada igual a él.',
    dominio: 'La noche, la independencia y los demonios menores', naturaleza: 'Primera mujer devenida reina demoníaca', es_preview: 1
  },

  // --- GRANDES PRINCIPES / GOBERNANTES INFERNALES ---
  {
    tipo: 'dios', slug: 'lucifer', nombre: 'Lucifer', nombre_griego: 'Lucifer',
    epitetos: 'El Portador de Luz, la Estrella de la Mañana',
    descripcion_corta: 'Originalmente un título latino para el planeta Venus como estrella matutina, reinterpretado por la tradición cristiana como el ángel más hermoso, caído por su orgullo desmedido.',
    descripcion_larga: `El nombre "Lucifer" proviene directamente del latín lux ferre, "el que porta la luz", un término empleado originalmente en la literatura latina clásica y en la propia traducción de la Vulgata bíblica simplemente para designar al planeta Venus visible como estrella matutina antes del amanecer. Su transformación en el nombre propio del gran adversario del cristianismo se originó a partir de una interpretación específica de un pasaje del Libro de Isaías, dirigido originalmente en su contexto histórico contra un rey babilonio arrogante descrito metafóricamente como "estrella de la mañana caída del cielo"; padres de la Iglesia posteriores, especialmente a partir de Orígenes y Tertuliano, reinterpretaron ese pasaje como una referencia velada a la caída original del más hermoso de los ángeles, precipitado desde el cielo por el pecado de un orgullo desmedido que lo llevó a desafiar la autoridad de Dios.

Dentro de la tradición cristiana consolidada durante la Edad Media, Lucifer se convirtió en el nombre asociado específicamente al estado angelical previo a la caída, mientras que "Satán" pasó a designar más frecuentemente a la misma entidad ya transformada en adversario activo tras su expulsión del cielo, aunque numerosos textos y tradiciones posteriores emplean ambos nombres de manera prácticamente intercambiable para referirse a un mismo ser. Dante Alighieri, en su "Divina Comedia", representó a Lucifer congelado hasta el pecho en el hielo del noveno círculo del infierno, con tres rostros devorando eternamente en sus fauces a Judas, Bruto y Casio, los tres grandes traidores de la tradición dantesca. Dentro de sistemas clasificatorios demonológicos posteriores que asociaban a cada gran príncipe infernal con uno de los siete pecados capitales, Lucifer se identificó consistentemente con el orgullo, considerado la falta original y fundamental que precipitó su propia caída del cielo.`,
    origen: 'Título latino para el planeta Venus, reinterpretado como el ángel caído más hermoso.',
    dominio: 'El orgullo y la belleza caída', naturaleza: 'Príncipe infernal, portador de luz caído', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'satan', nombre: 'Satán', nombre_griego: 'ha-Satan',
    epitetos: 'El Adversario, el Gran Acusador',
    descripcion_corta: 'Cuyo nombre significa literalmente "el adversario" o "el acusador", pasó de ser una función dentro de la corte celestial del Antiguo Testamento a convertirse en el archienemigo personal del cristianismo.',
    descripcion_larga: `El término hebreo "satán" (ha-satan) significa literalmente "el adversario" o "el acusador", y su aparición más temprana en los textos bíblicos, particularmente en el prólogo del Libro de Job, lo presenta no como un enemigo independiente de Dios sino como un miembro funcional de la propia corte celestial, encargado específicamente del rol de fiscal o acusador que pone a prueba la fidelidad de los seres humanos, incluido el propio Job, siempre bajo autorización explícita y límites impuestos directamente por Dios. Esta concepción, más cercana a un cargo o función institucional que a un nombre propio de una entidad claramente definida, se mantiene también en otros pasajes tempranos del Antiguo Testamento como el Libro de Zacarías.

Con el desarrollo progresivo del pensamiento judío durante el periodo del Segundo Templo, influenciado en parte por el contacto con el dualismo persa zoroástrico durante el exilio babilónico, la figura de Satán comenzó a evolucionar gradualmente hacia una entidad más autónoma e independiente, asociada cada vez con mayor claridad al mal activo y a la oposición directa contra la voluntad divina más que a una simple función administrativa dentro de la corte celestial. El Nuevo Testamento cristiano consolidó definitivamente esta transformación, presentando a Satán como el gran adversario personal de Dios y tentador directo de Jesucristo durante los cuarenta días en el desierto, además de instigador último detrás de buena parte del mal presente en el mundo. La tradición cristiana posterior desarrolló una identificación cada vez más estrecha entre Satán y Lucifer, aunque, como ocurre con buena parte de la demonología cristiana, los detalles exactos de esa equivalencia —y la biografía completa atribuida a esta figura— varían considerablemente según la denominación, el periodo histórico y la fuente teológica específica consultada.`,
    origen: 'Función acusadora dentro de la corte celestial del Antiguo Testamento, evolucionada hacia adversario personal.',
    dominio: 'La oposición, la tentación y la acusación', naturaleza: 'Gran adversario del cristianismo', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'beelzebub', nombre: 'Belcebú', nombre_griego: 'Beelzebub',
    epitetos: 'El Señor de las Moscas',
    descripcion_corta: 'Originalmente un dios filisteo venerado en Ecrón, degradado por la polémica bíblica a "señor de las moscas" y elevado posteriormente a príncipe demoníaco de la gula.',
    descripcion_larga: `Belcebú tiene su origen documentado en Baal Zebub, una divinidad filistea venerada en la ciudad de Ecrón, mencionada en el Segundo Libro de los Reyes cuando el rey israelita Ocozías, herido gravemente, envía mensajeros a consultar a este dios extranjero sobre su posible recuperación, un acto que el texto bíblico condena severamente por representar precisamente el tipo de idolatría hacia divinidades foráneas que la tradición israelita rechazaba de manera categórica. El propio nombre "Baal Zebub" —que puede traducirse literalmente como "señor de las moscas"— es interpretado por buena parte de los estudiosos modernos como una deformación polémica y deliberadamente despectiva del nombre original de esa divinidad filistea, probablemente "Baal Zebul" ("señor exaltado" o "señor del cielo elevado"), alterado intencionalmente por los escribas bíblicos para ridiculizar y degradar a un dios rival asociándolo con la suciedad y las plagas de insectos.

Para la época del Nuevo Testamento, Belcebú aparece ya completamente transformado en una figura demoníaca de primer orden, identificado explícitamente en los evangelios sinópticos como "príncipe de los demonios", cuando los fariseos acusan a Jesús de expulsar demonios precisamente mediante el poder de esta entidad. La demonología cristiana medieval y renacentista consolidó a Belcebú como uno de los grandes príncipes del infierno, asociándolo con frecuencia con el pecado capital de la gula, y su nombre, junto con el de Satán y Lucifer, se convirtió en uno de los tres nombres demoníacos más reconocibles de toda la tradición occidental, empleado hasta la actualidad en la literatura, el cine y la cultura popular como sinónimo prácticamente directo del propio diablo.`,
    origen: 'Divinidad filistea venerada en Ecrón, degradada por la polémica bíblica.',
    dominio: 'La gula y la corrupción', naturaleza: 'Príncipe infernal, señor de las moscas', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'asmodeo', nombre: 'Asmodeo', nombre_griego: 'Asmodeus',
    epitetos: 'El Príncipe de la Lujuria',
    descripcion_corta: 'Demonio del Libro de Tobías, enamorado celoso que mataba a los sucesivos esposos de una mujer hasta ser finalmente expulsado por el ángel Rafael y un pez mágico.',
    descripcion_larga: `Asmodeo protagoniza uno de los relatos demonológicos más elaborados y narrativamente completos de toda la tradición bíblica deuterocanónica, presentado en el Libro de Tobías como un demonio profundamente enamorado de Sara, una joven que había perdido sucesivamente a siete esposos, cada uno de ellos asesinado por Asmodeo en la propia noche de bodas antes de que el matrimonio pudiera consumarse, movido por unos celos posesivos que le impedían tolerar que Sara perteneciera a ningún hombre mortal. Cuando Tobías, hijo de Tobit, se casa finalmente con Sara guiado por el ángel Rafael disfrazado de compañero de viaje, este le proporciona instrucciones precisas para protegerse: quemar el corazón y el hígado de un pez capturado durante el trayecto, cuyo humo resultaría insoportable para el demonio.

Siguiendo esas instrucciones, Tobías logra ahuyentar a Asmodeo mediante el humo del pez sagrado, y el ángel Rafael persigue después al demonio huido hasta Egipto, donde lo ata definitivamente de manos y pies, poniendo fin a su amenaza. Con el tiempo, y especialmente a partir de los grandes grimorios medievales y renacentistas como la Ars Goetia dentro de la Clavícula de Salomón, Asmodeo se consolidó como uno de los grandes reyes del infierno, descrito habitualmente con tres cabezas —de toro, de hombre y de carnero— montado sobre un dragón infernal y empuñando una lanza, gobernando específicamente sobre los juegos de azar y, sobre todo, asociado de manera prácticamente universal con el pecado capital de la lujuria, una identificación derivada directamente de la naturaleza posesiva y celosa que el propio Libro de Tobías le atribuye desde su primera aparición en la tradición bíblica.`,
    origen: 'Demonio del Libro de Tobías, expulsado por el ángel Rafael.',
    dominio: 'La lujuria, los celos y los juegos de azar', naturaleza: 'Príncipe infernal de tres cabezas', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'belial', nombre: 'Belial', nombre_griego: 'Belial',
    epitetos: 'El Sin Valor, Príncipe de la Iniquidad',
    descripcion_corta: 'Término hebreo que designaba originalmente la maldad y la corrupción moral genérica, personificado con el tiempo como uno de los grandes príncipes de las tinieblas.',
    descripcion_larga: `El término hebreo "belial" (beliyya'al) aparece numerosas veces a lo largo del Antiguo Testamento como una expresión abstracta que designa la maldad, la corrupción moral o la inutilidad genérica, empleada frecuentemente en frases como "hijos de Belial" para describir a personas de conducta perversa o rebelde, sin que el término funcionara originalmente como el nombre propio de una entidad demoníaca personal claramente diferenciada. Su transformación en una figura personificada ocurrió principalmente durante el periodo del Segundo Templo, reflejada de manera especialmente clara en textos como los manuscritos del Mar Muerto encontrados en Qumrán, donde Belial aparece ya consolidado como el líder principal de las fuerzas de la oscuridad, opuesto directamente al príncipe de la luz en una cosmovisión marcadamente dualista.

El Nuevo Testamento conserva también esta personificación consolidada, con el apóstol Pablo empleando el nombre de Belial en la Segunda Epístola a los Corintios como sinónimo directo del propio Satán o de las fuerzas demoníacas en general, en un contraste retórico explícito entre Cristo y Belial. La literatura demonológica medieval y renacentista posterior desarrolló todavía más su figura, presentándolo frecuentemente en los grandes grimorios como uno de los primeros seres creados inmediatamente después de Lucifer, y describiéndolo como una entidad de gran elocuencia y encanto persuasivo, capaz de mentir con una habilidad excepcional y de otorgar favores considerables a quienes lo invocaran correctamente mediante ofrendas específicas, aunque advirtiendo siempre sobre la naturaleza fundamentalmente engañosa de cualquier promesa que hiciera. Dentro de los sistemas que asociaban príncipes infernales con pecados capitales específicos, Belial se vinculó habitualmente con la vanidad o la falta de escrúpulos morales generalizada.`,
    origen: 'Término hebreo abstracto de maldad, personificado durante el periodo del Segundo Templo.',
    dominio: 'La iniquidad, el engaño elocuente y la rebeldía', naturaleza: 'Príncipe de las tinieblas', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'astaroth', nombre: 'Astaroth', nombre_griego: 'Astaroth',
    epitetos: 'El Gran Duque de los Secretos Ocultos',
    descripcion_corta: 'Originalmente Astarté, gran diosa fenicia del amor y la fertilidad, transformada por la polémica bíblica en un gran duque demoníaco que revela secretos pasados y futuros.',
    descripcion_larga: `Astaroth tiene su origen documentado en Astarté, una gran diosa del panteón fenicio y cananeo asociada al amor, la fertilidad, la guerra y el planeta Venus, ampliamente venerada en todo el Levante mediterráneo antiguo y mencionada en numerosas ocasiones dentro del Antiguo Testamento como una de las principales divinidades extranjeras que tentaban repetidamente al pueblo israelita a apartarse de la veneración exclusiva de su propio Dios, motivo por el cual los textos bíblicos condenan sistemáticamente su culto. Con el paso de los siglos y bajo la influencia de la polémica religiosa cristiana posterior contra todas las divinidades paganas antiguas, la figura femenina original de Astarté se transformó gradualmente, en los textos demonológicos medievales, en la entidad masculina conocida como Astaroth, un proceso de "demonización" de antiguas divinidades paganas que se repitió sistemáticamente a lo largo de toda la tradición cristiana con numerosos otros dioses de culturas vecinas.

Dentro de la Ars Goetia y otros grandes grimorios renacentistas, Astaroth aparece descrito como uno de los grandes duques del infierno, representado con una apariencia particular y perturbadora: un ángel de belleza engañosa cabalgando sobre un dragón infernal, sosteniendo una serpiente venenosa en su mano derecha, cuyo aliento se advertía explícitamente como extremadamente peligroso para cualquier invocador imprudente que se acercara demasiado sin la protección ritual adecuada, recomendándose específicamente el uso de un anillo mágico protector durante cualquier invocación. Se le atribuía un conocimiento profundo sobre los secretos del pasado, el presente y el futuro, así como la capacidad de responder con precisión a preguntas sobre la creación del mundo y la caída de los ángeles, convirtiéndolo en una figura particularmente buscada por quienes practicaban la magia ceremonial renacentista en busca de conocimiento oculto.`,
    origen: 'Astarté, gran diosa fenicia del amor y la fertilidad, demonizada por la tradición cristiana.',
    dominio: 'Los secretos ocultos y el conocimiento prohibido', naturaleza: 'Gran duque infernal', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'mammon', nombre: 'Mammón', nombre_griego: 'Mammon',
    epitetos: 'El Príncipe de la Avaricia',
    descripcion_corta: 'Término arameo para "riqueza material" que Jesús personificó en los evangelios como una fuerza rival de Dios, transformado después en el demonio de la codicia por excelencia.',
    descripcion_larga: `Mammón proviene del término arameo mamona, que designaba simplemente "riqueza" o "posesiones materiales" en el uso cotidiano de la época, un concepto abstracto que adquirió connotaciones personificadas gracias a un pasaje célebre del Evangelio de Mateo, en el que Jesús declara directamente que "nadie puede servir a dos señores", contraponiendo explícitamente el servicio a Dios frente al servicio a Mammón, un uso retórico que trataba la riqueza material como si fuera un amo rival capaz de disputar la lealtad humana con la propia divinidad. Ese contraste tan directo entre Dios y Mammón sentó las bases para que, con el tiempo, la tradición cristiana terminara personificando por completo el concepto abstracto original en una entidad demoníaca claramente diferenciada.

Durante la literatura cristiana medieval y renacentista, Mammón se consolidó definitivamente como uno de los grandes príncipes del infierno, asociado de manera prácticamente universal y sin ambigüedad alguna con el pecado capital de la avaricia, representando la tentación específica de anteponer la acumulación de riquezas materiales por encima de cualquier consideración espiritual o moral superior. John Milton, en su influyente poema épico "El paraíso perdido", desarrolló extensamente la figura de Mammón como uno de los ángeles caídos más pragmáticos y menos interesados en la venganza directa contra el cielo, retratado como el arquitecto que dirige la construcción del propio palacio infernal de Pandemonio, prefiriendo la acumulación de riqueza y comodidad material dentro del infierno antes que cualquier intento fútil de recuperar el paraíso perdido. Esa caracterización literaria contribuyó de manera decisiva a consolidar en la cultura popular occidental posterior la asociación permanente entre el nombre de Mammón y la codicia material desmedida.`,
    origen: 'Término arameo para riqueza material, personificado a partir de un pasaje del Evangelio de Mateo.',
    dominio: 'La avaricia y la riqueza material', naturaleza: 'Príncipe infernal de la codicia', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'belfegor', nombre: 'Belfegor', nombre_griego: 'Belphegor',
    epitetos: 'El Príncipe de la Pereza y el Descubrimiento',
    descripcion_corta: 'Originalmente un dios moabita venerado en el monte Peor, transformado en demonio de la pereza que se disfraza de doncella hermosa para tentar con inventos ingeniosos.',
    descripcion_larga: `Belfegor tiene su origen en Baal Peor, una divinidad moabita venerada en el monte Peor, mencionada en el Libro de los Números como el centro de un episodio de idolatría y transgresión moral que provocó, según el relato bíblico, una plaga devastadora entre el pueblo israelita como castigo divino por haber participado en los rituales asociados a ese culto extranjero, que según algunas interpretaciones tradicionales incluía prácticas de naturaleza sexual explícita como parte de su ceremonial religioso. Esa asociación temprana con la transgresión sexual y la conducta desviada marcó de manera decisiva el desarrollo posterior de su figura dentro de la demonología cristiana.

Con el tiempo, sin embargo, la caracterización específica de Belfegor dentro de los textos demonológicos medievales y renacentistas se desplazó de manera curiosa hacia una asociación distinta: en lugar de vincularse principalmente con la lujuria, como podría esperarse por su origen moabita, Belfegor terminó consolidándose como el príncipe infernal asociado específicamente con el pecado capital de la pereza, presentado en algunos textos como un demonio encargado de tentar a los seres humanos ofreciéndoles inventos y descubrimientos ingeniosos que prometían facilitar considerablemente el trabajo cotidiano, fomentando así indirectamente la comodidad y la evasión del esfuerzo genuino. Distintas tradiciones folclóricas posteriores, especialmente en Francia e Italia, lo describieron adoptando la forma de una hermosa doncella para engañar a sus víctimas, un rasgo cambiaformas que distingue su figura de la de otros grandes príncipes infernales representados casi siempre con formas fijas y reconocibles.`,
    origen: 'Baal Peor, divinidad moabita del Libro de los Números, demonizada por la tradición cristiana.',
    dominio: 'La pereza y los inventos engañosos', naturaleza: 'Príncipe infernal cambiaformas', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'paimon', nombre: 'Paimon', nombre_griego: 'Paimon',
    epitetos: 'El Gran Rey que Enseña las Artes y las Ciencias',
    descripcion_corta: 'Primer rey listado en la Ars Goetia, que acude montado sobre un dromedario acompañado de música atronadora, capaz de enseñar todas las artes y ciencias existentes.',
    descripcion_larga: `Paimon ocupa un lugar destacado entre los principales reyes catalogados en la Ars Goetia, la primera y más célebre de las cinco secciones que componen la Clavícula de Salomón, un influyente grimorio de magia ceremonial compilado durante el siglo XVII a partir de tradiciones anteriores como la Pseudomonarchia Daemonum de Johann Weyer, publicada en 1577. Según describen estos textos, Paimon se manifiesta ante quien lo invoca correctamente montado sobre un dromedario, precedido por un estruendo atronador de trompetas y otros instrumentos musicales que anuncian su llegada, y acompañado por una comitiva numerosa de espíritus subordinados que se presentan bajo la apariencia de hombres con voces femeninas.

Se le atribuye la capacidad de enseñar con una precisión y una completitud extraordinarias todas las artes y ciencias existentes, incluida la filosofía, así como revelar secretos ocultos sobre la tierra, los vientos y las aguas, y otorgar familiares espirituales de gran conocimiento a quienes lo invocaran correctamente. Los textos advierten, sin embargo, que Paimon posee un temperamento particularmente exigente y susceptible al desprecio, requiriendo del invocador ofrendas específicas y un respeto ceremonial riguroso, ya que se muestra propenso a engañar o a resistirse a cumplir las peticiones de quienes lo invocan sin la preparación adecuada. Dentro de la jerarquía infernal descrita por la Ars Goetia, Paimon aparece gobernando sobre doscientas legiones de espíritus subordinados, y se le describe además con un rostro andrógino, ni claramente masculino ni femenino, portando una corona que subraya su elevada posición dentro de la estructura jerárquica del infierno según el sistema clasificatorio propio de este grimorio.`,
    origen: 'Uno de los reyes catalogados en la Ars Goetia, la Clavícula de Salomón.',
    dominio: 'Las artes, las ciencias y el conocimiento oculto', naturaleza: 'Gran rey infernal de la Ars Goetia', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'bael', nombre: 'Bael', nombre_griego: 'Bael',
    epitetos: 'El Primer Rey de la Ars Goetia',
    descripcion_corta: 'Descrito con tres cabezas simultáneas (hombre, gato y sapo), es el primer demonio listado en la Ars Goetia, capaz de otorgar sabiduría e invisibilidad a sus invocadores.',
    descripcion_larga: `Bael encabeza literalmente la lista de los setenta y dos espíritus catalogados en la Ars Goetia, ocupando la primera posición dentro de ese influyente sistema clasificatorio de demonología ceremonial desarrollado durante el Renacimiento a partir de tradiciones de grimorios medievales anteriores. Su nombre deriva probablemente de "Baal", un título genérico que en las lenguas semíticas antiguas significaba simplemente "señor" o "amo", empleado originalmente para designar a numerosas divinidades locales distintas dentro de las religiones cananeas y fenicias, varias de las cuales terminaron transformadas, de manera similar a Astaroth y Belfegor, en figuras demoníacas independientes dentro de la tradición cristiana posterior.

Según describe la Ars Goetia, Bael se manifiesta ante quien lo invoca con una apariencia particularmente inusual y perturbadora: posee simultáneamente tres cabezas distintas sobre un mismo cuerpo, una con forma de hombre, otra con forma de sapo, y una tercera con forma de gato, presentándose a veces con las tres cabezas visibles al mismo tiempo y otras solo con una de ellas, según su propia voluntad en cada aparición particular. Su voz, según los textos, resultaba áspera y ronca, poco agradable al oído del invocador. Se le atribuye el gobierno sobre sesenta y seis legiones de espíritus infernales subordinados, así como la capacidad de otorgar sabiduría a quienes lo invocaran correctamente y, de manera especialmente valorada dentro de la tradición mágica renacentista, el poder de conceder invisibilidad a su invocador, una habilidad que lo convirtió en uno de los espíritus más solicitados entre quienes practicaban la magia ceremonial de la época en busca de discreción o protección frente a enemigos.`,
    origen: 'Primer espíritu listado en la Ars Goetia, derivado del título semítico "Baal".',
    dominio: 'La sabiduría y la invisibilidad', naturaleza: 'Primer rey infernal de la Ars Goetia', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'moloch', nombre: 'Moloc', nombre_griego: 'Moloch',
    epitetos: 'El Devorador de Niños',
    descripcion_corta: 'Divinidad amonita cuyo culto, según el Antiguo Testamento, exigía el sacrificio de niños arrojados al fuego, convertido desde entonces en símbolo perpetuo del sacrificio cruel.',
    descripcion_larga: `Moloc aparece mencionado en varios pasajes del Antiguo Testamento, particularmente en el Levítico y los Reyes, como una divinidad venerada por el pueblo amonita cuyo culto, según describen esos mismos textos bíblicos, incluía el sacrificio ritual de niños arrojados al fuego en su honor, una práctica que la ley israelita condenaba con la pena capital para cualquiera de sus propios miembros que se atreviera a participar en ella. El valle de Ben-Hinom, situado cerca de Jerusalén y asociado directamente con esos sacrificios prohibidos según el relato bíblico, se convirtió con el tiempo en la base lingüística y conceptual del término "Gehena", empleado en el Nuevo Testamento como sinónimo del propio infierno, un vínculo directo entre el culto histórico a Moloc y la concepción cristiana posterior del castigo eterno.

La exactitud histórica y arqueológica de las prácticas de sacrificio infantil directamente atribuidas al culto amonita de Moloc sigue siendo objeto de debate considerable entre historiadores y arqueólogos modernos, algunos de los cuales sugieren que la descripción bíblica pudo haber exagerado o tergiversado deliberadamente prácticas rituales reales con fines polémicos contra una religión rival. Independientemente de ese debate académico, la figura de Moloc quedó consolidada de manera permanente dentro de la tradición literaria y cultural occidental como el símbolo por excelencia del sacrificio cruel e injustificable, empleado célebremente por John Milton en "El paraíso perdido" como uno de los principales generales del ejército de Satán, descrito explícitamente como "manchado con sangre de sacrificios humanos y lágrimas de padres", y reutilizado en incontables ocasiones posteriores dentro de la literatura, el cine y el discurso político como metáfora directa de cualquier sistema o ideología que exija sacrificios humanos, literales o figurados, en su propio nombre.`,
    origen: 'Divinidad amonita mencionada en el Antiguo Testamento, asociada al sacrificio infantil.',
    dominio: 'El sacrificio cruel y el fuego', naturaleza: 'Divinidad amonita demonizada', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'baphomet', nombre: 'Baphomet', nombre_griego: 'Baphomet',
    epitetos: 'El Símbolo del Equilibrio Cósmico',
    descripcion_corta: 'Deidad supuestamente venerada por los Templarios según sus acusadores medievales, reinventada en el siglo XIX por Eliphas Levi como un símbolo elaborado del equilibrio de opuestos.',
    descripcion_larga: `El nombre "Baphomet" surge por primera vez documentado dentro del contexto de los juicios contra la Orden de los Caballeros Templarios, procesados y disueltos por la Corona francesa y el papado a comienzos del siglo XIV bajo acusaciones que incluían, entre numerosos cargos, la veneración secreta de un ídolo conocido bajo ese nombre, probablemente una deformación deliberada o accidental de "Mahomet" (Mahoma), reflejando los prejuicios y las tensiones religiosas propias de la época cruzada contra el mundo islámico. La naturaleza exacta y hasta la existencia real de ese supuesto ídolo templario sigue siendo objeto de intenso debate historiográfico, considerando muchos estudiosos que las acusaciones formaban parte de una campaña política y económica orquestada por el rey Felipe IV de Francia para apropiarse de las considerables riquezas de la orden, más que una descripción fiel de prácticas religiosas templarias reales.

La imagen visual hoy universalmente asociada con Baphomet —una figura con cabeza de cabra, cuerpo humano, alas, un pentagrama sobre la frente, y los brazos señalando simbólicamente hacia arriba y hacia abajo— fue creada íntegramente en 1856 por el ocultista francés Éliphas Lévi, quien la diseñó de manera deliberada como una representación simbólica compleja destinada a expresar el equilibrio de opuestos: lo masculino y lo femenino, lo espiritual y lo material, la luz y la oscuridad, unidos armoniosamente en una sola figura, más cercana en su intención original a un concepto filosófico y esotérico que a una entidad demoníaca propiamente dicha destinada a inspirar temor. Pese a esa intención original mucho más matizada, la imagen de Lévi se popularizó con el tiempo, especialmente a partir del siglo XX, como un símbolo genérico asociado al satanismo y al ocultismo dentro de la cultura popular occidental, alejándose considerablemente del significado filosófico original que su propio creador había querido transmitir.`,
    origen: 'Ídolo atribuido a los Caballeros Templarios, reinventado visualmente por Éliphas Lévi en 1856.',
    dominio: 'El equilibrio de opuestos y el ocultismo', naturaleza: 'Símbolo demoníaco de origen moderno', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'pazuzu-demonologia', nombre: 'Pazuzu', nombre_griego: 'Pazuzu',
    epitetos: 'El Rey de los Demonios del Viento',
    descripcion_corta: 'Demonio mesopotámico del viento del suroeste, portador de plagas y sequía, cuyas propias amuletos protegían paradójicamente a las embarazadas contra la temida Lamashtu.',
    descripcion_larga: `Pazuzu es una figura demoníaca de la antigua Mesopotamia, documentada principalmente a través de textos y amuletos asirios y babilónicos que datan aproximadamente del primer milenio antes de nuestra era, descrito como el rey de los demonios del viento, específicamente asociado con el viento abrasador del suroeste que traía consigo sequía, langostas y enfermedades a las poblaciones de la región mesopotámica. Se le representaba con una iconografía particularmente distintiva y reconocible: cabeza de perro o de león, cuerpo humano cubierto de escamas, garras de ave rapaz, dos pares de alas extendidas, y una cola de escorpión, una combinación de rasgos híbridos destinada a transmitir tanto su poder devastador como su naturaleza fundamentalmente caótica y temible.

Paradójicamente, y pese a su naturaleza claramente destructiva, Pazuzu era invocado también con frecuencia como figura protectora, especialmente para las mujeres embarazadas y los recién nacidos, precisamente porque se le consideraba el gran rival y némesis directa de Lamashtu, otra temida demonio mesopotámica asociada específicamente con la muerte infantil y las complicaciones durante el embarazo. Numerosos amuletos con la imagen de la cabeza de Pazuzu se colgaban tradicionalmente en las habitaciones de parto o alrededor del cuello de las embarazadas, bajo la creencia de que su presencia protectora, aunque temible en sí misma, resultaba suficiente para ahuyentar a la todavía más peligrosa Lamashtu. Esta figura mesopotámica alcanzó una notoriedad considerable en la cultura popular occidental contemporánea gracias a su papel central como la entidad poseedora en la influyente novela y posterior película "El Exorcista", que popularizó su iconografía distintiva entre audiencias completamente ajenas a su origen académico y arqueológico original.`,
    origen: 'Demonio del viento de la antigua Mesopotamia, documentado en amuletos asirios y babilónicos.',
    dominio: 'El viento devastador y la protección paradójica', naturaleza: 'Rey demoníaco mesopotámico', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'naamah', nombre: 'Naamah', nombre_griego: 'Naamah',
    epitetos: 'La Seductora, Madre de Demonios',
    descripcion_corta: 'Figura bíblica de origen ambiguo transformada por la tradición cabalística en demonio seductor y madre de espíritus nocturnos junto a Samael, hermana espiritual de Lilith.',
    descripcion_larga: `Naamah aparece mencionada brevemente en el Génesis como descendiente de Caín, hermana de Tubal-caín, sin que el texto bíblico original le atribuya ninguna característica demoníaca particular más allá de su simple mención genealógica dentro del linaje humano temprano. Fue la tradición cabalística medieval y renacentista, especialmente desarrollada dentro de textos místicos judíos posteriores, la que transformó por completo su figura, convirtiéndola en una de las principales entidades demoníacas femeninas del sistema cabalístico, con frecuencia presentada junto a Lilith y Agrat bat Mahlat como una de las llamadas "cuatro reinas de los demonios", esposas o consortes de Samael dentro del complejo entramado simbólico de fuerzas oscuras que la Cábala desarrolló como contraparte del orden divino representado por las sefirot.

Según estas tradiciones cabalísticas, Naamah poseía una belleza seductora extraordinaria, empleada específicamente para tentar a los hombres durante el sueño y engendrar con ellos una descendencia de espíritus y demonios menores, de manera similar aunque distinta al mito ya consolidado sobre Lilith. Se le atribuía también, en algunas versiones de estas tradiciones, un papel activo en la seducción original de los ángeles caídos conocidos como los Grigori o Vigilantes, mencionados en textos apócrifos como el Libro de Enoc, que descendieron a la tierra atraídos precisamente por la belleza de las mujeres mortales, incluida Naamah entre ellas según ciertas interpretaciones. Su figura, aunque considerablemente menos conocida en la cultura popular contemporánea que la de Lilith, ocupa un lugar significativo dentro de la demonología cabalística como una de las grandes entidades femeninas asociadas a la tentación sexual y la generación de espíritus menores dentro del reino de las fuerzas oscuras.`,
    origen: 'Figura del Génesis, transformada por la tradición cabalística en demonio seductor.',
    dominio: 'La seducción y la generación de espíritus menores', naturaleza: 'Reina demoníaca de la Cábala', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'azazel', nombre: 'Azazel', nombre_griego: 'Azazel',
    epitetos: 'El Que Enseñó a los Hombres los Secretos Prohibidos',
    descripcion_corta: 'Ángel caído que, según el Libro de Enoc, enseñó a la humanidad el arte de la guerra y la vanidad, y receptor original del chivo expiatorio en el ritual bíblico del Yom Kipur.',
    descripcion_larga: `Azazel ocupa un lugar doble y particularmente significativo dentro de la tradición demonológica judía: por un lado, aparece nombrado en el Levítico como el destinatario simbólico de uno de los dos machos cabríos empleados en el ritual del Yom Kipur, el Día de la Expiación, sobre el cual el sumo sacerdote confesaba simbólicamente los pecados de todo el pueblo israelita antes de enviarlo, cargado con esas transgresiones, hacia el desierto en dirección a "Azazel", un término cuya naturaleza exacta —si designa un lugar específico, una entidad demoníaca del desierto, o simplemente el propio proceso de expulsión ritual— sigue siendo objeto de debate académico considerable entre los estudiosos bíblicos.

Por otro lado, y de manera considerablemente más desarrollada narrativamente, el Libro de Enoc, un texto apócrifo de gran influencia dentro de ciertas tradiciones judías y cristianas tempranas aunque finalmente excluido del canon bíblico oficial, presenta a Azazel como uno de los líderes principales de los Grigori o Vigilantes, un grupo de doscientos ángeles que descendieron del cielo atraídos por la belleza de las mujeres mortales, uniéndose a ellas y engendrando con ellas una raza de gigantes conocidos como los Nefilim. Según ese mismo texto, Azazel enseñó específicamente a la humanidad el arte de forjar armas y armaduras de guerra, así como técnicas de embellecimiento personal y cosméticos que el texto condena como fuente de vanidad y corrupción moral generalizada entre las mujeres. Como castigo por esa transgresión de revelar conocimientos prohibidos, Dios ordena, según narra el Libro de Enoc, que el arcángel Rafael ate a Azazel de pies y manos y lo arroje a un abismo oscuro en el desierto, cubierto de piedras afiladas, donde permanecería confinado hasta el día del juicio final.`,
    origen: 'Ángel caído del Libro de Enoc, líder de los Grigori que enseñaron secretos prohibidos a la humanidad.',
    dominio: 'La guerra, la vanidad y el conocimiento prohibido', naturaleza: 'Ángel caído devenido demonio del desierto', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'demonologia'");
  if (filas.length === 0) throw new Error('No existe el libro "demonologia" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando primordiales y grandes principes de Demonologia (parte 1)...\n');
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
