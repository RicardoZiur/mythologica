// ============================================================
// scripts/sembrar-historias-china-parte1.js
// ------------------------------------------------------------
// Primer lote de historias de Mitologia China (9 de 18): la
// cosmogonia (Pangu, Nuwa, Gonggong, Fuxi) y el ciclo de heroes
// fundacionales (Houyi, Chang'e, Yu el Grande, Huangdi, Nezha).
// Contenido ya extenso desde el inicio. Idempotente via
// slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-historias-china-parte1.js
// ============================================================

const pool = require('../config/db');

const HISTORIAS = [
  {
    slug: 'pangu-y-la-creacion-del-mundo', titulo: 'Pangu y la creación del mundo', tipo: 'cosmogonia', periodo: 'Antes del tiempo', es_preview: 1,
    resumen: 'Un gigante primordial rompe el huevo cósmico que lo contiene y separa el cielo de la tierra durante dieciocho mil años, hasta que su propio cuerpo, al morir, se transforma en cada elemento del mundo.',
    texto_completo: `Antes de que existiera cualquier forma reconocible de mundo, el universo entero estaba contenido dentro de un huevo cósmico oscuro y silencioso, donde las fuerzas del yin y el yang —lo pesado y lo ligero, lo oscuro y lo claro— permanecían completamente mezcladas sin ninguna distinción posible entre ellas. Dentro de ese huevo dormía Pangu, un ser gigantesco que había ido tomando forma lentamente a partir del propio caos primordial, y que permaneció en ese sueño profundo durante dieciocho mil años completos, creciendo poco a poco en la oscuridad sin que nada perturbara su descanso.

Cuando finalmente despertó, Pangu sintió una opresión insoportable a su alrededor, la sensación asfixiante de estar atrapado dentro de un espacio demasiado pequeño para su propio tamaño ya colosal. Tomó entonces un hacha enorme que había crecido junto a él dentro del huevo y, con un solo golpe descomunal, rompió la cáscara que lo envolvía. En el instante exacto en que el huevo se abrió, las partes ligeras y claras que formaban el yang comenzaron a ascender lentamente, formando el cielo; mientras que las partes pesadas y turbias del yin descendieron hacia abajo, formando la tierra.

Pero el cielo y la tierra, recién separados, amenazaban con volver a fundirse en cuanto Pangu se descuidara, así que el gigante se colocó de pie exactamente entre ambos, empujando el cielo hacia arriba con sus manos extendidas y presionando la tierra hacia abajo con sus pies firmemente plantados. Cada día que pasaba, el cielo se alejaba un poco más de la tierra, y Pangu, sin dejar nunca de sostener ambos extremos, crecía exactamente al mismo ritmo, un poco cada día, para no perder nunca el contacto necesario con ninguno de los dos. Este proceso se repitió durante otros dieciocho mil años completos, hasta que la distancia entre el cielo y la tierra quedó fija de manera permanente, lo bastante amplia como para que ninguno de los dos volviera jamás a colapsar sobre el otro.

Agotado por completo tras un esfuerzo que se había extendido durante treinta y seis mil años en total, Pangu finalmente murió. Pero su muerte no significó el fin de su existencia: su cuerpo entero se transformó, pieza por pieza, en cada elemento fundamental del mundo que hasta entonces solo había sostenido con su propio esfuerzo físico. Su aliento final se convirtió en el viento y las nubes que recorren el cielo; su voz, en el sonido del trueno; sus dos ojos, en el sol y la luna que iluminan el mundo por turnos; su sangre, en los ríos y mares que recorren la tierra; sus músculos, en las llanuras fértiles; sus huesos, en las montañas y las rocas; y hasta los pequeños parásitos que habían vivido sobre su piel durante toda su existencia se transformaron, según algunas versiones del mito, en los primeros seres humanos que poblarían ese mundo recién completado —un origen literal y directo entre el propio cuerpo del gigante primordial y cada elemento visible del mundo que sus descendientes habitarían después.`,
    personajes: [['pangu', 'protagonista']]
  },
  {
    slug: 'nuwa-crea-a-la-humanidad', titulo: 'Nüwa crea a la humanidad', tipo: 'cosmogonia', periodo: 'Tras la separación del cielo y la tierra', es_preview: 1,
    resumen: 'Sola en un mundo recién formado, la diosa serpiente Nüwa moldea a los primeros humanos con barro amarillo — y, agotada, termina salpicando lodo para crear al resto de la humanidad más rápido.',
    texto_completo: `Tras la muerte de Pangu y la transformación completa de su cuerpo en los elementos del mundo, la tierra recién formada quedó poblada de montañas, ríos, plantas y animales de toda clase, pero completamente vacía de cualquier ser capaz de contemplar conscientemente esa belleza recién creada o de reconocer con gratitud el sacrificio que la había hecho posible. Nüwa, la diosa de rostro humano y cuerpo de serpiente que recorría ese paisaje todavía silencioso, sintió una soledad profunda ante tanta belleza sin testigos capaces de apreciarla del todo.

Decidida a remediar esa ausencia, Nüwa se arrodilló junto a la orilla de un río y tomó un puñado de barro amarillo, moldeándolo con extremo cuidado hasta darle una forma similar a la suya propia, aunque sin cola de serpiente: dos piernas, dos brazos, un rostro capaz de expresar emociones. Cuando terminó la primera figura, sopló sobre ella su propio aliento divino, y la figura de barro cobró vida al instante, poniéndose de pie y caminando con evidente alegría ante su propia existencia recién estrenada. Encantada con el resultado, Nüwa continuó moldeando una figura tras otra, cada una ligeramente distinta de la anterior, poblando poco a poco el paisaje vacío con las risas y las voces de sus nuevas criaturas.

El proceso, sin embargo, resultaba extremadamente lento: moldear cada figura individual con el cuidado necesario para lograr un resultado satisfactorio le tomaba a Nüwa un tiempo considerable, y la tierra entera todavía parecía demasiado vasta y vacía en comparación con el puñado de humanos que había logrado crear hasta ese momento. Agotada pero decidida a completar su tarea, Nüwa ideó un método mucho más rápido: sumergió una cuerda larga en el barro espeso del río y la agitó con fuerza en el aire, salpicando gotas de lodo por todas partes; cada gota que caía al suelo se transformaba también en un nuevo ser humano, aunque con una forma ligeramente menos perfecta y refinada que las figuras moldeadas cuidadosamente a mano.

Según una interpretación popular muy extendida de este episodio, los seres humanos moldeados directamente por las propias manos de Nüwa se convirtieron en los nobles y los gobernantes de las generaciones futuras, mientras que aquellos nacidos de las salpicaduras de la cuerda se convirtieron en el resto del pueblo común —una explicación mítica temprana, según algunos estudiosos, sobre el origen de la desigualdad social entre distintas clases dentro de la civilización china. Satisfecha finalmente con la humanidad completa que había logrado crear, Nüwa estableció además las reglas del matrimonio para que sus nuevas criaturas pudieran reproducirse por sí mismas, liberándola a ella de la necesidad de seguir moldeando cada nueva generación una por una.`,
    personajes: [['nuwa', 'protagonista'], ['pangu', 'mencionado']]
  },
  {
    slug: 'gonggong-y-la-inclinacion-del-cielo', titulo: 'Gonggong y la inclinación del cielo', tipo: 'tragedia', periodo: 'Tras la creación de la humanidad', es_preview: 1,
    resumen: 'Derrotado en una guerra divina, el furioso dios de las aguas Gonggong embiste con la cabeza uno de los pilares que sostienen el cielo — obligando a Nüwa a fundir piedras de cinco colores para remendar el firmamento roto.',
    texto_completo: `Gonggong, el dios de las aguas desbordadas y las inundaciones, de rostro humano, cabello rojo intenso y cuerpo de serpiente, había acumulado durante mucho tiempo un poder considerable sobre las regiones que gobernaba, pero su naturaleza fundamentalmente caótica y su ambición desmedida lo llevaron, tarde o temprano, a entrar en conflicto directo con otros grandes dioses del panteón celestial por el control definitivo del orden cósmico. Según la versión más citada del relato, Gonggong desafió al dios Zhuanxu —uno de los legendarios Cinco Emperadores— por el derecho a gobernar el mundo entero, iniciando una guerra divina de proporciones catastróficas que sacudió los cimientos mismos del cosmos.

La batalla se extendió durante un tiempo prolongado, con ambos bandos desplegando fuerzas y poderes sobrenaturales considerables, hasta que Gonggong, pese a toda su furia y su dominio sobre las aguas, terminó siendo derrotado de manera decisiva. La humillación de la derrota resultó insoportable para su orgullo: enfurecido más allá de cualquier razonamiento sereno, Gonggong se lanzó con la cabeza por delante contra el Monte Buzhou, una de las montañas sagradas que servían como pilares literales sosteniendo el cielo en su lugar correcto sobre la tierra.

El impacto fue tan violento que rompió el pilar por completo. El cielo entero, privado repentinamente de uno de sus puntos de sostén fundamentales, se inclinó bruscamente hacia el noroeste, mientras que la tierra, desequilibrada por el mismo golpe, se hundió correspondientemente hacia el sureste. El daño no se limitó a un simple desequilibrio geométrico: por la grieta abierta en el firmamento comenzaron a caer fuego e inundaciones sin ningún control, amenazando con destruir por completo a la humanidad que Nüwa había creado con tanto cuidado apenas un tiempo antes. Bestias feroces, liberadas también por el caos generalizado, comenzaron a atacar a los pocos humanos que intentaban sobrevivir en medio del desastre.

Nüwa, al presenciar la destrucción que amenazaba con borrar toda su obra anterior, decidió intervenir personalmente para reparar el daño. Recorrió el mundo recolectando piedras de cinco colores distintos —cada color asociado a uno de los cinco elementos fundamentales de la cosmología china— y las fundió cuidadosamente hasta obtener una masa capaz de sellar por completo el agujero abierto en el cielo. Para estabilizar el firmamento reparado de manera permanente, cortó además las cuatro patas de una tortuga gigante y las usó como nuevos pilares de refuerzo en las cuatro esquinas del mundo, y contuvo finalmente las inundaciones desbordadas acumulando grandes cantidades de cenizas de caña a lo largo de los cauces más peligrosos. Gracias a su intervención decidida, el mundo quedó restaurado, aunque la inclinación original que la embestida de Gonggong había provocado permaneció para siempre: según la cosmología tradicional china, es precisamente esa inclinación antigua la que explica por qué el sol, la luna y las estrellas parecen desplazarse hacia el suroeste, y por qué los grandes ríos de China fluyen naturalmente hacia el este.`,
    personajes: [['gonggong', 'protagonista'], ['nuwa', 'secundario']]
  },
  {
    slug: 'fuxi-y-los-ocho-trigramas', titulo: 'Fuxi y los ocho trigramas', tipo: 'fundacion', periodo: 'Tras la creación de la humanidad', es_preview: 0,
    resumen: 'El primer soberano mítico de China observa los patrones del cielo, la tierra y el caparazón de una tortuga mágica, y de esa observación nacen los ocho trigramas que sostendrían siglos después el I Ching.',
    texto_completo: `Fuxi, hermano —y según algunas tradiciones también esposo— de la diosa creadora Nüwa, gobernó como el primero de los Tres Augustos, los soberanos legendarios que según la tradición china organizaron la civilización humana en sus etapas más tempranas, muchísimo antes de que existiera cualquier registro histórico verificable. A diferencia de otros gobernantes posteriores centrados principalmente en la administración política, Fuxi dedicó buena parte de su reinado a observar con atención extraordinaria los patrones que regían el mundo natural que lo rodeaba, convencido de que existía un orden profundo detrás de la aparente variedad caótica de la naturaleza.

Se le atribuyen numerosas contribuciones prácticas fundamentales a la humanidad recién creada por su hermana: enseñó a los primeros seres humanos a domesticar animales salvajes en lugar de depender exclusivamente de la caza, a tejer redes de cuerda trenzada para pescar con mucha mayor eficacia que atrapando peces directamente con las manos, y a cocinar la carne sobre el fuego en lugar de consumirla cruda, mejorando considerablemente tanto su sabor como su seguridad alimentaria. Estableció también las primeras reglas formales del matrimonio, organizando de manera ordenada las uniones entre hombres y mujeres que hasta entonces habían ocurrido sin ninguna estructura social reconocida.

Su contribución más trascendente, sin embargo, surgió de una observación paciente y prolongada. Un día, mientras contemplaba el paisaje desde una elevación, Fuxi vio emerger de las aguas del río Amarillo una criatura extraordinaria —según las versiones, un dragón-caballo o una tortuga gigante— que llevaba sobre su caparazón un patrón misterioso de marcas que parecían encerrar un significado oculto. Fuxi estudió ese patrón durante mucho tiempo, comparándolo con sus propias observaciones acumuladas sobre el movimiento del cielo, los ciclos de las estaciones, y el comportamiento repetido de los animales y las plantas a su alrededor.

De ese estudio combinado nacieron los ocho trigramas, conocidos como bagua: ocho combinaciones distintas de tres líneas cada una, algunas continuas y otras quebradas en el centro, que Fuxi determinó que representaban las ocho fuerzas fundamentales que gobernaban el universo entero —el cielo, la tierra, el trueno, el viento, el agua, el fuego, la montaña y el lago—. Cada combinación específica de líneas continuas (yang) y quebradas (yin) capturaba, según Fuxi, un aspecto particular del cambio constante que definía la existencia de todas las cosas. Estos ocho trigramas originales, atribuidos a la observación paciente de Fuxi, se convertirían siglos después, ya combinados en sesenta y cuatro hexagramas más complejos, en la base fundamental del I Ching, el Libro de las Mutaciones, uno de los textos más antiguos, influyentes y todavía consultados de toda la civilización china, usado tanto para la adivinación personal como para explicar la estructura filosófica profunda del cambio universal.`,
    personajes: [['fuxi', 'protagonista'], ['nuwa', 'mencionado']]
  },
  {
    slug: 'houyi-derriba-nueve-soles', titulo: 'Houyi derriba nueve soles', tipo: 'heroica', periodo: 'Era mítica de Yao', es_preview: 1,
    resumen: 'Diez soles salen al cielo al mismo tiempo, incinerando la tierra — el arquero divino Houyi los derriba uno a uno con sus flechas, dejando solo uno para iluminar el mundo con una intensidad soportable.',
    texto_completo: `En una era mítica muy anterior a cualquier dinastía histórica registrada, existían diez soles en el cielo, todos ellos hijos del Emperador Celestial del Este, que habían acordado desde siempre turnarse cuidadosamente para cruzar el firmamento uno a la vez, permitiendo que cada día tuviera su propio sol mientras los otros nueve descansaban en el árbol sagrado Fusang, en el extremo oriental del mundo. Este arreglo cuidadoso había mantenido durante generaciones un equilibrio perfecto de luz y calor sobre la tierra, permitiendo que las cosechas crecieran y los ríos fluyeran con normalidad.

Un día, sin embargo, los diez soles, aburridos quizás de su rutina ordenada o simplemente movidos por un impulso travieso compartido, decidieron desafiar el acuerdo tradicional y salir todos juntos al mismo tiempo. El resultado fue catastrófico casi de inmediato: el calor combinado de diez soles ardiendo simultáneamente resultó tan insoportable que los ríos y lagos comenzaron a evaporarse por completo, las cosechas se quemaron en pie antes de poder ser recolectadas, y la propia superficie de la tierra comenzó a agrietarse y resquebrajarse bajo un calor que ningún ser vivo podía soportar durante mucho tiempo. Para empeorar todavía más la situación, el calor extremo despertó también a varias bestias monstruosas que emergieron para atacar a la humanidad ya debilitada por el hambre y la sed.

El emperador Yao, gobernante legendario de ese tiempo, profundamente angustiado ante el sufrimiento extendido de su pueblo, elevó una súplica desesperada al cielo pidiendo ayuda urgente. El Emperador Celestial del Este, pese a ser el propio padre de los diez soles responsables del desastre, decidió enviar a Houyi, un arquero de habilidad sobrehumana, con instrucciones específicas de disciplinar a sus hijos traviesos —asustarlos lo suficiente como para que regresaran a su rutina ordenada— sin llegar a matarlos, ya que seguían siendo, después de todo, su propia descendencia divina.

Houyi descendió a la tierra armado con su arco divino y un carcaj de flechas, y al contemplar con sus propios ojos la devastación completa que el calor de los diez soles había provocado —los campos calcinados, los ríos secos, los cadáveres de animales y personas muertas de sed y hambre—, sintió una furia que superó por completo las instrucciones originales que había recibido. Disparó una flecha, y uno de los soles cayó del cielo convertido en un cuervo dorado de tres patas, muerto en el acto; disparó otra, y un segundo sol cayó de la misma manera. Uno tras otro, Houyi derribó nueve soles completos, dejando solo el décimo y último para continuar iluminando el mundo, esta vez con una intensidad perfectamente soportable para toda forma de vida terrestre.

Houyi aprovechó además su presencia en la tierra para eliminar, con la misma puntería certera, a varias de las bestias monstruosas que el calor extremo había despertado, incluida la criatura devoradora Yayu, liberando a la humanidad de una crisis que había estado a punto de terminar con toda forma de vida conocida. Pese a haber salvado al mundo entero, el Emperador Celestial del Este, furioso e inconsolable por la muerte de nueve de sus propios hijos divinos, castigó a Houyi despojándolo de su inmortalidad original y condenándolo, junto a su esposa Chang'e, a vivir el resto de sus días como simples mortales sobre la tierra que acababan de salvar.`,
    personajes: [['houyi', 'protagonista'], ['yayu', 'mencionado']]
  },
  {
    slug: 'chang-e-vuela-a-la-luna', titulo: "Chang'e vuela a la luna", tipo: 'tragedia', periodo: 'Tras el destierro de Houyi', es_preview: 1,
    resumen: 'Para impedir que un discípulo traidor robe el elixir de la inmortalidad de su esposo, Chang\'e lo bebe ella misma y asciende sin poder detenerse hasta posarse, sola para siempre, en la luna.',
    texto_completo: `Tras derribar nueve de los diez soles y salvar así a la humanidad de una destrucción segura, Houyi fue castigado por el Emperador Celestial del Este —furioso por la muerte de nueve de sus propios hijos divinos— con la pérdida de su inmortalidad original, condenado junto a su esposa Chang'e a vivir el resto de sus días como simples mortales sobre la misma tierra que acababan de salvar. Ambos aceptaron su nueva condición mortal con resignación, estableciéndose en una vida terrenal ordinaria, aunque Houyi, incapaz de olvidar por completo lo que había perdido, decidió emprender la búsqueda de alguna forma de recuperar al menos parte de la inmortalidad perdida.

Su búsqueda lo llevó finalmente hasta la montaña Kunlun, morada de Xi Wangmu, la Reina Madre de Occidente, guardiana del huerto sagrado de melocotones cuyos frutos, una vez cada tres mil años, concedían la inmortalidad completa a quien los consumiera. Impresionada por la hazaña heroica de Houyi al salvar a la humanidad entera, Xi Wangmu decidió otorgarle un elixir especial de su propia elaboración, tan poderoso que una sola dosis completa bastaba para elevar a quien la bebiera directamente al estatus de dios inmortal, capaz de ascender de inmediato a los cielos para siempre. Xi Wangmu le advirtió, sin embargo, que la dosis debía ser consumida completa y de una sola vez para lograr el efecto pleno.

Houyi regresó a casa con el precioso elixir, pero decidió no beberlo de inmediato: prefería primero organizar sus asuntos terrenales, despedirse apropiadamente de sus seres queridos, y sobre todo, encontrar la manera de que Chang'e pudiera acompañarlo en su ascenso, sin dejarla atrás sola en la tierra como simple mortal. Mientras tanto, guardó el elixir cuidadosamente escondido dentro de su propia casa, a la espera del momento adecuado para decidir juntos qué hacer con él.

Uno de los discípulos de Houyi, un hombre llamado Feng Meng, había observado en secreto dónde se guardaba el elixir, y movido por la ambición de obtener la inmortalidad para sí mismo sin compartirla con nadie, aprovechó un día en que Houyi había salido de cacería para intentar robarlo por la fuerza, irrumpiendo en la casa y amenazando a Chang'e para que se lo entregara. Chang'e, viéndose acorralada sin ninguna forma de escapar del robo inminente, y decidida sobre todo a impedir que un objeto de tal poder cayera en manos tan indignas y peligrosas, tomó la decisión desesperada de beber ella misma el elixir completo en ese mismo instante.

El efecto fue inmediato: Chang'e sintió su cuerpo volverse ligero como una pluma, elevándose sin control hacia el cielo pese a sus intentos desesperados de aferrarse a algo terrenal que la mantuviera cerca de su hogar y de su esposo. Ascendió cada vez más alto, incapaz de detener el proceso, hasta posarse finalmente en la luna, el cuerpo celeste más cercano a la tierra que pudo alcanzar antes de perder por completo el contacto con el mundo que conocía. Houyi, al regresar y descubrir lo ocurrido, contempló devastado la luna llena esa misma noche, creyendo distinguir en ella la silueta distante de su esposa perdida. Desde entonces, Chang'e vive en soledad eterna dentro de un palacio lunar helado, acompañada únicamente por un conejo de jade que muele sin descanso hierbas medicinales, y cada año, durante el Festival del Medio Otoño, familias enteras en China contemplan la luna llena y comparten pasteles lunares en su honor, recordando tanto su sacrificio desesperado como la separación eterna que ese acto de amor terminó por sellar entre ambos esposos.`,
    personajes: [['chang-e', 'protagonista'], ['houyi', 'secundario'], ['xi-wangmu', 'secundario']]
  },
  {
    slug: 'el-diluvio-domado-por-yu-el-grande', titulo: 'El diluvio domado por Yu el Grande', tipo: 'heroica', periodo: 'Era mítica de Shun', es_preview: 1,
    resumen: 'Tras el fracaso fatal de su propio padre intentando contener una inundación catastrófica con diques, Yu pasa trece años cavando canales para guiar el agua hacia el mar — sin entrar ni una vez a ver a su familia.',
    texto_completo: `Una inundación de proporciones catastróficas azotó China durante generaciones enteras, cubriendo campos fértiles, arrasando aldeas completas y forzando a comunidades enteras a huir constantemente hacia terrenos cada vez más altos sin encontrar jamás un respiro duradero. El emperador Shun, desesperado por encontrar una solución definitiva, encargó primero la tarea a Gun, un noble respetado y padre de un joven llamado Yu, confiando en su experiencia y determinación para resolver la crisis.

Gun dedicó nueve años completos a la tarea, empleando el método que a cualquiera le habría parecido más lógico: construir diques y muros de contención cada vez más altos y resistentes para bloquear el avance del agua desbordada. Pero el método resultó ser un fracaso rotundo y progresivo: cada vez que el agua acumulada finalmente rompía un dique, la inundación resultante era todavía más violenta y destructiva que la anterior, como si el intento mismo de contener el agua por la fuerza solo sirviera para acumular una presión cada vez mayor antes de un colapso inevitable. El emperador Shun, viendo que la situación empeoraba año tras año en lugar de mejorar, ejecutó finalmente a Gun por su fracaso persistente.

La responsabilidad de resolver la crisis recayó entonces sobre Yu, el propio hijo de Gun, quien decidió desde el principio abandonar por completo el enfoque fallido de su padre. En lugar de intentar bloquear el agua con barreras artificiales, Yu observó cuidadosamente el terreno natural, identificando los cauces por los que el agua ya tendía a fluir de manera natural, y concentró todos sus esfuerzos en profundizar y ampliar esos cauces existentes mediante la excavación sistemática de canales, guiando deliberadamente el exceso de agua hacia el mar en lugar de intentar detenerla sin más.

La tarea resultó igualmente monumental en su escala, exigiendo trece años completos de trabajo incesante recorriendo el país entero, dirigiendo personalmente equipos de trabajadores en la excavación de canal tras canal a lo largo de ríos que se extendían por regiones enteras. La leyenda insiste, como prueba de su dedicación extraordinaria, en que durante esos trece años Yu pasó exactamente tres veces frente a la puerta de su propia casa familiar sin detenerse jamás a entrar, tan urgente consideraba completar cada tramo de su tarea antes de permitirse cualquier descanso o reencuentro personal, incluso al escuchar en una de esas ocasiones el llanto de su propio hijo recién nacido desde el otro lado de la puerta.

El éxito final de Yu resultó tan completo y transformador que el agua, antes fuente constante de destrucción y muerte, se convirtió gracias a sus canales bien dirigidos en un recurso valioso para el riego agrícola de regiones enteras, multiplicando la fertilidad de la tierra en lugar de destruirla. El emperador Shun, profundamente impresionado por un logro que había superado por completo el fracaso trágico de la generación anterior, designó a Yu como su propio sucesor directo al trono, y Yu fundaría después la dinastía Xia, tradicionalmente considerada la primera dinastía de toda la historia china, aunque su existencia histórica exacta sigue siendo objeto de debate arqueológico. Yu es venerado hasta hoy como modelo supremo de sacrificio personal, ingenio práctico frente a un problema aparentemente insoluble, y liderazgo responsable ante una crisis de escala verdaderamente nacional.`,
    personajes: [['yu-el-grande', 'protagonista']]
  },
  {
    slug: 'el-emperador-amarillo-contra-chiyou', titulo: 'El Emperador Amarillo contra Chiyou', tipo: 'heroica', periodo: 'Era de los Cinco Emperadores', es_preview: 1,
    resumen: 'Chiyou, señor de la guerra de cuernos de bronce, invoca una niebla capaz de desorientar ejércitos enteros — solo un carro que siempre señala el sur permite a Huangdi reorganizar sus fuerzas y vencerlo.',
    texto_completo: `Huangdi, "el Emperador Amarillo", gobernaba las tribus asentadas a lo largo del valle del río Amarillo, consolidando gradualmente su autoridad mediante una combinación de sabiduría administrativa e innovaciones tecnológicas y culturales atribuidas a su propio patrocinio directo. Su autoridad, sin embargo, se vio desafiada por Chiyou, un poderoso líder guerrero al frente de una confederación rival de tribus del sur o del este, descrito en las fuentes más antiguas con cuernos de bronce o hierro sobresaliendo de su cabeza, un cuerpo cubierto de una armadura natural prácticamente imposible de atravesar, y acompañado por ochenta y un hermanos igualmente feroces en el campo de batalla.

Chiyou contaba además con una ventaja tecnológica considerable: se le atribuye la invención de armas de metal fundido, muy superiores en poder destructivo a las armas más tradicionales de piedra o bronce elemental que todavía usaban buena parte de las tribus rivales del valle del río Amarillo. Con ese arsenal superior y su propia ferocidad legendaria en combate, Chiyou emprendió una campaña de conquista que amenazaba con someter a las tribus lideradas por Huangdi, culminando finalmente en un enfrentamiento decisivo conocido como la Batalla de Zhuolu.

La batalla resultó extraordinariamente reñida desde el primer momento, y en un punto crítico del combate, Chiyou invocó una densa niebla mágica que envolvió por completo el campo de batalla, desorientando totalmente a las tropas de Huangdi, que perdieron cualquier sentido de dirección en medio de una oscuridad artificial que parecía no tener fin, incapaces de coordinar ningún movimiento efectivo mientras las fuerzas de Chiyou aprovechaban la confusión generalizada para infligir bajas considerables. Durante varios días, las tropas de Huangdi permanecieron atrapadas dentro de esa niebla impenetrable, al borde de una derrota que podría haber cambiado por completo el curso de la civilización china tal como se desarrollaría después.

La salvación llegó por dos vías distintas. Primero, Huangdi ordenó la construcción de un carro especial equipado con un mecanismo mecánico ingenioso que, sin importar hacia qué dirección girara el vehículo completo, mantenía siempre una figura apuntando invariablemente hacia el sur, permitiendo a sus tropas orientarse con precisión incluso en medio de la niebla más espesa e impenetrable. Segundo, Huangdi convocó la ayuda directa de su propia hija, Nüba, diosa asociada a la sequía extrema, cuyo calor abrasador logró finalmente disipar por completo la niebla mágica invocada por Chiyou, despejando el campo de batalla y devolviendo la claridad necesaria para que las tropas de Huangdi pudieran reorganizarse con eficacia.

Con la niebla disipada y sus tropas correctamente orientadas gracias al carro que señalaba el sur, Huangdi lanzó un contraataque decisivo que finalmente logró capturar a Chiyou, ejecutándolo poco después y poniendo fin a la amenaza que había representado durante toda la campaña. La victoria consolidó por completo la autoridad de Huangdi sobre las tribus del valle del río Amarillo, sentando las bases legendarias de la unificación cultural que daría origen, según la tradición, a la civilización china organizada tal como se desarrollaría en los siglos siguientes —razón por la cual, hasta el día de hoy, millones de personas de origen chino en todo el mundo se refieren a sí mismas con orgullo como "descendientes del Emperador Amarillo".`,
    personajes: [['huangdi', 'protagonista'], ['chiyou', 'antagonista']]
  },
  {
    slug: 'el-nacimiento-de-nezha-y-su-desafio-al-rey-dragon', titulo: 'El nacimiento de Nezha y su desafío al Rey Dragón', tipo: 'heroica', periodo: 'Tradición popular, sin fecha fija', es_preview: 0,
    resumen: 'Un niño de fuerza descomunal mata sin querer al hijo del Rey Dragón del Mar Oriental — y, para proteger a sus padres de la venganza divina, decide devolver su propio cuerpo como pago por habérselo dado.',
    texto_completo: `Nezha nació de una manera tan extraordinaria como inquietante para su padre, el general Li Jing: su madre dio a luz, tras un embarazo de tres años y medio, no a un bebé convencional sino a una bola de carne redonda que rodó por el suelo de la habitación. Li Jing, alarmado y convencido de que se trataba de algún tipo de criatura demoníaca, desenvainó su espada y cortó la bola de carne por la mitad, revelando en su interior, para su completo asombro, a un niño perfectamente formado que ya era capaz de caminar y hablar con claridad desde el primer instante de su nacimiento visible.

El niño creció con una velocidad y una fuerza que superaban por completo cualquier desarrollo infantil normal, mostrando desde muy pequeño una temeridad que preocupaba constantemente a sus padres. Un día de verano especialmente caluroso, mientras se bañaba y jugaba en las aguas cercanas al mar, Nezha utilizó sin pensarlo demasiado una de sus armas mágicas favoritas, provocando sin querer un temblor que se sintió con fuerza considerable hasta el fondo del cercano palacio del Rey Dragón del Mar Oriental, Ao Guang, interrumpiendo abruptamente la tranquilidad habitual de su reino submarino.

Furioso por la perturbación, el Rey Dragón envió primero a un general de su corte a investigar y castigar al responsable, pero Nezha, sin medir del todo las consecuencias de sus propios actos infantiles, terminó matando al general en la confrontación que siguió. Cuando el propio hijo del Rey Dragón, Ao Bing, decidió intervenir personalmente para vengar la muerte del general y restaurar el honor familiar, Nezha lo enfrentó también, y en el combate resultante mató igualmente al joven príncipe dragón, llegando incluso a arrancarle los tendones de su cuerpo sin vida para fabricarse con ellos un cinturón, un gesto de una crueldad infantil despreocupada que desataría consecuencias mucho más graves de lo que el propio Nezha había anticipado.

El Rey Dragón, devastado por la pérdida de su propio hijo y furioso más allá de cualquier consuelo posible, amenazó con inundar por completo la región entera donde vivía la familia de Nezha como venganza directa, e incluso presentó una queja formal ante la corte celestial exigiendo justicia severa contra el niño responsable. Consciente de que su propia existencia ponía en peligro real la vida de sus padres y de toda su comunidad, Nezha tomó una decisión extrema pero decidida: si su cuerpo entero —la carne y los huesos que sus padres le habían dado al traerlo al mundo— era la causa fundamental del conflicto, entonces devolvería ese cuerpo por completo como pago, liberando así a su familia de cualquier responsabilidad futura sobre sus actos. Ante los ojos horrorizados de sus padres, Nezha se quitó la vida con su propia espada, devolviendo simbólicamente su carne a su madre y sus huesos a su padre.

Su espíritu, sin embargo, no desapareció por completo: acudió en sueños a su madre suplicándole que le construyera un pequeño templo donde pudiera recibir ofrendas y mantener así, aunque fuera de forma incorpórea, algún tipo de existencia continuada. Cuando su padre, todavía resentido, destruyó ese templo, el maestro espiritual de Nezha, compadecido de su destino, intervino directamente: reconstruyó un cuerpo completamente nuevo para él utilizando raíces de loto sagrado, devolviéndolo a la vida con una forma incorruptible y libre ya de cualquier deuda pendiente con sus padres mortales. Armado desde entonces con su Lanza de Punta de Fuego y montado sobre sus icónicas Ruedas de Viento y Fuego, Nezha se reconcilió finalmente con su padre y se convirtió en un guerrero protector fundamental durante la gran guerra celestial narrada en la novela Fengshen Yanyi, luchando esta vez codo a codo junto al mismo padre que alguna vez lo había cortado en dos al nacer.`,
    personajes: [['nezha', 'protagonista']]
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
  console.log('Sembrando historias de Mitologia China (parte 1)...\n');
  const libroId = await obtenerLibroId();
  await sembrarHistorias(libroId);
  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
