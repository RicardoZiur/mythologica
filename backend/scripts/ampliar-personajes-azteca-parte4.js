// ============================================================
// scripts/ampliar-personajes-azteca-parte4.js
// ------------------------------------------------------------
// Pasada final de refuerzo: agrega un parrafo extra de detalle
// real a los 29 personajes de Mitologia Azteca que, tras las
// partes 1-3 (simbolos/poderes/familia), seguian con mas de
// 250px libres en la hoja del PDF. Mismo criterio que
// ampliar-personajes-sumeria-parte4.js. Idempotente.
//
// COMO CORRERLO (desde backend/, con el tunel activo):
//   node scripts/ampliar-personajes-azteca-parte4.js
// ============================================================

const pool = require('../config/db');

const EXTRA = {
  acamapichtli: `Su nombre, "el que empuña un manojo de cañas", aludía tanto a las flechas de guerrero como al haz de juncos usado en ceremonias de fundación. Era hijo de un noble mexica y de una princesa de Culhuacán, lo que le permitió heredar la sangre tolteca tan valorada por los pueblos del Valle de México; su elección como primer tlatoani buscaba, precisamente, legitimar a los recién asentados mexicas ante sus vecinos más antiguos y prestigiosos.`,

  ahuizotl: `Su nombre significa aproximadamente "espinoso del agua" o "perro de agua", y las descripciones varían de un códice a otro: algunas fuentes lo pintan como un perro pequeño de pelaje negro, otras como una nutria monstruosa con manos humanas en lugar de patas traseras. Pese a esas diferencias, todas coinciden en el detalle distintivo de la mano al final de la cola, el instrumento con el que sujeta a sus víctimas bajo el agua.`,

  chaneques: `En algunas regiones se les conoce también como "los dueños del monte", guardianes no solo de los niños sino de la flora y fauna silvestre: se creía que castigaban con enfermedades súbitas a los cazadores o leñadores que tomaban más de lo necesario de su territorio. Su tamaño reducido, similar al de un niño pequeño, contrastaba con una fuerza y astucia consideradas muy superiores a las humanas.`,

  cihuateteo: `Sus templos, llamados cihuateocalli, se levantaban específicamente en cruces de caminos a las afueras de la ciudad; ahí las familias dejaban ofrendas de pan y flores para aplacarlas antes del atardecer. Se las representaba con el rostro pintado de blanco y garras en lugar de manos, un aspecto que fusionaba la ternura de la maternidad frustrada con el peligro de un espíritu que no logró completar su ciclo de vida.`,

  coyotlinahual: `Los amantecas trabajaban con plumas traídas de aves tropicales como el quetzal, el guacamayo y el colibrí, combinándolas sobre una base de algodón con una precisión que los cronistas españoles compararon, asombrados, con la pintura al óleo europea. Coyotlinahual encabezaba este gremio como patrono directo, y se le atribuía enseñar a los aprendices no solo la técnica sino también los cantos rituales que debían acompañar cada pieza importante.`,

  nahual: `La creencia estaba tan extendida que los misioneros españoles la combatieron activamente durante la evangelización, castigando a quienes se sospechaba practicaban el nahualismo como una forma de brujería. El animal asignado a cada persona solía determinarse por el signo del calendario ritual bajo el que había nacido, vinculando de forma directa el destino individual con una criatura específica desde el primer día de vida.`,

  nezahualcoyotl: `La persecución que marcó su juventud comenzó el día en que presenció, oculto entre las ramas de un árbol, la ejecución de su propio padre, el tlatoani Ixtlilxóchitl de Texcoco, a manos de los tepanecas de Azcapotzalco. Esa imagen —contemplada en silencio para no delatar su propio escondite— se considera el origen de la determinación con la que, años después, recuperaría el trono perdido y reconstruiría Texcoco como uno de los centros culturales más refinados de todo el Valle de México.`,

  tzitzimitl: `Antes del auge del culto solar mexica, algunas Tzitzimime eran veneradas de forma individual como protectoras del parto y la fertilidad, un papel que solo se ensombreció cuando su imagen colectiva pasó a asociarse casi exclusivamente con el peligro cósmico de un eclipse. Se las representaba con las articulaciones marcadas por cráneos o rostros adicionales, un detalle que subrayaba su naturaleza de esqueletos vivientes capaces de descender desde las estrellas.`,

  huemac: `Sobre el final de Huémac las fuentes tampoco coinciden: algunos cronistas narran que huyó hasta una cueva cercana a Chapultepec y ahí puso fin a su propia vida, incapaz de soportar la ruina de la ciudad que había heredado; otros sostienen que simplemente desapareció en el interior de la montaña, dejando tras de sí solo la leyenda de un reino que jamás volvería a alcanzar el esplendor tolteca.`,

  itzpapalotl: `Según una de las tradiciones más citadas sobre el paraíso de Tamoanchan, fue Itzpapalotl —o un grupo de deidades femeninas encabezado por ella— quien cortó las flores prohibidas de un árbol sagrado, un acto de transgresión que provocó la expulsión de varias divinidades del jardín original y quebró para siempre la armonía de aquel primer paraíso.`,

  'xochitl-doncella': `Las crónicas nahuas identifican al gobernante que probó por primera vez su ofrenda como Tepancaltzin, señor de Tollan, y a Xóchitl como hija del noble Papantzin, encargado de cultivar los primeros magueyes de la región de Tulancingo. El hijo nacido de su unión, llamado Meconetzin ("hijo del maguey"), heredaría después el propio trono tolteca, entrelazando el origen de una bebida ritual con el linaje mismo de la dinastía gobernante.`,

  'centzon-mimixcoa': `El propio Mixcóatl había recibido instrucciones directas de sacrificar a sus cuatrocientos hermanos como ofrenda necesaria para asegurar el movimiento del sol; dos de ellos —Xiuhnel y Mimich— lograron escapar brevemente de la matanza antes de ser alcanzados también, un detalle que algunas versiones del mito narran como una persecución secundaria dentro de la gran cacería general.`,

  cipactli: `Como primer signo del tonalpohualli, Cipactli no solo abría la cuenta de los veinte días sino que además encabezaba la primera trecena del calendario, considerada un periodo de gran fuerza creativa pero también de peligro, asociado directamente a la propia naturaleza devoradora del monstruo que le da nombre.`,

  'princesa-de-culhuacan': `El sacerdote que portaba su piel durante la ceremonia de Ochpaniztli representaba específicamente a la tierra recién sembrada, cubierta con una nueva superficie tras el fin de las lluvias; la ceremonia completa duraba varios días e incluía una simulación de combate ritual antes del sacrificio final, como recordatorio de que la fertilidad de la tierra exigía cada año un tributo tan doloroso como el que ella misma había pagado.`,

  ometeotl: `Los propios Cantares Mexicanos ubican su morada en Omeyocan, el treceavo y más alto de los cielos superpuestos que sostenían el cosmos mexica, un nivel tan elevado que ningún otro dios ni sacerdote podía acceder a él directamente. Desde ahí, según estos poemas filosóficos, Ometeotl enviaba los tonalli, la fuerza vital y el destino, a cada niño en el instante mismo de su concepción.`,

  copil: `Según los Anales de Cuauhtitlán, fue el sacerdote Cuauhtlequetzqui quien ejecutó la orden de sacrificar a Copil por mandato directo de Huitzilopochtli, arrancándole el corazón en el mismo instante en que fue capturado. La crónica presenta el acto no como un asesinato arbitrario sino como la eliminación necesaria de la última amenaza que podía impedir la fundación de la futura Tenochtitlan.`,

  tepeyollotl: `Como tercero de los nueve Señores de la Noche, presidía cada novena hora ritual dentro del ciclo completo de trece días, una posición que los sacerdotes-adivinos consultaban al calcular el destino asociado a temblores ocurridos en fechas concretas del calendario. Su vínculo con el jaguar lo asociaba también a las cuevas profundas, consideradas puertas de entrada hacia el interior de la tierra donde él mismo habitaba.`,

  xochipilli: `Formaba parte del grupo de los llamados "dioses del número cinco" (macuiltonaleque), asociados tanto a los placeres como a los riesgos del exceso: el juego, la bebida, el amor físico. Además de patrono de la música y la danza, se le vinculaba con el juego de pelota ritual, otro pasatiempo mexica que combinaba entretenimiento y significado religioso profundo.`,

  axolohua: `Algunas crónicas coloniales añaden que, tras guiar a los mexicas hasta el sitio revelado por Tláloc, el propio Axolohua se sumergió una última vez en el lago y no volvió a salir, interpretado por su pueblo como una ofrenda voluntaria de sí mismo al dios de las aguas que acababa de bendecir la fundación de la nueva ciudad.`,

  'centzon-totochtin': `Durante la veintena de Tepeilhuitl, dedicada a los cerros y manantiales, se modelaban pequeñas figuras de amaranto y miel llamadas tepictoton en honor a divinidades menores como los Centzon Totochtin, que después de la ceremonia eran repartidas y comidas ritualmente entre los participantes, una forma simbólica de absorber su influencia sin caer en el exceso que ellos mismos representaban.`,

  chimalma: `Su nombre, formado por "chimalli" (escudo) y "maitl" (mano), evocaba tanto la protección como la capacidad guerrera, cualidades que las crónicas le atribuyen incluso antes de convertirse en madre: algunas versiones la describen como una mujer chichimeca de gran destreza con el arco, compañera de cacería de Mixcóatl antes de su unión.`,

  cuauhcoatl: `Tras la fundación, algunas crónicas le atribuyen haber permanecido como guardián de los primeros registros pictográficos de la nueva ciudad, encargado de anotar las fechas y presagios que marcarían el calendario oficial mexica desde ese primer año de asentamiento en el islote.`,

  ixtaccihuatl: `Algunas versiones del mito añaden un tercer personaje: un pretendiente rival que, celoso, hizo correr el falso rumor de la muerte de Popocatépetl en batalla, precipitando así la angustia que terminaría enfermando a la princesa antes de que su amado pudiera regresar a desmentirlo.`,

  malinalxochitl: `Se le atribuía haber aprendido sus artes de hechicería directamente en sueños, un don que ejercía como sacerdotisa antes incluso de que su hermano Huitzilopochtli ordenara su abandono; su fama de bruja poderosa persistió entre los pueblos vecinos incluso después de establecerse por su cuenta en Malinalco.`,

  popocatepetl: `En las versiones que lo presentan como guerrero mexica, se destaca que combatía en las filas de los caballeros águila, la orden militar más prestigiosa de Tenochtitlan, y que su hazaña en la guerra contra el pueblo rival fue tan reconocida que el propio padre de la princesa, antes reacio a la unión, terminó por bendecirla al conocer el relato de su valentía.`,

  quetzalpetlatl: `Algunas versiones tardías del mito la presentan también sucumbiendo al remordimiento tras el episodio, hasta el punto de acompañar a su hermano en su exilio final de Tollan; otras, en cambio, la sitúan permaneciendo en la ciudad como una de las pocas figuras de la corte que sobrevivió, ya empobrecida, a la caída completa del reino tolteca.`,

  tenoch: `A diferencia de los tlatoque que gobernarían después, Tenoch parece haber ejercido un liderazgo más cercano al de un teomama, "el que carga al dios", el título dado a los sacerdotes responsables de transportar el bulto sagrado de Huitzilopochtli durante toda la peregrinación, una responsabilidad tanto política como estrictamente religiosa.`,

  tlaltecuhtli: `Su representación fluctúa entre lo femenino y lo masculino según la fuente consultada, una ambigüedad que reflejaba su naturaleza de principio terrestre anterior a cualquier distinción de género. Por su carácter temido, casi ninguna imagen suya se colocaba a la vista pública: se tallaba boca abajo, en la base oculta de altares y ofrendas, visible solo para los sacerdotes que debían enterrarla ritualmente bajo cada nueva construcción.`,

  tonacatecuhtli: `En varias fuentes, Tonacatecuhtli y su esposa Tonacacíhuatl se funden en una sola entidad dual llamada Ometecuhtli-Omecíhuatl, prácticamente equivalente a Ometeotl; esta superposición de nombres refleja lo fluida que era la teología mexica en su nivel más abstracto, donde varias parejas de creadores podían representar, en el fondo, un mismo principio primordial visto desde ángulos distintos.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-azteca'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-azteca".');
  return filas[0].id;
}

async function main() {
  console.log('Refuerzo final de personajes de Mitologia Azteca (parte 4)...\n');
  const libroId = await obtenerLibroId();

  const [filas] = await pool.query('SELECT id, slug, nombre, descripcion_larga FROM personajes WHERE libro_id = ?', [libroId]);
  const porSlug = {};
  filas.forEach(f => { porSlug[f.slug] = f; });

  for (const [slug, extra] of Object.entries(EXTRA)) {
    const personaje = porSlug[slug];
    if (!personaje) {
      console.log(`  ! Personaje "${slug}" no encontrado, se salta.`);
      continue;
    }
    if (personaje.descripcion_larga.includes(extra.slice(0, 40))) {
      console.log(`  - "${personaje.nombre}" ya tenía este agregado.`);
      continue;
    }
    const nuevaDescripcion = `${personaje.descripcion_larga}\n\n${extra}`;
    await pool.query('UPDATE personajes SET descripcion_larga = ? WHERE id = ?', [nuevaDescripcion, personaje.id]);
    console.log(`  - "${personaje.nombre}" ampliado.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
