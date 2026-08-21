// ============================================================
// scripts/ampliar-personajes-maya-parte3.js
// ------------------------------------------------------------
// Amplia los 5 mortales de Mitologia Maya con: un parrafo extra
// en descripcion_larga, simbolos, poderes (donde aplique) y
// vinculos familiares. Mismo patron que
// ampliar-personajes-maya-parte1.js / parte2.js. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-maya-parte3.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  'sac-nicte': {
    extra: `La leyenda de Sac-Nicté combina de forma deliberada el mito romántico con la memoria histórica real de la caída de Chichén Itzá y Mayapán a finales del periodo posclásico maya, dos de las ciudades más poderosas del norte de Yucatán en su época. Su nombre, "flor blanca", se conserva hoy en el xtabentún, la misma flor que en otra leyenda yucateca marca el lugar de descanso de Xkeban, un eco simbólico entre dos historias distintas que comparten la misma flor como símbolo de un amor o una bondad genuinos, más allá de las apariencias sociales.`,
    simbolos: ['Flor blanca', 'Velo nupcial'],
    poderes: [],
    familia: [['canek', 'amante']]
  },
  canek: {
    extra: `Las versiones más extendidas de la leyenda no coinciden en el destino final de Canek y Sac-Nicté: algunas narran que ambos se arrojaron juntos a un cenote sagrado antes que aceptar la separación forzosa impuesta por la guerra que su huida había desatado, mientras otras aseguran que lograron escapar y fundar un nuevo asentamiento lejos del conflicto. Esta ambigüedad en el desenlace es habitual en las leyendas de tradición oral yucateca, transmitidas con variaciones propias de una comunidad a otra durante generaciones.`,
    simbolos: ['Estandarte de Chichén Itzá', 'Mano extendida'],
    poderes: [],
    familia: [['sac-nicte', 'amante'], ['ah-ulil', 'enemigo']]
  },
  'ah-ulil': {
    extra: `La tradición oral yucateca trata a Ah Ulil con mayor ambigüedad que a Canek, presentado siempre con simpatía como el amante desafiante: la reacción de Ah Ulil ante la humillación pública es comprensible dado el agravio sufrido frente a toda la nobleza reunida, pero su insistencia en la guerra es también, según ciertas versiones del relato, la causa directa de la ruina que termina alcanzando a las propias ciudades que pretendía defender con su honor.`,
    simbolos: ['Cetro roto', 'Altar vacío'],
    poderes: [],
    familia: [['canek', 'enemigo']]
  },
  xkeban: {
    extra: `La leyenda de Xkeban se sigue contando hoy en comunidades yucatecas como una lección moral deliberadamente opuesta a los juicios superficiales: quien parecía la más indigna de respeto resulta, tras su muerte, la más genuinamente compasiva del pueblo entero. El xtabentún, la flor blanca y fragante que brota de su tumba, se sigue asociando en Yucatán con una variedad de licor regional que lleva su mismo nombre, un recordatorio dulce de la leyenda que sobrevive en la vida cotidiana mucho después de haberse contado por primera vez.`,
    simbolos: ['Flor de xtabentún', 'Manos abiertas'],
    poderes: [],
    familia: []
  },
  'utz-colel': {
    extra: `El contraste entre Utz-Colel y Xkeban funciona como advertencia moral central de toda la leyenda: la virtud pública, sin compasión genuina que la sostenga, resulta tan vacía como el cactus de flor hermosa pero sin aroma que brota de su tumba. Es precisamente el espíritu de Utz-Colel, y no el de Xkeban, el que se transforma con el tiempo en la Xtabay, la seductora nocturna que acecha los caminos yucatecos hasta hoy, condenada a repetir en la muerte la misma frialdad que había ocultado durante toda su vida.`,
    simbolos: ['Cactus sin aroma', 'Reputación intachable'],
    poderes: [],
    familia: [['xtabay', 'creador']]
  }
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-maya'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-maya".');
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

  const [[personaje]] = await pool.query('SELECT nombre, descripcion_larga FROM personajes WHERE id = ?', [personajeId]);

  if (!personaje.descripcion_larga.includes(datos.extra.slice(0, 40))) {
    const nuevaDescripcion = `${personaje.descripcion_larga}\n\n${datos.extra}`;
    await pool.query('UPDATE personajes SET descripcion_larga = ? WHERE id = ?', [nuevaDescripcion, personajeId]);
  }

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
  console.log('Ampliando mortales de Mitologia Maya (parte 3)...\n');
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
