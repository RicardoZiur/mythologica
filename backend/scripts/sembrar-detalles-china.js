// ============================================================
// scripts/sembrar-detalles-china.js
// ------------------------------------------------------------
// Agrega simbolos, poderes y vinculos familiares a los 47
// personajes de Mitologia China (ya sembrados por
// sembrar-personajes-china-parte{1,2,3}.js con la biografia
// completa desde el inicio). Idempotente via slug+libro_id --
// correr DESPUES de las 3 partes.
//
// COMO CORRERLO (desde backend/, con el tunel activo):
//   node scripts/sembrar-detalles-china.js
// ============================================================

const pool = require('../config/db');

const DATOS = {
  // --- TITANES ---
  pangu: { simbolos: ['Huevo cósmico', 'Hacha primordial'], poderes: [['Separar el cielo y la tierra', 'Su esfuerzo milenario mantiene el cosmos ordenado.'], ['Formar el mundo con su cuerpo', 'Cada parte de su cuerpo se transforma en un elemento del mundo al morir.']], familia: [] },
  nuwa: { simbolos: ['Piedras de cinco colores', 'Cola de serpiente', 'Barro amarillo'], poderes: [['Crear vida humana', 'Modela seres humanos a partir de barro y les da aliento.'], ['Remendar el cielo', 'Puede reparar el firmamento roto con piedras fundidas.']], familia: [['fuxi', 'conyuge'], ['gonggong', 'enemigo']] },
  fuxi: { simbolos: ['Ocho trigramas (bagua)', 'Red de pesca', 'Cola de serpiente'], poderes: [['Leer los patrones cósmicos', 'Interpreta el orden oculto del cielo, la tierra y los animales.']], familia: [['nuwa', 'conyuge']] },
  gonggong: { simbolos: ['Cabello rojo', 'Pilar roto del cielo'], poderes: [['Gobernar las inundaciones', 'Las aguas desbordadas obedecen su voluntad caótica.']], familia: [['nuwa', 'enemigo'], ['zhurong', 'enemigo'], ['xiangliu', 'aliado']] },
  hundun: { simbolos: ['Saco amarillo sin rostro', 'Siete orificios'], poderes: [['Encarnar el caos original', 'Su sola existencia precede a cualquier distinción u orden posible.']], familia: [['taotie', 'aliado'], ['qiongqi', 'aliado'], ['taowu', 'aliado']] },

  // --- DIOSES ---
  'yu-huang': { simbolos: ['Corte celestial', 'Libro de la Vida y la Muerte'], poderes: [['Gobernar el cosmos entero', 'Administra el destino de dioses, inmortales y mortales por igual.']], familia: [['zao-jun', 'aliado']] },
  'xi-wangmu': { simbolos: ['Melocotones de la inmortalidad', 'Montaña Kunlun', 'Fénix'], poderes: [['Conceder la inmortalidad', 'Sus melocotones sagrados otorgan vida eterna a quien los consume.']], familia: [] },
  guanyin: { simbolos: ['Jarrón de agua pura', 'Rama de sauce', 'Mil brazos'], poderes: [['Escuchar todo sufrimiento', 'Percibe el lamento de cualquier ser en cualquier rincón del mundo.'], ['Auxilio incondicional', 'Acude en ayuda de quien sufre sin exigir nada a cambio.']], familia: [['sun-wukong', 'mentor']] },
  'erlang-shen': { simbolos: ['Tercer ojo vertical', 'Lanza de tres puntas', 'Perro celestial Xiaotian'], poderes: [['Ver la verdad oculta', 'Su tercer ojo percibe cualquier disfraz o ilusión mágica.']], familia: [['sun-wukong', 'enemigo']] },
  zhurong: { simbolos: ['Dos dragones', 'Llama eterna'], poderes: [['Dominar el fuego', 'Gobierna desde el fuego doméstico hasta el incendio devastador.']], familia: [['gonggong', 'enemigo']] },
  leigong: { simbolos: ['Martillos gemelos', 'Tambores del trueno', 'Alas y garras'], poderes: [['Ejecutar la justicia celestial', 'Fulmina con el rayo a criminales que la justicia humana no alcanza.']], familia: [['dianmu', 'aliado']] },
  dianmu: { simbolos: ['Espejos de bronce', 'Relámpago'], poderes: [['Revelar la verdad', 'Sus espejos iluminan al culpable antes de que caiga el trueno.']], familia: [['leigong', 'aliado']] },
  caishen: { simbolos: ['Lingotes de oro', 'Cofre de tesoro'], poderes: [['Multiplicar la fortuna', 'Puede conceder prosperidad comercial repentina.']], familia: [] },
  tudigong: { simbolos: ['Barba blanca', 'Bastón de anciano'], poderes: [['Vigilar un terreno específico', 'Protege un pueblo o parcela particular de desgracias menores.']], familia: [] },
  'yan-wang': { simbolos: ['Libro de registros', 'Vestiduras de juez imperial'], poderes: [['Juzgar a los muertos', 'Determina el destino final de cada alma según sus acciones en vida.']], familia: [] },
  mazu: { simbolos: ['Vestiduras rojas', 'Los generales Ojo de Mil Millas y Oído del Viento Favorable'], poderes: [['Predecir tormentas', 'Anticipa el peligro marítimo antes de que ocurra.'], ['Rescatar náufragos', 'Su espíritu puede auxiliar marineros en peligro a la distancia.']], familia: [] },
  'chang-e': { simbolos: ['Conejo de jade', 'Palacio lunar helado'], poderes: [['Vivir en la luna', 'Habita eternamente el astro más cercano a la tierra.']], familia: [['houyi', 'conyuge']] },
  'zao-jun': { simbolos: ['Imagen de papel', 'Fogón doméstico'], poderes: [['Vigilar cada hogar', 'Registra la conducta de una familia entera durante todo el año.']], familia: [['yu-huang', 'aliado']] },
  'yue-lao': { simbolos: ['Hilo rojo invisible', 'Libro de matrimonios destinados'], poderes: [['Atar destinos amorosos', 'Ningún obstáculo puede romper un vínculo que él mismo ha atado.']], familia: [] },
  'wenchang-wang': { simbolos: ['Pincel de escritura', 'Estrella de la Osa Mayor'], poderes: [['Favorecer el éxito académico', 'Su bendición decide el resultado de los exámenes imperiales.']], familia: [] },

  // --- HEROES ---
  'sun-wukong': { simbolos: ['Báculo Ruyi Jingu Bang', 'Setenta y dos transformaciones', 'Nube voladora'], poderes: [['Transformación ilimitada', 'Puede adoptar setenta y dos formas distintas a voluntad.'], ['Salto de treinta y cinco mil kilómetros', 'Cruza distancias inmensas de un solo brinco.']], familia: [['guanyin', 'mentor'], ['erlang-shen', 'enemigo'], ['baigujing', 'enemigo'], ['niu-mo-wang', 'aliado']] },
  houyi: { simbolos: ['Arco divino', 'Diez soles'], poderes: [['Puntería infalible', 'Ninguna de sus flechas falla, ni siquiera contra un sol.']], familia: [['chang-e', 'conyuge'], ['yayu', 'enemigo']] },
  'yu-el-grande': { simbolos: ['Canales de riego', 'Nueve calderos de bronce'], poderes: [['Domar las inundaciones', 'Dirige el agua excedente hacia el mar en vez de contenerla.']], familia: [['xiangliu', 'enemigo']] },
  nezha: { simbolos: ['Ruedas de Viento y Fuego', 'Lanza de Punta de Fuego', 'Cuerpo de loto'], poderes: [['Vuelo a gran velocidad', 'Sus ruedas mágicas lo impulsan por el cielo a velocidades extraordinarias.'], ['Renacer tras la muerte', 'Su cuerpo reconstruido de loto lo hace prácticamente incorruptible.']], familia: [] },
  'jing-wei': { simbolos: ['Piedras y ramas', 'Canto propio'], poderes: [['Persistencia inquebrantable', 'Repite su tarea imposible sin descanso, generación tras generación.']], familia: [] },
  kuafu: { simbolos: ['Bastón de madera', 'Bosque de melocotoneros'], poderes: [['Velocidad descomunal', 'Puede casi igualar el paso del sol por el cielo.']], familia: [] },
  'bai-suzhen': { simbolos: ['Forma serpentina blanca', 'Hongo mágico de la montaña'], poderes: [['Mil años de cultivo espiritual', 'Alcanzó forma humana perfecta tras un milenio de práctica.']], familia: [] },
  zhinu: { simbolos: ['Telar celestial', 'Nubes de seda'], poderes: [['Tejer las nubes', 'Da forma a los colores y patrones del cielo.']], familia: [['niulang', 'conyuge']] },
  niulang: { simbolos: ['Piel del buey celestial', 'Canastas para sus hijos'], poderes: [['Cruzar al cielo', 'La piel de su buey le permite ascender más allá del mundo mortal.']], familia: [['zhinu', 'conyuge']] },
  huangdi: { simbolos: ['Carro que señala el sur', 'Escritura y calendario'], poderes: [['Fundar la civilización', 'Se le atribuyen los avances fundacionales de la cultura china.']], familia: [['chiyou', 'enemigo']] },

  // --- MONSTRUOS ---
  nian: { simbolos: ['Color rojo', 'Petardos de bambú'], poderes: [['Terror estacional', 'Ataca pueblos enteros cada fin de año.']], familia: [] },
  taotie: { simbolos: ['Rostro devorador sin cuerpo', 'Vasijas rituales de bronce'], poderes: [['Glotonería sin límite', 'Devora todo a su alcance, incluido su propio cuerpo.']], familia: [['hundun', 'aliado'], ['qiongqi', 'aliado'], ['taowu', 'aliado']] },
  jiangshi: { simbolos: ['Ropas oficiales Qing', 'Talismán amarillo en la frente'], poderes: [['Drenar la energía vital', 'Absorbe el qi de los vivos con su propio aliento.']], familia: [] },
  'huli-jing': { simbolos: ['Cola de zorro oculta', 'Belleza transformada'], poderes: [['Transformación humana', 'Adopta forma humana tras siglos de cultivo espiritual.']], familia: [] },
  baigujing: { simbolos: ['Huesos antiguos', 'Tres disfraces'], poderes: [['Engaño múltiple', 'Se transforma en distintas personas para atraer a sus víctimas.']], familia: [['sun-wukong', 'enemigo']] },
  'niu-mo-wang': { simbolos: ['Cabeza de toro', 'Abanico de Hoja de Plátano'], poderes: [['Transformación colosal', 'Puede convertirse en un toro de proporciones descomunales.']], familia: [['sun-wukong', 'aliado']] },
  qiongqi: { simbolos: ['Alas y cuerpo de tigre', 'Recompensas invertidas'], poderes: [['Premiar la maldad', 'Recompensa a criminales y devora a los virtuosos.']], familia: [['hundun', 'aliado'], ['taotie', 'aliado'], ['taowu', 'aliado']] },
  taowu: { simbolos: ['Cuerpo de tigre', 'Cola larguísima'], poderes: [['Obstinación incorregible', 'Repite su conducta destructiva sin aprender jamás.']], familia: [['hundun', 'aliado'], ['taotie', 'aliado'], ['qiongqi', 'aliado']] },
  'shan-xiao': { simbolos: ['Una sola pierna', 'Bambú quemándose'], poderes: [['Provocar fiebres', 'Enferma a quien perturba su territorio del bosque.']], familia: [] },
  chiyou: { simbolos: ['Cuernos de bronce', 'Ochenta y un hermanos', 'Niebla de guerra'], poderes: [['Invocar niebla de batalla', 'Desorienta ejércitos enteros con niebla mágica.']], familia: [['huangdi', 'enemigo']] },
  xiangliu: { simbolos: ['Nueve cabezas', 'Veneno de pantano'], poderes: [['Envenenar la tierra', 'Convierte cualquier lugar donde descansa en un pantano infértil.']], familia: [['gonggong', 'aliado'], ['yu-el-grande', 'enemigo']] },
  yayu: { simbolos: ['Cabeza de dragón', 'Hambre insaciable'], poderes: [['Devorar sin discriminar', 'Ataca ganado y humanos por igual.']], familia: [['houyi', 'enemigo']] },

  // --- MORTALES ---
  'meng-jiangnu': { simbolos: ['Ropa de invierno tejida a mano', 'Muralla derrumbada'], poderes: [], familia: [] },
  'zhang-daoling': { simbolos: ['Revelación de Laozi', 'Cinco Pecks de Arroz'], poderes: [['Fundar una religión organizada', 'Estableció la jerarquía sacerdotal taoísta que perdura hasta hoy.']], familia: [] },
  'xu-fu': { simbolos: ['Flota expedicionaria', 'Tres montañas sagradas'], poderes: [], familia: [] },
  'bao-zheng': { simbolos: ['Media luna en la frente', 'Juicio nocturno'], poderes: [['Juzgar a vivos y muertos', 'Su jurisdicción se extiende, según la leyenda, hasta el propio inframundo.']], familia: [] },
  'dong-yong': { simbolos: ['Telar celestial de una noche', 'Piedad filial'], poderes: [], familia: [] }
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-china'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-china".');
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
  console.log('Agregando simbolos, poderes y familia a Mitologia China...\n');
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
