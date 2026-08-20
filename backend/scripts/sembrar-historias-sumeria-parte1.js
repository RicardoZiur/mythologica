// ============================================================
// scripts/sembrar-historias-sumeria-parte1.js
// ------------------------------------------------------------
// Primer lote de historias para Mitologia Sumeria: cosmogonia,
// el diluvio, y el ciclo de Gilgamesh (8 historias).
// Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-historias-sumeria-parte1.js
// ============================================================

const pool = require('../config/db');

const HISTORIAS = [
  {
    slug: 'creacion-desde-las-aguas-de-nammu', titulo: 'La creación desde las aguas de Nammu', tipo: 'cosmogonia', periodo: 'Antes del principio de los tiempos', es_preview: 1,
    resumen: 'Del océano primordial de Nammu nacen An y Ki, el cielo y la tierra, fusionados en una sola masa hasta que su hijo Enlil los separa para siempre.',
    texto_completo: `Antes de que existiera nada más, existía Nammu: el vasto océano primordial, sin principio ni final, sin nadie que la hubiera creado a ella. No había tierra firme, no había cielo, no había luz que separara el día de la noche. Solo el agua oscura, extendiéndose en todas direcciones, conteniendo dentro de sí, sin saberlo todavía, la semilla de todo lo que existiría después.

De esas aguas, sin que ningún otro dios interviniera, nacieron An y Ki: el cielo y la tierra, fundidos en una sola masa cósmica, como una montaña que no tenía todavía forma de montaña, ni arriba ni abajo, ni distancia entre lo que sería el firmamento y lo que sería el suelo. An y Ki permanecieron así, abrazados en su unión primordial, durante un tiempo que ningún relato se atreve a medir, y de esa unión nació Enlil, el dios del viento y la tormenta.

Fue Enlil quien comprendió, apenas nacido, que el mundo no podría existir mientras el cielo y la tierra permanecieran unidos: no habría espacio para que crecieran las plantas, ni aire para que respiraran las criaturas que todavía no existían, ni luz que pudiera atravesar la distancia entre un astro y otro. Con una fuerza que solo un dios recién nacido de la tormenta podía poseer, Enlil se interpuso entre sus propios padres y los separó: empujó a An hacia arriba, hasta que el cielo quedó suspendido en su lugar, alto y luminoso, y dejó a Ki abajo, extendida y firme, convertida en la tierra sobre la que todo lo demás se asentaría.

En el espacio que quedó abierto entre ambos —ese vacío que antes no existía porque no había nada que separar— Enlil estableció su propia morada, y desde ahí comenzó a ordenar el resto de la creación. Fue él quien, con una gran azada, rompió la superficie de la tierra recién formada y permitió que los primeros brotes de vegetación asomaran a la luz que ahora sí podía llegar desde el cielo separado. Los dioses menores, hijos y nietos de esa primera generación, se multiplicaron rápidamente, extendiéndose por el cielo, la tierra y las aguas que Nammu seguía sosteniendo bajo todo lo demás, silenciosa, sin reclamar jamás el protagonismo del mundo que su propio cuerpo había hecho posible.

Con el tiempo, esos mismos dioses menores —cansados de cavar canales, sembrar campos y cargar cestas de tierra bajo el sol implacable que Enlil había liberado— se rebelaron contra el trabajo interminable que su propia existencia les exigía. Fue entonces cuando Nammu, la más antigua de todas, despertó de su silencio ancestral y acudió a su hijo Enki, el más sabio e ingenioso de los dioses jóvenes, para pedirle una solución. "Toma arcilla de mi propio cuerpo, del Abzu que corre bajo la tierra", le dijo, "y modela con ella un sustituto que pueda cargar el yugo que los dioses ya no quieren llevar." Así, de las aguas primordiales que habían dado origen al cielo y a la tierra, surgió también, generaciones después, el barro del que se formarían los primeros seres humanos —el último eslabón de una creación que había comenzado, mucho antes de cualquier otro principio, en la oscuridad silenciosa del océano de Nammu.`,
    personajes: [['nammu', 'protagonista'], ['enlil', 'protagonista'], ['ki', 'secundario'], ['enki', 'mencionado']]
  },
  {
    slug: 'enuma-elish-marduk-contra-tiamat', titulo: 'El Enuma Elish: la batalla de Marduk contra Tiamat', tipo: 'cosmogonia', periodo: 'La guerra cósmica de la segunda generación de dioses', es_preview: 1,
    resumen: 'Furiosa por la muerte de su esposo Apsu, Tiamat cría un ejército de monstruos primordiales; solo Marduk se atreve a enfrentarla, y de su cuerpo derrotado forma el cielo y la tierra.',
    texto_completo: `En los tiempos en que las aguas dulces de Apsu y las aguas saladas de Tiamat todavía se mezclaban sin límite alguno, nacieron de esa unión las primeras generaciones de dioses, cada vez más numerosos y ruidosos. Su bullicio constante —el simple hecho de existir, de moverse, de celebrar— comenzó a resultarle insoportable a Apsu, que ya no podía descansar en la quietud que antes reinaba. Convocó a Tiamat y le propuso destruir a su propia descendencia para recuperar el silencio primordial. Tiamat, horrorizada ante la idea de matar a sus propios hijos, se negó, pero Apsu decidió actuar de todos modos.

Los dioses jóvenes, advertidos del plan, acudieron a Enki, el más astuto de todos, que pronunció un hechizo poderoso sobre Apsu, lo sumió en un sueño del que nunca despertaría, y lo mató mientras dormía, estableciendo sobre su cuerpo derrotado su propia morada, el Abzu. Esta muerte cambió a Tiamat por completo: la diosa que se había negado a la violencia se transformó en una fuerza de venganza implacable. Tomó como nuevo consorte al dios Qingu, le entregó las Tablillas del Destino para darle autoridad suprema, y dio a luz a once clases de monstruos —serpientes venenosas de colmillos afilados, dragones rugientes, hombres-escorpión, criaturas híbridas de garra y veneno— para marchar contra los dioses jóvenes que la habían despojado de su esposo.

El terror se extendió rápidamente por toda la asamblea divina. Ningún dios, ni siquiera los más poderosos, se atrevía a enfrentar a Tiamat en su forma desatada. Fue entonces cuando Marduk, joven e hijo de Enki, se puso de pie ante la asamblea y ofreció enfrentarla él mismo, pero exigió una condición antes de aceptar: si triunfaba, debía ser reconocido de inmediato como rey supremo de todos los dioses, por encima incluso de Anu y Enlil. Desesperados, los dioses aceptaron sin dudar.

Armado con un arco, una red tejida por los vientos, y una tormenta entera contenida en su propio cuerpo, Marduk avanzó hacia Tiamat mientras esta, transformada en un dragón colosal, abría su bocaza para tragárselo entero. Marduk, en el instante exacto, liberó los vientos que llevaba consigo dentro de esa boca abierta, hinchando su vientre hasta que Tiamat no pudo cerrarla ni moverse con libertad. Con el monstruo así inmovilizado, Marduk disparó una flecha certera directo a su corazón, atravesándola, y su cuerpo colosal se desplomó sin vida sobre el vacío primordial.

Lo que Marduk hizo después selló su lugar como el dios más importante de toda la nueva generación: partió el cuerpo de Tiamat en dos mitades, como quien abre una concha marina. De la mitad superior formó el cielo, sosteniéndolo cuidadosamente en su lugar para que las aguas que Tiamat todavía contenía no volvieran a inundarlo todo; de la mitad inferior formó la tierra, fijando montañas y ríos según el contorno que el propio cuerpo del dragón le sugería. Capturó después a Qingu, lo juzgó culpable de haber instigado toda la guerra, y de su sangre ejecutada, mezclada con arcilla, creó a la humanidad entera, destinada a servir a los dioses y liberarlos para siempre del trabajo que antes recaía sobre ellos. Por esta hazaña doble —vencer el caos y ordenar el cosmos con sus propios restos— Marduk fue proclamado rey, y Babilonia, la ciudad que llevaría su nombre en cada templo, se convirtió en el nuevo centro del mundo.`,
    personajes: [['marduk', 'protagonista'], ['tiamat', 'antagonista'], ['apsu', 'secundario'], ['qingu', 'secundario'], ['enki', 'mencionado']]
  },
  {
    slug: 'el-diluvio-de-ziusudra', titulo: 'El diluvio de Ziusudra', tipo: 'tragedia', periodo: 'Antes de la fundación de las grandes ciudades', es_preview: 0,
    resumen: 'Harto del ruido de la humanidad, Enlil decide destruirla con un diluvio; Enki, sin romper su juramento de silencio, advierte a Ziusudra a través de la pared de juncos de su casa.',
    texto_completo: `Con el paso de las generaciones, la humanidad que los dioses habían creado para servirles se multiplicó tanto, y llenó la tierra de un bullicio tan constante —el ruido de las ciudades, los rebaños, los tambores y las voces mezcladas de miles de personas viviendo unas junto a otras— que Enlil, el mismo dios que una vez había separado el cielo de la tierra para dejar espacio a la vida, comenzó a perder la paciencia. El clamor no lo dejaba dormir, y cuanto más crecía la humanidad, más insoportable se volvía. Convocó a la asamblea de los dioses y propuso, sin margen para la discusión, que se enviara un diluvio para borrar a la especie entera de la faz de la tierra, devolviendo el silencio que él mismo exigía.

Los demás dioses, temerosos de contradecirlo, aceptaron, y se les exigió a todos jurar en secreto absoluto: ningún dios podía advertir a ningún mortal sobre lo que se avecinaba. Pero Enki, el más astuto de todos, no estaba dispuesto a permitir que su propia creación —la humanidad que él mismo había ayudado a moldear con arcilla del Abzu— desapareciera sin oportunidad de sobrevivir. Ideó entonces una solución que respetaba la letra del juramento sin honrar en absoluto su espíritu: en vez de hablarle directamente a ningún mortal, se dirigió a la pared de juncos trenzados de la casa de Ziusudra, rey de Shuruppak, y le habló a esa pared como si estuviera simplemente pensando en voz alta, sabiendo que Ziusudra, dormido al otro lado, escucharía cada palabra a través del tejido delgado.

"Pared, pared", susurró Enki, "escúchame bien: derriba tu casa y construye en su lugar un barco. Abandona tus posesiones y busca en cambio salvar la vida. Desprecia las riquezas y en cambio preserva todo lo que respira. Haz que el barco que construyas tenga la misma medida en todas sus dimensiones, y cúbrelo con un techo tan firme como el propio cielo que cubre la tierra." Ziusudra, comprendiendo que el mensaje no estaba destinado a la pared sino a él mismo, obedeció sin dudarlo: derribó su propia casa, reunió madera y brea, y construyó un barco cúbico de proporciones exactas, sellando cada junta con tanto cuidado que ni una gota de agua pudiera filtrarse por ningún resquicio. Embarcó a su familia, a los artesanos que necesitaría después, y la semilla de todas las criaturas vivientes, según la instrucción que había recibido.

Cuando las lluvias finalmente comenzaron, no cesaron durante seis días y seis noches completos. El viento aullaba con tal fuerza que ni los propios dioses podían ver a través de la tormenta que ellos mismos habían desatado; algunos, aterrados por la magnitud de lo que habían causado, se refugiaron en el cielo más alto, llorando por la humanidad que se ahogaba abajo. Al séptimo día, la tormenta finalmente amainó, y cuando Ziusudra abrió una escotilla de su barco, no vio más que agua extendiéndose en todas direcciones, sin una sola montaña ni tierra firme a la vista.

Soltó primero una paloma, que voló y regresó sin encontrar dónde posarse; luego una golondrina, que tampoco halló refugio; y finalmente un cuervo, que voló, encontró tierra ya expuesta al sol, y no regresó. Ziusudra supo entonces que era seguro desembarcar, y su primer acto al pisar tierra firme fue ofrecer un sacrificio de gratitud tan generoso que el aroma llegó hasta el cielo, y los dioses —hambrientos, pues sin humanos que los alimentaran habían pasado la tormenta entera sin ofrendas— se reunieron alrededor como moscas alrededor de la carne. Enlil, al descubrir que un mortal había sobrevivido pese a su decreto, montó en cólera, pero los demás dioses, avergonzados de su propia crueldad, lo persuadieron de no repetir jamás un castigo semejante. Como compensación por su fidelidad y su astucia para sobrevivir, concedieron a Ziusudra y a su esposa un don que ningún otro mortal volvería a recibir: la vida eterna, en un lugar apartado donde el sol nace, para que vivieran para siempre lejos del resto de la humanidad que él mismo había salvado.`,
    personajes: [['enlil', 'antagonista'], ['enki', 'protagonista'], ['utnapishtim', 'protagonista']]
  },
  {
    slug: 'el-encuentro-de-gilgamesh-y-enkidu', titulo: 'El encuentro de Gilgamesh y Enkidu', tipo: 'heroica', periodo: 'El reinado temprano de Gilgamesh en Uruk', es_preview: 1,
    resumen: 'Harto de la tiranía de Gilgamesh, el pueblo de Uruk pide ayuda a los dioses, que crean a Enkidu para igualarlo; tras un combate feroz, ambos se convierten en hermanos inseparables.',
    texto_completo: `Gilgamesh, rey de Uruk, era dos tercios dios y solo un tercio hombre, dotado de una fuerza y una belleza que ningún mortal podía igualar. Pero su reinado temprano estuvo marcado por una tiranía que agotó la paciencia de su propio pueblo: exigía a los jóvenes de la ciudad ejercicios agotadores que no dejaban tiempo para sus familias, y reclamaba para sí, antes que ningún esposo, la primera noche de cada matrimonio celebrado en Uruk. Los habitantes, desesperados, alzaron su clamor hasta los dioses, suplicando que algo o alguien se interpusiera entre ellos y su rey descontrolado.

Los dioses escucharon, y encargaron a la diosa Aruru que modelara con arcilla y agua un rival capaz de igualar a Gilgamesh en fuerza, para que ambos, enfrentados o unidos, pudieran equilibrarse mutuamente. Aruru dio forma a Enkidu, un hombre cubierto de largo pelo, criado no entre humanos sino entre los animales salvajes de la estepa, corriendo junto a las gacelas y bebiendo en los mismos abrevaderos, completamente ajeno a las costumbres de las ciudades. Cuando un cazador se quejó de que este hombre salvaje liberaba constantemente a los animales de sus trampas, arruinando su sustento, Gilgamesh envió a Shamhat, una sacerdotisa del templo de Inanna, a encontrarlo y civilizarlo.

Shamhat lo encontró junto a un abrevadero, y pasó con él seis días y siete noches, tras los cuales Enkidu descubrió que había perdido la velocidad salvaje que antes lo hacía uno más entre los animales de la estepa —que ahora huían de él en cuanto lo veían acercarse— pero había ganado a cambio inteligencia, lenguaje y la capacidad de razonar como un hombre. Shamhat lo vistió, le enseñó a comer pan y beber cerveza como hacían los hombres de las ciudades, y finalmente lo guio hacia Uruk, donde las noticias de un rey tiránico llegaban incluso a los oídos de este recién llegado.

Enkidu llegó a Uruk justo en el momento en que Gilgamesh se dirigía hacia la casa de una boda reciente, dispuesto a reclamar su acostumbrado derecho sobre la novia. Enkidu, indignado por lo que consideraba una injusticia intolerable, se plantó en el umbral de la puerta y le bloqueó el paso al rey. Lo que siguió fue un combate tan violento que las paredes de las casas cercanas temblaron con cada golpe: ambos se aferraron el uno al otro como toros furiosos, rodando por las calles, destrozando marcos de puertas con la fuerza de sus cuerpos entrelazados.

Ninguno logró vencer claramente al otro. Cuando finalmente se detuvieron, jadeantes, algo cambió entre ellos: en vez de continuar el enfrentamiento, Gilgamesh, impresionado por haber encontrado por fin a alguien capaz de igualarlo, abrazó a Enkidu como a un hermano. Desde ese instante, ninguno de los dos volvió a estar completo sin el otro: Enkidu templó el carácter impetuoso de Gilgamesh, y Gilgamesh le dio a Enkidu un propósito más grande que la simple supervivencia en la estepa. Juntos, esa amistad recién forjada en la violencia y sellada en el respeto mutuo, se convertiría en el motor de las mayores hazañas —y de la tragedia más profunda— que la epopeya de Gilgamesh llegaría a narrar.`,
    personajes: [['gilgamesh', 'protagonista'], ['enkidu', 'protagonista'], ['shamhat', 'secundario']]
  },
  {
    slug: 'la-expedicion-al-bosque-de-los-cedros', titulo: 'La expedición al Bosque de los Cedros', tipo: 'heroica', periodo: 'Después de la unión de Gilgamesh y Enkidu', es_preview: 0,
    resumen: 'Gilgamesh y Enkidu viajan hasta el remoto Bosque de los Cedros para enfrentar a Humbaba, su temible guardián, y regresan con su cabeza pese a las advertencias de los dioses.',
    texto_completo: `Ya unidos como hermanos inseparables, Gilgamesh comenzó a inquietarse por un pensamiento que no lo dejaba en paz: sabía que, pese a ser dos tercios dios, algún día moriría como cualquier mortal, y su nombre se perdería en el olvido si no realizaba una hazaña lo bastante grande como para que se recordara para siempre. Decidió entonces emprender una expedición hasta el legendario Bosque de los Cedros, un territorio remoto y sagrado custodiado por Humbaba, un monstruo colosal cuyo rostro estaba hecho de entrañas retorcidas entre sí, y a quien el propio Enlil había designado como guardián inquebrantable de ese lugar.

Enkidu, que había recorrido esas tierras salvajes durante su vida entre los animales, intentó disuadirlo: conocía el terror que Humbaba inspiraba y advirtió a Gilgamesh que enfrentarlo era prácticamente un suicidio. Pero Gilgamesh, decidido a dejar tras de sí algo imperecedero —aunque solo fuera su propio nombre grabado en la memoria de los hombres—, insistió, y los ancianos de Uruk, resignados ante su determinación, le desearon buena suerte y encomendaron a Enkidu que guiara a su rey de vuelta sano y salvo. Antes de partir, Ninsun, la madre divina de Gilgamesh, subió a la azotea de su templo, se purificó y suplicó directamente a Utu, el dios sol, que protegiera a su hijo durante todo el viaje; en un gesto poco común, adoptó formalmente a Enkidu como hijo propio, atándolo así al destino real de Gilgamesh de forma definitiva.

El viaje a través de montañas hostiles duró semanas, y cada noche Gilgamesh tenía sueños perturbadores que Enkidu interpretaba, uno tras otro, como presagios favorables pese a su naturaleza aterradora. Al llegar finalmente al borde del bosque, la magnitud de los cedros —árboles tan altos que su copa parecía tocar las nubes— dejó a ambos hombres momentáneamente sin palabras. Comenzaron a talar los primeros troncos, y el ruido no tardó en alertar a Humbaba, que emergió furioso, dispuesto a defender el territorio que se le había encomendado proteger.

En el momento más crítico del enfrentamiento, cuando la fuerza descomunal del monstruo amenazaba con aplastar a ambos héroes, Utu —cumpliendo el ruego de Ninsun— desató ocho vientos poderosos: el viento del sur, el del norte, el huracanado, el helado, cada uno golpeando a Humbaba desde una dirección distinta hasta inmovilizarlo por completo, incapaz de avanzar ni retroceder. Con el monstruo a su merced, Humbaba, aterrado por primera vez, suplicó clemencia directamente a Gilgamesh, ofreciéndole servirle para siempre como guardián leal si le perdonaba la vida, e incluso intentó apelar a Enkidu, recordándole que ambos habían vivido alguna vez cerca de la naturaleza salvaje.

Gilgamesh, conmovido, titubeó. Pero Enkidu, temeroso de que dejar con vida a un monstruo tan poderoso pudiera traer consecuencias peores más adelante, y quizás también deseoso de completar la hazaña sin ambigüedades, instó a su amigo a terminar lo que habían comenzado. Juntos, con sus hachas, decapitaron a Humbaba, y cortaron después los cedros más magníficos del bosque para llevarlos de regreso a Uruk como trofeo de su victoria. Pero la alegría de la victoria no fue completa: al enterarse de lo ocurrido, los dioses —Enlil entre ellos— consideraron la muerte de su guardián designado y la destrucción del bosque sagrado como una transgresión grave, un acto de arrogancia que no quedaría sin consecuencias para los dos héroes que se habían atrevido a desafiar un límite que no les correspondía cruzar.`,
    personajes: [['gilgamesh', 'protagonista'], ['enkidu', 'protagonista'], ['humbaba', 'antagonista'], ['utu', 'secundario'], ['ninsun', 'secundario']]
  },
  {
    slug: 'el-toro-del-cielo', titulo: 'El Toro del Cielo', tipo: 'heroica', periodo: 'Tras el regreso de la expedición al Bosque de los Cedros', es_preview: 0,
    resumen: 'Rechazada por Gilgamesh, Inanna exige a Anu que le entregue el Toro del Cielo para vengarse; los dos héroes lo derrotan, pero el desafío final de Enkidu sella su destino trágico.',
    texto_completo: `De regreso en Uruk, glorioso tras su victoria sobre Humbaba, Gilgamesh se bañó, se vistió con sus mejores ropas y se coronó, luciendo un atractivo tal que llamó la atención de la propia Inanna, que descendió a proponerle matrimonio, ofreciéndole a cambio carros de oro y lapislázuli, la lealtad de reyes y príncipes, y rebaños tan abundantes que ninguna otra oferta podría igualarla. Gilgamesh, sin embargo, la rechazó sin ninguna delicadeza: le recordó, uno por uno, a los amantes anteriores de la diosa —el pastor Dumuzi, condenado después al inframundo; un pájaro cuya ala ella misma quebró; un león atrapado en trampas por su propia mano; un caballo que ella agotó hasta la ruina— y le preguntó abiertamente qué destino similar le esperaría a él si aceptaba.

La humillación pública fue tan intensa que Inanna, temblando de furia, subió de inmediato al cielo a exigirle a su padre Anu que le entregara al Toro del Cielo, una bestia colosal cuyo solo resoplido abría grietas en la tierra capaces de tragarse ejércitos enteros. Anu se resistió al principio, advirtiéndole que liberar semejante criatura sobre Uruk provocaría siete años de hambruna devastadora en toda la región. Pero Inanna, sin ceder ni un ápice, lo amenazó con algo todavía peor: rompería las puertas del inframundo y liberaría a los muertos para que devoraran a los vivos si no le concedía lo que pedía. Ante esa amenaza, Anu finalmente cedió.

El Toro descendió sobre Uruk sembrando destrucción a cada paso: con su primer resoplido, se abrió una grieta que se tragó a cien hombres de un solo golpe; con el segundo, doscientos más desaparecieron bajo tierra. Gilgamesh y Enkidu, ya curtidos por su reciente victoria sobre Humbaba, no dudaron en enfrentarlo juntos. Enkidu, con una audacia que rozaba la temeridad, saltó directamente sobre la bestia, sujetándola con fuerza por los cuernos y la cola mientras esta se sacudía intentando arrojarlo, y sostuvo esa posición el tiempo suficiente para que Gilgamesh, con precisión letal, le clavara su espada en el punto exacto entre los cuernos y la nuca, matándola en el acto.

La victoria debió haber bastado. Pero Enkidu, en un gesto de desafío deliberado y quizás imprudente, arrancó un muslo entero de la bestia muerta y lo arrojó directamente hacia Inanna, que observaba la escena furiosa desde lo alto de las murallas de la ciudad, acompañándolo con palabras de burla abierta hacia la diosa humillada dos veces en el mismo día. Inanna, junto a las mujeres de su templo, entonó un lamento de duelo por el Toro, mientras Gilgamesh, ajeno todavía a las consecuencias que se avecinaban, celebraba la victoria con un banquete en Uruk.

Esa misma noche, en el silencio posterior a la celebración, Enkidu tuvo un sueño que lo dejó temblando al despertar: había visto a los dioses reunidos en asamblea, decidiendo que, por la doble ofensa cometida —la muerte de Humbaba, guardián designado de Enlil, y ahora la del Toro del Cielo, enviado por el propio Anu—, uno de los dos héroes debía morir como castigo ejemplar. Y los dioses, tras deliberar, habían decidido que sería Enkidu quien pagara por ambas transgresiones, dejando a Gilgamesh con vida, pero condenado a sobrevivir a la pérdida del único amigo que jamás había logrado igualarlo.`,
    personajes: [['gilgamesh', 'protagonista'], ['enkidu', 'protagonista'], ['inanna', 'antagonista'], ['toro-del-cielo', 'antagonista']]
  },
  {
    slug: 'la-muerte-de-enkidu', titulo: 'La muerte de Enkidu', tipo: 'tragedia', periodo: 'Poco después de la derrota del Toro del Cielo', es_preview: 0,
    resumen: 'Condenado por los dioses, Enkidu enferma lentamente durante doce días; su muerte destroza a Gilgamesh y lo enfrenta, por primera vez, con su propia mortalidad.',
    texto_completo: `El sueño que Enkidu había tenido tras la victoria sobre el Toro del Cielo no tardó en cumplirse. Al despertar de una segunda pesadilla, aún más clara que la primera, comprendió que su destino ya estaba sellado: los dioses habían decretado en asamblea que él, y no Gilgamesh, pagaría con su vida la doble transgresión de haber matado a Humbaba y al Toro del Cielo. Una fiebre lenta comenzó a consumirlo esa misma tarde, y con cada día que pasaba, su fuerza legendaria —la misma que una vez le había permitido sostener al Toro del Cielo por los cuernos— se desvanecía un poco más.

En su delirio, Enkidu maldijo primero a la puerta de cedro que él mismo había tallado para el templo de Enlil, lamentando no haberla dejado como un árbol vivo en el bosque; maldijo después al cazador que lo había descubierto por primera vez en la estepa, y a Shamhat, la sacerdotisa que lo había civilizado, culpándola de haberlo alejado de la vida salvaje donde nunca habría conocido esta muerte lenta. Pero fue Shamash —Utu, el dios sol que tanto los había protegido durante la expedición al Bosque de los Cedros— quien intervino en su delirio, recordándole con firmeza todo lo que había ganado gracias a su transformación: la amistad de un rey, banquetes dignos de la realeza, ropas finas, y un lugar en la memoria de los hombres que jamás habría alcanzado como una bestia más de la estepa. Avergonzado, Enkidu retiró sus maldiciones y en cambio bendijo a Shamhat por todo lo que su encuentro le había dado, aceptando por fin, con una calma que solo llega al final, que su transformación en hombre había merecido la pena pese al precio final que ahora debía pagar.

Durante doce días agónicos, Gilgamesh no se apartó de su lado ni un instante, negándose a aceptar que la fuerza que una vez había igualado la suya se extinguiera frente a sus propios ojos sin que él pudiera hacer absolutamente nada para impedirlo. Cuando Enkidu finalmente murió, Gilgamesh se cubrió el rostro como se cubre el de una novia en su boda, y rugió de dolor como una leona a la que le han arrebatado a sus cachorros, arrancándose las ropas y las joyas reales, y arrojándolas lejos de sí en un gesto de duelo tan violento como su propio dolor.

Durante seis días y siete noches, Gilgamesh se negó a permitir que el cuerpo de su amigo fuera enterrado, aferrándose a la esperanza irracional de que quizás, si esperaba lo suficiente, Enkidu volvería a moverse. Solo cuando un gusano cayó de la nariz del cadáver, dejando claro que la corrupción de la carne ya había comenzado sin remedio, Gilgamesh aceptó finalmente que su amigo no volvería jamás, y ordenó que se le rindieran honores fúnebres dignos de un héroe, con estatuas y ofrendas que perdurarían en su memoria.

Pero la muerte de Enkidu no dejó a Gilgamesh solo con el duelo: le reveló, con una claridad aterradora que ninguna victoria anterior había logrado imponerle, que él también era mortal, que la misma corrupción que ahora consumía el cuerpo de su amigo lo alcanzaría a él tarde o temprano, sin importar cuánto de dios llevara en su propia sangre. Fue ese terror, más que el duelo mismo, lo que empujó a Gilgamesh a abandonar Uruk, vestido con pieles de animal como un vagabundo, decidido a recorrer el mundo entero en busca de Utnapishtim, el único mortal que había logrado alguna vez escapar del destino que ahora lo perseguía a él también.`,
    personajes: [['enkidu', 'protagonista'], ['gilgamesh', 'protagonista'], ['utu', 'secundario'], ['shamhat', 'mencionado']]
  },
  {
    slug: 'gilgamesh-y-la-flor-de-la-eterna-juventud', titulo: 'Gilgamesh y la flor de la eterna juventud', tipo: 'tragedia', periodo: 'El final del viaje de Gilgamesh', es_preview: 0,
    resumen: 'Tras fracasar en la prueba de la vigilia, Gilgamesh recibe de Utnapishtim una última oportunidad: una planta que devuelve la juventud, que pierde ante una serpiente en el camino de regreso.',
    texto_completo: `Gilgamesh llegó finalmente, tras semanas de travesía por montañas hostiles, un túnel de oscuridad absoluta bajo las montañas Mashu y las aguas mortales que solo Urshanabi, el barquero de Utnapishtim, sabía cruzar, hasta la morada remota del único hombre que había logrado escapar de la muerte. Le contó toda su historia: la pérdida de Enkidu, el terror que ahora lo perseguía, la desesperación que lo había empujado hasta el confín mismo del mundo conocido. Utnapishtim escuchó con paciencia, y después le explicó cómo él y su esposa habían sobrevivido al gran diluvio, y cómo los dioses, avergonzados de su propia crueldad, les habían concedido la inmortalidad como una excepción irrepetible, un don que ninguna asamblea de dioses volvería jamás a otorgar a otro mortal.

Antes de rendirse del todo, Utnapishtim decidió someter a Gilgamesh a una prueba: si de verdad aspiraba a vencer a la muerte, primero debía vencer al sueño, su pariente más cercano, permaneciendo despierto durante seis días y siete noches seguidos. Gilgamesh, agotado por su larga travesía, se sentó dispuesto a resistir, pero apenas se acomodó, el sueño lo venció casi de inmediato, sin que él mismo se diera cuenta. Cada día que pasaba, la esposa de Utnapishtim horneaba un pan y lo dejaba junto a la cabeza del rey dormido, marcando el paso del tiempo; cuando finalmente Gilgamesh despertó, convencido de que apenas había cerrado los ojos un instante, Utnapishtim le señaló la fila de siete panes, cada uno en un estado distinto de dureza y moho, prueba irrefutable de cuántos días había dormido sin saberlo. Gilgamesh, humillado, comprendió que si ni siquiera podía vencer al sueño, mucho menos podría vencer a la muerte misma.

Compadecida ante su desesperación evidente, la esposa de Utnapishtim intercedió por él, y Utnapishtim, cediendo, le reveló un último secreto antes de que partiera: en el fondo del mar crecía una planta espinosa capaz de devolver la juventud a quien la comiera, no la inmortalidad completa, pero sí una segunda oportunidad de vivir con la vitalidad de un hombre joven. Gilgamesh, con una determinación renovada, se ató piedras pesadas a los pies para hundirse hasta el fondo, encontró la planta entre las rocas, se cortó las manos al arrancarla de raíz, y cortó también las cuerdas que lo sujetaban para volver a la superficie con su premio en las manos.

Emocionado más allá de lo que había sentido en mucho tiempo, Gilgamesh decidió no comer la planta de inmediato: la llevaría de vuelta a Uruk, la compartiría primero con los ancianos de la ciudad, y solo después, cuando estuviera seguro de sus efectos, la probaría él mismo. En el camino de regreso junto a Urshanabi, se detuvo junto a un estanque de agua fresca para bañarse y refrescarse tras el largo viaje, dejando la planta sin vigilancia por apenas un instante.

Fue todo lo que necesitó una serpiente, atraída por el aroma dulce de la planta, para deslizarse hasta ella, devorarla entera, y desaparecer de nuevo bajo tierra mudando su piel en el acto —una imagen que los propios sumerios usaban para explicar por qué las serpientes parecían renovarse eternamente mientras los hombres envejecían sin remedio. Gilgamesh, al descubrir lo ocurrido, se sentó en el suelo y lloró como nunca antes, comprendiendo con una claridad final y devastadora que ni siquiera esta última oportunidad, arrancada con sus propias manos del fondo del mar, había sido suya para conservar. Regresó a Uruk con las manos vacías, pero al llegar, mientras Urshanabi y él contemplaban juntos las murallas magníficas que la ciudad seguía teniendo, algo en Gilgamesh finalmente se aquietó: quizás no había vencido a la muerte, pero había construido algo que sí perduraría más allá de su propia vida, y con esa comprensión, imperfecta pero real, su larga búsqueda por fin llegó a su fin.`,
    personajes: [['gilgamesh', 'protagonista'], ['utnapishtim', 'secundario'], ['urshanabi', 'secundario']]
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-sumeria'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-sumeria".');
  return filas[0].id;
}

async function obtenerIdsPersonajes(libroId) {
  const [filas] = await pool.query('SELECT id, slug FROM personajes WHERE libro_id = ?', [libroId]);
  const ids = {};
  filas.forEach(f => { ids[f.slug] = f.id; });
  return ids;
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
  console.log('Sembrando parte 1: 8 historias de Mitologia Sumeria...\n');
  const libroId = await obtenerLibroId();
  const idsPersonajes = await obtenerIdsPersonajes(libroId);
  await sembrarHistorias(libroId, idsPersonajes);
  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
