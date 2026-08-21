// ============================================================
// scripts/ampliar-personajes-maya-parte4.js
// ------------------------------------------------------------
// Pasada final de refuerzo: agrega un parrafo extra de detalle
// real a los 13 personajes de Mitologia Maya que, tras las partes
// 1-3 (simbolos/poderes/familia), seguian con mas de 250px libres
// en la hoja del PDF. Mismo criterio que
// ampliar-personajes-azteca-parte4.js / ampliar-personajes-sumeria-parte4.js.
// Idempotente.
//
// COMO CORRERLO (desde backend/, con el tunel activo):
//   node scripts/ampliar-personajes-maya-parte4.js
// ============================================================

const pool = require('../config/db');

const EXTRA = {
  sisimite: `En algunas regiones se le atribuye una fuerza tan descomunal que puede arrancar árboles enteros de raíz cuando se siente acorralado, y ciertas variantes de la leyenda aseguran que imita voces humanas —incluso la de un familiar perdido— para atraer a quien se ha extraviado en el monte más profundo. A diferencia de otras criaturas de esta tradición, rara vez se le atribuye una forma clara de derrotarlo: la única defensa conocida es, simplemente, no perderse de vista del grupo.`,

  kukulkan: `Un fenómeno acústico descubierto en tiempos modernos añadió una capa más de asombro a su culto: un aplauso dado justo al pie de la escalinata norte de su pirámide en Chichén Itzá produce un eco chirriante que los especialistas en acústica han comparado con el canto del propio quetzal, el ave cuyas plumas preciosas visten tradicionalmente a la serpiente emplumada, un efecto que se cree pudo haber sido buscado deliberadamente por los arquitectos mayas que diseñaron el templo.`,

  cotzbalam: `Algunos estudiosos han señalado el paralelismo entre esta escena de destrucción y las prácticas de sacrificio humano documentadas en periodos posteriores de la civilización maya, sugiriendo que el episodio de los hombres de madera pudo funcionar también como una explicación mítica retroactiva del origen de esas prácticas rituales, presentadas ya desde el principio de los tiempos como un castigo justificado.`,

  xkeban: `Distintas versiones del relato coinciden en un detalle adicional: además de cuidar animales abandonados, Xkeban recibía en su propia casa a viajeros enfermos que nadie más quería alojar, arriesgando su ya frágil reputación todavía más con cada gesto de generosidad hacia quienes la sociedad del pueblo prefería ignorar por completo.`,

  xecotcovach: `Al tratarse de un águila, criatura asociada en buena parte de Mesoamérica con el sol y sus mensajeros, su participación en la destrucción de los hombres de madera adquiere un significado adicional: no se trata de un castigo cualquiera, sino de un juicio que desciende directamente desde el propio cielo diurno sobre quienes habían fallado en reconocer a sus creadores.`,

  tucumbalam: `Su desaparición total del resto del relato, sin volver a mencionarse en ningún episodio posterior, contrasta con la persistencia narrativa de otras criaturas del Popol Vuh como Camazotz o Vucub-Caquix, citadas indirectamente más adelante; Tucumbalam parece existir en el texto únicamente para cumplir su función destructiva puntual, sin ninguna otra huella en la mitología k'iche' documentada.`,

  bacab: `Los arqueólogos han identificado a los Bacab con una figura recurrente en la cerámica y la escultura del periodo clásico conocida como Pauahtun, representada a menudo como un anciano cargando el mundo sobre su espalda encorvada o emergiendo de un caparazón de caracol, una imagen que ilustra visualmente el peso constante que estas cuatro divinidades sostienen desde los primeros tiempos de la creación.`,

  kisin: `Los lacandones realizaban ofrendas específicas de copal e incienso en cuevas profundas consideradas moradas de Kisin, con la esperanza de aplacar su ira antes de que esta se manifestara en forma de temblor; algunos relatos añaden que su hedor característico se debe a que habita permanentemente rodeado de los cuerpos en descomposición de quienes caen bajo su dominio.`,

  'kinich-ahau': `Su nombre está en la raíz misma de la palabra maya para sacerdote, ah kin, "el del sol" o "el del día", lo que sugiere que el sacerdocio maya se concebía originalmente como un servicio directo a esta divinidad solar. Los sacerdotes-astrónomos encargados de calcular el calendario y predecir eclipses actuaban, en ese sentido, como intermediarios formales entre la comunidad y el propio Kinich Ahau.`,

  ixtab: `Algunos investigadores modernos han cuestionado si la lectura tradicional de la página del Códice de Dresde donde aparece —interpretada durante generaciones como una representación exclusiva del suicidio— podría en realidad tener un significado más amplio, posiblemente ligado a la muerte violenta en general; pese al debate académico, la versión transmitida por los cronistas coloniales sigue siendo la explicación más difundida sobre esta enigmática diosa.`,

  'buluc-chabtan': `El número once en su nombre no parece un simple detalle decorativo: en la numerología calendárica maya ciertos números se asociaban a fuerzas específicas, y una fuerza descrita como "de once" sugería algo desbordado o fuera de la secuencia habitual de conteo, coherente con su papel de encarnar la muerte que llega fuera de todo orden previsible, a diferencia de la muerte administrada con calma por Ah Puch.`,

  'ah-mucen-cab': `Las famosas figuras de piedra que decoran el llamado Templo del Dios Descendente en las ruinas de Tulum, mostrando a una divinidad cayendo cabeza abajo desde lo alto de la fachada, se identifican generalmente con Ah Mucen Cab, y constituyen una de las representaciones arquitectónicas más fotografiadas de cualquier dios maya menor, prueba de la importancia que este culto aparentemente modesto llegó a alcanzar en la costa oriental de Yucatán.`,

  mahucutah: `Su linaje, menos glorificado en la tradición posterior que el de Balam Quitzé, ilustra un patrón habitual dentro de las genealogías fundacionales: no todas las líneas descendientes de los primeros ancestros alcanzaron el mismo peso político dentro de la confederación k'iche', y el propio Popol Vuh, escrito ya en tiempos coloniales por los descendientes de los linajes dominantes, dedica naturalmente más atención a las ramas familiares de mayor relevancia para sus autores.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-maya'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-maya".');
  return filas[0].id;
}

async function main() {
  console.log('Refuerzo final de personajes de Mitologia Maya (parte 4)...\n');
  const libroId = await obtenerLibroId();

  const [filas] = await pool.query('SELECT id, slug, nombre, descripcion_larga FROM personajes WHERE libro_id = ?', [libroId]);
  const porSlug = {};
  filas.forEach(f => { porSlug[f.slug] = f; });

  for (const [slug, extra] of Object.entries(EXTRA)) {
    const personaje = porSlug[slug];
    if (!personaje) {
      console.log(`  ! Personaje "${slug}" no encontrado, se salta.`);
      continue;
    }
    if (personaje.descripcion_larga.includes(extra.slice(0, 40))) {
      console.log(`  - "${personaje.nombre}" ya tenía este agregado.`);
      continue;
    }
    const nuevaDescripcion = `${personaje.descripcion_larga}\n\n${extra}`;
    await pool.query('UPDATE personajes SET descripcion_larga = ? WHERE id = ?', [nuevaDescripcion, personaje.id]);
    console.log(`  - "${personaje.nombre}" ampliado.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
