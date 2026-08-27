// ============================================================
// scripts/ampliar-personajes-angelologia-parte2.js
// ------------------------------------------------------------
// Amplia heroes (10) y monstruos (12) de Angelologia con un parrafo
// extra en descripcion_larga. Mismo criterio que
// ampliar-personajes-angelologia-parte1.js -- ver ese archivo para
// el detalle del patron. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-angelologia-parte2.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- HEROES ---
  enoc: `El relato bíblico es célebremente breve —"Enoc caminó con Dios, y desapareció, porque Dios se lo llevó" (Génesis 5:24)—, un único versículo enigmático que se convirtió en semilla de todo un género de literatura extrabíblica (los Libros de Enoc: 1 Enoc etíope, 2 Enoc eslavo, 3 Enoc hebreo) que expandió dramáticamente su historia hasta convertirlo en el ángel Metatrón. 1 Enoc se consideraba escritura en Qumrán (los Rollos del Mar Muerto) y sigue siendo canónico hoy en las Biblias de las Iglesias ortodoxas etíope y eritrea, aunque queda excluido de las Biblias judía, católica y de la mayoría de las protestantes.`,
  jacob: `Su lucha nocturna junto al vado de Yaboc (Génesis 32) termina con su cambio de nombre a "Israel", interpretado tradicionalmente como "el que lucha con Dios", nombre que se convierte en el epónimo de todo un pueblo y, después, de una nación. El texto es deliberadamente ambiguo sobre si su oponente fue un ángel, una manifestación directa de Dios, u otra cosa, una ambigüedad textual que los estudios bíblicos siguen debatiendo hoy.`,
  abraham: `Su hospitalidad hacia los tres visitantes en los robles de Mamré (Génesis 18), a quienes recibió con comida y refugio antes de reconocerlos como mensajeros divinos, se convirtió en texto fundacional del judaísmo, el cristianismo y el islam sobre la virtud religiosa de la hospitalidad hacia el extraño. En la iconografía ortodoxa oriental, esta misma escena ("la Hospitalidad de Abraham") se convirtió en la representación visual estándar de la propia Santísima Trinidad, el ejemplo más célebre siendo el icono de Andréi Rubliov de comienzos del siglo XV.`,
  daniel: `El libro que lleva su nombre es inusual por su extensa interacción angelical nombrada (Gabriel aparece explícitamente dos veces, y un "príncipe del reino de Persia" sin nombre se opone a un ángel durante veintiún días en el capítulo 10, lo que implica figuras angelicales asignadas a naciones específicas). Este pasaje se convirtió en texto clave para ideas judías y cristianas posteriores sobre "ángeles guardianes nacionales" asignados a pueblos o reinos particulares.`,
  zacarias: `Quedó mudo por obra de Gabriel al dudar de la profecía sobre el nacimiento de su hijo (Lucas 1:20), mudez que duró hasta la circuncisión y el nombramiento del niño. La tradición cristiana posterior leyó este detalle como un contraste estructural deliberado con la propia anunciación de María, más adelante en el mismo capítulo, donde su pregunta recibe una explicación en lugar de un castigo, un contraste muy comentado sobre el trato diferente que Gabriel da a ambos.`,
  maria: `La escena de la Anunciación (Lucas 1:26-38) se convirtió en uno de los temas más representados de toda la historia del arte occidental, pintado por prácticamente todos los grandes maestros del Renacimiento (Fra Angelico, Leonardo da Vinci, Botticelli, entre muchos otros), y su respuesta registrada —"hágase en mí según tu palabra" (Fiat mihi)— se convirtió en una frase devocional independiente que sigue recitándose hoy en la liturgia católica (la oración del Ángelus) tres veces al día en numerosas comunidades tradicionales.`,
  agar: `Su encuentro directo con un ángel junto a un manantial del desierto (Génesis 16:7-13) —primero como esclava huida, después de nuevo cuando muere de sed en el desierto tras ser expulsada— la convierte en una de las pocas mujeres de la Biblia hebrea en recibir un encuentro y una profecía angelical directa y extensa sobre el futuro de su propio hijo; es además la única persona en toda la Biblia hebrea que le da un nombre a Dios a cambio ("El Roi", "el Dios que me ve").`,
  elias: `Fue alimentado por un ángel bajo un enebro mientras estaba suicida de agotamiento y desesperación tras huir de Jezabel (1 Reyes 19), un pasaje citado hoy con frecuencia en contextos pastorales y de salud mental como un raro ejemplo bíblico de cuidado divino expresado mediante descanso físico básico y comida, en lugar de un rescate o visión milagrosa. Su posterior ascensión en un carro de fuego (2 Reyes 2) sin llegar a morir dio origen a la tradición judía de que nunca murió realmente y sigue visitando la tierra: se le reserva una silla y una copa vacías en cada Séder de Pésaj y aparece en cada brit milá (circuncisión).`,
  lot: `Los dos ángeles que lo rescatan de Sodoma (Génesis 19) lo sacan físicamente de la ciudad tomándolo de la mano, a él y a su familia, cuando duda en marcharse, un detalle que el comentario judío y cristiano posterior lee como ilustración de la misericordia divina imponiéndose sobre la reticencia o el apego humano. La transformación de su esposa en estatua de sal al mirar atrás sigue siendo una de las imágenes más citadas culturalmente de todo el episodio, invocada hoy como advertencia idiomática sobre el peligro de aferrarse al pasado.`,
  gedeon: `Su relato de llamado angelical (Jueces 6) incluye una prueba de autenticidad del mensajero, preparando una ofrenda que el ángel consume milagrosamente con fuego surgido de la punta de su propio bastón, y por separado la célebre "prueba del vellón" (pedir rocío sobre la lana pero no sobre el suelo, y después a la inversa) para confirmar la voluntad de Dios. Esta segunda prueba dio origen al modismo inglés todavía usado hoy "poner un vellón" (putting out a fleece), para describir el acto de pedir una señal antes de comprometerse con una decisión.`,

  // --- MONSTRUOS ---
  ofanim: `Su nombre significa literalmente "ruedas" en hebreo, descritas en la visión de Ezequiel como "una rueda dentro de otra rueda", cubiertas por completo de ojos, moviéndose en perfecta sincronía con las cuatro criaturas vivientes sin necesidad de girar. Esta imagen inspiró directamente el espiritual afroamericano "Ezekiel Saw the Wheel", todavía interpretado y grabado hoy, una de las piezas más inusuales de angelología bíblica en cruzar directamente hacia la música folk popular estadounidense.`,
  querubines: `Al contrario de la imagen de bebés regordetes y adorables del arte occidental posterior (que en realidad deriva de los "putti", figuras decorativas clásicas del Renacimiento, no de los querubines bíblicos), los querubines de la Biblia se describen consistentemente como seres guardianes compuestos y temibles. Dos estatuas de querubines de oro coronaban el propiciatorio del Arca de la Alianza, y un querubín con espada de fuego fue apostado para custodiar la entrada del Edén tras la expulsión: su rol bíblico real gira abrumadoramente en torno a la custodia de fronteras sagradas, no a la ternura.`,
  erelim: `El término aparece explícitamente una sola vez en la Biblia hebrea (Isaías 33:7, "los valientes", ambiguo respecto a si se refiere a ángeles o a mensajeros humanos), y fue la tradición angelológica judía posterior —particularmente la literatura rabínica y cabalística— la que consolidó "Erelim" como un rango angelical propio, ilustrando cómo una única palabra bíblica ambigua pudo elaborarse siglos después hasta convertirse en toda una categoría de ser celestial.`,
  camael: `Se lo asocia tradicionalmente con la severidad, la fuerza y a veces la guerra o incluso la destrucción en distintas tradiciones esotéricas, identificado ocasionalmente (en listas no canónicas) con el ángel que luchó con Jacob o con el que fortaleció a Jesús en Getsemaní, reflejo de cómo, sin un anclaje canónico firme, muchos roles angelicales "sin asignar" de la escritura terminaron atribuidos retroactivamente al ángel nombrado que cada tradición posterior prefería.`,
  dumah: `El folclore judío lo identifica específicamente como el ángel que preside el silencio de la tumba y, en algunas tradiciones, sobre Egipto o el inframundo en un sentido más amplio (su nombre se relaciona con la raíz hebrea de "silencio"). Se lo menciona de forma indirecta en el Salmo 94:17 ("habría habitado en el silencio" - domah/dumah), un juego de palabras que comentaristas posteriores conectaron directamente con su nombre.`,
  gadreel: `Nombrado en 1 Enoc como uno de los Vigilantes, se le atribuye allí haber extraviado a Eva (una tradición distinta de la narrativa de la serpiente en Génesis) y haber introducido a la humanidad las armas de guerra y los cosméticos o adornos personales, parte de la tradición enóquica más amplia que atribuye buena parte del pecado y la violencia humana no a una sola serpiente sino a la instrucción corruptora de ángeles caídos concretos y nombrados.`,
  rahab: `No debe confundirse con la mujer humana Rahab de Jericó (Libro de Josué), que comparte el mismo nombre en las traducciones al español pero una raíz y ortografía hebrea completamente distinta. El Rahab angelical/demoníaco es en cambio una figura de monstruo marino primordial que representa el caos, mencionado en Job, Salmos e Isaías, generalmente entendido como la variante regional israelita de un motivo mitológico de combate más amplio del Cercano Oriente antiguo (comparable a Leviatán, y a la Tiamat babilónica).`,
  sariel: `Aparece entre los líderes Vigilantes nombrados en algunas tradiciones manuscritas de 1 Enoc (a veces como variante o nombre alternativo de Uriel o Suriel en distintos testimonios textuales), otra muestra más de la inestabilidad de los nombres angelicales a través de los manuscritos enóquicos que sobreviven en distintas lenguas antiguas.`,
  'malaj-hamavet': `La leyenda talmúdica (Avodá Zará 20b, entre otros pasajes) lo describe cubierto por completo de ojos, apareciéndose a los moribundos con una espada desenvainada que porta una gota de hiel o veneno en la punta, la cual cae en la boca de la víctima causando la muerte. La costumbre popular posterior de cubrir los espejos y verter el agua estancada de una casa tras un fallecimiento se remonta directamente al temor de encontrarse con su reflejo.`,
  lailah: `El Talmud (Nidá 16b) lo identifica explícitamente como el ángel a cargo de la concepción, encargado de llevar el alma antes de nacer y de enseñarle toda la Torá mientras está en el vientre materno, solo para golpearla justo antes del nacimiento sobre el labio superior (formando el filtrum) y hacer que lo olvide todo. Es una pieza de folclore talmúdico muy conocida, todavía citada hoy para explicar poéticamente tanto el origen del surco del filtrum como el motivo por el que los humanos nacen sin memoria consciente de un estado de conocimiento superior.`,
  temeluchus: `Aparece específicamente en el Apocalipsis de Pedro (siglo II, un texto apócrifo cristiano temprano que nunca entró al canon bíblico pero influyó enormemente en representaciones posteriores del infierno), descrito allí como el ángel que castiga a los niños que desobedecieron o deshonraron a sus padres. Es uno de los muchos ángeles atormentadores nombrados en este texto temprano que moldearon, de forma subterránea, buena parte de la imaginación cristiana medieval sobre los castigos específicos del infierno, pese a que el texto en sí nunca se volvió escritura canónica.`,
  nuriel: `Su nombre deriva de la raíz hebrea "ner"/"or", relacionada con el fuego o la luz, y aparece en diversas listas angelicales cabalísticas posteriores y en tradiciones de grimorios mágicos (incluidos algunos manuscritos del Sefer Raziel HaMalaj, un texto místico-mágico judío medieval) en lugar de en la escritura canónica, reflejo de la enorme y en gran medida descoordinada proliferación de ángeles nombrados a través de la tradición esotérica y mágica judía medieval.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'angelologia'");
  if (filas.length === 0) throw new Error('No existe el libro "angelologia".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando heroes y monstruos de Angelologia (parte 2)...\n');
  const libroId = await obtenerLibroId();
  const [filas] = await pool.query('SELECT id, slug, nombre FROM personajes WHERE libro_id = ?', [libroId]);
  const porSlug = {};
  filas.forEach(f => { porSlug[f.slug] = f; });

  for (const [slug, extra] of Object.entries(DATOS)) {
    const personaje = porSlug[slug];
    if (!personaje) {
      console.log(`  ! Personaje "${slug}" no encontrado, se salta.`);
      continue;
    }
    const [[fila]] = await pool.query('SELECT descripcion_larga FROM personajes WHERE id = ?', [personaje.id]);
    if (fila.descripcion_larga.includes(extra.slice(0, 40))) {
      console.log(`  - "${personaje.nombre}" ya ampliado.`);
      continue;
    }
    const nueva = `${fila.descripcion_larga}\n\n${extra}`;
    await pool.query('UPDATE personajes SET descripcion_larga = ? WHERE id = ?', [nueva, personaje.id]);
    console.log(`  - "${personaje.nombre}" ampliado.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
