// ============================================================
// scripts/ampliar-personajes-sumeria-parte4.js
// ------------------------------------------------------------
// Retoque final: tras ampliar los 48 personajes (partes 1-3) y
// volver a medir las paginas del PDF, 6 personajes seguian con
// bastante espacio libre (>250px de holgura sobre 1024px
// disponibles). Les agrega un segundo parrafo extra puntual.
// Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-sumeria-parte4.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  'ku-baba': {
    extra: `Su ascenso resulta más notable todavía si se considera el contexto: en la sociedad mesopotámica, el oficio de tabernera solía estar reservado a mujeres de posición social modesta, lo que hace de su transición al trono uno de los pocos ejemplos documentados de movilidad social radical en toda la Lista Real Sumeria, sin ningún linaje divino previo que la respaldara.`
  },
  adapa: {
    extra: `Fragmentos de su mito se han hallado tanto en Mesopotamia como en el archivo egipcio de El-Amarna, prueba de que la historia circulaba y se enseñaba mucho más allá de las fronteras sumerias y acadias, probablemente como parte del currículo estándar que los escribas de todo el Cercano Oriente antiguo debían memorizar y copiar durante su formación.`
  },
  geshtinanna: {
    extra: `Con el correr de los siglos, su figura terminó fusionándose parcialmente con la de otras diosas menores del inframundo en tradiciones acadias posteriores, un destino que comparten varias divinidades secundarias sumerias cuyo culto local, muy específico de una ciudad o un templo, se fue diluyendo a medida que las tradiciones religiosas de la región se mezclaban entre sí.`
  },
  nanna: {
    extra: `Su gran zigurat en Ur, el Ekishnugal, fue reconstruido y ampliado por distintos gobernantes a lo largo de más de un milenio, y sus restos —restaurados parcialmente en el siglo veinte— siguen siendo hoy una de las estructuras mejor conservadas de toda la arquitectura religiosa sumeria, visible todavía en el sur de Irak.`
  },
  ninkasi: {
    extra: `Su papel no se limitaba a la cerveza destinada al consumo humano: también se le atribuía supervisar las raciones de cerveza que se entregaban como parte del salario a los trabajadores de los grandes proyectos estatales, desde la construcción de canales hasta la edificación de templos, lo que la convertía, en la práctica, en una figura ligada también a la economía cotidiana del trabajo.`
  },
  qingu: {
    extra: `Su nombre aparece en el Enuma Elish casi exclusivamente en relación con otros personajes —Tiamat, las Tablillas, Marduk— sin que el poema le dedique nunca una escena propia de acción independiente, un tratamiento literario que subraya, incluso a nivel narrativo, lo prestado y transitorio que resultó siempre su poder.`
  }
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-sumeria'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-sumeria".');
  return filas[0].id;
}

async function main() {
  console.log('Retoque final: 6 personajes de Mitologia Sumeria con espacio de sobra...\n');
  const libroId = await obtenerLibroId();

  const [filas] = await pool.query('SELECT id, slug FROM personajes WHERE libro_id = ?', [libroId]);
  const idsPersonajes = {};
  filas.forEach(f => { idsPersonajes[f.slug] = f.id; });

  for (const [slug, datos] of Object.entries(DATOS)) {
    const personajeId = idsPersonajes[slug];
    if (!personajeId) {
      console.log(`  ! Personaje "${slug}" no encontrado, se salta.`);
      continue;
    }
    const [[personaje]] = await pool.query('SELECT nombre, descripcion_larga FROM personajes WHERE id = ?', [personajeId]);
    if (personaje.descripcion_larga.includes(datos.extra.slice(0, 40))) {
      console.log(`  - "${personaje.nombre}" ya tenía este retoque.`);
      continue;
    }
    const nuevaDescripcion = `${personaje.descripcion_larga}\n\n${datos.extra}`;
    await pool.query('UPDATE personajes SET descripcion_larga = ? WHERE id = ?', [nuevaDescripcion, personajeId]);
    console.log(`  - "${personaje.nombre}" ampliado.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
