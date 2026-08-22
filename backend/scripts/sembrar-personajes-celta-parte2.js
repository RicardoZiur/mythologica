// ============================================================
// scripts/sembrar-personajes-celta-parte2.js
// ------------------------------------------------------------
// Segundo lote de Mitologia Celta: 10 heroes y 12 monstruos.
// Contenido completo desde el inicio. Idempotente via
// slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-celta-parte2.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- HEROES ---
  {
    tipo: 'heroe', slug: 'cu-chulainn', nombre: 'Cú Chulainn', nombre_griego: 'Cú Chulainn',
    epitetos: 'El Perro de Culann, el Guerrero de la Distorsión',
    descripcion_corta: 'El mayor héroe del Ulster, capaz de defender solo una provincia entera durante meses — su furia transformaba su propio cuerpo en algo casi irreconocible.',
    descripcion_larga: `Cú Chulainn, nacido Sétanta, obtuvo su nombre definitivo tras matar accidentalmente al feroz perro guardián del herrero Culann, ofreciéndose después a reemplazarlo personalmente como guardián hasta que un cachorro sustituto creciera lo suficiente —de ahí "Cú Chulainn", "el perro de Culann"—. Entrenado en las artes marciales más avanzadas por la guerrera escocesa Scáthach, Cú Chulainn desarrolló habilidades sobrehumanas, entre ellas el ríastrad o "distorsión de guerra", un estado de furia de combate tan extremo que deformaba físicamente su propio cuerpo —un ojo se hundía mientras el otro sobresalía, su cabello se erizaba goteando sangre, su cuerpo giraba dentro de su propia piel— hasta hacerlo casi irreconocible incluso para sus aliados más cercanos.

Su hazaña más célebre ocurrió durante el Táin Bó Cúailnge, "la razzia de las vacas de Cooley", cuando la reina Medb de Connacht invadió el Ulster con un ejército masivo aprovechando que el resto de los guerreros ulaidos yacían debilitados por una maldición ancestral. Solo Cú Chulainn, inmune a esa maldición por su origen semidivino, quedó en condiciones de defender la provincia entera, y lo hizo mediante el derecho tradicional de combate singular en los vados de los ríos, enfrentando y derrotando a un campeón enemigo tras otro durante semanas, incluyendo el trágico duelo contra su propio hermano de armas y mejor amigo, Ferdiad, a quien terminó matando con extrema pena pese al vínculo que los unía. Cú Chulainn murió finalmente años después en batalla, atado a una piedra erguida para permanecer de pie incluso agonizante, de modo que sus enemigos no se atrevieran a acercarse hasta que un cuervo —forma adoptada por su antigua adversaria la Morrígan— se posó finalmente sobre su hombro, confirmando que había muerto.`,
    origen: 'Hijo del dios Lugh y la mortal Deichtine, sobrino del rey Conchobar mac Nessa.',
    dominio: 'El combate singular y la furia de guerra', naturaleza: 'Héroe semidivino del Ulster', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'fionn-mac-cumhaill', nombre: 'Fionn mac Cumhaill', nombre_griego: 'Fionn mac Cumhaill',
    epitetos: 'El Líder de los Fianna, el que Prueba su Pulgar',
    descripcion_corta: 'Líder legendario de los Fianna, guerreros errantes de Irlanda — obtuvo toda la sabiduría del mundo al chuparse accidentalmente el pulgar tras cocinar el Salmón del Conocimiento.',
    descripcion_larga: `Fionn mac Cumhaill lideró a los Fianna, una banda de guerreros y cazadores errantes que servían como fuerza militar semi-independiente al servicio del Rey Supremo de Irlanda, protegiendo el territorio de amenazas sobrenaturales y extranjeras a cambio de una libertad considerable frente a las obligaciones habituales de la sociedad irlandesa ordinaria. Antes de alcanzar ese liderazgo, el joven Fionn estudió bajo el druida Finn Eces, que llevaba años intentando pescar el legendario Salmón del Conocimiento, una criatura que había absorbido toda la sabiduría del mundo al comer nueve avellanas sagradas caídas de árboles junto a un pozo mítico.

Cuando Finn Eces finalmente logró atrapar el salmón, encargó a su joven aprendiz que lo cocinara sin probarlo bajo ninguna circunstancia; pero mientras vigilaba la cocción, Fionn se quemó accidentalmente el pulgar con una gota de grasa caliente y, por puro reflejo, se lo llevó a la boca para aliviar el dolor. En ese instante, toda la sabiduría contenida en el salmón pasó a él en lugar de a su maestro, y desde entonces Fionn pudo acceder a un conocimiento profético instantáneo con solo morderse el propio pulgar en cualquier momento de necesidad futura. Entre sus hazañas más célebres se cuenta la derrota del hada de fuego Aillén, que incendiaba anualmente el palacio real de Tara arrullando a sus guardianes con música mágica hasta dormirlos, un ataque que Fionn logró resistir manteniéndose despierto gracias al dolor constante de una lanza envenenada apoyada contra su propia frente.`,
    origen: 'Hijo de Cumhall, líder anterior de los Fianna, criado en secreto tras la muerte de su padre.',
    dominio: 'El liderazgo guerrero y la sabiduría profética', naturaleza: 'Héroe legendario, líder de los Fianna', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'diarmuid-ua-duibhne', nombre: 'Diarmuid Ua Duibhne', nombre_griego: 'Diarmuid Ua Duibhne',
    epitetos: 'El del Lunar de Amor Irresistible',
    descripcion_corta: 'Guerrero de los Fianna marcado por un lunar mágico que enamoraba instantáneamente a cualquier mujer que lo viera — su fuga con la prometida de Fionn desató una persecución de años.',
    descripcion_larga: `Diarmuid Ua Duibhne era uno de los guerreros más apuestos y hábiles de los Fianna, poseedor de un ball seirce o "lunar de amor" oculto bajo su cabello, visible solo en circunstancias especiales, capaz de hacer que cualquier mujer que llegara a verlo se enamorara de manera instantánea e irresistible. Este rasgo, más una carga que un don deseado, lo obligaba a mantener la cabeza cubierta en la mayoría de las circunstancias sociales para evitar complicaciones amorosas no buscadas por él mismo.

Cuando Fionn mac Cumhaill, ya entrado en años, decidió casarse con la joven princesa Gráinne, esta, durante el banquete de compromiso, se sintió atraída de inmediato hacia Diarmuid en cuanto vislumbró accidentalmente su lunar mágico, y usando una geis —un juramento u obligación mágica vinculante dentro de la tradición irlandesa que ningún guerrero de honor podía romper sin consecuencias graves— obligó a Diarmuid a huir con ella esa misma noche en lugar de permitir el matrimonio con Fionn. Atrapado entre su lealtad hacia su líder y la obligación mágica que Gráinne le había impuesto, Diarmuid eligió huir, iniciando una persecución que se extendería, según las distintas versiones, entre uno y dieciséis años completos por todo el territorio de Irlanda, con Fionn siguiéndolos sin descanso pese a las intervenciones repetidas de Aengus, protector adoptivo de Diarmuid, que lograba salvarlos una y otra vez en el último momento. Diarmuid murió finalmente durante una cacería de un jabalí mágico, en circunstancias que sugieren que Fionn, pese a tener el poder de salvarlo con agua sagrada de sus propias manos, permitió deliberadamente su muerte por el rencor jamás resuelto de la traición original.`,
    origen: 'Guerrero de los Fianna, nieto adoptivo de Aengus, dios del amor.',
    dominio: 'El amor irresistible y la huida', naturaleza: 'Héroe guerrero de los Fianna', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'oisin', nombre: 'Oisín', nombre_griego: 'Oisín',
    epitetos: 'El Poeta de los Fianna, el que Regresó de la Eterna Juventud',
    descripcion_corta: 'Hijo de Fionn mac Cumhaill y poeta de los Fianna, que pasó lo que le parecieron tres años en la Tierra de la Eterna Juventud — para descubrir, al regresar, que habían pasado trescientos.',
    descripcion_larga: `Oisín, hijo de Fionn mac Cumhaill y de Sadhbh —una mujer transformada en cierva por un druida despechado, que recuperó brevemente forma humana el tiempo suficiente para concebirlo—, se convirtió en uno de los poetas y guerreros más respetados de los Fianna, célebre tanto por su destreza en combate como por la calidad de sus versos, que la tradición posterior le atribuiría en abundancia como voz narrativa de todo el ciclo fenián. Su nombre significa literalmente "pequeño ciervo", en honor directo al origen extraordinario de su propia madre.

Su leyenda más célebre y perdurable cuenta que Niamh Chinn Óir, "Niamh de Cabellos Dorados", hija del rey del Otro Mundo, descendió montada en un caballo blanco para llevarlo consigo hasta Tír na nÓg, la Tierra de la Eterna Juventud, donde vivieron juntos en una felicidad aparentemente interminable. Tras lo que a Oisín le parecieron apenas tres años, sintió una nostalgia creciente por sus antiguos compañeros de los Fianna y pidió permiso a Niamh para visitar brevemente Irlanda; ella accedió, pero le advirtió estrictamente que no debía bajo ninguna circunstancia tocar el suelo irlandés durante su visita, prestándole para el viaje el mismo caballo blanco mágico. Al llegar, Oisín descubrió con horror que habían transcurrido en realidad trescientos años completos, que todos sus antiguos compañeros habían muerto hacía generaciones, y que Irlanda entera se había transformado más allá de todo reconocimiento. Al intentar ayudar a unos hombres a mover una piedra pesada, cayó accidentalmente del caballo y tocó el suelo, envejeciendo de golpe hasta convertirse en un anciano frágil, el peso completo de tres siglos cobrándose de una sola vez.`,
    origen: 'Hijo de Fionn mac Cumhaill y Sadhbh, transformada brevemente de cierva a mujer.',
    dominio: 'La poesía y el tiempo perdido', naturaleza: 'Héroe poeta de los Fianna', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'deirdre', nombre: 'Deirdre', nombre_griego: 'Deirdre',
    epitetos: 'Deirdre de las Tristezas',
    descripcion_corta: 'Mujer cuya belleza profetizada al nacer traería la destrucción del Ulster — su amor por Naoise y la traición del rey Conchobar cumplieron cada palabra de esa profecía.',
    descripcion_larga: `En el mismo momento de su nacimiento, un druida de la corte de Conchobar mac Nessa, rey del Ulster, profetizó que la recién nacida Deirdre crecería hasta convertirse en una mujer de una belleza tan extraordinaria que provocaría guerras y la muerte de grandes guerreros, sembrando destrucción por todo el reino. Alarmado pero incapaz de resistirse a la fama de su belleza futura, el propio Conchobar decidió criarla apartada de la corte, con la intención de casarse con ella personalmente en cuanto alcanzara la edad adulta, evitando así, según pensaba, cualquier conflicto que su matrimonio con otro hombre pudiera desatar.

Deirdre, sin embargo, se enamoró al crecer de Naoise, un joven guerrero del Ulster, y ambos huyeron juntos junto a los hermanos de este a Escocia, viviendo felices durante varios años lejos del alcance directo del rey. Conchobar, fingiendo finalmente haber perdonado la afrenta, los invitó a regresar a Irlanda bajo promesa de seguridad garantizada, pero la promesa resultó ser una trampa: en cuanto llegaron, ordenó la muerte de Naoise y de sus hermanos, obligando después a Deirdre a convertirse en su esposa pese al asesinato reciente del hombre que amaba. Deirdre vivió el resto de su vida sumida en un duelo inconsolable, sin volver a sonreír jamás según las distintas versiones del relato, hasta que finalmente se quitó la vida —arrojándose de un carro contra una roca en la versión más citada— antes que continuar soportando su cautiverio junto al rey responsable de la muerte de su amado. La traición de Conchobar hacia Naoise y sus hermanos provocó exactamente la fractura política que la profecía original había anunciado, con varios guerreros del Ulster abandonando el reino en protesta por la deshonra cometida.`,
    origen: 'Hija profetizada de nacer con una belleza destinada a traer destrucción al Ulster.',
    dominio: 'El amor trágico y la profecía cumplida', naturaleza: 'Heroína trágica', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'etain', nombre: 'Étaín', nombre_griego: 'Étaín',
    epitetos: 'La Mujer Renacida como Mariposa',
    descripcion_corta: 'Mujer del Otro Mundo transformada en mariposa por una esposa celosa, renacida después como mortal — recuperada por su antiguo esposo divino tras identificarla entre mil mujeres idénticas.',
    descripcion_larga: `Étaín fue originalmente la segunda esposa de Midir, un noble de los Tuatha Dé Danann, pero su matrimonio despertó los celos furiosos de Fuamnach, la primera esposa de Midir, experta en artes mágicas. Fuamnach transformó a Étaín primero en un charco de agua, después en un gusano, y finalmente en una hermosa mariposa de colores extraordinarios, condenándola después a ser arrastrada sin descanso por vientos mágicos durante siete años enteros, incapaz de posarse en ningún lugar seguro donde recuperar su forma original.

Finalmente, exhausta, la mariposa cayó dentro de una copa de vino que estaba a punto de ser bebida por la esposa de un noble mortal, quien tragó accidentalmente al insecto junto con el vino; nueve meses después, esa misma mujer dio a luz a una niña que era, en esencia, la reencarnación completa de la propia Étaín, aunque sin memoria alguna de su vida anterior como diosa. Étaín creció como mortal, se casó con el Rey Supremo de Irlanda, Eochaid Airem, y vivió una vida humana ordinaria hasta que Midir, su antiguo esposo divino, la localizó finalmente y reclamó su verdadera identidad ante ella. Cuando Eochaid se negó a devolverla, Midir propuso un juego de ajedrez (fidchell) con apuestas cada vez mayores, y tras ganar sucesivas partidas, exigió finalmente un abrazo de Étaín como pago; cuando Eochaid intentó una última artimaña reuniendo a cincuenta mujeres idénticas a Étaín para que Midir la identificara correctamente antes de llevársela, Midir lo logró sin dificultad, demostrando que el vínculo entre ambos trascendía cualquier disfraz posible.`,
    origen: 'Segunda esposa de Midir, transformada en mariposa por celos y renacida como mortal.',
    dominio: 'La reencarnación y el amor que trasciende el olvido', naturaleza: 'Diosa reencarnada como mortal', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'bran-mac-febail', nombre: 'Bran mac Febail', nombre_griego: 'Bran mac Febail',
    epitetos: 'El Navegante hacia la Tierra de las Mujeres',
    descripcion_corta: 'Rey irlandés que, siguiendo una rama de plata florida y una canción misteriosa, navegó hasta el Otro Mundo — al regresar, un solo tripulante que tocó tierra se desintegró en polvo.',
    descripcion_larga: `Bran mac Febail escuchó un día, mientras paseaba cerca de su fortaleza, una música tan hermosa que lo sumió en un sueño profundo; al despertar, encontró junto a él una rama de plata cubierta de flores blancas, que llevó consigo hasta su salón. Esa misma noche, una mujer misteriosa vestida con ropas de un lugar desconocido apareció ante toda la corte reunida y cantó un poema extenso describiendo Emain Ablach, "la tierra de las manzanas", una isla del Otro Mundo de belleza y abundancia perpetuas, libre de enfermedad, muerte o cualquier forma de sufrimiento, invitando a Bran a emprender el viaje hacia allí. Antes de que nadie pudiera detenerla, la rama de plata saltó de la mano de Bran directamente hasta la de la mujer, que desapareció de inmediato con ella.

Al día siguiente, Bran zarpó con una tripulación de voluntarios, guiado en el camino por Manannán mac Lir, que se le apareció cabalgando literalmente sobre las olas del mar como si fueran una llanura sólida, explicándole que lo que Bran percibía como un océano turbulento era, para los ojos del dios, un valle florido completamente distinto. Tras muchas aventuras —incluida una isla donde la risa constante resultaba contagiosa e imposible de detener—, Bran y su tripulación llegaron finalmente a la Tierra de las Mujeres, donde permanecieron en una felicidad que a ellos les pareció apenas un año. Cuando decidieron finalmente regresar a Irlanda, se les advirtió que jamás debían tocar tierra firme; al llegar a la costa irlandesa y hablar con los habitantes locales, descubrieron que habían pasado siglos enteros desde su partida, conocidos ya solo como leyenda antigua. Uno de los tripulantes, ignorando la advertencia por la emoción del regreso, saltó a tierra y se desintegró instantáneamente en un montón de cenizas, el peso completo de los siglos transcurridos cobrándose de golpe.`,
    origen: 'Rey irlandés atraído hacia el Otro Mundo por una música y una rama de plata.',
    dominio: 'La navegación hacia el Otro Mundo', naturaleza: 'Héroe navegante legendario', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'pwyll', nombre: 'Pwyll', nombre_griego: 'Pwyll Pendefig Dyfed',
    epitetos: 'El Príncipe de Dyfed',
    descripcion_corta: 'Príncipe galés que intercambió su reino y su forma con Arawn, rey del Otro Mundo, y conquistó después el amor de la diosa Rhiannon persiguiéndola sin poder alcanzarla.',
    descripcion_larga: `Pwyll gobernaba Dyfed, en el suroeste de Gales, cuando durante una cacería se encontró por casualidad con Arawn, rey de Annwn, el Otro Mundo galés, que le propuso un intercambio extraordinario: ambos cambiarían de identidad y de reino durante un año completo, con la condición de que Pwyll debía enfrentar y vencer en su nombre al rival de Arawn, Hafgan, con un único golpe decisivo. Pwyll cumplió el pacto con una honestidad absoluta, incluida la decisión de no compartir lecho con la esposa de Arawn pese a dormir junto a ella cada noche durante todo el año, ganándose con esa lealtad una alianza duradera entre ambos reinos.

De regreso ya en su propio reino, Pwyll se sentó un día sobre un montículo conocido por otorgar a quien se sentara en él, o bien heridas, o bien la visión de un prodigio extraordinario; lo que Pwyll presenció fue a una mujer de belleza deslumbrante, Rhiannon, montada sobre un caballo blanco que avanzaba aparentemente al paso pero que ningún jinete lograba alcanzar por más rápido que galopara tras ella. Tras varios intentos fallidos en días sucesivos, Pwyll finalmente le gritó pidiéndole que se detuviera por el bien de su propio caballo, y ella accedió de inmediato, revelando que había estado esperando precisamente esa petición: había venido buscando casarse con él en lugar de con el pretendiente no deseado al que su familia la había prometido. Pwyll y Rhiannon se casaron poco después, y su unión, junto con las pruebas posteriores que ella debió superar tras la desaparición y falsa acusación relacionada con su hijo recién nacido, se narra en la Primera Rama del Mabinogion, el texto fundacional de la mitología galesa medieval.`,
    origen: 'Príncipe de Dyfed, en el suroeste de Gales.',
    dominio: 'La lealtad y el amor persistente', naturaleza: 'Héroe príncipe galés', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'branwen', nombre: 'Branwen', nombre_griego: 'Branwen ferch Llŷr',
    epitetos: 'Una de las Tres Matriarcas de la Isla de Bretaña',
    descripcion_corta: 'Princesa galesa casada con el rey de Irlanda cuyo maltrato posterior desató una guerra devastadora entre ambas islas — su propio corazón se rompió de dolor al presenciar la destrucción resultante.',
    descripcion_larga: `Branwen, hermana del gigante galés Bendigeidfran ("Brân el Bendito"), fue entregada en matrimonio a Matholwch, rey de Irlanda, en una alianza pensada para fortalecer los lazos entre ambas islas. El matrimonio comenzó con buenos augurios, pero se deterioró rápidamente después de que Efnysien, medio hermano de Branwen ofendido por no haber sido consultado sobre el compromiso, mutilara brutalmente los caballos de la comitiva irlandesa como acto de venganza personal. Aunque Bendigeidfran ofreció compensaciones generosas para reparar la ofensa, incluido un caldero mágico capaz de revivir a los guerreros muertos —arrojándolos de vuelta a la vida, aunque sin capacidad de habla—, el resentimiento acumulado entre ambos pueblos no se disipó del todo.

De regreso en Irlanda, Matholwch, presionado por su propia corte todavía indignada, comenzó a maltratar sistemáticamente a Branwen, relegándola a trabajar en las cocinas del palacio y golpeándola diariamente como castigo simbólico por la ofensa original de su hermano. Branwen logró entrenar en secreto a un estornino para que volara hasta Gales cargando un mensaje pidiendo auxilio, y Bendigeidfran, furioso al enterarse del maltrato sufrido por su hermana, invadió Irlanda con un ejército completo, vadeando personalmente el mar entre ambas islas dado su tamaño gigantesco. La guerra resultante devastó a ambos pueblos casi por completo: el caldero mágico originalmente ofrecido como compensación fue usado por los irlandeses para revivir a sus propios guerreros caídos, prolongando la masacre, hasta que Efnysien, arrepentido finalmente de haber provocado todo el conflicto, se sacrificó destruyendo el caldero desde dentro. De los ejércitos completos de ambas islas, solo sobrevivieron siete hombres galeses y cinco mujeres irlandesas embarazadas; Branwen, contemplando la destrucción absoluta causada indirectamente por el conflicto originado en su propio matrimonio, murió de un corazón roto poco después de regresar a Gales.`,
    origen: 'Hermana de Bendigeidfran, princesa de la isla de Bretaña.',
    dominio: 'El sacrificio y el duelo por la guerra desatada', naturaleza: 'Heroína trágica galesa', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'culhwch', nombre: 'Culhwch', nombre_griego: 'Culhwch',
    epitetos: 'El Nacido entre los Cerdos',
    descripcion_corta: 'Primo del rey Arturo, maldecido a solo poder casarse con Olwen, hija de un gigante — cumplir esa exigencia requirió completar una lista de casi imposibles tareas heroicas.',
    descripcion_larga: `Culhwch nació en un chiquero de cerdos —de ahí su nombre, relacionado con "cerdo" en galés— después de que su madre, asustada por unos cerdos durante el parto, diera a luz de forma precipitada en ese lugar inesperado. Tras la muerte de su madre, su padre se volvió a casar, y su nueva madrastra, al descubrir que Culhwch se negaba a casarse con su propia hija, le impuso una maldición (tynged) que solo podría romperse casándose con Olwen, hija del temible gigante Ysbaddaden Bencawr, cuya propia existencia estaba profetizada a terminar precisamente el día en que su hija se casara.

Consciente de la dificultad de la tarea, Culhwch acudió a la corte de su primo, el rey Arturo, pidiendo ayuda, y Arturo le asignó a varios de sus mejores caballeros para acompañarlo en la búsqueda, incluidos personajes como Cei (Kay) y Bedwyr (Bedivere), precursores directos de figuras que se convertirían siglos después en pilares centrales de la leyenda artúrica más desarrollada. Al localizar finalmente a Ysbaddaden, este, resignado a su destino pero decidido a retrasarlo al máximo, le impuso a Culhwch una lista extraordinariamente larga de tareas casi imposibles como condición para el matrimonio, entre ellas cazar al jabalí mágico Twrch Trwyth para obtener el peine y las tijeras ocultos entre sus cerdas, necesarios para arreglar el propio cabello del gigante antes de la boda. Con ayuda de Arturo y sus caballeros, Culhwch logró completar cada una de las tareas imposibles impuestas, y finalmente pudo casarse con Olwen, mientras Ysbaddaden, cumplida ya su propia profecía, era decapitado por Goreu, otro de los acompañantes de Culhwch durante la búsqueda —uno de los relatos galeses más antiguos que sobreviven con la figura del rey Arturo ya como personaje central establecido.`,
    origen: 'Primo del rey Arturo, nacido en un chiquero de cerdos.',
    dominio: 'La búsqueda imposible y la perseverancia', naturaleza: 'Héroe galés, precursor artúrico', es_preview: 0
  },

  // --- MONSTRUOS ---
  {
    tipo: 'monstruo', slug: 'balor', nombre: 'Balor', nombre_griego: 'Balor Béimnech',
    epitetos: 'El del Ojo Maligno',
    descripcion_corta: 'Rey gigante de los Fomorianos, cuyo único ojo, cerrado casi siempre por su tamaño y peso, mataba instantáneamente a todo lo que veía al abrirse.',
    descripcion_larga: `Balor gobernaba a los Fomorianos, la raza semi-monstruosa asociada al caos y el mar que disputó el control de Irlanda a los Tuatha Dé Danann, y poseía un único ojo de un tamaño y un poder tan devastadores que debía mantenerlo cerrado casi permanentemente: según distintas versiones, el ojo se había envenenado accidentalmente por los vapores tóxicos de una poción mágica que su padre preparaba, o había quedado dañado tras presenciar una brujería prohibida durante su infancia. Cuando finalmente se abría —requiriendo el esfuerzo combinado de varios sirvientes para levantar el párpado con un gancho especial dado su peso excesivo—, el ojo emitía un rayo mortal capaz de matar instantáneamente a cualquier ejército entero que tuviera la desgracia de encontrarse frente a su mirada directa.

Una profecía advertía a Balor que su propio nieto lo mataría algún día, así que encerró a su única hija, Ethniu, en una torre aislada para impedir cualquier contacto con hombres. Pese a esa precaución, Ethniu concibió tres hijos con Cian, uno de los Tuatha Dé Danann; Balor ordenó ahogar a los tres recién nacidos, pero uno sobrevivió y fue criado en secreto lejos de su abuelo: Lugh, que efectivamente cumpliría la profecía años después. Durante la Segunda Batalla de Mag Tuired, cuando Balor abrió finalmente su ojo devastador para fulminar al ejército enemigo, Lugh lanzó una honda con tal precisión y fuerza que el proyectil atravesó el ojo por completo, empujándolo hacia atrás a través de su cráneo y dirigiendo el propio rayo mortal contra las filas fomorianas en retirada en lugar de contra los Tuatha Dé Danann, cumpliendo así exactamente la profecía que Balor había intentado evitar durante toda su vida.`,
    origen: 'Rey de los Fomorianos, abuelo materno de Lugh.',
    dominio: 'La destrucción mortal y el terror', naturaleza: 'Gigante fomoriano', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'dullahan', nombre: 'Dullahan', nombre_griego: 'Dúlachán',
    epitetos: 'El Jinete sin Cabeza',
    descripcion_corta: 'Espíritu de la muerte que cabalga sin cabeza propia, cargándola bajo el brazo — su llamado por el nombre exacto de una persona anuncia que esta morirá esa misma noche.',
    descripcion_larga: `El Dullahan cabalga de noche sobre un caballo negro extraordinariamente veloz, o a veces conduce un carruaje fúnebre tirado por caballos igual de oscuros, sin cabeza sobre sus propios hombros: la lleva en cambio bajo un brazo, una cabeza de piel pálida y putrefacta con una amplia sonrisa perpetua, capaz de usarla como una linterna macabra para iluminar su camino nocturno a través de la oscuridad más completa. Se le considera un heraldo directo de la muerte, y su aparición cerca de cualquier hogar se interpretaba tradicionalmente como augurio seguro de que alguien de esa casa moriría muy pronto.

Su rasgo más temido es la capacidad de detenerse frente a la casa de la persona destinada a morir y pronunciar en voz alta su nombre completo, un acto que sellaba instantáneamente el destino fatal de quien lo escuchara sin posibilidad alguna de escape o negociación. Se creía que el Dullahan sentía una aversión particular hacia el oro, razón por la que los viajeros nocturnos llevaban a veces monedas de ese metal consigo como protección preventiva ante un posible encuentro; algunas leyendas más específicas de ciertas regiones de Irlanda le atribuyen también un látigo hecho de la columna vertebral de un cadáver humano, con el que golpeaba a cualquiera que se atreviera a observarlo directamente durante su cabalgata nocturna, a menudo dejándolo ciego de forma permanente.`,
    origen: 'Espíritu heraldo de la muerte del folclore irlandés.',
    dominio: 'El anuncio nocturno de la muerte', naturaleza: 'Espíritu jinete sin cabeza', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'banshee', nombre: 'Banshee', nombre_griego: 'Bean Sí',
    epitetos: 'La Mujer de las Hadas que Llora a los Moribundos',
    descripcion_corta: 'Espíritu femenino cuyo lamento agudo anuncia la muerte inminente de un miembro de ciertas familias irlandesas antiguas — su grito se escucha, pero su forma rara vez se ve con claridad.',
    descripcion_larga: `La banshee, cuyo nombre en irlandés significa literalmente "mujer de las hadas" (bean sí), es un espíritu asociado tradicionalmente a familias específicas de linaje antiguo irlandés, cuya función es anunciar mediante un lamento agudo y desgarrador —conocido como caoineadh o "keening"— la muerte inminente de algún miembro de esa familia en particular, apareciendo generalmente la noche anterior al fallecimiento o en el momento mismo en que este ocurre en un lugar distante. A diferencia de muchas otras criaturas del folclore irlandés, la banshee no causa la muerte que anuncia: se limita a llorarla con antelación, cumpliendo un papel más cercano al de una plañidera sobrenatural que al de un agente activo de destrucción.

Se le describe de formas variables según la región y la tradición local: a veces como una mujer joven de cabello largo y suelto vestida de blanco o gris, a veces como una anciana encorvada de aspecto más temible, y en ocasiones asociada directamente con el sonido del lavado de ropa ensangrentada junto a un río —una imagen que comparte notables similitudes con la lavandera del vado asociada a la Morrígan en otros relatos irlandeses—. Algunas familias de apellidos particularmente antiguos y prestigiosos, especialmente aquellos con raíz en el prefijo "O'" o "Mac", se consideraban tradicionalmente "poseedoras" de su propia banshee particular, transmitida como una suerte de vínculo espiritual hereditario a lo largo de generaciones sucesivas de la misma familia.`,
    origen: 'Espíritu del folclore irlandés vinculado a familias de linaje antiguo.',
    dominio: 'El lamento anticipado de la muerte', naturaleza: 'Espíritu femenino de las hadas', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'sluagh', nombre: 'Sluagh', nombre_griego: 'Sluagh na Marbh',
    epitetos: 'La Hueste Errante de los Muertos sin Descanso',
    descripcion_corta: 'Bandada de espíritus malévolos de los muertos que vuelan en grupo durante la noche, capaces de arrastrar consigo a cualquier alma que encuentren desprotegida.',
    descripcion_larga: `El Sluagh, "la hueste" en gaélico, designa a una bandada colectiva de espíritus errantes considerados entre las entidades sobrenaturales más temidas de todo el folclore gaélico escocés e irlandés: las almas de los muertos que, por haber llevado vidas particularmente malvadas o por haber muerto sin la debida preparación espiritual, quedaron condenadas a vagar eternamente por el cielo nocturno en grupos numerosos, incapaces de encontrar descanso definitivo en ningún reino del más allá. Se les describe volando generalmente desde el oeste —dirección tradicionalmente asociada con la muerte en la cosmología celta—, produciendo un sonido similar al batir de alas de aves numerosas mezclado con susurros y lamentos apenas audibles.

Las familias tradicionales evitaban dejar ventanas orientadas hacia el oeste abiertas durante la noche, temerosas de que el Sluagh pudiera entrar directamente a la habitación de un moribundo y arrastrar su alma consigo antes de que pudiera completar su tránsito natural hacia el más allá correspondiente. Algunas versiones más específicas de la tradición sostienen que el propio Sluagh obligaba a las almas capturadas a participar contra su voluntad en actos crueles cometidos sobre otros mortales todavía vivos, disparando desde el cielo diminutos proyectiles invisibles capaces de causar enfermedades repentinas o incluso la muerte instantánea de las víctimas seleccionadas al azar durante su vuelo nocturno colectivo sobre pueblos y aldeas dormidas.`,
    origen: 'Espíritus colectivos de los muertos condenados a vagar sin descanso.',
    dominio: 'El vuelo nocturno de los muertos malditos', naturaleza: 'Hueste espectral colectiva', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'cu-sith', nombre: 'Cù Sìth', nombre_griego: 'Cù Sìth',
    epitetos: 'El Perro Verde de las Hadas',
    descripcion_corta: 'Perro fantasmal del tamaño de un ternero, de pelaje verde oscuro, cuyo ladrido triple anuncia la muerte de quien lo escucha si no logra refugiarse a tiempo.',
    descripcion_larga: `El Cù Sìth, "perro de las hadas" en gaélico escocés, es una criatura colosal del tamaño aproximado de un ternero joven, con un pelaje espeso de un verde oscuro inusual, orejas curvadas y una cola larga enroscada sobre su lomo, que patrulla silenciosamente las tierras altas y los páramos de Escocia asociado directamente con las hadas y su reino paralelo. Pese a su tamaño intimidante, el Cù Sìth se movía casi siempre en absoluto silencio, con patas capaces de amortiguar completamente el sonido de sus pasos incluso sobre terreno rocoso, haciendo su aparición repentina todavía más inquietante para cualquier viajero solitario.

Su ladrido, sin embargo, cuando finalmente se producía, resultaba tan penetrante que se decía audible a una distancia extraordinaria, y la tradición establecía una regla muy específica sobre su peligro real: el Cù Sìth ladraba exactamente tres veces antes de acercarse a su presa elegida, y cualquier persona que escuchara ese ladrido triple debía alcanzar refugio seguro antes del tercer y último aullido, ya que quien lo escuchara completo sin protección estaba condenado a morir poco después. Algunas leyendas más específicas lo asociaban también con el secuestro de mujeres embarazadas, obligadas a amamantar a sus propias crías dentro del reino de las hadas antes de ser liberadas, mientras que otras versiones lo presentaban de forma más ambigua, capaz tanto de amenazar como, en ciertos relatos aislados, de auxiliar a viajeros perdidos guiándolos de regreso a un camino seguro.`,
    origen: 'Perro fantasmal del folclore escocés vinculado al reino de las hadas.',
    dominio: 'El presagio de muerte en las tierras altas', naturaleza: 'Perro espectral gigante', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'each-uisge', nombre: 'Each-Uisge', nombre_griego: 'Each-Uisge',
    epitetos: 'El Caballo de Agua Devorador',
    descripcion_corta: 'El más peligroso de los caballos acuáticos escoceses, capaz de transformarse también en hermoso joven — quien monta su forma equina queda pegado a su lomo hasta ser arrastrado y devorado.',
    descripcion_larga: `El Each-Uisge, "caballo de agua" en gaélico escocés, habita lagos profundos y el propio mar costero, considerado por la tradición mucho más peligroso que su primo de agua dulce, el kelpie, precisamente porque su territorio marino más amplio le permitía atacar con mayor libertad e impunidad. Se presenta habitualmente bajo la forma de un caballo hermoso y dócil de apariencia perfectamente normal, pastando tranquilamente cerca de la orilla con el propósito específico de atraer a viajeros cansados que buscaran un medio de transporte rápido y gratuito.

En cuanto la víctima montaba sobre su lomo, su piel se volvía instantáneamente pegajosa y adhesiva, imposibilitando cualquier intento de desmontar mientras el Each-Uisge se lanzaba directamente hacia las aguas más profundas del lago o del mar, arrastrando consigo al jinete atrapado hasta ahogarlo por completo; solo el hígado de la víctima, según la tradición, era demasiado denso para ser devorado por la criatura, y solía aparecer flotando en la orilla al día siguiente como único rastro visible del ataque. A diferencia del kelpie, el Each-Uisge poseía también la capacidad de transformarse en un joven apuesto y encantador para seducir directamente a mujeres jóvenes, un disfraz peligroso que solo podía detectarse mediante un examen cuidadoso de su cabello, que conservaba siempre restos diminutos de algas o arena húmeda pese a su apariencia humana perfectamente cuidada en cualquier otro aspecto.`,
    origen: 'Espíritu acuático de lagos profundos y costas del mar escocés.',
    dominio: 'El engaño mortal en aguas profundas', naturaleza: 'Caballo espectral devorador', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'kelpie', nombre: 'Kelpie', nombre_griego: 'Kelpie',
    epitetos: 'El Caballo Cambiante de los Ríos',
    descripcion_corta: 'Espíritu acuático de ríos y arroyos, capaz de adoptar forma de caballo o de joven apuesto — su piel, si se examina de cerca, siempre parece húmeda o cubierta de algas.',
    descripcion_larga: `El kelpie habita ríos y arroyos de corriente rápida en toda Escocia, con una naturaleza y unos poderes muy similares a los de su pariente marino, el Each-Uisge, aunque generalmente restringido a un territorio de agua dulce más limitado y específico, asociado a menudo con un curso de agua o vado particular reconocido localmente como su morada habitual. Su forma más común es la de un caballo negro brillante de crin larga y despeinada, parado junto a la orilla con una apariencia dócil y perfectamente domesticable que invitaba a cualquier viajero cansado a montarlo para cruzar el agua con mayor comodidad.

Como su pariente marino, en cuanto una víctima montaba, su piel se volvía adhesiva de inmediato, y el kelpie se sumergía en las profundidades del río arrastrando consigo al jinete atrapado sin posibilidad de escape, ahogándolo antes de devorarlo por completo. Algunas leyendas específicas de ciertas regiones escocesas atribuyen al kelpie también la capacidad de advertir sobre inundaciones repentinas, apareciendo agitado o galopando frenéticamente cerca de un río momentos antes de una crecida peligrosa, un comportamiento que algunos relatos locales interpretaban de forma ambivalente como advertencia genuina antes que como simple amenaza directa. Su nombre y su imagen sobreviven hasta hoy de forma muy directa en la cultura popular escocesa, incluidas las esculturas monumentales conocidas como Kelpies erigidas en Falkirk, dos cabezas de caballo de acero de treinta metros de altura inspiradas explícitamente en esta criatura del folclore local.`,
    origen: 'Espíritu acuático de ríos y arroyos de corriente rápida en Escocia.',
    dominio: 'El engaño mortal en agua dulce', naturaleza: 'Caballo espectral fluvial', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'oilliphéist', nombre: 'Oilliphéist', nombre_griego: 'Oilliphéist',
    epitetos: 'La Gran Serpiente que Talló los Ríos de Irlanda',
    descripcion_corta: 'Serpiente o dragón acuático colosal cuyo cuerpo, arrastrándose por el paisaje irlandés, dio forma según la leyenda a varios de los ríos más importantes del país.',
    descripcion_larga: `El oilliphéist, cuyo nombre se traduce aproximadamente como "gran bestia" o "gran monstruo", es una serpiente o criatura similar a un dragón de dimensiones colosales que habitaba lagos profundos y ríos de Irlanda, tan enorme que su propio desplazamiento sobre el paisaje, según distintas leyendas locales, había abierto físicamente el cauce de varios de los ríos más importantes del país, entre ellos, según algunas versiones, el propio río Shannon, el más largo de toda Irlanda. Su tamaño y su naturaleza destructiva la convertían en una amenaza constante para el ganado y, ocasionalmente, para habitantes locales que se aventuraban demasiado cerca de las aguas donde residía.

Numerosas leyendas locales atribuyen a distintos santos cristianos, especialmente a San Patricio durante su campaña legendaria para eliminar a las serpientes de Irlanda por completo, la tarea de someter o expulsar a uno o varios oilliphéist específicos hacia lagos particulares donde permanecerían confinados para siempre, incapaces de volver a amenazar a la población local. Esta narrativa cristiana posterior, superpuesta sobre lo que probablemente era originalmente una tradición pagana mucho más antigua sobre serpientes o dragones acuáticos primordiales, ilustra un patrón habitual en el folclore irlandés post-cristianización: figuras monstruosas paganas reinterpretadas como amenazas finalmente derrotadas por la nueva fe, aunque conservando en la memoria popular local buena parte de su carácter original asociado a la formación misma del paisaje natural.`,
    origen: 'Serpiente o dragón colosal asociado a la formación de los ríos irlandeses.',
    dominio: 'Los lagos profundos y la formación del paisaje', naturaleza: 'Serpiente monstruosa acuática', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'cichol-gricenchos', nombre: 'Cichol Gricenchos', nombre_griego: 'Cichol Gricenchos',
    epitetos: 'El Primer Rey Fomoriano sin Piernas',
    descripcion_corta: 'El primer líder de los Fomorianos en llegar a Irlanda, descrito sin piernas y desplazándose arrastrándose por el suelo — derrotado por el pueblo de Partholón en la primera batalla registrada de la isla.',
    descripcion_larga: `Cichol Gricenchos aparece en el Lebor Gabála Érenn como el primer líder registrado de los Fomorianos en establecer presencia sobre suelo irlandés, gobernando a su pueblo desde antes incluso de la llegada de otras oleadas legendarias de colonizadores como el propio Partholón. Se le describe con un rasgo físico particularmente inquietante: carecía por completo de piernas funcionales, obligado a desplazarse arrastrándose o deslizándose directamente sobre el suelo, una deformidad que las fuentes antiguas presentan como característica típica y recurrente entre muchos líderes fomorianos, reforzando la asociación general de esa raza con la deformidad física y el caos primordial anterior al orden divino más organizado.

Cuando Partholón, líder de la siguiente oleada legendaria de colonizadores en llegar a Irlanda tras la desaparición completa del pueblo original de Cesair, desembarcó finalmente en la isla, se encontró con la resistencia directa de Cichol Gricenchos y su pueblo fomoriano ya asentado. El enfrentamiento resultante, conocido como la Batalla de Mag Itha, se considera tradicionalmente la primera batalla campal registrada en toda la historia mítica de Irlanda, y terminó con la derrota decisiva de Cichol Gricenchos y sus fuerzas fomorianas, forzados a retirarse del territorio principal de la isla, aunque sin desaparecer del todo: los Fomorianos, como raza colectiva, seguirían representando una amenaza recurrente en generaciones posteriores, culminando siglos de conflicto mítico en la mucho más célebre Segunda Batalla de Mag Tuired contra los Tuatha Dé Danann, liderados esta vez ya no por Cichol sino por el temible Balor.`,
    origen: 'Primer líder registrado de los Fomorianos en Irlanda.',
    dominio: 'La resistencia primordial contra los colonizadores', naturaleza: 'Rey fomoriano primordial', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'afanc', nombre: 'Afanc', nombre_griego: 'Afanc',
    epitetos: 'El Monstruo del Lago Galés',
    descripcion_corta: 'Criatura acuática monstruosa de los lagos galeses, tan pesada y poderosa que provocaba inundaciones catastróficas — finalmente arrastrada fuera del agua con cadenas y bueyes.',
    descripcion_larga: `El afanc habita, según distintas tradiciones locales galesas, uno de varios lagos específicos repartidos por todo el territorio de Gales, descrito con apariencia variable entre las distintas versiones del relato: a veces como un castor gigantesco de proporciones monstruosas, a veces más cercano a un cocodrilo o incluso a un ser con rasgos parcialmente humanos, pero coincidiendo siempre en un rasgo fundamental, un peso y una fuerza tan extraordinarios que su sola presencia y movimiento dentro del lago provocaba crecidas repentinas e inundaciones catastróficas para las comunidades cercanas, arrasando cosechas y viviendas enteras cada vez que el afanc se agitaba con fuerza suficiente.

Ante la amenaza recurrente, los habitantes de la región idearon un plan para capturarlo de manera definitiva: convencieron a una joven doncella de sentarse a la orilla del lago y cantarle una canción de cuna, sabiendo que el afanc, atraído por la dulzura del canto, se acercaría lo suficiente como para apoyar su enorme cabeza sobre el regazo de la muchacha y quedarse dormido. Aprovechando ese momento de vulnerabilidad, los hombres del pueblo lo encadenaron con grilletes de hierro forjado especialmente resistente, y usando una yunta de bueyes extraordinariamente fuertes —según algunas versiones, los propios bueyes del gigante Hu Gadarn, figura legendaria asociada a la fundación agrícola de Gales—, lograron finalmente arrastrarlo fuera del agua y trasladarlo hasta un lago mucho más remoto y aislado en las montañas, donde ya no representaría ninguna amenaza para la población de las tierras bajas.`,
    origen: 'Monstruo acuático de los lagos del folclore galés.',
    dominio: 'Las inundaciones catastróficas', naturaleza: 'Criatura acuática monstruosa', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'puca', nombre: 'Púca', nombre_griego: 'Púca',
    epitetos: 'El Embaucador Cambiaformas',
    descripcion_corta: 'Espíritu travieso capaz de adoptar cualquier forma animal, casi siempre con ojos dorados brillantes — puede ser un guía útil para viajeros perdidos o una broma peligrosa según su humor.',
    descripcion_larga: `El púca es uno de los espíritus más impredecibles y ambivalentes de todo el folclore irlandés, capaz de transformarse en prácticamente cualquier animal —caballos, cabras, conejos, perros negros de gran tamaño— aunque conservando casi siempre, sin importar la forma elegida, un par de ojos dorados o amarillos brillantes que delataban su verdadera naturaleza sobrenatural a quien mirara con suficiente atención. Su carácter oscila de manera impredecible entre la travesura relativamente inofensiva y el peligro genuino: algunas leyendas lo presentan guiando amablemente a viajeros perdidos de regreso al camino correcto durante la noche, mientras otras lo describen secuestrando a incautos sobre su lomo transformado en caballo para llevarlos en un galope aterrador a través de zarzas y pantanos antes de arrojarlos, magullados pero generalmente con vida, en algún lugar completamente distinto al que pretendían llegar.

La tradición agrícola irlandesa asociaba al púca de forma muy específica con el final de la temporada de cosecha: se creía que después del 1 de noviembre —la festividad de Samhain, marcando el inicio del invierno— cualquier fruta o grano que permaneciera todavía sin cosechar en el campo quedaba automáticamente "estropeada" o "escupida" por el púca, que reclamaba esa porción tardía como tributo propio, razón por la cual los agricultores se esforzaban en completar toda la cosecha antes de esa fecha límite bajo pena de perder lo que quedara atrás. Su nombre y su naturaleza cambiante influyeron directamente, según numerosos estudiosos del folclore comparado, en la creación posterior del personaje Puck dentro de la literatura inglesa, incluido el conocido espíritu travieso que aparece en la obra de Shakespeare "Sueño de una noche de verano".`,
    origen: 'Espíritu travieso cambiaformas del folclore irlandés.',
    dominio: 'La travesura y el engaño impredecible', naturaleza: 'Espíritu metamórfico ambivalente', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'abhartach', nombre: 'Abhartach', nombre_griego: 'Abhartach',
    epitetos: 'El Tirano Enano que Regresó de la Muerte',
    descripcion_corta: 'Un cruel señor local irlandés, tan tiránico y temido que regresó de entre los muertos tres veces seguidas para seguir gobernando, bebiendo la sangre de su propio pueblo — uno de los orígenes propuestos del mito moderno del vampiro.',
    descripcion_larga: `Abhartach era, según la tradición local del condado de Derry en el norte de Irlanda, un señor de estatura muy pequeña —descrito a menudo directamente como enano o "dobhar-chú"— que gobernaba un territorio reducido con una crueldad tan extrema hacia sus propios súbditos que estos, desesperados, finalmente decidieron rebelarse contra él, pidiendo a un guerrero vecino, Cathán, que lo matara y así liberara a la comunidad de su tiranía. Cathán cumplió el encargo y sepultó el cuerpo de Abhartach de pie, según la costumbre honorable reservada a los guerreros caídos, pero al día siguiente Abhartach reapareció caminando por su antiguo territorio, exigiendo un tributo de sangre extraída directamente de las muñecas de sus antiguos súbditos para sostener su propia existencia renovada más allá de la muerte.

Cathán lo mató una segunda vez, y una tercera, sepultándolo cada vez de manera distinta con la esperanza de que permaneciera definitivamente muerto, pero Abhartach regresaba invariablemente, cada vez más exigente en su demanda de sangre. Finalmente, consultado un sabio local sobre cómo detener de manera permanente a semejante amenaza, este recomendó una solución específica: matar a Abhartach una vez más, pero esta vez sepultarlo boca abajo, rodeado de espino y ceniza de fresno, y colocar sobre su tumba una enorme piedra que impidiera para siempre que volviera a levantarse. El método finalmente funcionó, y la piedra que supuestamente marca su tumba, conocida localmente como la "Piedra de Abhartach", sigue siendo señalada hasta hoy en la zona rural donde se ubica la leyenda. Numerosos estudiosos del folclore moderno han señalado similitudes notables entre esta antigua leyenda irlandesa y las convenciones posteriores del mito literario del vampiro, sugiriendo una posible influencia directa, aunque no confirmada del todo, sobre la tradición que culminaría siglos después en el propio Drácula de Bram Stoker, escritor irlandés que bien pudo conocer esta historia local durante su juventud.`,
    origen: 'Señor tiránico local del norte de Irlanda, regresado de la muerte tres veces.',
    dominio: 'La tiranía que regresa de la muerte', naturaleza: 'No-muerto bebedor de sangre', es_preview: 1
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-celta'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-celta" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando heroes y monstruos de Mitologia Celta (parte 2)...\n');
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
