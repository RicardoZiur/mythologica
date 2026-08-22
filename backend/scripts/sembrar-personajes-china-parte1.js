// ============================================================
// scripts/sembrar-personajes-china-parte1.js
// ------------------------------------------------------------
// Primer lote de Mitologia China: 5 titanes/primordiales y 15
// dioses. Contenido completo desde el inicio (mismo criterio que
// Mitologia Japonesa). Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-china-parte1.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- TITANES / PRIMORDIALES ---
  {
    tipo: 'titan', slug: 'pangu', nombre: 'Pangu', nombre_griego: '盤古 (Pángǔ)',
    epitetos: 'El Gigante que Separó el Cielo y la Tierra',
    descripcion_corta: 'Gigante primordial que emergió de un huevo cósmico y separó el cielo de la tierra empujándolos durante dieciocho mil años.',
    descripcion_larga: `Antes de que existiera cualquier forma reconocible del mundo, el universo entero estaba contenido en un huevo cósmico oscuro donde el yin y el yang permanecían mezclados sin distinción. Dentro de ese huevo durmió durante dieciocho mil años el gigante Pangu, hasta que despertó y, sintiéndose asfixiado por la oscuridad, rompió la cáscara con un hacha enorme. Las partes ligeras y claras (yang) ascendieron para formar el cielo, mientras las partes pesadas y turbias (yin) descendieron para formar la tierra, y Pangu se colocó entre ambas, empujando el cielo hacia arriba con sus manos y la tierra hacia abajo con sus pies para impedir que volvieran a fundirse.

Pangu creció un poco cada día durante otros dieciocho mil años, junto con la distancia cada vez mayor entre el cielo y la tierra, hasta que la separación quedó fija y permanente. Agotado por el esfuerzo milenario, Pangu murió finalmente, y su cuerpo se transformó en cada elemento del mundo conocido: su aliento se convirtió en viento y nubes, su voz en truenos, sus ojos en el sol y la luna, su sangre en los ríos, sus músculos en tierras fértiles, y hasta las pulgas de su cuerpo se convirtieron, según algunas versiones, en los primeros seres humanos.`,
    origen: 'Nacido de un huevo cósmico primordial que contenía el yin y el yang mezclados.',
    dominio: 'La separación del cielo y la tierra', naturaleza: 'Gigante creador primordial', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'nuwa', nombre: 'Nüwa', nombre_griego: '女媧 (Nǚwā)',
    epitetos: 'La Diosa de Cuerpo de Serpiente, Creadora de la Humanidad',
    descripcion_corta: 'Diosa creadora con cuerpo de serpiente que modeló a los primeros seres humanos con barro amarillo y reparó el cielo roto con piedras de cinco colores.',
    descripcion_larga: `Nüwa, representada con rostro y torso humanos y cola de serpiente, se sintió sola tras la creación del mundo por Pangu y decidió dar forma a seres a su imagen: tomó barro amarillo de la orilla de un río y modeló, una por una, figuras humanas a las que insufló vida con su propio aliento divino. Cansada de moldear cada figura con tanto cuidado, terminó salpicando barro con una cuerda para crear al resto de la humanidad más rápidamente —una explicación mítica, según algunas versiones, del origen de la desigualdad social entre la nobleza (moldeada a mano) y el resto del pueblo (salpicada).

Su hazaña más célebre llegó después, cuando el dios Gonggong, derrotado en batalla, embistió con furia el Monte Buzhou, uno de los pilares que sostenían el cielo, rompiéndolo y provocando que el firmamento se inclinara y se abriera una grieta enorme por la que caía fuego e inundación sin control. Nüwa fundió piedras de cinco colores distintos para remendar el agujero del cielo, cortó las patas de una tortuga gigante para usarlas como nuevos pilares que sostuvieran el firmamento reparado, y contuvo las inundaciones acumulando cenizas de caña, restaurando así el orden del mundo entero.`,
    origen: 'Diosa primordial con cuerpo de serpiente, hermana o esposa de Fuxi según las versiones.',
    dominio: 'La creación humana y la reparación del cosmos', naturaleza: 'Diosa creadora primordial', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'fuxi', nombre: 'Fuxi', nombre_griego: '伏羲 (Fúxī)',
    epitetos: 'El Primer Soberano, Inventor de los Ocho Trigramas',
    descripcion_corta: 'Primer soberano mítico de China, con cuerpo de serpiente como Nüwa — inventó la escritura, la pesca con redes y los ocho trigramas del I Ching.',
    descripcion_larga: `Fuxi, representado también con torso humano y cola de serpiente entrelazada con la de Nüwa —su hermana, esposa o ambas cosas según distintas tradiciones—, es venerado como el primero de los Tres Augustos, soberanos legendarios que gobernaron China en tiempos anteriores a cualquier registro histórico. Se le atribuye haber civilizado a la humanidad recién creada por Nüwa: enseñó a domesticar animales, a pescar con redes de cuerda trenzada en lugar de con las manos desnudas, a cocinar la carne sobre el fuego, y a establecer el matrimonio como institución social ordenada.

Su contribución más trascendente, sin embargo, fue observar los patrones del cielo, la tierra y el caparazón de una tortuga mágica que emergió del río Amarillo, y a partir de esas observaciones formular los ocho trigramas (bagua), combinaciones de líneas continuas y quebradas que representan las fuerzas fundamentales del cosmos. Esos ocho trigramas se convertirían, siglos después, en la base del I Ching, el Libro de las Mutaciones, uno de los textos más influyentes de toda la filosofía china, usado tanto para la adivinación como para explicar la estructura misma del cambio constante en el universo.`,
    origen: 'Primer soberano mítico, hermano y consorte de Nüwa.',
    dominio: 'La civilización, la adivinación y el orden cósmico', naturaleza: 'Soberano primordial semidivino', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'gonggong', nombre: 'Gonggong', nombre_griego: '共工 (Gònggōng)',
    epitetos: 'El Dios de las Aguas Rebeldes',
    descripcion_corta: 'Dios primordial del agua y las inundaciones, de rostro humano y cuerpo de serpiente — su derrota provocó que rompiera un pilar del cielo con la cabeza.',
    descripcion_larga: `Gonggong gobierna las aguas desbordadas y las inundaciones, representado con rostro humano, cabello rojo y cuerpo de serpiente, montado a menudo sobre un dragón. Su naturaleza caótica y rebelde lo enfrentó en más de una ocasión a otros grandes dioses del panteón chino por el control del orden cósmico, y el episodio más célebre de su mito cuenta que, tras ser derrotado en una guerra divina contra el dios Zhuanxu (o, según otras versiones, contra Zhurong, dios del fuego), Gonggong, furioso y humillado por la derrota, embistió con la cabeza el Monte Buzhou, uno de los pilares que sostenían el cielo en su lugar.

El impacto rompió el pilar por completo, provocando que el cielo se inclinara hacia el noroeste —una explicación mítica del motivo por el que, según la cosmología china tradicional, el sol, la luna y las estrellas parecen desplazarse en esa dirección— y que la tierra se hundiera hacia el sureste, razón por la que los grandes ríos de China fluyen tradicionalmente hacia el este. El caos resultante, con fuego e inundaciones desbordándose sin control por la grieta abierta en el firmamento, obligó a la diosa Nüwa a intervenir fundiendo piedras de cinco colores para remendar el cielo roto.`,
    origen: 'Dios primordial de las aguas, de naturaleza caótica y rebelde.',
    dominio: 'Las inundaciones y el caos primordial', naturaleza: 'Dios primordial rebelde', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'hundun', nombre: 'Hundun', nombre_griego: '混沌 (Hùndùn)',
    epitetos: 'El Caos sin Rostro',
    descripcion_corta: 'Ser primordial que encarna el caos original anterior a cualquier orden, descrito como un saco amarillo sin ojos, oídos, nariz ni boca.',
    descripcion_larga: `Hundun representa, dentro de la mitología y la filosofía china, el estado de caos primordial que existía antes de que cualquier forma de orden se impusiera sobre el universo —un concepto cercano, aunque no idéntico, al huevo cósmico del que emergería después Pangu—. Se le describe en textos antiguos como una masa amorfa parecida a un saco amarillo brillante, con seis patas y cuatro alas, pero completamente desprovisto de rostro: sin ojos, oídos, nariz ni boca, una ausencia total de los sentidos que definía su naturaleza anterior a cualquier distinción o diferenciación posible.

Una de las parábolas más citadas sobre Hundun, recogida en los escritos filosóficos taoístas atribuidos a Zhuangzi, cuenta que los soberanos de los mares del norte y del sur, agradecidos por la hospitalidad que Hundun les había ofrecido, decidieron corresponderle perforando en su cuerpo los siete orificios que todo ser humano posee —dos ojos, dos oídos, dos fosas nasales y una boca—, uno cada día, convencidos de que así podría finalmente ver, oír, comer y respirar como ellos. Al séptimo día, con el último orificio completado, Hundun murió: la parábola advertía, según la interpretación taoísta, sobre el peligro de imponer un orden artificial y ajeno sobre una naturaleza original que ya era completa en su propia indiferenciación.`,
    origen: 'Encarnación del caos primordial anterior a cualquier orden o forma.',
    dominio: 'El caos original', naturaleza: 'Ser primordial informe', es_preview: 0
  },

  // --- DIOSES ---
  {
    tipo: 'dios', slug: 'yu-huang', nombre: 'Yu Huang', nombre_griego: '玉皇 (Yù Huáng), el Emperador de Jade',
    epitetos: 'El Emperador de Jade, Soberano del Cielo',
    descripcion_corta: 'El gobernante supremo del cielo y de todos los dioses, según la tradición taoísta y popular china — administra el cosmos entero desde su corte celestial.',
    descripcion_larga: `El Emperador de Jade gobierna Tian, el Cielo, como soberano supremo de todo el panteón chino popular y taoísta, presidiendo una corte celestial organizada como un reflejo exacto de la burocracia imperial terrenal: cada dios, desde los guardianes de las montañas hasta los administradores de cada río o cocina familiar, ocupa un cargo específico dentro de esa jerarquía, sujeto a ascensos o degradaciones según su desempeño, exactamente igual que cualquier funcionario mortal del imperio.

Según una de las tradiciones sobre su origen, el Emperador de Jade no nació ya divino, sino que alcanzó ese rango tras incontables reencarnaciones dedicadas a aliviar el sufrimiento ajeno y acumular méritos espirituales durante eones, hasta que finalmente ascendió al trono celestial más elevado posible. Administra el destino de dioses, inmortales y mortales por igual, delegando buena parte de la gestión cotidiana en funcionarios menores —entre ellos Zao Jun, el dios de la cocina, que le rinde informe anual sobre la conducta de cada familia—, mientras él mismo permanece como la autoridad última e inapelable de todo el orden cósmico chino.`,
    origen: 'Soberano supremo del panteón taoísta y popular chino.',
    dominio: 'El cielo y la administración cósmica', naturaleza: 'Dios supremo burocrático', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'xi-wangmu', nombre: 'Xi Wangmu', nombre_griego: '西王母 (Xīwángmǔ), la Reina Madre de Occidente',
    epitetos: 'La Reina Madre de Occidente, Guardiana de la Inmortalidad',
    descripcion_corta: 'Diosa suprema femenina, guardiana del huerto de melocotones de la inmortalidad que solo maduran una vez cada tres mil años.',
    descripcion_larga: `Xi Wangmu gobierna el Kunlun, la montaña mítica situada en el extremo occidental del mundo, donde cultiva un huerto de melocotoneros sagrados cuyos frutos, una vez maduros cada tres mil años, conceden la inmortalidad a quien los consume. Su culto se remonta a textos muy antiguos que la describían originalmente con rasgos temibles —dientes de tigre, cola de leopardo—, asociada a las plagas y el castigo celestial, pero con el tiempo su imagen se transformó por completo en la de una reina majestuosa y benevolente, rodeada de damas inmortales y fénix, soberana indiscutida de todas las diosas del panteón taoísta.

Su banquete de melocotones, celebrado cada vez que la fruta finalmente madura, reúne a los inmortales más importantes del cielo en una celebración legendaria; es precisamente ese banquete el que Sun Wukong, el Rey Mono, invade sin invitación en uno de los episodios más célebres de la novela Viaje al Oeste, devorando los melocotones antes de tiempo y desatando el caos que lo llevaría después a rebelarse contra el cielo entero. Xi Wangmu es venerada también como patrona de las mujeres taoístas y guardiana de los secretos de la longevidad, complemento femenino directo del Rey Padre de Oriente, Dongwanggong.`,
    origen: 'Diosa suprema del oeste, guardiana del huerto de la inmortalidad.',
    dominio: 'La inmortalidad y la longevidad', naturaleza: 'Diosa suprema femenina', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'guanyin', nombre: 'Guanyin', nombre_griego: '觀音 (Guānyīn)',
    epitetos: 'La Diosa de la Compasión, la que Escucha los Lamentos del Mundo',
    descripcion_corta: 'Bodhisattva de la compasión, adaptación china de Avalokiteshvara — escucha los lamentos de cualquiera que sufra en cualquier rincón del mundo.',
    descripcion_larga: `Guanyin es la adaptación china del bodhisattva budista Avalokiteshvara, transformado con el tiempo de una figura masculina a una representación predominantemente femenina, venerada como la encarnación misma de la compasión infinita: su nombre significa literalmente "la que observa los sonidos [del sufrimiento]", capaz de percibir el lamento de cualquier ser sintiente en cualquier rincón del mundo y acudir en su auxilio sin condición alguna. Se le representa habitualmente sosteniendo un jarrón de agua pura o una rama de sauce, símbolos de su capacidad para aliviar el sufrimiento, y a veces con múltiples brazos que representan su capacidad de socorrer a incontables personas a la vez.

Según una de las leyendas más populares sobre su origen humano, Guanyin fue en una vida anterior una princesa llamada Miaoshan que se negó a casarse por decisión de su padre, prefiriendo dedicar su vida a la práctica religiosa; su padre, furioso, ordenó su ejecución, pero Miaoshan sobrevivió milagrosamente y, tras alcanzar la iluminación, regresó incluso a sacrificar partes de su propio cuerpo para curar la enfermedad de su padre arrepentido. En el Viaje al Oeste, es Guanyin quien recluta y guía a Sun Wukong, Zhu Bajie y Sha Wujing para proteger al monje Tang Sanzang durante su peregrinación a la India.`,
    origen: 'Adaptación china del bodhisattva budista Avalokiteshvara.',
    dominio: 'La compasión y el auxilio universal', naturaleza: 'Bodhisattva venerada como diosa', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'erlang-shen', nombre: 'Erlang Shen', nombre_griego: '二郎神 (Èrláng Shén)',
    epitetos: 'El Dios de Tres Ojos',
    descripcion_corta: 'Guerrero divino con un tercer ojo vertical en la frente, el único capaz de rivalizar en combate directo con Sun Wukong, el Rey Mono.',
    descripcion_larga: `Erlang Shen se distingue de cualquier otro dios del panteón chino por un tercer ojo vertical situado en el centro de su frente, capaz de percibir la verdadera naturaleza oculta detrás de cualquier ilusión o disfraz mágico, un poder que lo convirtió en el cazador de espíritus y demonios más temido del cielo. Se le representa siempre acompañado de su perro celestial, Xiaotian Quan, un feroz compañero de caza capaz de morder incluso a los inmortales más poderosos, y suele empuñar una lanza de tres puntas y dos filos.

Su papel más célebre dentro de la mitología popular ocurre durante la rebelión de Sun Wukong contra el cielo: cuando ningún otro guerrero celestial logra someter al Rey Mono, el Emperador de Jade convoca finalmente a Erlang Shen, el único capaz de enfrentarlo en igualdad de condiciones. Ambos libran un combate prolongado de transformaciones constantes, cada uno cambiando de forma una y otra vez para sorprender al otro, hasta que Erlang Shen, con ayuda de Laozi y su anillo diamantino, finalmente logra capturar a Sun Wukong. Se le venera también, en algunas tradiciones regionales, como hijo de una mortal y un dios, y como patrono de los cazadores de demonios y protector contra inundaciones.`,
    origen: 'Guerrero divino de origen semidivino, sobrino del Emperador de Jade según algunas tradiciones.',
    dominio: 'La caza de demonios y la percepción de lo oculto', naturaleza: 'Dios guerrero de tres ojos', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'zhurong', nombre: 'Zhurong', nombre_griego: '祝融 (Zhùróng)',
    epitetos: 'El Dios del Fuego',
    descripcion_corta: 'Dios del fuego, a menudo representado montando dos dragones — su enfrentamiento con Gonggong desencadenó la inclinación del cielo.',
    descripcion_larga: `Zhurong gobierna el fuego en todas sus formas, desde el hogar doméstico hasta el fuego destructivo capaz de arrasar ciudades enteras, y se le representa montando dos dragones o con rasgos de bestia, un rostro humano sobre cuerpo animal, reflejo de su naturaleza a la vez civilizadora y salvaje. Su culto se remonta a tiempos muy antiguos, y en algunas regiones del sur de China se le venera todavía hoy como ancestro mítico fundador de ciertos linajes nobles, atribuyéndole el descubrimiento original del fuego para uso humano.

Según una de las versiones más citadas del mito de la inclinación del cielo, fue Zhurong, no Zhuanxu, quien derrotó en combate directo a Gonggong, el dios rebelde de las aguas, obligándolo en su humillación a embestir el Monte Buzhou y romper uno de los pilares celestiales. Como dios del verano y del sur en el sistema de correspondencias cosmológicas chinas —cada estación y dirección cardinal asociada a un elemento y una deidad particular—, Zhurong representa el calor, la luz y la energía yang en su forma más intensa, complemento directo de las fuerzas acuáticas y frías que gobierna su eterno rival Gonggong.`,
    origen: 'Dios del fuego, venerado como ancestro mítico en algunas regiones del sur de China.',
    dominio: 'El fuego y el verano', naturaleza: 'Dios del fuego', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'leigong', nombre: 'Leigong', nombre_griego: '雷公 (Léigōng), el Duque del Trueno',
    epitetos: 'El Duque del Trueno',
    descripcion_corta: 'Dios del trueno de rostro parecido a un ave rapaz, alas y garras — castiga con sus martillos a criminales que la justicia humana no logró alcanzar.',
    descripcion_larga: `Leigong se representa con un rostro similar al de un ave de presa, piel azulada, garras afiladas y un par de alas a la espalda, empuñando en cada mano un martillo o cincel con el que golpea tambores dispuestos a su alrededor para producir el sonido del trueno, de forma muy similar a la iconografía del Raijin japonés, con quien comparte una raíz cultural común proveniente de tradiciones antiguas del este asiático. Se le considera un ejecutor directo de la justicia celestial: cuando un criminal comete un crimen tan grave que la justicia humana no logra o no quiere castigarlo, Leigong desciende personalmente para fulminarlo con un rayo, marcando a veces en la espalda del cadáver el carácter chino correspondiente al delito cometido, como prueba visible de la razón del castigo divino.

Trabaja siempre en estrecha coordinación con Dianmu, la diosa del relámpago, que ilumina primero a la víctima culpable para que Leigong pueda apuntar su golpe con precisión certera en la oscuridad de la tormenta. Los agricultores chinos lo veneraban tradicionalmente antes de cada temporada de lluvias, pidiendo tormentas productivas para las cosechas pero suplicando al mismo tiempo protección contra su ira, consciente cualquier persona de que un rayo caído cerca de su hogar podía interpretarse como sospecha pública de alguna falta oculta.`,
    origen: 'Dios del trueno, ejecutor de la justicia celestial contra crímenes impunes.',
    dominio: 'El trueno y el castigo divino', naturaleza: 'Dios justiciero', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'dianmu', nombre: 'Dianmu', nombre_griego: '電母 (Diànmǔ), la Madre del Relámpago',
    epitetos: 'La Madre del Relámpago',
    descripcion_corta: 'Diosa del relámpago, esposa o compañera de Leigong — ilumina a los culpables en la oscuridad de la tormenta para que el trueno pueda alcanzarlos.',
    descripcion_larga: `Dianmu se representa como una mujer elegante vestida de colores brillantes, sosteniendo en cada mano un espejo de bronce pulido con el que produce los destellos de luz del relámpago, iluminando el cielo nocturno durante las tormentas más violentas. Su función dentro del panteón de la tormenta china está estrechamente entrelazada con la de Leigong, el Duque del Trueno: mientras este ejecuta el castigo divino contra criminales impunes con sus martillos, es Dianmu quien primero ilumina a la víctima señalada para que el golpe certero del trueno no falle en la penumbra de la tempestad, formando ambos un equipo de justicia celestial complementario e inseparable.

Según una leyenda popular relativamente tardía, Dianmu no siempre trabajó junto a Leigong: se dice que en un principio él intentó fulminar por error a una mujer inocente, y ella, indignada al descubrir la injusticia a punto de cometerse, intervino para exponer la verdad con sus espejos de luz, evitando así una muerte injusta. Impresionado por su sentido de la justicia, el propio Leigong la incorporó desde entonces como compañera permanente de sus rondas celestiales, garantizando que cada relámpago revelara la verdad antes de que el trueno emitiera su veredicto final.`,
    origen: 'Diosa del relámpago, compañera de Leigong en la justicia celestial.',
    dominio: 'El relámpago y la revelación de la verdad', naturaleza: 'Diosa de la tormenta', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'caishen', nombre: 'Caishen', nombre_griego: '財神 (Cáishén)',
    epitetos: 'El Dios de la Riqueza',
    descripcion_corta: 'Dios de la fortuna y la prosperidad material, venerado especialmente durante el Año Nuevo chino — su culto combina figuras militares y civiles distintas según la región.',
    descripcion_larga: `Caishen es, dentro del amplio y flexible panteón popular chino, la figura genérica que preside la riqueza, la fortuna comercial y la prosperidad material, invocado con especial intensidad durante los primeros días del Año Nuevo lunar, cuando familias y comercios enteros cuelgan su imagen en la entrada de sus hogares y negocios con la esperanza de asegurar un año económicamente favorable. A diferencia de otras grandes deidades del panteón chino, Caishen no corresponde a una única figura fija, sino que distintas tradiciones regionales y sectas religiosas lo identifican con personajes históricos o legendarios diferentes.

Entre las identificaciones más comunes se encuentra la de un general marcial de la dinastía Shang, representado con armadura y una expresión feroz, capaz de repartir riqueza como recompensa por el valor; y la de un funcionario civil benevolente de rasgos amables, vestido con ropas de mandarín y rodeado de lingotes de oro, monedas antiguas y objetos preciosos. En ambas versiones, Caishen suele aparecer acompañado de asistentes que cargan cofres de tesoro, y su templo o altar doméstico recibe ofrendas constantes de comerciantes que buscan tanto protección frente a pérdidas económicas como la multiplicación activa de sus ganancias.`,
    origen: 'Figura genérica de la riqueza, identificada con distintos personajes según la región.',
    dominio: 'La riqueza y la prosperidad comercial', naturaleza: 'Dios de la fortuna', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'tudigong', nombre: 'Tudigong', nombre_griego: '土地公 (Tǔdìgōng), el Abuelo de la Tierra',
    epitetos: 'El Abuelo de la Tierra',
    descripcion_corta: 'El más humilde y cercano de los dioses chinos, guardián local de cada pueblo, calle o terreno específico — el funcionario de menor rango de toda la burocracia celestial.',
    descripcion_larga: `Tudigong ocupa, dentro de la vasta jerarquía burocrática del panteón chino, el rango más bajo y a la vez el más cercano a la vida cotidiana de la gente común: cada pueblo, cada calle, e incluso cada terreno agrícola individual cuenta tradicionalmente con su propio Tudigong particular, un dios guardián local distinto del de la aldea vecina, encargado de vigilar esa parcela específica de tierra y a quienes viven o trabajan en ella. Se le representa siempre como un anciano bondadoso de barba blanca, sonrisa amable y ropas sencillas, muy alejado de la grandeza y el poder de dioses superiores como el Emperador de Jade.

Pese a su rango modesto dentro de la jerarquía celestial, Tudigong es una de las divinidades más veneradas en la práctica religiosa diaria china, precisamente por su cercanía y accesibilidad: los agricultores le rinden culto antes de sembrar o cosechar, los comerciantes locales antes de abrir un nuevo negocio, y las familias enteras durante festividades importantes, pidiendo su protección constante frente a desgracias menores del día a día. Según algunas tradiciones, cualquier persona virtuosa que muere puede ser designada póstumamente como el nuevo Tudigong de su propio pueblo natal, un ascenso modesto pero honroso dentro de la burocracia celestial disponible incluso para los mortales más ordinarios.`,
    origen: 'Dios guardián local de rango más bajo dentro de la jerarquía celestial china.',
    dominio: 'La protección de un terreno o pueblo específico', naturaleza: 'Dios local guardián', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'yan-wang', nombre: 'Yan Wang', nombre_griego: '閻王 (Yánwáng), el Rey Yama',
    epitetos: 'El Rey del Inframundo, Juez Supremo de los Muertos',
    descripcion_corta: 'Juez supremo del inframundo chino, adaptación del dios hindú Yama — decide el destino de cada alma según sus acciones en vida, con absoluta imparcialidad.',
    descripcion_larga: `Yan Wang preside Diyu, el inframundo chino, un sistema elaborado de diez cortes o niveles infernales cada una gobernada por un rey juez distinto, donde las almas de los recién fallecidos son juzgadas según sus acciones en vida antes de determinar su destino final: reencarnación en una forma superior o inferior, castigo temporal en algún nivel específico del infierno diseñado para el tipo exacto de falta cometida, o, en casos excepcionales de virtud extraordinaria, ascenso directo a algún paraíso budista o taoísta. Su figura llegó a China como adaptación del dios hindú-budista Yama, fusionándose con el tiempo con conceptos autóctonos chinos sobre la justicia y la burocracia del más allá.

Yan Wang gobierna específicamente la quinta corte de las diez que componen Diyu, y se le representa con vestiduras oficiales de juez imperial, un semblante severo pero absolutamente imparcial, y un gran libro de registros donde queda anotada cada acción de cada persona a lo largo de toda su vida, sin excepción posible. Su imparcialidad radical se convirtió en tema recurrente de historias populares chinas, donde incluso emperadores corruptos o funcionarios poderosos que lograban escapar del castigo terrenal terminaban, sin excepción alguna, enfrentando el juicio final e inapelable de Yan Wang tras la muerte.`,
    origen: 'Adaptación china del dios hindú-budista Yama, juez del inframundo.',
    dominio: 'El juicio de los muertos', naturaleza: 'Rey juez del inframundo', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'mazu', nombre: 'Mazu', nombre_griego: '媽祖 (Māzǔ)',
    epitetos: 'La Diosa del Mar, Protectora de los Marineros',
    descripcion_corta: 'Diosa del mar y protectora de marineros y pescadores, deificación de una joven de la dinastía Song capaz de predecir tormentas y rescatar náufragos.',
    descripcion_larga: `Mazu fue, según la tradición, una joven mortal llamada Lin Mo, nacida en la isla de Meizhou durante la dinastía Song, dotada desde niña de una capacidad excepcional para predecir el clima marino y auxiliar espiritualmente a los pescadores en peligro incluso desde la distancia, entrando en trances durante los cuales su espíritu viajaba para rescatar a marineros a punto de naufragar. Murió joven, según distintas versiones ahogada intentando salvar a su propio padre y hermano de una tormenta, o bien ascendiendo directamente a la inmortalidad tras una vida de devoción y buenas obras, y su culto se extendió rápidamente por toda la costa sureste de China y después por comunidades chinas de ultramar en todo el sudeste asiático.

Su templo principal en la isla de Meizhou, y cientos de templos derivados en Taiwán, Fujian, Hong Kong y comunidades chinas de todo el mundo, siguen recibiendo hasta hoy la devoción constante de pescadores, marineros y cualquier familia con seres queridos que dependan del mar para su sustento. Se le representa vestida de rojo o dorado, a menudo flanqueada por dos generales guardianes de vista y oído sobrehumanos, Qianliyan y Shunfeng'er, capaces de detectar peligros marítimos a miles de kilómetros de distancia para que Mazu pueda intervenir a tiempo.`,
    origen: 'Deificación de Lin Mo, joven mortal de la dinastía Song con dones proféticos sobre el mar.',
    dominio: 'El mar y la protección de marineros', naturaleza: 'Diosa deificada de origen humano', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'chang-e', nombre: 'Chang\'e', nombre_griego: '嫦娥 (Cháng\'é)',
    epitetos: 'La Diosa de la Luna',
    descripcion_corta: 'Esposa del arquero Houyi, ascendió a la luna tras consumir un elixir de inmortalidad — vive desde entonces en soledad eterna dentro de un palacio lunar helado.',
    descripcion_larga: `Chang'e era la esposa del legendario arquero Houyi, el héroe que salvó a la humanidad derribando nueve de los diez soles que amenazaban con incinerar la tierra. Como recompensa por su hazaña, Houyi recibió de la Reina Madre de Occidente, Xi Wangmu, un elixir de inmortalidad tan poderoso que una sola dosis completa elevaría a quien la tomara directamente al estatus de dios inmortal; Houyi, sin embargo, decidió guardar el elixir sin consumirlo de inmediato, deseando compartir una vida larga junto a Chang'e en la tierra antes de dar ese paso definitivo.

Según la versión más difundida del mito, un discípulo traidor de Houyi intentó robar el elixir mientras este se encontraba de caza, y Chang'e, para impedir que cayera en manos indignas, decidió beberlo ella misma de un solo trago. El elixir la elevó de inmediato hacia el cielo, y aunque intentó frenar su ascenso para no alejarse por completo de su esposo, terminó posándose en la luna, el cuerpo celeste más cercano a la tierra, donde permanece desde entonces en soledad eterna, acompañada únicamente por un conejo de jade que muele constantemente hierbas medicinales. Cada año, durante el Festival del Medio Otoño, las familias chinas contemplan la luna llena y comparten pasteles lunares en su honor, recordando tanto su sacrificio como la separación eterna entre ambos esposos.`,
    origen: 'Esposa mortal del arquero Houyi, ascendida a la luna tras beber un elixir de inmortalidad.',
    dominio: 'La luna y la soledad eterna', naturaleza: 'Diosa lunar de origen mortal', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'zao-jun', nombre: 'Zao Jun', nombre_griego: '灶君 (Zàojūn), el Dios de la Cocina',
    epitetos: 'El Dios de la Cocina, Inspector de Cada Hogar',
    descripcion_corta: 'Dios doméstico que vive en la cocina de cada casa y asciende al cielo cada Año Nuevo para informar al Emperador de Jade sobre la conducta de la familia.',
    descripcion_larga: `Zao Jun habita, según la creencia popular china, en la cocina de cada hogar individual, generalmente representado por una pequeña imagen de papel colocada cerca del fogón, desde donde observa en silencio la conducta cotidiana de toda la familia durante los trescientos sesenta y cinco días del año: cada palabra, cada disputa doméstica, cada acto de generosidad o de mezquindad queda registrado en su memoria minuciosa. Una semana antes del Año Nuevo lunar, Zao Jun asciende personalmente al cielo para presentar su informe anual completo directamente ante el Emperador de Jade, quien decide en función de ese reporte qué fortuna o desgracia corresponde a esa familia durante el año entrante.

Para asegurar un informe favorable, las familias chinas realizan tradicionalmente un ritual antes de su partida: untan miel o pasta dulce en los labios de su imagen de papel —con la doble intención de endulzar sus palabras ante el Emperador de Jade o, según otra interpretación más traviesa, de pegarle literalmente la boca para que no pueda reportar nada negativo—, y después queman la imagen para enviarlo simbólicamente hacia el cielo, reemplazándola por una nueva al regreso de Zao Jun tras el Año Nuevo, lista para comenzar un nuevo ciclo completo de vigilancia doméstica.`,
    origen: 'Dios doméstico que reside en la cocina de cada hogar chino.',
    dominio: 'La vigilancia doméstica y el informe anual celestial', naturaleza: 'Dios del hogar', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'yue-lao', nombre: 'Yue Lao', nombre_griego: '月老 (Yuè Lǎo), el Anciano Bajo la Luna',
    epitetos: 'El Anciano Bajo la Luna, Casamentero Divino',
    descripcion_corta: 'Dios del matrimonio y el amor, que ata con un hilo rojo invisible el tobillo de cada pareja destinada a casarse, sin importar cuán lejos o distintos parezcan.',
    descripcion_larga: `Yue Lao se representa como un anciano sabio de larga barba blanca que aparece bajo la luz de la luna llevando siempre consigo un libro enorme donde están registrados todos los matrimonios destinados a ocurrir, junto con una bolsa de hilos rojos invisibles. Con esos hilos, Yue Lao ata en secreto el tobillo de cada persona a la de su futura pareja predestinada, un vínculo mágico que, según la creencia popular china, ninguna distancia geográfica, diferencia social o circunstancia adversa puede romper jamás, por más improbable que parezca el encuentro final entre ambos extremos del hilo.

Una de las leyendas más citadas sobre su poder cuenta la historia de un joven que, escéptico ante la existencia de Yue Lao, lo encontró una noche consultando su libro bajo la luna y le preguntó con quién estaba destinado a casarse; el anciano señaló a una niña pequeña y sucia cargada por una mendiga, provocando en el joven tal rechazo que contrató a un sirviente para herirla y así "romper" el destino anunciado. Años después, el joven se casó efectivamente con una mujer hermosa que llevaba, sin explicación aparente para él, una cicatriz exacta en el mismo punto donde había ordenado la herida —confirmando que el hilo rojo de Yue Lao, pese a cualquier intento de evitarlo, siempre termina cumpliéndose.`,
    origen: 'Dios del matrimonio, guardián del registro de todas las uniones predestinadas.',
    dominio: 'El amor, el matrimonio y el destino romántico', naturaleza: 'Dios casamentero', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'wenchang-wang', nombre: 'Wenchang Wang', nombre_griego: '文昌王 (Wénchāng Wáng)',
    epitetos: 'El Rey de la Literatura y los Exámenes Imperiales',
    descripcion_corta: 'Dios patrono de la literatura, la erudición y los exámenes imperiales — venerado durante siglos por cualquier candidato que aspirara a un cargo dentro de la burocracia china.',
    descripcion_larga: `Wenchang Wang preside la literatura, la erudición y, de forma muy especial, el sistema de exámenes imperiales que durante más de mil años determinó el acceso a cualquier cargo dentro de la vasta burocracia del Estado chino —un sistema tan exigente y competitivo que millones de candidatos a lo largo de los siglos dedicaron años enteros de estudio con la esperanza de aprobarlo, ya que un resultado favorable podía transformar por completo el destino social de una familia humilde—. Su identidad se fusionó con el tiempo con la de una estrella específica de la constelación de la Osa Mayor, considerada su morada celestial, y con la memoria de varios eruditos históricos venerados regionalmente antes de esa fusión.

Los candidatos a los exámenes imperiales visitaban tradicionalmente sus templos antes de presentarse a las pruebas más importantes de su vida, dejando ofrendas de pinceles nuevos, tinta fresca y papel de calidad, con la esperanza de obtener su favor divino para aprobar exámenes que decidían no solo su futuro individual sino, a menudo, el de generaciones completas de su familia. Aunque el sistema de exámenes imperiales desapareció oficialmente a comienzos del siglo XX, el culto a Wenchang Wang sobrevive hasta hoy, adaptado a los exámenes escolares y universitarios modernos, visitado todavía por estudiantes que buscan su bendición antes de pruebas académicas decisivas.`,
    origen: 'Dios patrono de la literatura, fusionado con una estrella de la Osa Mayor.',
    dominio: 'La literatura y los exámenes académicos', naturaleza: 'Dios de la erudición', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-china'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-china" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando titanes y dioses de Mitologia China (parte 1)...\n');
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
