// ============================================================
// scripts/sembrar-personajes-japonesa-parte3.js
// ------------------------------------------------------------
// Tercer y ultimo lote de personajes de Mitologia Japonesa: 5
// mortales (figuras historico-legendarias ligadas a los mitos de
// heroes y yokai). Contenido completo desde el inicio, igual que
// las partes 1 y 2. Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-japonesa-parte3.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  {
    tipo: 'mortal', slug: 'jingu', nombre: 'Emperatriz Jingū', nombre_griego: 'Jingū Kōgō',
    epitetos: 'La Emperatriz Guerrera',
    descripcion_corta: 'Legendaria emperatriz regente que, guiada por los kami, lideró una expedición de conquista sobre la península de Corea llevando a su hijo aún en el vientre.',
    descripcion_larga: `Según el Kojiki y el Nihon Shoki, la emperatriz Jingū gobernó Japón como regente tras la muerte de su esposo, el emperador Chūai, quien había ignorado un oráculo divino que le ordenaba invadir los reinos de la península coreana y murió poco después, según algunas versiones como castigo directo por su desobediencia. Jingū, en cambio, escuchó el mensaje de los kami y, embarazada de su propio hijo, decidió emprender ella misma la expedición prometida, atándose una piedra a la cintura —según la leyenda— para retrasar mágicamente el parto hasta que la campaña militar hubiera concluido con éxito.

Se le atribuye haber cruzado el mar hasta Corea con el favor directo de Ryūjin, el dios dragón del océano, que le habría prestado las mismas joyas mágicas de marea usadas generaciones antes por Hoori para someter olas y corrientes a su voluntad, sometiendo a los reinos coreanos sin apenas resistencia armada gracias a ese control sobrenatural sobre el mar. A su regreso a Japón, dio finalmente a luz al futuro emperador Ōjin, que más tarde sería deificado como Hachiman, el gran kami de la guerra. Aunque los historiadores modernos consideran en su mayoría legendaria esta expedición o, en el mejor de los casos, una exageración mítica de contactos diplomáticos y comerciales reales con la península, la figura de Jingū se mantuvo durante siglos como modelo de liderazgo femenino excepcional dentro de la tradición imperial japonesa.`,
    origen: 'Emperatriz regente de Japón, viuda del emperador Chūai.',
    dominio: 'La guerra naval y el liderazgo regente', naturaleza: 'Emperatriz legendaria', es_preview: 1
  },
  {
    tipo: 'mortal', slug: 'watanabe-no-tsuna', nombre: 'Watanabe no Tsuna', nombre_griego: 'Watanabe no Tsuna',
    epitetos: 'El Guerrero de la Puerta Rashōmon',
    descripcion_corta: 'Legendario samurái, uno de los Cuatro Reyes Guardianes de Minamoto no Yorimitsu — célebre por cortarle el brazo a un oni en la puerta Rashōmon de Kioto.',
    descripcion_larga: `Watanabe no Tsuna fue, según la tradición, el más hábil con la espada entre los cuatro retenedores más leales de Minamoto no Yorimitsu, un grupo conocido colectivamente como los Shitennō ("Cuatro Reyes Guardianes") en honor a las cuatro divinidades budistas guardianas de los puntos cardinales, y participó junto a ellos en la célebre expedición contra el oni Shuten-dōji en el monte Ōe. Su hazaña más recordada, sin embargo, ocurrió por separado: enviado una noche a cumplir un recado en la antigua puerta Rashōmon, en el límite sur de la capital Heian, un lugar ya entonces temido por su fama de estar infestado de espíritus y demonios.

Al cruzar la puerta, una mano gigantesca surgió de la oscuridad y sujetó a Watanabe no Tsuna por el casco, intentando arrastrarlo hacia arriba; sin perder la calma, el guerrero desenvainó su espada Higekiri y cortó de un solo tajo el brazo completo que lo sujetaba, ahuyentando a la criatura —revelada después como un oni disfrazado— hacia la noche. Watanabe no Tsuna conservó el brazo cercenado como trofeo, guardado bajo estricta vigilancia dentro de una caja sellada, hasta que el propio oni, disfrazado esta vez de una anciana tía del guerrero, lo visitó pidiendo ver el brazo por curiosidad familiar y, al recuperarlo entre sus manos, reveló su verdadera forma y escapó volando por una ventana, llevándose consigo la extremidad perdida ante la mirada atónita de todos los presentes.`,
    origen: 'Uno de los Cuatro Reyes Guardianes (Shitennō) de Minamoto no Yorimitsu.',
    dominio: 'El combate contra los oni', naturaleza: 'Samurái legendario', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'minamoto-no-yorimitsu', nombre: 'Minamoto no Yorimitsu', nombre_griego: 'Minamoto no Yorimitsu (Raikō)',
    epitetos: 'El Cazador de Demonios',
    descripcion_corta: 'El más célebre guerrero cazador de yokai de la historia legendaria japonesa — lideró la expedición que decapitó al señor demonio Shuten-dōji.',
    descripcion_larga: `Minamoto no Yorimitsu, conocido también por la lectura alternativa de su nombre, Raikō, fue un noble y comandante militar del periodo Heian cuya figura histórica real se entrelazó con el tiempo con tantas leyendas sobrenaturales que terminó convertido en el cazador de yokai por excelencia de todo el folclore japonés. Rodeado siempre de sus cuatro retenedores más leales —los Shitennō, entre ellos Watanabe no Tsuna y Sakata Kintoki, el adulto Kintarō—, protagonizó algunas de las hazañas más citadas contra criaturas sobrenaturales de toda la tradición literaria japonesa.

Su enfrentamiento más célebre fue la expedición contra Shuten-dōji, el señor de los oni del monte Ōe: disfrazado de monje peregrino junto a sus retenedores, Yorimitsu logró infiltrarse en la fortaleza del demonio, ganarse su confianza con regalos de sake, y finalmente decapitarlo mientras dormía embriagado gracias a un narcótico divino oculto en la bebida. También se le atribuye, en un relato posterior, haber sido atacado en su propio lecho de enfermo por Tsuchigumo, la araña gigante disfrazada de monje, a la que hirió con su espada Hizamaru antes de que sus retenedores completaran la caza siguiendo el rastro de sangre hasta su guarida. Por estas hazañas combinadas, Yorimitsu se convirtió en modelo literario y teatral recurrente durante siglos, protagonista habitual del teatro kabuki y noh dedicado a relatos de cacería de demonios.`,
    origen: 'Noble y comandante militar del periodo Heian, líder de los Shitennō.',
    dominio: 'La caza de demonios y yokai', naturaleza: 'Guerrero legendario cazador de monstruos', es_preview: 1
  },
  {
    tipo: 'mortal', slug: 'abe-no-seimei', nombre: 'Abe no Seimei', nombre_griego: 'Abe no Seimei',
    epitetos: 'El Hijo de la Zorra, Maestro del Onmyōdō',
    descripcion_corta: 'El más célebre hechicero onmyōji de la historia japonesa, dotado de poderes sobrenaturales que la leyenda atribuye a su madre, un espíritu zorro.',
    descripcion_larga: `Abe no Seimei fue un astrólogo y hechicero real de la corte Heian del siglo X, maestro del onmyōdō, un sistema de adivinación, astrología y control de espíritus basado en la filosofía china del yin y el yang adaptada a la práctica japonesa. Su fama en vida fue tan extraordinaria que generó de inmediato un ciclo completo de leyendas sobre su origen sobrenatural: la tradición popular sostiene que su madre era en realidad Kuzunoha, un espíritu zorro (kitsune) que había adoptado forma humana para casarse con su padre, y que abandonó a la familia el día en que su verdadera naturaleza fue descubierta por su propio hijo pequeño, dejándole como legado poderes sobrehumanos de percepción y control espiritual heredados de su sangre zorruna.

Se le atribuyen decenas de hazañas legendarias: comandaba shikigami, espíritus invisibles y obedientes capaces de ejecutar tareas complejas a su orden, podía percibir la verdadera naturaleza oculta detrás de cualquier disfraz sobrenatural —incluida, según algunas versiones tardías, la propia Tamamo-no-Mae antes de su exposición pública—, y protegía activamente al emperador y a la corte imperial de maldiciones y ataques espirituales mediante rituales de purificación extraordinariamente elaborados. Su santuario, el Seimei Jinja en Kioto, sigue recibiendo hoy visitantes que buscan protección contra la mala suerte, marcado con su símbolo personal característico: una estrella de cinco puntas conocida como gobōsei, todavía asociada en Japón a la protección espiritual y el equilibrio cósmico.`,
    origen: 'Astrólogo real de la corte Heian, hijo legendario de un espíritu zorro.',
    dominio: 'La adivinación y el control espiritual', naturaleza: 'Hechicero onmyōji legendario', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'takenouchi-no-sukune', nombre: 'Takenouchi no Sukune', nombre_griego: 'Takenouchi no Sukune',
    epitetos: 'El Ministro de los Cinco Emperadores',
    descripcion_corta: 'Legendario ministro de una longevidad extraordinaria, dicho haber servido lealmente a cinco emperadores sucesivos a lo largo de varios siglos.',
    descripcion_larga: `Takenouchi no Sukune ocupa un lugar único dentro de la tradición histórico-legendaria japonesa como el funcionario de mayor longevidad jamás registrada en las crónicas imperiales: según el Kojiki y otras fuentes tradicionales, sirvió como consejero y ministro leal a lo largo del reinado de cinco emperadores consecutivos, una cronología que, tomada literalmente, implicaría una vida de más de tres siglos de duración. Fue precisamente Takenouchi no Sukune quien acompañó y aconsejó a la emperatriz Jingū durante su legendaria expedición naval a Corea, ayudándola a interpretar correctamente los designios de los kami que guiaban la campaña.

Su figura se convirtió con el tiempo en símbolo japonés de la lealtad ministerial ejemplar y la sabiduría acumulada durante una vida extraordinariamente larga, y su imagen —representado siempre como un anciano de barba blanca extensísima, sosteniendo a menudo en brazos al infante que sería el futuro emperador Ōjin bajo su tutela— llegó a aparecer en los billetes de banco japoneses de distintas denominaciones entre finales del siglo XIX y mediados del XX, un honor reservado a muy pocas figuras de la historia o la leyenda nacional. Los historiadores modernos consideran probable que su nombre represente en realidad una fusión legendaria de varios ministros distintos a lo largo de generaciones, condensados con el tiempo en una sola figura longeva capaz de servir de puente narrativo entre reinados imperiales muy alejados entre sí.`,
    origen: 'Legendario ministro de la corte imperial, consejero de la emperatriz Jingū.',
    dominio: 'La lealtad ministerial y la longevidad', naturaleza: 'Anciano consejero legendario', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-japonesa'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-japonesa" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando mortales de Mitologia Japonesa (parte 3)...\n');
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
