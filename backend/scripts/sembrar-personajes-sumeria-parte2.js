// ============================================================
// scripts/sembrar-personajes-sumeria-parte2.js
// ------------------------------------------------------------
// Segundo lote de contenido para Mitologia Sumeria: 10 heroes y
// 11 monstruos. Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-sumeria-parte2.js
// ============================================================

const pool = require('../config/db');

const HEROES = [
  {
    slug: 'gilgamesh', nombre: 'Gilgamesh', nombre_griego: 'Gilgamesh',
    epitetos: 'Rey de Uruk, Dos Tercios Dios',
    descripcion_corta: 'Legendario rey de Uruk, protagonista de la epopeya más antigua conservada — su búsqueda de la inmortalidad definió toda la literatura mesopotámica posterior.',
    descripcion_larga: `Gilgamesh es el legendario quinto rey de Uruk, descrito en los textos sumerios y acadios como dos tercios dios y un tercio hombre, de fuerza y belleza sobrehumanas, pero también de un carácter tan tiránico en su juventud que sus propios súbditos claman a los dioses pidiendo alivio. En respuesta, los dioses crean a Enkidu, un hombre salvaje destinado a igualar su fuerza y equilibrar su carácter; tras un primer enfrentamiento violento entre ambos, se convierten en los compañeros inseparables cuya amistad estructura toda la epopeya que lleva su nombre —la obra literaria completa más antigua que se conserva de la humanidad.

Juntos emprenden hazañas que ningún mortal se atrevería a intentar solo: viajan al lejano Bosque de los Cedros para matar al monstruo guardián Humbaba, y más tarde derrotan al Toro del Cielo enviado por una Inanna despechada. Pero la muerte de Enkidu, decretada por los dioses como castigo por ambas hazañas, destroza a Gilgamesh y lo enfrenta por primera vez con su propia mortalidad. El resto de la epopeya narra su desesperada travesía hasta los confines del mundo para encontrar a Utnapishtim, el único mortal que alcanzó la inmortalidad, con la esperanza de arrebatarle ese mismo secreto —una búsqueda que termina, en última instancia, en la aceptación madura de que solo las grandes obras humanas, como los muros de Uruk, pueden perdurar más allá de la muerte de quien las construyó.`,
    origen: 'Hijo de la diosa Ninsun y el rey mortal Lugalbanda.',
    dominio: 'El gobierno de Uruk y la búsqueda de la trascendencia',
    naturaleza: 'Rey semidivino, héroe trágico'
  },
  {
    slug: 'enkidu', nombre: 'Enkidu', nombre_griego: 'Enkidu',
    epitetos: 'El Hombre Salvaje, Compañero de Gilgamesh',
    descripcion_corta: 'Creado por los dioses de arcilla y estepa para igualar a Gilgamesh — su amistad y su muerte son el eje emocional de toda la epopeya.',
    descripcion_larga: `Enkidu es creado directamente por la diosa Aruru a partir de arcilla y agua, modelado a imagen de An mismo, con el propósito específico de igualar la fuerza descomunal de Gilgamesh y frenar su tiranía sobre Uruk. Nace no en la ciudad sino en la estepa, cubierto de pelo, corriendo entre los animales salvajes y protegiéndolos de las trampas de los cazadores, completamente ajeno a las costumbres humanas hasta que una prostituta sagrada del templo, Shamhat, es enviada a civilizarlo mediante seis días y siete noches de unión con ella.

Su primer encuentro con Gilgamesh es un combate físico brutal en las puertas de una boda, del que ninguno sale claramente vencedor, pero que termina en un reconocimiento mutuo tan intenso que se convierten de inmediato en hermanos de armas inseparables. Juntos derrotan a Humbaba y al Toro del Cielo, pero es precisamente por estas dos hazañas que la asamblea de los dioses decide que uno de los dos debe morir como castigo, y eligen a Enkidu. Su muerte lenta y agónica, narrada con un detalle emocional excepcional para la literatura de su época, es el catalizador que transforma a Gilgamesh de un rey despreocupado a un hombre obsesionado con burlar a la muerte misma.`,
    origen: 'Creado por la diosa Aruru de arcilla, a imagen de An.',
    dominio: 'Ninguno propio — vínculo con la naturaleza salvaje',
    naturaleza: 'Héroe civilizado, compañero leal'
  },
  {
    slug: 'utnapishtim', nombre: 'Utnapishtim', nombre_griego: 'Ziusudra',
    epitetos: 'El Lejano, el Único Inmortal',
    descripcion_corta: 'Sobreviviente del diluvio, el único mortal al que los dioses concedieron la inmortalidad — su relato es el destino final de la búsqueda de Gilgamesh.',
    descripcion_larga: `Utnapishtim —llamado Ziusudra en las versiones sumerias más antiguas— es el único ser humano que alcanzó la inmortalidad, otorgada por los dioses tras sobrevivir al diluvio que estuvo a punto de exterminar a toda la humanidad. Advertido en secreto por Enki de la decisión de Enlil de destruir a la especie humana entera, Utnapishtim construye un enorme barco cúbico, lo sella con brea, y embarca a su familia junto con "la semilla de todas las criaturas vivientes" justo antes de que las lluvias comiencen a caer durante seis días y noches ininterrumpidos.

Tras el diluvio, Utnapishtim suelta primero una paloma, luego una golondrina, y finalmente un cuervo que no regresa —señal de que ha encontrado tierra seca—, y ofrece un sacrificio tan intenso que "los dioses, como moscas, se reunieron alrededor de la ofrenda", hambrientos tras el diluvio. Enlil, furioso al descubrir que un mortal había sobrevivido, es persuadido por los demás dioses de no repetir el castigo, y en cambio concede a Utnapishtim y su esposa la inmortalidad. Cuando Gilgamesh finalmente lo encuentra al final de su larga travesía, Utnapishtim le explica que su caso fue una excepción irrepetible, y le somete a una prueba de vigilia que Gilgamesh no logra superar, sellando el fracaso de su búsqueda.`,
    origen: 'Rey de Shuruppak, sobreviviente del diluvio por advertencia de Enki.',
    dominio: 'Ninguno propio — vive apartado del mundo de los mortales',
    naturaleza: 'El único mortal hecho inmortal'
  },
  {
    slug: 'lugalbanda', nombre: 'Lugalbanda', nombre_griego: 'Lugalbanda',
    epitetos: 'El Rey Pastor, Padre de Gilgamesh',
    descripcion_corta: 'Legendario rey de Uruk y padre de Gilgamesh — héroe de su propia epopeya, abandonado enfermo por su ejército y rescatado por su propio ingenio.',
    descripcion_larga: `Lugalbanda es un legendario rey de Uruk, padre —según la tradición épica— de Gilgamesh junto a la diosa Ninsun, y protagonista de su propio ciclo de poemas épicos independientes, anteriores en composición a la propia Epopeya de Gilgamesh. Su relato más conocido narra una campaña militar en la que, gravemente enfermo, es abandonado por sus propios compañeros de armas en una cueva de montaña, mientras el resto del ejército continúa su marcha sin él.

En vez de rendirse, Lugalbanda sobrevive gracias a su devoción religiosa y su astucia práctica, y su fe es recompensada cuando captura y libera al ave Anzu —en este relato representada como una criatura benevolente, no la amenaza cósmica de otros mitos— que, agradecida, le concede el don de una velocidad sobrehumana para correr. Con ese poder, Lugalbanda no solo alcanza a su ejército, sino que se convierte en el mensajero elegido para una misión imposible: cruzar solo montañas hostiles para pedir ayuda a la diosa Inanna en nombre de todo su ejército sitiado. Su historia, centrada en la resistencia individual y el ingenio frente al abandono, funciona como un contrapunto más silencioso a las hazañas físicas espectaculares de su hijo Gilgamesh.`,
    origen: 'Legendario rey de Uruk, esposo de Ninsun.',
    dominio: 'El liderazgo militar y la resistencia',
    naturaleza: 'Rey-héroe, padre de Gilgamesh'
  },
  {
    slug: 'etana', nombre: 'Etana', nombre_griego: 'Etana',
    epitetos: 'El Rey que Voló al Cielo',
    descripcion_corta: 'Rey de Kish sin heredero, que rescató a un águila herida y voló con ella hasta el cielo en busca de la planta del nacimiento.',
    descripcion_larga: `Etana es un legendario rey de la ciudad de Kish, listado entre los primeros gobernantes tras el diluvio, cuyo mito narra un problema muy humano pese a su escala cósmica: Etana no tiene heredero, y sin la "planta del nacimiento" que solo existe en el cielo, su línea real está condenada a extinguirse. Su historia se entrelaza con la de un águila que había roto un pacto de amistad con una serpiente —devorando a las crías de esta pese al juramento de protegerlas mutuamente hecho ante Utu como testigo— y que, como castigo, la serpiente mutila y abandona agonizante en un pozo profundo.

Utu, compadecido del ave moribunda, guía a Etana hasta el pozo para que la rescate. Agradecida, el águila se ofrece a cargar a Etana sobre su lomo y volar con él hasta el cielo en busca de la planta que necesita. El ascenso, descrito con un vértigo notable para un texto de hace casi cuatro mil años —la tierra encogiéndose hasta parecer del tamaño de una canasta, luego de una hogaza de pan, hasta desaparecer del todo—, se interrumpe antes de alcanzar su destino final en las versiones que se conservan completas; pero listas reales posteriores sí registran a su hijo Balih como su sucesor legítimo, sugiriendo que la misión finalmente tuvo éxito.`,
    origen: 'Legendario rey de Kish, primera dinastía tras el diluvio.',
    dominio: 'El liderazgo real y la sucesión',
    naturaleza: 'Rey-héroe, el primer mortal en volar'
  },
  {
    slug: 'adapa', nombre: 'Adapa', nombre_griego: 'Adapa',
    epitetos: 'El Sabio, Hijo de Enki',
    descripcion_corta: 'El primer hombre sabio, creado por Enki — rechazó por error el pan y el agua de la inmortalidad que los dioses le ofrecían.',
    descripcion_larga: `Adapa es descrito como el primero de los siete sabios primordiales (apkallu) que Enki envió a la humanidad para enseñarle los fundamentos de la civilización, y su propio mito es, en esencia, la historia de una oportunidad perdida por exceso de obediencia. Pescador y sacerdote de Eridu, un día rompe accidentalmente el ala del viento sur con una maldición pronunciada en un arrebato de ira, lo que provoca que Anu, el dios supremo, lo convoque al cielo para rendir cuentas.

Antes de partir, Enki —temeroso de que Anu castigue a Adapa con la muerte— le da una instrucción muy precisa: acepte cualquier ropa y aceite que le ofrezcan en el cielo, pero rechace absolutamente cualquier comida o bebida, porque serán "el pan y el agua de la muerte". Adapa obedece al pie de la letra. Pero Anu, impresionado por la sinceridad del sabio, decide en cambio ofrecerle el pan y el agua de la vida eterna, invirtiendo por completo la advertencia de Enki, y Adapa, fiel a instrucciones que ya no aplicaban, los rechaza. Al enterarse de su error, Anu se limita a reírse y enviarlo de vuelta a la tierra, condenando así a toda la humanidad a la mortalidad permanente por un malentendido.`,
    origen: 'Creado por Enki, primero de los siete sabios primordiales.',
    dominio: 'La sabiduría y el sacerdocio',
    naturaleza: 'El hombre más sabio, que perdió la inmortalidad por obediencia'
  },
  {
    slug: 'shamhat', nombre: 'Shamhat', nombre_griego: 'Shamhat',
    epitetos: 'La Sacerdotisa que Civilizó a Enkidu',
    descripcion_corta: 'Sacerdotisa del templo de Inanna enviada a domesticar a Enkidu — su encuentro con él marca la transición del hombre salvaje al mundo humano.',
    descripcion_larga: `Shamhat es una sacerdotisa del templo de Inanna en Uruk, enviada por decisión del propio Gilgamesh a buscar a Enkidu en la estepa después de que un cazador se queja de que el hombre salvaje libera continuamente a los animales de sus trampas. Su misión, lejos de ser un simple encuentro, forma parte de un ritual de transformación deliberado: en la cosmovisión sumeria, la sexualidad y el conocimiento humano estaban profundamente entrelazados, y Shamhat encarna ese vínculo de manera directa.

Tras seis días y siete noches con Shamhat, Enkidu descubre que ha perdido su antigua velocidad y fuerza animal —los mismos animales de la estepa huyen ahora de él—, pero a cambio ha ganado inteligencia y capacidad de razonar como un hombre. Es también Shamhat quien lo introduce por primera vez a la comida, la bebida y la vestimenta humanas, y quien lo guía hacia Uruk para que finalmente se encuentre con Gilgamesh. Su papel en la epopeya, breve pero estructuralmente crucial, la convierte en la figura que hace posible toda la amistad central del relato: sin la transformación que ella provoca en Enkidu, la epopeya de Gilgamesh tal como se conserva simplemente no podría comenzar.`,
    origen: 'Sacerdotisa del templo de Inanna en Uruk.',
    dominio: 'Ninguno propio — agente de la transformación de Enkidu',
    naturaleza: 'Sacerdotisa civilizadora'
  },
  {
    slug: 'siduri', nombre: 'Siduri', nombre_griego: 'Siduri',
    epitetos: 'La Tabernera Divina del Fin del Mundo',
    descripcion_corta: 'Divina tabernera que vive en los confines del mundo — aconseja a Gilgamesh que abandone su búsqueda imposible y abrace la vida mortal.',
    descripcion_larga: `Siduri es una tabernera divina que vive en un jardín junto al mar, en los confines más lejanos del mundo conocido, en el límite exacto donde termina el territorio de los mortales y comienza el peligroso cruce hacia la morada de Utnapishtim. Cuando un Gilgamesh desesperado, demacrado y vestido con pieles de animal tras semanas de duelo por Enkidu, llega hasta su puerta buscando el secreto de la inmortalidad, Siduri al principio lo confunde con un asesino o un vagabundo, hasta que él le relata toda su historia.

Su respuesta, uno de los pasajes más citados de toda la literatura mesopotámica, es de una sabiduría práctica que contrasta deliberadamente con la obsesión trágica de Gilgamesh: le dice que la inmortalidad que busca es algo que los dioses se reservaron para sí mismos, y que en cambio debería llenar su vientre de buena comida, vestirse con ropas limpias, bañarse, disfrutar de su esposa e hijos, y encontrar sentido en los placeres cotidianos que sí están a su alcance. Aunque Gilgamesh no le hace caso de inmediato y continúa su viaje hasta Utnapishtim, el consejo de Siduri anticipa exactamente la conclusión filosófica a la que el propio Gilgamesh llegará al final de la epopeya, tras el fracaso definitivo de su búsqueda.`,
    origen: 'Divinidad menor, guardiana del límite entre el mundo mortal y el reino de Utnapishtim.',
    dominio: 'Ninguno propio — la sabiduría de los placeres cotidianos',
    naturaleza: 'Tabernera divina, voz de la sabiduría práctica'
  },
  {
    slug: 'urshanabi', nombre: 'Urshanabi', nombre_griego: 'Urshanabi',
    epitetos: 'El Barquero de las Aguas de la Muerte',
    descripcion_corta: 'Barquero de Utnapishtim, el único capaz de cruzar las mortales Aguas de la Muerte — guía a Gilgamesh en el tramo final de su travesía.',
    descripcion_larga: `Urshanabi es el barquero personal de Utnapishtim, el único ser capaz de navegar sin morir a través de las Aguas de la Muerte, la barrera final que separa el mundo de los mortales del refugio remoto donde vive el único hombre inmortal. Cuando Gilgamesh lo encuentra en el bosque cerca de la orilla, en medio de un arrebato de furia destroza los misteriosos objetos de piedra que Urshanabi necesitaba para cruzar sin tocar el agua letal, complicando de inmediato su propia travesía.

Urshanabi, lejos de abandonarlo, le indica una solución alternativa: cortar ciento veinte largas pértigas de madera para impulsar la barca sin necesidad de tocar el agua directamente, cada una desechada después de un solo uso. Tras cruzar exitosamente y presentar a Gilgamesh ante Utnapishtim, Urshanabi reaparece más adelante en el relato para acompañarlo de regreso a Uruk, después del fracaso de la prueba de vigilia y la posterior pérdida de la planta de la juventud eterna arrebatada por una serpiente. Es Urshanabi quien atestigua, junto a Gilgamesh, la grandeza real y perdurable de los muros de Uruk al final de la epopeya —un testigo silencioso del momento en que el rey finalmente encuentra una forma de trascendencia distinta a la inmortalidad física.`,
    origen: 'Barquero al servicio de Utnapishtim.',
    dominio: 'La navegación de las Aguas de la Muerte',
    naturaleza: 'Guía, el único capaz de cruzar hacia la inmortalidad'
  },
  {
    slug: 'ninshubur', nombre: 'Ninshubur', nombre_griego: 'Ninshubur',
    epitetos: 'La Fiel Visir de Inanna',
    descripcion_corta: 'Leal sirvienta y mensajera de Inanna — cumplió sus instrucciones al pie de la letra y logró rescatarla del inframundo.',
    descripcion_larga: `Ninshubur es la fiel sukkal (visir o mensajera personal) de Inanna, cuya lealtad inquebrantable resulta decisiva en el mito más importante de la diosa: su descenso al inframundo. Antes de emprender el peligroso viaje para desafiar a su hermana Ereshkigal, Inanna le da instrucciones precisas a Ninshubur: si no regresa en tres días, debe vestirse de duelo, recorrer los templos de los dioses más poderosos —Enlil, Nanna, y finalmente Enki— suplicando ayuda para rescatarla.

Cuando Inanna efectivamente muere a manos de Ereshkigal y su cuerpo queda colgado de un gancho en el inframundo, Ninshubur cumple cada instrucción exactamente como se le indicó, sin desviarse ni un ápice pese al rechazo inicial de Enlil y Nanna, que consideran que Inanna se buscó su propio destino. Solo Enki accede a ayudar, creando a los dos seres asexuados que finalmente logran la liberación de la diosa. Sin la persistencia metódica de Ninshubur —que no es guerrera ni posee poderes propios espectaculares, solo una devoción absoluta a cumplir su palabra— Inanna habría quedado perdida para siempre en el inframundo, lo que convierte a esta figura secundaria en, literalmente, la salvadora silenciosa de una de las diosas más poderosas de todo el panteón.`,
    origen: 'Sirvienta y mensajera personal de Inanna.',
    dominio: 'Ninguno propio — la lealtad y el cumplimiento del deber',
    naturaleza: 'Heroína leal, salvadora de Inanna'
  }
];

const MONSTRUOS = [
  {
    slug: 'humbaba', nombre: 'Humbaba', nombre_griego: 'Huwawa',
    epitetos: 'Guardián del Bosque de los Cedros',
    descripcion_corta: 'Monstruoso guardián puesto por Enlil para proteger el Bosque de los Cedros — su rostro, hecho de entrañas retorcidas, provoca terror con solo mirarlo.',
    guarida: 'El Bosque de los Cedros, en las montañas lejanas',
    amenaza: 'Su sola voz es un diluvio, su boca es fuego, su aliento es la muerte',
    descripcion_larga: `Humbaba —Huwawa en las versiones sumerias más tempranas— es el monstruo colosal designado por el propio Enlil como guardián del Bosque de los Cedros, un territorio sagrado y remoto cuya madera era tan valiosa como peligrosa de obtener. Los textos lo describen con un rostro hecho de entrañas humanas retorcidas entre sí, una imagen tan perturbadora que se convirtió en un motivo artístico recurrente en amuletos y sellos mesopotámicos, usado precisamente para ahuyentar el mal replicando su propio terror.

Cuando Gilgamesh, buscando dejar un nombre imperecedero, decide junto a Enkidu talar los cedros más grandes del bosque, ambos emprenden una expedición hasta el corazón del territorio de Humbaba. El monstruo los detecta de inmediato y los enfrenta furioso, pero Utu, el dios sol, interviene enviando ocho vientos poderosos que inmovilizan a Humbaba, incapaz de moverse o defenderse con eficacia. Con el monstruo a su merced, Humbaba suplica clemencia a Gilgamesh, ofreciéndole servirlo para siempre a cambio de su vida; Gilgamesh titubea, pero Enkidu lo convence de terminar el trabajo, y juntos lo decapitan. Su muerte acarrea consecuencias: los dioses consideran la destrucción del bosque sagrado una transgresión grave, y es uno de los motivos que sella la condena posterior de Enkidu.`
  },
  {
    slug: 'toro-del-cielo', nombre: 'El Toro del Cielo', nombre_griego: 'Gugalanna',
    epitetos: 'Gugalanna, la Bestia de la Venganza de Ishtar',
    descripcion_corta: 'Bestia celestial enviada por Anu a pedido de una Inanna despechada — su solo resoplido abre grietas que devoran a decenas de hombres.',
    guarida: 'El cielo, hasta ser liberado sobre Uruk',
    amenaza: 'Su bufido abre la tierra y traga ejércitos enteros, sus embestidas arrasan ciudades',
    descripcion_larga: `El Toro del Cielo, identificado en algunas tradiciones como Gugalanna, es una bestia celestial de proporciones devastadoras que Anu mantiene bajo su control en el cielo hasta que Inanna, furiosa por el rechazo de Gilgamesh a convertirse en su amante, exige que se lo entreguen para vengarse. Anu al principio se resiste, advirtiéndole que liberar al Toro provocará siete años de hambruna en la tierra, pero Inanna lo amenaza con romper las puertas del inframundo y liberar a los muertos si no accede, y Anu finalmente cede.

Una vez liberado sobre Uruk, el Toro causa una destrucción proporcional a su origen cósmico: con cada resoplido abre grietas profundas en la tierra que se tragan a cientos de hombres, y sus embestidas destruyen edificios y cultivos sin que nada pueda detenerlo. Gilgamesh y Enkidu, ya curtidos por su victoria previa sobre Humbaba, lo enfrentan juntos: Enkidu sujeta al Toro por los cuernos y la cola mientras Gilgamesh le clava su espada en el punto exacto entre los cuernos y la nuca, matándolo. En un gesto de desafío deliberado, Enkidu le arranca un muslo a la bestia muerta y se lo arroja a Inanna, que observa desde las murallas —un acto de arrogancia que, junto a la muerte de Humbaba, sella el destino trágico de Enkidu.`
  },
  {
    slug: 'anzu', nombre: 'Anzu', nombre_griego: 'Anzu',
    epitetos: 'El Ave Tormentosa, Ladrón del Destino',
    descripcion_corta: 'Colosal ave de tormenta que robó las Tablillas del Destino del santuario de Enlil, sumiendo al cosmos entero en el caos.',
    guarida: 'Una montaña remota, tras robar las Tablillas',
    amenaza: 'Con las Tablillas del Destino en su poder, puede deshacer cualquier arma o hechizo lanzado en su contra',
    descripcion_larga: `Anzu es una criatura colosal con cuerpo de ave y cabeza de león, personificación de las tormentas y las nubes de trueno, originalmente al servicio de Enlil en su propio santuario. Un día, mientras Enlil se baña, desprotegido de las insignias de su autoridad, Anzu aprovecha el momento para robar las Tablillas del Destino —el objeto que otorga el control absoluto sobre el orden cósmico— y huye con ellas a una montaña remota, sumiendo instantáneamente al universo en el caos: los ríos se secan y los dioses pierden buena parte de su poder.

Varios dioses poderosos son enviados a recuperar las Tablillas, pero todos rechazan la misión al comprender que, mientras Anzu las posea, es prácticamente invencible: puede deshacer cualquier arma lanzada contra él con solo pronunciar la palabra correcta, revirtiendo flechas a caña sin tallar y arcos a los árboles de donde se cortó la madera. Solo Ninurta, el hijo guerrero de Enlil, acepta finalmente el desafío, y logra vencerlo aprovechando el viento del sur para contrarrestar el poder revertidor de Anzu justo en el instante decisivo, arrancándole las alas antes de degollarlo. Anzu representa una de las amenazas más puramente cósmicas de la mitología mesopotámica: no un monstruo que devora por hambre, sino uno que amenaza con deshacer el orden mismo del universo.`
  },
  {
    slug: 'lamashtu', nombre: 'Lamashtu', nombre_griego: 'Lamashtu',
    epitetos: 'La Devoradora de Recién Nacidos',
    descripcion_corta: 'Demonio femenino temido sobre todos los demás — acecha a las mujeres embarazadas y roba a los recién nacidos mientras maman.',
    guarida: 'Los pantanos y las montañas, acechando cerca de los hogares',
    amenaza: 'Provoca abortos, enfermedades infantiles y secuestra recién nacidos para devorarlos',
    descripcion_larga: `Lamashtu es, a diferencia de la mayoría de los demonios mesopotámicos, una entidad de origen puramente divino y no un espíritu subordinado a órdenes de dioses superiores: es hija de Anu, pero actúa con una voluntad propia tan maligna que ni siquiera los otros dioses reclaman responsabilidad sobre sus actos. Se le representaba con cabeza de leona, dientes de burro, garras de ave en lugar de pies, y amamantando simultáneamente a un cerdo y a un perro —una imagen diseñada para invertir de forma perturbadora toda la iconografía habitual de la maternidad protectora.

Su especialidad, y la razón por la que era la más temida entre todos los demonios de la región, era el ataque directo contra mujeres embarazadas y recién nacidos: se creía que causaba abortos, muertes durante el parto, y que se colaba en los hogares para robar bebés mientras aún mamaban, royendo sus huesos y bebiendo su sangre. Ante una amenaza tan específica y aterradora, las familias mesopotámicas recurrían a amuletos, conjuros y, sobre todo, a la protección de Pazuzu —un demonio igual de temible pero dispuesto, por rivalidad propia con Lamashtu, a mantenerla alejada de los hogares que invocaban su nombre.`
  },
  {
    slug: 'pazuzu', nombre: 'Pazuzu', nombre_griego: 'Pazuzu',
    epitetos: 'Rey de los Demonios del Viento',
    descripcion_corta: 'Temible rey de los demonios del viento, hijo de Hanbi — paradójicamente invocado como protector contra amenazas aún peores, como Lamashtu.',
    guarida: 'Los vientos del suroeste, portadores de sequía y plaga',
    amenaza: 'Trae vientos de sequía y enfermedad, aunque puede volverse protector si se le invoca correctamente',
    descripcion_larga: `Pazuzu es el rey de los demonios del viento, hijo de Hanbi y hermano, según algunas tradiciones, del propio Humbaba. Se le representa con cuerpo humano cubierto de escamas, cabeza leonina, garras de ave, alas extendidas y una cola de escorpión, encarnando específicamente los vientos del suroeste que traían consigo sequía, plagas de langosta y enfermedad a Mesopotamia durante ciertas épocas del año.

Lo que distingue a Pazuzu de la mayoría de los demonios de la región es su naturaleza doblemente ambigua: aunque es en sí mismo una fuerza destructiva, se le consideraba también el enemigo natural de Lamashtu, la devoradora de recién nacidos, y por eso su imagen —tallada en pequeños amuletos que se colgaban del cuello de mujeres embarazadas o se colocaban junto a la cama de los enfermos— se convirtió en una de las protecciones más solicitadas de toda la religión popular mesopotámica. La lógica era tan simple como efectiva: si Pazuzu era demasiado terrible incluso para que Lamashtu se atreviera a cruzarse en su camino, entonces invocarlo como guardián resultaba más seguro que enfrentar directamente a la demonio devoradora de niños. Esta paradoja —el terror que protege del terror— resume buena parte de la lógica práctica detrás de la demonología mesopotámica cotidiana.`
  },
  {
    slug: 'mushussu', nombre: 'Mushussu', nombre_griego: 'Mushḫuššu',
    epitetos: 'La Serpiente Furiosa, Bestia de Marduk',
    descripcion_corta: 'Dragón híbrido con cuerpo de serpiente, garras de león y cola de escorpión — sirvió primero a Tiamat y después se convirtió en el emblema de Marduk.',
    guarida: 'Las puertas y templos de Babilonia, donde su imagen montaba guardia',
    amenaza: 'Escupe veneno y fuego, y su sola imagen tallada servía para espantar el mal de templos y palacios',
    descripcion_larga: `El mushussu ("serpiente furiosa") es uno de los híbridos monstruosos más representados de todo el arte mesopotámico: un dragón con cuerpo escamoso de serpiente, patas delanteras de león, patas traseras de ave rapaz, cola terminada en aguijón de escorpión y una lengua bífida siempre visible. Según el Enuma Elish, formaba parte del ejército de once monstruos que Tiamat crio específicamente para la guerra contra los dioses jóvenes, cada uno diseñado para sembrar un terror distinto entre sus enemigos.

Tras la derrota de Tiamat a manos de Marduk, el mushussu —a diferencia de la mayoría de sus compañeros monstruosos— cambia de bando: se convierte en el animal sagrado y compañero personal de Marduk, y más tarde también de Nabu, su hijo. Su imagen, tallada en relieves de ladrillo vidriado, decoraba de forma prominente la Puerta de Ishtar de Babilonia, marchando en fila junto a toros y leones como guardián simbólico de la ciudad más poderosa de Mesopotamia. El mushussu representa así una trayectoria mítica poco común entre los monstruos primordiales: de arma de la destrucción cósmica a emblema oficial del orden que esa misma destrucción terminó estableciendo.`
  },
  {
    slug: 'namtar', nombre: 'Namtar', nombre_griego: 'Namtar',
    epitetos: 'El Destino, Visir de Ereshkigal',
    descripcion_corta: 'Demonio de la peste y el destino fatal, mano derecha de Ereshkigal en el inframundo — su sola presencia anuncia una muerte inevitable.',
    guarida: 'El inframundo, junto al trono de Ereshkigal',
    amenaza: 'Personifica el destino de muerte que ningún ruego puede revertir, y porta sesenta enfermedades bajo su mando',
    descripcion_larga: `Namtar, cuyo nombre significa literalmente "destino" o "lo que está decretado", es el sukkal —visir y mensajero personal— de Ereshkigal en el inframundo, y la personificación directa del destino de muerte que cae sobre los mortales sin posibilidad de apelación. A diferencia de otros demonios mesopotámicos con funciones más específicas, Namtar encarna algo más abstracto y universal: el momento exacto e inevitable en que la vida de alguien termina.

Se le atribuye el mando sobre sesenta enfermedades distintas, que puede desatar sobre los mortales por orden directa de Ereshkigal, y aparece de forma prominente en el mito de Nergal y Ereshkigal como el detonante involuntario de todo el conflicto: cuando asiste como representante de su señora a un banquete celestial y todos los dioses se ponen de pie por respeto excepto Nergal, Namtar interpreta el gesto como una afrenta imperdonable y se lo reporta a Ereshkigal, desencadenando la crisis que termina, paradójicamente, en el matrimonio entre ambos dioses. Namtar funciona en la mitología sumeria como recordatorio constante de que la muerte no era una fuerza caótica sino un funcionario administrativo más del orden cósmico.`
  },
  {
    slug: 'gallu', nombre: 'Los demonios gallu', nombre_griego: 'Galla',
    epitetos: 'Los Verdugos Implacables del Inframundo',
    descripcion_corta: 'Demonios sin piedad al servicio del inframundo, incapaces de comer, beber o sentir compasión — fueron ellos quienes arrastraron a Dumuzi ante Inanna.',
    guarida: 'El inframundo, emergiendo solo para cumplir sus condenas',
    amenaza: 'No conocen la compasión ni pueden ser sobornados; arrastran a su víctima designada sin excepción ni piedad',
    descripcion_larga: `Los gallu (o galla) son una clase de demonios menores al servicio directo del inframundo, descritos en los textos sumerios como seres completamente ajenos a cualquier necesidad o placer humano: no comen pan, no beben agua ni cerveza, no aceptan regalos ni sobornos, y no conocen el afecto por esposas o hijos, lo que los convierte en los ejecutores perfectos de las condenas del reino de los muertos, inmunes a cualquier intento de negociación o compasión.

Su aparición más célebre en la mitología sumeria ocurre en el mito del descenso de Inanna: cuando la diosa regresa del inframundo tras su propia resurrección, debe presentar un sustituto para ocupar su lugar entre los muertos, y los gallu la acompañan de vuelta al mundo de los vivos precisamente para arrastrar a esa persona de regreso. Recorren con ella distintas ciudades, pero Inanna se niega a entregarles a los dioses menores que sí muestran duelo genuino por su desaparición, hasta que llegan al palacio de su propio esposo, Dumuzi, sentado despreocupadamente en su trono sin señal alguna de tristeza. Furiosa, Inanna finalmente los autoriza a llevárselo, y los gallu cumplen su función con la misma frialdad mecánica de siempre, sordos a los ruegos de Dumuzi y, más tarde, de su hermana Geshtinanna.`
  },
  {
    slug: 'hombres-escorpion', nombre: 'Los hombres-escorpión', nombre_griego: 'Girtablilu',
    epitetos: 'Guardianes de las Puertas del Sol',
    descripcion_corta: 'Híbridos monstruosos mitad hombre mitad escorpión que custodian el paso de las montañas Mashu, por donde el sol entra y sale del cielo cada día.',
    guarida: 'Las montañas Mashu, en los extremos del mundo',
    amenaza: 'Su sola mirada es mortal, y solo dejan pasar a quien demuestre ser parcialmente divino',
    descripcion_larga: `Los hombres-escorpión (girtablilu) son criaturas híbridas, mitad humanas y mitad escorpión, que custodian el paso a través de las montañas Mashu, el punto exacto de los confines del mundo por donde el sol se pone cada noche y vuelve a salir cada mañana. Se les describe con un terror tan absoluto asociado a su presencia que su sola mirada puede matar a cualquier mortal ordinario que se atreva a acercarse sin autorización.

En la Epopeya de Gilgamesh, es precisamente en este paso donde el héroe llega tras semanas de travesía desesperada en busca de Utnapishtim. El guardián y su esposa lo observan acercarse y, reconociendo en su apariencia algo que no es completamente mortal —"la carne de los dioses está en su cuerpo"—, deciden no matarlo de inmediato sino cuestionarlo sobre el propósito de su viaje. Convencidos por su relato de duelo y desesperación tras la muerte de Enkidu, le permiten cruzar el túnel bajo la montaña, un pasaje de completa oscuridad que debe atravesar corriendo antes de que el sol, en su recorrido nocturno, lo alcance dentro del túnel. Los hombres-escorpión representan así un tipo particular de guardián mítico: no enemigos a vencer en combate, sino jueces que evalúan si el viajero merece continuar.`
  },
  {
    slug: 'kur', nombre: 'Kur', nombre_griego: 'Kur',
    epitetos: 'El Dragón Primordial del Inframundo',
    descripcion_corta: 'Serpiente-dragón primordial asociada al inframundo mismo — en algunos relatos, una bestia que Enki debe combatir; en otros, el nombre del reino de los muertos.',
    guarida: 'Las profundidades bajo la tierra',
    amenaza: 'Encarna el caos primordial del inframundo, amenazando el equilibrio entre el mundo de los vivos y los muertos',
    descripcion_larga: `Kur es una de las figuras más antiguas y ambiguas de toda la mitología sumeria: su nombre significa literalmente "montaña" o "tierra extranjera", y se usa indistintamente para referirse tanto al inframundo como reino geográfico como a un dragón-serpiente primordial que habita en sus profundidades, dependiendo del texto y la época en que fue compuesto. Esta doble naturaleza refleja una etapa muy temprana del pensamiento mítico sumerio, anterior a la clara personificación posterior de Ereshkigal como soberana definida del inframundo.

En uno de los mitos más fragmentarios que se conservan, Kur se enfrenta directamente a Enki, que navega hacia el inframundo en su barca y es atacado por la bestia con una lluvia de piedras desde abajo del agua; el propio Enki, según el relato, contraataca con su arma, aunque el final del texto se ha perdido y no se sabe con certeza cómo concluyó el enfrentamiento. Kur también aparece asociado al secuestro simbólico que sostiene el mito de las estaciones: se dice que fue Kur quien capturó al Árbol Huluppu de Inanna en sus raíces, obligando a la diosa a pedir ayuda a Gilgamesh para liberarlo. Como concepto, Kur representa el sustrato más antiguo y menos sistematizado de la cosmología sumeria: el inframundo entendido todavía como una fuerza salvaje y devoradora.`
  },
  {
    slug: 'lahmu', nombre: 'Los Lahmu', nombre_griego: 'Lahmu',
    epitetos: 'Los Peludos, Guardianes de las Puertas del Abzu',
    descripcion_corta: 'Criaturas primordiales de largo cabello, hijos de Tiamat y Apsu — guardianes protectores de los umbrales sagrados, no monstruos hostiles.',
    guarida: 'Los umbrales y puertas de los templos, especialmente el Abzu',
    amenaza: 'Ninguna directa hacia los mortales fieles — protegen los umbrales sagrados contra la intrusión de fuerzas hostiles',
    descripcion_larga: `Los lahmu ("los peludos") son entre las primeras criaturas nacidas de la unión primordial entre Apsu y Tiamat, representados como hombres de largo cabello y barba rizada, a menudo sosteniendo o custodiando las puertas de los templos y santuarios más sagrados, en especial los relacionados con el culto a Enki y su morada, el Abzu. A diferencia de los monstruos híbridos creados después por Tiamat específicamente para la guerra contra los dioses jóvenes, los lahmu no participan en el conflicto cósmico del Enuma Elish como fuerza hostil: su función original era la de guardianes protectores, no atacantes.

Con el tiempo, su imagen se volvió tan asociada a la protección ritual que figuras de lahmu, esculpidas en piedra o moldeadas en arcilla, se enterraban bajo los umbrales de las casas y los templos mesopotámicos como amuletos apotropaicos, destinados a impedir la entrada de espíritus malignos o demonios como los propios gallu. Esta función protectora, heredada directamente de su origen primordial como hijos del Apsu, los distingue claramente de la mayoría de las criaturas de esta lista: no representan una amenaza que los héroes deban vencer, sino una fuerza antigua y benévola que los mortales invocaban activamente para mantener a raya amenazas mucho peores.`
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-sumeria'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-sumeria".');
  return filas[0].id;
}

async function sembrar(lista, tipo, libroId) {
  for (const p of lista) {
    const [existente] = await pool.query('SELECT id FROM personajes WHERE slug = ? AND libro_id = ?', [p.slug, libroId]);
    if (existente.length > 0) {
      console.log(`  - "${p.nombre}" ya existía.`);
      continue;
    }
    if (tipo === 'monstruo') {
      await pool.query(
        `INSERT INTO personajes (tipo, nombre, nombre_griego, epitetos, descripcion_corta, descripcion_larga, guarida, amenaza, slug, es_preview, libro_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?)`,
        [tipo, p.nombre, p.nombre_griego, p.epitetos, p.descripcion_corta, p.descripcion_larga, p.guarida, p.amenaza, p.slug, libroId]
      );
    } else {
      await pool.query(
        `INSERT INTO personajes (tipo, nombre, nombre_griego, epitetos, descripcion_corta, descripcion_larga, origen, dominio, naturaleza, slug, es_preview, libro_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?)`,
        [tipo, p.nombre, p.nombre_griego, p.epitetos, p.descripcion_corta, p.descripcion_larga, p.origen, p.dominio, p.naturaleza, p.slug, libroId]
      );
    }
    console.log(`  - "${p.nombre}" creado.`);
  }
}

async function main() {
  console.log('Sembrando parte 2: heroes y monstruos de Mitologia Sumeria...\n');
  const libroId = await obtenerLibroId();
  await sembrar(HEROES, 'heroe', libroId);
  await sembrar(MONSTRUOS, 'monstruo', libroId);
  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
