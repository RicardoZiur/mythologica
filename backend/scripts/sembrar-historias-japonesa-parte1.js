// ============================================================
// scripts/sembrar-historias-japonesa-parte1.js
// ------------------------------------------------------------
// Primer lote de historias de Mitologia Japonesa (9 de 18): la
// cosmogonia sintoista, el ciclo de Amaterasu/Susanoo y la
// fundacion del linaje imperial. Contenido ya extenso desde el
// inicio (~550-650 palabras por historia). Idempotente via
// slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-historias-japonesa-parte1.js
// ============================================================

const pool = require('../config/db');

const HISTORIAS = [
  {
    slug: 'la-creacion-del-mundo-sintoista', titulo: 'La creación del mundo', tipo: 'cosmogonia', periodo: 'Antes del tiempo', es_preview: 1,
    resumen: 'Izanagi e Izanami remueven el océano primordial con una lanza celestial enjoyada, y de las gotas que caen de su punta nace la primera isla de Japón.',
    texto_completo: `Antes de que existiera el mundo tal como lo conocemos, el cielo y la tierra formaban una sola masa mezclada, flotando sin forma como aceite sobre el agua, sin peso ni dirección definida. De ese caos primordial surgió, generación tras generación, una sucesión de dioses invisibles, hasta que finalmente nacieron Izanagi, "el que invita", e Izanami, "la que invita", la primera pareja divina capaz de tomar forma completa y actuar sobre el mundo. Los dioses celestiales que los precedían les entregaron entonces una misión precisa: "consolidad y dad forma a esta tierra que se mece a la deriva", y como símbolo de esa tarea les regalaron una lanza enjoyada de nombre Ame-no-nuboko, "la lanza celestial preciosa".

Izanagi e Izanami se dirigieron juntos hasta el Puente Flotante del Cielo, el punto exacto donde el mundo celestial y el mundo terrestre todavía se tocaban, y desde ahí hundieron la punta de la lanza en el océano primordial que se extendía debajo, removiéndolo lentamente en círculos. Cuando por fin la levantaron, las gotas de agua salada que caían de su punta se solidificaron una tras otra al tocar la superficie, acumulándose hasta formar la primera isla firme del mundo: Onogoro, "la isla que se cuaja por sí misma". Ambos descendieron sobre ella, y ahí decidieron casarse formalmente, erigiendo un gran pilar celestial alrededor del cual cada uno caminaría en dirección opuesta hasta encontrarse del otro lado y sellar así su unión.

En su primer intento, sin embargo, algo salió mal: al encontrarse frente al pilar, fue Izanami, la mujer, quien habló primero, exclamando lo hermoso que era su esposo; Izanagi respondió después, pero el orden invertido de las palabras —contrario a lo que se consideraba apropiado— produjo un hijo deforme, Hiruko, "el niño sanguijuela", que la pareja, apenada, colocó en una barca de juncos y dejó ir a la deriva por el mar. Comprendiendo su error, Izanagi e Izanami repitieron la ceremonia completa, esta vez con Izanagi hablando primero como correspondía, y en esta segunda ocasión la unión dio fruto correctamente.

De ese segundo encuentro nacieron, una tras otra, las ocho islas principales que forman el corazón del archipiélago japonés, seguidas después por un número creciente de islas menores, hasta completar la geografía completa del país tal como los antiguos japoneses la conocían. Tras la tierra llegaron los dioses: Izanagi e Izanami engendraron divinidades del viento, de los árboles, de las montañas, de los ríos y del mar, poblando el mundo recién formado con un panteón completo de kami encargados de gobernar cada aspecto de la naturaleza. Solo faltaba un último hijo, el más peligroso de todos: Kagutsuchi, el dios del fuego, cuyo nacimiento quemaría a su propia madre de forma tan grave que la llevaría a la muerte, cerrando así el ciclo de la creación con la primera gran pérdida de la historia divina de Japón —un final trágico que, sin embargo, no detendría a Izanagi en su determinación de recuperar a su esposa perdida, ni impediría que de la tragedia surgieran, poco después, los tres dioses más importantes de todo el panteón sintoísta.`,
    personajes: [['izanagi', 'protagonista'], ['izanami', 'protagonista']]
  },
  {
    slug: 'la-muerte-de-izanami-y-el-descenso-a-yomi', titulo: 'La muerte de Izanami y el descenso a Yomi', tipo: 'tragedia', periodo: 'Poco después de la creación', es_preview: 1,
    resumen: 'Izanami muere al dar a luz al fuego; Izanagi la sigue hasta el país de las sombras, pero al desobedecer su advertencia desata la furia de su esposa y, al huir, purifica su cuerpo dando origen a Amaterasu, Susanoo y Tsukuyomi.',
    texto_completo: `El último hijo de Izanagi e Izanami fue Kagutsuchi, el dios del fuego, cuyo nacimiento quemó tan gravemente el cuerpo de Izanami que murió poco después, entre agonía y fiebre, ante la mirada impotente de su esposo. Izanagi, enloquecido de dolor y furia, desenvainó su espada y decapitó al pequeño Kagutsuchi en el acto, y de la sangre que salpicó las rocas circundantes nacieron varios dioses más, entre ellos algunas de las primeras deidades de las montañas —un nacimiento violento que marcaría, según muchos estudiosos, el origen mítico de los propios volcanes japoneses—. Pero ni la muerte del causante de la tragedia devolvió la vida a Izanami, y Izanagi, incapaz de aceptar la pérdida, decidió lo impensable: descender personalmente hasta Yomi, el país de las sombras donde habitan los muertos, para intentar traerla de vuelta.

Al llegar a la entrada de Yomi, Izanagi llamó a su esposa entre las sombras, y ella, todavía con voz reconocible, le respondió desde la oscuridad, advirtiéndole que ya había probado la comida del inframundo y que eso la ataba a ese reino de forma irreversible; aun así, prometió consultar con los dioses de Yomi si existía alguna forma de liberarla, con una única condición: que Izanagi esperara pacientemente afuera y, bajo ninguna circunstancia, intentara mirarla mientras tanto. Izanagi esperó durante lo que le pareció un tiempo insoportablemente largo, y finalmente, incapaz de contener la impaciencia, rompió un diente de su propio peine de bambú, le prendió fuego como improvisada antorcha, y entró a mirar.

Lo que encontró lo horrorizó por completo: Izanami yacía ya en avanzado estado de descomposición, su cuerpo cubierto de gusanos, y ocho espíritus del trueno anidando entre sus restos, uno en cada parte de su cuerpo en descomposición. Izanami, furiosa y profundamente humillada de haber sido vista en ese estado contra su voluntad expresa, envió a las temibles brujas de Yomi, las shikome, a perseguirlo. Izanagi huyó a toda velocidad, arrojando tras de sí su peine —que se transformó en un matorral de brotes de bambú para retrasarlas— y después las uvas que llevaba en el cabello, convertidas en frutos que las brujas se detuvieron a devorar. Cuando incluso los propios espíritus del trueno y un ejército completo de guerreros de Yomi se unieron a la persecución, Izanagi llegó finalmente a la entrada del inframundo y la selló por completo con una roca gigantesca, imposible de mover desde el otro lado.

Izanami, ya atrapada tras la roca, le gritó furiosa que ahogaría a mil personas del mundo de los vivos cada día en venganza por su traición; Izanagi respondió, sin rencor pero con la misma determinación, que él ordenaría entonces que mil quinientas nacieran cada día para compensarlo —el origen mítico, según la tradición, del equilibrio constante entre la muerte y el nacimiento que sostiene desde entonces a la humanidad—. Profundamente contaminado tras su paso por el país de las sombras, Izanagi se dirigió a un río para purificarse por completo, despojándose de cada prenda y objeto que había llevado consigo a Yomi, cada uno de los cuales dio origen, al tocar el agua, a un nuevo dios menor. Pero fue al lavar su propio rostro cuando ocurrió el milagro más importante de todos: de su ojo izquierdo nació Amaterasu, la futura diosa del sol; de su ojo derecho, Tsukuyomi, el dios de la luna; y de su nariz, Susanoo, el impetuoso dios de las tormentas —los tres hijos más importantes de todo el panteón sintoísta, nacidos directamente de la purificación de un padre que había estado dispuesto a desafiar la muerte misma por amor.`,
    personajes: [['izanagi', 'protagonista'], ['izanami', 'protagonista'], ['amaterasu', 'secundario'], ['tsukuyomi', 'secundario'], ['susanoo', 'secundario']]
  },
  {
    slug: 'susanoo-y-la-serpiente-yamata-no-orochi', titulo: 'Susanoo y la serpiente Yamata-no-Orochi', tipo: 'heroica', periodo: 'Tras el destierro de Susanoo', es_preview: 1,
    resumen: 'Expulsado del cielo tras enfurecer a Amaterasu, Susanoo emborracha con sake a una serpiente de ocho cabezas y la decapita por completo, encontrando en su interior la espada Kusanagi.',
    texto_completo: `Tras la muerte de un caballo desollado que Susanoo arrojó dentro del taller de tejido sagrado de su hermana Amaterasu, provocando su encierro indignado en la Cueva Celestial y sumiendo al mundo entero en oscuridad, la asamblea de dioses decidió castigar a Susanoo por su comportamiento destructivo desterrándolo definitivamente de Takamagahara, la llanura celestial. Le cortaron la barba y las uñas como penitencia ritual y lo expulsaron hacia la tierra, donde descendió a la región de Izumo, todavía cargando con el peso de la vergüenza y decidido, por primera vez en su vida, a actuar con mesura.

Al llegar a la orilla de un río, Susanoo vio un palillo de comer flotando corriente abajo, señal de que alguien vivía río arriba, y siguiendo su curso encontró a un anciano matrimonio llorando desconsoladamente junto a su hija menor, Kushinada-hime. El anciano le explicó la causa de su dolor: durante ocho años consecutivos, una serpiente monstruosa de ocho cabezas y ocho colas, Yamata-no-Orochi, tan enorme que su cuerpo se extendía sobre ocho valles y ocho colinas al mismo tiempo, había exigido cada año que le entregaran a una de sus ocho hijas como tributo, devorándolas una tras otra. Ya solo les quedaba Kushinada-hime, y la temporada del tributo anual estaba a punto de llegar de nuevo.

Susanoo, prendado de inmediato de la joven, se ofreció a enfrentar a la serpiente a cambio de su mano en matrimonio, y el anciano, sin nada que perder, aceptó de inmediato. Para protegerla mientras tanto, Susanoo transformó temporalmente a Kushinada-hime en un peine que se colocó en su propio cabello, y después dio instrucciones precisas al matrimonio: debían destilar un sake extremadamente potente y prepararlo en ocho tinas separadas, colocadas tras una valla circular con exactamente ocho aberturas, una para cada cabeza de la serpiente.

Cuando Yamata-no-Orochi llegó, atraída por el olor del sake, cada una de sus ocho cabezas se asomó por una abertura distinta y comenzó a beber directamente de la tina correspondiente, hasta que la criatura completa, embriagada por el potente licor, cayó en un sueño profundo. Susanoo, sin dudarlo, desenvainó su espada Totsuka-no-Tsurugi y comenzó a decapitar una tras otra las ocho cabezas dormidas, tiñendo el río cercano de un rojo tan intenso que, según cuenta la tradición, todavía hoy se conoce como el río Hi, "río de sangre". Al cortar una de las colas de la serpiente, la espada de Susanoo topó con algo duro en su interior: al abrirla por completo, descubrió una espada extraordinaria de filo perfecto e imposible de igualar, que llamó Kusanagi, "cortadora de hierba".

Consciente de que un objeto de tal poder no debía quedarse en sus manos tras haber ofendido tan gravemente a su propia hermana, Susanoo envió Kusanagi a Amaterasu como ofrenda de reconciliación, un gesto que ella aceptó, sanando así la fractura entre ambos hermanos. Susanoo, por su parte, se casó finalmente con Kushinada-hime y construyó un palacio en Izumo, donde compuso, según la tradición, el primer poema waka jamás escrito en japonés para celebrar su nuevo hogar —convirtiéndose, además de en el matador de la gran serpiente, en el padre fundador de la poesía japonesa misma.`,
    personajes: [['susanoo', 'protagonista'], ['yamata-no-orochi', 'antagonista'], ['amaterasu', 'mencionado']]
  },
  {
    slug: 'la-cueva-celestial-de-amaterasu', titulo: 'La cueva celestial de Amaterasu', tipo: 'otro', periodo: 'Antes del destierro de Susanoo', es_preview: 0,
    resumen: 'Harta de la destrucción provocada por su hermano Susanoo, Amaterasu se encierra en una cueva y sume al mundo en oscuridad total — solo el baile provocador de una diosa logra hacerla salir.',
    texto_completo: `Cuando Susanoo fue enviado a despedirse de su hermana Amaterasu antes de su destierro definitivo a la tierra, su llegada a Takamagahara fue tan estruendosa —la propia tierra tembló bajo sus pies mientras ascendía— que Amaterasu, temiendo una invasión hostil, se armó completamente con arco, flechas y espada antes de recibirlo. Susanoo juró que sus intenciones eran pacíficas, y ambos sellaron esa promesa mediante un ritual de intercambio de objetos sagrados del que nacieron varios dioses nuevos, un gesto que pareció, al menos temporalmente, reconciliar a los dos hermanos.

Pero la promesa de buena conducta de Susanoo duró poco. Envalentonado por haber "ganado" simbólicamente el ritual de reconciliación según su propia interpretación, comenzó una serie de actos destructivos dentro del dominio celestial de su hermana: rompió los diques que contenían los campos de arroz sagrados, rellenó los canales de riego, y profanó el salón donde se celebraba la primera ofrenda ritual de la cosecha defecando dentro del recinto sagrado. Amaterasu, con una paciencia notable, intentó excusar cada una de estas ofensas atribuyéndolas a un simple exceso de bebida o a un descuido sin mala intención. Pero el último acto de Susanoo resultó imposible de perdonar: arrancó la piel de un caballo celestial al revés y lo arrojó a través del techo del taller de tejido donde Amaterasu y sus doncellas confeccionaban las vestiduras sagradas de los dioses, provocando tal susto que una de las tejedoras murió en el acto, herida mortalmente por su propia lanzadera de tejer al sobresaltarse.

Profundamente ofendida y asustada por primera vez de su propio hermano, Amaterasu se encerró en la Cueva Celestial, Ama-no-Iwato, sellando la entrada con una roca desde dentro. Sin la luz del sol, el mundo entero —tanto el reino celestial como la tierra— cayó en una oscuridad absoluta y permanente; los campos dejaron de dar cosecha, los espíritus malignos proliferaron libremente en la oscuridad constante, y el caos amenazó con extenderse sin límite ni final previsible. Los ocho millones de dioses del panteón japonés se reunieron desesperados en el lecho seco de un río celestial para idear un plan que hiciera salir a Amaterasu de su encierro.

El plan, ideado principalmente por el dios Omoikane, conocido por su sabiduría estratégica, consistía en varias piezas coordinadas: colgaron un gran espejo de bronce y joyas curvas de un árbol sagrado frente a la entrada de la cueva, e hicieron cantar a los gallos para simular el amanecer que Amaterasu llevaba tanto tiempo sin presenciar. Después, la diosa Ame-no-Uzume subió sobre un barril volcado y comenzó a bailar de forma tan cómica y desinhibida —exponiendo partes de su cuerpo sin ningún pudor— que el resto de los dioses reunidos estalló en carcajadas tan estruendosas que su eco llegó hasta el interior mismo de la cueva. Amaterasu, intrigada por el ruido y por el hecho de que los dioses parecieran felices pese a la oscuridad total que ella misma había provocado, abrió apenas una rendija para preguntar la causa de tanta alegría.

Ame-no-Uzume respondió que celebraban la llegada de una diosa "aún más brillante" que la propia Amaterasu, y le señaló su reflejo en el espejo colgado frente a la entrada; Amaterasu, fascinada y confundida por su propio resplandor reflejado, se asomó todavía más para verlo mejor, momento exacto en que el fortísimo dios Ame-no-Tajikarao, escondido junto a la entrada, la sujetó y la sacó por completo de la cueva. Otro dios selló de inmediato la entrada con una cuerda sagrada de paja, shimenawa, para impedir que Amaterasu pudiera regresar a esconderse nunca más, y la luz volvió por fin al mundo entero. El objeto reflectante usado en el engaño se convertiría después en el espejo Yata no Kagami, una de las Tres Insignias Imperiales que Amaterasu entregaría generaciones más tarde a su nieto Ninigi como símbolo de su autoridad divina.`,
    personajes: [['amaterasu', 'protagonista'], ['susanoo', 'antagonista']]
  },
  {
    slug: 'el-descenso-de-ninigi-a-la-tierra', titulo: 'El descenso de Ninigi a la tierra', tipo: 'fundacion', periodo: 'Fundación del linaje imperial', es_preview: 1,
    resumen: 'Amaterasu y Takamimusubi envían a su nieto Ninigi a gobernar la tierra con las Tres Insignias Imperiales, guiado por Sarutahiko hasta la cima del monte Takachiho.',
    texto_completo: `Con la tierra todavía sin un gobierno claro y disputada entre numerosos kami terrestres poderosos, Amaterasu y Takamimusubi decidieron finalmente que había llegado el momento de establecer un orden definitivo, enviando a uno de sus propios descendientes a gobernarla en su nombre. El elegido fue Ninigi, nieto directo de Amaterasu, a quien la asamblea celestial completa preparó para el descenso con un cuidado excepcional: le entregaron las Tres Insignias Imperiales —el espejo Yata no Kagami, usado originalmente para hacer salir a la propia Amaterasu de su cueva; la espada Kusanagi, recuperada por Susanoo del cuerpo de la serpiente Yamata-no-Orochi y enviada como ofrenda de reconciliación; y la joya curva Yasakani no Magatama— como prueba física e incuestionable de su legitimidad divina.

Cuando el cortejo celestial completo se dispuso a descender, encontró el camino bloqueado por una figura imponente cuya presencia iluminaba simultáneamente los cielos superiores y las profundidades del mundo inferior, un resplandor tan intenso que ningún dios del séquito se atrevió a acercarse. Amaterasu envió entonces a Ame-no-Uzume —la misma diosa cuyo baile provocador había logrado sacarla a ella misma de su propia cueva tiempo atrás— a investigar quién era esa presencia y qué pretendía. Ame-no-Uzume descubrió que se trataba de Sarutahiko, un poderoso kami terrestre de rostro rojo y nariz descomunal, que no buscaba impedir el paso sino ofrecerse como guía personal para conducir a Ninigi hasta el lugar exacto donde debía comenzar su gobierno.

Bajo la guía de Sarutahiko, el cortejo celestial completo —que incluía además a varios dioses menores encargados de oficios específicos, entre ellos los ancestros divinos de los futuros sacerdotes y artesanos imperiales— descendió atravesando ocho capas de nubes hasta posarse finalmente sobre la cima del monte Takachiho, en la región de Kyūshū, al sur de Japón. Ninigi contempló el paisaje que se extendía ante él y declaró satisfecho que aquel lugar, con vista hacia el mar en una dirección y hacia tierras fértiles en la otra, era digno de convertirse en la sede de su nuevo gobierno terrenal.

Poco después de establecerse, Ninigi conoció a Konohanasakuya-hime, hija del dios de la montaña Ōyamatsumi, y quedó tan deslumbrado por su belleza que pidió su mano de inmediato. Su padre, honrado por la propuesta, ofreció a ambas hijas juntas: Konohanasakuya-hime y su hermana mayor Iwanaga-hime, asociada a la permanencia inquebrantable de la roca, con la esperanza de que la descendencia de Ninigi heredara tanto la belleza pasajera de la flor como la eternidad de la piedra. Ninigi, sin embargo, rechazó a Iwanaga-hime por considerarla menos atractiva, una decisión que su suegro lamentó profundamente y que, según la tradición, condenó desde entonces a toda la descendencia imperial de Ninigi —hasta el día de hoy— a vidas tan breves y hermosas como la floración de un cerezo, en lugar de la inmortalidad que la unión con ambas hermanas habría concedido.`,
    personajes: [['ninigi', 'protagonista'], ['amaterasu', 'secundario'], ['takamimusubi', 'secundario'], ['sarutahiko', 'secundario'], ['konohanasakuya-hime', 'secundario']]
  },
  {
    slug: 'konohanasakuya-hime-y-la-prueba-del-fuego', titulo: 'Konohanasakuya-hime y la prueba del fuego', tipo: 'amor', periodo: 'Tras el matrimonio de Ninigi', es_preview: 0,
    resumen: 'Acusada por Ninigi de infidelidad al quedar embarazada demasiado rápido, Konohanasakuya-hime se prende fuego a sí misma dentro de una choza para demostrar, dando a luz sana entre las llamas, que sus hijos son legítimos.',
    texto_completo: `Poco después de casarse con Ninigi, Konohanasakuya-hime descubrió que estaba embarazada, una noticia que en cualquier otra circunstancia habría sido motivo de celebración inmediata para la pareja recién establecida en la tierra. Pero Ninigi, al hacer cuentas del tiempo transcurrido desde la boda, se sorprendió de lo rápido que había ocurrido la concepción, y una sombra de duda comenzó a crecer en su mente: ¿era posible que el hijo que su esposa esperaba no fuera realmente suyo, sino de algún otro kami terrestre con quien ella hubiera estado antes de su propio matrimonio?

Konohanasakuya-hime, profundamente herida por la desconfianza de su esposo hacia una fidelidad que jamás había estado en duda, decidió que las palabras por sí solas no bastarían para convencerlo: necesitaba una prueba que ningún ser humano ni divino pudiera cuestionar después. Anunció entonces que construiría una choza especial sin ninguna puerta de salida, sellada por completo una vez que ella entrara, y que dentro de esa choza daría a luz. Si el niño era realmente hijo de un dios —de Ninigi mismo—, sobreviviría sin problema alguno a cualquier prueba que ella decidiera someterse; si no lo era, entonces merecería perecer junto con la prueba de su propia deshonra.

Cuando llegó el momento del parto, Konohanasakuya-hime se encerró dentro de la choza terminada, y en el instante exacto en que las contracciones comenzaron, ella misma prendió fuego a la estructura entera desde dentro, sellando cualquier posibilidad de escape. Las llamas envolvieron rápidamente toda la choza, y quienes esperaban fuera, incluido un Ninigi ahora profundamente arrepentido de su desconfianza, no pudieron hacer nada más que observar impotentes cómo el fuego consumía la construcción completa, sin saber si volverían a ver con vida a Konohanasakuya-hime o a su hijo por nacer.

Para sorpresa de todos, cuando las llamas finalmente se apagaron, Konohanasakuya-hime emergió de entre las cenizas completamente ilesa, sosteniendo en sus brazos no a uno sino a tres hijos sanos, nacidos exactamente en el momento en que el fuego alcanzaba su punto más intenso. El primero, nacido cuando las llamas comenzaban a arder con fuerza, recibió el nombre de Hoderi ("el que brilla con fuego"), y se convertiría en el futuro príncipe pescador; el segundo, nacido en el punto medio del incendio, fue Hosuseri; y el tercero, nacido cuando el fuego comenzaba ya a apagarse, fue Hoori ("el que se aleja del fuego"), el futuro príncipe cazador cuyo propio nieto llegaría a convertirse en Jimmu, el primer emperador de Japón.

La prueba resultó, más allá de cualquier duda posible, en la legitimidad completa de los tres hijos, y Ninigi, avergonzado de su desconfianza inicial, pasó el resto de su vida honrando tanto la fidelidad como el coraje extraordinario que su esposa había demostrado ese día. Konohanasakuya-hime quedó desde entonces asociada de forma permanente tanto a la fragilidad hermosa de la flor de cerezo como a una fuerza interior capaz de atravesar el fuego mismo sin quebrarse, una dualidad que la tradición japonesa sigue evocando hasta hoy en los santuarios dedicados a ella al pie del monte Fuji, la montaña que también lleva, según algunas tradiciones, su propio nombre sagrado.`,
    personajes: [['konohanasakuya-hime', 'protagonista'], ['ninigi', 'secundario'], ['hoderi', 'mencionado'], ['hoori', 'mencionado']]
  },
  {
    slug: 'umisachihiko-y-yamasachihiko', titulo: 'Umisachihiko y Yamasachihiko: los hermanos pescador y cazador', tipo: 'heroica', periodo: 'Segunda generación tras el descenso de Ninigi', es_preview: 1,
    resumen: 'Hoori pierde el anzuelo de su hermano Hoderi en el mar y desciende al palacio del dragón Ryūjin para recuperarlo — donde se casa con la princesa Otohime y obtiene el poder de controlar las mareas.',
    texto_completo: `Hoderi, conocido también como Umisachihiko, "príncipe de la fortuna del mar", y Hoori, conocido como Yamasachihiko, "príncipe de la fortuna de la montaña", eran hermanos nacidos ambos durante la prueba del fuego de su madre Konohanasakuya-hime, y desde jóvenes se habían dedicado cada uno a un oficio completamente distinto: Hoderi pescaba en el mar con su caña heredada, mientras Hoori cazaba en los bosques de la montaña con su arco. Un día, movido por simple curiosidad, Hoori propuso a su hermano intercambiar temporalmente sus herramientas de trabajo, para que cada uno probara suerte en el oficio del otro; Hoderi aceptó de mala gana tras varias insistencias.

El intercambio resultó desastroso: ninguno de los dos hermanos logró éxito alguno en el oficio ajeno, y para colmo, Hoori perdió por completo el valioso anzuelo de pesca de su hermano en algún punto del fondo marino, sin lograr recuperarlo pese a buscar durante horas. Cuando devolvió a Hoderi su caña sin el anzuelo original, este se negó rotundamente a aceptar cualquier sustituto: Hoori fabricó cientos de anzuelos nuevos fundiendo su propia espada, pero Hoderi, cada vez más furioso, exigía una y otra vez la devolución exacta del objeto perdido, sin aceptar ningún reemplazo por bien hecho que estuviera.

Desesperado y sin saber qué más hacer, Hoori se sentó a llorar en la orilla del mar, hasta que un anciano dios llamado Shiotsuchi se compadeció de él y le construyó una pequeña canasta capaz de hundirse hasta el fondo del océano sin que el agua entrara, indicándole que lo llevaría directo hasta el palacio de Ryūjin, el rey dragón del mar, quien sin duda podría ayudarlo a encontrar el anzuelo perdido. Hoori aceptó la ayuda y descendió hasta Ryūgū-jō, el fastuoso palacio de coral rojo y blanco de Ryūjin, donde fue recibido con generosa hospitalidad y conoció a Otohime, la hermosa hija del rey dragón, de quien se enamoró de inmediato; ella correspondió su amor, y ambos se casaron poco después, viviendo juntos en el palacio submarino durante lo que a Hoori le parecieron apenas tres años felices.

Con el tiempo, sin embargo, Hoori comenzó a extrañar su hogar y su propósito original de recuperar el anzuelo perdido de su hermano, y confesó su preocupación a Otohime y a Ryūjin. El rey dragón convocó entonces a todos los peces del océano y les preguntó si alguno sabía del paradero del objeto; finalmente, un pez llamado tai apareció con dificultad para respirar, quejándose de algo atascado en su garganta desde hacía tiempo —y ahí, exactamente, se encontraba el anzuelo perdido, que Ryūjin extrajo con cuidado y devolvió a Hoori. Antes de que este regresara a la superficie, Ryūjin le entregó además dos joyas mágicas de un poder extraordinario: la kanju, capaz de hacer subir el nivel del mar a voluntad, y la kanjū, capaz de hacerlo descender, junto a instrucciones precisas sobre cómo usarlas si su hermano seguía mostrándose hostil a su regreso.

Efectivamente, cuando Hoori devolvió el anzuelo original a Hoderi, este, lejos de aplacarse, se volvió cada vez más agresivo y celoso del evidente favor divino que su hermano menor había obtenido durante su ausencia. Hoori, sin más opciones, utilizó primero la joya que elevaba el mar, sumergiendo a Hoderi casi hasta ahogarlo, y solo cuando este, aterrado, imploró perdón y juró lealtad completa y perpetua hacia su hermano menor, activó la joya opuesta para salvarlo. Hoderi, humillado y sometido, se convirtió desde entonces en guardián leal de Hoori, mientras que Otohime, ya embarazada, ascendió también a la superficie para dar a luz junto a su esposo —un parto que traería consigo, generaciones después, el nacimiento del propio emperador Jimmu, primer soberano legendario de todo Japón.`,
    personajes: [['hoori', 'protagonista'], ['hoderi', 'protagonista'], ['ryujin', 'secundario'], ['otohime', 'secundario']]
  },
  {
    slug: 'el-nacimiento-del-emperador-jimmu', titulo: 'El nacimiento del emperador Jimmu', tipo: 'fundacion', periodo: 'Fundación de la línea imperial', es_preview: 1,
    resumen: 'Nieto de Hoori y la princesa dragón Otohime, Jimmu lidera una larga expedición hacia Yamato guiado por un cuervo sagrado de tres patas, y es coronado el primer emperador de Japón.',
    texto_completo: `Del matrimonio entre Hoori y la princesa dragón Otohime nació Ugayafukiaezu, quien más tarde se casaría con su propia tía, Tamayori-hime, hermana menor de Otohime que había ascendido desde el palacio submarino para ayudar a criar al niño tras la partida definitiva de su madre. De esa unión nacieron varios hijos, el menor de los cuales, conocido en su juventud como Kamu-yamato Iwarebiko, sería recordado por la posteridad bajo el nombre póstumo de Jimmu, el legendario primer emperador de Japón, cuarta generación descendiente directa de Amaterasu a través de Ninigi, y con sangre del dios dragón del mar corriendo también por sus venas gracias a su abuela Otohime.

Establecido inicialmente en Kyūshū, al sur del archipiélago, Jimmu decidió junto a sus hermanos que había llegado el momento de trasladar el centro de su gobierno hacia una región más adecuada para extender la influencia del linaje celestial sobre el resto de Japón, y emprendieron una larga expedición hacia el este, en dirección a la fértil región de Yamato. El viaje resultó mucho más difícil de lo esperado: enfrentaron resistencia armada de clanes locales hostiles en varias regiones, perdieron a más de uno de los hermanos de Jimmu en el camino —uno de ellos, herido en batalla, decidió arrojarse al mar antes que continuar debilitando a la expedición con su presencia— y llegaron a extraviarse por completo entre las montañas escarpadas que separaban la costa de su destino final.

En el momento de mayor desesperación, cuando la expedición parecía condenada a perderse para siempre entre terreno montañoso desconocido y hostil, los dioses celestiales enviaron a Yatagarasu, un cuervo sagrado de tres patas, para guiar personalmente a Jimmu a través de los pasos más seguros hasta la llanura de Yamato. Siguiendo fielmente el vuelo del cuervo, la expedición logró finalmente atravesar el terreno más peligroso y enfrentarse, ya con mejores perspectivas, a los últimos clanes que se oponían a su avance, sometiéndolos uno tras otro mediante una combinación de fuerza militar y alianzas estratégicas con grupos locales dispuestos a reconocer la legitimidad divina del linaje de Jimmu.

Una vez consolidado el control sobre la región de Yamato, Jimmu fue coronado formalmente como soberano, estableciendo su corte en un lugar que la tradición sitúa cerca de la actual Nara, y adoptando las prácticas rituales heredadas directamente del culto a Amaterasu como fundamento religioso de su nueva autoridad política. La fecha tradicional de su entronización, fijada por cronistas posteriores en el equivalente al 11 de febrero del año 660 antes de Cristo, se celebra todavía hoy en Japón como Kenkoku Kinen no Hi, el Día de la Fundación Nacional, pese a que los historiadores modernos consideran esa cronología extremadamente temprana casi con certeza mítica, sin respaldo arqueológico que la sostenga con precisión.

El legado más duradero de Jimmu, más allá de los detalles concretos de su expedición, es la afirmación fundacional que sostiene la continuidad completa de la línea imperial japonesa hasta el presente: según la tradición sintoísta, cada emperador que ha ocupado el trono desde entonces desciende directamente, sin interrupción alguna, del mismo Jimmu que llegó guiado por un cuervo sagrado hasta las llanuras de Yamato —convirtiendo a la monarquía japonesa, al menos en su propia narrativa mítica fundacional, en la institución hereditaria ininterrumpida más antigua documentada en cualquier parte del mundo.`,
    personajes: [['jimmu', 'protagonista'], ['hoori', 'mencionado'], ['otohime', 'mencionado']]
  },
  {
    slug: 'urashima-taro-y-el-palacio-del-dragon', titulo: 'Urashima Taro y el palacio del dragón', tipo: 'tragedia', periodo: 'Tradición folclórica, sin fecha fija', es_preview: 1,
    resumen: 'Un joven pescador rescata a una tortuga marina y es invitado al fastuoso palacio submarino de Otohime — pero al regresar a casa descubre que han pasado trescientos años, y una caja prohibida sella su destino final.',
    texto_completo: `Urashima Tarō era un joven pescador de un pueblo costero, conocido entre sus vecinos por un carácter especialmente bondadoso hacia cualquier criatura viva que se cruzara en su camino. Un atardecer, al regresar de una larga jornada de pesca sin apenas fortuna, encontró a un grupo de niños del pueblo golpeando con palos a una pequeña tortuga marina varada en la arena, riéndose de su lentitud para escapar. Urashima Tarō, apenado por el sufrimiento del animal, ofreció a los niños unas cuantas monedas a cambio de que la dejaran en paz, y una vez que se marcharon, tomó la tortuga con cuidado entre sus manos y la devolvió personalmente al mar, viéndola desaparecer bajo las olas sin esperar nada a cambio.

Al día siguiente, mientras pescaba desde su bote como cada mañana, la misma tortuga reapareció junto a él, y para su sorpresa comenzó a hablarle con voz clara y educada: le explicó que era en realidad una mensajera de Otohime, la princesa del palacio submarino Ryūgū-jō, quien deseaba conocer personalmente y agradecer al hombre que la había salvado el día anterior. La tortuga le ofreció llevarlo hasta el fondo del mar sobre su propio caparazón, una invitación que Urashima Tarō, intrigado y sin nada urgente que lo retuviera en tierra, decidió aceptar sin dudarlo demasiado.

El viaje lo condujo hasta un palacio de una belleza que superaba cualquier cosa que hubiera imaginado jamás: pasillos enteros de coral rojo y blanco, jardines de algas luminosas que brillaban sin necesidad de sol, y peces de todos los colores nadando libremente entre las columnas como si fueran pájaros en un jardín terrestre. Otohime en persona lo recibió con una gratitud efusiva y una hospitalidad extraordinaria, ofreciéndole un banquete tras otro y compañía constante durante lo que a Urashima Tarō le parecieron apenas unos días maravillosos, perdido completamente en la belleza del lugar y en la compañía de la propia princesa, de quien terminó enamorándose profundamente.

Pero con el paso de esos "días", una nostalgia creciente por su hogar, su pueblo y sobre todo su anciana madre comenzó a pesarle cada vez más, hasta que finalmente le pidió permiso a Otohime para regresar a la superficie, prometiendo volver pronto. Otohime, con tristeza pero sin oponerse, aceptó dejarlo ir, y como regalo de despedida le entregó una pequeña caja decorada con incrustaciones preciosas, la Tamatebako, con una única advertencia estricta: bajo ninguna circunstancia debía abrirla jamás, pasara lo que pasara.

Al emerger de nuevo en la playa donde todo había comenzado, Urashima Tarō sintió de inmediato que algo estaba profundamente mal: el paisaje familiar de su infancia había desaparecido casi por completo, reemplazado por construcciones que jamás había visto, y ningún rostro entre los aldeanos que se cruzaban con él le resultaba conocido. Preguntó por su familia y por su propio nombre a los ancianos del lugar, y estos, tras consultar viejos registros del pueblo, le informaron con asombro que un pescador llamado Urashima Tarō había desaparecido en el mar hacía exactamente trescientos años, sin dejar rastro alguno desde entonces. Lo que a él le habían parecido apenas unos días felices en el palacio submarino habían sido, en realidad, tres siglos completos transcurridos en la superficie, donde el tiempo corría a un ritmo completamente distinto que bajo las aguas de Ryūgū-jō.

Desesperado, sin nada ni nadie que lo atara ya a un mundo que ya no reconocía y que tampoco lo reconocía a él, Urashima Tarō recordó finalmente la caja que Otohime le había regalado, y pensando quizás que contendría alguna respuesta o consuelo, rompió su promesa y la abrió. De su interior escapó de inmediato una densa nube de humo blanco que lo envolvió por completo; cuando se disipó, Urashima Tarō había envejecido de golpe hasta convertirse en un anciano frágil de cabello completamente blanco —el peso exacto de los trescientos años que había evitado en el palacio submarino, contenido todo ese tiempo dentro de la caja prohibida, cobrándose de una sola vez el precio que el tiempo siempre termina exigiendo.`,
    personajes: [['urashima-taro', 'protagonista'], ['otohime', 'secundario'], ['ryujin', 'mencionado']]
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-japonesa'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-japonesa" -- créalo primero.');
  return filas[0].id;
}

async function sembrarHistorias(libroId) {
  const [filasPersonajes] = await pool.query('SELECT id, slug FROM personajes WHERE libro_id = ?', [libroId]);
  const idsPersonajes = {};
  filasPersonajes.forEach(f => { idsPersonajes[f.slug] = f.id; });

  for (const h of HISTORIAS) {
    const [existente] = await pool.query('SELECT id FROM historias WHERE slug = ? AND libro_id = ?', [h.slug, libroId]);
    let historiaId;
    if (existente.length > 0) {
      console.log(`  - Historia "${h.titulo}" ya existía.`);
      historiaId = existente[0].id;
    } else {
      const [resultado] = await pool.query(
        `INSERT INTO historias (titulo, resumen, texto_completo, tipo, periodo, slug, es_preview, libro_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [h.titulo, h.resumen, h.texto_completo, h.tipo, h.periodo, h.slug, h.es_preview, libroId]
      );
      historiaId = resultado.insertId;
      console.log(`  - Historia "${h.titulo}" creada.`);
    }

    for (const [slugPersonaje, rol] of h.personajes) {
      const personajeId = idsPersonajes[slugPersonaje];
      if (!personajeId) {
        console.log(`    ! Personaje "${slugPersonaje}" no encontrado, se salta el vínculo.`);
        continue;
      }
      const [vinculo] = await pool.query(
        'SELECT 1 FROM historia_personajes WHERE historia_id = ? AND personaje_id = ?',
        [historiaId, personajeId]
      );
      if (vinculo.length === 0) {
        await pool.query(
          'INSERT INTO historia_personajes (historia_id, personaje_id, rol) VALUES (?, ?, ?)',
          [historiaId, personajeId, rol]
        );
      }
    }
  }
}

async function main() {
  console.log('Sembrando historias de Mitologia Japonesa (parte 1)...\n');
  const libroId = await obtenerLibroId();
  await sembrarHistorias(libroId);
  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
