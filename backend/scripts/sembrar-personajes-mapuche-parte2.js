// ============================================================
// scripts/sembrar-personajes-mapuche-parte2.js
// ------------------------------------------------------------
// Segundo lote de Mitologia Mapuche: 10 heroes (figuras
// historicas/legendarias de la resistencia mapuche, mitificadas
// especialmente por la epica "La Araucana") y 12 monstruos
// (incluyendo la rica tradicion de seres de Chiloe). Contenido
// completo desde el inicio. Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-mapuche-parte2.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- HEROES ---
  {
    tipo: 'heroe', slug: 'lautaro', nombre: 'Lautaro', nombre_griego: 'Lautaro',
    epitetos: 'El Toqui Relámpago, Vencedor de Tucapel',
    descripcion_corta: 'Joven toqui que, tras servir como caballerango de Pedro de Valdivia, aprendió las tácticas españolas y las volvió contra sus propios captores.',
    descripcion_larga: `Lautaro fue capturado siendo apenas un adolescente y obligado a servir como paje y caballerango personal del conquistador español Pedro de Valdivia, un cautiverio que, lejos de doblegarlo, le permitió observar de cerca durante varios años la organización militar, las tácticas de combate y el manejo de los caballos que hasta entonces habían dado a los españoles una ventaja decisiva sobre los guerreros mapuche, acostumbrados únicamente al combate a pie. Aprovechando ese conocimiento adquirido desde dentro, Lautaro escapó finalmente y regresó junto a su pueblo, donde fue reconocido por su inteligencia estratégica excepcional y elegido toqui, el máximo líder militar, pese a su juventud.

Bajo su mando, los mapuche adoptaron por primera vez de manera sistemática el uso de caballos capturados, desarrollaron emboscadas escalonadas que agotaban a las tropas enemigas mediante oleadas sucesivas de guerreros frescos, y perfeccionaron el uso combinado de distintas armas tradicionales adaptadas a la nueva realidad del conflicto. Su victoria más célebre llegó en la batalla de Tucapel, en 1553, donde las fuerzas mapuche bajo su liderazgo derrotaron de manera aplastante al propio Pedro de Valdivia, quien murió poco después como consecuencia directa de esa derrota, un golpe que conmocionó profundamente al régimen colonial español recién establecido en el territorio. Lautaro continuó liderando la resistencia mapuche durante varios años más, logrando victorias adicionales significativas, hasta morir finalmente en una emboscada española en 1557, convertido ya para entonces en una de las figuras más veneradas de la resistencia indígena en toda la historia de América, inmortalizado además en la épica "La Araucana" del propio soldado y poeta español Alonso de Ercilla.`,
    origen: 'Joven toqui mapuche, antiguo cautivo del conquistador Pedro de Valdivia.',
    dominio: 'La estrategia militar y la resistencia armada', naturaleza: 'Toqui legendario de la Guerra de Arauco', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'caupolican', nombre: 'Caupolicán', nombre_griego: 'Caupolicán',
    epitetos: 'El Toqui del Tronco, Mártir de la Resistencia',
    descripcion_corta: 'Toqui elegido tras ganar la legendaria prueba de resistencia de cargar un tronco, capturado finalmente y ejecutado con una crueldad que lo convirtió en símbolo eterno.',
    descripcion_larga: `Caupolicán fue elegido toqui de los mapuche mediante una prueba de resistencia física legendaria, narrada con detalle en "La Araucana": varios candidatos debieron competir cargando sobre sus hombros un pesado tronco durante el mayor tiempo posible sin descansar, y Caupolicán, pese a tener una pierna de menor longitud que la otra según algunas versiones del relato, logró sostenerlo durante casi tres días completos, superando ampliamente a todos sus rivales y ganándose así el liderazgo militar supremo sobre las fuerzas de resistencia mapuche en un momento crítico del conflicto contra los españoles.

Bajo su mando, Caupolicán continuó la campaña de resistencia iniciada por Lautaro, obteniendo victorias importantes y manteniendo durante años una presión constante sobre las posiciones españolas en el territorio de la Araucanía. Finalmente, tras ser traicionado y capturado por tropas coloniales, fue sometido a una ejecución de una crueldad extrema, empalado públicamente en la plaza de la ciudad de Cañete en 1558 como forma de escarmiento destinado a intimidar a la resistencia mapuche restante; se dice que Caupolicán enfrentó su propia muerte con una entereza y un valor extraordinarios, sin proferir queja alguna pese al sufrimiento infligido, un comportamiento que impresionó profundamente incluso a sus propios verdugos. Su muerte, lejos de doblegar a su pueblo, se convirtió en un símbolo perdurable de dignidad y resistencia frente a la crueldad colonial, y su nombre sigue siendo honrado hasta hoy como uno de los grandes líderes de la historia mapuche.`,
    origen: 'Toqui mapuche elegido mediante la legendaria prueba del tronco.',
    dominio: 'El liderazgo militar y la resistencia hasta la muerte', naturaleza: 'Toqui legendario de la Guerra de Arauco', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'colo-colo', nombre: 'Colo Colo', nombre_griego: 'Colo Colo',
    epitetos: 'El Anciano Sabio, Árbitro de la Unidad',
    descripcion_corta: 'Anciano toqui y respetado consejero cuya sabiduría e imparcialidad evitaron una guerra civil entre los candidatos rivales al liderazgo militar mapuche.',
    descripcion_larga: `Colo Colo aparece en la tradición épica mapuche, particularmente en "La Araucana", como un anciano toqui de gran prestigio y sabiduría acumulada, respetado por todos los sectores de la sociedad mapuche precisamente por su imparcialidad y su capacidad de mediar en los conflictos internos que amenazaban constantemente con dividir a las distintas comunidades y linajes en un momento en que la unidad resultaba absolutamente indispensable frente a la amenaza externa española. Su papel más recordado ocurrió precisamente durante la disputa por el liderazgo militar supremo tras la muerte de un toqui anterior, cuando varios candidatos poderosos, cada uno respaldado por su propia facción, amenazaban con enfrentarse entre sí en un conflicto interno que habría debilitado gravemente la capacidad de resistencia mapuche.

Fue Colo Colo quien propuso la solución de la prueba del tronco como método pacífico y objetivo para determinar al nuevo toqui sin recurrir a las armas entre los propios mapuche, una idea que fue aceptada por todos los candidatos precisamente por el enorme respeto que la figura de Colo Colo inspiraba en toda la comunidad. Aunque su edad avanzada ya no le permitía liderar personalmente las campañas militares más exigentes, continuó ejerciendo un papel fundamental como consejero estratégico y voz de sabiduría dentro del consejo de lonkos y toquis durante buena parte de la Guerra de Arauco, encarnando el valor que la sociedad mapuche otorgaba tradicionalmente a la experiencia y la prudencia de sus mayores, cualidades asociadas directamente al propio Fücha dentro de la cosmovisión religiosa del pueblo.`,
    origen: 'Anciano toqui y consejero de gran prestigio dentro de la sociedad mapuche.',
    dominio: 'La sabiduría, la mediación y la unidad del pueblo', naturaleza: 'Toqui legendario y consejero', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'galvarino', nombre: 'Galvarino', nombre_griego: 'Galvarino',
    epitetos: 'El de las Manos de Hierro',
    descripcion_corta: 'Guerrero al que los españoles cortaron ambas manos como escarmiento — regresó al combate con dagas y garrotes atados a los muñones, decidido a seguir luchando.',
    descripcion_larga: `Galvarino era un guerrero mapuche capturado junto a un grupo de compañeros durante uno de los muchos enfrentamientos de la prolongada Guerra de Arauco, y sometido por los españoles a un castigo brutal pensado deliberadamente como escarmiento ejemplar destinado a desalentar a otros posibles rebeldes: la amputación de ambas manos, dejándolo así, según calculaban sus captores, incapacitado de manera permanente para volver a empuñar un arma o participar activamente en la resistencia contra la colonización.

Lejos de doblegarse ante esa mutilación, Galvarino regresó junto a su comunidad y, tras un periodo de recuperación, ideó la manera de continuar luchando de todas formas: se hizo atar dagas y garrotes cortos directamente a los muñones de sus antebrazos, transformando su propia mutilación en un arma nueva y aterradora, y volvió al campo de batalla decidido a que su ejemplo sirviera precisamente como lo contrario de lo que sus captores habían pretendido, es decir, como un símbolo de resistencia inquebrantable en lugar de sumisión forzada. Participó activamente en distintos enfrentamientos posteriores contra las fuerzas españolas, convirtiéndose en una figura de enorme valor simbólico dentro de la resistencia mapuche por la manera en que transformó una atrocidad sufrida en un motivo renovado de lucha. Su historia, recogida también en "La Araucana", se transmite hasta hoy como uno de los ejemplos más elocuentes de la determinación mapuche frente a la violencia colonial, un recordatorio de que ni siquiera la mutilación deliberada logró apagar la voluntad de resistir de quienes defendían su territorio y su forma de vida.`,
    origen: 'Guerrero mapuche mutilado por las fuerzas españolas durante la Guerra de Arauco.',
    dominio: 'La resistencia inquebrantable frente a la mutilación', naturaleza: 'Guerrero legendario de la Guerra de Arauco', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'fresia', nombre: 'Fresia', nombre_griego: 'Fresia',
    epitetos: 'La Esposa Desafiante de Caupolicán',
    descripcion_corta: 'Esposa de Caupolicán que, al verlo capturado, le arrojó a su propio hijo antes que aceptar criar al vástago de un hombre que consideraba deshonrado por la derrota.',
    descripcion_larga: `Fresia aparece en "La Araucana" de Alonso de Ercilla como la esposa de Caupolicán, el gran toqui mapuche capturado y ejecutado por los españoles en 1558, protagonizando uno de los episodios más impactantes y debatidos de toda la epopeya. Según el relato de Ercilla, cuando Caupolicán fue llevado prisionero ante ella tras su captura, Fresia, lejos de mostrar el duelo o la resignación que quizás se esperaba de ella, respondió con una furia desafiante, reprochándole públicamente a su esposo el haberse dejado capturar con vida en lugar de morir combatiendo, y considerando esa circunstancia una deshonra inaceptable para un toqui de su estatura.

En el momento culminante del episodio, tal como lo narra la épica, Fresia le arrojó a su propio hijo pequeño a los brazos, negándose a seguir criándolo bajo el peso de lo que ella interpretaba como la vergüenza de la derrota de su padre, un gesto de una dureza extrema que ha generado interpretaciones muy diversas entre los estudiosos posteriores del texto: algunos lo leen como una condena literaria más orientada a exaltar valores guerreros extremos que a reflejar fielmente la voz de una mujer mapuche real, mientras otros destacan en el episodio una forma de protesta política profunda contra la humillación colonial, incluso si la escena específica pudiera ser en gran medida una construcción literaria de Ercilla. Fresia, en cualquier caso, se ha mantenido en la memoria cultural chilena como un símbolo de la dignidad guerrera y del rechazo absoluto a cualquier forma de sumisión ante el poder colonial español.`,
    origen: 'Esposa de Caupolicán, figura de la épica "La Araucana".',
    dominio: 'La dignidad y el rechazo a la deshonra', naturaleza: 'Figura legendaria de la Guerra de Arauco', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'guacolda', nombre: 'Guacolda', nombre_griego: 'Guacolda',
    epitetos: 'La Amada de Lautaro',
    descripcion_corta: 'Compañera de Lautaro en la tradición literaria, presente junto a él en su campamento la noche del ataque español que le costó finalmente la vida.',
    descripcion_larga: `Guacolda es recordada dentro de la tradición literaria y popular chilena como la compañera o esposa del gran toqui Lautaro, presente junto a él durante buena parte de su campaña de resistencia contra las fuerzas españolas lideradas inicialmente por Pedro de Valdivia y, tras la muerte de este, por sus sucesores en el mando colonial. Su figura, tratada con especial ternura y romanticismo en distintas versiones posteriores de la historia de Lautaro —incluidas obras literarias y teatrales del siglo XIX y XX que retomaron y embellecieron la épica original de Ercilla—, representa el vínculo humano y afectivo detrás de la figura del gran estratega militar, humanizando a un personaje que de otro modo podría quedar reducido únicamente a sus hazañas de guerra.

Según la tradición, Guacolda se encontraba junto a Lautaro en su campamento la noche en que las fuerzas españolas, guiadas por indígenas colaboracionistas que conocían el terreno, lograron finalmente sorprenderlo en una emboscada nocturna en 1557, el ataque que terminaría con la vida del gran toqui tras años de resistencia exitosa. Algunas versiones narran que Guacolda intentó advertirle del peligro inminente o que compartió con él sus últimos momentos antes del ataque decisivo, consolidando su lugar en la memoria popular como testigo íntimo del final de uno de los grandes héroes de la resistencia mapuche. Aunque su existencia histórica concreta resulta más difícil de verificar documentalmente que la de Lautaro mismo, su figura permanece firmemente arraigada en la tradición cultural chilena como símbolo del amor y la lealtad en medio de la guerra.`,
    origen: 'Compañera de Lautaro según la tradición literaria chilena.',
    dominio: 'La lealtad y el amor en tiempos de guerra', naturaleza: 'Figura legendaria de la Guerra de Arauco', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'pelantaro', nombre: 'Pelantaro', nombre_griego: 'Pelantaro',
    epitetos: 'El Vencedor de Curalaba',
    descripcion_corta: 'Toqui que lideró la victoria mapuche más decisiva de toda la guerra, la batalla de Curalaba, que dio inicio a un siglo entero de independencia territorial.',
    descripcion_larga: `Pelantaro lideró en 1598 la batalla de Curalaba, considerada por buena parte de la historiografía como la victoria militar más decisiva obtenida por el pueblo mapuche en toda la extensa Guerra de Arauco, un enfrentamiento en el que las fuerzas mapuche bajo su mando sorprendieron y derrotaron de manera aplastante a un contingente español liderado por el propio gobernador de la época, Martín García Óñez de Loyola, que murió en el combate junto a la mayor parte de sus soldados. La victoria resultó tan contundente que provocó el colapso completo del sistema de ciudades españolas establecidas al sur del río Biobío, forzando el abandono definitivo de siete asentamientos coloniales importantes en la región.

Las consecuencias de Curalaba se extendieron mucho más allá del propio combate: la derrota marcó el inicio de un periodo de aproximadamente trescientos años durante los cuales el territorio situado al sur del Biobío permaneció efectivamente bajo control y soberanía mapuche, sin someterse plenamente al dominio colonial español, una situación excepcional en el contexto americano que solo terminaría formalmente con la llamada "Pacificación de la Araucanía" ya en el siglo XIX, tras la independencia de Chile. Pelantaro es recordado, por tanto, no solo como un hábil estratega militar capaz de infligir una derrota devastadora al ejército colonial, sino como el líder cuya victoria hizo posible la preservación de la autonomía mapuche durante generaciones enteras, un logro sin comparación directa entre los demás pueblos originarios sometidos por la conquista española en el continente.`,
    origen: 'Toqui mapuche, líder de la victoria de Curalaba en 1598.',
    dominio: 'La estrategia militar decisiva', naturaleza: 'Toqui legendario de la Guerra de Arauco', es_preview: 1
  },
  {
    tipo: 'heroe', slug: 'janequeo', nombre: 'Janequeo', nombre_griego: 'Janequeo',
    epitetos: 'La Toqui Guerrera',
    descripcion_corta: 'Mujer mapuche-huilliche que, tras la muerte de su esposo a manos españolas, asumió personalmente el liderazgo militar de la resistencia en la zona cordillerana.',
    descripcion_larga: `Janequeo fue una destacada líder mapuche-huilliche documentada en las crónicas coloniales de finales del siglo XVI, recordada por haber asumido directamente el liderazgo militar de la resistencia indígena en la zona precordillerana tras la muerte de su esposo, un cacique local, a manos de las fuerzas españolas. Lejos de replegarse ante esa pérdida, Janequeo organizó y comandó personalmente una serie de ataques coordinados contra los fuertes y asentamientos coloniales de la región, demostrando una capacidad de mando y una determinación que sorprendieron notablemente a los cronistas españoles de la época, poco habituados a documentar a mujeres al frente directo de campañas militares indígenas.

Bajo su liderazgo, las fuerzas que comandaba lograron destruir e incendiar varios fuertes españoles establecidos en la zona cordillerana, empleando un profundo conocimiento del terreno montañoso para tender emboscadas efectivas y evitar los enfrentamientos directos en campo abierto donde la caballería española mantenía ventaja. Las crónicas de la época, aunque escritas desde la perspectiva colonial y con frecuencia hostiles hacia los pueblos originarios en general, no pudieron dejar de reconocer la habilidad militar y la ferocidad de Janequeo, mencionándola explícitamente como una amenaza seria y persistente para la estabilidad de la frontera colonial durante varios años. Su figura ha sido recuperada en las últimas décadas como un símbolo particularmente relevante del papel activo que las mujeres mapuche desempeñaron en la resistencia armada, un aspecto de la historia frecuentemente eclipsado por el protagonismo narrativo otorgado tradicionalmente a figuras masculinas como Lautaro o Caupolicán.`,
    origen: 'Líder mapuche-huilliche documentada en las crónicas coloniales del siglo XVI.',
    dominio: 'El liderazgo militar femenino en la resistencia', naturaleza: 'Toqui legendaria de la Guerra de Arauco', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'anganamon', nombre: 'Anganamón', nombre_griego: 'Anganamón',
    epitetos: 'El Toqui de las Esposas Leales',
    descripcion_corta: 'Toqui documentado en las crónicas de cautiverio, cuyas propias esposas se quitaron la vida antes que ser entregadas a los españoles tras una negociación fallida.',
    descripcion_larga: `Anganamón fue un toqui mapuche activo durante las primeras décadas del siglo XVII, documentado con considerable detalle en crónicas de la época, especialmente en el relato de cautiverio del jesuita Alonso de Ovalle y en otros testimonios coloniales que registraron su papel dentro de las negociaciones y conflictos armados de ese periodo particular de la Guerra de Arauco. Se le describe como un líder de gran autoridad e influencia, capaz de reunir bajo su mando a distintas comunidades para sostener campañas coordinadas contra las posiciones españolas establecidas al sur del Biobío.

El episodio más recordado asociado a su figura involucra a varias de sus propias esposas, que se encontraban entre los cautivos ofrecidos como parte de un intercambio o negociación con las autoridades coloniales españolas; según narran las crónicas de la época, antes de que la entrega pudiera concretarse, estas mujeres optaron por quitarse la vida en lugar de aceptar ser trasladadas y entregadas al bando español, un acto que las propias fuentes coloniales, pese a su perspectiva generalmente hostil hacia los mapuche, no pudieron dejar de registrar con cierto asombro ante la determinación extrema que ese gesto reflejaba. El episodio, más allá del debate historiográfico sobre los detalles exactos de lo ocurrido, ha quedado como un testimonio elocuente del rechazo profundo que muchas mujeres mapuche sentían ante la perspectiva de la esclavitud o el cautiverio colonial, prefiriendo la muerte antes que someterse a esa condición, y de la propia autoridad y complejidad de las relaciones dentro del liderazgo de figuras como Anganamón durante los largos años de conflicto fronterizo.`,
    origen: 'Toqui mapuche del siglo XVII, documentado en crónicas de cautiverio.',
    dominio: 'El liderazgo militar y las negociaciones de frontera', naturaleza: 'Toqui histórico de la Guerra de Arauco', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'millalonco', nombre: 'Millalonco', nombre_griego: 'Millalonco',
    epitetos: 'El Toqui de la Gran Rebelión de 1655',
    descripcion_corta: 'Toqui que lideró un levantamiento general coordinado entre múltiples comunidades mapuche, arrasando fuertes y ciudades españolas en toda la frontera sur.',
    descripcion_larga: `Millalonco lideró en 1655 uno de los levantamientos generales más extensos y coordinados de toda la historia de la Guerra de Arauco, un alzamiento que logró reunir bajo un mismo esfuerzo militar a numerosas comunidades y linajes mapuche normalmente dispersos en sus propias campañas locales, articulando una ofensiva conjunta contra las posiciones españolas a todo lo largo de la extensa frontera sur del territorio colonial. La coordinación alcanzada bajo su liderazgo sorprendió notablemente a las autoridades coloniales, acostumbradas a enfrentar ataques más aislados o localizados por parte de comunidades individuales.

Bajo el mando de Millalonco, las fuerzas mapuche atacaron y destruyeron simultáneamente numerosos fuertes, estancias y asentamientos españoles distribuidos por toda la región fronteriza, provocando pérdidas humanas y materiales considerables para el bando colonial y obligando a las autoridades españolas a reorganizar por completo su estrategia defensiva en el sur del territorio. El levantamiento de 1655, conocido en parte de la historiografía como "la gran rebelión" o "la sublevación general", demostró una vez más la capacidad mapuche de reorganizarse y coordinar esfuerzos militares a gran escala pese a la ausencia de una estructura política centralizada permanente, una característica distintiva de la sociedad mapuche que sus adversarios españoles nunca lograron comprender ni contrarrestar del todo eficazmente. El nombre de Millalonco quedó asociado de manera permanente en la memoria histórica a este episodio particular de resistencia coordinada a gran escala.`,
    origen: 'Toqui mapuche, líder de la gran rebelión general de 1655.',
    dominio: 'La coordinación militar a gran escala', naturaleza: 'Toqui histórico de la Guerra de Arauco', es_preview: 0
  },

  // --- MONSTRUOS ---
  {
    tipo: 'monstruo', slug: 'caicai-vilu', nombre: 'Caicai Vilu', nombre_griego: 'Caicai Vilu',
    epitetos: 'La Serpiente del Mar, Desatadora del Diluvio',
    descripcion_corta: 'Serpiente primordial del mar que, furiosa, desató un diluvio devastador para inundar el mundo, obligando a su eterna rival Trentren Vilu a elevar los cerros.',
    descripcion_larga: `Caicai Vilu es la contraparte marina de Trentren Vilu dentro del gran mito fundacional del diluvio mapuche, una serpiente colosal de escamas oscuras y brillantes que gobierna las profundidades del océano y todas las fuerzas asociadas al agua salada, las mareas y las tormentas costeras. Según la tradición, Caicai Vilu, movida por la furia o el deseo de dominar por completo la tierra y sus habitantes, decidió en tiempos primordiales desatar un diluvio devastador, haciendo subir las aguas del mar sin descanso durante días con la intención de sumergir por completo el mundo conocido y a todos los seres que lo habitaban.

Ante esa amenaza, Trentren Vilu se enfrentó a ella en un combate cósmico prolongado, elevando montañas y cerros cada vez que Caicai Vilu lograba subir el nivel del agua, en una lucha de proporciones que terminó determinando la actual geografía costera y montañosa del territorio mapuche. Muchas de las personas que no lograron escapar a tiempo hacia las alturas fueron transformadas, según la tradición, en peces, aves marinas o en las propias rocas y peñascos que hoy salpican las costas del sur de Chile, un recordatorio permanente de la furia devastadora que Caicai Vilu desató en aquellos tiempos remotos. Aunque finalmente derrotada o al menos contenida por la resistencia de Trentren Vilu, la tradición sostiene que Caicai Vilu permanece latente en las profundidades del océano, y que las grandes tormentas, maremotos y crecidas repentinas del mar siguen siendo, hasta hoy, manifestaciones ocasionales de su ira ancestral todavía no completamente apaciguada.`,
    origen: 'Serpiente primordial del mar, rival eterna de Trentren Vilu.',
    dominio: 'El mar, las tormentas y el diluvio', naturaleza: 'Serpiente primordial devastadora', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'cherufe', nombre: 'Cherufe', nombre_griego: 'Cherufe',
    epitetos: 'El Devorador de Volcanes',
    descripcion_corta: 'Monstruo de fuego y roca fundida que habita en el interior de los volcanes, provocando erupciones cuando exige el sacrificio de una joven virgen.',
    descripcion_larga: `El Cherufe es uno de los seres más temidos de la tradición mapuche, una criatura monstruosa formada enteramente de roca ígnea al rojo vivo y fuego líquido que habita en las profundidades ardientes de los volcanes del territorio, particularmente aquellos ubicados en la zona sur de Chile. Se le describe con un cuerpo masivo y deforme, similar a un ser humanoide compuesto de magma fundido, capaz de desplazarse a través de los conductos subterráneos de los volcanes y de emerger ocasionalmente a la superficie provocando erupciones devastadoras cuando su hambre o su furia alcanzan un punto crítico.

Según la tradición, el Cherufe experimenta periódicamente un hambre voraz que solo puede saciarse mediante el sacrificio de una joven doncella virgen, arrojada a su cráter como ofrenda para calmar su apetito y evitar así que su furia se manifieste en forma de una erupción volcánica catastrófica capaz de destruir comunidades enteras a su alrededor. Las comunidades que habitaban bajo la sombra directa de los grandes volcanes vivían con la conciencia constante de esta amenaza latente, y ciertas señales previas a una erupción —temblores más frecuentes, ruidos subterráneos, cambios en el color del humo que escapaba del cráter— eran interpretadas como advertencias directas de que el Cherufe se estaba agitando en las profundidades. Algunas versiones más recientes del relato mezclan la figura del Cherufe con la del Pillán volcánico, sugiriendo que ambos conceptos, aunque de origen distinto, terminaron entrelazándose con el tiempo dentro de la tradición oral popular como explicación de la actividad volcánica de la cordillera.`,
    origen: 'Monstruo de fuego y roca fundida que habita los volcanes.',
    dominio: 'El fuego volcánico y las erupciones', naturaleza: 'Monstruo elemental de fuego', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'piuchen', nombre: 'Piuchen', nombre_griego: 'Piuchén',
    epitetos: 'La Serpiente Voladora, Presagio de Muerte',
    descripcion_corta: 'Serpiente alada capaz de volar y silbar de manera aterradora, considerada un mal augurio directo cuya sola presencia anuncia enfermedad o muerte cercana.',
    descripcion_larga: `El Piuchén es una criatura temida a lo largo de todo el territorio mapuche y también en gran parte de la tradición popular chilena en general, descrita generalmente como una serpiente de gran tamaño dotada de alas membranosas que le permiten volar, aunque algunas versiones locales la describen en cambio como un reptil con apariencia parcial de otros animales, incluidos rasgos de murciélago o de ave rapaz según la región. Su rasgo más distintivo es un silbido penetrante y aterrador que emite al desplazarse por el aire durante la noche, un sonido que, según la creencia popular, resultaba suficiente por sí solo para provocar parálisis, enfermedad o incluso la muerte en cualquier persona que lo escuchara demasiado de cerca.

Se creía que el Piuchén era, en muchos casos, una creación o una herramienta directa de los kalku, los brujos maléficos que practicaban magia oscura dentro de la tradición mapuche, empleada específicamente para atacar a enemigos personales o para sembrar el terror en una comunidad rival. Su sola presencia sobrevolando una zona determinada se interpretaba como un presagio funesto casi inequívoco, y las familias que sospechaban de su cercanía recurrían de inmediato a una machi para realizar los rituales de protección necesarios antes de que la criatura pudiera causar daño real. Algunas narrativas más específicas sostienen que el Piuchén nacía a partir de una oveja o un animal doméstico maldecido por brujería, transformado gradualmente en esta criatura monstruosa como resultado de un maleficio prolongado, reforzando el vínculo estrecho que la tradición mapuche establecía entre esta criatura y las prácticas de magia negra más temidas de su cosmovisión.`,
    origen: 'Serpiente alada asociada a la brujería maligna.',
    dominio: 'El presagio de muerte y la brujería', naturaleza: 'Criatura voladora de mal augurio', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'chonchon', nombre: 'Chonchón', nombre_griego: 'Chonchón',
    epitetos: 'La Cabeza Voladora de la Bruja',
    descripcion_corta: 'Cabeza desprendida de un kalku que vuela de noche usando sus propias orejas como alas, emitiendo un chillido característico que anuncia su siniestra presencia.',
    descripcion_larga: `El Chonchón es una de las manifestaciones más inquietantes de la brujería mapuche, resultado directo de una transformación que solo los kalku más poderosos y experimentados eran capaces de realizar: separar su propia cabeza del resto del cuerpo durante la noche, dejando este último oculto y protegido en algún lugar seguro, mientras la cabeza volaba libremente por el aire utilizando sus propias orejas, extraordinariamente agrandadas por el poder de la transformación, a modo de alas funcionales que le permitían desplazarse largas distancias en busca de víctimas o de información útil para su brujería.

El sonido característico asociado al Chonchón, un chillido agudo y repetitivo descrito popularmente como "tue, tue, tue", se consideraba una advertencia inequívoca de su presencia cercana, y quienes lo escuchaban debían tomar precauciones inmediatas, ya que se creía que el Chonchón aprovechaba sus vuelos nocturnos para espiar a sus enemigos, robar objetos personales necesarios para maleficios posteriores, o directamente causar pesadillas y enfermedades a quienes dormían desprotegidos. Existía además una creencia específica sobre cómo neutralizar temporalmente a un Chonchón: si alguien lograba localizar y mover el cuerpo decapitado que el kalku había dejado escondido durante su vuelo, cambiándolo de posición o colocándolo boca abajo, la cabeza voladora quedaba incapacitada para reunirse de nuevo con él al amanecer, condenando potencialmente al brujo responsable a una muerte lenta o a quedar atrapado permanentemente en su forma de cabeza voladora, sin poder jamás recuperar su cuerpo completo.`,
    origen: 'Transformación nocturna de un kalku (brujo maligno) mapuche.',
    dominio: 'El espionaje nocturno y la brujería', naturaleza: 'Cabeza voladora transformada por brujería', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'wekufe', nombre: 'Wekufe', nombre_griego: 'Wekufe',
    epitetos: 'El Mal Genérico, Enemigo de Todo lo Vivo',
    descripcion_corta: 'Término general para toda entidad o fuerza espiritual maligna dentro de la cosmovisión mapuche, opuesta activamente a Ngenechen y al bienestar de la comunidad.',
    descripcion_larga: `Wekufe (también escrito wekufü o huecufe según la fuente) es el concepto general dentro de la cosmovisión mapuche que designa a toda entidad o fuerza espiritual de naturaleza fundamentalmente maligna, opuesta activamente al bienestar de las personas y de la comunidad, y enfrentada en última instancia a Ngenechen y al orden armonioso que este sostiene sobre el mundo. Más que un ser único con una biografía propia, el wekufe funciona como una categoría amplia que engloba una gran variedad de manifestaciones del mal: puede tratarse de un espíritu invisible que causa enfermedad al infiltrarse en el cuerpo de una víctima, de una fuerza que anima a criaturas monstruosas como el Piuchén o el Chonchón, o de la presencia general y difusa detrás de cualquier desgracia inexplicable que afecte a una persona o a toda una comunidad.

Combatir al wekufe constituye una de las funciones centrales y más exigentes del trabajo de las machis, que dedican buena parte de sus ceremonias de sanación precisamente a diagnosticar la presencia de esta influencia maligna dentro del cuerpo de un enfermo y a expulsarla mediante cantos rituales, el uso del kultrún —el tambor ceremonial sagrado— y la invocación de fuerzas protectoras como Meulen, capaces de contrarrestar directamente su influencia dañina. Los kalku, los brujos que practicaban magia oscura dentro de la sociedad mapuche, eran considerados precisamente aquellos individuos que habían optado por aliarse deliberadamente con el wekufe en lugar de combatirlo, obteniendo a cambio poderes destructivos que empleaban contra sus enemigos personales, una alianza que la comunidad consideraba una de las transgresiones morales y espirituales más graves posibles dentro de su sistema de creencias.`,
    origen: 'Concepto general del mal espiritual dentro de la cosmovisión mapuche.',
    dominio: 'El mal, la enfermedad y la desgracia', naturaleza: 'Fuerza espiritual maligna genérica', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'anchimallen', nombre: 'Anchimallen', nombre_griego: 'Anchimallen',
    epitetos: 'El Espíritu de Luz Fantasma',
    descripcion_corta: 'Pequeño espíritu luminoso, sirviente de los kalku, que aparece de noche como una luz errante en los campos, guiando a los brujos hacia sus objetivos.',
    descripcion_larga: `El Anchimallen es un pequeño espíritu asociado directamente a la brujería mapuche, descrito tradicionalmente como una luz tenue y errante, similar a los fenómenos conocidos en otras tradiciones como fuegos fatuos, que aparece de noche flotando sobre campos, caminos rurales o zonas cercanas a cementerios, generalmente al servicio directo de un kalku que lo emplea como sirviente o mensajero para llevar a cabo tareas específicas relacionadas con su brujería, incluida la localización de posibles víctimas o la vigilancia de enemigos.

Según algunas versiones de la tradición, el Anchimallen podía adoptar también la forma de un niño pequeño de piel extrañamente luminosa, capaz de aparecer brevemente ante los viajeros nocturnos antes de desvanecerse de nuevo en la oscuridad, un rasgo que añadía una capa adicional de inquietud a los encuentros con esta criatura, dado que combinaba la apariencia inocente de un infante con la naturaleza siniestra de su verdadero propósito al servicio de la magia oscura. Encontrarse con un Anchimallen durante un viaje nocturno se consideraba generalmente un mal augurio, señal de que un kalku cercano estaba activo y posiblemente dirigiendo su atención maligna hacia la persona o la familia que presenciaba el fenómeno. Las machis, al ser consultadas sobre avistamientos de este tipo, solían recomendar de inmediato rituales de protección específicos para la vivienda y sus habitantes, buscando anticiparse a cualquier maleficio que el kalku responsable pudiera estar preparando contra ellos.`,
    origen: 'Espíritu luminoso sirviente de los kalku (brujos malignos).',
    dominio: 'El servicio nocturno a la brujería', naturaleza: 'Espíritu luminoso menor', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'trauco', nombre: 'Trauco', nombre_griego: 'Trauco',
    epitetos: 'El Seductor del Bosque Chilote',
    descripcion_corta: 'Espíritu del bosque de Chiloé, deforme pero de mirada hipnótica, al que tradicionalmente se atribuían los embarazos de mujeres jóvenes solteras sin explicación aparente.',
    descripcion_larga: `El Trauco es una de las figuras más conocidas y singulares de la mitología chilota, descrito como un ser pequeño y deforme, de piernas cortas y torcidas, vestido con ropas hechas de corteza y musgo, que habita permanentemente en lo profundo del bosque nativo del archipiélago de Chiloé, portando siempre consigo un hacha de piedra pequeña con la que, según la tradición, se abre camino entre la vegetación más densa. Pese a su apariencia física poco agraciada, el Trauco posee una mirada hipnótica y un poder de seducción irresistible sobre las mujeres jóvenes, especialmente las solteras, a quienes atraía hacia el bosque mediante su influjo mágico sin que ellas pudieran resistirse conscientemente a su llamado.

Dentro de la sociedad tradicional chilota, profundamente marcada por normas sociales conservadoras respecto a la sexualidad femenina fuera del matrimonio, la figura del Trauco cumplía históricamente una función social muy específica: servía como explicación culturalmente aceptable para embarazos de mujeres jóvenes solteras que, de otro modo, habrían enfrentado un juicio social severo por parte de su comunidad, permitiéndoles atribuir la situación a la influencia sobrenatural e irresistible de esta criatura en lugar de a una relación humana que pudiera acarrear consecuencias sociales más graves para ambas partes involucradas. Se recomendaba a las jóvenes portar ciertos amuletos protectores y evitar adentrarse solas en el bosque, especialmente durante determinadas épocas del año consideradas de mayor actividad del Trauco, para resguardarse de su influjo. La Fiura, su contraparte femenina dentro de la misma tradición chilota, cumplía un rol equivalente pero dirigido hacia los hombres jóvenes de la comunidad.`,
    origen: 'Espíritu del bosque de la tradición chilota.',
    dominio: 'La seducción irresistible en el bosque', naturaleza: 'Espíritu deforme del bosque', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'fiura', nombre: 'Fiura', nombre_griego: 'Fiura',
    epitetos: 'La Seductora Fea del Bosque Chilote',
    descripcion_corta: 'Espíritu femenino del bosque de Chiloé, de apariencia grotesca pero aliento hipnótico, que enloquece de deseo a los hombres jóvenes que se cruzan en su camino.',
    descripcion_larga: `La Fiura es la contraparte femenina del Trauco dentro de la rica tradición mitológica del archipiélago de Chiloé, descrita como una mujer de apariencia física extremadamente desagradable —de ahí deriva directamente su propio nombre, relacionado con la palabra "fea"— que habita también en lo profundo del bosque nativo, generalmente cerca de cascadas, esteros o pozones de agua dulce dentro de la vegetación más cerrada de la isla. Pese a su fealdad física evidente, la Fiura posee un aliento y una mirada de un poder hipnótico extraordinario, capaz de enloquecer de deseo irresistible a cualquier hombre joven que se cruzara accidentalmente en su camino durante sus paseos por el bosque.

Se creía que los hombres seducidos por la Fiura quedaban después marcados de manera permanente, incapaces de sentir atracción normal hacia ninguna mujer mortal tras haber sido expuestos a su influjo, condenados a una existencia de deseo insatisfecho o de comportamiento errático que la comunidad interpretaba como consecuencia directa e inequívoca de ese encuentro sobrenatural. Al igual que ocurría con el Trauco en el caso de las mujeres solteras embarazadas, la figura de la Fiura cumplía tradicionalmente una función social específica dentro de la comunidad chilota, sirviendo como explicación aceptada culturalmente para comportamientos masculinos considerados anómalos, adicciones o cambios bruscos de carácter que de otra manera habrían carecido de una explicación satisfactoria dentro del marco cultural tradicional de la isla. Ambas figuras, Trauco y Fiura, permanecen hasta hoy profundamente arraigadas en la identidad folclórica chilota, presentes en el arte popular y las narraciones orales que los isleños continúan transmitiendo.`,
    origen: 'Espíritu del bosque de la tradición chilota, contraparte del Trauco.',
    dominio: 'La seducción irresistible masculina', naturaleza: 'Espíritu femenino del bosque', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'invunche', nombre: 'Invunche', nombre_griego: 'Invunche',
    epitetos: 'El Guardián Deforme de la Cueva de los Brujos',
    descripcion_corta: 'Criatura horriblemente deformada mediante rituales crueles, empleada por la legendaria sociedad secreta de brujos chilotes como guardián inamovible de sus cuevas.',
    descripcion_larga: `El Invunche es quizás la figura más perturbadora de toda la tradición mitológica chilota, directamente vinculada a la leyenda de la Recta Provincia o "Mayoría", una sociedad secreta de brujos que, según la creencia popular extendida en el archipiélago, operaba desde cuevas ocultas a lo largo de la isla practicando magia oscura y manteniendo un control encubierto sobre distintos aspectos de la vida local. El Invunche cumplía dentro de esa sociedad secreta la función específica de guardián permanente de la entrada a estas cuevas, un ser transformado deliberadamente mediante rituales de una crueldad extrema para volverlo completamente incapaz de abandonar su puesto.

Según la tradición, el Invunche era en su origen un bebé secuestrado —a veces el hijo primogénito de una familia local, en ocasiones directamente hijo de una madre soltera— sometido desde su primera infancia a una serie de mutilaciones y deformaciones rituales progresivas: se le doblaba y fijaba una pierna sobre la espalda hasta que quedaba permanentemente fusionada en esa posición, se le practicaba una incisión bajo la lengua para insertar en ella un objeto que le impedía hablar con claridad, y se le alimentaba exclusivamente con carne humana para asegurar su total dependencia y lealtad hacia la sociedad de brujos que lo mantenía cautivo. El resultado era una criatura físicamente deforme, con una sola pierna funcional, apenas capaz de emitir sonidos guturales ininteligibles, pero dotada de una fuerza descomunal, empleada exclusivamente para custodiar la entrada de la cueva e impedir que cualquier intruso no autorizado lograra acceder a los secretos y actividades de la sociedad secreta de brujos que lo había creado y mantenía cautivo de por vida.`,
    origen: 'Bebé secuestrado y deformado ritualmente por la legendaria sociedad de brujos de Chiloé.',
    dominio: 'La custodia de las cuevas de los brujos', naturaleza: 'Criatura deformada por brujería', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'caleuche', nombre: 'Caleuche', nombre_griego: 'Caleuche',
    epitetos: 'El Buque Fantasma de las Aguas Chilotas',
    descripcion_corta: 'Barco fantasma resplandeciente que navega de noche por los canales de Chiloé, tripulado por brujos y por las almas de quienes murieron ahogados en el mar.',
    descripcion_larga: `El Caleuche es un barco fantasma legendario que, según la extensa tradición marítima chilota, navega de noche por los canales, fiordos y aguas interiores del archipiélago de Chiloé, iluminado por completo con una luz propia intensa y acompañado siempre de música, cantos y sonidos de fiesta que se escuchan claramente incluso a considerable distancia, aunque el barco mismo resulta prácticamente imposible de localizar visualmente para quien intenta observarlo directamente, dado que posee la capacidad de camuflarse instantáneamente adoptando la apariencia de un simple peñasco rocoso o de una masa de niebla si sospecha que está siendo espiado.

Se creía que el Caleuche estaba tripulado principalmente por brujos pertenecientes a la sociedad secreta de la Recta Provincia, así como por las almas de marineros y pescadores fallecidos ahogados en el mar, que encontraban en este buque fantasma una suerte de existencia continuada tras su muerte física, navegando eternamente por las aguas que en vida habían recorrido. El barco tenía además la reputación de secuestrar ocasionalmente a personas vivas que se encontraban navegando solas de noche, llevándoselas a bordo para que sirvieran temporalmente a la tripulación, y quienes lograban regresar de esa experiencia solían quedar con alguna secuela física visible, como una pierna o un brazo torcido de manera permanente, prueba tangible ante la comunidad de que efectivamente habían estado a bordo del Caleuche. Los pescadores tradicionales de Chiloé evitaban tradicionalmente hacerse a la mar en solitario durante ciertas noches consideradas de mayor actividad del buque fantasma, prefiriendo esperar hasta el amanecer antes de aventurarse en las aguas donde se creía que el Caleuche solía aparecer con mayor frecuencia.`,
    origen: 'Barco fantasma de la tradición marítima chilota.',
    dominio: 'Las aguas nocturnas y el destino de los ahogados', naturaleza: 'Buque fantasma tripulado por brujos y espíritus', es_preview: 1
  },
  {
    tipo: 'monstruo', slug: 'nguruvilu', nombre: 'Ngürüvilu', nombre_griego: 'Ngürüvilu',
    epitetos: 'El Zorro-Serpiente de los Ríos',
    descripcion_corta: 'Criatura acuática con cuerpo de serpiente y cabeza de zorro que habita ríos y esteros, arrastrando con su cola a quienes cruzan el agua sin la debida precaución.',
    descripcion_larga: `El Ngürüvilu (nombre que combina ngürü, "zorro", con filu o vilu, "serpiente") es una criatura híbrida temida a lo largo de todo el territorio mapuche, descrita generalmente con el cuerpo largo y sinuoso de una serpiente combinado con la cabeza y los rasgos faciales característicos de un zorro, habitando permanentemente en ríos, esteros y pozones de agua dulce donde acecha con paciencia a quienes intentan cruzar o vadear las corrientes sin la debida precaución ritual previa.

Se creía que el Ngürüvilu era responsable directo de numerosos ahogamientos ocurridos en ríos y esteros del territorio mapuche, atrapando a sus víctimas con su larga cola serpentina, similar a un lazo o una soga viviente, y arrastrándolas hacia las profundidades antes de que pudieran pedir auxilio o escapar de su agarre. Las crecidas repentinas e inexplicables de ciertos cursos de agua, especialmente aquellas que ocurrían sin relación aparente con lluvias recientes, se atribuían con frecuencia a la actividad del Ngürüvilu agitándose en su guarida subacuática. Antes de cruzar un río considerado peligroso o de reputación dudosa, era costumbre realizar una breve ofrenda o palabra ritual dirigida tanto a Ngen Ko, el espíritu-dueño general del agua, como específicamente destinada a mantener alejado al Ngürüvilu de esa zona particular durante el cruce. Las machis, consultadas después de un ahogamiento sin explicación clara, atribuían con frecuencia el suceso a la intervención directa de esta criatura, recomendando rituales de purificación adicionales para el resto de la comunidad que debía seguir utilizando esas mismas aguas en su vida cotidiana.`,
    origen: 'Criatura acuática híbrida de los ríos y esteros mapuche.',
    dominio: 'Los ríos y los ahogamientos', naturaleza: 'Criatura acuática depredadora', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'huallepen', nombre: 'Huallepén', nombre_griego: 'Huallepén',
    epitetos: 'La Cría Deforme de los Esteros',
    descripcion_corta: 'Criatura deforme mitad ternero y mitad humana que ronda esteros y pantanos, cuya sola presencia bastaba para causar deformidades en los animales recién nacidos.',
    descripcion_larga: `El Huallepén es una criatura de apariencia deforme y perturbadora dentro de la tradición mapuche y del folclore chilote general, descrita como un ser híbrido con rasgos que combinan los de un ternero o cordero recién nacido con características humanoides parciales, habitando generalmente en esteros, pantanos y zonas húmedas apartadas de los asentamientos principales. Su origen, según distintas versiones de la tradición, se remontaba a la unión antinatural entre un animal doméstico y un ser humano, un tabú sexual severamente condenado dentro de la moral tradicional mapuche y chilota, cuya transgresión daba origen precisamente a esta descendencia monstruosa como castigo o consecuencia directa del acto prohibido.

Se creía que la sola presencia o cercanía del Huallepén, sin necesidad de contacto físico directo alguno, bastaba para provocar deformidades congénitas en los animales recién nacidos de granjas y establecimientos cercanos a su territorio de merodeo habitual, razón por la que su avistamiento generaba gran preocupación entre los campesinos y crianceros de la zona, que solían recurrir de inmediato a rituales de protección específicos para resguardar a su ganado de esa influencia dañina. El sonido de su llanto, similar al balido de un cordero recién nacido pero con un tono considerado antinaturalmente distorsionado, se describía como profundamente perturbador para quien lo escuchaba de cerca durante la noche. Al igual que otras criaturas de la tradición chilota vinculadas a transgresiones sexuales o sociales, el Huallepén cumplía en parte una función moralizante dentro de la cultura popular, reforzando de manera indirecta las normas comunitarias sobre el comportamiento apropiado hacia los animales domésticos.`,
    origen: 'Criatura deforme originada de una unión antinatural, según la tradición mapuche y chilota.',
    dominio: 'Las deformidades del ganado y los esteros', naturaleza: 'Criatura híbrida deforme', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-mapuche'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-mapuche" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando heroes y monstruos de Mitologia Mapuche (parte 2)...\n');
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
