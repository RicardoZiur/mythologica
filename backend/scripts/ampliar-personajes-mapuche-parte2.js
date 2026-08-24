// ============================================================
// scripts/ampliar-personajes-mapuche-parte2.js
// ------------------------------------------------------------
// Amplia heroes (10) y monstruos (12) de Mitologia Mapuche con un
// parrafo extra en descripcion_larga. Mismo criterio que
// ampliar-personajes-mapuche-parte1.js -- ver ese archivo para el
// detalle del patron. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-mapuche-parte2.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- HEROES ---
  lautaro: `De niño fue capturado y obligado a servir personalmente al conquistador Pedro de Valdivia como paje y palafrenero durante varios años, tiempo en el que aprendió de primera mano las tácticas de caballería y organización militar española antes de escapar para liderar la resistencia. Ese conocimiento directo del enemigo desde adentro explica en gran medida las innovaciones tácticas que después le permitieron derrotarlo repetidamente en el campo de batalla.`,
  caupolican: `Tras su captura en 1558 fue ejecutado por los españoles mediante empalamiento, un castigo de tal crueldad que incluso cronistas españoles de la época lo registraron con horror. Su figura se convirtió en símbolo fundacional de la resistencia mapuche gracias en gran parte a "La Araucana", el poema épico de Alonso de Ercilla considerado la primera gran obra literaria de la historia colonial chilena.`,
  'colo-colo': `Su nombre fue adoptado en 1925 por el club de fútbol más popular de Chile, Colo-Colo, invocándolo explícitamente como símbolo de resistencia y espíritu indomable. Su legado mítico permanece así genuinamente presente en la cultura popular chilena contemporánea, mucho más allá de los libros de historia.`,
  galvarino: `Tras ser capturado junto a otros guerreros y mutilado por los españoles como método de amedrentamiento, fue liberado deliberadamente para difundir el miedo entre su propio pueblo; en cambio, regresó a luchar de nuevo, convirtiendo el castigo en un fracaso propagandístico para sus captores. Su historia también quedó inmortalizada en "La Araucana" de Alonso de Ercilla.`,
  fresia: `A diferencia de figuras históricas mejor documentadas como Janequeo, la mayoría de los historiadores considera que Fresia es principalmente una invención o un embellecimiento literario de Alonso de Ercilla dentro de "La Araucana", más que una figura registrada de forma independiente en otras fuentes de la época, un recordatorio de cuánto de la narrativa personal de este período llega hasta hoy filtrada por la pluma española antes que por el registro oral indígena.`,
  guacolda: `Al igual que Fresia, su figura llega principalmente a través del poema de Ercilla. Pese a ese origen literario, su nombre terminó calando profundamente en la toponimia chilena: hoy identifica calles, plazas y hasta un conocido complejo termal en la zona de Chillán, prueba de cuánto llegaron a arraigarse estas figuras mitificadas por la literatura en la cultura popular del país.`,
  pelantaro: `Fue el líder real de la decisiva victoria mapuche en la batalla de Curalaba, en 1598, donde murió el gobernador Martín García Óñez de Loyola. Ese enfrentamiento se considera el punto de partida de casi tres siglos de independencia mapuche al sur del río Biobío, una frontera que se sostuvo hasta la "Pacificación de la Araucanía" a fines del siglo XIX.`,
  janequeo: `Fue una toqui históricamente real y, de hecho, poco frecuente por tratarse de una mujer al mando: sus campañas de la década de 1580 y 1590 en la zona montañosa de Purén-Lumaco fueron documentadas por cronistas españoles de la época, entre ellos Diego de Rosales, lo que la convierte en una de las líderes militares mapuche mejor corroboradas de forma independiente, a diferencia de figuras de origen más literario como Fresia o Guacolda.`,
  anganamon: `Quedó registrado históricamente por negociar —y finalmente romper— los términos de paz con misioneros jesuitas españoles a comienzos del siglo XVII, incluido un episodio documentado en el que huyó llevándose consigo a varias de sus propias esposas antes que entregarlas, incidente relatado en los propios escritos del misionero Luis de Valdivia.`,
  millalonco: `Fue el toqui real que lideró el gran levantamiento general mapuche de 1723, una de las varias grandes rebeliones del siglo XVIII contra el avance de la colonización española, distinta y posterior a la generación de la Guerra de Arauco del siglo XVI protagonizada por Lautaro y Caupolicán.`,

  // --- MONSTRUOS ---
  'caicai-vilu': `Algunas comunidades costeras mapuche-huilliche vincularon directamente los grandes terremotos y tsunamis de 1960 y 2010 —ambos entre los más intensos jamás registrados, con epicentro frente a las costas del centro-sur de Chile— con una renovación simbólica de este antiguo enfrentamiento entre Caicai Vilu y Trentren Vilu, usando el mito como marco real de interpretación frente a la catástrofe.`,
  cherufe: `La palabra se usa hoy de manera informal en Chile para describir en general la actividad volcánica en la prensa popular, y los relatos que exigían sacrificios humanos —particularmente de mujeres jóvenes arrojadas al cráter para aplacarlo— fueron registrados entre comunidades mapuche-huilliche del siglo XIX cercanas a volcanes activos como el Villarrica y el Osorno.`,
  piuchen: `Su descripción varía notablemente según la región: en algunas zonas se lo describe como una gran serpiente voladora, en otras como una especie de oruga gigante y colorida que más tarde desarrolla alas. Es una de las criaturas con mayor variación regional dentro de esta mitología, prueba de que la tradición oral mapuche no responde a una única versión "canónica" estandarizada.`,
  chonchon: `Está estrechamente vinculado a la figura del kalku (brujo o bruja maligna): se creía que un kalku transformaba su propia cabeza en Chonchón durante la noche mediante conjuros específicos, dejando el cuerpo oculto en algún lugar. Encontrar y destruir ese cuerpo escondido mientras la cabeza volaba se consideraba tradicionalmente la única forma de matar definitivamente al brujo.`,
  wekufe: `Funciona menos como un monstruo específico con nombre propio y más como una categoría general —similar a un término amplio para "fuerza maligna"— dentro de la cual se pueden clasificar buena parte de los otros seres oscuros de esta misma mitología. Contrarrestar la influencia de un wekufe sigue siendo hoy uno de los roles centrales de la machi, la sanadora tradicional mapuche.`,
  anchimallen: `Está asociado de manera cercana a la brujería kalku: se cree que son pequeños espíritus con forma infantil creados y controlados por un brujo para hacerle mandados o espiar a sus enemigos durante la noche. Su brillo se explicaba tradicionalmente como brasas tragadas o como un fuego interior sobrenatural otorgado por su amo.`,
  trauco: `Su leyenda sigue contándose activamente en Chiloé hasta hoy, e incluso se la invoca de forma humorística en algunas comunidades rurales pequeñas para explicar embarazos no planificados, un fenómeno folclórico real registrado por antropólogos. El turismo del archipiélago hoy adopta al Trauco como un ícono cultural reconocible, presente en artesanías y festivales locales.`,
  fiura: `Se dice que habita cerca de vertientes remotas del bosque y que puede exhalar un aliento fétido capaz de envejecer o repeler instantáneamente a quien la enfrente, un contrapunto directo a la seducción atribuida al Trauco. Juntos, ambos suelen citarse como castigadores divinos de la vanidad o la transgresión dentro del folclore moral chilote.`,
  invunche: `Según la leyenda, los invunches son creados deliberadamente por la mítica sociedad secreta de brujos que habitaría una cueva oculta (la "Cueva de Salamanca", según algunas versiones): a un bebé secuestrado se le disloca y cose una pierna doblada permanentemente hacia atrás. Un origen tan atroz que funcionó históricamente como advertencia real para alejar a los niños de cuevas y lugares aislados.`,
  caleuche: `Sigue siendo una de las leyendas más contadas hoy en Chiloé, y los pescadores tradicionales explicaban cualquier música o fiesta inusual escuchada de noche sobre el mar como evidencia de un Caleuche cercano. Algunas comunidades pesqueras usaron históricamente esta leyenda para explicar desapariciones en el mar de una forma que ofrecía cierto consuelo: los desaparecidos habían sido "llevados a bordo", no simplemente ahogados.`,
  nguruvilu: `Su nombre combina directamente "ngürü" (zorro) y "vilu" (serpiente) en mapudungun. Tradicionalmente se le atribuían los ahogamientos en ríos, y algunas comunidades evitaban específicamente nadar en tramos de corriente peligrosa, atribuyendo el riesgo directamente a la presencia de un Ngürüvilu antes que a la propia naturaleza del agua.`,
  huallepen: `Se creía tradicionalmente que nacía cuando una mujer embarazada se topaba y asustaba con determinados animales durante la gestación, sobre todo durante un eclipse, reflejo de creencias más amplias sobre cómo las impresiones maternas podían moldear al bebé por nacer. El nacimiento de crías de ganado deformes en zonas rurales se atribuía en ocasiones a un encuentro con el Huallepén, como explicación popular anterior al conocimiento veterinario moderno.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-mapuche'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-mapuche".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando heroes y monstruos de Mitologia Mapuche (parte 2)...\n');
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
