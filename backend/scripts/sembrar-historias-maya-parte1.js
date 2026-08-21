// ============================================================
// scripts/sembrar-historias-maya-parte1.js
// ------------------------------------------------------------
// Primer lote de historias de Mitologia Maya (9 de 18): la
// cosmogonia del Popol Vuh y el primer ciclo de hazañas de los
// heroes gemelos, antes de su descenso a Xibalba. Idempotente
// via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-historias-maya-parte1.js
// ============================================================

const pool = require('../config/db');

const HISTORIAS = [
  {
    slug: 'la-creacion-del-mundo', titulo: 'La creación del mundo', tipo: 'cosmogonia', periodo: 'Antes del tiempo', es_preview: 1,
    resumen: 'En la oscuridad y el silencio absolutos, Hurakán, Gucumatz y Tepeu deliberan y, con solo pronunciar la palabra "tierra", hacen surgir montañas y valles del mar primordial.',
    texto_completo: `Antes de que existiera nada —antes de la tierra, los animales o los hombres— solo había un mar en calma bajo un cielo vacío, y en ese silencio absoluto flotaban ya Gucumatz, la serpiente emplumada envuelta en plumas de quetzal, y Hurakán, el Corazón del Cielo, compuesto en realidad de tres formas del rayo: Caculhá Hurakán, Chipi-Caculhá y Raxá-Caculhá. Junto a ellos deliberaba Tepeu, el Soberano, y los tres se comunicaban en la oscuridad, pensando y poniéndose de acuerdo sobre cómo debía nacer la luz y cómo debía sostenerse la vida que aún no existía.

De ese acuerdo nació la primera palabra pronunciada sobre la faz del mar: "¡Tierra!". Apenas se dijo, la tierra surgió como si una niebla se disipara de repente, y las montañas brotaron del agua con la misma facilidad con que se levanta la niebla sobre un valle. Los cipreses y los pinos cubrieron enseguida las laderas recién formadas, y los ríos comenzaron a correr libres entre los cerros, buscando su camino hacia las tierras bajas. Hurakán, satisfecho, contempló la obra junto a Gucumatz y Tepeu, y juntos decidieron que aquel paisaje necesitaba guardianes: así crearon a los venados y los pájaros, a quienes dieron sus propias moradas —el bosque para unos, las ramas y los nidos para otros— y les asignaron el mandato de multiplicarse y habitar cada rincón del mundo recién nacido.

Pero cuando los dioses pidieron a los animales que los nombraran y los veneraran por su nombre, solo obtuvieron graznidos, chillidos y rugidos: ninguno de ellos poseía la lengua ni el entendimiento necesarios para pronunciar palabras. Hurakán, Gucumatz y Tepeu comprendieron entonces que su obra estaba incompleta: no bastaba con poblar el mundo de vida, hacía falta un ser capaz de reconocer conscientemente a sus propios creadores, de ofrecerles alimento en forma de oraciones y ofrendas, y de contar el paso de los días según el calendario sagrado que ellos mismos habían diseñado.

Condenaron entonces a los animales a ser cazados y comidos por los seres que vendrían después, ya que no habían logrado cumplir el propósito para el que fueron creados, y volvieron a deliberar sobre cómo dar forma, esta vez, a una criatura capaz de hablar. Decidieron que debía moldearse de barro húmedo, tomado directamente de la tierra que acababan de crear, dando inicio así al primero de varios intentos —cada uno más ambicioso que el anterior— por producir seres verdaderamente dignos de reconocer y honrar a quienes les habían dado el mundo entero como morada.`,
    personajes: [['hurakan', 'protagonista'], ['gucumatz', 'protagonista'], ['tepeu', 'protagonista']]
  },
  {
    slug: 'los-hombres-de-barro-y-madera', titulo: 'Los hombres de barro y madera', tipo: 'cosmogonia', periodo: 'Antes del tiempo', es_preview: 1,
    resumen: 'Dos intentos fallidos de crear a la humanidad: unos hombres de barro que se deshacen al primer contacto con el agua, y unos hombres de madera sin memoria ni corazón, destruidos por un diluvio y por sus propias posesiones.',
    texto_completo: `El primer intento de los dioses por crear un ser capaz de hablar y venerarlos fue moldear un cuerpo con barro húmedo, dándole forma de brazos, piernas y rostro. Al principio pareció funcionar: el hombre de barro habló, pero su voz carecía de sentido, sus palabras se deshacían tan pronto como las pronunciaba, sin coherencia ni memoria de una frase a la siguiente. Peor aún, su cuerpo entero resultó ser tan frágil como el material del que estaba hecho: no podía sostenerse erguido, se derrumbaba sobre sí mismo, y bastaba un poco de agua para que su rostro se deformara y sus rasgos se disolvieran por completo. Hurakán, Gucumatz y Tepeu comprendieron de inmediato que aquel ser jamás podría multiplicarse ni sostener el peso de una civilización, y decidieron deshacer su obra para intentarlo de otra manera.

Consultaron entonces a la pareja de ancianos adivinos, Xpiyacoc y Xmucané, quienes lanzaron granos de maíz y semillas de tzité para leer el destino del siguiente intento. El oráculo señaló la madera como el material correcto, y los dioses tallaron entonces una nueva generación de seres, esta vez hombres y mujeres de madera capaces de hablar con claridad, caminar erguidos y hasta reproducirse entre sí, poblando rápidamente la tierra con sus descendientes. Pero esta segunda creación arrastraba un defecto distinto y más profundo que el barro: los hombres de madera no tenían alma ni memoria verdadera. Hablaban, pero sus palabras estaban vacías de sentimiento; caminaban y trabajaban, pero jamás alzaban la vista al cielo para recordar ni agradecer a quienes los habían creado.

Su indiferencia se extendía también a todo lo que los rodeaba: trataban con crueldad y descuido a sus animales de carga, quemaban sin cuidado sus utensilios de cocina y golpeaban sin motivo a las piedras de moler que usaban cada día. Hurakán decidió finalmente que aquella segunda humanidad tampoco merecía perdurar, y desató sobre ella una resina espesa que cayó del cielo como lluvia oscura, mientras un gran diluvio anegaba la tierra entera. Pero el castigo no vino solo del cielo: los propios objetos domésticos de los hombres de madera, resentidos por años de maltrato, se volvieron contra ellos —las vasijas y los comales les quemaron el rostro, las piedras de moler los golpearon, y sus perros y aves de corral, hartos también, los persiguieron mordiendo y picoteando sin piedad.

Fue en medio de ese caos que los dioses convocaron además a un grupo de criaturas monstruosas para completar la destrucción: Xecotcovach, un águila gigantesca que descendió arrancando los ojos de quienes intentaban huir; Cotzbalam, un jaguar feroz que despedazaba los cuerpos indefensos; y Tucumbalam, una bestia de garras largas y patas de tapir que remataba a quienes lograban escapar de los dos anteriores. Solo un puñado de hombres de madera sobrevivió a la destrucción total, refugiándose en los árboles más altos; sus descendientes, según cuenta el propio Popol Vuh, son los monos que todavía habitan hoy los bosques de la región, un recordatorio viviente de lo cerca que estuvo la humanidad de quedar reducida para siempre a esa forma incompleta.`,
    personajes: [['hurakan', 'protagonista'], ['xpiacoc', 'secundario'], ['xmucane', 'secundario'], ['xecotcovach', 'antagonista'], ['cotzbalam', 'antagonista'], ['tucumbalam', 'antagonista']]
  },
  {
    slug: 'la-derrota-de-vucub-caquix', titulo: 'La derrota de Vucub-Caquix', tipo: 'heroica', periodo: 'Antes de la era actual', es_preview: 1,
    resumen: 'Antes de conocer la historia de su propio padre, los jóvenes Hunahpú e Ixbalanqué derrotan al demonio pájaro Vucub-Caquix, que se había proclamado falso sol y luna por pura vanidad.',
    texto_completo: `Mucho antes de que existiera el sol verdadero, un ser demoníaco con forma de guacamayo gigantesca llamado Vucub-Caquix se proclamó a sí mismo astro supremo del cielo, presumiendo ante todo el que quisiera escucharlo de sus ojos brillantes como plata pulida, sus dientes engastados con piedras preciosas resplandecientes y su plumaje que, aseguraba, iluminaba la tierra entera igual que lo haría cualquier sol verdadero. Su soberbia no tenía límite: exigía ser venerado como si ya gobernara el cielo diurno y nocturno por igual, sin que ningún astro auténtico hubiera aparecido todavía para desmentirlo.

Los dioses creadores, indignados ante semejante impostura, decidieron que dos jóvenes hermanos gemelos, Hunahpú e Ixbalanqué, se encargaran de poner fin a la farsa antes de que su falso esplendor arraigara demasiado entre los pueblos que aún no conocían otra cosa. Los gemelos localizaron a Vucub-Caquix alimentándose, como cada mañana, de los frutos de un árbol de nance, y le dispararon con sus cerbatanas certeras. El disparo le rompió la mandíbula y lo derribó del árbol, pero el propio Vucub-Caquix, furioso y todavía poderoso pese a la herida, alcanzó a sujetar a Hunahpú por el brazo y se lo arrancó de un tirón antes de que el joven pudiera escapar, llevándose consigo el trofeo hasta su guarida para curarse.

Sin desanimarse, los gemelos idearon un segundo plan: se disfrazaron de un par de ancianos curanderos itinerantes y se presentaron ante la guarida de Vucub-Caquix, ofreciéndose a aliviar el dolor insoportable que sentía en la mandíbula rota y en los ojos, ahora hinchados por la herida. El demonio, desesperado por el sufrimiento, aceptó el tratamiento sin sospechar nada. Los falsos curanderos procedieron entonces a "curarlo" extrayéndole, uno por uno, los dientes de piedra preciosa que tanto presumía, sustituyéndolos por simples granos de maíz blanco molido que, a simple vista, parecían idénticos. Hicieron lo mismo con sus ojos brillantes, reemplazándolos también por sustitutos sin ningún valor ni poder real.

Despojado por completo de las joyas que constituían la verdadera fuente de su falso esplendor, Vucub-Caquix perdió rápidamente las fuerzas y murió poco después, sin que su cuerpo desprovisto de adornos conservara ya nada del brillo que tanto había presumido. Los gemelos recuperaron además el brazo arrancado de Hunahpú, reincorporándoselo sin dificultad gracias a la ayuda de una hormiga que se los llevó de vuelta, y con la derrota completa del falso sol, el camino quedó por fin despejado para que el astro verdadero pudiera ocupar su lugar legítimo en el cielo una vez llegado su momento.`,
    personajes: [['hunahpu', 'protagonista'], ['xbalanque', 'protagonista'], ['vucub-caquix', 'antagonista']]
  },
  {
    slug: 'la-derrota-de-zipacna', titulo: 'La derrota de Zipacná', tipo: 'heroica', periodo: 'Antes de la era actual', es_preview: 0,
    resumen: 'El gigante Zipacná, que presume haber creado todas las montañas del mundo, aplasta con crueldad a cuatrocientos jóvenes — hasta que los héroes gemelos lo atraen a una trampa mortal para vengarlos.',
    texto_completo: `Zipacná, hijo mayor del demonio Vucub-Caquix recién derrotado, era un gigante de fuerza tan descomunal que pasaba sus días enteros moviendo montañas de un lugar a otro, atribuyéndose personalmente la creación de cada cerro y cada cordillera de la tierra. Su soberbia, heredada directamente de su padre, lo llevaba a burlarse abiertamente de cualquiera que dudara de sus proezas, y esa misma arrogancia terminó por costarle la vida a un grupo numeroso de jóvenes que, sin saberlo, se cruzaron en su camino.

Cuatrocientos muchachos habían cortado un enorme tronco para construir la viga principal de una nueva casa comunal, pero el peso resultó excesivo para todos ellos juntos. Zipacná, que pasaba cerca, se ofreció a cargar el tronco él solo hasta el lugar de la construcción, una hazaña que efectivamente cumplió sin el menor esfuerzo aparente. Los cuatrocientos jóvenes, avergonzados de necesitar la ayuda de un solo gigante para lo que ellos no habían logrado entre todos, decidieron gastarle una broma peligrosa: cavaron un pozo profundo y le pidieron que bajara a examinarlo, con la intención de enterrarlo vivo dentro apenas descendiera. Zipacná, sin embargo, sospechó la trampa a tiempo, y en cuanto tocó el fondo, se apartó a una cavidad lateral que había cavado en secreto, dejando que la tierra cayera sobre un espacio vacío mientras él permanecía a salvo, fingiendo estar aplastado.

Convencidos de haberlo eliminado, los cuatrocientos jóvenes celebraron con una fiesta ruidosa esa misma noche. Pero Zipacná, furioso por la traición, emergió del pozo sin que nadie lo esperara y derrumbó la casa entera sobre ellos mientras dormían, matándolos a todos de una sola vez. Sus almas ascendieron entonces al cielo nocturno, transformadas para siempre en el pequeño grupo de estrellas conocido como las Pléyades, un recordatorio permanente de la crueldad desmedida con la que Zipacná había respondido a una simple broma juvenil.

Al enterarse de lo ocurrido, Hunahpú e Ixbalanqué decidieron que Zipacná debía pagar por la matanza. Conociendo su apetito voraz, fingieron haber encontrado un cangrejo gigante escondido en el fondo de un profundo barranco, y lo invitaron a buscarlo consigo. Zipacná, hambriento y confiado en su propia fuerza, descendió sin dudarlo hasta el fondo de una montaña artificial que los gemelos habían construido especialmente para la ocasión. En el momento exacto en que se inclinó a buscar el supuesto cangrejo, los gemelos dejaron caer sobre él la montaña entera, aplastándolo bajo toneladas de piedra y convirtiéndolo de manera definitiva en roca —un destino irónicamente apropiado para quien había pasado toda su vida moviendo montañas a su antojo.`,
    personajes: [['hunahpu', 'protagonista'], ['xbalanque', 'protagonista'], ['zipacna', 'antagonista'], ['vucub-caquix', 'mencionado']]
  },
  {
    slug: 'la-derrota-de-cabrakan', titulo: 'La derrota de Cabracán', tipo: 'heroica', periodo: 'Antes de la era actual', es_preview: 0,
    resumen: 'El último de los hijos soberbios de Vucub-Caquix, capaz de derribar montañas con solo patear el suelo, cae ante un engaño mucho más simple que la fuerza que presumía poseer.',
    texto_completo: `Cabracán, hijo menor de Vucub-Caquix y hermano de Zipacná, poseía un poder tan devastador como el de su hermano mayor pero de naturaleza distinta: bastaba con que golpeara el suelo con el pie para que montañas enteras se derrumbaran a su alrededor, un poder que ejercía sin la menor restricción y del que presumía abiertamente ante cualquiera dispuesto a escucharlo. Tras la muerte de su padre y de su hermano a manos de Hunahpú e Ixbalanqué, Cabracán se convirtió en el último objetivo pendiente de los gemelos, decididos a poner fin de una vez a la amenaza que aquella familia de gigantes soberbios representaba para el orden que estaba por instaurarse en el mundo.

Los héroes se presentaron ante Cabracán haciéndose pasar por simples cazadores, y lo encontraron, como esperaban, jactándose de su capacidad para derribar cualquier montaña que se le señalara. Fingiendo admiración genuina, le contaron que habían visto una montaña aún más grande hacia el oriente, tan imponente que dudaban que incluso él pudiera derrumbarla. Picado en su orgullo, Cabracán exigió que lo llevaran de inmediato hasta ese lugar para demostrar lo contrario, sin sospechar que se dirigía directamente hacia la trampa que los gemelos habían preparado con antelación.

En el camino, Hunahpú e Ixbalanqué le ofrecieron un ave asada como alimento para el viaje, un gesto de aparente cortesía que Cabracán aceptó sin dudar, hambriento tras la caminata. Lo que el gigante no sabía era que los gemelos habían untado previamente el ave con tierra blanca —en realidad cal o yeso—, una sustancia capaz de debilitar progresivamente incluso a un cuerpo de fuerza descomunal como el suyo. Cabracán devoró el ave entera sin notar nada extraño en su sabor, y continuó la marcha confiado hacia la supuesta montaña gigantesca.

Poco después de comer, comenzó a sentir un mareo creciente y una debilidad que jamás había experimentado, síntomas que se intensificaron con cada paso hasta dejarlo casi incapaz de sostenerse en pie. Los gemelos, viéndolo ya vencido por el veneno lento que le habían suministrado, aprovecharon el momento para atarlo sin resistencia posible y enterrarlo vivo bajo tierra, completando así la eliminación total de la familia de Vucub-Caquix. Con Zipacná convertido en piedra y Cabracán sepultado para siempre, la soberbia desmedida que ambos gigantes representaban quedó definitivamente removida del camino hacia el orden cósmico que los verdaderos dioses estaban preparando para el mundo.`,
    personajes: [['hunahpu', 'protagonista'], ['xbalanque', 'protagonista'], ['cabrakan', 'antagonista'], ['zipacna', 'mencionado']]
  },
  {
    slug: 'la-muerte-de-hun-hunahpu-y-vucub-hunahpu', titulo: 'La muerte de Hun-Hunahpú y Vucub-Hunahpú', tipo: 'tragedia', periodo: 'Una generación antes de los héroes gemelos', es_preview: 1,
    resumen: 'Dos hermanos jugadores de pelota molestan con su juego ruidoso a los señores de Xibalbá, que los convocan al inframundo, los someten a humillaciones sucesivas y finalmente los sacrifican.',
    texto_completo: `Hun-Hunahpú y Vucub-Hunahpú, hijos de los ancianos divinos Xpiyacoc y Xmucané, eran dos hermanos apasionados por el juego de pelota, un deporte ritual que practicaban casi a diario en una cancha cercana a la casa de su madre. Su entusiasmo era tal que el eco de la pelota golpeando contra el suelo y las paredes de piedra resonaba hasta las profundidades de Xibalbá, el inframundo gobernado por Hun-Camé y Vucub-Camé, molestando de forma constante a los doce señores que ahí residían y que consideraban aquel ruido una falta de respeto intolerable hacia su reino silencioso.

Los señores de Xibalbá enviaron entonces mensajeros —un grupo de búhos— a convocar a los dos hermanos a jugar una partida con ellos en su propio territorio subterráneo, una invitación que, en realidad, ocultaba la intención deliberada de destruirlos. Hun-Hunahpú y Vucub-Hunahpú, sin sospechar el engaño, dejaron su equipo de juego escondido bajo el techo de la casa de su madre y descendieron obedientes hacia Xibalbá, enfrentando desde el primer instante una serie de trampas diseñadas para humillarlos: al llegar, un muñeco de madera vestido como un señor los saludó sin responder a sus reverencias, dejándolos confundidos ante el resto de la corte, que estallaba en risas por el error.

Les ofrecieron después un banco de piedra al rojo vivo como asiento de bienvenida, quemándolos apenas se sentaron, y por la noche los enviaron a la Casa Oscura, la primera de las temidas casas de tormento, con la orden de mantener encendidos toda la noche un cigarro y una antorcha sin que se consumieran del todo, una tarea imposible que los hermanos no lograron cumplir. Al amanecer, al comprobar que habían fallado la prueba, los señores de Xibalbá los condenaron sin más demora, sacrificándolos y enterrando sus cuerpos en el Pucbal-Chah, el campo de juego de pelota del propio inframundo.

Pero antes de enterrarlo por completo, los señores de Xibalbá decidieron cortar y colgar la cabeza de Hun-Hunahpú en las ramas de un árbol seco cercano al camino, como advertencia visible para cualquiera que se atreviera a desafiar su reino en el futuro. El árbol, para sorpresa de todos, se cubrió de inmediato de un fruto redondo parecido a una calabaza, y la cabeza se confundió por completo entre ellos, tan idéntica a los demás frutos que los propios señores de Xibalbá prohibieron a cualquiera acercarse a tocar el árbol, temerosos de un poder que no lograban comprender del todo. Sin saberlo, con esa prohibición sembraban ya la semilla de su propia derrota futura, una generación después, a manos de los hijos que ese mismo árbol estaba a punto de engendrar.`,
    personajes: [['hun-hunahpu', 'protagonista'], ['vucub-hunahpu', 'protagonista'], ['hun-came', 'antagonista'], ['vucub-came', 'antagonista'], ['xmucane', 'mencionado']]
  },
  {
    slug: 'ixquic-y-el-arbol-de-las-calabazas', titulo: 'Ixquic y el árbol de las calabazas', tipo: 'otro', periodo: 'Una generación antes de los héroes gemelos', es_preview: 0,
    resumen: 'Atraída por la curiosidad hacia un árbol prohibido, la doncella Ixquic queda embarazada por la calavera parlante de Hun-Hunahpú y debe escapar de Xibalbá para salvar la vida de los hijos que lleva en el vientre.',
    texto_completo: `Ixquic era hija de Cuchumaquic, uno de los señores menores de Xibalbá, y como cualquier joven curiosa de su edad, había escuchado los rumores sobre un árbol extraño cerca del camino, cubierto de frutos parecidos a calabazas que nadie se atrevía a tocar por orden expresa de los señores del inframundo. Intrigada por la prohibición misma más que por el fruto en sí, decidió acercarse sola una tarde a examinarlo de cerca, sin saber que aquel árbol era el mismo donde colgaba, disfrazada entre sus frutos, la cabeza cortada de Hun-Hunahpú.

Al llegar frente al árbol, Ixquic extendió la mano hacia una de las ramas más bajas, preguntándose en voz alta si sería seguro probar aquellos frutos tan llamativos. La calavera de Hun-Hunahpú, para su sorpresa, le habló directamente: le explicó que aquellos frutos eran solo huesos redondeados sin ninguna sustancia comestible, y le preguntó si realmente los deseaba de todos modos. Cuando Ixquic, sin amedrentarse, respondió que sí, la calavera escupió un poco de saliva directamente en la palma de su mano extendida, y le aseguró que aquello bastaba: su descendencia, le dijo, sería digna, y no debía temer nada de lo que estaba por venir.

Sin ningún otro contacto físico, Ixquic quedó embarazada esa misma tarde. Meses después, cuando su vientre creciente resultó imposible de ocultar, su propio padre, furioso y avergonzado ante el resto de la corte de Xibalbá, exigió una explicación que ella no podía dar sin revelar el encuentro con el árbol prohibido. Cuchumaquic ordenó entonces a cuatro búhos mensajeros que la llevaran lejos y la sacrificaran, trayéndole después su corazón como prueba irrefutable de que la sentencia se había cumplido.

Ixquic, decidida a proteger a los hijos que llevaba en el vientre, convenció a los búhos en el camino de que la perdonaran, ofreciéndoles en cambio la savia roja y espesa de un árbol de grana, que al coagularse y secarse adoptaba una apariencia casi idéntica a la de un corazón real. Los búhos, compadecidos o quizás simplemente convencidos por el engaño, aceptaron el sustituto y la dejaron marchar con vida. Ixquic ascendió entonces desde Xibalbá hasta la superficie, y tras un largo camino llegó finalmente a la casa de Xmucané, la madre de Hun-Hunahpú, presentándose como su nuera y portadora de sus nietos. Xmucané, recelosa al principio ante una historia tan extraordinaria, le exigió una prueba: debía llenar una red entera de mazorcas de maíz cortadas de una sola planta en su huerto, una tarea que Ixquic, con ayuda silenciosa de los propios dioses, cumplió sin dificultad, convenciendo por fin a su suegra de la verdad de su relato y asegurando así un lugar seguro donde dar a luz a los futuros héroes gemelos.`,
    personajes: [['ixquic', 'protagonista'], ['hun-hunahpu', 'secundario'], ['xmucane', 'secundario'], ['hun-came', 'mencionado']]
  },
  {
    slug: 'el-nacimiento-de-los-gemelos-y-los-hermanos-simios', titulo: 'El nacimiento de los gemelos y los hermanos simios', tipo: 'heroica', periodo: 'Juventud de los héroes gemelos', es_preview: 0,
    resumen: 'Hunahpú e Ixbalanqué nacen y crecen maltratados por sus medios hermanos mayores, Hun Batz y Hun Chouén — hasta que, hartos de los abusos, los transforman en monos mediante un engaño.',
    texto_completo: `Hunahpú e Ixbalanqué nacieron en la casa de su abuela Xmucané, hijos de Ixquic y, sin haberlo conocido nunca, del ya fallecido Hun-Hunahpú. Desde su nacimiento, convivieron con dos medios hermanos mayores, Hun Batz y Hun Chouén, hijos de Hun-Hunahpú de un matrimonio anterior a su muerte en Xibalbá, criados también bajo el mismo techo de Xmucané. Hun Batz y Hun Chouén habían crecido convertidos en músicos, cantores, escribas y escultores extraordinariamente talentosos, admirados en toda la comunidad por sus dones artísticos, pero su relación con los recién llegados se agrió casi de inmediato: celosos de que Xmucané dedicara tiempo y cuidado a los gemelos pequeños, comenzaron a maltratarlos sistemáticamente, llegando incluso a colgarlos de un árbol de hormigas bravas para hacerles daño mientras jugaban.

Hunahpú e Ixbalanqué, sin embargo, no eran niños comunes: pese a las agresiones constantes, fueron desarrollando desde pequeños una habilidad excepcional con la cerbatana, cazando pájaros y pequeños animales con una puntería que sus propios hermanos mayores jamás lograron igualar pese a toda su educación artística formal. Con el tiempo, cansados de los abusos recibidos, los gemelos decidieron poner fin a la situación mediante un engaño cuidadosamente planeado, sin recurrir a la violencia directa contra sus hermanos.

Un día, mientras cazaban juntos, los gemelos fingieron que un pájaro había quedado atrapado en la copa de un árbol extraordinariamente alto, y pidieron a Hun Batz y Hun Chouén que subieran a buscarlo, ya que ellos mismos no alcanzaban las ramas más altas. Los hermanos mayores, sin sospechar nada, treparon confiados hasta la cima. En ese momento, Hunahpú e Ixbalanqué pronunciaron un hechizo que hizo crecer el tronco del árbol de manera repentina y descomunal, dejando a Hun Batz y Hun Chouén atrapados a una altura imposible de descender por sus propios medios.

Cuando finalmente lograron bajar, ya no conservaban su forma humana original: sus rostros se habían alargado, sus brazos se habían cubierto de pelo y les había crecido una cola larga, transformados por completo en monos. Xmucané, al presenciar la escena desde su casa, no pudo contener la risa ante la imagen tan absurda de sus nietos convertidos en criaturas simiescas, y ese mismo ataque de risa —según cuenta el propio Popol Vuh— impidió que pudiera concentrarse lo suficiente para intentar revertir el hechizo, aunque lo intentó en más de una ocasión después. Hun Batz y Hun Chouén quedaron consagrados desde entonces como patronos divinos de la música, la danza y la escritura bajo su nueva forma de monos, honrados hasta hoy por músicos y escribas, mientras Hunahpú e Ixbalanqué continuaron creciendo hacia las hazañas mayores que todavía les esperaban.`,
    personajes: [['hunahpu', 'protagonista'], ['xbalanque', 'protagonista'], ['hunbatz-hunchouen', 'antagonista'], ['xmucane', 'secundario'], ['ixquic', 'mencionado']]
  },
  {
    slug: 'la-convocatoria-a-xibalba', titulo: 'La convocatoria a Xibalbá', tipo: 'heroica', periodo: 'Juventud de los héroes gemelos', es_preview: 0,
    resumen: 'Los gemelos descubren el antiguo equipo de juego de pelota de su padre y, al usarlo, atraen la misma atención furiosa de los señores de Xibalbá que había costado la vida a la generación anterior.',
    texto_completo: `Un día, mientras despejaban un terreno para sembrar maíz junto a la casa de su abuela, Hunahpú e Ixbalanqué descubrieron, colgado del techo desde hacía años, el antiguo equipo de juego de pelota que había pertenecido a su padre Hun-Hunahpú y a su tío Vucub-Hunahpú antes de su fatal descenso a Xibalbá. Xmucané, al verlos encontrarlo, sintió un dolor profundo pero guardó silencio sobre el destino trágico de ambos hermanos, sin revelar todavía a los gemelos la historia completa de lo que les había ocurrido en el inframundo.

Fascinados por el hallazgo, los gemelos limpiaron la vieja cancha de juego cercana a la casa —la misma que sus predecesores habían usado— y comenzaron a jugar con el mismo entusiasmo apasionado que había caracterizado a su padre y a su tío. El eco de la pelota golpeando el suelo resonó de nuevo hasta las profundidades de Xibalbá, alcanzando los oídos de Hun-Camé y Vucub-Camé, que reconocieron de inmediato el mismo ruido molesto que años atrás los había llevado a convocar y destruir a la generación anterior de jugadores.

Furiosos por lo que interpretaron como una nueva falta de respeto hacia su reino, los señores de Xibalbá enviaron una vez más a sus mensajeros búhos a la superficie, con la orden de convocar a los gemelos a descender y enfrentarlos en su propio territorio, exactamente como habían hecho con Hun-Hunahpú y Vucub-Hunahpú. Cuando los búhos llegaron a la casa de Xmucané con el mensaje, Hunahpú e Ixbalanqué comprendieron finalmente, a través de las palabras angustiadas de su abuela, la historia completa que ella les había ocultado hasta entonces: el destino fatal de su padre y su tío en aquel mismo inframundo que ahora los llamaba a ellos.

A diferencia de la generación anterior, sin embargo, los gemelos no descendieron desprevenidos. Antes de partir, dejaron instrucciones precisas a su abuela: debía sembrar una caña en el centro de la casa, y si esta se secaba, sabría que habían muerto en Xibalbá; pero si permanecía verde, significaría que seguían con vida, sin importar cuánto tiempo tardaran en regresar. Con ese pacto silencioso establecido, Hunahpú e Ixbalanqué emprendieron el mismo descenso que había costado la vida a su padre y a su tío, decididos esta vez a no caer en las mismas trampas ni a subestimar el peligro que los aguardaba en las profundidades del reino de la muerte.`,
    personajes: [['hunahpu', 'protagonista'], ['xbalanque', 'protagonista'], ['xmucane', 'secundario'], ['hun-came', 'antagonista'], ['vucub-came', 'antagonista'], ['hun-hunahpu', 'mencionado']]
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-maya'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-maya" -- créalo primero.');
  return filas[0].id;
}

async function sembrarHistorias(libroId) {
  const [filasPersonajes] = await pool.query('SELECT id, slug FROM personajes WHERE libro_id = ?', [libroId]);
  const idsPersonajes = {};
  filasPersonajes.forEach(f => { idsPersonajes[f.slug] = f.id; });

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
  console.log('Sembrando historias de Mitologia Maya (parte 1)...\n');
  const libroId = await obtenerLibroId();
  await sembrarHistorias(libroId);
  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
