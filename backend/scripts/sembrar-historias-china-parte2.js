// ============================================================
// scripts/sembrar-historias-china-parte2.js
// ------------------------------------------------------------
// Segundo y ultimo lote de historias de Mitologia China (9 de
// 18): Sun Wukong, los amantes trágicos (Jing Wei, Kuafu, la
// Serpiente Blanca, la Tejedora) y las leyendas legendario-
// historicas (Meng Jiangnü, Xu Fu, Dong Yong, Bao Zheng).
// Contenido ya extenso desde el inicio. Idempotente via
// slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-historias-china-parte2.js
// ============================================================

const pool = require('../config/db');

const HISTORIAS = [
  {
    slug: 'sun-wukong-y-el-caos-en-el-cielo', titulo: 'Sun Wukong y el caos en el cielo', tipo: 'heroica', periodo: 'Antes del Viaje al Oeste', es_preview: 1,
    resumen: 'El Rey Mono se proclama "Gran Sabio Igual al Cielo", devora los melocotones de la inmortalidad y derrota a los ejércitos celestiales — hasta que Buda lo atrapa bajo una montaña durante quinientos años.',
    texto_completo: `Sun Wukong, nacido de una roca mágica y coronado rey de los monos de la Montaña de las Flores y Frutas, había alcanzado tras años de entrenamiento con un maestro taoísta setenta y dos transformaciones distintas, una fuerza descomunal, y la posesión del báculo mágico Ruyi Jingu Bang, robado del fondo del mar y capaz de cambiar de tamaño a voluntad desde una aguja diminuta hasta una columna colosal. Convencido de su propio poder ilimitado, Sun Wukong descendió incluso hasta el inframundo y, encontrando su nombre inscrito en el Libro de la Vida y la Muerte, lo borró por completo junto al de todos los demás monos de su reino, declarándose a sí mismo libre de la muerte por decreto propio.

Sus hazañas cada vez más audaces llegaron finalmente a oídos del Emperador de Jade, que decidió, en lugar de castigarlo de inmediato, ofrecerle un cargo menor en la corte celestial con la esperanza de apaciguarlo mediante honores formales. Sun Wukong aceptó el puesto de "Guardián de los Establos Celestiales", pero al descubrir que se trataba en realidad de una posición de rango ínfimo dentro de la jerarquía celestial, se sintió profundamente insultado y se rebeló, proclamándose a sí mismo "Gran Sabio Igual al Cielo", un título que él mismo se otorgó sin autorización de nadie más.

El conflicto escaló todavía más cuando Sun Wukong, sin invitación alguna, irrumpió en el banquete anual de melocotones de la inmortalidad organizado por Xi Wangmu, devorando los frutos sagrados antes de que estuvieran destinados a ser compartidos con los inmortales invitados formalmente. No conforme con eso, robó también el elixir de la inmortalidad personal de Laozi, el sabio filósofo deificado, consolidando así un poder que ya rivalizaba abiertamente con el de los propios dioses del cielo.

El Emperador de Jade, ya sin ninguna paciencia disponible, envió ejército tras ejército de guerreros celestiales para capturar al Rey Mono rebelde, pero Sun Wukong, gracias a su fuerza, su velocidad y sus setenta y dos transformaciones, derrotó a cada oleada de atacantes sin dificultad aparente, sembrando el caos por todo el reino celestial. Solo cuando el Emperador de Jade convocó finalmente a Erlang Shen, el único dios con un tercer ojo capaz de percibir cualquier disfraz mágico, comenzó a cambiar el curso de la batalla: ambos guerreros libraron un combate extenso de transformaciones constantes, cada uno cambiando de forma una y otra vez para sorprender al otro, hasta que Laozi, furioso por el robo de su elixir, intervino arrojando su anillo diamantino contra Sun Wukong, aturdiéndolo lo suficiente como para que Erlang Shen finalmente lograra capturarlo.

Los dioses intentaron ejecutar a Sun Wukong de todas las maneras imaginables —fuego, rayos, espadas— sin ningún resultado, ya que su cuerpo, fortalecido por los melocotones y el elixir robados, había vuelto prácticamente indestructible. Fue finalmente Buda en persona quien intervino, desafiando a Sun Wukong a saltar fuera de la palma de su propia mano; el Rey Mono, confiado en su velocidad de vuelo, saltó una distancia que le pareció enorme, llegando hasta lo que creyó ser el límite del universo, marcado por cinco pilares gigantescos donde dejó su firma como prueba de haber llegado hasta ahí. Al regresar triunfante, Buda le reveló que esos cinco pilares no eran más que los cinco dedos de su propia mano, y que Sun Wukong jamás había abandonado su palma. Como castigo por su soberbia desmedida, Buda lo atrapó bajo una montaña de piedra, donde permanecería inmóvil durante quinientos años completos, hasta que finalmente sería liberado por el monje Tang Sanzang a cambio de convertirse en su discípulo leal y protector durante la larga peregrinación hacia la India.`,
    personajes: [['sun-wukong', 'protagonista'], ['erlang-shen', 'antagonista'], ['xi-wangmu', 'mencionado']]
  },
  {
    slug: 'jing-wei-rellena-el-mar', titulo: 'Jing Wei rellena el mar', tipo: 'tragedia', periodo: 'Tradición mítica, sin fecha fija', es_preview: 0,
    resumen: 'Ahogada de joven en el Mar Oriental, la hija del Emperador del Sol se transforma en un pequeño pájaro que, cada día sin descanso, arroja piedras y ramas al agua decidida a rellenar el mar entero.',
    texto_completo: `La joven Nüwa —una figura distinta de la diosa creadora del mismo nombre, aunque comparten esa coincidencia onomástica en las fuentes antiguas— era hija del Emperador del Sol Yandi, uno de los grandes soberanos legendarios venerados como ancestro directo de la civilización agrícola china. Curiosa y aventurera por naturaleza, disfrutaba de navegar en pequeñas embarcaciones a lo largo de la costa del Mar Oriental, fascinada por la inmensidad del agua que se extendía hasta perderse completamente de vista en el horizonte.

Un día, mientras navegaba como de costumbre, una tormenta repentina y violenta se levantó sin previo aviso, agitando el mar con una furia que su pequeña embarcación no estaba en absoluto preparada para resistir. Las olas la sorprendieron sin darle tiempo alguno para regresar a tierra firme, y la joven se ahogó entre las aguas turbulentas del mismo mar que tanto había amado explorar, sin que nadie pudiera acudir a tiempo en su auxilio.

Pero su espíritu, en lugar de simplemente disolverse tras la muerte como ocurre con la mayoría de los mortales, se transformó en un pequeño pájaro de cabeza jaspeada con motivos blancos, pico completamente blanco, y patas de un rojo intenso, un ave que adoptó el nombre de Jing Wei, imitando directamente en ese nombre el sonido de su propio canto característico al volar sobre las aguas que la habían matado. Lejos de sentir simplemente tristeza o resignación ante su propia muerte prematura, Jing Wei sintió una furia profunda e inextinguible hacia el mismo Mar Oriental que la había arrebatado tan joven, y juró vengarse de la única manera que su nueva y diminuta forma le permitía imaginar.

Cada día, sin excepción alguna, Jing Wei vuela hasta las montañas más cercanas a la costa, recoge cuidadosamente en su pequeño pico piedras diminutas y ramitas secas, y regresa volando hasta el borde del Mar Oriental para dejarlas caer, una tras otra, en sus aguas extensas, decidida con una obstinación absoluta a rellenar el mar entero hasta que este deje de existir como amenaza mortal para cualquier otro ser que se atreva a navegarlo. La tarea, evidentemente, resulta completamente desproporcionada frente a la inmensidad real del océano que pretende llenar: ni una vida entera, ni muchas vidas sucesivas de su propia descendencia según algunas versiones ampliadas del mito, bastarían jamás para completar semejante empresa con piedras y ramas transportadas una por una en el pico de un pájaro diminuto.

Pese a la evidente imposibilidad práctica de su objetivo, Jing Wei jamás abandona su tarea diaria, repitiendo el mismo gesto decidido cada mañana sin importar cuántos siglos hayan pasado ya desde que comenzó. Su historia se convirtió, con el tiempo, en una de las metáforas más citadas y persistentes de toda la lengua china para describir la determinación inquebrantable frente a un objetivo aparentemente inalcanzable —la expresión "Jing Wei rellena el mar" se sigue usando hasta hoy en chino para elogiar a cualquier persona que persevera incansablemente en una causa que otros considerarían ya perdida de antemano.`,
    personajes: [['jing-wei', 'protagonista']]
  },
  {
    slug: 'kuafu-persigue-al-sol', titulo: 'Kuafu persigue al sol', tipo: 'tragedia', periodo: 'Tradición mítica, sin fecha fija', es_preview: 0,
    resumen: 'Un gigante desafía al sol a una carrera alrededor del mundo, y muere de sed justo antes de alcanzarlo — su bastón abandonado se transforma en un bosque de melocotoneros para los viajeros futuros.',
    texto_completo: `Kuafu era un gigante descendiente de una antigua estirpe de titanes primordiales, dotado de una fuerza y una ambición tan desmedidas que ninguna hazaña convencional lograba satisfacer del todo su deseo constante de demostrar una superioridad indiscutible sobre el resto del mundo natural que lo rodeaba. Un día, contemplando el recorrido diario del sol a través del cielo, Kuafu concibió una idea que a cualquier otro ser le habría parecido una locura evidente: correr más rápido que el propio astro, siguiéndolo en una carrera completa alrededor del mundo entero hasta demostrar de una vez por todas que ni siquiera el sol podía escapar de su alcance.

Armado únicamente con un enorme bastón de madera como apoyo para sus zancadas gigantescas, Kuafu emprendió la persecución con una determinación feroz, corriendo desde el amanecer con una velocidad que, sorprendentemente, comenzó a acercarlo cada vez más al astro que perseguía. Con cada hora que pasaba, la distancia entre Kuafu y el sol se reducía progresivamente, alimentando en el gigante una confianza cada vez mayor de que finalmente lograría lo que parecía completamente imposible: alcanzar y superar al propio sol en su recorrido diario por el firmamento.

Pero esa misma cercanía creciente con el astro solar trajo consigo un problema que Kuafu no había anticipado con suficiente cuidado: el calor abrasador de tener al sol cada vez más cerca comenzó a consumir su energía a un ritmo alarmante, y una sed insoportable se apoderó de él con una intensidad que ningún esfuerzo de voluntad lograba aplacar. Desesperado por el calor y la deshidratación crecientes, pero todavía decidido a no abandonar su carrera cuando estaba tan cerca de alcanzar su objetivo, Kuafu se detuvo brevemente junto al Río Amarillo y bebió todo su curso completo de agua en un solo trago descomunal, sin lograr saciar del todo su sed extrema.

Todavía sediento pese a haber consumido un río entero, Kuafu bebió después también las aguas completas del río Wei, con el mismo resultado insuficiente. Consciente de que necesitaba encontrar una fuente de agua todavía mayor antes de continuar su persecución, emprendió una carrera desesperada hacia un gran lago situado en las regiones del norte, del que había oído hablar por su tamaño extraordinario. Pero el camino resultó ser demasiado largo para su cuerpo ya completamente agotado y deshidratado: Kuafu murió de sed en algún punto del trayecto, sin haber logrado ni alcanzar al sol que perseguía ni llegar hasta el lago que podría haberlo salvado.

En el instante final de su muerte, Kuafu dejó caer el enorme bastón de madera que lo había acompañado durante toda la carrera, y ese bastón, según cuenta la leyenda, se transformó al tocar el suelo en un vasto y frondoso bosque de melocotoneros, extendido a lo largo de kilómetros enteros del territorio donde había caído. Aunque Kuafu jamás logró completar su ambiciosa carrera contra el astro solar, ese bosque nacido de su propio bastón se convirtió en un regalo final e involuntario para todos los viajeros futuros que atravesaran esa misma región: gracias a sus frutos abundantes, jamás tendrían que enfrentar la misma sed devastadora que había terminado, en última instancia, con la vida del gigante que tanto se había atrevido a desafiar.`,
    personajes: [['kuafu', 'protagonista']]
  },
  {
    slug: 'la-leyenda-de-la-serpiente-blanca', titulo: 'La leyenda de la serpiente blanca', tipo: 'amor', periodo: 'Dinastía Song', es_preview: 1,
    resumen: 'Un espíritu serpiente que alcanzó forma humana tras mil años de cultivo espiritual se enamora de un joven mortal — un monje budista, convencido de que su unión desafía el orden natural, hará todo lo posible por separarlos.',
    texto_completo: `Bai Suzhen había sido, durante más de mil años, una serpiente blanca dedicada por completo a la meditación y la práctica espiritual disciplinada en las montañas más remotas, acumulando con esa dedicación constante un poder espiritual extraordinario que finalmente le permitió transformarse en una hermosa mujer humana, capaz de caminar entre mortales sin que nadie sospechara su verdadera naturaleza serpentina original. Acompañada de su fiel sirvienta Xiaoqing, otro espíritu transformado —esta vez de una serpiente verde—, Bai Suzhen decidió instalarse en la ciudad de Hangzhou, junto al célebre Lago del Oeste.

Durante un paseo bajo la lluvia cerca del lago, Bai Suzhen conoció a Xu Xian, un joven y modesto boticario de carácter amable y honesto, y ambos sintieron una atracción inmediata que se convirtió, con el paso de las semanas, en un amor profundo y sincero. Se casaron poco después, sin que Xu Xian tuviera la menor sospecha de que su nueva esposa no era completamente humana, y juntos abrieron una farmacia que pronto se hizo célebre en toda la región por la calidad excepcional de sus remedios, muchos de ellos basados en el conocimiento herbolario ancestral que Bai Suzhen había acumulado durante su siglo de vida como serpiente.

Su felicidad, sin embargo, atrajo pronto la atención de Fahai, un monje budista de gran poder espiritual que percibió de inmediato, con su capacidad entrenada para detectar espíritus no humanos, la verdadera naturaleza serpentina oculta tras la apariencia perfectamente humana de Bai Suzhen. Convencido de que la unión entre un mortal y un espíritu no humano representaba una transgresión inaceptable del orden natural del cosmos, sin importar cuán genuino fuera el amor entre ambos, Fahai se propuso separar a la pareja a cualquier costo, advirtiendo repetidamente a Xu Xian sobre el peligro que corría sin que este, enamorado y confiado, le prestara atención alguna.

Durante el Festival del Bote del Dragón, una festividad en la que era costumbre beber un vino especial con propiedades consideradas protectoras contra los espíritus malignos, Fahai convenció a Xu Xian de convencer a su esposa de beber también, sin que este supiera que ese vino específico tenía el poder de forzar la revelación de la verdadera forma de cualquier criatura no humana. Bai Suzhen, atrapada entre no beber y levantar sospechas, o beber y arriesgarse a la revelación, terminó bebiendo por amor a su esposo, y su cuerpo se transformó brevemente de vuelta a su forma serpentina original justo ante los ojos de Xu Xian, que, presa del terror ante lo que presenció, murió del susto en el acto.

Devastada por la pérdida de su esposo, Bai Suzhen emprendió un viaje peligroso hasta una montaña sagrada custodiada por una grulla y un ciervo divinos, donde logró robar, tras una batalla considerable, un hongo mágico capaz de devolver la vida a los muertos, y consiguió revivir exitosamente a Xu Xian. Pero Fahai, lejos de darse por vencido, capturó finalmente a Bai Suzhen mediante un engaño elaborado y la encerró bajo la Pagoda Leifeng, condenándola a una separación forzosa de su esposo y del hijo que ambos habían tenido juntos. Según las versiones más benévolas de esta historia, transmitida y adaptada durante siglos en la ópera y el teatro popular chinos, fue precisamente ese hijo, ya convertido en adulto exitoso tras aprobar los exámenes imperiales, quien finalmente logró liberar a su madre de la pagoda, reuniendo por fin a la familia completa después de años de separación forzada.`,
    personajes: [['bai-suzhen', 'protagonista']]
  },
  {
    slug: 'la-tejedora-y-el-pastor-de-bueyes', titulo: 'La tejedora y el pastor de bueyes', tipo: 'amor', periodo: 'Tradición mítica, origen del festival Qixi', es_preview: 1,
    resumen: 'Una princesa celestial que teje las nubes se enamora de un pastor mortal — separados para siempre por un río de estrellas trazado por la Reina Madre, solo pueden reunirse una noche al año sobre un puente de urracas.',
    texto_completo: `Zhinu era una princesa celestial, hija de la Reina Madre de Occidente, encargada junto a sus hermanas de tejer con hilos de seda celestial las nubes multicolores que decoran el cielo, una labor delicada que realizaba habitualmente en las orillas del Río Plateado, la franja luminosa de estrellas que los mortales conocen como Vía Láctea. Su vida celestial, aunque cómoda y ordenada, transcurría con una monotonía que a veces la hacía anhelar, sin saberlo del todo conscientemente, alguna forma de experiencia distinta a la rutina fija de su tejido eterno.

En la tierra, un joven huérfano llamado Niulang vivía una existencia mucho más humilde, maltratado por su hermano mayor y su cuñada tras la muerte de sus padres, con un viejo buey como única compañía y sustento verdadero. Ese buey, sin que Niulang lo supiera al principio, era en realidad una estrella caída del cielo, transformada en animal como castigo por una falta cometida en su vida celestial anterior, y agradecido por los cuidados constantes y genuinos que Niulang le había ofrecido durante años, el buey decidió finalmente revelarle un secreto crucial: un grupo de doncellas celestiales, entre ellas la propia Zhinu, descendería pronto a bañarse en un lago cercano, y si Niulang lograba esconder las ropas celestiales de la más hermosa de ellas, esta se vería obligada a permanecer en la tierra hasta que él decidiera devolvérselas.

Niulang siguió el consejo de su buey, y Zhinu, incapaz de regresar al cielo sin sus prendas celestiales, terminó quedándose en la tierra el tiempo suficiente para conocer verdaderamente a Niulang, descubriendo en él una honestidad y una bondad genuina que contrastaban favorablemente con la rigidez formal de su vida celestial anterior. Ambos se enamoraron profundamente y se casaron, formando una familia feliz durante varios años y teniendo dos hijos juntos, viviendo una existencia sencilla pero plena que ninguno de los dos cambiaría por nada del mundo.

La felicidad de la pareja, sin embargo, no podía permanecer oculta indefinidamente: cuando la Reina Madre de Occidente descubrió finalmente que su propia hija se había casado con un simple mortal, contraviniendo abiertamente el orden establecido entre el mundo celestial y el terrenal, descendió personalmente furiosa para poner fin a la unión, arrastrando a Zhinu de regreso al cielo sin darle oportunidad siquiera de despedirse apropiadamente. Cuando Niulang, desesperado, intentó seguirla usando la piel del buey ya fallecido —que le permitía volar, según el último consejo que este le había dejado antes de morir—, la Reina Madre trazó con un solo movimiento de su horquilla dorada una línea ancha en el cielo que se convirtió instantáneamente en el Río Plateado, separando para siempre a los dos amantes en orillas opuestas e infranqueables.

Conmovida finalmente, aunque tardíamente, por el dolor inconsolable de ambos y por el llanto constante de sus dos nietos, la Reina Madre accedió a permitirles un único reencuentro anual: cada séptimo día del séptimo mes lunar, una bandada completa de urracas se reúne voluntariamente para formar con sus propios cuerpos un puente viviente sobre el ancho río de estrellas, permitiendo a Zhinu y Niulang cruzar y reunirse por una sola noche completa antes de separarse nuevamente durante otro año entero. Ese encuentro anual dio origen al festival Qixi, celebrado hasta hoy en toda la cultura china como el equivalente local al Día de los Enamorados, cuando las parejas jóvenes contemplan juntas el cielo nocturno recordando la historia de amor que ni siquiera un río entero de estrellas logró extinguir por completo.`,
    personajes: [['zhinu', 'protagonista'], ['niulang', 'protagonista'], ['xi-wangmu', 'antagonista']]
  },
  {
    slug: 'meng-jiangnu-y-la-gran-muralla', titulo: 'Meng Jiangnü y la Gran Muralla', tipo: 'tragedia', periodo: 'Dinastía Qin', es_preview: 1,
    resumen: 'Al descubrir que su esposo, reclutado por la fuerza para construir la Gran Muralla, ha muerto de agotamiento, Meng Jiangnü llora con tal desconsuelo que una sección entera de la construcción se derrumba.',
    texto_completo: `Meng Jiangnü se había casado apenas unos días antes con Fan Qiliang, un joven de carácter gentil que había estado escondiéndose de las autoridades imperiales tras huir de un reclutamiento forzoso anterior. Su matrimonio, celebrado con la alegría propia de una pareja recién unida, se vio interrumpido casi de inmediato: soldados del primer emperador Qin Shi Huang descubrieron el escondite de Fan Qiliang y lo llevaron por la fuerza para sumarlo, junto a cientos de miles de otros hombres reclutados de manera similar en todo el imperio, a la construcción monumental de la Gran Muralla que el emperador había ordenado levantar a lo largo de la frontera norte del territorio chino.

Los meses pasaron sin que Meng Jiangnü recibiera ninguna noticia de su esposo, una ausencia de comunicación habitual dado lo remoto y aislado del sitio de construcción y el control estricto que las autoridades imperiales mantenían sobre cualquier información relacionada con el proyecto. Cuando el invierno llegó con todo su rigor, Meng Jiangnü, profundamente preocupada por cómo su esposo estaría enfrentando el frío extremo sin la ropa de abrigo adecuada, decidió confeccionar personalmente prendas gruesas y abrigadas, y emprender ella misma el largo y peligroso viaje hasta el remoto lugar de construcción para entregárselas en persona.

El trayecto resultó extraordinariamente arduo, atravesando terrenos hostiles y climas cada vez más severos conforme se acercaba a la frontera norte, pero Meng Jiangnü perseveró sin descanso, sostenida únicamente por la esperanza de reencontrarse pronto con su esposo. Al llegar finalmente al sitio de construcción tras semanas de viaje ininterrumpido, la noticia que recibió resultó devastadora más allá de cualquier temor que hubiera podido anticipar durante el trayecto: Fan Qiliang había muerto meses atrás, consumido por el agotamiento extremo, el hambre y el frío brutal de las condiciones de trabajo forzado, exactamente como tantos otros miles de obreros reclutados de la misma manera. Peor aún, su cuerpo, como el de la mayoría de los trabajadores fallecidos durante la construcción, había sido sepultado sin ninguna ceremonia digna directamente dentro de los propios cimientos de la muralla que estaba ayudando a construir, una práctica habitual pensada simplemente para no interrumpir el ritmo constante de la obra imperial.

Ante esta noticia devastadora, Meng Jiangnü se derrumbó junto a la base de la muralla y lloró con una intensidad y un desconsuelo tan profundos que su llanto se prolongó durante varios días completos sin ninguna interrupción, un dolor genuino y desbordante que parecía imposible de contener dentro de los límites normales del duelo humano. Según la leyenda, ese llanto resultó tan poderoso que provocó el derrumbe repentino de una sección entera de la Gran Muralla —varios kilómetros de longitud, según las versiones más dramáticas del relato—, dejando al descubierto entre los escombros los huesos de su esposo y de muchos otros obreros sepultados en el mismo lugar sin ceremonia alguna.

Con los restos finalmente localizados gracias a su propio dolor desbordado, Meng Jiangnü pudo al fin darle a Fan Qiliang la sepultura digna y respetuosa que las circunstancias originales de su muerte le habían negado por completo. Su historia se transmitió durante siglos como una de las leyendas más citadas del folclore popular chino, convertida en símbolo perdurable del sufrimiento silencioso del pueblo común bajo proyectos imperiales de escala monumental, y como testimonio del poder simbólico que un duelo genuino y desbordante puede llegar a tener incluso frente a la indiferencia más absoluta del poder político establecido.`,
    personajes: [['meng-jiangnu', 'protagonista']]
  },
  {
    slug: 'xu-fu-y-la-busqueda-del-elixir-de-la-inmortalidad', titulo: 'Xu Fu y la búsqueda del elixir de la inmortalidad', tipo: 'otro', periodo: 'Dinastía Qin, hacia el 210 a.C.', es_preview: 0,
    resumen: 'Obsesionado con evitar la muerte, el primer emperador de China financia dos expediciones masivas hacia tres montañas sagradas del mar oriental — la segunda desaparece por completo, sin dejar rastro alguno.',
    texto_completo: `Qin Shi Huang, el primer emperador de una China recién unificada bajo un único imperio centralizado, había alcanzado ya un poder político casi absoluto sobre un territorio de dimensiones sin precedentes en la historia china hasta ese momento, pero esa misma acumulación extraordinaria de poder pareció volverlo cada vez más obsesionado con un único problema irresoluble: su propia mortalidad inevitable, la certeza de que, tarde o temprano, incluso el gobernante más poderoso del mundo terminaría muriendo como cualquier otro ser humano ordinario.

En ese contexto de ansiedad imperial extrema, Xu Fu, un erudito y alquimista respetado dentro de la corte, se presentó ante el emperador con una propuesta extraordinaria: existían, según le aseguró con absoluta convicción, tres montañas sagradas flotando misteriosamente en algún punto del mar oriental —conocidas como Penglai, Fangzhang y Yingzhou—, habitadas por inmortales verdaderos que poseían el auténtico elixir capaz de conceder la vida eterna a cualquier mortal que lograra obtenerlo. Xu Fu se ofreció personalmente a liderar una expedición marítima para localizar esas montañas y negociar, o si fuera necesario obtener por cualquier otro medio, el elixir tan desesperadamente buscado.

Qin Shi Huang, entusiasmado ante la posibilidad real de escapar finalmente de la muerte, financió sin reservas una primera expedición masiva, dotada de barcos numerosos y bien equipados, provisiones abundantes para un viaje de duración incierta, y un séquito considerable de acompañantes seleccionados. Esta primera expedición regresó, sin embargo, sin haber logrado encontrar rastro alguno de las montañas prometidas, aunque Xu Fu explicó su fracaso alegando obstáculos sobrenaturales específicos —una criatura marina gigantesca que bloqueaba deliberadamente el paso hacia las islas sagradas— que, según él, requerían recursos adicionales considerables para poder superarse en un segundo intento.

El emperador, lejos de desconfiar del fracaso inicial, autorizó una segunda expedición todavía más ambiciosa que la primera, esta vez dotada, según las crónicas tradicionales, de varios miles de jóvenes doncellas y muchachos vírgenes destinados a ofrecerse como tributo especial a los inmortales de las montañas sagradas, además de artesanos especializados, semillas de cultivo variadas, y suministros suficientes para establecer, en caso necesario, un asentamiento permanente en cualquier tierra nueva que la expedición pudiera encontrar en su travesía.

Xu Fu partió con esa segunda y mucho más ambiciosa expedición hacia el año 210 antes de nuestra era, y jamás regresó a China: ni él, ni ninguno de los miles de acompañantes que lo habían seguido, ni ningún barco de la flota completa, volvieron a aparecer en ningún registro histórico oficial posterior, desapareciendo por completo del territorio chino como si el mar entero los hubiera engullido sin dejar el menor rastro. La ausencia total de cualquier explicación confirmada dio origen, con el paso de los siglos, a una leyenda popular extraordinariamente persistente, aunque nunca confirmada históricamente con evidencia sólida: que Xu Fu y su expedición completa habían llegado efectivamente a tierra firme en algún punto de las costas de Japón, estableciéndose de manera permanente en esa región y convirtiéndose, según algunas tradiciones locales japonesas desarrolladas siglos después, en una figura fundacional temprana todavía venerada hasta hoy en varios santuarios sintoístas de la costa japonesa que le atribuyen haber introducido conocimientos agrícolas y técnicos avanzados a las comunidades locales de esa época.`,
    personajes: [['xu-fu', 'protagonista']]
  },
  {
    slug: 'dong-yong-y-la-hada-tejedora', titulo: 'Dong Yong y la hada tejedora', tipo: 'amor', periodo: 'Dinastía Han', es_preview: 0,
    resumen: 'Un joven se vende como esclavo para pagar el funeral digno de su padre — conmovido por su piedad filial extrema, el cielo le envía a una hada tejedora capaz de saldar su deuda en una sola noche de trabajo.',
    texto_completo: `Dong Yong quedó huérfano de madre siendo todavía muy pequeño, y dedicó prácticamente toda su infancia y juventud al cuidado constante de su padre, cuya salud se fue deteriorando progresivamente con el paso de los años hasta el punto de necesitar atención casi permanente. Dong Yong, lejos de sentir esa responsabilidad como una carga insoportable, la asumió con una devoción extraordinaria: se dice que llegó a cargar a su propio padre sobre la espalda mientras trabajaba el campo, negándose a dejarlo solo en casa incluso durante las largas jornadas agrícolas necesarias para sostener económicamente a ambos.

Cuando su padre finalmente murió, Dong Yong se encontró con un problema desgarrador: según las estrictas normas de piedad filial tan profundamente arraigadas en la sociedad china tradicional, honrar apropiadamente a un padre fallecido con un funeral digno era una de las obligaciones morales más sagradas que un hijo podía cumplir, pero Dong Yong, tras años dedicados enteramente al cuidado paterno en lugar de acumular riqueza propia, carecía por completo de los recursos económicos necesarios para costear siquiera un funeral modesto. Enfrentado a esta imposibilidad, Dong Yong tomó una decisión extrema que pocos hombres en su situación habrían considerado siquiera: se vendió a sí mismo como esclavo a un terrateniente adinerado de la región, a cambio del dinero suficiente para sepultar a su padre con la dignidad y el respeto que consideraba que merecía.

Esta muestra de devoción filial tan extraordinaria y sacrificada no pasó desapercibida para las fuerzas celestiales que, según la creencia popular china, observaban constantemente la conducta moral de los mortales desde el cielo. Conmovida por un sacrificio tan puro, la Reina Madre de Occidente decidió enviar a una de sus hijas celestiales —identificada en algunas versiones del relato directamente con Zhinu, la princesa tejedora, aunque se trata de una tradición distinta y paralela a la leyenda más conocida sobre su amor con Niulang— a descender temporalmente a la tierra disfrazada de mujer mortal común, con instrucciones específicas de casarse con Dong Yong y ayudarlo a liberarse de su condición de esclavitud antes de que esta pudiera prolongarse durante años enteros.

La hada tejedora celestial, ya convertida en esposa terrenal de Dong Yong, reveló entonces una habilidad que ningún tejedor o tejedora mortal podría jamás igualar: trabajando durante una sola noche completa sin descanso alguno, produjo en el telar una cantidad extraordinaria de tela de seda extremadamente fina, una cantidad que a cualquier artesana humana experimentada le habría tomado varios meses completos de trabajo diario producir con la misma calidad. Esa tela, vendida al día siguiente en el mercado local a un precio considerable dada su calidad excepcional, proporcionó a Dong Yong el dinero exacto necesario para pagar su libertad de manera casi inmediata, muchísimo antes del plazo original que su contrato de servidumbre había establecido.

Con su misión celestial específica ya cumplida por completo, la hada tejedora debió regresar entonces a su morada original en el cielo, dejando a Dong Yong con el recuerdo imborrable de una unión breve pero profundamente transformadora, que había sido el resultado directo de su propia devoción filial extraordinaria. La historia de ambos, conocida popularmente como Tian Xian Pei, "el emparejamiento del hada celestial", se convirtió con el tiempo en una de las óperas tradicionales chinas más representadas y queridas de todos los tiempos, celebrada tanto por su historia de amor breve como por el mensaje moral que transmite sobre la piedad filial como virtud capaz de mover incluso a las fuerzas celestiales más elevadas.`,
    personajes: [['dong-yong', 'protagonista'], ['zhinu', 'mencionado']]
  },
  {
    slug: 'bao-zheng-el-juez-que-juzga-a-vivos-y-muertos', titulo: 'Bao Zheng, el juez que juzga a vivos y muertos', tipo: 'otro', periodo: 'Dinastía Song', es_preview: 1,
    resumen: 'Un magistrado tan incorruptible que ni el propio emperador logra intimidarlo, capaz según la leyenda de viajar de noche hasta el inframundo para juzgar casos que involucran tanto a espíritus como a vivos.',
    texto_completo: `Bao Zheng ejerció como magistrado durante la dinastía Song, ganándose desde muy pronto en su carrera una reputación extraordinaria de honestidad absoluta e incorruptibilidad total, cualidades excepcionalmente raras dentro de una burocracia imperial frecuentemente marcada por el favoritismo, el soborno sistemático y la manipulación política de la justicia en favor de quien tuviera más poder o riqueza disponible para influir en cualquier decisión judicial. Bao Zheng, en contraste absoluto con esa práctica habitual, juzgaba cada caso presentado ante él con el mismo rigor implacable sin importar quién estuviera involucrado, fuera un campesino humilde o el noble más poderoso e influyente de toda la corte imperial.

Su fama de severidad incorruptible le ganó el sobrenombre popular de "Cara de Hierro", en referencia directa a un semblante tan serio e inflexible que ningún intento de presión, soborno o amenaza lograba jamás alterar su determinación de aplicar la justicia exactamente donde correspondía, sin excepciones ni favoritismos de ningún tipo. Se cuentan numerosas anécdotas, algunas históricamente documentadas y otras ya claramente legendarias desarrolladas después de su muerte, sobre casos en los que Bao Zheng se atrevió a juzgar y condenar incluso a parientes cercanos del propio emperador, algo que ningún otro magistrado de su época se habría atrevido siquiera a considerar por miedo a las consecuencias personales devastadoras que semejante decisión podría acarrearle.

Con el paso de las generaciones posteriores a su muerte, la figura histórica real de Bao Zheng se transformó gradualmente en una leyenda popular de proporciones casi sobrenaturales, conocida cariñosamente en todo el folclore chino como Bao Gong, "el señor Bao". Las historias desarrolladas en su honor le atribuyen poderes de percepción prácticamente infalibles, capaces de detectar la mentira más elaborada y convincente oculta tras el testimonio más cuidadosamente preparado, resolviendo casos que cualquier otro juez humano habría considerado completamente irresolubles ante la falta de pruebas concluyentes disponibles.

La expansión más extraordinaria de su leyenda sostiene que Bao Zheng poseía la capacidad única de viajar durante la noche, mientras su cuerpo permanecía dormido, hasta el propio inframundo gobernado por Yan Wang y los demás jueces de las diez cortes infernales, donde presidía personalmente juicios que involucraban tanto a espíritus de personas ya fallecidas como a vivos cuyas acciones habían provocado consecuencias que se extendían más allá de los límites normales del mundo terrenal, convirtiéndolo así en el único magistrado con jurisdicción reconocida simultáneamente en ambos reinos, el de los vivos y el de los muertos. Su marca distintiva más reconocible en toda la iconografía popular desarrollada en su honor es una media luna pálida tatuada permanentemente en el centro de su frente, símbolo visual de su capacidad única para iluminar la verdad más oculta incluso en medio de la oscuridad más completa e impenetrable. Su figura sigue siendo hasta hoy protagonista habitual y extraordinariamente popular de series de televisión, óperas tradicionales y novelas contemporáneas en toda China, símbolo perdurable y todavía profundamente admirado de la justicia genuinamente incorruptible frente a cualquier forma de poder o presión externa.`,
    personajes: [['bao-zheng', 'protagonista'], ['yan-wang', 'mencionado']]
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-china'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-china" -- créalo primero.');
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
  console.log('Sembrando historias de Mitologia China (parte 2)...\n');
  const libroId = await obtenerLibroId();
  await sembrarHistorias(libroId);
  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
