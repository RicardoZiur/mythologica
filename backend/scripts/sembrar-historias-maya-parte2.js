// ============================================================
// scripts/sembrar-historias-maya-parte2.js
// ------------------------------------------------------------
// Segundo y ultimo lote de historias de Mitologia Maya (9 de
// 18): el descenso a Xibalba, la victoria final de los gemelos,
// la creacion de los hombres de maiz y dos leyendas yucatecas
// (Sac-Nicte/Canek, origen de la Xtabay). Idempotente via
// slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-historias-maya-parte2.js
// ============================================================

const pool = require('../config/db');

const HISTORIAS = [
  {
    slug: 'las-casas-de-tormento', titulo: 'Las casas de tormento', tipo: 'heroica', periodo: 'Descenso de los héroes gemelos', es_preview: 1,
    resumen: 'Hunahpú e Ixbalanqué superan, una tras otra, las seis casas de tormento de Xibalbá mediante el ingenio — hasta que Camazotz le arranca la cabeza a Hunahpú en la última de ellas.',
    texto_completo: `A diferencia de su padre y su tío, Hunahpú e Ixbalanqué llegaron a Xibalbá prevenidos: reconocieron de inmediato el muñeco de madera disfrazado de anfitrión y no le ofrecieron ningún saludo, evitando la primera humillación pública que había marcado a la generación anterior. Cuando les ofrecieron el banco de piedra al rojo vivo como asiento, se negaron a sentarse, dejando desconcertados a los señores de Xibalbá, que no estaban acostumbrados a visitantes capaces de anticipar sus trampas más elementales.

Esa misma noche fueron enviados a la Casa Oscura, la primera de las seis casas de tormento que tendrían que superar, con la misma tarea imposible impuesta antes a su padre: mantener encendidos toda la noche un cigarro y una antorcha sin que se consumieran. Los gemelos, sin embargo, resolvieron el acertijo con astucia: colocaron una luciérnaga en la punta de la antorcha para simular una brasa encendida, y ataron una pluma roja de guacamayo al extremo del cigarro, imitando desde la distancia el resplandor de una brasa sin consumir realmente el tabaco. Al amanecer, entregaron ambos objetos intactos, dejando atónitos a los señores de Xibalbá.

Las pruebas siguientes se sucedieron una tras otra: la Casa de las Navajas, llena de cuchillos de obsidiana que se movían solos por el aire, fue superada prometiéndoles a las navajas la carne de todos los animales que cazarían en el futuro si se quedaban quietas; la Casa del Frío, capaz de congelar a cualquier mortal, la sobrevivieron quemando piñas de pino para mantener el calor; la Casa de los Jaguares, llena de felinos hambrientos, la superaron arrojándoles huesos para distraer su apetito; y la Casa del Fuego resultó, para sorpresa de los señores, apenas capaz de chamuscarles la piel sin consumirlos por completo, gracias a un conocimiento oculto que los gemelos parecían poseer sobre cada trampa antes de enfrentarla.

La sexta y última prueba, sin embargo, estuvo a punto de costarles la victoria: la Casa de los Murciélagos, custodiada por el monstruoso Camazotz, exigía permanecer inmóviles dentro de las cerbatanas huecas durante toda la noche mientras enjambres de murciélagos volaban sin descanso a su alrededor. Hunahpú e Ixbalanqué resistieron en silencio hora tras hora, pero cerca del amanecer, Hunahpú, confiado en que la prueba casi había terminado, asomó apenas la cabeza fuera de su escondite para comprobar si ya salía el sol. En ese instante exacto, Camazotz le arrancó la cabeza de un solo golpe certero, dejándola después clavada como trofeo macabro sobre el campo de juego de pelota de Xibalbá, ante la mirada atónita de Ixbalanqué, que debía ahora encontrar la manera de salvar a su hermano antes del amanecer.`,
    personajes: [['hunahpu', 'protagonista'], ['xbalanque', 'protagonista'], ['camazotz', 'antagonista'], ['hun-came', 'antagonista'], ['vucub-came', 'antagonista']]
  },
  {
    slug: 'la-derrota-final-de-los-senores-de-xibalba', titulo: 'La derrota final de los señores de Xibalbá', tipo: 'heroica', periodo: 'Descenso de los héroes gemelos', es_preview: 1,
    resumen: 'Tras recuperar la cabeza de Hunahpú con ayuda de los animales del bosque, los gemelos derrotan a los señores de Xibalbá con un truco final: fingir su propio sacrificio y resurrección, y convencerlos de pedir el mismo destino para sí mismos.',
    texto_completo: `Con la cabeza de su hermano perdida sobre el campo de juego de Xibalbá, Ixbalanqué convocó de inmediato a los animales del bosque para pedir ayuda: una tortuga se ofreció a servir de cabeza temporal para Hunahpú, mientras un coatí y otros animales pequeños se encargaban de distraer a los señores de Xibalbá esa misma noche, permitiendo recuperar la cabeza verdadera antes del amanecer sin que nadie notara el intercambio. Cuando la partida de pelota se reanudó al día siguiente con la cabeza real ya restituida en su lugar, los gemelos jugaron con tal destreza que lograron humillar a los propios señores de Xibalbá en su propio terreno, sembrando por primera vez la duda sobre su invencibilidad.

Decididos a poner fin de una vez al dominio absoluto del inframundo sobre los mortales, Hunahpú e Ixbalanqué idearon entonces su plan más audaz: se hicieron pasar por un par de vagabundos itinerantes con un don sorprendente para la magia, capaces de sacrificar animales y hasta a sí mismos para después revivirlos ante el público asombrado. Su fama corrió rápido hasta llegar a oídos de Hun-Camé y Vucub-Camé, que exigieron presenciar el truco en persona, convocando a los dos supuestos vagabundos a su propia corte sin reconocer en ellos a los mismos gemelos que llevaban tanto tiempo desafiándolos.

Ante el consejo completo de los doce señores de Xibalbá, los gemelos representaron su espectáculo más convincente: sacrificaron a un perro y lo revivieron sin dificultad, quemaron una casa entera y la reconstruyeron intacta ante los ojos asombrados de la audiencia, y finalmente, en el momento culminante, Ixbalanqué sacrificó a Hunahpú frente a todos, cortándole el corazón y desmembrándolo por completo —para después, tras un instante de silencio absoluto, revivirlo sano y salvo entre la ovación entusiasmada de los propios señores del inframundo, maravillados ante un poder que jamás habían presenciado.

Hun-Camé y Vucub-Camé, deslumbrados por el espectáculo y deseosos de experimentar ellos mismos esa capacidad de morir y renacer, exigieron que los gemelos repitieran el truco con ellos como protagonistas. Hunahpú e Ixbalanqué aceptaron, y sacrificaron primero a Hun-Camé, y después a Vucub-Camé, exactamente igual que habían hecho consigo mismos momentos antes. Pero esta vez no hubo resurrección: los dos señores supremos de Xibalbá quedaron muertos de manera definitiva, y sin su liderazgo, el resto del consejo de doce señores menores quedó completamente sometido, obligado a renunciar para siempre a su antiguo poder de exigir sacrificios y humillaciones a cualquier mortal que se atreviera a cruzar su territorio. Los gemelos revelaron entonces su verdadera identidad ante los sobrevivientes derrotados, completando así la venganza pendiente desde la muerte de su padre y su tío una generación atrás.`,
    personajes: [['hunahpu', 'protagonista'], ['xbalanque', 'protagonista'], ['hun-came', 'antagonista'], ['vucub-came', 'antagonista'], ['camazotz', 'mencionado']]
  },
  {
    slug: 'los-gemelos-se-convierten-en-el-sol-y-la-luna', titulo: 'Los gemelos se convierten en el Sol y la Luna', tipo: 'cosmogonia', periodo: 'Tras la victoria sobre Xibalbá', es_preview: 1,
    resumen: 'Tras su victoria sobre los señores de la muerte, Hunahpú e Ixbalanqué visitan por última vez el lugar donde cayeron su padre y su tío antes de ascender juntos al cielo, transformados en el sol y la luna.',
    texto_completo: `Antes de abandonar Xibalbá para siempre, Hunahpú e Ixbalanqué quisieron honrar la memoria de su padre y su tío, cuyo destino trágico había desencadenado, sin que ellos lo supieran al nacer, toda la cadena de acontecimientos que finalmente los había llevado a derrotar a los señores del inframundo. Se dirigieron hasta el lugar donde los cuerpos de Hun-Hunahpú y Vucub-Hunahpú habían sido enterrados generaciones atrás, e intentaron devolverles la vida completa con los mismos poderes que acababan de demostrar ante el consejo de Xibalbá.

El intento, sin embargo, no tuvo un éxito total: lograron restaurar el rostro y algunas facciones de sus predecesores, permitiéndoles hablar una última vez con ellos, pero no consiguieron devolverles la vida plena que ambos habían tenido antes de morir. Comprendiendo que aquel era el límite de lo que incluso su poder recién ganado podía lograr, los gemelos se despidieron con respeto de la memoria paterna, prometiendo que su nombre y su historia serían siempre invocados por quienes los recordaran, incluso sin la posibilidad de un regreso completo a la vida terrenal.

Con su misión en Xibalbá definitivamente concluida —el inframundo sometido, los doce señores menores despojados de su antiguo poder absoluto sobre los mortales, y la memoria de su padre honrada del mejor modo posible—, Hunahpú e Ixbalanqué ascendieron juntos desde las profundidades hasta la superficie de la tierra, y de ahí continuaron subiendo directamente hacia el cielo, dejando atrás para siempre el mundo de los mortales que habían habitado como niños criados por su abuela.

En el cielo, los dos hermanos se transformaron en los astros que desde entonces gobiernan el día y la noche: Hunahpú se convirtió en el sol, iluminando la tierra durante el día con la misma determinación con la que había enfrentado cada prueba de Xibalbá, mientras Ixbalanqué se transformó en la luna, iluminando la noche con una luz más suave, reflejo del ingenio paciente que lo había caracterizado durante todo su descenso al inframundo. Algunas tradiciones posteriores invierten los papeles entre ambos astros, o incluyen además a los cuatrocientos jóvenes aplastados por Zipacná, convertidos ya para entonces en las estrellas de las Pléyades, como acompañantes eternos de los gemelos en el cielo nocturno —un final que cierra el ciclo completo de venganza, justicia y transformación que atraviesa toda la segunda mitad del Popol Vuh.`,
    personajes: [['hunahpu', 'protagonista'], ['xbalanque', 'protagonista'], ['hun-hunahpu', 'secundario'], ['vucub-hunahpu', 'secundario']]
  },
  {
    slug: 'la-creacion-de-los-hombres-de-maiz', titulo: 'La creación de los hombres de maíz', tipo: 'cosmogonia', periodo: 'Tras la derrota de Xibalbá', es_preview: 1,
    resumen: 'Con el inframundo por fin sometido, los dioses creadores encuentran en Paxil, la montaña partida, el maíz blanco y amarillo con el que Xmucané da forma, por fin, a los primeros hombres verdaderos.',
    texto_completo: `Con Xibalbá finalmente sometido y el ciclo de venganza de los héroes gemelos concluido, los dioses creadores —Hurakán, Gucumatz y Tepeu— volvieron a reunirse para intentar, una vez más, dar forma a seres capaces de hablar, recordar y venerar correctamente a quienes los habían creado, algo que ni los hombres de barro ni los de madera habían logrado cumplir en los intentos anteriores. Esta vez, sin embargo, contaban con un ingrediente que ninguna de las creaciones previas había utilizado: el maíz, la planta que los propios héroes gemelos habían protegido y honrado a lo largo de todas sus aventuras.

Los animales del monte —el gato de monte, el coyote, una cotorra y un cuervo— guiaron a los dioses hasta Paxil, "la montaña partida" o "montaña de la subsistencia", un lugar oculto donde crecía en abundancia el maíz blanco y el maíz amarillo, junto a otros alimentos como el cacao y diversas frutas. Los dioses recogieron ahí las mazorcas necesarias y las llevaron ante Xmucané, la anciana adivina, pidiéndole que las moliera hasta obtener una masa fina con la que pudiera darse forma, por fin, a la carne y los músculos de los primeros seres verdaderamente humanos.

Xmucané cumplió la tarea con la misma paciencia que había demostrado en cada consulta anterior del consejo creador, moliendo el grano nueve veces hasta lograr una masa perfectamente uniforme, mezclada después con agua para darle la consistencia necesaria. De esa masa surgieron los cuatro primeros hombres verdaderos: Balam Quitzé, Balam Acab, Mahucutah e Iqui Balam, capaces por fin de hablar con claridad, caminar erguidos, razonar con profundidad y, sobre todo, reconocer conscientemente a los dioses que los habían creado, ofreciéndoles palabras de agradecimiento genuino que ni el barro ni la madera habían sido capaces de pronunciar jamás.

Los cuatro hombres de maíz resultaron, sin embargo, sorprendentemente perfectos: su vista alcanzaba a abarcar el mundo entero sin moverse de su sitio, y su entendimiento igualaba, según el propio Popol Vuh, al de los mismos dioses que los habían formado. Aquella perfección, lejos de ser motivo de celebración sin reservas, inquietó profundamente al consejo creador, que comenzó a preguntarse si no habían ido demasiado lejos esta vez, creando seres capaces de rivalizar directamente con sus propios creadores en sabiduría y percepción del cosmos entero.`,
    personajes: [['hurakan', 'protagonista'], ['gucumatz', 'protagonista'], ['tepeu', 'protagonista'], ['xmucane', 'protagonista'], ['balam-quitze', 'secundario'], ['balam-acab', 'secundario'], ['mahucutah', 'secundario'], ['iqui-balam', 'secundario']]
  },
  {
    slug: 'la-niebla-sobre-los-ojos-de-los-primeros-hombres', titulo: 'La niebla sobre los ojos de los primeros hombres', tipo: 'cosmogonia', periodo: 'Tras la creación de los hombres de maíz', es_preview: 0,
    resumen: 'Inquietos ante una humanidad demasiado perfecta, los dioses creadores deciden limitar deliberadamente la vista de los primeros hombres, dejándolos sabios pero ya no equiparables a sus propios creadores.',
    texto_completo: `Poco después de la creación de Balam Quitzé, Balam Acab, Mahucutah e Iqui Balam, los dioses creadores comenzaron a observar con creciente preocupación el alcance real de los dones que les habían otorgado. Los cuatro primeros hombres de maíz no solo hablaban con claridad y razonaban con profundidad: su vista física alcanzaba literalmente a abarcar el mundo entero, las montañas más lejanas, los valles ocultos y hasta las cuatro esquinas del cielo, todo ello sin necesidad de moverse un solo paso de donde se encontraban sentados.

Hurakán, Gucumatz y Tepeu se reunieron en consejo para discutir qué hacer ante una creación que, en su afán de superar los fracasos del barro y la madera, había terminado por resultar excesivamente perfecta. "¿Acaso no serán ellos mismos como dioses, si no se les limita a tiempo?", se preguntaron entre sí, conscientes de que una humanidad capaz de igualar completamente el conocimiento y la percepción divina rompería el orden natural que debía existir entre creadores y criaturas. No se trataba de castigar a los cuatro hombres por ninguna falta cometida —a diferencia de los hombres de madera, estos habían cumplido perfectamente su propósito de honrar y recordar a los dioses—, sino de corregir un exceso involuntario en el propio acto de creación.

Decidieron entonces soplar una espesa niebla directamente sobre los ojos de los cuatro hombres, empañando su vista de la misma manera en que el aliento humano empaña la superficie de un espejo. El efecto fue inmediato y permanente: los primeros hombres perdieron la capacidad de ver más allá de lo que tenían cerca, limitados desde entonces a percibir solo lo que resultaba razonable para cualquier ser mortal, sin conservar ya el alcance ilimitado que habían tenido en el instante mismo de su creación.

Pese a esta limitación deliberada, los cuatro hombres de maíz conservaron toda su sabiduría, su capacidad de palabra y su profundo entendimiento del mundo, cualidades que transmitirían después a sus propias esposas —creadas especialmente para cada uno de ellos mientras dormían— y a los hijos que fundarían, generación tras generación, los grandes linajes gobernantes del pueblo k'iche', cuya genealogía completa el propio Popol Vuh continúa narrando hasta épocas ya cercanas al momento colonial en que el texto fue finalmente puesto por escrito.`,
    personajes: [['hurakan', 'protagonista'], ['gucumatz', 'protagonista'], ['tepeu', 'protagonista'], ['balam-quitze', 'secundario'], ['balam-acab', 'secundario'], ['mahucutah', 'secundario'], ['iqui-balam', 'secundario']]
  },
  {
    slug: 'kukulkan-y-la-serpiente-de-luz', titulo: 'Kukulkán y la serpiente de luz', tipo: 'fundacion', periodo: 'Posclásico maya, Chichén Itzá', es_preview: 0,
    resumen: 'La serpiente emplumada Kukulkán trae consigo el viento, el conocimiento y un nuevo orden político a Chichén Itzá, dejando su presencia marcada para siempre en la gran pirámide construida en su honor.',
    texto_completo: `Mucho después de los tiempos narrados en el Popol Vuh, cuando las grandes ciudades del norte de Yucatán comenzaban a florecer, llegó hasta la región un dios-serpiente cubierto de plumas preciosas de quetzal, conocido entre los mayas yucatecos como Kukulkán. Su llegada trajo consigo el viento que anuncia las lluvias necesarias para la siembra, pero también un conocimiento nuevo sobre el gobierno, la astronomía y la organización de las ciudades, transformando profundamente la forma en que los mayas de la región entendían tanto el cosmos como su propia sociedad.

Chichén Itzá se convirtió en el centro principal de su culto, y sus sacerdotes decidieron construir en su honor una pirámide que fuera, al mismo tiempo, un monumento religioso y un instrumento de precisión astronómica capaz de marcar con exactitud el paso del tiempo. La construcción, conocida hoy como El Castillo, se levantó con cuatro escalinatas orientadas hacia los cuatro puntos cardinales, cada una con noventa y un escalones que, sumados a la plataforma superior, completaban trescientos sesenta y cinco peldaños en total —uno por cada día del año solar—, un cálculo deliberado que convertía a la pirámide entera en un calendario tallado en piedra.

El verdadero prodigio de la construcción, sin embargo, solo se revela dos veces al año, durante los equinoccios de primavera y otoño: mientras el sol desciende hacia el horizonte durante esas tardes precisas, la sombra proyectada por el borde escalonado de la pirámide dibuja sobre la escalinata norte una serie de triángulos luminosos y oscuros que, unidos entre sí, forman la silueta ondulante del cuerpo de una serpiente gigantesca descendiendo lentamente desde la cima hasta encontrarse, en la base, con una cabeza de piedra tallada con total realismo. Durante esos minutos exactos, cientos de personas —y hoy, miles de visitantes— contemplan a Kukulkán manifestándose físicamente ante sus ojos, exactamente como habría hecho, según la tradición, ante los propios sacerdotes que diseñaron el edificio siglos atrás.

Algunas crónicas coloniales tempranas complican todavía más la figura de Kukulkán, identificándolo no solo como un dios sino también como un gobernante histórico-legendario que habría liderado o refundado Chichén Itzá en algún momento del periodo posclásico, fusionando en un mismo nombre la divinidad venerada y el líder político que, según esa tradición, tomó su nombre como símbolo de legitimidad ante su propio pueblo.`,
    personajes: [['kukulkan', 'protagonista']]
  },
  {
    slug: 'chaac-y-el-origen-de-la-lluvia', titulo: 'Chaac y el origen de la lluvia', tipo: 'otro', periodo: 'Tiempo cíclico, cada temporada de siembra', es_preview: 0,
    resumen: 'Los cuatro Chaac, guardianes de cada dirección cardinal, golpean las nubes con sus hachas de piedra para liberar la lluvia que el maíz necesita — y que, en tiempos de sequía, los mayas todavía piden mediante la ceremonia del cha chaac.',
    texto_completo: `Desde tiempos muy antiguos, los mayas explicaban el origen del trueno y la lluvia a través de la figura de Chaac, no como una sola entidad sino como cuatro hermanos idénticos en poder pero distintos en color y dirección: Chac Xib Chaac al este, asociado al color rojo; Sac Xib Chaac al norte, vinculado al blanco; Ek Xib Chaac al oeste, ligado al negro; y Kan Xib Chaac al sur, relacionado con el amarillo. Cada uno de los cuatro habitaba en las nubes correspondientes a su dirección, armado con un hacha de piedra —a veces descrita también como una serpiente viva que empuñaba como látigo— con la que golpeaba las nubes cargadas de agua para liberar la lluvia contenida en su interior, produciendo con cada golpe el estruendo del trueno que resonaba sobre los campos de maíz.

Se contaba que, al principio de los tiempos, la lluvia caía de manera constante y generosa, sin que los hombres tuvieran que pedirla ni preocuparse por su ausencia. Pero con el paso de las generaciones, cuando la humanidad comenzó a descuidar sus ofrendas y sus deberes rituales hacia los cuatro Chaac, estos se retiraron cada vez con mayor frecuencia a sus moradas celestiales, dejando que temporadas enteras transcurrieran sin la lluvia necesaria para que germinara el maíz recién sembrado. Los ancianos de cada comunidad, viendo secarse sus campos, decidieron entonces instituir una ceremonia específica para recordar a los Chaac su compromiso ancestral con los hombres: el cha chaac, una petición ritual de lluvia que se realiza todavía hoy en numerosas comunidades mayas de Yucatán.

La ceremonia reúne a los agricultores de una comunidad en torno a un altar construido con ramas de árboles jóvenes, donde se ofrecen tamales especiales, balché —una bebida ritual fermentada— y oraciones dirigidas específicamente a cada uno de los cuatro Chaac según su dirección correspondiente. En algunas versiones de la ceremonia, niños pequeños son colocados en las cuatro esquinas del altar imitando el croar de las ranas, animales estrechamente asociados con la llegada inminente de la lluvia en la tradición maya, mientras el sacerdote principal invoca a los cuatro hermanos para que golpeen de nuevo sus hachas sobre las nubes.

Muchos cenotes —los pozos naturales de agua dulce tan característicos del paisaje yucateco— se consideraban además portales directos hacia la morada subterránea de Chaac, y recibían ofrendas específicas durante las sequías más severas, bajo la creencia de que el propio dios podía escuchar con mayor claridad las plegarias pronunciadas junto a esas aguas profundas que él mismo, en última instancia, también gobernaba.`,
    personajes: [['chaac', 'protagonista']]
  },
  {
    slug: 'la-leyenda-de-sac-nicte-y-canek', titulo: 'La leyenda de Sac-Nicté y Canek', tipo: 'amor', periodo: 'Posclásico maya, Mayapán y Chichén Itzá', es_preview: 1,
    resumen: 'Prometida a un gobernante que no ama, la princesa Sac-Nicté es rescatada por el príncipe Canek el mismo día de su boda — un rapto que desata la guerra que precipitaría la caída de dos grandes ciudades mayas.',
    texto_completo: `Hacia el final del esplendor de las grandes ciudades del norte de Yucatán, cuando Mayapán, Chichén Itzá e Izamal se disputaban la influencia sobre toda la región, nació en la corte de Mayapán una princesa de extraordinaria belleza llamada Sac-Nicté, "flor blanca". Desde niña había compartido una amistad profunda —convertida con los años en un amor sincero— con Canek, joven príncipe de Chichén Itzá que visitaba con frecuencia la corte de Mayapán junto a su familia, entrelazando su destino con el de la princesa mucho antes de que ninguno de los dos comprendiera del todo el peso político que ese vínculo llegaría a tener.

Cuando ambos alcanzaron la edad adulta, el padre de Sac-Nicté decidió sellar una alianza estratégica prometiendo a su hija en matrimonio con Ah Ulil, señor de la vecina ciudad de Izamal, un pacto pensado para fortalecer los lazos políticos entre ambos señoríos sin tomar en cuenta los sentimientos reales de la princesa. Sac-Nicté, obligada a aceptar el compromiso pese a su amor declarado por Canek, se preparó con el corazón dividido para una boda que sentía como una condena más que como una celebración.

El día de la ceremonia, con la corte entera de Mayapán reunida para presenciar la unión y Ah Ulil ya esperando junto al altar, Canek irrumpió de manera inesperada en pleno festejo. Ante la mirada atónita de todos los presentes, tomó a Sac-Nicté de la mano y la sacó de la ceremonia, montándola en su propia comitiva para huir juntos hacia Chichén Itzá, dejando al novio humillado frente a toda la nobleza reunida y sin ninguna posibilidad de detener la huida a tiempo.

Ah Ulil, incapaz de aceptar semejante afrenta pública, reunió de inmediato a sus aliados políticos y declaró la guerra abierta contra Chichén Itzá, exigiendo tanto la devolución de la princesa como una reparación por el honor perdido ante toda la región. El conflicto que siguió, según sostiene la tradición oral más extendida, resultó determinante en el debilitamiento final de ambas ciudades rivales, ya fragilizadas previamente por tensiones internas, precipitando la decadencia definitiva del poder que Chichén Itzá y Mayapán habían ejercido durante generaciones sobre el norte de la península. Sobre el destino final de los dos amantes, las versiones difieren: algunas narran que murieron juntos arrojándose a un cenote sagrado antes que aceptar la separación forzosa; otras aseguran que lograron escapar del conflicto y fundar, lejos de la guerra que su amor había desatado, un nuevo hogar donde vivir el resto de sus días en paz.`,
    personajes: [['sac-nicte', 'protagonista'], ['canek', 'protagonista'], ['ah-ulil', 'antagonista']]
  },
  {
    slug: 'el-origen-de-la-xtabay', titulo: 'El origen de la Xtabay', tipo: 'tragedia', periodo: 'Tradición oral yucateca', es_preview: 1,
    resumen: 'Dos mujeres del mismo pueblo, una despreciada por su conducta pero secretamente compasiva y otra admirada por su virtud pero fría por dentro, mueren el mismo día — y de sus tumbas nacen dos flores que revelan, demasiado tarde, quién había sido realmente buena.',
    texto_completo: `En un pueblo yucateco vivían, según cuenta la tradición oral, dos mujeres cuyas reputaciones no podían ser más opuestas. Xkeban era conocida y señalada por todos a causa de su conducta sexual libre, considerada escandalosa según las estrictas normas de la comunidad, y muchos vecinos evitaban siquiera cruzar palabra con ella en público por temor a que su propia reputación se viera manchada por asociación. Utz-Colel, en cambio, gozaba del respeto y la admiración de todo el pueblo: su comportamiento recatado, su discreción y su reputación intachable la convertían en un modelo de virtud femenina a los ojos de cualquiera que la observara desde fuera.

Lo que nadie sospechaba era que, tras esas dos reputaciones tan contrastantes, se escondía una realidad completamente invertida. Xkeban, pese al desprecio constante que recibía, dedicaba buena parte de su tiempo a cuidar en secreto a los enfermos que nadie más quería atender, alimentaba a los animales abandonados del pueblo y ayudaba discretamente a quien lo necesitara, sin buscar jamás reconocimiento ni agradecimiento por sus actos de generosidad silenciosa. Utz-Colel, por su parte, guardaba tras su fachada intachable un corazón frío y desdeñoso, incapaz de ofrecer verdadera ayuda a nadie que considerara indigno de su tiempo o su atención, negando auxilio a los mismos pobres y enfermos que Xkeban socorría sin condiciones.

Ambas mujeres murieron el mismo día, en circunstancias distintas pero casi simultáneas. Del humilde hogar de Xkeban comenzó a emanar, poco después de su muerte, un aroma dulce y extraordinario tan intenso que los vecinos, sorprendidos, no pudieron evitar acercarse a investigar su origen; al llegar a su tumba tiempo después, encontraron que de ella había brotado una flor blanca de fragancia inconfundible, conocida desde entonces como xtabentún, prueba silenciosa pero innegable de la bondad genuina que había habitado siempre en su corazón, invisible para quienes solo juzgaban su conducta superficial.

El funeral de Utz-Colel, en cambio, se convirtió en motivo de espanto: un hedor insoportable comenzó a emanar de su cuerpo casi de inmediato, desconcertando a un pueblo entero que esperaba honrar debidamente a la mujer más virtuosa que conocían. De su tumba brotó después un cactus de flor hermosa pero completamente carente de aroma, belleza vacía que reflejaba exactamente la naturaleza de su virtud pública sin sustancia real de compasión. Y fue el espíritu de Utz-Colel, según la versión más extendida de la leyenda, el que se transformó con el tiempo en la Xtabay, la seductora nocturna de cabello suelto que hasta hoy aparece junto a los ceibos yucatecos, atrayendo con su belleza a los hombres solitarios que caminan de noche por los senderos apartados, para revelarles, demasiado tarde, la misma frialdad vacía que había ocultado durante toda su vida.`,
    personajes: [['xkeban', 'protagonista'], ['utz-colel', 'protagonista'], ['xtabay', 'protagonista']]
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
  console.log('Sembrando historias de Mitologia Maya (parte 2)...\n');
  const libroId = await obtenerLibroId();
  await sembrarHistorias(libroId);
  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
