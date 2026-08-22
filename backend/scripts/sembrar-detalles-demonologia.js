// ============================================================
// scripts/sembrar-detalles-demonologia.js
// ------------------------------------------------------------
// Agrega simbolos, poderes y relaciones "familiares" (en este
// libro, mas bien vinculos narrativos/jerarquicos) a los 47
// personajes de Demonologia. Correr DESPUES de que las partes 1,
// 2 y 3 hayan terminado. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-detalles-demonologia.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- PRIMORDIALES ---
  leviatan: {
    simbolos: ['La serpiente retorcida', 'Las profundidades marinas'],
    poderes: [['Fuerza inconquistable', 'Ningún mortal puede domarlo por sus propios medios.']],
    familia: [['behemot', 'otro']]
  },
  behemot: {
    simbolos: ['Los huesos de bronce', 'Los pantanos primordiales'],
    poderes: [['Fuerza descomunal', 'Bebe ríos enteros y permanece inamovible bajo su propio peso.']],
    familia: [['leviatan', 'otro']]
  },
  abaddon: {
    simbolos: ['La langosta con cola de escorpión', 'El abismo'],
    poderes: [['Comando del abismo', 'Libera y comanda un ejército de langostas monstruosas.']],
    familia: []
  },
  samael: {
    simbolos: ['La serpiente del Edén', 'La espada de la muerte'],
    poderes: [['Acusación celestial', 'Actúa como fiscal y ángel de la muerte dentro de la corte divina.']],
    familia: [['lilith', 'conyuge']]
  },
  lilith: {
    simbolos: ['El Mar Rojo', 'La noche'],
    poderes: [['Independencia primordial', 'Rechaza la subordinación y abandona el Edén por voluntad propia.']],
    familia: [['samael', 'conyuge'], ['naamah', 'otro']]
  },

  // --- GRANDES PRINCIPES ---
  lucifer: {
    simbolos: ['La estrella de la mañana', 'El orgullo caído'],
    poderes: [['Belleza caída', 'Fue, según la tradición, el más hermoso de los ángeles antes de su caída.']],
    familia: [['satan', 'otro']]
  },
  satan: {
    simbolos: ['La acusación', 'La tentación en el desierto'],
    poderes: [['Oposición directa', 'Tienta y se opone activamente a la voluntad divina.']],
    familia: [['lucifer', 'otro']]
  },
  beelzebub: {
    simbolos: ['La mosca', 'El príncipe de los demonios'],
    poderes: [['Autoridad sobre los demonios', 'Es identificado en el Nuevo Testamento como príncipe de los demonios.']],
    familia: []
  },
  asmodeo: {
    simbolos: ['El pez sagrado', 'Las tres cabezas'],
    poderes: [['Celos posesivos', 'Mata a los sucesivos esposos de Sara antes de la consumación.']],
    familia: []
  },
  belial: {
    simbolos: ['La elocuencia engañosa'],
    poderes: [['Persuasión mentirosa', 'Miente con una habilidad excepcional pero de gran encanto.']],
    familia: []
  },
  astaroth: {
    simbolos: ['El dragón infernal', 'La serpiente venenosa'],
    poderes: [['Conocimiento del pasado y el futuro', 'Responde con precisión sobre la creación del mundo.']],
    familia: []
  },
  mammon: {
    simbolos: ['El oro acumulado', 'Pandemonio'],
    poderes: [['Tentación material', 'Rivaliza con Dios por la lealtad humana mediante la riqueza.']],
    familia: []
  },
  belfegor: {
    simbolos: ['Los inventos ingeniosos', 'La doncella disfrazada'],
    poderes: [['Transformación seductora', 'Adopta la forma de una hermosa doncella para engañar.']],
    familia: []
  },
  paimon: {
    simbolos: ['El dromedario', 'La música atronadora'],
    poderes: [['Enseñanza de todas las artes', 'Instruye con precisión filosofía, artes y ciencias.']],
    familia: [['bael', 'otro']]
  },
  bael: {
    simbolos: ['Las tres cabezas simultáneas'],
    poderes: [['Otorgamiento de invisibilidad', 'Concede invisibilidad a quien lo invoca correctamente.']],
    familia: [['paimon', 'otro']]
  },
  moloch: {
    simbolos: ['El fuego del sacrificio', 'El valle de Ben-Hinom'],
    poderes: [['Exigencia de sacrificio', 'Su culto histórico exigía ofrendas extremas.']],
    familia: []
  },
  baphomet: {
    simbolos: ['El pentagrama', 'La cabeza de cabra'],
    poderes: [['Equilibrio simbólico', 'Representa la unión de opuestos: luz y oscuridad, materia y espíritu.']],
    familia: [['eliphas-levi', 'otro']]
  },
  'pazuzu-demonologia': {
    simbolos: ['El viento del suroeste', 'El amuleto protector'],
    poderes: [['Rivalidad protectora', 'Ahuyenta a Lamashtu pese a su propia naturaleza destructiva.']],
    familia: []
  },
  naamah: {
    simbolos: ['La belleza seductora nocturna'],
    poderes: [['Generación de espíritus', 'Engendra una descendencia de demonios menores.']],
    familia: [['lilith', 'otro'], ['samael', 'otro']]
  },
  azazel: {
    simbolos: ['El chivo expiatorio', 'Las armas forjadas'],
    poderes: [['Enseñanza prohibida', 'Revela a la humanidad el arte de la guerra y los cosméticos.']],
    familia: []
  },

  // --- HEROES ---
  solomon: {
    simbolos: ['El anillo con el sello', 'El vaso de bronce'],
    poderes: [['Dominio sobre los espíritus', 'Ata a setenta y dos demonios bajo su autoridad.']],
    familia: [['bael', 'enemigo'], ['paimon', 'enemigo'], ['asmodeo', 'enemigo']]
  },
  fausto: {
    simbolos: ['El pacto firmado con sangre'],
    poderes: [['Conocimiento ilimitado', 'Obtiene veinticuatro años de saber y poder a cambio de su alma.']],
    familia: []
  },
  'johann-weyer': {
    simbolos: ['La Pseudomonarchia Daemonum'],
    poderes: [['Catalogación erudita', 'Sistematiza sesenta y nueve demonios con sus rangos y legiones.']],
    familia: []
  },
  'girolamo-menghi': {
    simbolos: ['El Flagellum Daemonum'],
    poderes: [['Ritual de exorcismo', 'Establece procedimientos prácticos que influyen en el Rituale Romanum.']],
    familia: []
  },
  'leon-xiii': {
    simbolos: ['La Oración a San Miguel Arcángel'],
    poderes: [['Plegaria protectora', 'Compone la oración de protección más difundida contra el demonio.']],
    familia: []
  },
  'honorius-de-tebas': {
    simbolos: ['El grimorio atribuido'],
    poderes: [['Autoridad eclesiástica simulada', 'Su grimorio imita la estructura de un texto litúrgico oficial.']],
    familia: []
  },
  'eliphas-levi': {
    simbolos: ['El dibujo de Baphomet'],
    poderes: [['Sistematización del ocultismo', 'Unifica siglos de tradición mágica dispersa en un marco coherente.']],
    familia: [['baphomet', 'otro']]
  },
  'san-ciriaco': {
    simbolos: ['La protección de la hija del emperador'],
    poderes: [['Exorcismo protector', 'Es invocado tradicionalmente contra la posesión demoníaca.']],
    familia: []
  },
  'jaime-vi-i': {
    simbolos: ['La Daemonologie'],
    poderes: [['Tratado erudito', 'Defiende por escrito la realidad de la brujería y la magia negra.']],
    familia: []
  },
  'miguel-psellos': {
    simbolos: ['El De Operatione Daemonum'],
    poderes: [['Clasificación elemental', 'Organiza a los demonios según el elemento que habitan.']],
    familia: []
  },

  // --- MONSTRUOS ---
  incubo: {
    simbolos: ['El peso nocturno sobre el pecho'],
    poderes: [['Visita nocturna', 'Provoca parálisis del sueño y sensación de presencia opresiva.']],
    familia: [['sucubo', 'otro']]
  },
  sucubo: {
    simbolos: ['La belleza seductora del sueño'],
    poderes: [['Drenaje vital', 'Absorbe la energía de los hombres durante encuentros oníricos.']],
    familia: [['incubo', 'otro'], ['lilith', 'otro']]
  },
  furfur: {
    simbolos: ['La cola en llamas', 'El triángulo ritual'],
    poderes: [['Invocación de tormentas', 'Provoca relámpagos y truenos a voluntad.']],
    familia: []
  },
  andras: {
    simbolos: ['El lobo negro', 'La espada afilada'],
    poderes: [['Siembra de discordia', 'Provoca disputas capaces de terminar en muerte violenta.']],
    familia: []
  },
  vassago: {
    simbolos: ['La naturaleza benévola excepcional'],
    poderes: [['Adivinación benévola', 'Revela cosas pasadas y futuras y localiza objetos perdidos.']],
    familia: []
  },
  buer: {
    simbolos: ['El pentáculo', 'Las cinco cabezas de león'],
    poderes: [['Sabiduría curativa', 'Enseña filosofía y cura enfermedades mediante hierbas.']],
    familia: []
  },
  gremory: {
    simbolos: ['El camello', 'La corona ducal'],
    poderes: [['Revelación de tesoros', 'Localiza riquezas ocultas y despierta el amor.']],
    familia: []
  },
  marbas: {
    simbolos: ['La forma de león transformable'],
    poderes: [['Control de la enfermedad', 'Causa o cura dolencias según la voluntad del invocador.']],
    familia: []
  },
  empusa: {
    simbolos: ['La pierna de bronce', 'La sangre bebida'],
    poderes: [['Seducción cambiaformas', 'Adopta belleza engañosa antes de revelar su forma devoradora.']],
    familia: []
  },
  mara: {
    simbolos: ['El peso opresivo del sueño'],
    poderes: [['Origen de las pesadillas', 'Provoca terror nocturno y parálisis corporal.']],
    familia: [['incubo', 'otro']]
  },
  krampus: {
    simbolos: ['Las cadenas arrastradas', 'El manojo de varas'],
    poderes: [['Castigo invernal', 'Asusta y castiga a los niños desobedientes durante la Navidad.']],
    familia: []
  },
  ifrit: {
    simbolos: ['El fuego sin humo'],
    poderes: [['Fuerza sobrenatural', 'Transporta el trono de la reina de Saba en un instante.']],
    familia: []
  },

  // --- MORTALES ---
  'urbain-grandier': {
    simbolos: ['La hoguera de Loudun'],
    poderes: [['Injusticia histórica', 'Su ejecución se reconoce hoy como un proceso profundamente injusto.']],
    familia: [['jeanne-des-anges', 'enemigo']]
  },
  'jeanne-des-anges': {
    simbolos: ['Las convulsiones públicas de Loudun'],
    poderes: [['Manifestación pública', 'Sus exorcismos se convierten en espectáculo ampliamente presenciado.']],
    familia: [['urbain-grandier', 'enemigo']]
  },
  'matthew-hopkins': {
    simbolos: ['La marca del diablo', 'La prueba del agua'],
    poderes: [['Persecución sistemática', 'Desarrolla métodos que llevan a cientos de ejecuciones.']],
    familia: []
  },
  'cotton-mather': {
    simbolos: ['Los Juicios de Salem'],
    poderes: [['Influencia teológica', 'Prepara el clima intelectual que antecede a los juicios de Salem.']],
    familia: []
  },
  'anneliese-michel': {
    simbolos: ['El exorcismo prolongado'],
    poderes: [['Caso documentado', 'Su historia marca el debate sobre fe, enfermedad y responsabilidad médica.']],
    familia: []
  }
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'demonologia'");
  if (filas.length === 0) throw new Error('No existe el libro "demonologia" -- créalo primero.');
  return filas[0].id;
}

async function obtenerIdSimbolo(nombre) {
  const [filas] = await pool.query('SELECT id FROM simbolos WHERE nombre = ?', [nombre]);
  if (filas.length > 0) return filas[0].id;
  const [resultado] = await pool.query('INSERT INTO simbolos (nombre) VALUES (?)', [nombre]);
  return resultado.insertId;
}

async function main() {
  console.log('Sembrando detalles (simbolos, poderes, vinculos) de Demonologia...\n');
  const libroId = await obtenerLibroId();

  const [personajesLibro] = await pool.query('SELECT id, slug FROM personajes WHERE libro_id = ?', [libroId]);
  const idsPersonajes = {};
  for (const p of personajesLibro) idsPersonajes[p.slug] = p.id;

  for (const [slug, datos] of Object.entries(DATOS)) {
    const personajeId = idsPersonajes[slug];
    if (!personajeId) {
      console.log(`  ! Personaje con slug "${slug}" no encontrado, saltando.`);
      continue;
    }

    for (const nombreSimbolo of datos.simbolos || []) {
      const simboloId = await obtenerIdSimbolo(nombreSimbolo);
      const [existente] = await pool.query('SELECT 1 FROM personaje_simbolos WHERE personaje_id = ? AND simbolo_id = ?', [personajeId, simboloId]);
      if (existente.length === 0) {
        await pool.query('INSERT INTO personaje_simbolos (personaje_id, simbolo_id) VALUES (?, ?)', [personajeId, simboloId]);
      }
    }

    const [poderesExistentes] = await pool.query('SELECT COUNT(*) AS n FROM poderes WHERE personaje_id = ?', [personajeId]);
    if (poderesExistentes[0].n === 0) {
      let orden = 0;
      for (const [nombre, descripcion] of datos.poderes || []) {
        await pool.query('INSERT INTO poderes (personaje_id, nombre, descripcion, orden) VALUES (?, ?, ?, ?)', [personajeId, nombre, descripcion, orden]);
        orden += 1;
      }
    }

    for (const [slugRelacionado, tipoRelacion] of datos.familia || []) {
      const idRelacionado = idsPersonajes[slugRelacionado];
      if (!idRelacionado) {
        console.log(`  ! Relacion de "${slug}" apunta a slug inexistente "${slugRelacionado}", saltando.`);
        continue;
      }
      const [existente] = await pool.query(
        'SELECT 1 FROM relaciones_personajes WHERE personaje_id = ? AND personaje_relacionado_id = ? AND tipo_relacion = ?',
        [personajeId, idRelacionado, tipoRelacion]
      );
      if (existente.length === 0) {
        await pool.query(
          'INSERT INTO relaciones_personajes (personaje_id, personaje_relacionado_id, tipo_relacion) VALUES (?, ?, ?)',
          [personajeId, idRelacionado, tipoRelacion]
        );
      }
    }

    console.log(`  - Detalles de "${slug}" agregados.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
