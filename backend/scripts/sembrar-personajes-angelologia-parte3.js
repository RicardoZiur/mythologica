// ============================================================
// scripts/sembrar-personajes-angelologia-parte3.js
// ------------------------------------------------------------
// Tercer lote de Angelologia: 5 mortales -- teologos y misticos
// historicos que sistematizaron la jerarquia angelical o
// afirmaron comunicarse directamente con angeles. Contenido
// completo desde el inicio. Idempotente via slug
// (personajes.slug es UNICO A NIVEL GLOBAL).
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-angelologia-parte3.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  {
    tipo: 'mortal', slug: 'pseudo-dionisio-areopagita', nombre: 'Pseudo-Dionisio Areopagita', nombre_griego: 'Pseudo-Dionysius the Areopagite',
    epitetos: 'El Sistematizador de los Nueve Coros Celestiales',
    descripcion_corta: 'Autor anónimo de finales del siglo V cuya obra "La Jerarquía Celestial" estableció la clasificación de los ángeles en nueve coros que la tradición cristiana occidental adoptaría de manera prácticamente definitiva.',
    descripcion_larga: `El Pseudo-Dionisio Areopagita es el nombre convencional asignado por la erudición moderna a un autor cristiano anónimo, probablemente activo hacia finales del siglo V o comienzos del siglo VI, cuyas obras circularon durante más de un milenio atribuidas erróneamente a Dionisio el Areopagita, un converso ateniense mencionado brevemente en el Libro de los Hechos de los Apóstoles como discípulo directo de San Pablo. Esa atribución errónea, aunque cuestionada ya por algunos eruditos desde el Renacimiento y descartada de manera prácticamente unánime por la investigación académica moderna, otorgó durante siglos a estas obras una autoridad apostólica considerable que resultó decisiva para su influencia extraordinaria sobre el desarrollo posterior de toda la teología cristiana medieval.

Su obra más influyente en materia angelical, "La Jerarquía Celestial", estableció un sistema de clasificación extraordinariamente detallado que organizaba a la totalidad de los ángeles en nueve coros distintos, agrupados a su vez en tres esferas jerárquicas de tres coros cada una: la esfera superior, compuesta por Serafines, Querubines y Tronos, en contacto más directo con la presencia divina; la esfera intermedia, formada por Dominaciones, Virtudes y Potestades, encargada de administrar el orden cósmico general; y la esfera inferior, integrada por Principados, Arcángeles y Ángeles propiamente dichos, encargada de la relación más directa con los asuntos humanos concretos. Este sistema jerárquico, desarrollado combinando elementos de la filosofía neoplatónica con la tradición bíblica y patrística cristiana anterior, se convirtió con el tiempo en la clasificación angelical prácticamente estándar dentro de la teología cristiana occidental medieval, adoptada y desarrollada posteriormente por figuras de la magnitud de Tomás de Aquino, e influyendo de manera decisiva en la propia estructura del Paraíso descrito por Dante Alighieri en su "Divina Comedia".`,
    origen: 'Autor cristiano anónimo de finales del siglo V, tradicionalmente confundido con un discípulo de San Pablo.',
    dominio: 'La sistematización teológica de la jerarquía angelical', naturaleza: 'Teólogo histórico', es_preview: 1
  },
  {
    tipo: 'mortal', slug: 'tomas-de-aquino', nombre: 'Tomás de Aquino', nombre_griego: 'Thomas Aquinas',
    epitetos: 'El Doctor Angélico',
    descripcion_corta: 'Fraile dominico y teólogo del siglo XIII cuyo tratado exhaustivo sobre la naturaleza exacta de los ángeles le valió el título honorífico de "Doctor Angélico" que lo acompaña hasta hoy.',
    descripcion_larga: `Tomás de Aquino, fraile dominico y uno de los teólogos y filósofos más influyentes de toda la historia de la Iglesia Católica, dedicó dentro de su monumental "Suma Teológica" una sección considerablemente extensa y filosóficamente rigurosa al análisis detallado de la naturaleza exacta de los ángeles, abordando cuestiones que van desde su composición metafísica precisa —seres puramente espirituales, sin materia corporal alguna, cada uno constituyendo por sí mismo una especie distinta e irrepetible dentro de la creación— hasta cuestiones considerablemente más específicas y célebres, incluida la famosa pregunta, frecuentemente citada de manera simplificada o incluso paródica en la cultura popular posterior, sobre cuántos ángeles podían danzar sobre la cabeza de un alfiler, un debate que en realidad reflejaba preocupaciones filosóficas genuinas sobre la naturaleza de la localización espacial de entidades completamente inmateriales.

El rigor y la profundidad excepcionales de su análisis sobre la angelología le valieron el título honorífico de "Doctor Angélico" (Doctor Angelicus), un reconocimiento formal otorgado por la propia tradición católica que refleja hasta qué punto su tratamiento de esta materia particular se consideró definitivo y de referencia obligada para generaciones posteriores de teólogos. Tomás de Aquino sistematizó y refinó considerablemente la jerarquía de nueve coros originalmente propuesta por el Pseudo-Dionisio Areopagita, desarrollando argumentos filosóficos detallados sobre las capacidades cognitivas específicas de los ángeles, su forma particular de comunicación entre sí (a través de lo que denominó "habla angélica", una transmisión directa de conceptos sin necesidad de sonido físico), y la naturaleza exacta de su libre albedrío, que según su análisis filosófico se ejercía de una manera cualitativamente distinta a la del libre albedrío humano, dada la naturaleza puramente intelectual y no corporal de estos seres. Su obra sigue siendo hasta hoy un punto de referencia obligado dentro de cualquier estudio académico serio sobre la angelología católica tradicional.`,
    origen: 'Fraile dominico y teólogo del siglo XIII, autor de la Suma Teológica.',
    dominio: 'El análisis filosófico riguroso de la naturaleza angelical', naturaleza: 'Teólogo histórico, "Doctor Angélico"', es_preview: 1
  },
  {
    tipo: 'mortal', slug: 'emanuel-swedenborg', nombre: 'Emanuel Swedenborg', nombre_griego: 'Emanuel Swedenborg',
    epitetos: 'El Científico que Conversaba con Ángeles',
    descripcion_corta: 'Científico, inventor y místico sueco del siglo XVIII que, tras una crisis espiritual profunda, afirmó mantener conversaciones directas y sostenidas con ángeles durante el resto de su vida.',
    descripcion_larga: `Emanuel Swedenborg desarrolló durante la primera mitad de su vida una carrera científica y de ingeniería considerablemente distinguida dentro de la Suecia del siglo XVIII, realizando contribuciones reconocidas en campos tan diversos como la mineralogía, la anatomía y el diseño mecánico, antes de experimentar, hacia mediados de la década de 1740, una profunda crisis espiritual acompañada de visiones intensas que transformarían por completo el rumbo del resto de su vida y de su obra intelectual. A partir de ese momento de transformación personal, Swedenborg afirmó de manera sostenida y consistente durante las siguientes décadas mantener conversaciones directas y regulares con ángeles y espíritus, experiencias que documentó con un detalle extraordinario en obras voluminosas como "El Cielo y sus Maravillas y el Infierno" (1758).

A diferencia de buena parte de la tradición angelológica anterior, que tendía a presentar a los ángeles como entidades de naturaleza radicalmente distinta y superior a la humana, Swedenborg desarrolló la doctrina particular de que los ángeles no habían sido creados como una categoría de ser completamente separada, sino que constituían en realidad almas humanas que, tras su fallecimiento, habían alcanzado un estado de perfección espiritual suficiente como para integrarse plenamente dentro de las comunidades celestiales, una concepción que difería considerablemente de la angelología tradicional predominante hasta entonces dentro del cristianismo occidental. Describió también el cielo mismo no como un lugar estático y uniforme, sino como una estructura compleja organizada en comunidades específicas según afinidades espirituales particulares, con los propios ángeles conservando individualidad, memoria y personalidad plenamente reconocibles. Las obras de Swedenborg ejercieron una influencia considerable sobre movimientos espirituales posteriores, incluida la fundación formal de la Iglesia de la Nueva Jerusalén tras su muerte, y siguen siendo estudiadas hasta hoy tanto por historiadores de la religión como por comunidades religiosas que continúan reconociendo su autoridad espiritual.`,
    origen: 'Científico, inventor y místico sueco del siglo XVIII.',
    dominio: 'La comunicación directa y sostenida con el mundo angelical', naturaleza: 'Místico histórico', es_preview: 1
  },
  {
    tipo: 'mortal', slug: 'john-dee', nombre: 'John Dee', nombre_griego: 'John Dee',
    epitetos: 'El Mago de la Corte que Escuchaba a los Ángeles',
    descripcion_corta: 'Matemático, astrónomo y consejero de la reina Isabel I de Inglaterra que, junto a su asociado Edward Kelley, desarrolló un sistema completo de comunicación angelical conocido como magia enoquiana.',
    descripcion_larga: `John Dee, matemático, astrónomo, geógrafo y consejero cercano de la reina Isabel I de Inglaterra, ocupaba durante buena parte de su vida una posición de considerable respeto intelectual dentro de los círculos científicos y políticos ingleses de finales del siglo XVI, contribuyendo activamente a los avances de la navegación marítima y la exploración inglesa de su época. Paralelamente a esa carrera científica reconocida, Dee desarrolló también un interés profundo y sostenido en el ocultismo y la magia ceremonial, particularmente en la posibilidad de establecer comunicación directa con ángeles capaces de revelarle conocimientos ocultos sobre la naturaleza última del universo.

A partir de 1582, Dee comenzó a colaborar estrechamente con Edward Kelley, un médium que afirmaba ser capaz de percibir y comunicarse con entidades angelicales a través de una piedra de cristal empleada como instrumento de scrying (visión a distancia), mientras el propio Dee registraba meticulosamente en diarios detallados el contenido completo de esas sesiones. De esas sesiones sostenidas durante varios años surgió lo que se conocería posteriormente como el sistema de magia enoquiana, que incluía un alfabeto completo supuestamente dictado directamente por los propios ángeles, considerado por sus practicantes el idioma original hablado por Adán antes de la caída, así como series extensas de invocaciones ("llaves enoquianas") y un complejo sistema simbólico de tablas y correspondencias destinado a facilitar comunicación adicional con distintas jerarquías angelicales específicas. Pese al escepticismo considerable con el que la investigación histórica moderna trata la autenticidad de las supuestas comunicaciones angelicales de Kelley, el sistema enoquiano desarrollado por ambos ejerció una influencia extraordinariamente duradera sobre el ocultismo occidental posterior, siendo adoptado y expandido siglos después por organizaciones esotéricas como la Orden Hermética del Alba Dorada y manteniéndose vigente hasta la actualidad dentro de diversas corrientes de magia ceremonial contemporánea.`,
    origen: 'Matemático, astrónomo y consejero de la reina Isabel I de Inglaterra, siglo XVI.',
    dominio: 'La comunicación ritual con jerarquías angelicales', naturaleza: 'Erudito y ocultista histórico', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'gregorio-magno', nombre: 'Gregorio Magno', nombre_griego: 'Gregory the Great',
    epitetos: 'El Papa que Ordenó los Nueve Coros',
    descripcion_corta: 'Papa del siglo VI cuyas homilías sobre los ángeles reorganizaron y afinaron el orden de los nueve coros celestiales, consolidando la secuencia jerárquica adoptada por la tradición católica occidental posterior.',
    descripcion_larga: `Gregorio Magno, quien ocupó el papado entre 590 y 604 y se cuenta entre los cuatro grandes doctores originales de la Iglesia latina, dedicó una atención considerable dentro de sus homilías, particularmente en su comentario sobre el Libro de Ezequiel, a la sistematización precisa del orden jerárquico de los ángeles, retomando y refinando el sistema de nueve coros originalmente propuesto por el Pseudo-Dionisio Areopagita, cuya obra circulaba ya con considerable autoridad dentro del pensamiento cristiano de su época gracias a la atribución apostólica errónea que entonces se le otorgaba de manera prácticamente unánime.

Gregorio introdujo una reorganización específica del orden secuencial exacto de los nueve coros que, aunque partía directamente de la base establecida por el Pseudo-Dionisio, presentaba algunas diferencias particulares en la disposición precisa de ciertos coros dentro de la jerarquía general, una versión que terminaría consolidándose como la secuencia predominante dentro de buena parte de la tradición católica occidental posterior, adoptada y transmitida por incontables generaciones de teólogos, predicadores y artistas medievales que representarían esta jerarquía específica en la iconografía religiosa de catedrales e iglesias por toda Europa. Más allá de su contribución específica a la sistematización angelical, Gregorio Magno es recordado también por reformas litúrgicas y administrativas de enorme trascendencia para la historia posterior de la Iglesia Católica, incluida la consolidación del canto gregoriano que lleva su nombre y el envío de misiones evangelizadoras hacia Inglaterra, pero su tratamiento detallado y cuidadosamente argumentado de la jerarquía celestial permanece como una de sus contribuciones teológicas más duraderas y específicamente influyentes dentro del desarrollo posterior de la angelología cristiana occidental.`,
    origen: 'Papa entre 590 y 604, doctor de la Iglesia latina.',
    dominio: 'La reorganización definitiva del orden de los nueve coros', naturaleza: 'Pontífice histórico y teólogo', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'angelologia'");
  if (filas.length === 0) throw new Error('No existe el libro "angelologia" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando mortales de Angelologia (parte 3)...\n');
  const libroId = await obtenerLibroId();

  for (const p of PERSONAJES) {
    const [existente] = await pool.query('SELECT id FROM personajes WHERE slug = ?', [p.slug]);
    if (existente.length > 0) {
      console.log(`  - Personaje "${p.nombre}" ya existía.`);
      continue;
    }
    await pool.query(
      `INSERT INTO personajes (tipo, nombre, nombre_griego, epitetos, descripcion_corta, descripcion_larga, origen, dominio, naturaleza, slug, es_preview, libro_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [p.tipo, p.nombre, p.nombre_griego, p.epitetos, p.descripcion_corta, p.descripcion_larga, p.origen, p.dominio, p.naturaleza, p.slug, p.es_preview, libroId]
    );
    console.log(`  - Personaje "${p.nombre}" creado.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
