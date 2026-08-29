// ============================================================
// scripts/ampliar-personajes-egipcia-parte1.js
// ------------------------------------------------------------
// Amplia el titan (1), los primordiales "otro" (3) y los primeros
// 12 dioses de Mitologia Egipcia con un parrafo extra en
// descripcion_larga -- datos reales adicionales (fuentes clasicas
// como los Textos de las Piramides, papiros concretos, arqueologia,
// culto historico) que no estaban cubiertos en el seed original.
// Simbolos/poderes/familia ya fueron poblados por
// sembrar-mitologia-egipcia.js y agregar-detalles-egipcia.js, asi
// que este script NO los toca. Idempotente (chequea si el extra ya
// esta presente antes de agregarlo).
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-egipcia-parte1.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- TITAN (primordial) ---
  heh: `Se lo representa siempre arrodillado, sosteniendo en cada mano una vara de palma con muescas -- el jeroglífico egipcio para "año" -- como personificación de la eternidad y de "millones de años" (heh). Forma parte de la Ogdóada de Hermópolis, los ocho dioses primordiales del caos anterior a la creación, agrupados en cuatro parejas macho-hembra: Nun/Naunet (agua), Heh/Hehet (infinitud), Kek/Kauket (oscuridad) y Amón/Amonet (lo oculto). Su imagen es tan asociada a la idea de cantidad inmensa que el propio jeroglífico usado para el número un millón en la numeración egipcia es, literalmente, la figura arrodillada de Heh.`,

  // --- OTRO (primordiales/cosmicos) ---
  atum: `Según la cosmogonía heliopolitana registrada en los Textos de las Pirámides (Utterance 527, inscritos por primera vez en la tumba del faraón Unis, hacia 2350 a.C.), Atum surgió por sí mismo de las aguas de Nun sobre el montículo primordial (el benben) y engendró a la primera pareja divina, Shu y Tefnut, mediante un acto de creación en solitario. El Libro de los Muertos (conjuro 175) predice que, al final de los tiempos, cuando el mundo vuelva al caos original, Atum retomará su forma de serpiente -- la misma que tuvo antes de la creación -- cerrando el ciclo cósmico completo.`,

  bennu: `El historiador griego Heródoto (Historias, libro II, 73) describió un ave sagrada egipcia -- a la que llamó "fénix"-- que, según le contaron los sacerdotes de Heliópolis, llegaba desde Arabia solo cada quinientos años para enterrar a su padre envuelto en mirra en el templo del sol: un relato ampliamente considerado por los egiptólogos como una reinterpretación griega del mito del bennu, y posiblemente el origen directo del mito occidental del ave fénix. Se lo representaba como una garza gris con dos largas plumas en la nuca, posada sobre el propio benben o sobre un sauce sagrado en Heliópolis.`,

  nun: `Los egipcios creían que las aguas primordiales de Nun no desaparecieron con la creación, sino que siguieron existiendo más allá del cielo y bajo la tierra, rodeando el mundo ordenado por todos sus costados. La crecida anual del Nilo se interpretaba como el propio Nun brotando de nuevo cada año, motivo por el cual algunos textos rituales llaman directamente "Nun" a la inundación misma. Se lo representaba sosteniendo con los brazos en alto la barca solar de Ra, como el sostén último sobre el que flotaba todo el cosmos creado.`,

  // --- DIOSES ---
  amon: `Dios originalmente local de Tebas que, hacia el Reino Medio y sobre todo el Nuevo, ascendió a "rey de los dioses" fusionado con Ra como Amón-Ra. Su gran complejo de Karnak (Ipet-Isut) es el mayor edificio religioso jamás construido, con la Sala Hipóstila y sus 134 columnas colosales. Su nombre significa literalmente "el oculto". Los griegos lo identificaron con Zeus (Zeus Amón); su oráculo en el oasis de Siwa fue consultado en persona por Alejandro Magno en el año 331 a.C., que salió de allí proclamado hijo del dios.`,

  anubis: `Dios de la momificación y la necrópolis, con cabeza de chacal -- animal que merodeaba los cementerios del desierto, lo que probablemente explica por qué un canino terminó convertido en guardián protector de los muertos en vez de amenaza. Antes del auge de Osiris ya era señor del más allá en el Reino Antiguo. Los sacerdotes usaban máscaras rituales con su rostro durante el embalsamamiento; se conserva un ejemplar real, la máscara de Anubis de Hildesheim, hoy en el Roemer- und Pelizaeus-Museum de Alemania.`,

  bastet: `Diosa gata de Bubastis (la actual Tell Basta), representada originalmente como leona antes de evolucionar hacia una gata doméstica en el Nuevo Reino, reflejo de la propia domesticación del gato en Egipto. Heródoto (Historias II, 60 y 137) describió su festival anual en Bubastis como el más concurrido de todo Egipto, con procesiones fluviales bulliciosas de cientos de miles de participantes. En Bubastis y Saqqara se han excavado cementerios con cientos de miles de gatos momificados, prueba arqueológica directa de la escala real de su culto.`,

  bes: `Dios enano protector del hogar, el parto y la infancia, representado -- de forma inusual en el arte egipcio -- de frente en vez de perfil, con expresión grotesca y la lengua afuera, pensada deliberadamente para espantar al mal. Pese a su aspecto temible fue una de las divinidades domésticas más populares de toda la historia egipcia: su imagen aparece en camas, reposacabezas, espejos y amuletos de todas las clases sociales hasta bien entrado el periodo grecorromano. Su origen podría estar fuera de Egipto, quizás en Nubia o Punt, aunque esto sigue debatido entre los egiptólogos.`,

  geb: `Dios de la tierra, representado a menudo con piel verdosa o vegetación creciendo de su cuerpo, o bien como un ganso -- el "Gran Cacareador" que, según la tradición hermopolitana, puso el huevo cósmico del que nació el sol. Los egipcios llamaban a su propio país "la Casa de Geb", y atribuían los terremotos a su risa. Como hijo mayor de Shu y Tefnut heredó el trono de Egipto dentro de la dinastía de reyes divinos que registró el historiador Manetón, antes de cedérselo a su hijo Osiris.`,

  hathor: `Una de las divinidades egipcias más antiguas y veneradas, "Casa de Horus", diosa del amor, la música, la maternidad y a la vez de la necrópolis -- una combinación paradójica de lo erótico y lo funerario. Su templo de Dendera, uno de los mejor conservados de Egipto, es célebre por el llamado Zodiaco de Dendera tallado en su techo. Los griegos la identificaron con Afrodita. Los artesanos de la aldea de Deir el-Medina, que construían las tumbas reales, la veneraban especialmente como "Señora de Occidente", protectora de quienes cruzaban al más allá.`,

  heka: `Personificación y dios de la magia (heka) entendida como fuerza real y primordial presente ya en la creación misma: en Egipto la magia no se oponía a la religión, sino que era su mecanismo activo, y hasta los propios dioses dependían de ella para actuar. Los Textos de los Sarcófagos lo describen como existente desde antes de que "dos cosas" se hubieran formado en el mundo. Se lo representaba como un hombre sosteniendo dos serpientes entrelazadas o un cetro, una imagen que algunos estudiosos vinculan -- aunque de forma debatida -- con el origen remoto del caduceo griego.`,

  horus: `Dios halcón celeste cuyos ojos eran, según el mito, el sol y la luna. Los faraones vivos se identificaban con su encarnación terrenal -- el "nombre de Horus" era el elemento más antiguo de la titulatura real -- mientras que los faraones muertos pasaban a ser Osiris. El Ojo de Horus (wadjet), perdido en su combate contra Set y restaurado por Thot, se convirtió en uno de los amuletos protectores más extendidos de la historia egipcia, y sus fracciones se usaron incluso como sistema de unidades de medida en papiros médicos y matemáticos.`,

  isis: `Diosa de la magia, la maternidad y la curación, posiblemente la divinidad egipcia de mayor alcance histórico: su culto se extendió por todo el Imperio Romano, con templos hasta en Britania y el Rin, y sobrevivió en Filé hasta el siglo VI d.C., entre los últimos templos paganos activos del mundo antiguo, cerrado bajo el emperador Justiniano. Su iconografía amamantando al niño Horus influyó directamente, según numerosos historiadores del arte, en la imaginería cristiana posterior de la Virgen con el Niño.`,

  jnum: `Dios alfarero con cabeza de carnero, venerado en Elefantina, cerca de Asuán, donde se creía que nacían las aguas del Nilo en cavernas junto a la Primera Catarata. Según la tradición egipcia, modelaba a los seres humanos -- y su ka, su fuerza vital -- en un torno de alfarero con arcilla del propio Nilo. La Estela del Hambre, una inscripción ptolemaica en la isla de Sehel, narra una hambruna legendaria de siete años resuelta cuando Jnum se apareció en sueños al faraón Zoser y prometió liberar de nuevo la crecida.`,

  khonsu: `Dios lunar, hijo de Amón y Mut, que completa la Tríada Tebana. Su nombre significa "viajero", en alusión al recorrido nocturno de la luna. Su templo dentro del complejo de Karnak se conserva casi intacto. En la llamada "Cosmogonía de Khonsu", inscrita allí mismo, se lo eleva a la categoría de dios creador por derecho propio, "surgido de sí mismo". Se lo representaba como un joven momiforme con mechón lateral y disco lunar en la cabeza, asociado también a la curación y al exorcismo.`,

  maat: `Personificación de la verdad, el orden y la justicia cósmica -- el principio mismo que toda la creación, y el gobierno de cada faraón, debía sostener frente al caos (isfet). Se la representaba con una pluma de avestruz en la cabeza, la misma pluma contra la que se pesaba el corazón del difunto en el juicio final (conjuro 125 del Libro de los Muertos). Los faraones se titulaban "amados de Maat" y se hacían representar ofreciéndole una pequeña figura suya a los dioses; el visir, máxima autoridad judicial de Egipto, era llamado "sacerdote de Maat".`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-egipcia'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-egipcia".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando primordiales y primeros dioses de Mitologia Egipcia (parte 1)...\n');
  const libroId = await obtenerLibroId();
  const [filas] = await pool.query('SELECT id, slug, nombre, descripcion_larga FROM personajes WHERE libro_id = ?', [libroId]);
  const porSlug = {};
  filas.forEach(f => { porSlug[f.slug] = f; });

  for (const [slug, extra] of Object.entries(DATOS)) {
    const personaje = porSlug[slug];
    if (!personaje) {
      console.log(`  ! Personaje "${slug}" no encontrado, se salta.`);
      continue;
    }
    if (personaje.descripcion_larga.includes(extra.slice(0, 40))) {
      console.log(`  - "${personaje.nombre}" ya tenia este agregado.`);
      continue;
    }
    const nuevoTexto = `${personaje.descripcion_larga}\n\n${extra}`;
    await pool.query('UPDATE personajes SET descripcion_larga = ? WHERE id = ?', [nuevoTexto, personaje.id]);
    console.log(`  - "${personaje.nombre}" ampliado.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
