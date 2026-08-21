// ============================================================
// scripts/ampliar-personajes-sumeria-parte1.js
// ------------------------------------------------------------
// Amplia dioses (17) y titanes/primordiales (5) de Mitologia
// Sumeria con: un parrafo extra en descripcion_larga, simbolos,
// poderes y vinculos familiares -- mismo pedido que en los demas
// libros (ver ampliar-personajes-azteca.js), para que las paginas
// del PDF no queden con espacio en blanco de mas. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-sumeria-parte1.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  anu: {
    extra: `Su presencia en el arte mesopotámico es casi siempre indirecta: rara vez aparece representado como figura completa, y en cambio se le simboliza mediante su tocado de cuernos posado sobre un trono vacío, recordando a quien contemplara la escena que la autoridad suprema, aunque invisible, seguía presente detrás de cada decisión tomada por los dioses más jóvenes.`,
    simbolos: ['Tocado de cuernos', 'Trono celeste', 'Estrella'],
    poderes: [['Otorgar la realeza', 'Concede o retira la legitimidad de cualquier gobernante mortal o divino.'], ['Autoridad suprema', 'Su palabra, aunque rara vez pronunciada, es la fuente última de todo decreto.']],
    familia: [['enlil', 'hijo']]
  },
  enlil: {
    extra: `Su templo, el Ekur, se describía como un lugar tan sagrado que ni los propios dioses podían mirarlo directamente sin permiso, y los reyes mesopotámicos databan la legitimidad de su gobierno al momento exacto en que Enlil, a través de sus sacerdotes, les otorgaba el cetro y la corona en ese mismo recinto.`,
    simbolos: ['Corona con cuernos', 'Tormenta', 'Número cincuenta'],
    poderes: [['Otorgar y retirar la realeza', 'Decide qué mortal gobierna y por cuánto tiempo.'], ['Decretar el destino', 'Su palabra en la asamblea divina es prácticamente inapelable.']],
    familia: [['anu', 'hijo'], ['ninlil', 'conyuge'], ['nanna', 'padre'], ['ninurta', 'padre']]
  },
  enki: {
    extra: `Se le atribuye también la organización completa del mundo civilizado: según el poema conocido como "Enki y el orden del mundo", recorrió cada región habitada asignándole su función específica —a Sumer la realeza, a tierras lejanas sus riquezas exóticas, a cada río su caudal— como un arquitecto cósmico que no solo crea sino que además distribuye con cuidado cada pieza de la civilización en su lugar correcto.`,
    simbolos: ['Cabra-pez', 'Aguas corrientes', 'Tortuga'],
    poderes: [['Maestría del agua dulce', 'Gobierna manantiales, ríos y el océano subterráneo del Abzu.'], ['Astucia sin límites', 'Encuentra siempre una salida, incluso desobedeciendo a otros dioses.']],
    familia: [['nammu', 'hijo'], ['ninhursag', 'amante'], ['marduk', 'padre']]
  },
  ninhursag: {
    extra: `Además de su papel en los mitos de creación, se le veneraba como protectora directa de los partos humanos: las parteras invocaban su nombre en el momento exacto del alumbramiento, y algunos textos la describen sosteniendo simbólicamente el "ladrillo del nacimiento" sobre el que se arrodillaban las mujeres mesopotámicas para dar a luz.`,
    simbolos: ['Ladrillo del nacimiento', 'Símbolo omega', 'Montaña'],
    poderes: [['Dar forma a la vida', 'Modela cuerpos vivos a partir de arcilla.'], ['Curación', 'Puede sanar cualquier enfermedad engendrando una deidad específica para cada mal.']],
    familia: [['enki', 'amante']]
  },
  inanna: {
    extra: `Su culto incluía un ritual anual de matrimonio sagrado, durante el cual el propio rey de la ciudad representaba simbólicamente el papel de Dumuzi junto a una sacerdotisa que encarnaba a la diosa, un acto pensado para renovar la fertilidad de la tierra y la legitimidad del gobernante para el año que comenzaba.`,
    simbolos: ['Estrella de ocho puntas', 'Roseta', 'León'],
    poderes: [['Dominio de la guerra', 'Puede desatar batallas y destruir ciudades enteras.'], ['Poder de seducción', 'Ningún dios ni mortal puede resistirse fácilmente a su deseo.']],
    familia: [['nanna', 'hija'], ['utu', 'hermana'], ['dumuzi', 'conyuge'], ['ereshkigal', 'hermana'], ['ninshubur', 'aliado']]
  },
  utu: {
    extra: `Además de su papel como juez, se le consideraba el guardián de todos los viajeros que cruzaban desiertos o montañas: se creía que su luz, al alcanzar cada rincón del mundo durante el día, dejaba al descubierto a los bandidos y demonios que de otro modo emboscarían a los caminantes desprevenidos en cualquier paso solitario.`,
    simbolos: ['Sierra dentada', 'Disco solar', 'Rayos'],
    poderes: [['Ver toda mentira', 'Su luz no deja lugar donde ocultar el engaño.'], ['Cruzar el inframundo', 'Cada noche atraviesa el reino de los muertos y regresa al amanecer.']],
    familia: [['nanna', 'hijo'], ['inanna', 'hermana'], ['gilgamesh', 'aliado']]
  },
  nanna: {
    extra: `Los eclipses lunares se interpretaban como ataques directos contra Nanna por parte de demonios hostiles, y ante cada uno los sacerdotes de Ur organizaban rituales urgentes —tambores, gritos, lamentos— para "ayudar" al dios a repeler el asedio y recuperar su brillo completo en el cielo nocturno.`,
    simbolos: ['Media luna', 'Toro', 'Barca celeste'],
    poderes: [['Medir el tiempo', 'Su ciclo mensual regula el calendario sagrado.'], ['Guía nocturna', 'Ilumina el cielo cuando el sol de su hijo Utu descansa.']],
    familia: [['enlil', 'hijo'], ['ninlil', 'hijo'], ['utu', 'padre'], ['inanna', 'padre']]
  },
  ereshkigal: {
    extra: `A diferencia de Enlil o Marduk, Ereshkigal jamás abandona su propio reino ni participa de la asamblea de los dioses celestiales: toda comunicación con ella debe pasar necesariamente por Namtar, su mensajero, un aislamiento tan absoluto que refuerza la idea de que el inframundo es un territorio completamente separado del resto del cosmos.`,
    simbolos: ['Trono de piedra', 'Gancho', 'Puerta de siete cerrojos'],
    poderes: [['La mirada de la muerte', 'Puede matar con solo fijar la vista en alguien.'], ['Soberanía absoluta', 'Ningún decreto del inframundo se aplica sin su autorización.']],
    familia: [['inanna', 'hermana'], ['nergal', 'conyuge'], ['namtar', 'aliado']]
  },
  nergal: {
    extra: `Antes de su matrimonio con Ereshkigal, Nergal era invocado sobre todo en tiempos de epidemia: se le atribuían las fiebres súbitas y las plagas que arrasaban ciudades enteras en pleno verano, cuando el calor del mediodía —su aspecto más agresivo frente al Utu benevolente— se volvía literalmente mortal para los más débiles.`,
    simbolos: ['Maza', 'León', 'Sol del mediodía'],
    poderes: [['Propagar la peste', 'Puede desatar epidemias a voluntad.'], ['Comandar demonios', 'Catorce demonios lo acompañan y obedecen sus órdenes.']],
    familia: [['ereshkigal', 'conyuge'], ['enlil', 'hijo']]
  },
  ninurta: {
    extra: `Tras su victoria sobre Anzu, Ninurta emprendió una segunda hazaña menos conocida: la derrota del Asag, un demonio de la enfermedad, con cuya piedra petrificada —según el mito— construyó después las montañas del este, ordenando literalmente el paisaje mesopotámico con los restos de sus propios enemigos vencidos.`,
    simbolos: ['Maza Sharur', 'Arado', 'Águila-león'],
    poderes: [['Fuerza sin rival', 'El campeón militar más poderoso de la asamblea divina.'], ['Fertilidad tras la victoria', 'Su arado renueva la tierra después de cada batalla ganada.']],
    familia: [['enlil', 'hijo'], ['anzu', 'enemigo']]
  },
  dumuzi: {
    extra: `Su culto sobrevivió miles de años bajo distintos nombres en todo el Cercano Oriente antiguo —Tammuz entre los babilonios y asirios, Adonis entre los griegos—, y cada año, en pleno verano, las mujeres de Mesopotamia entonaban lamentos rituales por su descenso al inframundo, llorando la muerte simbólica de la vegetación bajo el sol más duro de la temporada.`,
    simbolos: ['Cayado de pastor', 'Cordero', 'Flauta'],
    poderes: [['Fertilidad pastoril', 'Su presencia asegura la abundancia de los rebaños.']],
    familia: [['inanna', 'conyuge'], ['geshtinanna', 'hermano'], ['gallu', 'enemigo']]
  },
  nisaba: {
    extra: `Antes de convertirse en patrona de la escritura, Nisaba ya era venerada como diosa de los límites y las medidas: se le atribuía la invención de la cuerda de agrimensor y la tablilla de cálculo, herramientas sin las cuales habría sido imposible repartir con justicia la tierra cultivable entre los distintos templos de cada ciudad sumeria.`,
    simbolos: ['Estilete', 'Espiga de cebada', 'Tablilla de arcilla'],
    poderes: [['Dominio de la escritura', 'Inventora y patrona de los signos cuneiformes.']],
    familia: [['anu', 'hija']]
  },
  ninkasi: {
    extra: `El propio Himno a Ninkasi funcionaba también como una forma de transmisión oral de la receta de cerveza: al memorizarlo como una oración religiosa, generaciones enteras de cerveceras sumerias conservaron un proceso técnico complejo —malteado, horneado, fermentado— sin necesidad de fórmulas escritas aparte.`,
    simbolos: ['Vasija de fermentación', 'Espiga', 'Copa desbordante'],
    poderes: [['Fermentación perfecta', 'Ninguna tanda de cerveza preparada en su nombre se echa a perder.']],
    familia: [['ninhursag', 'hija']]
  },
  geshtinanna: {
    extra: `Además de su don para interpretar sueños, se le atribuía la invención de la escritura de los números y las cuentas del ganado, un talento administrativo que, sumado a su fidelidad legendaria, la convirtió con el tiempo en patrona secundaria de los escribas del sur de Mesopotamia.`,
    simbolos: ['Vid', 'Tablilla de sueños', 'Racimo de uvas'],
    poderes: [['Interpretar sueños', 'Descifra presagios que ni los propios dioses logran entender del todo.']],
    familia: [['dumuzi', 'hermana']]
  },
  ninlil: {
    extra: `Pese al origen violento de su unión con Enlil, los textos posteriores la elevan a un estatus casi equivalente al de su esposo dentro del culto de Nippur, donde ambos compartían templo y ofrendas conjuntas —una reconciliación religiosa tardía que suavizaba, sin borrarla del todo, la naturaleza incómoda del mito fundacional de su matrimonio.`,
    simbolos: ['Espiga de grano', 'Viento', 'Canal de agua'],
    poderes: [['Fertilidad del grano', 'Bendice o retiene la cosecha según su voluntad.']],
    familia: [['enlil', 'conyuge'], ['nanna', 'madre']]
  },
  ninsun: {
    extra: `Su templo en Uruk, el Egalmah, funcionaba también como una suerte de casa de sanación: se dice que ahí acudían quienes buscaban interpretación de sueños perturbadores, un servicio que Ninsun ofrecía personalmente a través de sus sacerdotisas, en un eco directo de la escena en que ella misma descifra los sueños proféticos de su propio hijo Gilgamesh.`,
    simbolos: ['Vaca salvaje', 'Cuernos lunares'],
    poderes: [['Interpretación de sueños', 'Descifra presagios divinos ocultos en los sueños de los mortales.']],
    familia: [['lugalbanda', 'conyuge'], ['gilgamesh', 'madre'], ['enkidu', 'hijo']]
  },
  marduk: {
    extra: `Tras su victoria sobre Tiamat, la asamblea de los dioses le concedió no uno sino cincuenta nombres distintos, cada uno describiendo un aspecto diferente de su poder recién adquirido —una lista que ocupa buena parte de la tablilla final del Enuma Elish y que, en la práctica, fusionaba en su sola figura los atributos que antes pertenecían por separado a decenas de divinidades más antiguas.`,
    simbolos: ['Mushussu', 'Red de vientos', 'Cincuenta nombres'],
    poderes: [['Control de los vientos', 'Los cuatro vientos y las tormentas obedecen su voluntad.'], ['Creación por combate', 'Da forma al cosmos a partir del cuerpo vencido del caos.']],
    familia: [['enki', 'hijo'], ['tiamat', 'enemigo'], ['qingu', 'enemigo']]
  },

  // --- TITANES / PRIMORDIALES ---
  nammu: {
    extra: `Ningún templo importante le fue dedicado en exclusiva, y su culto quedó eclipsado tempranamente por el de sus propios descendientes —una paradoja habitual entre las divinidades primordiales mesopotámicas, cuya función cosmológica se agota precisamente en el momento en que logran engendrar a los dioses activos que terminan ocupando su lugar en la devoción cotidiana.`,
    simbolos: ['Océano sin límites', 'Signo cuneiforme del mar'],
    poderes: [['Origen sin origen', 'De ella surge todo lo demás, sin haber sido creada por nadie.']],
    familia: [['anu', 'madre'], ['ki', 'madre'], ['enki', 'madre']]
  },
  ki: {
    extra: `Algunos textos tardíos la confunden abiertamente con Ninhursag o con Ereshkigal, reflejo de que, a medida que la religión mesopotámica se volvía más sistemática, los escribas sentían la necesidad de asignarle un rostro y un culto activo a un principio que originalmente era casi puramente abstracto: la tierra misma.`,
    simbolos: ['Disco terrestre', 'Raíz'],
    poderes: [['Sostener la vida', 'Toda criatura viviente descansa, literalmente, sobre su cuerpo.']],
    familia: [['anu', 'conyuge'], ['enlil', 'hijo']]
  },
  apsu: {
    extra: `El nombre de Apsu sobrevivió mucho más allá de su propia muerte narrativa: cada templo mesopotámico importante incluía una cuenca ritual de agua llamada precisamente "abzu", usada para las purificaciones sacerdotales, un recordatorio físico y cotidiano de que las aguas dulces primordiales seguían presentes bajo cada edificio sagrado.`,
    simbolos: ['Aguas subterráneas', 'Cuenca ritual'],
    poderes: [['Fuente de toda agua dulce', 'Todo manantial y río nace, en última instancia, de su cuerpo.']],
    familia: [['tiamat', 'conyuge'], ['enki', 'enemigo']]
  },
  tiamat: {
    extra: `Su combate final contra Marduk se representaba cada año en Babilonia durante el festival de Año Nuevo (Akitu), cuando los sacerdotes recitaban el Enuma Elish completo ante una audiencia pública: escuchar una vez más la derrota del caos primordial era una renovación ritual del propio orden cósmico para el año que comenzaba.`,
    simbolos: ['Cuerpo de dragón marino', 'Red de estrellas'],
    poderes: [['Madre de monstruos', 'Engendra once clases distintas de criaturas híbridas para la guerra.']],
    familia: [['apsu', 'conyuge'], ['qingu', 'conyuge'], ['marduk', 'enemigo']]
  },
  qingu: {
    extra: `Su breve reinado como comandante supremo del ejército de Tiamat —apenas el tiempo que duró la guerra antes de la derrota final— lo convierte en una de las figuras más efímeras de todo el ciclo: el poder entregado sin mérito propio rara vez sobrevive al primer gran desafío que debe enfrentar.`,
    simbolos: ['Tablillas del Destino', 'Estandarte roto'],
    poderes: [['Autoridad prestada', 'Su poder depende enteramente de las Tablillas que porta, no de fuerza propia.']],
    familia: [['tiamat', 'conyuge'], ['marduk', 'enemigo']]
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
  console.log('Ampliando dioses y titanes de Mitologia Sumeria (parte 1)...\n');
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
