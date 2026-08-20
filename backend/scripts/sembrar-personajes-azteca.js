// ============================================================
// scripts/sembrar-personajes-azteca.js
// ------------------------------------------------------------
// Carga los 15 personajes principales/secundarios y las 4 historias
// clave del libro de Mitología Azteca (libro_id se resuelve por slug
// "mitologia-azteca", ver scripts que crearon el libro). Contenido
// escrito a partir del dossier de investigación (ver memoria del
// proyecto), calibrado contra Zeus/"El origen del cosmos" del libro
// griego para mantener el mismo nivel de detalle y tono narrativo.
//
// Idempotente: si un personaje/historia con ese slug ya existe para
// este libro, no lo vuelve a insertar (se puede correr de nuevo sin
// duplicar si se agregan mas adelante).
//
// COMO CORRERLO (desde la carpeta backend/):
//   node scripts/sembrar-personajes-azteca.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  {
    slug: 'huitzilopochtli', tipo: 'dios', nombre: 'Huitzilopochtli', nombre_griego: 'Huitzilōpōchtli',
    epitetos: 'Colibrí Zurdo, Sol del Mediodía, Guerrero Azul, Xiuhpilli (Príncipe de Turquesa)',
    descripcion_corta: 'Dios tutelar de los mexicas, señor del sol, la guerra y el sacrificio — nació ya armado para defender a su madre.',
    descripcion_larga: `Huitzilopochtli es hijo de Coatlicue, "la de la falda de serpientes", quien quedó embarazada al recoger y guardar en su pecho una bola de plumas mientras barría el templo de Coatepec. Su hija Coyolxauhqui, avergonzada por el embarazo, incitó a sus cuatrocientos hermanos (los Centzon Huitznahua, las estrellas del sur) a matar a su madre antes de que naciera el nuevo hijo. Pero en el instante del ataque, Huitzilopochtli nació ya adulto y completamente armado, empuñando el xiuhcóatl, la serpiente de fuego. Con ella decapitó a Coyolxauhqui de un solo golpe y despedazó su cuerpo, que cayó rodando por la ladera del cerro; después persiguió y dispersó a sus cuatrocientos hermanos por el cielo, donde se convirtieron en estrellas. Este combate se repite cada amanecer: Huitzilopochtli es el sol que nace armado cada día para vencer de nuevo a la luna y las estrellas y devolver la luz al mundo.

Como dios tutelar de los mexicas, Huitzilopochtli guió al pueblo durante su larga peregrinación desde Aztlán hasta el Valle de México, prometiéndoles una señal para reconocer el lugar donde debían fundar su ciudad: un águila devorando algo posada sobre un nopal. La encontraron en un islote del lago Texcoco en 1325, y ahí fundaron Tenochtitlan. Como dios solar, Huitzilopochtli necesitaba alimentarse de "agua preciosa" —sangre humana— para tener fuerzas de librar su batalla diaria contra la oscuridad; de ahí que los mexicas sostuvieran que sin guerra y sacrificio, el sol simplemente dejaría de salir. Su templo compartía la cima del Templo Mayor de Tenochtitlan con el de Tláloc, dios de la lluvia — el poder militar y expansivo de los mexicas junto al sustento agrícola del que dependía el pueblo.`,
    origen: 'Nace de Coatlicue en Coatepec ("el cerro de la serpiente"), ya armado y adulto, para defenderla del ataque de sus hermanos.',
    dominio: 'El sol, la guerra y el sacrificio', naturaleza: 'Dios tutelar mexica', es_preview: 1
  },
  {
    slug: 'tezcatlipoca', tipo: 'dios', nombre: 'Tezcatlipoca', nombre_griego: 'Tezcatlīpōca',
    epitetos: 'Espejo Humeante, Señor del Cielo y la Tierra, Yaotl (El Enemigo), Titlacahuan',
    descripcion_corta: 'Dios de la noche, el destino y la discordia — omnipresente y caprichoso, ve todo a través de su espejo de obsidiana.',
    descripcion_larga: `Tezcatlipoca es uno de los cuatro hijos primordiales de Ometeotl, el dios dual, y uno de los cuatro Tezcatlipocas que se repartieron los rumbos del universo: a él le correspondió el norte, asociado a la noche, el frío y la oscuridad. Su nombre significa "espejo humeante", en referencia al disco de obsidiana pulida que porta —a veces en el pecho, a veces reemplazando uno de sus pies, perdido en una lucha contra el monstruo terrestre Cipactli— y en el que puede ver todo lo que ocurre en el mundo. Es un dios omnipresente, capaz de tomar cualquier forma, especialmente la de un jaguar nocturno, y se le asocia con el destino, la providencia, la tentación y el conflicto: castiga a los soberbios y recompensa a quienes le sirven, sin que nadie pueda anticipar cuál de las dos cosas hará.

Su rivalidad con Quetzalcoatl es el eje de varios de los mitos más importantes: como gobernante del primer sol (la era de los jaguares), y más tarde como el responsable de la caída de Tollan, emborrachando y humillando al rey-sacerdote Quetzalcoatl hasta obligarlo al exilio. Aun así, ambos dioses colaboraron en la creación del mundo actual, arrancándole las piernas al monstruo Cipactli para formar la tierra y el cielo. Tezcatlipoca no es un dios "malvado" en el sentido cristiano —no hay tal categoría en la religión mexica— sino la fuerza del cambio repentino, la fortuna que se puede perder en un instante.`,
    origen: 'Uno de los cuatro hijos de Ometeotl, el dios dual primordial.',
    dominio: 'La noche, el destino y la discordia', naturaleza: 'Dios primordial', es_preview: 0
  },
  {
    slug: 'quetzalcoatl', tipo: 'dios', nombre: 'Quetzalcoatl', nombre_griego: 'Quetzalcōātl',
    epitetos: 'Serpiente Emplumada, Señor del Viento (Ehecatl), Estrella de la Mañana',
    descripcion_corta: 'Dios del viento, la vida y el conocimiento — patrono de los sacerdotes, inventor del calendario y enemigo eterno de Tezcatlipoca.',
    descripcion_larga: `Quetzalcoatl, "serpiente emplumada" o "serpiente preciosa", es uno de los cuatro hijos de Ometeotl y una de las divinidades más veneradas de Mesoamérica, con culto documentado desde Teotihuacan hasta los mayas (donde se le conocía como Kukulkán). Se le atribuye la creación de la humanidad actual: descendió al Mictlán, el inframundo, para recuperar los huesos de las generaciones humanas extintas en eras anteriores, y tras escapar de las trampas de Mictlantecuhtli, los molió y los mezcló con su propia sangre para dar origen a los hombres y mujeres de la quinta era. Como Ehecatl, dios del viento, sopla para poner el sol y la luna en movimiento después de que ambos se negaran a moverse tras su creación. Es también el patrono del conocimiento: se le atribuye la invención del calendario, la escritura y el cultivo del maíz.

Su historia está entrelazada con la del rey-sacerdote tolteca Topiltzin Quetzalcoatl, que gobernó la ciudad de Tollan bajo su nombre y su ejemplo, prohibiendo el sacrificio humano —ofrecía en su lugar mariposas y serpientes— hasta que Tezcatlipoca lo engañó, emborrachó y humilló, forzándolo al exilio hacia el oriente con la promesa de regresar. Como Venus, la estrella de la mañana, Quetzalcoatl representa la muerte y renovación diaria del cielo: cada noche desciende al inframundo y cada amanecer resurge. Es, junto a Tezcatlipoca, una de las dos grandes fuerzas que dan forma al cosmos mexica —el orden frente al cambio repentino.`,
    origen: 'Uno de los cuatro hijos de Ometeotl, el dios dual primordial.',
    dominio: 'El viento, la vida y el conocimiento', naturaleza: 'Dios primordial', es_preview: 1
  },
  {
    slug: 'tlaloc', tipo: 'dios', nombre: 'Tlaloc', nombre_griego: 'Tlāloc',
    epitetos: 'El que Hace Brotar las Cosas, Señor del Tlalocan',
    descripcion_corta: 'Dios de la lluvia, el rayo y la fertilidad — tan capaz de dar la cosecha como de castigar con sequía o inundación.',
    descripcion_larga: `Tlaloc es uno de los dioses más antiguos de Mesoamérica, venerado desde Teotihuacan y compartido —con distintos nombres— por prácticamente todas las culturas de la región. Gobierna las lluvias, los rayos y los truenos desde su morada, el Tlalocan, un paraíso de vegetación eterna reservado para quienes morían por causas relacionadas con el agua: ahogados, alcanzados por un rayo, o de enfermedades como la hidropesía. Se le representa con grandes anteojeras circulares y colmillos de jaguar, y se le imagina rodeado de ayudantes menores, los Tlaloque, que rompen sus vasijas de agua para provocar la lluvia. Gobernó el tercer sol, el de la "lluvia de fuego", que terminó cuando hizo llover fuego sobre el mundo y convirtió a sus habitantes en aves.

Su templo compartía la cima del Templo Mayor de Tenochtitlan con el de Huitzilopochtli —el sustento agrícola junto al poder militar, las dos bases de la vida mexica—. Aunque es una deidad benevolente, capaz de asegurar la cosecha de cada año, también es temida: las sequías y las inundaciones son igual de suyas que la lluvia fértil, y los mexicas le ofrecían sacrificios infantiles en tiempos de crisis, bajo la creencia de que las lágrimas de los niños atraían la lluvia. Su esposa, Chalchiuhtlicue, gobierna las aguas de superficie —lagos y ríos— como complemento de las aguas que él hace caer del cielo.`,
    origen: 'Deidad prehispánica muy anterior a los mexicas, heredada de Teotihuacan.',
    dominio: 'La lluvia, el rayo y la fertilidad', naturaleza: 'Dios antiguo mesoamericano', es_preview: 0
  },
  {
    slug: 'tonatiuh', tipo: 'dios', nombre: 'Tonatiuh', nombre_griego: 'Tōnatiuh',
    epitetos: 'El que Va Brillando, Cuauhtlehuanitl (Águila que Asciende)',
    descripcion_corta: 'El sol de la era actual, nacido del sacrificio de Nanahuatzin — exige sangre y corazones humanos para seguir moviéndose por el cielo.',
    descripcion_larga: `Tonatiuh es el sol de la quinta era, la actual, nacido en Teotihuacan cuando el dios humilde y enfermo Nanahuatzin se arrojó a una hoguera sagrada para convertirse en astro, después de que el dios rico y orgulloso Tecuciztecatl titubeara ante el fuego. Pero al nacer, Tonatiuh se negó a moverse por el cielo, amenazando con dejar al mundo en un amanecer eterno, hasta que los demás dioses comprendieron que debían sacrificarse ellos mismos para darle la fuerza de recorrer su camino. Desde entonces, los mexicas creían que el sol necesitaba alimentarse continuamente de "chalchihuatl", el agua preciosa —la sangre humana— para no debilitarse y apagarse, arrastrando al mundo entero a su quinta y definitiva destrucción.

Se le representa como el rostro central de la Piedra del Sol, rodeado por los símbolos de las cuatro eras anteriores y con la lengua en forma de cuchillo de obsidiana, exigiendo el sacrificio. Los guerreros muertos en batalla y las mujeres muertas en parto —consideradas guerreras por dar a luz— tenían el honor de acompañar a Tonatiuh en su recorrido diario: los primeros desde el amanecer hasta el mediodía, las segundas desde el mediodía hasta el ocaso, cuando el sol descendía al inframundo para su viaje nocturno. Esta creencia sostenía buena parte de la guerra ritual mexica, las llamadas "guerras floridas", cuyo objetivo no era el territorio sino capturar prisioneros para el sacrificio.`,
    origen: 'Nace del sacrificio de Nanahuatzin en la hoguera sagrada de Teotihuacan.',
    dominio: 'El sol de la era actual', naturaleza: 'Dios solar', es_preview: 0
  },
  {
    slug: 'coatlicue', tipo: 'dios', nombre: 'Coatlicue', nombre_griego: 'Cōātlīcue',
    epitetos: 'La de la Falda de Serpientes, Madre Tierra, Toci (Nuestra Abuela)',
    descripcion_corta: 'Diosa madre de la tierra, madre de Huitzilopochtli — su cuerpo mismo es campo de batalla entre la vida y la muerte.',
    descripcion_larga: `Coatlicue, "la de la falda de serpientes", es una diosa terrestre que vivía como una viuda devota en el cerro de Coatepec, encargada de barrer el templo como penitencia diaria. Un día, mientras barría, una bola de plumas cayó del cielo; la guardó en su pecho, y al terminar su labor descubrió que había quedado embarazada. Sus hijos, los Centzon Huitznahua y su hija Coyolxauhqui, avergonzados por lo que consideraron una deshonra, decidieron matarla antes de que naciera el hijo no reconocido. Pero en el momento del ataque, ese hijo —Huitzilopochtli— nació ya armado y adulto, decapitando a Coyolxauhqui y dispersando a sus hermanos por el cielo.

Se le representa con una falda tejida de serpientes vivas, un collar de manos y corazones humanos cortados, y garras en pies y manos en lugar de extremidades humanas —una imagen deliberadamente aterradora que encarna tanto la fertilidad de la tierra como su naturaleza devoradora: todo lo que nace de ella, eventualmente vuelve a ella. Es, junto a otras diosas como Tonantzin, una de las raíces prehispánicas que después se fusionaron, tras la conquista española, con el culto a la Virgen de Guadalupe.`,
    origen: 'Diosa terrestre, madre de los Centzon Huitznahua, Coyolxauhqui y Huitzilopochtli.',
    dominio: 'La tierra y la maternidad', naturaleza: 'Diosa madre', es_preview: 1
  },
  {
    slug: 'coyolxauhqui', tipo: 'dios', nombre: 'Coyolxauhqui', nombre_griego: 'Coyolxāuhqui',
    epitetos: 'La de Cascabeles Dorados',
    descripcion_corta: 'Diosa de la luna, hermana mayor de Huitzilopochtli — decapitada por él al nacer, y lanzada al cielo nocturno.',
    descripcion_larga: `Coyolxauhqui, "la de cascabeles dorados" (por los adornos que llevaba en las mejillas), es hija de Coatlicue y hermana de los Centzon Huitznahua, las estrellas del sur. Al enterarse del embarazo inexplicable de su madre, convenció a sus cuatrocientos hermanos de atacarla antes de que naciera el hijo deshonroso, marchando armada a la cabeza del ejército hacia el cerro de Coatepec. Pero Huitzilopochtli nació en ese mismo instante, ya adulto y armado con el xiuhcóatl, y la decapitó de un solo golpe, arrojando su cuerpo desmembrado por la ladera del cerro.

Este mito se representa físicamente en el Templo Mayor de Tenochtitlan, donde una enorme piedra circular tallada con el cuerpo desmembrado de Coyolxauhqui yacía al pie de las escalinatas del templo de Huitzilopochtli —el lugar exacto donde los prisioneros sacrificados eran arrojados tras su ejecución en la cima, reactuando simbólicamente cada vez la derrota de la diosa. Coyolxauhqui es también, para buena parte de la tradición, la luna misma: su derrota diaria ante Huitzilopochtli explica por qué la luna desaparece cada amanecer.`,
    origen: 'Hija de Coatlicue, hermana mayor de Huitzilopochtli.',
    dominio: 'La luna', naturaleza: 'Diosa lunar', es_preview: 0
  },
  {
    slug: 'xochiquetzal', tipo: 'dios', nombre: 'Xochiquetzal', nombre_griego: 'Xōchiquetzal',
    epitetos: 'Flor Preciosa, Ixnextli',
    descripcion_corta: 'Diosa del amor, la belleza y las artes — eternamente joven, patrona de artesanos, tejedoras y parteras.',
    descripcion_larga: `Xochiquetzal, "flor preciosa" o "flor pluma", es la diosa del amor, la fertilidad femenina, la belleza y los placeres, representada siempre como una mujer joven adornada con flores frescas, acompañada de mariposas y pájaros. A diferencia de otras deidades mexicas de gran carga guerrera, Xochiquetzal preside los aspectos más gozosos de la vida: el cortejo, el arte, el tejido, la música y la danza, y era patrona especial de las mujeres embarazadas, las parteras y las artesanas. Vivió, según algunas versiones del mito, casada con Tlaloc hasta que Tezcatlipoca la raptó para convertirla en su esposa, llevándola al noveno cielo.

Su culto incluía uno de los templos más singulares del panteón mexica: un recinto dedicado a artesanos, escultores, tejedores de pluma y prostitutas sagradas bajo su protección. Es la contraparte femenina de Xochipilli, dios del arte y el placer, con quien comparte buena parte de su simbolismo floral. Xochiquetzal representa el lado luminoso y sensual de una mitología frecuentemente asociada solo con la guerra y el sacrificio —recordatorio de que también había espacio para la belleza y el goce en la cosmovisión mexica.`,
    origen: 'Diosa venerada desde tiempos anteriores a los mexicas, adoptada por completo en su panteón.',
    dominio: 'El amor, la belleza y las artes', naturaleza: 'Diosa del amor', es_preview: 0
  },
  {
    slug: 'mictlantecuhtli', tipo: 'dios', nombre: 'Mictlantecuhtli', nombre_griego: 'Mictlāntēcuhtli',
    epitetos: 'Señor del Mictlán, Señor de los Muertos',
    descripcion_corta: 'Dios del inframundo, no un demonio sino el administrador imparcial del destino final de la mayoría de los muertos.',
    descripcion_larga: `Mictlantecuhtli gobierna el Mictlán, el noveno y más profundo de los niveles del inframundo mexica, junto a su esposa Mictecacihuatl. A diferencia del infierno cristiano, el Mictlán no es un lugar de castigo: es el destino de la mayoría de las personas que morían por causas "comunes" —vejez, enfermedad—, sin relación con el agua (destino del Tlalocan) o la guerra y el parto (destino de acompañar a Tonatiuh). El alma debía atravesar un viaje de cuatro años por nueve niveles llenos de obstáculos —ríos, montañas que chocan entre sí, vientos cortantes como obsidiana— antes de alcanzar el descanso final y la disolución completa.

Se le representa con el cuerpo cubierto de huesos y calaveras, a veces con los intestinos visibles fuera del cuerpo, imagen que buscaba mostrar la descomposición sin intención de horror moral: la muerte, en la cosmovisión mexica, era simplemente el otro extremo natural de la vida, no una amenaza espiritual. Fue Mictlantecuhtli quien intentó engañar a Quetzalcoatl cuando este descendió al Mictlán a buscar los huesos de las generaciones pasadas para crear a la humanidad actual, poniéndole trampas que casi le cuestan la misión.`,
    origen: 'Señor del inframundo desde tiempos primordiales, esposo de Mictecacihuatl.',
    dominio: 'El inframundo y la muerte', naturaleza: 'Dios del Mictlán', es_preview: 0
  },
  {
    slug: 'chalchiuhtlicue', tipo: 'dios', nombre: 'Chalchiuhtlicue', nombre_griego: 'Chālchiuhtlīcue',
    epitetos: 'La de la Falda de Jade',
    descripcion_corta: 'Diosa de lagos, ríos y aguas de superficie — esposa de Tláloc, gobernó el cuarto sol hasta destruirlo con una inundación.',
    descripcion_larga: `Chalchiuhtlicue, "la de la falda de jade", es la diosa de toda el agua que fluye sobre la tierra —ríos, lagos, arroyos y los mares en calma— en complemento al dominio de su esposo Tláloc sobre la lluvia que cae del cielo. Presidía además el bautismo mexica: a los recién nacidos se les rociaba con agua en su nombre para purificarlos y protegerlos, en una ceremonia con paralelos notorios —y muy comentados por los primeros cronistas españoles— con el sacramento cristiano.

Gobernó el cuarto sol, el llamado Sol de Agua, que terminó cuando —según algunas versiones, por su propia vanidad al ser acusada de fingir una bondad que no sentía— provocó una inundación que cubrió la tierra entera durante cincuenta y dos años, convirtiendo a los sobrevivientes en peces. Es una diosa de doble naturaleza, como toda el agua mexica: fuente de vida imprescindible para la agricultura, y fuerza capaz de arrasar el mundo entero cuando se desborda.`,
    origen: 'Esposa de Tláloc, diosa de las aguas de superficie.',
    dominio: 'Lagos, ríos y aguas de superficie', naturaleza: 'Diosa del agua', es_preview: 0
  },
  {
    slug: 'xipe-totec', tipo: 'dios', nombre: 'Xipe Totec', nombre_griego: 'Xipe Totec',
    epitetos: 'Nuestro Señor Desollado',
    descripcion_corta: 'Dios de la primavera, la renovación agrícola y la germinación de la semilla — su piel desollada simboliza la tierra que muda cada año.',
    descripcion_larga: `Xipe Totec, "nuestro señor desollado", es uno de los dioses más singulares e incomprendidos del panteón mexica: se le representa vistiendo la piel arrancada de una víctima sacrificada, en referencia directa a la semilla de maíz, que debe "desollarse" de su cáscara exterior para poder germinar. Lejos de ser una imagen gratuitamente cruenta, encarna un ciclo agrícola profundamente reverenciado: la muerte necesaria de la vieja piel de la tierra (los cultivos del año anterior) para que la nueva vida (la próxima cosecha) pueda emerger.

Su festividad principal, Tlacaxipehualiztli ("desollamiento de hombres"), a comienzos de la primavera, incluía el uso ritual de la piel de las víctimas sacrificadas por sacerdotes durante veinte días, hasta que se secaba y se desprendía sola —de nuevo, la metáfora de la semilla liberándose de su cáscara—. Era también el patrono de los orfebres, y su culto se había extendido más allá de los mexicas hasta pueblos vecinos como los zapotecos. Su imagen, perturbadora para ojos modernos, era para los mexicas una de las representaciones más directas y honestas de cómo entendían la relación entre muerte y vida agrícola.`,
    origen: 'Deidad agrícola de origen prehispánico, adoptada por los mexicas.',
    dominio: 'La primavera y la renovación agrícola', naturaleza: 'Dios de la germinación', es_preview: 0
  },
  {
    slug: 'xochipilli', tipo: 'dios', nombre: 'Xochipilli', nombre_griego: 'Xōchipilli',
    epitetos: 'Príncipe de las Flores, Macuilxóchitl (Cinco-Flor)',
    descripcion_corta: 'Dios del arte, el juego, el canto y el placer — contraparte masculina de Xochiquetzal, patrono de poetas y músicos.',
    descripcion_larga: `Xochipilli, "príncipe de las flores", es el dios del arte, la música, la danza, los juegos y el placer estético en general, representado como un joven adornado con flores y mariposas, sentado en un trono cubierto de motivos florales y hongos sagrados. Bajo el nombre de Macuilxóchitl ("cinco-flor"), presidía también los juegos de pelota y de azar, y se le asociaba con estados alterados de conciencia alcanzados mediante hongos, tabaco y otras plantas sagradas usadas en contextos rituales, no recreativos.

Como contraparte masculina de Xochiquetzal, Xochipilli representa el mismo principio de gozo y creatividad que ella, pero enfocado en las artes que los mexicas asociaban más con lo masculino: la poesía cantada, la música de tambores y flautas, y el juego de pelota ritual. Era el patrono de los cantores y poetas de la corte, cuyo oficio —componer los "cantos floridos"— era considerado una de las formas más elevadas de conocimiento y verdad accesibles a los seres humanos, comparable en estatus al de sacerdotes y guerreros.`,
    origen: 'Contraparte masculina de Xochiquetzal, dios del arte y el placer.',
    dominio: 'El arte, el juego y el placer', naturaleza: 'Dios del gozo y la creatividad', es_preview: 0
  },
  {
    slug: 'tlazolteotl', tipo: 'dios', nombre: 'Tlazolteotl', nombre_griego: 'Tlazoltéotl',
    epitetos: 'Comedora de Inmundicias, Ixcuina',
    descripcion_corta: 'Diosa de los excesos, la lujuria y también de la purificación — perdona las faltas que ella misma provoca.',
    descripcion_larga: `Tlazolteotl, cuyo nombre significa aproximadamente "diosa de la basura" o "de la inmundicia", gobierna una dualidad muy particular en la religión mexica: es tanto la fuerza que empuja a los excesos sexuales y las faltas morales como la que tiene el poder de perdonarlas y purificarlas. Existía un rito de confesión único en Mesoamérica asociado a ella: una persona podía confesar sus faltas ante un sacerdote, una sola vez en la vida, generalmente en la vejez, y Tlazolteotl —"la comedora de inmundicias"— absorbía simbólicamente la falta, dejando al confesante limpio.

Se le representaba a veces dando a luz, con una expresión de esfuerzo, sosteniendo una escoba (símbolo de barrer las faltas) y con la boca manchada de negro alrededor de los labios, referencia directa a su función de "devorar" la suciedad moral ajena. Es una de las divinidades que mejor ilustra un principio central de la religión mexica: los dioses no se dividen en buenos y malos, sino que cada uno encarna una fuerza completa, con su lado destructivo y su lado regenerador inseparablemente unidos.`,
    origen: 'Diosa huaxteca de origen, adoptada e integrada al panteón mexica.',
    dominio: 'Los excesos y la purificación', naturaleza: 'Diosa de la confesión', es_preview: 0
  },
  {
    slug: 'mayahuel', tipo: 'dios', nombre: 'Mayahuel', nombre_griego: 'Mayahuel',
    epitetos: 'Diosa del Maguey',
    descripcion_corta: 'Diosa del maguey y madre de los Centzon Totochtin, los "cuatrocientos conejos" del pulque y la embriaguez.',
    descripcion_larga: `Mayahuel es la diosa que da origen a la planta del maguey (agave), de la que se extrae el aguamiel y, tras su fermentación, el pulque —bebida ritual central en la religión y la vida social mexica—. Según el mito, era una joven guardada por su abuela, una tzitzimitl temible, hasta que Quetzalcoatl, transformado en viento, la rescató y descendió con ella a la tierra convertidos ambos en las ramas entrelazadas de un mismo árbol para escapar. Al ser descubiertos, la abuela despedazó a Mayahuel; Quetzalcoatl recogió sus restos y los enterró, y de ellos brotó la primera planta de maguey.

Es la madre de los Centzon Totochtin, los "cuatrocientos conejos", un grupo de dioses menores asociados a la embriaguez, cada uno representando un estado o efecto distinto del pulque. El pulque tenía un rol ritual estricto en la sociedad mexica: su consumo estaba prohibido fuera de contextos ceremoniales específicos, y la embriaguez pública era severamente castigada, reflejo de que Mayahuel representaba una fuerza poderosa que exigía respeto y medida, no indulgencia.`,
    origen: 'Rescatada por Quetzalcoatl de su abuela, una tzitzimitl; de sus restos nace el maguey.',
    dominio: 'El maguey y el pulque', naturaleza: 'Diosa de la fertilidad vegetal', es_preview: 0
  },
  {
    slug: 'xolotl', tipo: 'dios', nombre: 'Xolotl', nombre_griego: 'Xólotl',
    epitetos: 'El Gemelo, Señor del Ocaso',
    descripcion_corta: 'Dios con cabeza de perro, hermano gemelo "oscuro" de Quetzalcoatl — guía las almas de los muertos al Mictlán.',
    descripcion_larga: `Xolotl es el hermano gemelo de Quetzalcoatl, representado con cabeza de perro (o a veces de forma monstruosa, con los pies al revés) como contraparte oscura y deforme de la belleza emplumada de su hermano. Mientras Quetzalcoatl representa a Venus como estrella de la mañana, Xolotl es su aspecto como estrella de la tarde —el gemelo que desciende cuando el otro asciende—. Acompañó a Quetzalcoatl en su descenso al Mictlán para recuperar los huesos de las generaciones anteriores, y es él quien guía a las almas de los muertos recientes en su largo viaje de cuatro años por el inframundo.

Según el mito de la creación del quinto sol en Teotihuacan, cuando los demás dioses debieron sacrificarse para dar movimiento a Tonatiuh, Xolotl —aterrado ante la muerte— intentó huir repetidamente, transformándose primero en una planta de maguey doble, después en una milpa de maíz, y finalmente en un ajolote (animal que lleva su nombre) escondido en el agua, hasta que finalmente fue capturado y sacrificado junto al resto. Su cobardía ante el sacrificio, lejos de condenarlo, lo convirtió en el guía natural de las almas humanas que enfrentan el mismo miedo a la muerte que él sintió.`,
    origen: 'Hermano gemelo de Quetzalcoatl, aspecto "oscuro" de Venus como estrella de la tarde.',
    dominio: 'El ocaso y la guía de los muertos', naturaleza: 'Dios psicopompo', es_preview: 0
  }
];

const HISTORIAS = [
  {
    slug: 'los-cinco-soles', titulo: 'Los Cinco Soles', tipo: 'cosmogonia', periodo: 'Antes del tiempo actual', es_preview: 1,
    resumen: 'El mundo actual es la quinta versión de la creación — cuatro anteriores fueron destruidas, y esta sobrevive gracias al sacrificio de un dios que se arrojó al fuego.',
    texto_completo: `Antes de que existiera el mundo tal como lo conocemos, hubo otros cuatro, y los cuatro fueron destruidos. El primero fue el Sol de Tierra, gobernado por Tezcatlipoca convertido en jaguar; ese mundo terminó cuando jaguares devoraron a todos sus habitantes. El segundo fue el Sol de Viento, bajo Quetzalcoatl, arrasado por huracanes que convirtieron a la gente en monos. El tercero, el Sol de Lluvia de Fuego, gobernado por Tláloc, terminó bajo una lluvia ardiente que transformó a los hombres en aves. El cuarto, el Sol de Agua, bajo Chalchiuhtlicue, se cerró con una inundación que duró cincuenta y dos años, y convirtió a los sobrevivientes en peces.

Cuando el cuarto sol se apagó, el mundo quedó completamente a oscuras, y los dioses se reunieron en Teotihuacan para decidir quién tendría el honor y la carga de convertirse en el nuevo sol. Dos se ofrecieron: Tecuciztecatl, un dios rico y orgulloso, cubierto de plumas preciosas y oro, seguro de su propio valor; y Nanahuatzin, un dios humilde, pobre y enfermo, cubierto de llagas, a quien nadie tomaba en serio. Durante cuatro días ambos hicieron penitencia frente a una gran hoguera sagrada, hasta que llegó el momento del sacrificio.

Tecuciztecatl se acercó primero al fuego, pero el calor era tan intenso que retrocedió, aterrado, no una sino cuatro veces, sin lograr reunir el valor necesario. Avergonzado por su cobardía, cedió el turno a Nanahuatzin, quien, sin dudar ni un instante, cerró los ojos y se arrojó de lleno a las llamas. Al verlo, Tecuciztecatl, movido por la vergüenza, saltó también al fuego inmediatamente después. De la hoguera surgieron entonces dos soles idénticos e igual de brillantes, iluminando el cielo con una intensidad insoportable.

Los demás dioses comprendieron que dos soles quemarían el mundo entero, así que uno de ellos tomó un conejo y lo lanzó contra el rostro de Tecuciztecatl, apagando parte de su brillo para siempre —la marca de un conejo que, según los mexicas, todavía puede verse en la superficie de la luna—. Convertido así en un astro más tenue, Tecuciztecatl se transformó en la luna, mientras que Nanahuatzin, purificado por su sacrificio sin vacilación, se convirtió en Tonatiuh, el sol.

Pero ni siquiera así el mundo tuvo luz: el nuevo sol permaneció inmóvil en el horizonte, negándose a moverse, y amenazó con dejar a la humanidad en un amanecer eterno a menos que los demás dioses se sacrificaran también por él, entregando su propia sangre y su propia vida como él lo había hecho. Uno por uno, los dioses reunidos en Teotihuacan aceptaron el sacrificio, y con su muerte le dieron a Tonatiuh la fuerza necesaria para comenzar su recorrido por el cielo. Desde entonces, los mexicas creían que ellos, los humanos, heredaban esa misma deuda: el sol necesitaba sangre y corazones para seguir moviéndose cada día, y sin guerra ni sacrificio, la quinta era —la que vivimos hoy— también terminaría, como las cuatro anteriores, en una destrucción total.`,
    personajes: [['nanahuatzin', 'protagonista'], ['tezcatlipoca', 'mencionado'], ['quetzalcoatl', 'mencionado'], ['tlaloc', 'mencionado'], ['chalchiuhtlicue', 'mencionado'], ['tonatiuh', 'protagonista'], ['xolotl', 'secundario']]
  },
  {
    slug: 'nacimiento-de-huitzilopochtli', titulo: 'El nacimiento de Huitzilopochtli', tipo: 'teogonia', periodo: 'Antes de la fundación de Tenochtitlan', es_preview: 1,
    resumen: 'Coatlicue queda embarazada por una bola de plumas; sus hijos intentan matarla para evitar la deshonra, pero el hijo que lleva en el vientre nace ya armado para defenderla.',
    texto_completo: `En el cerro de Coatepec, "el cerro de la serpiente", vivía una mujer devota llamada Coatlicue, madre ya de muchos hijos: los Centzon Huitznahua, los cuatrocientos guerreros del sur, y una hija, Coyolxauhqui, la de cascabeles dorados. Cada día, Coatlicue barría el templo en la cima del cerro como penitencia, y una mañana, mientras barría, una bola de plumas finas descendió flotando desde el cielo. La recogió, admirada por su belleza, y la guardó entre los pliegues de su falda, junto al pecho. Cuando terminó su labor, buscó la bola de plumas para admirarla de nuevo, pero había desaparecido. Poco después, Coatlicue descubrió que estaba embarazada.

Sus hijos, al enterarse, sintieron una vergüenza profunda: no había padre visible para ese nuevo hermano, y la deshonra recaería sobre toda la familia. Coyolxauhqui, la más indignada de todos, convenció a sus cuatrocientos hermanos de un plan terrible: debían matar a su propia madre antes de que el hijo deshonroso naciera. Se armaron para la guerra, se pintaron el rostro y el cuerpo, y con Coyolxauhqui al frente, vestida también para el combate, comenzaron el ascenso al cerro de Coatepec, decididos a no fallar.

Pero uno de los Centzon Huitznahua, de nombre Cuahuitlicac, sintió lástima por el hijo no nacido y decidió advertirle en secreto. Habló al vientre de su madre, contándole al niño que aún no nacía todo lo que se tramaba en su contra, y prometió avisarle en el momento exacto en que sus hermanos llegaran a la cima. Coatlicue, aterrada, no podía hacer nada más que esperar. Cuando finalmente el ejército liderado por Coyolxauhqui alcanzó la cumbre del cerro, Cuahuitlicac gritó la advertencia: "¡Ya llegan!".

En ese mismo instante, Huitzilopochtli nació. No como un recién nacido indefenso, sino como un guerrero adulto, completamente armado, pintado de azul y amarillo como el sol del mediodía, empuñando el xiuhcóatl, la serpiente de fuego forjada con el poder del rayo solar. Sin darle tiempo a sus atacantes de reaccionar, Huitzilopochtli se lanzó primero contra Coyolxauhqui: con un solo golpe de la serpiente de fuego le cercenó la cabeza, que rodó hasta detenerse en la ladera del cerro, mientras el cuerpo, desmembrado, caía despedazándose contra las rocas en su descenso.

Después se volvió contra los Centzon Huitznahua. Aterrados ante la furia del recién nacido, la mayoría de sus hermanos intentaron huir, pero Huitzilopochtli los persiguió sin descanso, dando cuatro vueltas completas alrededor del cerro de Coatepec, dando muerte a los que alcanzaba. Solo un puñado logró escapar hacia el sur, donde Huitzilopochtli, satisfecho ya con su victoria, los dejó ir: convertidos en las estrellas del cielo austral, condenados a presenciar cada noche, desde la distancia, cómo el sol —su hermano menor, convertido ahora en el astro más poderoso del cielo— vuelve a nacer victorioso cada amanecer, repitiendo por siempre la misma batalla que perdieron aquel día en Coatepec.`,
    personajes: [['huitzilopochtli', 'protagonista'], ['coatlicue', 'secundario'], ['coyolxauhqui', 'antagonista']]
  },
  {
    slug: 'fundacion-de-tenochtitlan', titulo: 'La fundación de Tenochtitlan', tipo: 'fundacion', periodo: '1325 (fecha tradicional)', es_preview: 0,
    resumen: 'Guiados por Huitzilopochtli, los mexicas peregrinan durante generaciones hasta encontrar la señal prometida — un águila posada sobre un nopal — y fundan su ciudad en un islote del lago Texcoco.',
    texto_completo: `Antes de ser el pueblo más poderoso del Valle de México, los mexicas fueron un grupo errante, el último en llegar de las tribus que partieron desde el legendario Aztlán, "el lugar de las garzas". Su dios tutelar, Huitzilopochtli, les habló a través de sus sacerdotes y les dio una orden: debían abandonar Aztlán y buscar un nuevo hogar, uno que él mismo les señalaría cuando llegara el momento. La peregrinación duró generaciones enteras, atravesando territorios ya ocupados por otros pueblos que los veían con desconfianza —los mexicas llegaban tarde, sin tierra propia, y debían servir como mercenarios o vasallos de quien los tolerara.

Huitzilopochtli les había prometido una señal inequívoca: encontrarían el lugar correcto cuando vieran un águila posada sobre un nopal, devorando algo entre sus garras —según las versiones más antiguas, no queda claro qué exactamente, aunque con el tiempo la tradición popular fijó la imagen de una serpiente—. Después de ser expulsados de varios asentamientos temporales, incluyendo Chapultepec y Culhuacán, donde intentaron integrarse sin éxito y fueron perseguidos tras un sacrificio que ofendió a sus anfitriones, los mexicas llegaron finalmente, alrededor del año 1325, a las orillas pantanosas del lago Texcoco.

Nadie más quería ese territorio: era un conjunto de islotes cenagosos, inundables, sin agua dulce propia y rodeados de pueblos hostiles. Pero ahí, en uno de esos islotes, los sacerdotes mexicas por fin vieron la señal que llevaban generaciones esperando: un águila, posada sobre un nopal que crecía directamente de la roca, exactamente como Huitzilopochtli había prometido. Sin dudarlo, comprendieron que ese lugar —el peor terreno disponible en todo el valle, desde cualquier punto de vista práctico— era el que su dios había elegido para ellos.

Fundaron ahí Tenochtitlan, "el lugar del nopal sobre la piedra", construyendo primero un pequeño altar de tierra y cañas donde después se erigiría el gran Templo Mayor. Lo que comenzó como el asentamiento más humilde y menos deseado del valle se convirtió, en menos de dos siglos, en la capital de un imperio que dominó gran parte de Mesoamérica, sostenido por chinampas —islas artificiales de cultivo— que transformaron el pantano original en una de las ciudades más grandes y prósperas del mundo de su época. El emblema de esa fundación, el águila sobre el nopal, sigue siendo hoy el símbolo central de la bandera de México.`,
    personajes: [['huitzilopochtli', 'protagonista']]
  },
  {
    slug: 'caida-de-tollan', titulo: 'La caída de Tollan', tipo: 'tragedia', periodo: 'Era tolteca, previa a los mexicas', es_preview: 0,
    resumen: 'Bajo el rey-sacerdote Quetzalcoatl, la ciudad de Tollan vive una edad dorada — hasta que Tezcatlipoca lo emborracha y humilla, forzándolo al exilio.',
    texto_completo: `Mucho antes de que los mexicas fundaran Tenochtitlan, floreció la ciudad de Tollan, gobernada por el rey-sacerdote Ce Acatl Topiltzin, que había tomado para sí el nombre del dios Quetzalcoatl como señal de su devoción y su vocación espiritual. Bajo su gobierno, Tollan vivió una edad dorada sin precedentes: se dice que el algodón crecía ya teñido de todos los colores, que las mazorcas de maíz eran tan grandes que un solo hombre no podía cargar más de una, y que el propio Topiltzin Quetzalcoatl había prohibido el sacrificio humano, ofreciendo en su lugar serpientes, mariposas y aves a los dioses. Era un tiempo de arte, sabiduría y abundancia, y Tollan se convirtió en el modelo de ciudad perfecta que generaciones posteriores, incluidos los mexicas, evocarían con nostalgia.

Pero esa misma perfección resultaba intolerable para Tezcatlipoca, dios de la noche y enemigo natural de todo lo que Quetzalcoatl representaba. Decidido a corromper al rey-sacerdote, se presentó ante él disfrazado de anciano, cargando una copa de pulque que aseguraba ser una medicina para aliviar sus males. Topiltzin Quetzalcoatl, que llevaba tiempo débil y afligido, aceptó beber, y Tezcatlipoca insistió en que tomara una segunda copa, y luego una tercera, hasta que el rey-sacerdote, completamente ebrio por primera vez en su vida, cometió actos que después recordaría con vergüenza y horror.

Al despertar y comprender lo ocurrido, Topiltzin Quetzalcoatl se sumió en una desesperación profunda. Convencido de que ya no era digno de gobernar Tollan ni de portar el nombre del dios, decidió abandonar la ciudad para siempre. Marchó hacia el oriente, hacia la costa, seguido por un séquito de fieles que fue disolviéndose en el camino. Existen distintos finales para su historia: algunas versiones cuentan que al llegar al mar se prendió fuego a sí mismo, y que su corazón ascendió al cielo para convertirse en la estrella de la mañana; otras, que embarcó en una balsa de serpientes y navegó hacia el horizonte, prometiendo regresar algún día.

Sin su rey-sacerdote, Tollan entró en decadencia y finalmente cayó, dispersando a su población tolteca por todo el territorio —entre ellos, según la tradición, los ancestros de los propios mexicas—. La promesa de un eventual regreso de Quetzalcoatl quedaría grabada en la memoria mesoamericana durante siglos.`,
    personajes: [['quetzalcoatl', 'protagonista'], ['tezcatlipoca', 'antagonista']]
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-azteca'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-azteca" -- créalo primero.');
  return filas[0].id;
}

async function sembrarPersonajes(libroId) {
  const idsPorSlug = {};
  for (const p of PERSONAJES) {
    const [existente] = await pool.query('SELECT id FROM personajes WHERE slug = ? AND libro_id = ?', [p.slug, libroId]);
    if (existente.length > 0) {
      console.log(`  - Personaje "${p.nombre}" ya existía.`);
      idsPorSlug[p.slug] = existente[0].id;
      continue;
    }
    const [resultado] = await pool.query(
      `INSERT INTO personajes (tipo, nombre, nombre_griego, epitetos, descripcion_corta, descripcion_larga, origen, dominio, naturaleza, slug, es_preview, libro_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [p.tipo, p.nombre, p.nombre_griego, p.epitetos, p.descripcion_corta, p.descripcion_larga, p.origen, p.dominio, p.naturaleza, p.slug, p.es_preview, libroId]
    );
    idsPorSlug[p.slug] = resultado.insertId;
    console.log(`  - Personaje "${p.nombre}" creado.`);
  }
  return idsPorSlug;
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
  console.log('Sembrando personajes e historias de Mitología Azteca...\n');
  const libroId = await obtenerLibroId();
  const idsPersonajes = await sembrarPersonajes(libroId);
  await sembrarHistorias(libroId, idsPersonajes);
  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
