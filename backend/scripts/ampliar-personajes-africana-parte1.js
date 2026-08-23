// ============================================================
// scripts/ampliar-personajes-africana-parte1.js
// ------------------------------------------------------------
// Amplia titanes (5) y dioses (15) de Mitologia Africana con un
// parrafo extra en descripcion_larga -- caracteristicas
// adicionales, practicas rituales reales y relatos secundarios
// que no estaban cubiertos en el seed original. Simbolos/poderes/
// familia ya fueron poblados por sembrar-detalles-africana.js, asi
// que este script NO los toca. Idempotente (chequea si el extra ya
// esta presente antes de agregarlo).
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-africana-parte1.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- TITANES ---
  mawu: `Dentro del culto vodún practicado hasta hoy en Benín y Togo, Mawu recibe libaciones específicas asociadas al lado izquierdo y a la luna nueva, y su templo más venerado se encuentra en la región de Dassa-Zoumè, considerada morada terrenal de la propia diosa. Su naturaleza gemela junto a Lisa refleja además una institución social real y profundamente arraigada entre el pueblo fon: la veneración especial hacia los mellizos, considerados portadores de un poder espiritual excepcional precisamente por replicar en la tierra la dualidad original de la propia pareja creadora.`,
  lisa: `Se le atribuye haber enviado al camaleón como mensajero de confianza entre su propio dominio solar y el de Mawu, elegido precisamente por su paso lento y deliberado, cualidad que los fon interpretan como sabiduría antes que torpeza. Los gremios de herreros del área fon y yoruba occidental lo consideran patrono directo de su oficio, y ciertas cofradías rituales todavía conservan cantos que agradecen específicamente a Lisa el don original del fuego necesario para forjar el metal.`,
  nyame: `Fuera de las historias de Anansi, Nyame permanece profundamente presente en la vida cotidiana akan a través del "Nyame dua" ("árbol de Dios"), una rama bifurcada plantada frente a numerosos hogares tradicionales con una vasija de agua en la horqueta, destinada a recibir ofrendas matutinas antes de cualquier otra actividad del día. El símbolo adinkra "Gye Nyame" ("excepto Dios"), uno de los más reproducidos de toda la tradición akan, resume visualmente la convicción de que ningún poder terrenal iguala jamás al suyo.`,
  unkulunkulu: `Pese a su papel fundacional como primer ancestro, la práctica religiosa zulu cotidiana se dirige con mucha mayor frecuencia hacia los amadlozi, los espíritus de los antepasados familiares más cercanos, considerados intermediarios más accesibles que el propio Unkulunkulu para las plegarias diarias. Los izibongo, los poemas de alabanza tradicionales recitados en ceremonias importantes, lo mencionan sin embargo como el origen último de todo linaje, el punto al que toda genealogía zulu, por numerosas generaciones que la separen, termina remontándose.`,
  kaggen: `Numerosos relatos san lo presentan casado con una hiraz (un pequeño mamífero parecido a un conejillo de indias) y padre adoptivo de Cogaz, un antílope resucitado a partir de sus propios huesos tras ser devorado por hormigas. /Kaggen protagoniza también relatos cómicos sobre sus propios fracasos —quedar atrapado dentro de objetos que él mismo había creado, o quedar en ridículo ante criaturas más astutas que él—, un rasgo que la tradición san no interpreta como debilidad sino como parte esencial de su naturaleza impredecible y profundamente humana.`,

  // --- DIOSES ---
  olodumare: `Se le conoce también bajo el nombre de Olorun ("dueño del cielo"), y a diferencia de los orishas, que cuentan cada uno con templos, sacerdotes y días festivos propios, Olodumare carece tradicionalmente de un culto directo comparable, precisamente por considerarse su autoridad demasiado elevada y absoluta como para representarse mediante un santuario físico ordinario. Se le atribuye ser la fuente original del ashe, la fuerza vital que anima a cada orisha, cada ser humano y cada objeto sagrado dentro de la cosmovisión yoruba.`,
  obatala: `Sus devotos se abstienen tradicionalmente no solo del vino de palma sino de cualquier alimento o vestimenta de color distinto al blanco durante los periodos dedicados específicamente a su culto, y su festividad más importante, el Odun Obatala, reúne todavía hoy a miles de peregrinos en la ciudad nigeriana de Ile-Ife. Dentro de la tradición yoruba se reconocen además numerosos "caminos" o avatares distintos de Obatala, cada uno con un nombre y una personalidad ligeramente propia, reflejando la enorme complejidad que esta única divinidad llegó a desarrollar a lo largo de los siglos.`,
  yemoja: `Su festividad más multitudinaria se celebra cada año en las playas de Lagos, Nigeria, y ha encontrado un eco todavía mayor en Brasil, donde millones de devotos de Iemanjá —su nombre dentro del candomblé— se congregan en las costas de Río de Janeiro cada 2 de febrero para depositar flores y pequeños obsequios sobre las olas. El número siete se considera sagrado para ella, y sus devotos evitan tradicionalmente pronunciar su nombre completo con ligereza fuera de un contexto ritual apropiado.`,
  oshun: `El río Osun, en el suroeste de Nigeria, alberga todavía hoy un extenso bosque sagrado dedicado a ella —el Bosque Sagrado de Osun-Osogbo, reconocido como Patrimonio de la Humanidad por la UNESCO—, escenario de un festival anual que atrae a decenas de miles de peregrinos. Se le atribuye haber sido, según ciertas versiones, la única entre las diecisiete divinidades originales enviadas a organizar la tierra que era mujer, un detalle que refuerza la lectura de su historia como una reivindicación directa del valor femenino dentro del panteón.`,
  shango: `Su culto llegó hasta el Caribe a través de la trata esclavista, donde en Trinidad dio origen a la religión conocida como Shango Baptist, una fusión singular entre su veneración original y elementos del cristianismo bautista. Se creía tradicionalmente que las piedras de rayo —herramientas de piedra neolítica que los campesinos yoruba encontraban ocasionalmente enterradas tras una tormenta— eran en realidad hachas arrojadas por el propio Shango durante sus descargas eléctricas, y se conservaban como amuletos de protección dentro de numerosos hogares.`,
  ogun: `Su juramento sigue empleándose hasta la actualidad dentro de ciertos tribunales tradicionales nigerianos, donde jurar sobre un pedazo de hierro frío ante Ogún se considera un compromiso de veracidad más vinculante que cualquier juramento ordinario. El propio estado nigeriano de Ogun, en el suroeste del país, toma su nombre directamente de esta divinidad, y conductores, mecánicos y herreros de toda la región siguen invocando su protección antes de iniciar cualquier trabajo que involucre herramientas o vehículos de metal.`,
  eshu: `En numerosos templos yoruba tradicionales, ningún ritual dedicado a cualquier otro orisha puede comenzar sin antes ofrecerle a Eshu una porción inicial, bajo la creencia de que, de lo contrario, él mismo podría sabotear deliberadamente la comunicación entre el oferente y la divinidad invocada. Su figura fue posteriormente identificada, de manera considerablemente distorsionada, con el diablo cristiano por parte de misioneros europeos, una confusión que la tradición yoruba original rechaza explícitamente, dado que Eshu no representa el mal sino la imprevisibilidad necesaria del propio destino.`,
  oya: `Se le atribuye la capacidad de transformarse en búfala, un animal cuya fuerza y ferocidad se consideran una extensión directa de su propio temperamento tormentoso. Junto a su papel como guerrera, Oya comparte una relación estrecha con Egungun, el culto ancestral yoruba dedicado a honrar a los antepasados fallecidos mediante máscaras y danzas rituales, reforzando su función como guardiana del umbral entre el mundo de los vivos y el de quienes ya lo han cruzado.`,
  orunmila: `El sistema de adivinación de Ifá que él mismo originó fue reconocido en 2005 por la UNESCO como Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad, un testimonio de su vigencia práctica ininterrumpida hasta el presente. Los babalawos, sus sacerdotes especializados, se someten tradicionalmente a años de entrenamiento memorizando los versos asociados a cada uno de los 256 patrones posibles del oráculo, empleando semillas sagradas de palma (ikin) o una cadena adivinatoria como herramientas centrales de su oficio.`,
  osanyin: `Se le representa frecuentemente sosteniendo un báculo de hierro rematado por un pequeño pájaro (opa Osanyin), rodeado de figuras menores que simbolizan el equilibrio necesario entre todas las plantas del bosque bajo su cuidado. A diferencia de la mayoría de los orishas, profundamente sociables y venerados en comunidad, Osanyin es descrito consistentemente como una figura solitaria que habita alejada del resto, un rasgo que sus devotos interpretan como reflejo directo de la naturaleza recogida y silenciosa que exige el verdadero dominio del conocimiento herbolario.`,
  oba: `El río que hoy lleva su nombre se encuentra efectivamente en el suroeste de Nigeria, y su punto de confluencia con el río Osun, asociado a su rival Oshun, se considera hasta hoy un lugar de corrientes particularmente peligrosas para cualquier embarcación. Su historia se cita con frecuencia dentro de la propia tradición yoruba como advertencia sobre los peligros de la inseguridad y los consejos malintencionados entre mujeres que deberían apoyarse mutuamente en lugar de competir por el afecto de un mismo hombre.`,
  aganju: `Distintas tradiciones dentro de la propia religión yoruba discrepan sobre su relación exacta con Shango, presentándolo en algunas versiones como su padre y en otras como su hermano mayor, una ambigüedad que refleja la naturaleza descentralizada y regionalmente diversa de buena parte de la tradición oral yoruba. En Cuba y otras expresiones americanas de esta religión, Aganju es venerado además como patrono especial de los transportistas y de quienes atraviesan largas distancias por tierra, extendiendo su rol original de barquero hacia cualquier forma de viaje terrestre prolongado.`,
  anansi: `Uno de los relatos más queridos sobre Anansi cuenta que, tras acumular la totalidad de la sabiduría del mundo dentro de una gran vasija, decidió esconderla atándola a su propio vientre y trepando hasta la copa del árbol más alto que pudo encontrar, para que nadie más volviera a poseerla; pero la vasija, colgada por delante, le impedía trepar con eficacia, hasta que su propio hijo le señaló, desde abajo, que resultaría mucho más sencillo llevarla atada a la espalda. Avergonzado al comprobar que ni siquiera él poseía toda la sabiduría existente, Anansi rompió la vasija con furia, esparciendo su contenido por el mundo entero, explicando así por qué el conocimiento se encuentra hoy disperso entre toda la humanidad en lugar de concentrado en una sola persona.`,
  'mami-wata': `Su iconografía moderna, difundida ampliamente a través de cromolitografías comerciales desde comienzos del siglo XX, incorporó curiosamente elementos visuales de encantadores de serpientes del sur de Asia, fusionándose con las descripciones orales previas hasta consolidar la imagen actual, ampliamente reconocible en toda África occidental y central. Sus devotos le ofrecen tradicionalmente perfumes, espejos, polvos de talco y dinero en efectivo, artículos considerados atractivos para una entidad asociada tanto a la vanidad como a la prosperidad material que puede conceder a quienes logran ganarse genuinamente su favor.`,
  amadioha: `Conocido también como Amadiora en ciertas variantes dialectales igbo, cuenta todavía hoy con un santuario de juramento activo en la localidad de Ozuzu, en el estado nigeriano de Rivers, donde disputas comunitarias que ningún tribunal ordinario logra resolver satisfactoriamente continúan sometiéndose a su juicio divino mediante rituales tradicionales de conciliación. Al igual que ocurre con Shango dentro de la tradición yoruba vecina, se atribuye a las piedras de rayo encontradas tras las tormentas un origen directo en los propios proyectiles arrojados por Amadioha contra quienes han quebrantado gravemente el orden moral de la comunidad.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-africana'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-africana".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando titanes y dioses de Mitologia Africana (parte 1)...\n');
  const libroId = await obtenerLibroId();
  const [filas] = await pool.query('SELECT id, slug, nombre FROM personajes WHERE libro_id = ?', [libroId]);
  const porSlug = {};
  filas.forEach(f => { porSlug[f.slug] = f; });

  for (const [slug, extra] of Object.entries(DATOS)) {
    const personaje = porSlug[slug];
    if (!personaje) {
      console.log(`  ! Personaje "${slug}" no encontrado, se salta.`);
      continue;
    }
    const [[fila]] = await pool.query('SELECT descripcion_larga FROM personajes WHERE id = ?', [personaje.id]);
    if (fila.descripcion_larga.includes(extra.slice(0, 40))) {
      console.log(`  - "${personaje.nombre}" ya ampliado.`);
      continue;
    }
    const nueva = `${fila.descripcion_larga}\n\n${extra}`;
    await pool.query('UPDATE personajes SET descripcion_larga = ? WHERE id = ?', [nueva, personaje.id]);
    console.log(`  - "${personaje.nombre}" ampliado.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
