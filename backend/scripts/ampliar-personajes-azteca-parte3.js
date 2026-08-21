// ============================================================
// scripts/ampliar-personajes-azteca-parte3.js
// ------------------------------------------------------------
// Agrega simbolos, poderes (donde aplique) y vinculos familiares
// a los 5 mortales de Mitologia Azteca. Mismo patron que
// ampliar-personajes-azteca-parte1.js / parte2.js. Idempotente.
//
// COMO CORRERLO (desde backend/, con el tunel activo):
//   node scripts/ampliar-personajes-azteca-parte3.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  ixtaccihuatl: {
    simbolos: ['Silueta de mujer dormida', 'Nieve eterna'],
    poderes: [],
    familia: [['popocatepetl', 'amante']]
  },
  'princesa-de-culhuacan': {
    simbolos: ['Piel sagrada', 'Vestido de la diosa Toci'],
    poderes: [],
    familia: []
  },
  popocatepetl: {
    simbolos: ['Volcán humeante', 'Guerrero en vigilia eterna'],
    poderes: [],
    familia: [['ixtaccihuatl', 'amante']]
  },
  quetzalpetlatl: {
    simbolos: ['Petate de autoridad', 'Copa de pulque derramada'],
    poderes: [],
    familia: [['topiltzin-quetzalcoatl', 'hermano']]
  },
  'xochitl-doncella': {
    simbolos: ['Planta de maguey recién descubierta', 'Aguamiel'],
    poderes: [],
    familia: []
  }
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-azteca'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-azteca".');
  return filas[0].id;
}

async function obtenerOCrearSimbolo(nombre) {
  const [existente] = await pool.query('SELECT id FROM simbolos WHERE nombre = ?', [nombre]);
  if (existente.length > 0) return existente[0].id;
  const [resultado] = await pool.query('INSERT INTO simbolos (nombre) VALUES (?)', [nombre]);
  return resultado.insertId;
}

async function procesarUno(slug, datos, idsPersonajes) {
  const personajeId = idsPersonajes[slug];
  if (!personajeId) {
    console.log(`  ! Personaje "${slug}" no encontrado, se salta.`);
    return;
  }

  const [[personaje]] = await pool.query('SELECT nombre FROM personajes WHERE id = ?', [personajeId]);

  for (const nombreSimbolo of datos.simbolos) {
    const simboloId = await obtenerOCrearSimbolo(nombreSimbolo);
    const [vinculo] = await pool.query('SELECT 1 FROM personaje_simbolos WHERE personaje_id = ? AND simbolo_id = ?', [personajeId, simboloId]);
    if (vinculo.length === 0) {
      await pool.query('INSERT INTO personaje_simbolos (personaje_id, simbolo_id) VALUES (?, ?)', [personajeId, simboloId]);
    }
  }

  for (let i = 0; i < datos.poderes.length; i++) {
    const [nombrePoder, descripcionPoder] = datos.poderes[i];
    const [existente] = await pool.query('SELECT id FROM poderes WHERE personaje_id = ? AND nombre = ?', [personajeId, nombrePoder]);
    if (existente.length === 0) {
      await pool.query('INSERT INTO poderes (personaje_id, nombre, descripcion, orden) VALUES (?, ?, ?, ?)', [personajeId, nombrePoder, descripcionPoder, i + 1]);
    }
  }

  for (const [slugRelacionado, tipoRelacion] of datos.familia) {
    const idRelacionado = idsPersonajes[slugRelacionado];
    if (!idRelacionado) {
      console.log(`    ! Relacionado "${slugRelacionado}" no encontrado para ${slug}, se salta ese vinculo.`);
      continue;
    }
    const [existente] = await pool.query(
      'SELECT id FROM relaciones_personajes WHERE personaje_id = ? AND personaje_relacionado_id = ? AND tipo_relacion = ?',
      [personajeId, idRelacionado, tipoRelacion]
    );
    if (existente.length === 0) {
      await pool.query(
        'INSERT INTO relaciones_personajes (personaje_id, personaje_relacionado_id, tipo_relacion) VALUES (?, ?, ?)',
        [personajeId, idRelacionado, tipoRelacion]
      );
    }
  }

  console.log(`  - "${personaje.nombre}" ampliado.`);
}

async function main() {
  console.log('Ampliando mortales de Mitologia Azteca (parte 3)...\n');
  const libroId = await obtenerLibroId();

  const [filas] = await pool.query('SELECT id, slug FROM personajes WHERE libro_id = ?', [libroId]);
  const idsPersonajes = {};
  filas.forEach(f => { idsPersonajes[f.slug] = f.id; });

  for (const [slug, datos] of Object.entries(DATOS)) {
    await procesarUno(slug, datos, idsPersonajes);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
