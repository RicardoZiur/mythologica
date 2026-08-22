// ============================================================
// scripts/sembrar-detalles-japonesa.js
// ------------------------------------------------------------
// Agrega simbolos, poderes y vinculos familiares a los 47
// personajes de Mitologia Japonesa (ya sembrados por
// sembrar-personajes-japonesa-parte{1,2,3}.js con la biografia
// completa desde el inicio). Idempotente via slug+libro_id --
// correr DESPUES de las 3 partes.
//
// COMO CORRERLO (desde backend/, con el tunel activo):
//   node scripts/sembrar-detalles-japonesa.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- TITANES ---
  izanagi: { simbolos: ['Lanza celestial Ame-no-Nuboko', 'Espada Totsuka-no-Tsurugi', 'Peine de bambú'], poderes: [['Purificación primordial', 'Su baño ritual da origen a los tres dioses más importantes del panteón.'], ['Dar forma a la tierra', 'Junto a Izanami crea las islas de Japón removiendo el océano primordial.']], familia: [['izanami', 'conyuge'], ['amaterasu', 'padre'], ['susanoo', 'padre'], ['tsukuyomi', 'padre']] },
  izanami: { simbolos: ['Fuego de Kagutsuchi', 'Puerta de roca de Yomi'], poderes: [['Engendrar la creación', 'De su unión con Izanagi nacen las islas y los primeros dioses.'], ['Gobernar Yomi', 'Tras su muerte se convierte en soberana absoluta del inframundo.']], familia: [['izanagi', 'conyuge'], ['izanagi', 'enemigo']] },
  kunitokotachi: { simbolos: ['Junco primordial', 'Tierra recién formada'], poderes: [['Origen de la tierra firme', 'Es la primera forma sólida en surgir del caos primordial.']], familia: [] },
  'ame-no-minakanushi': { simbolos: ['Centro invisible del cielo', 'Estrella fija'], poderes: [['Presidir sin intervenir', 'Su sola existencia ordena el cosmos sin necesidad de actuar.']], familia: [['takamimusubi', 'aliado']] },
  takamimusubi: { simbolos: ['Hilo que une cielo y tierra', 'Asamblea de Takamagahara'], poderes: [['Tejer el destino divino', 'Guía las decisiones del consejo celestial en los momentos clave.']], familia: [['ame-no-minakanushi', 'aliado'], ['ninigi', 'mentor']] },

  // --- DIOSES ---
  amaterasu: { simbolos: ['Espejo Yata no Kagami', 'Sol naciente', 'Cueva celestial Ama-no-Iwato'], poderes: [['Gobernar la luz del sol', 'Sin su presencia el mundo entero cae en oscuridad total.'], ['Legitimar el trono imperial', 'Su linaje divino sostiene la autoridad de los emperadores de Japón.']], familia: [['izanagi', 'hija'], ['susanoo', 'hermano'], ['tsukuyomi', 'hermano'], ['ninigi', 'mentor']] },
  susanoo: { simbolos: ['Espada Kusanagi', 'Tormenta marina'], poderes: [['Dominar tormentas y mares', 'Comanda el viento y el oleaje a su antojo.'], ['Matar monstruos', 'Venció por sí solo a la serpiente de ocho cabezas.']], familia: [['izanagi', 'hijo'], ['amaterasu', 'hermano'], ['tsukuyomi', 'hermano'], ['yamata-no-orochi', 'enemigo']] },
  tsukuyomi: { simbolos: ['Luna llena', 'Espada de la noche'], poderes: [['Gobernar la noche', 'Ilumina el cielo cuando el sol de su hermana descansa.']], familia: [['izanagi', 'hijo'], ['amaterasu', 'hermano'], ['susanoo', 'hermano']] },
  inari: { simbolos: ['Zorro blanco (kitsune)', 'Espiga de arroz', 'Torii bermellón'], poderes: [['Multiplicar la cosecha', 'Bendice los campos de arroz de quienes le rinden culto.']], familia: [] },
  raijin: { simbolos: ['Tambores en círculo', 'Rayo'], poderes: [['Producir el trueno', 'Cada golpe de sus tambores desata una descarga sobre la tierra.']], familia: [['fujin', 'aliado']] },
  fujin: { simbolos: ['Saco del viento', 'Nubes veloces'], poderes: [['Liberar el viento', 'El contenido de su saco puede desatar vendavales o calmarlos.']], familia: [['raijin', 'aliado']] },
  hachiman: { simbolos: ['Arco y flecha', 'Paloma mensajera'], poderes: [['Proteger a los guerreros', 'Vela por la victoria de quienes luchan con causa justa.']], familia: [['jingu', 'aliado']] },
  ebisu: { simbolos: ['Caña de pescar', 'Pez tai'], poderes: [['Traer buena fortuna', 'Bendice la pesca y el comercio honesto.']], familia: [['daikokuten', 'aliado'], ['izanagi', 'hijo'], ['izanami', 'hijo']] },
  daikokuten: { simbolos: ['Martillo de la fortuna', 'Sacos de arroz'], poderes: [['Multiplicar la riqueza', 'Cada golpe de su martillo puede conceder abundancia.']], familia: [['ebisu', 'aliado']] },
  benzaiten: { simbolos: ['Biwa (laúd)', 'Serpiente blanca'], poderes: [['Inspirar la elocuencia', 'Concede talento musical y facilidad de palabra.']], familia: [['ryujin', 'aliado']] },
  bishamonten: { simbolos: ['Pagoda dorada', 'Lanza guerrera'], poderes: [['Proteger contra el mal', 'Vigila el norte y castiga a quienes rompen la ley.']], familia: [] },
  'konohanasakuya-hime': { simbolos: ['Flor de cerezo', 'Monte Fuji'], poderes: [['Florecer y consumirse', 'Su vida breve y hermosa dio origen a la existencia igual de fugaz de los humanos.']], familia: [['ninigi', 'conyuge'], ['hoori', 'madre'], ['hoderi', 'madre']] },
  ryujin: { simbolos: ['Palacio Ryūgū-jō', 'Joyas de la marea'], poderes: [['Gobernar las mareas', 'Controla el flujo y reflujo del océano con dos joyas mágicas.']], familia: [['otohime', 'padre'], ['hoori', 'aliado']] },
  tenjin: { simbolos: ['Ciruelo en flor', 'Buey sagrado'], poderes: [['Conceder sabiduría', 'Los estudiantes le rezan antes de cada examen importante.']], familia: [] },
  sarutahiko: { simbolos: ['Nariz larga bermellón', 'Cruce de caminos celestial'], poderes: [['Guiar el descenso divino', 'Condujo personalmente a Ninigi hasta la tierra.']], familia: [['ninigi', 'aliado']] },

  // --- HEROES ---
  ninigi: { simbolos: ['Espejo, espada y joya (Tres Insignias)', 'Arroz sagrado'], poderes: [['Fundar el linaje imperial', 'Su descendencia gobernará Japón para siempre.']], familia: [['amaterasu', 'mentor'], ['takamimusubi', 'mentor'], ['sarutahiko', 'aliado'], ['konohanasakuya-hime', 'conyuge'], ['hoori', 'padre'], ['hoderi', 'padre']] },
  'yamato-takeru': { simbolos: ['Espada Kusanagi', 'Manto contra el fuego'], poderes: [['Fuerza sobrehumana', 'Somete clanes enteros desde muy joven.']], familia: [] },
  momotaro: { simbolos: ['Melocotón gigante', 'Estandarte con el carácter "oni"'], poderes: [['Liderar a los animales aliados', 'Un perro, un mono y un faisán lo siguen a la batalla.']], familia: [['oni', 'enemigo']] },
  'urashima-taro': { simbolos: ['Caja Tamatebako', 'Tortuga marina'], poderes: [['Visitar el palacio del mar', 'Puede llegar a Ryūgū-jō guiado por su propia compasión.']], familia: [['otohime', 'aliado'], ['ryujin', 'aliado']] },
  kintaro: { simbolos: ['Hacha gigante', 'Peto con el carácter "kin"'], poderes: [['Fuerza descomunal infantil', 'Vence animales adultos del bosque desde niño.']], familia: [['minamoto-no-yorimitsu', 'mentor'], ['shuten-doji', 'enemigo']] },
  jimmu: { simbolos: ['Cuervo de tres patas Yatagarasu', 'Arco imperial'], poderes: [['Fundar el trono de Japón', 'Su coronación marca el inicio oficial de la línea imperial.']], familia: [['hoori', 'aliado'], ['otohime', 'aliado']] },
  otohime: { simbolos: ['Palacio Ryūgū-jō', 'Manto de escamas'], poderes: [['Gobernar el palacio submarino', 'Administra el reino de su padre bajo el mar.']], familia: [['ryujin', 'hija'], ['hoori', 'conyuge'], ['urashima-taro', 'aliado'], ['jimmu', 'aliado']] },
  hoori: { simbolos: ['Anzuelo recuperado', 'Joyas de la marea'], poderes: [['Controlar las mareas', 'Las joyas de Ryūjin le permiten inundar o calmar el mar a voluntad.']], familia: [['ninigi', 'padre'], ['konohanasakuya-hime', 'madre'], ['hoderi', 'hermano'], ['hoderi', 'enemigo'], ['otohime', 'conyuge'], ['ryujin', 'aliado']] },
  hoderi: { simbolos: ['Caña de pescar', 'Red marina'], poderes: [['Maestría de la pesca', 'Ningún pescador iguala su destreza original en el mar.']], familia: [['ninigi', 'padre'], ['konohanasakuya-hime', 'madre'], ['hoori', 'hermano'], ['hoori', 'enemigo']] },
  'issun-boshi': { simbolos: ['Aguja como espada', 'Cuenco como barca'], poderes: [['Crecer con el mazo mágico', 'El mazo del oni derrotado lo convierte en un guerrero de tamaño normal.']], familia: [['oni', 'enemigo']] },

  // --- MONSTRUOS ---
  'yamata-no-orochi': { simbolos: ['Ocho cabezas', 'Ojos rojos como cerezas'], poderes: [['Regenerar el terror', 'Cada una de sus ocho cabezas exige un sacrificio distinto cada año.']], familia: [['susanoo', 'enemigo']] },
  tsuchigumo: { simbolos: ['Telaraña gigante', 'Guarida subterránea'], poderes: [['Tejer trampas mortales', 'Atrapa a sus víctimas en hilos imposibles de romper.']], familia: [['minamoto-no-yorimitsu', 'enemigo']] },
  nue: { simbolos: ['Cabeza de mono', 'Cola de serpiente'], poderes: [['Provocar pesadillas nocturnas', 'Su grito anuncia enfermedad para quien lo escucha.']], familia: [] },
  kappa: { simbolos: ['Cuenco de agua en la cabeza', 'Caparazón de tortuga'], poderes: [['Perder poder fuera del agua', 'Su cuenco derramado lo deja completamente indefenso.']], familia: [] },
  tengu: { simbolos: ['Nariz larga o pico de ave', 'Abanico de plumas'], poderes: [['Volar entre las montañas', 'Se desplaza a voluntad entre picos considerados sagrados.']], familia: [['sarutahiko', 'aliado']] },
  oni: { simbolos: ['Cuernos y colmillos', 'Maza con púas (kanabō)'], poderes: [['Fuerza descomunal', 'Puede derribar una casa entera de un solo golpe.']], familia: [['momotaro', 'enemigo'], ['issun-boshi', 'enemigo'], ['shuten-doji', 'aliado']] },
  'yuki-onna': { simbolos: ['Kimono blanco', 'Aliento helado'], poderes: [['Congelar con el aliento', 'Puede matar de frío con un solo suspiro.']], familia: [] },
  rokurokubi: { simbolos: ['Cuello extensible', 'Sombra nocturna'], poderes: [['Estirar el cuello a voluntad', 'De noche su cabeza puede alejarse del cuerpo dormido.']], familia: [] },
  'tamamo-no-mae': { simbolos: ['Nueve colas', 'Piedra asesina (Sesshō-seki)'], poderes: [['Encantar sin ser detectada', 'Engaña a cortes enteras bajo una belleza perfecta.']], familia: [['abe-no-seimei', 'enemigo']] },
  namazu: { simbolos: ['Piedra Kaname-ishi', 'Bigotes sísmicos'], poderes: [['Provocar terremotos', 'Cada movimiento suyo bajo tierra sacude el archipiélago entero.']], familia: [] },
  baku: { simbolos: ['Trompa de tapir', 'Cuerpo quimérico'], poderes: [['Devorar pesadillas', 'Consume los malos sueños de quien lo invoca antes de dormir.']], familia: [] },
  'shuten-doji': { simbolos: ['Sake envenenado', 'Fortaleza del monte Ōe'], poderes: [['Comandar un ejército de oni', 'Ningún guerrero común se atreve a desafiar su fortaleza.']], familia: [['minamoto-no-yorimitsu', 'enemigo'], ['watanabe-no-tsuna', 'enemigo'], ['kintaro', 'enemigo'], ['oni', 'aliado']] },

  // --- MORTALES ---
  jingu: { simbolos: ['Joyas de la marea', 'Armadura de campaña'], poderes: [], familia: [['hachiman', 'aliado'], ['takenouchi-no-sukune', 'aliado']] },
  'watanabe-no-tsuna': { simbolos: ['Espada Higekiri', 'Puerta Rashōmon'], poderes: [], familia: [['minamoto-no-yorimitsu', 'aliado'], ['shuten-doji', 'enemigo']] },
  'minamoto-no-yorimitsu': { simbolos: ['Espada Dōjigiri', 'Sake de los dioses'], poderes: [], familia: [['shuten-doji', 'enemigo'], ['watanabe-no-tsuna', 'aliado'], ['kintaro', 'mentor'], ['tsuchigumo', 'enemigo']] },
  'abe-no-seimei': { simbolos: ['Sello pentagonal (gobōsei)', 'Shikigami invisibles'], poderes: [['Comandar espíritus shikigami', 'Ordena a espíritus invisibles cumplir sus tareas.']], familia: [['tamamo-no-mae', 'enemigo']] },
  'takenouchi-no-sukune': { simbolos: ['Bastón de anciano', 'Registro de emperadores'], poderes: [], familia: [['jingu', 'aliado']] }
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-japonesa'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-japonesa".');
  return filas[0].id;
}

async function obtenerOCrearSimbolo(nombre) {
  const [existente] = await pool.query('SELECT id FROM simbolos WHERE nombre = ?', [nombre]);
  if (existente.length > 0) return existente[0].id;
  const [resultado] = await pool.query('INSERT INTO simbolos (nombre) VALUES (?)', [nombre]);
  return resultado.insertId;
}

async function procesarUno(slug, datos, idsPersonajes) {
  const personajeId = idsPersonajes[slug];
  if (!personajeId) {
    console.log(`  ! Personaje "${slug}" no encontrado, se salta.`);
    return;
  }

  const [[personaje]] = await pool.query('SELECT nombre FROM personajes WHERE id = ?', [personajeId]);

  for (const nombreSimbolo of datos.simbolos) {
    const simboloId = await obtenerOCrearSimbolo(nombreSimbolo);
    const [vinculo] = await pool.query('SELECT 1 FROM personaje_simbolos WHERE personaje_id = ? AND simbolo_id = ?', [personajeId, simboloId]);
    if (vinculo.length === 0) {
      await pool.query('INSERT INTO personaje_simbolos (personaje_id, simbolo_id) VALUES (?, ?)', [personajeId, simboloId]);
    }
  }

  for (let i = 0; i < datos.poderes.length; i++) {
    const [nombrePoder, descripcionPoder] = datos.poderes[i];
    const [existente] = await pool.query('SELECT id FROM poderes WHERE personaje_id = ? AND nombre = ?', [personajeId, nombrePoder]);
    if (existente.length === 0) {
      await pool.query('INSERT INTO poderes (personaje_id, nombre, descripcion, orden) VALUES (?, ?, ?, ?)', [personajeId, nombrePoder, descripcionPoder, i + 1]);
    }
  }

  for (const [slugRelacionado, tipoRelacion] of datos.familia) {
    const idRelacionado = idsPersonajes[slugRelacionado];
    if (!idRelacionado) {
      console.log(`    ! Relacionado "${slugRelacionado}" no encontrado para ${slug}, se salta ese vinculo.`);
      continue;
    }
    const [existente] = await pool.query(
      'SELECT id FROM relaciones_personajes WHERE personaje_id = ? AND personaje_relacionado_id = ? AND tipo_relacion = ?',
      [personajeId, idRelacionado, tipoRelacion]
    );
    if (existente.length === 0) {
      await pool.query(
        'INSERT INTO relaciones_personajes (personaje_id, personaje_relacionado_id, tipo_relacion) VALUES (?, ?, ?)',
        [personajeId, idRelacionado, tipoRelacion]
      );
    }
  }

  console.log(`  - "${personaje.nombre}" completado.`);
}

async function main() {
  console.log('Agregando simbolos, poderes y familia a Mitologia Japonesa...\n');
  const libroId = await obtenerLibroId();

  const [filas] = await pool.query('SELECT id, slug FROM personajes WHERE libro_id = ?', [libroId]);
  const idsPersonajes = {};
  filas.forEach(f => { idsPersonajes[f.slug] = f.id; });

  for (const [slug, datos] of Object.entries(DATOS)) {
    await procesarUno(slug, datos, idsPersonajes);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
