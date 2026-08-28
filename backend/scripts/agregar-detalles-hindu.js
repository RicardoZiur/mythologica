// ============================================================
// scripts/agregar-detalles-hindu.js
// ------------------------------------------------------------
// Simbolos, poderes y relaciones familiares para los 11
// personajes nuevos agregados por agregar-personajes-hindu.js.
// Correr DESPUES de ese script. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/agregar-detalles-hindu.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  hiranyagarbha: {
    simbolos: ['El huevo dorado', 'Las aguas primordiales'],
    poderes: [['Origen del universo', 'Contiene dentro de sí la totalidad del cosmos por nacer.']],
    familia: [['brahma', 'otro']]
  },
  aditi: {
    simbolos: ['El cielo ilimitado', 'Los Adityas'],
    poderes: [['Maternidad ilimitada', 'Madre de los Adityas, las grandes divinidades solares.']],
    familia: [['varuna', 'hijo'], ['surya', 'hijo']]
  },
  vishwakarma: {
    simbolos: ['El vajra', 'Las herramientas del arquitecto'],
    poderes: [['Creación divina', 'Forja las armas de los dioses y construye ciudades enteras.']],
    familia: [['indra', 'otro']]
  },
  dhanvantari: {
    simbolos: ['El vaso del amrita', 'Los textos ayurvédicos'],
    poderes: [['Medicina suprema', 'Padre de la medicina ayurvédica y sanador de los dioses.']],
    familia: [['vishnu', 'otro']]
  },
  ushas: {
    simbolos: ['El carro del amanecer', 'La luz que aparta la noche'],
    poderes: [['Renovación eterna', 'Renace cada mañana sin envejecer jamás.']],
    familia: []
  },
  bhishma: {
    simbolos: ['El lecho de flechas', 'El voto terrible'],
    poderes: [['Muerte elegida', 'Puede decidir libremente el momento exacto de su propia muerte.']],
    familia: [['arjuna', 'otro']]
  },
  nala: {
    simbolos: ['Los dados', 'El disfraz de auriga'],
    poderes: [['Realeza recuperada', 'Recupera su reino y su verdadera forma tras años de exilio.']],
    familia: [['damayanti', 'conyuge']]
  },
  vritra: {
    simbolos: ['Las aguas retenidas', 'El vajra que lo derrota'],
    poderes: [['Retención cósmica', 'Encierra dentro de su propio cuerpo todas las aguas del mundo.']],
    familia: [['indra', 'enemigo']]
  },
  putana: {
    simbolos: ['El veneno disfrazado de leche materna'],
    poderes: [['Metamorfosis', 'Puede transformar su apariencia a voluntad para engañar a sus víctimas.']],
    familia: [['kamsa', 'otro'], ['krishna', 'enemigo']]
  },
  damayanti: {
    simbolos: ['El svayamvara', 'La prueba de los dioses disfrazados'],
    poderes: [['Discernimiento infalible', 'Distingue a su amado incluso entre dioses disfrazados con su apariencia exacta.']],
    familia: [['nala', 'conyuge']]
  },
  shakuntala: {
    simbolos: ['El anillo perdido', 'El ermitaño del bosque'],
    poderes: [['Vínculo con la naturaleza', 'Crece rodeada y protegida por los animales del bosque.']],
    familia: []
  }
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-hindu'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-hindu".');
  return filas[0].id;
}

async function obtenerIdSimbolo(nombre) {
  const [filas] = await pool.query('SELECT id FROM simbolos WHERE nombre = ?', [nombre]);
  if (filas.length > 0) return filas[0].id;
  const [resultado] = await pool.query('INSERT INTO simbolos (nombre) VALUES (?)', [nombre]);
  return resultado.insertId;
}

async function main() {
  console.log('Agregando detalles (simbolos, poderes, familia) a los personajes nuevos de Mitologia Hindu...\n');
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
