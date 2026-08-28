// ============================================================
// scripts/agregar-detalles-egipcia.js
// ------------------------------------------------------------
// Simbolos, poderes y relaciones familiares para los 7 personajes
// nuevos agregados por agregar-personajes-egipcia.js. Correr
// DESPUES de ese script. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/agregar-detalles-egipcia.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  heh: {
    simbolos: ['La nervadura de palma', 'El signo de "millones de años"'],
    poderes: [['Infinitud', 'Personifica la duración ilimitada del tiempo y el reinado.']],
    familia: []
  },
  bes: {
    simbolos: ['El rostro leonino', 'El cuchillo protector', 'El tambor'],
    poderes: [['Protección apotropaica', 'Su aspecto feroz ahuyenta espíritus malignos y peligros del hogar.'], ['Guardián del parto', 'Protege a las mujeres y a los recién nacidos durante el nacimiento.']],
    familia: []
  },
  wadjet: {
    simbolos: ['El uraeus', 'La cobra erguida'],
    poderes: [['Fuego protector', 'Su imagen en la corona real escupe fuego contra los enemigos del faraón.']],
    familia: [['ra', 'otro']]
  },
  min: {
    simbolos: ['El mayal', 'La lechuga', 'El grano de la cosecha'],
    poderes: [['Fertilidad agrícola', 'Garantiza la fertilidad de la tierra y las buenas cosechas.']],
    familia: [['amon', 'otro']]
  },
  hatshepsut: {
    simbolos: ['La barba postiza real', 'El templo de Deir el-Bahari'],
    poderes: [['Gobierno pleno como faraón', 'Reclamó para sí los títulos y la regalia completa de un rey.']],
    familia: []
  },
  'ramses-ii': {
    simbolos: ['Abu Simbel', 'El tratado de paz con los hititas'],
    poderes: [['Poder militar y diplomático', 'Lideró campañas contra los hititas y firmó uno de los tratados de paz más antiguos documentados.']],
    familia: []
  },
  akhekh: {
    simbolos: ['Las alas de ave rapaz', 'El cuerpo serpentino'],
    poderes: [['Encarnación del caos', 'Se opone activamente al orden cósmico (maat) instaurado por los dioses.']],
    familia: [['apofis', 'otro']]
  }
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-egipcia'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-egipcia".');
  return filas[0].id;
}

async function obtenerIdSimbolo(nombre) {
  const [filas] = await pool.query('SELECT id FROM simbolos WHERE nombre = ?', [nombre]);
  if (filas.length > 0) return filas[0].id;
  const [resultado] = await pool.query('INSERT INTO simbolos (nombre) VALUES (?)', [nombre]);
  return resultado.insertId;
}

async function main() {
  console.log('Agregando detalles (simbolos, poderes, familia) a los personajes nuevos de Mitologia Egipcia...\n');
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
