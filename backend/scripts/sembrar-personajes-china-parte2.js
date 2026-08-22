// ============================================================
// scripts/sembrar-personajes-china-parte2.js
// ------------------------------------------------------------
// Segundo lote de Mitologia China: 10 heroes y 12 monstruos.
// Contenido completo desde el inicio. Idempotente via
// slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-china-parte2.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- HEROES ---
  {
    tipo: 'heroe', slug: 'sun-wukong', nombre: 'Sun Wukong', nombre_griego: '孫悟空 (Sūn Wùkōng), el Rey Mono',
    epitetos: 'El Rey Mono, el Gran Sabio Igual al Cielo',
    descripcion_corta: 'Mono nacido de una roca mágica, dotado de fuerza descomunal y setenta y dos transformaciones — se rebeló contra el cielo entero antes de escoltar a un monje budista a la India.',
    descripcion_larga: `Sun Wukong nació de una roca mágica en la Montaña de las Flores y Frutas, formada tras absorber durante siglos la esencia del cielo y la tierra, y desde el primer instante mostró una inteligencia y una energía que superaban con creces las de cualquier otro mono de su comunidad, que pronto lo eligieron como su rey. Insatisfecho con los límites de la vida mortal, viajó en busca de la inmortalidad y aprendió de un maestro taoísta setenta y dos transformaciones distintas, la capacidad de dar un salto de casi treinta y cinco mil kilómetros de un solo brinco, y técnicas de combate extraordinarias, además de robar del fondo del mar el báculo Ruyi Jingu Bang, una barra de hierro capaz de cambiar de tamaño a voluntad.

Convencido de su propio poder, Sun Wukong desafió al cielo entero: borró su nombre del Libro de la Vida y la Muerte para volverse inmortal por decreto propio, devoró sin permiso los melocotones de la inmortalidad de Xi Wangmu, y derrotó a los ejércitos celestiales enviados a capturarlo, hasta que Buda en persona intervino, atrapándolo bajo una montaña durante quinientos años como castigo. Liberado finalmente por el monje Tang Sanzang a cambio de convertirse en su discípulo y protector, Sun Wukong pasó a escoltarlo junto a Zhu Bajie y Sha Wujing durante la larga peregrinación a la India narrada en Viaje al Oeste, una de las cuatro grandes novelas clásicas de la literatura china, enfrentando demonios y obstáculos sobrenaturales en cada tramo del camino.`,
    origen: 'Nacido de una roca mágica en la Montaña de las Flores y Frutas.',
    dominio: 'La transformación y la rebeldía', naturaleza: 'Mono inmortal semidivino', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'houyi', nombre: 'Houyi', nombre_griego: '后羿 (Hòu Yì)',
    epitetos: 'El Arquero Divino que Derribó Nueve Soles',
    descripcion_corta: 'Arquero legendario que salvó a la humanidad derribando nueve de los diez soles que amenazaban con incinerar la tierra — esposo de Chang\'e.',
    descripcion_larga: `En una era mítica, diez soles —hijos del Emperador Celestial del Este— habían acordado turnarse para cruzar el cielo uno por vez, pero un día decidieron todos juntos salir al mismo tiempo, provocando un calor tan insoportable que los ríos se secaron, las cosechas se quemaron en pie y la propia tierra comenzó a agrietarse bajo el sol multiplicado por diez. El emperador Yao, desesperado, suplicó ayuda al cielo, y este envió a Houyi, un arquero de habilidad sobrehumana, con la misión de disciplinar a los soles rebeldes sin destruirlos por completo.

Houyi, sin embargo, al ver el sufrimiento extendido de la humanidad, decidió actuar con mayor firmeza de la esperada: disparó una flecha tras otra hasta derribar a nueve de los diez soles, dejando solo uno para iluminar el mundo con una intensidad soportable, y de paso libró a la humanidad de varias bestias monstruosas que también asolaban la tierra en esa misma época. Pese a salvar al mundo entero, el Emperador Celestial, furioso por la muerte de nueve de sus propios hijos, condenó a Houyi y a su esposa Chang'e a vivir como simples mortales en la tierra, despojados de su inmortalidad divina original —una sentencia que llevaría después a Houyi a buscar el elixir de la inmortalidad que, tras ser bebido por Chang'e, terminaría separándolos para siempre.`,
    origen: 'Arquero divino enviado por el cielo para disciplinar a los diez soles.',
    dominio: 'La arquería y la salvación de la humanidad', naturaleza: 'Héroe arquero semidivino', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'yu-el-grande', nombre: 'Yu el Grande', nombre_griego: '大禹 (Dà Yǔ)',
    epitetos: 'El Domador de la Gran Inundación, Fundador de la Dinastía Xia',
    descripcion_corta: 'Ingeniero legendario que domó una inundación catastrófica cavando canales en vez de construir diques, y fundó la primera dinastía china.',
    descripcion_larga: `Una inundación catastrófica azotó China durante generaciones, y el emperador Shun encargó primero a Gun, padre de Yu, la tarea de contenerla; Gun intentó bloquear el agua con diques y muros, pero el método fracasó por completo, empeorando la inundación, y Gun fue ejecutado por su fracaso. Yu heredó la misma misión imposible, pero decidió abandonar por completo el enfoque de su padre: en vez de intentar contener el agua con barreras, dedicó trece años enteros a cavar canales y dragar los ríos existentes, guiando el agua excedente hacia el mar de forma controlada en lugar de intentar detenerla sin más.

La leyenda insiste en la dedicación extraordinaria de Yu durante esos trece años: pasó tres veces frente a la puerta de su propia casa sin entrar a ver a su familia, tan urgente consideraba completar la tarea antes de permitirse cualquier descanso personal. Su éxito completo domando la inundación le ganó tal prestigio y autoridad que el emperador Shun lo designó su sucesor directo, y Yu fundó la dinastía Xia, tradicionalmente considerada la primera dinastía de la historia china, aunque su existencia histórica real sigue debatida entre arqueólogos e historiadores modernos. Yu es venerado hasta hoy como modelo supremo de sacrificio personal, ingenio práctico y liderazgo responsable frente a una crisis de proporciones nacionales.`,
    origen: 'Hijo de Gun, encargado de domar la gran inundación tras el fracaso de su padre.',
    dominio: 'El control de las aguas y el gobierno justo', naturaleza: 'Héroe ingeniero, fundador de dinastía', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'nezha', nombre: 'Nezha', nombre_griego: '哪吒 (Nézhā)',
    epitetos: 'El Príncipe Niño de las Ruedas de Viento y Fuego',
    descripcion_corta: 'Niño prodigio de fuerza descomunal que desafió al Rey Dragón del Mar Oriental — tras suicidarse en honor a su padre, renació con un cuerpo de loto.',
    descripcion_larga: `Nezha nació como una bola de carne de la que emergió, tras ser cortada por su padre el general Li Jing, un niño ya capaz de caminar y hablar, dotado desde el primer instante de una fuerza y una temeridad extraordinarias. Siendo apenas un niño, mientras se bañaba en el mar, provocó sin querer un temblor que alcanzó el palacio del Rey Dragón del Mar Oriental, y cuando este envió a un general a investigar, Nezha lo mató en la confrontación resultante; poco después, enfrentado al propio hijo del Rey Dragón, lo mató también y le arrancó los tendones para fabricarse un cinturón, desatando la furia completa del Rey Dragón contra toda su familia.

Para proteger a sus padres de la venganza draconiana que amenazaba con inundar toda la región, Nezha decidió sacrificar su propia vida, devolviendo simbólicamente su carne y huesos a sus padres como pago por haberlo traído al mundo. Su maestro espiritual, compadecido, reconstruyó su cuerpo a partir de raíces de loto, devolviéndolo a la vida con una nueva forma incorruptible. Armado con la Lanza de Punta de Fuego y montado sobre sus icónicas Ruedas de Viento y Fuego —que le permiten volar a velocidades extraordinarias—, Nezha se convirtió después en un guerrero protector fundamental durante la guerra mítica narrada en la novela Fengshen Yanyi, luchando esta vez junto a su padre en lugar de contra él.`,
    origen: 'Hijo del general Li Jing, nacido de una bola de carne, renacido con cuerpo de loto.',
    dominio: 'La rebeldía filial y el combate aéreo', naturaleza: 'Niño dios guerrero', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'jing-wei', nombre: 'Jing Wei', nombre_griego: '精衛 (Jīngwèi)',
    epitetos: 'El Pájaro que Intenta Rellenar el Mar',
    descripcion_corta: 'Hija del Emperador del Sol ahogada en el mar oriental, transformada en un pequeño pájaro que arroja piedras y ramas al océano cada día para vengarse.',
    descripcion_larga: `Nüwa —homónima de la diosa creadora pero un personaje distinto, hija del legendario Emperador del Sol, Yandi— se ahogó siendo joven mientras navegaba por el Mar Oriental, sorprendida por una tormenta repentina que hundió su pequeña embarcación sin darle oportunidad de escapar. Su espíritu, en lugar de disolverse tras la muerte, se transformó en un pequeño pájaro de cabeza jaspeada, pico blanco y patas rojas, que adoptó el nombre de Jing Wei en imitación de su propio canto característico.

Furiosa por haber sido arrebatada tan joven por el mar que la había matado, Jing Wei juró vengarse de la única manera que su nueva forma diminuta le permitía: cada día, vuela hasta las montañas cercanas, recoge en su pico pequeñas piedras y ramitas, y las deja caer una tras otra en las aguas del Mar Oriental, decidida a rellenarlo por completo hasta que deje de existir como amenaza para cualquier otra persona. Aunque la tarea es, en términos prácticos, completamente imposible de completar en una sola vida —y Jing Wei la repite sin descanso, generación tras generación de su propia descendencia según algunas versiones—, su historia se convirtió en un símbolo perdurable de la determinación inquebrantable frente a un objetivo aparentemente inalcanzable, todavía citada hoy en chino como metáfora de perseverancia obstinada.`,
    origen: 'Hija del Emperador del Sol Yandi, ahogada en el Mar Oriental.',
    dominio: 'La determinación inquebrantable', naturaleza: 'Espíritu transformado en ave', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'kuafu', nombre: 'Kuafu', nombre_griego: '夸父 (Kuàfù)',
    epitetos: 'El Gigante que Persiguió al Sol',
    descripcion_corta: 'Gigante que desafió al sol a una carrera alrededor del mundo, y murió de sed justo antes de alcanzarlo — su bastón abandonado se transformó en un bosque de melocotoneros.',
    descripcion_larga: `Kuafu era un gigante de fuerza y ambición desmedidas, descendiente de una estirpe de titanes primordiales, que decidió un día que correría más rápido que el propio sol a través del cielo, desafiando abiertamente al astro en una carrera alrededor del mundo entero. Con un enorme bastón de madera como apoyo, Kuafu emprendió la persecución con una determinación feroz, ganando terreno constantemente sobre el sol a lo largo de la carrera, sintiendo cada vez más cerca la posibilidad real de alcanzarlo y demostrar su superioridad sobre la propia naturaleza del cosmos.

Cuando finalmente estuvo a punto de atrapar al sol, la sed lo venció por completo: el calor abrasador de tener al astro tan cerca lo dejó completamente deshidratado, y Kuafu bebió primero el Río Amarillo entero y después el río Wei, sin lograr saciar su sed extrema. Desesperado, emprendió la carrera hacia un gran lago del norte con la esperanza de beber lo suficiente para continuar, pero murió de sed en el camino antes de alcanzarlo. Su bastón, arrojado al morir, se transformó según la leyenda en un vasto bosque de melocotoneros, un regalo final e involuntario para los viajeros futuros que, gracias a su fruto, jamás tendrían que sufrir la misma sed fatal que había acabado con la vida del propio gigante.`,
    origen: 'Gigante descendiente de titanes primordiales, desafiante del sol.',
    dominio: 'La ambición desmedida y el sacrificio involuntario', naturaleza: 'Gigante trágico', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'bai-suzhen', nombre: 'Bai Suzhen', nombre_griego: '白素貞 (Bái Sùzhēn), la Serpiente Blanca',
    epitetos: 'La Serpiente Blanca que Aprendió a Amar',
    descripcion_corta: 'Espíritu serpiente que, tras mil años de cultivo espiritual, adopta forma humana y se enamora de un joven mortal — su amor desafía las reglas del cielo y la tierra por igual.',
    descripcion_larga: `Bai Suzhen era originalmente una serpiente blanca que, tras más de mil años de práctica espiritual y meditación disciplinada, logró finalmente transformarse en una hermosa mujer humana, capaz de vivir entre mortales sin que nadie sospechara su verdadera naturaleza. En la ciudad de Hangzhou, junto al Lago del Oeste, conoció a un joven boticario llamado Xu Xian, y ambos se enamoraron profundamente, casándose poco después sin que Xu Xian tuviera la menor idea de que su esposa no era una mujer completamente humana.

Su felicidad se vio amenazada por Fahai, un monje budista que percibió de inmediato la verdadera naturaleza serpentina de Bai Suzhen y se propuso separarla de Xu Xian a toda costa, convencido de que la unión entre un mortal y un espíritu no humano era una transgresión inaceptable del orden natural. Fahai engañó a Bai Suzhen para que bebiera vino especial durante el Festival del Bote del Dragón, obligándola a revelar brevemente su forma serpentina real ante su propio esposo, que murió del susto al verla; Bai Suzhen viajó entonces hasta una montaña sagrada para robar un hongo mágico capaz de revivirlo, y tras lograrlo, Fahai la encerró finalmente bajo la Pagoda Leifeng, donde permaneció separada de su familia durante años hasta que, según las versiones más benévolas del relato, su propio hijo, ya adulto, logró liberarla.`,
    origen: 'Espíritu serpiente blanco que alcanzó forma humana tras mil años de cultivo espiritual.',
    dominio: 'El amor prohibido entre mundos', naturaleza: 'Espíritu serpiente transformado', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'zhinu', nombre: 'Zhinu', nombre_griego: '織女 (Zhīnǚ), la Tejedora',
    epitetos: 'La Princesa Tejedora de las Nubes',
    descripcion_corta: 'Hija celestial que tejía las nubes del cielo, se enamoró de un pastor de bueyes mortal — separados por el río de estrellas, solo se reúnen una vez al año.',
    descripcion_larga: `Zhinu era una princesa celestial, hija de la Reina Madre de Occidente o del Emperador de Jade según distintas versiones, encargada de tejer las nubes coloridas que decoran el cielo con hilos de seda celestial, una labor que realizaba junto a sus hermanas en las orillas del Río Plateado, la Vía Láctea. Un día, mientras se bañaba junto a sus hermanas en la tierra durante un descenso ocasional, un joven pastor de bueyes mortal llamado Niulang, siguiendo el consejo de su propio buey —en realidad una estrella caída con poderes mágicos—, escondió las ropas celestiales de Zhinu, obligándola a quedarse en la tierra hasta que él aceptara devolvérselas.

Zhinu y Niulang terminaron enamorándose y casándose, viviendo felices varios años y teniendo dos hijos juntos, hasta que la Reina Madre de Occidente descubrió el matrimonio prohibido entre una diosa y un mortal y ordenó su separación inmediata, trazando con su propia horquilla una línea en el cielo que se convirtió en el ancho Río Plateado, dividiendo para siempre a los dos amantes en orillas opuestas. Conmovida finalmente por su dolor inconsolable, la Reina Madre permitió que se reunieran una sola vez al año, el séptimo día del séptimo mes lunar, cuando una bandada de urracas forma un puente viviente sobre el río de estrellas para permitirles cruzar y estar juntos por una sola noche — el origen mítico del festival Qixi, celebrado hasta hoy como el equivalente chino del Día de los Enamorados.`,
    origen: 'Princesa celestial tejedora, hija de la Reina Madre de Occidente.',
    dominio: 'El amor separado por las estrellas', naturaleza: 'Diosa tejedora', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'niulang', nombre: 'Niulang', nombre_griego: '牛郎 (Niúláng), el Pastor de Bueyes',
    epitetos: 'El Pastor de Bueyes Enamorado de una Diosa',
    descripcion_corta: 'Joven pastor mortal que, con ayuda de su buey mágico, ganó el amor de la princesa celestial Zhinu — separado de ella por el río de estrellas, cruza una vez al año sobre un puente de urracas.',
    descripcion_larga: `Niulang era un joven huérfano de origen humilde, maltratado por su hermano mayor y su cuñada tras la muerte de sus padres, cuya única compañía y sustento era un viejo buey que en realidad era una estrella caída del cielo, transformada en animal como castigo por una falta cometida en el reino celestial. El buey, agradecido por los cuidados constantes de Niulang, le reveló un día que un grupo de doncellas celestiales, entre ellas la princesa tejedora Zhinu, descenderían pronto a bañarse en un lago cercano, y le aconsejó esconder las ropas de la más hermosa de ellas para obligarla a quedarse y conocerlo.

Niulang siguió el consejo, y Zhinu, sin poder regresar al cielo sin sus ropas celestiales, aceptó finalmente quedarse en la tierra y casarse con él, formando una familia feliz durante varios años. Cuando la Reina Madre de Occidente descubrió la unión prohibida y separó a la pareja trazando el Río Plateado entre ellos, el fiel buey de Niulang, ya muy anciano y cercano a su propia muerte, le pidió que conservara su piel después de morir: envuelto en ella, Niulang pudo finalmente volar hasta el cielo cargando a sus dos hijos en sendas canastas, llegando justo a tiempo para presenciar, aunque no del todo alcanzar, el trazo final del río que los separaría para siempre, salvo por su único reencuentro anual permitido sobre el puente de urracas del séptimo día del séptimo mes.`,
    origen: 'Joven pastor mortal huérfano, ayudado por un buey mágico celestial.',
    dominio: 'El amor persistente pese a la separación', naturaleza: 'Héroe pastor mortal', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'huangdi', nombre: 'Huangdi', nombre_griego: '黃帝 (Huángdì), el Emperador Amarillo',
    epitetos: 'El Emperador Amarillo, Ancestro Común de la Civilización China',
    descripcion_corta: 'Legendario primer gran soberano de China, venerado como ancestro común de la civilización — derrotó al monstruoso Chiyou en una batalla que decidió el destino del pueblo chino.',
    descripcion_larga: `Huangdi, "el Emperador Amarillo", es venerado en la tradición china como uno de los Cinco Emperadores legendarios que gobernaron antes del inicio de cualquier dinastía histórica registrada, y se le atribuyen —a él o a sabios de su corte bajo su patrocinio directo— la invención de innumerables elementos fundacionales de la civilización china: la escritura, la medicina tradicional recogida siglos después en el Clásico de Medicina Interna del Emperador Amarillo, el calendario, la seda, el carro y la brújula, entre muchos otros avances atribuidos retroactivamente a su reinado como origen simbólico de toda la cultura china organizada.

Su hazaña más célebre fue la Batalla de Zhuolu, un enfrentamiento decisivo contra Chiyou, el líder monstruoso de una confederación de tribus rivales, cuyo ejército contaba con niebla artificial, armas de metal fundido y aliados sobrenaturales que estuvieron a punto de derrotar a las fuerzas de Huangdi. Solo con la ayuda de su propia hija, la diosa de la sequía Nüba, capaz de disipar la niebla espesa que Chiyou había invocado, y de un carro especial que siempre señalaba el sur para orientar a sus tropas pese a la confusión del combate, Huangdi finalmente logró vencer y ejecutar a Chiyou, consolidando su autoridad sobre las tribus del valle del río Amarillo y sentando las bases legendarias de la unificación cultural china, razón por la cual millones de personas en China y en la diáspora china todavía se refieren a sí mismas como "descendientes del Emperador Amarillo".`,
    origen: 'Uno de los Cinco Emperadores legendarios previos a cualquier dinastía histórica.',
    dominio: 'La civilización y la unificación de los pueblos', naturaleza: 'Soberano legendario fundacional', es_preview: 1
  },

  // --- MONSTRUOS ---
  {
    tipo: 'monstruo', slug: 'nian', nombre: 'Nian', nombre_griego: '年獸 (Niánshòu)',
    epitetos: 'La Bestia del Año Nuevo',
    descripcion_corta: 'Bestia feroz que emergía cada fin de año para atacar pueblos enteros — descubierta débil frente al color rojo, el ruido fuerte y el fuego.',
    descripcion_larga: `Nian era una bestia monstruosa, descrita a veces con cabeza de león y cuerpo de toro, que habitaba las profundidades marinas o las montañas remotas durante todo el año, emergiendo únicamente en la última noche del calendario lunar para atacar pueblos enteros, devorar ganado y, en los años más crueles, a los propios aldeanos que no lograban esconderse a tiempo. Cada fin de año, comunidades enteras huían de sus hogares hacia las montañas para escapar de su ataque anual, abandonando temporalmente sus casas y posesiones a la furia de la criatura.

Según la leyenda, un anciano misterioso llegó un año a un pueblo aterrorizado y descubrió, tras observar a Nian de cerca, sus tres debilidades fundamentales: el color rojo brillante, los ruidos fuertes y repentinos, y la luz intensa del fuego. Aconsejó a los aldeanos decorar sus puertas con papel rojo, encender fuegos y hacer estallar tallos de bambú —el precursor directo de los petardos modernos— durante toda la noche, y cuando Nian llegó esa vez, se encontró con un pueblo completamente iluminado, ruidoso y decorado de rojo que lo espantó de inmediato. Desde entonces, decorar las puertas de rojo, encender fuegos artificiales y hacer ruido durante la noche de Año Nuevo se convirtió en una tradición fundamental del Año Nuevo chino, conocido hasta hoy en mandarín simplemente como guo nian, "pasar/sobrevivir a Nian".`,
    origen: 'Bestia monstruosa que atacaba pueblos cada fin de año.',
    dominio: 'El terror de fin de año', naturaleza: 'Bestia estacional', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'taotie', nombre: 'Taotie', nombre_griego: '饕餮 (Tāotiè)',
    epitetos: 'El Rostro de la Glotonería sin Límite',
    descripcion_corta: 'Motivo monstruoso de un rostro devorador sin cuerpo definido, símbolo de la glotonería y la avaricia extremas — grabado durante siglos en vasijas rituales de bronce.',
    descripcion_larga: `Taotie es, más que una criatura con biografía narrativa propia, un motivo ornamental monstruoso extraordinariamente antiguo, grabado con enorme frecuencia en vasijas rituales de bronce de las dinastías Shang y Zhou: un rostro frontal simétrico de ojos desorbitados, cuernos curvos, colmillos prominentes y una boca abierta devoradora, a menudo sin cuerpo definido visible más allá de la propia cabeza monstruosa. Su nombre se convirtió en sinónimo directo, dentro de la lengua china, de la glotonería y la avaricia llevadas a un extremo autodestructivo.

Según la tradición que explica su origen narrativo, Taotie era en realidad uno de los hijos monstruosos de un antiguo soberano corrupto, tan desmedido en su apetito que terminaba devorando cualquier cosa a su alcance, incluido —según algunas versiones especialmente crudas del relato— su propio cuerpo, incapaz de detenerse incluso cuando ya no quedaba nada más que consumir salvo a sí mismo, razón por la que se le representa a menudo sin cuerpo visible más allá de la cabeza. Los Cuatro Malvados o Cuatro Perils de la mitología china clásica —Taotie, Hundun, Qiongqi y Taowu— se convirtieron con el tiempo en una categoría fija usada por historiadores y filósofos para describir simbólicamente a ministros corruptos o gobernantes tiránicos de cualquier época posterior.`,
    origen: 'Motivo monstruoso ornamental, uno de los Cuatro Perils o Cuatro Malvados.',
    dominio: 'La glotonería y la avaricia sin límite', naturaleza: 'Monstruo simbólico devorador', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'jiangshi', nombre: 'Jiangshi', nombre_griego: '殭屍 (Jiāngshī)',
    epitetos: 'El Cadáver Saltarín',
    descripcion_corta: 'Cadáver reanimado de piel rígida y verdosa que se desplaza a saltos con los brazos extendidos — drena la energía vital de los vivos con su aliento.',
    descripcion_larga: `El jiangshi es un cadáver reanimado, típicamente vestido con las ropas oficiales de la dinastía Qing en las que fue enterrado, de piel rígida y verdosa o grisácea debido al rigor mortis permanente que le impide caminar con normalidad; en cambio, se desplaza dando pequeños saltos rígidos con los brazos siempre extendidos hacia adelante, una imagen tan característica que se convirtió en elemento central de todo un subgénero del cine de horror y comedia de Hong Kong durante las décadas de 1980 y 1990. Su origen se atribuye a menudo a un entierro inadecuado, a la absorción de energía maligna, o a la reanimación intencional mediante artes taoístas oscuras.

Los jiangshi cazan de noche, guiados por el olfato o el sonido de la respiración de los vivos, cuya energía vital (qi) absorben con su propio aliento para prolongar su existencia no-muerta. Según el folclore popular, existen varios métodos tradicionales para protegerse de ellos: colocar arroz glutinoso en el umbral de la puerta, ya que los jiangshi se sienten obligados a contar cada grano antes de poder cruzar; usar espejos, que temen enfrentar su propio reflejo; o pegar un talismán taoísta amarillo con caracteres escritos en su frente, capaz de inmovilizarlos por completo mientras el papel permanezca adherido, un truco muy usado por sacerdotes taoístas profesionales especializados en la captura y el control de estas criaturas.`,
    origen: 'Cadáver reanimado por entierro inadecuado o artes taoístas oscuras.',
    dominio: 'La caza nocturna de energía vital', naturaleza: 'No-muerto saltarín', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'huli-jing', nombre: 'Huli Jing', nombre_griego: '狐狸精 (Húlijīng)',
    epitetos: 'El Espíritu Zorro',
    descripcion_corta: 'Zorro capaz de adoptar forma humana tras siglos de cultivo espiritual — puede ser benévolo sabio o seductor peligroso, según cuánto control mantenga sobre su propia naturaleza.',
    descripcion_larga: `El huli jing, "espíritu zorro", es una criatura capaz de vivir cientos o incluso miles de años, acumulando durante ese tiempo poder espiritual y la capacidad progresiva de transformarse en forma humana, generalmente la de una mujer de belleza extraordinaria, aunque también puede adoptar apariencia masculina o permanecer parcialmente animal, conservando a veces una cola o una sombra reveladora de su verdadera naturaleza que solo un observador experto o un adivino especializado logra detectar. A diferencia del kitsune japonés, con quien comparte una raíz cultural común, el huli jing chino puede representar tanto una fuerza benévola y sabia como una amenaza seductora y peligrosa, dependiendo de la historia particular y del propio carácter individual del espíritu en cuestión.

La figura más célebre de un huli jing malévolo en la historia china es Daji, la concubina favorita del último rey de la dinastía Shang, poseída —según la tradición recogida en la novela Fengshen Yanyi— por un espíritu zorro de nueve colas que manipuló al rey hacia la crueldad y la tiranía extremas, precipitando la caída completa de su dinastía. En contraste, numerosas historias populares presentan también huli jing benévolos, capaces de enamorarse genuinamente de eruditos mortales, de recompensar la bondad humana con regalos de sabiduría o riqueza, o de convertirse en aliados leales una vez que su confianza ha sido ganada con paciencia y respeto genuino.`,
    origen: 'Zorro longevo capaz de transformación humana tras siglos de cultivo espiritual.',
    dominio: 'La transformación y la ambigüedad moral', naturaleza: 'Espíritu zorro metamórfico', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'baigujing', nombre: 'Baigujing', nombre_griego: '白骨精 (Báigǔjīng), el Espíritu de Hueso Blanco',
    epitetos: 'El Espíritu de Hueso Blanco',
    descripcion_corta: 'Espíritu demoníaco capaz de transformarse en distintas personas para engañar y devorar a los viajeros — antagonista célebre de Sun Wukong en Viaje al Oeste.',
    descripcion_larga: `Baigujing es un espíritu demoníaco formado a partir de huesos antiguos que, mediante siglos de práctica de artes oscuras, adquirió la capacidad de transformarse en apariencia humana convincente con el objetivo específico de engañar y devorar viajeros incautos, especialmente aquellos considerados de carne particularmente pura o espiritualmente valiosa, como los monjes budistas dedicados. Su episodio más célebre aparece en la novela Viaje al Oeste, donde intenta capturar al monje Tang Sanzang transformándose, en rápida sucesión, primero en una joven campesina que ofrece comida al grupo de peregrinos, después en la anciana madre de esa misma joven que sale a buscarla, y finalmente en el anciano padre que sale a buscar a ambas.

En cada una de las tres transformaciones, Sun Wukong, gracias a su capacidad sobrenatural de percibir la verdadera naturaleza demoníaca oculta tras cualquier disfraz, reconoce el engaño de inmediato y mata a la criatura con su báculo antes de que pueda dañar a Tang Sanzang; pero el monje, incapaz de percibir lo mismo que su discípulo y horrorizado ante lo que interpreta como asesinatos repetidos de inocentes, expulsa a Sun Wukong de su grupo, acusándolo de crueldad injustificada. Solo después, cuando Baigujing finalmente revela su verdadera forma esquelética tras la tercera muerte, Tang Sanzang comprende con remordimiento la razón detrás de cada una de las acciones de su fiel discípulo, aunque para entonces Sun Wukong ya se ha marchado, obligando al resto del grupo a rogarle que regrese.`,
    origen: 'Espíritu formado de huesos antiguos, maestro del disfraz y el engaño.',
    dominio: 'El engaño y la depredación disfrazada', naturaleza: 'Espíritu demoníaco metamórfico', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'niu-mo-wang', nombre: 'Niu Mo Wang', nombre_griego: '牛魔王 (Niú Mówáng), el Rey Demonio Toro',
    epitetos: 'El Rey Demonio Toro',
    descripcion_corta: 'Poderoso demonio con cabeza de toro, antiguo hermano jurado de Sun Wukong — su enfrentamiento por la Montaña Llameante involucra a toda su familia demoníaca.',
    descripcion_larga: `Niu Mo Wang es un demonio inmensamente poderoso con cabeza de toro y cuerpo humanoide gigantesco, capaz de transformarse en un toro colosal de proporciones descomunales durante el combate directo. Según la tradición, en su juventud Sun Wukong y Niu Mo Wang habían sido hermanos jurados —un vínculo de lealtad ceremonial muy respetado en la cultura china tradicional—, junto a otros varios demonios poderosos, antes de que sus caminos se separaran por completo tras la propia transformación espiritual de Sun Wukong bajo la tutela budista.

El conflicto más célebre entre ambos ocurre en Viaje al Oeste, cuando Sun Wukong necesita el Abanico de Hoja de Plátano, propiedad de la esposa de Niu Mo Wang, Princesa Iron Fan (Tie Shan Gongzhu), el único objeto capaz de apagar las llamas eternas de la Montaña Llameante que bloquea el paso de los peregrinos hacia el oeste. La disputa se complica enormemente por las tensas relaciones familiares de Niu Mo Wang: mantiene una amante, Yuhu Gongzhu ("Princesa Zorro de Jade"), lo que provoca fricciones constantes con su esposa legítima, y su propio hijo, Hong Hai'er ("Niño de Pelo Rojo"), es también un poderoso demonio que Sun Wukong debe enfrentar por separado. Tras una batalla prolongada que involucra a varios dioses celestiales convocados como refuerzo, Sun Wukong finalmente logra someter a Niu Mo Wang y obtener el abanico necesario para continuar la peregrinación.`,
    origen: 'Demonio con cabeza de toro, antiguo hermano jurado de Sun Wukong.',
    dominio: 'El fuego y los lazos familiares conflictivos', naturaleza: 'Rey demonio poderoso', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'qiongqi', nombre: 'Qiongqi', nombre_griego: '窮奇 (Qióngqí)',
    epitetos: 'La Bestia que Premia la Maldad',
    descripcion_corta: 'Uno de los Cuatro Perils de la mitología china clásica — una bestia alada con cuerpo de tigre que recompensa a los malvados y castiga a los virtuosos.',
    descripcion_larga: `Qiongqi es descrito en textos antiguos chinos como una bestia con cuerpo similar al de un tigre, alas capaces de volar, y en algunas versiones con púas erizadas por todo el cuerpo, formando parte del grupo de criaturas conocido colectivamente como los Cuatro Perils o Cuatro Malvados de la mitología china clásica, junto a Hundun, Taotie y Taowu, cada uno representando una forma distinta y extrema de conducta moralmente corrupta que los textos filosóficos antiguos usaban para advertir contra vicios específicos.

La naturaleza particular de Qiongqi es especialmente perversa: se dice que devora a las personas virtuosas y honestas apenas las encuentra, pero que, en cambio, recompensa activamente a criminales, traidores y personas de conducta moralmente reprobable, entregándoles animales cazados como regalo o incluso partes de sus propias víctimas humanas como una perversa muestra de favor. Esta inversión completa del orden moral esperado convirtió a Qiongqi en un símbolo particularmente temido de un mundo donde la virtud queda castigada y el vicio recompensado, una imagen que los filósofos confucianos posteriores invocaban con frecuencia como advertencia extrema sobre las consecuencias de un gobierno corrupto que premia la deslealtad y castiga la honestidad genuina.`,
    origen: 'Uno de los Cuatro Perils de la mitología china clásica.',
    dominio: 'La inversión perversa de la justicia moral', naturaleza: 'Bestia alada de los Cuatro Perils', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'taowu', nombre: 'Taowu', nombre_griego: '檮杌 (Táowù)',
    epitetos: 'El Tigre Terco que No Aprende',
    descripcion_corta: 'Uno de los Cuatro Perils de la mitología china clásica — una bestia con cuerpo de tigre y rostro humano que encarna la obstinación incorregible y la maldad heredada.',
    descripcion_larga: `Taowu se describe en los textos clásicos chinos como una bestia con cuerpo de tigre cubierto de largo pelaje, colmillos descomunales que sobresalen de su boca, y en algunas versiones un rostro parcialmente humano, además de una cola extraordinariamente larga. Completa, junto a Hundun, Taotie y Qiongqi, el grupo de los Cuatro Perils o Cuatro Malvados, categoría clásica usada durante siglos por historiadores y filósofos chinos para describir simbólicamente vicios extremos e incorregibles en gobernantes o ministros corruptos de cualquier época posterior a su formulación original.

Según la tradición, Taowu representa específicamente la obstinación absoluta e incorregible: una criatura o persona que, sin importar cuántas veces se le corrija o castigue, jamás aprende de sus propios errores ni cambia su conducta destructiva, repitiendo el mismo comportamiento dañino una y otra vez sin remordimiento genuino. Su nombre se aplicó también, de forma reveladora, a los anales históricos del antiguo estado de Chu durante el periodo de las Primaveras y Otoños, sugiriendo que incluso un registro histórico dedicado a documentar advertencias sobre la maldad y el error humano merecía llevar el nombre de esta bestia terca, como recordatorio permanente de que la historia, pese a registrar los errores del pasado con toda claridad, rara vez logra por sí sola evitar que se repitan.`,
    origen: 'Uno de los Cuatro Perils de la mitología china clásica.',
    dominio: 'La obstinación incorregible', naturaleza: 'Bestia de los Cuatro Perils', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'shan-xiao', nombre: 'Shan Xiao', nombre_griego: '山魈 (Shānxiāo)',
    epitetos: 'El Duende de la Montaña de una Sola Pierna',
    descripcion_corta: 'Espíritu travieso de las montañas boscosas, descrito con una sola pierna — provoca fiebres a los viajeros que lo molestan, pero teme el sonido del bambú al quemarse.',
    descripcion_larga: `El Shan Xiao habita las profundidades boscosas de las montañas del sur de China, descrito en textos antiguos como una criatura pequeña y peluda con un rostro parecido al humano pero con una única pierna, capaz de moverse con extraña rapidez pese a esa aparente limitación física. Se le atribuye una naturaleza fundamentalmente traviesa antes que directamente malvada: le gusta robar comida de los campamentos de viajeros y leñadores, imitar voces humanas para confundir a quienes se adentran solos en el bosque, y provocar fiebres repentinas y escalofríos a cualquiera que perturbe su territorio sin el debido respeto ritual.

Según la tradición popular, el Shan Xiao siente un miedo intenso y particular al sonido fuerte y repentino que produce el bambú verde al quemarse, un estallido similar al de un pequeño petardo natural causado por el aire atrapado dentro de los segmentos huecos del tallo al calentarse. Viajeros y leñadores que debían pernoctar en las montañas llevaban tradicionalmente consigo tallos de bambú fresco para quemar durante la noche, tanto para calentarse como para ahuyentar preventivamente a cualquier Shan Xiao que pudiera merodear cerca de su campamento —una práctica que algunos historiadores del folclore consideran un antecedente cultural directo de los petardos de pólvora que se popularizarían siglos después en China.`,
    origen: 'Espíritu de las montañas boscosas del sur de China.',
    dominio: 'Las travesuras del bosque montañoso', naturaleza: 'Duende de la montaña', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'chiyou', nombre: 'Chiyou', nombre_griego: '蚩尤 (Chīyóu)',
    epitetos: 'El Señor de la Guerra con Cuernos de Bronce',
    descripcion_corta: 'Líder guerrero de rostro monstruoso y cuernos de metal, derrotado por el Emperador Amarillo en la batalla que forjó la civilización china — venerado también como dios de la guerra.',
    descripcion_larga: `Chiyou se describe en las fuentes más antiguas como un líder de aspecto monstruoso al frente de una confederación de tribus del sur o del este de China, a menudo identificadas como ancestros del posterior pueblo Miao: se le atribuyen cuernos de bronce o hierro sobre la cabeza, un cuerpo cubierto de armadura natural imposible de atravesar con armas convencionales, y ochenta y un hermanos igualmente feroces que lo acompañaban en la guerra, algunos descritos con cuerpo de animal y cabeza humana o viceversa. Se le atribuye también la invención de las armas de metal fundido, adelantándose tecnológicamente a las tribus rivales del valle del río Amarillo lideradas por Huangdi.

El enfrentamiento decisivo entre ambos, la legendaria Batalla de Zhuolu, estuvo a punto de terminar con la derrota de Huangdi: Chiyou invocó una espesa niebla mágica que desorientó por completo a las tropas rivales, hasta que la intervención de la diosa de la sequía Nüba y un carro capaz de señalar siempre el sur permitieron a Huangdi reorganizar sus fuerzas y finalmente capturar y ejecutar a Chiyou. Pese a su derrota, Chiyou no desapareció del todo del culto chino: paradójicamente, llegó a ser venerado también como dios de la guerra por soldados de distintas épocas posteriores, admirados por su ferocidad indomable incluso en la derrota, y algunas tradiciones lo consideran ancestro mítico legítimo de pueblos no han dentro del territorio chino.`,
    origen: 'Líder guerrero de una confederación de tribus rivales de Huangdi.',
    dominio: 'La guerra feroz y la resistencia indomable', naturaleza: 'Señor de la guerra semidivino', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'xiangliu', nombre: 'Xiangliu', nombre_griego: '相柳 (Xiāngliǔ)',
    epitetos: 'La Serpiente de Nueve Cabezas de los Pantanos Venenosos',
    descripcion_corta: 'Sirviente monstruoso de Gonggong, una serpiente de nueve cabezas cuyo veneno convertía la tierra en pantanos infértiles — Yu el Grande tardó años en purificar el daño que dejó tras morir.',
    descripcion_larga: `Xiangliu era un sirviente monstruoso al servicio directo de Gonggong, el dios rebelde de las aguas, descrito como una serpiente colosal con nueve cabezas humanas dispuestas sobre un solo cuerpo, capaz de alimentarse simultáneamente de la tierra de nueve montañas distintas en una sola comida. Cada lugar donde Xiangliu descansaba o se detenía se transformaba de inmediato en un pantano venenoso e infértil, mientras que su propio vómito y desechos eran tan tóxicos que convertían el suelo circundante en un terreno completamente inhabitable, tanto para animales como para cualquier intento de cultivo humano.

Cuando el héroe Yu el Grande combatía las inundaciones que asolaban China, se topó con Xiangliu y, tras una lucha feroz, logró matarlo; pero la sangre derramada de la criatura resultó ser tan venenosa que arruinó por completo el suelo donde cayó, haciendo imposible cualquier cultivo en esa zona durante años, sin importar cuántas veces Yu intentara sanear la tierra rellenándola una y otra vez con tierra nueva traída de otros lugares. Finalmente, agotado de intentos fallidos, Yu decidió convertir el terreno envenenado en un estanque artificial permanente en lugar de seguir intentando cultivarlo, y erigió altares a varios dioses sobre sus orillas como forma simbólica de contener cualquier resto de la influencia corrosiva que el monstruo hubiera dejado tras su muerte.`,
    origen: 'Sirviente monstruoso de Gonggong, serpiente venenosa de nueve cabezas.',
    dominio: 'La contaminación de la tierra fértil', naturaleza: 'Serpiente monstruosa venenosa', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'yayu', nombre: 'Yayu', nombre_griego: '猰貐 (Yàyú)',
    epitetos: 'La Bestia Devoradora de Hombres',
    descripcion_corta: 'Criatura monstruosa de cabeza de dragón y cuerpo de buey (o de caballo, según las versiones) que sembró el hambre devorando ganado y personas por igual, hasta ser abatida por Houyi.',
    descripcion_larga: `Yayu es descrito en distintas fuentes antiguas con formas ligeramente variables —a veces cabeza de dragón sobre cuerpo de buey, a veces cuerpo similar al de un caballo o un tigre—, pero siempre coincidiendo en su naturaleza fundamentalmente destructiva: una bestia veloz y feroz capaz de devorar tanto ganado como seres humanos indiscriminadamente, sembrando el terror y el hambre en cualquier región donde apareciera. Según algunas versiones del mito, Yayu había sido en origen una divinidad menor asesinada y posteriormente resucitada de forma corrupta por dioses rivales, emergiendo de esa resurrección imperfecta con un apetito monstruoso y una naturaleza fundamentalmente alterada hacia la destrucción.

Fue precisamente Houyi, el mismo arquero legendario que derribó nueve de los diez soles que amenazaban con incinerar la tierra, quien recibió también el encargo de eliminar a Yayu junto a otras varias bestias monstruosas que asolaban la humanidad durante esa misma era de crisis generalizada. Houyi localizó a la criatura y la abatió con sus flechas certeras, liberando a las comunidades cercanas del hambre constante que Yayu había provocado durante años. Su historia se incluye habitualmente junto a la de los nueve soles como parte del mismo ciclo heroico que consolidó la fama de Houyi como el gran protector de la humanidad frente a las amenazas más desproporcionadas de su época mítica.`,
    origen: 'Bestia monstruosa nacida de una resurrección corrupta, según algunas versiones.',
    dominio: 'El hambre y la devastación indiscriminada', naturaleza: 'Bestia devoradora', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-china'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-china" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando heroes y monstruos de Mitologia China (parte 2)...\n');
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
