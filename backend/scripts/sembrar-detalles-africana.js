// ============================================================
// scripts/sembrar-detalles-africana.js
// ------------------------------------------------------------
// Agrega simbolos, poderes y relaciones familiares a los 47
// personajes de Mitologia Africana. Correr DESPUES de que las
// partes 1, 2 y 3 hayan terminado. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-detalles-africana.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- TITANES ---
  mawu: {
    simbolos: ['La serpiente Aido-Hwedo', 'La luna'],
    poderes: [['Creación primordial', 'Da forma al universo junto a Lisa sobre el cuerpo de Aido-Hwedo.'], ['Juicio de las almas', 'Pesa las almas de los muertos antes de concederles descanso.']],
    familia: [['lisa', 'hermano']]
  },
  lisa: {
    simbolos: ['El fuego', 'El hierro forjado'],
    poderes: [['Fuerza transformadora', 'Aporta el calor y el fuego necesarios para forjar el mundo.'], ['Don de la herrería', 'Introduce el trabajo del metal entre los primeros humanos.']],
    familia: [['mawu', 'hermana']]
  },
  nyame: {
    simbolos: ['El cielo', 'Las historias del mundo'],
    poderes: [['Sabiduría suprema', 'Guarda originalmente todas las historias del mundo.']],
    familia: [['anansi', 'otro']]
  },
  unkulunkulu: {
    simbolos: ['El lecho de juncos', 'El camaleón mensajero'],
    poderes: [['Origen de la humanidad', 'Da forma a los primeros seres humanos desde los juncos primordiales.']],
    familia: []
  },
  kaggen: {
    simbolos: ['La mantis religiosa', 'El eland sagrado'],
    poderes: [['Creación de los animales', 'Da origen al eland y a buena parte de la fauna del mundo.'], ['Astucia primordial', 'Sus artimañas a menudo se vuelven en su propia contra.']],
    familia: []
  },

  // --- DIOSES ---
  olodumare: {
    simbolos: ['El cielo supremo', 'El hálito de vida'],
    poderes: [['Autoridad última', 'Decide el destino final de cada alma humana.']],
    familia: [['obatala', 'otro']]
  },
  obatala: {
    simbolos: ['La tela blanca', 'La arcilla moldeada'],
    poderes: [['Escultor de cuerpos', 'Da forma física a los primeros seres humanos.'], ['Protección de la diferencia', 'Vela especialmente por quienes nacen con diferencias físicas.']],
    familia: [['olodumare', 'otro'], ['yemoja', 'otro']]
  },
  yemoja: {
    simbolos: ['Las olas azules', 'El espejo de cuentas'],
    poderes: [['Maternidad de los orishas', 'Da origen a la mayoría de las demás divinidades del panteón.']],
    familia: [['obatala', 'otro'], ['shango', 'otro']]
  },
  oshun: {
    simbolos: ['La miel', 'El río dorado', 'El abanico'],
    poderes: [['Fertilidad del mundo', 'Su ausencia seca los ríos y arruina las cosechas.']],
    familia: [['shango', 'conyuge'], ['oba', 'enemigo']]
  },
  shango: {
    simbolos: ['El hacha de doble filo', 'El carnero'],
    poderes: [['Dominio del trueno', 'Invoca rayos y truenos, y escupe fuego por la boca.']],
    familia: [['oya', 'conyuge'], ['oshun', 'conyuge'], ['oba', 'conyuge'], ['yemoja', 'otro']]
  },
  ogun: {
    simbolos: ['El machete de hierro', 'La selva abierta'],
    poderes: [['Apertura de caminos', 'Abre paso a través de la selva primordial para los demás orishas.']],
    familia: []
  },
  eshu: {
    simbolos: ['El gorro bicolor', 'El bastón del viajero'],
    poderes: [['Mensajero divino', 'Transmite las ofrendas humanas hasta Olodumare y los orishas.']],
    familia: [['osanyin', 'otro']]
  },
  oya: {
    simbolos: ['La espada', 'El viento de tormenta'],
    poderes: [['Guardiana de la muerte', 'Escolta a las almas en su tránsito hacia el más allá.']],
    familia: [['shango', 'conyuge']]
  },
  orunmila: {
    simbolos: ['La cadena de Ifá', 'Las semillas sagradas'],
    poderes: [['Oráculo de Ifá', 'Revela el destino individual asignado antes del nacimiento.']],
    familia: []
  },
  osanyin: {
    simbolos: ['Las hojas sagradas', 'El bosque medicinal'],
    poderes: [['Conocimiento botánico', 'Guarda el saber curativo de todas las plantas del mundo.']],
    familia: [['eshu', 'otro']]
  },
  oba: {
    simbolos: ['El río turbulento', 'La oreja cortada'],
    poderes: [['Transformación en río', 'Su cuerpo se convierte en el curso del río que lleva su nombre.']],
    familia: [['shango', 'conyuge'], ['oshun', 'enemigo']]
  },
  aganju: {
    simbolos: ['El desierto', 'La barca del cruce'],
    poderes: [['Resistencia del territorio salvaje', 'Sobrevive y ayuda a otros a cruzar terrenos inhóspitos.']],
    familia: [['shango', 'otro']]
  },
  anansi: {
    simbolos: ['La telaraña', 'Las historias del cielo'],
    poderes: [['Astucia ilimitada', 'Engaña a criaturas temibles para ganar todas las historias del mundo.']],
    familia: [['nyame', 'otro']]
  },
  'mami-wata': {
    simbolos: ['El espejo', 'La serpiente enroscada'],
    poderes: [['Otorgamiento de riqueza', 'Concede fortuna a cambio de un pacto peligroso.']],
    familia: []
  },
  amadioha: {
    simbolos: ['El rayo justiciero'],
    poderes: [['Castigo del perjurio', 'Fulmina a quienes rompen juramentos hechos en su nombre.']],
    familia: []
  },

  // --- HEROES ---
  'sundiata-keita': {
    simbolos: ['La barra de hierro doblada', 'El león'],
    poderes: [['Superación de la adversidad', 'Se pone de pie tras años de discapacidad para fundar un imperio.']],
    familia: [['mansa-musa', 'otro'], ['balla-fasseke', 'aliado']]
  },
  'mansa-musa': {
    simbolos: ['El oro peregrino', 'Tombuctú'],
    poderes: [['Riqueza legendaria', 'Devalúa el oro en Egipto entero con su generosidad.']],
    familia: [['sundiata-keita', 'otro']]
  },
  'shaka-zulu': {
    simbolos: ['El iklwa', 'Los cuernos del búfalo'],
    poderes: [['Reforma militar', 'Revoluciona las tácticas de guerra de todo un pueblo.']],
    familia: []
  },
  'moremi-ajasoro': {
    simbolos: ['La rafia inflamable', 'El río Esimirin'],
    poderes: [['Descubrimiento del secreto enemigo', 'Se deja capturar para revelar la verdad tras los disfraces temidos.']],
    familia: []
  },
  'nzinga-mbandi': {
    simbolos: ['El trono improvisado', 'La alianza cambiante'],
    poderes: [['Diplomacia audaz', 'Negocia de igual a igual con el poder colonial europeo.']],
    familia: []
  },
  'yaa-asantewaa': {
    simbolos: ['El Taburete de Oro'],
    poderes: [['Liderazgo militar', 'Asume el mando cuando los hombres dudan en luchar.']],
    familia: [['osei-tutu', 'otro']]
  },
  'osei-tutu': {
    simbolos: ['El Taburete de Oro descendido del cielo'],
    poderes: [['Unificación de clanes', 'Funda el Imperio Ashanti bajo un trono sagrado compartido.']],
    familia: [['yaa-asantewaa', 'otro']]
  },
  behanzin: {
    simbolos: ['El tiburón', 'Las guerreras amazonas'],
    poderes: [['Resistencia armada', 'Lidera la defensa de Dahomey contra la invasión francesa.']],
    familia: []
  },
  'askia-mohammed': {
    simbolos: ['Tombuctú', 'La peregrinación dorada'],
    poderes: [['Expansión imperial', 'Convierte a Songhai en el estado más extenso de África occidental.']],
    familia: []
  },
  'samory-toure': {
    simbolos: ['El taller de armas', 'El imperio móvil'],
    poderes: [['Resistencia prolongada', 'Reorganiza y traslada su reino para resistir casi dos décadas.']],
    familia: []
  },

  // --- MONSTRUOS ---
  grootslang: {
    simbolos: ['Los diamantes acumulados', 'La caverna profunda'],
    poderes: [['Guardián de tesoros', 'Devora a quienes intentan robar su riqueza acumulada.']],
    familia: []
  },
  adze: {
    simbolos: ['La luciérnaga nocturna'],
    poderes: [['Transformación en insecto', 'Se infiltra en los hogares para drenar sangre mientras duermen.']],
    familia: []
  },
  tikoloshe: {
    simbolos: ['La piedra de invisibilidad', 'El agua del río'],
    poderes: [['Invisibilidad ante adultos', 'Solo los niños pueden percibirlo con claridad.']],
    familia: []
  },
  impundulu: {
    simbolos: ['El plumaje blanco y negro', 'El relámpago'],
    poderes: [['Invocación de tormentas', 'Provoca tormentas eléctricas violentas con su vuelo.']],
    familia: []
  },
  aigamuxa: {
    simbolos: ['Las dunas del desierto'],
    poderes: [['Visión en los pies', 'Debe caminar de forma extraña para poder ver el camino.']],
    familia: []
  },
  popobawa: {
    simbolos: ['El olor sulfúrico', 'El ala de murciélago'],
    poderes: [['Apariciones periódicas', 'Siembra pánico colectivo durante oleadas de actividad intensa.']],
    familia: []
  },
  'mokele-mbembe': {
    simbolos: ['El pantano profundo'],
    poderes: [['Fuerza colosal', 'Detiene el curso de los ríos con el movimiento de su cuerpo.']],
    familia: []
  },
  'ninki-nanka': {
    simbolos: ['El río de Gambia'],
    poderes: [['Terror paralizante', 'Su sola visión provoca la muerte o la locura permanente.']],
    familia: []
  },
  abiku: {
    simbolos: ['La marca del renacimiento'],
    poderes: [['Ciclo de muerte y renacimiento', 'Nace y muere repetidamente dentro de la misma familia.']],
    familia: []
  },
  obayifo: {
    simbolos: ['La luz brillante nocturna'],
    poderes: [['Drenaje vital', 'Absorbe la fuerza vital de personas y cosechas.']],
    familia: []
  },
  eloko: {
    simbolos: ['La campanilla hipnótica', 'El musgo del bosque'],
    poderes: [['Canto hipnótico', 'Atrae viajeros en trance para devorarlos y crecer.']],
    familia: []
  },
  mamlambo: {
    simbolos: ['El río caudaloso'],
    poderes: [['Otorgamiento ambivalente', 'Concede riqueza o provoca ahogamientos según el respeto recibido.']],
    familia: []
  },

  // --- MORTALES ---
  'balla-fasseke': {
    simbolos: ['La kora del griot'],
    poderes: [['Memoria histórica', 'Preserva y transmite la epopeya de Sundiata para las generaciones futuras.']],
    familia: [['sundiata-keita', 'aliado']]
  },
  yennenga: {
    simbolos: ['El caballo semental', 'La lanza de guerra'],
    poderes: [['Independencia guerrera', 'Escapa a caballo para forjar su propio destino.']],
    familia: []
  },
  'amina-de-zazzau': {
    simbolos: ['Las murallas de tierra apisonada'],
    poderes: [['Fortificación defensiva', 'Construye murallas que protegen ciudades enteras.']],
    familia: []
  },
  'kimpa-vita': {
    simbolos: ['La visión de San Antonio'],
    poderes: [['Liderazgo profético', 'Reúne apoyo popular para reunificar un reino fracturado.']],
    familia: []
  },
  idia: {
    simbolos: ['La máscara de marfil'],
    poderes: [['Estrategia militar', 'Asegura el trono de su hijo mediante campañas decisivas.']],
    familia: []
  }
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-africana'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-africana" -- créalo primero.');
  return filas[0].id;
}

async function obtenerIdSimbolo(nombre) {
  const [filas] = await pool.query('SELECT id FROM simbolos WHERE nombre = ?', [nombre]);
  if (filas.length > 0) return filas[0].id;
  const [resultado] = await pool.query('INSERT INTO simbolos (nombre) VALUES (?)', [nombre]);
  return resultado.insertId;
}

async function main() {
  console.log('Sembrando detalles (simbolos, poderes, familia) de Mitologia Africana...\n');
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
