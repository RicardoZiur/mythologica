// ============================================================
// scripts/sembrar-personajes-africana-parte3.js
// ------------------------------------------------------------
// Tercer lote de Mitologia Africana: 5 mortales -- figuras
// historicas o semi-legendarias de menor escala que los grandes
// fundadores de imperios, pero igualmente centrales en la
// tradicion oral. Contenido completo desde el inicio.
// Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-africana-parte3.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  {
    tipo: 'mortal', slug: 'balla-fasseke', nombre: 'Balla Fasseke', nombre_griego: 'Balla Fasseke',
    epitetos: 'El Primer Gran Griot de Malí',
    descripcion_corta: 'Griot y consejero personal de Sundiata Keita, considerado el fundador legendario del linaje de narradores orales encargados de preservar la historia de Malí.',
    descripcion_larga: `Balla Fasseke ocupa un lugar fundacional dentro de la tradición oral de África occidental como el griot personal asignado al joven Sundiata Keita por su propio padre, con la misión específica de acompañarlo durante toda su vida, aconsejarlo con sabiduría y, sobre todo, preservar y transmitir la memoria histórica de sus hazañas para las generaciones futuras. Los griots ocupan un papel social e institucional de enorme importancia dentro de numerosas culturas de África occidental, funcionando simultáneamente como historiadores orales, músicos, consejeros políticos y guardianes de la genealogía de las familias nobles a las que sirven, un rol que se transmite tradicionalmente de manera hereditaria dentro de linajes familiares específicos dedicados por completo a esa función.

Balla Fasseke permaneció leal a Sundiata incluso durante los años de exilio de este, y jugó un papel decisivo en distintos momentos cruciales de su historia, incluida la propia batalla de Kirina contra Sumanguru Kanté, donde, según distintas versiones de la epopeya, su conocimiento de ciertos secretos mágicos o su capacidad de comunicación estratégica resultaron determinantes para el desenlace favorable del enfrentamiento. Tras la victoria de Sundiata y la fundación del Imperio de Malí, Balla Fasseke fue honrado como el primer gran griot oficial de la nueva corte imperial, estableciendo con ello el linaje fundacional de los griots Kouyaté, una familia de narradores orales que, según la tradición, desciende directamente de él y que ha continuado transmitiendo de generación en generación, hasta la actualidad, la propia epopeya de Sundiata y la historia completa del Imperio de Malí, constituyendo uno de los ejemplos más notables y duraderos de preservación histórica mediante la tradición oral en toda la historia de África.`,
    origen: 'Griot personal de Sundiata Keita, fundador del linaje de griots Kouyaté.',
    dominio: 'La memoria histórica y la tradición oral', naturaleza: 'Griot legendario fundacional', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'yennenga', nombre: 'Yennenga', nombre_griego: 'Yennenga',
    epitetos: 'La Princesa Guerrera, Madre Ancestral del Pueblo Mossi',
    descripcion_corta: 'Princesa guerrera que huyó a caballo de un padre que se negaba a dejarla casar, y cuyo hijo se convirtió en el fundador legendario del pueblo mossi de Burkina Faso.',
    descripcion_larga: `Yennenga es recordada dentro de la tradición oral del actual Burkina Faso como una princesa guerrera de habilidad excepcional, hija de un poderoso rey del pueblo dagomba, entrenada desde joven en el manejo de las armas y la equitación hasta convertirse en una de las combatientes más temidas y respetadas del ejército de su propio padre. Pese a su destreza militar reconocida, su padre se negaba sistemáticamente a permitirle casarse, temeroso de perder tanto a su hija como a una de sus mejores guerreras si esta abandonaba la corte para formar su propia familia, una negativa que Yennenga, ya adulta y frustrada por esa restricción prolongada, decidió finalmente desafiar por su propia cuenta.

Según la tradición, Yennenga escapó de la corte de su padre montada en su propio caballo, viajando sola durante días a través de territorio desconocido hasta encontrarse por casualidad con Riale, un cazador solitario que vivía apartado de cualquier asentamiento organizado, con quien formó finalmente una relación y tuvo un hijo, al que llamó Ouedraogo, nombre que en la lengua mossi significa "caballo semental", en honor directo al animal que la había ayudado a alcanzar la libertad que su padre le negaba. Ouedraogo, criado por su madre con el mismo espíritu independiente y guerrero que ella misma poseía, creció hasta convertirse en el fundador legendario del pueblo mossi, estableciendo los principados que con el tiempo se consolidarían en los reinos mossi históricos de la región. Yennenga es honrada hasta hoy como la madre ancestral simbólica de todo el pueblo mossi, y su figura, asociada permanentemente con la independencia femenina y la determinación frente a las restricciones impuestas, sigue siendo un símbolo cultural de enorme importancia en Burkina Faso, presente incluso en el nombre del festival de cine más prestigioso del país, el FESPACO, cuyo premio máximo lleva precisamente su nombre.`,
    origen: 'Princesa guerrera del pueblo dagomba, madre ancestral legendaria del pueblo mossi.',
    dominio: 'La independencia guerrera y la fundación de un pueblo', naturaleza: 'Princesa guerrera y ancestra legendaria', es_preview: 1
  },
  {
    tipo: 'mortal', slug: 'amina-de-zazzau', nombre: 'Amina de Zazzau', nombre_griego: 'Amina de Zazzau',
    epitetos: 'La Reina Guerrera Hausa',
    descripcion_corta: 'Reina histórica del reino hausa de Zazzau, célebre por sus décadas de conquista militar y por fortificar con murallas defensivas las ciudades bajo su dominio.',
    descripcion_larga: `Amina fue reina del reino hausa de Zazzau, en el territorio del actual norte de Nigeria, activa según las fuentes históricas más aceptadas durante el siglo XVI, recordada por la tradición hausa como una gobernante y estratega militar de una capacidad excepcional, poco común entre las mujeres gobernantes documentadas de la región en esa época. Formada desde joven en las artes militares dentro de la corte de su propia familia, Amina asumió el trono de Zazzau y emprendió de inmediato una serie de campañas militares expansivas que extendieron considerablemente el territorio y la influencia comercial del reino a lo largo de las rutas comerciales trans-saharianas de la región.

Se le atribuye la construcción de una extensa red de murallas defensivas de tierra apisonada alrededor de las ciudades bajo su control, conocidas hasta hoy en la región como "las murallas de Amina", una innovación defensiva que protegía eficazmente a las poblaciones urbanas frente a ataques externos y que se mantuvo en uso durante generaciones posteriores a su propio reinado, con vestigios arqueológicos de algunas de estas fortificaciones sobreviviendo parcialmente hasta la actualidad. Bajo su liderazgo, Zazzau se consolidó como una potencia comercial y militar de peso considerable dentro de la región hausa, controlando puntos estratégicos de las rutas comerciales que conectaban el norte de África con el interior del continente. La figura de Amina de Zazzau, transmitida durante siglos a través de la tradición oral hausa además de las crónicas históricas conservadas, se ha convertido con el tiempo en un símbolo ampliamente reconocido del liderazgo femenino africano, honrada en el Nigeria contemporáneo mediante estatuas, instituciones y referencias culturales que mantienen viva su memoria como una de las grandes gobernantes guerreras de la historia precolonial de África occidental.`,
    origen: 'Reina histórica del reino hausa de Zazzau, siglo XVI.',
    dominio: 'La conquista militar y la fortificación defensiva', naturaleza: 'Reina guerrera histórica', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'kimpa-vita', nombre: 'Kimpa Vita', nombre_griego: 'Dona Beatriz Kimpa Vita',
    epitetos: 'La Profetisa que Desafió a Roma',
    descripcion_corta: 'Profetisa del Reino de Kongo que, tras afirmar poseer visiones de San Antonio, lideró un movimiento religioso que buscaba restaurar la unidad de un reino fracturado por la guerra.',
    descripcion_larga: `Kimpa Vita nació hacia finales del siglo XVII dentro del Reino de Kongo, un antiguo estado africano en el territorio de las actuales Angola y República Democrática del Congo que, para la época de su nacimiento, se encontraba sumido en una profunda crisis política tras décadas de guerras civiles internas que habían fragmentado gravemente lo que en su momento de mayor esplendor había sido uno de los reinos más poderosos y organizados de todo el África centro-occidental. Educada dentro de la tradición del catolicismo que el Reino de Kongo había adoptado ya desde el siglo XV a través del contacto con Portugal, Kimpa Vita se convirtió, siendo joven, en una sanadora tradicional respetada dentro de su propia comunidad.

Hacia 1704, Kimpa Vita comenzó a proclamar que había recibido visiones directas de San Antonio de Padua, quien le habría revelado que Jesucristo, María y el propio San Antonio habían nacido en realidad dentro del territorio de Kongo, y que la restauración de la unidad y la grandeza del reino fragmentado formaba parte de la voluntad divina que le había sido revelada. Este movimiento religioso, conocido posteriormente como antonianismo, ganó un apoyo popular considerable entre una población agotada por décadas de guerra civil, y Kimpa Vita llegó a liderar directamente esfuerzos concretos para reunificar la antigua capital abandonada de Mbanza Kongo bajo su propio liderazgo espiritual. Las autoridades eclesiásticas católicas europeas presentes en la región, alarmadas por lo que consideraban una herejía peligrosa que amenazaba su autoridad religiosa establecida, la acusaron formalmente de brujería y hechicería, y tras un juicio, Kimpa Vita fue condenada y ejecutada en la hoguera en 1706, todavía joven. Su figura ha sido reivindicada en las últimas décadas como una de las primeras líderes religiosas africanas en desafiar abiertamente la autoridad eclesiástica colonial europea, y su historia sigue siendo estudiada como un ejemplo temprano y significativo de resistencia espiritual africana frente a la imposición religiosa extranjera.`,
    origen: 'Profetisa del Reino de Kongo, líder del movimiento antonianista, finales del siglo XVII.',
    dominio: 'La profecía religiosa y la resistencia espiritual', naturaleza: 'Profetisa histórica del Reino de Kongo', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'idia', nombre: 'Idia', nombre_griego: 'Iyoba Idia',
    epitetos: 'La Primera Reina Madre de Benín',
    descripcion_corta: 'Guerrera y estratega cuyo apoyo decisivo permitió a su hijo asegurar el trono del Reino de Benín, convirtiéndose en la primera en ostentar el título de reina madre.',
    descripcion_larga: `Idia fue madre del oba (rey) Esigie, gobernante del histórico Reino de Benín, en el territorio del actual sur de Nigeria, durante los primeros años del siglo XVI, un periodo marcado por una intensa disputa dinástica entre Esigie y su propio hermano por el control del trono, además de conflictos militares externos considerables contra el vecino reino de Igala. Idia, dotada de una capacidad estratégica y militar excepcional, desempeñó un papel absolutamente decisivo en asegurar tanto el trono como la supervivencia del reino durante ese periodo crítico, participando activamente en la planificación militar y, según distintas tradiciones orales de Benín, incluso empleando poderes espirituales y místicos propios para fortalecer las campañas de su hijo contra sus adversarios.

En reconocimiento directo por su papel decisivo, Esigie, ya consolidado en el trono, instituyó en honor a su madre el título permanente de Iyoba, "reina madre", convirtiendo a Idia en la primera mujer en ostentar oficialmente esa dignidad dentro de la estructura política del Reino de Benín, un título que desde entonces pasaría a ocupar un lugar formal y permanente dentro de la corte, otorgado tradicionalmente a la madre de cada nuevo oba que ascendiera al trono. La imagen de Idia quedó inmortalizada de manera extraordinaria en el arte de Benín, particularmente a través de las célebres máscaras de marfil que representan su rostro, entre ellas la conocida internacionalmente como la "Máscara de la Reina Idia", pieza de un valor artístico e histórico excepcional que, junto a numerosos bronces de Benín, fue saqueada por las fuerzas británicas durante la expedición punitiva de 1897 y permanece hasta hoy, en gran parte, dispersa en museos europeos, un asunto de restitución cultural que continúa siendo objeto de debate y reclamo activo por parte de Nigeria hasta la actualidad.`,
    origen: 'Madre del oba Esigie, primera reina madre (Iyoba) del Reino de Benín, siglo XVI.',
    dominio: 'La estrategia militar y la fundación de la dignidad de reina madre', naturaleza: 'Reina madre histórica de Benín', es_preview: 1
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-africana'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-africana" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando mortales de Mitologia Africana (parte 3)...\n');
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
