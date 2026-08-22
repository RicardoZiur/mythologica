// ============================================================
// scripts/sembrar-personajes-china-parte3.js
// ------------------------------------------------------------
// Tercer y ultimo lote de personajes de Mitologia China: 5
// mortales (figuras legendario-historicas). Contenido completo
// desde el inicio. Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-china-parte3.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  {
    tipo: 'mortal', slug: 'meng-jiangnu', nombre: 'Meng Jiangnü', nombre_griego: '孟姜女 (Mèng Jiāngnǚ)',
    epitetos: 'La Mujer cuyo Llanto Derrumbó la Gran Muralla',
    descripcion_corta: 'Esposa legendaria de un obrero forzado a construir la Gran Muralla, cuyo llanto desconsolado por la noticia de su muerte derrumbó una sección entera de la construcción.',
    descripcion_larga: `Meng Jiangnü se casó apenas unos días antes de que su esposo, Fan Qiliang, fuera reclutado por la fuerza para trabajar en la construcción masiva de la Gran Muralla bajo las órdenes del primer emperador Qin Shi Huang, un proyecto que consumió las vidas de un número incalculable de obreros forzados sometidos a condiciones brutales. Cuando llegó el invierno sin noticias de su esposo, Meng Jiangnü decidió viajar personalmente, cargando ropa de abrigo confeccionada con sus propias manos, hasta el remoto lugar de la construcción para encontrarlo.

Al llegar, descubrió que Fan Qiliang había muerto meses atrás de agotamiento y frío extremo, y que su cuerpo, como el de tantos otros obreros fallecidos, había sido sepultado sin ceremonia alguna directamente dentro de los cimientos de la propia muralla que estaba construyendo. Meng Jiangnü lloró con tal desconsuelo e intensidad durante varios días seguidos junto a la construcción que una sección entera de la Gran Muralla, de varios kilómetros de longitud según las versiones más exageradas del relato, se derrumbó por completo, revelando los huesos de su esposo entre los escombros para que pudiera finalmente darle una sepultura digna. Su historia se convirtió en un símbolo perdurable del sufrimiento del pueblo común bajo proyectos imperiales megalómanos, y en un homenaje al poder simbólico del duelo genuino frente a la indiferencia del poder absoluto.`,
    origen: 'Esposa de un obrero forzado reclutado para la construcción de la Gran Muralla.',
    dominio: 'El duelo genuino frente al poder absoluto', naturaleza: 'Mujer legendaria', es_preview: 1
  },
  {
    tipo: 'mortal', slug: 'zhang-daoling', nombre: 'Zhang Daoling', nombre_griego: '張道陵 (Zhāng Dàolíng)',
    epitetos: 'El Primer Maestro Celestial del Taoísmo',
    descripcion_corta: 'Fundador legendario del taoísmo organizado como religión estructurada, tras recibir revelaciones directas del propio Laozi deificado en las montañas de Sichuan.',
    descripcion_larga: `Zhang Daoling vivió durante el siglo II de nuestra era, en el ocaso de la dinastía Han, y tras una juventud dedicada al estudio de los clásicos confucianos, se retiró a las montañas de Sichuan para dedicarse por completo a la búsqueda de la longevidad y la trascendencia espiritual mediante prácticas alquímicas y meditativas taoístas. Según la tradición religiosa que se desarrolló en torno a su figura, en el año 142 recibió una revelación directa del propio Laozi —el legendario autor del Tao Te Ching, ya deificado en ese momento como manifestación divina del Tao mismo—, que le transmitió enseñanzas, rituales y la autoridad formal para fundar una organización religiosa taoísta estructurada.

Zhang Daoling fundó así lo que se conocería como el movimiento de los Cinco Pecks de Arroz —llamado así por la cuota simbólica de arroz que sus seguidores entregaban a cambio de curación espiritual y guía religiosa—, precursor directo de la escuela taoísta de los Maestros Celestiales que perdura organizadamente hasta hoy. Se le atribuye haber compuesto textos sagrados fundamentales, establecido una jerarquía sacerdotal formal, y finalmente haber alcanzado la inmortalidad completa, ascendiendo en cuerpo y alma a los cielos junto a su esposa desde una montaña sagrada. El título de "Maestro Celestial" que él originó se transmitió hereditariamente durante generaciones, y su descendiente actual sigue siendo reconocido como líder simbólico del taoísmo ortodoxo en Taiwán.`,
    origen: 'Erudito confuciano retirado a las montañas de Sichuan para la búsqueda taoísta.',
    dominio: 'La fundación del taoísmo organizado', naturaleza: 'Fundador religioso deificado', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'xu-fu', nombre: 'Xu Fu', nombre_griego: '徐福 (Xú Fú)',
    epitetos: 'El Alquimista que Buscó el Elixir de la Inmortalidad',
    descripcion_corta: 'Alquimista y erudito enviado por el primer emperador Qin Shi Huang a buscar el elixir de la inmortalidad más allá del mar — desapareció junto a su expedición sin dejar rastro.',
    descripcion_larga: `Xu Fu era un erudito y alquimista de la corte del primer emperador Qin Shi Huang, el mismo soberano que unificó China por primera vez bajo un único imperio y que, obsesionado con evitar la muerte a toda costa, dedicó buena parte de los recursos de su reinado a la búsqueda desesperada de cualquier método capaz de otorgarle la inmortalidad. Xu Fu le presentó una propuesta extraordinaria: existían, según le aseguró, tres montañas sagradas flotando en el mar oriental —Penglai, Fangzhang y Yingzhou—, habitadas por inmortales que poseían el verdadero elixir de la vida eterna, y él mismo podía liderar una expedición para conseguirlo.

El emperador, entusiasmado, financió no una sino dos expediciones masivas encabezadas por Xu Fu, dotadas de barcos, provisiones abundantes, y —según la tradición— varios miles de jóvenes doncellas y muchachos vírgenes destinados a ofrecerse como tributo a los inmortales de las montañas mágicas. Xu Fu partió con esa segunda y última expedición hacia el año 210 antes de Cristo y jamás regresó a China, desapareciendo por completo del registro histórico oficial junto con toda su tripulación. La leyenda popular, sin ninguna confirmación histórica sólida pero extraordinariamente persistente durante siglos, sostiene que Xu Fu llegó efectivamente a tierra firme en algún punto de las costas de Japón, donde se estableció definitivamente, convirtiéndose para algunas tradiciones locales japonesas en una figura fundacional temprana venerada hasta hoy en varios santuarios de esa región.`,
    origen: 'Alquimista y erudito de la corte del emperador Qin Shi Huang.',
    dominio: 'La búsqueda imposible de la inmortalidad', naturaleza: 'Explorador legendario desaparecido', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'bao-zheng', nombre: 'Bao Zheng', nombre_griego: '包拯 (Bāo Zhěng), Bao Gong',
    epitetos: 'El Juez Cara de Hierro que Juzga a Vivos y Muertos',
    descripcion_corta: 'Magistrado histórico de la dinastía Song, transformado en el folclore en el juez incorruptible por excelencia — capaz, según la leyenda, de juzgar tanto a los vivos como a los muertos.',
    descripcion_larga: `Bao Zheng fue un magistrado y funcionario histórico real de la dinastía Song, conocido durante su carrera por una honestidad e incorruptibilidad tan excepcionales dentro de una burocracia imperial frecuentemente marcada por el favoritismo y el soborno, que su reputación trascendió con creces los límites de su propia biografía documentada, transformándose con el tiempo en una figura legendaria del folclore popular chino conocida cariñosamente como Bao Gong, "el señor Bao", o "Cara de Hierro" por su semblante severo e inflexible ante cualquier intento de presión política o económica.

Las leyendas populares desarrolladas siglos después de su muerte le atribuyen poderes casi sobrenaturales de percepción de la verdad, capaces de detectar la mentira más elaborada tras el testimonio más convincente, y en varias historias se le representa incluso viajando durante la noche hasta el propio inframundo para juzgar casos que involucran tanto a espíritus de fallecidos como a vivos, actuando como el único magistrado terrenal con jurisdicción reconocida en ambos reinos, el de los vivos y el de los muertos. Su marca distintiva más célebre en la iconografía popular es una media luna pálida tatuada en la frente, símbolo de su capacidad única para iluminar la verdad incluso en la oscuridad más completa. Su figura sigue siendo protagonista habitual de series de televisión, óperas tradicionales y novelas populares chinas hasta el día de hoy, símbolo perdurable de la justicia incorruptible frente al poder.`,
    origen: 'Magistrado histórico real de la dinastía Song, transformado en leyenda popular.',
    dominio: 'La justicia incorruptible', naturaleza: 'Juez legendario de origen histórico', es_preview: 1
  },
  {
    tipo: 'mortal', slug: 'dong-yong', nombre: 'Dong Yong', nombre_griego: '董永 (Dǒng Yǒng)',
    epitetos: 'El Hijo Piadoso que se Vendió como Esclavo',
    descripcion_corta: 'Joven de extrema piedad filial que se vendió como esclavo para pagar el funeral de su padre, y fue recompensado por el cielo con el matrimonio de una hada tejedora.',
    descripcion_larga: `Dong Yong quedó huérfano de madre siendo muy joven y vivió el resto de su infancia dedicado por completo al cuidado de su padre enfermo, cargándolo consigo incluso mientras trabajaba el campo cuando la salud de este empeoró demasiado como para quedarse solo en casa. Cuando su padre finalmente murió, Dong Yong, sin recursos suficientes para pagar un funeral apropiado según las normas de piedad filial tan valoradas en la sociedad china tradicional, tomó una decisión extrema: se vendió a sí mismo como esclavo a un terrateniente local a cambio del dinero necesario para sepultar a su padre con la dignidad que merecía.

El cielo, conmovido por una devoción filial tan extraordinaria y sacrificada, envió a una de las hijas celestiales de la Reina Madre de Occidente —en algunas versiones, la propia Zhinu, la princesa tejedora— a descender a la tierra disfrazada de mujer mortal para casarse con Dong Yong y ayudarlo a saldar su deuda de esclavitud antes de tiempo. Trabajando con una velocidad y una habilidad sobrehumanas en el telar, la hada tejedora completó en una sola noche una cantidad de tela fina que a cualquier tejedora mortal le habría tomado meses enteros producir, permitiendo a Dong Yong pagar su libertad casi de inmediato. Cumplida su misión celestial, la hada debió regresar al cielo, dejando a Dong Yong con el recuerdo de una unión breve pero transformadora —la historia, conocida como Tian Xian Pei ("El emparejamiento del hada celestial"), se convirtió en una de las óperas populares chinas más representadas de todos los tiempos.`,
    origen: 'Joven huérfano de extrema piedad filial hacia su padre enfermo.',
    dominio: 'La piedad filial recompensada', naturaleza: 'Hombre mortal virtuoso', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-china'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-china" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando mortales de Mitologia China (parte 3)...\n');
  const libroId = await obtenerLibroId();

  for (const p of PERSONAJES) {
    const [existente] = await pool.query('SELECT id FROM personajes WHERE slug = ? AND libro_id = ?', [p.slug, libroId]);
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
