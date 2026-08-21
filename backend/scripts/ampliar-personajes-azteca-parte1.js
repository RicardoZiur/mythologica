// ============================================================
// scripts/ampliar-personajes-azteca-parte1.js
// ------------------------------------------------------------
// Agrega simbolos, poderes y vinculos familiares a los dioses
// (15) y titanes/primordiales (5) de Mitologia Azteca. La
// descripcion_larga ya fue ampliada en ampliar-personajes-azteca.js;
// este script cubre lo que faltaba (0 simbolos/poderes/familia
// segun diagnostico), mismo patron que ampliar-personajes-sumeria-*.
// Idempotente.
//
// COMO CORRERLO (desde backend/, con el tunel activo):
//   node scripts/ampliar-personajes-azteca-parte1.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- DIOSES ---
  chalchiuhtlicue: {
    simbolos: ['Falda de jade', 'Vasija de agua', 'Río'],
    poderes: [['Dominio de las aguas superficiales', 'Gobierna ríos, lagos y mares, y decide si son fuente de vida o de peligro.'], ['Protección del parto', 'Vela por los recién nacidos en su primer contacto con el agua.']],
    familia: [['tlaloc', 'conyuge']]
  },
  coatlicue: {
    simbolos: ['Falda de serpientes', 'Collar de manos y corazones', 'Serpientes dobles'],
    poderes: [['Fecundidad sin contacto', 'Puede concebir sin unión física, como ocurrió con Huitzilopochtli.'], ['Encarnar vida y muerte', 'Su cuerpo mismo representa el ciclo completo de nacer y devorar.']],
    familia: [['huitzilopochtli', 'madre'], ['coyolxauhqui', 'madre'], ['malinalxochitl', 'madre']]
  },
  coyolxauhqui: {
    simbolos: ['Cascabeles en las mejillas', 'Media luna', 'Cuerpo desmembrado'],
    poderes: [['Liderazgo guerrero', 'Comanda a los Centzon Huitznahua en la batalla contra su propio hermano.']],
    familia: [['coatlicue', 'hija'], ['huitzilopochtli', 'hermana'], ['huitzilopochtli', 'enemigo']]
  },
  huitzilopochtli: {
    simbolos: ['Colibrí', 'Xiuhcóatl, la serpiente de fuego', 'Escudo con plumas de águila'],
    poderes: [['Nacer armado para la guerra', 'Emerge ya adulto y armado, listo para el combate inmediato.'], ['Guía del pueblo elegido', 'Dirige la peregrinación mexica hasta el sitio profetizado.']],
    familia: [['coatlicue', 'hijo'], ['coyolxauhqui', 'hermana'], ['coyolxauhqui', 'enemigo'], ['malinalxochitl', 'hermana'], ['copil', 'enemigo'], ['quetzalcoatl', 'hermano'], ['tezcatlipoca', 'hermano'], ['xipe-totec', 'hermano']]
  },
  mayahuel: {
    simbolos: ['Planta de maguey', 'Múltiples pechos', 'Vasija de aguamiel'],
    poderes: [['Origen del pulque', 'De su cuerpo transformado nace la bebida sagrada.'], ['Fecundidad múltiple', 'Da origen a los cuatrocientos Centzon Totochtin.']],
    familia: [['centzon-totochtin', 'madre']]
  },
  mictlantecuhtli: {
    simbolos: ['Cráneo descarnado', 'Búho', 'Araña'],
    poderes: [['Gobierno del inframundo', 'Decide el destino final de toda alma que llega al Mictlán.'], ['Guardián de los huesos', 'Custodia los huesos de generaciones pasadas, necesarios para engendrar vida nueva.']],
    familia: [['quetzalcoatl', 'enemigo']]
  },
  quetzalcoatl: {
    simbolos: ['Serpiente emplumada', 'Caracol cortado de Ehécatl', 'Estrella de la mañana'],
    poderes: [['Dominio del viento', 'Como Ehécatl, puede desatar o calmar el viento a voluntad.'], ['Creador de la humanidad', 'Recupera los huesos del inframundo y los mezcla con su propia sangre.']],
    familia: [['xolotl', 'hermano'], ['tonacatecuhtli', 'hijo'], ['tonacacihuatl', 'hijo'], ['tezcatlipoca', 'enemigo'], ['mictlantecuhtli', 'enemigo'], ['tlaltecuhtli', 'enemigo']]
  },
  tezcatlipoca: {
    simbolos: ['Espejo de obsidiana humeante', 'Jaguar', 'Pie de serpiente'],
    poderes: [['Ver todo destino', 'Su espejo humeante revela el futuro y los pensamientos ocultos.'], ['Transformación en jaguar', 'Puede adoptar forma felina para cazar o castigar.']],
    familia: [['tonacatecuhtli', 'hijo'], ['tonacacihuatl', 'hijo'], ['quetzalcoatl', 'enemigo'], ['huitzilopochtli', 'hermano'], ['tlaltecuhtli', 'enemigo']]
  },
  tlaloc: {
    simbolos: ['Anteojeras de serpiente', 'Colmillos de jaguar', 'Vasija de lluvia'],
    poderes: [['Control de la lluvia', 'Decide si el año trae cosecha abundante o sequía destructiva.'], ['Dominio del rayo y el granizo', 'Gobierna todos los fenómenos que acompañan a la tormenta.']],
    familia: [['chalchiuhtlicue', 'conyuge']]
  },
  tlazolteotl: {
    simbolos: ['Escoba', 'Huso de hilar', 'Boca manchada de negro'],
    poderes: [['Absolver la falta', 'Puede perdonar una sola vez en la vida cualquier transgresión moral confesada.'], ['Provocar y curar el deseo', 'Gobierna tanto la tentación como el remedio para superarla.']],
    familia: [['centeotl', 'hijo']]
  },
  tonatiuh: {
    simbolos: ['Disco solar', 'Águila', 'Lengua de cuchillo de obsidiana'],
    poderes: [['Sostener el quinto sol', 'Su movimiento diario depende del sacrificio humano constante.'], ['Guerra sagrada', 'Reclama guerreros capturados en batalla para alimentar su fuerza.']],
    familia: []
  },
  'xipe-totec': {
    simbolos: ['Piel humana desollada', 'Semilla de maíz brotando', 'Vasija dorada'],
    poderes: [['Renovación por transformación', 'Su piel desollada representa la renovación de la tierra tras el desgaste.'], ['Patronazgo de orfebres', 'Protege a quienes trabajan el oro y los metales preciosos.']],
    familia: [['tonacatecuhtli', 'hijo'], ['tonacacihuatl', 'hijo'], ['huitzilopochtli', 'hermano']]
  },
  xochipilli: {
    simbolos: ['Flor de cempasúchil', 'Hongos sagrados', 'Mariposa'],
    poderes: [['Inspirar el placer y el arte', 'Concede inspiración para el canto, la danza y el juego.'], ['Abrir la visión', 'A través de plantas sagradas revela mensajes considerados divinos.']],
    familia: []
  },
  xochiquetzal: {
    simbolos: ['Flores frescas', 'Mariposa', 'Telar de tejer'],
    poderes: [['Inspirar el amor y la belleza', 'Concede atractivo y talento artístico a quien favorece.'], ['Patronazgo del tejido', 'Protege a hilanderas y artesanas del algodón.']],
    familia: []
  },
  xolotl: {
    simbolos: ['Perro xoloitzcuintle', 'Rayo gemelo', 'Ajolote'],
    poderes: [['Guía de los muertos', 'Conduce las almas a través del inframundo hasta el Mictlán.'], ['Gemelo transformador', 'Puede adoptar formas dobles o incompletas a voluntad.']],
    familia: [['quetzalcoatl', 'hermano']]
  },

  // --- TITANES / PRIMORDIALES ---
  centeotl: {
    simbolos: ['Mazorca de maíz', 'Brote verde', 'Tocado de espigas'],
    poderes: [['Dar vida al maíz', 'Encarna el ciclo completo del grano, de la siembra a la cosecha.']],
    familia: [['tlazolteotl', 'madre']]
  },
  mixcoatl: {
    simbolos: ['Flecha y arco', 'Rayas rojas y blancas', 'Vía Láctea'],
    poderes: [['Maestría de la caza', 'Ningún animal escapa a su puntería certera.'], ['Fundador del fuego ritual', 'Se le atribuye haber encendido el primer fuego para los cazadores.']],
    familia: [['chimalma', 'conyuge'], ['topiltzin-quetzalcoatl', 'hijo'], ['centzon-mimixcoa', 'enemigo']]
  },
  ometeotl: {
    simbolos: ['Dualidad entrelazada', 'Espejo doble'],
    poderes: [['Origen de toda dualidad', 'De su naturaleza doble surge cada par de opuestos del cosmos.']],
    familia: []
  },
  tonacacihuatl: {
    simbolos: ['Fuego del hogar', 'Vasija primordial'],
    poderes: [['Madre de los cuatro creadores', 'Engendra a las cuatro divinidades que después ordenan el cosmos.']],
    familia: [['tonacatecuhtli', 'conyuge'], ['tezcatlipoca', 'madre'], ['quetzalcoatl', 'madre'], ['huitzilopochtli', 'madre'], ['xipe-totec', 'madre']]
  },
  tonacatecuhtli: {
    simbolos: ['Fuego primordial', 'Dos palos de encender fuego'],
    poderes: [['Padre de los cuatro creadores', 'Engendra junto a su esposa a las divinidades fundadoras.'], ['Encender el primer fuego', 'Origina el fuego ritual que se repite cada cincuenta y dos años.']],
    familia: [['tonacacihuatl', 'conyuge'], ['tezcatlipoca', 'padre'], ['quetzalcoatl', 'padre'], ['huitzilopochtli', 'padre'], ['xipe-totec', 'padre']]
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
  console.log('Ampliando dioses y titanes de Mitologia Azteca (parte 1)...\n');
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
