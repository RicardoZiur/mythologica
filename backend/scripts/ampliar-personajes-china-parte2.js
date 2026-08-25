// ============================================================
// scripts/ampliar-personajes-china-parte2.js
// ------------------------------------------------------------
// Amplia heroes (10) y monstruos (12) de Mitologia China con un
// parrafo extra en descripcion_larga. Mismo criterio que
// ampliar-personajes-china-parte1.js -- ver ese archivo para el
// detalle del patron. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-china-parte2.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- HEROES ---
  'sun-wukong': `Nació de un huevo de piedra en la cima de la Montaña de las Flores y Frutas, y obtuvo buena parte de su poder mediante el cultivo taoísta de la inmortalidad. Su arma, la Ruyi Jingu Bang, había sido originalmente una columna usada para medir la profundidad del océano, tomada del tesoro submarino del Rey Dragón, capaz de encogerse hasta el tamaño de una aguja para guardarla detrás de la oreja. El propio Buda lo aprisionó bajo la Montaña de los Cinco Elementos durante quinientos años como castigo por su rebelión en el Cielo, hasta ser liberado para escoltar al monje Xuanzang en la peregrinación que ocupa la mayor parte de Viaje al Oeste.`,
  houyi: `Más allá de derribar nueve soles, algunas versiones le atribuyen además haber dado muerte a otros monstruos devoradores de hombres que asolaban la tierra en la misma época de crisis —entre ellos Chiyu, Fengxi, Jiuying, Dafeng y la serpiente gigante Xiangliu—, formando parte de un ciclo heroico más amplio de "limpieza del mundo" y no un episodio aislado. Su trágica pérdida de Chang'e ante la luna se interpreta en algunas versiones como castigo divino por haber matado a nueve de los propios hijos del Emperador de Jade, ya que los soles eran, en ciertos relatos, su descendencia.`,
  'yu-el-grande': `Se lo considera tradicionalmente fundador de la semilegendaria dinastía Xia, la primera de China, lo que lo convierte en una figura bisagra entre la mitología pura y el periodo histórico más antiguo reclamado por la tradición china. La frase "pasar tres veces frente a la puerta de su propia casa sin entrar" para seguir trabajando en el control de la inundación se volvió un modismo chino estándar para describir la dedicación total y desinteresada al deber público, todavía enseñado hoy en las escuelas.`,
  nezha: `Nació tras un embarazo de tres años como una bola de carne que su padre abrió de un espadazo, revelando al niño en su interior. Tras un conflicto con su propio padre Li Jing, que quería verlo ejecutado por matar a un príncipe dragón, Nezha se cortó la propia carne de los huesos para devolvérsela a sus padres y saldar así la deuda familiar, antes de ser reconstruido mágicamente con raíces y flores de loto por su maestro. Es la base de la exitosa película animada china "Ne Zha" (2019), una de las películas animadas más taquilleras jamás producidas fuera de Hollywood.`,
  'jing-wei': `Era originalmente una princesa mortal, hija del dios agrícola Yandi (el Emperador de las Llamas, a veces identificado con Shennong), que se ahogó nadando en el Mar Oriental y fue transformada tras la muerte en la pequeña ave decidida a rellenarlo. El modismo "Jingwei tian hai" (精衛填海, "Jingwei rellena el mar") sigue usándose hoy en chino para describir una persistencia obstinada frente a una tarea aparentemente imposible.`,
  kuafu: `Aparece en el Shan Hai Jing (Clásico de las Montañas y los Mares) como parte de una raza de gigantes. Algunas versiones atribuyen su carrera contra el sol no a la soberbia sino a un genuino deseo de acercarlo a la humanidad para ayudarla, lo que lo convierte, según la fuente clásica consultada, en una figura trágica más simpática que en la lectura habitual centrada en el castigo a la arrogancia.`,
  'bai-suzhen': `La Leyenda de la Serpiente Blanca se cuenta entre los Cuatro Grandes Relatos Populares de China, junto a Niulang y Zhinu, Meng Jiangnü y los Amantes Mariposa (Liang Zhu). La historia ha sido adaptada incontables veces en ópera, cine y televisión en todo el mundo de habla china, y el Lago del Oeste en Hangzhou, escenario del relato, sigue siendo hoy un destino turístico importante, con sitios como la Pagoda Leifeng directamente asociados a la leyenda.`,
  zhinu: `La historia de la Tejedora y el Pastor de Bueyes es otro de los Cuatro Grandes Relatos Populares de China. Su reencuentro anual se celebra como el Festival de Qixi (séptimo día del séptimo mes lunar), llamado hoy a menudo "el San Valentín chino", cuando se dice que las urracas forman un puente sobre el Río Celestial (la Vía Láctea) para reunir a la pareja durante una sola noche.`,
  niulang: `Su fiel buey —que en algunas versiones muere y cuya piel usa Niulang para volar al cielo en busca de Zhinu— refleja la enorme importancia cultural del buey como compañero agrícola en la vida campesina tradicional china, un motivo del animal fiel y sacrificado que reaparece en varios otros relatos populares chinos.`,
  huangdi: `Se le atribuyen, además de la victoria sobre Chiyou, numerosos inventos culturales de su reinado: la brújula o carro que siempre señala al sur, el cultivo de la seda —descubierto, según la leyenda, por su consorte Leizu al caerle un capullo dentro del té—, el calendario y la medicina tradicional china. El "Huangdi Neijing", el Canon Interno del Emperador Amarillo, texto médico fundacional todavía citado en la enseñanza de la medicina tradicional china, se le atribuye a él aunque en realidad fue compilado siglos después de su reinado legendario.`,

  // --- MONSTRUOS ---
  nian: `Es el origen mitológico directo de tradiciones del Año Nuevo Chino que se practican hasta hoy: los petardos, el color rojo y el ruido fuerte se explican tradicionalmente como los métodos que los aldeanos descubrieron para ahuyentarlo. La propia expresión cotidiana "guo nian" (过年, "pasar al Nian" o "celebrar el año nuevo") nombra directamente a este monstruo.`,
  taotie: `Es uno de los motivos más icónicos y recurrentes del arte en bronce de la antigua China: aparece como un diseño simétrico de rostro estilizado en vasijas rituales de bronce de las dinastías Shang y Zhou (aproximadamente 1600-256 a. C.), miles de años antes de que las fuentes textuales posteriores lo describieran plenamente como un monstruo glotón. Arqueólogos e historiadores del arte siguen debatiendo qué representaba originalmente este motivo de la Edad del Bronce antes de que la tradición literaria lo bautizara Taotie.`,
  jiangshi: `El "vampiro saltarín" del folclore chino se explica tradicionalmente como un cadáver que no recibió sepultura adecuada o cuya alma no partió correctamente, reanimado al absorber la energía vital (qi) de los vivos; su andar rígido y a saltos se atribuía tradicionalmente al rigor mortis. Se convirtió en un género enormemente popular de terror-comedia en el cine de Hong Kong de los años 80 y 90, que introdujo a la criatura a un público internacional mucho más amplio que el que alcanzaba el folclore original.`,
  'huli-jing': `Los espíritus zorro aparecen en todo el folclore del este de Asia —el kitsune japonés y el kumiho coreano son variantes regionales estrechamente emparentadas del mismo concepto original—. Se creía tradicionalmente que ganaban poder y la capacidad de transformarse en humanos al vivir varios siglos, y que los más poderosos desarrollaban múltiples colas. A menudo se los representa como moralmente ambiguos, capaces de amor, tragedia o redención genuinos en las versiones más comprensivas del relato.`,
  baigujing: `Es específicamente una antagonista recurrente de la novela clásica Viaje al Oeste, donde se disfraza repetidamente para intentar comerse al monje Xuanzang, cuya carne se creía otorgaba la inmortalidad, hasta ser descubierta y destruida por Sun Wukong. Esa secuencia repetida de engaño y desenmascaramiento, conocida como "las Tres Batallas contra el Espíritu de Hueso Blanco" (三打白骨精), sigue siendo uno de los episodios más famosos de toda la novela, adaptado por separado incontables veces en ópera y cine.`,
  'niu-mo-wang': `También es una figura recurrente en Viaje al Oeste, esposo de la Princesa Abanico de Hierro. Su conflicto con Sun Wukong por el Abanico de Hoja de Plátano —necesario para apagar las verdaderas Montañas Llameantes que bloquean el camino de los peregrinos— es una de las tramas secundarias más elaboradas de la novela, con varios capítulos de duelos de transformación entre ambos.`,
  qiongqi: `Se lo cuenta entre los "Cuatro Males" (四凶) de la mitología china antigua, un grupo de cuatro figuras monstruosas que, según la leyenda, el sabio rey Shun desterró a los cuatro confines del mundo. Se lo describe como un tigre alado con sonido de perro que ladra, asociado paradójicamente con castigar a los virtuosos y recompensar a los malvados, una inversión de la justicia habitual.`,
  taowu: `También forma parte de los Cuatro Males junto a Qiongqi. Su nombre fue adoptado más tarde como título literal de una crónica histórica del estado de Chu, un caso inusual de que el nombre de un monstruo se reutilizara como género de escritura histórica, bajo la lógica de que registrar los actos de los malvados sirve como advertencia moral.`,
  'shan-xiao': `Este espíritu de montaña regional se asocia específicamente con el sur de China, descrito ya en el "Soushen Ji", texto del siglo IV sobre lo sobrenatural. Espíritus de montaña de una sola pierna con rasgos similares aparecen bajo distintos nombres en varias fuentes chinas antiguas, generalmente considerados traviesos antes que verdaderamente malignos, culpados a menudo de contratiempos menores como comida robada o herramientas perdidas.`,
  chiyou: `Más allá de su guerra contra Huangdi, sigue siendo venerado hoy por algunos como deidad marcial, y es reclamado como ancestro legendario por varios pueblos del sur de China emparentados con los hmong-miao, que lo consideran una figura mucho más comprensiva que el relato centrado en Huangdi, que lo presenta como el villano derrotado. Es un caso notable de una misma figura mitológica leída como héroe fundador o antagonista derrotado según de qué tradición popular se parta.`,
  xiangliu: `El Shan Hai Jing lo describe como una serpiente de nueve cabezas al servicio del dios de las aguas Gonggong, cuyo vómito y sangre eran tan tóxicos que envenenaban la tierra que tocaban, dejándola inútil para el cultivo de grano en un área enorme. En algunas versiones, es Yu el Grande quien finalmente le da muerte como parte de sus labores más amplias de control de las inundaciones, uniendo así dos grandes mitos distintos.`,
  yayu: `El Shan Hai Jing lo describe con una desconcertante variedad de formas híbridas contradictorias según la fuente consultada —a veces con cabeza de dragón, a veces con cuerpo de toro, a veces con rostro humano—, reflejo de cuánto los grandes bestiarios de la antigua China conservaban tradiciones orales regionales en competencia en vez de una descripción única y estandarizada.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-china'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-china".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando heroes y monstruos de Mitologia China (parte 2)...\n');
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
