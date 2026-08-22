// ============================================================
// scripts/sembrar-historias-japonesa-parte2.js
// ------------------------------------------------------------
// Segundo y ultimo lote de historias de Mitologia Japonesa (9 de
// 18): heroes folcloricos, cazadores de oni y las leyendas de
// Tamamo-no-Mae, Abe no Seimei, Namazu y la emperatriz Jingu.
// Contenido ya extenso desde el inicio. Idempotente via
// slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-historias-japonesa-parte2.js
// ============================================================

const pool = require('../config/db');

const HISTORIAS = [
  {
    slug: 'momotaro-y-la-conquista-de-la-isla-de-los-oni', titulo: 'Momotarō y la conquista de la isla de los oni', tipo: 'heroica', periodo: 'Tradición folclórica, sin fecha fija', es_preview: 1,
    resumen: 'Nacido de un melocotón gigante, Momotarō reúne a un perro, un mono y un faisán con bolas de arroz y parte a poner fin a los ataques de una banda de oni desde su fortaleza en Onigashima.',
    texto_completo: `Hace mucho tiempo, en un pueblo junto a un río, vivía un anciano matrimonio sin hijos: el esposo cortaba leña en la montaña cada día mientras la esposa lavaba ropa en el río cercano. Una mañana, mientras lavaba como de costumbre, la anciana vio un melocotón descomunal flotando corriente abajo, más grande que cualquiera que hubiera visto jamás, y decidió llevarlo a casa para compartirlo con su esposo esa misma noche. Pero cuando se dispuso a cortarlo, el melocotón se abrió por sí solo, y de su interior emergió, sano y llorando, un niño pequeño. La pareja, maravillada ante lo que solo podían interpretar como un regalo de los dioses, decidió criarlo como propio, y lo llamaron Momotarō, "niño melocotón", en honor a su origen prodigioso.

Momotarō creció fuerte, valiente y con un profundo sentido de la justicia, muy distinto a cualquier otro niño del pueblo. Cuando ya era un joven capaz, escuchó de boca de los aldeanos las historias cada vez más frecuentes sobre los ataques de una banda de oni feroces que, desde su fortaleza en la remota Onigashima, "la isla de los demonios", asaltaban regularmente los pueblos de la costa, robando cosechas, ganado y objetos de valor, y sembrando el terror entre familias que no tenían forma alguna de defenderse. Momotarō, indignado por el sufrimiento de su propia comunidad, anunció a sus padres adoptivos su decisión de viajar hasta la isla y poner fin de una vez por todas a la amenaza.

Sus padres, aunque preocupados, lo apoyaron y le prepararon para el viaje un puñado de kibi dango, bolas de mijo dulce consideradas un manjar especial en la región. En el camino hacia la costa, Momotarō se encontró primero con un perro hambriento, que a cambio de una de sus bolas de arroz se ofreció a acompañarlo como aliado leal; después con un mono, que aceptó el mismo trato; y finalmente con un faisán, que se unió también al grupo tras recibir su propia bola de kibi dango. Los cuatro juntos —un joven decidido, un perro fiel, un mono ágil y un faisán volador— construyeron una embarcación y navegaron hasta Onigashima.

Al llegar a la isla, encontraron una fortaleza de hierro macizo rodeada por altos muros, aparentemente infranqueable para cualquier atacante convencional. Pero el faisán, volando por encima de los muros, logró explorar el interior y encontrar un punto débil; el mono, ágil trepador, escaló hasta abrir una puerta secundaria desde dentro; y el perro, mordiendo con fiereza a cualquier oni que intentara cerrarles el paso, abrió una brecha por la que Momotarō pudo finalmente entrar en combate directo contra el jefe de la banda. Tras una lucha feroz en la que los cuatro aliados combinaron sus habilidades complementarias con una coordinación perfecta, lograron someter por completo a los oni, obligando a su líder a rendirse incondicionalmente y a jurar no volver a atacar jamás ningún pueblo costero.

Como prueba de su rendición, los oni entregaron a Momotarō todo el tesoro acumulado durante años de saqueos —oro, sedas finas, objetos preciosos de toda clase— que el joven héroe cargó en su embarcación de regreso a casa. Al llegar a su pueblo, Momotarō repartió generosamente el tesoro recuperado entre las familias que habían sufrido los ataques durante tanto tiempo, y vivió el resto de sus días junto a sus padres adoptivos, honrado por toda la región como el joven que había nacido de un melocotón para convertirse en el héroe que finalmente les devolvió la paz. Su historia, transmitida de generación en generación, se convirtió con el tiempo en uno de los cuentos infantiles más contados en todo Japón, y sus cuatro protagonistas —el niño melocotón y sus tres aliados animales— siguen siendo hoy figuras instantáneamente reconocibles en la cultura popular japonesa.`,
    personajes: [['momotaro', 'protagonista'], ['oni', 'antagonista']]
  },
  {
    slug: 'kintaro-el-nino-dorado-de-las-montanas', titulo: 'Kintarō, el niño dorado de las montañas', tipo: 'heroica', periodo: 'Tradición folclórica, sin fecha fija', es_preview: 0,
    resumen: 'Criado entre los animales del monte Ashigara por la bruja Yama-uba, el niño de fuerza sobrehumana Kintarō llama la atención de Minamoto no Yorimitsu, que lo recluta como guerrero.',
    texto_completo: `En las profundidades del monte Ashigara vivía Yama-uba, un espíritu o bruja de la montaña que, contrario a la fama amenazante que tenían otras criaturas similares en el folclore japonés, había criado con enorme cariño a un niño llamado Kintarō, "niño dorado", desde su nacimiento. Nadie conocía con certeza el origen exacto del pequeño —algunas versiones sugieren que era hijo de un dios del trueno, otras que simplemente había sido encontrado abandonado en la montaña—, pero desde muy pequeño mostró una fuerza física tan descomunal que superaba con facilidad a cualquier adulto humano de su aldea más cercana, y mucho más aún a cualquier otro niño de su edad.

Kintarō creció completamente integrado entre los animales salvajes de la montaña, tratándolos no como presas o peligros sino como verdaderos amigos y compañeros de juego: luchaba cuerpo a cuerpo con osos adultos sin sufrir el menor daño, competía en pulsos de fuerza con jabalíes y venados, y trepaba árboles junto a monos que lo aceptaban como a uno más de su propio grupo. Su arma característica, un hacha gigante que la mayoría de los adultos apenas podían levantar, la manejaba él con una soltura absoluta, usándola incluso como simple bastón de apoyo durante sus caminatas diarias por el bosque. Vestía siempre un peto rojo marcado con el carácter "kin" (oro), regalo de Yama-uba, que se convertiría con el tiempo en su imagen más reconocible.

Un día, mientras el legendario guerrero Minamoto no Yorimitsu recorría la región en una de sus expediciones, escuchó rumores sobre un niño de fuerza sobrenatural que vivía salvaje en la montaña, capaz de derrotar animales adultos sin esfuerzo aparente. Intrigado, Yorimitsu decidió buscarlo personalmente, y al encontrarlo quedó tan impresionado por su fuerza, su valentía y su corazón noble que le propuso de inmediato unirse a su servicio como guerrero, ofreciéndole la oportunidad de poner su talento excepcional al servicio de causas mayores que la simple vida salvaje de la montaña.

Kintarō, tras despedirse con dolor de Yama-uba y de los animales que lo habían criado como a uno de los suyos, aceptó la propuesta y descendió con Yorimitsu hacia el mundo de los hombres, donde recibió su nombre adulto: Sakata Kintoki. Bajo ese nuevo nombre, se convirtió en uno de los cuatro retenedores más leales de Yorimitsu, los llamados Shitennō, junto a guerreros como Watanabe no Tsuna, y participaría años después en algunas de las hazañas más célebres de su señor, incluida la peligrosa expedición contra el temible oni Shuten-dōji en su fortaleza del monte Ōe. Pese a su nueva vida como guerrero disciplinado al servicio de la corte, Kintarō jamás olvidó sus raíces salvajes en la montaña, y su imagen infantil original —fuerte, alegre y en armonía plena con la naturaleza— se convirtió con el tiempo en un símbolo tan querido en Japón que, hasta el día de hoy, muñecos y estandartes con su figura decoran los hogares durante el Kodomo no Hi, el Día del Niño, cada mes de mayo, como deseo tradicional de fuerza y buena salud para los hijos de cada familia.`,
    personajes: [['kintaro', 'protagonista'], ['minamoto-no-yorimitsu', 'secundario']]
  },
  {
    slug: 'issun-boshi-el-guerrero-de-una-pulgada', titulo: 'Issun-bōshi, el guerrero de una pulgada', tipo: 'heroica', periodo: 'Tradición folclórica, sin fecha fija', es_preview: 0,
    resumen: 'Un niño diminuto navega hasta la capital en un cuenco de sopa y, pese a su tamaño, derrota a un oni saltando dentro de su boca — ganando con ello el mazo mágico que lo convierte en un hombre de tamaño normal.',
    texto_completo: `Una pareja de ancianos, tras años de rezar sin éxito por tener un hijo, recibió finalmente su deseo cumplido de una forma tan inesperada como desconcertante: el niño que nació era perfectamente sano en todos los sentidos, excepto por su tamaño, apenas equivalente a una pulgada, poco más de tres centímetros de altura. Lejos de sentirse decepcionados, los ancianos lo criaron con el mismo amor que habrían dado a cualquier hijo de tamaño normal, y lo llamaron Issun-bōshi, "el monje de una pulgada", en referencia directa a su diminuta estatura.

Cuando Issun-bōshi alcanzó la edad adulta —según su propio criterio, ya que su cuerpo jamás creció más allá de esa primera pulgada—, decidió que no dejaría que su tamaño lo condenara a una vida sin ambiciones, y anunció a sus padres su intención de viajar hasta la capital para labrarse un futuro propio como cualquier joven decidido. Se equipó para el viaje con lo que tenía a mano ajustado a su escala: una aguja de coser afilada como espada, envainada en la vaina hueca de una espiga de arroz, y un cuenco de sopa como pequeña embarcación, que empujó río abajo remando con un simple palillo de comer a modo de remo improvisado.

Tras un viaje que para cualquier otro habría sido trivial pero que para él representaba una auténtica travesía, Issun-bōshi llegó finalmente a la capital, donde logró entrar al servicio de una familia noble pese a las burlas iniciales de varios sirvientes por su tamaño extraordinario. Con el tiempo, su inteligencia, su cortesía y su valentía innegable le ganaron el respeto genuino de toda la casa, incluida la hija de la familia, con quien entabló una amistad cada vez más cercana mientras la acompañaba en sus salidas y peregrinaciones a distintos templos de la ciudad.

Durante una de esas salidas, un oni gigantesco emergió del camino con la intención de secuestrar a la joven noble, y ante el pánico paralizante del resto del séquito, fue Issun-bōshi, pese a su tamaño insignificante frente al monstruo, quien no dudó en intervenir: saltó directamente dentro de la boca abierta del oni y, una vez en su interior, comenzó a apuñalarlo repetidamente con su pequeña aguja-espada desde dentro, provocándole un dolor tan insoportable que el demonio, aterrado y confundido por un ataque que no lograba localizar ni detener, escupió a Issun-bōshi y huyó despavorido hacia la montaña, dejando caer en su huida un objeto que llevaba consigo: el legendario mazo de la buena suerte, uchide no kozuchi, capaz de conceder cualquier deseo a quien lo agitara con la intención correcta.

La joven noble, profundamente agradecida y admirada por el coraje que Issun-bōshi había demostrado pese a su tamaño, tomó el mazo caído y, sabiendo lo que su amigo más deseaba en el mundo, lo agitó pidiendo que creciera hasta convertirse en un hombre de estatura normal. Al instante, Issun-bōshi comenzó a crecer ante los ojos atónitos de todos los presentes, hasta transformarse por completo en un apuesto joven de tamaño y proporciones perfectamente normales, sin perder ni un ápice del valor y la inteligencia que ya lo habían definido siendo diminuto. Poco después, Issun-bōshi y la joven noble se casaron, y su historia se convirtió con el tiempo en uno de los relatos más queridos del folclore japonés, recordado especialmente por su mensaje directo: el tamaño de una persona jamás determina la grandeza real de su carácter.`,
    personajes: [['issun-boshi', 'protagonista'], ['oni', 'antagonista']]
  },
  {
    slug: 'shuten-doji-el-senor-demonio-del-monte-oe', titulo: 'Shuten-dōji, el señor demonio del monte Ōe', tipo: 'heroica', periodo: 'Periodo Heian, hacia el siglo X', es_preview: 1,
    resumen: 'Ante las desapariciones constantes de jóvenes nobles, Minamoto no Yorimitsu y sus cuatro retenedores se infiltran disfrazados de monjes en la fortaleza del temible oni Shuten-dōji para acabar con él.',
    texto_completo: `Durante el periodo Heian, la capital imperial se vio azotada por una ola inexplicable de desapariciones: jóvenes nobles, especialmente mujeres de familias prominentes, se esfumaban sin dejar rastro durante la noche, sin que ninguna investigación lograra determinar su paradero. Con el tiempo, rumores cada vez más insistentes señalaron como responsable a Shuten-dōji, "el niño bebedor", el más temido y poderoso de todos los oni de Japón, que gobernaba desde una fortaleza prácticamente inexpugnable construida en las profundidades del monte Ōe, a las afueras de la capital, donde según se decía mantenía cautivas a todas sus víctimas.

El emperador, desesperado ante la magnitud del problema y sin ninguna fuerza militar convencional capaz de asaltar directamente una fortaleza demoníaca de tal poder, convocó al guerrero más célebre de su época: Minamoto no Yorimitsu, acompañado de sus cuatro retenedores más leales y capaces, conocidos colectivamente como los Shitennō —entre ellos Watanabe no Tsuna, el más hábil con la espada, y Sakata Kintoki, el antiguo niño salvaje de la montaña convertido ya en guerrero adulto—. Conscientes de que un ataque frontal contra la fortaleza sería un suicidio garantizado dado el número y la fuerza de los oni que la custodiaban, Yorimitsu ideó en cambio un plan basado en el engaño y la paciencia.

El grupo completo se disfrazó de monjes budistas peregrinos, ocultando sus armas bajo las túnicas religiosas, y emprendió el ascenso hacia el monte Ōe. En el camino, según cuenta la leyenda, se encontraron con varios ancianos misteriosos —en realidad dioses disfrazados, entre ellos posiblemente el propio Sumiyoshi Myōjin— que, compadecidos de la peligrosa misión, les entregaron un sake especial preparado con propiedades narcóticas divinas, capaz de debilitar por completo a cualquier demonio que lo bebiera sin perder su efecto embriagador normal ante los mortales, y les advirtieron además sobre los peligros específicos que encontrarían dentro de la fortaleza.

Al llegar, los falsos monjes fueron recibidos por el propio Shuten-dōji, curiosamente hospitalario con los viajeros religiosos, que los invitó a un banquete donde exhibió sin recato el estilo de vida brutal de su guarida: relató con orgullo sus incursiones nocturnas y presumió abiertamente de la carne humana que servía en su propia mesa. Yorimitsu y sus hombres, ocultando su horror con calma disciplinada, ofrecieron a cambio el sake especial que llevaban consigo, y Shuten-dōji, encantado con la bebida, bebió generosamente junto a todo su séquito de oni hasta caer completamente ebrio e indefenso, muy por debajo de su fuerza habitual.

Aprovechando el momento, Yorimitsu y sus retenedores revelaron sus verdaderas armas y atacaron sin piedad: mientras los demás combatían y liberaban a los cautivos que encontraban encerrados en las mazmorras de la fortaleza, Yorimitsu se enfrentó directamente al propio Shuten-dōji, decapitándolo de un solo golpe certero con su espada. Pero incluso separada del cuerpo, la cabeza del demonio, furiosa hasta el último instante, intentó morder al guerrero victorioso, obligándolo a protegerse llevando dos cascos superpuestos durante todo el trayecto de regreso hacia la capital con la cabeza cercenada como trofeo y prueba irrefutable de la hazaña cumplida. La victoria sobre Shuten-dōji se convirtió, desde entonces, en la hazaña más célebre atribuida a Minamoto no Yorimitsu, repetida durante siglos en el teatro noh y kabuki como uno de los relatos de cacería de demonios más queridos de toda la tradición japonesa.`,
    personajes: [['minamoto-no-yorimitsu', 'protagonista'], ['shuten-doji', 'antagonista'], ['watanabe-no-tsuna', 'secundario'], ['kintaro', 'secundario']]
  },
  {
    slug: 'watanabe-no-tsuna-y-el-brazo-del-oni-en-rashomon', titulo: 'Watanabe no Tsuna y el brazo del oni en Rashōmon', tipo: 'heroica', periodo: 'Periodo Heian, hacia el siglo X', es_preview: 0,
    resumen: 'Enviado de noche a la temida puerta Rashōmon, Watanabe no Tsuna corta de un tajo el brazo de un oni que intenta arrastrarlo — y meses después, un engaño casi le cuesta recuperar el trofeo perdido.',
    texto_completo: `La puerta Rashōmon, situada en el límite sur de la capital Heian, tenía fama de estar infestada de espíritus y demonios que aprovechaban la oscuridad nocturna para atacar a cualquier viajero lo bastante imprudente como para cruzarla solo después del anochecer. Watanabe no Tsuna, considerado el más hábil con la espada entre los cuatro retenedores leales de Minamoto no Yorimitsu, recibió una noche el encargo de cumplir un recado que lo obligaba a pasar exactamente por ese lugar temido, y aceptó la tarea sin mostrar el menor signo de duda ni temor ante la reputación siniestra del sitio.

Al cruzar bajo el arco de la puerta, en medio de la más completa oscuridad, una mano descomunal surgió repentinamente desde arriba y sujetó a Watanabe no Tsuna con fuerza brutal por el casco, intentando arrastrarlo hacia las alturas invisibles de donde había surgido. Cualquier guerrero menos experimentado habría sucumbido al pánico o habría sido arrastrado sin remedio, pero Watanabe no Tsuna, con una calma forjada en años de entrenamiento junto a Yorimitsu, desenvainó su espada Higekiri con un solo movimiento fluido y cortó de un tajo certero el brazo completo que lo sujetaba, justo antes de que la fuerza que tiraba de él lograra levantarlo del suelo. Un rugido de dolor resonó en la oscuridad mientras la criatura, herida y furiosa, huía volando hacia la noche sin completar su ataque.

Watanabe no Tsuna regresó a su hogar con el brazo cercenado como prueba física de su hazaña, un miembro de piel áspera y garras afiladas que no dejaba lugar a dudas sobre la naturaleza demoníaca de su dueño original. Consciente de que un objeto de tal poder sobrenatural podía atraer intentos de recuperación, lo guardó dentro de una caja fuertemente sellada, bajo llave, y prohibió expresamente que nadie la abriera bajo ninguna circunstancia mientras él estuviera ausente, siguiendo el consejo de un sacerdote que le advirtió sobre los peligros de exhibir semejante trofeo sin la protección ritual adecuada.

Meses después, mientras Watanabe no Tsuna se encontraba fuera realizando penitencia religiosa por orden de ese mismo sacerdote —un periodo de purificación considerado necesario tras haber derramado sangre demoníaca—, una mujer de edad avanzada se presentó en su hogar afirmando ser su tía, una pariente lejana a quien apenas había visto en años, y pidió con insistencia amable ver el famoso brazo cortado del que tanto se hablaba en la capital. Los sirvientes de la casa, engañados por su apariencia frágil e inofensiva y por su conocimiento aparentemente genuino de detalles familiares, terminaron cediendo y le mostraron el contenido de la caja sellada.

En cuanto la anciana tuvo el brazo entre sus manos, su verdadera identidad se reveló de inmediato: era el propio oni al que Watanabe no Tsuna había herido meses atrás, disfrazado con extraordinaria paciencia para recuperar su extremidad perdida. Recuperando su forma demoníaca original ante los gritos aterrados de los sirvientes, la criatura tomó el brazo, lo reincorporó a su propio cuerpo, y escapó volando a través de una ventana antes de que nadie pudiera detenerla, llevándose consigo tanto el trofeo como la prueba de la hazaña de Watanabe no Tsuna. El episodio, sin embargo, no restó fama a la valentía original del guerrero: la historia de su encuentro en Rashōmon se convirtió, pese al desenlace frustrante de la pérdida del brazo, en una de las leyendas de cacería de demonios más contadas y adaptadas en el teatro tradicional japonés durante los siglos siguientes.`,
    personajes: [['watanabe-no-tsuna', 'protagonista'], ['minamoto-no-yorimitsu', 'mencionado']]
  },
  {
    slug: 'tamamo-no-mae-la-zorra-de-nueve-colas', titulo: 'Tamamo-no-Mae, la zorra de nueve colas', tipo: 'tragedia', periodo: 'Periodo Heian, siglo XII', es_preview: 1,
    resumen: 'Una cortesana de belleza y sabiduría perfectas enferma lentamente al emperador Toba, hasta que un adivino descubre que en realidad es un zorro de nueve colas — y su muerte la transforma en una piedra que mata a quien la toca.',
    texto_completo: `Durante el reinado del emperador Toba, una nueva dama de compañía llegó a la corte imperial que deslumbró de inmediato a todos los que la conocieron: se llamaba Tamamo-no-Mae, y su belleza era tan perfecta que parecía sobrenatural, complementada además por un conocimiento enciclopédico de la poesía, la música, la filosofía budista y prácticamente cualquier tema que se discutiera en su presencia, respondiendo siempre con una elocuencia que dejaba mudos incluso a los eruditos más experimentados de la corte. El propio emperador Toba, cautivado por completo, la convirtió rápidamente en su favorita indiscutible, colmándola de atención y privilegios que despertaron tanto admiración como envidia entre el resto de la corte.

Poco después de que su influencia sobre el emperador se consolidara, Toba comenzó a sufrir una enfermedad extraña e inexplicable: se debilitaba día tras día sin fiebre visible ni síntoma físico claro que los médicos de la corte pudieran identificar o tratar con los métodos convencionales disponibles. La condición empeoraba de manera constante y progresiva, hasta el punto de poner en riesgo real la vida del propio soberano, sin que ningún remedio lograra siquiera frenar su avance, y mucho menos revertirlo.

Desesperada, la corte convocó finalmente al astrólogo y adivino Abe no Yasunari, descendiente del célebre Abe no Seimei, para que investigara mediante las artes del onmyōdō la causa oculta detrás de la misteriosa dolencia imperial. Tras realizar rituales de adivinación complejos, Yasunari llegó a una conclusión perturbadora: Tamamo-no-Mae no era en absoluto una mujer humana, sino un zorro de nueve colas centenario, un espíritu kitsune de naturaleza profundamente malévola que había adoptado forma humana para infiltrarse en la corte, y que drenaba lentamente la energía vital del emperador con cada visita, alimentándose de su propia fuerza vital como si fuera sustento.

Confrontada con la revelación, Tamamo-no-Mae abandonó de inmediato su disfraz y huyó de la capital a toda velocidad, dirigiéndose hacia la llanura de Nasu, en una región remota lejos del alcance inmediato de la corte. El emperador, ya recuperando fuerzas al alejarse la influencia de la criatura, ordenó de todos modos que se organizara una expedición militar para dar caza definitiva a la zorra antes de que pudiera cobrarse más víctimas en otro lugar. Tras una persecución larga y difícil por terreno hostil, el ejército enviado finalmente logró acorralar y matar a Tamamo-no-Mae en su verdadera forma de zorro gigantesco, poniendo fin, en apariencia, a la amenaza que había estado a punto de costarle la vida al emperador.

Pero la muerte de la criatura no significó su desaparición completa: su espíritu, furioso incluso más allá de la muerte física, se fusionó con una gran roca en el lugar exacto donde había caído, transformándola en la temida Sesshō-seki, "la piedra que mata". Cualquier animal, insecto o persona que se acercara lo suficiente a la piedra caía muerto de inmediato, envenenado por los gases tóxicos que emanaba de forma constante, convirtiendo la zona entera en un territorio prohibido y letal durante generaciones. Según la tradición, la piedra permaneció activa durante siglos, cobrándose víctimas ocasionales de viajeros imprudentes, hasta que un monje budista errante, tras años de meditación y rituales de purificación dedicados específicamente a ella, logró finalmente romperla en varios fragmentos, dispersándolos por distintas provincias de Japón para debilitar de manera permanente el poder residual que todavía conservaba el espíritu vengativo de la zorra de nueve colas.`,
    personajes: [['tamamo-no-mae', 'protagonista']]
  },
  {
    slug: 'abe-no-seimei-el-hijo-de-la-zorra', titulo: 'Abe no Seimei, el hijo de la zorra', tipo: 'otro', periodo: 'Periodo Heian, siglo X', es_preview: 0,
    resumen: 'La leyenda que explica el origen sobrenatural del más célebre hechicero de Japón: su madre era en realidad un espíritu zorro que huyó el día en que su propio hijo descubrió su verdadera naturaleza.',
    texto_completo: `Mucho antes de convertirse en el astrólogo y hechicero más célebre de toda la historia japonesa, el niño que llegaría a ser conocido como Abe no Seimei creció sin sospechar que su propia madre, una mujer llamada Kuzunoha, ocultaba un secreto extraordinario. Según cuenta la leyenda popular que se desarrolló en torno a su figura, Kuzunoha no era en realidad una mujer humana en absoluto, sino un espíritu zorro, un kitsune, que había adoptado forma humana después de que el padre de Seimei, un noble compasivo, la salvara de ser cazada mientras aún tenía su forma animal original, curándole las heridas y liberándola sin pedir nada a cambio.

Agradecida más allá de cualquier deuda ordinaria, Kuzunoha decidió transformarse permanentemente en mujer para buscar a su salvador, y ambos terminaron enamorándose y casándose sin que él tuviera la menor sospecha de la verdadera naturaleza de su esposa. Vivieron juntos varios años felices, y de esa unión nació el niño que sería Abe no Seimei, criado con un amor tan profundo por parte de su madre como el que cualquier familia humana normal podría ofrecer, sin que ni él ni su padre notaran jamás nada extraño en su comportamiento cotidiano.

El secreto se rompió finalmente un día en que el pequeño Seimei, todavía niño, entró sin avisar a una habitación y sorprendió a su madre justo en el momento en que, distraída, había recuperado brevemente su forma original de zorro de nueve colas —según algunas versiones, mientras contemplaba con nostalgia un jardín de flores de kuzu, la enredadera de la que tomaba su propio nombre humano—. Descubierta sin remedio posible, Kuzunoha comprendió que ya no podía seguir ocultando su naturaleza ni permanecer junto a su familia humana sin poner en riesgo constante su seguridad y la de los suyos. Con el corazón roto, escribió un poema de despedida en la pantalla corrediza de la habitación, explicando su verdadera identidad y su amor genuino e inquebrantable por ambos, y desapareció esa misma noche hacia el bosque, retomando para siempre su forma zorruna original.

Seimei, criado desde entonces solo por su padre pero con el recuerdo imborrable de una madre a la que había perdido de la forma más extraña posible, heredó de ella —según sostiene la tradición— dones sobrenaturales de percepción y control espiritual que ningún maestro humano podría haberle enseñado jamás: la capacidad de ver a través de cualquier disfraz sobrenatural, de comandar espíritus invisibles llamados shikigami como si fueran extensiones de su propia voluntad, y de percibir maldiciones y presencias ocultas que escapaban por completo a la percepción de cualquier otro sacerdote o adivino de su época. Se convirtió, con el tiempo, en el astrólogo y hechicero más respetado de la corte Heian, protector constante del emperador y de la propia capital frente a amenazas espirituales de todo tipo, y su fama perduró tanto que, según algunas versiones tardías de otras leyendas, fue precisamente Seimei quien décadas después ayudaría a identificar la verdadera naturaleza zorruna de Tamamo-no-Mae, cerrando un círculo simbólico entre su propio origen sobrenatural y una de las amenazas kitsune más peligrosas jamás registradas en la historia legendaria de Japón.`,
    personajes: [['abe-no-seimei', 'protagonista']]
  },
  {
    slug: 'namazu-y-los-terremotos-bajo-el-archipielago', titulo: 'Namazu y los terremotos bajo el archipiélago', tipo: 'otro', periodo: 'Tradición popular, especialmente periodo Edo', es_preview: 0,
    resumen: 'Un gigantesco bagre subterráneo cuyo movimiento sacude toda la tierra es mantenido bajo control por el dios Kashima con una piedra sagrada — hasta que un descuido divino desata el desastre.',
    texto_completo: `Bajo el archipiélago completo de Japón, según sostenía firmemente la creencia popular durante el periodo Edo, vivía enroscado un bagre gigantesco de proporciones tan colosales que su cuerpo entero se extendía por debajo de todas las islas del país. Se llamaba Namazu, y cualquier movimiento suyo, por pequeño que fuera —un simple coletazo repentino, un giro brusco para acomodarse en su lecho subterráneo— era suficiente para transmitir su fuerza directamente a la superficie, sacudiendo ciudades enteras con la violencia de un terremoto capaz de derribar casas, incendiar barrios completos y sepultar a cientos de personas bajo los escombros en cuestión de segundos.

El único motivo por el que Namazu no destruía Japón entero de manera constante era la vigilancia incansable de Takemikazuchi, el poderoso kami guerrero venerado en el santuario de Kashima, quien mantenía al bagre inmovilizado bajo tierra gracias a una piedra sagrada especial conocida como Kaname-ishi, "la piedra clavija", clavada con precisión exacta en el punto donde se cruzaban la cabeza y la cola del monstruo, el único lugar capaz de contener su fuerza descomunal. Mientras esa piedra permaneciera firmemente asentada y Takemikazuchi continuara su vigilancia constante, Namazu quedaba efectivamente paralizado, incapaz de mover más que ligeros temblores ocasionales sin consecuencias graves.

El problema surgía en aquellas ocasiones en que Takemikazuchi debía ausentarse de su puesto de vigilancia: cada año, según la tradición, todos los kami de Japón —incluido el propio Takemikazuchi— viajaban hasta el Gran Santuario de Izumo para celebrar una asamblea general durante el décimo mes del calendario lunar, un mes que en la región de Izumo se conoce por eso mismo como Kannazuki-tsuki, "el mes con dioses presentes", mientras que en el resto del país recibe el nombre inverso, Kannazuki, "el mes sin dioses", precisamente porque todas las divinidades locales se encuentran ausentes durante esas semanas. Era en esos periodos de ausencia divina generalizada, sin la vigilancia habitual de Takemikazuchi sobre la piedra Kaname-ishi, cuando Namazu aprovechaba para agitarse con mayor libertad, provocando los terremotos más severos que la memoria popular japonesa registraba.

Tras cada terremoto de magnitud considerable, especialmente después del gran sismo de Edo de 1855, que devastó buena parte de la capital y causó miles de muertes, surgió una tradición artística popular conocida como namazu-e: grabados coloridos e ilustrados que representaban al gigantesco bagre en distintas escenas, desde ser castigado y sometido nuevamente por dioses furiosos hasta —de forma más ambigua y hasta cierto punto simpática— siendo perseguido por comerciantes y artesanos comunes que, pese al desastre reciente, reconocían con cierta ironía amarga que la reconstrucción posterior a cada terremoto generaba inevitablemente trabajo y ganancias para las clases populares a costa de las fortunas de los más ricos, cuyas propiedades solían sufrir las mayores pérdidas proporcionales. Namazu, de esta forma paradójica, se convirtió con el tiempo en una figura folclórica ambivalente: temido como causante directo de catástrofes devastadoras, pero also asociado, de manera extrañamente esperanzadora, con la idea de una redistribución forzosa que seguía inevitablemente a cada desastre que él mismo provocaba.`,
    personajes: [['namazu', 'protagonista']]
  },
  {
    slug: 'la-emperatriz-jingu-y-la-conquista-prometida', titulo: 'La emperatriz Jingū y la conquista prometida por los dioses', tipo: 'fundacion', periodo: 'Legendario, atribuido al siglo III', es_preview: 1,
    resumen: 'Tras la muerte de su esposo por desobedecer un oráculo divino, la emperatriz Jingū, embarazada, lidera personalmente una expedición naval a Corea con el favor del dios dragón del mar.',
    texto_completo: `El emperador Chūai gobernaba Japón en un periodo de tensiones crecientes con los reinos vecinos de la península coreana, cuando durante una sesión ritual de música y adivinación, un oráculo divino descendió sobre su esposa, la emperatriz Jingū, transmitiendo un mensaje claro de los kami: existía al otro lado del mar una tierra rica en oro, plata y tesoros diversos que Japón debía conquistar, y los dioses prometían garantizar el éxito completo de esa campaña si el emperador obedecía la orden sin cuestionarla. Chūai, escéptico ante la visión y sin ver ninguna tierra semejante desde ningún punto elevado de observación disponible, decidió ignorar el oráculo y continuar en cambio con una campaña militar distinta contra clanes rebeldes locales en el sur de Japón.

Poco después de esa decisión, el emperador murió de forma repentina e inexplicable, un desenlace que la tradición interpretó de inmediato como castigo directo de los dioses por haber desobedecido su mandato explícito. Jingū, ya viuda y además embarazada del hijo que Chūai jamás llegaría a conocer, decidió que ella misma cumpliría el oráculo que su esposo había rechazado, asumiendo personalmente el liderazgo tanto del gobierno como de la expedición militar prometida a los kami. Consciente de que dar a luz antes de completar la misión podría comprometer tanto su propia vida como el éxito de la campaña, se ató una piedra especial a la cintura —un objeto que, según la creencia popular, poseía la capacidad mágica de retrasar el parto hasta el momento que ella misma decidiera.

Con el favor directo de Ryūjin, el dios dragón del mar, que le entregó —según algunas versiones del relato— las mismas joyas mágicas de marea que generaciones atrás habían permitido a Hoori someter a su hermano Hoderi, Jingū reunió una flota completa y zarpó hacia la península coreana al frente de sus propias tropas, un liderazgo militar directo poco habitual para una mujer en cualquier época de la historia japonesa registrada. Cuando la flota se aproximó a la costa coreana, Jingū utilizó el poder de las joyas para controlar las mareas a su favor, generando primero una marea excepcionalmente baja que varó por completo a las embarcaciones enemigas antes de que pudieran siquiera zarpar a interceptarla, y después una marea repentina y violenta que arrasó cualquier resistencia terrestre organizada en la costa.

Los reinos coreanos, aterrados ante lo que interpretaron como un poder sobrenatural incuestionable desplegado por la propia soberana invasora, se rindieron con una resistencia armada mínima, aceptando pagar tributo regular a la corte japonesa a cambio de paz duradera. Habiendo cumplido con éxito completo el oráculo que su esposo había desobedecido con consecuencias fatales, Jingū regresó a Japón y, solo entonces, permitió finalmente que naciera el hijo que había llevado en su vientre durante toda la campaña: el futuro emperador Ōjin, que con el tiempo sería deificado como Hachiman, el gran kami de la guerra venerado por generaciones enteras de samuráis.

Jingū continuó gobernando como regente durante décadas después de su regreso, hasta que su hijo alcanzó la edad suficiente para asumir el trono formalmente, asesorada durante todo ese periodo por el legendario ministro Takenouchi no Sukune, cuya extraordinaria longevidad le permitió servir de puente de continuidad entre el reinado de Chūai y el de Ōjin. Aunque los historiadores modernos consideran en su mayoría legendaria la expedición tal como la narran las crónicas tradicionales, o en el mejor de los casos una exageración mítica de contactos diplomáticos y comerciales reales con la península coreana durante ese periodo, la figura de la emperatriz Jingū se mantuvo durante siglos como uno de los modelos de liderazgo femenino más venerados de toda la tradición imperial japonesa.`,
    personajes: [['jingu', 'protagonista'], ['ryujin', 'mencionado'], ['takenouchi-no-sukune', 'secundario'], ['hachiman', 'mencionado']]
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-japonesa'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-japonesa" -- créalo primero.');
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
  console.log('Sembrando historias de Mitologia Japonesa (parte 2)...\n');
  const libroId = await obtenerLibroId();
  await sembrarHistorias(libroId);
  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
