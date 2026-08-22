// ============================================================
// scripts/sembrar-detalles-angelologia.js
// ------------------------------------------------------------
// Agrega simbolos, poderes y vinculos narrativos a los 47
// personajes de Angelologia. Correr DESPUES de que las partes 1,
// 2 y 3 hayan terminado. Idempotente.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-detalles-angelologia.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- PRIMORDIALES ---
  metatron: {
    simbolos: ['El trono junto al trono', 'La pluma del escriba celestial'],
    poderes: [['Registro celestial absoluto', 'Consigna con precisión las acciones de toda la humanidad.']],
    familia: [['sandalfon', 'hermano'], ['enoc', 'otro']]
  },
  sandalfon: {
    simbolos: ['La corona de plegarias tejidas'],
    poderes: [['Recolección de plegarias', 'Reúne las súplicas humanas y las presenta ante el trono divino.']],
    familia: [['metatron', 'hermano']]
  },
  shekinah: {
    simbolos: ['La nube y el fuego', 'La gloria habitando el Templo'],
    poderes: [['Presencia inmanente', 'Habita activamente entre la humanidad incluso en el exilio.']],
    familia: []
  },
  serafines: {
    simbolos: ['El canto "Santo, Santo, Santo"', 'El carbón ardiente'],
    poderes: [['Adoración incesante', 'Proclama sin descanso la santidad divina ante el trono.']],
    familia: []
  },
  'criaturas-vivientes': {
    simbolos: ['Los cuatro rostros', 'Las ruedas cubiertas de ojos'],
    poderes: [['Sostén del trono', 'Cargan y transportan el trono divino a través del cosmos.']],
    familia: [['ofanim', 'otro'], ['querubines', 'otro']]
  },

  // --- ARCANGELES ---
  miguel: {
    simbolos: ['La espada de fuego', 'La balanza del juicio'],
    poderes: [['Comando militar celestial', 'Lidera a los ejércitos del cielo contra las fuerzas rebeldes.']],
    familia: [['gabriel', 'otro'], ['rafael', 'otro']]
  },
  gabriel: {
    simbolos: ['El lirio blanco', 'La trompeta del anuncio'],
    poderes: [['Revelación de mensajes decisivos', 'Anuncia los nacimientos más trascendentales de la tradición.']],
    familia: [['zacarias', 'otro'], ['maria', 'otro'], ['daniel', 'otro']]
  },
  rafael: {
    simbolos: ['El pez sanador', 'El bastón del viajero'],
    poderes: [['Sanación completa', 'Cura la ceguera y libera de maldiciones demoníacas.']],
    familia: [['miguel', 'otro']]
  },
  uriel: {
    simbolos: ['La llama del conocimiento cósmico'],
    poderes: [['Guía cósmica', 'Revela los secretos del sol, la luna y las estrellas.']],
    familia: [['enoc', 'aliado']]
  },
  raguel: {
    simbolos: ['El registro de la disciplina celestial'],
    poderes: [['Vigilancia interna', 'Supervisa el comportamiento correcto de las huestes angelicales.']],
    familia: []
  },
  remiel: {
    simbolos: ['La visión verdadera'],
    poderes: [['Garantía profética', 'Asegura la autenticidad de las revelaciones genuinas.']],
    familia: []
  },
  saraqael: {
    simbolos: ['El aliento vigilado'],
    poderes: [['Supervisión espiritual', 'Vigila las transgresiones cometidas a través del propio espíritu.']],
    familia: []
  },
  israfil: {
    simbolos: ['La trompeta del fin del mundo'],
    poderes: [['El toque final', 'Anuncia tanto la destrucción del mundo como la resurrección de la humanidad.']],
    familia: []
  },
  azrael: {
    simbolos: ['El registro de las vidas asignadas'],
    poderes: [['Separación del alma y el cuerpo', 'Cumple con compasión la tarea de recoger cada alma.']],
    familia: []
  },
  malik: {
    simbolos: ['Las puertas del castigo eterno'],
    poderes: [['Custodia severa', 'Administra el Infierno sin conceder tregua a las súplicas.']],
    familia: [['ridwan', 'otro']]
  },
  ridwan: {
    simbolos: ['Las puertas del Paraíso'],
    poderes: [['Bienvenida gozosa', 'Recibe con alegría a las almas que han merecido la recompensa eterna.']],
    familia: [['malik', 'otro']]
  },
  'munkar-y-nakir': {
    simbolos: ['El interrogatorio de la tumba'],
    poderes: [['Examen de la fe', 'Interroga a cada difunto sobre los fundamentos de su creencia.']],
    familia: []
  },
  'harut-y-marut': {
    simbolos: ['La advertencia sobre la magia'],
    poderes: [['Enseñanza de prueba', 'Revelan el conocimiento de la magia como advertencia deliberada.']],
    familia: []
  },
  jofiel: {
    simbolos: ['La espada giratoria del Edén'],
    poderes: [['Custodia de la belleza sagrada', 'Guarda la entrada al Jardín del Edén tras la expulsión.']],
    familia: []
  },
  chamuel: {
    simbolos: ['El corazón buscador'],
    poderes: [['Fortalecimiento en la agonía', 'Reconforta en los momentos de mayor angustia espiritual.']],
    familia: []
  },

  // --- HEROES ---
  enoc: {
    simbolos: ['El libro de las visiones celestiales'],
    poderes: [['Ascensión sin muerte', 'Es llevado directamente al cielo sin experimentar el fallecimiento.']],
    familia: [['metatron', 'otro'], ['uriel', 'aliado']]
  },
  jacob: {
    simbolos: ['El vado de Jaboc', 'El muslo dislocado'],
    poderes: [['Lucha con lo divino', 'Combate cuerpo a cuerpo hasta el amanecer sin ser vencido.']],
    familia: []
  },
  abraham: {
    simbolos: ['Los tres visitantes bajo la encina'],
    poderes: [['Hospitalidad recompensada', 'Recibe la promesa de un hijo por su generosidad genuina.']],
    familia: [['lot', 'otro'], ['agar', 'otro']]
  },
  daniel: {
    simbolos: ['La visión del hombre vestido de lino'],
    poderes: [['Interpretación revelada', 'Recibe explicaciones directas sobre sus propias visiones.']],
    familia: [['gabriel', 'otro'], ['miguel', 'otro']]
  },
  zacarias: {
    simbolos: ['El altar del incienso', 'El silencio impuesto'],
    poderes: [['Anuncio dudado', 'Recibe la noticia de un hijo pese a la edad avanzada de su esposa.']],
    familia: [['gabriel', 'otro']]
  },
  maria: {
    simbolos: ['El lirio blanco de la Anunciación'],
    poderes: [['Aceptación serena', 'Responde con fe inmediata al anuncio más trascendental de la tradición.']],
    familia: [['gabriel', 'otro']]
  },
  agar: {
    simbolos: ['El pozo revelado en el desierto'],
    poderes: [['Visión de Dios', 'Ve directamente a la divinidad y sobrevive para contarlo.']],
    familia: [['abraham', 'otro']]
  },
  elias: {
    simbolos: ['La torta cocida sobre piedras calientes'],
    poderes: [['Restauración en la crisis', 'Recibe fuerza física y espiritual para continuar su misión.']],
    familia: []
  },
  lot: {
    simbolos: ['La ciudad en llamas', 'La estatua de sal'],
    poderes: [['Rescate forzado', 'Es sacado a la fuerza de la destrucción inminente.']],
    familia: [['abraham', 'otro']]
  },
  gedeon: {
    simbolos: ['La encina de la comisión', 'El fuego que consume la ofrenda'],
    poderes: [['Comisión confirmada', 'Recibe una señal innegable pese a sus propias dudas iniciales.']],
    familia: []
  },

  // --- MONSTRUOS ---
  ofanim: {
    simbolos: ['Los aros cubiertos de ojos'],
    poderes: [['Movimiento sincronizado', 'Se desplazan en perfecta unidad con las criaturas vivientes.']],
    familia: [['criaturas-vivientes', 'otro']]
  },
  querubines: {
    simbolos: ['La espada de fuego giratoria'],
    poderes: [['Custodia armada', 'Guardan los lugares más sagrados con fuerza implacable.']],
    familia: [['criaturas-vivientes', 'otro']]
  },
  erelim: {
    simbolos: ['El llanto poderoso'],
    poderes: [['Lamento compasivo', 'Lloran genuinamente ante la injusticia y el sufrimiento del mundo.']],
    familia: []
  },
  camael: {
    simbolos: ['La sefirá de Guevurá'],
    poderes: [['Juicio riguroso', 'Ejecuta la severidad y la limitación necesarias dentro del orden divino.']],
    familia: []
  },
  dumah: {
    simbolos: ['El silencio de la tumba'],
    poderes: [['Custodia del silencio', 'Vigila a las almas en el periodo intermedio antes del juicio final.']],
    familia: []
  },
  gadreel: {
    simbolos: ['La espada de hierro forjada'],
    poderes: [['Enseñanza mortal', 'Revela a la humanidad el arte de fabricar armas de guerra.']],
    familia: []
  },
  rahab: {
    simbolos: ['Las aguas primordiales del caos'],
    poderes: [['Rebeldía primordial', 'Se niega a separarse durante la creación, desatando su propia destrucción.']],
    familia: []
  },
  sariel: {
    simbolos: ['La luna y sus ciclos'],
    poderes: [['Anuncio de la muerte', 'Comunica a las almas la orden final de su propio fallecimiento.']],
    familia: []
  },
  'malaj-hamavet': {
    simbolos: ['La gota amarga de la espada'],
    poderes: [['Recolección universal', 'Recoge las almas humanas en el momento exacto de su muerte.']],
    familia: []
  },
  lailah: {
    simbolos: ['El surco bajo la nariz'],
    poderes: [['Enseñanza prenatal y olvido', 'Muestra toda la sabiduría antes del nacimiento y luego la borra.']],
    familia: []
  },
  temeluchus: {
    simbolos: ['Los tormentos correspondientes a cada pecado'],
    poderes: [['Administración del castigo', 'Ejecuta tormentos con correspondencia simbólica directa al pecado cometido.']],
    familia: []
  },
  nuriel: {
    simbolos: ['El fuego celestial y el granizo'],
    poderes: [['Dominio del clima extremo', 'Controla fenómenos meteorológicos violentos bajo mandato divino.']],
    familia: []
  },

  // --- MORTALES ---
  'pseudo-dionisio-areopagita': {
    simbolos: ['Los nueve coros celestiales'],
    poderes: [['Sistematización jerárquica', 'Establece la clasificación angelical adoptada por siglos.']],
    familia: [['tomas-de-aquino', 'aliado'], ['gregorio-magno', 'aliado']]
  },
  'tomas-de-aquino': {
    simbolos: ['La Suma Teológica'],
    poderes: [['Análisis filosófico riguroso', 'Define con precisión la naturaleza metafísica angelical.']],
    familia: [['pseudo-dionisio-areopagita', 'aliado']]
  },
  'emanuel-swedenborg': {
    simbolos: ['Las visiones sostenidas del cielo'],
    poderes: [['Comunicación angelical directa', 'Mantiene conversaciones sostenidas con ángeles durante décadas.']],
    familia: []
  },
  'john-dee': {
    simbolos: ['La piedra de cristal', 'El alfabeto enoquiano'],
    poderes: [['Magia enoquiana', 'Desarrolla un sistema completo de comunicación ritual con ángeles.']],
    familia: []
  },
  'gregorio-magno': {
    simbolos: ['El orden reorganizado de los nueve coros'],
    poderes: [['Reorganización jerárquica', 'Afina la secuencia de los coros adoptada por la tradición occidental.']],
    familia: [['pseudo-dionisio-areopagita', 'aliado']]
  }
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'angelologia'");
  if (filas.length === 0) throw new Error('No existe el libro "angelologia" -- créalo primero.');
  return filas[0].id;
}

async function obtenerIdSimbolo(nombre) {
  const [filas] = await pool.query('SELECT id FROM simbolos WHERE nombre = ?', [nombre]);
  if (filas.length > 0) return filas[0].id;
  const [resultado] = await pool.query('INSERT INTO simbolos (nombre) VALUES (?)', [nombre]);
  return resultado.insertId;
}

async function main() {
  console.log('Sembrando detalles (simbolos, poderes, vinculos) de Angelologia...\n');
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
