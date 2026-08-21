// ============================================================
// scripts/ampliar-personajes-azteca-parte2.js
// ------------------------------------------------------------
// Agrega simbolos, poderes y vinculos familiares a los heroes
// (10) y monstruos (12) de Mitologia Azteca. Mismo patron que
// ampliar-personajes-azteca-parte1.js. Idempotente.
//
// COMO CORRERLO (desde backend/, con el tunel activo):
//   node scripts/ampliar-personajes-azteca-parte2.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- HEROES ---
  acamapichtli: {
    simbolos: ['Diadema turquesa (xiuhuitzolli)', 'Nopal', 'Escudo de junco'],
    poderes: [['Fundar una dinastía', 'Su descendencia gobernará Tenochtitlan hasta la conquista.']],
    familia: []
  },
  axolohua: {
    simbolos: ['Aguas profundas del lago', 'Caracola'],
    poderes: [['Sumergirse sin temor', 'Se atreve a bajar a las profundidades donde otros no osan.']],
    familia: [['tenoch', 'aliado']]
  },
  chimalma: {
    simbolos: ['Escudo (chimalli)', 'Piedra verde tragada'],
    poderes: [['Concepción prodigiosa', 'Concibe a Topiltzin Quetzalcoatl al tragar una piedra sagrada.']],
    familia: [['mixcoatl', 'conyuge'], ['topiltzin-quetzalcoatl', 'hijo']]
  },
  copil: {
    simbolos: ['Corazón arrancado', 'Nopal sobre la piedra'],
    poderes: [['Legado tras la derrota', 'Su corazón enterrado da origen al símbolo fundacional mexica.']],
    familia: [['malinalxochitl', 'madre'], ['huitzilopochtli', 'enemigo']]
  },
  cuauhcoatl: {
    simbolos: ['Águila-serpiente', 'Bastón de anciano guía'],
    poderes: [['Interpretar presagios', 'Reconoce la señal profetizada que marca el fin de la peregrinación.']],
    familia: [['tenoch', 'aliado']]
  },
  huemac: {
    simbolos: ['Pelota de hule', 'Corona tolteca caída'],
    poderes: [['Gobierno tras la caída', 'Hereda el trono de Tollan tras la partida de Topiltzin Quetzalcoatl.']],
    familia: []
  },
  malinalxochitl: {
    simbolos: ['Escorpión', 'Serpiente venenosa'],
    poderes: [['Hechicería sobre criaturas venenosas', 'Comanda escorpiones y serpientes a voluntad.']],
    familia: [['copil', 'hijo'], ['huitzilopochtli', 'hermana']]
  },
  nezahualcoyotl: {
    simbolos: ['Coyote hambriento', 'Código legal tallado'],
    poderes: [['Sobrevivir la persecución', 'Escapa una y otra vez de la muerte mediante astucia y paciencia.'], ['Legislar con sabiduría', 'Promulga un código de leyes recordado por generaciones.']],
    familia: []
  },
  tenoch: {
    simbolos: ['Águila sobre el nopal', 'Tuna de piedra'],
    poderes: [['Reconocer la señal sagrada', 'Identifica el presagio del águila que marca la fundación.']],
    familia: [['axolohua', 'aliado'], ['cuauhcoatl', 'aliado']]
  },
  'topiltzin-quetzalcoatl': {
    simbolos: ['Serpiente emplumada tallada', 'Barba y máscara ritual'],
    poderes: [['Gobierno del esplendor tolteca', 'Bajo su reinado Tollan alcanza su máximo florecimiento artístico.']],
    familia: [['mixcoatl', 'padre'], ['chimalma', 'madre'], ['quetzalpetlatl', 'hermana'], ['tezcatlipoca', 'enemigo']]
  },

  // --- MONSTRUOS ---
  ahuizotl: {
    simbolos: ['Mano en la punta de la cola', 'Pelaje siempre mojado'],
    poderes: [['Atraer con llanto falso', 'Imita el llanto de un niño para arrastrar a sus víctimas al agua.']],
    familia: []
  },
  'centzon-mimixcoa': {
    simbolos: ['Estrellas del norte', 'Flechas dispersas'],
    poderes: [['Resistencia colectiva', 'Se niegan en conjunto al sacrificio impuesto por Mixcóatl.']],
    familia: [['mixcoatl', 'enemigo']]
  },
  'centzon-totochtin': {
    simbolos: ['Conejo', 'Copa de pulque'],
    poderes: [['Multiplicar la embriaguez', 'Cada uno de los cuatrocientos encarna un efecto distinto de la bebida.']],
    familia: [['mayahuel', 'hijo']]
  },
  chaneques: {
    simbolos: ['Máscara de anciano con rostro infantil', 'Espíritu guardián del monte'],
    poderes: [['Robar el alma', 'Puede sustraer el espíritu de un niño que se aleja solo.']],
    familia: []
  },
  cihuateteo: {
    simbolos: ['Rostro pintado de blanco', 'Cruce de caminos'],
    poderes: [['Descender al anochecer', 'Bajan a la tierra en fechas señaladas para provocar enfermedad.']],
    familia: []
  },
  cipactli: {
    simbolos: ['Cuerpo de caimán-pez', 'Bocas devoradoras en cada articulación'],
    poderes: [['Sostener el mundo', 'Su cuerpo desmembrado forma la tierra y el cielo.']],
    familia: []
  },
  coyotlinahual: {
    simbolos: ['Plumas de quetzal', 'Telar de amanteca'],
    poderes: [['Tejer disfraces mágicos', 'Confecciona atavíos capaces de alterar la percepción de quien los mira.']],
    familia: []
  },
  itzpapalotl: {
    simbolos: ['Alas de obsidiana', 'Garras de mariposa'],
    poderes: [['Vuelo mortal', 'Ataca desde el cielo nocturno con garras cortantes como navajas.']],
    familia: []
  },
  nahual: {
    simbolos: ['Sombra animal', 'Piel doble'],
    poderes: [['Transformación animal', 'Puede adoptar la forma de un animal ligado a su propio destino.']],
    familia: []
  },
  tepeyollotl: {
    simbolos: ['Jaguar en salto', 'Eco de montaña'],
    poderes: [['Provocar temblores', 'Su movimiento bajo tierra sacude montañas y ciudades.']],
    familia: [['tezcatlipoca', 'aliado']]
  },
  tlaltecuhtli: {
    simbolos: ['Cuerpo desgarrado boca abajo', 'Bocas devoradoras en cada articulación'],
    poderes: [['Sostener toda construcción', 'Carga bajo su cuerpo el peso de cada templo y ciudad humana.']],
    familia: [['tezcatlipoca', 'enemigo'], ['quetzalcoatl', 'enemigo']]
  },
  tzitzimitl: {
    simbolos: ['Esqueleto estelar', 'Garras descendentes'],
    poderes: [['Amenazar durante el eclipse', 'Su poder se libera cuando el sol se oscurece.']],
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
  console.log('Ampliando heroes y monstruos de Mitologia Azteca (parte 2)...\n');
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
