// ============================================================
// scripts/sembrar-personajes-mapuche-parte3.js
// ------------------------------------------------------------
// Tercer lote de Mitologia Mapuche: 5 mortales -- lideres
// historicos documentados en cronicas, de epocas posteriores a
// los grandes toquis de la epica de "La Araucana". Contenido
// completo desde el inicio. Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-mapuche-parte3.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  {
    tipo: 'mortal', slug: 'manil', nombre: 'Mañil', nombre_griego: 'Mañil',
    epitetos: 'El Toqui de la Confederación Araucana',
    descripcion_corta: 'Poderoso toqui del siglo XIX que unificó a numerosas comunidades bajo una confederación capaz de resistir tanto a Chile como a Argentina simultáneamente.',
    descripcion_larga: `Mañil fue uno de los líderes mapuche más influyentes de la primera mitad del siglo XIX, un periodo en que el territorio mapuche independiente al sur del río Biobío se encontraba cada vez más presionado tanto por el nuevo Estado chileno recién independizado de España como por las ambiciones expansionistas del Estado argentino en la zona de las pampas. Reconocido por su considerable habilidad diplomática además de su liderazgo militar, Mañil logró articular una confederación amplia de comunidades mapuche que normalmente actuaban de manera autónoma, coordinando esfuerzos conjuntos de defensa territorial frente a ambas repúblicas emergentes.

Bajo su liderazgo, la resistencia mapuche adoptó una postura más organizada frente a los avances fronterizos chilenos, y Mañil llegó a proclamarse en ciertos momentos como una autoridad de rango prácticamente equivalente al de un rey o gobernante soberano sobre el territorio de la Araucanía independiente, una posición que reflejaba tanto su propio prestigio personal como la necesidad estratégica de presentar una autoridad unificada frente a los estados vecinos que buscaban negociar tratados o, alternativamente, justificar futuras campañas de ocupación territorial. Mañil mantuvo esta posición de liderazgo hasta su muerte en 1849, dejando tras de sí una estructura de alianzas y un prestigio que influirían en la resistencia mapuche durante las décadas siguientes, incluida la larga y sangrienta campaña conocida como la "Pacificación de la Araucanía", que recién en las décadas posteriores a su muerte lograría finalmente someter al territorio mapuche independiente a la soberanía plena del Estado chileno.`,
    origen: 'Toqui mapuche del siglo XIX, líder de una amplia confederación de comunidades.',
    dominio: 'La unificación diplomática y la resistencia territorial', naturaleza: 'Líder histórico mapuche del siglo XIX', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'quilapan', nombre: 'Quilapán', nombre_griego: 'Quilapán',
    epitetos: 'El Último Gran Toqui de la Independencia',
    descripcion_corta: 'Toqui que lideró la resistencia final contra la ocupación militar chilena del territorio mapuche independiente, en los últimos años de la llamada "Pacificación".',
    descripcion_larga: `Quilapán fue uno de los últimos grandes toquis en liderar una resistencia armada organizada contra el avance del ejército chileno durante la fase final de la "Pacificación de la Araucanía", la extensa campaña militar mediante la cual el Estado chileno, ya consolidado tras décadas de independencia, procedió a ocupar de manera efectiva y definitiva el territorio mapuche que hasta entonces había mantenido un grado considerable de autonomía política y territorial pese a las presiones fronterizas previas. Activo especialmente durante las décadas de 1860 y 1870, Quilapán se convirtió en una de las voces más firmes en oposición a los avances de líneas de fuertes chilenos que iban reduciendo progresivamente el territorio bajo control mapuche.

Quilapán lideró distintos levantamientos y ataques contra las posiciones militares chilenas establecidas en la zona, buscando frenar el avance sostenido de la ocupación, aunque las circunstancias del conflicto habían cambiado radicalmente respecto a los siglos anteriores: el ejército chileno de la época contaba ya con armamento moderno, incluidos fusiles de repetición y artillería, que otorgaban una ventaja tecnológica decisiva imposible de contrarrestar únicamente mediante las tácticas tradicionales de guerrilla y emboscada que tan efectivas habían resultado siglos antes contra los conquistadores españoles. Pese a la resistencia sostenida bajo su liderazgo, la ocupación militar chilena continuó avanzando de manera prácticamente imparable durante esos años, y hacia fines de la década de 1870 y comienzos de la de 1880, el territorio mapuche independiente terminó siendo incorporado de manera definitiva a la soberanía plena del Estado chileno, cerrando así un ciclo de autonomía territorial que se había extendido, con altibajos, durante más de trescientos años desde la batalla de Curalaba.`,
    origen: 'Toqui mapuche de la segunda mitad del siglo XIX.',
    dominio: 'La resistencia final contra la ocupación militar', naturaleza: 'Líder histórico mapuche del siglo XIX', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'tucapel', nombre: 'Tucapel', nombre_griego: 'Tucapel',
    epitetos: 'El Rival del Tronco',
    descripcion_corta: 'Guerrero de gran fuerza física que compitió contra Caupolicán en la legendaria prueba del tronco, quedando como segundo pese a su considerable resistencia.',
    descripcion_larga: `Tucapel aparece en "La Araucana" de Alonso de Ercilla como uno de los guerreros mapuche más destacados en fuerza física y valentía durante el periodo temprano de la Guerra de Arauco, presentado como un rival directo de Caupolicán durante la célebre prueba del tronco organizada por Colo Colo para determinar de manera pacífica quién asumiría el liderazgo militar supremo del pueblo mapuche en un momento crítico del conflicto contra los conquistadores españoles. Según narra la epopeya, Tucapel demostró una resistencia extraordinaria durante la competencia, sosteniendo el pesado tronco sobre sus hombros durante un tiempo considerable, aunque finalmente resultó superado por la resistencia todavía mayor mostrada por Caupolicán, que se alzó como ganador definitivo de la prueba.

Pese a no haber resultado vencedor en aquella competencia particular, Tucapel continuó desempeñando un papel destacado como guerrero de primera línea durante los años siguientes de la Guerra de Arauco, participando activamente en distintos enfrentamientos contra las fuerzas coloniales españolas bajo el mando sucesivo de los distintos toquis que lideraron la resistencia mapuche a lo largo de esas décadas. Su nombre quedó además vinculado de manera permanente a la geografía y la historia de la región, dado que la localidad y posterior comuna chilena de Tucapel, escenario histórico de la batalla en la que murió Pedro de Valdivia en 1553, tomó su nombre directamente en honor a este guerrero legendario, consolidando su lugar dentro de la memoria histórica y toponímica del sur de Chile pese a no haber alcanzado el liderazgo supremo que sí obtuvo su rival Caupolicán.`,
    origen: 'Guerrero mapuche, rival de Caupolicán en la prueba del tronco según "La Araucana".',
    dominio: 'La fuerza física y la resistencia guerrera', naturaleza: 'Guerrero legendario de la Guerra de Arauco', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'rengo', nombre: 'Rengo', nombre_griego: 'Rengo',
    epitetos: 'El Toqui Astuto',
    descripcion_corta: 'Toqui documentado tanto en crónicas históricas como en la épica literaria, reconocido por su astucia estratégica y su participación en numerosas batallas de la resistencia.',
    descripcion_larga: `Rengo es una figura documentada tanto en las crónicas históricas de la época colonial como en la propia "La Araucana" de Alonso de Ercilla, donde aparece retratado como un toqui de notable astucia estratégica, participante activo en numerosos enfrentamientos militares durante las décadas centrales de la extensa Guerra de Arauco. A diferencia de otros líderes recordados principalmente por una única hazaña o batalla decisiva, la figura de Rengo destaca dentro de las fuentes históricas por su presencia sostenida y su capacidad de adaptación a lo largo de un periodo de conflicto prolongado, participando en distintas campañas bajo circunstancias cambiantes.

Las crónicas españolas de la época, pese a su perspectiva generalmente hostil hacia los líderes de la resistencia mapuche, reconocían con frecuencia la habilidad particular de Rengo para leer el terreno y las circunstancias tácticas de cada enfrentamiento, evitando comprometerse en combates desfavorables y aprovechando en cambio con precisión las oportunidades que el terreno montañoso y boscoso del territorio ofrecía a las fuerzas mapuche frente a la caballería y el armamento superior de los soldados coloniales. Su nombre, que en mapudungun puede asociarse con la idea de cojera o de un caminar irregular, ha llevado a algunos investigadores a especular sobre un posible origen o apodo relacionado con alguna característica física particular del propio guerrero, aunque las fuentes disponibles no permiten confirmar ese detalle con certeza. Rengo permanece, en cualquier caso, como una de las múltiples figuras que, junto a los toquis más célebres como Lautaro o Caupolicán, sostuvieron colectivamente durante generaciones la resistencia mapuche frente a la conquista española.`,
    origen: 'Toqui mapuche documentado en crónicas coloniales y en "La Araucana".',
    dominio: 'La astucia táctica y la adaptación al terreno', naturaleza: 'Toqui histórico de la Guerra de Arauco', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'lientur', nombre: 'Lientur', nombre_griego: 'Lientur',
    epitetos: 'El Toqui del Cautiverio Feliz',
    descripcion_corta: 'Toqui del siglo XVII, célebre por sus emboscadas certeras, documentado extensamente en el relato de cautiverio del jesuita Francisco Núñez de Pineda.',
    descripcion_larga: `Lientur fue un toqui mapuche activo durante la primera mitad del siglo XVII, documentado con un detalle excepcional gracias sobre todo al célebre relato "Cautiverio Feliz", escrito por el jesuita chileno Francisco Núñez de Pineda y Bascuñán, quien pasó varios meses como cautivo dentro de las comunidades mapuche precisamente bajo la esfera de influencia de Lientur, y dejó un testimonio detallado y sorprendentemente respetuoso —para los estándares de la época— sobre la organización social, las costumbres y el propio carácter del toqui que lo mantuvo cautivo.

Lientur era reconocido tanto por sus propios contemporáneos mapuche como por sus adversarios españoles como un estratega particularmente hábil en el diseño de emboscadas certeras, capaz de infligir derrotas significativas a columnas militares españolas mediante ataques sorpresivos cuidadosamente planificados que aprovechaban al máximo el conocimiento superior del terreno que poseían las fuerzas mapuche. El propio relato de Núñez de Pineda, pese a describir la experiencia de cautiverio desde la perspectiva forzosamente parcial de la víctima, transmite también una imagen relativamente matizada de Lientur como líder capaz de ejercer autoridad con cierta ecuanimidad dentro de su propia comunidad, ofreciendo a los historiadores posteriores una de las ventanas documentales más ricas y detalladas disponibles sobre la vida cotidiana y el liderazgo mapuche durante el periodo de guerra fronteriza prolongada que caracterizó buena parte del siglo XVII en el sur de Chile.`,
    origen: 'Toqui mapuche del siglo XVII, documentado en el "Cautiverio Feliz" de Núñez de Pineda.',
    dominio: 'Las emboscadas estratégicas y el liderazgo comunitario', naturaleza: 'Toqui histórico de la Guerra de Arauco', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-mapuche'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-mapuche" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando mortales de Mitologia Mapuche (parte 3)...\n');
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
