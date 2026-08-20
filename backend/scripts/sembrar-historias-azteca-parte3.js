// ============================================================
// scripts/sembrar-historias-azteca-parte3.js
// ------------------------------------------------------------
// Tercer lote de contenido para Mitología Azteca: 8 historias más,
// todas ligadas a personajes que ya existen (ver partes 1 y 2),
// llevando el total de 10 a 18 -- acercándose a los ~20 que tienen
// los otros libros, sin forzar el número con contenido inventado.
//
// Idempotente, mismo patrón que las partes anteriores.
//
// COMO CORRERLO (desde la carpeta backend/, DESPUES de las partes 1 y 2):
//   node scripts/sembrar-historias-azteca-parte3.js
// ============================================================

const pool = require('../config/db');

const HISTORIAS = [
  {
    slug: 'descubrimiento-del-maiz', titulo: 'El descubrimiento del maíz', tipo: 'cosmogonia', periodo: 'Después de la creación de la humanidad actual', es_preview: 0,
    resumen: 'Una hormiga roja descubre el maíz oculto dentro de la montaña Tonacatépetl; Quetzalcoatl, transformado en hormiga negra, logra sacarlo para alimentar a la humanidad recién creada.',
    texto_completo: `Cuando los primeros hombres y mujeres de la quinta era ya caminaban sobre la tierra, criados con los huesos molidos que Quetzalcoatl había rescatado del Mictlán, los dioses reunidos en el paraíso de Tamoanchan se preguntaron cómo alimentarían a esa humanidad todavía débil y hambrienta. Ninguno sabía dónde encontrar comida suficiente, hasta que repararon en una hormiga roja que pasaba cargando un grano dorado mucho más grande que su propio cuerpo.

Los dioses la interrogaron, exigiendo saber de dónde había sacado ese grano tan extraño y valioso. La hormiga, desconfiada, se negó a responder al principio, temerosa de perder el control de su hallazgo. Solo después de mucha insistencia reveló el secreto: dentro de una montaña llamada Tonacatépetl, "el cerro de nuestro sustento", había una reserva completa de maíz, oculta bajo la roca desde tiempos antiguos.

Quetzalcoatl, decidido a conseguir ese alimento para la humanidad, se transformó en una hormiga negra, más pequeña y ágil que él mismo, y pidió a la hormiga roja que lo guiara dentro de la montaña. Juntos recorrieron túneles estrechos hasta llegar al lugar exacto donde se acumulaban los granos dorados. Quetzalcoatl cargó tantos como pudo sobre su diminuto cuerpo de hormiga y, con enorme esfuerzo, los llevó de vuelta a la superficie y después hasta Tamoanchan.

Al llegar, los demás dioses tomaron los granos de maíz, los masticaron hasta convertirlos en una pasta, y con ella untaron los labios de los primeros seres humanos, dándoles fuerza y sustento por primera vez. Poco después, los hombres aprendieron a sembrar sus propios campos, y el maíz se convirtió en la base de toda su alimentación, sus rituales y su forma de entender el tiempo mismo. Sin el ingenio de Quetzalcoatl convertido en el más pequeño de los insectos, la humanidad recién creada nunca habría sobrevivido su primera temporada sobre la tierra.`,
    personajes: [['quetzalcoatl', 'protagonista']]
  },
  {
    slug: 'encuentro-de-mixcoatl-y-chimalma', titulo: 'El encuentro de Mixcóatl y Chimalma', tipo: 'amor', periodo: 'Antes de la fundación de Tollan', es_preview: 0,
    resumen: 'El dios cazador Mixcóatl dispara cinco flechas contra la mortal Chimalma; ella las atrapa todas con su escudo, y de ese encuentro extraordinario nace Topiltzin Quetzalcoatl.',
    texto_completo: `Mixcóatl, dios cazador de las estrellas y la Vía Láctea, recorría los bosques del norte con su arco siempre listo, como correspondía a los pueblos chichimecas que lo veneraban. Un día, durante una de sus cacerías, se topó con una mujer mortal llamada Chimalma, que caminaba sola entre los árboles. Algo en ella —su serenidad, quizás, o el desafío silencioso en su mirada— llamó la atención del dios de un modo que ninguna otra criatura del bosque había logrado.

Decidido a ponerla a prueba, Mixcóatl tensó su arco y disparó una flecha directo hacia ella. Chimalma, sin inmutarse, levantó su escudo justo a tiempo y la flecha rebotó sin causarle ningún daño. Sorprendido, Mixcóatl disparó una segunda flecha, y luego una tercera, una cuarta y una quinta, cada una con mayor fuerza que la anterior. Chimalma atrapó las cinco, una tras otra, sin retroceder ni un solo paso.

Ante semejante despliegue de valor, Mixcóatl comprendió que no estaba frente a una mujer cualquiera. Bajó el arco y se acercó a ella con un respeto que rara vez mostraba ante ningún mortal. De aquel encuentro extraordinario —sin que mediara, según algunas versiones, ningún contacto físico entre ambos— Chimalma concibió un hijo: Ce Acatl Topiltzin, quien años después tomaría para sí el nombre del dios Quetzalcoatl y gobernaría la legendaria ciudad de Tollan en su edad de mayor esplendor.

La historia de las cinco flechas se convirtió, con el tiempo, en el relato fundacional de todo un linaje: la unión entre el poder salvaje y cósmico de los dioses cazadores del norte y el valor sereno de una mujer mortal, dando origen al gobernante más recordado y añorado de toda la tradición tolteca.`,
    personajes: [['mixcoatl', 'protagonista'], ['chimalma', 'protagonista'], ['topiltzin-quetzalcoatl', 'mencionado']]
  },
  {
    slug: 'caceria-de-los-centzon-mimixcoa', titulo: 'La cacería de los Centzon Mimixcoa', tipo: 'heroica', periodo: 'Después de la creación del quinto sol, en Teotihuacan', es_preview: 0,
    resumen: 'Tras la creación del quinto sol, los guerreros-estrella del norte se niegan al sacrificio necesario para darle movimiento; Mixcóatl los persigue y les da caza uno por uno para restaurar el orden cósmico.',
    texto_completo: `Cuando el nuevo sol, Tonatiuh, permanecía inmóvil en el horizonte tras su nacimiento en Teotihuacan, los dioses comprendieron que debían sacrificarse ellos mismos para darle la fuerza necesaria de recorrer el cielo. La mayoría aceptó su destino sin resistirse, pero un grupo de guerreros celestiales asociados a las estrellas del norte, los Centzon Mimixcoa —"las cuatrocientas serpientes de nube"—, se negó a participar. Aterrados ante la idea de morir, decidieron esconderse en distintos rincones del mundo antes de que llegara su turno.

Los demás dioses encomendaron entonces a Mixcóatl, dios cazador y en cierto modo líder de aquellos guerreros fugitivos, la tarea de encontrarlos y hacer que cumplieran con su parte del sacrificio. Mixcóatl, armado con su arco y flechas, emprendió una cacería implacable: rastreó a los Centzon Mimixcoa uno por uno a través de montañas, cuevas y llanuras, sin descansar hasta dar con cada uno de sus escondites.

Ninguno logró escapar por mucho tiempo. Mixcóatl los enfrentó y les dio muerte con la misma precisión con la que cazaba cualquier presa en los bosques del norte, cumpliendo así, a la fuerza, el sacrificio que ellos mismos se habían negado a ofrecer voluntariamente. Con cada guerrero caído, una parte más del cielo nocturno quedaba consagrada al nuevo orden solar.

Esta cacería completó el ciclo de sacrificios necesario para que Tonatiuh comenzara por fin su recorrido diario por el cielo, y estableció a Mixcóatl como el ejecutor cósmico del orden divino: el mismo dios que, generaciones después, engendraría con la mortal Chimalma al niño que llegaría a ser Topiltzin Quetzalcoatl, uniendo así el episodio fundacional del quinto sol con el origen de la dinastía tolteca.`,
    personajes: [['mixcoatl', 'protagonista'], ['centzon-mimixcoa', 'antagonista'], ['tonatiuh', 'mencionado']]
  },
  {
    slug: 'huida-del-joven-nezahualcoyotl', titulo: 'La huida del joven Nezahualcóyotl', tipo: 'heroica', periodo: 'Siglo XV, antes de que Nezahualcóyotl recuperara el trono de Texcoco', es_preview: 0,
    resumen: 'A los dieciséis años, el príncipe Nezahualcóyotl escapa por poco de los guerreros que acaban de asesinar a su padre, escondido dentro de un árbol hueco mientras sus perseguidores pasan a su lado.',
    texto_completo: `Nezahualcóyotl tenía apenas dieciséis años cuando presenció, oculto entre la vegetación, cómo guerreros tepanecas al servicio del señor Tezozómoc daban caza y asesinaban a su padre, el rey Ixtlilxóchitl de Texcoco, que había sido depuesto de su señorío. Antes de morir, su padre alcanzó a esconder al joven príncipe en la espesura del monte Tláloc, ordenándole con voz firme que no se moviera de ahí bajo ninguna circunstancia, recordándole que si él caía, con él terminaría toda la antigua línea de los reyes chichimecas.

Los guerreros tepanecas, sabiendo que el heredero legítimo seguía con vida en algún lugar cercano, iniciaron una búsqueda minuciosa por toda la ladera del monte. Nezahualcóyotl, siguiendo las instrucciones de su padre, encontró un árbol grande con el tronco hueco por dentro y se metió en su interior, conteniendo la respiración cada vez que las voces de sus perseguidores se acercaban peligrosamente a su escondite. En más de una ocasión, los guerreros pasaron a solo un paso del árbol sin sospechar siquiera que el joven príncipe se encontraba oculto a centímetros de ellos.

Cuando finalmente los tepanecas se alejaron, dando por perdida la búsqueda, Nezahualcóyotl salió de su escondite y logró reunirse con los pocos capitanes leales que aún quedaban con vida. Ese momento de terror y supervivencia marcaría el inicio de años de exilio, refugiándose en distintos señoríos mientras esperaba la oportunidad de recuperar el trono que le correspondía por derecho.

Décadas después, ya convertido en el gobernante más recordado de Texcoco, Nezahualcóyotl seguiría llevando consigo la lección de aquel día escondido en el árbol hueco: que la supervivencia, la paciencia y la astucia podían ser tan valiosas como cualquier ejército, una convicción que marcaría después su fama como gobernante sabio antes que guerrero.`,
    personajes: [['nezahualcoyotl', 'protagonista']]
  },
  {
    slug: 'tlalocan-paraiso-de-tlaloc', titulo: 'Tlalocan, el paraíso de Tláloc', tipo: 'otro', periodo: 'Sin tiempo definido — una descripción del más allá', es_preview: 0,
    resumen: 'A diferencia del difícil viaje al Mictlán, quienes morían por causas relacionadas con el agua accedían directamente a Tlalocan, un paraíso de vegetación eterna gobernado por Tláloc y Chalchiuhtlicue.',
    texto_completo: `No todos los muertos mexicas emprendían el largo y peligroso viaje de cuatro años a través del Mictlán. Quienes morían por causas relacionadas de algún modo con el agua —ahogados en un lago o un río, alcanzados por un rayo durante una tormenta, o víctimas de enfermedades asociadas a la humedad, como la hidropesía— tenían un destino completamente distinto y mucho más amable: accedían directamente a Tlalocan, el paraíso gobernado por Tláloc y su esposa Chalchiuhtlicue.

A diferencia del Mictlán, un reino de niveles fríos y obstáculos crecientes, Tlalocan se describía como una tierra de primavera eterna: colinas cubiertas de vegetación exuberante, árboles siempre cargados de frutos, mariposas revoloteando entre flores que nunca se marchitaban, y una abundancia constante de maíz, calabaza y chile creciendo sin esfuerzo. Era, en la imaginación mexica, lo más parecido a un verdadero paraíso dentro de su cosmovisión, reservado no por mérito moral sino simplemente por la naturaleza de la muerte de cada persona.

Los cuerpos de quienes iban destinados a Tlalocan no se cremaban, a diferencia de la costumbre general mexica: se enterraban directamente en la tierra, a veces con semillas de maíz azul pintadas en el rostro, como preparación simbólica para el paraíso verde que les esperaba. Tláloc y Chalchiuhtlicue gobernaban ese reino en pareja, complementando sus dominios de siempre —la lluvia que cae del cielo y el agua que fluye sobre la tierra— también en la vida después de la muerte.

Tlalocan ocupaba, según la cosmología mexica, el primer nivel de los trece cielos superiores, justo por encima del mundo de los vivos —tan cerca, de hecho, que algunos relatos aseguran que ciertos sacerdotes privilegiados podían visitarlo brevemente sin morir, para regresar después con mensajes directos de los propios dioses del agua.`,
    personajes: [['tlaloc', 'protagonista'], ['chalchiuhtlicue', 'protagonista']]
  },
  {
    slug: 'viaje-diario-del-sol', titulo: 'El viaje diario del sol', tipo: 'otro', periodo: 'Cada día, desde la creación del quinto sol', es_preview: 0,
    resumen: 'Cada día, Tonatiuh recorre el cielo escoltado por dos cortejos de honor: los guerreros caídos en batalla hasta el mediodía, y las Cihuateteo, mujeres muertas en su primer parto, desde ahí hasta el ocaso.',
    texto_completo: `Según la cosmovisión mexica, el sol no atravesaba el cielo por su propia fuerza cada mañana: necesitaba ser escoltado, honrado y alimentado constantemente para completar su recorrido sin desfallecer. Ese honor —acompañar a Tonatiuh en su viaje diario— estaba reservado exclusivamente para quienes habían muerto de las dos formas que los mexicas consideraban más valientes: en batalla, o dando a luz por primera vez.

Al amanecer, los guerreros caídos en combate recibían a Tonatiuh en el horizonte oriental con gritos de júbilo y el golpeteo de sus escudos, formando una procesión brillante que lo escoltaba desde su nacimiento hasta el punto más alto del cielo, el mediodía. Se consideraba el mayor honor posible para un hombre mexica morir en batalla: no era un final, sino el inicio de cuatro años acompañando al sol en su recorrido más luminoso, antes de poder reencarnar convertido en colibrí o mariposa.

Al llegar el mediodía, ocurría el relevo: los guerreros se retiraban, y las Cihuateteo —las almas de las mujeres que habían muerto en su primer parto, honradas con el mismo estatus que un guerrero caído— tomaban su lugar, escoltando a Tonatiuh desde la cima del cielo hasta su descenso en el horizonte occidental, donde el sol se sumergía cada noche en las profundidades del Mictlán para renacer al día siguiente.

Este relevo diario explicaba, para los mexicas, por qué el sol brillaba con más intensidad durante la mañana y se atenuaba hacia el atardecer, y reforzaba la idea central de toda su religión: que el mundo entero, incluido el astro más poderoso del cielo, dependía por completo del sacrificio humano —voluntario en la guerra, involuntario en el parto— para seguir existiendo un día más.`,
    personajes: [['tonatiuh', 'protagonista'], ['cihuateteo', 'secundario']]
  },
  {
    slug: 'confesion-ante-tlazolteotl', titulo: 'La confesión ante Tlazolteotl', tipo: 'otro', periodo: 'Sin tiempo definido — una práctica ritual', es_preview: 0,
    resumen: 'Una vez en la vida, un mexica podía confesar sus faltas más graves ante un sacerdote de Tlazolteotl, quien "devoraba" simbólicamente la culpa, dejando al confesante purificado para siempre.',
    texto_completo: `Entre todos los rituales de la religión mexica, pocos eran tan singulares como la confesión ante Tlazolteotl, la diosa capaz tanto de provocar los excesos y las faltas como de perdonarlas por completo. A diferencia de otras prácticas religiosas del mundo antiguo, esta confesión no podía repetirse a voluntad: cada persona tenía derecho a realizarla una única vez en toda su vida, lo que llevaba a la mayoría a postergarla hasta una edad avanzada, cuando ya habían acumulado todas las faltas que probablemente cometerían.

Cuando alguien decidía finalmente confesarse, debía primero consultar con un sacerdote especializado, quien revisaba los códices y calendarios sagrados para determinar el día más propicio para la ceremonia. Llegado el momento, el penitente se presentaba ante el sacerdote, se despojaba de sus ropas como señal de humildad total, y relataba sus faltas más graves —adulterio, robo, actos de deshonestidad— con total sinceridad, sin ocultar ni suavizar nada.

El sacerdote, actuando como intermediario directo de Tlazolteotl, escuchaba la confesión completa y después "devoraba" simbólicamente la falta confesada, absorbiendo la mancha moral del penitente tal como la propia diosa devoraba la inmundicia del mundo. Como penitencia final, el sacerdote prescribía un período de ayuno y purificación física, tras el cual la persona quedaba considerada limpia de esa falta para siempre, sin posibilidad de repetir el proceso ante ninguna otra circunstancia futura.

Este ritual revela una faceta de la religión mexica poco conocida fuera de los círculos académicos: junto a la dureza del sacrificio humano y la guerra ritual, existía también un mecanismo genuino de perdón y renovación moral, disponible para cualquier persona sin importar su rango, siempre que supiera esperar el momento correcto de su vida para usarlo.`,
    personajes: [['tlazolteotl', 'protagonista']]
  },
  {
    slug: 'caida-final-de-tollan-bajo-huemac', titulo: 'La caída final de Tollan bajo Huémac', tipo: 'tragedia', periodo: 'Después del exilio de Topiltzin Quetzalcoatl', es_preview: 0,
    resumen: 'Tras la partida de Topiltzin Quetzalcoatl, su sucesor Huémac gobierna Tollan entre presagios funestos y decisiones desastrosas, hasta que la ciudad tolteca colapsa por completo y su población se dispersa.',
    texto_completo: `Cuando Topiltzin Quetzalcoatl abandonó Tollan rumbo al oriente, la ciudad que había vivido bajo su gobierno una edad de oro sin precedentes quedó en manos de Huémac, "mano fuerte", un gobernante muy distinto en temperamento y fortuna. Desde el inicio de su reinado, los presagios se acumularon: sequías prolongadas que arruinaban las cosechas, hambrunas que diezmaban a la población, y una serie de decisiones cada vez más erráticas por parte del propio Huémac, que algunas crónicas atribuyen a su soberbia y otras a una manipulación sobrenatural orquestada por los mismos dioses que ya habían derrocado a su predecesor.

Uno de los episodios más recordados de su caída involucra una exigencia desmedida: Huémac, buscando una esposa a la altura de su poder, exigió en matrimonio a la hija de un señorío vecino bajo amenaza directa de guerra si se negaban. La joven, entregada por miedo más que por voluntad, jamás llegó a sentirse parte de la corte tolteca, y su presencia forzada se convirtió, según la tradición, en otro síntoma más de un gobierno que ya no sabía distinguir entre el poder legítimo y el simple capricho.

Los desastres continuaron acumulándose sin tregua: plagas, guerras internas entre facciones rivales dentro de la propia Tollan, y un descontento popular cada vez más difícil de contener. Finalmente, incapaz de sostener el gobierno de una ciudad que ya se desmoronaba desde sus cimientos, Huémac fue expulsado por su propio pueblo. Vagó durante un tiempo indeterminado antes de refugiarse en una cueva cerca de Chapultepec, donde, según cuenta la tradición, decidió quitarse la vida antes que enfrentar el testimonio completo de la ruina que había presidido.

Con la caída definitiva de Huémac, Tollan dejó de existir como centro de poder, y su población —los toltecas— se dispersó por todo el Valle de México, llevando consigo los relatos, las técnicas y el prestigio cultural que, generaciones después, pueblos como los propios mexicas reclamarían como herencia legítima al fundar sus propias dinastías.`,
    personajes: [['huemac', 'protagonista']]
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-azteca'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-azteca".');
  return filas[0].id;
}

async function obtenerIdsPersonajes(libroId) {
  const [filas] = await pool.query('SELECT id, slug FROM personajes WHERE libro_id = ?', [libroId]);
  const ids = {};
  filas.forEach(f => { ids[f.slug] = f.id; });
  return ids;
}

async function sembrarHistorias(libroId, idsPersonajes) {
  for (const h of HISTORIAS) {
    const [existente] = await pool.query('SELECT id FROM historias WHERE slug = ? AND libro_id = ?', [h.slug, libroId]);
    let historiaId;
    if (existente.length > 0) {
      console.log(`  - Historia "${h.titulo}" ya existía.`);
      historiaId = existente[0].id;
    } else {
      const [resultado] = await pool.query(
        `INSERT INTO historias (titulo, resumen, texto_completo, tipo, periodo, slug, es_preview, libro_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [h.titulo, h.resumen, h.texto_completo, h.tipo, h.periodo, h.slug, h.es_preview, libroId]
      );
      historiaId = resultado.insertId;
      console.log(`  - Historia "${h.titulo}" creada.`);
    }

    for (const [slugPersonaje, rol] of h.personajes) {
      const personajeId = idsPersonajes[slugPersonaje];
      if (!personajeId) {
        console.log(`    ! Personaje "${slugPersonaje}" no encontrado, se salta el vínculo.`);
        continue;
      }
      const [vinculo] = await pool.query(
        'SELECT 1 FROM historia_personajes WHERE historia_id = ? AND personaje_id = ?',
        [historiaId, personajeId]
      );
      if (vinculo.length === 0) {
        await pool.query(
          'INSERT INTO historia_personajes (historia_id, personaje_id, rol) VALUES (?, ?, ?)',
          [historiaId, personajeId, rol]
        );
      }
    }
  }
}

async function main() {
  console.log('Sembrando parte 3: 8 historias adicionales...\n');
  const libroId = await obtenerLibroId();
  const idsPersonajes = await obtenerIdsPersonajes(libroId);
  await sembrarHistorias(libroId, idsPersonajes);
  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
