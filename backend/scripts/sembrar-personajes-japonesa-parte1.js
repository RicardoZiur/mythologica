// ============================================================
// scripts/sembrar-personajes-japonesa-parte1.js
// ------------------------------------------------------------
// Primer lote de Mitologia Japonesa: 5 titanes/primordiales y 15
// dioses (kami). A diferencia de Azteca/Sumeria/Maya, el contenido
// se escribe ya completo desde el inicio -- descripcion_larga a su
// extension final, mas simbolos/poderes/vinculos familiares en el
// mismo paso -- para que las hojas del PDF no queden con espacio
// de sobra desde el primer momento. Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-japonesa-parte1.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- TITANES / PRIMORDIALES ---
  {
    tipo: 'titan', slug: 'izanagi', nombre: 'Izanagi', nombre_griego: 'Izanagi-no-Mikoto',
    epitetos: 'El que Invita, Padre de los Dioses',
    descripcion_corta: 'Dios primordial masculino que, junto a Izanami, dio forma a las islas de Japón removiendo el océano con una lanza celestial.',
    descripcion_larga: `Izanagi e Izanami fueron enviados por los dioses celestiales anteriores a ellos a completar la creación del mundo, aún flotante e informe, con la orden de "consolidar y dar forma a esta tierra que se mece". De pie sobre el Puente Flotante del Cielo, Izanagi hundió la lanza enjoyada Ame-no-nuboko en el océano primordial y la removió; al levantarla, las gotas que cayeron de su punta se solidificaron formando la primera isla, Onogoro, donde ambos descendieron para casarse y continuar dando origen al resto del archipiélago japonés y a numerosos dioses menores.

Tras la muerte de Izanami al dar a luz al dios del fuego, Izanagi descendió a Yomi, el país de las sombras, para intentar recuperarla, pero al desobedecer su advertencia de no mirarla y encender una luz, la vio convertida ya en un cadáver en descomposición, cubierta de gusanos y perseguida por espíritus del trueno. Huyó de vuelta al mundo de los vivos sellando la entrada con una roca gigante, y al purificarse después en un río, de las gotas de agua que lavaron su rostro nacieron sus tres hijos más importantes: Amaterasu de su ojo izquierdo, Tsukuyomi de su ojo derecho, y Susanoo de su nariz.`,
    origen: 'Dios primordial masculino, enviado junto a Izanami a dar forma al mundo.',
    dominio: 'La creación del mundo y la purificación', naturaleza: 'Dios creador primordial', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'izanami', nombre: 'Izanami', nombre_griego: 'Izanami-no-Mikoto',
    epitetos: 'La que Invita, Señora de Yomi',
    descripcion_corta: 'Diosa primordial femenina, esposa de Izanagi — tras morir dando a luz al fuego, se convierte en soberana del país de las sombras.',
    descripcion_larga: `Izanami completa junto a Izanagi la pareja primordial que da forma a Japón: tras descender a la isla recién creada de Onogoro, ambos celebran una ceremonia nupcial rodeando un gran pilar celestial, aunque su primer hijo nace deforme porque Izanami, la mujer, había hablado primero durante el ritual, una falta que debieron corregir repitiendo la ceremonia con Izanagi hablando antes que ella. Corregido el error, Izanami da a luz a las islas del archipiélago japonés una por una, y después a numerosos dioses que gobernarían el viento, los árboles, las montañas y el mar.

Su muerte llega al dar a luz al último de sus hijos, Kagutsuchi, el dios del fuego, cuyas llamas la queman fatalmente durante el parto. Izanami desciende entonces a Yomi, el país de las sombras, donde con el tiempo se convierte en su soberana. Cuando Izanagi la sigue para intentar rescatarla y la ve ya transformada en un cadáver putrefacto, Izanami, furiosa y humillada por la traición de haber sido observada contra su voluntad, lo persigue con demonios y truenos hasta la entrada misma del mundo de los vivos, jurando ahogar cada día a mil personas en venganza —una amenaza que Izanagi contrarresta prometiendo que, a cambio, mil quinientas nacerán, el origen mítico del equilibrio entre la vida y la muerte.`,
    origen: 'Diosa primordial femenina, esposa de Izanagi.',
    dominio: 'La creación del mundo y el inframundo', naturaleza: 'Diosa creadora, señora de la muerte', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'kunitokotachi', nombre: 'Kunitokotachi', nombre_griego: 'Kunitokotachi-no-Kami',
    epitetos: 'El Eterno Señor de la Tierra',
    descripcion_corta: 'La primera deidad en tomar forma sólida tras la separación del cielo y la tierra, según el Nihon Shoki — el origen mismo de la tierra firme.',
    descripcion_larga: `Según el Nihon Shoki, una de las dos crónicas fundacionales de la mitología japonesa junto al Kojiki, Kunitokotachi fue la primera deidad en manifestarse en el momento exacto en que el cielo y la tierra, hasta entonces mezclados como una masa caótica parecida al aceite flotando sin forma, comenzaron por fin a separarse. Su nombre significa literalmente "el eterno señor de la tierra que se mantiene erguida", y se le describe brotando de esa masa primordial de manera espontánea, sin padres ni creador previo, de forma tan parecida a un junco emergiendo del lodo que algunas versiones del mito lo comparan directamente con esa imagen vegetal.

A diferencia de dioses posteriores como Izanagi o Amaterasu, Kunitokotachi no protagoniza episodios narrativos activos: su función es puramente fundacional, marcar el instante mismo en que la tierra adquiere por primera vez una forma estable sobre la que después podrán actuar el resto de los dioses. Algunas tradiciones sintoístas posteriores lo elevaron a la categoría de principio cósmico casi abstracto, identificándolo con la tierra misma en su totalidad, mientras otras lo trataron simplemente como el primero de una larga sucesión de generaciones divinas que culminaría, siete generaciones después, en el nacimiento de Izanagi e Izanami.`,
    origen: 'Primera deidad en surgir tras la separación primordial del cielo y la tierra.',
    dominio: 'La tierra firme y el origen del mundo', naturaleza: 'Dios primordial fundacional', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'ame-no-minakanushi', nombre: 'Ame-no-Minakanushi', nombre_griego: 'Ame-no-Minakanushi-no-Kami',
    epitetos: 'El Señor Central del Cielo Augusto',
    descripcion_corta: 'El primero y más abstracto de los tres dioses de la creación del Kojiki — un principio ordenador invisible que nunca actúa directamente en ningún mito.',
    descripcion_larga: `El Kojiki, la crónica mitológica más antigua de Japón, abre su relato de la creación nombrando a tres divinidades que aparecen antes que cualquier otra en el cosmos: los llamados Kotoamatsukami, o "dioses celestiales especiales". Ame-no-Minakanushi encabeza ese trío como el primero y más elevado de todos, su nombre traducible como "el señor augusto del centro del cielo", una entidad concebida como el punto fijo alrededor del cual se ordena el resto del universo naciente, de forma similar a como la estrella polar parece organizar el giro completo del cielo nocturno visible.

A diferencia de casi cualquier otra divinidad del panteón japonés, Ame-no-Minakanushi no protagoniza ningún episodio narrativo: el propio Kojiki señala que, tras manifestarse, "ocultó su cuerpo" de inmediato, retirándose por completo de la acción activa del mito. Esta ausencia deliberada no se interpreta como debilidad sino como la máxima expresión posible de autoridad: su sola existencia basta para establecer el orden cósmico, sin necesidad de intervenir jamás en los asuntos de dioses o mortales. Siglos después, durante el periodo Edo, ciertos estudiosos del kokugaku ("estudios nacionales") revalorizaron su figura como posible equivalente japonés de un dios creador único y supremo, en diálogo directo con las ideas monoteístas que empezaban a llegar de Occidente.`,
    origen: 'El primero de los tres Kotoamatsukami, dioses celestiales anteriores a cualquier otro.',
    dominio: 'El centro invisible del orden cósmico', naturaleza: 'Dios primordial abstracto', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'takamimusubi', nombre: 'Takamimusubi', nombre_griego: 'Takamimusubi-no-Kami',
    epitetos: 'El Alto Dios de la Generación Sagrada',
    descripcion_corta: 'Uno de los tres dioses primordiales de la creación, y siglos después el estratega divino que organiza el descenso de Ninigi para gobernar la tierra.',
    descripcion_larga: `Takamimusubi es el segundo de los tres Kotoamatsukami nombrados al inicio del Kojiki, y su nombre incorpora la raíz "musubi", asociada a la fuerza generativa y vinculante que conecta y da origen a todas las cosas —la misma raíz que da nombre al hilo rojo del destino en el folclore japonés posterior—. A diferencia de Ame-no-Minakanushi, que se retira por completo de la narrativa apenas manifestarse, Takamimusubi reaparece activamente generaciones más tarde, convertido en una de las figuras de mayor peso político dentro de la asamblea de dioses celestiales conocida como Takamagahara.

Es Takamimusubi quien, junto a Amaterasu, preside las deliberaciones sobre quién debe descender a gobernar la tierra todavía convulsa, y quien organiza en la práctica los detalles del descenso de Ninigi, nieto de Amaterasu: reúne a los dioses guías necesarios, incluido Sarutahiko, y supervisa que el joven príncipe llegue investido con la autoridad y los objetos sagrados adecuados. Su papel ejemplifica una dualidad poco común en la mitología japonesa: es a la vez uno de los principios más antiguos y abstractos de la creación, y también un actor político concreto y decisivo en el mito de fundación del linaje imperial, dos funciones que rara vez conviven en una sola figura divina.`,
    origen: 'El segundo de los tres Kotoamatsukami, dioses celestiales primordiales.',
    dominio: 'La generación divina y la estrategia celestial', naturaleza: 'Dios primordial y estratega de Takamagahara', es_preview: 0
  },

  // --- DIOSES ---
  {
    tipo: 'dios', slug: 'amaterasu', nombre: 'Amaterasu', nombre_griego: 'Amaterasu-Ōmikami',
    epitetos: 'La Gran Deidad que Ilumina el Cielo, Diosa del Sol',
    descripcion_corta: 'Diosa del sol y suprema soberana de los kami celestiales — ancestro divino directo de la línea imperial japonesa.',
    descripcion_larga: `Amaterasu nació del ojo izquierdo de Izanagi mientras este se purificaba en un río tras escapar del país de las sombras, y desde el principio destacó sobre sus hermanos Tsukuyomi y Susanoo por un resplandor tan intenso que su propio padre decidió entregarle el gobierno de Takamagahara, la llanura celestial, considerándola digna de presidir el cielo entero. Su templo principal, el Gran Santuario de Ise, sigue siendo hoy el recinto sintoísta más venerado de todo Japón, reconstruido ritualmente cada veinte años exactos desde hace más de un milenio como parte de un ciclo de renovación llamado shikinen sengu.

El episodio más célebre de su mito narra cómo, harta del comportamiento destructivo de su hermano Susanoo dentro de sus propios dominios celestiales, se encerró en la Cueva Celestial Ama-no-Iwato, sumiendo al mundo entero en una oscuridad total. Solo un plan ideado por los demás dioses —colgar un espejo frente a la entrada y hacer bailar de forma tan cómica y provocadora a la diosa Ame-no-Uzume que el resto de la asamblea estallara en carcajadas— logró despertar su curiosidad lo suficiente como para asomarse, momento en que fue sacada a la fuerza y la luz regresó al mundo. Generaciones después, fue Amaterasu quien decidió enviar a su nieto Ninigi a gobernar la tierra, entregándole el espejo sagrado Yata no Kagami como símbolo de su autoridad —el mismo objeto que, según la tradición sintoísta, todavía forma parte de las Tres Insignias Imperiales de Japón.`,
    origen: 'Nacida del ojo izquierdo de Izanagi durante su purificación tras Yomi.',
    dominio: 'El sol y la soberanía celestial', naturaleza: 'Diosa suprema del panteón sintoísta', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'susanoo', nombre: 'Susanoo', nombre_griego: 'Susanoo-no-Mikoto',
    epitetos: 'El Impetuoso Dios Varón, Señor de las Tormentas Marinas',
    descripcion_corta: 'Dios de las tormentas y el mar, hermano turbulento de Amaterasu — expulsado del cielo, se redime matando a la serpiente Yamata-no-Orochi.',
    descripcion_larga: `Susanoo nació de la nariz de Izanagi durante la misma purificación que dio origen a Amaterasu y Tsukuyomi, y su padre le asignó el gobierno del mar; pero Susanoo, atormentado por el deseo de reunirse con su madre Izanami en el país de las sombras, lloraba con tal furia que secaba montañas enteras y marchitaba bosques completos, hasta que un Izanagi exasperado terminó por desterrarlo. Antes de partir, subió a Takamagahara a despedirse de su hermana Amaterasu, pero su llegada estruendosa la hizo temer una invasión, y el reencuentro terminó en una serie de travesías destructivas dentro del propio dominio celestial de su hermana —arruinó campos de arroz, profanó salones sagrados y arrojó un caballo desollado dentro de su taller de tejido—, provocando que Amaterasu se encerrara indignada en la Cueva Celestial.

Expulsado definitivamente del cielo, Susanoo descendió a la región de Izumo, donde encontró a una pareja de ancianos llorando porque una serpiente gigantesca de ocho cabezas, Yamata-no-Orochi, exigía devorar cada año a una de sus hijas, y ya solo les quedaba la menor, Kushinada-hime. Susanoo ideó un plan: hizo preparar ocho tinas de sake potente, una para cada cabeza, y cuando el monstruo cayó embriagado, lo decapitó por completo con su espada. Dentro de la cola de la serpiente encontró una espada extraordinaria, Kusanagi, que envió como regalo de reconciliación a su hermana Amaterasu —el mismo objeto que se convertiría, junto al espejo y la joya, en una de las Tres Insignias Imperiales—, y se casó con Kushinada-hime, estableciéndose como gobernante de Izumo.`,
    origen: 'Nacido de la nariz de Izanagi durante su purificación tras Yomi.',
    dominio: 'Las tormentas, el mar y la victoria sobre monstruos', naturaleza: 'Dios impetuoso de la tormenta', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'tsukuyomi', nombre: 'Tsukuyomi', nombre_griego: 'Tsukuyomi-no-Mikoto',
    epitetos: 'El Dios que Cuenta las Lunas',
    descripcion_corta: 'Dios de la luna, hermano de Amaterasu — su separación de ella tras matar a la diosa de la comida explica por qué el sol y la luna nunca comparten el cielo.',
    descripcion_larga: `Tsukuyomi nació del ojo derecho de Izanagi, complemento nocturno directo de su hermana Amaterasu, nacida del ojo izquierdo, y recibió de su padre el gobierno de la noche tal como ella recibió el del día. A diferencia de sus hermanos Amaterasu y Susanoo, protagonistas de numerosos episodios narrativos, Tsukuyomi aparece en muy pocos mitos documentados, un silencio narrativo que ha llevado a los estudiosos a considerarlo una de las divinidades más enigmáticas del panteón sintoísta pese a su rango elevadísimo entre los tres hijos más importantes de Izanagi.

El relato que mejor explica su papel cósmico cuenta que Amaterasu, todavía en buenos términos con él, lo envió a un banquete ofrecido por Uke Mochi, la diosa de la comida, para representarla. Uke Mochi preparó el festín de una manera que a Tsukuyomi le pareció repugnante: escupiendo arroz cocido de su boca, pescado de su nariz y carne de otras partes de su cuerpo. Furioso y asqueado, Tsukuyomi la mató en el acto. Cuando Amaterasu se enteró de lo ocurrido, se sintió tan horrorizada por la crueldad de su hermano que juró no volver a mirarlo jamás, motivo por el cual el sol y la luna, desde entonces, ocupan turnos separados en el cielo y nunca aparecen juntos —una de las explicaciones mitológicas más citadas del ciclo día-noche dentro de la tradición japonesa.`,
    origen: 'Nacido del ojo derecho de Izanagi durante su purificación tras Yomi.',
    dominio: 'La luna y la noche', naturaleza: 'Dios lunar', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'inari', nombre: 'Inari', nombre_griego: 'Inari Ōkami',
    epitetos: 'La Gran Deidad que Carga el Arroz',
    descripcion_corta: 'Deidad del arroz, la fertilidad y la prosperidad — su culto, servido por zorros mensajeros, es el más extendido de todo Japón.',
    descripcion_larga: `Inari gobierna el cultivo del arroz, alimento central de la dieta y la economía japonesas durante siglos, y por extensión también la fertilidad agrícola en general, el comercio próspero y el éxito en cualquier empresa que requiera crecimiento constante. Su culto es, en número de santuarios, el más extendido de todo el país: se calcula que más de treinta mil templos dedicados a Inari salpican Japón, encabezados por el santuario Fushimi Inari-taisha en Kioto, famoso por su túnel de miles de torii bermellón donados por devotos a lo largo de generaciones, uno tras otro, formando un pasillo que asciende toda la montaña sagrada.

Una particularidad de Inari, poco común entre las grandes divinidades sintoístas, es la ambigüedad deliberada de su género: se le representa indistintamente como hombre, mujer o incluso andrógino según la región y la época, sin que exista una versión "correcta" única. Sus mensajeros son los zorros blancos o kitsune, criaturas consideradas sagradas y protegidas en cualquier santuario dedicado a esta deidad, cuyas estatuas —a menudo sosteniendo una llave, una gema o una espiga de arroz en la boca— flanquean casi siempre la entrada. Con el tiempo, el propio Inari terminó asociándose tan estrechamente con los zorros que buena parte de la creencia popular japonesa llegó a confundir a la deidad con sus mensajeros, atribuyendo a los kitsune poderes que originalmente pertenecían solo al dios al que servían.`,
    origen: 'Deidad agrícola de culto muy extendido, de género tradicionalmente ambiguo.',
    dominio: 'El arroz, la fertilidad y la prosperidad', naturaleza: 'Kami de la abundancia', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'raijin', nombre: 'Raijin', nombre_griego: 'Raijin',
    epitetos: 'El Dios del Trueno',
    descripcion_corta: 'Dios del trueno y el rayo, representado como un demonio rodeado de tambores — cada golpe libera una descarga sobre la tierra.',
    descripcion_larga: `Raijin se representa como una figura demoníaca de piel oscura o azulada, musculosa y de expresión feroz, rodeada por un círculo de tambores taiko que porta atados a la espalda como un halo circular. Golpea esos tambores con mazos curvos para producir el sonido del trueno, y cada impacto libera una descarga eléctrica sobre la tierra; su imagen decora templos budistas y sintoístas por igual, generalmente enfrentada a la de su compañero Fujin en las puertas de entrada de los recintos más importantes, ambos flanqueando el umbral como guardianes de la tormenta.

Se le atribuye también, en algunas tradiciones, haber intervenido personalmente durante los intentos de invasión mongola de Japón en el siglo XIII, desatando junto a Fujin las tormentas conocidas después como kamikaze, "viento divino", que dispersaron las flotas invasoras en dos ocasiones distintas. Una leyenda popular de origen budista, sin relación directa con el mito shinto original pero muy extendida en el folclore japonés, sostiene que teme perder su ombligo si un rayo cae mientras alguien está distraído, razón por la cual las madres japonesas advertían tradicionalmente a los niños que se cubrieran el vientre durante las tormentas, para que Raijin no los confundiera con un objetivo y se lo llevara por error.`,
    origen: 'Dios del trueno, representado con forma demoníaca rodeado de tambores.',
    dominio: 'El trueno y el rayo', naturaleza: 'Kami de la tormenta', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'fujin', nombre: 'Fujin', nombre_griego: 'Fūjin',
    epitetos: 'El Dios del Viento',
    descripcion_corta: 'Dios del viento, compañero eterno de Raijin — carga sobre los hombros un gran saco cuyo contenido puede desatar o calmar cualquier vendaval.',
    descripcion_larga: `Fujin se representa con un cuerpo verdoso o azulado similar al de Raijin, cargando siempre sobre los hombros un enorme saco de tela anudado en ambos extremos, del que emergen los vientos del mundo. Según una de las tradiciones más citadas sobre su origen, fue una de las últimas criaturas creadas por Izanagi e Izanami, encargada específicamente de disipar las nieblas primordiales que aún cubrían la tierra recién formada, abriendo el saco por primera vez para despejar el paisaje y permitir que la luz del sol llegara sin obstáculos hasta el suelo.

Su imagen aparece con enorme frecuencia junto a la de Raijin en biombos, pinturas y esculturas de guardianes de templo, formando una de las parejas iconográficas más reconocibles de todo el arte japonés —el biombo Fūjin Raijin-zu, pintado por Tawaraya Sōtatsu en el siglo XVII, es una de las obras maestras más estudiadas del periodo Edo—. Como Raijin, se le atribuye también un papel en la dispersión de las flotas mongolas invasoras del siglo XIII, soltando el contenido completo de su saco sobre el mar en el momento decisivo. En el folclore posterior, un fuerte viento repentino e inexplicable se atribuye todavía hoy, de forma coloquial, a que Fujin ha aflojado por accidente uno de los nudos de su saco.`,
    origen: 'Dios del viento, creado para disipar las nieblas primordiales del mundo recién formado.',
    dominio: 'El viento y las tormentas', naturaleza: 'Kami del viento', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'hachiman', nombre: 'Hachiman', nombre_griego: 'Hachiman-shin',
    epitetos: 'El Dios de los Ocho Estandartes, Protector de los Guerreros',
    descripcion_corta: 'Dios de la guerra y la arquería, patrono divino de los samuráis — protege únicamente las causas que considera justas.',
    descripcion_larga: `Hachiman se convirtió, a lo largo de los siglos, en el kami de la guerra más venerado de todo Japón, adoptado como deidad tutelar por el clan Minamoto y, a través de él, por generaciones enteras de samuráis que le rezaban antes de cada batalla importante. Su culto surgió de la fusión, poco común en la religión japonesa, entre una deidad sintoísta y una figura budista: se le identifica tradicionalmente con el espíritu deificado del legendario emperador Ōjin, y su santuario principal, el Usa Jingū en la isla de Kyūshū, fue durante siglos uno de los pocos templos sintoístas con culto budista integrado bajo un mismo techo.

A diferencia de otros dioses de la guerra en distintas mitologías del mundo, que suelen favorecer sin más la fuerza bruta o la victoria a cualquier costo, Hachiman se distingue por proteger específicamente causas consideradas justas, y se le atribuye la capacidad de retirar su favor a cualquier guerrero, por poderoso que fuera, si consideraba que su motivo para luchar era deshonroso. Su símbolo, la paloma, se convirtió en emblema tan reconocible de su culto que las palomas mismas llegaron a considerarse mensajeras sagradas alrededor de sus santuarios, protegidas de la caza en cualquier terreno consagrado a él.`,
    origen: 'Deidad de la guerra, identificada tradicionalmente con el espíritu del emperador Ōjin.',
    dominio: 'La guerra justa y la arquería', naturaleza: 'Kami protector de los guerreros', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'ebisu', nombre: 'Ebisu', nombre_griego: 'Ebisu',
    epitetos: 'El Dios Sonriente de los Pescadores',
    descripcion_corta: 'Dios de la buena fortuna, los pescadores y el comercio honesto — uno de los Siete Dioses de la Fortuna, y el único de origen puramente japonés.',
    descripcion_larga: `Ebisu es, entre los Siete Dioses de la Fortuna (Shichifukujin) venerados en Japón, el único de origen completamente nativo —el resto llegaron con el tiempo desde tradiciones budistas, hindúes o taoístas importadas de China e India—. Se le representa siempre sonriente, sosteniendo una caña de pescar en una mano y un gran pez tai (una especie de besugo considerado de buen augurio) bajo el otro brazo, imagen que decora hasta hoy comercios y restaurantes japoneses que buscan su bendición para prosperar honestamente.

Según una de las tradiciones que explican su origen, Ebisu nació como Hiruko, el primer hijo de Izanagi e Izanami, concebido durante la ceremonia nupcial defectuosa en la que Izanami habló primero; nacido sin huesos o gravemente deforme según las distintas versiones, sus padres lo colocaron en una barca de juncos y lo dejaron ir a la deriva por el mar. Contra todo pronóstico, Hiruko sobrevivió al abandono y, con el tiempo, se transformó en Ebisu, el dios sonriente de la buena fortuna que llega precisamente desde el mar —una historia que convierte su culto en un raro caso donde la buena suerte nace directamente de una tragedia superada. Los pescadores japoneses lo honran especialmente, atribuyéndole tanto la abundancia de la pesca como la protección frente a las tormentas marinas.`,
    origen: 'Según una tradición, hijo de Izanagi e Izanami abandonado al mar en una barca de juncos.',
    dominio: 'La buena fortuna, la pesca y el comercio', naturaleza: 'Kami de la prosperidad', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'daikokuten', nombre: 'Daikokuten', nombre_griego: 'Daikokuten',
    epitetos: 'El Gran Dios Negro de la Riqueza',
    descripcion_corta: 'Dios de la riqueza, la agricultura y el hogar próspero — otro de los Siete Dioses de la Fortuna, siempre representado sobre sacos de arroz.',
    descripcion_larga: `Daikokuten llegó a Japón como adaptación budista del dios hindú Mahakala, una forma feroz de Shiva asociada originalmente a la destrucción del tiempo, pero en su versión japonesa se transformó por completo en una figura amable y generosa: un anciano robusto de expresión risueña, sentado o de pie sobre dos grandes sacos de arroz, cargando al hombro otro fardo repleto de tesoros y sosteniendo un pequeño martillo dorado, el uchide no kozuchi, capaz de conceder riqueza con cada golpe que da contra el suelo.

Su culto se entrelazó con el tiempo con el de una deidad sintoísta nativa de nombre casi idéntico en su lectura alternativa, Ōkuninushi ("Gran Señor de la Tierra"), fusionando ambas tradiciones —la budista importada y la sintoísta local— en una sola figura venerada por igual en templos de ambas religiones, un ejemplo característico del sincretismo religioso que definió buena parte de la historia espiritual japonesa. Junto a Ebisu, con quien suele representarse en pareja en pinturas y estatuillas domésticas, Daikokuten es probablemente el más popular de los Siete Dioses de la Fortuna en los hogares y comercios japoneses, invocado especialmente durante la temporada de Año Nuevo para asegurar prosperidad en los doce meses siguientes.`,
    origen: 'Adaptación japonesa del dios hindú Mahakala, fusionada con el kami Ōkuninushi.',
    dominio: 'La riqueza, la agricultura y el hogar', naturaleza: 'Kami de la abundancia doméstica', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'benzaiten', nombre: 'Benzaiten', nombre_griego: 'Benzaiten',
    epitetos: 'La Diosa de Todo lo que Fluye',
    descripcion_corta: 'Diosa del agua, la música, la elocuencia y las artes — la única mujer entre los Siete Dioses de la Fortuna, adaptación japonesa de la diosa hindú Sarasvati.',
    descripcion_larga: `Benzaiten llegó a Japón como adaptación budista de Sarasvati, la diosa hindú del conocimiento, la música y los ríos, conservando en su versión japonesa buena parte de ese mismo dominio sobre "todo lo que fluye": el agua, por supuesto, pero también la palabra elocuente, la melodía musical y la inspiración artística en general. Se le representa casi siempre tocando un biwa, el laúd tradicional japonés de cuerdas, y sus santuarios se levantan preferentemente junto a lagos, ríos o en pequeñas islas rodeadas de agua, como el célebre santuario de la isla de Enoshima, cerca de Tokio, o el de Chikubushima en el lago Biwa.

Como única mujer entre los Siete Dioses de la Fortuna, Benzaiten ocupa un lugar particular dentro de ese grupo, venerada especialmente por músicos, actores, escritores y cualquier persona cuyo oficio dependa de la palabra hablada o cantada con destreza. Una leyenda popular asociada a su santuario de Enoshima cuenta que Benzaiten se enamoró de un dragón de cinco cabezas que aterrorizaba la región cercana, y a cambio de su amor logró convencerlo de abandonar la violencia; el dragón, transformado por ese amor, se convirtió después en la colina sobre la que hoy se asienta la ciudad de Fujisawa, una fusión mítica entre paisaje real y leyenda romántica poco habitual en el resto del panteón japonés.`,
    origen: 'Adaptación japonesa de la diosa hindú Sarasvati.',
    dominio: 'El agua, la música y la elocuencia', naturaleza: 'Kami de las artes y lo que fluye', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'bishamonten', nombre: 'Bishamonten', nombre_griego: 'Bishamonten',
    epitetos: 'El Guardián del Norte, Señor de la Fortuna Guerrera',
    descripcion_corta: 'Dios guerrero y guardián del norte, otro de los Siete Dioses de la Fortuna — protege a quienes siguen las reglas y castiga a quienes las rompen.',
    descripcion_larga: `Bishamonten llegó a Japón como adaptación budista de Vaishravana, uno de los Cuatro Reyes Celestiales que en la cosmología budista original custodian cada uno una dirección cardinal del universo; a Bishamonten le corresponde específicamente el norte. Se le representa siempre con armadura completa de guerrero, sosteniendo una pequeña pagoda dorada en una mano —símbolo del tesoro budista que protege— y una lanza o alabarda en la otra, listo para castigar tanto a los demonios como a los seres humanos que se apartan del comportamiento correcto.

A diferencia de dioses de la guerra centrados exclusivamente en la victoria militar, Bishamonten es venerado sobre todo como protector de quienes actúan con disciplina y honestidad, y castigador implacable de la corrupción y el mal comportamiento, una combinación que lo convirtió en patrono favorito de varios señores feudales japoneses, entre ellos el célebre daimyō Uesugi Kenshin, que llegó a identificarse tan estrechamente con Bishamonten que adoptó el carácter "Bi" de su nombre como estandarte personal en batalla. Como uno de los Siete Dioses de la Fortuna, se le asocia también con la buena suerte material, aunque siempre condicionada a un comportamiento recto: a diferencia de Daikokuten o Ebisu, Bishamonten no concede riqueza sin más, sino que la reserva para quienes la merecen según un código moral estricto.`,
    origen: 'Adaptación japonesa de Vaishravana, uno de los Cuatro Reyes Celestiales budistas.',
    dominio: 'La guerra justa y la disciplina', naturaleza: 'Kami guardián del norte', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'konohanasakuya-hime', nombre: 'Konohanasakuya-hime', nombre_griego: 'Konohanasakuya-hime',
    epitetos: 'La Princesa que Hace Florecer los Árboles',
    descripcion_corta: 'Diosa del monte Fuji y de la flor de cerezo, esposa de Ninigi — su elección sobre su hermana explicó para siempre por qué la vida humana es breve.',
    descripcion_larga: `Konohanasakuya-hime es la diosa asociada al monte Fuji y a la flor del cerezo (sakura), la misma flor cuya belleza extraordinaria pero extremadamente breve —apenas unos días de plena floración antes de que sus pétalos caigan— se convirtió en metáfora central de su propio mito. Cuando Ninigi, nieto de Amaterasu, descendió a la tierra y la conoció, quedó tan prendado de su belleza que pidió su mano de inmediato a su padre, el dios de la montaña Ōyamatsumi, quien ofreció a las dos hermanas juntas: Konohanasakuya-hime, radiante como una flor, e Iwanaga-hime, su hermana mayor, asociada en cambio a la permanencia de la roca.

Ninigi, deslumbrado únicamente por la belleza floral de la hermana menor, rechazó a Iwanaga-hime y se casó solo con Konohanasakuya-hime, una decisión que su suegro lamentó profundamente: había ofrecido a ambas juntas precisamente para que la descendencia de Ninigi heredara tanto la belleza pasajera de la flor como la permanencia eterna de la piedra. Al rechazar a la hermana de roca, Ninigi condenó sin saberlo a toda su descendencia —incluida la línea imperial japonesa completa— a una vida tan breve y hermosa como la floración de un cerezo, en vez de la inmortalidad que la unión con ambas hermanas habría concedido. Konohanasakuya-hime demostró después su propia fidelidad de forma dramática: acusada por Ninigi de infidelidad al quedar embarazada tan rápido, se encerró en una choza sin puertas y le prendió fuego, dando a luz sanos a sus tres hijos en medio de las llamas como prueba incuestionable de que eran hijos legítimos del propio Ninigi.`,
    origen: 'Hija del dios de la montaña Ōyamatsumi, esposa de Ninigi.',
    dominio: 'El monte Fuji y la flor de cerezo', naturaleza: 'Kami de la belleza fugaz', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'ryujin', nombre: 'Ryūjin', nombre_griego: 'Ryūjin',
    epitetos: 'El Rey Dragón del Mar',
    descripcion_corta: 'Dios dragón del océano, soberano del palacio submarino Ryūgū-jō — gobierna las mareas con dos joyas mágicas capaces de inundar o calmar el mar.',
    descripcion_larga: `Ryūjin gobierna la totalidad del océano desde su palacio Ryūgū-jō, un castillo construido enteramente de coral rojo y blanco en las profundidades marinas, donde el tiempo transcurre de forma completamente distinta al mundo de la superficie —un solo día en el palacio puede equivaler a cien años fuera de él, un desfase que protagoniza más de una leyenda japonesa sobre visitantes que regresan a tierra firme para descubrir que todo lo que conocían ha desaparecido hace generaciones—. Se le representa como un dragón gigantesco capaz de adoptar también forma humana, y posee dos joyas mágicas de marea, la kanju (que hace subir el agua) y la kanjū (que la hace retroceder), objetos de un poder tan decisivo que cualquier mortal que las obtuviera podría literalmente inundar o secar regiones enteras a voluntad.

Su hija, la princesa Otohime, protagoniza dos de los mitos más conocidos relacionados con Ryūjin: recibe en su palacio al pescador Urashima Tarō tras este rescatar una tortuga marina, y más tarde se casa con el príncipe cazador Hoori, a quien Ryūjin ayuda a recuperar el anzuelo perdido de su hermano y le entrega ambas joyas de marea para vencerlo en un conflicto posterior. A través de ese matrimonio, Ryūjin se convierte en bisabuelo directo del legendario primer emperador Jimmu, entrelazando el linaje del trono imperial japonés no solo con el cielo, a través de Amaterasu, sino también con las profundidades del océano.`,
    origen: 'Dios dragón, soberano del océano y del palacio submarino Ryūgū-jō.',
    dominio: 'El mar y las mareas', naturaleza: 'Kami dragón del océano', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'tenjin', nombre: 'Tenjin', nombre_griego: 'Tenman Tenjin',
    epitetos: 'El Dios Celestial de los Estudios',
    descripcion_corta: 'Dios de la erudición y la caligrafía, deificación del estadista Sugawara no Michizane — venerado hasta hoy por estudiantes antes de cada examen.',
    descripcion_larga: `Tenjin es, entre los grandes kami del panteón japonés, uno de los pocos cuyo origen humano está completamente documentado: fue en vida Sugawara no Michizane, un erudito, poeta y alto funcionario de la corte Heian del siglo IX, célebre por su dominio excepcional de la poesía china y su ascenso meteórico hasta convertirse en uno de los ministros más influyentes del emperador. Sus rivales políticos, encabezados por el clan Fujiwara, lo acusaron falsamente de traición y lograron su exilio a la remota provincia de Dazaifu, donde Michizane murió pocos años después, consumido por la amargura de una injusticia que nunca pudo revertir.

Tras su muerte, una serie de desastres se abatieron sobre la capital: rayos que incendiaron el palacio imperial matando a varios de sus enemigos, sequías, epidemias y la muerte prematura de miembros de la familia imperial, todo interpretado como la venganza del espíritu furioso de Michizane. Para aplacarlo, la corte lo deificó oficialmente como Tenjin, "dios celestial", y le erigió el santuario Kitano Tenmangū en Kioto; con el tiempo, sin embargo, su culto se transformó por completo: dejó de ser temido como espíritu vengativo y pasó a venerarse como patrono benévolo de los estudiantes, gracias a su fama en vida como el erudito más brillante de su generación. Hoy, millones de estudiantes japoneses visitan sus santuarios cada año antes de exámenes importantes, dejando placas de madera (ema) con deseos de éxito académico.`,
    origen: 'Deificación del erudito y estadista Sugawara no Michizane (siglo IX).',
    dominio: 'La erudición, la poesía y los exámenes', naturaleza: 'Kami de origen humano deificado', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'sarutahiko', nombre: 'Sarutahiko', nombre_griego: 'Sarutahiko-no-Ōkami',
    epitetos: 'El Príncipe Mono del Cruce de Caminos Celestial',
    descripcion_corta: 'Kami de la guía y los cruces de caminos — de rostro rojo y nariz descomunal, condujo personalmente a Ninigi hasta la tierra.',
    descripcion_larga: `Sarutahiko se representa tradicionalmente con un rostro rojo brillante y una nariz de longitud descomunal, rasgos que con el tiempo influirían directamente en la iconografía posterior del tengu, el famoso yōkai de las montañas. Cuando Amaterasu y Takamimusubi decidieron finalmente enviar a Ninigi a gobernar la tierra, encontraron el camino celestial bloqueado por una figura imponente cuya luz, según el mito, iluminaba simultáneamente los cielos superiores y el mundo inferior; temerosos, enviaron a la diosa Ame-no-Uzume —la misma que había bailado para hacer salir a Amaterasu de su cueva— a interrogarlo, y fue ella quien descubrió que se trataba de Sarutahiko, dispuesto no a impedir el paso sino a ofrecerse como guía personal del cortejo divino.

Sarutahiko condujo a Ninigi y a su séquito completo hasta la cima del monte Takachiho, el punto exacto donde comenzaría el gobierno terrenal de la línea imperial, cumpliendo así su función como kami patrono de los cruces de caminos, las direcciones correctas y cualquier transición importante entre un estado y otro. Como recompensa por su guía, y en un desenlace poco habitual entre las divinidades del mito japonés, Sarutahiko se casó después con la propia Ame-no-Uzume, que había sido enviada originalmente a investigarlo; sus descendientes, según la tradición, fundaron un linaje sacerdotal dedicado por generaciones al culto de ambos kami combinados.`,
    origen: 'Kami terrestre que bloqueaba el camino celestial hacia la tierra.',
    dominio: 'Los cruces de caminos y la guía divina', naturaleza: 'Kami guía, precursor del tengu', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-japonesa'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-japonesa" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando titanes y dioses de Mitologia Japonesa (parte 1)...\n');
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
