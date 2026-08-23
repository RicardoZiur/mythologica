// ============================================================
// scripts/ampliar-personajes-africana-parte2.js
// ------------------------------------------------------------
// Amplia heroes (10) y monstruos (12) de Mitologia Africana con un
// parrafo extra en descripcion_larga. Mismo criterio que
// ampliar-personajes-africana-parte1.js -- no toca simbolos/
// poderes/familia, ya poblados. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-africana-parte2.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- HEROES ---
  'sundiata-keita': `Su historia se transmite hasta hoy mediante el "Epic de Sundiata", una de las grandes epopeyas orales de África occidental, recitada de generación en generación por los griots, los narradores y músicos hereditarios encargados de preservar la memoria histórica de los pueblos mandinga. Bajo su gobierno, Malí adoptó además la "Carta de Kurukan Fuga", un conjunto de principios de convivencia y gobierno que algunos historiadores consideran una de las primeras declaraciones escritas de derechos y deberes cívicos de la historia africana, precediendo por siglos a documentos similares en otras regiones del mundo.`,
  'mansa-musa': `Además de su fama por la riqueza distribuida durante su peregrinación, Mansa Musa financió a su regreso la construcción de la célebre Mezquita de Djinguereber en Tombuctú, encargada al arquitecto andalusí Abu Ishaq al-Sahili, y convirtió a esa misma ciudad en un centro de manuscritos y estudios islámicos cuya prestigiosa Universidad de Sankoré llegaría a albergar, según estimaciones posteriores, decenas de miles de textos manuscritos que atraían estudiosos desde el norte de África y Oriente Medio.`,
  'shaka-zulu': `Su reinado, pese a su brevedad —apenas poco más de una década en el poder—, provocó un periodo de desplazamientos masivos de población conocido como el Mfecane ("la aplastadura"), cuando numerosos pueblos vecinos huyeron o se reorganizaron drásticamente para evitar el avance de sus ejércitos, redibujando el mapa étnico y político de buena parte del sur de África durante generaciones. Terminó asesinado en 1828 por su propio medio hermano Dingane, en una conspiración palaciega que reflejaba el creciente descontento interno ante la severidad cada vez mayor de su gobierno.`,
  'moremi-ajasoro': `Su figura se conmemora todavía hoy en Ile-Ife mediante una estatua monumental de bronce erigida en su honor, una de las más altas de toda Nigeria, y su nombre se emplea con frecuencia como referencia directa al valor femenino dentro de la cultura yoruba contemporánea. Distintas versiones del relato varían sobre la identidad exacta de los invasores que amenazaban la ciudad —algunas los identifican como el pueblo igbo vecino, otras simplemente como bandidos organizados—, aunque todas coinciden en el núcleo esencial de su sacrificio personal por el bienestar colectivo.`,
  'nzinga-mbandi': `Se convirtió al catolicismo en un momento de su vida, adoptando el nombre de Ana de Sousa, aunque sin abandonar jamás por completo las prácticas espirituales tradicionales de su propio pueblo, combinando ambas tradiciones según las necesidades políticas y personales de cada momento. Nzinga es honrada hoy en Angola como una de las grandes figuras fundacionales de la identidad nacional, con estatuas, billetes de moneda y una plaza principal de Luanda dedicados directamente a su memoria como símbolo de resistencia anticolonial.`,
  'yaa-asantewaa': `Tras su derrota y captura, fue exiliada por las autoridades coloniales británicas a la isla de Seychelles, en el océano Índico, donde permaneció hasta su muerte en 1921 sin volver jamás a pisar suelo ashanti. El propio Taburete de Oro que motivó todo el conflicto permanece hasta hoy como el objeto más sagrado y celosamente resguardado de toda la nación ashanti, jamás entregado a las autoridades coloniales pese a la derrota militar sufrida, una victoria simbólica que trasciende el resultado bélico inmediato del conflicto.`,
  'osei-tutu': `Antes de fundar el Imperio Ashanti, Osei Tutu había pasado parte de su juventud como rehén político en la corte del vecino reino de Denkyira, una experiencia que le permitió estudiar de cerca las estructuras administrativas y militares de un estado más consolidado, conocimiento que aplicaría después en la construcción de su propio imperio. Junto a Okomfo Anokye, estableció también el sistema de "abusua" o clanes matrilineales que organizaría durante siglos la sucesión política y la identidad social de todo el pueblo ashanti.`,
  behanzin: `Antes de asumir el trono, Behanzin llevaba el nombre de Kondo, y adoptó su nombre real al ser coronado, siguiendo la tradición dahomeyana de que cada nuevo rey recibiera una designación propia asociada a un animal totémico poderoso —en su caso, el tiburón, elegido precisamente por representar una fuerza capaz de dominar tanto la tierra como el mar. Tras su exilio y muerte en Argelia en 1906, sus restos fueron finalmente repatriados a Benín en 1928, donde reciben hasta hoy honores como uno de los grandes reyes de la historia nacional del país.`,
  'askia-mohammed': `Antes de su ascenso al trono, Askia Mohammed sirvió como general del ejército bajo Sunni Ali, el gobernante anterior al que finalmente derrocó por considerarlo insuficientemente comprometido con la práctica islámica ortodoxa. Bajo su gobierno, estableció un sistema de pesos y medidas estandarizado para el comercio, una administración provincial organizada en distritos con gobernadores designados directamente por la corte, y una marina fluvial permanente que patrullaba el río Níger, columna vertebral económica de todo el imperio.`,
  'samory-toure': `Fundó a lo largo de su campaña de resistencia dos imperios sucesivos, el primero centrado en Bissandugu y el segundo, tras verse obligado a desplazar toda su base de operaciones varios cientos de kilómetros hacia el este para escapar de la presión militar francesa, en torno a la región de Dabakala, una reubicación completa de un estado en movimiento que ilustra la magnitud excepcional de su capacidad organizativa. Su nieto, Ahmed Sékou Touré, se convertiría décadas después en el primer presidente de la Guinea independiente, continuando en cierto sentido el legado de resistencia de su propio abuelo.`,

  // --- MONSTRUOS ---
  grootslang: `Numerosos buscadores de diamantes que exploraron la región del Richtersveld sudafricano durante el siglo XX reportaron haber visto o escuchado a la criatura, alimentando la leyenda de manera continua hasta bien entrada la era moderna, en un territorio donde efectivamente se han descubierto yacimientos reales de diamantes que refuerzan la persistencia popular del mito. Algunas versiones sostienen que varios ejemplares, y no uno solo, lograron sobrevivir a la división original impuesta por los dioses, ocultos en distintas cuevas profundas repartidas por el sur de África.`,
  adze: `Se creía que un adze atrapado en su forma de luciérnaga podía ser interrogado directamente antes de destruirlo, revelando bajo presión la identidad de la persona que había sido poseída por él o convertida en bruja bajo su influencia. Las comunidades ewe recurrían tradicionalmente a rituales específicos de "limpieza" del hogar tras la sospecha de un ataque, quemando hierbas particulares cuyo humo se consideraba repelente eficaz contra su presencia nocturna.`,
  tikoloshe: `En la Sudáfrica contemporánea, el tikoloshe sigue siendo mencionado con frecuencia dentro de la cultura popular y hasta en reportes policiales de zonas rurales, donde ocasionalmente se le atribuyen sucesos inexplicables o travesuras domésticas menores. Algunos sangomas ofrecen todavía hoy servicios rituales específicos de protección contra su influencia, y la costumbre de elevar las camas sobre ladrillos se mantiene viva en determinadas comunidades como medida preventiva heredada de generación en generación.`,
  impundulu: `Se creía que la única manera segura de destruir definitivamente a un impundulu consistía en quemar por completo su cuerpo tras haberlo herido de muerte, ya que cualquier resto de sangre o pluma sin consumir por el fuego podía bastar para que la criatura regresara a la vida semanas o meses después. Las familias xhosa que sospechaban tener un impundulu heredado dentro de su propio linaje se enfrentaban tradicionalmente a un estigma social considerable, dado que se asumía automáticamente que alguna antepasada había practicado brujería para adquirirlo.`,
  aigamuxa: `Se creía que los aigamuxa vivían en pequeños grupos familiares dispersos entre las dunas más remotas del desierto, evitando en general el contacto con asentamientos humanos salvo cuando un viajero se aventuraba imprudentemente demasiado cerca de su territorio durante la noche. Algunas versiones de la tradición khoikhoi les atribuyen además una fuerza física considerable pese a su incómoda anatomía, capaces de alcanzar y someter a una presa pese a la torpeza aparente de su forma de desplazarse.`,
  popobawa: `Los episodios de actividad intensa del popobawa documentados en Zanzíbar durante las décadas de 1990 y 2000 coincidieron, según observaron distintos investigadores sociales, con periodos de tensión política o económica particularmente aguda en la isla, sugiriendo una posible función de la leyenda como válvula de escape colectiva ante ansiedades sociales más amplias y difíciles de nombrar directamente. Se le atribuye además la capacidad de aparecer bajo formas distintas según cada testigo, nunca exactamente igual dos veces, dificultando cualquier descripción física completamente uniforme de la criatura.`,
  'mokele-mbembe': `Distintas expediciones occidentales organizadas durante el siglo XX, incluidas varias financiadas por creacionistas interesados en encontrar evidencia de dinosaurios vivos, recorrieron la cuenca del Congo sin lograr jamás una confirmación científica concluyente de su existencia. Las comunidades locales de la región, sin embargo, mantienen relatos notablemente consistentes entre sí sobre avistamientos ocasionales, describiendo siempre un temperamento territorial pero fundamentalmente herbívoro, más interesado en defender su hábitat que en atacar deliberadamente a los humanos.`,
  'ninki-nanka': `Investigadores de campo que han recogido testimonios directos en aldeas de Gambia y Senegal durante las últimas décadas reportan una notable consistencia en los detalles básicos de la criatura pese a la distancia geográfica entre las comunidades consultadas, un patrón que algunos folcloristas interpretan como evidencia de una tradición oral genuinamente antigua y extendida, más que de invenciones aisladas y recientes. Los padres de la región siguen empleando su nombre como advertencia efectiva para mantener a los niños alejados de zonas pantanosas consideradas peligrosas por motivos completamente mundanos.`,
  abiku: `El escritor nigeriano Wole Soyinka, ganador del Premio Nobel de Literatura, dedicó un poema célebre precisamente titulado "Abiku", explorando desde la perspectiva del propio espíritu infantil la experiencia de este ciclo repetido de nacimiento y muerte, una de las incontables reelaboraciones artísticas modernas que esta figura tradicional ha inspirado dentro de la literatura africana contemporánea. El concepto encuentra un equivalente cercano dentro de la tradición igbo bajo el nombre de "ogbanje", con rituales de protección ligeramente distintos pero una lógica subyacente prácticamente idéntica.`,
  obayifo: `Se creía que un obayifo podía identificarse por ciertos signos físicos sutiles, incluidos ojos enrojecidos de manera persistente sin causa aparente, y que la brujería podía heredarse dentro de una misma familia a lo largo de varias generaciones sin que el individuo afectado fuera necesariamente consciente de su propia condición hasta una edad avanzada. Las comunidades akan tradicionales distinguían cuidadosamente entre la brujería practicada deliberadamente con intención maligna y otras formas de poder espiritual consideradas neutras o incluso beneficiosas, evitando acusaciones precipitadas sin evidencia ritual suficiente.`,
  eloko: `Se creía que los eloko preferían específicamente zonas de bosque donde crecían ciertos hongos comestibles apreciados por los propios cazadores humanos, generando un conflicto territorial directo entre ambos que explicaba, según la tradición, por qué determinadas áreas particularmente fértiles del bosque congoleño se consideraban tradicionalmente demasiado peligrosas para la recolección pese a su evidente abundancia de recursos.`,
  mamlambo: `Distintas versiones de la tradición xhosa y zulu describen a Mamlambo con un tamaño y una apariencia considerablemente variables según la región consultada, desde una serpiente de proporciones moderadas hasta una criatura de dimensiones comparables a un caballo grande, una inconsistencia que algunos investigadores atribuyen a la fusión progresiva de distintas tradiciones locales de espíritus acuáticos bajo un mismo nombre compartido a lo largo de los siglos.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-africana'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-africana".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando heroes y monstruos de Mitologia Africana (parte 2)...\n');
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
