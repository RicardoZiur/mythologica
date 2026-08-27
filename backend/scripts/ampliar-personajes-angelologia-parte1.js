// ============================================================
// scripts/ampliar-personajes-angelologia-parte1.js
// ------------------------------------------------------------
// Amplia titanes (5) y dioses (15) de Angelologia con un parrafo
// extra en descripcion_larga -- datos reales adicionales (fuentes
// rabinicas, apocrifos, tradicion islamica, historia del arte) que
// no estaban cubiertos en el seed original. Simbolos/poderes/familia
// ya fueron poblados por sembrar-detalles-angelologia.js (si existe)
// o directamente en el seed, asi que este script NO los toca.
// Idempotente (chequea si el extra ya esta presente antes de
// agregarlo).
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-angelologia-parte1.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- TITANES ---
  metatron: `En la Cabalá (particularmente el Zohar y el Sefer Hejalot o "3 Enoc") se lo llama "el YHWH menor", un título tan provocador que el Talmud (Jaguigá 15a) narra que el sabio Eliseo ben Abuyah, al verlo sentado —algo inusual, ya que los ángeles permanecen de pie—, concluyó erróneamente que existían "dos poderes en el cielo", una idea herética que lo llevó a su propia apostasía. Según ese mismo relato, Metatrón fue castigado con sesenta azotes de fuego por haber permitido esa confusión, una historia empleada tradicionalmente para prevenir errores teológicos dualistas.`,
  sandalfon: `La mística judía lo identifica tradicionalmente con el profeta Elías transformado en ángel tras su ascensión, en paralelo directo con Enoc y Metatrón. Se lo describe como tan inmenso que recorrer una distancia igual a su propia altura tomaría quinientos años, y en ciertas tradiciones cabalísticas teje las plegarias de Israel hasta formar con ellas una corona para Dios, en un rol que complementa al de Metatrón como una suerte de gemelo opuesto: uno cerca del trono celestial, el otro más próximo a la tierra y a la plegaria humana.`,
  shekinah: `Su nombre es gramaticalmente femenino en hebreo, y se convirtió en un concepto central de la mística judía —sobre todo en el Zohar—, donde la Shejiná se trata como el aspecto o presencia femenina de lo divino, personificada a veces como "novia" de Dios en la liturgia mística que recibe el Shabat (el himno "Lejá Dodí", todavía cantado hoy en las sinagogas). La tradición rabínica sostiene además que acompañó al pueblo de Israel en su exilio, compartiendo su sufrimiento.`,
  serafines: `La palabra hebrea "saraf" significa literalmente "el que arde", y en otras partes de la Biblia hebrea (Números 21:6-9) "serafines" designa a serpientes venenosas de fuego, lo que sugiere que el término pudo haber nombrado originalmente a un ser serpentino antes de cristalizarse en la imagen de guardianes alados del trono que conocemos hoy a partir de Isaías 6. Su clamor "Santo, Santo, Santo" (la Kedushá/el Sanctus) se sigue recitando hoy en la liturgia judía, católica, ortodoxa y anglicana en todo el mundo.`,
  'criaturas-vivientes': `Sus cuatro rostros (hombre, león, buey y águila) fueron adoptados por la tradición cristiana primitiva (siglo II, a través de Ireneo de Lyon) como símbolos de los cuatro evangelistas —Mateo como el hombre o ángel, Marcos como el león, Lucas como el buey, Juan como el águila—, una asociación todavía visible hoy en el arte cristiano y la arquitectura de catedrales, lo que significa que esta única visión de Ezequiel moldeó indirectamente siglos enteros de iconografía religiosa occidental.`,

  // --- DIOSES ---
  miguel: `Es el único ángel llamado explícitamente "arcángel" por su nombre en el canon bíblico protestante (Judas 1:9), lo que llevó a distintas tradiciones cristianas a debatir si debería considerarse EL arcángel o simplemente un ángel de alto rango. Su fiesta del 29 de septiembre (Michaelmas) fue históricamente uno de los "quarter days" ingleses que marcaban el pago de rentas y el inicio del año académico en instituciones como Oxford, un legado puramente civil y económico de su fiesta religiosa.`,
  gabriel: `En la tradición islámica (como Yibril) se le atribuye haber dictado la totalidad del Corán a Mahoma a lo largo de veintitrés años, lo que lo convierte posiblemente en el ángel con mayor legado textual directo de cualquier tradición abrahámica. La tradición cristiana también le atribuye anunciar tanto el nacimiento de Juan el Bautista como el de Jesús, convirtiéndolo en el principal "ángel de las buenas noticias" a través de dos grandes religiones.`,
  rafael: `Su nombre significa "Dios sana", y aparece de forma prominente solo en el deuterocanónico Libro de Tobías (aceptado como escritura por católicos y ortodoxos, pero no por protestantes ni judíos), donde viaja disfrazado de compañero humano durante casi toda la narración antes de revelarse. Es una de las pocas historias angelicales construida alrededor de un compañero disfrazado durante un relato extenso, en vez de una simple aparición o mensaje breve.`,
  uriel: `No aparece nombrado en la Biblia hebrea ni en el canon del Nuevo Testamento, sino en obras apócrifas o pseudoepigráficas como 2 Esdras y 1 Enoc, donde sirve de guía celestial a Enoc explicándole cosmología y astronomía. La tradición católica lo eliminó oficialmente de la veneración pública en el año 745 en el Concilio de Roma bajo el papa Zacarías, junto a otros nombres angelicales no canónicos, aunque sigue siendo popular en la devoción folclórica y en algunas tradiciones ortodoxas y anglicanas.`,
  raguel: `Su nombre significa "amigo de Dios", y aparece listado en 1 Enoc como el ángel que "toma venganza sobre el mundo de las luminarias" —un ángel vengador encargado de disciplinar a otros ángeles que transgreden—, uno de los siete arcángeles nombrados en ese texto. Al igual que Uriel, fue excluido de la lista oficial católica en el año 745.`,
  remiel: `Su nombre a veces se considera una variante de Ramiel, e incluso se confunde en distintas versiones manuscritas de 1 Enoc con Uriel, reflejo de la naturaleza genuinamente inestable e inconsistente de los nombres angelicales a través de los diversos fragmentos manuscritos enóquicos que sobreviven (las versiones etíopes en ge'ez difieren de los fragmentos arameos hallados entre los Rollos del Mar Muerto).`,
  saraqael: `Es uno de los más oscuros entre los siete arcángeles nombrados en 1 Enoc, descrito allí como un ángel puesto a cargo de "los espíritus de los hijos de los hombres que pecan en el espíritu", reflejo de la preocupación más amplia del texto por asignar ángeles a categorías específicas de falta humana.`,
  israfil: `No aparece nombrado explícitamente en el Corán, pero la tradición islámica del hadiz lo establece firmemente como el ángel que hará sonar la trompeta (Sur) para anunciar tanto el fin del mundo como, después, la resurrección de los muertos, un rol paralelo pero distinto de la imagen bíblica de la "trompeta del último día" en 1 Corintios y Apocalipsis, que no nombra a ningún ángel específico.`,
  azrael: `Tampoco aparece nombrado en el Corán, pero es el Ángel de la Muerte más reconocido dentro de la tradición popular islámica. Su nombre probablemente deriva del hebreo "Azazel" o de "Ezra"+"El", y en el folclore judío posterior el Malaj HaMavet terminó asociándose con él en distintas tradiciones, evidencia de una notable polinización cruzada entre las figuras angelicales de la muerte judías e islámicas durante el periodo medieval.`,
  malik: `Aparece nombrado explícitamente en el Corán (43:77) como el ángel guardián del Infierno (Jahannam), a quien los condenados suplican la muerte sin obtenerla jamás. Contrasta directamente con Ridwán como su contraparte en el Paraíso, un emparejamiento simétrico que no tiene un equivalente preciso de figura única nombrada en la tradición judía o cristiana, donde las funciones de guardián están asignadas de forma más difusa.`,
  ridwan: `No aparece nombrado directamente en el Corán, pero la literatura del hadiz lo establece como guardián de las puertas del Paraíso. En ciertas tradiciones místicas y poéticas sufíes se convierte en una figura simbólica recurrente que representa la bienvenida y la misericordia divinas, invocada en poesía devocional que describe la anhelada entrada del alma al paraíso.`,
  'munkar-y-nakir': `Su interrogatorio a los muertos recién enterrados (sobre Dios, el profeta y la fe del difunto) es un desarrollo específicamente posterior al Corán, detallado extensamente en el hadiz más que en el propio texto coránico, y forma parte del concepto islámico del "castigo de la tumba" (adhab al-qabr), una doctrina que sigue debatiéndose teológicamente entre distintas escuelas de pensamiento islámico respecto a su carácter literal o metafórico.`,
  'harut-y-marut': `Se los menciona en el Corán (2:102) como dos ángeles enviados a Babilonia que enseñaron hechicería a los humanos como prueba, con la advertencia explícita de que sus enseñanzas podían separar a un hombre de su esposa. El folclore posterior (ajeno al propio Corán) desarrolló narrativas elaboradas sobre los dos ángeles siendo tentados por una mujer y castigados colgados boca abajo en un pozo de Babilonia hasta el Día del Juicio, una historia con notables paralelos con la tradición de los Vigilantes o Grigori, los ángeles caídos que enseñan conocimiento prohibido a la humanidad en 1 Enoc.`,
  jofiel: `Su nombre significa "belleza de Dios", y se lo asocia en tradiciones esotéricas y cabalísticas posteriores, así como en la Teosofía, con la sabiduría y con la expulsión de Adán y Eva del Edén (a veces se le atribuye ser el querubín que custodia la entrada del Edén con espada de fuego). No aparece en la escritura canónica: su rol se desarrolló casi enteramente a través de literatura mística y esotérica posbíblica.`,
  chamuel: `Su nombre significa "el que ve a Dios", y se lo asocia tradicionalmente en la devoción popular cristiana y en la angelología esotérica más reciente con el amor, la compasión y la búsqueda de objetos o relaciones perdidas. Algunas tradiciones lo identifican como el ángel que fortaleció a Jesús durante su agonía en el huerto de Getsemaní (Lucas 22:43), aunque el propio texto bíblico no nombra al ángel involucrado.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'angelologia'");
  if (filas.length === 0) throw new Error('No existe el libro "angelologia".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando titanes y dioses de Angelologia (parte 1)...\n');
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
