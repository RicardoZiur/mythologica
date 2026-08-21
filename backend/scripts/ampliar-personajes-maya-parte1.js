// ============================================================
// scripts/ampliar-personajes-maya-parte1.js
// ------------------------------------------------------------
// Amplia dioses (15) y titanes/primordiales (5) de Mitologia Maya
// con: un parrafo extra en descripcion_larga, simbolos, poderes y
// vinculos familiares -- mismo patron que
// ampliar-personajes-sumeria-parte1.js / ampliar-personajes-azteca-*.js,
// para que las paginas del PDF no queden con espacio en blanco de
// mas (diagnostico: 47/47 personajes con >250px libres, 0 simbolos/
// poderes/familia). Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-maya-parte1.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- DIOSES ---
  itzamna: {
    extra: `Se le atribuye además haber repartido la tierra entre los pueblos mayas y haberle dado nombre a cada región, ciudad y accidente geográfico. Su principal centro de culto se levantaba en Izamal, en el actual Yucatán, donde una enorme pirámide —hoy conocida como Kinich Kakmó— estaba dedicada a él; hasta allí peregrinaban enfermos de toda la región, ya que se le consideraba capaz de curar males que ningún remedio ordinario lograba aliviar, e incluso, en casos excepcionales, de devolver la vida a los muertos.`,
    simbolos: ['Serpiente bicéfala celestial', 'Iguana', 'Libro sagrado'],
    poderes: [['Sanar toda enfermedad', 'Su favor puede curar males que ningún otro remedio alcanza.'], ['Inventar la escritura', 'Creó los glifos con los que los mayas registraron su historia.']],
    familia: [['ixchel', 'conyuge']]
  },
  ixchel: {
    extra: `Su santuario en la isla de Cozumel era, junto al de Chichén Itzá, uno de los destinos de peregrinación más importantes de todo el mundo maya: se creía que toda mujer debía visitarlo al menos una vez en la vida para asegurar su fertilidad. Los códices la representan bajo dos rostros opuestos —una doncella joven y hermosa asociada a la luna creciente, y una anciana de garras felinas ligada a las inundaciones—, la misma dualidad entre vida y destrucción que comparten otras grandes diosas madre mesoamericanas.`,
    simbolos: ['Telar de cintura', 'Conejo', 'Vasija volcada'],
    poderes: [['Gobernar las mareas', 'La luna bajo su dominio mueve el mar dos veces al día.'], ['Asistir todo parto', 'Ninguna mujer da a luz sin que su favor decida el resultado.']],
    familia: [['itzamna', 'conyuge']]
  },
  kukulkan: {
    extra: `Algunas crónicas coloniales, como los libros del Chilam Balam, describen la llegada de un líder extranjero llamado Kukulkán procedente del occidente hacia el siglo X, asociado con la consolidación del poder de los itzáes en el norte de Yucatán —una fusión entre el dios y un gobernante histórico que resulta casi imposible de separar en los textos que han sobrevivido. Su nombre y su favor se convirtieron en fuente directa de legitimidad política: los señoríos que reclamaban su bendición veían reconocida su autoridad sobre los demás.`,
    simbolos: ['Pluma de quetzal', 'Caracol cortado', 'Escalinata serpentina'],
    poderes: [['Dominio del viento', 'Puede levantar o calmar las tormentas que anuncian la siembra.'], ['Legitimar el gobierno', 'Los señores que reclaman su favor ven reconocida su autoridad.']],
    familia: []
  },
  chaac: {
    extra: `Su rostro de nariz larga y curva se convirtió en uno de los motivos arquitectónicos más repetidos de toda la región Puuc: en fachadas como las de Uxmal o Kabah, decenas de máscaras suyas se apilan una sobre otra a lo largo de templos enteros, cada una tallada en piedra con precisión casi idéntica, como si el propio edificio quisiera multiplicar su poder de traer la lluvia. Durante las sequías más severas, además del cha chaac tradicional, se sacrificaban animales —y en tiempos muy antiguos, según algunas fuentes, hasta niños— en cenotes considerados sus puertas de entrada al mundo subterráneo.`,
    simbolos: ['Hacha de piedra', 'Rana', 'Máscara de nariz larga'],
    poderes: [['Producir el trueno', 'Cada golpe de su hacha hace retumbar el cielo.'], ['Decidir la cosecha', 'La abundancia o la hambruna de un año dependen de su favor.']],
    familia: [['yum-kaax', 'aliado']]
  },
  'ah-puch': {
    extra: `En el calendario adivinatorio maya, el día Cimi ("muerte") le estaba directamente consagrado, y los sacerdotes-adivinos consultaban su influencia antes de cualquier decisión importante caída en esa fecha. El fraile Diego de Landa, uno de los primeros cronistas españoles en describir la religión yucateca, registró con desconcierto que los mayas no temían hablar de él con naturalidad, muy distinta a la actitud de horror que el propio Landa esperaba encontrar frente a una divinidad de la muerte.`,
    simbolos: ['Campanillas', 'Cráneo con ojos de hueso', 'Signo Cimi del calendario'],
    poderes: [['Decidir el destino final', 'Determina quién desciende a Mitnal tras la muerte.'], ['Provocar la descomposición', 'Su sola presencia acelera el retorno del cuerpo a la tierra.']],
    familia: [['hun-came', 'aliado'], ['vucub-came', 'aliado']]
  },
  'yum-kaax': {
    extra: `Bajo el nombre de Ah Mun aparece en los códices asociado al número ocho, y su imagen —un joven con la cabeza coronada por hojas verdes o una mazorca germinando— se repite en escenas donde lucha o negocia directamente contra los dioses de la muerte, que amenazan con arrebatarle la vida antes de tiempo. Al inicio de cada cosecha, los agricultores mayas celebraban una ofrenda de "primeros frutos" en su honor, entregando los primeros granos recolectados antes de tocar el resto de la producción del año.`,
    simbolos: ['Mazorca germinando', 'Hoja de maíz', 'Número ocho'],
    poderes: [['Dar vida al grano', 'Encarna el ciclo completo del maíz, de la siembra a la cosecha.']],
    familia: [['chaac', 'aliado']]
  },
  'ek-chuah': {
    extra: `Su festividad coincidía con el mes de Muan del calendario yucateco, cuando los productores de cacao realizaban ofrendas específicas para proteger sus plantaciones antes de la cosecha. Los viajeros solían colocar pequeñas piedras junto a montones de otras similares en su honor a lo largo de los caminos, cada una representando una plegaria pidiendo protección; se le identifica también con el llamado "Dios M" de los códices, representado siempre con la piel oscura y rasgos labiales distintivos propios de un mercader curtido por el sol.`,
    simbolos: ['Bastón de viajero', 'Vaina de cacao', 'Fardo de mercancías'],
    poderes: [['Proteger las rutas', 'Guía a los mercaderes sanos y salvos por caminos peligrosos.']],
    familia: [['xaman-ek', 'aliado']]
  },
  'buluc-chabtan': {
    extra: `Aparece de forma recurrente en los almanaques del Códice de Madrid asociado a glifos de lanzas y antorchas, y los libros proféticos del Chilam Balam citan su influencia para advertir sobre katunes —periodos de veinte años del calendario maya— especialmente propensos a la guerra y la destrucción. A diferencia de dioses con templos propios y culto organizado, Buluc Chabtán aparece casi siempre como una fuerza que se debía prever y evitar, no una divinidad a la que se buscara complacer con ofrendas regulares.`,
    simbolos: ['Lanza', 'Antorcha encendida', 'Glifo de fuego'],
    poderes: [['Desatar la guerra', 'Su sola presencia en una fecha profetiza conflicto armado.']],
    familia: []
  },
  ixtab: {
    extra: `El fraile Diego de Landa, en su Relación de las cosas de Yucatán, registró esta creencia con una mezcla de sorpresa y desaprobación, señalando que los mayas no consideraban el suicidio un pecado en el sentido cristiano, sino una salida honrosa comparable a la muerte en batalla. Este destino especial, sostenido por una diosa dedicada exclusivamente a recibir a quienes tomaban esa decisión, no tiene un paralelo directo y tan explícito en ninguna otra gran tradición religiosa mesoamericana documentada.`,
    simbolos: ['Soga anudada', 'Ojos cerrados', 'Marca de descomposición'],
    poderes: [['Acoger sin juicio', 'Ofrece descanso honroso sin importar la causa de la muerte elegida.']],
    familia: []
  },
  'hun-came': {
    extra: `Según el Popol Vuh, fue Hun-Camé quien ideó personalmente la primera trampa que enfrentó cualquier visitante de Xibalbá: el banco de piedra al rojo vivo ofrecido como asiento de bienvenida, pensado para humillar y quemar a quien lo aceptara sin sospechar nada. Esa misma prueba, superada sin dificultad por los héroes gemelos generaciones después, marcó la primera señal de que el antiguo dominio absoluto de Hun-Camé sobre los mortales comenzaba a resquebrajarse.`,
    simbolos: ['Banco de piedra ardiente', 'Trono de hueso', 'Máscara de calavera'],
    poderes: [['Convocar al inframundo', 'Ningún mortal escucha el llamado de Xibalbá sin obedecer.']],
    familia: [['vucub-came', 'aliado'], ['hunahpu', 'enemigo'], ['xbalanque', 'enemigo']]
  },
  'vucub-came': {
    extra: `El Popol Vuh distingue con cuidado su papel del de Hun-Camé: mientras este último recibe a los visitantes con la primera trampa del banco ardiente, es Vucub-Camé quien diseña buena parte de las pruebas posteriores dentro de las casas de tormento, cada una pensada específicamente para explotar un miedo distinto —la oscuridad, el frío, las navajas—. Su nombre, "Siete Muerte", refuerza junto al de su co-gobernante un patrón numérico recurrente en la cosmología maya, donde los números uno y siete marcan extremos opuestos dentro de un mismo ciclo.`,
    simbolos: ['Bastón de calaveras', 'Búho mensajero', 'Trono de hueso'],
    poderes: [['Diseñar las pruebas', 'Idea trampas que ningún visitante anterior había logrado superar.']],
    familia: [['hun-came', 'aliado'], ['hunahpu', 'enemigo'], ['xbalanque', 'enemigo']]
  },
  bacab: {
    extra: `El cronista Diego de Landa describió con detalle las ceremonias de Uayeb, los cinco días finales del año solar considerados peligrosos, durante las cuales cada comunidad dirigía sus rituales de año nuevo hacia el Bacab correspondiente a la dirección y el color que tomaría el turno del año entrante, cargando su imagen en procesión desde un extremo del pueblo hasta el opuesto para "recibirlo" formalmente. Sin ese traspaso ritual puntual, se temía que el nuevo año llegara sin la protección necesaria de su sostenedor correspondiente.`,
    simbolos: ['Caparazón de tortuga', 'Cuatro colores direccionales', 'Columna del cielo'],
    poderes: [['Sostener el cosmos', 'Sin su esfuerzo constante el cielo se derrumbaría sobre la tierra.']],
    familia: []
  },
  'kinich-ahau': {
    extra: `En su tránsito nocturno por el inframundo se le identifica con el llamado "Jaguar Nocturno", una de las imágenes más repetidas en la cerámica y la escultura del periodo clásico maya, con la piel del felino marcada por un glifo solar en la frente que delata su verdadera identidad bajo la forma animal. Gobernantes de ciudades como Copán o Palenque incorporaron el glifo Kinich a sus propios nombres de entronización, buscando asociar su autoridad terrenal con la del sol que nunca deja de recorrer el cielo.`,
    simbolos: ['Disco solar con rostro', 'Jaguar nocturno', 'Glifo Kin'],
    poderes: [['Recorrer cielo e inframundo', 'Cruza el día como sol y la noche como jaguar sin descanso.']],
    familia: []
  },
  'ah-mucen-cab': {
    extra: `Los apicultores yucatecos domesticaban abejas nativas sin aguijón (Melipona beecheii) en colmenas hechas de troncos huecos llamadas jobones, una técnica que se conserva hasta hoy en algunas comunidades y que en la antigüedad estaba directamente supervisada por sacerdotes que invocaban a Ah Mucen Cab antes de cada cosecha de miel. El Códice de Madrid dedica varias páginas completas a almanaques apícolas ilustrados con su imagen, evidencia de la importancia económica y ritual que la miel y la cera tenían para la vida maya cotidiana.`,
    simbolos: ['Colmena de tronco', 'Panal de cera', 'Vuelo invertido'],
    poderes: [['Multiplicar la miel', 'Bendice cada colmena cuidada con reverencia.']],
    familia: []
  },
  'xaman-ek': {
    extra: `A lo largo de los sacbeob, las anchas calzadas blancas de piedra que conectaban distintas ciudades mayas, se colocaban pequeños altares y marcadores de piedra dedicados a Xamán Ek, donde los viajeros dejaban ofrendas de copal antes de continuar su trayecto, especialmente si debían recorrer tramos nocturnos. Su culto reforzaba una red de protección espiritual paralela a la propia infraestructura física de caminos que sostenía el comercio entre las ciudades mayas del clásico y el posclásico.`,
    simbolos: ['Estrella polar', 'Piedra de camino', 'Bastón de viajero'],
    poderes: [['Guiar en la oscuridad', 'Ningún viajero que lo invoca se pierde bajo un cielo nublado.']],
    familia: [['ek-chuah', 'aliado']]
  },

  // --- TITANES / PRIMORDIALES ---
  hurakan: {
    extra: `El propio nombre de Hurakán, adoptado por el español y después por buena parte de los idiomas del mundo para nombrar a las tormentas más violentas del Atlántico, conserva hasta hoy en su forma cotidiana el recuerdo de esta entidad primordial k'iche'. Basta que Hurakán pronuncie una sola palabra —"tierra"— para que la creación completa responda de inmediato, un poder de nombrar que ningún otro dios del consejo creador posee con la misma inmediatez.`,
    simbolos: ['Rayo bifurcado', 'Torbellino', 'Ojo de la tormenta'],
    poderes: [['Nombrar la creación', 'Basta que pronuncie una palabra para que exista.']],
    familia: [['gucumatz', 'aliado'], ['tepeu', 'aliado']]
  },
  gucumatz: {
    extra: `Su figura conecta directamente con una tradición de la serpiente emplumada compartida por buena parte de Mesoamérica: la misma raíz mítica que después tomaría el nombre de Kukulkán entre los mayas yucatecos y de Quetzalcoatl entre los pueblos del centro de México, todos ellos variaciones regionales de una divinidad asociada al agua, el viento y el conocimiento. A diferencia de sus versiones posteriores, el Gucumatz del Popol Vuh actúa siempre en pareja con Hurakán y Tepeu, sin un culto individual propio documentado.`,
    simbolos: ['Plumas de quetzal', 'Ondas de agua', 'Serpiente enroscada'],
    poderes: [['Deslizarse sobre las aguas', 'Recorre el océano primordial sin hundirse jamás.']],
    familia: [['hurakan', 'aliado'], ['tepeu', 'aliado']]
  },
  tepeu: {
    extra: `El propio Popol Vuh describe a Tepeu y Gucumatz "hablando y poniéndose de acuerdo" antes de cada etapa importante de la creación, una fórmula que se repite como fórmula ritual a lo largo del texto y que subraya el carácter deliberativo, casi legislativo, de su participación. A diferencia de Hurakán, cuya fuerza es evidente e inmediata, la contribución de Tepeu es menos visible pero igual de necesaria: sin su consentimiento explícito, ninguna decisión del consejo creador se considera completa.`,
    simbolos: ['Consejo reunido', 'Cetro de mando'],
    poderes: [['Deliberar con sabiduría', 'Ninguna decisión de la creación se toma sin su consentimiento.']],
    familia: [['hurakan', 'aliado'], ['gucumatz', 'aliado']]
  },
  xmucane: {
    extra: `Su título ceremonial, "abuela del día, abuela de la claridad", refleja el papel central que ocupa en cada momento decisivo del Popol Vuh: no solo muele el maíz que da forma a la primera humanidad verdadera, sino que además cría en secreto a los héroes gemelos sin revelarles de inmediato el destino trágico de su padre, protegiéndolos hasta que están preparados para enfrentar esa verdad y, con ella, a los propios señores de Xibalbá.`,
    simbolos: ['Semillas de tzité', 'Piedra de moler', 'Grano de maíz'],
    poderes: [['Leer el destino', 'Interpreta el futuro en la caída de los granos sagrados.'], ['Dar forma a la carne humana', 'Muele el maíz con el que nace la sustancia de los primeros hombres.']],
    familia: [['xpiacoc', 'conyuge'], ['hun-hunahpu', 'madre'], ['vucub-hunahpu', 'madre'], ['hunahpu', 'mentor'], ['xbalanque', 'mentor']]
  },
  xpiacoc: {
    extra: `Comparte con Xmucané el mismo título dual de "abuelo del día, abuelo de la claridad", y ambos son consultados repetidamente por Hurakán, Gucumatz y Tepeu como una suerte de consejo de ancianos cuya sabiduría acumulada respalda cada decisión importante del panteón creador. Su papel se concentra menos en la acción directa que en la certeza de su juicio: cuando Xpiyacoc y Xmucané confirman que un intento de creación tendrá éxito, el consejo entero procede sin más dudas.`,
    simbolos: ['Semillas de tzité', 'Vara de adivino'],
    poderes: [['Leer el destino', 'Interpreta el futuro en la caída de los granos sagrados.']],
    familia: [['xmucane', 'conyuge'], ['hun-hunahpu', 'padre'], ['vucub-hunahpu', 'padre']]
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
  console.log('Ampliando dioses y titanes de Mitologia Maya (parte 1)...\n');
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
