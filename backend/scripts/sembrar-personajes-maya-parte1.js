// ============================================================
// scripts/sembrar-personajes-maya-parte1.js
// ------------------------------------------------------------
// Primer lote de contenido para Mitologia Maya: 15 dioses y 5
// titanes/primordiales (la pareja/trio creador del Popol Vuh).
// Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-maya-parte1.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- DIOSES ---
  {
    tipo: 'dios', slug: 'itzamna', nombre: 'Itzamná', nombre_griego: 'Itzamná',
    epitetos: 'Señor de los Cielos, Dueño de la Escritura, Itzam Yeh',
    descripcion_corta: 'Dios supremo del cielo entre los mayas yucatecos — patrono de la escritura, la medicina y el saber, esposo de Ixchel.',
    descripcion_larga: `Itzamná es, para los mayas del Yucatán clásico y posclásico, el dios más elevado del panteón: un anciano de barba blanca asociado con el cielo entero, el día y la noche, capaz de tomar la forma de una serpiente celestial de dos cabezas que enmarca el horizonte. Se le atribuye haber enseñado a la humanidad la escritura jeroglífica, el calendario y las artes curativas, por lo que los sacerdotes y escribas lo veneraban como patrono directo de su oficio; su nombre se ha traducido como "casa de la lagartija" o "brujo del agua", en referencia a su vínculo con las fuerzas primordiales de la creación.
Como esposo de Ixchel, diosa de la luna y la medicina, Itzamná encarna el principio masculino y solar que complementa el ciclo lunar y curativo de su compañera. En algunas versiones tardías, ya influidas por el pensamiento colonial, se le identifica como hijo o emanación de Hunab Ku, un principio creador aún más abstracto; en la práctica religiosa cotidiana, sin embargo, era Itzamná —no una entidad remota— a quien los mayas invocaban directamente para pedir salud, buenas cosechas y sabiduría.`,
    origen: 'Dios celestial supremo del panteón maya yucateco, esposo de Ixchel.',
    dominio: 'El cielo, la escritura y la medicina', naturaleza: 'Dios creador y sabio', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'ixchel', nombre: 'Ixchel', nombre_griego: 'Ixchel',
    epitetos: 'Señora Arcoíris, Diosa de la Luna, Chak Chel',
    descripcion_corta: 'Diosa de la luna, la medicina, el tejido y el parto — venerada en la isla de Cozumel, tan generosa como capaz de destruir con inundaciones.',
    descripcion_larga: `Ixchel es la gran diosa lunar del panteón maya, protectora de las parteras, los curanderos y las tejedoras: se creía que gobernaba las mareas, la fertilidad femenina y el éxito de cada parto, por lo que su santuario en la isla de Cozumel —Ixchel significa "señora arcoíris"— se convirtió en uno de los destinos de peregrinación más importantes de toda la región maya, visitado por mujeres que cruzaban el mar en canoa para pedirle un embarazo seguro.
Los códices, sin embargo, también la representan bajo un aspecto muy distinto: como una anciana de garras felinas, vertiendo agua de una vasija volcada mientras una serpiente se enrosca en su cabeza, imagen asociada a inundaciones y destrucción —el mismo principio dual que rige a otras grandes diosas madre mesoamericanas, capaces tanto de dar vida como de arrasarla. Se le vinculaba también con el tejido: se le atribuía haber enseñado a las mujeres mayas el arte del telar de cintura, y las tejedoras la invocaban antes de comenzar cualquier pieza importante.`,
    origen: 'Diosa lunar, esposa de Itzamná, venerada especialmente en Cozumel.',
    dominio: 'La luna, la medicina y el tejido', naturaleza: 'Diosa madre y sanadora', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'kukulkan', nombre: 'Kukulkán', nombre_griego: 'Kukulkán',
    epitetos: 'Serpiente Emplumada, Señor del Viento',
    descripcion_corta: 'La serpiente emplumada maya, equivalente de Quetzalcoatl — dios del viento y Venus, asociado a la gran pirámide de Chichén Itzá.',
    descripcion_larga: `Kukulkán, "serpiente de plumas preciosas" en lengua maya yucateca, es la contraparte directa del Quetzalcoatl mexica y del Gucumatz k'iche', parte de una tradición de la serpiente emplumada compartida por buena parte de Mesoamérica. Se le asocia con el viento, la lluvia que anuncia la siembra y el planeta Venus, y se le atribuye haber traído consigo el conocimiento, el orden político y nuevas formas de gobierno a las ciudades mayas del posclásico, en una época de intenso contacto con los pueblos del centro de México.
Su templo más célebre es la gran pirámide de Kukulkán en Chichén Itzá, "El Castillo": construida con precisión astronómica, durante los equinoccios de primavera y otoño la sombra proyectada por los bordes de sus escalinatas dibuja el cuerpo ondulante de una serpiente que parece descender desde la cima hasta unirse con una cabeza de piedra tallada en la base, un efecto de luz y sombra que congrega hasta hoy a miles de visitantes cada año. Algunas crónicas coloniales identifican a Kukulkán también con un gobernante histórico-legendario que habría fundado o refundado la ciudad, fusionando en una sola figura al dios y al líder político que llevó su nombre.`,
    origen: 'Serpiente emplumada, equivalente maya de Quetzalcoatl, ligada a Chichén Itzá.',
    dominio: 'El viento, Venus y el conocimiento', naturaleza: 'Dios serpiente emplumada', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'chaac', nombre: 'Chaac', nombre_griego: 'Chaac',
    epitetos: 'Señor de la Lluvia, el del Hacha de Piedra',
    descripcion_corta: 'Dios de la lluvia y el rayo — golpea las nubes con su hacha de piedra para producir el trueno, imprescindible para el maíz.',
    descripcion_larga: `Chaac es, junto a Itzamná, una de las divinidades más antiguas y constantemente veneradas de toda la religión maya: gobierna la lluvia, el rayo y el trueno, fuerzas de las que dependía directamente la supervivencia de cualquier comunidad agrícola en tierras con estaciones secas severas. Se le representa con una nariz larga y curva, colmillos visibles y un hacha de piedra o serpiente en la mano, con la que golpea las nubes para producir el sonido del trueno y liberar la lluvia contenida en su interior.
Los mayas concebían no a un solo Chaac sino a cuatro, cada uno gobernando una dirección cardinal y asociado a un color propio —rojo al este, blanco al norte, negro al oeste, amarillo al sur—, un patrón cuatripartito que se repite en buena parte de la cosmología maya del espacio y el tiempo. Durante las sequías prolongadas, los sacerdotes organizaban ceremonias específicas conocidas como cha chaac, que incluían ofrendas en cenotes —pozos naturales considerados portales sagrados hacia las aguas subterráneas que Chaac también gobernaba— y que, en algunas regiones de Yucatán, todavía se practican hoy con elementos católicos entremezclados.`,
    origen: 'Dios de la lluvia de origen muy antiguo, representado en cuatro aspectos direccionales.',
    dominio: 'La lluvia, el rayo y el trueno', naturaleza: 'Dios de la tormenta', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'ah-puch', nombre: 'Ah Puch', nombre_griego: 'Ah Puch',
    epitetos: 'Señor de Mitnal, Yum Cimil, Kisin (entre los lacandones)',
    descripcion_corta: 'Dios de la muerte, señor del inframundo más profundo — se le representa como un cadáver o esqueleto adornado con campanillas.',
    descripcion_larga: `Ah Puch gobierna Mitnal, el nivel más bajo y temido del inframundo maya, un lugar de frío, hambre y agotamiento reservado a quienes morían de causas comunes, sin el privilegio de un destino especial en el más allá. Se le representa con el cuerpo descarnado o hinchado en descomposición, a menudo con campanillas atadas al cuerpo cuyo sonido anunciaba su cercanía, y suele aparecer en los códices acompañado por el búho y el perro, ambos considerados mensajeros de la muerte en la tradición maya.
A diferencia de otros dioses del panteón, Ah Puch rara vez recibía culto devocional positivo: era, sobre todo, una fuerza que debía aplacarse y mantenerse a distancia mediante ofrendas y rituales de protección, no una divinidad a la que se buscara complacer por afecto. Entre los mayas lacandones que sobreviven hasta hoy en la selva de Chiapas, una figura muy similar recibe el nombre de Kisin, "el que hiede", asociado tanto a la muerte como a los terremotos, y descrito como un enemigo directo del sol al que intenta apagar cada cierto tiempo.`,
    origen: 'Señor del inframundo más profundo, Mitnal.',
    dominio: 'La muerte y el inframundo', naturaleza: 'Dios de la muerte', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'yum-kaax', nombre: 'Yum Kaax', nombre_griego: 'Ah Mun',
    epitetos: 'Señor de los Montes, Dios Joven del Maíz',
    descripcion_corta: 'Dios joven del maíz, representado como una mazorca con rostro humano — su vida es tan frágil como la propia planta que encarna.',
    descripcion_larga: `Yum Kaax, "señor de los bosques" o "de las selvas", es el dios patrono del maíz y, por extensión, de toda la agricultura maya: se le representa siempre como un joven de belleza serena, a menudo con la cabeza rodeada de hojas verdes o directamente coronada por una mazorca germinando, en un vínculo visual directo entre su propio cuerpo y el cultivo que personifica. Su ciclo vital resume el de la milpa completa: nace, crece, es "cosechado" (simbólicamente sacrificado) y regresa a la tierra para germinar de nuevo al año siguiente.
En los códices se le muestra con frecuencia en conflicto con los dioses de la muerte y el inframundo, que amenazan constantemente con arrebatarle la vida antes de tiempo —una representación directa de la amenaza real que sequías, plagas o heladas suponían para la cosecha—. Los campesinos mayas realizaban ofrendas específicas en su honor al inicio de cada temporada de siembra, pidiendo su protección frente a esas mismas fuerzas destructivas, y su culto sobrevive hasta hoy, sincretizado, en numerosas comunidades agrícolas mayas contemporáneas.`,
    origen: 'Dios joven del maíz, en constante disputa con las fuerzas de la muerte.',
    dominio: 'El maíz y la agricultura', naturaleza: 'Dios de la fertilidad vegetal', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'ek-chuah', nombre: 'Ek Chuah', nombre_griego: 'Ek Chuah',
    epitetos: 'Estrella Negra, Señor del Cacao',
    descripcion_corta: 'Dios de los mercaderes, los caminos y el cacao — protector de las caravanas de comercio y, en su aspecto guerrero, patrono de la guerra.',
    descripcion_larga: `Ek Chuah, "estrella negra" o "escorpión negro", es el dios patrono de los mercaderes mayas, un gremio de enorme prestigio social encargado de recorrer largas rutas comerciales entre ciudades distantes cargando cacao, sal, obsidiana, plumas de quetzal y textiles. Se le representa de piel oscura, con un bastón de viajero y a menudo cargando un fardo de mercancías sobre la espalda, y era invocado antes de emprender cualquier expedición larga para asegurar un viaje seguro y un intercambio favorable.
Como patrono también del cacao —usado tanto como bebida ritual de élite como forma de moneda entre los mayas—, presidía además las plantaciones y la cosecha del grano, y algunos calendarios agrícolas señalaban fechas específicas dedicadas a rituales en su honor antes de la siembra de nuevos cacaotales. En su aspecto más marcial, Ek Chuah era invocado también como dios de la guerra, una dualidad que reflejaba el propio riesgo del comercio de larga distancia en una región donde las caravanas mercantiles debían cruzar frecuentemente territorio de ciudades rivales o en conflicto.`,
    origen: 'Dios patrono de los mercaderes y el cacao.',
    dominio: 'El comercio, los caminos y el cacao', naturaleza: 'Dios protector de viajeros', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'buluc-chabtan', nombre: 'Buluc Chabtán', nombre_griego: 'Buluc Chabtán',
    epitetos: 'El de las Once Fuerzas, Señor de la Violencia Súbita',
    descripcion_corta: 'Dios de la guerra, el fuego y la muerte violenta — su llegada en los almanaques del Códice de Madrid siempre anunciaba desgracia.',
    descripcion_larga: `Buluc Chabtán, cuyo nombre se traduce aproximadamente como "el de once fuerzas" o "el de once trabajos", es el dios asociado a la guerra, los incendios y toda forma de muerte repentina y violenta. Aparece con frecuencia en los almanaques adivinatorios del Códice de Madrid, donde su presencia en una fecha determinada se interpretaba como un presagio inequívocamente negativo: conflicto armado, destrucción por fuego o desastre inesperado.
A diferencia de Ah Puch, cuyo dominio es la muerte "natural" al final de una vida completa, Buluc Chabtán encarna específicamente la muerte que llega antes de tiempo, sin aviso ni causa aparente. Se le representa portando una lanza y, en algunas imágenes, con una antorcha encendida, doble símbolo de su capacidad tanto para destruir en batalla como para arrasar poblados enteros mediante el fuego —una amenaza especialmente temida en ciudades construidas mayormente con techos de palma.`,
    origen: 'Dios de la guerra y la muerte súbita, presente en los almanaques adivinatorios.',
    dominio: 'La guerra, el fuego y la muerte violenta', naturaleza: 'Dios de la destrucción repentina', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'ixtab', nombre: 'Ixtab', nombre_griego: 'Ixtab',
    epitetos: 'La de la Soga',
    descripcion_corta: 'Diosa que recibe en el paraíso a quienes mueren por su propia mano — no una figura de castigo, sino de consuelo.',
    descripcion_larga: `Ixtab es la diosa asociada al suicidio, representada en el Códice de Dresde colgando de una cuerda anudada al cielo, con los ojos cerrados y una marca oscura de descomposición en el rostro y el vientre. Lejos de encarnar un juicio moral negativo, Ixtab cumplía una función de consuelo: según los cronistas coloniales que registraron las creencias yucatecas, se creía que ella recibía personalmente en un paraíso especial —comparable al destino reservado a guerreros caídos o mujeres muertas en parto— a quienes habían decidido terminar con su propia vida, un destino considerado igual de honroso que morir en batalla o sacrificio.
Esta creencia reflejaba una actitud maya hacia la muerte marcada por múltiples destinos posibles según la causa del fallecimiento, en lugar de un único juicio moral universal aplicado a todos por igual. La existencia de una diosa dedicada específicamente a acoger a quienes se quitaban la vida —en vez de condenarlos— es uno de los rasgos más distintivos y menos comparables con otras mitologías mesoamericanas del panteón maya yucateco.`,
    origen: 'Diosa que acoge en un paraíso especial a quienes mueren por su propia mano.',
    dominio: 'El suicidio y su consuelo en el más allá', naturaleza: 'Diosa del descanso final', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'hun-came', nombre: 'Hun-Camé', nombre_griego: 'Hun-Camé',
    epitetos: 'Uno Muerte, Señor Supremo de Xibalbá',
    descripcion_corta: 'Uno de los dos señores supremos de Xibalbá, el inframundo k\'iche\' — antagonista principal del Popol Vuh, derrotado por los héroes gemelos.',
    descripcion_larga: `Hun-Camé, "Uno Muerte", gobierna Xibalbá —el inframundo de la tradición k'iche' registrada en el Popol Vuh— junto a su homólogo Vucub-Camé, "Siete Muerte". Juntos presiden un consejo de doce señores menores, cada uno especializado en una forma distinta de sufrimiento humano —enfermedad, hambre, frío, terror repentino—, y convocan a los mortales que se atreven a jugar demasiado ruidosamente al juego de pelota sobre sus dominios subterráneos, exigiéndoles enfrentar una serie de casas de tormento diseñadas para destruirlos.
Fue Hun-Camé quien, junto a Vucub-Camé, ordenó la muerte de Hun-Hunahpú y Vucub-Hunahpú, la generación anterior de héroes gemelos, colgando la cabeza del primero en un árbol de calabazas como advertencia. Cuando los hijos de Hun-Hunahpú, Hunahpú e Ixbalanqué, descienden después a vengar a su padre, es Hun-Camé quien cae en la trampa final ideada por los gemelos: al pedir ser "sacrificado y revivido" como ellos aparentaban poder hacer entre sí mismos, es sacrificado de verdad, sin regreso, poniendo fin al dominio absoluto de Xibalbá sobre la superficie.`,
    origen: 'Señor supremo de Xibalbá, junto a Vucub-Camé.',
    dominio: 'El inframundo k\'iche\' y sus doce señores', naturaleza: 'Dios de la muerte y el engaño', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'vucub-came', nombre: 'Vucub-Camé', nombre_griego: 'Vucub-Camé',
    epitetos: 'Siete Muerte, Señor Supremo de Xibalbá',
    descripcion_corta: 'El segundo de los dos señores supremos de Xibalbá — junto a Hun-Camé, orquesta cada prueba y trampa contra los héroes gemelos.',
    descripcion_larga: `Vucub-Camé, "Siete Muerte", comparte con Hun-Camé el gobierno supremo de Xibalbá, y juntos son los responsables de convocar y poner a prueba a todo mortal que ose desafiar el silencio subterráneo de su reino. En el Popol Vuh, es él quien diseña buena parte de las trampas específicas contra los héroes: los bancos de piedra ardiente ofrecidos como asiento de bienvenida, la primera de muchas humillaciones destinadas a exponer a los visitantes como ingenuos ante el consejo completo de señores de la muerte.
Su destino queda entrelazado por completo con el de Hun-Camé: ambos son engañados de la misma manera al final del relato, pidiendo ser sacrificados por los gemelos disfrazados de vagabundos milagrosos, convencidos de que después serían revividos como habían presenciado con otras víctimas de la demostración. Pero Hunahpú e Ixbalanqué no los reviven: con la muerte real de ambos señores supremos, el resto de los doce señores menores de Xibalbá quedan sometidos, despojados para siempre de su antiguo poder sobre los mortales que erraban en su territorio.`,
    origen: 'Señor supremo de Xibalbá, junto a Hun-Camé.',
    dominio: 'El inframundo k\'iche\' y sus doce señores', naturaleza: 'Dios de la muerte y el engaño', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'bacab', nombre: 'Los Bacab', nombre_griego: 'Bacab',
    epitetos: 'Los Cuatro Sostenedores del Cielo',
    descripcion_corta: 'Cuatro hermanos divinos que sostienen cada esquina del cielo maya, uno por cada dirección cardinal y su color correspondiente.',
    descripcion_larga: `Los Bacab son cuatro divinidades hermanas —a veces descritas como cuatro aspectos de un mismo dios— colocadas por Itzamná en cada una de las cuatro esquinas del mundo tras la creación, con la tarea eterna de sostener el peso del cielo sobre sus hombros para impedir que se derrumbe sobre la tierra. Cada uno gobierna una dirección cardinal y un color propio: Hobnil (este, rojo), Can Tzicnal (norte, blanco), Zac Cimi (oeste, negro) y Hozanek (sur, amarillo), el mismo esquema cuatripartito de colores que rige también a los cuatro Chaac de la lluvia.
Los mayas asociaban además a los Bacab con los cinco días adicionales del calendario solar de 365 días —los llamados días "sin nombre" o wayeb, considerados peligrosos e impredecibles— y con el año nuevo maya, cuya llegada dependía de cuál de los cuatro Bacab tomara turno de gobierno para el año entrante. Su presencia constante y silenciosa en cada esquina del cosmos los convertía en garantes literales, físicos, de que el mundo entero se mantuviera en pie.`,
    origen: 'Cuatro hermanos colocados por Itzamná en las esquinas del mundo tras la creación.',
    dominio: 'Las cuatro esquinas del cielo', naturaleza: 'Dioses sostenedores del cosmos', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'kinich-ahau', nombre: 'Kinich Ahau', nombre_griego: 'Kinich Ahau',
    epitetos: 'Señor de Ojo Solar, Rostro del Sol',
    descripcion_corta: 'Dios del sol en su aspecto de mediodía, de rostro cuadrado y ojos bizcos — recorre el cielo de día y se convierte en jaguar bajo la tierra de noche.',
    descripcion_larga: `Kinich Ahau, "señor de ojo solar", es la personificación del sol en su momento de mayor fuerza, el mediodía, representado con un rostro cuadrado de rasgos marcadamente bizcos —un ideal estético maya asociado a la nobleza— y una gran nariz aguileña. Recorre el cielo durante el día para, al llegar la noche, descender al inframundo y transformarse en un jaguar —el llamado "Jaguar Nocturno del Inframundo"— que debe atravesar Xibalbá luchando contra sus peligros antes de poder resurgir al amanecer siguiente por el horizonte oriental.
En algunas tradiciones se le identifica como un aspecto más de Itzamná bajo su advocación solar, mientras que en otras aparece como una divinidad independiente con culto propio, especialmente vinculado a la realeza: varios gobernantes mayas, entre ellos figuras de Copán y Palenque, incorporaron el glifo de Kinich Ahau a sus propios nombres de gobierno para reclamar una legitimidad de origen directamente solar.`,
    origen: 'Aspecto solar del mediodía, vinculado a Itzamná y a la legitimidad de los gobernantes.',
    dominio: 'El sol de mediodía', naturaleza: 'Dios solar', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'ah-mucen-cab', nombre: 'Ah Mucen Cab', nombre_griego: 'Ah Mucen Cab',
    epitetos: 'Señor de la Miel Escondida, Dios Descendente',
    descripcion_corta: 'Dios de las abejas y la miel — se le representa cayendo cabeza abajo desde el cielo, patrono de los apicultores mayas.',
    descripcion_larga: `Ah Mucen Cab es el dios patrono de la apicultura, una actividad de enorme importancia económica y ritual entre los mayas yucatecos, que domesticaban abejas nativas sin aguijón (Melipona) para producir miel y cera usadas tanto en la alimentación como en ofrendas religiosas y la elaboración del balché, una bebida ritual fermentada. Se le representa de forma muy particular: descendiendo del cielo cabeza abajo, con las piernas en el aire, una postura que algunos investigadores relacionan con el vuelo mismo de las abejas al entrar y salir de la colmena.
Su culto incluía calendarios apícolas propios que marcaban las fechas más favorables para cosechar la miel sin dañar las colmenas, y los apicultores le realizaban ofrendas específicas al inicio de cada temporada de recolección. En algunas regiones se le vincula o confunde con Ek Chuah, dado que la miel y la cera —al igual que el cacao— circulaban también como bienes de intercambio comercial de alto valor entre distintas ciudades mayas.`,
    origen: 'Dios patrono de la apicultura y la miel.',
    dominio: 'Las abejas y la miel', naturaleza: 'Dios de la abundancia dulce', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'xaman-ek', nombre: 'Xamán Ek', nombre_griego: 'Xamán Ek',
    epitetos: 'Estrella del Norte, Guía de los Caminos',
    descripcion_corta: 'Dios de la estrella polar — guía nocturno de mercaderes y viajeros que debían orientarse cruzando la selva o el mar en la oscuridad.',
    descripcion_larga: `Xamán Ek, "estrella del norte", es la divinización directa de la estrella polar, el único punto fijo del cielo nocturno alrededor del cual parecen girar todas las demás estrellas. Para un pueblo que dependía de largas rutas comerciales terrestres a través de la selva y marítimas a lo largo de la costa —muchas de ellas recorridas de noche para evitar el calor del día—, contar con un punto de referencia inmóvil en el cielo tenía un valor práctico inmenso, y Xamán Ek se convirtió en el dios protector directo de esos viajes.
Se le representaba con frecuencia como una pequeña figura tallada en piedras colocadas junto a los caminos principales, ante las cuales los viajeros dejaban ofrendas de copal antes de emprender una ruta larga o peligrosa. A diferencia de Ek Chuah, más asociado al éxito del intercambio comercial en sí, Xamán Ek se centraba específicamente en la seguridad del trayecto: llegar completo, sin perderse ni caer en manos de bandidos, era su dominio particular dentro del amplio mundo del comercio maya.`,
    origen: 'Divinización de la estrella polar, guía de caminos nocturnos.',
    dominio: 'La orientación y los viajes nocturnos', naturaleza: 'Dios guía', es_preview: 0
  },

  // --- TITANES / PRIMORDIALES ---
  {
    tipo: 'titan', slug: 'hurakan', nombre: 'Hurakán', nombre_griego: 'Uk\'u\'x Kaj',
    epitetos: 'Corazón del Cielo, el de la Pierna Única',
    descripcion_corta: 'El "Corazón del Cielo" del Popol Vuh — dios primordial del viento, la tormenta y el rayo, creador del mundo junto a Gucumatz y Tepeu.',
    descripcion_larga: `Hurakán, cuyo nombre dio origen a la palabra "huracán" en español y en otras lenguas del mundo, es descrito en el Popol Vuh como Uk'u'x Kaj, el "Corazón del Cielo", una entidad primordial compuesta en realidad de tres manifestaciones del rayo: Caculhá Hurakán (el relámpago de un solo destello), Chipi-Caculhá (el relámpago pequeño) y Raxa-Caculhá (el relámpago verde o muy brillante). Junto a Gucumatz, la serpiente emplumada de las aguas, Hurakán pronuncia las primeras palabras de la creación sobre la superficie vacía y oscura del mar primordial, haciendo emerger la tierra firme, las montañas y los valles con solo nombrarlos.
Tras la creación del paisaje, Hurakán participa activamente en los sucesivos intentos de crear seres capaces de honrar a los dioses con palabras y ofrendas: los animales, que no pueden hablar; los hombres de barro, que se deshacen; los hombres de madera, insensibles y sin memoria, a quienes finalmente destruye mediante un gran diluvio cuando resultan indignos. Es también Hurakán quien, en el ciclo de los héroes gemelos, sopla la niebla final sobre los ojos de los primeros hombres verdaderos —hechos de maíz— para limitar su vista y su conocimiento, evitando que igualen a los propios dioses.`,
    origen: 'El "Corazón del Cielo", entidad primordial del rayo y la tormenta.',
    dominio: 'El viento, el rayo y la creación del mundo', naturaleza: 'Dios primordial creador', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'gucumatz', nombre: 'Gucumatz', nombre_griego: 'Q\'uq\'umatz',
    epitetos: 'Serpiente Emplumada de las Aguas',
    descripcion_corta: 'La serpiente emplumada k\'iche\', creadora del mundo junto a Hurakán — precursora directa del Kukulkán yucateco y el Quetzalcoatl mexica.',
    descripcion_larga: `Gucumatz —Q'uq'umatz en su transcripción más fiel al k'iche'— es la serpiente emplumada de la tradición del Popol Vuh, envuelta en plumas de quetzal y capaz de nadar por las aguas primordiales antes de que existiera tierra firme alguna. Junto a Hurakán, el "Corazón del Cielo", y bajo el consejo de Tepeu, Gucumatz participa en cada etapa de la creación: nombra la tierra y hace que emerja del mar, colabora en los sucesivos intentos de formar seres capaces de venerar a los dioses, y finalmente contribuye a moler el maíz con el que Xmucane dará forma a la carne de los primeros hombres verdaderos.
Su figura es la raíz directa de la tradición de la serpiente emplumada que después se identificaría como Kukulkán entre los mayas yucatecos y como Quetzalcoatl entre los pueblos del centro de México, un culto compartido a lo largo de toda Mesoamérica cuya versión más antigua registrada por escrito es, precisamente, la de este texto k'iche' colonial temprano. A diferencia de Hurakán, asociado a la fuerza destructiva y creativa del rayo, Gucumatz representa el elemento acuático y sereno de la creación —el agua que da forma antes que la tormenta que sacude.`,
    origen: 'Serpiente emplumada de las aguas primordiales, co-creador junto a Hurakán y Tepeu.',
    dominio: 'Las aguas primordiales y la creación', naturaleza: 'Dios primordial creador', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'tepeu', nombre: 'Tepeu', nombre_griego: 'Tepew',
    epitetos: 'El Soberano',
    descripcion_corta: 'El "Soberano" del Popol Vuh, tercer miembro del consejo creador junto a Hurakán y Gucumatz — la autoridad que delibera antes de cada creación.',
    descripcion_larga: `Tepeu, "el Soberano" o "el Conquistador", completa junto a Hurakán y Gucumatz el trío de entidades creadoras que abren el Popol Vuh, deliberando en la oscuridad primordial sobre cómo dar forma al mundo y, sobre todo, a seres capaces de nombrar y venerar a sus propios creadores. Mientras Hurakán aporta el poder de la tormenta y Gucumatz la fluidez de las aguas, Tepeu representa la autoridad deliberativa: es descrito una y otra vez junto a Gucumatz como quienes "hablan y se ponen de acuerdo", el proceso consultivo que precede a cada acto de creación en el texto.
Su nombre, emparentado con raíces nahuas relacionadas con el gobierno y la conquista, sugiere una influencia cultural del centro de México sobre la tradición k'iche' registrada en el Popol Vuh, reflejo del intenso intercambio entre ambas regiones en los siglos previos a la conquista española. Tepeu no actúa casi nunca en solitario en el texto: su presencia es siempre colectiva, parte indisociable del consejo creador, subrayando que —a diferencia de otras cosmogonías con un único dios supremo— la creación maya k'iche' es, desde su primera línea, un acto deliberado y compartido entre varias voces divinas.`,
    origen: 'El "Soberano", tercer miembro del consejo creador del Popol Vuh.',
    dominio: 'La autoridad deliberativa de la creación', naturaleza: 'Dios primordial creador', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'xmucane', nombre: 'Xmucané', nombre_griego: 'Ixmukane',
    epitetos: 'La Abuela, Diosa de la Molienda',
    descripcion_corta: 'La abuela divina y adivina que muele el maíz para dar forma a los primeros hombres verdaderos — bisabuela de los héroes gemelos.',
    descripcion_larga: `Xmucané es, junto a su esposo Xpiacoc, una de las dos deidades ancianas del Popol Vuh, consultadas por el consejo creador para adivinar mediante granos de maíz y semillas de tzité si un nuevo intento de crear seres humanos tendrá éxito. Es ella quien, tras la creación fallida de los hombres de barro y de madera, muele el maíz blanco y amarillo traído desde Paxil, la "montaña partida", y con esa masa —mezclada con agua para darle forma de carne y músculo— da origen a la sustancia con la que se moldean los primeros cuatro hombres verdaderos.
Su papel se extiende mucho más allá de la creación general de la humanidad: es abuela directa de Hun-Hunahpú y Vucub-Hunahpú, y por tanto bisabuela de los héroes gemelos Hunahpú e Ixbalanqué, a quienes cría tras la muerte de su padre en Xibalbá sin revelarles inicialmente el destino trágico de su progenitor. Su nombre, relacionado con la raíz "muc" (esconder u ocultar), refleja tanto su papel de guardiana silenciosa de secretos familiares como su función de partera y adivina, capaz de ver lo que otros no pueden.`,
    origen: 'Abuela divina, esposa de Xpiacoc, adivina y creadora de la carne humana.',
    dominio: 'La adivinación y la creación de la humanidad', naturaleza: 'Diosa ancestral', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'xpiacoc', nombre: 'Xpiyacoc', nombre_griego: 'Xpiyacoc',
    epitetos: 'El Abuelo, Dios de la Molienda',
    descripcion_corta: 'El abuelo divino y adivino que, junto a Xmucané, orienta cada intento de creación en el Popol Vuh con granos de maíz sagrado.',
    descripcion_larga: `Xpiyacoc es el compañero de Xmucané, formando junto a ella la pareja de ancianos sabios que el consejo creador del Popol Vuh consulta antes de cada etapa importante de la creación del mundo. Ambos comparten el título de "abuela de día, abuelo de día", una fórmula que refleja su papel como los primeros adivinos, capaces de leer el destino a través de granos de maíz y semillas de tzité lanzados sobre una superficie, un método de adivinación que los propios sacerdotes mayas seguirían practicando siglos después.
A diferencia de otras parejas creadoras primordiales de otras mitologías mesoamericanas, Xpiyacoc y Xmucané no gobiernan un dominio cósmico específico como el cielo o la tierra: su función es explícitamente consultiva y ritual, la de un consejo de ancianos cuya sabiduría acumulada guía las decisiones de entidades más jóvenes y poderosas como Hurakán, Gucumatz y Tepeu. Su vínculo familiar con los héroes gemelos —abuelos de su padre y por tanto bisabuelos de Hunahpú e Ixbalanqué— entrelaza el mito de la creación general del cosmos con la saga heroica particular que domina la segunda mitad del Popol Vuh.`,
    origen: 'Abuelo divino, esposo de Xmucané, adivino consultado por el consejo creador.',
    dominio: 'La adivinación ritual', naturaleza: 'Dios ancestral', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-maya'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-maya" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando dioses y titanes de Mitologia Maya (parte 1)...\n');
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
