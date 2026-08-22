// ============================================================
// scripts/sembrar-detalles-celta.js
// ------------------------------------------------------------
// Agrega simbolos, poderes y relaciones familiares a los 47
// personajes de Mitologia Celta. Correr DESPUES de que las
// partes 1, 2 y 3 hayan terminado. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-detalles-celta.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- TITANES ---
  cailleach: {
    simbolos: ['El martillo', 'Las montañas', 'El invierno'],
    poderes: [['Escultora del paisaje', 'Da forma a montañas y valles con golpes de su martillo.'], ['Señora del invierno', 'Controla las tormentas y el frío de la temporada oscura.']],
    familia: [['brigid', 'otro']]
  },
  ler: {
    simbolos: ['El mar', 'Las olas'],
    poderes: [['Soberanía del mar primordial', 'Gobierna el océano en su forma más antigua y abstracta.']],
    familia: [['manannan-mac-lir', 'padre']]
  },
  eriu: {
    simbolos: ['La tierra de Irlanda', 'El verde'],
    poderes: [['Soberanía de la tierra', 'Su nombre y bendición legitiman a quien gobierna Irlanda.']],
    familia: [['dagda', 'otro']]
  },
  domnu: {
    simbolos: ['El abismo', 'Las profundidades'],
    poderes: [['Madre de los Fomorianos', 'Encarna las fuerzas caóticas anteriores al orden divino.']],
    familia: [['balor', 'otro']]
  },
  cesair: {
    simbolos: ['El arca', 'El diluvio'],
    poderes: [['Primera colonizadora', 'Lidera al primer pueblo legendario en llegar a Irlanda.']],
    familia: []
  },

  // --- DIOSES ---
  dagda: {
    simbolos: ['El caldero inagotable', 'El garrote de doble filo', 'El arpa'],
    poderes: [['Caldero de la abundancia', 'Ningún comensal se retira de él sin quedar satisfecho.'], ['Garrote de vida y muerte', 'Un extremo mata con un golpe, el otro revive a los caídos.'], ['Control del clima y las cosechas', 'Como padre-dios, regula las estaciones y la fertilidad de la tierra.']],
    familia: [['eriu', 'otro'], ['brigid', 'hija'], ['aengus', 'hijo'], ['morrigan', 'amante']]
  },
  morrigan: {
    simbolos: ['El cuervo', 'El vado del río', 'La lanza'],
    poderes: [['Profecía de la batalla', 'Anuncia con su presencia quién vivirá y quién morirá en combate.'], ['Metamorfosis en cuervo', 'Sobrevuela los campos de batalla anunciando la muerte inminente.']],
    familia: [['dagda', 'amante'], ['cu-chulainn', 'enemigo']]
  },
  lugh: {
    simbolos: ['La lanza infalible', 'La honda', 'El sol'],
    poderes: [['Maestro de todas las artes', 'Domina simultáneamente la artesanía, la guerra, la música y la magia.'], ['Lanza infalible', 'Su arma nunca falla el golpe una vez lanzada.']],
    familia: [['balor', 'enemigo'], ['cu-chulainn', 'padre'], ['dagda', 'otro']]
  },
  brigid: {
    simbolos: ['La llama sagrada', 'El pozo', 'La cruz de juncos'],
    poderes: [['Fuego de la inspiración', 'Custodia una llama perpetua vinculada a la poesía y la curación.'], ['Sanación y partería', 'Preside los nacimientos y el cuidado de los enfermos.']],
    familia: [['dagda', 'padre'], ['cailleach', 'otro']]
  },
  nuada: {
    simbolos: ['La espada infalible', 'El brazo de plata'],
    poderes: [['Espada de la victoria', 'Ningún enemigo escapa una vez que esta arma es desenvainada.'], ['Brazo protésico de plata', 'Forjado por Dian Cécht y Goibniu tras perder su brazo original.']],
    familia: [['dian-cecht', 'aliado'], ['goibniu', 'aliado'], ['balor', 'enemigo']]
  },
  danu: {
    simbolos: ['El río', 'La tierra fértil'],
    poderes: [['Madre ancestral', 'Da nombre y origen a todo el pueblo de los Tuatha Dé Danann.']],
    familia: [['dagda', 'otro'], ['lugh', 'otro']]
  },
  'manannan-mac-lir': {
    simbolos: ['La capa de niebla', 'El caballo marino', 'La nave sin remos'],
    poderes: [['Dominio de las olas', 'Cabalga el mar como si fuera una llanura sólida.'], ['Capa de invisibilidad', 'Oculta islas y personas envolviéndolas en niebla mágica.']],
    familia: [['ler', 'hijo'], ['bran-mac-febail', 'aliado']]
  },
  ogma: {
    simbolos: ['Las cadenas de la elocuencia', 'La escritura ogham'],
    poderes: [['Fuerza guerrera', 'Uno de los mejores luchadores entre los Tuatha Dé Danann.'], ['Creador del ogham', 'Inventa el sistema de escritura sagrado irlandés.']],
    familia: [['dagda', 'hermano']]
  },
  aengus: {
    simbolos: ['Los pájaros que cantan amor', 'La arpa'],
    poderes: [['Sueños proféticos de amor', 'Encuentra a su amada a través de visiones repetidas.'], ['Protección mágica', 'Interviene repetidamente para salvar a los amantes perseguidos.']],
    familia: [['dagda', 'hijo'], ['diarmuid-ua-duibhne', 'aliado']]
  },
  'dian-cecht': {
    simbolos: ['El pozo sanador', 'Las hierbas'],
    poderes: [['Curación milagrosa', 'Puede sanar casi cualquier herida con hierbas y conjuros.'], ['Pozo de salud', 'Revive a guerreros heridos sumergiéndolos en sus aguas.']],
    familia: [['nuada', 'aliado']]
  },
  goibniu: {
    simbolos: ['El yunque', 'La cerveza de la inmortalidad'],
    poderes: [['Forja infalible', 'Ninguna arma que fabrica falla jamás en combate.'], ['Banquete eterno', 'Su cerveza otorga inmunidad a la vejez a quien la bebe.']],
    familia: [['nuada', 'aliado']]
  },
  epona: {
    simbolos: ['El caballo blanco', 'La cornucopia'],
    poderes: [['Protección de los caballos', 'Vela por jinetes, establos y viajeros a caballo.'], ['Fertilidad y abundancia', 'Asociada a cosechas prósperas y prosperidad general.']],
    familia: [['rhiannon', 'otro']]
  },
  cernunnos: {
    simbolos: ['La cornamenta de ciervo', 'La serpiente con cabeza de carnero', 'El torque'],
    poderes: [['Señor de los animales salvajes', 'Gobierna el bosque y todas sus criaturas.'], ['Ciclo de fertilidad', 'Encarna la abundancia natural y la renovación estacional.']],
    familia: []
  },
  rhiannon: {
    simbolos: ['El caballo blanco', 'Los pájaros cantores'],
    poderes: [['Velocidad inalcanzable', 'Su caballo nunca puede ser alcanzado al galope pese a avanzar al paso.'], ['Paciencia sobrehumana', 'Soporta una injusta condena sin perder su dignidad.']],
    familia: [['pwyll', 'conyuge'], ['epona', 'otro']]
  },
  arawn: {
    simbolos: ['Los sabuesos blancos de orejas rojas', 'La corona del Otro Mundo'],
    poderes: [['Soberanía de Annwn', 'Gobierna el Otro Mundo galés y sus criaturas.'], ['Intercambio de forma', 'Puede cambiar de apariencia con un aliado de confianza mutua.']],
    familia: [['pwyll', 'aliado']]
  },

  // --- HEROES ---
  'cu-chulainn': {
    simbolos: ['La lanza Gáe Bulg', 'El carro de guerra', 'El perro'],
    poderes: [['Ríastrad, la distorsión de guerra', 'Su furia de combate deforma su propio cuerpo.'], ['Entrenamiento de Scáthach', 'Domina técnicas de combate sobrehumanas.']],
    familia: [['lugh', 'padre'], ['morrigan', 'enemigo'], ['conchobar-mac-nessa', 'otro']]
  },
  'fionn-mac-cumhaill': {
    simbolos: ['El pulgar del conocimiento', 'El salmón sagrado', 'La lanza envenenada'],
    poderes: [['Sabiduría del salmón', 'Accede a conocimiento profético mordiéndose el pulgar.'], ['Liderazgo de los Fianna', 'Comanda a los mejores guerreros errantes de Irlanda.']],
    familia: [['oisin', 'padre'], ['diarmuid-ua-duibhne', 'enemigo'], ['grainne', 'enemigo']]
  },
  'diarmuid-ua-duibhne': {
    simbolos: ['El lunar de amor', 'La espada Moralltach'],
    poderes: [['Lunar irresistible', 'Enamora instantáneamente a cualquier mujer que lo vea.'], ['Destreza guerrera', 'Uno de los mejores combatientes de los Fianna.']],
    familia: [['grainne', 'amante'], ['fionn-mac-cumhaill', 'enemigo'], ['aengus', 'aliado']]
  },
  oisin: {
    simbolos: ['El caballo blanco de Tír na nÓg', 'La rama de manzano'],
    poderes: [['Poesía inspirada', 'Compone versos que narran las hazañas de los Fianna.'], ['Viaje al Otro Mundo', 'Cruza hacia Tír na nÓg y sobrevive para regresar.']],
    familia: [['fionn-mac-cumhaill', 'hijo']]
  },
  deirdre: {
    simbolos: ['El cuervo, la sangre y la nieve', 'Las lágrimas'],
    poderes: [['Belleza profética', 'Su nacimiento desata una profecía que se cumple inevitablemente.']],
    familia: [['naoise', 'amante'], ['conchobar-mac-nessa', 'enemigo']]
  },
  etain: {
    simbolos: ['La mariposa', 'La copa de vino'],
    poderes: [['Reencarnación', 'Renace como mortal tras ser transformada en insecto.'], ['Belleza reconocible', 'Es identificada entre cincuenta mujeres idénticas por quien la ama de verdad.']],
    familia: [['manannan-mac-lir', 'otro']]
  },
  'bran-mac-febail': {
    simbolos: ['La rama de plata florida', 'El barco'],
    poderes: [['Navegación al Otro Mundo', 'Alcanza Emain Ablach guiado por Manannán.']],
    familia: [['manannan-mac-lir', 'aliado']]
  },
  pwyll: {
    simbolos: ['Los sabuesos de Annwn', 'El montículo de Arberth'],
    poderes: [['Intercambio con el Otro Mundo', 'Gobierna Annwn temporalmente sin ser descubierto.'], ['Alianza sellada por honestidad', 'Gana la lealtad de Arawn cumpliendo el pacto sin engaños.']],
    familia: [['arawn', 'aliado'], ['rhiannon', 'conyuge']]
  },
  branwen: {
    simbolos: ['El estornino mensajero', 'El caldero de renacimiento'],
    poderes: [['Comunicación a distancia', 'Entrena a un ave para enviar auxilio a través del mar.']],
    familia: []
  },
  culhwch: {
    simbolos: ['El peine y las tijeras del jabalí', 'La corte de Arturo'],
    poderes: [['Búsqueda imposible', 'Completa tareas consideradas irrealizables con ayuda de aliados.']],
    familia: []
  },

  // --- MONSTRUOS ---
  balor: {
    simbolos: ['El ojo devastador', 'El gancho que abre el párpado'],
    poderes: [['Mirada mortal', 'Su ojo abierto mata instantáneamente a quien mire.']],
    familia: [['lugh', 'enemigo'], ['domnu', 'otro']]
  },
  dullahan: {
    simbolos: ['La cabeza bajo el brazo', 'El carruaje fúnebre', 'El látigo de columna vertebral'],
    poderes: [['Anuncio de muerte', 'Pronunciar un nombre completo sella el destino fatal de esa persona.']],
    familia: []
  },
  banshee: {
    simbolos: ['El cabello largo y suelto', 'El lamento nocturno'],
    poderes: [['Lamento profético', 'Su grito anuncia una muerte inminente en una familia específica.']],
    familia: []
  },
  sluagh: {
    simbolos: ['La bandada nocturna', 'El viento del oeste'],
    poderes: [['Vuelo colectivo de los muertos', 'Arrastra almas desprotegidas durante la noche.']],
    familia: []
  },
  'cu-sith': {
    simbolos: ['El pelaje verde oscuro', 'Las patas silenciosas'],
    poderes: [['Ladrido mortal', 'Tres ladridos anuncian la muerte de quien los escucha completos.']],
    familia: []
  },
  'each-uisge': {
    simbolos: ['La piel pegajosa', 'Las aguas profundas'],
    poderes: [['Transformación seductora', 'Adopta forma de caballo dócil o joven apuesto para atraer víctimas.']],
    familia: []
  },
  kelpie: {
    simbolos: ['La crin despeinada', 'El río de corriente rápida'],
    poderes: [['Engaño fluvial', 'Atrae viajeros para arrastrarlos a las profundidades del río.']],
    familia: []
  },
  'oilliphéist': {
    simbolos: ['El cuerpo serpentino colosal', 'El cauce del río'],
    poderes: [['Formación del paisaje', 'Su desplazamiento talla el curso de ríos enteros.']],
    familia: []
  },
  'cichol-gricenchos': {
    simbolos: ['El cuerpo sin piernas', 'El caos primordial'],
    poderes: [['Liderazgo fomoriano primordial', 'Encabeza la primera resistencia contra los colonizadores de Irlanda.']],
    familia: [['domnu', 'otro']]
  },
  afanc: {
    simbolos: ['Las cadenas de hierro', 'El lago desbordado'],
    poderes: [['Inundación catastrófica', 'Su movimiento en el agua provoca crecidas devastadoras.']],
    familia: []
  },
  puca: {
    simbolos: ['Los ojos dorados', 'La forma cambiante'],
    poderes: [['Metamorfosis animal', 'Se transforma en caballos, cabras y otros animales a voluntad.']],
    familia: []
  },
  abhartach: {
    simbolos: ['La piedra de la tumba', 'El espino y la ceniza de fresno'],
    poderes: [['Regreso de la muerte', 'Revive repetidamente exigiendo sangre de sus antiguos súbditos.']],
    familia: []
  },

  // --- MORTALES ---
  grainne: {
    simbolos: ['La geis vinculante', 'La huida nocturna'],
    poderes: [['Obligación mágica', 'Fuerza a un guerrero de honor a cumplir su exigencia mediante una geis.']],
    familia: [['diarmuid-ua-duibhne', 'amante'], ['fionn-mac-cumhaill', 'conyuge']]
  },
  naoise: {
    simbolos: ['El juramento de hospitalidad roto'],
    poderes: [['Lealtad y valentía', 'Guerrero de honor del Ulster, amado por Deirdre.']],
    familia: [['deirdre', 'amante'], ['conchobar-mac-nessa', 'enemigo']]
  },
  'conchobar-mac-nessa': {
    simbolos: ['El cráneo con el cerebro petrificado', 'La Rama Roja'],
    poderes: [['Autoridad real', 'Gobierna el Ulster y comanda a los guerreros de la Rama Roja.']],
    familia: [['cu-chulainn', 'otro'], ['deirdre', 'enemigo'], ['naoise', 'enemigo']]
  },
  medb: {
    simbolos: ['El toro pardo de Cooley', 'El ejército de Connacht'],
    poderes: [['Mando militar', 'Organiza una invasión masiva para igualar la riqueza de su esposo.']],
    familia: [['cu-chulainn', 'enemigo']]
  },
  'brendan-el-navegante': {
    simbolos: ['El currach de cuero', 'La Tierra Prometida de los Santos'],
    poderes: [['Navegación prodigiosa', 'Cruza el Atlántico durante siete años encontrando maravillas.']],
    familia: []
  }
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-celta'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-celta" -- créalo primero.');
  return filas[0].id;
}

async function obtenerIdSimbolo(nombre) {
  const [filas] = await pool.query('SELECT id FROM simbolos WHERE nombre = ?', [nombre]);
  if (filas.length > 0) return filas[0].id;
  const [resultado] = await pool.query('INSERT INTO simbolos (nombre) VALUES (?)', [nombre]);
  return resultado.insertId;
}

async function main() {
  console.log('Sembrando detalles (simbolos, poderes, familia) de Mitologia Celta...\n');
  const libroId = await obtenerLibroId();

  const [personajesLibro] = await pool.query('SELECT id, slug FROM personajes WHERE libro_id = ?', [libroId]);
  const idsPersonajes = {};
  for (const p of personajesLibro) idsPersonajes[p.slug] = p.id;

  for (const [slug, datos] of Object.entries(DATOS)) {
    const personajeId = idsPersonajes[slug];
    if (!personajeId) {
      console.log(`  ! Personaje con slug "${slug}" no encontrado, saltando.`);
      continue;
    }

    for (const nombreSimbolo of datos.simbolos || []) {
      const simboloId = await obtenerIdSimbolo(nombreSimbolo);
      const [existente] = await pool.query('SELECT 1 FROM personaje_simbolos WHERE personaje_id = ? AND simbolo_id = ?', [personajeId, simboloId]);
      if (existente.length === 0) {
        await pool.query('INSERT INTO personaje_simbolos (personaje_id, simbolo_id) VALUES (?, ?)', [personajeId, simboloId]);
      }
    }

    const [poderesExistentes] = await pool.query('SELECT COUNT(*) AS n FROM poderes WHERE personaje_id = ?', [personajeId]);
    if (poderesExistentes[0].n === 0) {
      let orden = 0;
      for (const [nombre, descripcion] of datos.poderes || []) {
        await pool.query('INSERT INTO poderes (personaje_id, nombre, descripcion, orden) VALUES (?, ?, ?, ?)', [personajeId, nombre, descripcion, orden]);
        orden += 1;
      }
    }

    for (const [slugRelacionado, tipoRelacion] of datos.familia || []) {
      const idRelacionado = idsPersonajes[slugRelacionado];
      if (!idRelacionado) {
        console.log(`  ! Relacion de "${slug}" apunta a slug inexistente "${slugRelacionado}", saltando.`);
        continue;
      }
      const [existente] = await pool.query(
        'SELECT 1 FROM relaciones_personajes WHERE personaje_id = ? AND personaje_relacionado_id = ? AND tipo_relacion = ?',
        [personajeId, idRelacionado, tipoRelacion]
      );
      if (existente.length === 0) {
        await pool.query(
          'INSERT INTO relaciones_personajes (personaje_id, personaje_relacionado_id, tipo_relacion) VALUES (?, ?, ?)',
          [personajeId, idRelacionado, tipoRelacion]
        );
      }
    }

    console.log(`  - Detalles de "${slug}" agregados.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
