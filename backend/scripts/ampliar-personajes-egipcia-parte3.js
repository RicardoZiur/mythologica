// ============================================================
// scripts/ampliar-personajes-egipcia-parte3.js
// ------------------------------------------------------------
// Amplia monstruos (3), heroes (4) y mortales (6) de Mitologia
// Egipcia con un parrafo extra en descripcion_larga -- mismo
// criterio que las partes 1 y 2 (fuentes clasicas, papiros
// concretos, arqueologia, personajes historicos reales). Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-egipcia-parte3.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- MONSTRUOS ---
  akhekh: `Un raro demonio compuesto de serpiente, antílope y ave, mencionado en un puñado de textos funerarios y mágicos, considerado enemigo de Ra en un papel parecido al de Apofis pero muchísimo menos prominente, presente sobre todo en conjuros pensados para repeler o destruir criaturas hostiles que amenazaban el viaje nocturno del dios solar. Su propia oscuridad resulta reveladora: los textos religiosos egipcios catalogaban decenas de entidades hostiles menores más allá de Apofis, cada una con su propio hechizo específico, reflejo de una cosmología donde el caos no se imaginaba como un único enemigo sino como todo un bestiario que los sacerdotes necesitaban nombrar con precisión para poder combatirlo.`,

  amit: `"Devoradora de los Muertos", criatura compuesta con cabeza de cocodrilo, cuartos delanteros de león o leopardo y cuartos traseros de hipopótamo -- combinando a los tres depredadores más temidos del Nilo en una sola imagen de juicio final. Aguarda junto a la balanza en el Pesaje del Corazón (conjuro 125 del Libro de los Muertos): si el corazón pesa más que la pluma de Maat, Amit lo devora, provocando la "segunda muerte", la no existencia absoluta, un destino considerado mucho peor que la muerte física por borrar toda esperanza de más allá. Casi nunca aparece realmente devorando un corazón en el arte egipcio conservado: prácticamente todas las escenas de juicio muestran al difunto superando la prueba, porque esas imágenes se hacían para garantizar el resultado, no para representar el fracaso.`,

  apofis: `Serpiente primordial del caos, enemiga eterna de Ra, que ataca la barca solar cada noche al cruzar el inframundo, obligando a Set y a otros dioses a defenderla con fuerza y magia combinadas. A diferencia de Set, Apofis no tiene culto ni papel redimible alguno -- solo rituales de "execración", conservados de forma más completa en el Papiro Bremner-Rhind (compilación conocida como el "Libro para derrocar a Apofis"), donde los sacerdotes escupían, pisoteaban, mutilaban y quemaban ritualmente cada día efigies de cera o papiro de la serpiente en templos de todo Egipto, reactuando mágicamente la victoria nocturna de Ra para garantizar que el sol volviera a salir. Los eclipses solares se interpretaban a veces como el instante aterrador en que Apofis casi lograba su objetivo.`,

  // --- HEROES ---
  djedi: `El anciano mago del Papiro Westcar (una colección de relatos del Reino Medio ambientada en la corte del faraón del Reino Antiguo Jufu, copiada en un papiro hoy en Berlín), famoso por reunir las cabezas cortadas de un ganso, un pelícano y un buey, y por revelar a Jufu la ubicación de las "cámaras secretas de Thot". Su historia anticipa explícitamente el nacimiento de los tres primeros reyes de la Quinta Dinastía a partir de Ruddyedet, lo que convierte al Papiro Westcar en propaganda dinástica disfrazada de cuento de entretenimiento, legitimando mediante una profecía ficticia la transición histórica real de la Cuarta a la Quinta Dinastía.`,

  imhotep: `Una figura inusual entre los dioses egipcios por ser, en origen, una persona histórica real: canciller, sumo sacerdote y arquitecto del faraón Zoser de la Tercera Dinastía (hacia el siglo XXVII a.C.), a quien se atribuye el diseño de la Pirámide Escalonada de Saqqara, el edificio monumental de piedra a gran escala más antiguo de la historia. Fue deificado cerca de dos mil años después de su muerte, ya en el periodo tardío, venerado como dios de la medicina y la sabiduría, identificado por los griegos con Asclepio; su centro de culto en Saqqara se convirtió en destino de peregrinación para enfermos que buscaban sueños curativos. Es uno de los pocos egipcios no reales jamás elevados a la divinidad plena.`,

  setna: `También inspirado libremente en una figura histórica real, el príncipe Khaemuaset, cuarto hijo de Ramsés II, recordado en su propia época como anticuario que restauró e inscribió monumentos y pirámides ya milenarias en su tiempo -- prácticamente el primer arqueólogo conocido de la historia. Siglos después de su muerte se convirtió en protagonista de un ciclo de relatos en demótico (el Ciclo de Setna, conservado en papiros de época ptolemaica y romana) en los que roba un libro de magia de una tumba, es castigado con visiones del inframundo, y debe devolverlo -- historias que reflejan una ansiedad muy egipcia sobre la violación de tumbas, irónica tratándose de un personaje inspirado en alguien que dedicó su carrera real a restaurar y entrar en sepulcros antiguos.`,

  ubaoner: `Sacerdote-mago de otro de los relatos del Papiro Westcar, que al descubrir la infidelidad de su esposa fabrica un cocodrilo de cera que, arrojado al agua, cobra vida real y arrastra al amante hasta el fondo -- para presentar después ante el propio faraón el cocodrilo (con el amante todavía vivo dentro) y resolver el castigo mediante la justicia real en vez de la venganza personal. Como los demás relatos de Westcar, muestra en acción a los prodigiosos "sacerdotes lectores" (jeri-heb), una clase sacerdotal real cuya especialidad era recitar textos mágicos y rituales en voz alta, y cuya destreza era un tema recurrente de la narrativa popular egipcia.`,

  // --- MORTALES ---
  bata: `Protagonista del Cuento de los Dos Hermanos (Papiro D'Orbiney, Nuevo Reino, hoy en el Museo Británico), una historia compleja de acusación falsa, automutilación para demostrar su inocencia, muerte y sucesivas transmigraciones -- primero en un toro, luego en dos árboles de persea, y finalmente renacido como rey humano tras ser tragado, hecho astilla, por su propia exesposa. Los motivos del relato repiten de cerca elementos del mito de Osiris (muerte, desmembramiento/transformación, resurrección a través de una figura femenina), y varios egiptólogos lo leen en parte como una versión moralizante y doméstica de esos mismos temas osiríacos, trasladados a un drama familiar cotidiano.`,

  hatshepsut: `Faraona histórica de la Dinastía XVIII (h. 1479-1458 a.C.), una de las pocas mujeres que gobernó Egipto con titulatura real completa, representada en escultura con la tradicional barba postiza y las insignias masculinas de la realeza pese a que las inscripciones se refieren a ella claramente como mujer. Su templo funerario en Deir el-Bahari, el Dyeser-Dyeseru, sigue siendo uno de los monumentos más impactantes arquitectónicamente de todo el antiguo Egipto. Tras su muerte, su sucesor Tutmosis III ordenó, décadas después, borrar o retirar buena parte de su estatuaria y cartuchos -- un acto que los historiadores ya no interpretan tanto como venganza personal, sino como un intento de suavizar en el registro oficial de sucesión un reinado femenino considerado anómalo.`,

  khufu: `Faraón histórico de la Cuarta Dinastía (hacia el siglo XXVI a.C.), constructor de la Gran Pirámide de Guiza, la mayor pirámide jamás erigida y la única superviviente de las Siete Maravillas del Mundo Antiguo. Se sabe sorprendentemente poco de él como persona: la única imagen contemporánea confirmada es una diminuta estatuilla de marfil de apenas 7,5 cm hallada en Abidos, desproporcionadamente pequeña frente a la escala de su monumento. Siglos después, el Papiro Westcar lo reimagina como un rey curioso y accesible entretenido con relatos de magos en su corte, muy distinto de la reputación posterior y más dura que recoge Heródoto (Historias II, 124), que lo describe como un tirano que cerró templos y esclavizó a su pueblo para la construcción.`,

  'ramses-ii': `Faraón histórico de la Dinastía XIX (h. 1279-1213 a.C.), uno de los gobernantes egipcios más longevos y prolíficos en construcción (Abu Simbel, el Rameseo, ampliaciones en Karnak y Luxor), y el faraón más asociado, aunque sin confirmación histórica concluyente, con el relato bíblico del Éxodo en la cultura popular moderna. Libró la Batalla de Qadesh contra los hititas (h. 1274 a.C.) y firmó después con Hattusili III lo que suele citarse como el tratado de paz más antiguo conservado de la historia, inscrito en versiones egipcia e hitita. Su momia, notablemente bien conservada, recibió incluso un pasaporte egipcio en 1974 para viajar a Francia y someterse a tratamiento de conservación.`,

  ruddjedet: `Madre de los tres primeros reyes de la Dinastía V en el relato del Papiro Westcar, concebidos según el cuento como hijos literales del dios Ra, asistida en un parto difícil pero aliviado por magia por las diosas Isis, Neftis, Meskhenet y Heket disfrazadas de músicas o parteras itinerantes. El relato termina con cada recién nacido marcado al nacer con insignias reales -- un mito fundacional que legitima a la histórica Dinastía V, cuyos primeros reyes (Userkaf, Sahura y Neferirkara) sí mostraron, según confirma el registro arqueológico de forma independiente, un giro real hacia el culto solar de Ra, incluyendo la construcción de templos solares propios sin equivalente en ningún otro periodo egipcio.`,

  sinuhe: `Protagonista de la Historia de Sinuhé, considerada la obra maestra de la literatura clásica del Egipto Medio, tan admirada en la Antigüedad que generaciones de escribas la copiaron como texto de entrenamiento caligráfico durante más de mil años tras su composición (h. siglo XX a.C.); se conservan decenas de copias. Sinuhé huye de Egipto tras oír de la conspiración que asesina al faraón Amenemhat I, se construye una nueva vida entre tribus semitas del Levante, pero pasa el exilio anhelando ser enterrado como corresponde en Egipto -- el núcleo emocional del relato es, en esencia, el terror a morir y ser sepultado fuera de la propia tierra, reflejo de cuán central era un entierro egipcio correcto para la ansiedad religiosa de la época.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-egipcia'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-egipcia".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando monstruos, heroes y mortales de Mitologia Egipcia (parte 3)...\n');
  const libroId = await obtenerLibroId();
  const [filas] = await pool.query('SELECT id, slug, nombre, descripcion_larga FROM personajes WHERE libro_id = ?', [libroId]);
  const porSlug = {};
  filas.forEach(f => { porSlug[f.slug] = f; });

  for (const [slug, extra] of Object.entries(DATOS)) {
    const personaje = porSlug[slug];
    if (!personaje) {
      console.log(`  ! Personaje "${slug}" no encontrado, se salta.`);
      continue;
    }
    if (personaje.descripcion_larga.includes(extra.slice(0, 40))) {
      console.log(`  - "${personaje.nombre}" ya tenia este agregado.`);
      continue;
    }
    const nuevoTexto = `${personaje.descripcion_larga}\n\n${extra}`;
    await pool.query('UPDATE personajes SET descripcion_larga = ? WHERE id = ?', [nuevoTexto, personaje.id]);
    console.log(`  - "${personaje.nombre}" ampliado.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
