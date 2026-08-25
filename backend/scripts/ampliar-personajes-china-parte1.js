// ============================================================
// scripts/ampliar-personajes-china-parte1.js
// ------------------------------------------------------------
// Amplia titanes (5) y dioses (15) de Mitologia China con un
// parrafo extra en descripcion_larga -- datos reales adicionales
// (fuentes clasicas, festivales vigentes, cultura pop) que no
// estaban cubiertos en el seed original. Simbolos/poderes/familia
// ya fueron poblados por sembrar-detalles-china.js, asi que este
// script NO los toca. Idempotente (chequea si el extra ya esta
// presente antes de agregarlo).
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-china-parte1.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- TITANES ---
  pangu: `El registro escrito más antiguo que se conserva de su mito aparece relativamente tarde, en el "Sanwu Liji", un texto del siglo III de nuestra era escrito por Xu Zheng durante el periodo de los Tres Reinos, mucho después que la mayoría de los demás grandes mitos chinos. Esto ha llevado a numerosos estudiosos a debatir si el relato de Pangu fue originalmente un mito de creación propio de pueblos no han del sur de China, como los miao o los yao —que conservan sus propias versiones independientes—, adoptado más tarde dentro de la tradición han dominante.`,
  nuwa: `Según el "Huainanzi", tras la catástrofe provocada por Gonggong fue ella misma quien reparó el cielo roto fundiendo piedras de cinco colores distintos, y cortó las patas de una tortuga gigante para usarlas como nuevos pilares que sostuvieran la bóveda celeste. Se la venera además como diosa casamentera, por haber sido quien unió en parejas a los primeros seres humanos, y en relieves funerarios de la dinastía Han aparece junto a Fuxi —su hermano y esposo según la tradición— como dos figuras de cola de serpiente entrelazadas, sosteniendo un compás y una escuadra, símbolos del orden cósmico.`,
  fuxi: `Se lo cuenta tradicionalmente, junto a Nüwa y Shennong, entre los Tres Soberanos (San Huang) de la protohistoria mitológica china. Además de los ocho trigramas, se le atribuye la invención de las redes de pesca, la escritura y el guqin, un instrumento de cuerda de siete cuerdas. Los trigramas que lleva su nombre forman la base filosófica del I Ching (Yijing), un texto de adivinación que sigue consultándose hasta hoy en todo el mundo.`,
  gonggong: `Se lo representa tradicionalmente con cuerpo de serpiente y, a menudo, cabello rojo. Existen en realidad dos relatos clásicos distintos sobre por qué la tierra china se inclina hacia el sureste y sus ríos fluyen en esa dirección: la versión más difundida lo enfrenta directamente contra el pilar del cielo tras perder una batalla contra Zhuanxu, mientras que otras fuentes clásicas narran una confrontación algo diferente entre ambos dioses rivales, evidencia de que la mitología china antigua convivió siempre con tradiciones textuales competidoras en vez de una única versión oficial.`,
  hundun: `Su nombre significa literalmente "caos" o "estado indiferenciado". El "Zhuangzi", texto clásico del taoísmo, lo describe como el emperador sin rostro del centro, a quien los emperadores del Mar del Norte y del Mar del Sur decidieron regalarle, por gratitud, los siete orificios que todo ser humano posee (ojos, oídos, nariz y boca) y de los que él carecía; Hundun murió apenas terminaron de abrirle el séptimo. Es una de las parábolas taoístas más citadas sobre cómo imponer orden y diferenciación sobre la totalidad natural termina destruyéndola.`,

  // --- DIOSES ---
  'yu-huang': `Sigue siendo objeto de culto activo hoy, con templos importantes repartidos por China, Taiwán y las comunidades chinas de la diáspora; su cumpleaños, el noveno día del primer mes lunar, se celebra en Taiwán mediante el festival "Bai Tian Gong" dentro de la tradición hokkien. En la novela Viaje al Oeste, de la dinastía Ming, es el gobernante del Cielo al que desafía Sun Wukong, la escena que para buena parte de Occidente sigue siendo su primer contacto con esta divinidad.`,
  'xi-wangmu': `En los textos más antiguos que la mencionan, como el Shan Hai Jing, se la describe como una temible deidad de plagas con dientes de tigre y cola de leopardo, muy distinta de la benévola Reina Madre de Occidente en que se convirtió siglos después: un ejemplo notable de cómo el carácter de una misma divinidad china puede invertirse por completo con el paso del tiempo. Sus melocotones de la inmortalidad maduran solo una vez cada varios miles de años, y son el origen del "melocotón de cumpleaños" (shoutao), todavía un regalo simbólico habitual para las personas mayores en China.`,
  guanyin: `En el budismo indio original era un bodhisattva masculino (Avalokiteshvara), y fue transformándose gradualmente en una figura femenina a medida que su culto se expandía y sincretizaba en China, aproximadamente desde la dinastía Tang en adelante —una de las transformaciones de género más notables de cualquier gran divinidad dentro de las religiones del mundo. La isla de Putuoshan, frente a la costa oriental china, se considera su principal sitio de peregrinación terrenal, una de las Cuatro Montañas Sagradas del budismo chino.`,
  'erlang-shen': `Su tercer ojo, vertical y ubicado en medio de la frente, le permite ver a través de cualquier ilusión o disfraz, lo que lo convierte en una de las pocas deidades capaces de reconocer los trucos de transformación de Sun Wukong en Viaje al Oeste. Su fiel perro es casi tan célebre en el folclore como él mismo, y en algunas versiones es precisamente el animal quien logra morder y someter al Rey Mono cuando nadie más puede atraparlo.`,
  zhurong: `Dios del fuego, asociado dentro de la cosmología de los cinco elementos (Wu Xing) con el punto cardinal sur y el color rojo. En algunas tradiciones genealógicas se lo considera ancestro de pueblos del sur de China como los miao. Ciertas versiones clásicas lo presentan, en lugar de a Nüwa, como quien finalmente derrota a Gonggong en una gran batalla, una tradición alternativa al relato más difundido centrado en la reparación del cielo.`,
  leigong: `Se lo representa tradicionalmente con pico de ave, alas y garras, cargando un tambor y un mazo con los que produce el trueno. Dianmu, su compañera y diosa del relámpago, usa espejos para producir los destellos que anteceden cada trueno de Leigong. Se creía tradicionalmente que un rayo castigaba a quienes ocultaban maldades secretas, así que ser alcanzado por uno conllevaba un verdadero estigma social en las comunidades tradicionales, como prueba implícita de una culpa oculta.`,
  dianmu: `Como compañera de Leigong dentro del panteón del trueno, se le atribuye producir el destello de cada relámpago con un par de espejos, justo antes de que su compañero haga sonar su tambor. La pareja formada por ambos —el trueno castigador y el relámpago que lo anuncia— sigue apareciendo junta en templos populares chinos dedicados a los fenómenos atmosféricos.`,
  caishen: `Dios de la riqueza, una de las divinidades más entusiastamente veneradas del panteón popular chino actual, sobre todo durante el Año Nuevo Chino, cuando su imagen se recibe formalmente en hogares y comercios el día en que se cree que regresa del cielo (varía según la región, a menudo el quinto día del año nuevo). En realidad, bajo el título "Caishen" se veneran colectivamente varias figuras históricas o legendarias distintas según la región —versiones civiles y marciales—, más que un origen mitológico único y fijo.`,
  tudigong: `Es la divinidad de menor rango pero más numerosa del panteón popular chino: se cree que existe un Tudigong distinto para cada aldea, barrio o incluso edificio individual. Los pequeños santuarios dedicados a un Tudigong local siguen siendo hoy un elemento extremadamente común del paisaje rural en China, Taiwán y las comunidades chinas de la diáspora, lo que lo convierte probablemente en la clase de divinidad con más sitios de culto individuales de todo el panteón.`,
  'yan-wang': `Su nombre y su función se adaptaron de Yama, el dios de la muerte hindú y budista, incorporado después dentro de la elaborada burocracia del inframundo chino. La religión popular china describe diez tribunales infernales, cada uno presidido por un rey distinto —Yan Wang es tradicionalmente el quinto, o el principal en versiones posteriores más sistematizadas—, donde los muertos son juzgados y reciben castigos específicos antes de reencarnar: una visión del más allá mucho más burocrática y judicial que la mayoría de las tradiciones occidentales.`,
  mazu: `Está basada en una mujer real, Lin Mo, que habría vivido en el siglo X en la isla de Meizhou, frente a la costa de Fujian, deificada después como protectora de marineros y pescadores. Su culto es hoy uno de los más extendidos y fervientes de la religión popular china, con cientos de templos y peregrinaciones anuales multitudinarias; la peregrinación de Dajia Mazu en Taiwán reúne a cientos de miles de participantes y se considera uno de los festivales religiosos más grandes del mundo.`,
  'chang-e': `El programa chino de exploración lunar lleva su nombre de forma directa —las misiones Chang'e, incluidos los alunizadores y los róveres "Conejo de Jade" (Yutu), en referencia explícita a su compañero—, lo que la convierte en una de las pocas figuras mitológicas del mundo con un programa espacial real dedicado en su honor. El Festival del Medio Otoño (Zhongqiu Jie), una de las fechas más importantes del calendario chino, gira específicamente en torno a su historia, la luna llena y los pasteles de luna.`,
  'zao-jun': `Se cree tradicionalmente que asciende al Cielo justo antes del Año Nuevo Chino para informar al Emperador de Jade sobre la conducta de cada hogar durante el año. Por eso era costumbre ofrecerle dulces pegajosos antes de su partida, ya fuera para "endulzar" su informe o, literalmente, para pegarle la boca y que no pudiera reportar nada malo: un ritual popular concreto, aunque hoy menos practicado, directamente ligado a su mito.`,
  'yue-lao': `Se cree que ata un hilo rojo invisible al tobillo de dos personas destinadas a casarse, sin importar la distancia, el tiempo o la diferencia social que las separe. De ahí proviene el modismo chino todavía habitual "el hilo rojo del destino" (紅線, hóng xiàn), citado constantemente hoy en medios, series y conversaciones cotidianas sobre el amor en toda Asia oriental.`,
  'wenchang-wang': `Patrono de los estudiantes, la literatura y los exámenes imperiales, fue una de las divinidades más invocadas durante la era de los exámenes de servicio civil (keju), dado que aprobarlos era prácticamente la única vía de ascenso social disponible para la mayoría de los hombres. Estudiantes actuales siguen visitando templos dedicados a Wenchang antes de exámenes importantes, como el gaokao chino, continuando una tradición ininterrumpida de más de mil años.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-china'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-china".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando titanes y dioses de Mitologia China (parte 1)...\n');
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
