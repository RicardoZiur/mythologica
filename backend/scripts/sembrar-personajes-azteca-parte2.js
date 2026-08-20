// ============================================================
// scripts/sembrar-personajes-azteca-parte2.js
// ------------------------------------------------------------
// Segundo lote de contenido para Mitología Azteca: primordiales,
// héroes, monstruos y mortales (32 personajes), más 6 historias
// adicionales. Complementa sembrar-personajes-azteca.js (que cargó
// los 15 dioses principales y 4 historias fundacionales).
//
// Se decidió NO forzar la paridad exacta de 54 personajes/20 historias
// que tiene Mitología Griega -- la documentación confiable de figuras
// individuales aztecas (sobre todo "monstruos" con nombre propio) es
// más escasa, y se priorizó mantener solo contenido bien respaldado
// en vez de rellenar con figuras poco documentadas.
//
// Idempotente, mismo patrón que la parte 1.
//
// COMO CORRERLO (desde la carpeta backend/, DESPUES de la parte 1):
//   node scripts/sembrar-personajes-azteca-parte2.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // ---- Primordiales (tipo: titan) ----
  {
    slug: 'ometeotl', tipo: 'titan', nombre: 'Ometeotl', nombre_griego: 'Ōmeteōtl',
    epitetos: 'Señor y Señora de la Dualidad, Tloque Nahuaque',
    descripcion_corta: 'Dios dual, masculino y femenino a la vez — la fuente primordial de la que nacieron los cuatro Tezcatlipocas que crearon el mundo.',
    descripcion_larga: `Ometeotl es la divinidad primordial y dual de la religión mexica, simultáneamente masculina (Ometecuhtli) y femenina (Omecihuatl), que habita en Omeyocan, "el lugar de la dualidad", el treceavo y más alto de los cielos. A diferencia de los dioses activos del panteón, Ometeotl no recibía templos ni sacrificios: es un principio más abstracto que una deidad de culto, la totalidad de opuestos —luz y oscuridad, orden y caos, vida y muerte— unidos en un solo ser.

De la unión primordial de Ometeotl nacieron los cuatro Tezcatlipocas —el rojo, el negro (Tezcatlipoca), el azul (Huitzilopochtli) y el blanco (Quetzalcoatl)—, cada uno asociado a un rumbo del universo y encargado, generaciones después, de crear el mundo material a partir del monstruo primordial Cipactli. Ometeotl representa la raíz filosófica más profunda de la cosmovisión mexica: la idea de que toda existencia surge del equilibrio necesario entre fuerzas opuestas.`,
    origen: 'El principio increado, anterior a todos los demás dioses.', dominio: 'La dualidad primordial', naturaleza: 'Divinidad dual suprema', es_preview: 0
  },
  {
    slug: 'tonacatecuhtli', tipo: 'titan', nombre: 'Tonacatecuhtli', nombre_griego: 'Tōnacātēcuhtli',
    epitetos: 'Señor de Nuestro Sustento, aspecto masculino de Ometeotl',
    descripcion_corta: 'Aspecto masculino de la dualidad primordial — señor del sustento y la generación de la vida.',
    descripcion_larga: `Tonacatecuhtli es el aspecto masculino de Ometeotl, el principio dual del que surge todo lo existente, y se le identifica en muchas fuentes directamente con Ometecuhtli. Su nombre —"señor de nuestro sustento"— señala su rol como fuente de la generación de la vida y el alimento. Junto a su contraparte femenina, Tonacacihuatl, habita en Omeyocan y es padre de los cuatro Tezcatlipocas creadores.

En algunas versiones del mito de la creación, es Tonacatecuhtli, más que Ometeotl como concepto abstracto, quien aparece activamente convocando a sus cuatro hijos para ordenarles construir el mundo, el fuego y la primera pareja humana de la que descenderían generaciones anteriores a la actual.`,
    origen: 'Aspecto masculino de Ometeotl.', dominio: 'El sustento y la generación de vida', naturaleza: 'Aspecto masculino de la dualidad primordial', es_preview: 0
  },
  {
    slug: 'tonacacihuatl', tipo: 'titan', nombre: 'Tonacacihuatl', nombre_griego: 'Tōnacācihuātl',
    epitetos: 'Señora de Nuestro Sustento, Omecíhuatl',
    descripcion_corta: 'Aspecto femenino de la dualidad primordial — madre de los cuatro Tezcatlipocas creadores.',
    descripcion_larga: `Tonacacihuatl es el aspecto femenino de Ometeotl, identificada también como Omecíhuatl, y esposa-contraparte de Tonacatecuhtli en la cúspide del cosmos mexica, en el decimotercer cielo de Omeyocan. Es la madre primordial de la que nacieron los cuatro Tezcatlipocas —Xipe Totec, Tezcatlipoca, Huitzilopochtli y Quetzalcoatl—, encargados generaciones después de dar forma al mundo material y a la humanidad.

Su culto, como el de su contraparte masculina, era prácticamente inexistente en términos rituales: no tenía templos propios ni sacerdocio dedicado. Tonacacihuatl representa el principio materno más elevado y abstracto de la religión mexica, la fuente última de fertilidad de la que todo lo demás eventualmente desciende.`,
    origen: 'Aspecto femenino de Ometeotl.', dominio: 'El sustento y la maternidad primordial', naturaleza: 'Aspecto femenino de la dualidad primordial', es_preview: 0
  },
  {
    slug: 'centeotl', tipo: 'titan', nombre: 'Centeotl', nombre_griego: 'Centeōtl',
    epitetos: 'Dios del Maíz Tierno',
    descripcion_corta: 'Dios del maíz, nacido del sacrificio de una diosa — la planta que sostenía literalmente a todo el pueblo mexica.',
    descripcion_larga: `Centeotl es el dios del maíz, el cultivo más importante de Mesoamérica y sustento básico de la dieta mexica. Según el mito de su origen, nació de una diosa (identificada en distintas fuentes como Tlazolteotl o Xochiquetzal) que fue sacrificada por los demás dioses; de su cuerpo enterrado brotaron las primeras plantas de maíz, algodón y otros cultivos esenciales, en un patrón mitológico común en Mesoamérica: la muerte de una divinidad como origen directo del alimento humano.

Se le representa como una figura joven, a menudo con mazorcas de maíz brotando de su tocado. Comparte simbolismo con Xipe Totec (la semilla que debe "desollarse" para germinar) y es, junto a Tláloc, una de las divinidades más directamente ligadas a la supervivencia cotidiana del pueblo.`,
    origen: 'Nace del sacrificio de una diosa primordial.', dominio: 'El maíz y la agricultura', naturaleza: 'Dios agrícola primordial', es_preview: 0
  },
  {
    slug: 'mixcoatl', tipo: 'titan', nombre: 'Mixcoatl', nombre_griego: 'Mixcōātl',
    epitetos: 'Serpiente de Nube, Camaxtli (entre los tlaxcaltecas)',
    descripcion_corta: 'Dios ancestral de la caza y la Vía Láctea — padre de Topiltzin Quetzalcoatl, asociado a los pueblos chichimecas anteriores a los mexicas.',
    descripcion_larga: `Mixcoatl, "serpiente de nube", es una deidad ancestral de la caza, las estrellas y la Vía Láctea, venerada especialmente por los pueblos chichimecas —cazadores nómadas del norte, antepasados culturales de los mexicas— bajo el nombre de Camaxtli entre los tlaxcaltecas. Se le representa con rayas rojas y blancas en el rostro, portando arco y flechas.

Según el mito, Mixcoatl encontró en el bosque a una mujer mortal, Chimalma, y le disparó cinco flechas; ella las atrapó todas con su escudo sin sufrir daño, y de ese encuentro nació Ce Acatl Topiltzin, quien más tarde tomaría el nombre de Quetzalcoatl como rey-sacerdote de Tollan. Mixcoatl representa la capa más antigua y "salvaje" de la religión mesoamericana, anterior a la vida sedentaria de los mexicas.`,
    origen: 'Deidad de los pueblos cazadores del norte, padre de Topiltzin Quetzalcoatl.', dominio: 'La caza y la Vía Láctea', naturaleza: 'Dios ancestral chichimeca', es_preview: 0
  },

  // ---- Héroes (tipo: heroe) ----
  {
    slug: 'topiltzin-quetzalcoatl', tipo: 'heroe', nombre: 'Topiltzin Quetzalcoatl', nombre_griego: 'Cē Ācatl Tōpiltzin Quetzalcōātl',
    epitetos: 'Nuestro Príncipe, Ce Ácatl (Uno-Caña)',
    descripcion_corta: 'Rey-sacerdote tolteca que gobernó Tollan en una edad dorada, hasta que Tezcatlipoca lo derrocó — no confundir con el dios del mismo nombre.',
    descripcion_larga: `Topiltzin Quetzalcoatl fue el legendario rey-sacerdote de Tollan, hijo del dios cazador Mixcoatl y la mujer Chimalma, que tomó para sí el nombre del dios Quetzalcoatl como muestra de su devoción —una fuente constante de confusión, ya que muchas crónicas mezclan al hombre legendario con la divinidad que lo inspiró. Bajo su gobierno, Tollan alcanzó una edad dorada de arte, abundancia y paz, y Topiltzin prohibió expresamente el sacrificio humano.

Su caída llegó cuando Tezcatlipoca, disfrazado de anciano, lo engañó para que bebiera pulque hasta emborracharse por primera vez, llevándolo a cometer actos de los que después se avergonzaría profundamente. Humillado, abandonó Tollan hacia el oriente, prometiendo regresar algún día.`,
    origen: 'Hijo de Mixcoatl y Chimalma.', dominio: 'El sacerdocio y el gobierno justo', naturaleza: 'Rey-sacerdote legendario', es_preview: 1
  },
  {
    slug: 'chimalma', tipo: 'heroe', nombre: 'Chimalma', nombre_griego: 'Chīmalma',
    epitetos: 'La de la Mano-Escudo',
    descripcion_corta: 'Mujer que concibió a Topiltzin Quetzalcoatl tras atrapar cinco flechas disparadas por el dios Mixcoatl.',
    descripcion_larga: `Chimalma, "la de la mano-escudo", es la madre mortal de Topiltzin Quetzalcoatl. Según el mito, mientras caminaba por el bosque fue sorprendida por el dios cazador Mixcoatl, que le disparó cinco flechas; ella las atrapó todas con un escudo, sin sufrir daño, y de ese encuentro concibió al niño que después gobernaría Tollan.

Distintas versiones narran finales trágicos para Chimalma: en algunas muere al dar a luz; en otras es asesinada por hermanos de Mixcoatl que buscaban el trono. En todas, su papel es el mismo: la madre mortal capaz de recibir el poder de un dios sin ser destruida por él.`,
    origen: 'Mujer mortal que se encuentra con el dios Mixcoatl en el bosque.', dominio: 'Ninguno (figura mortal-legendaria)', naturaleza: 'Madre legendaria', es_preview: 0
  },
  {
    slug: 'huemac', tipo: 'heroe', nombre: 'Huemac', nombre_griego: 'Huemāc',
    epitetos: 'Mano Fuerte, último rey de Tollan',
    descripcion_corta: 'Último gobernante de Tollan tras la partida de Topiltzin Quetzalcoatl — bajo su reinado, la ciudad tolteca cayó definitivamente.',
    descripcion_larga: `Huemac, "mano fuerte", fue el gobernante que sucedió a Topiltzin Quetzalcoatl al frente de Tollan. A diferencia de la edad dorada de su predecesor, su reinado estuvo marcado por presagios funestos, hambrunas y conflictos internos que aceleraron la caída definitiva de la ciudad tolteca.

Según la tradición, Huemac fue finalmente expulsado de Tollan y se refugió en una cueva cerca de Chapultepec, donde se dice que se quitó la vida. Su historia funciona como epílogo trágico de la de Topiltzin, dispersando a la población tolteca por el Valle de México y sentando las bases que después heredarían los propios mexicas.`,
    origen: 'Sucesor de Topiltzin Quetzalcoatl en el trono de Tollan.', dominio: 'El gobierno en decadencia', naturaleza: 'Rey legendario', es_preview: 0
  },
  {
    slug: 'tenoch', tipo: 'heroe', nombre: 'Tenoch', nombre_griego: 'Tenoch',
    epitetos: 'El fundador',
    descripcion_corta: 'Sacerdote-caudillo que lideró a los mexicas en el momento final de su peregrinación y dio nombre a Tenochtitlan.',
    descripcion_larga: `Tenoch fue el sacerdote-líder mexica que, según la tradición, encabezaba al pueblo en el momento exacto en que se cumplió la profecía de Huitzilopochtli: el águila posada sobre el nopal. La propia Tenochtitlan lleva su nombre.

Las crónicas coloniales no siempre coinciden en su naturaleza exacta: algunas lo presentan como un sacerdote más entre varios, otras como el líder político indiscutido de la peregrinación final. Más allá de las variaciones, Tenoch funciona en la memoria mexica como el nombre humano detrás del momento fundacional más importante de su historia.`,
    origen: 'Líder mexica en el momento de la fundación de Tenochtitlan.', dominio: 'El liderazgo fundacional', naturaleza: 'Sacerdote-caudillo legendario', es_preview: 0
  },
  {
    slug: 'copil', tipo: 'heroe', nombre: 'Copil', nombre_griego: 'Copil',
    epitetos: 'El vengador',
    descripcion_corta: 'Hijo de Malinalxochitl que juró vengar a su madre contra Huitzilopochtli — su corazón, arrancado y arrojado al lago, dio origen al nopal de la fundación de Tenochtitlan.',
    descripcion_larga: `Copil era hijo de la hechicera Malinalxochitl, abandonada por su hermano Huitzilopochtli durante la peregrinación mexica. Criado con el resentimiento de su madre, Copil creció jurando vengarla, y de adulto reunió un ejército para atacar a los mexicas. Advertido en un sueño, Huitzilopochtli hizo que un sacerdote emboscara y capturara a Copil antes de que pudiera atacar.

Siguiendo instrucciones del dios, los mexicas sacrificaron a Copil y arrojaron su corazón a las aguas del lago. En el lugar exacto donde cayó, brotó un nopal —el mismo sobre el que se posaría el águila que marcaría el sitio de Tenochtitlan.`,
    origen: 'Hijo de Malinalxochitl, sobrino de Huitzilopochtli.', dominio: 'La venganza', naturaleza: 'Guerrero-hechicero legendario', es_preview: 0
  },
  {
    slug: 'malinalxochitl', tipo: 'heroe', nombre: 'Malinalxochitl', nombre_griego: 'Malīnalxōchitl',
    epitetos: 'Flor de Hierba Torcida',
    descripcion_corta: 'Hermana de Huitzilopochtli y poderosa hechicera, abandonada durante la peregrinación mexica por considerarla una amenaza a su liderazgo.',
    descripcion_larga: `Malinalxochitl era una poderosa hechicera, hermana de Huitzilopochtli, capaz de controlar escorpiones y serpientes del desierto. Durante la peregrinación mexica, su hermano —temeroso de que su magia desafiara su propio liderazgo— ordenó abandonarla dormida junto a un grupo de seguidores mientras el resto del pueblo continuaba la marcha en secreto.

Al despertar abandonada, Malinalxochitl fundó su propio asentamiento, Malinalco, con quienes habían quedado junto a ella. Ahí crió a su hijo Copil, alimentando el resentimiento que después lo llevaría a intentar vengarla contra los mexicas.`,
    origen: 'Hermana de Huitzilopochtli, abandonada durante la peregrinación.', dominio: 'La hechicería', naturaleza: 'Hechicera legendaria', es_preview: 0
  },
  {
    slug: 'cuauhcoatl', tipo: 'heroe', nombre: 'Cuauhcoatl', nombre_griego: 'Cuāuhcōātl',
    epitetos: 'Serpiente Águila',
    descripcion_corta: 'Anciano sacerdote mexica que, según la tradición, recibió en sueños la visión que confirmó el sitio de fundación de Tenochtitlan.',
    descripcion_larga: `Cuauhcoatl, "serpiente águila", fue uno de los ancianos sacerdotes que guiaban al pueblo mexica en los días finales de su peregrinación, cuando ya exploraban los islotes pantanosos del lago Texcoco. Según la tradición, mientras buscaba terreno junto a otro anciano, Axolohua, recibió en sueños una visita de Huitzilopochtli, que le confirmó que el sitio marcado por el águila y el nopal ya estaba cerca.

Junto a Axolohua, Cuauhcoatl representa el papel del sacerdocio mexica como intermediario directo entre el pueblo y su dios tutelar durante el momento más crítico de su historia.`,
    origen: 'Uno de los ancianos guías del pueblo mexica en su peregrinación final.', dominio: 'El sacerdocio', naturaleza: 'Sacerdote legendario', es_preview: 0
  },
  {
    slug: 'axolohua', tipo: 'heroe', nombre: 'Axolohua', nombre_griego: 'Axolōhua',
    epitetos: 'El explorador de las aguas',
    descripcion_corta: 'Sacerdote mexica que, junto a Cuauhcoatl, exploró los islotes del lago Texcoco hasta encontrar el sitio exacto de la fundación de Tenochtitlan.',
    descripcion_larga: `Axolohua fue, junto a Cuauhcoatl, uno de los ancianos sacerdotes mexicas encargados de explorar los islotes pantanosos del lago Texcoco en busca de tierra firme. Las crónicas describen a ambos vadeando el agua fangosa día tras día hasta divisar el águila posada sobre el nopal que Huitzilopochtli había prometido.

Según versiones más elaboradas del mito, Axolohua incluso se sumergió en un remolino del lago y descendió a un palacio subacuático donde se encontró con Tláloc, quien bendijo el nuevo asentamiento mexica —conectando simbólicamente la fundación de Tenochtitlan tanto con Huitzilopochtli como con el dios de la lluvia.`,
    origen: 'Uno de los ancianos guías del pueblo mexica en su peregrinación final.', dominio: 'La exploración y el agua', naturaleza: 'Sacerdote legendario', es_preview: 0
  },
  {
    slug: 'nezahualcoyotl', tipo: 'heroe', nombre: 'Nezahualcoyotl', nombre_griego: 'Nezahualcōyōtl',
    epitetos: 'Coyote Hambriento/en Ayuno',
    descripcion_corta: 'Rey-poeta de Texcoco, figura histórica profundamente mitificada — sobrevivió de niño a la persecución de su familia y llegó a cuestionar el sacrificio humano y el politeísmo mismo.',
    descripcion_larga: `Nezahualcoyotl, "coyote en ayuno", fue el tlatoani de Texcoco entre 1431 y 1472, una figura histórica real cuya vida está tan envuelta en leyenda que su lugar en la tradición mexica es tanto el de un hombre real como el de un héroe casi mítico. De niño presenció el asesinato de su padre y pasó años huyendo antes de recuperar el trono, formando después la Triple Alianza junto a Tenochtitlan y Tlacopan.

Lo que lo distingue es su fama como poeta y filósofo: se le atribuyen decenas de poemas sobre la fugacidad de la vida y la existencia de un solo dios creador, invisible y sin templos, más allá de la multitud de divinidades del panteón oficial.`,
    origen: 'Príncipe de Texcoco, sobreviviente de la persecución de su familia.', dominio: 'La sabiduría y el gobierno justo', naturaleza: 'Rey-poeta semilegendario', es_preview: 0
  },
  {
    slug: 'acamapichtli', tipo: 'heroe', nombre: 'Acamapichtli', nombre_griego: 'Ācamāpichtli',
    epitetos: 'Puñado de Cañas, primer tlatoani',
    descripcion_corta: 'Primer tlatoani (gobernante) de Tenochtitlan, elegido para dar legitimidad dinástica a la ciudad recién fundada.',
    descripcion_larga: `Acamapichtli, "puñado de cañas", fue elegido primer tlatoani de Tenochtitlan varias décadas después de la fundación de la ciudad. Era hijo de un guerrero mexica y una princesa de Culhuacán, ciudad que descendía de los toltecas —el matrimonio le daba a Tenochtitlan un vínculo dinástico con ese prestigio que ningún mexica de nacimiento puro podía ofrecer por sí solo.

Su elección marca la transición de Tenochtitlan de asentamiento recién fundado a ciudad-estado con gobierno dinástico formal, el primer eslabón de la línea de tlatoque que un siglo después culminaría en gobernantes como Moctezuma.`,
    origen: 'Hijo de un guerrero mexica y una princesa de Culhuacán.', dominio: 'El gobierno dinástico', naturaleza: 'Primer rey histórico-legendario', es_preview: 0
  },

  // ---- Monstruos (tipo: monstruo) ----
  {
    slug: 'cipactli', tipo: 'monstruo', nombre: 'Cipactli', nombre_griego: 'Cipactli',
    epitetos: 'El monstruo de la tierra primordial',
    descripcion_corta: 'Criatura marina primigenia, mitad cocodrilo mitad pez, siempre hambrienta — su cuerpo partido en dos formó la tierra y el cielo.',
    descripcion_larga: `Cipactli es el monstruo primordial que existía cuando el mundo todavía no tomaba forma: una criatura gigantesca con rasgos de cocodrilo, pez y sapo, cubierta de bocas y ojos en cada articulación, devorando todo lo que encontraba con un hambre insaciable, flotando sola sobre las aguas primordiales.

Quetzalcoatl y Tezcatlipoca, decididos a crear el mundo, se transformaron en serpientes gigantes y la atacaron; en la lucha, Tezcatlipoca perdió un pie, que Cipactli le arrancó de un mordisco. Finalmente lograron partir su cuerpo en dos: de la mitad superior formaron el cielo, y de la inferior, la tierra, cuyas montañas son su espalda.`,
    guarida: 'Las aguas primordiales, antes de la creación del mundo', amenaza: 'Devora todo lo que encuentra con su hambre insaciable', es_preview: 1
  },
  {
    slug: 'tlaltecuhtli', tipo: 'monstruo', nombre: 'Tlaltecuhtli', nombre_griego: 'Tlāltēcuhtli',
    epitetos: 'Señor/Señora de la Tierra',
    descripcion_corta: 'Monstruo terrestre con forma de sapo o caimán gigante, cuyo cuerpo desmembrado —según otra versión del mito— formó el mundo.',
    descripcion_larga: `Tlaltecuhtli es, en muchas fuentes, otra forma de referirse al mismo monstruo primordial que Cipactli, o una entidad estrechamente relacionada: un ser de género ambiguo, representado como sapo o caimán gigante cubierto de bocas devoradoras en cada articulación. Al igual que en el mito de Cipactli, Quetzalcoatl y Tezcatlipoca lo desmembraron para formar la tierra.

Se creía que el monstruo, furioso por haber sido desgarrado, exigía ser alimentado continuamente con sangre humana para permitir que las plantas crecieran. Su imagen aparece tallada boca abajo en la base de numerosos monumentos mexicas, incluyendo el que sostenía el Templo Mayor.`,
    guarida: 'El cuerpo mismo de la tierra', amenaza: 'Exige sangre humana constante para sostener el mundo sobre su cuerpo desgarrado', es_preview: 0
  },
  {
    slug: 'tzitzimitl', tipo: 'monstruo', nombre: 'Tzitzimitl', nombre_griego: 'Tzitzimitl (pl. Tzitzimimeh)',
    epitetos: 'Demonios/monstruos de las estrellas',
    descripcion_corta: 'Deidades esqueléticas asociadas a las estrellas y los eclipses — amenazan con descender a devorar a la humanidad si el sol llega a apagarse.',
    descripcion_larga: `Las Tzitzimime son un grupo de deidades femeninas de aspecto esquelético, asociadas a las estrellas y particularmente temidas durante los eclipses solares. Se les representa como mujeres-esqueleto con garras, vestidas con faldas de huesos y cráneos —una imagen que combina fertilidad y muerte de forma tan directa como Coatlicue.

Los mexicas creían que si el sol se apagaba —el fin de la quinta era— las Tzitzimime descenderían del cielo nocturno para devorar a la humanidad entera. Cada eclipse solar era un ensayo aterrador de ese fin del mundo.`,
    guarida: 'Las estrellas y el cielo nocturno', amenaza: 'Devorarían a la humanidad si el sol se apagara para siempre', es_preview: 0
  },
  {
    slug: 'ahuizotl', tipo: 'monstruo', nombre: 'Ahuizotl', nombre_griego: 'Āhuitzotl',
    epitetos: 'El espinoso del agua',
    descripcion_corta: 'Criatura acuática parecida a un perro, con una mano en la punta de la cola que usa para arrastrar a sus víctimas bajo el agua.',
    descripcion_larga: `El ahuízotl es una criatura que habita lagos y manantiales profundos, descrita como un animal del tamaño de un perro pequeño, con manos humanas en cada una de sus cuatro patas y una mano adicional funcional en la punta de su larga cola prensil. Se ocultaba bajo el agua, atrayendo víctimas con el llanto de un bebé.

Cuando alguien se acercaba a investigar, usaba la mano de su cola para arrastrarlo al fondo y ahogarlo. Días después, el cuerpo aparecía flotando sin los ojos, las uñas y los dientes, que la criatura consumía como sus partes preferidas.`,
    guarida: 'Lagos y manantiales profundos', amenaza: 'Ahoga a sus víctimas y devora sus ojos, uñas y dientes', es_preview: 0
  },
  {
    slug: 'itzpapalotl', tipo: 'monstruo', nombre: 'Itzpapalotl', nombre_griego: 'Itzpāpālōtl',
    epitetos: 'Mariposa de Obsidiana',
    descripcion_corta: 'Diosa-guerrera esquelética con alas de mariposa hechas de cuchillos de obsidiana — una de las Tzitzimime, reina del paraíso de Tamoanchan.',
    descripcion_larga: `Itzpapalotl, "mariposa de obsidiana", es una de las Tzitzimime más prominentes, representada como una guerrera esquelética con garras y alas de mariposa hechas de filosas cuchillas de obsidiana. Gobierna Tamoanchan, un paraíso mítico asociado tanto al origen de la humanidad como al destino de los niños muertos en la infancia.

Su naturaleza es profundamente dual: puede aparecer como una bella mujer o revelar su forma esquelética verdadera sin previo aviso. En algunas tradiciones se dice que murió al morder una fruta prohibida en Tamoanchan.`,
    guarida: 'Tamoanchan, el paraíso mítico occidental', amenaza: 'Guerrera de cuchillas de obsidiana, una de las estrellas devoradoras', es_preview: 0
  },
  {
    slug: 'centzon-totochtin', tipo: 'monstruo', nombre: 'Centzon Totochtin', nombre_griego: 'Centzon Tōtōchtin',
    epitetos: 'Los Cuatrocientos Conejos',
    descripcion_corta: 'Grupo de dioses menores, hijos de Mayahuel, cada uno personificando un efecto distinto de la embriaguez por pulque.',
    descripcion_larga: `Los Centzon Totochtin, "los cuatrocientos conejos" (usado para significar "innumerables"), son un grupo de dioses menores hijos de Mayahuel y Patecatl, cada uno de los cuales personifica un estado distinto de la embriaguez producida por el pulque: desde la risa incontrolable hasta la violencia repentina.

Se elegía al conejo como su animal totémico por su reputación de comportamiento errático. El culto a los Centzon Totochtin reflejaba la comprensión mexica de que la embriaguez no era un estado único, sino una fuerza múltiple y caprichosa.`,
    guarida: 'Donde se consume el pulque en exceso', amenaza: 'Cada uno provoca un efecto distinto e incontrolable de la embriaguez', es_preview: 0
  },
  {
    slug: 'centzon-mimixcoa', tipo: 'monstruo', nombre: 'Centzon Mimixcoa', nombre_griego: 'Centzon Mīmixcōa',
    epitetos: 'Las Cuatrocientas Serpientes de Nube',
    descripcion_corta: 'Guerreros-estrella del norte, hermanos de Mixcoatl, sacrificados por él mismo para consagrar el primer amanecer del quinto sol.',
    descripcion_larga: `Los Centzon Mimixcoa son un grupo de guerreros celestiales asociados a las estrellas del norte, hermanos o seguidores de Mixcoatl. Según el mito, tras la creación del quinto sol, estos guerreros se negaron a participar en el sacrificio necesario para darle fuerza al nuevo astro, y decidieron ocultarse.

Mixcoatl, encargado de encontrarlos, les dio caza uno por uno, cumpliendo el mismo papel que Huitzilopochtli con sus propios hermanos del sur: el sacrificio de las estrellas del cielo nocturno para que el sol pudiera moverse.`,
    guarida: 'El cielo nocturno del norte', amenaza: 'Guerreros estelares que se resisten al sacrificio necesario para el orden cósmico', es_preview: 0
  },
  {
    slug: 'nahual', tipo: 'monstruo', nombre: 'Nahual', nombre_griego: 'Nāhualli',
    epitetos: 'El doble animal',
    descripcion_corta: 'Hechicero o brujo capaz de transformarse en un animal —jaguar, coyote, búho— para hacer el bien o el mal según su voluntad.',
    descripcion_larga: `El nahualismo es una de las creencias más extendidas de la religión mesoamericana: ciertas personas —sacerdotes, hechiceros, gobernantes poderosos— poseían un "doble" animal con el que compartían destino y en el que podían transformarse a voluntad, especialmente de noche. Un nahual bien intencionado protegía a su comunidad; uno malicioso atacaba sin ser reconocido en su forma humana.

Se creía que herir al animal-nahual hería igualmente al humano correspondiente. Figuras como Mixcoatl, Tezcatlipoca o Nezahualcoyotl (cuyo nombre significa "coyote en ayuno") están conectadas con esta idea del doble animal.`,
    guarida: 'Cualquier lugar, bajo apariencia animal', amenaza: 'Puede atacar o hechizar sin ser reconocido, oculto en su forma animal', es_preview: 0
  },
  {
    slug: 'coyotlinahual', tipo: 'monstruo', nombre: 'Coyotlinahual', nombre_griego: 'Cōyōtlināhual',
    epitetos: 'El coyote-nahual, artesano de plumas',
    descripcion_corta: 'Nahual artesano especializado en trabajos de plumería — según el mito, fue quien disfrazó a Quetzalcoatl con las plumas del dios sol para engañar a sus enemigos.',
    descripcion_larga: `Coyotlinahual, "coyote-nahual", es una figura asociada al oficio de la plumería —el arte de crear mantos y tocados con plumas preciosas—, y patrón particular de quienes trabajaban con plumas de águila. Su nombre lo vincula directamente con el nahualismo.

En uno de los episodios del ciclo mítico de Quetzalcoatl, es Coyotlinahual quien lo ayuda a disfrazarse con un elaborado atuendo de plumas antes de su encuentro decisivo con Tezcatlipoca. Representa la conexión mexica entre la artesanía especializada y lo sobrenatural.`,
    guarida: 'Los talleres de plumería', amenaza: 'Ninguna directa — figura ambigua entre artesano y espíritu protector', es_preview: 0
  },
  {
    slug: 'chaneques', tipo: 'monstruo', nombre: 'Chaneques', nombre_griego: 'Chaneque',
    epitetos: 'Los dueños del lugar',
    descripcion_corta: 'Espíritus pequeños y traviesos que habitan bosques, ríos y cuevas — guardianes de la naturaleza que castigan a quienes irrespetan su territorio.',
    descripcion_larga: `Los chaneques son espíritus de la naturaleza, descritos como pequeñas figuras con apariencia de niños o ancianos diminutos, que habitan bosques, cuevas y ríos considerados sagrados. Actúan como guardianes: castigan con travesuras o enfermedades a quienes cortan árboles sin permiso o contaminan el agua.

Una creencia extendida es su capacidad de "robar el alma" de los niños que se aventuran solos en su territorio. Aunque su forma más difundida hoy pertenece más al folclore regional posterior, comparten raíz con la creencia mesoamericana en espíritus tutelares del territorio natural.`,
    guarida: 'Bosques, cuevas y ríos', amenaza: 'Roba el alma de niños que invaden su territorio sin respeto', es_preview: 0
  },
  {
    slug: 'tepeyollotl', tipo: 'monstruo', nombre: 'Tepeyollotl', nombre_griego: 'Tepēyōllōtl',
    epitetos: 'Corazón del Cerro',
    descripcion_corta: 'Dios-jaguar de las cuevas, el eco y los terremotos — un aspecto nocturno de Tezcatlipoca asociado a las profundidades de la tierra.',
    descripcion_larga: `Tepeyollotl, "corazón de la montaña", es una deidad con forma de jaguar asociada a las cuevas, el interior de las montañas, el eco y los terremotos. Se le considera un aspecto o desdoblamiento de Tezcatlipoca en su forma más primitiva y telúrica —el jaguar nocturno que gobernó el primer sol.

Se le rendía culto en regiones cercanas a cuevas y montañas, donde el eco de la voz humana al gritar dentro de una caverna se interpretaba como la respuesta directa del dios. Representa el poder oculto que la tierra guarda bajo su superficie.`,
    guarida: 'Cuevas y el interior de las montañas', amenaza: 'Provoca terremotos y ecos inexplicables desde las profundidades', es_preview: 0
  },
  {
    slug: 'cihuateteo', tipo: 'monstruo', nombre: 'Cihuateteo', nombre_griego: 'Cihuātēteoh',
    epitetos: 'Las Mujeres Divinas',
    descripcion_corta: 'Espíritus de las mujeres muertas en su primer parto, honradas como guerreras — pero temidas de noche, cuando pueden descender a causar enfermedad o robar niños.',
    descripcion_larga: `Las Cihuateteo son las almas de las mujeres que morían dando a luz por primera vez, consideradas guerreras con el mismo honor que los hombres caídos en batalla: ambos acompañaban al sol en su recorrido diario, los guerreros hasta el mediodía, y las Cihuateteo desde ahí hasta el ocaso.

De día eran veneradas como protectoras; de noche, se creía que descendían a los cruces de caminos convertidas en espíritus peligrosos, capaces de provocar parálisis y enfermedad, y de dañar a los niños pequeños.`,
    guarida: 'Los cruces de caminos, de noche', amenaza: 'Provoca parálisis, convulsiones y enfermedad; puede dañar a los niños', es_preview: 0
  },

  // ---- Mortales (tipo: mortal) ----
  {
    slug: 'ixtaccihuatl', tipo: 'mortal', nombre: 'Ixtaccíhuatl', nombre_griego: 'Ixtaccihuātl',
    epitetos: 'Mujer Blanca / Mujer Dormida',
    descripcion_corta: 'Princesa mortal cuya muerte por un falso rumor de guerra dio origen, junto a su amado, al par de volcanes más famosos del Valle de México.',
    descripcion_larga: `Ixtaccíhuatl era hija de un poderoso señor, enamorada del guerrero Popocatépetl, quien partió a la guerra prometiendo casarse con ella si volvía victorioso. Mientras él luchaba, un rival celoso hizo correr el falso rumor de que había muerto en batalla. Ixtaccíhuatl murió de tristeza antes del regreso real de su amado.

Cuando Popocatépetl volvió victorioso y la encontró sin vida, cargó su cuerpo hasta la cima de una montaña y se arrodilló a su lado con una antorcha. Los dioses los transformaron a ambos en volcanes: ella en la "Mujer Dormida", cuyo perfil recuerda el de una mujer recostada.`,
    origen: 'Hija de un señor del Valle de México, amada de Popocatépetl.', dominio: 'Ninguno (figura mortal)', naturaleza: 'Princesa legendaria', es_preview: 1
  },
  {
    slug: 'popocatepetl', tipo: 'mortal', nombre: 'Popocatépetl', nombre_griego: 'Popōcatepētl',
    epitetos: 'Montaña que Humea, guerrero legendario',
    descripcion_corta: 'Guerrero mortal que, al regresar victorioso de la guerra y encontrar muerta a su amada Ixtaccíhuatl, fue transformado junto a ella en un volcán.',
    descripcion_larga: `Popocatépetl era un guerrero enamorado de la princesa Ixtaccíhuatl, a quien prometió casarse tras regresar victorioso de una campaña militar. Un rival despechado difundió el falso rumor de su muerte en batalla, precipitando la muerte de Ixtaccíhuatl por pena antes de que él pudiera desmentirlo.

Al volver y encontrar a su amada sin vida, la cargó hasta la cima de una montaña y se arrodilló junto a ella con una antorcha encendida, jurando velarla para siempre. Los dioses lo transformaron en un volcán activo, "la montaña que humea" —su antorcha eterna manifestándose en el humo que el volcán real todavía expulsa.`,
    origen: 'Guerrero enamorado de Ixtaccíhuatl.', dominio: 'Ninguno (figura mortal)', naturaleza: 'Guerrero legendario', es_preview: 0
  },
  {
    slug: 'xochitl-doncella', tipo: 'mortal', nombre: 'Xóchitl', nombre_griego: 'Xōchitl',
    epitetos: 'Flor, la doncella del pulque',
    descripcion_corta: 'Joven mortal a quien se atribuye el descubrimiento de cómo extraer y fermentar el aguamiel del maguey para crear el pulque.',
    descripcion_larga: `Según una tradición distinta pero complementaria al mito divino de Mayahuel, fue una joven mortal llamada Xóchitl quien descubrió, junto a su padre Papantzin, la técnica para raspar el corazón del maguey y extraer el aguamiel, y después fermentarlo hasta convertirlo en pulque. Padre e hija llevaron el descubrimiento como regalo ante el gobernante tolteca de la época.

Xóchitl representa, junto a la diosa Mayahuel, la doble explicación mexica típica para elementos centrales de su cultura: un origen divino y cósmico coexistiendo con una versión más terrenal, protagonizada por seres humanos que descubren el conocimiento mediante la observación.`,
    origen: 'Hija de Papantzin, descubridora humana del pulque.', dominio: 'Ninguno (figura mortal)', naturaleza: 'Doncella legendaria', es_preview: 0
  },
  {
    slug: 'quetzalpetlatl', tipo: 'mortal', nombre: 'Quetzalpetlatl', nombre_griego: 'Quetzalpetlatl',
    epitetos: 'Hermana de Topiltzin Quetzalcoatl',
    descripcion_corta: 'Hermana del rey-sacerdote de Tollan, involucrada en el episodio de embriaguez que precipitó su caída y exilio.',
    descripcion_larga: `Quetzalpetlatl era hermana de Topiltzin Quetzalcoatl, figura central en uno de los episodios más comentados de su caída. Según el mito, después de que Tezcatlipoca emborrachara a Topiltzin con pulque por primera vez, el dios engañador insistió en que también llamara a su hermana a beber con él.

Ya ebrios ambos, algunas versiones narran que Topiltzin y Quetzalpetlatl yacieron juntos esa noche, un acto que, al recordarlo, sumió al rey-sacerdote en una vergüenza tan profunda que aceleró su decisión de abandonar Tollan para siempre.`,
    origen: 'Hermana de Topiltzin Quetzalcoatl.', dominio: 'Ninguno (figura mortal)', naturaleza: 'Princesa tolteca', es_preview: 0
  },
  {
    slug: 'princesa-de-culhuacan', tipo: 'mortal', nombre: 'La princesa de Culhuacán', nombre_griego: '(nombre no registrado en las fuentes)',
    epitetos: 'La princesa desollada',
    descripcion_corta: 'Hija del señor de Culhuacán, sacrificada por orden de Huitzilopochtli para convertirla en la diosa Toci — un episodio que provocó la expulsión mexica de esa ciudad.',
    descripcion_larga: `Durante su peregrinación, los mexicas se establecieron temporalmente como vasallos del señorío de Culhuacán, gobernado por Achitométl. Huitzilopochtli pidió que la propia hija de Achitométl fuera entregada a los mexicas para convertirla en su "diosa madre" —petición que el señor culhuacano, interpretándola como una propuesta matrimonial honrosa, aceptó de buena fe.

Pero Huitzilopochtli exigía en realidad un sacrificio: los sacerdotes mataron a la joven y desollaron su cuerpo, y un sacerdote se vistió con su piel para personificar a la diosa Toci. Al descubrirlo, Achitométl y su ciudad expulsaron violentamente a los mexicas, forzándolos a continuar hacia el lago Texcoco.`,
    origen: 'Hija de Achitométl, señor de Culhuacán.', dominio: 'Ninguno (figura mortal)', naturaleza: 'Princesa sacrificada', es_preview: 0
  }
];

const HISTORIAS = [
  {
    slug: 'descenso-de-quetzalcoatl-al-mictlan', titulo: 'El descenso de Quetzalcoatl al Mictlán', tipo: 'cosmogonia', periodo: 'Después de la creación del quinto sol', es_preview: 0,
    resumen: 'Quetzalcoatl desciende al inframundo a robar los huesos de las generaciones pasadas, esquiva las trampas de Mictlantecuhtli, y con su propia sangre da origen a la humanidad de la quinta era.',
    texto_completo: `Cuando el quinto sol ya iluminaba el cielo, la tierra seguía vacía de seres humanos: las generaciones de las eras anteriores habían sido destruidas junto con sus mundos, y solo quedaban sus huesos, guardados en las profundidades del Mictlán, gobernado por Mictlantecuhtli y su esposa Mictecacihuatl. Quetzalcoatl, decidido a poblar de nuevo la tierra, descendió a buscarlos, acompañado por su hermano gemelo Xólotl.

Al llegar ante el Señor de los Muertos, Quetzalcoatl pidió los huesos preciosos de las generaciones pasadas. Mictlantecuhtli, receloso, aceptó entregarlos solo si Quetzalcoatl lograba primero hacer sonar una caracola sin agujeros, dándole cuatro vueltas completas alrededor de su reino. Quetzalcoatl, ingenioso, llamó a unos gusanos para que perforaran la caracola y a unas abejas para que zumbaran dentro de ella, produciendo un sonido que convenció a Mictlantecuhtli de que la prueba estaba cumplida.

A regañadientes, el señor del inframundo indicó dónde estaban los huesos, pero se arrepintió de inmediato y ordenó cavar una fosa en el camino para que Quetzalcoatl cayera en ella. El plan funcionó: Quetzalcoatl tropezó, cayó dentro de la fosa y quedó momentáneamente sin sentido, dejando caer y quebrar los huesos que ya llevaba, esparciéndolos y mezclando los de distintas generaciones y tamaños —el origen, según algunos relatos, de por qué los seres humanos actuales tienen estaturas tan diversas.

Cuando Quetzalcoatl despertó, recogió como pudo los fragmentos rotos y logró escapar del Mictlán con ellos. Ya en la superficie, llevó los huesos a Tamoanchan, donde la diosa Cihuacóatl los molió hasta convertirlos en un polvo fino. Sobre ese polvo, Quetzalcoatl se practicó un corte y dejó caer su propia sangre, mezclándola con los restos molidos de las generaciones pasadas. De esa mezcla —hueso ajeno y sangre divina— nacieron los primeros hombres y mujeres de la quinta era, la humanidad que puebla el mundo actual.`,
    personajes: [['quetzalcoatl', 'protagonista'], ['xolotl', 'secundario'], ['mictlantecuhtli', 'antagonista']]
  },
  {
    slug: 'origen-del-maguey-y-el-pulque', titulo: 'El origen del maguey y el pulque', tipo: 'amor', periodo: 'Tiempos antiguos', es_preview: 0,
    resumen: 'Quetzalcoatl rescata a la joven Mayahuel de su abuela, una tzitzimitl; al ser descubiertos y ella despedazada, de sus restos enterrados nace la primera planta de maguey.',
    texto_completo: `Mayahuel vivía prisionera en el cielo, bajo el cuidado estricto de su abuela, una temible tzitzimitl que no le permitía descender jamás a la tierra. Quetzalcoatl, al conocerla, se enamoró de su belleza y decidió rescatarla: transformado en un torbellino de viento, ascendió hasta donde ella dormía y la convenció de escapar juntos hacia el mundo de los hombres.

Para pasar desapercibidos durante el descenso, ambos se transformaron en las ramas entrelazadas de un mismo árbol, creciendo como si fueran una sola planta. Pero la abuela de Mayahuel, al despertar y descubrir su ausencia, convocó a las demás tzitzimime para que la ayudaran a buscarla. Finalmente dieron con el árbol sospechoso, y reconociendo el engaño, la abuela furiosa arrancó la rama que era Mayahuel y la despedazó, repartiendo los pedazos entre las demás tzitzimime.

Quetzalcoatl, que había recuperado su forma original a tiempo para escapar del ataque, esperó a que las tzitzimime se marcharan y recogió con dolor los pocos huesos de Mayahuel que quedaban esparcidos por el suelo. Los enterró con cuidado en la tierra, y de esa sepultura brotó, días después, la primera planta de maguey que existió en el mundo.

Del corazón de esa primera planta, los hombres aprendieron después a extraer el aguamiel, y de su fermentación, el pulque: una bebida que los mexicas consideraban sagrada, capaz tanto de alegrar como de descontrolar a quien la bebía sin la debida mesura —el mismo destino trágico de amor y pérdida que le dio origen.`,
    personajes: [['mayahuel', 'protagonista'], ['quetzalcoatl', 'protagonista']]
  },
  {
    slug: 'ixtaccihuatl-y-popocatepetl', titulo: 'La leyenda de Ixtaccíhuatl y Popocatépetl', tipo: 'amor', periodo: 'Época prehispánica, sin fecha precisa', es_preview: 1,
    resumen: 'Un falso rumor de guerra provoca la muerte de una princesa; su amado, al volver victorioso y encontrarla sin vida, la vela para siempre, y los dioses transforman a ambos en los dos volcanes del Valle de México.',
    texto_completo: `Ixtaccíhuatl, hija de un poderoso señor del Valle de México, estaba enamorada del guerrero Popocatépetl, y él de ella con la misma intensidad. Antes de partir a una campaña militar, Popocatépetl prometió al padre de Ixtaccíhuatl que, si regresaba victorioso, tendría el derecho de casarse con su hija.

Pero otro pretendiente de Ixtaccíhuatl, celoso al ver que ella solo tenía ojos para Popocatépetl, aprovechó su ausencia para esparcir un rumor cruel: que el guerrero había muerto en batalla. Ixtaccíhuatl, incapaz de soportar el dolor de la noticia, cayó enferma de pena y murió antes de que nadie pudiera desmentir el engaño.

Popocatépetl regresó victorioso semanas después, ansioso por reclamar a su prometida. Al enterarse de la verdad, el dolor lo desbordó por completo. Cargó el cuerpo sin vida de Ixtaccíhuatl en sus brazos y caminó hasta la cima de una de las montañas más altas del valle, donde la recostó con delicadeza. Se arrodilló a su lado, encendió una antorcha, y juró que la velaría para siempre.

Conmovidos por la fidelidad de ese amor, los dioses transformaron a ambos en montañas: Ixtaccíhuatl en la "Mujer Dormida", cuyo perfil recostado todavía dibuja la silueta de una mujer; Popocatépetl en el volcán vecino, activo hasta el día de hoy, la antorcha eterna de su vigilia manifestándose en el humo y el fuego que sigue expulsando.`,
    personajes: [['ixtaccihuatl', 'protagonista'], ['popocatepetl', 'protagonista']]
  },
  {
    slug: 'venganza-de-copil', titulo: 'La venganza de Copil', tipo: 'tragedia', periodo: 'Durante la peregrinación mexica, antes de la fundación de Tenochtitlan', es_preview: 0,
    resumen: 'Copil, hijo de la hechicera abandonada Malinalxochitl, jura vengar a su madre contra Huitzilopochtli — su derrota y sacrificio dan origen, sin quererlo, al símbolo fundacional de Tenochtitlan.',
    texto_completo: `Cuando Huitzilopochtli ordenó abandonar a su propia hermana Malinalxochitl durante la peregrinación mexica, ella se estableció en Malinalco y crió ahí a su hijo Copil, alimentándolo con el resentimiento de su abandono. Copil creció convencido de que algún día la vengaría, y cuando supo que los mexicas se acercaban al lago Texcoco, reunió un ejército de aliados dispuesto a destruirlos.

Huitzilopochtli, siempre atento a las amenazas contra su pueblo, se le apareció en sueños a un sacerdote y le reveló el plan de Copil con todo detalle. Advertidos con tiempo, los mexicas tendieron una emboscada y capturaron a Copil antes de que pudiera dar la orden de ataque.

Siguiendo instrucciones directas del dios, los sacerdotes mexicas sacrificaron a Copil en el acto: le arrancaron el corazón y, cumpliendo una última orden, lo arrojaron hacia las aguas pantanosas del lago Texcoco.

En el lugar exacto donde el corazón de Copil cayó entre los juncos, brotó tiempo después un nopal, creciendo directamente de una roca sumergida. Fue sobre ese mismo nopal donde generaciones o instantes después se posó el águila que marcaría el sitio definitivo de Tenochtitlan: el símbolo más reconocible de México tiene, en el fondo de su propio mito de origen, la sangre de una venganza que nunca llegó a cumplirse.`,
    personajes: [['copil', 'protagonista'], ['huitzilopochtli', 'antagonista'], ['malinalxochitl', 'mencionado']]
  },
  {
    slug: 'abandono-de-malinalxochitl', titulo: 'El abandono de Malinalxochitl', tipo: 'tragedia', periodo: 'Durante la peregrinación mexica, antes de la fundación de Tenochtitlan', es_preview: 0,
    resumen: 'Huitzilopochtli, temeroso del poder de su hermana hechicera, ordena abandonarla dormida durante la peregrinación mexica — ella funda su propia ciudad, Malinalco, y cría ahí al hijo que después lo enfrentaría.',
    texto_completo: `Durante los largos años de la peregrinación mexica desde Aztlán, el pueblo viajaba acompañado no solo de Huitzilopochtli sino también de su hermana Malinalxochitl, una hechicera de enorme poder capaz de controlar escorpiones y serpientes del desierto, y de transformarse ella misma en distintos animales. Su magia comenzó a generar tensión: algunos dentro del pueblo empezaron a seguir sus indicaciones por encima de las de Huitzilopochtli.

Huitzilopochtli, que exigía devoción exclusiva, decidió que su hermana representaba un peligro demasiado grande para el rumbo de la peregrinación. Sin enfrentarla directamente, ordenó a los sacerdotes que, durante una noche en que el pueblo acampaba, levantaran el campamento en silencio y continuaran la marcha mientras Malinalxochitl y quienes se habían apegado a ella permanecían dormidos, dejándolos atrás sin advertencia.

Al despertar sola, abandonada por su propio pueblo, Malinalxochitl no se resignó a la derrota. Reunió a quienes habían quedado con ella y fundó su propio asentamiento, Malinalco, gobernándolo como líder y sacerdotisa. Ahí crió a su hijo Copil, contándole una y otra vez la historia de la traición de Huitzilopochtli, sembrando el resentimiento que, ya adulto, lo llevaría a intentar vengarla —un intento que terminaría, trágicamente, dando origen sin quererlo al símbolo mismo de la ciudad que su tío había fundado.`,
    personajes: [['malinalxochitl', 'protagonista'], ['huitzilopochtli', 'antagonista'], ['copil', 'mencionado']]
  },
  {
    slug: 'princesa-desollada-de-culhuacan', titulo: 'La princesa desollada de Culhuacán', tipo: 'tragedia', periodo: 'Durante la peregrinación mexica, antes de la fundación de Tenochtitlan', es_preview: 0,
    resumen: 'Huitzilopochtli pide la hija del señor de Culhuacán para convertirla en diosa; el sacrificio y desollamiento ritual de la joven provoca la expulsión violenta de los mexicas de esa ciudad.',
    texto_completo: `Antes de fundar Tenochtitlan, los mexicas pasaron un tiempo como vasallos tolerados del señorío de Culhuacán, gobernado por Achitométl, cuyo linaje descendía de los prestigiados toltecas. Buscando fortalecer su posición, los sacerdotes mexicas, hablando en nombre de Huitzilopochtli, pidieron a Achitométl que les entregara a su propia hija para convertirla en "la madre de los dioses" mexicas.

Achitométl, interpretando la petición como una alianza matrimonial honrosa, aceptó de buena fe y entregó a su hija con celebración. Pero lo que Huitzilopochtli exigía en realidad no era un matrimonio, sino un sacrificio: los sacerdotes mexicas mataron a la joven esa misma noche y desollaron su cuerpo, y un sacerdote se cubrió con su piel todavía fresca, personificando ritualmente a la diosa Toci, "nuestra abuela".

Al día siguiente, Achitométl fue invitado con honores a la ceremonia de consagración de la nueva diosa, sin saber lo que realmente presenciaría. Cuando las antorchas iluminaron al sacerdote danzando vestido con la piel de su propia hija, el señor de Culhuacán reconoció el rostro y el horror lo desbordó. Convocó de inmediato a sus guerreros, y la ciudad entera se volcó contra los mexicas, expulsándolos violentamente esa misma noche.

Forzados de nuevo a la fuga, los mexicas continuaron su peregrinación hacia las orillas pantanosas del lago Texcoco —el mismo territorio despreciado por todos donde, poco después, encontrarían por fin la señal del águila y el nopal que Huitzilopochtli les había prometido desde el principio.`,
    personajes: [['huitzilopochtli', 'antagonista']]
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-azteca'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-azteca".');
  return filas[0].id;
}

async function obtenerIdsExistentes(libroId) {
  const [filas] = await pool.query('SELECT id, slug FROM personajes WHERE libro_id = ?', [libroId]);
  const ids = {};
  filas.forEach(f => { ids[f.slug] = f.id; });
  return ids;
}

async function sembrarPersonajes(libroId, idsPorSlug) {
  for (const p of PERSONAJES) {
    if (idsPorSlug[p.slug]) {
      console.log(`  - Personaje "${p.nombre}" ya existía.`);
      continue;
    }
    const [resultado] = await pool.query(
      `INSERT INTO personajes (tipo, nombre, nombre_griego, epitetos, descripcion_corta, descripcion_larga, origen, dominio, naturaleza, guarida, amenaza, slug, es_preview, libro_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [p.tipo, p.nombre, p.nombre_griego, p.epitetos, p.descripcion_corta, p.descripcion_larga, p.origen || null, p.dominio || null, p.naturaleza || null, p.guarida || null, p.amenaza || null, p.slug, p.es_preview, libroId]
    );
    idsPorSlug[p.slug] = resultado.insertId;
    console.log(`  - Personaje "${p.nombre}" creado.`);
  }
}

async function sembrarHistorias(libroId, idsPersonajes) {
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
  console.log('Sembrando parte 2: primordiales, héroes, monstruos, mortales + 6 historias...\n');
  const libroId = await obtenerLibroId();
  const idsPersonajes = await obtenerIdsExistentes(libroId);
  await sembrarPersonajes(libroId, idsPersonajes);
  await sembrarHistorias(libroId, idsPersonajes);
  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
