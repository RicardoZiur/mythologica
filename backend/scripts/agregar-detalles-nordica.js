// ============================================================
// scripts/agregar-detalles-nordica.js
// ------------------------------------------------------------
// Simbolos, poderes y relaciones familiares para los 11
// personajes nuevos agregados por agregar-personajes-nordica.js.
// Correr DESPUES de ese script. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/agregar-detalles-nordica.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  'sol-nordica': {
    simbolos: ['El carro solar', 'El escudo Svalin', 'El lobo Sköll'],
    poderes: [['Guía del sol', 'Conduce el carro solar por el cielo cada día.'], ['Escudo protector', 'Svalin la protege a ella y al mundo del calor abrasador de su propia carga.']],
    familia: [['mani', 'hermano']]
  },
  mani: {
    simbolos: ['El carro lunar', 'El lobo Hati'],
    poderes: [['Guía de la luna', 'Conduce el carro lunar y determina sus fases.']],
    familia: [['sol-nordica', 'hermana']]
  },
  nott: {
    simbolos: ['El caballo Hrímfaxi', 'El rocío del amanecer'],
    poderes: [['Ciclo de la noche', 'Cabalga cada noche trayendo la oscuridad al mundo.']],
    familia: [['odin', 'otro']]
  },
  ullr: {
    simbolos: ['El arco', 'Los esquís', 'El escudo (para cruzar el agua)'],
    poderes: [['Maestría del arco y el esquí', 'Ningún otro dios lo iguala en puntería o velocidad sobre la nieve.'], ['Patrón del duelo', 'Se invoca su nombre antes de un combate formal.']],
    familia: [['thor', 'otro'], ['sif', 'madre']]
  },
  eir: {
    simbolos: ['Las hierbas curativas', 'El séquito de Frigg'],
    poderes: [['Sanación suprema', 'Considerada la mejor médica entre los dioses.']],
    familia: [['frigg', 'otro']]
  },
  'vili-y-ve': {
    simbolos: ['El cuerpo de Ymir', 'Ask y Embla'],
    poderes: [['Co-creadores del mundo', 'Junto a Odín, dieron muerte a Ymir y formaron el mundo con su cuerpo.'], ['Dones a la humanidad', 'Otorgaron entendimiento y forma a los primeros humanos.']],
    familia: [['odin', 'hermano']]
  },
  volund: {
    simbolos: ['El yunque', 'Las alas forjadas', 'Los anillos de oro'],
    poderes: [['Herrería sobrehumana', 'Forja objetos de una belleza y precisión imposibles para un mortal común.'], ['Vuelo artesanal', 'Se fabricó unas alas propias para escapar de su cautiverio.']],
    familia: []
  },
  starkad: {
    simbolos: ['Las tres vidas', 'La rama de sauce convertida en soga'],
    poderes: [['Longevidad concedida por Odín', 'Vive tres vidas de duración normal.'], ['Maestría guerrera y poética', 'Excepcional tanto en el combate como en la composición de versos.']],
    familia: []
  },
  garmr: {
    simbolos: ['Las cadenas de Gnipahellir', 'El pecho ensangrentado'],
    poderes: [['Guardián del inframundo', 'Vigila la entrada a Hel desde la caverna de Gnipahellir.'], ['Augurio del Ragnarök', 'Su aullido libre anuncia el comienzo del fin del mundo.']],
    familia: [['tyr', 'enemigo']]
  },
  ratatoskr: {
    simbolos: ['Yggdrasil', 'El águila y la serpiente'],
    poderes: [['Mensajero de la discordia', 'Lleva insultos entre el águila de la copa y Nídhögg en la raíz del árbol del mundo.']],
    familia: [['nidhogg', 'otro']]
  },
  gudrun: {
    simbolos: ['La copa envenenada', 'El fuego del salón incendiado'],
    poderes: [['Venganza implacable', 'No se detiene ante nada, ni siquiera sus propios hijos, para vengar a su familia.']],
    familia: [['sigurd', 'conyuge']]
  }
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-nordica'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-nordica".');
  return filas[0].id;
}

async function obtenerIdSimbolo(nombre) {
  const [filas] = await pool.query('SELECT id FROM simbolos WHERE nombre = ?', [nombre]);
  if (filas.length > 0) return filas[0].id;
  const [resultado] = await pool.query('INSERT INTO simbolos (nombre) VALUES (?)', [nombre]);
  return resultado.insertId;
}

async function main() {
  console.log('Agregando detalles (simbolos, poderes, familia) a los personajes nuevos de Mitologia Nordica...\n');
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
