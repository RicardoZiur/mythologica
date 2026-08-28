// ============================================================
// scripts/agregar-personajes-hindu.js
// ------------------------------------------------------------
// Agrega 11 personajes nuevos a Mitologia Hindu (36 -> 47), para
// equiparar la cantidad con el resto del catalogo. Contenido
// completo desde el arranque. Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/agregar-personajes-hindu.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- TITANES / PRIMORDIALES (2) ---
  {
    tipo: 'titan', slug: 'hiranyagarbha', nombre: 'Hiranyagarbha', nombre_griego: 'हिरण्यगर्भ',
    epitetos: 'El Huevo de Oro Cósmico',
    descripcion_corta: 'El "huevo" o "vientre de oro" primordial del que emergió el universo entero, celebrado en uno de los himnos más antiguos y filosóficamente profundos del Rig Veda.',
    descripcion_larga: `Hiranyagarbha, literalmente "vientre" o "embrión de oro", es el principio cósmico manifiesto que, según el Himno de la Creación del Rig Veda (el llamado "Hiranyagarbha Sukta"), flotaba sobre las aguas primordiales antes de que existiera cualquier otra cosa, conteniendo dentro de sí la totalidad del universo por nacer. El himno lo describe como el único señor de todo lo creado, sostén de la tierra y el cielo, aunque termina —de forma célebremente inusual dentro de la literatura religiosa antigua— preguntando abiertamente "¿a qué dios deberíamos ofrecer nuestra ofrenda?", una expresión de duda filosófica genuina poco habitual en textos de esta antigüedad.

En tradiciones posteriores, Hiranyagarbha se identificó estrechamente con Brahma, el propio dios creador, entendiéndose que este último nació directamente de ese huevo dorado primordial tras flotar en las aguas durante un período cósmico inmenso antes de dividirlo en dos mitades: el cielo y la tierra. El concepto funciona como uno de los puentes filosóficos más importantes entre el pensamiento védico más antiguo y el posterior desarrollo de la cosmología puránica hindú, representando el primer principio manifiesto que emerge de lo absolutamente no manifestado.`,
    origen: 'El huevo cósmico primordial del que emergió el universo, según el Rig Veda.',
    dominio: 'La creación primordial del universo', naturaleza: 'Principio cósmico primordial', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'aditi', nombre: 'Aditi', nombre_griego: 'अदिति',
    epitetos: 'La Madre Ilimitada de los Dioses',
    descripcion_corta: 'Diosa primordial de la ilimitación, madre de los Adityas (Varuna, Mitra y otras grandes divinidades solares) — su rivalidad con su hermana Diti explica el origen mismo del conflicto entre dioses y demonios.',
    descripcion_larga: `Aditi, cuyo nombre significa literalmente "sin atadura" o "ilimitada", es una de las diosas más antiguas del panteón védico, madre de los Adityas, un grupo de grandes divinidades solares que incluye a Varuna y Mitra en los textos más antiguos, y que en la tradición posterior llegó a incluir también a Surya y, en algunas genealogías puránicas, al propio Vishnu en su encarnación enana como Vamana. Se la invoca en el Rig Veda como protectora universal, asociada a la libertad, la generosidad sin límites y la propia extensión ilimitada del cielo.

Según la tradición puránica posterior, Aditi es hermana de Diti, madre a su vez de los Daityas —una de las principales estirpes de asuras o demonios—, de modo que devas y asuras terminan siendo, en última instancia, primos entre sí, descendientes de dos hermanas rivales cuya disputa familiar original se proyecta sobre el conflicto cósmico completo entre el orden divino y las fuerzas que se le oponen. Esta genealogía compartida refleja un patrón recurrente en la mitología hindú: el conflicto entre el bien y el mal no se concibe como una oposición entre naturalezas completamente ajenas entre sí, sino como una rivalidad familiar que atraviesa generaciones enteras.`,
    origen: 'Diosa primordial de la ilimitación, madre de los Adityas.',
    dominio: 'La ilimitación y la libertad cósmica', naturaleza: 'Diosa madre primordial', es_preview: 0
  },

  // --- DIOSES (3) ---
  {
    tipo: 'dios', slug: 'vishwakarma', nombre: 'Vishwakarma', nombre_griego: 'विश्वकर्मा',
    epitetos: 'El Arquitecto Divino del Universo',
    descripcion_corta: 'El arquitecto y artesano divino que forjó las armas de los dioses y construyó ciudades enteras, incluida Lanka —más tarde usurpada por Ravana— y la propia Dwarka de Krishna.',
    descripcion_larga: `Vishwakarma, cuyo nombre significa literalmente "el que todo lo hace" o "el hacedor universal", es el arquitecto, ingeniero y artesano divino al que se atribuye la construcción de buena parte de las maravillas del universo hindú: forjó el disco (chakra) de Vishnu, construyó la ciudad dorada de Lanka —que Ravana, el rey demonio, terminaría usurpando siglos después— y edificó Dwarka, la legendaria capital submarina de Krishna, además de numerosas armas y objetos rituales usados por los propios dioses en sus batallas contra los asuras.

Una de sus contribuciones más célebres involucra al arma más poderosa de Indra, el vajra (rayo): según la tradición puránica, Vishwakarma la forjó a partir de los huesos del sabio Dadhichi, quien había ofrecido voluntariamente su propio cuerpo tras su muerte para que los dioses pudieran derrotar al gran demonio serpiente Vritra. Hoy en día, Vishwakarma sigue siendo venerado activamente como patrono de arquitectos, ingenieros, artesanos y trabajadores industriales en toda la India, con un festival anual —el Vishwakarma Puja— celebrado específicamente por gremios de oficios y talleres en su honor.`,
    origen: 'Dios artesano y arquitecto divino, forjador de armas y constructor de ciudades.',
    dominio: 'La arquitectura, la artesanía y la ingeniería divina', naturaleza: 'Dios artesano supremo', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'dhanvantari', nombre: 'Dhanvantari', nombre_griego: 'धन्वन्तरि',
    epitetos: 'El Médico Divino, Padre del Ayurveda',
    descripcion_corta: 'Avatar de Vishnu y padre de la medicina ayurvédica, que emergió del Batido del Océano de Leche sosteniendo el vaso del néctar de la inmortalidad.',
    descripcion_larga: `Dhanvantari es venerado como el médico divino de los dioses y el padre fundador de la medicina ayurvédica, la tradición médica tradicional india que sigue practicándose activamente hasta hoy. Según el relato del Samudra Manthan —el batido cósmico del Océano de Leche llevado a cabo conjuntamente por dioses y demonios para obtener el néctar de la inmortalidad (amrita)—, Dhanvantari emergió finalmente de las aguas agitadas sosteniendo con sus propias manos el vaso dorado que contenía ese néctar, considerado una de las últimas y más preciadas de las catorce cosas valiosas producidas por el batido.

Se lo considera un avatar directo de Vishnu, y su festividad, Dhanvantari Trayodashi (más conocida popularmente como Dhanteras), se celebra cada año inmediatamente antes de Diwali, cuando millones de familias indias le rinden culto pidiendo salud y bienestar para el año siguiente. Los textos médicos ayurvédicos tradicionales, como el Sushruta Samhita, lo presentan como la fuente última de todo conocimiento médico legítimo, transmitido a través de una cadena de sabios y discípulos que se remonta directamente hasta su propia revelación divina original.`,
    origen: 'Avatar de Vishnu, dios de la medicina ayurvédica.',
    dominio: 'La medicina, la sanación y el néctar de la inmortalidad', naturaleza: 'Dios médico, avatar de Vishnu', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'ushas', nombre: 'Ushas', nombre_griego: 'उषस्',
    epitetos: 'La Diosa del Amanecer',
    descripcion_corta: 'Diosa védica del amanecer, una de las divinidades más celebradas poéticamente en todo el Rig Veda —eternamente joven pese a renacer sin fin cada mañana desde el origen de los tiempos.',
    descripcion_larga: `Ushas personifica el amanecer dentro de la tradición védica más antigua, y es una de las divinidades a las que se dedican más himnos completos dentro del Rig Veda —alrededor de veinte—, superada en atención poética por muy pocas otras figuras del panteón. Se la describe repetidamente como una mujer hermosa que aparta las tinieblas de la noche con su luz, conduciendo un carro resplandeciente tirado por vacas o caballos rojizos, siempre renovándose a sí misma sin envejecer jamás pese a haber repetido exactamente el mismo recorrido incontables veces desde el principio mismo de la creación.

Ushas es hermana de Ratri, la noche, con quien comparte un vínculo de sucesión constante más que de rivalidad directa, y su aparición diaria se asocia estrechamente con Rta, el orden cósmico fundamental que sostiene la regularidad del universo entero. Pese a su enorme protagonismo dentro de los himnos védicos más antiguos, Ushas fue perdiendo protagonismo narrativo en la tradición puránica posterior, eclipsada por divinidades de perfil más activo y mitológicamente elaborado, un patrón de "desvanecimiento" que comparte con otras grandes divinidades védicas tempranas cuya importancia original quedó parcialmente oculta tras capas posteriores de desarrollo religioso.`,
    origen: 'Diosa védica del amanecer, celebrada extensamente en el Rig Veda.',
    dominio: 'El amanecer y la renovación diaria de la luz', naturaleza: 'Diosa védica del alba', es_preview: 0
  },

  // --- HEROES (2) ---
  {
    tipo: 'heroe', slug: 'bhishma', nombre: 'Bhishma', nombre_griego: 'भीष्म',
    epitetos: 'El Patriarca del Voto Terrible',
    descripcion_corta: 'Gran patriarca del Mahabharata, hijo de la diosa-río Ganga, que renunció voluntariamente al trono y al matrimonio con un voto de celibato absoluto — recibió a cambio el don de elegir el momento exacto de su propia muerte.',
    descripcion_larga: `Bhishma, hijo del rey Shantanu y de la diosa-río Ganga, renunció voluntariamente tanto a su derecho al trono como a la posibilidad misma de casarse y tener descendencia, un juramento tan extremo y solemne —conocido como el "Bhishma Pratigya"— que le valió su propio nombre ("el terrible" o "el temible"), pronunciado específicamente para permitir que su padre pudiera casarse con la pescadora Satyavati sin que el hijo de esta última tuviera que competir por la sucesión con Bhishma. Los dioses, asombrados por la magnitud de ese sacrificio, le concedieron a cambio el don de "iccha mrityu": la capacidad de elegir libremente el momento exacto de su propia muerte.

Décadas después, durante la gran guerra de Kurukshetra narrada en el Mahabharata, Bhishma se vio obligado por su juramento de lealtad dinástica a comandar el ejército de los Kaurava durante los primeros diez días del conflicto, pese a sentir un profundo afecto y respeto por sus sobrinos-nietos Pandava, sus verdaderos adversarios en el campo de batalla. Finalmente cayó atravesado por una lluvia de flechas disparadas por Arjuna, que se ocultó tras Shikhandi —a quien Bhishma se negaba a atacar por haber nacido mujer—, y permaneció tendido sobre un lecho literal de flechas durante semanas, esperando conscientemente el solsticio de invierno (Uttarayana), el momento astrológicamente propicio que él mismo había elegido para morir.`,
    origen: 'Patriarca del linaje Kuru, hijo de la diosa-río Ganga.',
    dominio: 'El sacrificio dinástico y la muerte elegida', naturaleza: 'Héroe patriarca del Mahabharata', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'nala', nombre: 'Nala', nombre_griego: 'नल',
    epitetos: 'El Rey que Perdió su Reino en un Juego de Dados',
    descripcion_corta: 'Rey de Nishadha, protagonista de una de las historias de amor más célebres del Mahabharata — perdió su reino poseído por el demonio Kali en una partida de dados amañada, antes de recuperarlo junto a su esposa Damayanti.',
    descripcion_larga: `Nala, rey de Nishadha, es protagonista de una de las historias intercaladas más queridas de todo el Mahabharata, narrada como relato consolador al propio Yudhishthira tras la pérdida de su reino en otra partida de dados amañada, un notable paralelismo deliberado entre ambas tramas. Nala, poseído sin saberlo por el propio espíritu personificado de Kali —la era degenerada, no la diosa Kali—, perdió su reino entero frente a su hermano Pushkara en una partida de dados manipulada, y se vio obligado a exiliarse junto a su esposa Damayanti, abandonándola finalmente en el bosque en un momento de desesperación casi total, transformado además en un hombre desfigurado por la propia influencia demoníaca que lo poseía.

Tras años separados, Damayanti organizó una segunda ceremonia de matrimonio (svayamvara) como estratagema deliberada para atraer de vuelta a su esposo, cuyo paradero desconocía con certeza; Nala, todavía bajo su forma desfigurada, se presentó en el evento como auriga de otro rey, y ambos terminaron reconociéndose mutuamente. Nala recuperó finalmente su verdadera forma, se enfrentó de nuevo a Pushkara en una revancha de dados —esta vez sin la influencia de Kali— y recuperó su reino perdido, cerrando un relato que la tradición india sigue considerando uno de los grandes ejemplos narrativos de lealtad conyugal frente a la adversidad extrema.`,
    origen: 'Rey legendario de Nishadha, protagonista del relato Nala-Damayanti.',
    dominio: 'La realeza perdida y recuperada, la lealtad conyugal', naturaleza: 'Rey héroe del Mahabharata', es_preview: 0
  },

  // --- MONSTRUOS (2) ---
  {
    tipo: 'monstruo', slug: 'vritra', nombre: 'Vritra', nombre_griego: 'वृत्र',
    epitetos: 'La Serpiente que Retenía las Aguas del Mundo',
    descripcion_corta: 'El gran asura serpiente que retenía prisioneras las aguas del mundo entero, hasta que Indra lo derrotó con el rayo forjado a partir de los huesos del sabio Dadhichi — uno de los mitos centrales de todo el Rig Veda.',
    descripcion_larga: `Vritra, cuyo nombre significa literalmente "el que envuelve" u "obstáculo", es el gran asura con forma de serpiente o dragón que, según uno de los mitos más centrales y repetidos de todo el Rig Veda, retenía prisioneras todas las aguas del mundo dentro de su propio cuerpo enroscado, causando una sequía cósmica que amenazaba la existencia misma de la vida. Indra, rey de los dioses, es descrito repetidamente en el propio Rig Veda con el epíteto "Vritrahan" —"el que mata a Vritra"—, un título tan central para su identidad divina que se considera prácticamente inseparable de su propio nombre.

Para derrotarlo, Indra empleó el vajra, un rayo forjado especialmente a partir de los huesos del sabio Dadhichi, quien había ofrecido voluntariamente su propio cuerpo tras la muerte específicamente para ese propósito, ya que solo un arma hecha con esos huesos sagrados podía atravesar la coraza de Vritra. Al partir su cuerpo, Indra liberó finalmente las aguas retenidas, que corrieron libres hacia la tierra como los ríos del mundo. Pese a la enorme importancia cósmica de este mito de combate contra la sequía —un motivo compartido con otras grandes mitologías indoeuropeas, como el combate de Zeus contra Tifón—, Vritra suele quedar hoy eclipsado en la memoria popular por demonios de personalidad narrativa más elaborada, como Ravana.`,
    origen: 'Gran asura serpiente que retenía las aguas primordiales del mundo.',
    dominio: 'La sequía cósmica y las aguas retenidas', naturaleza: 'Asura serpiente primordial', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'putana', nombre: 'Putana', nombre_griego: 'पूतना',
    epitetos: 'La Demonio Nodriza',
    descripcion_corta: 'Demonio enviada por el rey Kamsa para asesinar al niño Krishna amamantándolo con veneno — murió drenada por la fuerza vital del propio bebé, y algunas tradiciones sostienen que, pese a su intención asesina, alcanzó la liberación por el contacto sagrado.',
    descripcion_larga: `Putana fue enviada por el rey Kamsa, tío de Krishna decidido a eliminar al niño tras ser advertido de una profecía que anunciaba su propia muerte a manos de su sobrino, con la misión específica de asesinarlo mientras aún era un bebé. Putana, capaz de transformar su apariencia a voluntad, se presentó ante la familia de Krishna disfrazada de nodriza hermosa y amable, untó veneno mortal sobre su propio pecho, y se ofreció a amamantar al niño, confiando en que la ponzoña lo mataría de inmediato.

Krishna, sin embargo, ya manifestando su naturaleza divina pese a su corta edad, succionó con tal fuerza que drenó no solo el veneno sino la propia fuerza vital de Putana junto con la leche, causando su muerte instantánea y revelando su verdadera y monstruosa forma original al colapsar. Un aspecto teológicamente notable de este episodio, muy comentado dentro de la tradición vaishnava, es que Putana —pese a haber actuado con intención plenamente asesina— es descrita en algunos textos como habiendo alcanzado la liberación espiritual (moksha) precisamente por el contacto físico sagrado con Krishna, un ejemplo citado con frecuencia sobre cómo la gracia divina puede trascender incluso la intención más malvada de quien la recibe.`,
    origen: 'Demonio nodriza enviada por el rey Kamsa para asesinar al niño Krishna.',
    dominio: 'El engaño y el veneno disfrazados de cuidado maternal', naturaleza: 'Demonio metamorfa', es_preview: 0
  },

  // --- MORTALES (2) ---
  {
    tipo: 'mortal', slug: 'damayanti', nombre: 'Damayanti', nombre_griego: 'दमयन्ती',
    epitetos: 'La Princesa que Eligió a un Rey entre Dioses Disfrazados',
    descripcion_corta: 'Princesa de Vidarbha y esposa de Nala — eligió a su amado incluso cuando cuatro dioses se disfrazaron exactamente como él para ponerla a prueba en su propia ceremonia de matrimonio.',
    descripcion_larga: `Damayanti, princesa del reino de Vidarbha, es célebre sobre todo por el episodio de su propio svayamvara —la ceremonia tradicional india en la que una novia elige personalmente a su esposo entre los pretendientes reunidos—, durante el cual cuatro grandes dioses (Indra, Agni, Varuna y Yama), todos ellos también enamorados de su belleza y su fama, se presentaron disfrazados con la apariencia exacta de Nala, su pretendiente mortal preferido, específicamente para poner a prueba su capacidad de discernimiento. Damayanti logró identificar correctamente al verdadero Nala observando pequeños detalles físicos imposibles de imitar por naturalezas divinas —los dioses no proyectaban sombra ni parpadeaban, entre otras señales—, y lo eligió como esposo ante la mirada de sus propios rivales celestiales.

Tras la ruina y el exilio de Nala, poseído por la influencia del demonio Kali, Damayanti permaneció fiel a su esposo pese a haber sido abandonada por él en el bosque durante un momento de desesperación extrema, y finalmente orquestó personalmente una segunda ceremonia de matrimonio como estratagema deliberada para atraerlo de vuelta sin saber con certeza su paradero exacto. Su historia se cuenta hoy entre los grandes ejemplos narrativos hindúes de determinación femenina, fidelidad conyugal y astucia práctica frente a la adversidad.`,
    origen: 'Princesa de Vidarbha, esposa de Nala.',
    dominio: 'La fidelidad conyugal y la determinación femenina', naturaleza: 'Princesa legendaria', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'shakuntala', nombre: 'Shakuntala', nombre_griego: 'शकुन्तला',
    epitetos: 'La Hija del Bosque, Madre de Bharata',
    descripcion_corta: 'Hija de un sabio y una ninfa celestial, criada en un ermitaño del bosque — su historia de amor, olvido y reencuentro con el rey Dushyanta dio origen al propio nombre tradicional de la India, "Bharat".',
    descripcion_larga: `Shakuntala, hija del sabio Vishwamitra y la apsara (ninfa celestial) Menaka, fue abandonada al nacer y criada en un ermitaño forestal por el sabio Kanva, creciendo rodeada de naturaleza y animales del bosque. El rey Dushyanta, durante una expedición de caza, la conoció y se enamoró de ella, casándose en secreto según el rito gandharva (una unión válida basada únicamente en el consentimiento mutuo, sin ceremonia pública), antes de regresar a su propio reino prometiendo enviar más tarde por ella.

Un sabio irascible, Durvasa, maldijo a Shakuntala —distraída en ese momento por pensamientos sobre su esposo ausente y sin ofrecerle la hospitalidad debida— para que Dushyanta la olvidara por completo, una maldición que solo podría revertirse si ella lograba mostrarle un objeto que él reconociera como prueba de su unión: un anillo que, trágicamente, Shakuntala perdió en un río durante el viaje hacia el palacio real. Rechazada por un Dushyanta que genuinamente no la recordaba, Shakuntala crio sola a su hijo Bharata en el bosque, hasta que el anillo perdido finalmente reapareció —hallado dentro de un pez— y restauró la memoria del rey, permitiendo el reencuentro familiar. Bharata, su hijo, se convirtió en un gran emperador legendario cuyo nombre da origen hasta hoy al nombre tradicional sánscrito de la India, "Bharat". La historia completa fue inmortalizada por el poeta clásico Kalidasa en su célebre obra teatral "Abhijnanashakuntalam".`,
    origen: 'Hija del sabio Vishwamitra y la ninfa celestial Menaka, esposa del rey Dushyanta.',
    dominio: 'El amor olvidado y recuperado, el origen legendario de la India', naturaleza: 'Mujer legendaria del bosque', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-hindu'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-hindu".');
  return filas[0].id;
}

async function main() {
  console.log('Agregando 11 personajes nuevos a Mitologia Hindu...\n');
  const libroId = await obtenerLibroId();

  for (const p of PERSONAJES) {
    const [existente] = await pool.query('SELECT id FROM personajes WHERE slug = ? AND libro_id = ?', [p.slug, libroId]);
    if (existente.length > 0) {
      console.log(`  - Personaje "${p.nombre}" ya existía.`);
      continue;
    }
    const [enOtroLibro] = await pool.query('SELECT id FROM personajes WHERE slug = ?', [p.slug]);
    if (enOtroLibro.length > 0) {
      console.log(`  ! ADVERTENCIA: slug "${p.slug}" ya existe en otro libro (colision global). Saltando.`);
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
