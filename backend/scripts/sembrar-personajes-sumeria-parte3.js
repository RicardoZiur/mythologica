// ============================================================
// scripts/sembrar-personajes-sumeria-parte3.js
// ------------------------------------------------------------
// Tercer lote de contenido para Mitologia Sumeria: 5 mortales.
// Con esto se completan los 48 personajes del libro (17 dioses,
// 5 titanes, 10 heroes, 11 monstruos, 5 mortales).
// Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-sumeria-parte3.js
// ============================================================

const pool = require('../config/db');

const MORTALES = [
  {
    slug: 'sargon-de-akkad', nombre: 'Sargón de Akkad', nombre_griego: 'Sharru-kin',
    epitetos: 'El Rey Verdadero, Fundador del Primer Imperio',
    descripcion_corta: 'Rey histórico de Akkad cuya leyenda de nacimiento —abandonado en una cesta en el río— se convirtió en arquetipo de héroes fundadores posteriores.',
    descripcion_larga: `Sargón de Akkad es, a diferencia de la mayoría de las figuras de esta lista, un gobernante histórico real que vivió hacia el 2300 a.C. y fundó el primer imperio multiétnico conocido de la historia, unificando las ciudades-estado sumerias bajo un solo gobierno centralizado. Pero su figura histórica quedó rápidamente envuelta en una leyenda de origen que los propios escribas mesopotámicos redactaron siglos después, presentándolo casi como semidivino pese a no serlo en absoluto.

Según esa leyenda, conservada en un texto conocido como "La Leyenda de Sargón", su madre —una sacerdotisa que no podía revelar la identidad del padre— lo dio a luz en secreto, lo colocó en una cesta de juncos sellada con brea, y lo dejó flotando en el río Éufrates. Un aguador llamado Aqqi lo rescató de las aguas y lo crió como jardinero, hasta que la diosa Ishtar, prendada de él, lo elevó a la posición de copero real y desde ahí, con el tiempo, a la propia realeza. La similitud asombrosa con la leyenda bíblica de Moisés —siglos posterior— no pasó desapercibida para los estudiosos modernos, y refleja un patrón narrativo mucho más amplio en el que los grandes fundadores de civilizaciones nacen en circunstancias humildes y peligrosas antes de revelar su destino verdadero.`,
    origen: 'Rey histórico de Akkad, hijo de padre desconocido según la leyenda.',
    dominio: 'El gobierno del primer imperio mesopotámico',
    naturaleza: 'Rey fundador semi-legendario'
  },
  {
    slug: 'ku-baba', nombre: 'Ku-Baba', nombre_griego: 'Kubaba',
    epitetos: 'La Tabernera que se Volvió Reina',
    descripcion_corta: 'Única mujer listada como gobernante en la Lista Real Sumeria — de tabernera a fundadora de una dinastía real en Kish.',
    descripcion_larga: `Ku-Baba es la única mujer que aparece registrada como gobernante por derecho propio en toda la Lista Real Sumeria, el documento que enumera a los sucesivos monarcas legítimos de Mesopotamia desde tiempos antediluvianos. El texto la describe, sin ambages, como "la tabernera que consolidó los cimientos de Kish", una descripción de oficio que sorprende por su franqueza en un documento generalmente dedicado a exaltar linajes divinos y hazañas heroicas.

Poco se sabe con certeza sobre las circunstancias exactas de su ascenso al poder, pero su inclusión en la Lista Real —fundando su propia dinastía, la tercera de Kish, que según el registro gobernó durante un siglo entero— sugiere que su gobierno fue lo bastante sólido y prolongado como para que ningún escriba posterior se atreviera a omitirla, pese a lo inusual de su origen humilde y su género en una tradición dominada casi por completo por reyes guerreros de linaje divino. Ku-Baba se convirtió con el tiempo en una figura de culto en algunas regiones mesopotámicas posteriores, venerada bajo el nombre de Kubaba, lo que sugiere que su memoria histórica, lejos de desvanecerse, terminó elevándose hasta rozar el estatus casi divino que rara vez se concedía a gobernantes mortales, y mucho menos a mujeres.`,
    origen: 'Tabernera de Kish, fundadora de su Tercera Dinastía.',
    dominio: 'El gobierno de Kish',
    naturaleza: 'Reina fundadora, única gobernante femenina de la Lista Real'
  },
  {
    slug: 'enmerkar', nombre: 'Enmerkar', nombre_griego: 'Enmerkar',
    epitetos: 'El Señor de Uruk, Rival del Señor de Aratta',
    descripcion_corta: 'Legendario rey de Uruk cuya rivalidad con el Señor de Aratta por acertijos imposibles llevó, según la leyenda, a la invención misma de la escritura.',
    descripcion_larga: `Enmerkar es un legendario rey de Uruk, predecesor de Lugalbanda en algunas listas reales, cuyo ciclo épico más famoso —"Enmerkar y el Señor de Aratta"— narra una rivalidad diplomática y económica con el gobernante de la lejana ciudad de Aratta, rica en los metales y piedras preciosas que Uruk necesitaba mientras carecía de sus propios recursos minerales. En lugar de resolver el conflicto con un ejército, Enmerkar y su rival se enfrentan en una serie de desafíos verbales cada vez más imposibles, transmitidos de ciudad a ciudad por un mensajero agotado que cruza el territorio una y otra vez.

El episodio más citado del ciclo ocurre cuando los mensajes se vuelven tan largos y complejos que el mensajero ya no logra memorizarlos con precisión palabra por palabra; Enmerkar, ante ese problema práctico, idea entonces marcar signos sobre una tablilla de arcilla húmeda para fijar el mensaje de forma permanente —un momento que la propia tradición sumeria presentaba, siglos antes de que existiera la arqueología moderna, como el instante legendario del nacimiento de la escritura misma. El mismo ciclo de Aratta contiene además un pasaje que algunos estudiosos consideran el precedente literario más antiguo del mito bíblico de la Torre de Babel: una época dorada en la que toda la humanidad hablaba una sola lengua, antes de que Enki confundiera el habla de los pueblos.`,
    origen: 'Legendario rey de Uruk, predecesor de Lugalbanda.',
    dominio: 'El gobierno de Uruk y el comercio con Aratta',
    naturaleza: 'Rey-héroe, artífice legendario de la escritura'
  },
  {
    slug: 'ur-nammu', nombre: 'Ur-Nammu', nombre_griego: 'Ur-Namma',
    epitetos: 'El Rey Justo, Fundador de la Tercera Dinastía de Ur',
    descripcion_corta: 'Rey histórico fundador de la Tercera Dinastía de Ur, autor del código legal más antiguo conocido — un poema de lamento narra su muerte injusta en batalla.',
    descripcion_larga: `Ur-Nammu es un rey histórico que gobernó Ur hacia el 2100 a.C., fundador de la Tercera Dinastía de Ur y autor —o al menos patrocinador— del código legal más antiguo que se conserva de toda la historia humana, varios siglos anterior al más famoso código de Hammurabi. Sus leyes, grabadas en tablillas de arcilla, establecían compensaciones económicas específicas para delitos concretos, un sistema notablemente más medido que el principio del "ojo por ojo" que dominaría códigos posteriores.

Pese a su gobierno próspero y su piedad religiosa constante hacia los dioses de Ur, la tradición literaria que se desarrolló después de su muerte lo trata con una crueldad narrativa desconcertante: el poema conocido como "La Muerte de Ur-Nammu" describe cómo el rey, pese a haber cumplido fielmente con templos, sacrificios y rituales durante toda su vida, es abandonado por los propios dioses en el campo de batalla, donde muere solo, sin el apoyo divino que su devoción debería haberle garantizado. El poema lo sigue después en su descenso al inframundo, donde es recibido por los siete porteros y presenta regalos a las principales divinidades de la muerte, en una de las descripciones más detalladas que se conservan del protocolo funerario mesopotámico para un rey. Su historia funciona como un contrapunto sombrío al resto del ciclo mítico: ni siquiera el gobernante más justo y devoto podía negociar con el destino que los dioses ya habían decretado para él.`,
    origen: 'Rey histórico, fundador de la Tercera Dinastía de Ur.',
    dominio: 'El gobierno de Ur y la ley',
    naturaleza: 'Rey justo, abandonado por los dioses en la muerte'
  },
  {
    slug: 'enheduanna', nombre: 'Enheduanna', nombre_griego: 'Enheduanna',
    epitetos: 'La Primera Autora Conocida de la Historia',
    descripcion_corta: 'Suma sacerdotisa de Ur, hija de Sargón de Akkad — la primera persona en toda la historia humana identificada por nombre como autora de un texto.',
    descripcion_larga: `Enheduanna fue la suma sacerdotisa del dios Nanna en Ur, hija del propio Sargón de Akkad, que la nombró para ese cargo religioso de máxima importancia como parte de su estrategia para consolidar el control político y religioso sobre las ciudades sumerias recién unificadas bajo su imperio. Su relevancia trasciende ampliamente su rol político: es, hasta donde permiten confirmar los registros arqueológicos, la primera persona en toda la historia humana cuyo nombre queda asociado directamente a una obra literaria que ella misma compuso, casi mil quinientos años antes de Homero.

Sus himnos a Inanna —entre ellos el "Exaltación de Inanna" (Nin-me-šara)— son la fuente literaria más importante que se conserva sobre la naturaleza y el poder de la diosa, escritos en primera persona con una intensidad emocional excepcional: en uno de sus poemas más citados, Enheduanna describe su propio destierro temporal del templo tras una revuelta política, y suplica directamente a Inanna que le restituya su cargo, entrelazando su experiencia personal con la teología que ella misma estaba ayudando a fijar por escrito. Su legado, redescubierto y valorado plenamente solo en tiempos modernos, la convierte en una figura excepcional dentro de esta lista: no una reina de leyenda ni una diosa, sino una mujer real cuya voz individual, gracias a la escritura que Mesopotamia inventó, logró sobrevivir casi cuatro mil trescientos años.`,
    origen: 'Hija de Sargón de Akkad, suma sacerdotisa de Nanna en Ur.',
    dominio: 'El sacerdocio y la composición de himnos',
    naturaleza: 'Sacerdotisa y poeta, primera autora identificada de la historia'
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-sumeria'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-sumeria".');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando parte 3: mortales de Mitologia Sumeria...\n');
  const libroId = await obtenerLibroId();

  for (const p of MORTALES) {
    const [existente] = await pool.query('SELECT id FROM personajes WHERE slug = ? AND libro_id = ?', [p.slug, libroId]);
    if (existente.length > 0) {
      console.log(`  - "${p.nombre}" ya existía.`);
      continue;
    }
    await pool.query(
      `INSERT INTO personajes (tipo, nombre, nombre_griego, epitetos, descripcion_corta, descripcion_larga, origen, dominio, naturaleza, slug, es_preview, libro_id)
       VALUES ('mortal', ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?)`,
      [p.nombre, p.nombre_griego, p.epitetos, p.descripcion_corta, p.descripcion_larga, p.origen, p.dominio, p.naturaleza, p.slug, libroId]
    );
    console.log(`  - "${p.nombre}" creado.`);
  }

  const [total] = await pool.query('SELECT COUNT(*) c FROM personajes WHERE libro_id = ?', [libroId]);
  console.log(`\nListo. Total personajes en el libro: ${total[0].c}`);
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
