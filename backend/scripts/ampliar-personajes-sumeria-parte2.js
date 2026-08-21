// ============================================================
// scripts/ampliar-personajes-sumeria-parte2.js
// ------------------------------------------------------------
// Amplia heroes (10) y monstruos (11) de Mitologia Sumeria con:
// parrafo extra, simbolos, poderes y vinculos familiares. Ver
// ampliar-personajes-sumeria-parte1.js para el criterio completo.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-sumeria-parte2.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- HEROES ---
  gilgamesh: {
    extra: `Su fama trascendió su propia epopeya: listas reales sumerias posteriores lo incluyen como un gobernante histórico real de Uruk, y durante siglos los mesopotámicos le rindieron culto funerario como a un juez menor del inframundo, una divinización póstuma poco común para un personaje que la propia tradición admite que murió como cualquier mortal.`,
    simbolos: ['Hacha de bronce', 'Muralla de Uruk', 'León domado'],
    poderes: [['Fuerza sobrehumana', 'Dos tercios de su naturaleza son divinos.']],
    familia: [['ninsun', 'hijo'], ['lugalbanda', 'hijo'], ['enkidu', 'aliado'], ['humbaba', 'enemigo']]
  },
  enkidu: {
    extra: `Su muerte, la primera que Gilgamesh presencia de cerca, se narra con un detalle fisiológico crudo poco habitual en la literatura de su época —la fiebre, el delirio, la descomposición gradual del cuerpo—, un realismo que convierte su pérdida en el punto de inflexión emocional real de toda la epopeya.`,
    simbolos: ['Pelo largo', 'Cuernos pequeños', 'Lanza'],
    poderes: [['Vínculo con lo salvaje', 'Entiende y se mueve entre los animales como uno más.']],
    familia: [['gilgamesh', 'aliado'], ['shamhat', 'aliado'], ['ninsun', 'hijo']]
  },
  utnapishtim: {
    extra: `Su morada final, descrita como un lugar "en la boca de los ríos" donde ningún mortal ordinario puede llegar sin cruzar las Aguas de la Muerte, funciona como un jardín apartado del tiempo, reservado para el único ser humano que logró escapar por completo del destino común de la especie.`,
    simbolos: ['Barco cúbico', 'Paloma', 'Cuervo'],
    poderes: [['Inmortalidad concedida', 'El único mortal al que los dioses otorgaron vida eterna.']],
    familia: [['enki', 'aliado'], ['gilgamesh', 'mentor']]
  },
  lugalbanda: {
    extra: `El ciclo poético dedicado a Lugalbanda es en realidad dos poemas independientes —"Lugalbanda en la cueva de la montaña" y "Lugalbanda y el ave Anzu"— compuestos varios siglos antes de que la figura de su hijo Gilgamesh alcanzara la fama que terminaría eclipsándolo.`,
    simbolos: ['Cueva de montaña', 'Pluma de Anzu'],
    poderes: [['Velocidad sobrehumana', 'Don del ave Anzu que le permite correr distancias imposibles.']],
    familia: [['ninsun', 'conyuge'], ['gilgamesh', 'padre']]
  },
  etana: {
    extra: `Aparece listado en la Lista Real Sumeria con el epíteto de "el que ascendió al cielo", el único gobernante de toda esa larga enumeración cuya hazaña principal no es militar ni administrativa sino directamente cósmica.`,
    simbolos: ['Águila', 'Planta del nacimiento'],
    poderes: [['Vuelo prestado', 'Puede ascender al cielo sobre el lomo del águila que rescató.']],
    familia: [['utu', 'aliado']]
  },
  adapa: {
    extra: `Aunque perdió la inmortalidad para toda la humanidad, la tradición no lo trata como un fracasado: como primero de los siete sabios primordiales, se le atribuye haber enseñado a los hombres la pesca, la construcción de templos y los rituales correctos de purificación.`,
    simbolos: ['Red de pesca', 'Ala rota del viento sur'],
    poderes: [['Sabiduría suprema', 'El hombre más sabio jamás creado por Enki.']],
    familia: [['enki', 'hijo'], ['anu', 'enemigo']]
  },
  shamhat: {
    extra: `Lejos de ser una figura menor u ocasional, las sacerdotisas del templo de Inanna como Shamhat ocupaban una posición social respetada en la Uruk antigua, encargadas de rituales de fertilidad considerados esenciales para el bienestar de toda la ciudad.`,
    simbolos: ['Velo del templo', 'Espejo'],
    poderes: [['Civilizar lo salvaje', 'Su compañía transforma a Enkidu de bestia a hombre.']],
    familia: [['enkidu', 'aliado']]
  },
  siduri: {
    extra: `Su nombre significa aproximadamente "joven mujer" en un idioma anterior al acadio, y algunos estudiosos la consideran un desdoblamiento tardío de la propia Inanna en su faceta más doméstica y menos guerrera.`,
    simbolos: ['Taberna junto al mar', 'Copa de vino'],
    poderes: [['Sabiduría del límite', 'Conoce la frontera exacta entre el mundo mortal y lo inalcanzable.']],
    familia: [['gilgamesh', 'aliado']]
  },
  urshanabi: {
    extra: `Tras acompañar a Gilgamesh de regreso a Uruk al final de la epopeya, Urshanabi desaparece de la tradición sin que ningún texto aclare si alguna vez pudo regresar junto a Utnapishtim, uno de los cabos sueltos más comentados por los traductores modernos.`,
    simbolos: ['Pértiga de madera', 'Barca'],
    poderes: [['Cruzar lo intransitable', 'El único capaz de navegar las Aguas de la Muerte sin perecer.']],
    familia: [['utnapishtim', 'aliado'], ['gilgamesh', 'aliado']]
  },
  ninshubur: {
    extra: `En textos posteriores, sobre todo de tradición acadia, Ninshubur aparece representada como un dios masculino en vez de una diosa femenina, dependiendo de la ciudad y el período, una fluidez de género que no altera en nada su función narrativa como la fiel mensajera cuya obediencia salva a Inanna.`,
    simbolos: ['Bastón de mensajero', 'Vestido de duelo'],
    poderes: [['Lealtad inquebrantable', 'Cumple cualquier instrucción de Inanna sin desviarse jamás.']],
    familia: [['inanna', 'aliado']]
  },

  // --- MONSTRUOS ---
  humbaba: {
    extra: `Los sellos cilíndricos mesopotámicos que representan su rostro —una espiral continua de líneas retorcidas— se han encontrado en cantidades tan grandes que los arqueólogos consideran su imagen uno de los amuletos protectores más populares de la vida cotidiana.`,
    simbolos: ['Rostro de entrañas', 'Bosque de cedros'],
    poderes: [['Voz devastadora', 'Su grito por sí solo puede derribar árboles y aterrorizar ejércitos.']],
    familia: [['enlil', 'aliado'], ['gilgamesh', 'enemigo'], ['enkidu', 'enemigo']]
  },
  'toro-del-cielo': {
    extra: `En la iconografía mesopotámica posterior, la imagen del héroe sometiendo a un toro colosal se convirtió en un motivo artístico recurrente e independiente del mito original, símbolo genérico del triunfo humano sobre fuerzas naturales demasiado grandes para comprenderlas del todo.`,
    simbolos: ['Cuernos celestes', 'Grieta en la tierra'],
    poderes: [['Devastación cósmica', 'Cada resoplido abre grietas que devoran ejércitos enteros.']],
    familia: [['inanna', 'aliado'], ['anu', 'aliado'], ['gilgamesh', 'enemigo']]
  },
  anzu: {
    extra: `Antes de convertirse en el villano de su propio mito, Anzu era representado en sellos más antiguos como guardián protector asociado a Ninurta, no como su enemigo, un giro narrativo que sugiere que el relato del robo de las Tablillas pudo surgir después.`,
    simbolos: ['Tablillas del Destino', 'Nube de tormenta'],
    poderes: [['Revertir cualquier arma', 'Mientras posea las Tablillas, deshace cualquier ataque lanzado en su contra.']],
    familia: [['enlil', 'enemigo'], ['ninurta', 'enemigo']]
  },
  lamashtu: {
    extra: `A diferencia de casi cualquier otro demonio mesopotámico, existían amuletos y textos mágicos dedicados exclusivamente a expulsar a Lamashtu de un hogar, un corpus tan extenso que algunos historiadores lo consideran casi una subdisciplina propia dentro de la medicina ritual mesopotámica.`,
    simbolos: ['Peine y huso', 'Cerdo y perro'],
    poderes: [['Amenaza al nacimiento', 'Provoca abortos y enfermedades mortales en recién nacidos.']],
    familia: [['anu', 'hija'], ['pazuzu', 'enemigo']]
  },
  pazuzu: {
    extra: `Su imagen, pese a su apariencia monstruosa, se colocaba a menudo directamente sobre la cama de mujeres embarazadas o niños enfermos: el mismo rostro capaz de aterrorizar a cualquiera era, precisamente por eso, la protección más buscada contra un mal todavía peor.`,
    simbolos: ['Cabeza de amuleto', 'Alas de murciélago'],
    poderes: [['Control del viento del suroeste', 'Trae o retiene la sequía y las plagas a voluntad.']],
    familia: [['lamashtu', 'enemigo']]
  },
  mushussu: {
    extra: `Su imagen tallada en la Puerta de Ishtar de Babilonia, alternada con toros y leones a lo largo de todo el camino procesional, convirtió a esta criatura en uno de los pocos monstruos mitológicos del mundo antiguo que sobrevive hoy en un contexto museístico monumental.`,
    simbolos: ['Escamas iridiscentes', 'Lengua bífida', 'Cuerno único'],
    poderes: [['Veneno y fuego', 'Puede escupir ambos contra cualquier intruso.']],
    familia: [['tiamat', 'madre'], ['marduk', 'aliado']]
  },
  namtar: {
    extra: `A diferencia de otros demonios con una forma física reconocible, Namtar rara vez se describe con un aspecto fijo en los textos que se conservan, casi como si su función administrativa —el destino mismo— resultara demasiado abstracta para fijarla en una sola imagen.`,
    simbolos: ['Sesenta sellos de enfermedad', 'Sombra sin rostro'],
    poderes: [['Ejecutar el destino', 'Ninguna muerte decretada por Ereshkigal escapa a su alcance.']],
    familia: [['ereshkigal', 'aliado'], ['nergal', 'enemigo']]
  },
  gallu: {
    extra: `Su completa incapacidad para sentir hambre, sed o afecto los convierte, dentro de la lógica religiosa mesopotámica, en la representación más pura posible de la muerte misma: no comparten ninguna necesidad que los haga negociables, sobornables o compasivos.`,
    simbolos: ['Cadenas', 'Rostro sin rasgos'],
    poderes: [['Ejecución implacable', 'Ninguna súplica ni soborno los detiene una vez enviados.']],
    familia: [['ereshkigal', 'aliado'], ['dumuzi', 'enemigo']]
  },
  'hombres-escorpion': {
    extra: `Su papel como guardianes que interrogan antes de atacar —en vez de simplemente destruir a cualquier intruso— los distingue de la mayoría de los monstruos mesopotámicos: juzgan la intención del viajero antes de decidir su destino.`,
    simbolos: ['Aguijón venenoso', 'Puerta de montaña'],
    poderes: [['Mirada mortal', 'Puede matar a un mortal ordinario con solo mirarlo.']],
    familia: [['utu', 'aliado'], ['gilgamesh', 'aliado']]
  },
  kur: {
    extra: `Algunos estudiosos identifican a Kur, en su aspecto de dragón, como un antecedente narrativo directo de Tiamat: ambos representan una fuerza acuática primordial y devoradora que debe ser sometida por un dios más joven para que el orden cósmico pueda establecerse.`,
    simbolos: ['Escamas de piedra', 'Alas rotas'],
    poderes: [['Dominio subterráneo', 'Controla las profundidades bajo la tierra y el inframundo.']],
    familia: [['enki', 'enemigo'], ['ereshkigal', 'aliado']]
  },
  lahmu: {
    extra: `Estatuillas de lahmu, con su cabello largo y rizado característico, se han encontrado enterradas bajo los umbrales de templos y casas particulares en toda Mesopotamia, colocadas ahí deliberadamente durante la construcción como protección permanente e invisible.`,
    simbolos: ['Cabello rizado', 'Vasija de agua'],
    poderes: [['Guardia eterna', 'Protege umbrales y puertas sagradas contra la intrusión de espíritus malignos.']],
    familia: [['apsu', 'hijo'], ['tiamat', 'hijo']]
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
  console.log('Ampliando heroes y monstruos de Mitologia Sumeria (parte 2)...\n');
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
