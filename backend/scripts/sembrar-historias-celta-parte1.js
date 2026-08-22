// ============================================================
// scripts/sembrar-historias-celta-parte1.js
// ------------------------------------------------------------
// Primer lote de historias de Mitologia Celta (9 de 18):
// el ciclo mitologico irlandes -- Tuatha De Danann, Lugh,
// Nuada -- y las primeras hazanas del Ulster.
// Contenido completo desde el inicio (~500-650 palabras c/u).
// Idempotente via slug.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-historias-celta-parte1.js
// ============================================================

const pool = require('../config/db');

const HISTORIAS = [
  {
    slug: 'la-llegada-de-los-tuatha-de-danann', titulo: 'La llegada de los Tuatha Dé Danann',
    tipo: 'fundacion', periodo: 'Los tiempos primordiales de Irlanda',
    resumen: 'El pueblo de la diosa Danu desciende sobre Irlanda envuelto en niebla mágica, trayendo consigo cuatro tesoros sagrados que definirán su reinado.',
    texto_completo: `Antes de que Irlanda tuviera la forma que conocemos hoy, la isla había pasado ya por las manos de varios pueblos legendarios: primero Cesair y su gente, aniquilados por el diluvio; después Partholón, extinguido por una plaga; luego Nemed, cuyo pueblo terminó disperso tras generaciones de lucha contra los Fomorianos; y finalmente los Fir Bolg, que gobernaban la isla con relativa estabilidad cuando, un día, el cielo se oscureció durante tres jornadas completas sin que nadie supiera explicar el motivo.

Cuando la niebla finalmente se disipó, un nuevo pueblo se encontraba ya asentado en las colinas del oeste de Irlanda, como si hubiera brotado directamente de la tierra o descendido del cielo mismo: los Tuatha Dé Danann, "el pueblo de la diosa Danu", una raza de seres de belleza, sabiduría y poder mágico muy superiores a cualquiera de los pueblos anteriores. Según las crónicas más antiguas, habían llegado en realidad navegando desde islas remotas del norte del mundo, donde habían pasado generaciones enteras perfeccionando las artes mágicas y la artesanía en cuatro ciudades legendarias —Falias, Gorias, Findias y Murias—, y al desembarcar finalmente en Irlanda, quemaron sus propias naves para no sentir jamás la tentación de retirarse, dejando que el humo de esa hoguera se confundiera con la niebla que había cubierto el cielo durante su llegada.

Consigo trajeron cuatro tesoros extraordinarios, uno de cada una de sus ciudades de origen: la Piedra de Fal, que rugía bajo los pies del legítimo rey de Irlanda y permanecía muda ante cualquier impostor; la Lanza de Lugh, que garantizaba la victoria a quien la empuñara en batalla; la Espada de Nuada, de la que ningún enemigo escapaba jamás una vez desenvainada; y el Caldero del Dagda, del que ningún comensal se retiraba sin quedar completamente satisfecho. Estos cuatro objetos, más que simples armas o herramientas, representaban la propia legitimidad y el poder del nuevo pueblo gobernante, y su presencia bastaba para que los Fir Bolg, gobernantes anteriores de la isla, comprendieran de inmediato que se enfrentaban a una fuerza muy superior a la suya.

Los Fir Bolg, sin embargo, no estaban dispuestos a ceder el control de Irlanda sin resistencia, y ambos pueblos se prepararon para un enfrentamiento que decidiría el destino de la isla durante generaciones: la Primera Batalla de Mag Tuired, el primer gran conflicto que enfrentaría a los recién llegados Tuatha Dé Danann contra los habitantes establecidos de Irlanda, un choque que marcaría el verdadero comienzo del reinado divino sobre la isla verde.`
  },
  {
    slug: 'la-primera-batalla-de-mag-tuired', titulo: 'La primera batalla de Mag Tuired',
    tipo: 'heroica', periodo: 'Poco después de la llegada de los Tuatha Dé Danann',
    resumen: 'Los Tuatha Dé Danann se enfrentan a los Fir Bolg por el control de Irlanda, y Nuada pierde el brazo que lo convertirá, temporalmente, en un rey inadecuado.',
    texto_completo: `Nuada, rey de los recién llegados Tuatha Dé Danann, envió un mensajero a la corte de los Fir Bolg proponiendo dividir Irlanda pacíficamente entre ambos pueblos antes de recurrir a la guerra. Los Fir Bolg, sin embargo, orgullosos de su dominio establecido sobre la isla y desconfiados de las intenciones reales de los recién llegados, rechazaron la propuesta y decidieron enfrentar a los Tuatha Dé Danann en el campo de batalla, en la llanura que pasaría a la historia como Mag Tuired, "la llanura de las torres".

La batalla se extendió durante varios días de combate encarnizado, con ambos bandos demostrando un valor y una destreza extraordinarios; se dice que, siguiendo un código de honor compartido por ambos pueblos, se acordaban tregua diarias para que los sanadores de cada bando pudieran atender a sus heridos, y que ambos ejércitos llegaron incluso a intercambiar temporalmente sus armas para igualar las condiciones del combate cuando se descubrió que un tipo de lanza usada por los Tuatha Dé Danann resultaba considerablemente más letal que las empleadas por los Fir Bolg. Fue durante uno de los enfrentamientos más intensos de esos días cuando Nuada, rey de los Tuatha Dé Danann, se enfrentó directamente a Sreng, uno de los campeones más temibles de los Fir Bolg, en un duelo que terminó con Sreng cercenando por completo el brazo derecho de Nuada de un solo golpe de su espada.

Pese a la pérdida devastadora de su rey, los Tuatha Dé Danann lograron finalmente imponerse en la batalla, forzando a los Fir Bolg a retirarse hacia la provincia de Connacht, donde se les permitió conservar cierto territorio bajo un acuerdo de paz negociado tras el conflicto. La victoria, sin embargo, trajo consigo un problema inesperado y grave para los propios vencedores: según la ley tradicional de los Tuatha Dé Danann, ningún rey con una imperfección física visible podía ocupar legítimamente el trono, y el brazo perdido de Nuada, pese a su indudable valor en la batalla que acababan de ganar, lo descalificaba automáticamente para seguir gobernando.

Dian Cécht, el gran sanador del pueblo, junto al herrero Creidhne, fabricó para Nuada un brazo protésico de plata pura, articulado y funcional, tan bien construido que Nuada pudo recuperar movimiento casi completo en la extremidad artificial; pero incluso esa solución ingeniosa no bastó para satisfacer plenamente la ley, que exigía perfección física absoluta y no una mera reparación artificial, por hábil que fuera. Nuada se vio obligado a ceder el trono temporalmente, abriendo paso a un periodo de gobierno bajo un rey muy distinto, medio fomoriano él mismo, cuyo reinado llevaría a los Tuatha Dé Danann a una crisis mucho más profunda que cualquier batalla contra los Fir Bolg.`
  },
  {
    slug: 'el-nacimiento-de-lugh', titulo: 'El nacimiento de Lugh',
    tipo: 'cosmogonia', periodo: 'Durante el reinado fomoriano sobre los Tuatha Dé Danann',
    resumen: 'Encerrada por su propio padre para evitar una profecía, Ethniu concibe en secreto al hijo destinado a derrotarlo: Lugh, el dios de todas las artes.',
    texto_completo: `Tras la pérdida del brazo de Nuada en la Primera Batalla de Mag Tuired, los Tuatha Dé Danann, necesitados de un nuevo rey sin imperfección física, eligieron a Bres, hijo de madre Tuatha Dé Danann y padre fomoriano, esperando que su ascendencia mixta ayudara a asegurar la paz con los Fomorianos, el pueblo semi-monstruoso asociado al caos que disputaba también el control de Irlanda. Bres, sin embargo, resultó un gobernante mezquino y opresivo, que impuso tributos abusivos sobre su propio pueblo y descuidó por completo los deberes tradicionales de hospitalidad que se esperaban de un rey, hasta el punto de que los Tuatha Dé Danann terminaron forzándolo a abdicar, devolviendo el trono a Nuada gracias a su brazo de plata.

Humillado, Bres huyó hacia los Fomorianos, entre ellos su propio abuelo materno, Balor del Ojo Maligno, para pedir ayuda en la reconquista de su trono perdido. Pero mientras esa alianza se preparaba, ya existía en marcha un hilo destinado a decidir el resultado final del conflicto que se avecinaba: Balor, advertido por una profecía de que su propio nieto lo mataría algún día, había encerrado a su única hija, Ethniu, en una torre de cristal aislada en una isla remota, custodiada permanentemente por doce mujeres ancianas con la orden expresa de impedir cualquier contacto de la joven con hombre alguno.

Pese a esa precaución extrema, Cian, hijo del sanador Dian Cécht, logró llegar hasta la torre disfrazado con ayuda de artes mágicas, y Ethniu y él concibieron juntos a tres hijos varones. Cuando Balor descubrió el nacimiento, ordenó de inmediato que los tres bebés fueran ahogados en el mar para eliminar cualquier amenaza futura a su propia vida; pero uno de los tres, arrastrado por la corriente dentro de un manto que lo mantuvo a flote, sobrevivió y fue rescatado por Manannán mac Lir, que lo crió en secreto en su propio reino, lejos de cualquier posibilidad de que su abuelo materno descubriera su supervivencia.

Ese niño creció hasta convertirse en Lugh, dotado con el tiempo de una habilidad extraordinaria en absolutamente todas las artes conocidas: la guerrera, la artesanal, la musical, la poética y la mágica por igual, ganándose el epíteto de Samildánach, "el de muchos talentos", cuando se presentó finalmente ante la corte de Nuada exigiendo ser admitido pese a que ya existía allí un especialista consagrado en cada una de las disciplinas que él dominaba. Nuada, impresionado por la combinación única de talentos que ningún otro miembro de la corte poseía por separado, le concedió finalmente un lugar, reconociendo en él a la figura que, según empezaba a sospecharse, estaba destinada a liderar a los Tuatha Dé Danann en el enfrentamiento final contra los Fomorianos.`
  },
  {
    slug: 'la-segunda-batalla-de-mag-tuired', titulo: 'La segunda batalla de Mag Tuired',
    tipo: 'heroica', periodo: 'El clímax del conflicto entre los Tuatha Dé Danann y los Fomorianos',
    resumen: 'Lugh lidera a los Tuatha Dé Danann contra los Fomorianos y su abuelo Balor, cuyo ojo devastador cae finalmente ante una honda certera.',
    texto_completo: `Con Bres depuesto y refugiado entre los Fomorianos, la guerra entre ambos pueblos se volvió inevitable, y los Fomorianos, liderados por Balor del Ojo Maligno, reunieron un ejército inmenso para invadir Irlanda y someter definitivamente a los Tuatha Dé Danann. Lugh, ya reconocido en la corte de Nuada por su dominio de todas las artes, se presentó entonces como el líder natural que el momento exigía; y Nuada, comprendiendo que la situación requería un comandante con capacidades excepcionales más que un rey ceremonial, le cedió temporalmente el mando militar completo del ejército de los Tuatha Dé Danann.

Antes de la batalla, Lugh recorrió personalmente el campamento comprobando los preparativos de cada artesano y especialista bajo su mando, desde los herreros que forjaban armas hasta los sanadores que preparaban el pozo curativo de Dian Cécht, capaz de revivir a los guerreros caídos con solo sumergirlos en sus aguas durante la noche. Cuando finalmente ambos ejércitos se encontraron en la misma llanura de Mag Tuired donde antes se había librado la batalla contra los Fir Bolg, el enfrentamiento se convirtió en una masacre prolongada durante días completos, con Nuada mismo cayendo en combate a manos del propio Balor, cuyo ojo devastador, una vez abierto con ayuda de sus sirvientes, fulminaba instantáneamente a cualquier ejército que tuviera la desgracia de quedar frente a su mirada directa.

Fue entonces cuando Lugh, desafiando a su propio abuelo pese al peligro mortal que representaba enfrentarlo, avanzó directamente hacia Balor en el momento exacto en que los sirvientes de este levantaban el pesado párpado de su ojo maligno con un gancho especial. En cuanto el ojo quedó completamente expuesto, Lugh lanzó con su honda una piedra con una puntería y una fuerza sobrehumanas, atravesando el ojo de parte a parte y empujándolo hacia atrás a través del propio cráneo de Balor, de modo que el rayo mortal que debía haber fulminado a los Tuatha Dé Danann se dirigió en cambio contra las propias filas fomorianas que se encontraban detrás de su líder, sembrando la destrucción en su propio bando en lugar del contrario.

Con Balor muerto y sus fuerzas diezmadas por su propio poder vuelto en su contra, los Fomorianos se derrumbaron y huyeron en desbandada, poniendo fin definitivo a su dominio sobre Irlanda y consolidando a los Tuatha Dé Danann como los verdaderos y legítimos gobernantes de la isla. Lugh, con su hazaña cumpliendo exactamente la profecía que su propio abuelo había intentado evitar encerrando a su hija, se ganó un lugar permanente entre los grandes héroes y reyes de la tradición irlandesa, sucediendo poco después al propio Nuada en el trono.`
  },
  {
    slug: 'la-forja-del-brazo-de-plata-de-nuada', titulo: 'La forja del brazo de plata de Nuada',
    tipo: 'otro', periodo: 'Tras la Primera Batalla de Mag Tuired',
    resumen: 'Dian Cécht y su hijo Miach compiten en la reparación del brazo de Nuada, y esa rivalidad familiar termina en una tragedia inesperada.',
    texto_completo: `Tras perder su brazo derecho en el duelo contra Sreng durante la Primera Batalla de Mag Tuired, Nuada se enfrentó a la posibilidad muy real de perder también su trono, dado que la ley tradicional de los Tuatha Dé Danann exigía perfección física absoluta en cualquiera que ocupara el puesto de rey. Dian Cécht, el gran sanador del pueblo, decidió entonces intervenir personalmente, y junto al herrero Creidhne, diseñó y forjó un brazo protésico completo hecho enteramente de plata, articulado con una precisión extraordinaria que le permitía a Nuada mover los dedos, doblar el codo y sostener objetos con una funcionalidad casi idéntica a la de un brazo real.

El logro fue recibido con enorme admiración por toda la corte, y durante un tiempo pareció suficiente para restaurar plenamente la posición de Nuada; sin embargo, algunos sectores de los Tuatha Dé Danann seguían considerando que un miembro artificial, por hábil que fuera su construcción, no cumplía verdaderamente con el requisito de perfección física natural que la ley exigía, una distinción que terminaría costándole a Nuada la corona de todas formas durante el reinado posterior de Bres.

Fue entonces cuando Miach, hijo del propio Dian Cécht y sanador todavía más talentoso que su padre, decidió ir un paso más allá del trabajo ya realizado: en lugar de limitarse a perfeccionar la prótesis de plata, Miach emprendió la tarea mucho más ambiciosa de regenerar el brazo original de carne y hueso de Nuada, aplicando durante nueve días y nueve noches consecutivas conjuros de sanación cada vez más profundos sobre el muñón, hasta lograr que un brazo completamente nuevo, vivo y funcional en todos los sentidos, creciera de vuelta en el lugar del que había sido amputado.

El logro de Miach, muy superior al de su propio padre, despertó en Dian Cécht una envidia tan intensa que, según la versión más citada de la leyenda, terminó atacando a su propio hijo en un ataque de celos profesional, hiriéndolo repetidamente hasta causarle finalmente la muerte tras varios intentos fallidos de sanarse a sí mismo cada vez que Miach sobrevivía a la agresión anterior. De la tumba de Miach, se dice, brotaron después trescientas sesenta y cinco hierbas distintas, una por cada articulación y tendón del cuerpo humano, cada una con el poder de curar la dolencia correspondiente a la parte del cuerpo bajo la que había crecido; Dian Cécht, en un último acto de envidia incapaz de contenerse, esparció y mezcló todas las hierbas entre sí, impidiendo que la humanidad conociera jamás con certeza absoluta cuál planta correspondía a cuál dolencia específica.`
  },
  {
    slug: 'el-cortejo-de-etain', titulo: 'El cortejo de Étaín',
    tipo: 'amor', periodo: 'Durante el reinado de los Tuatha Dé Danann y, después, de los reyes mortales',
    resumen: 'Transformada en mariposa por los celos de una rival, Étaín renace como mortal — y su antiguo esposo divino la reclama tras un juego de ajedrez de apuestas crecientes.',
    texto_completo: `Midir, noble de los Tuatha Dé Danann e hijo adoptivo del Dagda, se casó en segundas nupcias con Étaín, una mujer de belleza extraordinaria, tras haber estado casado previamente con Fuamnach, experta en artes mágicas que no aceptó de buena manera la llegada de una rival a su hogar. Fuamnach, consumida por los celos, recurrió a su conocimiento de la magia para transformar primero a Étaín en un charco de agua, después en un gusano, y finalmente en una hermosa mariposa de colores brillantes, a la que después condenó a ser arrastrada sin descanso por vientos mágicos tormentosos durante siete años enteros, incapaz de posarse en ningún lugar seguro donde pudiera recuperar su forma original.

Exhausta tras años de tormento, la mariposa cayó finalmente dentro de una copa de vino que estaba a punto de beber la esposa de un noble mortal del Ulster; la mujer tragó accidentalmente al insecto junto con el vino, y nueve meses después dio a luz a una niña que era, en esencia, la reencarnación completa de la propia Étaín, aunque sin memoria alguna de su existencia anterior como noble de los Tuatha Dé Danann. Étaín creció como una mortal ordinaria, alcanzó fama por su belleza excepcional, y terminó casándose con Eochaid Airem, Rey Supremo de Irlanda, viviendo con él una vida aparentemente normal durante varios años.

Midir, sin embargo, jamás había dejado de buscarla, y finalmente logró localizarla ya convertida en reina mortal; se presentó ante ella y ante la corte de Eochaid revelándole su verdadera identidad y reclamando el vínculo que ambos habían compartido antes de la transformación. Cuando Eochaid se negó rotundamente a devolverla, Midir propuso en cambio un juego de ajedrez, fidchell, con apuestas cada vez mayores en cada partida sucesiva; Eochaid, confiado en su propia habilidad, aceptó, pero Midir, tras dejarle ganar deliberadamente las primeras rondas para tentarlo a subir la apuesta, terminó ganando la partida decisiva, reclamando como pago un simple abrazo y un beso de Étaín.

Eochaid, incapaz de negarse tras haber aceptado los términos del juego, intentó de todas formas una última artimaña: reunió a cincuenta mujeres de apariencia idéntica a Étaín en un mismo salón, exigiendo que Midir identificara correctamente a su verdadero amor antes de llevársela consigo. Midir, sin embargo, la reconoció sin la menor dificultad entre todas las demás, demostrando que el vínculo compartido entre ambos trascendía cualquier parecido físico externo, y la pareja finalmente se marchó junta, transformándose ambos en cisnes para volar libres hacia el Otro Mundo ante la mirada impotente de Eochaid.`
  },
  {
    slug: 'el-nacimiento-de-cu-chulainn', titulo: 'El nacimiento de Cú Chulainn',
    tipo: 'fundacion', periodo: 'Antes del reinado de Conchobar mac Nessa en el Ulster',
    resumen: 'Deichtine, hermana del rey Conchobar, concibe un hijo semidivino tras un extraño viaje guiado por un pájaro — el futuro mayor héroe del Ulster.',
    texto_completo: `Deichtine, hermana del rey Conchobar mac Nessa del Ulster, se encontraba un día observando junto a la corte real una bandada extraordinaria de pájaros que devoraba sistemáticamente todos los campos cultivados del reino, dejando la tierra completamente devastada a su paso. Intrigado y alarmado por el fenómeno, Conchobar organizó una partida de caza para perseguir a la bandada, llevando consigo a Deichtine como su auriga personal, y juntos siguieron a los pájaros durante todo el día hasta que la noche los sorprendió lejos de cualquier refugio conocido.

Buscando dónde pasar la noche, la partida de caza encontró una casa solitaria donde fueron recibidos con generosa hospitalidad por una pareja que resultó ser, sin que los recién llegados lo supieran al principio, el propio Lugh y su esposa bajo formas disfrazadas. Durante esa misma noche, la esposa del anfitrión dio a luz a un hijo, y al amanecer, cuando la partida de caza despertó, descubrió que la casa entera y sus habitantes habían desaparecido por completo, dejando atrás únicamente al recién nacido junto con una yegua y sus dos potrillos. Deichtine, conmovida por el niño abandonado, decidió llevarlo consigo de regreso al Ulster y criarlo como propio.

El niño, sin embargo, murió poco después de una enfermedad repentina, y Deichtine, sumida en el duelo, tuvo esa misma noche una visión en la que Lugh se le apareció revelándole su verdadera identidad divina y explicándole que había sido él mismo, disfrazado, quien había engendrado al niño fallecido; le anunció además que ella llevaba ahora un nuevo hijo en su vientre, concebido de la misma naturaleza divina que el anterior, y que debía llamarlo Sétanta cuando naciera. Deichtine dio a luz efectivamente a un niño con esas características extraordinarias, aunque algunas versiones del relato complican su paternidad sugiriendo que también su esposo mortal, Sualtam, pudo haber contribuido de alguna manera a la concepción, dejando al niño con una naturaleza doblemente especial, entre lo divino y lo mortal.

Sétanta, el niño nacido de esta manera extraordinaria, creció en la corte del Ulster demostrando desde su más tierna infancia una fuerza y una habilidad muy superiores a las de cualquier otro niño de su edad, capaz de vencer en solitario a grupos enteros de jóvenes guerreros del reino durante sus juegos, un talento que anunciaba ya, mucho antes de que ganara su nombre definitivo tras el incidente con el perro del herrero Culann, el destino que lo esperaba como el mayor defensor que el Ulster llegaría a conocer jamás.`
  },
  {
    slug: 'cu-chulainn-y-el-perro-de-culann', titulo: 'Cú Chulainn y el perro de Culann',
    tipo: 'heroica', periodo: 'La infancia de Cú Chulainn en la corte del Ulster',
    resumen: 'El joven Sétanta mata accidentalmente al feroz guardián de un herrero, y se ofrece a reemplazarlo personalmente — ganando así el nombre que lo acompañará para siempre.',
    texto_completo: `Culann, un herrero de gran prestigio en el Ulster, invitó en cierta ocasión al rey Conchobar mac Nessa a un banquete en su propia residencia, y este aceptó gustoso, deteniéndose antes en el campo de juegos donde los jóvenes guerreros del reino solían entrenarse para invitar también al joven Sétanta, que en ese momento tenía apenas siete años pero ya destacaba enormemente entre sus compañeros por su fuerza y habilidad excepcionales. Sétanta, sin embargo, se encontraba en medio de un juego particularmente reñido contra ciento cincuenta jóvenes al mismo tiempo, y pidió permiso a Conchobar para terminar la partida antes de unirse al resto de la comitiva, prometiendo alcanzarlos poco después por su propia cuenta siguiendo el camino conocido.

Conchobar, al llegar finalmente a la residencia de Culann, olvidó por completo mencionar que un invitado más llegaría más tarde, y Culann, sin saberlo, ordenó soltar a su perro guardián para vigilar la propiedad durante la noche, un animal de un tamaño y una ferocidad extraordinarios, capaz por sí solo de defender toda la hacienda frente a cualquier amenaza y temido por igual entre humanos y animales de toda la región. Cuando Sétanta llegó finalmente caminando tranquilamente hacia la casa, el enorme perro se abalanzó sobre él con intención evidente de matarlo, sin que el joven tuviera tiempo de avisar a nadie del interior sobre el peligro inminente que corría.

Actuando con una rapidez y una fuerza que sorprendieron a todos los presentes cuando salieron alarmados al escuchar el alboroto, Sétanta logró matar al feroz animal con sus propias manos, lanzando una pelota con tal fuerza que atravesó la garganta del perro, y rematándolo después estrellándolo directamente contra una piedra cercana. Culann, al presenciar la escena, se mostró profundamente afligido, no por la muerte del niño que temía encontrar sino por la pérdida de su guardián más valioso, quejándose de que ahora su propiedad y su familia quedarían completamente desprotegidas sin el animal que las custodiaba.

Sétanta, comprendiendo la magnitud de la pérdida que había causado incluso sin intención de hacer daño, se ofreció de inmediato a reparar el perjuicio de la manera más honorable posible: prometió criar personalmente un cachorro que reemplazara al perro fallecido, y mientras tanto, hasta que ese cachorro creciera lo suficiente para cumplir la misma función, se comprometió a servir él mismo como guardián de la propiedad de Culann, patrullando sus tierras con la misma dedicación que el animal caído. Fue el druida Cathbad quien, presenciando ese acto de honor extraordinario en un niño tan joven, propuso que a partir de ese momento se le conociera como Cú Chulainn, "el perro de Culann", el nombre bajo el cual se convertiría después en el mayor héroe que el Ulster llegaría jamás a conocer.`
  },
  {
    slug: 'la-razzia-de-las-vacas-de-cooley', titulo: 'La razzia de las vacas de Cooley',
    tipo: 'heroica', periodo: 'El reinado adulto de Cú Chulainn como defensor del Ulster',
    resumen: 'Un solo guerrero defiende una provincia entera contra el ejército invasor de la reina Medb, incluyendo un doloroso duelo contra su propio hermano de armas.',
    texto_completo: `Medb, poderosa reina de Connacht, discutiendo una noche con su esposo Ailill sobre cuál de los dos poseía mayor riqueza personal, descubrió que ambos estaban prácticamente igualados en todo salvo en un solo detalle: Ailill poseía un toro blanco excepcional al que Medb no tenía manera de igualar entre sus propias posesiones. Decidida a no quedar por debajo de su esposo en ningún aspecto, Medb organizó una expedición militar masiva con el objetivo de apoderarse del único animal comparable en toda Irlanda, el Donn Cúailnge, un toro pardo legendario propiedad de un terrateniente del Ulster que se negó a prestarlo voluntariamente cuando Medb intentó primero negociar su préstamo por las buenas.

La negativa desató la invasión de Connacht sobre el territorio del Ulster, aprovechando además una circunstancia extraordinariamente favorable para los atacantes: la mayoría de los guerreros ulaidos se encontraban debilitados por una antigua maldición lanzada sobre ellos generaciones atrás, que los sumía periódicamente en dolores similares a los del parto, incapacitándolos completamente para el combate durante los momentos de mayor necesidad. Solo Cú Chulainn, por su origen semidivino, quedó exento de esa maldición, y se encontró así, prácticamente en solitario, con la responsabilidad completa de defender la provincia entera frente a un ejército invasor de proporciones abrumadoras.

Cú Chulainn recurrió entonces al derecho tradicional de combate singular en los vados de los ríos, un privilegio del guerrero campeón que le permitía retar y enfrentar de uno en uno a los mejores hombres del ejército enemigo, deteniendo así el avance masivo de las tropas de Medb durante semanas completas mientras esperaba que la maldición sobre sus compañeros finalmente cediera. Entre esos duelos sucesivos se encontraba el más doloroso de todos: Ferdiad, antiguo compañero de entrenamiento y amigo cercano de Cú Chulainn bajo la tutela de la guerrera Scáthach, se vio obligado por presión y manipulación directa de Medb a aceptar el reto en nombre del ejército invasor, enfrentando así a quien consideraba prácticamente un hermano.

El duelo entre ambos se extendió durante varios días consecutivos, con ambos guerreros descansando cada noche y compartiendo incluso remedios curativos entre ellos pese a estar enfrentados oficialmente en combate, hasta que Cú Chulainn, obligado finalmente a usar su arma más letal, la lanza Gáe Bulg, logró vencer y matar a su amigo con una pena tan profunda que se dice lloró abiertamente sobre su cuerpo caído. Poco después, la maldición sobre los guerreros del Ulster finalmente cedió, y el resto del ejército, liderado ahora por el propio Conchobar, se unió a la defensa, forzando finalmente la retirada de las tropas de Medb, aunque no antes de que esta lograra de todas formas capturar el toro pardo que había desatado el conflicto entero.`
  }
];

async function main() {
  console.log('Sembrando historias de Mitologia Celta (parte 1)...\n');
  const [libroFilas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-celta'");
  if (libroFilas.length === 0) throw new Error('No existe el libro "mitologia-celta" -- créalo primero.');
  const libroId = libroFilas[0].id;

  for (const h of HISTORIAS) {
    const [existente] = await pool.query('SELECT id FROM historias WHERE slug = ?', [h.slug]);
    if (existente.length > 0) {
      console.log(`  - Historia "${h.titulo}" ya existía.`);
      continue;
    }
    await pool.query(
      `INSERT INTO historias (titulo, resumen, texto_completo, tipo, periodo, slug, es_preview, libro_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [h.titulo, h.resumen, h.texto_completo, h.tipo, h.periodo, h.slug, 0, libroId]
    );
    console.log(`  - Historia "${h.titulo}" creada.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
