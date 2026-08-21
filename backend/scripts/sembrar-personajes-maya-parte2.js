// ============================================================
// scripts/sembrar-personajes-maya-parte2.js
// ------------------------------------------------------------
// Segundo lote de contenido para Mitologia Maya: 10 heroes (la
// familia de los gemelos heroicos del Popol Vuh) y 12 monstruos.
// Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-maya-parte2.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- HEROES ---
  {
    tipo: 'heroe', slug: 'hunahpu', nombre: 'Hunahpú', nombre_griego: 'Junajpu',
    epitetos: 'Cazador de Cerbatana, Hijo de la Venganza',
    descripcion_corta: 'Uno de los héroes gemelos del Popol Vuh — cazador experto, vence a Xibalbá junto a su hermano y se convierte en el sol.',
    descripcion_larga: `Hunahpú es, junto a su hermano gemelo Ixbalanqué, el protagonista central de la segunda mitad del Popol Vuh: hijo de Hun-Hunahpú y la doncella Ixquic, nace en la superficie tras la muerte de su padre en Xibalbá, sin llegar nunca a conocerlo. Criado por su abuela Xmucané junto a sus dos medios hermanos mayores, Hun-Batz y Hun-Chouen, Hunahpú destaca desde niño como cazador experto con cerbatana, capaz de derribar pájaros y animales con una puntería que ni sus hermanos mayores logran igualar.
Junto a Ixbalanqué, Hunahpú protagoniza dos grandes ciclos de hazañas: primero, la derrota de Vucub-Caquix y sus hijos monstruosos Zipacná y Cabrakán, antes incluso de conocer la historia completa de su propio padre; después, el descenso a Xibalbá para vengar a Hun-Hunahpú y Vucub-Hunahpú, superando las casas de tormento, sobreviviendo a un sacrificio voluntario y engañando finalmente a los señores de la muerte hasta derrotarlos. Al concluir su victoria, Hunahpú asciende al cielo para convertirse en el sol, mientras su hermano se convierte en la luna, completando así el ciclo diario que ilumina el mundo.`,
    origen: 'Hijo de Hun-Hunahpú y la doncella Ixquic, nacido tras la muerte de su padre en Xibalbá.',
    dominio: 'La caza, el juego de pelota y el sol', naturaleza: 'Héroe gemelo', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'xbalanque', nombre: 'Ixbalanqué', nombre_griego: 'Xb\'alanke',
    epitetos: 'Pequeño Jaguar, el Astuto',
    descripcion_corta: 'El otro héroe gemelo — más astuto y cauteloso que su hermano, artífice de la trampa final que derrota a los señores de Xibalbá.',
    descripcion_larga: `Ixbalanqué, "pequeño jaguar", es el hermano gemelo de Hunahpú, con quien comparte cada hazaña narrada en la segunda mitad del Popol Vuh, aunque el texto le atribuye con frecuencia el rol más astuto y cauteloso de los dos: es Ixbalanqué quien idea buena parte de las estrategias que permiten a ambos sobrevivir las pruebas de Xibalbá, incluyendo el truco decisivo de la Casa de los Murciélagos, donde reemplaza la cabeza decapitada de su hermano por una calabaza tallada mientras negocia con los animales del bosque la recuperación de la cabeza real.
Su momento más determinante llega en el clímax del relato: tras hacerse pasar junto a Hunahpú por vagabundos capaces de un truco de magia asombroso —sacrificarse y revivir mutuamente ante los ojos del consejo de Xibalbá—, es Ixbalanqué quien revive a su hermano tras el "sacrificio" fingido, convenciendo a Hun-Camé y Vucub-Camé de solicitar el mismo destino para sí mismos. Con los dos señores supremos muertos de verdad, Ixbalanqué asciende al cielo junto a su hermano; mientras Hunahpú se convierte en el sol, Ixbalanqué se transforma en la luna, aunque algunas tradiciones posteriores invierten los papeles entre ambos astros.`,
    origen: 'Hijo de Hun-Hunahpú y la doncella Ixquic, hermano gemelo de Hunahpú.',
    dominio: 'La astucia, el juego de pelota y la luna', naturaleza: 'Héroe gemelo', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'hun-hunahpu', nombre: 'Hun-Hunahpú', nombre_griego: 'Jun Junajpu',
    epitetos: 'Padre de los Héroes Gemelos',
    descripcion_corta: 'Padre de Hunahpú e Ixbalanqué — jugador de pelota apasionado, muere en Xibalbá y su cabeza, colgada de un árbol, engendra a sus hijos.',
    descripcion_larga: `Hun-Hunahpú es, junto a su hermano Vucub-Hunahpú, protagonista de la primera gran tragedia del Popol Vuh: ambos son jugadores de pelota tan entusiastas que su juego resuena hasta las profundidades de Xibalbá, molestando a Hun-Camé y Vucub-Camé, quienes los convocan al inframundo con la intención deliberada de destruirlos. Tras someterlos a una serie de humillaciones y trampas —el banco de piedra ardiente, la Casa Oscura con su cigarro y antorcha que debían mantenerse encendidos toda la noche sin consumirse—, los señores de Xibalbá terminan sacrificando a ambos hermanos y enterrando sus cuerpos, salvo la cabeza de Hun-Hunahpú, que cuelgan como advertencia en las ramas de un árbol seco.
El árbol, milagrosamente, se cubre de inmediato de frutos parecidos a calabazas, y la cabeza de Hun-Hunahpú se confunde entre ellos. Cuando la doncella Ixquic, hija de un señor de Xibalbá, se acerca curiosa a tocar el árbol prohibido, la calavera escupe en su mano y la deja embarazada de gemelos sin contacto físico alguno —el origen mismo de Hunahpú e Ixbalanqué—. Aunque Hun-Hunahpú no llega a conocer jamás a los hijos que engendra después de muerto, su historia y su derrota son la motivación central que impulsa toda la segunda mitad del Popol Vuh.`,
    origen: 'Hijo de Xpiyacoc y Xmucané, padre de los héroes gemelos.',
    dominio: 'El juego de pelota', naturaleza: 'Héroe caído, origen de los gemelos', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'vucub-hunahpu', nombre: 'Vucub-Hunahpú', nombre_griego: 'Wuqub Junajpu',
    epitetos: 'Tío de los Héroes Gemelos',
    descripcion_corta: 'Hermano de Hun-Hunahpú, muere junto a él en Xibalbá — su descendencia queda ligada para siempre a la de los héroes gemelos, no como padre sino como tío.',
    descripcion_larga: `Vucub-Hunahpú acompaña a su hermano Hun-Hunahpú en cada etapa de su fatal descenso a Xibalbá: ambos son convocados juntos por los señores del inframundo, ambos sufren las mismas humillaciones en el camino —el falso muñeco de madera que confunden con un anfitrión al llegar, el banco ardiente, la primera Casa Oscura— y ambos son finalmente sacrificados en el mismo episodio, aunque solo la cabeza de Hun-Hunahpú es la que queda colgada del árbol de calabazas que después engendrará a los héroes gemelos.
El Popol Vuh distingue con cuidado su papel del de su hermano: mientras Hun-Hunahpú se convierte en padre biológico de Hunahpú e Ixbalanqué a través del episodio del árbol y la doncella Ixquic, Vucub-Hunahpú permanece como su tío, comparte su misma tumba en Xibalbá y su misma derrota, pero no su misma descendencia. Su presencia en el relato subraya que la tragedia inicial no fue individual sino de toda una generación de la familia: dos hermanos jugadores de pelota, destruidos juntos por la misma trampa, cuya derrota conjunta solo sería vengada una generación después por los hijos de uno de ellos.`,
    origen: 'Hijo de Xpiyacoc y Xmucané, hermano de Hun-Hunahpú.',
    dominio: 'El juego de pelota', naturaleza: 'Héroe caído', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'ixquic', nombre: 'Ixquic', nombre_griego: 'Ixkik\'',
    epitetos: 'La Doncella de la Sangre',
    descripcion_corta: 'Hija de un señor de Xibalbá, madre de los héroes gemelos — queda embarazada por la calavera de Hun-Hunahpú y escapa del inframundo para dar a luz en la superficie.',
    descripcion_larga: `Ixquic, "doncella de la sangre", es hija de Cuchumaquic, uno de los señores menores de Xibalbá, y protagoniza uno de los episodios más singulares de todo el Popol Vuh: atraída por la curiosidad hacia el árbol de calabazas donde cuelga la cabeza de Hun-Hunahpú —un árbol que los propios señores de Xibalbá habían prohibido tocar—, extiende la mano hacia sus frutos y la calavera, para su sorpresa, le habla y escupe saliva en su palma, dejándola embarazada sin contacto físico alguno y anunciándole que no debe temer, pues su descendencia sería digna.
Cuando su embarazo se hace evidente meses después, su propio padre, furioso y avergonzado, ordena a los búhos mensajeros de Xibalbá que la sacrifiquen y le traigan su corazón como prueba. Ixquic convence a los búhos de perdonarla, ofreciendo en su lugar la savia coagulada de un árbol de grana, que al secarse toma la apariencia de un corazón real. Liberada, asciende a la superficie y llega hasta la casa de Xmucané, su suegra, quien al principio se muestra recelosa hasta comprobar, mediante una prueba de recolección de maíz milagrosamente abundante, que Ixquic dice la verdad sobre el origen divino de los gemelos que lleva en el vientre.`,
    origen: 'Hija de Cuchumaquic, señor menor de Xibalbá; madre de los héroes gemelos.',
    dominio: 'La astucia y la maternidad', naturaleza: 'Heroína, madre de los gemelos', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'balam-quitze', nombre: 'Balam Quitzé', nombre_griego: 'B\'alam Kitze\'',
    epitetos: 'Jaguar de Dulce Risa, Primer Hombre de Maíz',
    descripcion_corta: 'El primero de los cuatro hombres verdaderos, formados de masa de maíz — antepasado directo de los linajes gobernantes k\'iche\'.',
    descripcion_larga: `Balam Quitzé es el primero y más prominente de los cuatro hombres verdaderos que Xmucané forma con masa de maíz blanco y amarillo, tras el fracaso sucesivo de los intentos anteriores de crear seres humanos con barro y con madera. Junto a Balam Acab, Mahucutah e Iqui Balam, Balam Quitzé nace ya con una capacidad de visión y entendimiento tan amplia que podía ver el mundo entero sin moverse de su sitio —un don tan cercano al de los propios dioses que estos, inquietos, decidieron limitarlo soplando niebla sobre sus ojos.
Como antepasado directo del linaje gobernante k'iche', Balam Quitzé recibe de manos divinas el objeto sagrado más venerado de su pueblo: el envoltorio ritual conocido como Pizom Gagal, "bulto sagrado", que nunca debía abrirse y que sus descendientes conservarían como símbolo de autoridad y protección divina generación tras generación. Al final de su larga vida, junto a los otros tres primeros hombres, Balam Quitzé deja instrucciones y consejos finales a sus hijos antes de desaparecer misteriosamente, sin llegar a experimentar una muerte convencional —un final que el propio Popol Vuh describe con deliberada ambigüedad.`,
    origen: 'El primero de los cuatro hombres verdaderos, formado de masa de maíz por Xmucané.',
    dominio: 'La sabiduría ancestral k\'iche\'', naturaleza: 'Primer hombre, patriarca', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'balam-acab', nombre: 'Balam Acab', nombre_griego: 'B\'alam Aq\'ab\'',
    epitetos: 'Jaguar de la Noche, Segundo Hombre de Maíz',
    descripcion_corta: 'El segundo de los cuatro hombres verdaderos de maíz — patriarca de otro de los grandes linajes k\'iche\'.',
    descripcion_larga: `Balam Acab, "jaguar de la noche", es el segundo de los cuatro hombres verdaderos formados por Xmucané a partir de masa de maíz, y comparte con sus tres hermanos el mismo don inicial de una vista y un entendimiento tan vastos que podían comprender el origen entero del cosmos sin moverse de su lugar. Junto a Balam Quitzé, Mahucutah e Iqui Balam, Balam Acab recibe también una esposa formada especialmente para él por los dioses mientras dormía, convirtiéndose así en fundador de su propio linaje familiar dentro del pueblo k'iche'.
Aunque el Popol Vuh dedica menos episodios individuales a Balam Acab que a Balam Quitzé, su papel como patriarca fundador es igual de central para la genealogía completa del pueblo k'iche': cada uno de los cuatro primeros hombres da origen a una de las grandes casas o linajes que, generaciones después, formarían la estructura política y religiosa completa de las ciudades k'iche' registradas en la parte final e histórica del texto, donde el mito se entrelaza directamente con la memoria genealógica real de sus autores originales.`,
    origen: 'El segundo de los cuatro hombres verdaderos, formado de masa de maíz.',
    dominio: 'La sabiduría ancestral k\'iche\'', naturaleza: 'Primer hombre, patriarca', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'mahucutah', nombre: 'Mahucutah', nombre_griego: 'Majukotaj',
    epitetos: 'El No Cepillado, Tercer Hombre de Maíz',
    descripcion_corta: 'El tercero de los cuatro hombres verdaderos de maíz — patriarca de otro linaje fundacional del pueblo k\'iche\'.',
    descripcion_larga: `Mahucutah es el tercero de los cuatro hombres verdaderos que emergen de la masa de maíz molida por Xmucané, formado junto a Balam Quitzé, Balam Acab e Iqui Balam como parte del mismo acto final de creación que, tras los fracasos del barro y la madera, por fin produce seres capaces de hablar, razonar y venerar correctamente a sus creadores. Como sus hermanos, Mahucutah nace dotado de una capacidad de percepción casi ilimitada, que los dioses creadores deciden atenuar deliberadamente por temor a que unos seres tan perfectos terminaran por igualarlos.
Mahucutah recibe también, como sus hermanos, una esposa creada especialmente para él, dando origen a su propia línea de descendientes dentro de la estructura de linajes k'iche' que el Popol Vuh detalla en sus capítulos finales. Su nombre, relacionado con la idea de "no peinado" o "sin adornar", ha sido interpretado por algunos estudiosos como una referencia a un carácter más austero o directo dentro del grupo de los cuatro primeros hombres, aunque el texto no profundiza en rasgos de personalidad individuales para ninguno de ellos más allá de sus dones compartidos.`,
    origen: 'El tercero de los cuatro hombres verdaderos, formado de masa de maíz.',
    dominio: 'La sabiduría ancestral k\'iche\'', naturaleza: 'Primer hombre, patriarca', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'iqui-balam', nombre: 'Iqui Balam', nombre_griego: 'Iq\' B\'alam',
    epitetos: 'Jaguar de la Luna, Cuarto Hombre de Maíz',
    descripcion_corta: 'El cuarto y último de los hombres verdaderos de maíz — completa el grupo fundador de la humanidad k\'iche\'.',
    descripcion_larga: `Iqui Balam es el cuarto y último de los hombres verdaderos formados con masa de maíz, completando junto a Balam Quitzé, Balam Acab y Mahucutah el grupo fundador de la humanidad k'iche' tal como la describe el Popol Vuh. Los cuatro nacen sin madre que los diera a luz de forma convencional —moldeados directamente por Xmucané y animados por el consejo creador completo— y comparten desde el primer instante el mismo don extraordinario: una visión capaz de abarcar el mundo entero, las cuatro esquinas del cielo y de la tierra, sin necesidad de desplazarse.
A diferencia de sus tres hermanos, el Popol Vuh no detalla con la misma claridad si Iqui Balam llegó a recibir una esposa propia ni qué linaje específico fundó, un vacío que algunos estudiosos atribuyen a pérdidas o simplificaciones del texto original transmitido oralmente antes de su transcripción colonial. Aun así, su presencia como cuarto miembro completa simbólicamente el patrón cuatripartito —cuatro direcciones, cuatro colores, cuatro hombres— que estructura buena parte de la cosmovisión maya, y su nombre se conserva como parte inseparable del grupo fundador citado siempre en conjunto.`,
    origen: 'El cuarto de los cuatro hombres verdaderos, formado de masa de maíz.',
    dominio: 'La sabiduría ancestral k\'iche\'', naturaleza: 'Primer hombre, patriarca', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'hunbatz-hunchouen', nombre: 'Hun Batz y Hun Chouén', nombre_griego: 'Jun B\'atz\' / Jun Chowen',
    epitetos: 'Los Hermanos Simios, Patronos de las Artes',
    descripcion_corta: 'Medios hermanos mayores de los héroes gemelos — músicos y escribas talentosos, convertidos en monos por celos y envidia hacia sus hermanos menores.',
    descripcion_larga: `Hun Batz y Hun Chouén son hijos de Hun-Hunahpú de un matrimonio anterior a su muerte en Xibalbá, y por tanto medios hermanos mayores de Hunahpú e Ixbalanqué, criados también en la casa de su abuela Xmucané. Ambos destacan desde jóvenes como músicos, cantores, escribas y escultores extraordinariamente dotados, considerados patronos naturales de las artes entre los k'iche', pero su relación con los gemelos menores se agria pronto: celosos de la atención que Xmucané dedica a los recién llegados, los someten a maltratos constantes, colgándolos incluso de un árbol de hormigas para dañarlos.
Hunahpú e Ixbalanqué, hartos de los abusos, urden una trampa: convencen a sus hermanos mayores de subir a un árbol altísimo a buscar pájaros, y mediante un hechizo hacen que el tronco crezca de repente, dejándolos atrapados en la copa. Cuando finalmente logran bajar, Hun Batz y Hun Chouén han quedado transformados en monos, con colas y rostros simiescos, condenados a vivir para siempre en los árboles. Xmucané, al verlos convertidos en criaturas grotescas mientras bailaba de risa ante la escena, no logra revertir el hechizo pese a sus intentos, y ambos hermanos quedan consagrados desde entonces como patronos divinos de la música, la escritura y las artes bajo su nueva forma simiesca.`,
    origen: 'Hijos de Hun-Hunahpú de un matrimonio anterior, medios hermanos de los gemelos.',
    dominio: 'La música, la escritura y las artes', naturaleza: 'Héroes transformados en dioses-mono', es_preview: 0
  },

  // --- MONSTRUOS ---
  {
    tipo: 'monstruo', slug: 'vucub-caquix', nombre: 'Vucub-Caquix', nombre_griego: 'Wuqub Kaqix',
    epitetos: 'Siete Guacamayo, el Falso Sol',
    descripcion_corta: 'Un demonio pájaro vanidoso que se proclama sol y luna antes de la era actual — derrotado por Hunahpú e Ixbalanqué en su primera gran hazaña.',
    descripcion_larga: `Vucub-Caquix, "Siete Guacamayo", es un ser demoníaco con forma de ave gigantesca que, en un tiempo previo a la creación del sol verdadero, se proclama a sí mismo astro solar y lunar, presumiendo ante el mundo entero de sus ojos de plata reluciente, sus dientes de piedras preciosas y su plumaje deslumbrante, exigiendo el mismo respeto y veneración que correspondería al sol real que aún no existía. Su soberbia resulta intolerable para los dioses creadores, que encomiendan a los héroes gemelos Hunahpú e Ixbalanqué —aún jóvenes, antes de conocer siquiera la historia completa de su propio padre— la tarea de derrotarlo.
Los gemelos idean una trampa mientras Vucub-Caquix se alimenta de un árbol de nance: le disparan con cerbatana y le rompen la mandíbula, aunque el propio Vucub-Caquix, furioso, logra arrancarle el brazo a Hunahpú antes de escapar herido. Disfrazados de curanderos ancianos, los gemelos consiguen después acceder de nuevo a él bajo el pretexto de curarle el dolor de dientes y ojos, y en el proceso le extraen sus joyas preciosas —la verdadera fuente de su falso esplendor— reemplazándolas por simples granos de maíz molido. Despojado de sus adornos, Vucub-Caquix muere poco después, y con su derrota, el camino queda libre para que el sol verdadero pueda finalmente ocupar su lugar legítimo en el cielo.`,
    origen: 'Demonio ave que se proclama falso sol y luna antes de la creación del astro verdadero.',
    dominio: 'La vanidad y el falso esplendor', naturaleza: 'Demonio ave', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'zipacna', nombre: 'Zipacná', nombre_griego: 'Sipakna',
    epitetos: 'Hacedor de Montañas',
    descripcion_corta: 'Hijo mayor de Vucub-Caquix, un gigante que presume haber creado todas las montañas del mundo — aplastado bajo una falsa montaña por los héroes gemelos.',
    descripcion_larga: `Zipacná es el hijo mayor de Vucub-Caquix, un gigante de fuerza descomunal que se atribuye personalmente la creación de todas las montañas de la tierra, y que efectivamente pasa sus días moviendo cerros de un lugar a otro con una facilidad que ningún otro ser podría igualar. Su soberbia lo lleva a burlarse y finalmente aplastar bajo tierra a cuatrocientos jóvenes que había ayudado a cargar un enorme tronco para construir su casa, cuando estos, agotados, intentan gastarle una broma —los cuatrocientos mueren sepultados, y sus almas ascienden después al cielo convertidas en las estrellas de la constelación conocida como las Pléyades.
Enterados de esta crueldad, Hunahpú e Ixbalanqué deciden vengar a los cuatrocientos jóvenes: fingen haber encontrado un cangrejo gigante escondido en el fondo de un barranco, un festín irresistible para el apetito voraz de Zipacná, y lo atraen hasta el fondo de una montaña artificial construida especialmente para la trampa. Cuando el gigante entra a buscar el supuesto cangrejo, los gemelos dejan caer sobre él la montaña entera, aplastándolo y convirtiéndolo definitivamente en piedra —un destino apropiado para quien había pasado su vida entera moviendo montañas a su antojo.`,
    origen: 'Hijo mayor de Vucub-Caquix, gigante hacedor de montañas.',
    dominio: 'La fuerza descomunal y las montañas', naturaleza: 'Gigante monstruoso', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'cabrakan', nombre: 'Cabracán', nombre_griego: 'Kab\'raqan',
    epitetos: 'El que Sacude la Tierra',
    descripcion_corta: 'Hijo menor de Vucub-Caquix, capaz de derribar montañas enteras con solo patear el suelo — engañado y derrotado por los héroes gemelos.',
    descripcion_larga: `Cabracán, "el que sacude la tierra" o "dos piernas", es el hijo menor de Vucub-Caquix y hermano de Zipacná, dotado de un poder tan devastador como el de su hermano pero de naturaleza distinta: con solo patear el suelo con fuerza, es capaz de derrumbar montañas enteras al instante, un poder que ejerce sin restricción alguna y del que se enorgullece abiertamente ante cualquiera que se cruce en su camino. Tras la derrota de su padre y su hermano, Cabracán se convierte en el último objetivo de Hunahpú e Ixbalanqué para completar la eliminación de esta familia de gigantes soberbios.
Los gemelos lo engañan con la misma estrategia que emplearon contra su padre: le ofrecen un ave asada como festín, sin revelarle que la habían untado previamente con tierra blanca —en realidad yeso o cal—, un veneno lento capaz de debilitar incluso a un gigante de su fuerza. Cabracán devora el ave sin sospechar nada y, poco después, comienza a sentirse mareado y sin fuerzas; los gemelos aprovechan su debilidad para atarlo y enterrarlo vivo bajo tierra, completando así la eliminación de las tres figuras —Vucub-Caquix, Zipacná y Cabracán— cuya soberbia amenazaba con opacar la llegada del orden cósmico verdadero.`,
    origen: 'Hijo menor de Vucub-Caquix, hermano de Zipacná.',
    dominio: 'Los terremotos y la destrucción de montañas', naturaleza: 'Gigante monstruoso', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'camazotz', nombre: 'Camazotz', nombre_griego: 'Kama Sotz\'',
    epitetos: 'Murciélago de la Muerte',
    descripcion_corta: 'Un monstruoso murciélago devorador de hombres que custodia la Casa de los Murciélagos en Xibalbá — decapita a Hunahpú durante la última prueba.',
    descripcion_larga: `Camazotz, "murciélago de la muerte", es una criatura monstruosa con cuerpo humanoide y cabeza y alas de murciélago, asociada a los sacrificios y al inframundo, que habita y custodia la Casa de los Murciélagos, la última y más peligrosa de las casas de tormento que Hunahpú e Ixbalanqué deben superar en Xibalbá. A diferencia de las pruebas anteriores, superadas mediante ingenio puro sin verdadero peligro físico, la Casa de los Murciélagos exige a los gemelos permanecer completamente inmóviles dentro de sus cerbatanas huecas durante toda la noche para evitar el ataque constante de enjambres de murciélagos que vuelan sin descanso a su alrededor.
Hunahpú, confiado en que el amanecer se aproxima, asoma apenas la cabeza fuera de su escondite para comprobarlo, y en ese instante exacto Camazotz le arranca la cabeza de un solo golpe, dejándola clavada como trofeo en el campo de juego de pelota de Xibalbá. Ixbalanqué, con ayuda de los animales del bosque —una tortuga sirve de cabeza temporal, mientras otros animales recuperan la verdadera— logra restaurar a su hermano antes del amanecer, engañando además a los señores de Xibalbá para recuperar la cabeza original sin que noten el intercambio, en uno de los episodios más tensos de todo el ciclo heroico.`,
    origen: 'Monstruo murciélago, guardián de la Casa de los Murciélagos en Xibalbá.',
    dominio: 'El sacrificio nocturno y la decapitación', naturaleza: 'Monstruo devorador', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'xecotcovach', nombre: 'Xecotcovach', nombre_griego: 'Xekotkowach',
    epitetos: 'Águila Devoradora de Ojos',
    descripcion_corta: 'Un águila monstruosa enviada a destruir a los hombres de madera arrancándoles los ojos, castigo por su ingratitud hacia los dioses.',
    descripcion_larga: `Xecotcovach es una de las criaturas convocadas por los dioses creadores para destruir a los hombres de madera, el segundo intento fallido de dar forma a la humanidad en el Popol Vuh: seres tallados en madera capaces de hablar y reproducirse, pero completamente vacíos de memoria, sentimiento y gratitud hacia sus propios creadores, incapaces de recordar ni de venerar a Hurakán, Gucumatz y Tepeu como correspondía. Como castigo por esa indiferencia, los dioses deciden aniquilarlos mediante un ataque conjunto de fuerzas naturales y criaturas monstruosas.
Xecotcovach cumple su parte del castigo descendiendo sobre los hombres de madera con la furia de un águila gigantesca, arrancándoles literalmente los ojos de las cuencas mientras huyen despavoridos. Junto a otras criaturas convocadas para el mismo propósito —Camalotz (murciélago), Cotzbalam (jaguar) y Tucumbalam (una bestia de garras)—, además de sus propios objetos domésticos y animales rebelándose contra ellos, Xecotcovach participa en la destrucción casi total de esa segunda humanidad fallida, cuyos pocos sobrevivientes se transformarían, según el propio Popol Vuh, en los monos que todavía habitan los bosques.`,
    origen: 'Ave monstruosa convocada por los dioses para castigar a los hombres de madera.',
    dominio: 'El castigo a la ingratitud', naturaleza: 'Ave devoradora', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'cotzbalam', nombre: 'Cotzbalam', nombre_griego: 'Kotzb\'alam',
    epitetos: 'Jaguar Devorador de Carne',
    descripcion_corta: 'Un jaguar monstruoso que despedaza a los hombres de madera durante su destrucción, parte del castigo divino por su ingratitud.',
    descripcion_larga: `Cotzbalam es otra de las criaturas monstruosas convocadas junto a Xecotcovach, Camalotz y Tucumbalam para destruir a los hombres de madera, la segunda humanidad fallida del Popol Vuh, incapaz de recordar ni venerar a sus propios creadores. Mientras Xecotcovach ataca arrancando los ojos y Camalotz decapita, Cotzbalam —cuyo nombre combina las raíces de "cortar" o "destrozar" con "jaguar"— se encarga de despedazar directamente los cuerpos, devorando la carne de los hombres de madera en una escena de destrucción total narrada con crudeza deliberada por el texto original.
La destrucción conjunta de estas cuatro criaturas no es la única fuerza que se vuelve contra los hombres de madera: el propio Popol Vuh describe cómo sus utensilios domésticos, sus animales de carga y hasta las piedras de moler se rebelan contra ellos, resentidos por el trato brusco e indiferente que habían recibido durante años, en una imagen que refuerza la idea central de todo el episodio —que la existencia humana solo tiene sentido y permanencia si se sostiene sobre la memoria, la gratitud y la reciprocidad con quienes la hacen posible, ya sean dioses o incluso los propios objetos cotidianos.`,
    origen: 'Jaguar monstruoso convocado por los dioses para castigar a los hombres de madera.',
    dominio: 'El castigo a la ingratitud', naturaleza: 'Jaguar devorador', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'tucumbalam', nombre: 'Tucumbalam', nombre_griego: 'Tukumb\'alam',
    epitetos: 'La Bestia de Garras Largas',
    descripcion_corta: 'Una bestia de garras largas y patas de tapir, la última de las criaturas convocadas para destruir a los hombres de madera.',
    descripcion_larga: `Tucumbalam completa, junto a Xecotcovach, Cotzbalam y Camalotz, el grupo de cuatro criaturas monstruosas enviadas por los dioses creadores para exterminar a los hombres de madera, castigándolos por su incapacidad de recordar y venerar a quienes les habían dado forma. El Popol Vuh la describe de manera menos detallada que a las otras tres, atribuyéndole garras largas y afiladas y patas semejantes a las de un tapir, una combinación de rasgos que sugiere una criatura híbrida y deliberadamente antinatural, coherente con el carácter de castigo colectivo y desproporcionado de todo el episodio.
Su función narrativa, como la de sus tres compañeras monstruosas, es puramente destructiva y transitoria: una vez cumplido su propósito de aniquilar a la segunda humanidad fallida, Tucumbalam desaparece por completo del resto del relato, sin volver a mencionarse en ninguno de los episodios posteriores dedicados a Vucub-Caquix, Xibalbá o los héroes gemelos. Su breve aparición, sin embargo, refuerza uno de los patrones más constantes de todo el Popol Vuh: cada intento fallido de creación trae consigo su propia forma específica de destrucción, adaptada exactamente a la naturaleza del fracaso que debe corregir.`,
    origen: 'Bestia de garras largas convocada por los dioses para castigar a los hombres de madera.',
    dominio: 'El castigo a la ingratitud', naturaleza: 'Bestia devoradora', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'sisimite', nombre: 'Sisimite', nombre_griego: 'Sisimite',
    epitetos: 'El Peludo de los Montes',
    descripcion_corta: 'Un gigante peludo de pies al revés que habita las montañas y selvas — figura de folclore maya-centroamericano que todavía se cuenta hoy.',
    descripcion_larga: `El Sisimite es una criatura de folclore ampliamente extendida entre comunidades mayas y no mayas de Guatemala, Honduras y otras zonas de Centroamérica: un gigante corpulento cubierto por completo de un pelaje espeso y desordenado, que habita en lo profundo de montañas y bosques alejados de cualquier asentamiento humano. Su rasgo más distintivo, y el que más se repite en las narraciones orales, son sus pies colocados al revés —los talones apuntando hacia adelante—, un detalle pensado deliberadamente para confundir a quien intentara rastrear sus huellas, ya que estas parecen alejarse en la dirección opuesta a la que realmente tomó.
Las historias sobre el Sisimite varían según la región, pero comparten un núcleo común: es una criatura solitaria y peligrosa para quienes se internan solos en el monte, capaz de secuestrar a viajeros extraviados o de aterrorizar a leñadores y cazadores imprudentes, aunque rara vez se le atribuye una crueldad gratuita —actúa, sobre todo, como guardián instintivo de un territorio silvestre que prefiere mantener alejado de la presencia humana. A diferencia de las criaturas del Popol Vuh, documentadas en un texto colonial específico, el Sisimite pertenece a una tradición oral viva, todavía contada por abuelos a nietos en comunidades rurales centroamericanas hasta el día de hoy.`,
    origen: 'Criatura de folclore oral maya-centroamericano, guardián de montañas y bosques.',
    dominio: 'Las montañas y bosques remotos', naturaleza: 'Gigante peludo del monte', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'xtabay', nombre: 'Xtabay', nombre_griego: 'Xtabay',
    epitetos: 'La Mujer del Ceibo',
    descripcion_corta: 'Un espíritu femenino de belleza irresistible que aparece junto a los ceibos para atraer y perder a los hombres solitarios de noche.',
    descripcion_larga: `La Xtabay es uno de los espíritus más temidos y a la vez más contados del folclore yucateco: una mujer de belleza deslumbrante, cabello largo y suelto, que aparece de noche peinándose junto a la base de un ceibo o de un cactus xtabentún, llamando con su voz a los hombres que caminan solos por caminos apartados. Quien se acerca atraído por su hermosura descubre, cuando ya es demasiado tarde para escapar, que sus pies terminan en garras de ave de rapiña o que su rostro se transforma en el de una criatura terrible, y rara vez se vuelve a saber de él después del encuentro.
Según la leyenda que explica su origen, la Xtabay nace de la transformación tras la muerte de dos mujeres muy distintas: Xkeban, una mujer de vida licenciosa pero de corazón profundamente compasivo con los pobres y enfermos, y Utz-Colel, una mujer virtuosa en apariencia pero fría y desdeñosa con quien no le convenía. Al morir ambas el mismo día, del cuerpo de Xkeban brota una flor blanca y fragante, el xtabentún, mientras que del cuerpo de Utz-Colel nace un cactus de flor bella pero sin aroma alguno —y es de este segundo espíritu, el de la belleza vacía y sin compasión, de donde surge la Xtabay que sigue acechando los caminos yucatecos hasta hoy.`,
    origen: 'Espíritu nacido de la transformación de Utz-Colel tras su muerte, según la leyenda yucateca.',
    dominio: 'La seducción nocturna y los caminos solitarios', naturaleza: 'Espíritu femenino peligroso', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'kisin', nombre: 'Kisin', nombre_griego: 'Kisin',
    epitetos: 'El que Hiede, Señor de los Terremotos',
    descripcion_corta: 'Entre los mayas lacandones, un demonio de la muerte y los terremotos, enemigo constante del sol al que intenta apagar.',
    descripcion_larga: `Kisin, "el que hiede" o "el flatulento", es la figura del inframundo y la muerte venerada —y sobre todo temida— entre los mayas lacandones, un pueblo que ha conservado hasta tiempos recientes tradiciones religiosas notablemente distintas de las registradas en los códices yucatecos clásicos. Se le describe como un ser fétido asociado tanto a la putrefacción de los cadáveres como a los terremotos, que los lacandones atribuían directamente a sus movimientos furiosos bajo la superficie de la tierra.
En la tradición lacandona, Kisin mantiene una enemistad activa y constante con el dios sol, Kinich Ahau, a quien intenta atrapar y extinguir cada vez que puede, amenazando con sumir al mundo en una oscuridad definitiva; solo la intervención de otros dioses o la propia fuerza del sol logran frustrar sus intentos una y otra vez. Algunos investigadores consideran a Kisin una variante regional tardía del más antiguo Ah Puch, adaptada a la cosmovisión particular de los lacandones, mientras otros lo tratan como una entidad genuinamente distinta, con un carácter más activamente hostil y menos administrativo que el Ah Puch clásico.`,
    origen: 'Demonio de la muerte y los terremotos en la tradición lacandona.',
    dominio: 'Los terremotos y la enemistad con el sol', naturaleza: 'Demonio del inframundo', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'way', nombre: 'Wahyob', nombre_griego: 'Way',
    epitetos: 'Los Espíritus Compañeros',
    descripcion_corta: 'Criaturas espirituales —co-esencias animales de brujos y gobernantes— que aparecen en la cerámica maya clásica como formas híbridas amenazantes.',
    descripcion_larga: `Los wahyob (singular way) son entidades espirituales documentadas principalmente a través de la cerámica polícroma del periodo clásico maya, donde aparecen pintadas como criaturas híbridas de aspecto amenazante —mezclas de jaguar, murciélago, serpiente y rasgos humanos descompuestos— acompañadas de glifos que identifican su nombre propio y, en muchos casos, al gobernante o linaje al que pertenecían como "co-esencia" espiritual. Se creía que ciertos individuos, especialmente gobernantes y hechiceros poderosos, poseían la capacidad de transformarse en su way durante el sueño o mediante rituales específicos, viajando bajo esa forma para espiar, atacar o intimidar a rivales políticos.
El concepto guarda un parentesco directo con el nahualismo mexica y con figuras posteriores del folclore centroamericano: la idea de que un ser humano y un animal (o una criatura híbrida) comparten un mismo destino, de modo que herir a uno afecta inevitablemente al otro. A diferencia del nahual mexica, documentado sobre todo en fuentes coloniales tardías, los wahyob mayas quedaron registrados directamente por los propios artistas del periodo clásico en la cerámica que producían para las cortes reales, ofreciendo una de las ventanas más directas disponibles hacia las creencias sobre brujería y poder espiritual de la nobleza maya antes de la conquista.`,
    origen: 'Co-esencias espirituales de gobernantes y hechiceros, documentadas en la cerámica clásica maya.',
    dominio: 'La transformación espiritual y la brujería', naturaleza: 'Espíritu-animal híbrido', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'muan', nombre: 'Pájaro Muán', nombre_griego: 'Muwan',
    epitetos: 'El Búho de Mal Agüero',
    descripcion_corta: 'Un búho o lechuza asociado a los señores de la muerte, cuyo canto nocturno anunciaba desgracia inminente entre los mayas.',
    descripcion_larga: `El pájaro Muán es una lechuza o búho de mal agüero que aparece con frecuencia en los códices mayas como mensajero directo de los dioses de la muerte, especialmente vinculado a Ah Puch y a los señores de Xibalbá, quienes lo empleaban para entregar avisos, amenazas o convocatorias a los mortales. Su canto nocturno, característico de las aves rapaces de esta familia, se interpretaba entre los mayas —como entre muchas otras culturas del mundo— como un presagio inequívoco de muerte cercana o desgracia inminente para quien lo escuchara cerca de su vivienda.
En el propio Popol Vuh, son búhos mensajeros de Xibalbá —descritos de forma muy cercana a esta misma figura— quienes reciben la orden de sacrificar a Ixquic tras descubrirse su embarazo, aunque terminan siendo engañados y convencidos de perdonarla. El Muán aparece también representado en la cerámica y los códices con un tocado o "moño" característico en la cabeza, y su imagen se integraba a menudo en escenas de sacrificio o de comunicación entre el mundo de los vivos y el inframundo, reforzando su papel constante como intermediario alado entre ambos planos.`,
    origen: 'Ave de mal agüero, mensajera de los señores de la muerte.',
    dominio: 'Los presagios de muerte', naturaleza: 'Ave mensajera del inframundo', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-maya'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-maya" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando heroes y monstruos de Mitologia Maya (parte 2)...\n');
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
