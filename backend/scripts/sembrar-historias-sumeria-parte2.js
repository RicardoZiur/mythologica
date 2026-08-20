// ============================================================
// scripts/sembrar-historias-sumeria-parte2.js
// ------------------------------------------------------------
// Segundo lote de historias para Mitologia Sumeria: el ciclo de
// Inanna, Enki y Ninhursag, Anzu, Etana, Adapa, Nergal (8
// historias). Con esto se completan las 16 historias del libro.
// Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-historias-sumeria-parte2.js
// ============================================================

const pool = require('../config/db');

const HISTORIAS = [
  {
    slug: 'el-descenso-de-inanna-al-inframundo', titulo: 'El descenso de Inanna al inframundo', tipo: 'tragedia', periodo: 'Sin fecha fija, un mito recurrente del ciclo de Inanna', es_preview: 1,
    resumen: 'Inanna desciende a desafiar a su hermana Ereshkigal en su propio reino; despojada de todo poder en las siete puertas, muere, y solo la astucia de Enki logra devolverle la vida.',
    texto_completo: `Un día, sin que ningún mito explique del todo por qué, Inanna decidió abandonar su dominio en el cielo y la tierra para descender al Kur, el inframundo gobernado por su propia hermana Ereshkigal —un reino del que ningún ser, ni mortal ni divino, había regresado jamás sin pagar un precio terrible. Antes de partir, se vistió con las siete insignias de su poder: la corona, los pendientes, el collar de lapislázuli, el pectoral, el anillo, la vara de medir, y el manto real, cada uno un símbolo distinto de su autoridad. Y, previsora, le dio instrucciones precisas a Ninshubur, su fiel visir: si no regresaba en tres días, debía vestirse de duelo y suplicar ayuda ante Enlil, Nanna, y finalmente Enki.

Al llegar a la primera de las siete puertas del inframundo, el guardián le exigió, siguiendo las leyes inquebrantables de ese reino, que se despojara de una prenda antes de continuar. Inanna protestó, pero le respondieron simplemente: "Calla, Inanna, las leyes del inframundo son perfectas, no se pueden cuestionar." Puerta tras puerta, insignia tras insignia, Inanna fue perdiendo cada símbolo de su poder —la corona en la primera puerta, los pendientes en la segunda, y así sucesivamente— hasta llegar completamente desnuda ante el trono de su hermana, despojada de toda la autoridad que la había definido hasta ese momento.

Ereshkigal, lejos de recibirla con hospitalidad, la fulminó con "la mirada de la muerte", pronunció contra ella "la palabra de la ira" y "el grito de la culpa", y su cuerpo, convertido en un simple cadáver, quedó colgado de un gancho en la pared, como se cuelga la carne en un matadero. Pasaron tres días, y cuando Inanna no regresó, Ninshubur cumplió cada instrucción exactamente como se le había indicado: recorrió los templos suplicando ayuda. Enlil y Nanna se negaron, argumentando que Inanna se había buscado su propio destino al desafiar un reino que no le correspondía. Solo Enki, conmovido por la desesperación de Ninshubur, decidió actuar.

De la suciedad bajo sus propias uñas, Enki modeló dos criaturas diminutas y asexuadas, el kurgarra y el galatur, y las envió al inframundo con instrucciones precisas: no debían aceptar comida ni bebida de nadie, y en cambio debían encontrar a Ereshkigal en pleno dolor —pues la diosa, según Enki había previsto, se encontraba en ese momento gimiendo como si estuviera de parto, sin nadie que la consolara genuinamente— y limitarse a repetir sus lamentos palabra por palabra, compadeciéndose con ella. Conmovida por primera vez en mucho tiempo por una compasión sincera y desinteresada, Ereshkigal les ofreció cualquier regalo que desearan a cambio. Ellos, fieles a las instrucciones de Enki, pidieron únicamente el cadáver colgado del gancho, y con el agua y la comida de la vida que Enki también les había dado, devolvieron a Inanna a la vida.

Pero el reino de los muertos no deja partir a nadie sin exigir algo a cambio: los demonios gallu, incapaces de sentir compasión, la acompañaron de regreso al mundo de los vivos con la orden estricta de traer un sustituto que ocupara su lugar entre los muertos. Inanna, recorriendo sus propias ciudades escoltada por esos demonios implacables, se negó a entregar a ninguno de los dioses menores que sí mostraban un duelo genuino por su desaparición —hasta que llegó a su propio palacio y encontró a su esposo Dumuzi, vestido con lujo, sentado despreocupadamente en su trono, sin la menor señal de tristeza por la muerte de su esposa. Esa indiferencia selló su destino: Inanna, furiosa, lo señaló a los demonios, y así, la diosa que había desafiado a la propia muerte para descender al inframundo se convirtió, sin buscarlo del todo, en la razón por la que su propio esposo terminaría descendiendo en su lugar.`,
    personajes: [['inanna', 'protagonista'], ['ereshkigal', 'antagonista'], ['enki', 'secundario'], ['ninshubur', 'secundario'], ['dumuzi', 'mencionado']]
  },
  {
    slug: 'la-condena-de-dumuzi', titulo: 'La condena de Dumuzi', tipo: 'tragedia', periodo: 'Inmediatamente después del regreso de Inanna del inframundo', es_preview: 0,
    resumen: 'Furiosa al encontrar a Dumuzi indiferente a su muerte, Inanna lo condena al inframundo; su hermana Geshtinanna se ofrece a compartir su destino, y los dioses instauran el reparto estacional.',
    texto_completo: `Cuando Inanna, escoltada por los implacables demonios gallu, llegó por fin a su propio palacio tras su regreso del inframundo, esperaba encontrar al menos allí, en su propia casa, alguna señal de que su ausencia había sido llorada como correspondía. En cambio, encontró a Dumuzi, su esposo, vestido con sus mejores galas, sentado con toda comodidad en el trono real, sin rastro alguno de duelo en su rostro ni en su comportamiento, como si la muerte de su propia esposa apenas le hubiera importado.

La furia de Inanna fue instantánea y absoluta. Sin dudarlo, fijó en Dumuzi "la mirada de la muerte" y pronunció la sentencia que sellaría su destino: "Llévenselo. Que este sea el sustituto que ocupe mi lugar." Los gallu, fieles a su naturaleza sin piedad, se abalanzaron de inmediato sobre Dumuzi, que apenas tuvo tiempo de comprender lo que estaba ocurriendo antes de que lo arrastraran fuera del palacio. Aterrado, Dumuzi suplicó a Utu, hermano de Inanna, que lo transformara en serpiente para poder escapar deslizándose entre los dedos de sus captores, y el dios sol, compadecido, accedió, permitiéndole huir temporalmente hacia el campamento de su hermana Geshtinanna.

Pero los gallu no se rindieron con facilidad: registraron cada escondite posible, interrogando incluso a los amigos de Dumuzi bajo amenaza, hasta que finalmente lo localizaron de nuevo, escondido entre el ganado de su propio redil. Geshtinanna, al enterarse de la persecución implacable contra su hermano, se negó categóricamente a revelar su paradero pese a la tortura y las amenazas de los demonios, demostrando una lealtad que ningún otro personaje del ciclo mítico sumerio igualaría. Cuando finalmente capturaron a Dumuzi de todos modos, Geshtinanna, devastada, no se resignó a perderlo sin más: recorrió el inframundo buscándolo, y al encontrarlo, se ofreció voluntariamente a compartir su condena, dispuesta a ocupar su lugar entera y permanentemente si eso lo liberaba a él.

Ante un gesto de devoción tan absoluto, ni siquiera Inanna, todavía dolida por la indiferencia inicial de su esposo, pudo permanecer indiferente. Los dioses, conmovidos por la lealtad de Geshtinanna, decidieron que el sacrificio completo no era necesario: en cambio, instauraron un reparto que dividiría el año en dos mitades exactas. Durante seis meses, Dumuzi permanecería en el inframundo mientras su hermana caminaba libre bajo el sol; durante los otros seis, Geshtinanna descendería en su lugar, permitiendo que Dumuzi regresara al mundo de los vivos. Ese ciclo constante de ausencia y retorno, explicaban los sumerios, era la razón detrás de las estaciones: cuando Dumuzi, dios de los pastores y la vegetación, se encontraba bajo tierra, los campos se secaban y el ganado languidecía; cuando regresaba, la tierra volvía a florecer con la misma fuerza con la que él mismo regresaba a caminarla.`,
    personajes: [['inanna', 'protagonista'], ['dumuzi', 'protagonista'], ['geshtinanna', 'secundario'], ['gallu', 'antagonista'], ['utu', 'mencionado']]
  },
  {
    slug: 'inanna-y-los-me-de-la-civilizacion', titulo: 'Inanna y los Me de la civilización', tipo: 'otro', periodo: 'En los primeros tiempos de la ciudad de Uruk', es_preview: 0,
    resumen: 'Inanna visita a Enki en Eridu; emborrachado por la propia diosa, el dios le entrega los Me, los decretos que sostienen la civilización entera, que ella lleva en triunfo a Uruk.',
    texto_completo: `Inanna, decidida a elevar a su ciudad de Uruk por encima de todas las demás, puso la mirada en Eridu, la ciudad de Enki, el dios que guardaba en su templo del Abzu los Me: los cientos de decretos sagrados que sostenían cada aspecto de la civilización, desde la realeza y el sacerdocio hasta la música, la guerra, la mentira, la verdad, el arte de tejer y hasta las emociones humanas más básicas, como el temor y la alegría. Sin esos decretos, ninguna ciudad podía prosperar de verdad, y Enki los guardaba celosamente, sin intención alguna de compartirlos con nadie.

Inanna se preparó para el viaje con el mismo cuidado con que se preparaba para cualquier conquista, y llegó a Eridu ataviada con toda su belleza y autoridad divina. Enki, lejos de sospechar sus verdaderas intenciones, la recibió con la hospitalidad que correspondía a una diosa de su rango, y ordenó que se preparara un banquete generoso en su honor, con cerveza tras cerveza servida en abundancia mientras ambos brindaban una y otra vez, cada uno tratando de superar al otro en generosidad y buen ánimo.

A medida que la cerveza corría, Enki, cada vez más eufórico, comenzó a entregarle a Inanna, uno tras otro, los Me que hasta entonces había mantenido bajo su exclusivo control: el poder de la realeza, el trono del gobierno, el cetro noble, los templos, el sacerdocio, el arte de la interpretación de sueños, el conocimiento de las artesanías, la verdad y la falsedad juntas, la fundación de las ciudades, e incluso el propio culto sexual que la diosa presidía. Inanna, sin dejar traslucir ni un ápice de la estrategia que estaba ejecutando con precisión, agradecía cada regalo con entusiasmo genuino, asegurándose de que Enki, ya completamente ebrio, no notara la magnitud de lo que estaba entregando.

Cuando finalmente cargó todos los Me en la Barca del Cielo y partió río abajo de regreso hacia Uruk, Enki, ya despertando de su borrachera en su propio palacio, notó de inmediato la ausencia de los objetos sagrados que definían su autoridad. Furioso consigo mismo por su propio descuido, envió a su visir Isimud junto con una serie de monstruos marinos para interceptar la barca de Inanna antes de que llegara a su destino, exigiendo la devolución inmediata de lo que consideraba robado bajo circunstancias injustas, argumentando que una promesa hecha en estado de embriaguez no debía tener el mismo peso que una decisión tomada con la mente clara.

Pero Inanna, con la misma astucia que había usado para conseguir los Me en primer lugar, logró esquivar cada intento de recuperación, protegida por su fiel visir Ninshubur, hasta llegar finalmente sana y salva a las puertas de Uruk. Allí, ante el pueblo entero reunido para recibirla, descargó los Me uno por uno, entregándolos formalmente a su ciudad como el regalo definitivo que aseguraría su prosperidad para siempre. Enki, al ver que la recuperación ya no era posible, terminó por aceptar la pérdida con una resignación casi filosófica, y desde entonces Uruk, gracias al ingenio de su diosa patrona, se convirtió en el centro cultural y religioso más importante de toda la región sumeria.`,
    personajes: [['inanna', 'protagonista'], ['enki', 'antagonista'], ['ninshubur', 'secundario']]
  },
  {
    slug: 'enki-y-ninhursag-en-dilmun', titulo: 'Enki y Ninhursag en Dilmun', tipo: 'amor', periodo: 'En los tiempos del paraíso primordial', es_preview: 0,
    resumen: 'En el paraíso de Dilmun, Enki engendra una sucesión de diosas vegetales con Ninhursag hasta enfermar gravemente por su propia desmesura; solo un zorro logra que ella acepte curarlo.',
    texto_completo: `Dilmun era, en los tiempos más antiguos, un paraíso puro donde no existían la enfermedad ni la muerte, ni el león cazaba, ni el lobo arrebataba corderos, ni ningún ave de presa se alimentaba de otras aves: un lugar sin dolor de ningún tipo, aunque también, al principio, sin agua dulce que permitiera que las plantas crecieran. Enki, dios de las aguas dulces, remedió esa carencia haciendo brotar pozos y manantiales por todo el territorio, transformando a Dilmun en un vergel genuino, y fue entonces cuando encontró a Ninhursag, la gran diosa madre, y se enamoró perdidamente de ella.

De su unión nació Ninsar, "la señora de la vegetación", que maduró de niña a mujer en apenas nueve días —el ritmo acelerado propio de un tiempo mítico donde la fertilidad de la tierra se manifestaba sin las restricciones que después limitarían a los mortales. Enki, encontrándola un día caminando sola junto al pantano, se sintió atraído por ella también, y se unió a Ninsar de la misma manera que se había unido antes a su madre. De esa segunda unión nació Ninkurra, y el patrón volvió a repetirse: Enki, incapaz de contener su propio deseo, se unió también con Ninkurra, engendrando a Uttu, la diosa tejedora.

Esta vez, sin embargo, Uttu, advertida por su propia abuela Ninhursag sobre las intenciones de Enki, se negó a recibirlo a menos que le trajera como regalo pepinos, manzanas y uvas frescas —un pedido que Enki, decidido, cumplió sin dificultad, cultivando él mismo los frutos que ella exigía. Convencida por los regalos, Uttu finalmente lo dejó entrar, y de esa unión Enki eyaculó su semilla directamente en la tierra, de la que brotaron, sin más intervención divina, ocho plantas nuevas y desconocidas hasta entonces.

Enki, fascinado por estas nuevas criaturas vegetales, decidió probarlas una por una para conocer su naturaleza y destino, sin pedir permiso a nadie. Ninhursag, furiosa al descubrir que Enki había devorado a sus propias creaciones —plantas que ella misma, como diosa de la vegetación, consideraba bajo su dominio— pronunció sobre él una maldición mortal, jurando no volver a mirarlo jamás "con el ojo de la vida" mientras viviera, y desapareció sin dejar rastro.

De inmediato, ocho órganos distintos del cuerpo de Enki comenzaron a fallar, uno por cada planta devorada, y el dios, agonizante, se debilitaba día tras día ante la mirada impotente de los demás dioses, reunidos en la tierra sin saber cómo remediar una maldición que solo la propia Ninhursag podía revertir. Fue un simple zorro, ofreciéndose ante la asamblea divina, quien preguntó qué recompensa recibiría si lograba convencer a la diosa ausente de regresar. Con la promesa de que se erigirían árboles en su honor y su nombre sería pronunciado en la ciudad, el zorro partió en su búsqueda y, con argucias que ningún texto detalla del todo, logró persuadir a Ninhursag de regresar.

Al llegar junto a Enki, ya al borde de la muerte, Ninhursag lo sentó junto a su propio cuerpo y, preguntándole uno por uno qué órgano le dolía, engendró de sí misma, en respuesta a cada dolencia, una nueva deidad menor destinada específicamente a curar esa parte del cuerpo: entre ellas, Ninti, "la señora de la costilla", nacida para sanar el costado dolorido de Enki. Con las ocho nuevas divinidades completadas, Enki sanó por completo, y el episodio, pese a su desenlace feliz, quedó como advertencia permanente sobre los límites que incluso un dios tan poderoso como Enki no debía cruzar sin consecuencias.`,
    personajes: [['enki', 'protagonista'], ['ninhursag', 'protagonista']]
  },
  {
    slug: 'el-mito-de-anzu', titulo: 'El mito de Anzu', tipo: 'heroica', periodo: 'Una crisis cósmica en el santuario de Enlil', es_preview: 0,
    resumen: 'Anzu roba las Tablillas del Destino del santuario de Enlil y sume al cosmos en el caos; solo Ninurta, con la ayuda del viento del sur, logra vencerlo y recuperarlas.',
    texto_completo: `Anzu, criatura colosal con cuerpo de ave tormentosa y cabeza de león, servía originalmente como guardián leal en el santuario de Enlil, encargado de custodiar el umbral del lugar más sagrado de toda la creación. Un día, mientras observaba a Enlil desvestirse para bañarse en las aguas puras de su templo, despojado momentáneamente de toda insignia de autoridad, Anzu vio ante sí una oportunidad que la ambición no le permitió dejar pasar: las Tablillas del Destino, el objeto que otorgaba control absoluto sobre el orden cósmico entero, yacían sin vigilancia junto a las ropas del dios.

En un instante, Anzu las tomó y emprendió el vuelo hacia una montaña remota, ocultándose entre las nubes de tormenta que él mismo personificaba. La consecuencia fue inmediata y catastrófica: sin las Tablillas en su poder legítimo, Enlil perdió buena parte de su autoridad sobre el cosmos, los ríos comenzaron a secarse, los templos quedaron en silencio, y una sensación de desorden absoluto se extendió por todo el universo, como si las leyes mismas que sostenían la realidad hubieran dejado de aplicarse.

La asamblea de los dioses, aterrada ante la magnitud de la crisis, comenzó a buscar desesperadamente a algún campeón dispuesto a enfrentar a Anzu y recuperar las Tablillas. Adad, dios de las tormentas, fue el primero en ser convocado, pero al enterarse de que Anzu, mientras poseyera las Tablillas, podía deshacer cualquier arma lanzada en su contra —revirtiendo flechas a caña sin tallar, arcos a los árboles de donde se había cortado la madera— se negó rotundamente a intentarlo. Girra, dios del fuego, y Shara, un dios menor de la guerra, rechazaron la misión por el mismo motivo, comprendiendo que enfrentar a un enemigo capaz de deshacer literalmente cualquier ataque era, en la práctica, una sentencia de muerte segura.

Fue Ea, el astuto Enki, quien finalmente propuso una solución: Ninurta, el hijo guerrero de Enlil, era el único con la fuerza y la determinación necesarias para intentarlo, y debía hacerlo aprovechando el único elemento que Anzu no podría revertir con las palabras de las Tablillas —el viento mismo. Ninurta aceptó el desafío sin vacilar, y con la ayuda del viento del sur, que Ea le proporcionó específicamente para esta batalla, se enfrentó a Anzu en su propia montaña.

Cada vez que Ninurta disparaba una flecha, Anzu pronunciaba las palabras de reversión de las Tablillas, y el arma se deshacía en el aire, regresando a su estado original inofensivo. Pero cuando Ninurta finalmente liberó el viento del sur en el instante exacto en que Anzu abría sus alas para esquivar un nuevo ataque, la corriente lo desestabilizó lo suficiente como para que la siguiente flecha, disparada de inmediato, encontrara su blanco antes de que Anzu pudiera pronunciar las palabras que la habrían neutralizado. Con el monstruo herido y desorientado, Ninurta se abalanzó sobre él, le arrancó las alas de un tirón brutal, y le cortó la garganta, poniendo fin de una vez por todas a la crisis que amenazaba con deshacer el orden cósmico entero.

Con las Tablillas del Destino recuperadas, Ninurta regresó triunfante ante la asamblea de los dioses, que lo recibieron como el héroe que había salvado al universo de un caos irreversible. Por esta hazaña, se le concedió un lugar de honor permanente entre las grandes divinidades, consolidando su reputación como el campeón militar más confiable de todo el panteón, el dios al que se recurría cuando ningún otro se atrevía a intervenir.`,
    personajes: [['ninurta', 'protagonista'], ['anzu', 'antagonista'], ['enlil', 'secundario']]
  },
  {
    slug: 'etana-y-el-aguila', titulo: 'Etana y el águila', tipo: 'heroica', periodo: 'Los primeros tiempos tras el diluvio', es_preview: 0,
    resumen: 'Sin heredero, el rey Etana rescata a un águila mutilada por romper un pacto con una serpiente, y esta lo lleva volando hasta el cielo en busca de la planta del nacimiento.',
    texto_completo: `Etana, rey de la ciudad de Kish en los primeros tiempos tras el gran diluvio, gobernaba con justicia y prosperidad, pero cargaba con una angustia que ningún triunfo político lograba aliviar: no tenía heredero, y sin un hijo que continuara su linaje, todo lo que había construido corría el riesgo de desvanecerse por completo tras su muerte. Los dioses, compadecidos de su súplica constante, le revelaron que existía una solución: la "planta del nacimiento", capaz de conceder descendencia a quien la consumiera, pero que crecía únicamente en el cielo, fuera del alcance de cualquier mortal.

Mientras Etana buscaba desesperadamente una forma de llegar hasta ese cielo inaccesible, cerca de su ciudad ocurría una tragedia que terminaría entrelazada con su propio destino. Un águila y una serpiente habían jurado, ante Utu como testigo divino, una amistad de protección mutua: el águila cuidaría del nido de la serpiente, y esta a cambio protegería el nido del águila. Pero el águila, cediendo a la tentación de un apetito que no pudo controlar, rompió el juramento y devoró a las crías de la serpiente. Cuando esta descubrió la traición, apeló directamente a Utu para que la ayudara a vengarse, y el dios sol le indicó cómo tender una trampa: escondida dentro del cadáver de un toro salvaje, la serpiente esperó a que el águila, atraída por la carroña, se posara sobre ella, y en ese instante la atacó, arrancándole las plumas y las garras, y arrojándola malherida al fondo de un pozo profundo para que muriera lentamente de hambre y sed.

Utu, aunque había ayudado a la serpiente a vengarse justamente, sintió compasión por el ave agonizante, y sin intervenir de forma directa, guio a Etana hasta el borde de ese mismo pozo justo cuando el rey buscaba desesperadamente alguna forma de alcanzar el cielo. Al ver al águila mutilada pero todavía con vida, Etana decidió rescatarla en vez de abandonarla a su suerte, alimentándola y curando sus heridas pacientemente durante semanas, hasta que el ave, agradecida y completamente recuperada, le hizo una promesa: lo llevaría volando sobre su lomo hasta el cielo mismo, para que pudiera pedir la planta que tanto necesitaba.

El ascenso fue vertiginoso y aterrador incluso para un rey acostumbrado al poder: cuanto más subían, más pequeña se veía la tierra bajo ellos, encogiéndose primero hasta el tamaño de una montaña, después de un jardín, después de una simple canasta, hasta que finalmente desapareció por completo de la vista, sustituida por la inmensidad silenciosa del cielo abierto. Etana, mareado y aterrorizado ante la pérdida total de referencia con el mundo que conocía, suplicó al águila que detuviera el ascenso antes de continuar más allá de lo que su valor mortal podía soportar.

Los textos que se conservan del mito se interrumpen antes de narrar el desenlace completo de esta parte del ascenso, dejando sin resolver si Etana logró finalmente alcanzar la planta que buscaba en ese primer intento o si tuvo que regresar y volver a intentarlo. Pero las listas reales sumerias posteriores registran, sin ambigüedad, a un hijo llamado Balih como sucesor legítimo de Etana en el trono de Kish —prueba, aunque el relato completo se haya perdido con el tiempo, de que en alguna versión ya olvidada de esta historia, el vuelo audaz del rey y el águila que había salvado terminó, contra todo pronóstico, en éxito.`,
    personajes: [['etana', 'protagonista'], ['utu', 'secundario']]
  },
  {
    slug: 'adapa-y-el-pan-de-la-vida', titulo: 'Adapa y el pan de la vida', tipo: 'tragedia', periodo: 'Los primeros tiempos de la ciudad de Eridu', es_preview: 0,
    resumen: 'Convocado al cielo por haber quebrado el ala del viento sur, Adapa sigue al pie de la letra una advertencia de Enki que resulta ser un malentendido, y pierde así la inmortalidad para toda la humanidad.',
    texto_completo: `Adapa, el primero y más sabio de los siete apkallu que Enki había enviado a la humanidad para enseñarle los fundamentos de la civilización, vivía en Eridu ejerciendo el doble oficio de pescador y sacerdote del templo, proveyendo cada día el pescado fresco que se ofrecía en el altar de su dios creador. Un día, mientras navegaba en su pequeña barca por el golfo, una repentina ráfaga del viento sur volcó su embarcación sin previo aviso, arrojándolo al agua y arruinando por completo su faena.

Furioso por la interrupción inesperada, Adapa pronunció una maldición contra el propio viento sur, y esta, para su propia sorpresa, resultó tener un poder real: le quebró el ala, dejándolo incapaz de soplar durante siete días completos. La ausencia del viento sur no pasó desapercibida en el cielo: Anu, el dios supremo, notó de inmediato que algo alteraba el orden natural, y al descubrir que un simple mortal había logrado herir a una fuerza cósmica con solo sus palabras, convocó a Adapa ante su presencia para que respondiera por lo ocurrido.

Antes de que Adapa partiera hacia el cielo, Enki, temeroso de que Anu decidiera castigar a su protegido con la muerte, le dio una serie de instrucciones cuidadosamente pensadas para su protección. Primero, le indicó cómo presentarse ante los dos guardianes de las puertas celestiales, Dumuzi y Ningishzida, y cómo ganarse su favor hablando bien de ellos ante Anu. Después, le advirtió sobre lo que encontraría una vez dentro: le ofrecerían comida y bebida como gesto de hospitalidad, pero debía rechazar absolutamente cualquier cosa que le dieran de comer o beber, porque —le aseguró Enki con total convicción— sería "el pan de la muerte" y "el agua de la muerte", una trampa mortal disfrazada de cortesía. Ropa y aceite, en cambio, sí podía aceptarlos sin peligro.

Adapa, confiando ciegamente en la sabiduría de su creador, siguió cada instrucción al pie de la letra. Se presentó ante Anu, ganó el favor de los guardianes exactamente como se le había indicado, y explicó con total sinceridad por qué había maldecido al viento sur. Anu, en vez de la furia que Enki había anticipado, quedó genuinamente impresionado por la honestidad y la elocuencia del sabio mortal que tenía ante sí, y decidió, en un giro que nadie había previsto, ofrecerle no el pan y el agua de la muerte, sino el pan y el agua de la vida eterna —un regalo verdadero, sincero, destinado a recompensar su carácter.

Fiel hasta el final a las instrucciones que ya no correspondían a la situación real, Adapa rechazó ambos ofrecimientos sin dudarlo, tal como Enki le había advertido. Anu, desconcertado ante semejante negativa a lo que él mismo consideraba un honor sin precedentes, le preguntó directamente por qué rechazaba la inmortalidad que le ofrecía. Al comprender, por la respuesta de Adapa, que este simplemente estaba siguiendo instrucciones basadas en un temor infundado, Anu no pudo evitar reírse ante la ironía completa de la situación, y sin más castigo que esa risa, envió a Adapa de vuelta a la tierra, todavía mortal.

Nadie sabe con certeza, ni siquiera los propios textos antiguos que narran el mito, si Enki se equivocó genuinamente al anticipar las intenciones de Anu, o si conocía la verdad desde el principio y prefirió mantener a la humanidad —representada en la persona de su sabio más leal— bajo su propio dominio antes que permitir que escapara para siempre a la condición mortal que él mismo, en cierto modo, la había ayudado a crear.`,
    personajes: [['adapa', 'protagonista'], ['enki', 'secundario'], ['anu', 'secundario']]
  },
  {
    slug: 'nergal-y-ereshkigal', titulo: 'Nergal y Ereshkigal', tipo: 'amor', periodo: 'Después de que Ereshkigal quedara establecida como soberana del inframundo', es_preview: 0,
    resumen: 'Por no ponerse de pie ante el mensajero de Ereshkigal, Nergal es convocado a rendir cuentas en el inframundo; enfrentado a matarla, termina en cambio convirtiéndose en su esposo y corregente.',
    texto_completo: `Los dioses del cielo celebraban un gran banquete al que, por respeto a su posición como soberana de un reino aparte, invitaron también a Ereshkigal, aunque ella misma, atada por las leyes de su propio dominio, no podía ascender en persona a disfrutarlo. En su lugar, envió a su fiel mensajero Namtar para que recogiera en su nombre la porción del festín que le correspondía. Cuando Namtar llegó ante la asamblea celestial, todos los dioses presentes se pusieron de pie de inmediato, por la cortesía y el respeto debido a un enviado de tan alto rango —todos, excepto Nergal, que permaneció sentado sin la menor intención de honrar el protocolo.

Namtar, sintiendo el desaire como una ofensa directa contra su señora, regresó al inframundo y reportó el incidente con todo detalle. Ereshkigal, furiosa ante lo que consideraba una falta de respeto imperdonable hacia su autoridad, exigió que Nergal le fuera entregado para ejecutarlo personalmente como castigo. Los demás dioses, deseosos de evitar cualquier conflicto directo con la soberana del inframundo, accedieron a la exigencia sin resistencia. Pero Enki, previendo que Nergal necesitaría algo más que buenas intenciones para sobrevivir a semejante viaje, le entregó catorce demonios como escolta personal, y le dio instrucciones precisas sobre cómo comportarse durante el trayecto: no debía sentarse en ningún trono que le ofrecieran, ni comer la comida, ni beber el agua, ni bañarse con el agua que le presentaran en el camino, evitando así cualquier trampa que pudiera atarlo permanentemente al inframundo antes de tiempo.

Nergal, siguiendo cada advertencia al pie de la letra, atravesó las siete puertas del inframundo sin ceder a ninguna de las tentaciones disfrazadas de hospitalidad que encontró a su paso, y llegó finalmente ante el trono de Ereshkigal armado y decidido a cumplir con la sentencia de ejecución que la propia diosa había exigido. En el momento crucial, la sujetó por el cabello, la derribó de su trono, y alzó su hacha dispuesto a decapitarla de un solo golpe certero.

Pero al mirarla de cerca, vulnerable y despojada de toda la autoridad que un instante antes la había definido, algo en Nergal titubeó. Ereshkigal, comprendiendo que tenía una última oportunidad, le suplicó que no la matara, ofreciéndole en cambio algo que ningún otro dios podía ofrecerle: convertirse en su esposo, compartiendo con él el trono del inframundo y todo el poder que eso implicaba. Nergal, tras un instante de duda, bajó el hacha y aceptó.

Su unión, según describen los propios textos con una franqueza poco habitual, duró seis días y seis noches ininterrumpidas, un símbolo tan físico como político de la fusión completa entre ambos poderes. Pero incluso después de sellado el matrimonio, Nergal debía regresar temporalmente al mundo de los dioses celestiales para resolver asuntos pendientes con la asamblea que lo había enviado en primer lugar, dejando a Ereshkigal, una vez más, sola en su trono. Furiosa por lo que interpretó como un abandono tras la promesa de quedarse, amenazó con liberar a todos los muertos del inframundo para que devoraran a los vivos si Nergal no regresaba de inmediato y para siempre.

Ante esa amenaza, Enki y el resto de la asamblea celestial comprendieron que no había alternativa: Nergal debía volver al inframundo de manera permanente. Con los mismos catorce demonios como escolta, descendió una segunda y definitiva vez, y esta vez se quedó, gobernando junto a Ereshkigal como corregente legítimo del reino de los muertos —un dios de la guerra y la peste violenta, unido para siempre a la más antigua soberana de la tierra sin retorno, resolviendo así, con un matrimonio nacido de un desaire casual en un banquete, quién compartiría finalmente el trono más temido de toda la mitología sumeria.`,
    personajes: [['nergal', 'protagonista'], ['ereshkigal', 'protagonista'], ['namtar', 'secundario'], ['enki', 'mencionado']]
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
  console.log('Sembrando parte 2: 8 historias mas de Mitologia Sumeria...\n');
  const libroId = await obtenerLibroId();
  const idsPersonajes = await obtenerIdsPersonajes(libroId);
  await sembrarHistorias(libroId, idsPersonajes);

  const [total] = await pool.query('SELECT COUNT(*) c FROM historias WHERE libro_id = ?', [libroId]);
  console.log(`\nListo. Total historias en el libro: ${total[0].c}`);
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
