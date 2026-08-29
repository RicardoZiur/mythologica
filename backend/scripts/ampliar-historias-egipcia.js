// ============================================================
// scripts/ampliar-historias-egipcia.js
// ------------------------------------------------------------
// Agrega un parrafo adicional de detalle real a las 21 historias
// de Mitologia Egipcia -- mismo pedido del usuario que para los
// personajes (ver ampliar-personajes-egipcia-parte1/2/3.js).
// Cada parrafo aporta contexto verificable (papiro/estela fuente,
// arqueologia, culto historico) que el relato original no cubria.
// Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-historias-egipcia.js
// ============================================================

const pool = require('../config/db');

const EXTRA = {
  'sobek-y-la-mano-de-horus': `Este episodio aparece recogido, entre otras fuentes, en los llamados cipos de Horus -- estelas mágicas con la imagen del Horus niño dominando animales peligrosos, usadas como amuletos curativos contra mordeduras y picaduras -- y en inscripciones del templo de Kom Ombo, donde Sobek comparte santuario con Horus el Viejo. La asociación de Sobek con el rescate, más que con la amenaza pura, refleja la ambivalencia real con que los egipcios trataban a los cocodrilos del Nilo: temidos como depredadores, pero también venerados como protectores capaces de poner esa misma fuerza al servicio de los dioses solares y de quien pedía su auxilio.`,

  'la-corona-robada-de-shu': `La sucesión de reyes divinos que gobernaron Egipto antes que los faraones humanos -- Ra, luego Shu, luego Geb -- está documentada, con variantes, en los fragmentos conservados de la "Aegyptiaca" de Manetón, sacerdote e historiador del siglo III a.C. que sistematizó por primera vez toda la cronología egipcia en dinastías. La versión que sitúa una serpiente real (uraeus) custodiando un mechón del propio Ra como prueba del desafío de Geb aparece referenciada en textos mágicos tardíos que invocaban precisamente ese episodio como precedente contra las mordeduras de serpiente, un uso típico de la magia egipcia: convertir un mito conocido en la fórmula de un hechizo práctico.`,

  'shu-separa-a-geb-y-nut': `La escena de Shu separando a Geb de Nut es una de las imágenes más repetidas de todo el arte funerario egipcio, y su versión más célebre ilustra el Papiro Greenfield (hoy en el Museo Británico), uno de los ejemplares más largos jamás hallados del Libro de los Muertos, con más de treinta y siete metros de extensión. La postura exacta -- Nut arqueada apoyando manos y pies en el horizonte, Geb reclinado debajo, Shu de pie entre ambos con los brazos en alto -- se repite con tan poca variación durante casi tres mil años que los egiptólogos la usan como una de las composiciones más fácilmente identificables de todo el arte egipcio, sin importar el periodo o el taller que la produjo.`,

  'mago-ubaoner-cocodrilo-de-cera': `Este relato es el segundo de los cinco cuentos reunidos en el Papiro Westcar (hoy en el Museo Egipcio de Berlín), ambientado en el reinado del rey Nebka, de la Tercera Dinastía, varios siglos antes de que el propio papiro fuera copiado en el Reino Medio. El protagonista, identificado en el texto original simplemente como un "sacerdote lector" (jeri-heb), pertenece a una clase sacerdotal real cuya especialidad era precisamente recitar textos mágicos y rituales en voz alta durante ceremonias -- un oficio que los cuentos de Westcar convierten repetidamente en la fuente de sus prodigios, reflejo del prestigio popular que este tipo de sacerdote-erudito tenía en el imaginario egipcio.`,

  'isis-y-los-siete-escorpiones': `La fuente principal de este episodio es la Estela de Metternich, una de las llamadas "estelas de Horus" o cipos, hoy en el Museo Metropolitano de Nueva York, cubierta de textos mágicos que los sacerdotes recitaban vertiendo agua sobre la piedra -- agua ya "cargada" con el poder del texto, que después se bebía como remedio contra picaduras de escorpión o mordeduras de serpiente. El relato de Isis curando al hijo de la terrateniente pese a haber sido rechazada por su madre se usaba como precedente mágico explícito: si la propia Isis pudo sanar incluso a quien no la había ayudado, el hechizo invocado en su nombre debía funcionar igual para cualquier persona picada, sin importar su mérito.`,

  'veredicto-de-neith': `Este arbitraje aparece narrado en el Papiro Chester Beatty I (hoy en la Biblioteca Chester Beatty de Dublín), la fuente más completa que se conserva de todo el ciclo de "Las contiendas de Horus y Set". En la carta que los dioses envían a Neith pidiendo su veredicto, ella responde exigiendo que el trono se entregue a Horus y amenazando literalmente con que "el cielo se caerá" si se ignora su decisión -- una de las pocas ocasiones en la mitología egipcia en que una divinidad femenina ejerce autoridad judicial directa sobre todo el panteón, coherente con el estatus especialmente antiguo y venerado que Neith tenía en su centro de culto de Sais, en el Delta.`,

  'nacimiento-de-los-reyes-divinos': `Este es el último y más elaborado de los cinco relatos del Papiro Westcar, y funciona como propaganda dinástica disfrazada de cuento de entretenimiento: los tres bebés nacidos de Ruddyedet corresponden a los primeros tres reyes históricos de la Quinta Dinastía -- Userkaf, Sahura y Neferirkara --, cuyos reinados reales, a diferencia de sus antecesores de la Cuarta Dinastía, sí mostraron un giro documentado hacia el culto solar de Ra, incluyendo la construcción de templos solares propios sin equivalente en ningún otro periodo de la historia egipcia. El mito explica, en clave narrativa, un cambio religioso que la arqueología confirma de forma independiente.`,

  'viaje-de-khonsu-a-bakhtan': `La fuente de este relato es la Estela de Bentresh, una inscripción hoy en el Louvre que se presenta a sí misma como un texto del reinado de Ramsés II, aunque su gramática y estilo delatan una composición mucho más tardía, probablemente de época ptolemaica, casi mil años después. Los egiptólogos la consideran un caso claro de pseudo-arcaísmo: un texto nuevo redactado deliberadamente para sonar antiguo y prestigioso, atribuyendo a Khonsu poderes de exorcismo y viaje a tierras lejanas que reflejan preocupaciones religiosas más cercanas al periodo grecorromano que al Egipto de Ramsés II.`,

  'prodigios-de-djedi': `El prodigio de las cabezas reunidas de Djedi -- el ganso, el pelícano y el buey -- es el más citado de los cinco relatos del Papiro Westcar, y su forma narrativa (un anciano sabio puesto a prueba ante la corte con hazañas cada vez más difíciles) reaparece como estructura en cuentos egipcios muy posteriores, incluidos algunos de época grecorromana, lo que sugiere que Djedi se convirtió en una especie de arquetipo literario del "mago de corte infalible" dentro de la tradición narrativa egipcia, mucho después de que el propio papiro que lo registra dejara de copiarse.`,

  'resurreccion-de-osiris': `La versión más completa que se conserva del mito de la resurrección de Osiris no es, en realidad, un texto egipcio, sino griego: el tratado "Sobre Isis y Osiris" de Plutarco, escrito hacia el siglo I d.C., varios siglos después de que el culto original hubiera evolucionado enormemente. Cada año, en Abidos, se representaba públicamente el ciclo completo de muerte y resurrección durante los "Misterios de Osiris", que incluían el levantamiento ritual del pilar dyed -- un poste con travesaños horizontales que simbolizaba la columna vertebral de Osiris --, llevado a cabo por el faraón o su representante como acto de renovación del orden cósmico para todo el reino.`,

  'nacimiento-de-horus': `Los pantanos de Jemmis (Akhbit), donde Isis se ocultó para criar en secreto al Horus niño, se identificaban tradicionalmente con una región pantanosa del Delta cercana a Buto, aunque su ubicación exacta sigue siendo objeto de debate arqueológico. La imagen de Isis amamantando a Horus niño -- reproducida en miles de pequeñas estatuillas de bronce conocidas como "Isis lactans", producidas en masa durante el Tercer Periodo Intermedio y el periodo tardío -- se convirtió en una de las composiciones religiosas egipcias más repetidas de toda la Antigüedad, y buena parte de la iconografía cristiana posterior de la Virgen con el Niño se ha señalado, aunque con debate académico, como heredera visual directa de este mismo esquema.`,

  'setna-y-el-libro-de-thot': `Este relato pertenece al llamado "Primer Cuento de Setna" (Setna I), conservado en el Papiro de El Cairo 30646, redactado en escritura demótica durante el periodo ptolemaico, siglos después de la vida del príncipe histórico Khaemuaset en el que se inspira el personaje. La idea de un libro de magia tan peligroso que su sola lectura acarrea un castigo divino reaparece en otras narrativas egipcias tardías, y algunos egiptólogos la interpretan como una reflexión moral típica del Egipto ptolemaico sobre los límites éticos del conocimiento sagrado, en un periodo en que el prestigio de los templos convivía con una creciente desconfianza popular hacia sacerdotes que abusaban de ese poder.`,

  'nombre-secreto-de-ra': `Este mito se conserva principalmente en el Papiro Turín 1993, uno de los textos mágicos egipcios mejor preservados sobre el poder de los nombres secretos. Para los egipcios, el verdadero nombre de un ser encerraba su esencia y su poder real, de modo que conocerlo otorgaba control mágico directo sobre esa persona o divinidad -- por eso los faraones tenían hasta cinco nombres distintos en su titulatura, y por eso este relato funcionaba como justificación teológica del poder de Isis: si incluso el todopoderoso Ra podía ser obligado a revelar su nombre más íntimo, cualquier hechizo que invocara después el nombre de Isis heredaba, por extensión, parte de esa misma autoridad.`,

  'pesaje-del-corazon': `La escena del pesaje del corazón es el episodio más representado de todo el Libro de los Muertos (conjuro 125), y su versión más célebre ilustra el Papiro de Ani, hoy en el Museo Británico, uno de los ejemplares más largos y mejor conservados de todo el corpus funerario egipcio. El corazón, no el cerebro, se consideraba en el antiguo Egipto el asiento del pensamiento, la memoria y la moral -- por eso era el único órgano interno que se dejaba deliberadamente dentro del cuerpo durante la momificación, mientras que el cerebro se extraía y desechaba sin ceremonia alguna, al no considerarse relevante para la identidad de la persona ni para su juicio final.`,

  'cosmogonia-heliopolitana': `Esta cosmogonía se conserva principalmente en los Textos de las Pirámides, inscritos por primera vez en la cámara funeraria del faraón Unis a finales de la Quinta Dinastía (hacia 2350 a.C.), el corpus de textos religiosos más antiguo conocido de cualquier civilización del mundo. La Enéada de Heliópolis -- Atum, Shu, Tefnut, Geb, Nut, Osiris, Isis, Set y Neftis -- convivió siempre con otras dos grandes tradiciones cosmogónicas rivales, la Ogdóada de Hermópolis y la teología de Ptah en Menfis, sin que los sacerdotes egipcios sintieran nunca la necesidad de resolver esas contradicciones en un relato único: distintos templos, distintas versiones del origen del mundo, coexistiendo sin conflicto dentro de la misma religión.`,

  'viaje-nocturno-de-ra': `El recorrido nocturno de Ra a través de las doce horas del inframundo está documentado con extraordinario detalle en el Amduat ("Libro de lo que hay en el Más Allá") y el Libro de las Puertas, textos funerarios pintados hora por hora en las paredes de las tumbas reales del Valle de los Reyes, entre ellas la de Tutmosis III, una de las versiones más completas y mejor conservadas. Cada hora tenía su propia región, sus propios habitantes y sus propios peligros, y se creía que el faraón difunto viajaba literalmente junto a Ra durante ese trayecto, participando de su victoria nocturna sobre Apofis como garantía de su propia resurrección junto con el sol cada amanecer.`,

  'asesinato-de-osiris': `El número de setenta y dos conspiradores reclutados por Set, y el detalle del ataúd hecho a medida como trampa, provienen específicamente del relato de Plutarco, y no tienen un paralelo tan detallado en las fuentes egipcias originales, que suelen aludir al asesinato de forma indirecta y ritualizada en vez de narrarlo paso a paso -- muchos textos funerarios egipcios preferían no nombrar el crimen explícitamente, refiriéndose solo a "el día del mal" o evitando directamente el tema, quizás por una reticencia religiosa real a poner en palabras un acto tan perturbador para el orden cósmico que ellos mismos custodiaban.`,

  'cuento-de-los-dos-hermanos': `Este relato se conserva íntegro en el Papiro D'Orbiney, copiado hacia el reinado de Seti II (finales del siglo XIII a.C.) y hoy en el Museo Británico -- uno de los pocos grandes relatos de ficción egipcios que ha llegado prácticamente completo hasta nuestros días. Los egiptólogos señalan desde hace más de un siglo los paralelismos evidentes con el mito de Osiris (muerte, desmembramiento, transformación sucesiva y resurrección final a través de una figura femenina), lo que sugiere que el cuento funcionaba, al menos en parte, como una versión doméstica y moralizante de esos mismos temas religiosos centrales, trasladados de la corte divina a una familia campesina común.`,

  'destruccion-de-la-humanidad': `Este mito, protagonizado por Ra, Sejmet y Hathor, se conserva principalmente en el "Libro de la Vaca Celeste", inscrito en varias tumbas reales del Nuevo Reino -- entre ellas la de Seti I, y en un panel dorado del propio santuario funerario de Tutankamón --, uno de los pocos textos egipcios que explica explícitamente por qué los dioses decidieron alejarse del contacto directo con la humanidad, dejando el gobierno cotidiano en manos de los faraones. La cerveza teñida de rojo con la que se detiene la matanza se ha vinculado tradicionalmente con el origen mitológico de festivales reales de embriaguez ritual documentados en templos dedicados a Hathor y Sejmet, celebrados como forma de aplacar preventivamente su furia.`,

  'cuento-de-sinuhe': `La "Historia de Sinuhé" se considera la obra maestra de la literatura clásica del Egipto Medio, y su popularidad entre los propios egipcios fue extraordinaria: se han hallado copias en al menos cinco papiros y numerosos fragmentos de ostraca (fragmentos de cerámica usados como material de escritura barato) que abarcan más de mil años de tradición escolar, usada como texto de entrenamiento caligráfico y literario para generaciones de escribas. Aunque Sinuhé es un personaje ficticio, el Papiro Berlín 3022 y el Papiro Ramesseum, las dos fuentes principales, están escritos con tal detalle geográfico y político sobre la corte de Amenemhat I que muchos egiptólogos creen que el relato se inspiró, al menos parcialmente, en hechos o personajes reales de la época.`,

  'contiendas-de-horus-y-set': `La fuente principal de este ciclo completo es, de nuevo, el Papiro Chester Beatty I, y lo que sorprende a los lectores modernos es su tono: lejos de ser un relato solemne, está lleno de episodios cómicos, groseros y hasta absurdos -- competencias de fuerza, humillaciones y quejas constantes ante el tribunal divino -- que contrastan fuertemente con la seriedad de otros mitos egipcios sobre la realeza. Los egiptólogos interpretan este tono como reflejo de un género narrativo egipcio real, más cercano a la sátira política que al mito solemne, usado para procesar de forma segura y hasta entretenida una pregunta profundamente seria para cualquier egipcio: qué hace legítimo a un gobernante frente a un rival con argumentos propios.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-egipcia'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-egipcia".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando historias de Mitologia Egipcia...\n');
  const libroId = await obtenerLibroId();

  const [filas] = await pool.query('SELECT id, slug, titulo, texto_completo FROM historias WHERE libro_id = ?', [libroId]);
  const porSlug = {};
  filas.forEach(f => { porSlug[f.slug] = f; });

  for (const [slug, extra] of Object.entries(EXTRA)) {
    const historia = porSlug[slug];
    if (!historia) {
      console.log(`  ! Historia "${slug}" no encontrada, se salta.`);
      continue;
    }
    if (historia.texto_completo.includes(extra.slice(0, 40))) {
      console.log(`  - "${historia.titulo}" ya tenia este agregado.`);
      continue;
    }
    const nuevoTexto = `${historia.texto_completo}\n\n${extra}`;
    await pool.query('UPDATE historias SET texto_completo = ? WHERE id = ?', [nuevoTexto, historia.id]);
    console.log(`  - "${historia.titulo}" ampliada.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
