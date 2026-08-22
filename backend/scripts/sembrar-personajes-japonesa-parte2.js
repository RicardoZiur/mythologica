// ============================================================
// scripts/sembrar-personajes-japonesa-parte2.js
// ------------------------------------------------------------
// Segundo lote de Mitologia Japonesa: 10 heroes y 12 monstruos
// (yokai/oni). Contenido completo desde el inicio, igual que
// sembrar-personajes-japonesa-parte1.js. Idempotente via
// slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-japonesa-parte2.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- HEROES ---
  {
    tipo: 'heroe', slug: 'ninigi', nombre: 'Ninigi', nombre_griego: 'Ninigi-no-Mikoto',
    epitetos: 'El Augusto Nieto Celestial',
    descripcion_corta: 'Nieto de Amaterasu, enviado a gobernar la tierra con las Tres Insignias Imperiales — ancestro directo de la línea imperial japonesa.',
    descripcion_larga: `Ninigi fue elegido por su abuela Amaterasu y por Takamimusubi para descender del cielo y gobernar la tierra, todavía convulsa y sin un orden claro tras siglos de disputas entre los distintos kami terrestres. Descendió acompañado de un séquito completo de divinidades menores, guiado personalmente por Sarutahiko hasta la cima del monte Takachiho, y portando consigo las Tres Insignias Imperiales que su abuela le entregó como prueba física de su legitimidad divina: el espejo Yata no Kagami, la espada Kusanagi —recuperada originalmente por Susanoo del cuerpo de la serpiente Yamata-no-Orochi— y la joya curva Yasakani no Magatama.

Una vez en la tierra, Ninigi se enamoró de Konohanasakuya-hime, hija del dios de la montaña, y al pedir su mano su suegro le ofreció también a la hermana mayor de esta, Iwanaga-hime, asociada a la permanencia de la roca. Ninigi, deslumbrado únicamente por la belleza floral de la hermana menor, rechazó a Iwanaga-hime sin saber que con esa decisión condenaba a toda su futura descendencia —incluida la línea imperial completa que él mismo fundaría— a una vida tan breve como hermosa, en lugar de la inmortalidad que la unión con ambas hermanas habría concedido. De su matrimonio con Konohanasakuya-hime nacieron tres hijos, entre ellos Hoori, cuyo propio nieto sería Jimmu, el legendario primer emperador de Japón.`,
    origen: 'Nieto de Amaterasu, enviado desde el cielo a gobernar la tierra.',
    dominio: 'La fundación del linaje imperial', naturaleza: 'Kami fundador, ancestro imperial', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'yamato-takeru', nombre: 'Yamato Takeru', nombre_griego: 'Yamato Takeru-no-Mikoto',
    epitetos: 'El Valiente de Yamato',
    descripcion_corta: 'Príncipe guerrero legendario de fuerza sobrehumana, sometió clanes enteros para su padre el emperador — hasta que su propio orgullo lo llevó a la ruina.',
    descripcion_larga: `Yamato Takeru era hijo del emperador Keikō, y desde muy joven demostró una fuerza y una ferocidad que inquietaban a su propio padre: la primera hazaña que se le atribuye, siendo apenas un adolescente, fue despedazar con sus propias manos a su hermano mayor tras un desacuerdo menor, un acto tan brutal que el emperador decidió alejarlo de la corte enviándolo, uno tras otro, a someter a los clanes rebeldes más peligrosos del país, con la esperanza secreta —según algunas versiones del mito— de que muriera en el intento.

Yamato Takeru, sin embargo, sobrevivió a cada misión mediante una combinación de fuerza descomunal y astucia: se disfrazó de sirvienta para asesinar a dos jefes guerreros rebeldes durante un banquete, y en otra campaña posterior, rodeado por enemigos que habían prendido fuego a la hierba seca a su alrededor, se salvó cortando la vegetación circundante con la espada Kusanagi —heredada de su tía abuela Amaterasu a través del linaje imperial— y usando el propio viento para desviar las llamas hacia sus atacantes. Pese a sus victorias constantes, Yamato Takeru terminó muriendo joven y lejos de casa, tras desafiar imprudentemente a un dios de la montaña sin portar su espada sagrada, que había dejado atrás por descuido; su espíritu, según cuenta el mito, se transformó en un ave blanca gigantesca que voló hacia el mar, dejando atrás para siempre el trono que jamás llegaría a ocupar.`,
    origen: 'Hijo del emperador Keikō, enviado a someter clanes rebeldes por todo Japón.',
    dominio: 'La guerra y la conquista', naturaleza: 'Héroe legendario semidivino', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'momotaro', nombre: 'Momotarō', nombre_griego: 'Momotarō',
    epitetos: 'El Niño Melocotón',
    descripcion_corta: 'Héroe folclórico nacido de un melocotón gigante, que reúne a un perro, un mono y un faisán para conquistar la isla de los oni.',
    descripcion_larga: `Según el cuento popular más contado en todo Japón, una anciana sin hijos encontró un melocotón descomunal flotando río abajo mientras lavaba ropa, y al llevarlo a casa para compartirlo con su esposo, la fruta se abrió sola revelando a un niño pequeño en su interior. La pareja, maravillada, lo crió como propio y lo llamó Momotarō, "niño melocotón", y el muchacho creció con una fuerza y un sentido de la justicia excepcionales, decidido desde joven a poner fin a los ataques constantes que una banda de oni, liderada desde su fortaleza en Onigashima ("la isla de los demonios"), llevaba años cometiendo contra los pueblos costeros cercanos.

En su camino hacia la isla, Momotarō compartió sus bolas de arroz (kibi dango) con un perro, un mono y un faisán, que a cambio de la comida se unieron a su expedición como aliados leales. Juntos, los cuatro lograron infiltrarse en la fortaleza de los oni, derrotarlos en combate directo y obligar a su jefe a rendirse, recuperando además todo el tesoro que la banda había robado durante años a lo largo de la costa. Momotarō regresó a su pueblo como héroe, repartiendo el tesoro recuperado entre las familias afectadas, y su historia se convirtió con el tiempo en una de las narraciones fundacionales más citadas del folclore infantil japonés, usada incluso con fines de propaganda nacional durante distintos periodos de la historia moderna del país.`,
    origen: 'Nacido de un melocotón gigante hallado por una anciana sin hijos.',
    dominio: 'La justicia contra los oni', naturaleza: 'Héroe folclórico', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'urashima-taro', nombre: 'Urashima Tarō', nombre_griego: 'Urashima Tarō',
    epitetos: 'El Pescador que Visitó el Palacio del Dragón',
    descripcion_corta: 'Pescador que rescata a una tortuga marina y es llevado al palacio submarino de Ryūjin, donde el tiempo transcurre de forma completamente distinta.',
    descripcion_larga: `Urashima Tarō era un joven pescador conocido en su aldea por su bondad hacia los animales; un día encontró a un grupo de niños maltratando a una pequeña tortuga marina en la playa y, apenado por la criatura, pagó a los niños para que la dejaran libre y la devolvió personalmente al mar. Poco después, esa misma tortuga regresó junto a él, revelando que en realidad era una mensajera de Otohime, la princesa del palacio submarino Ryūgū-jō, que deseaba agradecerle en persona su gesto de compasión invitándolo a visitar su reino bajo las olas.

Urashima Tarō aceptó y pasó lo que le pareció apenas unos días extraordinarios en el palacio de coral, deslumbrado por su belleza y por la compañía de Otohime, hasta que la nostalgia por su hogar y su anciana madre lo convenció de regresar a la superficie. Al despedirse, Otohime le entregó una pequeña caja decorada, la Tamatebako, advirtiéndole que jamás la abriera bajo ninguna circunstancia. Al llegar a tierra firme, Urashima Tarō descubrió con horror que su aldea era irreconocible, que nadie recordaba su nombre y que, según los registros locales, habían transcurrido trescientos años desde su desaparición: el tiempo bajo el mar corría a un ritmo completamente distinto al de la superficie. Desesperado y sin nada que lo atara ya al mundo que conocía, abrió finalmente la caja prohibida, de la que escapó una nube de humo blanco que lo envejeció de golpe hasta convertirlo en un anciano, el tiempo que había evitado durante su estadía cobrándose de una sola vez.`,
    origen: 'Joven pescador que rescata a una tortuga marina mensajera de Ryūjin.',
    dominio: 'El tiempo y sus consecuencias', naturaleza: 'Héroe folclórico trágico', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'kintaro', nombre: 'Kintarō', nombre_griego: 'Kintarō',
    epitetos: 'El Niño Dorado',
    descripcion_corta: 'Niño de fuerza sobrehumana criado por una bruja de la montaña, amigo de los animales del bosque — se convertiría después en un legendario guerrero samurái.',
    descripcion_larga: `Kintarō, "niño dorado", creció en las montañas del monte Ashigara criado por Yama-uba, una bruja o espíritu de la montaña que en la mayoría de las versiones del cuento actúa como su madre adoptiva bondadosa en lugar de figura amenazante, contrario al papel habitual de las yama-uba en otros relatos japoneses. Desde muy pequeño, Kintarō mostró una fuerza descomunal impropia de su edad: luchaba cuerpo a cuerpo con osos adultos del bosque, competía en pulsos con monos y jabalíes, y usaba un hacha gigante como si fuera un simple bastón de juego, ganándose la amistad y el respeto de todos los animales de la montaña, que lo trataban como a uno más de su propia comunidad salvaje.

Su fuerza y su corazón noble llamaron la atención del guerrero Minamoto no Yorimitsu, quien lo encontró durante una expedición por la montaña y, impresionado, lo reclutó como uno de sus cuatro retenedores más leales, otorgándole el nombre adulto de Sakata Kintoki. Bajo ese nombre, Kintarō participaría después en algunas de las hazañas más célebres atribuidas a Yorimitsu, incluida la expedición contra el temible oni Shuten-dōji en el monte Ōe. Su imagen infantil, vestido con un peto rojo marcado con el carácter "kin" (oro) y empuñando su hacha característica, sigue siendo hoy en Japón un símbolo popular de fuerza y salud, exhibido tradicionalmente en los hogares durante el Día del Niño (Kodomo no Hi) cada mes de mayo.`,
    origen: 'Criado en la montaña por la bruja Yama-uba, futuro guerrero Sakata Kintoki.',
    dominio: 'La fuerza sobrehumana y la lealtad', naturaleza: 'Héroe folclórico, futuro samurái legendario', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'jimmu', nombre: 'Jimmu', nombre_griego: 'Jinmu Tennō',
    epitetos: 'El Primer Emperador Divino',
    descripcion_corta: 'Legendario primer emperador de Japón, bisnieto de Ninigi — su coronación marca el inicio oficial y mítico de la línea imperial japonesa.',
    descripcion_larga: `Jimmu es, según el Kojiki y el Nihon Shoki, el primer emperador de Japón, descendiente directo en cuarta generación de Amaterasu a través de Ninigi, y nieto de Hoori y la princesa dragón Otohime, uniendo en su propia sangre el linaje del cielo con el del océano. Antes de establecerse en la región de Yamato, en el centro del archipiélago, Jimmu emprendió una larga expedición militar desde Kyūshū, en el sur, superando batallas difíciles contra clanes locales hostiles y guiado en los momentos más críticos por Yatagarasu, un cuervo sagrado de tres patas enviado por los dioses celestiales para mostrarle el camino correcto a través de terrenos montañosos traicioneros.

Su entronización oficial, fechada tradicionalmente el 11 de febrero del año 660 antes de Cristo —una fecha hoy considerada mítica más que histórica por los estudiosos modernos, aunque todavía celebrada oficialmente en Japón como el Día de la Fundación Nacional—, marca el inicio simbólico de una línea imperial que la tradición sintoísta sostiene ininterrumpida hasta el emperador actual, la monarquía continuada más antigua del mundo según esa misma tradición. El propio cuervo Yatagarasu que lo guió durante su expedición se convirtió con el tiempo en un símbolo nacional recurrente, usado hasta hoy como emblema de la selección japonesa de fútbol en honor a esa guía divina que hizo posible, según el mito, la fundación misma del país.`,
    origen: 'Bisnieto de Ninigi, nieto de Hoori y Otohime.',
    dominio: 'La fundación del trono de Japón', naturaleza: 'Primer emperador legendario', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'otohime', nombre: 'Otohime', nombre_griego: 'Otohime',
    epitetos: 'La Princesa del Palacio del Dragón',
    descripcion_corta: 'Princesa del palacio submarino Ryūgū-jō, hija de Ryūjin — protagonista de dos de los mitos más célebres del folclore japonés.',
    descripcion_larga: `Otohime gobierna junto a su padre Ryūjin el fastuoso palacio submarino Ryūgū-jō, construido enteramente de coral rojo y blanco en las profundidades del océano, donde el tiempo transcurre a un ritmo completamente distinto al del mundo de la superficie. Es ella quien, agradecida por la compasión que el pescador Urashima Tarō mostró hacia una tortuga marina —en realidad una de sus propias mensajeras—, lo invita personalmente a conocer su reino, ofreciéndole días enteros de hospitalidad extraordinaria antes de despedirlo con la caja prohibida Tamatebako cuando la nostalgia de él por su hogar se vuelve demasiado fuerte para ignorarla.

En un mito completamente distinto, es Otohime quien se casa con el príncipe cazador Hoori tras que este llegara hasta su palacio buscando el anzuelo perdido de su hermano Hoderi; ambos viven juntos varios años bajo el mar antes de que Otohime, ya embarazada, decida regresar a la superficie para dar a luz junto a Hoori, construyendo una choza especial techada con plumas de cormorán para el parto. Le pide a Hoori que no la mire durante el nacimiento, pero él rompe su promesa por curiosidad y la descubre transformada en un enorme tiburón o dragón marino, su verdadera forma bajo el agua; avergonzada de haber sido vista, Otohime regresa para siempre al mar, dejando a su hijo recién nacido —futuro padre del emperador Jimmu— al cuidado de Hoori en tierra firme.`,
    origen: 'Hija de Ryūjin, princesa del palacio submarino Ryūgū-jō.',
    dominio: 'El océano y el palacio submarino', naturaleza: 'Princesa dragón', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'hoori', nombre: 'Hoori', nombre_griego: 'Hoori-no-Mikoto (Yamasachihiko)',
    epitetos: 'El Príncipe de la Fortuna de la Montaña',
    descripcion_corta: 'Príncipe cazador, hijo de Ninigi — su disputa con su hermano pescador lo lleva al palacio submarino, donde gana las joyas que controlan las mareas.',
    descripcion_larga: `Hoori, conocido también como Yamasachihiko ("príncipe de la fortuna de la montaña"), era el menor de los hijos de Ninigi y Konohanasakuya-hime, dedicado a la caza en las montañas mientras su hermano mayor Hoderi se dedicaba a la pesca en el mar. Un día, Hoori propuso intercambiar temporalmente sus herramientas de trabajo por simple curiosidad, y en su primer intento de pescar perdió el valioso anzuelo de su hermano en el fondo del océano; pese a fabricar cientos de anzuelos de repuesto con la espada que llevaba encima, Hoderi se negó a aceptar ninguno que no fuera el original, exigiendo su devolución exacta.

Desesperado, Hoori descendió hasta el palacio submarino Ryūgū-jō siguiendo el consejo de un anciano dios del mar, y ahí conoció y se casó con Otohime, hija de Ryūjin, quien finalmente localizó el anzuelo perdido en la garganta de un pez y ayudó a Hoori a recuperarlo. Antes de que regresara a la superficie, Ryūjin le entregó además las dos joyas mágicas de marea, capaces de hacer subir o bajar el nivel del océano a voluntad, con las que Hoori sometió por completo a su hermano Hoderi tras el regreso de este a tierra firme, obligándolo a jurarle lealtad eterna. De su unión con Otohime nacería el padre del legendario emperador Jimmu, entrelazando definitivamente el linaje imperial japonés con la sangre del dios dragón del mar.`,
    origen: 'Hijo menor de Ninigi y Konohanasakuya-hime.',
    dominio: 'La caza y el dominio de las mareas', naturaleza: 'Príncipe divino, ancestro imperial', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'hoderi', nombre: 'Hoderi', nombre_griego: 'Hoderi-no-Mikoto (Umisachihiko)',
    epitetos: 'El Príncipe de la Fortuna del Mar',
    descripcion_corta: 'Príncipe pescador, hermano mayor de Hoori — su negativa a perdonar un simple accidente terminó por costarle la sumisión total ante su propio hermano.',
    descripcion_larga: `Hoderi, conocido también como Umisachihiko ("príncipe de la fortuna del mar"), era el hermano mayor de Hoori y, como él, hijo de Ninigi y Konohanasakuya-hime, dedicado desde siempre a la pesca mientras su hermano menor cazaba en las montañas. Cuando Hoori le propuso intercambiar sus herramientas por un día, Hoderi aceptó de mala gana, y al enterarse de que su hermano había perdido su anzuelo más preciado en el fondo del mar, se negó rotundamente a aceptar cualquier sustituto, por muchos que Hoori fabricara con su propia espada, exigiendo una y otra vez la devolución del objeto original exacto.

Esa inflexibilidad terminaría por costarle caro: cuando Hoori regresó de su viaje al palacio submarino con el anzuelo recuperado, pero también con las dos joyas mágicas de marea entregadas por Ryūjin, Hoderi se encontró de pronto completamente a merced de su hermano menor. Hoori usó la joya que subía el nivel del mar para casi ahogarlo, y solo cuando Hoderi imploró perdón y juró lealtad completa, activó la joya opuesta para salvarlo. Humillado y sometido, Hoderi se convirtió desde entonces en guardián personal de su hermano, un desenlace que la tradición japonesa usó después como relato fundacional que explicaba, de forma simbólica, la subordinación histórica de ciertos clanes pesqueros del sur de Kyūshū frente al linaje imperial descendiente directamente de Hoori.`,
    origen: 'Hijo mayor de Ninigi y Konohanasakuya-hime.',
    dominio: 'La pesca y el mar', naturaleza: 'Príncipe divino sometido', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'issun-boshi', nombre: 'Issun-bōshi', nombre_griego: 'Issun-bōshi',
    epitetos: 'El Guerrero de una Pulgada',
    descripcion_corta: 'Diminuto héroe folclórico, apenas del tamaño de un dedo, que derrota a un oni con una aguja como espada y se convierte en un guerrero de tamaño normal.',
    descripcion_larga: `Issun-bōshi, cuyo nombre significa literalmente "monje de una pulgada" en referencia a su estatura diminuta —apenas tres centímetros de altura—, nació de una pareja de ancianos que habían rezado durante años por tener un hijo, sin importarles su tamaño extraordinario con tal de que llegara. Al crecer, decidido a labrarse un futuro pese a su condición, Issun-bōshi partió hacia la capital armado con una aguja de coser como espada, la vaina de una espiga de arroz como funda, y un cuenco de sopa como pequeña embarcación, navegando río abajo con un palillo a modo de remo.

En la capital entró al servicio de una familia noble, donde se ganó el aprecio de todos pese a las burlas iniciales por su tamaño, y terminó acompañando a la hija de la familia en un viaje durante el cual un oni intentó secuestrarla. Issun-bōshi, sin dudarlo, se enfrentó al gigantesco demonio saltando dentro de su boca y apuñalándolo repetidamente por dentro con su aguja hasta obligarlo a huir despavorido, dejando caer en la huida un objeto mágico conocido como el mazo de la suerte (uchide no kozuchi). La joven, agradecida, usó el mazo para conceder a Issun-bōshi el deseo de crecer, y el diminuto guerrero se transformó al instante en un hombre joven de estatura normal, con quien terminaría casándose poco después —una historia que refuerza, dentro del folclore japonés, la idea de que el valor y el ingenio importan mucho más que el tamaño o la apariencia física.`,
    origen: 'Hijo diminuto de una pareja de ancianos que rezaron por tener descendencia.',
    dominio: 'El valor pese a las apariencias', naturaleza: 'Héroe folclórico diminuto', es_preview: 0
  },

  // --- MONSTRUOS ---
  {
    tipo: 'monstruo', slug: 'yamata-no-orochi', nombre: 'Yamata-no-Orochi', nombre_griego: 'Yamata-no-Orochi',
    epitetos: 'La Serpiente de Ocho Cabezas y Ocho Colas',
    descripcion_corta: 'Serpiente gigantesca con ocho cabezas y ocho colas que exigía devorar una doncella cada año — derrotada por Susanoo mediante astucia y sake.',
    descripcion_larga: `Yamata-no-Orochi era una serpiente monstruosa tan colosal que su cuerpo se extendía sobre ocho valles y ocho colinas al mismo tiempo, con ojos tan rojos como cerezas maduras y un vientre siempre cubierto de sangre y carne en descomposición. Aterrorizaba la región de Izumo exigiendo cada año que le entregaran a una de las hijas de un anciano matrimonio local como tributo, y para cuando Susanoo llegó a la región, recién expulsado del cielo por su hermana Amaterasu, la pareja ya había perdido a siete de sus ocho hijas y solo les quedaba la menor, Kushinada-hime, destinada a ser la próxima víctima.

Susanoo, prendado de la joven y decidido a salvarla, ideó una trampa: pidió a los ancianos que prepararan ocho enormes tinas de sake extremadamente fuerte, una para cada una de las ocho cabezas de la serpiente, y las colocó tras una valla con ocho aberturas exactas. Cuando Yamata-no-Orochi llegó y metió cada una de sus cabezas en una tina distinta, bebió hasta quedar completamente ebria y se derrumbó dormida. Susanoo aprovechó el momento para decapitarla por completo con su espada, y al cortar una de sus colas descubrió en su interior una espada extraordinaria de filo perfecto: Kusanagi, que envió como ofrenda de reconciliación a Amaterasu, convirtiéndose con el tiempo en una de las Tres Insignias Imperiales de Japón.`,
    origen: 'Monstruo de ocho cabezas que aterrorizaba la región de Izumo.',
    dominio: 'El terror sobre valles y colinas', naturaleza: 'Serpiente monstruosa primordial', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'tsuchigumo', nombre: 'Tsuchigumo', nombre_griego: 'Tsuchigumo',
    epitetos: 'La Araña de Tierra',
    descripcion_corta: 'Yokai con forma de araña gigante que teje trampas mortales desde guaridas subterráneas — nombre usado también para clanes rebeldes de la antigüedad.',
    descripcion_larga: `Tsuchigumo, "araña de tierra", designa tanto a una criatura yokai específica —una araña monstruosa capaz de crecer hasta un tamaño descomunal, con un rostro casi humano deformado por colmillos venenosos— como a un término histórico usado en las crónicas más antiguas de Japón para referirse despectivamente a ciertos clanes locales que se resistieron a la autoridad de la corte imperial durante el proceso de unificación del país, sugiriendo con ese nombre que vivían como alimañas escondidas en cuevas y guaridas subterráneas en lugar de en asentamientos civilizados.

La versión yokai más célebre aparece en relatos posteriores asociados al guerrero Minamoto no Yorimitsu, el mismo que después enfrentaría a Shuten-dōji: enfermo y débil en su lecho, Yorimitsu es atacado de noche por un monje misterioso que en realidad es Tsuchigumo disfrazado, y logra herirlo con su espada Hizamaru antes de que la criatura escape dejando un rastro de sangre. Siguiendo ese rastro hasta una guarida oculta bajo un montículo antiguo, Yorimitsu y sus retenedores encuentran finalmente a la verdadera Tsuchigumo, una araña gigantesca rodeada de los huesos de sus víctimas anteriores, a la que derrotan tras un combate feroz. La espada usada en ese enfrentamiento pasó a llamarse Kumogiri ("cortadora de arañas") en conmemoración de la hazaña.`,
    origen: 'Yokai arácnido, también usado como término despectivo para clanes rebeldes.',
    dominio: 'Las trampas subterráneas', naturaleza: 'Yokai arácnido', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'nue', nombre: 'Nue', nombre_griego: 'Nue',
    epitetos: 'La Quimera del Grito Nocturno',
    descripcion_corta: 'Monstruo híbrido con cabeza de mono, cuerpo de tanuki, patas de tigre y cola de serpiente — su grito nocturno anuncia enfermedad y desgracia.',
    descripcion_larga: `Nue combina en un solo cuerpo partes de cuatro animales completamente distintos: cabeza de mono, torso de tanuki (el mapache-perro japonés), patas y garras de tigre, y una cola que termina en forma de serpiente venenosa. Su grito, descrito en las crónicas antiguas como similar al canto de un pequeño tordo llamado nue —de donde toma su propio nombre—, se consideraba un presagio funesto que anunciaba enfermedad, desgracia o la muerte inminente de alguien importante, y su sola aparición sobre el tejado de un palacio bastaba para sembrar el pánico en toda la corte.

El relato más célebre sobre esta criatura involucra al emperador Konoe, que enfermó gravemente tras escuchar durante varias noches seguidas un grito extraño proveniente de una nube negra flotando sobre el palacio imperial. El guerrero Minamoto no Yorimasa fue convocado para acabar con la amenaza, y tras varias noches de vigilia logró disparar una flecha certera hacia la nube en la oscuridad, derribando a la criatura antes de que pudiera escapar. El cuerpo del Nue fue colocado en un pequeño bote y enviado a la deriva por el río, para que su maldición no contaminara la tierra donde había caído; la hazaña de Yorimasa se convirtió desde entonces en uno de los relatos de caza de yokai más citados de todo el periodo Heian.`,
    origen: 'Monstruo quimérico que anuncia enfermedad con su grito nocturno.',
    dominio: 'Los presagios funestos', naturaleza: 'Yokai quimérico', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'kappa', nombre: 'Kappa', nombre_griego: 'Kappa',
    epitetos: 'El Niño del Río',
    descripcion_corta: 'Espíritu acuático travieso con un cuenco de agua en la cabeza — poderoso e imprevisible en el agua, completamente indefenso si ese cuenco se derrama.',
    descripcion_larga: `El kappa habita ríos, lagos y estanques de toda la geografía japonesa, representado con un cuerpo verdoso escamoso similar al de una tortuga, un pico parecido al de un pato, un caparazón en la espalda y, sobre todo, una pequeña depresión en la parte superior de la cabeza que siempre contiene agua. Ese cuenco craneal es la clave de todo su poder: mientras permanezca lleno, el kappa conserva una fuerza extraordinaria capaz de arrastrar bajo el agua a caballos, vacas o incluso personas adultas, pero si el agua se derrama por cualquier motivo, la criatura queda instantáneamente débil e indefensa, casi incapaz de moverse hasta poder rellenarlo de nuevo.

Los kappa son criaturas ambivalentes en el folclore: capaces de ahogar imprudentemente a niños que nadan solos o de arrancar un órgano mítico llamado shirikodama del interior de sus víctimas, pero también obsesionados por la etiqueta y el honor hasta un punto casi cómico, incapaces de resistirse a devolver una reverencia educada aunque eso implique derramar el agua de su propia cabeza —un truco muy conocido para vencerlos sin violencia—. Su gusto especial por los pepinos dio origen al nombre del rollo de sushi kappa-maki, y ofrecer pepinos a un río considerado territorio de kappa sigue siendo, en algunas zonas rurales de Japón, una costumbre de cortesía preventiva para evitar su ira.`,
    origen: 'Espíritu acuático que habita ríos y estanques de toda la geografía japonesa.',
    dominio: 'Los ríos y las aguas dulces', naturaleza: 'Yokai acuático travieso', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'tengu', nombre: 'Tengu', nombre_griego: 'Tengu',
    epitetos: 'El Duende de las Montañas Sagradas',
    descripcion_corta: 'Espíritu de las montañas, mitad humano mitad ave, de nariz larguísima o pico afilado — protector orgulloso de los templos que castiga la vanidad.',
    descripcion_larga: `El tengu se representa de dos formas principales que evolucionaron con el tiempo: la más antigua, con pico de ave rapaz y alas emplumadas completas; la posterior y hoy más popular, con rostro humano rojo intenso y una nariz descomunal en lugar de pico, un diseño influido directamente por la iconografía previa de Sarutahiko. Habitan las montañas consideradas sagradas de todo Japón, especialmente aquellas asociadas al budismo Shugendō practicado por los ascetas yamabushi, cuyas vestimentas y accesorios rituales el propio tengu suele portar en su representación clásica.

Aunque temidos por su capacidad de secuestrar viajeros imprudentes o provocar incendios forestales repentinos con solo agitar su gran abanico de plumas, los tengu no son considerados puramente malignos: se les atribuye también un papel de guardianes exigentes del honor marcial y espiritual, dispuestos a castigar con humillaciones la arrogancia de monjes corruptos o guerreros vanidosos, pero capaces igualmente de entrenar en secreto a discípulos que demuestren humildad genuina. La leyenda más célebre en este sentido sostiene que el propio Minamoto no Yoshitsune, uno de los grandes héroes militares de la historia japonesa, aprendió esgrima siendo niño de un maestro tengu en el monte Kurama, cerca de Kioto, explicando así la habilidad sobrehumana que demostraría después en batalla.`,
    origen: 'Espíritu de las montañas sagradas, influido por la iconografía de Sarutahiko.',
    dominio: 'Las montañas sagradas y el honor marcial', naturaleza: 'Yokai guardián y castigador', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'oni', nombre: 'Oni', nombre_griego: 'Oni',
    epitetos: 'El Demonio de Cuernos y Colmillos',
    descripcion_corta: 'El demonio japonés por excelencia — piel roja o azul, cuernos, colmillos y una maza con púas capaz de derribar una casa de un solo golpe.',
    descripcion_larga: `El oni es, dentro del folclore japonés, la representación más directa y reconocible del mal físico: una criatura humanoide gigantesca de piel roja, azul o negra, con uno o varios cuernos afilados sobre la frente, colmillos prominentes que asoman de una boca siempre abierta en gesto amenazante, y garras capaces de despedazar a cualquier víctima. Suelen vestir apenas un taparrabo de piel de tigre y empuñar una maza de hierro con púas conocida como kanabo, un arma tan asociada a ellos que la expresión "oni ni kanabō" ("un oni con su kanabo") se usa todavía hoy en japonés para describir a alguien ya poderoso que se vuelve prácticamente invencible.

Los oni habitan tradicionalmente en el noreste, dirección considerada de mal augurio en la geomancia china y japonesa conocida como kimon, "la puerta del demonio", y se les combate ritualmente cada febrero durante el festival Setsubun, cuando familias enteras arrojan semillas de soja tostada gritando "¡Fuera los oni, que entre la fortuna!" para proteger sus hogares durante el año entrante. Aunque casi siempre representan una amenaza pura a derrotar —como en los relatos de Momotarō e Issun-bōshi—, algunas leyendas les atribuyen también una capacidad ocasional de redención o utilidad, y ciertos templos budistas incluso veneran versiones domesticadas de oni como guardianes protectores contra amenazas todavía peores.`,
    origen: 'Demonio del folclore japonés, asociado a la dirección noreste (kimon).',
    dominio: 'El terror físico y la fuerza bruta', naturaleza: 'Demonio yokai', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'yuki-onna', nombre: 'Yuki-onna', nombre_griego: 'Yuki-onna',
    epitetos: 'La Mujer de las Nieves',
    descripcion_corta: 'Espíritu femenino de belleza sobrenatural que aparece en tormentas de nieve — su aliento helado puede matar en un instante a cualquier viajero perdido.',
    descripcion_larga: `Yuki-onna aparece durante las noches de nevada intensa, ataviada con un kimono blanco puro que la hace casi invisible contra el paisaje nevado, con piel pálida como el hielo y una belleza tan sobrenatural que deja paralizados a los viajeros que se cruzan con ella en la montaña. Puede matar con un solo aliento helado, congelando a su víctima de forma instantánea, o atraerla hacia una muerte lenta por hipotermia mediante su presencia hipnótica, dejando el cuerpo completamente cubierto de escarcha al amanecer siguiente sin marca visible de violencia alguna.

El relato más conocido sobre ella, popularizado en Occidente por el escritor Lafcadio Hearn, cuenta la historia de dos leñadores atrapados por una tormenta, uno de los cuales es asesinado por Yuki-onna mientras el otro, más joven, es perdonado a condición de que jamás revele lo ocurrido esa noche a nadie. Años después, ya casado con una hermosa mujer llamada Oyuki con quien tuvo varios hijos, el leñador le cuenta finalmente el secreto a su esposa una noche de nieve, sin saber que ella era en realidad la propia Yuki-onna bajo forma humana; furiosa por la traición de la promesa rota, está a punto de matarlo también, pero se contiene por el amor hacia sus hijos y desaparece para siempre en la tormenta, dejándolo con vida pero solo, castigado por haber roto su palabra.`,
    origen: 'Espíritu de la nieve que aparece durante tormentas invernales intensas.',
    dominio: 'El frío mortal y las tormentas de nieve', naturaleza: 'Yokai del invierno', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'rokurokubi', nombre: 'Rokurokubi', nombre_griego: 'Rokurokubi',
    epitetos: 'La de Cuello Extensible',
    descripcion_corta: 'Yokai con apariencia humana normal de día, cuyo cuello se estira desmesuradamente de noche mientras su cuerpo permanece profundamente dormido.',
    descripcion_larga: `Los rokurokubi viven casi siempre disfrazados entre humanos comunes sin que nadie sospeche su verdadera naturaleza, trabajando en oficios ordinarios y manteniendo relaciones normales durante el día. Es solo de noche, cuando su cuerpo cae en un sueño profundo del que resulta casi imposible despertarlos, que su cuello se estira de manera antinatural, alargándose varios metros para que su cabeza vague sola por la casa o el vecindario, espiando conversaciones ajenas, lamiendo aceite de las lámparas o simplemente aterrorizando a quien se cruce con la visión de una cabeza flotante unida a un cuello serpenteante.

Una variante todavía más inquietante, llamada nukekubi, prescinde por completo del cuello visible: la cabeza se separa físicamente del cuerpo dormido y vuela sola durante la noche, regresando siempre antes del amanecer para reunirse con su cuerpo original —moverlo o esconderlo mientras la cabeza está fuera es, según la tradición, una forma segura y letal de matar a la criatura, condenada a vagar para siempre sin poder reunirse con su parte física—. Algunas historias tradicionales atribuyen la condición a una maldición kármica por faltas cometidas en una vida anterior, mientras otras la presentan simplemente como una característica congénita que la propia persona afectada desconoce hasta que alguien más es testigo accidental de su transformación nocturna.`,
    origen: 'Yokai de apariencia humana normal de día, maldición de cuello extensible de noche.',
    dominio: 'El engaño nocturno', naturaleza: 'Yokai metamórfico', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'tamamo-no-mae', nombre: 'Tamamo-no-Mae', nombre_griego: 'Tamamo-no-Mae',
    epitetos: 'La Zorra de las Nueve Colas',
    descripcion_corta: 'Cortesana de belleza y sabiduría perfectas en la corte imperial, en realidad un zorro de nueve colas — su derrota la transformó en una piedra que mata a quien la toca.',
    descripcion_larga: `Tamamo-no-Mae apareció en la corte del emperador Toba durante el siglo XII como una dama de compañía de belleza deslumbrante, cultura enciclopédica y un dominio absoluto de la poesía, la música y prácticamente cualquier tema que se discutiera ante ella, ganándose rápidamente el favor personal del propio emperador. Poco después, Toba comenzó a enfermar de manera inexplicable, debilitándose día tras día sin que ningún médico de la corte lograra identificar la causa, hasta que el astrólogo y adivino Abe no Yasunari fue convocado para investigar el caso mediante artes adivinatorias.

Yasunari determinó que Tamamo-no-Mae era en realidad un zorro de nueve colas centenario, un espíritu kitsune malévolo disfrazado de mujer que drenaba lentamente la energía vital del emperador con cada visita. Descubierta, la criatura huyó de la corte hacia la llanura de Nasu, donde un ejército enviado a capturarla finalmente logró darle caza y matarla. Pero su espíritu, furioso incluso en la muerte, se transformó en una roca venenosa conocida como Sesshō-seki, "la piedra que mata": cualquier animal, insecto o persona que se acercara demasiado a ella caía muerto en el acto por los gases tóxicos que emanaba. La piedra permaneció activa, según la leyenda, durante siglos, hasta que un monje budista logró finalmente exorcizarla y romperla en fragmentos dispersos por distintas provincias de Japón.`,
    origen: 'Zorro de nueve colas centenario disfrazado de cortesana en la corte imperial.',
    dominio: 'El engaño cortesano y la belleza letal', naturaleza: 'Yokai kitsune malévolo', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'namazu', nombre: 'Namazu', nombre_griego: 'Namazu',
    epitetos: 'El Bagre Gigante que Sacude la Tierra',
    descripcion_corta: 'Gigantesco bagre subterráneo cuyo movimiento provoca terremotos — solo la piedra sagrada del dios Kashima logra mantenerlo controlado.',
    descripcion_larga: `Namazu es un bagre colosal que, según la creencia popular japonesa extendida especialmente durante el periodo Edo, vive enroscado bajo el archipiélago entero de Japón, y cuyo más mínimo movimiento —un simple coletazo o un giro brusco— es capaz de sacudir toda la tierra que descansa sobre su cuerpo, causando los terremotos que periódicamente devastaban ciudades como Edo (la actual Tokio). Se le representa en los grabados populares llamados namazu-e, muy comercializados después de terremotos importantes, como una criatura gigantesca capaz de destruir edificios enteros con su cuerpo mientras la población huye despavorida a su alrededor.

Namazu es mantenido bajo control únicamente gracias a Takemikazuchi, el kami guerrero venerado en el santuario de Kashima, que sujeta al bagre bajo tierra con una gran piedra sagrada llamada Kaname-ishi, "la piedra clavija", clavada exactamente sobre el punto donde se cruzan la cabeza y la cola del monstruo. Cuando Takemikazuchi se distrae de su vigilancia constante —según algunas versiones, mientras asiste a la reunión anual de todos los dioses de Japón en Izumo, dejando temporalmente sin protección al resto del país—, Namazu aprovecha el descuido para agitarse y provocar temblores. Curiosamente, buena parte de los grabados namazu-e posteriores a un terremoto real no lo retratan solo como amenaza, sino también como una fuerza redistributiva casi bienvenida entre las clases populares, ya que la reconstrucción posterior a un desastre solía generar trabajo y dinero para artesanos y comerciantes comunes a costa de los más ricos.`,
    origen: 'Bagre gigante que habita bajo el archipiélago japonés, causante de los terremotos.',
    dominio: 'Los terremotos', naturaleza: 'Yokai sísmico', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'baku', nombre: 'Baku', nombre_griego: 'Baku',
    epitetos: 'El Devorador de Pesadillas',
    descripcion_corta: 'Criatura quimérica con trompa de tapir que se alimenta de los malos sueños — invocarlo demasiado seguido puede dejar a una persona sin sueños en absoluto.',
    descripcion_larga: `El baku se representa como una quimera quimérica formada por partes de varios animales distintos: cabeza y trompa de elefante o tapir, cuerpo de oso, patas de tigre y cola de buey, una combinación tan deliberadamente antinatural como la del Nue, aunque con una función completamente opuesta y benévola. Su origen se remonta a la mitología china, de donde el concepto llegó a Japón y se adaptó con el tiempo hasta convertirse en una figura protectora muy popular, especialmente entre niños asustados por pesadillas recurrentes.

La tradición sostiene que, al despertar de un mal sueño, basta con susurrar "baku, baku, devora este sueño" tres veces para que la criatura acuda a consumir la pesadilla, liberando a quien la sufrió de cualquier efecto negativo que pudiera haber dejado. Existe, sin embargo, una advertencia asociada: invocar al baku con demasiada frecuencia puede hacer que la criatura, insaciable, termine devorando también las esperanzas y ambiciones futuras de la persona junto con sus sueños negativos, dejándola con una vida vacía de aspiraciones. Su imagen decoraba tradicionalmente almohadas infantiles y estandartes colocados junto a las camas, una costumbre protectora que sobrevive hoy en distintos objetos decorativos y de papelería vendidos en Japón bajo motivos de baku.`,
    origen: 'Criatura quimérica de origen chino, adaptada al folclore japonés.',
    dominio: 'Los sueños y las pesadillas', naturaleza: 'Yokai benévolo devorador de sueños', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'shuten-doji', nombre: 'Shuten-dōji', nombre_griego: 'Shuten-dōji',
    epitetos: 'El Señor Demonio del Monte Ōe',
    descripcion_corta: 'El más temido de todos los jefes oni, señor de una fortaleza en el monte Ōe — derrotado por Minamoto no Yorimitsu mediante sake envenenado.',
    descripcion_larga: `Shuten-dōji, "el niño bebedor", gobernaba desde su fortaleza en el monte Ōe una banda numerosa de oni que aterrorizaba la capital Heian secuestrando a jóvenes nobles de la corte, especialmente mujeres, para llevarlas a su castillo montañés donde las mantenía cautivas. Su apariencia combinaba rasgos de niño y de demonio adulto a la vez —de ahí su nombre— y su fuerza y ferocidad superaban con creces a las de cualquier oni ordinario, convirtiéndolo en el jefe indiscutido de todos los demonios de la región.

Cuando las desapariciones se volvieron insostenibles, el emperador encargó al legendario guerrero Minamoto no Yorimitsu, acompañado de sus cuatro retenedores más leales —entre ellos Watanabe no Tsuna y Sakata Kintoki, el adulto Kintarō—, una expedición para acabar con la amenaza de una vez por todas. Disfrazados de monjes budistas peregrinos, el grupo logró infiltrarse en la fortaleza de Shuten-dōji y ganarse su confianza el tiempo suficiente para ofrecerle un sake especialmente preparado con propiedades narcóticas otorgadas por dioses protectores que habían auxiliado a los guerreros en el camino. Una vez que el oni y su séquito cayeron completamente ebrios e indefensos, Yorimitsu decapitó a Shuten-dōji con su espada; la cabeza cercenada, según la leyenda, intentó morder al guerrero incluso después de separada del cuerpo, obligándolo a llevar dos cascos superpuestos para protegerse durante el trayecto de regreso a la capital con el trofeo.`,
    origen: 'Señor oni de una fortaleza en el monte Ōe, cerca de Kioto.',
    dominio: 'El terror desde la montaña', naturaleza: 'Rey de los demonios oni', es_preview: 1
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-japonesa'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-japonesa" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando heroes y monstruos de Mitologia Japonesa (parte 2)...\n');
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
