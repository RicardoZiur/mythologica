// ============================================================
// scripts/sembrar-detalles-mapuche.js
// ------------------------------------------------------------
// Agrega simbolos, poderes y relaciones familiares a los 47
// personajes de Mitologia Mapuche. Correr DESPUES de que las
// partes 1, 2 y 3 hayan terminado. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-detalles-mapuche.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- TITANES ---
  'trentren-vilu': {
    simbolos: ['La serpiente dorada', 'Los cerros elevados'],
    poderes: [['Elevación de montañas', 'Levanta cerros con su movimiento para salvar a los vivos del diluvio.'], ['Protección de la tierra', 'Se opone activamente a las inundaciones desatadas por Caicai Vilu.']],
    familia: [['caicai-vilu', 'enemigo']]
  },
  antu: {
    simbolos: ['El disco solar', 'El fuego celestial'],
    poderes: [['Dador de luz y calor', 'Sostiene el crecimiento de las cosechas y la vida sobre la tierra.'], ['Ordenador del tiempo', 'Marca junto a Kuyen el calendario ritual mapuche.']],
    familia: [['kuyen', 'conyuge']]
  },
  kuyen: {
    simbolos: ['El disco lunar', 'La plata labrada'],
    poderes: [['Guardiana de la fertilidad', 'Vela por el parto y el ciclo de las mujeres.'], ['Regidora de las mareas', 'Influye en los ciclos del mar y de las cosechas.']],
    familia: [['antu', 'conyuge']]
  },
  wangulen: {
    simbolos: ['La Vía Láctea', 'Las estrellas guía'],
    poderes: [['Camino de los antepasados', 'Guía a los espíritus de los muertos hacia el Wenu Mapu.']],
    familia: []
  },
  pillan: {
    simbolos: ['El volcán', 'El trueno'],
    poderes: [['Progenitor de los pillanes', 'Da origen a los espíritus de fuego que habitan cada volcán.'], ['Guardián de los caídos en batalla', 'Acoge dentro de los volcanes a las almas de grandes toquis y caciques.']],
    familia: [['cherufe', 'otro']]
  },

  // --- DIOSES ---
  ngenechen: {
    simbolos: ['El rewe', 'El kultrún'],
    poderes: [['Soberanía sobre la vida humana', 'Decide el destino de cada persona y de sus almas tras la muerte.'], ['Unidad tetralógica', 'Reúne en una sola voluntad los cuatro aspectos de la existencia.']],
    familia: [['fucha', 'otro'], ['kushe', 'otro'], ['weche', 'otro'], ['ulcha', 'otro']]
  },
  fucha: {
    simbolos: ['El bastón de mando', 'La palabra sabia'],
    poderes: [['Autoridad paterna', 'Guía las decisiones importantes de la comunidad.']],
    familia: [['ngenechen', 'otro'], ['kushe', 'otro']]
  },
  kushe: {
    simbolos: ['Las hierbas curativas', 'El telar'],
    poderes: [['Sabiduría curativa', 'Transmite el conocimiento de las plantas medicinales a las machis.']],
    familia: [['ngenechen', 'otro'], ['fucha', 'otro']]
  },
  weche: {
    simbolos: ['La lanza', 'El caballo'],
    poderes: [['Fuerza guerrera', 'Transmite valor y vigor a los jóvenes combatientes.']],
    familia: [['ngenechen', 'otro'], ['ulcha', 'otro']]
  },
  ulcha: {
    simbolos: ['Las flores de la cosecha', 'El telar nupcial'],
    poderes: [['Fertilidad y belleza', 'Favorece los matrimonios prósperos y las buenas cosechas.']],
    familia: [['ngenechen', 'otro'], ['weche', 'otro']]
  },
  'nuke-mapu': {
    simbolos: ['El muday derramado', 'La tierra fértil'],
    poderes: [['Sustento de toda vida', 'Provee el alimento y los recursos de los que depende la comunidad.']],
    familia: [['ngen-mapu', 'otro']]
  },
  epunamun: {
    simbolos: ['Los dos rostros', 'El arma de guerra'],
    poderes: [['Vigilancia del combate', 'Observa simultáneamente el frente y la retaguardia en batalla.']],
    familia: []
  },
  meulen: {
    simbolos: ['El torbellino', 'El polvo del camino'],
    poderes: [['Protección contra el wekufe', 'Barre la influencia maligna de personas y hogares.'], ['Auxilio a viajeros', 'Guía a quienes se pierden durante la noche.']],
    familia: [['wekufe', 'enemigo']]
  },
  'ngen-mapu': {
    simbolos: ['El suelo cultivado', 'La ruka'],
    poderes: [['Guardián del territorio', 'Autoriza o niega el uso de la tierra a la comunidad.']],
    familia: [['nuke-mapu', 'otro']]
  },
  'ngen-ko': {
    simbolos: ['El manantial', 'El agua clara'],
    poderes: [['Guardián de las aguas dulces', 'Vigila ríos, lagos y vertientes.']],
    familia: [['nguruvilu', 'enemigo']]
  },
  'ngen-kura': {
    simbolos: ['La piedra sagrada', 'El collar ceremonial'],
    poderes: [['Guardián de las rocas', 'Protege los peñascos y lugares sagrados de piedra.']],
    familia: []
  },
  'ngen-mawida': {
    simbolos: ['El canelo sagrado', 'El canto de las aves'],
    poderes: [['Guardián del bosque', 'Guía a los recolectores y protege la fauna silvestre.']],
    familia: []
  },
  'ngen-kutral': {
    simbolos: ['La llama del hogar', 'El fuego ceremonial'],
    poderes: [['Guardián del fuego', 'Vigila la llama doméstica y las hogueras rituales.']],
    familia: []
  },
  millalobo: {
    simbolos: ['El palacio submarino', 'El oro del mar'],
    poderes: [['Soberanía del mar', 'Decide la abundancia o escasez de peces y mariscos.']],
    familia: [['pincoya', 'conyuge']]
  },
  pincoya: {
    simbolos: ['Las algas y conchas', 'La danza en la playa'],
    poderes: [['Renovación de la pesca', 'Multiplica los bancos de peces y mariscos con su danza.']],
    familia: [['millalobo', 'conyuge']]
  },

  // --- HEROES ---
  lautaro: {
    simbolos: ['El caballo capturado', 'La emboscada escalonada'],
    poderes: [['Estrategia adaptada', 'Vuelve las tácticas españolas contra sus propios captores.']],
    familia: [['guacolda', 'amante'], ['caupolican', 'aliado']]
  },
  caupolican: {
    simbolos: ['El tronco de la prueba', 'La entereza ante el sufrimiento'],
    poderes: [['Resistencia física extraordinaria', 'Sostiene el tronco casi tres días para ganar el liderazgo.']],
    familia: [['fresia', 'conyuge'], ['colo-colo', 'aliado']]
  },
  'colo-colo': {
    simbolos: ['El bastón de anciano', 'La palabra que evita la guerra'],
    poderes: [['Mediación sabia', 'Propone la prueba del tronco para evitar un conflicto interno.']],
    familia: [['caupolican', 'aliado']]
  },
  galvarino: {
    simbolos: ['Las dagas atadas a los muñones'],
    poderes: [['Resistencia inquebrantable', 'Transforma su propia mutilación en un arma de guerra.']],
    familia: []
  },
  fresia: {
    simbolos: ['El hijo entregado', 'El reproche desafiante'],
    poderes: [['Rechazo a la deshonra', 'Condena públicamente la rendición de su esposo.']],
    familia: [['caupolican', 'conyuge']]
  },
  guacolda: {
    simbolos: ['El campamento nocturno'],
    poderes: [['Lealtad hasta el final', 'Permanece junto a Lautaro hasta su última noche.']],
    familia: [['lautaro', 'amante']]
  },
  pelantaro: {
    simbolos: ['Curalaba', 'La victoria decisiva'],
    poderes: [['Estrategia decisiva', 'Provoca el colapso del sistema de ciudades españolas al sur del Biobío.']],
    familia: []
  },
  janequeo: {
    simbolos: ['El fuerte incendiado', 'La lanza de la viuda'],
    poderes: [['Liderazgo militar femenino', 'Comanda ataques coordinados contra fuertes españoles.']],
    familia: []
  },
  anganamon: {
    simbolos: ['La negociación fronteriza'],
    poderes: [['Autoridad de mando', 'Reúne comunidades bajo campañas coordinadas.']],
    familia: []
  },
  millalonco: {
    simbolos: ['El levantamiento general de 1655'],
    poderes: [['Coordinación a gran escala', 'Articula un alzamiento conjunto entre numerosas comunidades.']],
    familia: []
  },

  // --- MONSTRUOS ---
  'caicai-vilu': {
    simbolos: ['La serpiente oscura', 'El diluvio'],
    poderes: [['Dominio de las tormentas', 'Hace subir el mar para inundar la tierra.']],
    familia: [['trentren-vilu', 'enemigo']]
  },
  cherufe: {
    simbolos: ['La lava ardiente', 'El cráter'],
    poderes: [['Erupciones devastadoras', 'Manifiesta su hambre y furia mediante actividad volcánica.']],
    familia: [['pillan', 'otro']]
  },
  piuchen: {
    simbolos: ['El silbido nocturno', 'Las alas membranosas'],
    poderes: [['Presagio mortal', 'Su silbido provoca parálisis o enfermedad en quien lo escucha.']],
    familia: [['wekufe', 'otro']]
  },
  chonchon: {
    simbolos: ['La cabeza voladora', 'Las orejas-alas'],
    poderes: [['Vuelo nocturno', 'Se separa del cuerpo para espiar y hacer brujería.']],
    familia: [['wekufe', 'otro']]
  },
  wekufe: {
    simbolos: ['La sombra maligna'],
    poderes: [['Origen de todo mal', 'Anima la enfermedad y la desgracia dentro de la comunidad.']],
    familia: [['meulen', 'enemigo'], ['piuchen', 'otro'], ['chonchon', 'otro']]
  },
  anchimallen: {
    simbolos: ['La luz errante'],
    poderes: [['Servicio a la brujería', 'Guía y vigila en nombre de un kalku.']],
    familia: [['wekufe', 'otro']]
  },
  trauco: {
    simbolos: ['El hacha de piedra', 'La corteza y el musgo'],
    poderes: [['Seducción hipnótica', 'Atrae a mujeres jóvenes con su mirada irresistible.']],
    familia: [['fiura', 'otro']]
  },
  fiura: {
    simbolos: ['La cascada del bosque'],
    poderes: [['Aliento hipnótico', 'Enloquece de deseo a los hombres jóvenes que se le acercan.']],
    familia: [['trauco', 'otro']]
  },
  invunche: {
    simbolos: ['La cueva oculta', 'La pierna fusionada'],
    poderes: [['Fuerza descomunal', 'Custodia la entrada de la cueva de los brujos sin descanso.']],
    familia: [['caleuche', 'otro']]
  },
  caleuche: {
    simbolos: ['La luz sobre el mar', 'La música fantasma'],
    poderes: [['Camuflaje instantáneo', 'Se transforma en peñasco o niebla si es observado.']],
    familia: [['invunche', 'otro']]
  },
  nguruvilu: {
    simbolos: ['La cola-lazo', 'La corriente del río'],
    poderes: [['Arrastre mortal', 'Atrapa a sus víctimas con la cola y las hunde en el agua.']],
    familia: [['ngen-ko', 'enemigo']]
  },
  huallepen: {
    simbolos: ['El estero apartado'],
    poderes: [['Deformidad contagiosa', 'Su presencia basta para deformar crías de ganado cercanas.']],
    familia: []
  },

  // --- MORTALES ---
  manil: {
    simbolos: ['La confederación araucana'],
    poderes: [['Unificación diplomática', 'Articula una alianza amplia de comunidades mapuche.']],
    familia: []
  },
  quilapan: {
    simbolos: ['La línea de fuertes'],
    poderes: [['Resistencia final', 'Lidera los últimos levantamientos contra la ocupación militar chilena.']],
    familia: []
  },
  tucapel: {
    simbolos: ['El segundo lugar en la prueba del tronco'],
    poderes: [['Fuerza notable', 'Sostiene el tronco un tiempo considerable frente a Caupolicán.']],
    familia: [['caupolican', 'otro']]
  },
  rengo: {
    simbolos: ['El terreno favorable'],
    poderes: [['Astucia táctica', 'Aprovecha con precisión el terreno frente a la caballería española.']],
    familia: []
  },
  lientur: {
    simbolos: ['La emboscada certera'],
    poderes: [['Estrategia de emboscada', 'Diseña ataques sorpresivos que aprovechan el terreno.']],
    familia: []
  }
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-mapuche'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-mapuche" -- créalo primero.');
  return filas[0].id;
}

async function obtenerIdSimbolo(nombre) {
  const [filas] = await pool.query('SELECT id FROM simbolos WHERE nombre = ?', [nombre]);
  if (filas.length > 0) return filas[0].id;
  const [resultado] = await pool.query('INSERT INTO simbolos (nombre) VALUES (?)', [nombre]);
  return resultado.insertId;
}

async function main() {
  console.log('Sembrando detalles (simbolos, poderes, familia) de Mitologia Mapuche...\n');
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
