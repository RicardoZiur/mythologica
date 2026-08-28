// ============================================================
// scripts/agregar-personajes-egipcia.js
// ------------------------------------------------------------
// Agrega 7 personajes nuevos a Mitologia Egipcia (40 -> 47), para
// equiparar la cantidad con el resto del catalogo. Contenido
// completo desde el arranque. Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/agregar-personajes-egipcia.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- TITAN (1) ---
  {
    tipo: 'titan', slug: 'heh', nombre: 'Heh', nombre_griego: 'Ḥeḥ',
    epitetos: 'La Infinitud Primordial, Dador de Millones de Años',
    descripcion_corta: 'Una de las ocho divinidades primordiales de la Ogdóada de Hermópolis, personificación de la infinitud y la eternidad — su imagen se invocaba para desear "millones de años" de reinado al faraón.',
    descripcion_larga: `Heh forma pareja, junto a su contraparte femenina Hauhet, con las otras tres parejas primordiales de la Ogdóada de Hermópolis —Nun y Naunet (las aguas primordiales), Kek y Kauket (la oscuridad) y Amón y Amonet (lo oculto)—, ocho fuerzas anteriores a la propia creación que, según la teología de Hermópolis, se combinaron para producir el huevo cósmico o la colina primordial de la que surgió el mundo ordenado. Heh personifica específicamente la infinitud y la ilimitación, un concepto egipcio de eternidad menos ligado al tiempo lineal que a la idea de una extensión sin fin.

Se lo representa tradicionalmente arrodillado, sosteniendo en cada mano una nervadura de palma con muescas —el jeroglífico egipcio que representa "año"—, una imagen que se convirtió en fórmula visual estándar para desear "millones de años" de vida y reinado al faraón, aparece grabada repetidamente en templos, tronos y objetos funerarios reales a lo largo de toda la historia del antiguo Egipto. A diferencia de otras grandes divinidades con relatos narrativos extensos, Heh funciona sobre todo como un símbolo abstracto de duración ilimitada más que como protagonista de mitos propios.`,
    origen: 'Una de las ocho divinidades primordiales de la Ogdóada de Hermópolis.',
    dominio: 'La infinitud y la eternidad', naturaleza: 'Divinidad primordial abstracta', es_preview: 0
  },

  // --- DIOSES (3) ---
  {
    tipo: 'dios', slug: 'bes', nombre: 'Bes', nombre_griego: 'Bes',
    epitetos: 'El Protector del Hogar y los Recién Nacidos',
    descripcion_corta: 'Dios enano de rostro leonino y aspecto grotesco, protector de los hogares, las mujeres en el parto y los niños — una de las divinidades más queridas y populares de todo Egipto, pese a carecer de templos formales propios.',
    descripcion_larga: `Bes rompe deliberadamente con casi todas las convenciones del arte religioso egipcio: mientras la inmensa mayoría de las divinidades se representan de perfil, con proporciones idealizadas y expresión serena, Bes aparece casi siempre de frente, mirando directamente al espectador, con un cuerpo enano de piernas arqueadas, una melena leonina despeinada, la lengua asomando y una expresión deliberadamente feroz y grotesca. Esa fealdad intencional no era un defecto sino su arma principal: se creía que su aspecto aterrador ahuyentaba a los espíritus malignos, las serpientes venenosas y cualquier peligro que amenazara el hogar o, sobre todo, el momento crítico y peligroso del parto.

A diferencia de las grandes divinidades estatales como Amón o Ra, Bes casi nunca contó con templos propios de gran escala, pero su imagen aparecía por todas partes en la vida cotidiana egipcia: amuletos, espejos, mobiliario, camas, cabeceras y paredes de habitaciones domésticas, especialmente en los aposentos destinados al parto. Se le asociaba también con la música, la danza y el placer sexual, cualidades que en la religión egipcia no se consideraban opuestas a su función protectora sino complementarias: un dios que ahuyentaba el peligro fomentando al mismo tiempo la alegría y la vida doméstica cotidiana.`,
    origen: 'Dios enano protector del hogar, muy popular en la religión doméstica cotidiana.',
    dominio: 'La protección del hogar, el parto y la alegría doméstica', naturaleza: 'Dios enano apotropaico', es_preview: 1
  },
  {
    tipo: 'dios', slug: 'wadjet', nombre: 'Wadyet', nombre_griego: 'Wadjet',
    epitetos: 'La Diosa Cobra del Bajo Egipto',
    descripcion_corta: 'Diosa cobra protectora del Bajo Egipto, cuya imagen —el uraeus erguido sobre la corona del faraón— escupía fuego contra cualquier enemigo del rey.',
    descripcion_larga: `Wadyet, venerada originalmente en la ciudad de Buto, en el delta del Nilo, es la diosa protectora del Bajo Egipto, representada como una cobra erguida lista para atacar. Su imagen, conocida como uraeus, se colocaba directamente sobre la frente de la corona del faraón, donde se creía que escupía fuego y veneno contra cualquier enemigo que amenazara al rey, funcionando como una defensa mágica activa y no meramente decorativa.

Junto a Nejbet, la diosa buitre protectora del Alto Egipto, Wadyet formaba el par conocido como "las Dos Señoras", cuyos nombres combinados formaban uno de los cinco títulos oficiales que todo faraón legítimo debía ostentar, simbolizando la unificación de ambas mitades del país bajo un único gobernante. Wadyet se asoció además estrechamente con el mito del Ojo de Ra, la manifestación feroz y vengativa de la diosa solar enviada a castigar a la humanidad rebelde, un vínculo que refuerza su carácter de protectora fiera antes que de divinidad meramente decorativa.`,
    origen: 'Diosa cobra protectora del Bajo Egipto, venerada en Buto.',
    dominio: 'La protección real y el Bajo Egipto', naturaleza: 'Diosa cobra protectora', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'min', nombre: 'Min', nombre_griego: 'Min',
    epitetos: 'El Señor de la Fertilidad y la Cosecha',
    descripcion_corta: 'Uno de los dioses egipcios documentados más antiguos, dios de la fertilidad y la cosecha, representado momiforme con un brazo alzado sosteniendo un mayal.',
    descripcion_larga: `Min es una de las divinidades egipcias documentadas más antiguas, con evidencia iconográfica que se remonta incluso al periodo predinástico, mucho antes de la unificación de Egipto bajo un solo faraón. Se lo representa tradicionalmente de forma momiforme, con las piernas juntas envueltas y un único brazo levantado sosteniendo un mayal (símbolo también asociado a Osiris), una postura ritual e inmutable mantenida durante milenios de arte religioso egipcio prácticamente sin variación.

Como dios de la fertilidad agrícola y humana, Min presidía un festival anual celebrado al comienzo de la cosecha, durante el cual el propio faraón cortaba ceremonialmente el primer manojo de grano ante una procesión pública, reafirmando así su papel como garante de la fertilidad de la tierra egipcia. Se le asociaba también con la lechuga, considerada por los antiguos egipcios una planta con propiedades afrodisíacas, y con rutas comerciales del desierto oriental que conectaban el valle del Nilo con el Mar Rojo. En periodos posteriores, su culto se fusionó parcialmente con el de Amón, dando origen a la forma sincrética Min-Amón, sin que ello eclipsara del todo su identidad propia y mucho más antigua.`,
    origen: 'Dios de la fertilidad agrícola, documentado desde el periodo predinástico.',
    dominio: 'La fertilidad, la cosecha y las rutas del desierto oriental', naturaleza: 'Dios fálico de la fertilidad', es_preview: 0
  },

  // --- MORTALES (2) ---
  {
    tipo: 'mortal', slug: 'hatshepsut', nombre: 'Hatshepsut', nombre_griego: 'Hatshepsut',
    epitetos: 'La Faraona que Gobernó como Rey',
    descripcion_corta: 'Una de las pocas mujeres en gobernar Egipto con plenos títulos de faraón, representada con la barba postiza ceremonial reservada a los reyes — buena parte de su memoria fue deliberadamente borrada tras su muerte.',
    descripcion_larga: `Hatshepsut, de la XVIII dinastía, asumió inicialmente la regencia del reino en nombre de su joven hijastro Tutmosis III, pero en pocos años reclamó para sí los títulos, la regalia y la iconografía completas de un faraón legítimo, incluida la barba postiza ceremonial trenzada que tradicionalmente identificaba únicamente al rey varón, gobernando Egipto durante aproximadamente veinte años de notable estabilidad y prosperidad. Impulsó un ambicioso programa de construcción, cuyo ejemplo más célebre es su magnífico templo funerario de Deir el-Bahari, y organizó una famosa expedición comercial al lejano país de Punt, documentada en detalle en los relieves de ese mismo templo.

Tras su muerte, muchas de sus estatuas, inscripciones y representaciones fueron sistemáticamente destruidas o alteradas por orden de sucesores posteriores —probablemente Tutmosis III hacia el final de su propio reinado, o quizás Amenhotep II—, un intento deliberado de borrar su memoria del registro oficial que los egiptólogos modernos solo lograron reconstruir plenamente durante el siglo XX, tras identificar y recomponer fragmentos dispersos de sus monumentos desmantelados. Su reinado se considera hoy uno de los ejemplos mejor documentados de "damnatio memoriae" —la eliminación deliberada de la memoria histórica de una figura— en todo el antiguo Egipto.`,
    origen: 'Faraona real de la XVIII dinastía egipcia (c. 1479-1458 a. C.).',
    dominio: 'El gobierno de Egipto y la expedición a Punt', naturaleza: 'Faraona histórica', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'ramses-ii', nombre: 'Ramsés II', nombre_griego: 'Ramesses II',
    epitetos: 'Ramsés el Grande',
    descripcion_corta: 'Uno de los faraones más poderosos y longevos de Egipto, cuyo reinado de casi setenta años dejó los monumentos más colosales del país, incluido Abu Simbel.',
    descripcion_larga: `Ramsés II, de la XIX dinastía, gobernó Egipto durante aproximadamente sesenta y seis años, uno de los reinados más largos de toda la historia egipcia, dejando tras de sí un volumen de construcciones monumentales que ningún otro faraón llegó a igualar: los templos excavados en la roca de Abu Simbel, el gigantesco complejo funerario del Ramesseum y numerosas ampliaciones en Karnak y Luxor, muchas de ellas decoradas con relieves que conmemoraban sus propias hazañas militares, especialmente la batalla de Qadesh contra el Imperio hitita.

Aunque Ramsés proclamó Qadesh como una gran victoria personal en sus propios monumentos, el enfrentamiento terminó en un empate estratégico que llevó, años después, a la firma de uno de los tratados de paz internacionales más antiguos documentados de la historia humana, conservado tanto en versión egipcia como en una copia hitita en escritura cuneiforme. Tuvo un número extraordinario de esposas e hijos —se le atribuyen más de cien—, y su momia, extraordinariamente bien conservada, fue trasladada a París en 1976 para ser tratada contra un hongo que la amenazaba, viajando con un pasaporte egipcio real que indicaba, en la casilla de ocupación, "Rey (fallecido)".`,
    origen: 'Faraón real de la XIX dinastía egipcia, uno de los más longevos de la historia.',
    dominio: 'El gobierno de Egipto y la diplomacia con los hititas', naturaleza: 'Faraón histórico', es_preview: 0
  },

  // --- MONSTRUO (1) ---
  {
    tipo: 'monstruo', slug: 'akhekh', nombre: 'Ajej', nombre_griego: 'Akhekh',
    epitetos: 'El Grifo Serpiente del Caos',
    descripcion_corta: 'Criatura híbrida de cuerpo serpentino y cabeza y alas de ave rapaz, mencionada en textos de templo como enemiga del orden cósmico — un pariente menos célebre pero igual de temido que la serpiente Apofis.',
    descripcion_larga: `Ajej aparece documentado en textos religiosos grabados en templos egipcios tardíos, especialmente en el templo de Esna, descrito como una criatura híbrida con cuerpo serpentino y cabeza y alas de ave rapaz, similar en concepto a un grifo pero con connotaciones mucho más siniestras que las asociadas habitualmente a esa figura en otras tradiciones. Forma parte de una categoría más amplia de serpientes y criaturas del caos que se oponían activamente al orden cósmico (maat) instaurado por los dioses, la misma categoría general a la que pertenece la mucho más famosa Apofis, aunque con una identidad y unas atribuciones propias claramente diferenciadas en los textos que lo mencionan.

A diferencia de Apofis, cuya batalla nocturna contra Ra se convirtió en uno de los mitos egipcios más difundidos y repetidos, Ajej aparece con mucha menor frecuencia en las fuentes que sobreviven, lo que sugiere que pudo haber sido una figura de importancia más regional o específica de ciertos centros de culto, o bien un aspecto o variante local del propio concepto más amplio de serpiente caótica que Apofis terminó absorbiendo casi por completo dentro de la memoria religiosa egipcia mejor documentada.`,
    origen: 'Criatura híbrida del caos mencionada en textos de templo egipcios tardíos.',
    dominio: 'El caos primordial opuesto al orden cósmico', naturaleza: 'Criatura híbrida del caos', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-egipcia'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-egipcia".');
  return filas[0].id;
}

async function main() {
  console.log('Agregando 7 personajes nuevos a Mitologia Egipcia...\n');
  const libroId = await obtenerLibroId();

  for (const p of PERSONAJES) {
    const [existente] = await pool.query('SELECT id FROM personajes WHERE slug = ? AND libro_id = ?', [p.slug, libroId]);
    if (existente.length > 0) {
      console.log(`  - Personaje "${p.nombre}" ya existía.`);
      continue;
    }
    const [enOtroLibro] = await pool.query('SELECT id FROM personajes WHERE slug = ?', [p.slug]);
    if (enOtroLibro.length > 0) {
      console.log(`  ! ADVERTENCIA: slug "${p.slug}" ya existe en otro libro (colision global). Saltando.`);
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
