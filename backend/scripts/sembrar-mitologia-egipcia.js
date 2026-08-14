// ============================================================
// scripts/sembrar-mitologia-egipcia.js
// ------------------------------------------------------------
// Segundo libro del catalogo: Mitologia Egipcia. Crea la fila en
// "libros" y carga personajes + historias (con simbolos, poderes,
// relaciones familiares, fuentes egiptologicas reales y los vinculos
// historia<->personaje), todo con libro_id apuntando a este libro.
//
// Idempotente como el resto de los scripts de este proyecto: cada
// insercion revisa primero si ya existe (por slug/nombre), asi se
// puede volver a correr sin duplicar nada si se corta a mitad de
// camino.
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/sembrar-mitologia-egipcia.js
// ============================================================

const pool = require('../config/db');

const LIBRO = {
  slug: 'mitologia-egipcia',
  titulo: 'Mitología Egipcia',
  subtitulo: 'Dioses, faraones y el viaje del sol',
  descripcion: 'Dioses, seres primordiales, monstruos y héroes del antiguo Egipto: la muerte y resurrección de Osiris, la lucha de Horus contra Set, el viaje nocturno de Ra y el juicio de los muertos.',
  estado: 'publicado'
};

// ------------------------------------------------------------
// PERSONAJES
// ------------------------------------------------------------
const PERSONAJES = [
  {
    slug: 'ra', tipo: 'dios', nombre: 'Ra', nombre_griego: 'Rꜥ',
    epitetos: 'Señor de Todo, el Sol Naciente', naturaleza: 'dios solar', es_preview: 1,
    descripcion_corta: 'Dios del sol y rey de los dioses, que cruza el cielo cada día y combate el caos cada noche.',
    descripcion_larga: 'Ra es el sol mismo: surgió por sí solo de las aguas primigenias de Nun y desde entonces cruza el cielo a diario a bordo de su barca solar, la Mesektet. Nace cada mañana como el escarabajo Jepri, brilla al mediodía en su plenitud, y muere cada tarde como un anciano para renacer al amanecer siguiente. Durante la noche, su barca atraviesa el Duat, el inframundo, donde debe enfrentar a la serpiente del caos Apofis para que el sol pueda volver a salir. Como rey de los dioses gobernó Egipto en tiempos antiguos, y aunque más tarde cedió el trono terrenal, ningún otro dios lo sobrepasa en poder. Su nombre secreto, que solo él conocía, le daba una autoridad que ni Isis pudo arrebatarle del todo sin recurrir al engaño.',
    origen: 'Autoengendrado de las aguas de Nun sobre el montículo primigenio',
    dominio: 'El sol, la creación, la realeza',
    simbolos: ['Disco solar', 'Ojo de Ra', 'Escarabajo sagrado'],
    poderes: [
      { nombre: 'Luz creadora', descripcion: 'Su luz da origen y sostiene la vida en el mundo.' },
      { nombre: 'Viaje por el inframundo', descripcion: 'Cruza el Duat cada noche y regresa renovado cada amanecer.' }
    ]
  },
  {
    slug: 'osiris', tipo: 'dios', nombre: 'Osiris', nombre_griego: 'Wsjr',
    epitetos: 'Señor del Más Allá, el Dios Verde', naturaleza: 'dios del más allá', es_preview: 0,
    descripcion_corta: 'Primer rey de Egipto, asesinado por su hermano Set y resucitado por Isis para gobernar el reino de los muertos.',
    descripcion_larga: 'Osiris fue el primer rey de Egipto: enseñó a su pueblo la agricultura, las leyes y el culto a los dioses, llevando la civilización a un mundo que antes vivía en la barbarie. Su hermano Set, consumido por la envidia, lo asesinó y despedazó su cuerpo para impedir que descansara en paz. Solo la devoción de su esposa Isis, que recorrió Egipto entero reuniendo los pedazos y devolviéndole la vida con su magia, le permitió engendrar a Horus antes de retirarse definitivamente al más allá. Desde entonces Osiris reina sobre el reino de los muertos, con la piel verde del renuevo vegetal y del Nilo que se desborda, símbolo de que la muerte no es el final sino el paso hacia otra vida. Cada faraón difunto se identifica con él en el momento de morir, así como cada faraón vivo se identifica con su hijo Horus.',
    origen: 'Hijo de Geb (la Tierra) y Nut (el Cielo)',
    dominio: 'El más allá, la resurrección, la agricultura',
    simbolos: ['Cayado y mayal', 'Pilar Dyed', 'Corona Atef'],
    poderes: [
      { nombre: 'Resurrección', descripcion: 'Murió y regresó a la vida el tiempo suficiente para engendrar un heredero.' },
      { nombre: 'Juicio de los muertos', descripcion: 'Preside el tribunal donde se pesa el corazón de cada alma.' }
    ]
  },
  {
    slug: 'isis', tipo: 'dios', nombre: 'Isis', nombre_griego: 'Ꜣst',
    epitetos: 'La Gran Maga, Madre de los Dioses', naturaleza: 'diosa de la magia', es_preview: 1,
    descripcion_corta: 'Diosa de la magia y esposa de Osiris, cuya devoción lo devolvió a la vida y protegió a su hijo Horus de niño.',
    descripcion_larga: 'Isis es la maga más poderosa entre los dioses, capaz de doblegar hasta la voluntad del propio Ra. Cuando Set asesinó y despedazó a su esposo Osiris, Isis recorrió el Nilo entero transformada en ave para reunir cada fragmento de su cuerpo, y con hechizos que ella misma inventó le devolvió el aliento el tiempo justo para concebir a Horus. Después se ocultó en los pantanos de Jemis para criar a su hijo lejos del alcance de Set, protegiéndolo con encantamientos de todo peligro —serpientes, escorpiones y la propia furia de su tío—. Su amor y su astucia la llevaron incluso a engañar a Ra: creó una serpiente venenosa con el propio polvo pisado por el dios del sol, y solo aceptó curarlo del veneno a cambio de que le revelara su nombre secreto, la fuente última de su poder.',
    origen: 'Hija de Geb y Nut',
    dominio: 'La magia, la maternidad, la protección',
    simbolos: ['Trono jeroglífico', 'Nudo de Isis (tyet)', 'Cuernos de vaca con disco solar'],
    poderes: [
      { nombre: 'Magia suprema', descripcion: 'Sus hechizos superan incluso los de Ra.' },
      { nombre: 'Resurrección', descripcion: 'Devolvió la vida a Osiris con sus propios encantamientos.' }
    ]
  },
  {
    slug: 'set', tipo: 'dios', nombre: 'Set', nombre_griego: 'Stẖ',
    epitetos: 'Señor del Desierto y las Tormentas', naturaleza: 'dios del caos', es_preview: 0,
    descripcion_corta: 'Dios del desierto y el caos que asesinó a su hermano Osiris y luchó décadas contra Horus por el trono.',
    descripcion_larga: 'Set encarna todo lo hostil e impredecible: el desierto árido, las tormentas de arena, el caos que amenaza el orden del mundo. Envidioso de que su hermano Osiris gobernara Egipto, lo engañó para que se metiera en un cofre a su medida, lo selló y lo arrojó al Nilo; cuando Isis recuperó el cuerpo, Set lo despedazó en catorce pedazos para asegurarse de que nunca descansara. Años después libró una guerra de décadas contra Horus, el hijo de Osiris, por el derecho al trono de Egipto, una contienda de duelos, trampas y transformaciones que solo terminó cuando el tribunal de los dioses falló a favor de Horus. Sin embargo Set no es un villano simple: cada noche viaja de pie en la barca solar de Ra para enfrentar con su lanza a la serpiente Apofis, la única fuerza capaz de detener al caos siendo él mismo una fuerza del caos.',
    origen: 'Hijo de Geb y Nut',
    dominio: 'El caos, el desierto, las tormentas',
    simbolos: ['El animal Set', 'Cetro Uas'],
    poderes: [
      { nombre: 'Fuerza descomunal', descripcion: 'Su fuerza supera a la de cualquier otro dios.' },
      { nombre: 'Dominio de la tormenta', descripcion: 'Provoca truenos y tempestades de arena.' }
    ]
  },
  {
    slug: 'horus', tipo: 'dios', nombre: 'Horus', nombre_griego: 'Ḥr',
    epitetos: 'El de las Alas Extendidas, Señor del Cielo', naturaleza: 'dios del cielo', es_preview: 1,
    descripcion_corta: 'Dios halcón, hijo de Osiris e Isis, que venga a su padre y gana el trono de Egipto tras derrotar a Set.',
    descripcion_larga: 'Horus es el cielo mismo: su ojo derecho es el sol y el izquierdo la luna, y sus alas extendidas cubren Egipto entero. Criado en secreto por su madre Isis entre los juncos de los pantanos, creció sabiendo que su destino era vengar a su padre Osiris y reclamar el trono que Set le había arrebatado. Durante ochenta años se enfrentó a su tío en duelos de todo tipo —combates de hipopótamos bajo el agua, carreras de barcas de piedra, transformaciones y engaños— hasta que perdió un ojo en la lucha, el cual Thot le devolvió curado. El tribunal de los dioses finalmente falló a su favor, y desde entonces cada faraón vivo de Egipto es considerado la encarnación terrenal de Horus, así como cada faraón muerto se convierte en Osiris.',
    origen: 'Hijo de Osiris e Isis, concebido tras la resurrección de su padre',
    dominio: 'El cielo, la realeza, la venganza justa',
    simbolos: ['Ojo Udyat', 'El halcón', 'La doble corona'],
    poderes: [
      { nombre: 'Vuelo celestial', descripcion: 'Surca el cielo en forma de halcón.' },
      { nombre: 'El Ojo de Horus', descripcion: 'Su ojo restaurado es símbolo de protección y curación.' }
    ]
  },
  {
    slug: 'anubis', tipo: 'dios', nombre: 'Anubis', nombre_griego: 'Jnpw',
    epitetos: 'El que Está Sobre el Monte Sagrado, Señor de la Necrópolis', naturaleza: 'dios del más allá', es_preview: 0,
    descripcion_corta: 'Dios chacal del embalsamamiento, que guía a las almas y pesa sus corazones en el tribunal de los muertos.',
    descripcion_larga: 'Anubis nació de un engaño: su madre Neftis, esposa de Set, tomó la forma de Isis para seducir a Osiris, y de esa unión nació el dios de cabeza de chacal. Temiendo la ira de Set, Neftis abandonó al niño, e Isis lo encontró y lo crió como propio. Anubis se convirtió en el guardián de la necrópolis y el inventor del arte de embalsamar: fue él quien envolvió el cuerpo despedazado de Osiris devolviéndole una forma digna antes de que Isis lo resucitara. En el más allá, es Anubis quien conduce a cada alma ante el tribunal y sostiene personalmente la balanza donde se pesa el corazón del difunto contra la pluma de la verdad de Maat, decidiendo con total imparcialidad si esa alma merece la vida eterna en los Campos de Ialu o ser devorada por Amit.',
    origen: 'Hijo de Osiris y Neftis',
    dominio: 'El embalsamamiento, el más allá, la justicia funeraria',
    simbolos: ['Chacal negro', 'Balanza de la justicia'],
    poderes: [
      { nombre: 'Guía de las almas', descripcion: 'Conduce a los muertos a través del Duat.' },
      { nombre: 'Momificación', descripcion: 'Preserva los cuerpos para la vida eterna.' }
    ]
  },
  {
    slug: 'thot', tipo: 'dios', nombre: 'Thot', nombre_griego: 'Ḏḥwty',
    epitetos: 'Señor de la Sabiduría, Escriba de los Dioses', naturaleza: 'dios de la sabiduría', es_preview: 0,
    descripcion_corta: 'Dios ibis de la escritura y la luna, mediador entre los dioses y registrador del juicio de los muertos.',
    descripcion_larga: 'Thot inventó la escritura jeroglífica y con ella el conocimiento mismo: es el escriba, el bibliotecario y el árbitro de los dioses. Durante la larga contienda entre Horus y Set fue Thot quien sanó el ojo de Horus arrancado en batalla y quien, con paciencia infinita, medió entre ambos bandos hasta lograr un veredicto. En el tribunal del más allá es Thot quien registra por escrito el resultado de cada pesaje del corazón, garantizando que el juicio quede asentado para siempre. Se dice que existe un libro escrito por su propia mano que contiene hechizos capaces de dar a un mortal el poder de entender el lenguaje de los animales y de los dioses —un libro tan peligroso que fue escondido en el fondo del Nilo, custodiado por serpientes, hasta que el príncipe Setna Jaemuaset se atrevió a robarlo.',
    origen: 'Uno de los dioses más antiguos, presente desde los primeros tiempos',
    dominio: 'La sabiduría, la escritura, la luna',
    simbolos: ['El ibis', 'La luna creciente', 'La paleta de escriba'],
    poderes: [
      { nombre: 'Conocimiento absoluto', descripcion: 'Posee el saber de todas las cosas escritas y por escribir.' },
      { nombre: 'Magia de la palabra', descripcion: 'Sus hechizos actúan a través del lenguaje mismo.' }
    ]
  },
  {
    slug: 'maat', tipo: 'dios', nombre: 'Maat', nombre_griego: 'Mꜣꜥt',
    epitetos: 'La Pluma de la Verdad', naturaleza: 'diosa de la justicia', es_preview: 0,
    descripcion_corta: 'Diosa y personificación de la verdad y el orden cósmico, cuya pluma decide el destino de cada alma.',
    descripcion_larga: 'Maat no es solo una diosa sino la idea misma de que el universo tiene un orden correcto: la verdad, la justicia y el equilibrio entre todas las cosas. Cada faraón juraba gobernar "según Maat", y su ausencia se consideraba la peor de las catástrofes, capaz de traer hambrunas y caos. En el tribunal del más allá, el corazón de cada persona fallecida se coloca en un platillo de la balanza de Anubis, y en el otro se coloca una única pluma de avestruz que representa a Maat: solo un corazón tan liviano como esa pluma, libre del peso de las malas acciones, puede pasar al reino de Osiris. Su presencia silenciosa preside cada uno de los grandes mitos egipcios como el recordatorio de que incluso los dioses deben responder ante el equilibrio del mundo.',
    origen: 'Presente desde la creación como principio del orden cósmico',
    dominio: 'La verdad, la justicia, el equilibrio del mundo',
    simbolos: ['La pluma de avestruz'],
    poderes: [
      { nombre: 'El juicio final', descripcion: 'Su pluma determina el destino de cada alma.' }
    ]
  },
  {
    slug: 'hathor', tipo: 'dios', nombre: 'Hathor', nombre_griego: 'Ḥwt-ḥr',
    epitetos: 'La Casa de Horus, Señora de la Alegría', naturaleza: 'diosa del amor', es_preview: 1,
    descripcion_corta: 'Diosa vaca del amor, la música y la maternidad, nodriza de Horus y esposa suya en la tradición de Edfu.',
    descripcion_larga: 'Hathor es la alegría hecha diosa: patrona de la música, la danza, el amor y la ebriedad festiva, se la representa como una vaca celestial o como una mujer con cuernos de vaca y el disco solar entre ellos. Amamantó y protegió al joven Horus en los pantanos, y en los templos de Edfu se la celebra como su esposa, unida a él cada año en una procesión sagrada que recorría el Nilo. Pero Hathor tiene también un rostro terrible: cuando Ra, ya anciano, decidió castigar a la humanidad por conspirar contra él, fue el Ojo de Ra transformado en Hathor —y después en la más feroz Sejmet— quien descendió a masacrar a los rebeldes, hasta que el propio Ra, arrepentido, tuvo que idear un engaño para detener la matanza que él mismo había ordenado.',
    origen: 'Hija de Ra',
    dominio: 'El amor, la música, la maternidad',
    simbolos: ['Cuernos de vaca con disco solar', 'El sistro'],
    poderes: [
      { nombre: 'Alegría y fertilidad', descripcion: 'Bendice el amor, la música y la maternidad.' },
      { nombre: 'El Ojo de Ra', descripcion: 'Puede volverse un instrumento de destrucción cuando su padre lo requiere.' }
    ]
  },
  {
    slug: 'sejmet', tipo: 'dios', nombre: 'Sejmet', nombre_griego: 'Sḫmt',
    epitetos: 'La Poderosa, Señora de la Pestilencia', naturaleza: 'diosa de la guerra', es_preview: 0,
    descripcion_corta: 'Diosa leona de la guerra, forma feroz del Ojo de Ra que estuvo a punto de exterminar a la humanidad entera.',
    descripcion_larga: 'Sejmet es la furia de Ra hecha carne: cuando los seres humanos conspiraron contra el dios sol ya envejecido, él envió a su Ojo a castigarlos, y el Ojo tomó la forma de una leona imparable. Sejmet se lanzó sobre la humanidad con tal ferocidad que empezó a vadear en la sangre de sus víctimas, y ni siquiera las órdenes de Ra de detenerse lograban aplacarla —su sed de destrucción había cobrado voluntad propia—. Los dioses, alarmados de que no quedara un solo ser humano vivo, tiñeron de rojo miles de jarras de cerveza y las derramaron por los campos: Sejmet, creyendo que era sangre, bebió hasta emborracharse y se quedó dormida, salvando así al resto de la humanidad. Pese a su naturaleza destructiva, también se la invoca como diosa sanadora, capaz de curar las mismas plagas que provoca.',
    origen: 'El Ojo de Ra en su forma más violenta',
    dominio: 'La guerra, la destrucción, la curación de plagas',
    simbolos: ['Cabeza de leona', 'El disco solar'],
    poderes: [
      { nombre: 'Furia destructiva', descripcion: 'Su ataque es prácticamente imposible de detener una vez comenzado.' },
      { nombre: 'Sanación', descripcion: 'Puede curar las mismas enfermedades que desata.' }
    ]
  },
  {
    slug: 'bastet', tipo: 'dios', nombre: 'Bastet', nombre_griego: 'Bꜣstt',
    epitetos: 'La Señora del Oriente, Protectora del Hogar', naturaleza: 'diosa protectora', es_preview: 0,
    descripcion_corta: 'Diosa gata, protectora del hogar y la fertilidad, contraparte apacible de la feroz Sejmet.',
    descripcion_larga: 'Bastet es la cara serena del mismo poder feroz que en Sejmet se vuelve destrucción: como ella, es una hija del sol capaz de una furia terrible, pero en su forma de gata prefiere proteger el hogar, a las mujeres embarazadas y a los niños antes que la guerra abierta. Se la honraba en cada casa egipcia, donde los gatos domésticos eran considerados sagrados y su maltrato, un crimen severamente castigado. Cada año, miles de peregrinos viajaban a su templo en la ciudad de Bubastis para celebrar festivales de música y baile en su honor, de los que se decía eran los más alegres de todo Egipto.',
    origen: 'Hija de Ra, aspecto apacible del Ojo solar',
    dominio: 'El hogar, la protección, la fertilidad',
    simbolos: ['La gata', 'El sistro'],
    poderes: [
      { nombre: 'Protección del hogar', descripcion: 'Vigila y protege la vida doméstica y a los niños.' }
    ]
  },
  {
    slug: 'amon', tipo: 'dios', nombre: 'Amón', nombre_griego: 'Jmn',
    epitetos: 'El Oculto, Rey de los Dioses', naturaleza: 'dios supremo', es_preview: 0,
    descripcion_corta: 'Dios "oculto" de Tebas que, fusionado con Ra, se convirtió en el dios supremo del imperio egipcio.',
    descripcion_larga: 'Amón, cuyo nombre significa "el oculto", empezó como una divinidad local de Tebas antes de convertirse en el dios más poderoso de todo Egipto. Cuando los príncipes tebanos unificaron el país y lo llevaron a su máximo esplendor, elevaron a su dios patrón por encima de todos los demás, fusionándolo con Ra para formar a Amón-Ra, "rey de los dioses", cuyo templo en Karnak se convirtió en el más grande jamás construido. Se lo representa como un hombre con una corona de dos plumas altas, o como un carnero de cuernos curvados, y aunque su verdadera forma permanece oculta a los ojos mortales —de ahí su nombre—, se creía que su poder impregnaba el aire mismo que respiraba cada egipcio.',
    origen: 'Dios patrón original de la ciudad de Tebas',
    dominio: 'El aire invisible, la realeza divina, el imperio',
    simbolos: ['Las dos plumas altas', 'El carnero'],
    poderes: [
      { nombre: 'Poder oculto', descripcion: 'Su verdadera forma y poder permanecen invisibles a los mortales.' }
    ]
  },
  {
    slug: 'ptah', tipo: 'dios', nombre: 'Ptah', nombre_griego: 'Ptḥ',
    epitetos: 'El Gran Artesano, Señor de la Verdad', naturaleza: 'dios creador', es_preview: 0,
    descripcion_corta: 'Dios creador de Menfis que dio origen al mundo con el pensamiento de su corazón y la palabra de su lengua.',
    descripcion_larga: 'Mientras los sacerdotes de Heliópolis contaban que el mundo nació de la simiente de Atum, los de Menfis defendían una creación distinta y más sutil: Ptah concibió cada cosa primero en su corazón, y luego le dio existencia real con solo pronunciar su nombre en voz alta. De ese modo creó no solo a los demás dioses sino las ciudades, los templos, los oficios y las artes. Como patrón de artesanos, arquitectos y escultores, se lo representa envuelto en una mortaja ajustada, sosteniendo un cetro que combina los símbolos del poder, la estabilidad y la vida eterna. Se creía que Imhotep, el sabio arquitecto que después sería deificado, era hijo directo de Ptah.',
    origen: 'Creador primigenio según la teología de Menfis',
    dominio: 'La creación por la palabra, la artesanía, la arquitectura',
    simbolos: ['El cetro Uas-Dyed-Anj', 'La mortaja ajustada'],
    poderes: [
      { nombre: 'Creación por la palabra', descripcion: 'Da existencia a las cosas con solo nombrarlas.' }
    ]
  },
  {
    slug: 'jnum', tipo: 'dios', nombre: 'Jnum', nombre_griego: 'Ḫnmw',
    epitetos: 'El Alfarero Divino, Señor de la Primera Catarata', naturaleza: 'dios creador', es_preview: 0,
    descripcion_corta: 'Dios carnero que modela a cada ser humano y su alma en un torno de alfarero, y controla la crecida anual del Nilo.',
    descripcion_larga: 'Jnum es el alfarero de los dioses: en su torno da forma no solo al cuerpo de cada niño que nace sino también a su "ka", su fuerza vital, moldeando ambos con el mismo barro del Nilo antes de colocarlos en el vientre de la madre. Vive junto a la Primera Catarata del Nilo, en la isla de Elefantina, desde donde controla las cavernas subterráneas de donde brota la crecida anual del río, aquella que fertiliza los campos de todo Egipto. Se lo representa con cabeza de carnero de cuernos ondulados horizontales, y se le atribuía tanto el poder de dar vida como el de decidir, en años de sequía, cuánto sufrimiento debía soportar el pueblo.',
    origen: 'Dios de la Primera Catarata del Nilo',
    dominio: 'La creación humana, el Nilo, la fertilidad',
    simbolos: ['El torno de alfarero', 'Cuernos de carnero'],
    poderes: [
      { nombre: 'Creación humana', descripcion: 'Modela el cuerpo y el alma de cada persona.' },
      { nombre: 'Control del Nilo', descripcion: 'Regula la crecida anual que fertiliza Egipto.' }
    ]
  },
  {
    slug: 'nun', tipo: 'otro', nombre: 'Nun', nombre_griego: 'Nnw',
    epitetos: 'Las Aguas Primigenias, Padre de los Dioses', naturaleza: 'ser primordial', es_preview: 1,
    descripcion_corta: 'El océano oscuro e infinito que existía antes de la creación, del que surgió el primer dios.',
    descripcion_larga: 'Antes de que existiera el cielo, la tierra o el tiempo mismo, solo había Nun: unas aguas oscuras, infinitas e inertes que lo contenían todo en potencia sin que nada hubiera tomado forma aún. No es un dios al que se le rindiera culto en templos como a los demás, sino la representación del caos primigenio del que todo lo demás emergió, y al que el mundo entero regresaría si el orden alguna vez colapsara del todo. De sus propias aguas surgió, por su propia voluntad, el primer montículo de tierra seca —el "benben"— y sobre él se irguió Atum, el primer dios, dando inicio a todo lo que existe. Incluso después de la creación, se creía que Nun seguía existiendo más allá de los límites del cielo y bajo la tierra, rodeando el mundo ordenado como un recordatorio constante de lo que había antes de todo.',
    origen: 'Existía antes de la creación misma',
    dominio: 'El caos primigenio, las aguas del no-ser',
    simbolos: [],
    poderes: [
      { nombre: 'Origen de todo', descripcion: 'De sus aguas surgió el primer dios y, con él, el mundo entero.' }
    ]
  },
  {
    slug: 'atum', tipo: 'otro', nombre: 'Atum', nombre_griego: 'Jtmw',
    epitetos: 'El que se Completa a Sí Mismo', naturaleza: 'dios creador primigenio', es_preview: 0,
    descripcion_corta: 'El primer dios, que se creó a sí mismo sobre el montículo primigenio y engendró en solitario a la primera pareja divina.',
    descripcion_larga: 'Atum fue el primero en existir: surgió por su propia voluntad de las aguas de Nun y se irguió sobre el montículo primigenio, el único punto de tierra seca en un mundo que aún no tenía forma. Solo, sin compañera, engendró de su propio cuerpo a la primera pareja de dioses, Shu (el aire) y Tefnut (la humedad), dando así comienzo a todas las generaciones divinas que vendrían después —entre ellas, varias generaciones más tarde, Osiris, Isis, Set y Horus—. Con el paso de los siglos, los sacerdotes egipcios llegaron a identificar a Atum con Ra en su aspecto de sol poniente, el anciano que muere cada tarde en el horizonte occidental para renacer al día siguiente como el joven Jepri, cerrando así el círculo eterno entre el principio de todo y el fin de cada día.',
    origen: 'Autoengendrado sobre el montículo primigenio, hijo de nadie',
    dominio: 'La creación, la totalidad del cosmos',
    simbolos: [],
    poderes: [
      { nombre: 'Autocreación', descripcion: 'Se dio existencia a sí mismo y, a partir de sí, a los primeros dioses.' }
    ]
  },
  {
    slug: 'apofis', tipo: 'monstruo', nombre: 'Apofis', nombre_griego: 'Ꜥꜣpp',
    epitetos: 'La Serpiente del Caos', naturaleza: 'serpiente primordial', es_preview: 0,
    descripcion_corta: 'Gigantesca serpiente del caos que ataca cada noche la barca solar de Ra en el inframundo.',
    descripcion_larga: 'Apofis no es un dios sino la negación de todo lo divino: una serpiente monstruosa, tan larga que se dice mide cientos de metros, que habita en las profundidades del Duat con el único propósito de devorar el sol y devolver al mundo al caos original de Nun. Cada noche, cuando la barca de Ra atraviesa el inframundo, Apofis emerge para atacarla, y solo la lanza de Set —el único dios con fuerza suficiente— logra rechazarlo una y otra vez, noche tras noche, en un combate que jamás termina del todo. Los sacerdotes egipcios realizaban rituales diarios quemando figuras de cera de Apofis para ayudar simbólicamente a los dioses en esa batalla eterna, conscientes de que un solo amanecer sin sol significaría el fin del mundo conocido.',
    origen: 'Surgido del caos que precede al orden, enemigo eterno de la creación',
    dominio: 'El caos, la oscuridad, la destrucción del orden',
    simbolos: [],
    poderes: [
      { nombre: 'Amenaza cósmica', descripcion: 'Su victoria significaría el fin del sol y del mundo ordenado.' }
    ]
  },
  {
    slug: 'amit', tipo: 'monstruo', nombre: 'Amit', nombre_griego: 'Ꜥmmt',
    epitetos: 'La Devoradora de los Condenados', naturaleza: 'demonio funerario', es_preview: 0,
    descripcion_corta: 'Criatura con cabeza de cocodrilo, torso de leona y cuartos traseros de hipopótamo que devora los corazones indignos.',
    descripcion_larga: 'Amit espera, agazapada junto a la balanza de Anubis en el tribunal del más allá, a que algún corazón fracase en su pesaje contra la pluma de Maat. Su cuerpo combina a los tres animales más temidos del Nilo: cabeza de cocodrilo, melena y torso de leona, y cuartos traseros de hipopótamo, una mezcla diseñada para inspirar el terror más profundo. Cuando un corazón resulta más pesado que la pluma de la verdad —cargado por las mentiras, la crueldad o la injusticia cometidas en vida—, Anubis se lo entrega a Amit, que lo devora de un solo bocado. No se trata de un castigo eterno como el infierno de otras tradiciones, sino de algo peor para la mentalidad egipcia: la aniquilación total, la "segunda muerte" que borra a la persona de la existencia para siempre, sin posibilidad de renacer junto a Osiris.',
    origen: 'Presente en el tribunal del más allá desde su fundación',
    dominio: 'La devoración de las almas indignas, la aniquilación final',
    simbolos: [],
    poderes: [
      { nombre: 'La segunda muerte', descripcion: 'Devora corazones indignos, borrando esa alma de la existencia para siempre.' }
    ]
  },
  {
    slug: 'imhotep', tipo: 'heroe', nombre: 'Imhotep', nombre_griego: 'Jj-m-ḥtp',
    epitetos: 'El Sabio, Arquitecto de la Eternidad', naturaleza: 'mortal deificado', es_preview: 0,
    descripcion_corta: 'Arquitecto y canciller real que diseñó la primera pirámide de Egipto y, siglos después de su muerte, fue venerado como un dios.',
    descripcion_larga: 'Imhotep fue, antes que nada, un hombre real: canciller del faraón Zoser, sacerdote, médico y el arquitecto que ideó la Pirámide Escalonada de Saqqara, la primera gran construcción de piedra de la historia y el antecedente directo de todas las pirámides que vendrían después. Su genio como constructor, sanador y erudito fue tan admirado que, con el paso de los siglos, el recuerdo del hombre se transformó en leyenda, y la leyenda en culto: para el periodo ptolemaico, casi dos mil años después de su muerte, Imhotep era venerado como un dios de la sabiduría y la medicina, hijo del propio Ptah, al que peregrinos enfermos acudían en busca de curación. Su historia es la prueba viviente de que en Egipto un mortal excepcional podía, con el tiempo, cruzar la frontera hacia la divinidad.',
    origen: 'Nacido mortal en tiempos del faraón Zoser, deificado siglos después',
    dominio: 'La sabiduría, la medicina, la arquitectura',
    simbolos: [],
    poderes: [
      { nombre: 'Genio arquitectónico', descripcion: 'Diseñó la primera gran construcción de piedra de Egipto.' },
      { nombre: 'Sanación', descripcion: 'Venerado después de muerto como dios de la medicina.' }
    ]
  },
  {
    slug: 'setna', tipo: 'heroe', nombre: 'Setna Jaemuaset', nombre_griego: 'Stne Ḫꜥm-wꜣst',
    epitetos: 'El Príncipe Hechicero', naturaleza: 'príncipe y mago', es_preview: 0,
    descripcion_corta: 'Príncipe erudito y obsesionado con la magia antigua, protagonista de los cuentos que narran su robo del Libro de Thot.',
    descripcion_larga: 'Setna Jaemuaset era un príncipe real de Egipto, pero su verdadera pasión no era el poder sino el conocimiento prohibido: pasaba los días leyendo antiguos rollos de magia en busca de hechizos perdidos. Cuando se enteró de que en una tumba custodiada por serpientes inmortales descansaba el legendario Libro de Thot, capaz de dar a quien lo leyera el poder de entender el lenguaje de los animales y ver a los propios dioses, no pudo resistirse a robarlo, desafiando las advertencias de los espíritus que lo protegían. Las consecuencias de su ambición —visiones, humillaciones y tragedias que solo terminan cuando devuelve el libro a su tumba— convirtieron su historia en una de las advertencias más recordadas de la literatura egipcia sobre el precio de desear un conocimiento que no nos pertenece.',
    origen: 'Príncipe de la dinastía de Ramsés II',
    dominio: 'La magia prohibida, la erudición, la advertencia moral',
    simbolos: [],
    poderes: [
      { nombre: 'Erudición mágica', descripcion: 'Domina hechizos y textos antiguos como pocos mortales.' }
    ]
  },
  {
    slug: 'sinuhe', tipo: 'mortal', nombre: 'Sinuhé', nombre_griego: 'Sꜣ-nḥt',
    epitetos: 'El que Huyó de Egipto', naturaleza: 'cortesano exiliado', es_preview: 0,
    descripcion_corta: 'Cortesano egipcio que huyó al extranjero por miedo tras la muerte del faraón, y que tras décadas de exilio fue perdonado y regresó a morir en su tierra.',
    descripcion_larga: 'Sinuhé servía en la corte real cuando el faraón Amenemhat I murió repentinamente, y el pánico y los rumores de conspiración que siguieron lo convencieron —quizás sin motivo real— de que su vida corría peligro. Huyó de Egipto hacia el Levante, a la región de Retenu, donde con los años se convirtió en un respetado jefe local: se casó, tuvo hijos, ganó batallas y acumuló riquezas, todo lejos de su hogar. Pero ni el éxito en tierra extranjera logró calmar su añoranza: soñaba con ser enterrado según los ritos egipcios, no como un extraño en tierra ajena. Cuando el nuevo faraón, enterado de su historia, le ofreció un perdón sincero, Sinuhé regresó anciano a Egipto para pasar sus últimos años en la corte y recibir, por fin, una tumba digna en su propia tierra.',
    origen: 'Cortesano del Reino Medio, época de Amenemhat I y Senusret I',
    dominio: 'El exilio, el honor, el regreso a casa',
    simbolos: [],
    poderes: []
  },
  {
    slug: 'bata', tipo: 'mortal', nombre: 'Bata', nombre_griego: 'Btꜣ',
    epitetos: 'El Hermano Transformado', naturaleza: 'pastor', es_preview: 0,
    descripcion_corta: 'Pastor mortal, protagonista del "Cuento de los dos hermanos", que muere y renace varias veces transformado en toro y en árbol.',
    descripcion_larga: 'Bata vivía feliz trabajando la tierra junto a su hermano mayor, hasta que la esposa de este intentó seducirlo y, al ser rechazada, lo acusó falsamente ante su marido. Perseguido injustamente, Bata escapó y, para probar su inocencia, se arrancó su propio corazón y lo escondió en la flor de un cedro, dejando su cuerpo sin vida pero preservado mientras el corazón siguiera intacto. Cuando el árbol fue talado por orden de una mujer creada mágicamente para él —que después lo traicionaría también—, Bata murió de verdad, pero volvió a renacer transformado primero en un toro sagrado, y cuando también el toro fue sacrificado, en dos árboles que crecieron de las gotas de su sangre. Su historia, una de las más extrañas y hermosas de la literatura egipcia, es un mito de muerte y resurrección repetidas, hermano en espíritu del propio Osiris.',
    origen: 'Pastor mortal de un relato del Reino Nuevo',
    dominio: 'La transformación, la resurrección, la injusticia superada',
    simbolos: [],
    poderes: [
      { nombre: 'Renacimiento repetido', descripcion: 'Muere y regresa a la vida transformado, una y otra vez.' }
    ]
  },
  {
    slug: 'neftis', tipo: 'dios', nombre: 'Neftis', nombre_griego: 'Nbt-ḥwt',
    epitetos: 'La Señora de la Casa, Compañera de los Muertos', naturaleza: 'diosa funeraria', es_preview: 0,
    descripcion_corta: 'Diosa protectora de los muertos y hermana de Isis, que ayudó a llorar y a reunir el cuerpo de Osiris pese a estar casada con su asesino.',
    descripcion_larga: 'Neftis es la hermana silenciosa de Isis: comparte su devoción por los muertos pero, a diferencia de ella, quedó casada con Set, el asesino de su propio hermano Osiris. Pese a ese matrimonio incómodo, cuando Set despedazó el cuerpo de Osiris fue Neftis quien acompañó a Isis en su búsqueda por todo Egipto, y las dos hermanas se representan juntas desde entonces velando el cuerpo de cada difunto, una a la cabeza y otra a los pies del lecho funerario. Se dice que Neftis, desesperada por no poder concebir con Set, tomó una vez la forma de Isis para seducir a Osiris, y de esa unión nació Anubis, a quien luego abandonó por miedo a la ira de su esposo, dejando que Isis lo criara como propio. Aunque unida por matrimonio al caos, el corazón de Neftis siempre perteneció al orden y al duelo digno de los muertos.',
    origen: 'Hija de Geb y Nut',
    dominio: 'El duelo, la protección funeraria, los límites',
    simbolos: ['Cesta sobre una casa (jeroglífico de su nombre)', 'Alas de halcón funerarias'],
    poderes: [
      { nombre: 'Protección funeraria', descripcion: 'Vela y protege los cuerpos de los muertos junto a Isis.' }
    ]
  },
  {
    slug: 'geb', tipo: 'dios', nombre: 'Geb', nombre_griego: 'Gb',
    epitetos: 'El Gran Cacareador, Padre de la Tierra', naturaleza: 'dios de la tierra', es_preview: 0,
    descripcion_corta: 'Dios de la tierra firme, padre de Osiris, Isis, Set y Neftis, separado para siempre de su esposa Nut por orden de su propio padre Shu.',
    descripcion_larga: 'Geb es la tierra misma, tendido bajo el cuerpo arqueado de su esposa y hermana Nut, de quien fue separado por la fuerza cuando su padre Shu recibió la orden de abrir un espacio entre el cielo y la tierra. Cada montaña y cada valle son su cuerpo; se creía que sus risas provocaban los terremotos, y las plantas brotaban directamente de su piel. De su unión con Nut, antes de la separación, nacieron los cuatro dioses que protagonizan el ciclo más importante de la mitología egipcia: Osiris, Isis, Set y Neftis, a quienes Geb entregó el gobierno del mundo cuando llegó su turno. Con el tiempo, agotado ya su padre Shu de sostener el cielo, Geb no resistió la tentación de reclamar también su corona, un acto de ambición que le costó una lección dolorosa antes de aprender a gobernar la tierra con la sabiduría que se esperaba de él.',
    origen: 'Hijo de Shu y Tefnut',
    dominio: 'La tierra, los terremotos, la fertilidad del suelo',
    simbolos: ['El ganso', 'Plantas brotando de su cuerpo'],
    poderes: [
      { nombre: 'Fertilidad de la tierra', descripcion: 'De su cuerpo brota toda la vegetación del mundo.' },
      { nombre: 'Terremotos', descripcion: 'Se dice que sus risas hacen temblar el suelo.' }
    ]
  },
  {
    slug: 'nut', tipo: 'dios', nombre: 'Nut', nombre_griego: 'Nwt',
    epitetos: 'La Bóveda Estrellada, Madre de los Dioses', naturaleza: 'diosa del cielo', es_preview: 0,
    descripcion_corta: 'Diosa del cielo estrellado, arqueada sobre la tierra, que traga el sol cada noche y le da a luz de nuevo cada amanecer.',
    descripcion_larga: 'Nut es la bóveda celeste misma: se la representa como una mujer inmensa cuyo cuerpo, cubierto de estrellas, se arquea sobre la tierra apoyándose solo en las puntas de los pies y las manos, sostenida por su propio padre Shu para que nunca vuelva a tocar a su esposo Geb. Cada tarde, Nut traga al sol poniente, que viaja por su cuerpo estrellado durante toda la noche, y cada amanecer lo da a luz de nuevo por el horizonte oriental, un ciclo que se repite sin falta desde el principio de los tiempos. De su unión con Geb, antes de que Shu los separara, nacieron Osiris, Isis, Set y Neftis, por lo que Nut es considerada la abuela de Horus y la madre de todo el ciclo mítico más célebre de Egipto. Su imagen, pintada en el interior de tantos sarcófagos y techos de tumbas, era la última que un egipcio difunto contemplaba antes de comenzar su viaje hacia el más allá.',
    origen: 'Hija de Shu y Tefnut',
    dominio: 'El cielo, las estrellas, el ciclo del sol',
    simbolos: ['Cuerpo arqueado cubierto de estrellas', 'La vaca celestial'],
    poderes: [
      { nombre: 'El ciclo solar', descripcion: 'Traga el sol cada noche y lo da a luz cada amanecer.' }
    ]
  },
  {
    slug: 'shu', tipo: 'dios', nombre: 'Shu', nombre_griego: 'Šw',
    epitetos: 'El que Sostiene el Cielo', naturaleza: 'dios del aire', es_preview: 0,
    descripcion_corta: 'Dios del aire que separó a la fuerza a sus propios hijos Geb y Nut, y desde entonces sostiene el cielo con sus brazos.',
    descripcion_larga: 'Shu es el aire seco y luminoso que llena el espacio entre el cielo y la tierra, un espacio que él mismo tuvo que crear por la fuerza: cuando Geb y Nut estaban tan entrelazados en su amor que no dejaban lugar para que existiera nada más, Atum ordenó a Shu que los separara, y este alzó a Nut por encima de su cabeza con sus propios brazos, sosteniéndola así para siempre lejos de Geb. Desde entonces Shu carga literalmente el peso del cielo, una tarea agotadora que, según cuentan los mitos más antiguos, terminó por vencerlo tras siglos de sostenerlo sin descanso, obligándolo a retirarse y dejar el trono a su hijo Geb en circunstancias más caóticas de lo que hubiera deseado. Está casado con su hermana gemela Tefnut, con quien Atum lo engendró de su propio cuerpo al principio de los tiempos.',
    origen: 'Hijo de Atum, engendrado de su propio cuerpo',
    dominio: 'El aire, la luz, el espacio entre el cielo y la tierra',
    simbolos: ['Pluma de avestruz sobre la cabeza', 'Brazos alzados sosteniendo el cielo'],
    poderes: [
      { nombre: 'Sostén del cielo', descripcion: 'Mantiene a Nut separada de Geb con su propia fuerza.' }
    ]
  },
  {
    slug: 'tefnut', tipo: 'dios', nombre: 'Tefnut', nombre_griego: 'Tfnwt',
    epitetos: 'La Húmeda, Señora del Rocío', naturaleza: 'diosa de la humedad', es_preview: 0,
    descripcion_corta: 'Diosa de la humedad y el rocío, hermana gemela y esposa de Shu, engendrada por Atum al principio de los tiempos.',
    descripcion_larga: 'Tefnut personifica la humedad, el rocío y la lluvia, la contraparte necesaria del aire seco de su hermano gemelo y esposo Shu: juntos fueron los primeros hijos de Atum, engendrados directamente de su cuerpo cuando el mundo aún no tenía más habitantes que él. Se la representa a menudo con cabeza de leona, un rasgo que comparte con otras diosas feroces como Sejmet, y que recuerda que el agua egipcia, tan vital como escasa, también podía ser violenta. Una de las leyendas más contadas sobre ella narra que, tras una disputa con su padre, Tefnut abandonó Egipto furiosa y se instaló en las tierras de Nubia convertida en una leona salvaje, llevándose consigo la humedad que la tierra necesitaba, hasta que Shu y Thot lograron convencerla de regresar, devolviendo la lluvia y el rocío al valle del Nilo.',
    origen: 'Hija de Atum, engendrada de su propio cuerpo',
    dominio: 'La humedad, el rocío, la lluvia',
    simbolos: ['Cabeza de leona', 'Gotas de agua'],
    poderes: [
      { nombre: 'Control de la humedad', descripcion: 'Trae el rocío y la lluvia que la tierra necesita.' }
    ]
  },
  {
    slug: 'sobek', tipo: 'dios', nombre: 'Sobek', nombre_griego: 'Sbk',
    epitetos: 'El Señor de las Aguas, el Cocodrilo Sagrado', naturaleza: 'dios cocodrilo', es_preview: 0,
    descripcion_corta: 'Dios cocodrilo del Nilo, temido y venerado a la vez, que en un mito rescató del agua una de las manos perdidas de Horus.',
    descripcion_larga: 'Sobek habita las aguas del Nilo con la forma de un cocodrilo o de un hombre con cabeza de ese animal, encarnando a la vez el peligro y la fuerza fértil del río del que depende toda vida en Egipto. Los campesinos le temían y lo honraban en la misma medida: sus templos en Kom Ombo y en el oasis de El Fayún mantenían cocodrilos sagrados alimentados por los sacerdotes, considerados manifestaciones vivas del dios. Aunque su naturaleza es peligrosa, Sobek no está del lado del caos: en un episodio de la larga contienda entre Horus y Set, cuando Horus perdió una mano en el fragor de la batalla y esta cayó al Nilo, fue Sobek quien se sumergió entre sus propias aguas para recuperarla y devolvérsela al tribunal de los dioses, demostrando que hasta la criatura más temida del río podía servir a la justicia cuando el heredero legítimo lo necesitaba.',
    origen: 'Dios del Nilo, venerado especialmente en Kom Ombo y El Fayún',
    dominio: 'El Nilo, la fuerza, la fertilidad de las aguas',
    simbolos: ['El cocodrilo', 'Plumas y disco solar'],
    poderes: [
      { nombre: 'Fuerza acuática', descripcion: 'Domina el Nilo y a las criaturas que lo habitan.' }
    ]
  },
  {
    slug: 'neith', tipo: 'dios', nombre: 'Neith', nombre_griego: 'Nt',
    epitetos: 'La Anciana, Madre de Ra, Señora de Sais', naturaleza: 'diosa guerrera y creadora', es_preview: 0,
    descripcion_corta: 'Una de las diosas más antiguas de Egipto, guerrera y tejedora, cuyo juicio puso fin a la larga disputa entre Horus y Set.',
    descripcion_larga: 'Neith es una de las divinidades más antiguas del panteón egipcio, venerada en la ciudad de Sais como una diosa guerrera, cazadora y también creadora, capaz de tejer el mundo mismo en su telar como quien teje una tela. Se le atribuía tanta sabiduría que, cuando el tribunal de los dioses llevaba ya décadas incapaz de decidir si el trono de Egipto debía pertenecer a Horus o a Set, decidieron enviarle una carta pidiendo su consejo como última autoridad. Neith respondió sin rodeos: el trono debía ser para Horus, el heredero legítimo, aunque propuso compensar a Set con el doble de sus posesiones y dos diosas extranjeras como esposas para aplacar su orgullo. Su veredicto, respetado incluso por Ra, resultó decisivo para inclinar finalmente la balanza a favor de Horus y poner fin a un conflicto que había durado ochenta años.',
    origen: 'Una de las diosas más antiguas, venerada en Sais desde los primeros tiempos',
    dominio: 'La guerra, la sabiduría, la creación por el tejido',
    simbolos: ['Arco y flechas cruzados', 'Lanzadera de tejer'],
    poderes: [
      { nombre: 'Sabiduría suprema', descripcion: 'Su juicio fue respetado incluso por Ra.' }
    ]
  },
  {
    slug: 'seshat', tipo: 'dios', nombre: 'Seshat', nombre_griego: 'Sšꜣt',
    epitetos: 'La Señora de los Libros, Escriba Real', naturaleza: 'diosa de la escritura', es_preview: 0,
    descripcion_corta: 'Diosa de la escritura y la medición, compañera de Thot, que registra los años de reinado de cada faraón sobre las hojas del árbol sagrado.',
    descripcion_larga: 'Seshat es la escriba silenciosa de los dioses, compañera cercana de Thot y a veces descrita como su hija o su esposa, encargada de un oficio propio y distinto al de él: mientras Thot custodia el conocimiento en general, Seshat lleva la cuenta exacta del tiempo. Se le atribuye anotar personalmente, sobre las hojas del árbol sagrado ished, la duración del reinado de cada faraón, determinando cuántos años de gobierno le corresponden a cada uno. También preside la ceremonia de "estirar la cuerda", el ritual con el que los arquitectos egipcios trazaban la orientación exacta de cada templo nuevo antes de la primera piedra, alineándolo con precisión astronómica. Se la representa con una estrella de siete puntas sobre la cabeza y un tallo de palma con muescas en la mano, el instrumento con el que medía los años del tiempo mismo.',
    origen: 'Compañera de Thot desde los primeros tiempos',
    dominio: 'La escritura, la medición, el registro del tiempo',
    simbolos: ['Estrella de siete puntas sobre la cabeza', 'Tallo de palma con muescas'],
    poderes: [
      { nombre: 'Registro eterno', descripcion: 'Anota los años de reinado de cada faraón.' }
    ]
  },
  {
    slug: 'serket', tipo: 'dios', nombre: 'Serket', nombre_griego: 'Srqt',
    epitetos: 'La que Hace Respirar, Señora del Veneno', naturaleza: 'diosa protectora', es_preview: 0,
    descripcion_corta: 'Diosa escorpión, sanadora de venenos y picaduras, que envió siete escorpiones a proteger a Isis durante su huida con el pequeño Horus.',
    descripcion_larga: 'Serket toma la forma de un escorpión o de una mujer coronada por uno, y su poder abarca tanto el veneno como su cura: se la invocaba en cada picadura o mordedura venenosa, y los sacerdotes especializados en tratar esas heridas la reclamaban como su patrona. Es una de las cuatro diosas que custodian los vasos canópicos donde se guardaban los órganos de los difuntos durante la momificación, protegiendo en este caso los intestinos. Su papel más recordado aparece durante la huida de Isis por los pantanos con el pequeño Horus recién nacido: temiendo por la seguridad de ambos, Serket envió a siete escorpiones para que la escoltaran en su camino, protectores fieles que, cuando una mujer les negó refugio a Isis por pura crueldad, unieron su veneno en el aguijón de uno solo para darle una lección que Isis, después, con su propia magia, decidiría perdonar.',
    origen: 'Una de las cuatro diosas protectoras de los vasos canópicos',
    dominio: 'La curación del veneno, la protección de los viajeros',
    simbolos: ['El escorpión', 'La vasija canópica'],
    poderes: [
      { nombre: 'Cura de venenos', descripcion: 'Puede neutralizar cualquier veneno o picadura.' }
    ]
  },
  {
    slug: 'tueris', tipo: 'dios', nombre: 'Tueris', nombre_griego: 'Tꜣ-wrt',
    epitetos: 'La Grande, Protectora del Parto', naturaleza: 'diosa protectora', es_preview: 0,
    descripcion_corta: 'Diosa hipopótamo de aspecto temible pero naturaleza bondadosa, protectora de las mujeres embarazadas y de los recién nacidos.',
    descripcion_larga: 'Tueris combina en su cuerpo las partes más temidas de tres animales del Nilo —cabeza y cuerpo de hipopótamo erguido sobre sus patas traseras, garras de leona y espalda de cocodrilo—, pero pese a su aspecto monstruoso es una de las divinidades más queridas y hogareñas de todo Egipto. Su función es proteger a las mujeres durante el embarazo y el parto, el momento más peligroso en la vida de cualquier familia egipcia, y por eso su imagen aparecía en amuletos, camas y objetos domésticos con mucha más frecuencia que la de dioses más solemnes. Se creía que su apariencia feroz ahuyentaba a los espíritus dañinos que pudieran acercarse a un recién nacido, convirtiendo el miedo que inspiraba en protección real para quienes más la necesitaban.',
    origen: 'Divinidad doméstica venerada en todo Egipto',
    dominio: 'El parto, la maternidad, la protección del hogar',
    simbolos: ['Hipopótamo erguido', 'El amuleto sa de protección'],
    poderes: [
      { nombre: 'Protección del parto', descripcion: 'Vigila a las mujeres embarazadas y a los recién nacidos.' }
    ]
  },
  {
    slug: 'khonsu', tipo: 'dios', nombre: 'Khonsu', nombre_griego: 'Ḫnsw',
    epitetos: 'El Viajero, Señor de la Luna', naturaleza: 'dios lunar', es_preview: 0,
    descripcion_corta: 'Dios de la luna, hijo de Amón y Mut, cuya imagen viajó una vez hasta un reino lejano para curar a una princesa poseída.',
    descripcion_larga: 'Khonsu completa, junto a sus padres Amón y Mut, la tríada divina que Tebas veneraba por encima de todas las demás. Como dios de la luna, mide el paso del tiempo y preside la curación, un poder que una leyenda tardía llevó hasta sus últimas consecuencias: el rey de un reino lejano, Bajtan, escribió al faraón de Egipto suplicando ayuda para curar a una joven poseída por un espíritu hostil que ningún sanador local lograba expulsar. El faraón consultó a Khonsu en su templo de Tebas, y una forma especialmente poderosa del dios, "Khonsu el que Gobierna por la Fuerza", aceptó viajar hasta Bajtan para enfrentar al espíritu, demostrando que su poder de sanar no conocía fronteras y podía actuar tan lejos de Egipto como fuera necesario.',
    origen: 'Hijo de Amón y Mut, tercer miembro de la tríada tebana',
    dominio: 'La luna, el tiempo, la curación',
    simbolos: ['Disco lunar sobre la luna creciente', 'El mechón de la juventud'],
    poderes: [
      { nombre: 'Curación a distancia', descripcion: 'Su poder de sanar puede actuar incluso muy lejos de Egipto.' }
    ]
  },
  {
    slug: 'mut', tipo: 'dios', nombre: 'Mut', nombre_griego: 'Mwt',
    epitetos: 'La Madre, Reina de Tebas', naturaleza: 'diosa madre', es_preview: 0,
    descripcion_corta: 'Diosa madre, esposa de Amón y madre de Khonsu, que completa la poderosa tríada divina de Tebas.',
    descripcion_larga: 'Mut es la reina de los dioses de Tebas: esposa de Amón y madre de Khonsu, forma con ellos la tríada divina más venerada de la ciudad durante el apogeo del Imperio Nuevo. Se la representa como una mujer coronada con la doble corona de Egipto o con un tocado de buitre, símbolo maternal por excelencia entre los egipcios. A medida que el poder político y religioso de Tebas creció hasta dominar todo Egipto, Mut fue absorbiendo gradualmente los atributos de otras grandes diosas maternales y protectoras del país, hasta convertirse en una de las figuras femeninas más poderosas de todo el panteón, presente en templos, festivales y en el propio título de las grandes esposas reales, que se identificaban con ella.',
    origen: 'Diosa patrona de Tebas junto a Amón',
    dominio: 'La maternidad, la realeza, la ciudad de Tebas',
    simbolos: ['El buitre', 'La doble corona'],
    poderes: []
  },
  {
    slug: 'heka', tipo: 'dios', nombre: 'Heka', nombre_griego: 'Ḥkꜣ',
    epitetos: 'La Magia Misma, el Primer Poder', naturaleza: 'dios primordial de la magia', es_preview: 0,
    descripcion_corta: 'La personificación misma de la magia, presente desde antes de la creación, del que se dice que proviene el poder detrás de todo hechizo.',
    descripcion_larga: 'Heka no es solo un dios de la magia sino la magia misma hecha consciente: los sacerdotes egipcios enseñaban que existía en el corazón del creador incluso antes de que el mundo tomara forma, y que fue su poder el que permitió que la palabra y el pensamiento de Atum o de Ptah pudieran, de hecho, crear algo real. Cada hechizo que pronuncia Isis, cada fórmula que escribe Thot, cada ritual que realiza un sacerdote en un templo se entiende, en el fondo, como un uso prestado del poder de Heka, la fuerza invisible detrás de cualquier acto mágico sin importar quién lo ejecute. En los grandes templos existían las llamadas "Casas de la Vida", bibliotecas y escuelas donde los sacerdotes estudiaban sus secretos, y se le representa como un hombre con los brazos alzados sosteniendo dos serpientes, dominando el poder bruto que da vida a toda magia.',
    origen: 'Presente desde antes de la creación, en el corazón del dios creador',
    dominio: 'La magia en sí misma, el poder detrás de todo hechizo',
    simbolos: ['Dos brazos alzados sosteniendo serpientes'],
    poderes: [
      { nombre: 'Fuente de toda magia', descripcion: 'Todo hechizo de cualquier dios es, en el fondo, un uso de su poder.' }
    ]
  },
  {
    slug: 'bennu', tipo: 'otro', nombre: 'Bennu', nombre_griego: 'Bnw',
    epitetos: 'El Ave del Fuego, la que se Renueva a Sí Misma', naturaleza: 'ave sagrada primordial', es_preview: 0,
    descripcion_corta: 'Ave sagrada autoengendrada, posada sobre el montículo primigenio desde el principio de los tiempos, símbolo del alma del sol y de la renovación eterna.',
    descripcion_larga: 'Bennu es una garza de gran tamaño, autoengendrada al principio de los tiempos, que se posó sobre el montículo primigenio o sobre la piedra benben cuando el mundo apenas comenzaba a existir. Se le identifica tanto con el alma (el "ba") de Ra como con el propio Osiris, uniendo en una sola figura los dos grandes ciclos de renovación egipcios: el sol que muere cada tarde y renace cada mañana, y el dios que muere y regresa a un tipo distinto de vida. Se creía que Bennu se renovaba a sí misma periódicamente consumiéndose y resurgiendo, sin necesitar de ningún otro dios para lograrlo, una leyenda que siglos más tarde inspiraría directamente al ave fénix de la mitología griega. Su canto, dicen los textos más antiguos, fue de hecho el primer sonido que existió en el universo, rompiendo el silencio absoluto de las aguas de Nun.',
    origen: 'Autoengendrada sobre el montículo primigenio, al principio de los tiempos',
    dominio: 'La renovación, el tiempo, el alma del sol',
    simbolos: ['Garza gris con dos plumas largas', 'El benben (piedra piramidal primigenia)'],
    poderes: [
      { nombre: 'Autorrenovación', descripcion: 'Renace de sí misma, cíclicamente, sin necesitar de nada más.' }
    ]
  },
  {
    slug: 'djedi', tipo: 'heroe', nombre: 'Djedi', nombre_griego: 'Ḏdi',
    epitetos: 'El que Sabe los Secretos de Thot', naturaleza: 'mago legendario', es_preview: 0,
    descripcion_corta: 'Anciano mago de ciento diez años, capaz de devolver la vida a animales decapitados, que reveló al rey Jufu una profecía sobre su dinastía.',
    descripcion_larga: 'Djedi era, según cuentan los relatos que se leían en la corte egipcia para entretener a los reyes, el mago vivo más poderoso de su tiempo: tenía ciento diez años, pero conservaba un apetito y una vitalidad sorprendentes. El faraón Jufu, curioso por presenciar una maravilla con sus propios ojos tras escuchar historias de magos de reinados pasados, lo mandó llamar a su corte. Allí, Djedi tomó un ganso, le cortó la cabeza, y con solo pronunciar unas palabras la reunió de nuevo con su cuerpo, devolviéndole la vida ante el asombro de todos los presentes; repitió la hazaña con un pato y finalmente con un toro, dejando claro que su magia era real y no un simple truco de corte. Cuando el rey le preguntó por los secretos ocultos del santuario de Thot, Djedi respondió con algo aún más inquietante: esa ubicación solo la revelaría el mayor de tres hermanos aún no nacidos, hijos del propio dios Ra, destinados a fundar una nueva dinastía de reyes.',
    origen: 'Mago legendario de edad extraordinaria',
    dominio: 'La magia prodigiosa, la profecía',
    simbolos: [],
    poderes: [
      { nombre: 'Resurrección de animales', descripcion: 'Puede reunir cabezas cortadas con sus cuerpos y devolverles la vida.' }
    ]
  },
  {
    slug: 'ubaoner', tipo: 'heroe', nombre: 'Ubaoner', nombre_griego: 'Wbꜣ-jnr',
    epitetos: 'El Sacerdote Lector', naturaleza: 'sacerdote y mago', es_preview: 0,
    descripcion_corta: 'Sacerdote-lector traicionado por su esposa, que dio vida a un cocodrilo de cera para castigar con justicia poética al amante de esta.',
    descripcion_larga: 'Ubaoner era un respetado sacerdote-lector, experto en los textos mágicos que se recitaban en los templos, hasta que descubrió que su esposa se encontraba en secreto con un hombre del pueblo en su propio pabellón de jardín. En vez de confrontarlos directamente, Ubaoner modeló con sus propias manos un pequeño cocodrilo de cera, le susurró un hechizo, y ordenó a su sirviente de confianza que lo arrojara al lago la próxima vez que el amante fuera a bañarse allí. En cuanto la figura tocó el agua, se transformó en un cocodrilo real de siete codos de largo, que atrapó al hombre y desapareció con él bajo la superficie durante siete días completos. Al cabo de ese tiempo, Ubaoner mostró la criatura, todavía inmóvil y obediente, al rey de aquella época, y con una sola palabra suya el cocodrilo liberó a su prisionero —medio ahogado y aterrado— para que la justicia, esta vez sí, terminara de cumplirse sobre ambos amantes.',
    origen: 'Sacerdote-lector de un relato ambientado en un reinado antiguo',
    dominio: 'La magia vengativa, la justicia poética',
    simbolos: [],
    poderes: [
      { nombre: 'Animación mágica', descripcion: 'Puede dar vida real a figuras que él mismo modela.' }
    ]
  },
  {
    slug: 'khufu', tipo: 'mortal', nombre: 'Khufu', nombre_griego: 'Ḫwfw',
    epitetos: 'El Rey que Escuchó a los Magos', naturaleza: 'faraón', es_preview: 0,
    descripcion_corta: 'Poderoso faraón constructor de la Gran Pirámide, que un día pidió a sus hijos historias de magia y terminó recibiendo una profecía sobre su propia dinastía.',
    descripcion_larga: 'Khufu fue el faraón que ordenó construir la Gran Pirámide de Guiza, la mayor obra de piedra jamás levantada hasta entonces, pero la leyenda que más se contaba sobre él en épocas posteriores no habla de arquitectura sino de curiosidad. Una tarde, aburrido, pidió a sus propios hijos que lo entretuvieran con relatos de las maravillas realizadas por los grandes magos de reinados anteriores. Fascinado por esas historias, Khufu no se conformó con escuchar: quiso presenciar una maravilla semejante con sus propios ojos, y mandó buscar a Djedi, el último gran mago aún con vida. Lo que el rey no esperaba era que, junto a los prodigios que Djedi vino a mostrarle, llegara también una inquietante profecía sobre el fin de su propia línea de reyes.',
    origen: 'Faraón de la Cuarta Dinastía, constructor de la Gran Pirámide',
    dominio: 'La realeza, la curiosidad, la construcción monumental',
    simbolos: [],
    poderes: []
  },
  {
    slug: 'ruddjedet', tipo: 'mortal', nombre: 'Ruddjedet', nombre_griego: 'Rwḏ-ḏdt',
    epitetos: 'La Madre de los Reyes Divinos', naturaleza: 'madre mortal', es_preview: 0,
    descripcion_corta: 'Esposa de un sacerdote de Ra, elegida por el propio dios para dar a luz a los tres hermanos destinados a fundar una nueva dinastía de reyes.',
    descripcion_larga: 'Ruddjedet era la esposa de un humilde sacerdote de Ra cuando el propio dios del sol la eligió para concebir tres hijos destinados a convertirse en los primeros reyes de una nueva dinastía. Cuando llegó el momento del parto, un embarazo triple mucho más difícil que cualquier nacimiento normal, Ra envió a Isis, a Neftis y al dios Jnum disfrazados de músicas y músico itinerantes para que la asistieran en secreto, ayudándola a dar a luz a cada uno de los tres niños sin que nadie en la casa sospechara la verdadera identidad de las visitantes. Cada hijo nació ya marcado por un destino real, y aunque Ruddjedet vivió el resto de su vida como una madre común, la profecía que había acompañado su parto terminaría por cumplirse generaciones después, cuando sus tres hijos ascendieran, en efecto, al trono de todo Egipto.',
    origen: 'Esposa de un sacerdote de Ra',
    dominio: 'La maternidad milagrosa, el destino real',
    simbolos: [],
    poderes: []
  }
];

// ------------------------------------------------------------
// RELACIONES FAMILIARES (se insertan en las dos direcciones que
// tengan sentido narrativo -- ver comentario en el codigo principal)
// ------------------------------------------------------------
const RELACIONES = [
  { de: 'osiris', tipoDeADestino: 'conyuge', a: 'isis', tipoDeDestinoADe: 'conyuge' },
  { de: 'osiris', tipoDeADestino: 'hijo', a: 'horus', tipoDeDestinoADe: 'padre' },
  { de: 'osiris', tipoDeADestino: 'verdugo', a: 'set', tipoDeDestinoADe: 'hermano' },
  { de: 'osiris', tipoDeADestino: 'hijo', a: 'anubis', tipoDeDestinoADe: 'padre' },
  { de: 'isis', tipoDeADestino: 'hijo', a: 'horus', tipoDeDestinoADe: 'madre' },
  { de: 'isis', tipoDeADestino: 'hermano', a: 'set', tipoDeDestinoADe: 'hermana' },
  { de: 'set', tipoDeADestino: 'enemigo', a: 'horus', tipoDeDestinoADe: 'enemigo' },
  { de: 'thot', tipoDeADestino: 'aliado', a: 'horus', tipoDeDestinoADe: 'aliado' },
  { de: 'ra', tipoDeADestino: 'enemigo', a: 'apofis', tipoDeDestinoADe: 'enemigo' },
  { de: 'ra', tipoDeADestino: 'creador', a: 'sejmet', tipoDeDestinoADe: 'otro', notaDestinoADe: 'Su Ojo vengador' },
  { de: 'ra', tipoDeADestino: 'creador', a: 'hathor', tipoDeDestinoADe: 'otro', notaDestinoADe: 'Su Ojo, en su aspecto apacible' },
  { de: 'horus', tipoDeADestino: 'conyuge', a: 'hathor', tipoDeDestinoADe: 'conyuge', notaDeADestino: 'Según la tradición del templo de Edfu' },
  { de: 'bastet', tipoDeADestino: 'otro', a: 'sejmet', tipoDeDestinoADe: 'otro', notaDeADestino: 'Aspectos hermanados: la ternura y la furia', notaDestinoADe: 'Aspectos hermanados: la furia y la ternura' },
  { de: 'anubis', tipoDeADestino: 'aliado', a: 'amit', tipoDeDestinoADe: 'aliado', notaDeADestino: 'Presente junto a la balanza en cada juicio' },
  { de: 'imhotep', tipoDeADestino: 'hijo', a: 'ptah', tipoDeDestinoADe: 'padre', notaDeADestino: 'Según la tradición tardía' },
  { de: 'setna', tipoDeADestino: 'otro', a: 'thot', tipoDeDestinoADe: 'otro', notaDeADestino: 'Robó su libro de magia', notaDestinoADe: 'Su libro fue robado por Setna' },
  { de: 'nun', tipoDeADestino: 'otro', a: 'atum', tipoDeDestinoADe: 'creador', notaDeADestino: 'Surgió de sus aguas' },

  { de: 'shu', tipoDeADestino: 'conyuge', a: 'tefnut', tipoDeDestinoADe: 'conyuge' },
  { de: 'shu', tipoDeADestino: 'hijo', a: 'geb', tipoDeDestinoADe: 'padre' },
  { de: 'shu', tipoDeADestino: 'hija', a: 'nut', tipoDeDestinoADe: 'padre' },
  { de: 'geb', tipoDeADestino: 'conyuge', a: 'nut', tipoDeDestinoADe: 'conyuge' },
  { de: 'geb', tipoDeADestino: 'hijo', a: 'osiris', tipoDeDestinoADe: 'padre' },
  { de: 'geb', tipoDeADestino: 'hija', a: 'isis', tipoDeDestinoADe: 'padre' },
  { de: 'geb', tipoDeADestino: 'hijo', a: 'set', tipoDeDestinoADe: 'padre' },
  { de: 'geb', tipoDeADestino: 'hija', a: 'neftis', tipoDeDestinoADe: 'padre' },
  { de: 'nut', tipoDeADestino: 'hijo', a: 'osiris', tipoDeDestinoADe: 'madre' },
  { de: 'nut', tipoDeADestino: 'hija', a: 'isis', tipoDeDestinoADe: 'madre' },
  { de: 'nut', tipoDeADestino: 'hijo', a: 'set', tipoDeDestinoADe: 'madre' },
  { de: 'nut', tipoDeADestino: 'hija', a: 'neftis', tipoDeDestinoADe: 'madre' },
  { de: 'neftis', tipoDeADestino: 'conyuge', a: 'set', tipoDeDestinoADe: 'conyuge' },
  { de: 'neftis', tipoDeADestino: 'hermana', a: 'isis', tipoDeDestinoADe: 'hermana' },
  { de: 'neftis', tipoDeADestino: 'hermano', a: 'osiris', tipoDeDestinoADe: 'hermana' },
  { de: 'neftis', tipoDeADestino: 'hijo', a: 'anubis', tipoDeDestinoADe: 'madre' },
  { de: 'khonsu', tipoDeADestino: 'padre', a: 'amon', tipoDeDestinoADe: 'hijo' },
  { de: 'khonsu', tipoDeADestino: 'madre', a: 'mut', tipoDeDestinoADe: 'hijo' },
  { de: 'amon', tipoDeADestino: 'conyuge', a: 'mut', tipoDeDestinoADe: 'conyuge' },
  { de: 'djedi', tipoDeADestino: 'otro', a: 'khufu', tipoDeDestinoADe: 'otro', notaDeADestino: 'Convocado por el rey para probar su magia', notaDestinoADe: 'Lo convocó a su corte para presenciar sus prodigios' },
  { de: 'ruddjedet', tipoDeADestino: 'aliado', a: 'isis', tipoDeDestinoADe: 'aliado', notaDeADestino: 'La asistió en el parto, disfrazada de músico', notaDestinoADe: 'Asistió su parto disfrazada de música itinerante' },
  { de: 'ruddjedet', tipoDeADestino: 'aliado', a: 'jnum', tipoDeDestinoADe: 'aliado', notaDeADestino: 'Dio fuerza y salud a sus tres hijos', notaDestinoADe: 'Dio fuerza y salud a los tres hijos de Ruddjedet' },
  { de: 'neith', tipoDeADestino: 'aliado', a: 'horus', tipoDeDestinoADe: 'aliado', notaDeADestino: 'Su veredicto inclinó el tribunal a su favor', notaDestinoADe: 'Su veredicto le entregó el trono' },
  { de: 'serket', tipoDeADestino: 'aliado', a: 'isis', tipoDeDestinoADe: 'aliado', notaDeADestino: 'Envió a sus escorpiones a protegerla', notaDestinoADe: 'Protegida por sus siete escorpiones durante la huida' },
  { de: 'sobek', tipoDeADestino: 'aliado', a: 'horus', tipoDeDestinoADe: 'aliado', notaDeADestino: 'Rescató su mano perdida en el Nilo', notaDestinoADe: 'Le rescató la mano que había perdido en el Nilo' },
  { de: 'heka', tipoDeADestino: 'otro', a: 'isis', tipoDeDestinoADe: 'otro', notaDeADestino: 'La fuente invisible de su magia', notaDestinoADe: 'Su magia deriva, en el fondo, de Heka' },
  { de: 'bennu', tipoDeADestino: 'otro', a: 'ra', tipoDeDestinoADe: 'otro', notaDeADestino: 'Es el alma (ba) de Ra', notaDestinoADe: 'Su alma toma esta forma de ave' },
  { de: 'bennu', tipoDeADestino: 'otro', a: 'osiris', tipoDeDestinoADe: 'otro', notaDeADestino: 'Comparte con él el símbolo de la renovación eterna', notaDestinoADe: 'Comparte con Bennu el símbolo de la renovación eterna' },
  { de: 'seshat', tipoDeADestino: 'aliado', a: 'thot', tipoDeDestinoADe: 'aliado', notaDeADestino: 'Su compañera en la escritura y el registro del tiempo' }
];

// ------------------------------------------------------------
// HISTORIAS
// ------------------------------------------------------------
const HISTORIAS = [
  {
    slug: 'cosmogonia-heliopolitana', tipo: 'cosmogonia', periodo: 'Antes del tiempo', es_preview: 1,
    titulo: 'La cosmogonía heliopolitana',
    resumen: 'De las aguas oscuras de Nun surge Atum, y de él nacen las generaciones de dioses que darán forma al mundo.',
    texto_completo: `Antes de que existiera el cielo, la tierra, el día o la noche, solo había Nun: una extensión infinita de aguas oscuras e inertes en la que todo lo que existiría algún día flotaba disuelto, sin forma, sin nombre, sin voluntad propia. En ese silencio absoluto surgió, por su propia decisión, el primer ser: Atum, "el que se completa a sí mismo", que se irguió sobre el único montículo de tierra seca que emergía de las aguas, el benben, el primer lugar sólido del cosmos.\n\nAtum estaba solo, y ningún otro dios existía todavía para hacerle compañía. De su propio cuerpo, sin necesitar de nadie más, engendró a la primera pareja divina: Shu, el aire seco que separaría el cielo de la tierra, y Tefnut, la humedad que traería la lluvia y el rocío. Shu y Tefnut, a su vez, se unieron y dieron a luz a Geb, la tierra firme, y a Nut, la bóveda del cielo cubierta de estrellas, que Shu tuvo que alzar con sus propios brazos para separarla de su esposo y crear así el espacio habitable entre el cielo y la tierra donde viviría todo lo demás.\n\nGeb y Nut, aunque separados por su propio padre, lograron unirse antes de la separación definitiva, y de ellos nacieron cuatro hijos que marcarían el destino de Egipto para siempre: Osiris, el primogénito, llamado a civilizar el mundo; Isis, la más sabia en las artes de la magia; Set, el segundo hijo, en quien ya se adivinaba una naturaleza turbulenta; y Neftis, la más silenciosa de todos. Con el nacimiento de esta cuarta generación, conocida como la Enéada, el panteón egipcio quedó completo en sus líneas fundamentales, y el mundo, ya poblado de dioses, estuvo listo para recibir a la humanidad.\n\nSe dice que Atum, mucho después, se fusionaría con Ra, el dios del sol naciente, para formar a Atum-Ra: el mismo dios que había sido el primero en existir se convertiría también en el astro que muere cada tarde en el horizonte occidental, cerrando así el círculo entre el principio de todas las cosas y el fin de cada día.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Textos de las Pirámides', anio_aprox: 'c. 2400-2300 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'nun', rol: 'secundario' },
      { slug: 'atum', rol: 'protagonista' },
      { slug: 'ra', rol: 'secundario' },
      { slug: 'osiris', rol: 'mencionado' },
      { slug: 'isis', rol: 'mencionado' },
      { slug: 'set', rol: 'mencionado' }
    ]
  },
  {
    slug: 'asesinato-de-osiris', tipo: 'tragedia', periodo: 'El primer reino', es_preview: 0,
    titulo: 'El asesinato de Osiris',
    resumen: 'Set engaña a su hermano Osiris para encerrarlo en un cofre a su medida y lo arroja al Nilo, para después despedazar su cuerpo.',
    texto_completo: `Osiris gobernaba Egipto como su primer rey, y su reinado había traído una prosperidad sin precedentes: enseñó a su pueblo a cultivar la tierra, a fabricar herramientas, a respetar las leyes y a honrar a los dioses. Pero ese mismo éxito despertó en su hermano Set una envidia que crecía en silencio cada día, alimentada por el resentimiento de saberse el segundo hijo, siempre a la sombra del primero.\n\nSet urdió un plan con la paciencia de quien lleva años esperando el momento justo. Mandó construir un cofre de madera decorado con extraordinaria belleza, tomando en secreto las medidas exactas del cuerpo de Osiris. Organizó después un banquete al que invitó a su hermano junto a setenta y dos cómplices, y allí, entre risas y vino, propuso un juego: quien encajara perfectamente dentro del cofre se lo quedaría de regalo. Uno a uno, los invitados lo intentaron sin éxito, hasta que le llegó el turno a Osiris, que se recostó dentro sin sospechar nada. En cuanto estuvo adentro, los cómplices de Set cerraron la tapa de golpe, la sellaron con plomo fundido, y arrojaron el cofre al Nilo, que lo arrastró hasta el mar.\n\nEl cofre viajó por las aguas hasta las costas de Biblos, donde quedó atrapado en el tronco de un árbol de tamarisco que creció a su alrededor hasta ocultarlo por completo, convirtiéndose sin saberlo en la columna central del palacio del rey de esa ciudad. Isis, desesperada, recorrió el mundo entero en su búsqueda hasta encontrarlo, y logró traer el cofre de regreso a Egipto.\n\nPero Set no había terminado. Al enterarse de que el cuerpo de su hermano había sido recuperado, lo robó una noche mientras Isis dormía y, esta vez, no se conformó con esconderlo: lo despedazó en catorce fragmentos que esparció por todo Egipto, convencido de que ningún poder en el mundo podría reunir algo tan disperso. Se equivocaba: no había contado con la determinación de Isis, ni con el amor que la impulsaría a recorrer el Nilo entero, fragmento por fragmento, hasta devolverle a su esposo algo parecido a la vida.`,
    fuentes: [
      { autor: 'Plutarco', obra: 'Sobre Isis y Osiris', anio_aprox: 'c. 120 d.C.', tipo: 'secundaria' },
      { autor: 'Anónimo', obra: 'Textos de las Pirámides', anio_aprox: 'c. 2400-2300 a.C.', tipo: 'primaria' }
    ],
    personajes: [
      { slug: 'osiris', rol: 'protagonista' },
      { slug: 'set', rol: 'antagonista' },
      { slug: 'isis', rol: 'secundario' }
    ]
  },
  {
    slug: 'resurreccion-de-osiris', tipo: 'heroica', periodo: 'El primer reino', es_preview: 0,
    titulo: 'Isis y la resurrección de Osiris',
    resumen: 'Isis reúne los catorce fragmentos del cuerpo de Osiris y, con ayuda de Anubis y su propia magia, le devuelve la vida el tiempo justo para concebir a Horus.',
    texto_completo: `Cuando Isis descubrió que Set había despedazado el cuerpo de su esposo y esparcido los catorce fragmentos por todo Egipto, no se permitió el lujo de la desesperación. Transformada en un ave —una cometa o una golondrina, según quien cuente la historia—, sobrevoló el Nilo de norte a sur, guiada por su hermana Neftis, buscando cada pedazo entre juncos, templos y aldeas remotas. Uno a uno los fue encontrando, hasta reunir trece de los catorce; el último, el falo de Osiris, había sido devorado por un pez del Nilo y jamás pudo recuperarse, así que Isis modeló uno de arcilla con sus propias manos para completar el cuerpo.\n\nCon la ayuda de Anubis, que empleó por primera vez el arte del embalsamamiento que él mismo había inventado para la ocasión, los fragmentos fueron unidos y envueltos en lino, devolviéndole al cuerpo de Osiris una forma digna y completa. Fue entonces cuando Isis desplegó toda su magia: transformada en un pequeño halcón, revoloteó sobre el cuerpo inmóvil de su esposo, batiendo las alas para insuflarle aire, y con los hechizos más poderosos que jamás había pronunciado, logró que su corazón volviera a latir por un instante.\n\nEse breve regreso a la vida bastó para que Isis concibiera un hijo: Horus, que crecería para vengar a su padre y reclamar el trono de Egipto. Cumplida su misión de dar continuidad a la línea real, Osiris no permaneció entre los vivos: se retiró definitivamente al reino de los muertos, donde se convirtió en su soberano, el juez ante quien cada alma egipcia debería presentarse algún día. Desde entonces, la resurrección de Osiris no se recuerda como un regreso a la vida terrenal, sino como la primera prueba de que la muerte, para quien es amado con la suficiente devoción, no tiene por qué ser el final.`,
    fuentes: [
      { autor: 'Plutarco', obra: 'Sobre Isis y Osiris', anio_aprox: 'c. 120 d.C.', tipo: 'secundaria' },
      { autor: 'Anónimo', obra: 'Textos de los Sarcófagos', anio_aprox: 'c. 2000 a.C.', tipo: 'primaria' }
    ],
    personajes: [
      { slug: 'isis', rol: 'protagonista' },
      { slug: 'osiris', rol: 'secundario' },
      { slug: 'anubis', rol: 'secundario' },
      { slug: 'set', rol: 'antagonista' }
    ]
  },
  {
    slug: 'nacimiento-de-horus', tipo: 'heroica', periodo: 'El primer reino', es_preview: 1,
    titulo: 'El nacimiento de Horus en los pantanos',
    resumen: 'Isis oculta a su hijo recién nacido en los pantanos de Jemis para protegerlo de Set, mientras lo cría en secreto con su magia.',
    texto_completo: `Apenas nació Horus, Isis supo que su hijo corría un peligro mortal: si Set llegaba a enterarse de que Osiris había dejado un heredero, no dudaría en matarlo antes de que pudiera crecer y reclamar el trono. Así que la diosa, con el niño en brazos, huyó de la corte y se ocultó entre los juncos y las aguas poco profundas de los pantanos de Jemis, en el delta del Nilo, un lugar tan remoto y enmarañado que ni los propios dioses solían aventurarse allí.\n\nDurante los años que siguió criando a Horus en secreto, Isis tuvo que enfrentar peligro tras peligro. En una ocasión, mientras ella salía a mendigar comida disfrazada de mujer pobre, Set —que nunca dejó de buscarlos— tomó la forma de una serpiente y mordió al niño, que cayó envenenado y sin vida entre los juncos. Isis regresó a tiempo para encontrarlo agonizante, y su grito de dolor fue tan desgarrador que atrajo a Thot desde el cielo, quien descendió a enseñarle un hechizo capaz de neutralizar cualquier veneno, salvando al niño en el último instante.\n\nOtra vez fueron escorpiones los que amenazaron a Horus mientras dormía; y en más de una ocasión, Set mismo llegó a acercarse disfrazado, buscando una oportunidad para acabar con el niño de una vez por todas. Pero Isis, con su magia y su vigilancia constante, siempre encontró la forma de protegerlo, convirtiendo los pantanos en un santuario invisible donde Horus pudo crecer fuerte, oculto de todos los ojos excepto los de su madre.\n\nCuando finalmente alcanzó la edad suficiente para valerse por sí mismo, Horus emergió de los pantanos convertido en un joven dios decidido a reclamar lo que por derecho le pertenecía: el trono que Set le había arrebatado a su padre. Los años de peligro y protección en Jemis se convirtieron, para los egipcios, en el símbolo mismo de la infancia vulnerable que, con amor suficiente, logra sobrevivir para cumplir su destino.`,
    fuentes: [
      { autor: 'Anónimo', obra: 'Textos de los Sarcófagos', anio_aprox: 'c. 2000 a.C.', tipo: 'primaria' },
      { autor: 'Plutarco', obra: 'Sobre Isis y Osiris', anio_aprox: 'c. 120 d.C.', tipo: 'secundaria' }
    ],
    personajes: [
      { slug: 'isis', rol: 'protagonista' },
      { slug: 'horus', rol: 'secundario' },
      { slug: 'set', rol: 'antagonista' },
      { slug: 'thot', rol: 'secundario' }
    ]
  },
  {
    slug: 'contiendas-de-horus-y-set', tipo: 'heroica', periodo: 'El primer reino', es_preview: 0,
    titulo: 'Las contiendas de Horus y Set',
    resumen: 'Horus y Set se enfrentan durante décadas ante el tribunal de los dioses por el derecho al trono de Egipto.',
    texto_completo: `Cuando Horus alcanzó la madurez, se presentó ante el gran tribunal de los dioses, reunido bajo la presidencia de Ra, para reclamar el trono de Egipto que Set le había arrebatado a su padre Osiris. Comenzó entonces un litigio que se extendería durante ochenta años, no solo de argumentos legales sino de duelos físicos y trampas cada vez más ingeniosas entre ambos rivales.\n\nEl tribunal, dividido, propuso que resolvieran su disputa mediante pruebas de fuerza. En una de ellas, ambos se transformaron en hipopótamos y se sumergieron en el Nilo, apostando a ver quién lograba permanecer más tiempo bajo el agua; Isis, temiendo por la vida de su hijo, arrojó un arpón contra Set, aunque en su angustia hirió por error también a Horus antes de acertar en su verdadero objetivo. En otra prueba, se enfrentaron en una carrera de barcas construidas en piedra: Horus, más astuto, construyó la suya en madera pero la recubrió de yeso pintado para que pareciera piedra, y mientras la embarcación de Set se hundía sin remedio, la suya permaneció a flote.\n\nEl combate más recordado, sin embargo, fue un duelo físico directo en el que Set logró arrancarle a Horus uno de sus ojos, dejándolo tirado y malherido; pero Horus, en la misma pelea, consiguió castrar a Set, humillándolo profundamente. Fue Thot quien acudió a sanar el ojo perdido de Horus, devolviéndoselo restaurado y hasta más poderoso que antes: ese ojo curado se convertiría en el famoso Udyat, símbolo eterno de protección para todo Egipto.\n\nAgotados los dioses de un conflicto que no parecía tener fin, decidieron finalmente convocar a Osiris desde el más allá para que diera su veredicto. La respuesta del dios de los muertos fue tajante: advirtió que su reino, el de la muerte, era más poderoso que cualquier otro, pues todos los seres —incluidos los propios dioses del tribunal— terminarían allí tarde o temprano, y exigió que se hiciera justicia con su hijo. Ante esa amenaza velada, el tribunal falló por fin a favor de Horus, que fue coronado rey legítimo de todo Egipto, mientras que a Set se le asignó un lugar de honor distinto: viajar junto a Ra en su barca solar para defenderla cada noche de la serpiente Apofis, canalizando su fuerza descomunal en favor del orden que antes había amenazado.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Papiro Chester Beatty I', anio_aprox: 'c. 1160 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'horus', rol: 'protagonista' },
      { slug: 'set', rol: 'antagonista' },
      { slug: 'isis', rol: 'secundario' },
      { slug: 'thot', rol: 'secundario' },
      { slug: 'osiris', rol: 'secundario' },
      { slug: 'ra', rol: 'secundario' }
    ]
  },
  {
    slug: 'destruccion-de-la-humanidad', tipo: 'castigo', periodo: 'El reinado de Ra', es_preview: 0,
    titulo: 'La destrucción de la humanidad',
    resumen: 'Ra envía a su Ojo, transformado en la feroz Sejmet, a castigar a la humanidad rebelde, y debe idear un engaño para detener la masacre.',
    texto_completo: `Con el paso de los siglos, Ra envejeció. Su cabello, antaño dorado como el sol del mediodía, se volvió del color de la plata, y algunos hombres, al notar su debilidad, comenzaron a conspirar contra él, susurrando que ya no merecía gobernar. Cuando Ra lo descubrió, convocó a un consejo secreto de los dioses más antiguos para decidir qué hacer con una humanidad que se había atrevido a desafiarlo.\n\nLa decisión fue enviar a su propio Ojo —la diosa que unas veces toma la forma de Hathor y otras la de la feroz Sejmet— a castigar a los conspiradores. El Ojo descendió a la tierra convertido en una leona y se lanzó sobre la humanidad con una violencia que superó cualquier expectativa: vadeaba literalmente en la sangre de sus víctimas, y cuanto más mataba, más placer parecía encontrar en la matanza, hasta el punto de que ni las órdenes del propio Ra lograban detenerla.\n\nAl caer la noche, Ra contempló los campos teñidos de rojo y sintió que su castigo se le había ido de las manos: si Sejmet continuaba, no quedaría un solo ser humano vivo al amanecer, y sin nadie que cultivara los campos y rindiera culto a los dioses, el equilibrio mismo del mundo se rompería. Ideó entonces un engaño: ordenó que se elaboraran enormes cantidades de cerveza y que se tiñeran de un rojo intenso con pigmento de ocre, para que parecieran sangre humana, y mandó derramar esa cerveza por todos los campos donde Sejmet libraba su matanza.\n\nAl amanecer siguiente, la diosa encontró los campos inundados de lo que parecía ser sangre, y bebió con avidez hasta emborracharse por completo, quedando profundamente dormida antes de poder completar su obra. Cuando despertó, su furia se había apaciguado, y con ella regresó también su naturaleza más gentil, la de Hathor, diosa de la alegría y el amor. Así, gracias a un engaño y no a una batalla, se salvó lo que quedaba de la humanidad, aunque Ra, cansado ya de gobernar entre mortales tan proclives a la traición, decidió poco después retirarse al cielo a lomos de una vaca celestial, dejando el gobierno directo de la tierra en manos de otros dioses.`,
    fuentes: [{ autor: 'Anónimo', obra: 'El Libro de la Vaca Celeste', anio_aprox: 'c. 1300 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'ra', rol: 'protagonista' },
      { slug: 'sejmet', rol: 'secundario' },
      { slug: 'hathor', rol: 'secundario' }
    ]
  },
  {
    slug: 'nombre-secreto-de-ra', tipo: 'heroica', periodo: 'El reinado de Ra', es_preview: 0,
    titulo: 'Isis y el nombre secreto de Ra',
    resumen: 'Isis crea una serpiente venenosa con el propio polvo de Ra y solo accede a curarlo si le revela su nombre secreto, la fuente de su poder.',
    texto_completo: `Isis era la más sabia de los dioses en las artes de la magia, pero ambicionaba un poder que aún se le escapaba: el que solo Ra poseía en plenitud, guardado en el secreto de su verdadero nombre. Los egipcios creían que conocer el nombre auténtico de alguien —no el que se pronunciaba en público, sino el que definía su esencia más profunda— otorgaba un dominio total sobre esa persona, y Ra, consciente de ese peligro, jamás lo había revelado a nadie, ni siquiera a los dioses más cercanos a él.\n\nIsis ideó entonces un plan tan astuto como arriesgado. Un día, mientras Ra caminaba por el cielo ya anciano y con la saliva cayéndole de los labios, ella recogió un poco de esa saliva mezclada con tierra del camino, y con sus manos modeló una serpiente, a la que insufló vida con sus hechizos. Colocó a la criatura, invisible, en el sendero que Ra recorría cada día, y esperó.\n\nCuando Ra pasó por ese lugar, la serpiente lo mordió, inyectándole un veneno que ningún otro dios había sentido jamás: un fuego que le recorría las venas y que ni su propio poder lograba calmar. Convocó desesperado a todos los dioses en busca de ayuda, y entre ellos llegó Isis, la única capaz —según ella misma se ofreció— de curar semejante ponzoña, pero solo con una condición: que Ra le revelara su nombre secreto.\n\nEl dios del sol, agonizante, intentó primero engañarla enumerando sus muchos títulos y epítetos conocidos, pero el veneno seguía quemándolo sin tregua, y cada intento fallido lo debilitaba más. Finalmente, sin más opciones, aceptó susurrarle su nombre verdadero directamente al oído de Isis, con la condición de que ella jamás lo revelara a nadie más que a su hijo Horus. En cuanto lo obtuvo, Isis pronunció el hechizo que expulsó el veneno del cuerpo de Ra, salvándole la vida —pero desde ese día, una parte del poder supremo del dios del sol pertenecía también a ella, convirtiéndola en la más poderosa de todos los dioses después de Ra mismo.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Papiro de Turín 1993', anio_aprox: 'c. 1200 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'isis', rol: 'protagonista' },
      { slug: 'ra', rol: 'secundario' }
    ]
  },
  {
    slug: 'viaje-nocturno-de-ra', tipo: 'otro', periodo: 'Cada noche, sin excepción', es_preview: 0,
    titulo: 'El viaje nocturno de Ra y la serpiente Apofis',
    resumen: 'Cada noche, la barca solar de Ra atraviesa el inframundo y debe sobrevivir al ataque de la serpiente del caos, Apofis.',
    texto_completo: `Cuando el sol se pone cada tarde en el horizonte occidental, Ra no deja de existir: envejece hasta convertirse en un anciano y desciende, a bordo de su barca solar, al Duat, el reino oscuro que se extiende bajo la tierra. Allí comienza el viaje más peligroso de todos los que emprende el dios sol, un recorrido de doce horas —una por cada región del inframundo— que debe completar antes del amanecer si quiere que la vida en la superficie continúe.\n\nEn cada una de esas regiones, la barca de Ra es recibida por espíritus, dioses menores y las almas de los muertos que aguardan su paso para recibir un instante de luz en la oscuridad eterna que habitan. Pero el mayor peligro aguarda siempre en la región más profunda: allí espera Apofis, la serpiente del caos, enroscada y hambrienta, decidida a devorar el sol entero y sumir al mundo en una oscuridad de la que jamás podría regresar la luz.\n\nCuando Apofis ataca, la tripulación entera de la barca se lanza a la defensa: Set, con su lanza y su fuerza descomunal, es quien encabeza el combate cuerpo a cuerpo contra la serpiente, mientras otros dioses recitan hechizos de protección y Isis pronuncia encantamientos que debilitan al monstruo. La batalla se repite, idéntica en su ferocidad, cada noche sin excepción, y aunque Apofis nunca muere del todo —es, después de todo, una fuerza tan primordial como el propio caos—, tampoco logra jamás la victoria definitiva.\n\nLos sacerdotes egipcios, sabedores de que la batalla se libraba también en el plano terrenal, realizaban cada día un ritual llamado "El libro de derribar a Apofis": modelaban figuras de cera con la forma de la serpiente, escribían su nombre sobre ellas, y las quemaban, escupían y pisoteaban, convencidos de que ese acto simbólico ayudaba a los dioses en su lucha invisible. Gracias a esa victoria repetida cada noche, el sol siempre lograba emerger de nuevo por el horizonte oriental, renacido como el joven escarabajo Jepri, dando comienzo a un nuevo día.`,
    fuentes: [{ autor: 'Anónimo', obra: 'El Libro del Amduat', anio_aprox: 'c. 1500 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'ra', rol: 'protagonista' },
      { slug: 'apofis', rol: 'antagonista' },
      { slug: 'set', rol: 'secundario' },
      { slug: 'isis', rol: 'secundario' }
    ]
  },
  {
    slug: 'pesaje-del-corazon', tipo: 'castigo', periodo: 'El más allá', es_preview: 0,
    titulo: 'El pesaje del corazón',
    resumen: 'Cada alma egipcia debe presentarse ante Anubis, Thot y Maat para que su corazón sea pesado contra la pluma de la verdad.',
    texto_completo: `Cuando un egipcio moría y su cuerpo había sido debidamente momificado, su alma emprendía un largo viaje a través del Duat hasta llegar a la Sala de las Dos Verdades, donde la aguardaba el juicio final. Allí, ante un tribunal presidido por Osiris mismo, debía pronunciar la "confesión negativa": una larga lista de cuarenta y dos pecados que juraba no haber cometido en vida —no haber matado, no haber robado, no haber mentido, no haber causado sufrimiento sin motivo—, dirigiéndose a cada uno de los cuarenta y dos jueces divinos que representaban los distintos aspectos de la justicia egipcia.\n\nTerminada la confesión, llegaba el momento decisivo: Anubis tomaba el corazón del difunto —considerado en Egipto el asiento de la conciencia y la memoria, no el cerebro— y lo colocaba con cuidado en uno de los platillos de una gran balanza dorada. En el otro platillo colocaba una única pluma de avestruz, la pluma de Maat, que pesaba exactamente lo que debía pesar la verdad y la justicia perfectas.\n\nSi el corazón, libre de las cargas de una vida cruel o deshonesta, resultaba tan liviano como la pluma, la balanza permanecía equilibrada, y Thot, presente junto a la balanza con su paleta de escriba, anotaba el resultado favorable. El alma quedaba entonces libre para presentarse ante Osiris y ser bienvenida en los Campos de Ialu, un paraíso agrícola donde la vida continuaba en abundancia eterna, tan parecida a la mejor vida egipcia que había existido en la tierra.\n\nPero si el corazón, cargado de mentiras y crueldad, pesaba más que la pluma, la balanza se inclinaba sin remedio, y no había apelación posible: Amit, agazapada junto a la balanza desde el principio de los tiempos, devoraba el corazón condenado en un instante, causando lo que los egipcios temían más que cualquier otra cosa —no un castigo eterno de dolor, sino la aniquilación completa, la desaparición absoluta de la existencia, la única muerte de la que ya no había retorno posible.`,
    fuentes: [{ autor: 'Anónimo', obra: 'El Libro de los Muertos', anio_aprox: 'c. 1550 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'anubis', rol: 'protagonista' },
      { slug: 'thot', rol: 'secundario' },
      { slug: 'maat', rol: 'secundario' },
      { slug: 'amit', rol: 'antagonista' },
      { slug: 'osiris', rol: 'secundario' }
    ]
  },
  {
    slug: 'cuento-de-los-dos-hermanos', tipo: 'tragedia', periodo: 'Los reinos históricos', es_preview: 0,
    titulo: 'El cuento de los dos hermanos',
    resumen: 'Bata, acusado injustamente por la esposa de su hermano mayor, muere y renace transformado varias veces, en un mito de resurrección.',
    texto_completo: `Bata vivía con su hermano mayor y la esposa de este, trabajando la tierra que compartían con una devoción ejemplar: se ocupaba del ganado, araba los campos y trataba a su cuñada con el respeto de una verdadera hermana. Un día, la mujer, presa de un deseo repentino, intentó seducirlo mientras estaban a solas; Bata la rechazó horrorizado, jurando no contarle nada a su hermano por respeto a la familia. Pero la mujer, temiendo que él sí hablara, se adelantó: cuando su esposo volvió del campo, lo recibió fingiendo haber sido ella la víctima de un intento de violación.\n\nCiego de furia, el hermano mayor esperó a Bata escondido tras la puerta del establo con un cuchillo, dispuesto a matarlo. Pero el ganado, que amaba a Bata, le advirtió a gritos del peligro, y el joven pudo huir a tiempo, perseguido por su hermano hasta la orilla de un río infestado de cocodrilos que ningún mortal se atrevía a cruzar. Desde la otra orilla, Bata gritó la verdad de lo ocurrido, y para probar su inocencia y su dolor, se arrancó su propio corazón y lo colocó en lo más alto de un cedro, explicando que mientras el árbol permaneciera en pie, él seguiría con vida en un sentido profundo, aunque su cuerpo pareciera sin aliento.\n\nEl hermano mayor, comprendiendo por fin la verdad, regresó a casa y mató a su esposa traidora. Con el tiempo, encontró el cedro y, al ver caer el corazón de una flor, lo recuperó y lo sumergió en agua fresca hasta que Bata, milagrosamente, revivió. Pero el destino de Bata aún no había terminado: se transformó después en un toro sagrado, y cuando ese toro también fue sacrificado por orden de una mujer que lo había traicionado por segunda vez, de las gotas de su sangre derramada crecieron dos árboles magníficos, prueba de que su esencia se resistía a desaparecer del todo.\n\nLa historia de Bata, con sus muertes y renacimientos sucesivos, resonaba profundamente entre los egipcios como un eco terrenal del mito de Osiris: la certeza de que ni la traición más cruel puede borrar del todo a quien merece seguir existiendo.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Papiro d\'Orbiney', anio_aprox: 'c. 1200 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'bata', rol: 'protagonista' }
    ]
  },
  {
    slug: 'cuento-de-sinuhe', tipo: 'heroica', periodo: 'Los reinos históricos', es_preview: 0,
    titulo: 'El cuento de Sinuhé',
    resumen: 'Sinuhé huye de Egipto por miedo tras la muerte del rey, prospera en el extranjero, y finalmente regresa a morir en su tierra.',
    texto_completo: `Sinuhé acompañaba a un príncipe egipcio en campaña militar cuando le llegó, en susurros, la noticia de que el faraón Amenemhat I había muerto en la capital. El pánico se apoderó de él: temeroso de verse envuelto en las luchas de poder que solían estallar en esos momentos de incertidumbre, y sin esperar a comprobar si el peligro era real, decidió huir esa misma noche hacia el este, abandonando Egipto sin mirar atrás.\n\nCruzó el desierto casi muriendo de sed, y solo la hospitalidad de tribus nómadas que lo encontraron medio inconsciente le salvó la vida. Se estableció finalmente en la región de Retenu, en el Levante, donde su origen egipcio y su habilidad como guerrero le abrieron las puertas de la corte de un jefe local, que le ofreció a su hija en matrimonio y le concedió tierras fértiles para gobernar. Con los años, Sinuhé prosperó como pocos extranjeros lo habían hecho: tuvo hijos, ganó batallas —incluido un duelo memorable contra un campeón local que nadie más se había atrevido a enfrentar—, y acumuló una riqueza y un respeto que en Egipto jamás habría imaginado alcanzar.\n\nY sin embargo, ni el éxito ni los años lograron aplacar una tristeza que crecía en él con el paso del tiempo: la certeza de que, sin importar cuánto prosperara, moriría como un extranjero, enterrado según costumbres que no eran las suyas, sin las oraciones y los ritos que garantizaban a un egipcio la vida eterna. Esa angustia lo acompañó hasta que, ya anciano, recibió una carta inesperada: el nuevo faraón, enterado de su historia, le ofrecía un perdón completo y sincero, invitándolo a regresar a morir en su propia tierra.\n\nSinuhé aceptó sin dudarlo. Entregó sus tierras y su título a sus propios hijos, y emprendió el viaje de regreso a Egipto, donde fue recibido con honores en la corte real. Pasó sus últimos años rodeado del lujo y el respeto que había dejado atrás, y murió finalmente en paz, sepultado con todos los ritos debidos en una tumba egipcia como siempre había soñado —el final feliz de una historia que los propios egipcios adoraban leer, quizás porque hablaba del miedo a morir lejos de casa que cualquiera podía comprender.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Relato de Sinuhé', anio_aprox: 'c. 1875 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'sinuhe', rol: 'protagonista' }
    ]
  },
  {
    slug: 'setna-y-el-libro-de-thot', tipo: 'heroica', periodo: 'Época ptolemaica', es_preview: 0,
    titulo: 'Setna y el Libro de Thot',
    resumen: 'El príncipe Setna Jaemuaset roba de una tumba el legendario Libro de Thot, y sufre las consecuencias de desear un conocimiento prohibido.',
    texto_completo: `Setna Jaemuaset, príncipe egipcio y estudioso incansable de la magia antigua, escuchó un día la leyenda de un libro escrito por el propio Thot, dios de la sabiduría: un libro capaz de dar a quien lo leyera el poder de comprender el lenguaje de todos los animales y de contemplar a los dioses cara a cara. Se decía que ese libro descansaba en una tumba olvidada, custodiado por serpientes inmortales que jamás dormían.\n\nSetna localizó la tumba y descendió a ella pese a las advertencias que encontró grabadas en cada pared. Allí lo esperaban los espíritus de sus antiguos dueños, que le narraron la trágica historia de cuánto sufrimiento les había costado a ellos mismos poseer ese libro, y le suplicaron que desistiera. Pero la ambición de Setna era más fuerte que cualquier advertencia: desafió a la serpiente guardiana en un juego de habilidad, y aunque perdió las primeras rondas, logró finalmente vencerla y arrebatar el libro de su escondite.\n\nDesde el momento en que lo tuvo en sus manos, la fortuna de Setna comenzó a torcerse. Se enamoró perdidamente de una mujer hermosa que resultó ser una trampa mágica tendida por los espíritus ofendidos: en una visión terrible, Setna se vio obligado a entregarlo todo por ella —su fortuna, a sus propios hijos como sirvientes, y finalmente su honor— hasta comprender, demasiado tarde, que había sido engañado. Cuando despertó de la visión, desnudo y humillado en plena plaza pública, entendió por fin el precio real de su ambición.\n\nArrepentido, Setna regresó a la tumba y devolvió el libro a su dueño original, pidiendo perdón por su soberbia. La historia, que los egipcios contaban de generación en generación, no pretendía condenar el deseo de conocimiento en sí mismo, sino advertir sobre la diferencia entre la sabiduría que se gana con paciencia y respeto, y el poder que se roba por pura ambición: solo la primera, entendían, podía sostenerse sin destruir a quien la posee.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Ciclo demótico de Setna Jaemuaset', anio_aprox: 'c. 300-150 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'setna', rol: 'protagonista' },
      { slug: 'thot', rol: 'mencionado' }
    ]
  },
  {
    slug: 'shu-separa-a-geb-y-nut', tipo: 'cosmogonia', periodo: 'Antes del tiempo', es_preview: 1,
    titulo: 'Shu separa el cielo de la tierra',
    resumen: 'Shu, dios del aire, cumple la orden de Atum y separa a la fuerza a los amantes Geb y Nut, creando el espacio donde vivirá todo lo demás.',
    texto_completo: `En los primeros tiempos, Geb y Nut estaban tan estrechamente entrelazados en su amor que no quedaba espacio entre ellos para que existiera ninguna otra cosa: la tierra y el cielo, abrazados, formaban una sola masa oscura y compacta. Atum, observando que de ese abrazo jamás podría surgir el mundo ordenado que él imaginaba, llamó a su hijo Shu, dios del aire, y le encomendó una tarea tan necesaria como cruel: separar a los dos amantes para siempre.\n\nShu se deslizó entre el cuerpo de Geb y el de Nut, y con sus propios brazos alzó a la diosa del cielo muy por encima de su esposo, sosteniéndola en lo alto mientras Geb, la tierra, quedaba extendido abajo, mirando hacia arriba sin poder alcanzarla jamás. El espacio que Shu creó con ese gesto —el aire luminoso entre el cielo estrellado y el suelo firme— fue el primer lugar habitable del cosmos, el escenario donde por fin podría desarrollarse todo lo que vendría después.\n\nGeb y Nut, aunque separados para siempre, no dejaron de amarse: se dice que la humedad del amanecer y el rocío de la noche son en realidad las lágrimas que ambos derraman por su eterna distancia, un recordatorio diario del sacrificio que hizo posible el mundo. Antes de la separación definitiva, sin embargo, los dos amantes ya habían concebido a cuatro hijos —Osiris, Isis, Set y Neftis—, la generación de dioses que protagonizaría los mitos más importantes y más recordados de todo Egipto, dando inicio a una historia que continuaría durante generaciones.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Textos de las Pirámides', anio_aprox: 'c. 2400-2300 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'shu', rol: 'protagonista' },
      { slug: 'geb', rol: 'secundario' },
      { slug: 'nut', rol: 'secundario' },
      { slug: 'atum', rol: 'mencionado' }
    ]
  },
  {
    slug: 'la-corona-robada-de-shu', tipo: 'castigo', periodo: 'Antes del tiempo', es_preview: 0,
    titulo: 'Geb desafía a Shu por la corona',
    resumen: 'Agotado tras siglos sosteniendo el cielo, Shu se retira, y su hijo Geb se apodera del poder hasta que una serpiente venenosa le enseña los límites de la ambición.',
    texto_completo: `Durante siglos, Shu sostuvo el cielo sobre sus propios brazos sin un solo instante de descanso, separando a Nut de Geb como Atum le había ordenado. Pero ni siquiera un dios puede cargar un peso semejante para siempre: agotado y envejecido por la tarea, Shu terminó por retirarse del gobierno del mundo, ascendiendo a regiones más altas del cielo y dejando un vacío de poder en la tierra que nadie supo llenar de inmediato.\n\nGeb, su hijo, no esperó a que las cosas se ordenaran por sí solas. Impaciente por heredar lo que consideraba suyo por derecho, se apoderó de la corona de su padre sin la ceremonia ni el consentimiento debidos. El mundo respondió con violencia a ese gesto precipitado: de las profundidades de la tierra emergieron serpientes furiosas, hijas del caos que Shu había mantenido a raya con su sola presencia, y una de ellas mordió a Geb, envenenándolo casi hasta la muerte.\n\nSolo la intervención urgente de Ra, con la fuerza de la magia de Heka corriendo por sus hechizos, logró curar a Geb del veneno a tiempo. La lección, sin embargo, quedó grabada en él: comprendió que el poder que había arrebatado por ambición no era el mismo que el que se recibe con paciencia y respeto. Desde entonces gobernó la tierra con una sabiduría distinta, más atenta a los límites de su propia fuerza, y se ganó con los años el título de padre justo de los dioses que después heredarían su trono: Osiris, Isis, Set y Neftis.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Textos de los Sarcófagos', anio_aprox: 'c. 2000 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'geb', rol: 'protagonista' },
      { slug: 'shu', rol: 'secundario' },
      { slug: 'ra', rol: 'secundario' }
    ]
  },
  {
    slug: 'isis-y-los-siete-escorpiones', tipo: 'heroica', periodo: 'El primer reino', es_preview: 0,
    titulo: 'Isis y los siete escorpiones de Serket',
    resumen: 'Huyendo con el pequeño Horus, Isis es protegida por siete escorpiones enviados por Serket, que castigan a quien le niega refugio y ayudan a salvar a un niño inocente.',
    texto_completo: `Mientras huía por los caminos de Egipto con el pequeño Horus en brazos, buscando siempre un refugio lejos del alcance de Set, Isis no viajaba del todo sola: la diosa Serket, compadecida de su cansancio, le había asignado una escolta de siete escorpiones para que la protegieran en el camino. Una noche, agotada, Isis llegó a la casa de una mujer rica y le suplicó cobijo por unas horas; la mujer, viendo sus ropas gastadas por el viaje, le cerró la puerta con desprecio.\n\nLos siete escorpiones, indignados por esa crueldad hacia quien protegían, decidieron actuar: seis de ellos entregaron en secreto todo su veneno a Tefen, el séptimo, que se deslizó bajo la puerta de la mujer rica y picó a su pequeño hijo, que dormía inocente de la ofensa de su madre. El niño cayó gravemente envenenado, y sus gritos de dolor pronto llenaron toda la casa, mientras la madre, presa del pánico, salía a la calle pidiendo ayuda a gritos sin saber a quién acudir.\n\nUna pobre pescadora, que sí había recibido a Isis en su propia casa esa misma noche, escuchó los lamentos y le contó lo ocurrido. Isis, pese a la humillación recibida, no dudó: se presentó ante la mujer rica y, sin reprocharle nada, pronunció sobre el niño uno de sus hechizos más poderosos, nombrando uno a uno a los siete escorpiones y neutralizando su veneno por completo. El niño se recuperó al instante, y la mujer, avergonzada de su propia crueldad, entregó gran parte de sus bienes a la humilde pescadora que sí había sabido reconocer a una diosa disfrazada de viajera cansada.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Estela de Metternich', anio_aprox: 'c. 380 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'isis', rol: 'protagonista' },
      { slug: 'serket', rol: 'secundario' },
      { slug: 'horus', rol: 'mencionado' }
    ]
  },
  {
    slug: 'veredicto-de-neith', tipo: 'heroica', periodo: 'El primer reino', es_preview: 0,
    titulo: 'El veredicto de Neith',
    resumen: 'Cansados del litigio eterno entre Horus y Set, los dioses piden consejo a la anciana diosa Neith, cuyo juicio inclina la balanza definitivamente hacia Horus.',
    texto_completo: `Ochenta años de contiendas entre Horus y Set habían dejado exhausto al tribunal de los dioses, incapaz de ponerse de acuerdo sobre a quién pertenecía por derecho el trono de Egipto. Cada prueba de fuerza, cada duelo y cada trampa habían quedado sin un veredicto definitivo, y hasta Ra, presidiendo las sesiones, comenzaba a temer que el conflicto no terminaría nunca por sí solo.\n\nFue entonces cuando el tribunal decidió escribir una carta a Neith, la anciana diosa de Sais, reconocida como una de las divinidades más sabias y antiguas de todo el panteón. Su respuesta llegó sin ambigüedades: el trono debía pertenecer a Horus, el heredero legítimo de Osiris, y no a Set, sin importar cuánta fuerza hubiera demostrado este último en el campo de batalla. Para no dejar a Set completamente humillado, Neith propuso además una compensación: que se le entregaran el doble de sus posesiones actuales y dos diosas extranjeras como esposas, un gesto pensado para aplacar su orgullo sin comprometer la justicia del veredicto.\n\nLa carta de Neith no puso fin al conflicto de inmediato —todavía quedaban pruebas y duelos por delante—, pero su autoridad moral fue decisiva: incluso los dioses que hasta entonces dudaban comenzaron a inclinarse hacia Horus, sabiendo que contradecir el juicio de una diosa tan respetada solo podía traerles problemas. Cuando finalmente el tribunal falló a favor de Horus, todos reconocieron que había sido la sabiduría de Neith, más que cualquier duelo físico, la que había señalado el camino correcto desde el principio.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Papiro Chester Beatty I', anio_aprox: 'c. 1160 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'neith', rol: 'protagonista' },
      { slug: 'horus', rol: 'secundario' },
      { slug: 'set', rol: 'secundario' },
      { slug: 'ra', rol: 'secundario' },
      { slug: 'thot', rol: 'secundario' }
    ]
  },
  {
    slug: 'sobek-y-la-mano-de-horus', tipo: 'heroica', periodo: 'El primer reino', es_preview: 0,
    titulo: 'Sobek y el rescate de la mano de Horus',
    resumen: 'Durante una de sus batallas contra Set, Horus pierde una mano en el Nilo, y es el temido dios cocodrilo Sobek quien la recupera de las aguas.',
    texto_completo: `En uno de los combates más violentos de su larga disputa con Set, Horus resultó gravemente herido: en medio del forcejeo, una de sus manos quedó cercenada y cayó directamente a las aguas del Nilo, arrastrada de inmediato por la corriente hacia zonas donde ni los propios dioses se atrevían a nadar por miedo a los cocodrilos que las habitaban.\n\nFue precisamente uno de esos cocodrilos, o más bien el dios que los gobierna a todos, quien acudió en su ayuda: Sobek, que honraba en secreto el derecho de Horus al trono de Egipto, se sumergió sin dudarlo entre las aguas turbias del río y localizó la mano perdida antes de que se perdiera para siempre. La recuperó con extremo cuidado y la llevó de vuelta ante el tribunal de los dioses, presentándola como prueba irrefutable de la violencia excesiva que Set había empleado en la contienda.\n\nEl gesto de Sobek no pasó desapercibido: aunque su naturaleza fuera temida por los mortales que vivían junto al Nilo, quedó claro que hasta la criatura más peligrosa del río podía ponerse del lado de la justicia cuando la ocasión lo requería. Desde entonces, los sacerdotes egipcios explicaban que Sobek no era simplemente un dios del peligro, sino también un protector de la realeza legítima, capaz de servir a Maat incluso desde las aguas más oscuras y temidas del país.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Textos de los Sarcófagos', anio_aprox: 'c. 2000 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'sobek', rol: 'protagonista' },
      { slug: 'horus', rol: 'secundario' },
      { slug: 'set', rol: 'mencionado' }
    ]
  },
  {
    slug: 'prodigios-de-djedi', tipo: 'heroica', periodo: 'Los reinos históricos', es_preview: 1,
    titulo: 'Los prodigios de Djedi ante el faraón Jufu',
    resumen: 'El anciano mago Djedi demuestra su poder ante el rey Jufu devolviendo la vida a animales decapitados, y le revela una profecía sobre el destino de su dinastía.',
    texto_completo: `El faraón Jufu, aburrido una tarde en su palacio, pidió a sus propios hijos que lo entretuvieran contándole historias de las maravillas realizadas por los grandes magos de reinados pasados. Uno tras otro, los príncipes narraron prodigios asombrosos ocurridos generaciones atrás, hasta que uno de ellos mencionó algo distinto: un mago llamado Djedi, de ciento diez años, seguía vivo en ese mismo momento, capaz todavía de realizar hazañas que ningún otro podía igualar.\n\nIntrigado, Jufu no se conformó con la historia: quiso presenciar una maravilla con sus propios ojos, y mandó traer a Djedi a su corte de inmediato. El anciano llegó con una vitalidad sorprendente para su edad, y accedió a demostrar su poder ante el rey: tomó un ganso, le cortó la cabeza de un solo golpe, colocó ambas partes separadas sobre una mesa, y con solo pronunciar unas palabras las reunió de nuevo, devolviendo al animal a la vida ante el asombro de toda la corte. Repitió la misma hazaña con un pato, y finalmente, para disipar cualquier duda, con un toro entero, dejando claro que su magia era completamente real.\n\nSatisfecho pero aún curioso, Jufu le preguntó entonces por la ubicación secreta de las cámaras del santuario de Thot, un conocimiento que ningún rey había logrado obtener. Djedi respondió con algo que el rey no esperaba: esa ubicación no la revelaría él, sino el mayor de tres hermanos que todavía no habían nacido, hijos del propio dios Ra con una mujer llamada Ruddjedet, destinados a fundar una nueva dinastía de reyes que un día ocuparía el trono de Egipto. La profecía dejó a Jufu tan fascinado como inquieto, preguntándose qué sería, entonces, de su propia descendencia.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Papiro Westcar', anio_aprox: 'c. 1600 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'djedi', rol: 'protagonista' },
      { slug: 'khufu', rol: 'secundario' },
      { slug: 'ra', rol: 'mencionado' }
    ]
  },
  {
    slug: 'mago-ubaoner-cocodrilo-de-cera', tipo: 'castigo', periodo: 'Los reinos históricos', es_preview: 0,
    titulo: 'El mago Ubaoner y el cocodrilo de cera',
    resumen: 'Traicionado por su esposa, el sacerdote-lector Ubaoner da vida a un cocodrilo de cera que arrastra al amante infiel a las profundidades del lago durante siete días.',
    texto_completo: `Entre las historias que los hijos de Jufu le contaron para entretenerlo, una de las más recordadas era la del sacerdote-lector Ubaoner, un hombre respetado en toda la región que un día descubrió, por boca de un sirviente leal, que su esposa se encontraba en secreto con un hombre del pueblo en el pabellón de su propio jardín. En vez de estallar en furia o confrontarlos directamente, Ubaoner prefirió una venganza más paciente y más elegante.\n\nModeló con sus propias manos un pequeño cocodrilo de cera, no más grande que un dedo, y le susurró un hechizo antes de entregárselo a su sirviente con instrucciones precisas: debía arrojarlo al lago exactamente en el momento en que el amante entrara a bañarse allí, como solía hacer cada tarde después de sus encuentros secretos. El sirviente cumplió la orden al pie de la letra, y en cuanto la figura de cera tocó el agua, se transformó en un cocodrilo real de siete codos de largo, que se lanzó de inmediato sobre el hombre y desapareció con él bajo la superficie.\n\nDurante siete días completos nadie volvió a saber nada del cocodrilo ni de su presa. Al cabo de ese tiempo, Ubaoner se presentó ante el rey de aquella época y le mostró la criatura, inmóvil sobre la orilla, todavía con el hombre atrapado entre sus fauces pero milagrosamente con vida. Solo entonces, con una sola palabra de su creador, el cocodrilo liberó a su prisionero, y el rey, al enterarse de la traición cometida, ordenó que la justicia terminara lo que Ubaoner había comenzado con tanta paciencia.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Papiro Westcar', anio_aprox: 'c. 1600 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'ubaoner', rol: 'protagonista' }
    ]
  },
  {
    slug: 'nacimiento-de-los-reyes-divinos', tipo: 'heroica', periodo: 'Los reinos históricos', es_preview: 0,
    titulo: 'El nacimiento de los reyes divinos',
    resumen: 'Isis, Neftis y Jnum acuden disfrazados de músicos itinerantes a asistir el parto milagroso de Ruddjedet, madre de tres hijos engendrados por el propio Ra.',
    texto_completo: `Ra, deseoso de asegurar que Egipto fuera gobernado algún día por una nueva línea de reyes completamente devota a él, engendró en secreto tres hijos con Ruddjedet, esposa de uno de sus propios sacerdotes. Cuando llegó el momento del parto, un embarazo triple mucho más difícil que cualquier nacimiento ordinario, Ra no dejó a la mujer librada a su suerte: envió a Isis, a Neftis y al dios Jnum disfrazados de una pequeña compañía de músicos itinerantes que llamó a la puerta de la casa ofreciendo sus servicios para el parto.\n\nEl marido de Ruddjedet, sin sospechar la verdadera identidad de sus visitantes, los dejó pasar agradecido por la ayuda inesperada. Isis y Neftis asistieron el nacimiento de cada uno de los tres niños con una destreza que ninguna partera mortal podría igualar, mientras Jnum, en silencio, moldeaba para cada uno un cuerpo fuerte y saludable en su torno divino. A medida que cada niño nacía, Isis susurraba en voz baja su nombre y su destino futuro: Userkaf, Sahura y Neferirkara, los tres primeros reyes de una nueva dinastía que un día gobernaría todo Egipto, tal como Djedi había profetizado ante el rey Jufu.\n\nAntes de marcharse tan misteriosamente como habían llegado, las diosas dejaron como pago por su hospitalidad un pequeño saco de grano, que con el tiempo resultó producir una cerveza que jamás se agotaba, un último regalo silencioso para la familia que había acogido, sin saberlo, el nacimiento de tres futuros reyes divinos. La profecía escuchada por Jufu se había cumplido: en algún lugar de Egipto, la siguiente dinastía ya había nacido.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Papiro Westcar', anio_aprox: 'c. 1600 a.C.', tipo: 'primaria' }],
    personajes: [
      { slug: 'ruddjedet', rol: 'protagonista' },
      { slug: 'isis', rol: 'secundario' },
      { slug: 'neftis', rol: 'secundario' },
      { slug: 'jnum', rol: 'secundario' },
      { slug: 'ra', rol: 'mencionado' },
      { slug: 'djedi', rol: 'mencionado' }
    ]
  },
  {
    slug: 'viaje-de-khonsu-a-bakhtan', tipo: 'heroica', periodo: 'Los reinos históricos', es_preview: 0,
    titulo: 'El viaje de Khonsu a la lejana Bajtan',
    resumen: 'La imagen del dios luna Khonsu viaja hasta el remoto reino de Bajtan para curar a una princesa poseída por un espíritu hostil.',
    texto_completo: `El rey del lejano reino de Bajtan escribió una carta desesperada al faraón de Egipto: su joven hija Bentresh estaba poseída por un espíritu hostil que ningún sanador local había logrado expulsar, y su estado empeoraba con cada día que pasaba. El faraón, conmovido por la súplica, consultó de inmediato al dios Khonsu en su gran templo de Tebas, pidiendo que su poder sanador alcanzara a la princesa aunque estuviera tan lejos de las fronteras de Egipto.\n\nEl templo respondió otorgando su fuerza a una forma especialmente poderosa del dios, conocida como "Khonsu el que Gobierna por la Fuerza", cuya estatua emprendió entonces un viaje de más de un año hasta llegar finalmente a Bajtan. En cuanto la imagen del dios llegó junto al lecho de la princesa, el espíritu hostil que la poseía reconoció de inmediato una autoridad superior a la suya: en vez de resistirse, se dirigió directamente a Khonsu para reconocer su derrota, pidiendo únicamente que se celebrara un banquete de despedida en su honor antes de marcharse en paz para siempre.\n\nEl rey de Bajtan, maravillado por el poder del dios extranjero, quiso quedarse con la estatua de Khonsu para siempre, negándose durante un tiempo a dejarla partir. Pero una noche tuvo un sueño perturbador que interpretó como una advertencia clara de no desafiar la voluntad del dios, y al despertar ordenó que la imagen regresara a Egipto cargada de valiosos regalos como muestra de su gratitud. Khonsu llegó de vuelta a Tebas después de tres años y nueve meses de ausencia, con su poder intacto y su viaje grabado para siempre en una estela como prueba de que su fuerza sanadora no conocía fronteras.`,
    fuentes: [{ autor: 'Anónimo', obra: 'Estela de Bentresh (o de Bajtan)', anio_aprox: 'c. 300 a.C. (ambientada en el reinado de Ramsés II)', tipo: 'primaria' }],
    personajes: [
      { slug: 'khonsu', rol: 'protagonista' },
      { slug: 'amon', rol: 'mencionado' }
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
  console.log('Sembrando Mitología Egipcia: empezando...\n');

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
