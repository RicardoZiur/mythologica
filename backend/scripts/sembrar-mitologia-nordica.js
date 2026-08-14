// ============================================================
// scripts/sembrar-mitologia-nordica.js
// ------------------------------------------------------------
// Cuarto libro del catalogo: Mitologia Nordica. Mismo patron que
// sembrar-mitologia-egipcia.js / sembrar-mitologia-hindu.js:
// idempotente (revisa antes de insertar por slug), crea la fila en
// "libros" y carga personajes + historias con libro_id apuntando a
// este libro.
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/sembrar-mitologia-nordica.js
// ============================================================

const pool = require('../config/db');

const LIBRO = {
  slug: 'mitologia-nordica',
  titulo: 'Mitología Nórdica',
  subtitulo: 'Dioses, gigantes y el fin del mundo',
  descripcion: 'Los dioses de Asgard, los gigantes de hielo y fuego, y los héroes de las sagas: la creación del mundo del cuerpo de Ymir, el martillo de Thor, la muerte de Baldr, el dragón Fafnir y la batalla final del Ragnarök.',
  estado: 'publicado'
};

// ------------------------------------------------------------
// PERSONAJES
// ------------------------------------------------------------
const PERSONAJES = [
  {
    slug: 'odin', tipo: 'dios', nombre: 'Odín', nombre_griego: 'Óðinn',
    epitetos: 'El Padre de Todos, el Errante', naturaleza: 'dios supremo', es_preview: 1,
    descripcion_corta: 'Padre de los dioses, señor de la sabiduría, la guerra y la magia, que sacrificó un ojo y colgó de un árbol para obtener conocimiento.',
    descripcion_larga: 'Odín gobierna Asgard desde Hlidskjalf, su trono, desde donde puede observar los nueve mundos enteros. Acompañado siempre por sus dos cuervos, Huginn y Muninn, que recorren el mundo cada día y regresan a susurrarle todo lo que ven, y por sus dos lobos, Geri y Freki, Odín es el dios más sabio y también el más temido de todos, dispuesto a pagar cualquier precio con tal de aumentar su conocimiento: se arrancó un ojo para beber del pozo de la sabiduría de Mímir, y se colgó del árbol del mundo, Yggdrasil, durante nueve noches para obtener el secreto de las runas. Recorre los nueve mundos disfrazado de viajero errante, con un solo ojo visible bajo su capucha, y reúne a los guerreros más valientes caídos en batalla —los einherjar— en su salón de Valhalla, preparándolos para la batalla final del Ragnarök, donde él mismo está destinado a morir devorado por el lobo Fenrir.',
    origen: 'Hijo de Bor y la giganta Bestla, nieto de Buri',
    dominio: 'La sabiduría, la guerra, la magia, la poesía',
    simbolos: ['Los cuervos Huginn y Muninn', 'La lanza Gungnir', 'El caballo de ocho patas Sleipnir'],
    poderes: [
      { nombre: 'Sabiduría suprema', descripcion: 'Sacrificó un ojo por un conocimiento que ningún otro ser posee.' },
      { nombre: 'Magia rúnica', descripcion: 'Domina las runas obtenidas colgando del árbol del mundo.' }
    ]
  },
  {
    slug: 'frigg', tipo: 'dios', nombre: 'Frigg', nombre_griego: 'Frigg',
    epitetos: 'La Reina de Asgard, la que Todo lo Sabe', naturaleza: 'diosa del matrimonio y la profecía', es_preview: 0,
    descripcion_corta: 'Reina de Asgard, esposa de Odín, que conoce el destino de todos los seres aunque nunca lo revela.',
    descripcion_larga: 'Frigg reina junto a Odín en Asgard desde su propio salón, Fensalir, y se le atribuye un conocimiento del destino tan completo como el de su esposo, aunque a diferencia de él jamás comparte lo que sabe con nadie. Como madre de Baldr, el más amado de los dioses, Frigg recorrió personalmente los nueve mundos enteros pidiendo un juramento a cada cosa existente —animales, plantas, metales, enfermedades, piedras— de que jamás causarían daño a su hijo, convencida de haberlo vuelto así completamente invulnerable. Solo pasó por alto una pequeña planta, el muérdago, que le pareció demasiado joven e inofensiva para exigirle el mismo juramento, un descuido que Loki explotaría después con consecuencias devastadoras para toda la familia de Frigg y para el destino del mundo entero.',
    origen: 'Esposa de Odín, reina de Asgard',
    dominio: 'El matrimonio, la maternidad, el destino',
    simbolos: ['La rueca', 'Las llaves del hogar'],
    poderes: [
      { nombre: 'Conocimiento del destino', descripcion: 'Conoce el futuro de todos los seres, aunque nunca lo revela.' }
    ]
  },
  {
    slug: 'thor', tipo: 'dios', nombre: 'Thor', nombre_griego: 'Þórr',
    epitetos: 'El Protector de Midgard, Señor del Trueno', naturaleza: 'dios del trueno', es_preview: 1,
    descripcion_corta: 'Dios del trueno, hijo de Odín, protector de dioses y hombres frente a los gigantes, armado con el martillo Mjölnir.',
    descripcion_larga: 'Thor es el protector incansable de Asgard y de Midgard, el dios más popular entre los hombres comunes por su franqueza, su fuerza descomunal y su disposición constante a enfrentar cualquier amenaza que venga de Jötunheim. Viaja en un carro tirado por dos cabras, Tanngrisnir y Tanngnjóstr, a las que puede sacrificar y devorar cada noche para luego revivirlas intactas a la mañana siguiente, y porta un cinturón, Megingjörð, que duplica su fuerza ya sobrehumana, junto con guantes de hierro necesarios para sostener el mango al rojo vivo de su martillo Mjölnir. Su enemigo eterno es la serpiente del mundo, Jörmungandr, a la que se enfrenta más de una vez a lo largo de los mitos, y con la que finalmente librará un combate mortal en el Ragnarök: Thor logrará matarla, pero morirá poco después envenenado por su aliento final.',
    origen: 'Hijo de Odín y la giganta Jörd (la Tierra)',
    dominio: 'El trueno, la fuerza, la protección',
    simbolos: ['El martillo Mjölnir', 'El cinturón de fuerza Megingjörð', 'El carro tirado por cabras'],
    poderes: [
      { nombre: 'Fuerza sobrehumana', descripcion: 'Su fuerza, ya inmensa, se duplica con su cinturón mágico.' },
      { nombre: 'Control del trueno', descripcion: 'Cada golpe de su martillo resuena como un relámpago.' }
    ]
  },
  {
    slug: 'loki', tipo: 'dios', nombre: 'Loki', nombre_griego: 'Loki',
    epitetos: 'El Embaucador, Padre de Monstruos', naturaleza: 'dios embaucador', es_preview: 1,
    descripcion_corta: 'Dios embaucador y metamorfo, hermano de sangre de Odín, cuyas tretas tanto ayudan como amenazan a los propios dioses.',
    descripcion_larga: 'Loki es hijo de gigantes por nacimiento, pero se convirtió en hermano de sangre de Odín y en miembro habitual del círculo de los dioses en Asgard, donde su ingenio resuelve tantos problemas como los que él mismo provoca. Capaz de transformarse en cualquier ser vivo —una vez incluso en una yegua, de la que nació el caballo de ocho patas Sleipnir—, Loki es también padre de tres criaturas temidas por todos los dioses: el lobo Fenrir, la serpiente Jörmungandr y Hel, señora del reino de los muertos, todos concebidos con la giganta Angrboda. Su papel en la muerte de Baldr marcó un punto de no retorno en su relación con los demás dioses, que lo capturaron y lo encadenaron como castigo; en el Ragnarök, Loki finalmente se liberará para liderar a los gigantes contra los mismos dioses que una vez lo llamaron hermano, enfrentándose a Heimdall en un duelo que ninguno de los dos sobrevivirá.',
    origen: 'Hijo de gigantes, hermano de sangre de Odín',
    dominio: 'El engaño, la transformación, el caos creativo',
    simbolos: ['Las llamas', 'Formas cambiantes'],
    poderes: [
      { nombre: 'Metamorfosis', descripcion: 'Puede transformarse en cualquier ser vivo, incluso de otro sexo o especie.' }
    ]
  },
  {
    slug: 'baldr', tipo: 'dios', nombre: 'Baldr', nombre_griego: 'Baldr',
    epitetos: 'El Hermoso, el Amado de Todos', naturaleza: 'dios de la luz', es_preview: 0,
    descripcion_corta: 'El más hermoso y amado de los dioses, cuya muerte a manos de un dardo de muérdago marcó el comienzo del fin del mundo.',
    descripcion_larga: 'Baldr es hijo de Odín y Frigg, y de todos los dioses de Asgard es el más querido: su sola presencia irradiaba luz y pureza, y ningún otro ser en los nueve mundos era capaz de despertar tanto cariño genuino como él. Cuando comenzó a tener sueños perturbadores sobre su propia muerte, su madre recorrió el mundo entero pidiendo un juramento a cada cosa existente de no dañarlo jamás, y los dioses, confiados en su invulnerabilidad recién adquirida, convirtieron el hecho en un juego, arrojándole objetos sin que nada le hiciera daño. Solo el muérdago, la única planta a la que Frigg no le había pedido el juramento por considerarla demasiado inofensiva, resultó ser el arma con la que Loki, manipulando al dios ciego Hödr, logró matarlo. Su muerte quedó en el reino de Hel hasta el fin de los tiempos, y solo tras el Ragnarök, en el mundo renacido, Baldr regresaría junto a su hermano Hödr para gobernar en paz.',
    origen: 'Hijo de Odín y Frigg',
    dominio: 'La luz, la pureza, la belleza',
    simbolos: ['Flores blancas'],
    poderes: []
  },
  {
    slug: 'hodr', tipo: 'dios', nombre: 'Hödr', nombre_griego: 'Höðr',
    epitetos: 'El Dios Ciego', naturaleza: 'dios de la oscuridad', es_preview: 0,
    descripcion_corta: 'Dios ciego, hermano de Baldr, que sin saberlo le dio muerte guiado por el engaño de Loki.',
    descripcion_larga: 'Hödr, ciego de nacimiento, se mantenía apartado de los juegos y celebraciones de Asgard por no poder participar como los demás dioses, incapaz de ver hacia dónde lanzar cualquier cosa. Cuando los dioses se reunieron a arrojarle objetos al invulnerable Baldr por puro entretenimiento, Loki se acercó a Hödr con fingida amabilidad, le entregó un dardo afilado de muérdago —la única cosa en el mundo capaz de dañar a Baldr— y se ofreció a guiar su puntería. Sin saber lo que hacía, Hödr lanzó el dardo que mató a su propio hermano, una tragedia de la que jamás tuvo verdadera culpa, pues actuó completamente engañado. Poco después, Váli, otro hijo de Odín nacido específicamente para ese propósito, le dio muerte en venganza; pero en el mundo renacido tras el Ragnarök, Hödr y Baldr regresarían juntos, reconciliados como hermanos, dejando atrás la tragedia que Loki había orquestado entre ellos.',
    origen: 'Hijo de Odín, hermano de Baldr',
    dominio: 'La oscuridad, el destino inevitable',
    simbolos: [],
    poderes: []
  },
  {
    slug: 'vali', tipo: 'dios', nombre: 'Váli', nombre_griego: 'Váli',
    epitetos: 'El Vengador de Baldr', naturaleza: 'dios de la venganza', es_preview: 0,
    descripcion_corta: 'Hijo de Odín nacido con el único propósito de vengar la muerte de Baldr, que alcanzó la madurez completa en un solo día.',
    descripcion_larga: 'Váli nació de una unión que Odín buscó deliberadamente después de la muerte de Baldr, con el propósito específico de engendrar a alguien capaz de vengar a su hermano caído. De forma extraordinaria, Váli creció hasta alcanzar la fuerza y el tamaño de un adulto en un solo día, sin necesitar la infancia que cualquier otro ser requeriría, y se negó incluso a lavarse o peinarse hasta cumplir su propósito. Localizó a Hödr, el hermano ciego de Baldr que había lanzado el dardo fatal sin saberlo, y le dio muerte, cerrando así el ciclo de venganza que su nacimiento había sido diseñado para cumplir. Váli sobrevivió al Ragnarök y, en el mundo renacido, ayudó a reconstruir el gobierno de los dioses junto a los pocos supervivientes de la batalla final.',
    origen: 'Hijo de Odín, engendrado específicamente para vengar a Baldr',
    dominio: 'La venganza justa',
    simbolos: [],
    poderes: [
      { nombre: 'Crecimiento instantáneo', descripcion: 'Alcanzó la madurez completa en un solo día.' }
    ]
  },
  {
    slug: 'tyr', tipo: 'dios', nombre: 'Týr', nombre_griego: 'Týr',
    epitetos: 'El Dios de la Justicia, el Manco', naturaleza: 'dios de la guerra y la justicia', es_preview: 0,
    descripcion_corta: 'Dios de la guerra y la justicia, el más valiente de los dioses, que perdió una mano al encadenar al lobo Fenrir.',
    descripcion_larga: 'Týr es el dios de la guerra justa y de los juramentos, respetado por su valentía por encima de cualquier otro dios de Asgard. Cuando los dioses decidieron finalmente encadenar al lobo Fenrir con la cinta mágica Gleipnir, el lobo, desconfiado de un objeto tan aparentemente frágil, exigió que alguien colocara su mano dentro de su boca como garantía de que no se trataba de una trampa. Solo Týr, consciente del riesgo, se ofreció para el sacrificio, y cuando Fenrir descubrió que en efecto no podía liberarse de sus ataduras, cerró sus mandíbulas y le arrancó la mano de un solo mordisco. Ese acto de valentía, pagado con su propio cuerpo, convirtió a Týr en el símbolo mismo del sacrificio necesario por el bien común. En el Ragnarök, se enfrentará al monstruoso perro Garm, guardián del inframundo, y ambos se darán muerte mutuamente en un duelo paralelo a la batalla principal.',
    origen: 'Uno de los dioses más antiguos de Asgard',
    dominio: 'La guerra justa, la ley, el sacrificio personal',
    simbolos: ['La mano perdida'],
    poderes: []
  },
  {
    slug: 'heimdall', tipo: 'dios', nombre: 'Heimdall', nombre_griego: 'Heimdallr',
    epitetos: 'El Vigía de los Dioses', naturaleza: 'dios guardián', es_preview: 0,
    descripcion_corta: 'Guardián eterno del puente Bifrost, dotado de sentidos tan agudos que oye crecer la hierba y ve a cientos de kilómetros.',
    descripcion_larga: 'Heimdall vigila sin descanso el puente Bifrost, el arco iris que conecta Asgard con Midgard, necesitando dormir menos que un pájaro para mantener su vigilancia constante contra cualquier amenaza. Sus sentidos superan los de cualquier otro ser: puede oír crecer la hierba en los campos y la lana en el lomo de las ovejas, y ver con total claridad a cientos de kilómetros de distancia, de día o de noche. Guarda consigo el cuerno Gjallarhorn, que solo hará sonar el día en que el Ragnarök finalmente comience, alertando a todos los dioses de que la batalla final se aproxima. Enemigo antiguo de Loki por razones que ni los propios mitos explican del todo, ambos están destinados a enfrentarse en un duelo mortal durante la batalla final, del que ninguno de los dos saldrá con vida.',
    origen: 'Nacido de nueve madres, guardián de Asgard',
    dominio: 'La vigilancia, la alerta, la frontera entre mundos',
    simbolos: ['El cuerno Gjallarhorn', 'El puente Bifrost'],
    poderes: [
      { nombre: 'Sentidos sobrehumanos', descripcion: 'Oye crecer la hierba y ve a cientos de kilómetros de distancia.' }
    ]
  },
  {
    slug: 'freyr', tipo: 'dios', nombre: 'Freyr', nombre_griego: 'Freyr',
    epitetos: 'Señor de la Cosecha y la Paz', naturaleza: 'dios vanir de la fertilidad', es_preview: 0,
    descripcion_corta: 'Dios vanir de la cosecha, la prosperidad y la paz, que entregó su espada mágica por amor y quedó desarmado para el Ragnarök.',
    descripcion_larga: 'Freyr pertenece a los Vanir, la segunda familia de dioses nórdicos asociada a la fertilidad, la prosperidad y las buenas cosechas, y llegó a Asgard como parte de un intercambio de paz entre Aesir y Vanir tras una larga guerra entre ambos pueblos divinos. Posee un jabalí dorado, Gullinbursti, capaz de correr más rápido que cualquier caballo, y un barco plegable, Skídbladnir, que puede guardarse en un bolsillo cuando no se necesita. Se enamoró perdidamente de la giganta Gerd al verla desde el trono de Odín, y para conseguirla entregó su espada mágica, un arma que luchaba sola sin necesidad de que nadie la empuñara. Esa decisión, tomada por amor, le costaría caro: en el Ragnarök, desarmado, Freyr caerá ante el gigante de fuego Surt sin poder ofrecer resistencia real.',
    origen: 'Dios vanir, hijo de Njörd',
    dominio: 'La fertilidad, la cosecha, la prosperidad',
    simbolos: ['El jabalí dorado Gullinbursti', 'El barco plegable Skídbladnir'],
    poderes: [
      { nombre: 'Bendición de la cosecha', descripcion: 'Concede buenas cosechas, sol y lluvia a su antojo.' }
    ]
  },
  {
    slug: 'freyja', tipo: 'dios', nombre: 'Freyja', nombre_griego: 'Freyja',
    epitetos: 'Señora de la Guerra y el Amor', naturaleza: 'diosa vanir del amor y la magia', es_preview: 0,
    descripcion_corta: 'Diosa vanir del amor, la belleza y la magia, que reclama la mitad de los guerreros caídos en batalla para su propio salón.',
    descripcion_larga: 'Freyja es la más bella de todas las diosas nórdicas, hermana gemela de Freyr, y su dominio abarca tanto el amor y la belleza como la guerra y la muerte en combate: de cada batalla, reclama para sí la mitad de los guerreros caídos, llevándolos a su propio salón, Fólkvangr, mientras la otra mitad va a parar al Valhalla de Odín. Viaja en un carro tirado por dos gatos y posee un manto de plumas de halcón que le permite volar transformada en ave. Es también la maestra del seiðr, la forma más poderosa de magia nórdica, que enseñó al propio Odín. Su posesión más preciada es el collar Brísingamen, forjado por cuatro enanos a cambio de un precio que ella pagó sin dudar, y que más tarde Loki le robaría por orden de Odín como forma de castigar su orgullo.',
    origen: 'Diosa vanir, hermana gemela de Freyr',
    dominio: 'El amor, la guerra, la magia (seiðr)',
    simbolos: ['El collar Brísingamen', 'El carro tirado por gatos', 'El manto de plumas de halcón'],
    poderes: [
      { nombre: 'Magia seiðr', descripcion: 'Enseñó a los propios dioses el arte más poderoso de la magia.' }
    ]
  },
  {
    slug: 'njord', tipo: 'dios', nombre: 'Njörd', nombre_griego: 'Njörðr',
    epitetos: 'Señor del Mar y el Viento', naturaleza: 'dios vanir del mar', es_preview: 0,
    descripcion_corta: 'Dios vanir del mar, el viento y la riqueza, padre de Freyr y Freyja, cuyo matrimonio con la giganta Skadi terminó en separación.',
    descripcion_larga: 'Njörd gobierna el mar, los vientos favorables y la riqueza que llega a través del comercio marítimo, y los marineros y pescadores lo invocan antes de cada viaje. Llegó a Asgard, igual que sus hijos Freyr y Freyja, como parte del pacto de paz entre Aesir y Vanir. Su matrimonio con la giganta Skadi, arreglado como compensación tras la muerte del padre de esta a manos de los dioses, terminó en un fracaso silencioso: Njörd no soportaba vivir en las montañas heladas donde Skadi se sentía en casa, y Skadi no soportaba el graznido constante de las gaviotas junto al mar donde Njörd prefería vivir, así que finalmente decidieron separarse, cada uno de regreso a su propio hogar.',
    origen: 'Dios vanir del mar',
    dominio: 'El mar, el viento, la riqueza',
    simbolos: [],
    poderes: []
  },
  {
    slug: 'bragi', tipo: 'dios', nombre: 'Bragi', nombre_griego: 'Bragi',
    epitetos: 'El Dios de la Poesía', naturaleza: 'dios de la poesía', es_preview: 0,
    descripcion_corta: 'Dios de la poesía y la elocuencia, esposo de Idun, que recibe con versos a los guerreros caídos que llegan al Valhalla.',
    descripcion_larga: 'Bragi preside el arte de la palabra bien hablada: la poesía, la elocuencia y el don de contar historias le pertenecen, y se dice que las runas talladas en su propia lengua fueron el origen del arte poético entre dioses y hombres. Recibe con versos improvisados a cada guerrero que llega al Valhalla tras caer en batalla, dándoles la bienvenida al salón de Odín con la misma habilidad con la que compone cualquier otro poema. Está casado con Idun, guardiana de las manzanas de la eterna juventud, y su presencia en los banquetes de Asgard garantiza que ninguna celebración transcurra jamás en silencio.',
    origen: 'Dios de la poesía, esposo de Idun',
    dominio: 'La poesía, la elocuencia',
    simbolos: ['El arpa'],
    poderes: []
  },
  {
    slug: 'idun', tipo: 'dios', nombre: 'Idun', nombre_griego: 'Iðunn',
    epitetos: 'Guardiana de la Eterna Juventud', naturaleza: 'diosa de la juventud', es_preview: 0,
    descripcion_corta: 'Guardiana de las manzanas doradas que mantienen a los dioses eternamente jóvenes, una vez secuestrada por un gigante con ayuda de Loki.',
    descripcion_larga: 'Idun custodia una cesta de manzanas doradas cuyo simple sabor basta para mantener a los dioses de Asgard eternamente jóvenes, sin importar cuántos siglos pasen. Su importancia para la supervivencia misma de los dioses quedó demostrada dramáticamente cuando el gigante Thjazi, con la ayuda involuntaria de Loki, la secuestró y la llevó a Jötunheim junto con sus manzanas: sin ellas, los dioses comenzaron a envejecer y debilitarse a un ritmo alarmante, arrugándose visiblemente día tras día. Solo cuando obligaron a Loki a rescatarla —transformado en halcón, la llevó de vuelta convertida en una nuez mientras Thjazi los perseguía en forma de águila, hasta que los propios dioses le prendieron fuego a las plumas del gigante en las murallas de Asgard— la juventud de todos los dioses quedó restaurada.',
    origen: 'Guardiana de las manzanas doradas desde tiempos antiguos',
    dominio: 'La juventud eterna, la renovación',
    simbolos: ['Las manzanas doradas'],
    poderes: [
      { nombre: 'Eterna juventud', descripcion: 'Sus manzanas mantienen a los dioses jóvenes para siempre.' }
    ]
  },
  {
    slug: 'sif', tipo: 'dios', nombre: 'Sif', nombre_griego: 'Sif',
    epitetos: 'La de Cabellos Dorados', naturaleza: 'diosa de la tierra cultivada', es_preview: 0,
    descripcion_corta: 'Esposa de Thor, famosa por su cabello dorado como el trigo, que Loki cortó por una broma y los enanos reemplazaron con oro real.',
    descripcion_larga: 'Sif es célebre en toda Asgard por su cabello dorado, tan brillante y abundante que se lo asociaba con los campos de trigo maduro, motivo por el cual se la vincula con la tierra cultivada y la fertilidad de las cosechas. Su fama se vio interrumpida bruscamente cuando Loki, por pura travesura, le cortó el cabello mientras dormía, dejándola completamente calva y furiosa. Thor, su esposo, amenazó a Loki con romperle cada hueso del cuerpo si no reparaba el daño, obligando al dios embaucador a encargar a los enanos hijos de Ivaldi un cabello nuevo hecho de oro puro, tan real que crecería en su cabeza como si fuera el original. Ese encargo desencadenó, sin que nadie lo planeara, la creación de varios de los tesoros más importantes de los dioses, entre ellos el propio martillo de Thor.',
    origen: 'Esposa de Thor',
    dominio: 'La fertilidad, la tierra cultivada',
    simbolos: ['El cabello dorado'],
    poderes: []
  },
  {
    slug: 'vidar', tipo: 'dios', nombre: 'Vidar', nombre_griego: 'Víðarr',
    epitetos: 'El Dios Silencioso', naturaleza: 'dios de la venganza silenciosa', es_preview: 0,
    descripcion_corta: 'Hijo silencioso de Odín, cuya fuerza rivaliza con la de Thor, destinado a vengar a su padre destrozando las fauces de Fenrir en el Ragnarök.',
    descripcion_larga: 'Vidar habla poco y actúa aún menos, pero su fuerza silenciosa es tan grande que solo la de Thor puede comparársele entre todos los dioses. Vive apartado, en un claro cubierto de altos matorrales y hierba crecida, dedicado a preparar en secreto el propósito para el que fue destinado desde su nacimiento: vengar a su padre Odín el día en que este caiga devorado por el lobo Fenrir en el Ragnarök. Para ese momento, Vidar lleva puesto un zapato especial, confeccionado con todos los retazos de cuero que la humanidad ha desechado a lo largo de los siglos, lo bastante resistente como para pisar la mandíbula inferior de Fenrir y desgarrarla con sus propias manos, matando al lobo en el acto. Vidar sobrevive a la batalla final y ayuda a reconstruir el gobierno de los dioses en el mundo renacido.',
    origen: 'Hijo de Odín',
    dominio: 'La venganza, la fuerza silenciosa',
    simbolos: ['El zapato hecho de retazos de cuero'],
    poderes: [
      { nombre: 'Fuerza descomunal', descripcion: 'Su fuerza rivaliza con la del propio Thor.' }
    ]
  },
  {
    slug: 'forseti', tipo: 'dios', nombre: 'Forseti', nombre_griego: 'Forseti',
    epitetos: 'El Dios de la Justicia y la Reconciliación', naturaleza: 'dios de la justicia', es_preview: 0,
    descripcion_corta: 'Hijo de Baldr, dios de la justicia perfecta, que resuelve cualquier disputa en su salón hasta que ambas partes quedan reconciliadas.',
    descripcion_larga: 'Forseti preside desde su salón Glitnir, de techo plateado y columnas de oro, las disputas que le llevan tanto dioses como mortales, y su fama de justicia perfecta es tal que se dice que nadie ha salido jamás de su presencia sin sentirse satisfecho con el veredicto recibido. Hijo de Baldr, el más amado de los dioses, Forseti hereda de su padre una serenidad que le permite escuchar cualquier conflicto sin dejarse llevar por la ira o el favoritismo, encontrando siempre la solución que deja a ambas partes reconciliadas en lugar de resentidas. Su salón se convirtió, con el tiempo, en el modelo simbólico de toda asamblea de justicia entre los pueblos nórdicos.',
    origen: 'Hijo de Baldr',
    dominio: 'La justicia, la reconciliación',
    simbolos: [],
    poderes: []
  },
  {
    slug: 'hel', tipo: 'dios', nombre: 'Hel', nombre_griego: 'Hel',
    epitetos: 'Señora del Reino de los Muertos', naturaleza: 'diosa del inframundo', es_preview: 0,
    descripcion_corta: 'Hija de Loki, mitad viva y mitad cadáver en apariencia, que gobierna el reino de los muertos que no caen en batalla.',
    descripcion_larga: 'Hel nació de la unión entre Loki y la giganta Angrboda, y su apariencia misma refleja el reino que gobernaría: la mitad de su cuerpo tiene la piel viva y saludable, mientras que la otra mitad muestra la carne descompuesta de un cadáver. Cuando Odín, alarmado por la profecía que rodeaba a los tres hijos de Loki, decidió el destino de cada uno, envió a Hel a las profundidades heladas de Niflheim, donde le entregó el gobierno de Helheim, el reino destinado a quienes mueren de enfermedad o vejez, en contraste con el Valhalla reservado a los caídos en batalla. Cuando Baldr murió, fue a parar precisamente a su reino, y Hel, ante la súplica de Hermod, ofreció liberarlo solo si absolutamente todo en los nueve mundos lloraba su muerte, una condición que finalmente no se cumplió, dejando a Baldr bajo su dominio hasta el fin de los tiempos.',
    origen: 'Hija de Loki y la giganta Angrboda',
    dominio: 'El reino de los muertos que no caen en batalla',
    simbolos: [],
    poderes: [
      { nombre: 'Gobierno de los muertos', descripcion: 'Decide quién puede abandonar su reino y quién permanece en él para siempre.' }
    ]
  },
  {
    slug: 'skadi', tipo: 'dios', nombre: 'Skadi', nombre_griego: 'Skaði',
    epitetos: 'La Cazadora de las Montañas', naturaleza: 'giganta convertida en diosa', es_preview: 0,
    descripcion_corta: 'Giganta convertida en diosa tras casarse con Njörd como compensación por la muerte de su padre, asociada al invierno y la caza en la montaña.',
    descripcion_larga: 'Skadi llegó a Asgard armada y furiosa, exigiendo compensación por la muerte de su padre Thjazi, el gigante que había secuestrado a Idun y que los dioses mataron al rescatarla. Como parte del acuerdo de paz, los dioses le ofrecieron elegir esposo entre ellos, pero solo podría verles los pies, sin más pistas; Skadi, esperando elegir al hermoso Baldr por la belleza de sus pies, terminó casándose por error con Njörd, el dios del mar. El matrimonio, pese a las buenas intenciones de ambos, resultó incompatible: Skadi extrañaba las montañas nevadas y el sonido de los lobos, mientras Njörd no soportaba estar lejos del mar y el graznido de las gaviotas, y finalmente decidieron separarse en buenos términos. Skadi quedó desde entonces asociada al invierno, la caza y el esquí, recorriendo las montañas con su arco y sus esquís propios.',
    origen: 'Giganta, hija de Thjazi',
    dominio: 'El invierno, la caza, las montañas',
    simbolos: ['El arco y las flechas', 'Los esquís'],
    poderes: []
  },
  {
    slug: 'gerd', tipo: 'dios', nombre: 'Gerd', nombre_griego: 'Gerðr',
    epitetos: 'La Novia Radiante del Invierno', naturaleza: 'giganta de belleza radiante', es_preview: 0,
    descripcion_corta: 'Giganta de belleza tan radiante que sus brazos iluminaban el cielo y el mar, cortejada por Freyr a cambio de su espada mágica.',
    descripcion_larga: 'Gerd vivía en Jötunheim ajena por completo al efecto que su sola presencia provocaría en el dios Freyr, que la vio desde el trono de Odín y quedó tan enamorado que dejó de comer y de hablar durante días. El sirviente de Freyr, Skírnir, viajó hasta ella para cortejarla en su nombre, ofreciéndole primero manzanas doradas y un anillo mágico, regalos que Gerd rechazó sin dudar; solo cuando Skírnir recurrió a amenazas de maldiciones terribles —aislamiento eterno, una existencia sin amor ni compañía— aceptó finalmente encontrarse con Freyr. De ese cortejo forzado nació, contra todo pronóstico, un matrimonio genuinamente feliz entre ambos, aunque el precio pagado por Freyr —su propia espada mágica, entregada a Skírnir como parte de la negociación— lo dejaría fatalmente desarmado el día del Ragnarök.',
    origen: 'Giganta de Jötunheim',
    dominio: 'La belleza radiante',
    simbolos: [],
    poderes: []
  },
  {
    slug: 'hermod', tipo: 'dios', nombre: 'Hermod', nombre_griego: 'Hermóðr',
    epitetos: 'El Mensajero Veloz, el Valiente', naturaleza: 'dios mensajero', es_preview: 0,
    descripcion_corta: 'Hijo de Odín que cabalgó nueve noches hasta el reino de Hel para suplicar por el regreso de su hermano Baldr.',
    descripcion_larga: 'Hermod actúa como el mensajero de los dioses en los momentos de mayor urgencia, y ninguna misión suya fue tan desesperada como la que emprendió tras la muerte de Baldr: se ofreció a cabalgar hasta Helheim, el reino de los muertos, para suplicar personalmente por el regreso de su hermano. Odín le prestó su propio caballo, Sleipnir, el único capaz de completar semejante viaje, y Hermod cabalgó durante nueve noches enteras a través de valles cada vez más oscuros y fríos hasta cruzar el puente que lleva al reino de Hel. Aunque su misión terminó en fracaso —Hel exigió que absolutamente todo en los nueve mundos llorara la muerte de Baldr, una condición que una sola giganta se negó a cumplir—, la valentía de Hermod al enfrentar semejante viaje sin garantía de éxito quedó grabada como uno de los actos de lealtad familiar más recordados entre los dioses.',
    origen: 'Hijo de Odín',
    dominio: 'La mensajería, el valor, la lealtad familiar',
    simbolos: [],
    poderes: [
      { nombre: 'Velocidad excepcional', descripcion: 'Puede recorrer distancias entre mundos que ningún otro jinete lograría.' }
    ]
  },
  {
    slug: 'ymir', tipo: 'otro', nombre: 'Ymir', nombre_griego: 'Ymir',
    epitetos: 'El Primer Gigante', naturaleza: 'ser primordial', es_preview: 1,
    descripcion_corta: 'El primer ser, formado del encuentro entre el fuego y el hielo primordiales, cuyo cuerpo desmembrado dio forma al mundo entero.',
    descripcion_larga: 'Ymir surgió en el vacío de Ginnungagap, en el punto exacto donde el calor abrasador de Muspelheim se encontró con el hielo eterno de Niflheim: del hielo que comenzó a gotear con el contacto del fuego tomó forma el primer gigante, ancestro de todos los jötnar que poblarían después Jötunheim. Se alimentaba de la leche de la vaca primordial Audhumla, y de su propio cuerpo, mientras dormía, brotaron sin necesidad de pareja los primeros gigantes de hielo. Cuando Odín y sus dos hermanos, Vili y Vé, decidieron que su naturaleza caótica representaba una amenaza demasiado grande, lo mataron entre los tres y usaron su cuerpo desmembrado para construir el mundo entero: su carne se convirtió en la tierra, su sangre en los mares, sus huesos en las montañas, su cráneo en la bóveda del cielo y su cerebro en las nubes.',
    origen: 'Surgido del encuentro entre el fuego de Muspelheim y el hielo de Niflheim',
    dominio: 'El origen del mundo material',
    simbolos: [],
    poderes: [
      { nombre: 'Origen del mundo', descripcion: 'Su cuerpo desmembrado dio forma a la tierra, el mar y el cielo.' }
    ]
  },
  {
    slug: 'audhumla', tipo: 'otro', nombre: 'Audhumla', nombre_griego: 'Auðumbla',
    epitetos: 'La Vaca Primordial', naturaleza: 'ser primordial', es_preview: 0,
    descripcion_corta: 'La vaca primordial que nutrió al gigante Ymir y liberó al primer dios lamiendo bloques de hielo salado.',
    descripcion_larga: 'Audhumla surgió al mismo tiempo que Ymir en el vacío primordial de Ginnungagap, y de sus cuatro ubres brotaban ríos de leche que alimentaron al gigante mientras el mundo aún no tenía forma definida. Ella misma se alimentaba lamiendo bloques de hielo salado que la rodeaban, y de tanto lamer, fue liberando poco a poco la figura de un ser atrapado dentro: primero apareció un cabello, luego una cabeza, y finalmente Buri, el primer dios, emergió completo del hielo gracias a la paciencia de la vaca primordial. De Buri descendería, generaciones después, el propio Odín, lo que convierte a Audhumla, de manera indirecta pero fundamental, en el origen mismo de la estirpe de los dioses.',
    origen: 'Surgida junto a Ymir en el vacío primordial de Ginnungagap',
    dominio: 'La nutrición primordial',
    simbolos: [],
    poderes: []
  },
  {
    slug: 'angrboda', tipo: 'otro', nombre: 'Angrboda', nombre_griego: 'Angrboða',
    epitetos: 'La Que Trae Angustia', naturaleza: 'giganta de Jötunheim', es_preview: 0,
    descripcion_corta: 'Giganta de Jötunheim, madre de los tres hijos más temidos de Loki: Fenrir, Jörmungandr y Hel.',
    descripcion_larga: 'Angrboda vive en las profundidades de Jötunheim, y su unión con Loki dio origen a tres de las criaturas más temidas de toda la mitología nórdica: el lobo Fenrir, la serpiente Jörmungandr y Hel, señora del reino de los muertos. Cuando las profecías advirtieron a los dioses que estos tres hijos traerían consigo la ruina de Asgard, Odín intervino directamente en el destino de cada uno, dispersándolos por los nueve mundos antes de que pudieran crecer juntos bajo la influencia de su madre. Angrboda misma aparece poco en los mitos posteriores a ese momento, pero su papel como madre de los tres grandes enemigos de los dioses en el Ragnarök la convierte en una figura fundamental, aunque silenciosa, en el destino final del mundo.',
    origen: 'Giganta de Jötunheim',
    dominio: 'El origen de los grandes monstruos',
    simbolos: [],
    poderes: []
  },
  {
    slug: 'mimir', tipo: 'otro', nombre: 'Mímir', nombre_griego: 'Mímir',
    epitetos: 'El Guardián de la Sabiduría', naturaleza: 'ser de sabiduría ancestral', es_preview: 0,
    descripcion_corta: 'Guardián del pozo de la sabiduría bajo Yggdrasil, cuya cabeza cortada Odín conservó para seguir consultándola tras su muerte.',
    descripcion_larga: 'Mímir custodia, bajo una de las tres raíces de Yggdrasil, un pozo cuyas aguas contienen una sabiduría tan profunda que un solo trago basta para comprender secretos vedados a cualquier otro ser. Bebía de ese pozo cada día usando el cuerno Gjallarhorn, acumulando un conocimiento tan legendario que el propio Odín viajó hasta él dispuesto a pagar cualquier precio por un solo trago, sacrificando uno de sus propios ojos a cambio. Durante la guerra entre los Aesir y los Vanir, Mímir fue enviado como rehén de paz junto a Hoenir, pero los Vanir, decepcionados al descubrir que Hoenir dependía completamente de los consejos de Mímir para tomar cualquier decisión, le cortaron la cabeza y la enviaron de vuelta a Odín. Lejos de perder su utilidad, Odín embalsamó la cabeza con hierbas mágicas y la conservó consigo, consultándola todavía en los momentos de mayor necesidad.',
    origen: 'Guardián del pozo de sabiduría bajo Yggdrasil',
    dominio: 'La sabiduría oculta',
    simbolos: ['El pozo bajo Yggdrasil'],
    poderes: [
      { nombre: 'Sabiduría eterna', descripcion: 'Su cabeza sigue dando consejos incluso separada del cuerpo.' }
    ]
  },
  {
    slug: 'fenrir', tipo: 'monstruo', nombre: 'Fenrir', nombre_griego: 'Fenrir',
    epitetos: 'El Lobo que Devorará al Padre de Todos', naturaleza: 'lobo monstruoso', es_preview: 0,
    descripcion_corta: 'Lobo monstruoso hijo de Loki, encadenado por los dioses tras crecer más allá de todo control, destinado a matar a Odín en el Ragnarök.',
    descripcion_larga: 'Fenrir nació de la unión entre Loki y la giganta Angrboda, y desde el principio su tamaño y su fuerza crecieron a un ritmo que alarmó profundamente a los dioses, que decidieron criarlo en Asgard bajo vigilancia con la esperanza de mantenerlo controlado. Cuando quedó claro que ningún dios se atrevía siquiera a acercarse a él, los dioses encargaron a los enanos forjar Gleipnir, una cinta mágica de apariencia frágil pero irrompible, y lograron atarlo solo a costa de la mano de Týr, que Fenrir arrancó de un mordisco al descubrir el engaño. Atado a una roca profunda bajo tierra, con una espada entre sus fauces para mantenerlas abiertas, Fenrir esperó encadenado hasta el día del Ragnarök, cuando finalmente logrará liberarse, devorar a Odín de un solo bocado, y morir poco después a manos de Vidar, que le desgarrará las fauces en venganza.',
    origen: 'Hijo de Loki y la giganta Angrboda',
    dominio: 'La destrucción profetizada',
    simbolos: [],
    poderes: [
      { nombre: 'Fuerza destructora', descripcion: 'Su mandíbula, al crecer, puede abarcar del cielo a la tierra.' }
    ]
  },
  {
    slug: 'jormungandr', tipo: 'monstruo', nombre: 'Jörmungandr', nombre_griego: 'Jörmungandr',
    epitetos: 'La Serpiente del Mundo', naturaleza: 'serpiente monstruosa', es_preview: 0,
    descripcion_corta: 'Serpiente hija de Loki, arrojada al océano por Odín, que creció tanto que rodea Midgard entera mordiéndose la propia cola.',
    descripcion_larga: 'Jörmungandr nació también de la unión entre Loki y Angrboda, y Odín, temeroso de la profecía que rodeaba a los tres hijos del embaucador, la arrojó al océano que rodea Midgard poco después de su nacimiento. Lejos de desaparecer, la serpiente creció allí hasta alcanzar un tamaño tan colosal que terminó por rodear el mundo entero, mordiéndose la propia cola en un círculo interminable. Su enemigo eterno es Thor, al que se enfrenta más de una vez a lo largo de los mitos —incluida una memorable expedición de pesca en la que Thor estuvo a punto de sacarla del agua antes de que un gigante asustado cortara la línea—, y con quien finalmente librará un combate mortal en el Ragnarök: Thor logrará matarla, pero morirá poco después envenenado por su aliento final.',
    origen: 'Hija de Loki y la giganta Angrboda',
    dominio: 'El océano que rodea el mundo',
    simbolos: [],
    poderes: [
      { nombre: 'Veneno mortal', descripcion: 'Su aliento es letal incluso para un dios.' }
    ]
  },
  {
    slug: 'nidhogg', tipo: 'monstruo', nombre: 'Nídhögg', nombre_griego: 'Níðhöggr',
    epitetos: 'El Devorador de Raíces', naturaleza: 'dragón devorador', es_preview: 0,
    descripcion_corta: 'Dragón que roe eternamente las raíces del árbol del mundo desde las profundidades heladas de Niflheim.',
    descripcion_larga: 'Nídhögg habita en las profundidades de Niflheim, junto a la fuente Hvergelmir, donde roe sin descanso una de las raíces de Yggdrasil, el árbol que sostiene los nueve mundos. Se alimenta de los cuerpos de quienes rompieron juramentos, cometieron asesinato o traicionaron a los suyos en vida, castigados en el más allá con ese destino. En la copa del árbol vive un águila cuyo nombre no se conserva, y entre ambos —el dragón en las raíces y el águila en las alturas— corre constantemente de un lado a otro la ardilla Ratatoskr, llevando insultos de uno al otro con evidente placer por el conflicto que provoca. Se dice que Nídhögg sobrevivirá incluso al Ragnarök, volando sobre las cenizas del mundo destruido con los cadáveres de los condenados entre sus garras.',
    origen: 'Habitante de las profundidades de Niflheim',
    dominio: 'La corrupción bajo el árbol del mundo',
    simbolos: [],
    poderes: []
  },
  {
    slug: 'surt', tipo: 'monstruo', nombre: 'Surt', nombre_griego: 'Surtr',
    epitetos: 'El Gigante de Fuego', naturaleza: 'gigante de fuego', es_preview: 0,
    descripcion_corta: 'Gigante de fuego que gobierna Muspelheim desde antes de la creación, destinado a incendiar los nueve mundos en el Ragnarök.',
    descripcion_larga: 'Surt gobierna Muspelheim, el reino de fuego que existía incluso antes de que el mundo tomara forma, empuñando una espada llameante más brillante que el propio sol. Durante toda la existencia de los nueve mundos, Surt ha esperado pacientemente el momento profetizado en que liderará a los gigantes de fuego a través del puente Bifrost, que se quebrará bajo el peso de su ejército, hacia la batalla final del Ragnarök. Allí se enfrentará y matará a Freyr, desarmado desde que este entregara su espada mágica por amor a la giganta Gerd, y finalmente, cuando el último dios haya caído en combate, Surt arrojará fuego sobre los nueve mundos enteros, incendiando la tierra hasta que se hunda bajo las aguas del océano, cerrando así el ciclo completo del mundo tal como se conoce.',
    origen: 'Gobernante de Muspelheim desde antes de la creación',
    dominio: 'El fuego primordial, la destrucción final',
    simbolos: ['La espada llameante'],
    poderes: [
      { nombre: 'Fuego destructor', descripcion: 'Su espada puede incendiar el mundo entero.' }
    ]
  },
  {
    slug: 'fafnir', tipo: 'monstruo', nombre: 'Fafnir', nombre_griego: 'Fáfnir',
    epitetos: 'El Dragón de la Codicia', naturaleza: 'enano transformado en dragón', es_preview: 0,
    descripcion_corta: 'Antiguo enano transformado en dragón por su propia codicia, tras matar a su padre para quedarse con un tesoro maldito.',
    descripcion_larga: 'Fafnir era originalmente un enano, hijo del rey Hreidmar, hasta que la codicia por un tesoro maldito —el oro del enano Andvari, entregado como compensación por la muerte accidental de su hermano Otr— lo consumió por completo. Mató a su propio padre para quedarse con el oro entero sin compartirlo con sus hermanos, y esa misma codicia, alimentada por la maldición que pesaba sobre el tesoro desde su origen, terminó transformándolo físicamente en un dragón temible que se retiró a un páramo solitario para custodiar su fortuna, alejado de cualquier contacto con otros seres. Allí permaneció durante años, hasta que el héroe Sigurd, criado específicamente por el hermano de Fafnir, Regin, con el propósito de recuperar el oro, lo emboscó y le dio muerte, heredando sin saberlo la misma maldición que había consumido al dragón.',
    origen: 'Antiguo enano, hijo de Hreidmar, transformado por su propia codicia',
    dominio: 'La codicia transformada en monstruo',
    simbolos: ['El tesoro maldito de Andvari'],
    poderes: [
      { nombre: 'Aliento venenoso', descripcion: 'Envenena la tierra a su paso.' }
    ]
  },
  {
    slug: 'brynhild', tipo: 'semidios', nombre: 'Brynhild', nombre_griego: 'Brynhildr',
    epitetos: 'La Valquiria Caída', naturaleza: 'valquiria', es_preview: 0,
    descripcion_corta: 'Valquiria castigada por Odín con un sueño eterno tras desobedecerlo en batalla, despertada por Sigurd y traicionada después por un engaño de amor.',
    descripcion_larga: 'Brynhild sirvió a Odín como valquiria, escogiendo entre los caídos en batalla a quienes merecían un lugar en el Valhalla, hasta que un día desobedeció sus órdenes directas y concedió la victoria a un guerrero distinto del que Odín había elegido. Como castigo, Odín la condenó a un sueño mágico eterno, encerrada tras un muro de llamas que solo el hombre más valiente del mundo podría atravesar. Ese hombre resultó ser Sigurd, que la despertó y con quien intercambió promesas de amor, hasta que una poción del olvido le hizo perder toda memoria de ella y casarse en su lugar con Gudrun. Engañada después para casarse con Gunnar, cuñado de Sigurd, mediante un disfraz mágico que le hizo creer que era él quien había cruzado el muro de llamas, Brynhild, al descubrir la verdad, orquestó la muerte de Sigurd y se quitó la vida después para reunirse con él en la misma pira funeraria, cerrando una de las historias de amor y traición más recordadas de toda la tradición nórdica.',
    origen: 'Valquiria al servicio de Odín',
    dominio: 'La guerra, el amor traicionado, el destino trágico',
    simbolos: ['El muro de llamas'],
    poderes: [
      { nombre: 'Antigua fuerza de valquiria', descripcion: 'Conserva parte de su antiguo poder de guerrera divina.' }
    ]
  },
  {
    slug: 'sigurd', tipo: 'heroe', nombre: 'Sigurd', nombre_griego: 'Sigurðr',
    epitetos: 'El Matador de Fafnir', naturaleza: 'héroe legendario', es_preview: 0,
    descripcion_corta: 'El mayor héroe de la leyenda nórdica, que mató al dragón Fafnir, entendió el lenguaje de las aves y murió por culpa de un oro maldito.',
    descripcion_larga: 'Sigurd fue criado por el enano Regin, que sin que el joven lo supiera lo preparaba para matar a su propio hermano Fafnir, transformado en dragón por la codicia hacia un tesoro maldito. Tras reforjar la espada rota de su padre, Gram, hasta devolverle un filo capaz de partir un yunque, Sigurd emboscó y mató al dragón, y al probar accidentalmente su sangre descubrió que podía entender el lenguaje de los pájaros, que le advirtieron de la traición que Regin planeaba contra él. Sigurd lo mató primero y se quedó con el oro maldito, sin saber que esa fortuna arrastraría consigo la misma ruina que había consumido a Fafnir. Despertó después a la valquiria Brynhild de un sueño eterno y se enamoró de ella, pero una poción del olvido le hizo casarse con otra mujer y ayudar, sin saberlo, a traicionar a la propia Brynhild, lo que terminaría por costarle la vida a manos de sus propios cuñados.',
    origen: 'Hijo de un rey guerrero, criado por el enano Regin',
    dominio: 'El heroísmo, la tragedia del oro maldito',
    simbolos: ['La espada Gram', 'El tesoro de Fafnir'],
    poderes: [
      { nombre: 'Comprensión de los pájaros', descripcion: 'Tras probar sangre de dragón, entiende el lenguaje de las aves.' }
    ]
  },
  {
    slug: 'gunnar', tipo: 'heroe', nombre: 'Gunnar', nombre_griego: 'Gunnarr',
    epitetos: 'El Rey Burgundio', naturaleza: 'rey guerrero', es_preview: 0,
    descripcion_corta: 'Rey de los burgundios, cuñado y hermano de sangre de Sigurd, cuyo papel en el engaño a Brynhild desató la tragedia final de la saga.',
    descripcion_larga: 'Gunnar gobierna a los burgundios y se convirtió en hermano de sangre de Sigurd tras la llegada de este a su corte, sellando una alianza que incluyó el matrimonio de Sigurd con Gudrun, hermana de Gunnar. Deseoso de casarse con la valquiria Brynhild, encerrada tras un muro de llamas que solo el hombre más valiente podía cruzar, Gunnar recurrió a la ayuda de Sigurd, que se disfrazó mágicamente con su apariencia para atravesar las llamas en su lugar y ganar así la mano de Brynhild para él. El engaño, revelado años después en una disputa entre las dos esposas, desató la furia de Brynhild, y Gunnar, presionado por su propia esposa traicionada, terminó participando en la conspiración que llevó a la muerte de Sigurd, un acto que lo marcaría para siempre como cómplice de la tragedia que la maldición del oro de Fafnir había profetizado desde el principio.',
    origen: 'Rey de los burgundios',
    dominio: 'La realeza, la lealtad de sangre',
    simbolos: [],
    poderes: []
  },
  {
    slug: 'ragnar', tipo: 'heroe', nombre: 'Ragnar Lodbrok', nombre_griego: 'Ragnarr Loðbrók',
    epitetos: 'El Vikingo Legendario', naturaleza: 'caudillo vikingo legendario', es_preview: 0,
    descripcion_corta: 'Caudillo vikingo legendario, temido en toda Europa, que enfrentó su muerte en un foso de serpientes recitando un poema desafiante.',
    descripcion_larga: 'Ragnar Lodbrok lideró expediciones de saqueo que llevaron su nombre hasta los confines más lejanos de Europa, desde las costas de Francia hasta el corazón de Inglaterra, casándose primero con la legendaria escuda Lagertha y después con la profetisa Aslaug, con quienes tuvo varios hijos que crecerían tan temidos como él mismo en los mares del norte. Su nombre —"pantalones peludos"— provenía de una prenda especial que había usado en su juventud para protegerse del veneno al matar a una serpiente gigante y ganar así la mano de su primera esposa. Capturado finalmente por el rey Ælla de Northumbria tras una expedición imprudente con muy pocos hombres, Ragnar fue arrojado a un foso de serpientes venenosas, donde recibió su muerte recitando un largo poema sobre sus batallas y advirtiendo que sus hijos no descansarían hasta vengarlo, una profecía que se cumplió cuando estos invadieron Inglaterra al frente del legendario Gran Ejército Pagano.',
    origen: 'Caudillo vikingo legendario',
    dominio: 'La conquista, el destino guerrero',
    simbolos: ['La prenda peluda que le da su nombre'],
    poderes: []
  },
  {
    slug: 'ask', tipo: 'mortal', nombre: 'Ask', nombre_griego: 'Askr',
    epitetos: 'El Primer Hombre', naturaleza: 'primer ser humano', es_preview: 0,
    descripcion_corta: 'El primer hombre, tallado de un tronco de fresno hallado en la orilla del mar y animado por Odín y sus hermanos.',
    descripcion_larga: 'Ask no nació como cualquier otro ser humano: fue tallado de un tronco de fresno que Odín y sus hermanos, Vili y Vé, encontraron varado en una playa mientras caminaban por el mundo recién formado. Odín le dio el aliento y la vida misma, Vili el entendimiento y el movimiento, y Vé el rostro, la vista y el oído, completando entre los tres la creación del primer hombre. Junto a Embla, tallada del mismo modo de un tronco de olmo, Ask se convirtió en el ancestro de toda la humanidad que poblaría Midgard, protegida por la gran muralla que los dioses habían levantado para mantener a raya a los gigantes.',
    origen: 'Tallado de un tronco de fresno por Odín y sus hermanos',
    dominio: 'El origen de la humanidad',
    simbolos: [],
    poderes: []
  },
  {
    slug: 'embla', tipo: 'mortal', nombre: 'Embla', nombre_griego: 'Embla',
    epitetos: 'La Primera Mujer', naturaleza: 'primer ser humano', es_preview: 0,
    descripcion_corta: 'La primera mujer, tallada de un tronco de olmo hallado en la orilla del mar y animada por Odín y sus hermanos junto a Ask.',
    descripcion_larga: 'Embla fue tallada de un tronco de olmo encontrado en la misma playa donde Odín y sus hermanos hallaron el tronco de fresno que se convertiría en Ask. Recibió, igual que él, el aliento, el entendimiento y los sentidos de manos de los tres dioses, completando así la creación de la primera pareja humana. Junto a Ask, Embla se convirtió en la ancestra de toda la humanidad, y ambos recibieron de los dioses ropas para cubrirse del frío y un lugar seguro en Midgard donde comenzar la larga historia de los seres humanos en el mundo nórdico.',
    origen: 'Tallada de un tronco de olmo por Odín y sus hermanos',
    dominio: 'El origen de la humanidad',
    simbolos: [],
    poderes: []
  }
];

// ------------------------------------------------------------
// RELACIONES FAMILIARES (se insertan en las dos direcciones que
// tengan sentido narrativo -- misma estructura que los libros
// anteriores)
// ------------------------------------------------------------
const RELACIONES = [
  { de: 'odin', tipoDeADestino: 'conyuge', a: 'frigg', tipoDeDestinoADe: 'conyuge' },
  { de: 'odin', tipoDeADestino: 'padre', a: 'thor', tipoDeDestinoADe: 'hijo' },
  { de: 'odin', tipoDeADestino: 'padre', a: 'baldr', tipoDeDestinoADe: 'hijo' },
  { de: 'odin', tipoDeADestino: 'padre', a: 'hodr', tipoDeDestinoADe: 'hijo' },
  { de: 'odin', tipoDeADestino: 'padre', a: 'vali', tipoDeDestinoADe: 'hijo' },
  { de: 'odin', tipoDeADestino: 'padre', a: 'vidar', tipoDeDestinoADe: 'hijo' },
  { de: 'odin', tipoDeADestino: 'padre', a: 'hermod', tipoDeDestinoADe: 'hijo' },
  { de: 'odin', tipoDeADestino: 'aliado', a: 'loki', tipoDeDestinoADe: 'aliado', notaDeADestino: 'Hermanos de sangre', notaDestinoADe: 'Hermanos de sangre' },
  { de: 'odin', tipoDeADestino: 'mentor', a: 'mimir', tipoDeDestinoADe: 'aliado' },
  { de: 'odin', tipoDeADestino: 'verdugo', a: 'ymir', tipoDeDestinoADe: 'otro', notaDestinoADe: 'Su cuerpo formó el mundo que Odín gobierna' },
  { de: 'odin', tipoDeADestino: 'creador', a: 'ask', tipoDeDestinoADe: 'otro' },
  { de: 'odin', tipoDeADestino: 'creador', a: 'embla', tipoDeDestinoADe: 'otro' },
  { de: 'frigg', tipoDeADestino: 'madre', a: 'baldr', tipoDeDestinoADe: 'madre' },
  { de: 'thor', tipoDeADestino: 'conyuge', a: 'sif', tipoDeDestinoADe: 'conyuge' },
  { de: 'loki', tipoDeADestino: 'conyuge', a: 'angrboda', tipoDeDestinoADe: 'conyuge' },
  { de: 'loki', tipoDeADestino: 'padre', a: 'fenrir', tipoDeDestinoADe: 'hijo' },
  { de: 'loki', tipoDeADestino: 'padre', a: 'jormungandr', tipoDeDestinoADe: 'hijo' },
  { de: 'loki', tipoDeADestino: 'padre', a: 'hel', tipoDeDestinoADe: 'hija' },
  { de: 'baldr', tipoDeADestino: 'hermano', a: 'hodr', tipoDeDestinoADe: 'hermano' },
  { de: 'baldr', tipoDeADestino: 'padre', a: 'forseti', tipoDeDestinoADe: 'hijo' },
  { de: 'baldr', tipoDeADestino: 'hermano', a: 'hermod', tipoDeDestinoADe: 'hermano' },
  { de: 'baldr', tipoDeADestino: 'otro', a: 'hel', tipoDeDestinoADe: 'otro', notaDeADestino: 'Permaneció en su reino hasta el Ragnarök', notaDestinoADe: 'Lo retuvo en su reino tras su muerte' },
  { de: 'vali', tipoDeADestino: 'enemigo', a: 'hodr', tipoDeDestinoADe: 'verdugo' },
  { de: 'fenrir', tipoDeADestino: 'verdugo', a: 'tyr', tipoDeDestinoADe: 'enemigo' },
  { de: 'freyr', tipoDeADestino: 'hermano', a: 'freyja', tipoDeDestinoADe: 'hermana' },
  { de: 'freyr', tipoDeADestino: 'hijo', a: 'njord', tipoDeDestinoADe: 'padre' },
  { de: 'freyja', tipoDeADestino: 'hija', a: 'njord', tipoDeDestinoADe: 'padre' },
  { de: 'freyr', tipoDeADestino: 'conyuge', a: 'gerd', tipoDeDestinoADe: 'conyuge' },
  { de: 'njord', tipoDeADestino: 'conyuge', a: 'skadi', tipoDeDestinoADe: 'conyuge', notaDeADestino: 'Matrimonio de corta duración por incompatibilidad de hogares', notaDestinoADe: 'Matrimonio de corta duración por incompatibilidad de hogares' },
  { de: 'bragi', tipoDeADestino: 'conyuge', a: 'idun', tipoDeDestinoADe: 'conyuge' },
  { de: 'vidar', tipoDeADestino: 'verdugo', a: 'fenrir', tipoDeDestinoADe: 'enemigo' },
  { de: 'thor', tipoDeADestino: 'enemigo', a: 'jormungandr', tipoDeDestinoADe: 'enemigo' },
  { de: 'surt', tipoDeADestino: 'verdugo', a: 'freyr', tipoDeDestinoADe: 'enemigo' },
  { de: 'heimdall', tipoDeADestino: 'enemigo', a: 'loki', tipoDeDestinoADe: 'enemigo' },
  { de: 'ymir', tipoDeADestino: 'otro', a: 'audhumla', tipoDeDestinoADe: 'otro', notaDeADestino: 'Se alimentó de su leche', notaDestinoADe: 'Nutrió a Ymir con su leche' },
  { de: 'sigurd', tipoDeADestino: 'enemigo', a: 'fafnir', tipoDeDestinoADe: 'verdugo' },
  { de: 'sigurd', tipoDeADestino: 'amante', a: 'brynhild', tipoDeDestinoADe: 'amante' },
  { de: 'sigurd', tipoDeADestino: 'aliado', a: 'gunnar', tipoDeDestinoADe: 'aliado', notaDeADestino: 'Hermanos de sangre, traicionado después por él', notaDestinoADe: 'Hermanos de sangre, terminó traicionándolo' },
  { de: 'brynhild', tipoDeADestino: 'conyuge', a: 'gunnar', tipoDeDestinoADe: 'conyuge' },
  { de: 'ask', tipoDeADestino: 'conyuge', a: 'embla', tipoDeDestinoADe: 'conyuge' }
];

// ------------------------------------------------------------
// HISTORIAS
// ------------------------------------------------------------
const HISTORIAS = [
  {
    slug: 'creacion-del-mundo-de-ymir', tipo: 'cosmogonia', periodo: 'Antes del tiempo', es_preview: 1,
    titulo: 'La creación del mundo del cuerpo de Ymir',
    resumen: 'Del encuentro entre el fuego y el hielo primordiales nace el gigante Ymir, y de su cuerpo desmembrado por Odín y sus hermanos surge el mundo entero.',
    texto_completo: `En el principio no había nada más que un vacío inmenso llamado Ginnungagap, flanqueado por dos extremos opuestos: al norte, Niflheim, un reino de hielo, niebla y frío eterno; al sur, Muspelheim, una tierra de fuego y calor abrasador. Cuando el calor de Muspelheim se encontró con el hielo de Niflheim en el centro del vacío, el hielo comenzó a gotear y, de esas gotas, tomó forma el primer ser: Ymir, el gigante primordial del que descenderían todos los jötnar, los gigantes de hielo.\n\nJunto a Ymir surgió también Audhumla, una vaca primordial de cuyas ubres brotaban cuatro ríos de leche que alimentaron al gigante mientras dormía. Audhumla, a su vez, se alimentaba lamiendo los bloques de hielo salado que la rodeaban, y de tanto lamer fue liberando poco a poco la forma de un hombre atrapado en el hielo: Buri, el primer dios, abuelo de Odín.\n\nBuri tuvo un hijo, Bor, que se casó con la giganta Bestla, y de esa unión nacieron tres hermanos: Odín, Vili y Vé. Los tres hermanos, hartos de la naturaleza caótica y amenazante de los gigantes, decidieron acabar con Ymir de una vez por todas, y lo mataron entre los tres. De su sangre brotó un diluvio tan vasto que ahogó a casi todos los demás gigantes, salvo una pareja que logró escapar en un tronco hueco y repoblar Jötunheim.\n\nCon el cuerpo sin vida de Ymir, los tres hermanos construyeron el mundo entero: de su carne formaron la tierra, de su sangre los mares y los lagos, de sus huesos las montañas, de sus dientes las rocas, de su cráneo la bóveda del cielo —sostenida en sus cuatro esquinas por cuatro enanos— y de su cerebro las nubes que cruzan el cielo. Así, del cuerpo de un solo gigante primordial, nació el mundo entero que dioses y hombres habitarían desde entonces.`,
    fuentes: [{ autor: 'Snorri Sturluson', obra: 'Edda prosaica', anio_aprox: 'c. 1220', tipo: 'primaria' }],
    personajes: [
      { slug: 'ymir', rol: 'protagonista' },
      { slug: 'audhumla', rol: 'secundario' },
      { slug: 'odin', rol: 'secundario' }
    ]
  },
  {
    slug: 'creacion-de-ask-y-embla', tipo: 'cosmogonia', periodo: 'Antes del tiempo', es_preview: 0,
    titulo: 'La creación de Ask y Embla',
    resumen: 'Odín y sus hermanos encuentran dos troncos en la orilla del mar y les dan vida, creando así al primer hombre y a la primera mujer.',
    texto_completo: `Con el mundo ya formado a partir del cuerpo de Ymir, Odín y sus hermanos Vili y Vé caminaban un día por la orilla del mar cuando encontraron dos troncos varados en la arena: uno de fresno y otro de olmo, arrastrados hasta allí sin que nadie supiera bien de dónde venían. Algo en esos dos troncos llamó la atención de los tres hermanos, que decidieron darles una forma y un destino que ningún otro árbol del mundo tendría.\n\nOdín les dio el aliento y la vida misma; Vili les concedió el entendimiento y el movimiento; y Vé les otorgó el rostro, el habla, la vista y el oído. De ese acto conjunto de los tres dioses nacieron Ask, tallado del fresno, y Embla, tallada del olmo: el primer hombre y la primera mujer, los ancestros de toda la humanidad que poblaría Midgard.\n\nLos dioses les entregaron ropas para cubrirse del frío y un nombre propio a cada uno, y los establecieron en Midgard, el reino de los hombres, protegido por la gran muralla que los dioses habían construido con las pestañas de Ymir para mantener a raya a los gigantes. Desde Ask y Embla descienden, según la tradición nórdica, todos los seres humanos que habitarían la tierra en las generaciones siguientes, un regalo de vida que los mismos dioses que habían destruido a Ymir decidieron ofrecer a cambio.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Edda poética', anio_aprox: 'c. siglo XIII (compilando tradición oral más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'odin', rol: 'protagonista' },
      { slug: 'ask', rol: 'secundario' },
      { slug: 'embla', rol: 'secundario' }
    ]
  },
  {
    slug: 'odin-y-el-pozo-de-mimir', tipo: 'otro', periodo: 'La era dorada de los dioses', es_preview: 0,
    titulo: 'Odín y el pozo de la sabiduría de Mímir',
    resumen: 'Odín se arranca un ojo y lo entrega al pozo de Mímir a cambio de un solo trago de sus aguas, la fuente de la sabiduría más profunda de los nueve mundos.',
    texto_completo: `Bajo una de las tres raíces de Yggdrasil que se extienden hacia Jötunheim, se esconde el pozo de Mímir, cuyas aguas contienen una sabiduría tan profunda que basta un solo trago para comprender secretos que ningún otro ser, divino o mortal, alcanza a entender. Mímir, el guardián de ese pozo, bebía de él cada día usando el cuerno Gjallarhorn, y su conocimiento se había vuelto legendario incluso entre los propios dioses.\n\nOdín, decidido a alcanzar una sabiduría que superara la de cualquier otro ser en los nueve mundos, viajó hasta el pozo y pidió a Mímir un solo trago de sus aguas. Mímir aceptó, pero exigió un precio que pocos estarían dispuestos a pagar: uno de los propios ojos de Odín, sumergido para siempre en las profundidades del pozo como prenda permanente de su sacrificio. Odín, sin dudarlo demasiado, se arrancó el ojo con sus propias manos y lo dejó caer en las aguas, bebiendo después el trago que le fue concedido.\n\nDesde ese día, Odín camina por los nueve mundos con un solo ojo visible, un recordatorio constante y públicamente reconocible de hasta dónde estuvo dispuesto a llegar por conocimiento. Se dice que puede ver el pozo de Mímir y su propio ojo reflejado en las aguas cada vez que mira en esa dirección, un vínculo que nunca se rompió del todo. Años más tarde, cuando la cabeza de Mímir fue cortada durante una guerra entre los Aesir y los Vanir, Odín la recuperó, la embalsamó con hierbas mágicas y la conservó consigo, consultándola todavía en los momentos de mayor necesidad, prueba de que ni siquiera la muerte de su viejo consejero logró privarlo por completo de su sabiduría.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Edda poética', anio_aprox: 'c. siglo XIII (compilando tradición oral más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'mimir', rol: 'protagonista' },
      { slug: 'odin', rol: 'secundario' }
    ]
  },
  {
    slug: 'odin-y-las-runas', tipo: 'otro', periodo: 'La era dorada de los dioses', es_preview: 0,
    titulo: 'Odín y las runas: nueve noches en el árbol del mundo',
    resumen: 'Odín se sacrifica a sí mismo colgando de Yggdrasil durante nueve noches, sin comida ni agua, hasta que las runas se le revelan.',
    texto_completo: `Odín, el más sabio de los dioses, nunca se conformaba con el conocimiento que ya poseía: ansiaba un saber más profundo, el de las runas, símbolos capaces de dar forma a la magia misma. Pero las runas no se entregaban a quien las pedía sin más: exigían un sacrificio a la altura de su poder, y Odín, decidido a obtenerlas a cualquier precio, ideó un ritual que ningún otro dios se habría atrevido a intentar.\n\nSe clavó su propia lanza, Gungnir, y se colgó boca abajo de las ramas de Yggdrasil, el fresno inmenso cuyas raíces sostienen los nueve mundos, ofreciéndose a sí mismo como sacrificio a sí mismo, sin comida ni agua ni ayuda de ningún otro dios. Durante nueve noches enteras permaneció suspendido así, balanceándose entre la vida y la muerte, mientras el viento del árbol del mundo susurraba secretos que ningún ser vivo había escuchado antes.\n\nAl final de la novena noche, cuando su cuerpo estaba al borde del colapso total, las runas se le revelaron de golpe: Odín las vio, las comprendió y las tomó para sí, cayendo del árbol con un grito que resonó por los nueve mundos. Desde entonces, dominó no solo la escritura rúnica sino los hechizos que con ella podían tejerse: encantamientos capaces de curar heridas, calmar tormentas, embotar el filo de las armas enemigas y hasta despertar a los muertos para que hablaran. Ese sacrificio, sumado al ojo que ya había entregado en el pozo de Mímir a cambio de sabiduría, convirtió a Odín en el dios más temido y respetado de todos, dispuesto siempre a pagar cualquier precio con tal de comprender un poco más el mundo.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Edda poética', anio_aprox: 'c. siglo XIII (compilando tradición oral más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'odin', rol: 'protagonista' }
    ]
  },
  {
    slug: 'murallas-de-asgard', tipo: 'heroica', periodo: 'La era dorada de los dioses', es_preview: 0,
    titulo: 'La construcción de las murallas de Asgard',
    resumen: 'Un constructor gigante ofrece levantar las murallas de Asgard a cambio de Freyja, el sol y la luna, y Loki debe idear un engaño para evitar el pago.',
    texto_completo: `Poco después de que los dioses terminaran de construir Asgard, un constructor desconocido se presentó ofreciendo levantar una muralla tan fuerte que ni gigantes ni monstruos pudieran jamás traspasarla, y pidió a cambio, si terminaba la obra en un solo invierno, la mano de la propia Freyja, además del sol y la luna del cielo. Los dioses, convencidos de que una obra semejante sería imposible de terminar a tiempo, aceptaron el trato bajo el consejo de Loki, con la condición de que el constructor trabajara completamente solo.\n\nPara su sorpresa, el constructor no estaba tan solo como parecía: contaba con la ayuda de un caballo extraordinario, Svadilfari, capaz de arrastrar bloques de piedra varias veces más grandes que cualquier caballo normal, y el trabajo avanzó a una velocidad alarmante. Cuando faltaban apenas tres días para el plazo final y la muralla estaba casi terminada, los dioses, aterrados de tener que cumplir su parte del trato, se volvieron contra Loki, exigiéndole que arreglara el problema que él mismo había causado con su consejo.\n\nLoki, transformado en una yegua espectacular, se acercó a Svadilfari y lo distrajo el tiempo suficiente para que el caballo abandonara su trabajo y lo persiguiera toda la noche por el bosque, dejando la muralla sin terminar a tiempo. El constructor, furioso al ver su plan arruinado, reveló entonces su verdadera naturaleza: era en realidad un gigante disfrazado, y Thor, invocado de inmediato por los demás dioses, lo aplastó con un solo golpe de su martillo antes de que pudiera hacer más daño. Meses después, Loki, todavía en su forma de yegua, dio a luz a un potrillo de ocho patas llamado Sleipnir, el caballo más veloz de todos los mundos, que se convirtió en la montura personal de Odín.`,
    fuentes: [{ autor: 'Snorri Sturluson', obra: 'Edda prosaica', anio_aprox: 'c. 1220', tipo: 'primaria' }],
    personajes: [
      { slug: 'loki', rol: 'protagonista' },
      { slug: 'thor', rol: 'secundario' },
      { slug: 'odin', rol: 'secundario' },
      { slug: 'freyja', rol: 'mencionado' }
    ]
  },
  {
    slug: 'forja-de-mjolnir', tipo: 'heroica', periodo: 'La era dorada de los dioses', es_preview: 0,
    titulo: 'Cómo Thor obtuvo su martillo Mjölnir',
    resumen: 'Tras cortarle el cabello a Sif, Loki apuesta su propia cabeza para que los enanos forjen tesoros aún mejores, y de esa apuesta nace el martillo de Thor.',
    texto_completo: `Todo comenzó con una broma de mal gusto: Loki, por puro placer travieso, cortó el cabello dorado de Sif, la esposa de Thor, mientras dormía, dejándola completamente calva. Thor, furioso al descubrir lo ocurrido, amenazó con romperle cada hueso del cuerpo a Loki si no encontraba la manera de repararlo, así que el dios embaucador corrió a buscar a los enanos hijos de Ivaldi, maestros artesanos capaces de forjar objetos de un poder asombroso.\n\nLos enanos crearon un cabello de oro puro tan fino que crecería en la cabeza de Sif como si fuera real, y de paso, entusiasmados con su propio talento, forjaron también la lanza Gungnir para Odín y el barco plegable Skídbladnir para Freyr. Pero Loki, incapaz de contener su naturaleza competitiva, apostó su propia cabeza con otros dos enanos, Brokkr y Eitri, asegurando que ellos jamás podrían igualar semejantes obras.\n\nMientras Eitri trabajaba el metal en la forja, Loki se transformó en una mosca y le picó repetidamente para sabotear el trabajo, logrando que el mango del objeto que estaban forjando —un martillo destinado a Thor— quedara más corto de lo planeado. Pese al sabotaje, el resultado fue extraordinario: Mjölnir, un martillo capaz de golpear con la fuerza de un rayo y regresar siempre a la mano de quien lo lanzara, tan poderoso que ni siquiera su mango corto lograba disminuir su utilidad. Cuando los dioses declararon que el trabajo de los enanos había superado incluso al de los hijos de Ivaldi, Loki tuvo que huir para salvar su cabeza, mientras Thor recibía el arma que lo acompañaría hasta el fin de los tiempos.`,
    fuentes: [{ autor: 'Snorri Sturluson', obra: 'Edda prosaica', anio_aprox: 'c. 1220', tipo: 'primaria' }],
    personajes: [
      { slug: 'thor', rol: 'protagonista' },
      { slug: 'loki', rol: 'secundario' },
      { slug: 'sif', rol: 'secundario' },
      { slug: 'odin', rol: 'mencionado' },
      { slug: 'freyr', rol: 'mencionado' }
    ]
  },
  {
    slug: 'robo-del-martillo-de-thor', tipo: 'heroica', periodo: 'La era dorada de los dioses', es_preview: 1,
    titulo: 'El robo del martillo de Thor',
    resumen: 'El gigante Thrym roba Mjölnir y exige a Freyja como esposa a cambio, así que Thor debe disfrazarse de novia para recuperar su propia arma.',
    texto_completo: `Thor despertó una mañana y descubrió, con horror, que Mjölnir había desaparecido de su lado mientras dormía. Furioso y avergonzado a partes iguales, acudió de inmediato a Loki en busca de ayuda, y juntos descubrieron que el responsable había sido Thrym, rey de los gigantes de hielo, que se negaba a devolver el martillo a menos que los dioses le entregaran a Freyja como su esposa.\n\nFreyja rechazó la propuesta con tal indignación que hizo temblar todo Asgard, así que los dioses, desesperados por recuperar el arma que los protegía de los gigantes, idearon un plan mucho menos digno: Thor se disfrazaría de Freyja, cubierto con un velo de novia y las joyas de la propia diosa, mientras Loki lo acompañaría disfrazado de dama de honor para completar el engaño.\n\nEl disfraz de Thor no era precisamente convincente: durante el banquete de bodas en Jötunheim, el dios devoró un buey entero, ocho salmones y bebió tres barriles de hidromiel él solo, hazañas que alarmaron a Thrym hasta que Loki, pensando rápido, explicó que "Freyja" llevaba ocho días sin comer de pura emoción por la boda. Cuando Thrym, embelesado, se inclinó para besar a su prometida y levantó el velo, retrocedió espantado ante la mirada furibunda que se ocultaba detrás.\n\nLoki, otra vez con rapidez, explicó que la novia no había dormido en ocho noches de la ansiedad, calmando las sospechas de Thrym el tiempo suficiente para que, siguiendo la costumbre, trajeran el martillo Mjölnir y lo colocaran sobre el regazo de la novia para bendecir la unión. En cuanto sintió el peso familiar del arma entre sus manos, Thor se arrancó el disfraz y masacró a Thrym y a todos los gigantes presentes en el banquete, recuperando su martillo de la forma menos elegante posible, pero efectiva al fin y al cabo.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Edda poética', anio_aprox: 'c. siglo XIII (compilando tradición oral más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'thor', rol: 'protagonista' },
      { slug: 'loki', rol: 'secundario' },
      { slug: 'freyja', rol: 'mencionado' }
    ]
  },
  {
    slug: 'hijos-de-loki-y-angrboda', tipo: 'castigo', periodo: 'La era dorada de los dioses', es_preview: 0,
    titulo: 'Los hijos monstruosos de Loki y Angrboda',
    resumen: 'Loki engendra tres criaturas temidas con la giganta Angrboda, y Odín dispersa a cada una por los nueve mundos antes de que la profecía sobre ellas se cumpla.',
    texto_completo: `En las profundidades de Jötunheim, Loki se unió con la giganta Angrboda, y de esa relación nacieron tres criaturas que desde el momento de su nacimiento hicieron temblar a los dioses: Fenrir, un lobo cuyo tamaño crecía a un ritmo antinatural; Jörmungandr, una serpiente que no dejaba de alargarse; y Hel, una niña cuya mitad del cuerpo tenía la apariencia de un cadáver en descomposición.\n\nCuando las profecías advirtieron a Odín que estos tres hijos de Loki traerían consigo la ruina de los dioses, decidió actuar antes de que fuera demasiado tarde. Convocó a los tres hermanos a Asgard y dictaminó el destino de cada uno por separado: a Jörmungandr lo arrojó al océano que rodea Midgard, donde la serpiente creció tanto que terminó envolviendo el mundo entero y mordiéndose la propia cola; a Hel la envió a las profundidades heladas de Niflheim, donde le entregó el gobierno de Helheim, el reino de los muertos que no caen en batalla.\n\nCon Fenrir, sin embargo, Odín dudó: el lobo todavía era joven, y los dioses decidieron criarlo en Asgard bajo vigilancia, con la esperanza de controlarlo mientras siguiera creciendo. Pero cada día que pasaba, Fenrir se volvía más grande y más fuerte, y pronto quedó claro que ningún dios, salvo quizás el propio Týr, se atrevía siquiera a acercarse a darle de comer. La profecía que Odín tanto temía seguía en pie, y aunque había logrado dispersar a los tres hijos de Loki por separado, el destino que representaban continuaba acechando en el horizonte, esperando el día del Ragnarök para cumplirse por completo.`,
    fuentes: [{ autor: 'Snorri Sturluson', obra: 'Edda prosaica', anio_aprox: 'c. 1220', tipo: 'primaria' }],
    personajes: [
      { slug: 'loki', rol: 'protagonista' },
      { slug: 'angrboda', rol: 'secundario' },
      { slug: 'fenrir', rol: 'secundario' },
      { slug: 'jormungandr', rol: 'secundario' },
      { slug: 'hel', rol: 'secundario' },
      { slug: 'odin', rol: 'secundario' }
    ]
  },
  {
    slug: 'encadenamiento-de-fenrir', tipo: 'tragedia', periodo: 'La era dorada de los dioses', es_preview: 0,
    titulo: 'El encadenamiento de Fenrir y el sacrificio de Týr',
    resumen: 'Los dioses engañan a Fenrir para atarlo con la cinta mágica Gleipnir, y solo Týr se atreve a pagar el precio de esa confianza rota.',
    texto_completo: `Con Fenrir creciendo cada día más allá de todo control, los dioses decidieron finalmente que había llegado el momento de encadenarlo, antes de que su fuerza superara la de todos ellos juntos. Probaron primero con dos cadenas robustas, Leyding y Dromi, presentándoselas al lobo como un simple juego de fuerza para medir su poder; Fenrir, orgulloso de su propia fortaleza, aceptó el desafío ambas veces y rompió las cadenas sin el menor esfuerzo, para regocijo de los propios dioses que fingían celebrar su hazaña.\n\nAlarmados, los dioses enviaron a un mensajero al reino de los enanos, maestros artesanos capaces de forjar lo imposible, y estos crearon Gleipnir, una cinta aparentemente delicada como una hebra de seda, tejida con seis ingredientes imposibles de conseguir: el ruido de los pasos de un gato, la barba de una mujer, las raíces de una montaña, los tendones de un oso, el aliento de un pez y la saliva de un pájaro. Su apariencia frágil despertó la sospecha de Fenrir, que esta vez se negó a dejarse atar a menos que uno de los dioses colocara su mano dentro de su boca como garantía de que no había trampa.\n\nSolo Týr, el más valiente de todos, se ofreció para el sacrificio, consciente de lo que probablemente le costaría. Cuando Fenrir, atado con Gleipnir, comprobó que no podía liberarse por más que forcejeara, comprendió que había sido engañado, y cerró sus mandíbulas sobre la mano de Týr, arrancándosela de un solo mordisco. El lobo quedó atado a una roca profunda bajo tierra, con una espada clavada entre sus fauces para mantenerlas abiertas, condenado a esperar allí, aullando de rabia, hasta el día del Ragnarök en que finalmente lograría liberarse para cumplir la profecía que tanto temían los dioses.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Edda poética', anio_aprox: 'c. siglo XIII (compilando tradición oral más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'fenrir', rol: 'protagonista' },
      { slug: 'tyr', rol: 'secundario' },
      { slug: 'odin', rol: 'secundario' }
    ]
  },
  {
    slug: 'muerte-de-baldr', tipo: 'tragedia', periodo: 'La era dorada de los dioses', es_preview: 1,
    titulo: 'La muerte de Baldr',
    resumen: 'Loki descubre la única debilidad de Baldr y engaña al dios ciego Hödr para que lo mate con un dardo de muérdago, sumiendo a Asgard entera en el duelo.',
    texto_completo: `Baldr, el más hermoso y amado de todos los dioses, comenzó a tener sueños inquietantes sobre su propia muerte, presagios tan perturbadores que llegaron a oídos de toda Asgard. Su madre Frigg, decidida a proteger a su hijo a cualquier precio, recorrió los nueve mundos pidiendo un juramento a cada cosa que existía —el fuego, el agua, el hierro, las piedras, los árboles, las enfermedades, los animales— de que jamás causarían daño a Baldr. Convencida de que su hijo se había vuelto completamente invulnerable, Frigg descansó tranquila por primera vez en semanas.\n\nLos dioses, encantados con la noticia, convirtieron la invulnerabilidad de Baldr en un juego: se reunían a arrojarle objetos, flechas, incluso golpearlo con espadas, riendo al ver cómo nada lograba hacerle ni un rasguño. Pero Loki, movido por una envidia que nunca terminó de explicarse del todo, se disfrazó de anciana y visitó a Frigg para preguntarle si en verdad absolutamente todo había jurado no dañar a su hijo. Frigg, sin sospechar nada, confesó que solo había pasado por alto una pequeña planta, el muérdago, que le había parecido demasiado joven e inofensiva para pedirle un juramento.\n\nLoki no perdió tiempo: arrancó una rama de muérdago, la afiló hasta convertirla en un dardo, y se la entregó al dios ciego Hödr, hermano de Baldr, que se mantenía apartado del juego por no poder ver hacia dónde arrojar nada. Ofreciéndose a guiar su puntería con total amabilidad, Loki dirigió la mano de Hödr hacia su hermano, y el dardo de muérdago atravesó a Baldr de parte a parte, matándolo al instante ante la mirada horrorizada de todos los demás dioses reunidos.\n\nLa muerte de Baldr sumió a Asgard entera en un duelo como jamás se había visto: ni los propios dioses, acostumbrados a la guerra y a la pérdida, lograban consolarse ante la muerte de quien consideraban el más puro e inocente de todos ellos. Pronto quedaría claro que esa muerte no era solo una tragedia personal, sino la primera señal visible de que el destino del mundo entero había comenzado a torcerse hacia su fin.`,
    fuentes: [{ autor: 'Snorri Sturluson', obra: 'Edda prosaica', anio_aprox: 'c. 1220', tipo: 'primaria' }],
    personajes: [
      { slug: 'baldr', rol: 'protagonista' },
      { slug: 'loki', rol: 'antagonista' },
      { slug: 'hodr', rol: 'secundario' },
      { slug: 'frigg', rol: 'secundario' }
    ]
  },
  {
    slug: 'hermod-cabalga-a-hel', tipo: 'tragedia', periodo: 'La era dorada de los dioses', es_preview: 0,
    titulo: 'Hermod cabalga a Hel para rescatar a Baldr',
    resumen: 'Hermod cabalga nueve noches hasta el reino de los muertos para suplicar por el regreso de Baldr, pero una sola negativa basta para frustrar el rescate.',
    texto_completo: `Devastados por la muerte de Baldr, los dioses no se resignaron a perderlo para siempre: Hermod, otro de los hijos de Odín, se ofreció a cabalgar hasta el reino de Hel para suplicar por su regreso, y Odín le prestó su propio caballo de ocho patas, Sleipnir, el único capaz de completar semejante viaje. Durante nueve noches enteras, Hermod cabalgó a través de valles cada vez más oscuros y fríos, hasta llegar finalmente al puente que cruzaba el río Gjöll, custodiado por una giganta que le exigió explicar por qué un jinete vivo hacía temblar el puente con más fuerza que legiones enteras de muertos.\n\nAl llegar por fin al salón de Hel, Hermod encontró a Baldr sentado en el lugar de honor, ya instalado entre los muertos pero todavía reconocible y sereno. Hermod suplicó a Hel que lo dejara regresar, describiendo el duelo insoportable que su ausencia había provocado en Asgard entera. Hel, considerando la petición, propuso una condición aparentemente sencilla: si absolutamente todo en los nueve mundos —cada ser vivo, cada piedra, cada elemento— lloraba genuinamente la muerte de Baldr, ella lo dejaría regresar con los vivos; pero si una sola cosa se negaba a llorar, Baldr permanecería con ella para siempre.\n\nLos mensajeros de los dioses recorrieron entonces los nueve mundos pidiendo a cada ser que llorara por Baldr, y prácticamente todos lo hicieron sin dudar: hombres, animales, piedras, árboles, metales, todos derramaron lágrimas genuinas por el dios caído. Pero en una cueva remota, los mensajeros encontraron a una giganta llamada Thökk que se negó rotundamente, declarando con frialdad que Baldr no le había dado nunca nada bueno y que Hel podía quedarse con lo que ya tenía. Esa única negativa bastó para condenar a Baldr a permanecer en el inframundo hasta el fin de los tiempos, y los dioses, sospechando que Thökk no era otra que Loki disfrazado una vez más, sellaron su decisión de castigarlo definitivamente por todo el daño causado.`,
    fuentes: [{ autor: 'Snorri Sturluson', obra: 'Edda prosaica', anio_aprox: 'c. 1220', tipo: 'primaria' }],
    personajes: [
      { slug: 'hermod', rol: 'protagonista' },
      { slug: 'baldr', rol: 'secundario' },
      { slug: 'hel', rol: 'secundario' },
      { slug: 'odin', rol: 'mencionado' }
    ]
  },
  {
    slug: 'castigo-de-loki', tipo: 'castigo', periodo: 'La era dorada de los dioses', es_preview: 0,
    titulo: 'El castigo de Loki',
    resumen: 'Tras insultar a todos los dioses en un banquete, Loki es capturado y encadenado con las entrañas de su propio hijo, condenado a sufrir hasta el Ragnarök.',
    texto_completo: `Tras la muerte de Baldr y la revelación de que Loki estaba detrás tanto del engaño a Hödr como del disfraz de la giganta que impidió su rescate, la paciencia de los dioses hacia el embaucador se agotó por completo. Loki, sabiendo lo que se le venía encima, se presentó de todos modos en un banquete en el salón de Ægir, y en lugar de disculparse, aprovechó la ocasión para insultar uno por uno a cada dios y diosa presentes, revelando secretos vergonzosos y humillaciones pasadas en un discurso conocido como la Lokasenna, hasta que la sola mención de la inminente llegada de Thor lo obligó finalmente a huir del salón.\n\nLos dioses lo persiguieron sin descanso, y Loki, transformado en salmón, intentó esconderse en un río, pero fue finalmente atrapado en una red que él mismo, irónicamente, había inventado poco antes por pura curiosidad y que los dioses reconstruyeron a partir de las cenizas que encontraron en su escondite. Capturado por fin, fue arrastrado a una cueva profunda junto a sus dos hijos con su esposa Sigyn, a quienes los dioses transformaron en lobos para que se despedazaran entre sí, y con las entrañas de uno de ellos ataron a Loki a tres rocas afiladas.\n\nComo castigo final, una serpiente venenosa fue colocada sobre su rostro, goteando veneno sin cesar directamente sobre su piel. Solo la devoción de su esposa Sigyn, que permaneció a su lado sosteniendo un cuenco para recoger el veneno antes de que le tocara, le proporcionaba algún alivio; pero cada vez que el cuenco se llenaba y ella tenía que vaciarlo, unas gotas de veneno caían directamente sobre Loki, y su cuerpo se retorcía de dolor con tal violencia que, según los nórdicos, esos temblores eran la causa de los terremotos que sacudían la tierra. Así permanecería Loki, atado y sufriendo, hasta el día del Ragnarök, cuando finalmente lograría liberarse para liderar a los gigantes contra los dioses que lo habían encadenado.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Edda poética', anio_aprox: 'c. siglo XIII (compilando tradición oral más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'loki', rol: 'protagonista' },
      { slug: 'thor', rol: 'secundario' }
    ]
  },
  {
    slug: 'thor-en-utgard', tipo: 'otro', periodo: 'La era dorada de los dioses', es_preview: 0,
    titulo: 'Thor y el viaje a Utgard',
    resumen: 'Thor y Loki compiten en pruebas imposibles en el castillo del gigante Utgard-Loki, solo para descubrir que todo fue una ilusión diseñada para humillarlos.',
    texto_completo: `Thor y Loki emprendieron un viaje hacia Jötunheim acompañados de dos sirvientes humanos, Thjalfi y Röskva, y en el camino se hospedaron una noche en el salón de un gigante llamado Skrymir, cuya fuerza y tamaño ya les dieron un primer indicio de lo que les esperaba. Al llegar finalmente a Utgard, la fortaleza del gigante Utgard-Loki, fueron recibidos con una hospitalidad burlona: el señor del castillo, tras conocer sus nombres, propuso una serie de pruebas para medir las habilidades de sus visitantes, dando a entender con desdén que dudaba que estuvieran a la altura de la fama que los precedía.\n\nLoki, hambriento, aceptó competir en una prueba de comer más rápido contra un tal Logi, pero perdió estrepitosamente cuando su rival devoró no solo la carne sino los huesos y hasta el propio plato de madera. Thjalfi, el sirviente más veloz conocido entre los hombres, corrió una carrera contra un tal Hugi y quedó muy por detrás en los tres intentos. Cuando le llegó el turno a Thor, el dios del trueno intentó primero vaciar un cuerno de beber que parecía normal, pero por más que bebía, el nivel apenas bajaba; después trató de levantar un gato gris del suelo, pero solo logró que arqueara una sola pata; y finalmente aceptó luchar contra una anciana llamada Elli, que para su humillación logró hacerlo doblar una rodilla.\n\nA la mañana siguiente, cuando el grupo se disponía a partir derrotados y avergonzados, Utgard-Loki les reveló la verdad completa: todo había sido una ilusión de magia sofisticada para protegerse de un poder que, de haberlo enfrentado directamente, habría destruido su fortaleza entera. El cuerno de beber estaba conectado secretamente al océano, y Thor había bebido tanto que provocó las mareas; el gato gris era en realidad la serpiente Jörmungandr disfrazada, y el solo hecho de moverla un poco había sido una hazaña sobrehumana; y la anciana Elli no era otra que la vejez misma, a la que ningún ser, ni siquiera un dios, puede vencer del todo. Furioso al comprender el engaño, Thor alzó su martillo para destruir Utgard de una vez, pero tanto el castillo como su señor se desvanecieron en el aire, dejando a los viajeros solos en un campo vacío, con una lección de humildad que ni el dios del trueno olvidaría jamás.`,
    fuentes: [{ autor: 'Snorri Sturluson', obra: 'Edda prosaica', anio_aprox: 'c. 1220', tipo: 'primaria' }],
    personajes: [
      { slug: 'thor', rol: 'protagonista' },
      { slug: 'loki', rol: 'secundario' }
    ]
  },
  {
    slug: 'collar-brisingamen', tipo: 'otro', periodo: 'La era dorada de los dioses', es_preview: 0,
    titulo: 'La forja del collar Brísingamen',
    resumen: 'Freyja paga un precio inusual por el collar más hermoso jamás forjado, y Loki, por orden de Odín, se lo roba mientras duerme.',
    texto_completo: `Freyja, la más bella de todas las diosas, se topó un día con cuatro hábiles enanos forjando en su fragua subterránea el collar más exquisito que jamás se hubiera visto, tejido con hilos de oro puro y engastado con gemas que parecían capturar la luz de las propias estrellas. Prendada de inmediato de la pieza, Freyja ofreció comprarla con oro y plata, pero los cuatro enanos, indiferentes a las riquezas que ya poseían en abundancia, le pusieron una condición muy distinta: pasar una noche con cada uno de ellos, por turnos.\n\nFreyja, decidida a poseer el collar a cualquier precio, aceptó la condición sin más, y tras cuatro noches cumplió su parte del trato y se marchó con Brísingamen alrededor del cuello, la joya que desde entonces se convertiría en su posesión más preciada y en símbolo de su propio poder. Pero Loki, que había presenciado el trato en secreto, no tardó en contárselo a Odín, que decidió usar esa información como forma de castigar el orgullo de Freyja: le ordenó a Loki que le robara el collar mientras dormía.\n\nTransformado en mosca para colarse por una diminuta abertura de su alcoba, Loki logró desabrochar el collar sin despertarla y se lo entregó a Odín, que se negó a devolvérselo a Freyja a menos que aceptara sembrar la guerra eterna entre dos reyes mortales rivales, condenándolos a luchar sin descanso hasta el fin de los tiempos. Freyja, furiosa pero sin más opción, aceptó la condición de Odín con tal de recuperar su collar, y el conflicto que desató se convirtió en una de las guerras más recordadas de la tradición nórdica, prueba de que ni la diosa más hermosa de Asgard podía escapar del todo a las intrigas de Loki y Odín.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Edda poética', anio_aprox: 'c. siglo XIII (compilando tradición oral más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'freyja', rol: 'protagonista' },
      { slug: 'loki', rol: 'secundario' },
      { slug: 'odin', rol: 'secundario' }
    ]
  },
  {
    slug: 'freyr-y-gerd', tipo: 'tragedia', periodo: 'La era dorada de los dioses', es_preview: 0,
    titulo: 'Freyr y Gerd: el amor que costó una espada',
    resumen: 'Freyr se enamora de la giganta Gerd al verla desde el trono de Odín, y entrega su espada mágica para conquistarla, un sacrificio que pagará caro en el Ragnarök.',
    texto_completo: `Un día, Freyr, dios de la cosecha y la prosperidad, cometió la imprudencia de sentarse en Hlidskjalf, el trono de Odín desde el que se podía observar los nueve mundos enteros, un privilegio reservado únicamente al padre de los dioses. Desde allí, sus ojos se posaron sobre Jötunheim, donde vio a Gerd, una giganta de una belleza tan radiante que, según contaban, sus brazos desnudos iluminaban el cielo y el mar al moverse. Freyr quedó tan perdidamente enamorado que dejó de comer, de dormir y de hablar, sumido en una melancolía que preocupó profundamente a toda su familia.\n\nSu padre Njörd envió a Skírnir, el fiel sirviente de Freyr, a averiguar qué le ocurría, y cuando finalmente logró que el dios confesara la causa de su tristeza, Skírnir se ofreció a viajar hasta Jötunheim para pedir la mano de Gerd en su nombre. Freyr, desesperado por conseguirla a cualquier precio, le entregó a Skírnir su caballo mágico capaz de atravesar llamas y, lo más significativo de todo, su propia espada encantada, un arma que luchaba sola contra cualquier enemigo sin necesidad de que nadie la empuñara.\n\nGerd rechazó al principio los regalos que Skírnir le ofrecía en nombre de Freyr —manzanas doradas, un anillo mágico—, y solo cedió cuando Skírnir, agotadas las ofertas pacíficas, recurrió a amenazas de maldiciones terribles que la condenarían a un aislamiento eterno si continuaba negándose. Gerd, atemorizada, aceptó finalmente encontrarse con Freyr nueve noches después en un bosque tranquilo, y de ese encuentro nació un matrimonio feliz entre ambos.\n\nPero el precio de ese amor resultaría, con el tiempo, mucho más alto de lo que Freyr había imaginado: al entregar su espada mágica a Skírnir como parte del cortejo, se quedó sin la única arma capaz de protegerlo cuando más la necesitara. Esa ausencia se haría dolorosamente evidente el día del Ragnarök, cuando Freyr, desarmado, tendría que enfrentar al gigante de fuego Surt con lo que tuviera a mano, un duelo que ya llevaba perdido de antemano desde el día en que decidió que el amor de Gerd valía más que cualquier espada.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Edda poética', anio_aprox: 'c. siglo XIII (compilando tradición oral más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'freyr', rol: 'protagonista' },
      { slug: 'gerd', rol: 'secundario' },
      { slug: 'surt', rol: 'mencionado' }
    ]
  },
  {
    slug: 'sigurd-y-fafnir', tipo: 'heroica', periodo: 'La era de los héroes', es_preview: 0,
    titulo: 'Sigurd y el dragón Fafnir',
    resumen: 'Criado para vengar un tesoro maldito, Sigurd mata al dragón Fafnir, prueba su sangre y descubre que su propio mentor planeaba traicionarlo.',
    texto_completo: `Sigurd fue criado por el enano Regin, un maestro herrero que, sin que el joven lo supiera, ocultaba una obsesión personal: recuperar un tesoro maldito que su propio hermano Fafnir custodiaba convertido en un dragón temible, tras haber matado a su propio padre para quedarse con el oro. Regin, incapaz de enfrentar él mismo a su hermano, decidió criar a Sigurd específicamente para que hiciera el trabajo sucio en su lugar, y comenzó por reforjar los fragmentos rotos de Gram, la legendaria espada del padre de Sigurd, hasta devolverle un filo capaz de partir un yunque de un solo golpe.\n\nGuiado por Regin, Sigurd cavó una trinchera en el camino que Fafnir recorría cada día para beber agua, y se escondió dentro esperando el momento preciso. Cuando el dragón pasó justo por encima, Sigurd atravesó su vientre blando con Gram, hiriéndolo de muerte. Mientras agonizaba, Fafnir, sorprendentemente, entabló una última conversación con su asesino, advirtiéndole que el oro que estaba a punto de reclamar traería la ruina a cualquiera que lo poseyera, una maldición que el propio Regin, en su afán de venganza, había ignorado convenientemente.\n\nSiguiendo instrucciones de Regin, Sigurd asó el corazón del dragón para que su tío lo comiera, pero al probar accidentalmente una gota de la sangre hirviendo que le salpicó los dedos, Sigurd descubrió que de pronto podía entender el lenguaje de los pájaros posados cerca de allí. Los pájaros, alarmados, le advirtieron que Regin planeaba traicionarlo y matarlo dormido para quedarse con todo el tesoro él solo. Sigurd, sin dudarlo, decapitó a Regin antes de que pudiera cumplir su plan, y se quedó con el oro maldito de Fafnir, sin saber todavía que los pájaros tenían razón sobre una cosa más: esa fortuna llevaba consigo una maldición que perseguiría a su nuevo dueño hasta el final de sus días.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Saga de los Volsungos', anio_aprox: 'c. siglo XIII', tipo: 'primaria' }],
    personajes: [
      { slug: 'sigurd', rol: 'protagonista' },
      { slug: 'fafnir', rol: 'antagonista' }
    ]
  },
  {
    slug: 'sigurd-brynhild-maldicion-del-oro', tipo: 'tragedia', periodo: 'La era de los héroes', es_preview: 0,
    titulo: 'Sigurd, Brynhild y la maldición del oro',
    resumen: 'Sigurd despierta y se enamora de la valquiria Brynhild, pero una poción del olvido y un engaño de identidad desatan una tragedia que termina con la muerte de ambos.',
    texto_completo: `Con el tesoro de Fafnir ya en su poder, Sigurd cabalgó hasta encontrar una fortaleza rodeada por un muro de llamas, donde descubrió a una valquiria llamada Brynhild sumida en un sueño mágico, castigada por Odín por haber desobedecido sus órdenes en batalla. Sigurd atravesó las llamas sin dudarlo y la despertó de su letargo; los dos se enamoraron profundamente, e intercambiaron promesas de matrimonio antes de que Sigurd continuara su viaje, prometiendo regresar por ella.\n\nEn su camino, Sigurd llegó a la corte del rey Gunnar y su familia, los Burgundios, donde la reina Grimhild, deseosa de casarlo con su propia hija Gudrun, le dio de beber una poción que le hizo olvidar por completo a Brynhild. Sigurd, sin memoria alguna de su promesa anterior, se casó felizmente con Gudrun y, poco después, ayudó a su nuevo cuñado Gunnar a cortejar a la propia Brynhild, disfrazándose mágicamente con la apariencia de Gunnar para atravesar el muro de llamas que ella había jurado que solo su verdadero prometido podría cruzar.\n\nBrynhild, engañada por el disfraz, aceptó casarse con quien creía que era Gunnar, sin saber que en realidad había sido Sigurd, bajo su verdadera apariencia prestada, quien había logrado la hazaña. La verdad salió a la luz tiempo después, en una disputa entre Gudrun y Brynhild sobre quién de las dos tenía un esposo más valiente, cuando Gudrun, furiosa, reveló sin pensarlo que había sido Sigurd, no Gunnar, quien realmente había cruzado las llamas.\n\nBrynhild, devastada al descubrir el engaño y la traición de la memoria perdida de Sigurd, exigió su muerte a los hermanos de Gudrun, que finalmente lo asesinaron mientras dormía. Pero la venganza no le trajo consuelo alguno: presa de una angustia que no podía soportar, Brynhild se quitó la vida poco después, pidiendo que su cuerpo fuera colocado junto al de Sigurd en la misma pira funeraria, para que ni siquiera la muerte lograra separarlos definitivamente. El oro maldito de Fafnir, que había pasado de mano en mano desde la muerte de Regin, seguía cobrando víctimas exactamente como el dragón había profetizado con su último aliento.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Saga de los Volsungos', anio_aprox: 'c. siglo XIII', tipo: 'primaria' }],
    personajes: [
      { slug: 'sigurd', rol: 'protagonista' },
      { slug: 'brynhild', rol: 'secundario' },
      { slug: 'gunnar', rol: 'secundario' }
    ]
  },
  {
    slug: 'muerte-de-ragnar-lodbrok', tipo: 'tragedia', periodo: 'La era de los héroes', es_preview: 0,
    titulo: 'La muerte de Ragnar Lodbrok en el foso de serpientes',
    resumen: 'Capturado por el rey Ælla de Northumbria, el caudillo vikingo Ragnar Lodbrok enfrenta la muerte en un foso de serpientes recitando un poema desafiante.',
    texto_completo: `Ragnar Lodbrok, el más temido de los caudillos vikingos, había pasado su vida entera al mando de expediciones de saqueo que llevaron su nombre hasta los confines más lejanos de Europa, desde las costas de Francia hasta el corazón de Inglaterra. Casado primero con la legendaria escuda Lagertha y después con la profetisa Aslaug, tuvo varios hijos que crecerían para ser tan temidos como él mismo en los mares del norte.\n\nEnvejecido pero todavía ansioso por una última hazaña que igualara la fama de su juventud, Ragnar zarpó hacia Northumbria con apenas dos barcos, una fuerza mucho menor de la que la empresa exigía, convencido de que su sola reputación bastaría para intimidar a cualquier enemigo. El rey Ælla de Northumbria, sin embargo, no se dejó amedrentar: capturó a Ragnar tras una batalla desigual y, conociendo su fama, ideó un castigo pensado específicamente para él: lo arrojó a un foso lleno de serpientes venenosas, con la esperanza de que muriera envenenado y humillado ante sus propios hombres.\n\nLejos de suplicar clemencia, Ragnar recibió su destino con una serenidad que dejó atónitos incluso a sus captores: mientras las serpientes se enroscaban a su alrededor y comenzaban a morderlo, recitó un largo poema recordando sus batallas, sus victorias y su vida entera de conquistas, terminando con una advertencia que se convertiría en leyenda: sus hijos, al enterarse de su muerte, no descansarían hasta vengarlo. Cuando la noticia llegó a oídos de sus herederos, estos reunieron el llamado Gran Ejército Pagano y desataron una invasión de Inglaterra tan devastadora que se recordaría durante siglos, cumpliendo hasta la última palabra la profecía final de su padre agonizante entre las serpientes.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Saga de Ragnar Lodbrok', anio_aprox: 'c. siglo XIII', tipo: 'primaria' }],
    personajes: [
      { slug: 'ragnar', rol: 'protagonista' }
    ]
  },
  {
    slug: 'ragnarok', tipo: 'heroica', periodo: 'El Ragnarök', es_preview: 1,
    titulo: 'El Ragnarök: el destino final de los dioses',
    resumen: 'Fenrir, Jörmungandr y Surt se liberan para la batalla final: Odín cae ante el lobo, Thor mata a la serpiente del mundo antes de morir envenenado, y el mundo entero se incendia.',
    texto_completo: `Las señales del fin llegaron una tras otra, tal como las profecías habían anunciado desde hacía eones: un invierno de tres años sin verano alguno entre medio, llamado el Fimbulvetr, azotó el mundo entero, y los lazos de sangre entre hermanos se rompieron en guerras fratricidas por todas partes. Fenrir, finalmente, logró liberarse de las cadenas que lo habían mantenido atado durante siglos, y Jörmungandr emergió del océano provocando mareas devastadoras que inundaron la tierra. Desde Muspelheim, el gigante de fuego Surt avanzó al frente de un ejército de gigantes ardientes, cruzando el puente Bifrost, que se quebró bajo el peso de su marcha.\n\nHeimdall, el vigía eterno, hizo sonar por fin el cuerno Gjallarhorn, convocando a todos los dioses y a los einherjar, los guerreros muertos que Odín había reunido en Valhalla durante generaciones enteras, a la batalla final en la llanura de Vígrid. Odín, montado en Sleipnir, cargó directamente contra Fenrir, pero el lobo, ya liberado de toda cadena, lo devoró de un solo bocado, cumpliendo así la profecía que Odín había temido desde el nacimiento mismo del lobo. Vidar, su hijo silencioso, vengó a su padre de inmediato: sujetando la mandíbula inferior del lobo con un zapato hecho de retazos acumulados durante siglos, la desgarró con sus propias manos, matando a Fenrir en el acto.\n\nThor, por su parte, se enfrentó a su enemigo eterno, Jörmungandr, y tras un combate titánico logró finalmente matarlo con un golpe de Mjölnir, pero apenas dio nueve pasos alejándose de la serpiente moribunda antes de caer él mismo, envenenado por el aliento mortal que la criatura había liberado en sus últimos instantes. Týr y el monstruoso perro Garm se mataron mutuamente en un duelo paralelo, mientras Freyr, desarmado desde que entregara su espada por amor a Gerd, cayó ante Surt sin poder ofrecer resistencia real. Finalmente, Loki y Heimdall, enemigos desde tiempos inmemoriales, se enfrentaron por última vez y murieron el uno a manos del otro. Cuando el último dios cayó, Surt arrojó fuego sobre los nueve mundos enteros, y la tierra, envuelta en llamas, se hundió lentamente bajo las aguas del océano, cerrando el ciclo que había comenzado con la creación misma del mundo.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Edda poética', anio_aprox: 'c. siglo XIII (compilando tradición oral más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'odin', rol: 'protagonista' },
      { slug: 'thor', rol: 'secundario' },
      { slug: 'fenrir', rol: 'antagonista' },
      { slug: 'jormungandr', rol: 'antagonista' },
      { slug: 'surt', rol: 'antagonista' },
      { slug: 'tyr', rol: 'secundario' },
      { slug: 'vidar', rol: 'secundario' },
      { slug: 'freyr', rol: 'secundario' },
      { slug: 'loki', rol: 'secundario' },
      { slug: 'heimdall', rol: 'secundario' }
    ]
  },
  {
    slug: 'renacimiento-tras-ragnarok', tipo: 'cosmogonia', periodo: 'El Ragnarök', es_preview: 1,
    titulo: 'El renacimiento del mundo tras el Ragnarök',
    resumen: 'De las cenizas del mundo destruido emerge una tierra nueva y verde, donde los dioses supervivientes y dos humanos ocultos comienzan de nuevo.',
    texto_completo: `Cuando las llamas de Surt terminaron por consumir los nueve mundos y la tierra se hundió bajo las aguas, no todo quedó perdido para siempre: de las profundidades del océano emergió, con el tiempo, una tierra nueva, verde y fértil, libre de toda la destrucción que había marcado el fin del mundo anterior. Los campos, sin necesidad de ser sembrados, comenzaron a dar fruto por sí solos, y las cascadas cayeron limpias desde montañas que ningún gigante había pisado todavía.\n\nEntre los dioses, algunos habían sobrevivido a la batalla final: Vidar y Váli, hijos de Odín que no habían caído en el combate, regresaron a caminar sobre la hierba nueva de los campos de Idavoll, el mismo lugar donde antiguamente se había erigido Asgard. Con ellos regresaron también Baldr y Hödr, liberados por fin del reino de Hel, reconciliados como hermanos pese a la tragedia que los había separado generaciones atrás, dispuestos a gobernar juntos el nuevo mundo con la sabiduría que solo la muerte y el regreso pueden enseñar.\n\nDos seres humanos habían sobrevivido también al incendio del mundo, escondidos durante todo el Ragnarök en un bosque profundo, protegidos entre las raíces del propio Yggdrasil, alimentándose únicamente del rocío de la mañana. Al emerger de su refugio y encontrar la tierra nueva desierta pero fértil, se convirtieron en los padres de una nueva humanidad, repitiendo, generaciones después, el mismo destino que Ask y Embla habían tenido al principio de los tiempos.\n\nIncluso el sol, devorado por un lobo justo antes del Ragnarök, dejó una hija tan radiante como él mismo, que ahora recorre el cielo del mundo nuevo sin miedo a ser perseguida nunca más. Así, del fuego y la destrucción absoluta, nació un segundo comienzo: la prueba, según la tradición nórdica, de que ni siquiera el fin del mundo es verdaderamente el final, sino apenas el cierre de un ciclo que, tarde o temprano, siempre encuentra la manera de volver a comenzar.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Edda poética', anio_aprox: 'c. siglo XIII (compilando tradición oral más antigua)', tipo: 'primaria' }],
    personajes: [
      { slug: 'vidar', rol: 'protagonista' },
      { slug: 'vali', rol: 'secundario' },
      { slug: 'baldr', rol: 'secundario' },
      { slug: 'hodr', rol: 'secundario' }
    ]
  }
];

// ------------------------------------------------------------
// FUNCIONES DE INSERCION (idempotentes)
// ------------------------------------------------------------

async function obtenerOCrearLibro() {
  const [existente] = await pool.query('SELECT id FROM libros WHERE slug = ?', [LIBRO.slug]);
  if (existente.length > 0) {
    console.log(`  - Libro "${LIBRO.slug}" ya existía (id ${existente[0].id}).`);
    return existente[0].id;
  }
  const [resultado] = await pool.query(
    `INSERT INTO libros (slug, titulo, subtitulo, descripcion, estado) VALUES (?, ?, ?, ?, ?)`,
    [LIBRO.slug, LIBRO.titulo, LIBRO.subtitulo, LIBRO.descripcion, LIBRO.estado]
  );
  console.log(`  - Libro "${LIBRO.slug}" creado (id ${resultado.insertId}).`);
  return resultado.insertId;
}

async function obtenerOCrearSimbolo(nombre) {
  const [existente] = await pool.query('SELECT id FROM simbolos WHERE nombre = ?', [nombre]);
  if (existente.length > 0) return existente[0].id;
  const [resultado] = await pool.query('INSERT INTO simbolos (nombre) VALUES (?)', [nombre]);
  return resultado.insertId;
}

async function obtenerOCrearFuente(fuente) {
  const [existente] = await pool.query(
    'SELECT id FROM fuentes WHERE autor = ? AND obra = ?',
    [fuente.autor, fuente.obra]
  );
  if (existente.length > 0) return existente[0].id;
  const [resultado] = await pool.query(
    'INSERT INTO fuentes (autor, obra, tipo, anio_aprox) VALUES (?, ?, ?, ?)',
    [fuente.autor, fuente.obra, fuente.tipo, fuente.anio_aprox]
  );
  return resultado.insertId;
}

async function sembrarPersonajes(libroId) {
  const idsPorSlug = {};

  for (const p of PERSONAJES) {
    const [existente] = await pool.query('SELECT id FROM personajes WHERE slug = ?', [p.slug]);
    let personajeId;

    if (existente.length > 0) {
      personajeId = existente[0].id;
      console.log(`  - Personaje "${p.slug}" ya existía.`);
    } else {
      const [resultado] = await pool.query(
        `INSERT INTO personajes
           (tipo, nombre, nombre_griego, epitetos, descripcion_corta, descripcion_larga,
            origen, dominio, naturaleza, es_preview, libro_id, slug)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [p.tipo, p.nombre, p.nombre_griego || null, p.epitetos, p.descripcion_corta, p.descripcion_larga,
         p.origen || null, p.dominio || null, p.naturaleza || null, p.es_preview ? 1 : 0, libroId, p.slug]
      );
      personajeId = resultado.insertId;
      console.log(`  - Personaje "${p.slug}" creado.`);
    }

    idsPorSlug[p.slug] = personajeId;

    // Simbolos
    for (const nombreSimbolo of (p.simbolos || [])) {
      const simboloId = await obtenerOCrearSimbolo(nombreSimbolo);
      await pool.query(
        'INSERT IGNORE INTO personaje_simbolos (personaje_id, simbolo_id) VALUES (?, ?)',
        [personajeId, simboloId]
      );
    }

    // Poderes (solo si este personaje todavia no tiene poderes cargados)
    const [poderesExistentes] = await pool.query('SELECT id FROM poderes WHERE personaje_id = ?', [personajeId]);
    if (poderesExistentes.length === 0) {
      let orden = 0;
      for (const poder of (p.poderes || [])) {
        await pool.query(
          'INSERT INTO poderes (personaje_id, nombre, descripcion, orden) VALUES (?, ?, ?, ?)',
          [personajeId, poder.nombre, poder.descripcion, orden++]
        );
      }
    }
  }

  return idsPorSlug;
}

async function sembrarRelaciones(idsPorSlug) {
  let creadas = 0;

  for (const r of RELACIONES) {
    const deId = idsPorSlug[r.de];
    const aId = idsPorSlug[r.a];
    if (!deId || !aId) continue;

    const [existente] = await pool.query(
      'SELECT id FROM relaciones_personajes WHERE personaje_id = ? AND personaje_relacionado_id = ?',
      [deId, aId]
    );
    if (existente.length > 0) continue;

    await pool.query(
      'INSERT INTO relaciones_personajes (personaje_id, personaje_relacionado_id, tipo_relacion, nota) VALUES (?, ?, ?, ?)',
      [deId, aId, r.tipoDeADestino, r.notaDeADestino || null]
    );
    await pool.query(
      'INSERT INTO relaciones_personajes (personaje_id, personaje_relacionado_id, tipo_relacion, nota) VALUES (?, ?, ?, ?)',
      [aId, deId, r.tipoDeDestinoADe, r.notaDestinoADe || null]
    );
    creadas++;
  }
  console.log(`  - ${creadas * 2} relaciones familiares creadas (de ${RELACIONES.length * 2} definidas).`);
}

async function sembrarHistorias(libroId, idsPersonajesPorSlug) {
  for (const h of HISTORIAS) {
    const [existente] = await pool.query('SELECT id FROM historias WHERE slug = ?', [h.slug]);
    let historiaId;

    if (existente.length > 0) {
      historiaId = existente[0].id;
      console.log(`  - Historia "${h.slug}" ya existía.`);
    } else {
      const [resultado] = await pool.query(
        `INSERT INTO historias (titulo, resumen, texto_completo, tipo, periodo, slug, es_preview, libro_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [h.titulo, h.resumen, h.texto_completo, h.tipo, h.periodo, h.slug, h.es_preview ? 1 : 0, libroId]
      );
      historiaId = resultado.insertId;
      console.log(`  - Historia "${h.slug}" creada.`);
    }

    // Personajes relacionados
    for (const rel of h.personajes) {
      const personajeId = idsPersonajesPorSlug[rel.slug];
      if (!personajeId) continue;
      await pool.query(
        'INSERT IGNORE INTO historia_personajes (historia_id, personaje_id, rol) VALUES (?, ?, ?)',
        [historiaId, personajeId, rel.rol]
      );
    }

    // Fuentes
    for (const fuente of h.fuentes) {
      const fuenteId = await obtenerOCrearFuente(fuente);
      await pool.query(
        'INSERT IGNORE INTO historia_fuentes (historia_id, fuente_id) VALUES (?, ?)',
        [historiaId, fuenteId]
      );
    }
  }
}

async function main() {
  console.log('Sembrando Mitología Nórdica: empezando...\n');

  console.log('1. Libro');
  const libroId = await obtenerOCrearLibro();

  console.log('\n2. Personajes, símbolos y poderes');
  const idsPersonajes = await sembrarPersonajes(libroId);

  console.log('\n3. Relaciones familiares');
  await sembrarRelaciones(idsPersonajes);

  console.log('\n4. Historias, personajes relacionados y fuentes');
  await sembrarHistorias(libroId, idsPersonajes);

  console.log('\nSiembra completa.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError durante la siembra:', error);
  process.exit(1);
});
