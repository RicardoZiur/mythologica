// ============================================================
// scripts/sembrar-personajes-demonologia-parte3.js
// ------------------------------------------------------------
// Tercer lote de Demonologia: 5 mortales -- figuras historicas
// reales asociadas a casos documentados de posesion, caza de
// brujas o exorcismo. Tratados con el mismo criterio historico y
// respetuoso que el resto del catalogo, sin sensacionalismo.
// Contenido completo desde el inicio. Idempotente via slug
// (personajes.slug es UNICO A NIVEL GLOBAL).
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-demonologia-parte3.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  {
    tipo: 'mortal', slug: 'urbain-grandier', nombre: 'Urbain Grandier', nombre_griego: 'Urbain Grandier',
    epitetos: 'El Sacerdote Ejecutado por Brujería',
    descripcion_corta: 'Sacerdote francés del siglo XVII condenado y ejecutado por presunta brujería tras el famoso caso de posesión colectiva de las monjas de Loudun, en un proceso hoy considerado profundamente injusto.',
    descripcion_larga: `Urbain Grandier, sacerdote católico carismático y culto de la ciudad francesa de Loudun durante las primeras décadas del siglo XVII, se convirtió en el centro de uno de los episodios de posesión demoníaca colectiva más documentados y estudiados de toda la historia europea. En 1632, varias religiosas del convento local de ursulinas, encabezadas por su superiora Sor Jeanne des Anges, comenzaron a manifestar comportamientos atribuidos a posesión demoníaca —convulsiones violentas, contorsiones extremas, blasfemias pronunciadas con voces alteradas— y acusaron directamente a Grandier de haberlas hechizado mediante un pacto demoníaco deliberado.

El contexto detrás de esas acusaciones resulta considerablemente más complejo que un simple caso espontáneo de posesión sobrenatural: Grandier había acumulado enemistades poderosas dentro de la propia jerarquía eclesiástica y política local, en parte debido a su carácter combativo y sus relaciones personales controvertidas, y numerosos historiadores modernos consideran que el proceso que se le siguió estuvo motivado en gran medida por intereses políticos y personales de sus adversarios más que por evidencia genuina de brujería. Sometido a un juicio marcado por testimonios contradictorios, torturas destinadas a extraer confesiones y la participación de exorcistas cuya objetividad ha sido cuestionada repetidamente por la investigación histórica posterior, Grandier fue finalmente declarado culpable y ejecutado en la hoguera en 1634, tras ser sometido previamente a torturas físicas severas. El caso de las posesiones de Loudun se convirtió con el tiempo en objeto de estudio recurrente tanto para historiadores de la religión como para psiquiatras interesados en los fenómenos de histeria colectiva, y ha inspirado numerosas obras literarias, teatrales y cinematográficas posteriores, entre ellas la célebre novela de Aldous Huxley "Los demonios de Loudun".`,
    origen: 'Sacerdote católico francés, ejecutado en 1634 tras el caso de posesión de Loudun.',
    dominio: 'La víctima trágica de una acusación de brujería políticamente motivada', naturaleza: 'Figura histórica del siglo XVII', es_preview: 1
  },
  {
    tipo: 'mortal', slug: 'jeanne-des-anges', nombre: 'Sor Jeanne des Anges', nombre_griego: 'Jeanne des Anges',
    epitetos: 'La Superiora Poseída de Loudun',
    descripcion_corta: 'Superiora del convento de ursulinas de Loudun, cuyas manifestaciones de posesión desataron el juicio contra Urbain Grandier, y que años después se convirtió en objeto de veneración popular.',
    descripcion_larga: `Sor Jeanne des Anges ocupaba el cargo de superiora del convento de ursulinas de Loudun cuando, en 1632, comenzó a manifestar junto a otras religiosas del mismo convento síntomas atribuidos por las autoridades eclesiásticas de la época a la posesión demoníaca directa: convulsiones violentas e incontrolables, contorsiones corporales extremas, un lenguaje blasfemo pronunciado con voces alteradas que sus contemporáneos consideraban imposibles de producir con las cuerdas vocales humanas ordinarias, y acusaciones específicas dirigidas contra el sacerdote local Urbain Grandier, señalado como responsable directo de haber enviado a los demonios que la poseían mediante un pacto de brujería deliberado.

Sor Jeanne se convirtió así en la figura central y más visible de todo el proceso judicial que culminaría con la ejecución de Grandier en 1634, sometida ella misma durante los años siguientes a repetidos exorcismos públicos que, lejos de mantenerse dentro de la esfera estrictamente religiosa, se transformaron en auténticos espectáculos públicos que atraían a espectadores curiosos desde regiones considerablemente alejadas de Loudun, un fenómeno que numerosos historiadores posteriores han estudiado como ejemplo temprano y significativo de la espectacularización pública de la posesión demoníaca. Años después del proceso y la ejecución de Grandier, Sor Jeanne relató haber experimentado una curación milagrosa tras la intervención directa, según sus propias palabras, de San José y del propio Cristo, y emprendió posteriormente una peregrinación pública que la convirtió, para sorpresa de muchos, en objeto de considerable veneración popular durante el resto de su vida, un giro final notable en la trayectoria de una mujer cuyas manifestaciones habían desencadenado originalmente la muerte de un hombre inocente según el juicio de la historiografía moderna.`,
    origen: 'Superiora del convento de ursulinas de Loudun, protagonista de las posesiones de 1632.',
    dominio: 'La posesión colectiva y su posterior veneración popular', naturaleza: 'Figura histórica del siglo XVII', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'matthew-hopkins', nombre: 'Matthew Hopkins', nombre_griego: 'Matthew Hopkins',
    epitetos: 'El Cazador General de Brujas',
    descripcion_corta: 'Autoproclamado "Cazador General de Brujas" inglés del siglo XVII cuyas campañas de acusación, tortura y ejecución llevaron a la muerte a más presuntas brujas que ningún otro individuo en la historia inglesa.',
    descripcion_larga: `Matthew Hopkins, hijo de un clérigo puritano inglés, se autoproclamó hacia 1644 "Cazador General de Brujas" (Witchfinder General), un título sin autoridad oficial real que sin embargo le permitió recorrer durante los dos años siguientes numerosos condados del este de Inglaterra, en pleno contexto de inestabilidad política y social provocado por la Guerra Civil Inglesa, ofreciendo sus servicios de identificación de brujas a comunidades locales a cambio de una considerable compensación económica por cada acusada que lograra hacer condenar mediante sus métodos.

Hopkins desarrolló y popularizó diversas técnicas específicas para "identificar" a presuntas brujas que, aunque presentadas como métodos científicos objetivos de la época, constituían en la práctica formas severas de tortura psicológica y física: la privación prolongada de sueño hasta provocar confesiones delirantes, la búsqueda minuciosa sobre el cuerpo de la acusada de la llamada "marca del diablo" (cualquier lunar, verruga o marca de nacimiento interpretada como prueba de un pacto demoníaco), y la infame "prueba del agua", en la que se ataba a la acusada y se la arrojaba a un cuerpo de agua bajo la lógica perversa de que si flotaba, ello demostraba que el agua bendita la rechazaba por su naturaleza demoníaca, mientras que si se hundía, se consideraba probada su inocencia, aunque con el riesgo evidente de morir ahogada en el proceso. Se estima que la campaña de Hopkins resultó directamente en la ejecución de varios cientos de personas, la cifra más alta atribuida a un solo individuo en toda la historia de la caza de brujas inglesa, hasta que su propia carrera terminó abruptamente hacia 1647, presumiblemente debido a su muerte por tuberculosis, aunque algunas versiones populares posteriores, sin base histórica sólida, sugirieron que él mismo habría sido sometido finalmente a la prueba del agua que tanto había empleado contra otros.`,
    origen: 'Autoproclamado "Cazador General de Brujas" en la Inglaterra del siglo XVII.',
    dominio: 'La persecución sistemática y las técnicas de tortura judicial', naturaleza: 'Figura histórica del siglo XVII', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'cotton-mather', nombre: 'Cotton Mather', nombre_griego: 'Cotton Mather',
    epitetos: 'El Predicador de los Juicios de Salem',
    descripcion_corta: 'Influyente predicador puritano de Massachusetts cuyos escritos sobre la brujería y el mundo invisible contribuyeron al clima que desató los infames Juicios de Brujas de Salem en 1692.',
    descripcion_larga: `Cotton Mather, prominente ministro puritano y una de las figuras intelectuales más influyentes de la colonia de la Bahía de Massachusetts durante finales del siglo XVII, publicó en 1689 su obra "Memorable Providences Relating to Witchcrafts and Possessions", un tratado que documentaba con detalle un caso concreto de presunta posesión demoníaca ocurrido en Boston, y que contribuyó de manera significativa a consolidar dentro de la sociedad puritana de Nueva Inglaterra un clima de ansiedad religiosa profunda respecto a la presencia activa y cercana del mundo demoníaco dentro de la vida cotidiana de la colonia.

Cuando estallaron los infames Juicios de Brujas de Salem en 1692, en los que decenas de personas fueron acusadas y veinte finalmente ejecutadas bajo acusaciones de brujería en un episodio que se convertiría en uno de los capítulos más estudiados y debatidos de toda la historia colonial norteamericana, Cotton Mather desempeñó un papel considerablemente influyente, aunque matizado y objeto de debate historiográfico continuado: si bien no participó directamente como juez en los procesos, sus escritos previos habían contribuido decisivamente a preparar el terreno intelectual y religioso para la crisis, y durante el desarrollo mismo de los juicios expresó opiniones ambivalentes, defendiendo en general la realidad objetiva de la brujería y la validez de ciertas pruebas espectrales empleadas en los procesos, mientras que simultáneamente advertía en algunos de sus propios escritos sobre los riesgos de basar condenas exclusivamente en ese tipo de evidencia poco fiable. Tras el final abrupto de los juicios, su padre, Increase Mather, publicó un tratado más explícitamente crítico contra el uso de la evidencia espectral, y la propia figura de Cotton Mather quedó marcada de manera permanente en la memoria histórica estadounidense por su compleja y controvertida relación con uno de los episodios más oscuros de la historia colonial temprana del país.`,
    origen: 'Influyente predicador puritano de la colonia de la Bahía de Massachusetts, siglo XVII.',
    dominio: 'La teología puritana del mundo invisible y la brujería', naturaleza: 'Figura histórica del siglo XVII', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'anneliese-michel', nombre: 'Anneliese Michel', nombre_griego: 'Anneliese Michel',
    epitetos: 'El Caso que Conmocionó a Alemania',
    descripcion_corta: 'Joven alemana que, tras años de exorcismos aprobados por la Iglesia Católica para tratar lo que consideraba una posesión demoníaca, falleció en 1976 por desnutrición extrema, en un caso que sigue siendo objeto de debate.',
    descripcion_larga: `Anneliese Michel fue una joven católica alemana que, desde su adolescencia durante la década de 1960, comenzó a experimentar episodios severos de convulsiones, alucinaciones y comportamientos que ella y su familia, profundamente religiosos, interpretaron progresivamente como manifestaciones de posesión demoníaca, pese a que también recibió, a lo largo de esos mismos años, diversos diagnósticos médicos y psiquiátricos que incluían epilepsia del lóbulo temporal y trastornos psicóticos, un tratamiento médico convencional que finalmente resultó insuficiente para aliviar sus síntomas o que la propia familia terminó abandonando en favor de una explicación exclusivamente espiritual de su condición.

Tras años de sufrimiento sostenido, la familia obtuvo finalmente autorización de la Iglesia Católica local para realizar un rito formal de exorcismo, que fue conducido durante aproximadamente diez meses, entre 1975 y 1976, por dos sacerdotes autorizados mediante sesiones repetidas que, según los registros conservados de esos mismos rituales, se prolongaron considerablemente sin lograr resultado positivo alguno. Durante ese periodo, Anneliese dejó progresivamente de alimentarse de manera adecuada, y su estado físico se deterioró de forma alarmante hasta que finalmente falleció en julio de 1976, a los veintitrés años de edad, por las consecuencias directas de una desnutrición y deshidratación extremas, pesando apenas una fracción de su peso corporal saludable en el momento de su muerte. Sus padres y los dos sacerdotes que habían conducido el exorcismo fueron posteriormente juzgados y condenados por homicidio negligente, en un proceso judicial que generó un debate público considerable en Alemania y más allá sobre los límites entre la fe religiosa, la responsabilidad médica y el tratamiento adecuado de enfermedades mentales graves. El caso, ampliamente documentado y estudiado desde entonces, ha servido posteriormente como base directa o indirecta para diversas obras cinematográficas contemporáneas centradas en el tema del exorcismo.`,
    origen: 'Joven católica alemana fallecida en 1976 tras un prolongado exorcismo.',
    dominio: 'El límite trágico entre la fe, la enfermedad y el exorcismo', naturaleza: 'Figura histórica del siglo XX', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'demonologia'");
  if (filas.length === 0) throw new Error('No existe el libro "demonologia" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando mortales de Demonologia (parte 3)...\n');
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
