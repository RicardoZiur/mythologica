// ============================================================
// scripts/ampliar-personajes-sumeria-parte3.js
// ------------------------------------------------------------
// Amplia los 5 mortales de Mitologia Sumeria con: parrafo extra,
// simbolos, poderes y vinculos familiares. Con esto se completan
// los 48 personajes del libro. Ver ampliar-personajes-sumeria-parte1.js
// para el criterio completo.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-sumeria-parte3.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  'sargon-de-akkad': {
    extra: `Su leyenda de nacimiento se transmitió y adaptó durante siglos como modelo narrativo para justificar el ascenso de gobernantes posteriores de origen humilde en toda la región, un patrón tan influyente que resuena, siglos después, en historias de fundadores de otras culturas del Cercano Oriente que enfrentaron el mismo problema retórico: cómo legitimar a un rey que no nació en un palacio.`,
    simbolos: ['Cesta de juncos', 'Corona de Akkad'],
    poderes: [['Favor divino', 'Ishtar lo eleva personalmente desde jardinero hasta rey.']],
    familia: [['enheduanna', 'padre']]
  },
  'ku-baba': {
    extra: `Su culto posterior como Kubaba se extendió mucho más allá de Mesopotamia, llegando a Anatolia, donde algunos historiadores la consideran una influencia sobre cultos posteriores de diosas madre en la región —una trayectoria excepcional para una figura cuya carrera, según el propio registro oficial sumerio, había comenzado sirviendo cerveza detrás de un mostrador.`,
    simbolos: ['Copa de tabernera', 'Espejo'],
    poderes: [['Fundación dinástica', 'Estableció un linaje real que gobernó Kish durante un siglo entero.']],
    familia: []
  },
  enmerkar: {
    extra: `El episodio de la invención de la escritura en su ciclo épico, aunque legendario, refleja una intuición certera sobre el verdadero origen práctico de la escritura cuneiforme: los primeros textos sumerios que se conservan no son poemas ni oraciones, sino precisamente listas de mercancías y registros administrativos, muy en la línea de lo que el mito le atribuye a Enmerkar haber necesitado resolver.`,
    simbolos: ['Tablilla de arcilla húmeda', 'Caña de escribir'],
    poderes: [['Ingenio administrativo', 'Resuelve con inventiva problemas que la fuerza militar no podría.']],
    familia: [['lugalbanda', 'otro']]
  },
  'ur-nammu': {
    extra: `Fragmentos de su código legal, redescubiertos y traducidos recién en el siglo veinte, revelaron que ya contemplaba conceptos como la compensación económica por lesiones físicas específicas —tantos siclos de plata por un hueso roto, tantos por un diente perdido—, sentando un precedente casi tres siglos anterior al mucho más célebre código de Hammurabi.`,
    simbolos: ['Tablilla de leyes', 'Zigurat de Ur'],
    poderes: [['Justicia codificada', 'Estableció el sistema legal escrito más antiguo conocido.']],
    familia: []
  },
  enheduanna: {
    extra: `Su "Exaltación de Inanna" no es solo un himno religioso sino también, en cierto sentido, el primer texto conocido de reflexión sobre el propio acto de escribir: en él, Enheduanna describe su proceso de composición, afirmando haber "dado a luz" el poema durante la noche, una imagen que convierte la escritura misma en un evento tan significativo como el contenido religioso que describe.`,
    simbolos: ['Disco de alabastro', 'Estilete de escriba'],
    poderes: [['Autoría reconocida', 'La primera voz individual de la historia registrada por escrito.']],
    familia: [['sargon-de-akkad', 'hija'], ['nanna', 'aliado']]
  }
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-sumeria'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-sumeria".');
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
  console.log('Ampliando mortales de Mitologia Sumeria (parte 3)...\n');
  const libroId = await obtenerLibroId();

  const [filas] = await pool.query('SELECT id, slug FROM personajes WHERE libro_id = ?', [libroId]);
  const idsPersonajes = {};
  filas.forEach(f => { idsPersonajes[f.slug] = f.id; });

  for (const [slug, datos] of Object.entries(DATOS)) {
    await procesarUno(slug, datos, idsPersonajes);
  }

  console.log('\nListo. Los 48 personajes de Mitologia Sumeria ya tienen su contenido ampliado.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
