// ============================================================
// scripts/agregar-personajes-nordica.js
// ------------------------------------------------------------
// Agrega 11 personajes nuevos a Mitologia Nordica (36 -> 47),
// para equiparar la cantidad con el resto del catalogo. Contenido
// completo desde el arranque, mismo criterio que los libros mas
// nuevos. Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/agregar-personajes-nordica.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  // --- TITANES / PRIMORDIALES (3) ---
  {
    tipo: 'titan', slug: 'sol-nordica', nombre: 'Sól', nombre_griego: 'Sól (Sunna)',
    epitetos: 'La Doncella del Sol, Perseguida por el Lobo',
    descripcion_corta: 'Diosa que conduce el carro del sol a través del cielo, perseguida eternamente por el lobo Sköll, destinado a devorarla en el Ragnarök.',
    descripcion_larga: `Sól es hija de Mundilfari, un hombre tan orgulloso de la belleza de sus dos hijos que los llamó Sól ("sol") y Máni ("luna"), una arrogancia que los propios dioses castigaron colocando a ambos hermanos en el cielo para que condujeran esos mismos astros por toda la eternidad. Sól conduce el carro solar tirado por los caballos Árvakr y Alsviðr, protegida del calor abrasador de su propia carga por un escudo llamado Svalin colocado justo delante de ella, sin el cual, según el Grímnismál, tanto el mar como la montaña arderían.

Sól es perseguida sin descanso por el lobo Sköll, uno de los hijos de la giganta Angrboða, que finalmente le dará alcance y la devorará durante el Ragnarök, oscureciendo el cielo. Según el Vafþrúðnismál, sin embargo, Sól dará a luz a una hija igual de radiante antes de su propia muerte, que continuará su recorrido por un mundo renovado tras la batalla final, asegurando que el sol nunca desaparezca del todo del cosmos nórdico.`,
    origen: 'Diosa que personifica y conduce el sol a través del cielo.',
    dominio: 'El sol y su recorrido diario', naturaleza: 'Diosa solar perseguida', es_preview: 1
  },
  {
    tipo: 'titan', slug: 'mani', nombre: 'Máni', nombre_griego: 'Máni',
    epitetos: 'El Señor de la Luna',
    descripcion_corta: 'Dios que conduce el carro de la luna, hermano de Sól — se dice que tomó a dos niños humanos, Bil y Hjúki, para que lo acompañaran en su recorrido nocturno.',
    descripcion_larga: `Máni, hermano de Sól, gobierna el paso de la luna por el cielo nocturno y determina su creciente y menguante según el Gylfaginning de Snorri Sturluson. Se le atribuye haber tomado de la tierra a dos niños, Bil y Hjúki, que caminaban cargando un cubo de agua sobre un palo entre ambos, y llevarlos consigo a la luna, donde todavía pueden distinguirse sus siluetas según la tradición popular escandinava —una imagen que algunos folcloristas vinculan con la posterior rima infantil inglesa de "Jack and Jill".

Al igual que su hermana, Máni es perseguido incesantemente por un lobo, en su caso Hati Hróðvitnisson, que le dará alcance durante el Ragnarök. La persecución paralela de ambos hermanos por lobos hambrientos refleja una ansiedad cosmológica nórdica muy concreta: la certeza de que el orden celeste actual, por estable que parezca, tiene una fecha de caducidad fijada desde el principio de los tiempos.`,
    origen: 'Dios que personifica y conduce la luna a través del cielo nocturno.',
    dominio: 'La luna y sus fases', naturaleza: 'Dios lunar perseguido', es_preview: 0
  },
  {
    tipo: 'titan', slug: 'nott', nombre: 'Nótt', nombre_griego: 'Nótt',
    epitetos: 'La Noche Primordial',
    descripcion_corta: 'Personificación primordial de la noche, madre de Dagr (el Día) — cabalga cada noche sobre Hrímfaxi, el caballo cuya espuma se convierte en rocío.',
    descripcion_larga: `Nótt, hija del gigante Nörfi (o Narfi), es la personificación de la noche dentro de la genealogía cósmica que recoge el Gylfaginning. Se casó en sucesivas ocasiones con distintas figuras, la última de las cuales, Dellingr ("el resplandeciente", asociado al amanecer), fue padre de su hijo Dagr, el Día, tan radiante como su padre. Odín, tras observar a madre e hijo, les asignó sendos carros y caballos para recorrer el cielo cada veinticuatro horas, uno tras otro, estableciendo así el ciclo eterno entre la noche y el día.

Nótt cabalga sobre un caballo llamado Hrímfaxi ("crin de escarcha"), cuyo freno cubierto de espuma deja caer gotas sobre la tierra cada amanecer, el origen mítico del rocío matutino. En algunas genealogías se la considera además abuela o bisabuela directa de varias figuras centrales del panteón, incluido el propio Thor a través de su hija Jörð (la Tierra), lo que convierte a Nótt en una antepasada primordial cuya oscuridad precede necesariamente a la luz que la sucede cada mañana.`,
    origen: 'Personificación primordial de la noche.',
    dominio: 'La noche y su ciclo eterno con el día', naturaleza: 'Diosa primordial de la oscuridad', es_preview: 0
  },

  // --- DIOSES (3) ---
  {
    tipo: 'dios', slug: 'ullr', nombre: 'Ullr', nombre_griego: 'Ullr',
    epitetos: 'El Dios del Arco y el Esquí',
    descripcion_corta: 'Dios del tiro con arco, el esquí y el duelo — hijastro de Thor, tan hábil que nadie podía competir contra él, y posiblemente mucho más venerado de lo que sugieren las escasas fuentes escritas que sobreviven.',
    descripcion_larga: `Ullr es hijo de Sif (esposa de Thor) de una relación anterior, lo que lo convierte en hijastro del dios del trueno sin ser su hijo biológico. El Skáldskaparmál lo describe como un arquero y esquiador tan extraordinariamente hábil que nadie podía igualarlo, cualidades que lo convertían en el dios apropiado para invocar antes de un duelo formal (hólmganga), la forma ritualizada de combate legal que resolvía disputas en la sociedad nórdica.

Pese a la escasez casi total de relatos mitológicos narrativos sobre él en las fuentes escritas que sobreviven, la enorme cantidad de topónimos escandinavos —sobre todo en Suecia y Noruega— que incorporan su nombre sugiere fuertemente que Ullr gozó de un culto mucho más extendido y prominente durante la época pre-vikinga que el que reflejan los textos islandeses tardíos que finalmente lo registraron por escrito, convirtiéndolo en uno de los ejemplos más claros de una gran divinidad nórdica cuya importancia real se fue "desvaneciendo" antes de que la tradición oral terminara de fijarse en pergamino.`,
    origen: 'Dios del arco, el esquí y el duelo formal, hijastro de Thor.',
    dominio: 'El tiro con arco, el esquí y los duelos', naturaleza: 'Dios cazador e hijastro real', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'eir', nombre: 'Eir', nombre_griego: 'Eir',
    epitetos: 'La Mejor de los Médicos',
    descripcion_corta: 'Diosa de la medicina y la sanación, descrita como "la mejor de los médicos" — asociada a las mujeres versadas en el arte de curar.',
    descripcion_larga: `Eir aparece en el Gylfaginning de Snorri Sturluson descrita simplemente pero de forma contundente como "la mejor de los médicos", una de las numerosas diosas que forman parte del séquito de Frigg junto al trono de Asgard. Su función dentro del panteón nórdico es específica y limitada en apariencia, pero de enorme importancia práctica en una sociedad donde la medicina y el cuidado de heridos y enfermos —sobre todo tras las incursiones guerreras— dependía directamente del conocimiento herbolario y curativo transmitido, en buena medida, por mujeres.

En el Þulur, una lista poética adicional de nombres, Eir aparece también asociada a las valquirias, sugiriendo una posible superposición entre su función curativa y el papel de estas guerreras sobrenaturales que decidían el destino de los caídos en batalla. La tradición islandesa posterior asoció además su nombre directamente con las mujeres humanas expertas en sanación, un vínculo lingüístico que sigue reconociéndose hoy en el propio término islandés para "médica".`,
    origen: 'Diosa de la medicina y la sanación, del séquito de Frigg.',
    dominio: 'La medicina y el arte de curar', naturaleza: 'Diosa sanadora', es_preview: 0
  },
  {
    tipo: 'dios', slug: 'vili-y-ve', nombre: 'Vili y Vé', nombre_griego: 'Vili ok Vé',
    epitetos: 'Los Hermanos de Odín, Co-Creadores del Mundo',
    descripcion_corta: 'Los dos hermanos de Odín, hijos de Borr y Bestla — juntos dieron muerte al gigante primordial Ymir y crearon el mundo a partir de su cuerpo.',
    descripcion_larga: `Vili y Vé son, junto a Odín, los tres hijos de Borr y la giganta Bestla, y protagonizan junto a su hermano mayor el acto fundacional más importante de toda la cosmología nórdica: dar muerte al gigante primordial Ymir y utilizar su enorme cuerpo desmembrado para construir el mundo entero —su carne se convirtió en la tierra, su sangre en el mar, sus huesos en las montañas, su cráneo en la bóveda celeste y sus cejas en la muralla que protege Midgard de los gigantes—.

Según la Völuspá, los tres hermanos participaron además juntos en la creación de los primeros seres humanos, Ask y Embla, a partir de dos troncos de árbol hallados en la orilla: Odín les otorgó el aliento y el espíritu, mientras que a Vili y Vé se les atribuye respectivamente haberles dado el entendimiento y el movimiento, o los sentidos y la forma física, según la versión de la fuente consultada. Pese a su papel fundacional compartido, ambos hermanos desaparecen casi por completo de la mitología posterior a la propia creación del mundo, quedando su identidad casi enteramente subsumida bajo la de Odín en la tradición narrativa que sobrevive.`,
    origen: 'Hermanos de Odín, co-creadores del mundo a partir del cuerpo de Ymir.',
    dominio: 'La creación primordial del mundo', naturaleza: 'Dioses primordiales fundadores', es_preview: 0
  },

  // --- HEROES (2) ---
  {
    tipo: 'heroe', slug: 'volund', nombre: 'Völund', nombre_griego: 'Völundr',
    epitetos: 'El Herrero Alado',
    descripcion_corta: 'Legendario príncipe herrero, mutilado y esclavizado por un rey codicioso — se vengó fabricándose alas para escapar volando tras una represalia terrible.',
    descripcion_larga: `Völund, señor de los elfos y herrero de habilidad sobrehumana, fue capturado por el rey Nídud, que ordenó cortarle los tendones de las corvas para impedir que escapara y lo obligó a trabajar forjando tesoros exclusivamente para la corona, aislado en una isla remota. Según el Völundarkviða, uno de los poemas eddicos más brutales que se conservan, Völund se vengó asesinando a los dos hijos del rey que se acercaron a su fragua, fabricando después copas con sus cráneos, joyas con sus ojos y un broche con sus dientes, todo ello enviado como regalo a la propia familia real sin que esta sospechara el origen macabro de los objetos.

Antes de escapar, Völund violó o sedujo (según la versión) a Böðvild, la hija del rey, dejándola embarazada, y finalmente huyó volando gracias a un par de alas que había fabricado él mismo en secreto durante su cautiverio, riendo desde el aire mientras le confesaba al rey derrotado la magnitud completa de su venganza. Su leyenda se extendió por toda la tradición germánica, nórdica y anglosajona bajo distintos nombres (Wayland el Herrero en Inglaterra, donde un túmulo neolítico en Oxfordshire lleva hasta hoy el nombre de "Wayland's Smithy" en su honor).`,
    origen: 'Legendario príncipe y herrero de los elfos.',
    dominio: 'La herrería y la venganza calculada', naturaleza: 'Héroe artesano vengativo', es_preview: 0
  },
  {
    tipo: 'heroe', slug: 'starkad', nombre: 'Starkad', nombre_griego: 'Starkaðr',
    epitetos: 'El Guerrero de las Tres Vidas Malditas',
    descripcion_corta: 'Héroe legendario al que Odín concedió tres vidas de duración, condenado por Thor a cometer tres grandes traiciones a cambio.',
    descripcion_larga: `Starkad, documentado extensamente en la "Gesta Danorum" del cronista medieval Saxo Grammaticus, recibió de Odín el don de vivir tres vidas de duración normal de un hombre, además de una habilidad excepcional para la poesía y la guerra. Pero Thor, que lo odiaba profundamente —según algunas versiones, por el origen giganteo de su linaje—, impuso una maldición equivalente: Starkad estaría destinado a cometer un acto vil y deshonroso (níðingsverk) en cada una de esas tres vidas, condenándolo a una existencia larga pero moralmente atormentada.

El más célebre de esos tres actos fue el asesinato traicionero del rey Víkar, su propio amigo y señor, a quien Starkad debía sacrificar ritualmente a Odín como parte de una ceremonia que ambos creían fingida: usando una fina rama de sauce en lugar de una soga real y una lanza de juguete, Starkad terminó atravesando genuinamente al rey cuando el sauce se transformó inesperadamente en una soga firme y la lanza en un arma real, cumpliendo el sacrificio de verdad sin haberlo planeado conscientemente. Starkad muere finalmente en su tercera vida a manos de un joven que decide matarlo por compasión, tras escuchar sus propios lamentos sobre el peso insoportable de una existencia tan prolongada y cargada de culpa.`,
    origen: 'Héroe legendario maldecido con tres vidas y tres traiciones.',
    dominio: 'La guerra, la poesía y la culpa perdurable', naturaleza: 'Héroe maldito de larga vida', es_preview: 0
  },

  // --- MONSTRUOS (2) ---
  {
    tipo: 'monstruo', slug: 'garmr', nombre: 'Garmr', nombre_griego: 'Garmr',
    epitetos: 'El Sabueso de la Entrada a Hel',
    descripcion_corta: 'El gran sabueso encadenado en la entrada del inframundo, cuyos aullidos anuncian el comienzo del Ragnarök.',
    descripcion_larga: `Garmr es el sabueso gigantesco atado en Gnipahellir, la caverna que marca la entrada al reino de Hel, descrito en el Völuspá como el más temible de todos los monstruos. Su pecho, manchado de sangre, y sus aullidos incesantes funcionan como una de las señales más claras e inconfundibles de que el fin del mundo se aproxima: cuando Garmr finalmente se libera de sus cadenas y aúlla con toda su fuerza, el Ragnarök ha comenzado de forma irreversible.

Durante la batalla final, Garmr se enfrenta directamente a Týr, el dios de una sola mano, en un duelo que ambos combatientes no sobrevivirán: se matan mutuamente, un eco directo y deliberadamente paralelo del combate igualmente mortal entre Odín y el lobo Fenrir que ocurre en el mismo campo de batalla. Algunos estudiosos han señalado el notable parecido funcional entre Garmr y Fenrir —ambos sabuesos o lobos monstruosos encadenados hasta el fin de los tiempos— como posible evidencia de que se trate, en tradiciones orales distintas, de una misma figura mítica desdoblada.`,
    origen: 'El gran sabueso guardián de la entrada al inframundo.',
    dominio: 'La entrada a Hel y el augurio del fin del mundo', naturaleza: 'Sabueso monstruoso encadenado', es_preview: 0
  },
  {
    tipo: 'monstruo', slug: 'ratatoskr', nombre: 'Ratatoskr', nombre_griego: 'Ratatoskr',
    epitetos: 'La Ardilla Chismosa de Yggdrasil',
    descripcion_corta: 'Ardilla que corre incesantemente por el fresno cósmico Yggdrasil, llevando insultos de ida y vuelta entre el águila de la copa y la serpiente Nídhögg de la raíz.',
    descripcion_larga: `Ratatoskr recorre sin descanso el tronco del fresno cósmico Yggdrasil, desde la copa —donde habita un águila sin nombre propio— hasta las raíces más profundas, donde la serpiente Nídhögg roe eternamente la madera del árbol. Según el Grímnismál, su función autoproclamada consiste exclusivamente en llevar mensajes insultantes de un extremo a otro, avivando deliberadamente la hostilidad mutua entre el águila y la serpiente en lugar de calmarla, un chismoso cósmico cuya actividad constante mantiene viva una enemistad que, de otro modo, quizás jamás llegaría a comunicarse directamente entre ambas partes.

Aunque su papel pueda parecer menor frente a las grandes figuras del panteón, Ratatoskr ocupa un lugar simbólico revelador dentro de la cosmología nórdica: encarna la discordia como fuerza activa y constante que recorre literalmente de arriba abajo el propio eje que sostiene los nueve mundos, sugiriendo que ni siquiera la estructura que sostiene el universo entero está libre de un conflicto perpetuo y deliberadamente alimentado.`,
    origen: 'Ardilla mensajera que recorre el fresno cósmico Yggdrasil.',
    dominio: 'El chisme y la discordia entre las criaturas de Yggdrasil', naturaleza: 'Espíritu animal de la discordia', es_preview: 0
  },

  // --- MORTALES (1) ---
  {
    tipo: 'mortal', slug: 'gudrun', nombre: 'Gudrun', nombre_griego: 'Guðrún',
    epitetos: 'La Vengadora Implacable',
    descripcion_corta: 'Esposa de Sigurd en la saga Völsunga — tras la muerte de sus hermanos a manos de su segundo esposo, Atli, se vengó sirviéndole el corazón de sus propios hijos.',
    descripcion_larga: `Gudrun, hija de Gjúki, se casó primero con el héroe Sigurd, asesinado poco después por sus propios cuñados en una trama de traición y pociones de olvido orquestada por su madre, Grimhild. Tras un periodo de duelo, Gudrun fue casada por segunda vez, en contra de su voluntad, con Atli (el mismo Atila que la historia recuerda como "el azote de Dios" al frente de los hunos), quien poco después invitó a los propios hermanos de Gudrun a un banquete solo para asesinarlos y apoderarse del legendario tesoro de los Nibelungos que estos custodiaban.

Gudrun respondió a la masacre de sus hermanos con una de las venganzas más despiadadas de toda la literatura nórdica: mató a los dos hijos que había tenido con el propio Atli, y le sirvió sus corazones y su sangre mezclada con vino durante un banquete, revelándole después exactamente lo que acababa de comer y beber. Esa misma noche, Gudrun asesinó a Atli mientras dormía y prendió fuego a todo su salón con el resto de su corte todavía dentro, un final que su propia historia comparte, con variaciones significativas, con la Kriemhild del posterior "Cantar de los Nibelungos" alemán, versión donde el papel de vengadora despiadada recae, de forma reveladora, sobre la propia familia de Atli en lugar de sobre ella.`,
    origen: 'Esposa de Sigurd, protagonista de la venganza más célebre de la saga Völsunga.',
    dominio: 'La venganza familiar implacable', naturaleza: 'Mujer legendaria vengadora', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-nordica'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-nordica".');
  return filas[0].id;
}

async function main() {
  console.log('Agregando 11 personajes nuevos a Mitologia Nordica...\n');
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
