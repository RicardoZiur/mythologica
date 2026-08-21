// ============================================================
// scripts/ampliar-personajes-maya-parte2.js
// ------------------------------------------------------------
// Amplia heroes (10) y monstruos (12) de Mitologia Maya con: un
// parrafo extra en descripcion_larga, simbolos, poderes y vinculos
// familiares. Mismo patron que ampliar-personajes-maya-parte1.js.
// Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-maya-parte2.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- HEROES ---
  hunahpu: {
    extra: `Su nombre completo, "Junajpu", se ha interpretado como "uno cerbatana" o "tirador certero", en referencia directa a la habilidad que lo distingue desde niño de cualquier otro cazador de su generación. Junto a su hermano, comparte un rasgo único entre los héroes de la mitología mesoamericana: la capacidad de morir voluntariamente y regresar a la vida, un poder que exhiben primero como espectáculo ambulante y que después usan como arma decisiva contra los propios señores de la muerte.`,
    simbolos: ['Cerbatana', 'Piel de jaguar', 'Pelota de hule'],
    poderes: [['Puntería infalible', 'Ningún tiro de su cerbatana falla el blanco.'], ['Resucitar tras el sacrificio', 'Puede morir y regresar a la vida junto a su hermano.']],
    familia: [['xbalanque', 'hermano'], ['hun-hunahpu', 'hijo'], ['ixquic', 'madre'], ['hun-came', 'enemigo'], ['vucub-came', 'enemigo'], ['vucub-caquix', 'enemigo'], ['camazotz', 'enemigo'], ['xmucane', 'mentor']]
  },
  xbalanque: {
    extra: `Su nombre, "Xb'alanke", se traduce aproximadamente como "pequeño jaguar" o "jaguar escondido", un epíteto que encaja con el papel más sigiloso y calculador que el Popol Vuh le atribuye frente a la confianza más directa de su hermano Hunahpú. Es él quien idea la solución definitiva contra la Casa de los Murciélagos usando animales del bosque como aliados, y quien engaña por completo a los señores de Xibalbá en el episodio final del sacrificio fingido.`,
    simbolos: ['Cerbatana', 'Piel de jaguar', 'Máscara de calabaza'],
    poderes: [['Ingenio ante la trampa', 'Encuentra la salida de cualquier prueba de Xibalbá.'], ['Resucitar tras el sacrificio', 'Puede morir y regresar a la vida junto a su hermano.']],
    familia: [['hunahpu', 'hermano'], ['hun-hunahpu', 'hijo'], ['ixquic', 'madre'], ['hun-came', 'enemigo'], ['vucub-came', 'enemigo'], ['camazotz', 'enemigo']]
  },
  'hun-hunahpu': {
    extra: `Aunque muere antes de que sus hijos gemelos nazcan siquiera, la influencia de Hun-Hunahpú se extiende por todo el resto del Popol Vuh: los intentos de los gemelos por vengarlo estructuran cada episodio del descenso a Xibalbá, y su cabeza, transformada en fruto de un árbol antes prohibido, es literalmente el origen físico de la siguiente generación de héroes. Algunas interpretaciones posteriores lo asocian también con el propio dios del maíz, dado el paralelismo entre su "siembra" en el inframundo y su posterior "cosecha" en la forma de sus hijos.`,
    simbolos: ['Pelota de hule', 'Yugo de piedra', 'Árbol de calabazas'],
    poderes: [['Engendrar más allá de la muerte', 'Su cabeza cortada concibe a los futuros héroes gemelos.']],
    familia: [['vucub-hunahpu', 'hermano'], ['xmucane', 'madre'], ['xpiacoc', 'padre'], ['hunahpu', 'padre'], ['xbalanque', 'padre'], ['hunbatz-hunchouen', 'padre'], ['hun-came', 'enemigo'], ['vucub-came', 'enemigo']]
  },
  'vucub-hunahpu': {
    extra: `El Popol Vuh lo describe siempre como compañero inseparable de Hun-Hunahpú, compartiendo cada prueba, cada humillación y finalmente el mismo destino ante los señores de Xibalbá. A diferencia de su hermano, Vucub-Hunahpú no deja descendencia directa en el relato, lo que refuerza su papel como figura de lealtad fraterna antes que como eslabón genealógico: su historia importa, sobre todo, por lo que comparte junto a Hun-Hunahpú, no por lo que engendra después de él.`,
    simbolos: ['Pelota de hule', 'Yugo de piedra'],
    poderes: [],
    familia: [['hun-hunahpu', 'hermano'], ['xmucane', 'madre'], ['xpiacoc', 'padre'], ['hun-came', 'enemigo'], ['vucub-came', 'enemigo']]
  },
  ixquic: {
    extra: `Su nombre, "doncella de la sangre", anticipa desde el inicio su papel como origen de una nueva vida surgida de la muerte de Hun-Hunahpú. La prueba que Xmucané le exige al llegar a la superficie —llenar una red completa de mazorcas cortadas de una sola planta— es superada gracias a la ayuda silenciosa de espíritus de la milpa, un detalle que refuerza el vínculo simbólico entre Ixquic, el maíz y la fertilidad que hereda de su propio embarazo prodigioso.`,
    simbolos: ['Fruto de calabaza', 'Savia de grana', 'Red de maíz'],
    poderes: [['Concebir sin contacto', 'Queda embarazada por la sola palabra y saliva de una calavera.'], ['Persuadir a la muerte', 'Convence a sus propios verdugos de perdonarle la vida.']],
    familia: [['hun-hunahpu', 'amante'], ['hunahpu', 'madre'], ['xbalanque', 'madre'], ['xmucane', 'aliado']]
  },
  'balam-quitze': {
    extra: `Como fundador del linaje más prestigioso entre los cuatro primeros hombres, Balam Quitzé es también el primero en recibir de manos divinas el Pizom Gagal, un envoltorio ritual que sus descendientes conservarían generación tras generación sin abrirlo jamás, considerado la fuente física de la protección y la autoridad de su linaje. Junto a sus tres hermanos, marca el final de los sucesivos intentos de creación narrados en el Popol Vuh: con ellos, por fin, la humanidad capaz de honrar correctamente a sus creadores queda establecida sobre la tierra.`,
    simbolos: ['Bulto sagrado (Pizom Gagal)', 'Piel de jaguar'],
    poderes: [['Ver el mundo entero', 'Su vista alcanza cada rincón de la tierra sin moverse.']],
    familia: [['balam-acab', 'aliado'], ['mahucutah', 'aliado'], ['iqui-balam', 'aliado']]
  },
  'balam-acab': {
    extra: `Como segundo de los cuatro primeros hombres, Balam Acab funda su propio linaje dentro de la estructura política k'iche' que el Popol Vuh detalla en sus capítulos finales, donde el mito se entrelaza con la memoria genealógica real de las grandes casas gobernantes registradas por los propios autores del texto. Comparte con sus hermanos el mismo don de una vista capaz de abarcar el cosmos entero, un poder que los dioses creadores decidirían después limitar por temor a que la nueva humanidad los igualara.`,
    simbolos: ['Piel de jaguar nocturno', 'Luna creciente'],
    poderes: [['Ver el mundo entero', 'Su vista alcanza cada rincón de la tierra sin moverse.']],
    familia: [['balam-quitze', 'aliado'], ['mahucutah', 'aliado'], ['iqui-balam', 'aliado']]
  },
  mahucutah: {
    extra: `Su nombre, relacionado con la idea de "no peinado" o "sin pulir", contrasta con la elegancia ceremonial de otros títulos entre los cuatro primeros hombres, y algunos estudiosos lo interpretan como reflejo de un carácter más austero y directo dentro del grupo fundador. Como sus hermanos, recibe una esposa formada especialmente para él mientras dormía, dando origen a su propia línea de descendientes dentro de la compleja red de linajes k'iche' que sostiene la segunda mitad del Popol Vuh.`,
    simbolos: ['Piedra sin pulir', 'Tierra agrietada'],
    poderes: [['Ver el mundo entero', 'Su vista alcanza cada rincón de la tierra sin moverse.']],
    familia: [['balam-quitze', 'aliado'], ['balam-acab', 'aliado'], ['iqui-balam', 'aliado']]
  },
  'iqui-balam': {
    extra: `El Popol Vuh dedica menos detalle individual a Iqui Balam que a sus tres hermanos, un vacío que algunos investigadores atribuyen a pérdidas o simplificaciones durante la transmisión oral del relato antes de su transcripción colonial. Aun así, su presencia como cuarto y último de los primeros hombres completa el patrón cuatripartito —cuatro direcciones, cuatro colores, cuatro hombres— que estructura buena parte de la cosmovisión maya, y su nombre se conserva siempre citado junto al de sus hermanos como parte inseparable del grupo fundador.`,
    simbolos: ['Luna llena', 'Marca plateada de jaguar'],
    poderes: [['Ver el mundo entero', 'Su vista alcanza cada rincón de la tierra sin moverse.']],
    familia: [['balam-quitze', 'aliado'], ['balam-acab', 'aliado'], ['mahucutah', 'aliado']]
  },
  hunbatz_hunchouen: {
    extra: `Como patronos posteriores de la música, la escritura y las artes, Hun Batz y Hun Chouén representan una figura recurrente en la mitología mesoamericana: el talento genuino que, mal encaminado por la envidia y la crueldad hacia los más jóvenes, termina castigado con una transformación irreversible. Su culto sobrevivió transformado: los escribas y artistas mayas posteriores los invocaban como patronos de su oficio, honrando precisamente la habilidad que habían tenido antes de convertirse en monos.`,
    simbolos: ['Flauta de carrizo', 'Cincel de tallar', 'Cola de mono araña'],
    poderes: [['Maestría artística', 'Ningún músico o escriba iguala su talento original.']],
    familia: [['hun-hunahpu', 'hijo'], ['hunahpu', 'hermano'], ['hunahpu', 'enemigo'], ['xbalanque', 'hermano'], ['xbalanque', 'enemigo']]
  },

  // --- MONSTRUOS ---
  'vucub-caquix': {
    extra: `Su derrota marca el primer gran episodio narrado en detalle del ciclo de los héroes gemelos, incluso antes de que el propio Popol Vuh cuente la historia completa de su padre Hun-Hunahpú: una decisión narrativa que subraya cómo la soberbia de Vucub-Caquix debía eliminarse antes de que cualquier otro orden cósmico pudiera establecerse. Su nombre, "Siete Guacamayo", alude tanto al número sagrado siete como al ave real cuyo plumaje deslumbrante inspiró su forma monstruosa.`,
    simbolos: ['Ojos de plata', 'Dientes de piedra preciosa', 'Árbol de nance'],
    poderes: [['Falso resplandor', 'Su plumaje imita, sin serlo, la luz de un astro verdadero.']],
    familia: [['zipacna', 'padre'], ['cabrakan', 'padre'], ['hunahpu', 'enemigo'], ['xbalanque', 'enemigo']]
  },
  zipacna: {
    extra: `Su derrota bajo una montaña artificial es, en cierto sentido, una ironía perfecta: el gigante que pasó su vida entera moviendo cerros de un lugar a otro termina convertido él mismo en piedra, inmóvil para siempre bajo el peso de una montaña que no puede desplazar. Los cuatrocientos jóvenes que asesinó por despecho ascendieron, según el propio texto, convertidos en las estrellas de las Pléyades, visibles hasta hoy como recordatorio celestial de su crueldad.`,
    simbolos: ['Tronco cargado', 'Montaña recién formada', 'Cangrejo gigante'],
    poderes: [['Mover montañas', 'Puede levantar y trasladar cerros enteros sin esfuerzo.']],
    familia: [['vucub-caquix', 'padre'], ['cabrakan', 'hermano'], ['hunahpu', 'enemigo'], ['xbalanque', 'enemigo']]
  },
  cabrakan: {
    extra: `Su nombre completo puede traducirse como "dos piernas" o "el que sacude la tierra", una referencia directa a la fuerza que ejerce con un simple pisotón. Es el último de los tres —junto a su padre Vucub-Caquix y su hermano Zipacná— en caer ante el ingenio de los héroes gemelos, completando así la eliminación total de una familia cuya soberbia colectiva amenazaba con opacar el establecimiento del orden cósmico verdadero que estaba por instaurarse.`,
    simbolos: ['Grieta en la tierra', 'Ave envenenada'],
    poderes: [['Derribar montañas', 'Un solo pisotón suyo desmorona un cerro entero.']],
    familia: [['vucub-caquix', 'padre'], ['zipacna', 'hermano'], ['hunahpu', 'enemigo'], ['xbalanque', 'enemigo']]
  },
  camazotz: {
    extra: `Su nombre combina "kame" (muerte) y "sotz'" (murciélago), y su imagen aparece representada en la cerámica y la escultura maya del periodo clásico mucho antes de la versión escrita del Popol Vuh, lo que sugiere un culto o temor extendido a los murciélagos como criaturas asociadas al inframundo desde tiempos muy anteriores. La decapitación de Hunahpú a manos de Camazotz es el único momento de todo el ciclo heroico en que uno de los gemelos sufre un daño que no logra revertir por sus propios medios, dependiendo por completo de la ayuda de los animales del bosque para sobrevivir.`,
    simbolos: ['Nariz de obsidiana', 'Alas de cuero', 'Cabeza cercenada'],
    poderes: [['Decapitar de un golpe', 'Ningún escondite protege del filo de su ataque.']],
    familia: [['hunahpu', 'enemigo'], ['hun-came', 'aliado'], ['vucub-came', 'aliado']]
  },
  xecotcovach: {
    extra: `Junto a Cotzbalam y Tucumbalam, Xecotcovach forma parte del trío de criaturas convocadas específicamente para castigar a los hombres de madera por su incapacidad de recordar y venerar a sus propios creadores. Su forma de águila gigantesca, especializada en arrancar los ojos de sus víctimas, resulta especialmente simbólica: castiga con la ceguera física a quienes ya sufrían, en sentido figurado, una ceguera espiritual hacia los dioses que les habían dado forma.`,
    simbolos: ['Garras de obsidiana', 'Ojo arrancado'],
    poderes: [['Castigar la ingratitud', 'Ejecuta el juicio divino contra quienes olvidan a sus creadores.']],
    familia: []
  },
  cotzbalam: {
    extra: `Su nombre combina raíces relacionadas con "destrozar" y "jaguar", coherente con su papel de despedazar directamente los cuerpos de los hombres de madera durante su destrucción colectiva. A diferencia de Xecotcovach, que ataca desde el aire, Cotzbalam actúa a ras de suelo, completando junto a sus dos compañeros monstruosos un ataque coordinado desde tres frentes distintos: el cielo, la tierra y las propias posesiones domésticas de sus víctimas, que también se rebelan contra ellas en el mismo episodio.`,
    simbolos: ['Fauces devoradoras', 'Garra felina'],
    poderes: [['Despedazar sin piedad', 'Su ataque no deja rastro de lo que fue una vez humano.']],
    familia: []
  },
  tucumbalam: {
    extra: `Es la menos detallada de las tres criaturas destructoras convocadas contra los hombres de madera, descrita apenas con garras largas y patas semejantes a las de un tapir. Su brevedad en el texto no resta importancia a su función: completa, junto a Xecotcovach y Cotzbalam, un castigo colectivo tan desproporcionado como necesario dentro de la lógica del Popol Vuh, donde cada intento fallido de creación exige su propia forma específica de destrucción.`,
    simbolos: ['Garra larga', 'Pata de tapir'],
    poderes: [['Perseguir sin descanso', 'No se detiene hasta alcanzar a quien huye.']],
    familia: []
  },
  sisimite: {
    extra: `A diferencia de las criaturas documentadas en el Popol Vuh, el Sisimite pertenece a una tradición oral todavía viva en comunidades rurales de Guatemala y Honduras, transmitida de generación en generación sin haber sido puesta nunca por escrito en un texto antiguo. Los relatos varían de una región a otra, pero comparten siempre el detalle de sus pies al revés, un rasgo pensado deliberadamente para confundir a quien intentara seguirle el rastro por el monte.`,
    simbolos: ['Huella invertida', 'Pelaje enmarañado'],
    poderes: [['Confundir el rastro', 'Sus huellas al revés extravían a cualquier perseguidor.']],
    familia: []
  },
  xtabay: {
    extra: `La leyenda que explica su origen —la transformación de Utz-Colel tras su muerte— convierte a la Xtabay en una de las pocas figuras del folclore yucateco con una biografía moral tan explícita: no nace monstruosa, sino que se vuelve monstruosa como consecuencia directa de una vida marcada por la frialdad hacia los demás. Su leyenda sigue contándose hoy en comunidades de Yucatán como advertencia tanto sobre los peligros del monte de noche como sobre los peligros de una virtud que no va acompañada de compasión real.`,
    simbolos: ['Peine de hueso', 'Flor de xtabentún', 'Ceibo nocturno'],
    poderes: [['Atraer sin resistencia', 'Ningún hombre solitario logra ignorar su llamado.']],
    familia: [['utz-colel', 'creador']]
  },
  kisin: {
    extra: `A diferencia de Ah Puch, documentado principalmente en los códices y la tradición yucateca clásica, Kisin pertenece a la cosmovisión de los mayas lacandones, un pueblo que ha conservado hasta tiempos recientes tradiciones religiosas propias, distintas de las registradas en los textos coloniales del norte de Yucatán. Su enemistad activa con el sol —a diferencia de la relación más administrativa que Ah Puch mantiene con la muerte— lo convierte en una figura más cercana a un antagonista cósmico que a un simple administrador del más allá.`,
    simbolos: ['Hedor de la tierra', 'Grieta sísmica'],
    poderes: [['Sacudir la tierra', 'Cada temblor es un intento suyo de alcanzar al sol.']],
    familia: []
  },
  way: {
    extra: `Los wahyob documentados en la cerámica polícroma del periodo clásico llevan casi siempre un glifo propio junto a su imagen, que los identifica como pertenecientes a un gobernante o linaje específico, una suerte de firma espiritual personal. El concepto guarda un parentesco directo con el nahualismo mexica y con figuras posteriores del folclore centroamericano: la idea de que un ser humano y una criatura —a menudo híbrida y amenazante— comparten un mismo destino, indisolublemente unido.`,
    simbolos: ['Glifo nominal propio', 'Vasija pintada'],
    poderes: [['Viajar como espíritu', 'Su poseedor puede actuar a la distancia bajo su forma.']],
    familia: []
  },
  muan: {
    extra: `Su imagen aparece en los códices con un característico tocado o "moño" sobre la cabeza, un rasgo que la distingue visualmente de otras aves nocturnas representadas en el arte maya. En el propio Popol Vuh, son búhos mensajeros —descritos de forma muy cercana a esta misma figura— quienes reciben la orden de sacrificar a Ixquic tras descubrirse su embarazo, aunque terminan siendo engañados y convencidos de perdonarla, un episodio que ilustra su papel constante como intermediarios entre el mundo de los vivos y el de los señores de la muerte.`,
    simbolos: ['Plumaje oscuro', 'Canto nocturno'],
    poderes: [['Anunciar la desgracia', 'Su canto nocturno adelanta una muerte cercana.']],
    familia: [['hun-came', 'aliado'], ['vucub-came', 'aliado']]
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
  console.log('Ampliando heroes y monstruos de Mitologia Maya (parte 2)...\n');
  const libroId = await obtenerLibroId();

  const [filas] = await pool.query('SELECT id, slug FROM personajes WHERE libro_id = ?', [libroId]);
  const idsPersonajes = {};
  filas.forEach(f => { idsPersonajes[f.slug] = f.id; });

  // hunbatz-hunchouen tiene un guion en el slug real; el objeto DATOS usa una
  // clave valida de JS (hunbatz_hunchouen) y se mapea aqui explicitamente.
  const mapaClaves = { hunbatz_hunchouen: 'hunbatz-hunchouen' };

  for (const [clave, datos] of Object.entries(DATOS)) {
    const slug = mapaClaves[clave] || clave;
    await procesarUno(slug, datos, idsPersonajes);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
