// ============================================================
// scripts/ampliar-personajes-egipcia-parte2.js
// ------------------------------------------------------------
// Amplia los 18 dioses restantes de Mitologia Egipcia con un
// parrafo extra en descripcion_larga -- mismo criterio que
// ampliar-personajes-egipcia-parte1.js (fuentes clasicas, papiros
// concretos, arqueologia, culto historico). Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-personajes-egipcia-parte2.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  min: `Uno de los dioses egipcios más antiguos que se conocen, atestiguado ya en época predinástica: en Copto se han hallado colosales estatuas suyas de piedra caliza, entre las esculturas monumentales egipcias más antiguas jamás encontradas. Asociado a la fertilidad masculina, la cosecha y las rutas del desierto oriental hacia las minas. Su festival incluía al faraón cortando ritualmente la primera gavilla de la cosecha. Se lo representaba siempre de frente, itifálico, con el mayal en alto y un tocado de dos altas plumas -- fusionado a veces con Amón como Amón-Min-Kamutef, "toro de su madre", título que expresaba su capacidad de autoengendrarse.`,

  mut: `Diosa buitre, "madre", consorte de Amón y madre de Khonsu en Tebas. Su recinto en Karnak (el Isheru), con su lago sagrado en forma de herradura, todavía conserva cientos de estatuas de la leona Sejmet, ya que Mut absorbió gran parte de los títulos y el aspecto feroz de esa diosa ("Mut-Sejmet"). El tocado de buitre que llevaba fue adoptado directamente por las reinas egipcias como símbolo de protección maternal real. Curiosamente, pese a que su nombre significa literalmente "madre", no tiene mito de nacimiento propio en los textos conservados: existe, simplemente, autocreada.`,

  neftis: `Hermana de Isis, Osiris y Set, y esposa de este último -- aunque en el mito se puso siempre del lado de Isis para llorar y resucitar a Osiris, en vez de junto a su propio marido, una contradicción que los textos egipcios nunca explican del todo, tratándola simplemente como parte de su naturaleza dividida. Junto a Isis es una de las dos "cometas" plañideras representadas en cabecera y pies de ataúdes, recitando las Lamentaciones de Isis y Neftis, texto funerario real que sacerdotisas recitaban en rituales de época ptolemaica que reactuaban el duelo por Osiris.`,

  neith: `Diosa guerrera y creadora extremadamente antigua de Sais, en el Delta, cuyo emblema -- flechas cruzadas sobre un escudo -- aparece ya en nombres reales de la Primera Dinastía, lo que la convierte en una de las divinidades egipcias más antiguas atestiguadas. En Sais se la veneraba como creadora autoengendrada que tejió el mundo en su telar; su templo llevaba, según recoge Plutarco, la inscripción "soy todo lo que ha sido, es y será; ningún mortal ha levantado jamás mi velo", frase que siglos después influiría en textos herméticos y filosóficos de la Ilustración europea.`,

  nut: `Diosa del cielo, con el cuerpo cubierto de estrellas arqueado sobre la tierra y sostenido por Shu; traga el sol cada noche y lo da a luz cada amanecer, ciclo que los egipcios extendían simbólicamente a los muertos, pintados por eso en el interior de innumerables tapas de sarcófago y techos de cámara funeraria -- el ejemplo más célebre en el techo de la cámara funeraria de Ramsés VI. Concibió a Osiris, Isis, Set y Neftis durante los cinco días intercalares que Thot ganó apostando a la luna, días originalmente fuera del calendario de 360 días en los que Ra le había prohibido dar a luz.`,

  osiris: `Dios del más allá, la resurrección y la agricultura, asesinado por su propio hermano Set -- el episodio central de toda la mitología egipcia, cuya versión más completa no procede de una fuente egipcia sino griega: el tratado "Sobre Isis y Osiris" de Plutarco, del siglo I d.C. Todo egipcio difunto aspiraba a convertirse "en un Osiris"; su centro de culto en Abidos fue el lugar de peregrinación más importante de Egipto, con cenotafios erigidos allí por faraones y gente común que buscaba proximidad simbólica con su tumba. Sus misterios anuales en Abidos reactuaban públicamente su muerte y resurrección.`,

  ptah: `Dios creador de Menfis, una de las capitales más antiguas de Egipto, al que la Teología Menfita (registrada en la Piedra de Shabaka, copia de época tardía de un texto mucho más antiguo) atribuye haber creado el mundo solo con el pensamiento y la palabra -- concibiendo cada cosa en su corazón y dándole existencia con solo nombrarla, un mito de creación notablemente abstracto frente a los de Heliópolis o Hermópolis. Patrono de artesanos y arquitectos; los griegos lo identificaron con Hefesto. Su nombre está incluso presente en la palabra "Egipto": una de las etimologías propuestas del término griego "Aigyptos" remite a "Hut-ka-Ptah", "morada del ka de Ptah".`,

  ra: `Dios solar supremo, cuyo centro de culto, Heliópolis ("ciudad del sol", Iunu en egipcio), dio nombre a toda la teología solar egipcia; la mayoría de los demás grandes dioses terminaron fusionándose con él (Amón-Ra, Ra-Horajti, Atum-Ra) en vez de sustituirlo. Cruzaba el cielo de día en la barca Mandyet y el inframundo de noche en la barca Mesektet, combatiendo a la serpiente Apofis -- recorrido documentado hora por hora en el Amduat y el Libro de las Puertas, textos funerarios pintados en las tumbas reales del Valle de los Reyes. Desde la Cuarta Dinastía, los faraones adoptaron el título "Hijo de Ra" como parte de su titulatura real.`,

  sejmet: `Diosa leona de la guerra, "la poderosa", enviada por Ra a castigar a una humanidad rebelde y a punto de exterminarla por completo, hasta que fue engañada con cerveza teñida de rojo como sangre (mito de la Destrucción de la Humanidad, inscrito en varias tumbas reales del Nuevo Reino como el "Libro de la Vaca Celeste"). Ese mito se cita como origen mitológico de festivales anuales de embriaguez ritual celebrados en sus templos para aplacarla preventivamente. También diosa de la curación y las plagas: sus sacerdotes actuaban como los médicos egipcios más cercanos a la práctica clínica real. Amenhotep III le dedicó más de 700 estatuas en Tebas, más que a cualquier otra divinidad individual.`,

  serket: `Diosa escorpión, protectora contra picaduras y mordeduras venenosas, una de las cuatro diosas -- junto a Isis, Neftis y Neith -- que custodiaban los vasos canopos con las vísceras del difunto, en su caso el vaso de los intestinos, bajo la protección añadida de Kebehsenuf, hijo de Horus con cabeza de halcón. Su estatua dorada, brazos extendidos en gesto protector con un escorpión sobre la cabeza (siempre representado de forma "inofensiva", como solía hacerse con animales peligrosos asociados a divinidades), custodiaba el santuario canopo en la tumba de Tutankamón, uno de los objetos más reconocibles hallados por Howard Carter en 1922.`,

  seshat: `Diosa de la escritura, la medición y el registro, "señora de la Casa de los Libros", representada con un tocado en forma de estrella de siete puntas bajo un arco invertido cuyo significado exacto sigue debatido entre los egiptólogos. Asistía al faraón en la ceremonia de "estirar la cuerda" (pedyeshes), el ritual de agrimensura que orientaba los cimientos de un templo nuevo alineándolos con las estrellas, documentado en relieves desde el Reino Antiguo hasta época ptolemaica. Se le atribuía registrar los años de reinado de cada faraón en las hojas del árbol sagrado ished de Heliópolis.`,

  set: `Dios del caos, las tormentas, el desierto y las tierras extranjeras, asesino de su propio hermano Osiris y rival de Horus por el trono -- y sin embargo, paradójicamente, un protector legítimo: era él quien se plantaba en la proa de la barca solar de Ra cada noche para arponear a la serpiente Apofis, sin cuyo combate el sol no habría sobrevivido el viaje. Su reputación cambió radicalmente con el tiempo: venerado como patrón real durante el Segundo Periodo Intermedio y la dinastía ramésida (varios faraones se llamaron Seti, "de Set"), y cada vez más demonizado y asociado a invasores extranjeros hacia el periodo tardío, con sus imágenes a veces deliberadamente mutiladas.`,

  shu: `Dios del aire y la luz solar, que separó por la fuerza a sus hijos Geb (tierra) y Nut (cielo), plantándose entre ambos para siempre -- una escena repetida tantas veces en el arte funerario egipcio (Nut arqueada, Geb reclinado, Shu erguido entre ambos) que los egiptólogos la usan como una de las composiciones más fácilmente reconocibles de todo el arte egipcio. Gemelo y esposo de Tefnut, la primera pareja engendrada por Atum en la creación. Según Manetón, gobernó Egipto como rey dentro de la dinastía de dioses previa a los faraones humanos, heredando el trono directamente de su padre Ra.`,

  sobek: `Dios cocodrilo, temido y venerado a la vez como encarnación de la fertilidad y el peligro del Nilo. Sus dos grandes centros de culto, Crocodilópolis (Shedet, en el Fayum) y Kom Ombo, mantenían cocodrilos vivos en estanques del templo, adornados con joyas, venerados como manifestación viva del dios y momificados con cuidado ceremonial al morir -- se han recuperado cientos de momias de cocodrilo en yacimientos como Tebtunis. El templo de Kom Ombo es inusualmente doble, dividido en simetría exacta para honrar a la vez a Sobek y a Horus el Viejo, cada uno con su propio santuario paralelo.`,

  tefnut: `Diosa de la humedad, la lluvia y el rocío, gemela y esposa de Shu, la otra mitad de la primera pareja divina engendrada por Atum. En un mito muy conocido riñó con su padre Ra y huyó a Nubia convertida en leona; Thot (o Shu, según la versión) fue enviado a convencerla de volver a Egipto -- historia narrada en el "Mito del Ojo del Sol", texto conservado en escritura demótica en versiones que llegan hasta época romana, prueba de la larga popularidad del relato. Se la representaba con cabeza de leona, vinculándola a la familia más amplia de diosas peligrosas del "Ojo de Ra", junto a Sejmet, Bastet y Hathor.`,

  thot: `Dios con cabeza de ibis de la escritura, la sabiduría, la luna y la magia, al que se atribuía haber inventado los jeroglíficos y actuar como escriba de los dioses, registrando el resultado del Pesaje del Corazón. Su centro de culto, Hermópolis (Khemenu, "Ciudad de los Ocho"), lo veneraba como creador de la cosmogonía de la Ogdóada. Los griegos lo identificaron con Hermes, y en época helenística ambos se fusionaron en "Hermes Trismegisto", sabio legendario al que se atribuye el Corpus Hermético, textos que influirían profundamente en el esoterismo y la alquimia renacentistas siglos después de que la propia religión egipcia se hubiera extinguido.`,

  tueris: `Diosa hipopótamo del parto y la protección del embarazo, representada como una criatura compuesta -- cuerpo de hipopótamo, extremidades de león, lomo y cola de cocodrilo -- de pie sobre sus patas traseras, una forma deliberadamente antinatural que combinaba a los animales más peligrosos del Nilo en una sola fuerza protectora. Extremadamente popular en el culto doméstico: sus amuletos están entre los objetos apotropaicos más comunes hallados en contextos domésticos de toda la historia egipcia, usados sobre todo por mujeres embarazadas. Apenas tuvo templos o sacerdocio formal propio, existiendo casi por completo dentro de la religión popular y doméstica más que en la teología oficial de estado.`,

  wadjet: `Diosa cobra del Bajo Egipto, protectora del faraón, representada por el uraeus -- la cobra erguida en la corona real, escupiendo fuego contra los enemigos del rey --, uno de los símbolos de la realeza egipcia más reconocibles, presente en casi cualquier imagen real desde las primeras dinastías. Centro de culto en Per-Wadyet (Buto), en el Delta. Emparejada con Nejbet, la diosa buitre del Alto Egipto, como las "Dos Señoras" (nebty), uno de los cinco nombres de la titulatura real completa que representaba la unificación de las Dos Tierras. En un mito se la identifica con el "Ojo de Ra", enviada a proteger al Horus niño escondido entre los papiros de Jemmis.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-egipcia'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-egipcia".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando dioses de Mitologia Egipcia (parte 2)...\n');
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
