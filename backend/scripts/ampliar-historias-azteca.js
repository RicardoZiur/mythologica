// ============================================================
// scripts/ampliar-historias-azteca.js
// ------------------------------------------------------------
// Agrega un parrafo adicional de detalle real a las 18 historias
// de Mitologia Azteca (promedio actual ~300 palabras, notablemente
// mas corto que Sumeria ~550) -- mismo pedido del usuario que para
// los personajes. Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/ampliar-historias-azteca.js
// ============================================================

const pool = require('../config/db');

const EXTRA = {
  'los-cinco-soles': `El rostro de Tonatiuh, rodeado por los símbolos de estos cuatro soles fracasados, quedó tallado siglos después en el centro de la Piedra del Sol, el monumental calendario circular que hoy se exhibe en el Museo Nacional de Antropología: cada uno de los cuatro recuadros que enmarcan su rostro representa una de las eras destruidas, un recordatorio en piedra de que la era actual —identificada en el calendario ritual como "Nahui Ollin", Cuatro Movimiento— tampoco estaba garantizada para siempre. Algunas versiones del mito añaden que fue la propia Chalchiuhtlicue, harta de ser acusada por los demás dioses de fingir una bondad que no sentía en su gobierno del cuarto sol, quien provocó deliberadamente el diluvio final de esa era, antes de ceder su lugar a los soles gobernados por dioses masculinos.`,

  'nacimiento-de-huitzilopochtli': `Este combate se conmemoraba cada año durante la veintena de Panquetzaliztli, hacia el solsticio de invierno, cuando los mexicas reactuaban simbólicamente la batalla completa: guerreros disfrazados representaban a los Centzon Huitznahua, y los sacrificados en la cima del Templo Mayor eran arrojados por las escalinatas para caer exactamente sobre la piedra circular que representaba a Coyolxauhqui desmembrada, colocada a propósito al pie del templo. De esta manera, el mito no quedaba solo en el relato: se repetía físicamente, año tras año, ante los ojos de toda la ciudad, como recordatorio de que el orden solar solo se sostenía gracias a una violencia que debía renovarse sin descanso.`,

  'fundacion-de-tenochtitlan': `La fecha tradicional de la fundación, el año Ome Calli (Dos-Casa) según unas crónicas o Ce Tecpatl (Uno-Pedernal) según otras, se conmemoraba cada cincuenta y dos años con la ceremonia del Fuego Nuevo, cuando se apagaban todos los fuegos del imperio y se encendía uno solo sobre el pecho de un cautivo en el Cerro de la Estrella, repartiéndose después a cada hogar como renovación simbólica del pacto fundacional. Con el paso de las décadas, los mexicas transformaron el islote pantanoso original mediante chinampas —parcelas artificiales construidas entretejiendo cañas y lodo del fondo del lago— hasta convertir lo que había sido el peor terreno disponible del valle en una de las zonas agrícolas más productivas de toda Mesoamérica, sosteniendo a una población que llegó a superar los doscientos mil habitantes.`,

  'caida-de-tollan': `Antes siquiera de la trampa del pulque, Tezcatlipoca había preparado el terreno con un engaño más sutil: se presentó ante Topiltzin Quetzalcoatl con un espejo de obsidiana pulida, un objeto que el rey-sacerdote jamás había visto reflejar su propio rostro con tanta claridad. Al mirarse, Topiltzin descubrió con horror que su piel estaba envejecida y sus ojos hundidos, una imagen que Tezcatlipoca aprovechó para convencerlo de que debía ocultarse del pueblo con una máscara y adornos elaborados —sembrando así la primera semilla de vergüenza y vanidad que, poco después, la copa de pulque terminaría de explotar por completo.`,

  'descenso-de-quetzalcoatl-al-mictlan': `Antes de la trampa de la fosa, Mictlantecuhtli había impuesto ya una primera prueba menor: exigió que Quetzalcoatl y Xólotl dieran cuatro vueltas alrededor de su reino portando la caracola sin sonido, un recorrido tan largo que, según algunas versiones, tomó el equivalente a varios días completos del tiempo del inframundo. Xólotl, el hermano gemelo con forma de perro, cumplió un papel silencioso pero esencial durante todo el descenso: fue él quien, según ciertos relatos, cargó los huesos ya recuperados mientras Quetzalcoatl enfrentaba las pruebas sucesivas, y quien lo ayudó a incorporarse tras la caída en la fosa antes de que ambos lograran escapar juntos hacia la superficie.`,

  'origen-del-maguey-y-el-pulque': `De la unión final de Quetzalcoatl con los restos de Mayahuel nacieron también, según algunas versiones del mito, los Centzon Totochtin, los "cuatrocientos conejos" que después se convertirían en las divinidades menores de la embriaguez, cada uno encarnando un efecto distinto del pulque —uno provocaba risa incontrolable, otro violencia repentina, otro melancolía—. Esta genealogía explicaba, dentro de la lógica mexica, por qué la bebida nacida de una tragedia amorosa podía producir efectos tan impredecibles y contradictorios en quien la consumía sin la mesura debida.`,

  'ixtaccihuatl-y-popocatepetl': `El perfil real de ambos volcanes, visibles hasta hoy desde buena parte del Valle de México, reforzó la leyenda entre generaciones de habitantes: el Iztaccíhuatl, con sus cuatro picos sucesivos, dibuja con notable claridad la silueta de una mujer recostada bocarriba —cabeza, pecho, rodillas y pies— mientras el Popocatépetl, activo hasta el día de hoy con fumarolas casi constantes, parece efectivamente vigilarla sin descanso desde su posición vecina. En las comunidades cercanas a ambos volcanes todavía se los menciona como "Don Goyo" y "la Mujer Dormida", una tradición oral que combina la memoria prehispánica con siglos de sincretismo posterior a la conquista.`,

  'venganza-de-copil': `El lugar exacto donde cayó el corazón de Copil se identificaba tradicionalmente como Tlalcocomocco, un paraje cercano al primer asentamiento mexica en el islote, que los cronistas coloniales todavía señalaban generaciones después como sitio de peregrinación menor. El propio nombre de Copil —relacionado con la idea de algo "coronado" o "puesto en la cima"— añade una ironía adicional al desenlace: el hijo que buscaba coronar su venganza terminó, en cambio, dando origen involuntariamente al símbolo que coronaría para siempre a la nación que había jurado destruir.`,

  'abandono-de-malinalxochitl': `El asentamiento que Malinalxochitl fundó, Malinalco, se conserva hasta hoy como uno de los sitios arqueológicos mejor preservados de Mesoamérica, con templos excavados directamente en la roca viva de la montaña —una técnica constructiva poco común que reforzaba entre sus habitantes la fama de la propia Malinalxochitl como hechicera con poder sobre la tierra misma—. La narrativa mexica oficial, transmitida casi por completo desde la perspectiva de los seguidores de Huitzilopochtli, presenta el abandono como una decisión necesaria y justa; crónicas coloniales alternativas, sin embargo, sugieren que Malinalco prosperó de forma independiente durante generaciones enteras después de la separación.`,

  'princesa-desollada-de-culhuacan': `El sacerdote que personificó a la diosa Toci vistiendo la piel de la princesa dio origen a una festividad que los mexicas celebrarían después cada año durante la veintena de Ochpaniztli, "barrimiento de caminos", asociada al fin de la temporada de lluvias y a la cosecha: una mujer —normalmente una esclava consagrada para el ritual— era sacrificada y desollada de la misma manera, y un sacerdote portaba su piel en una procesión nocturna que recorría los principales templos de Tenochtitlan, repitiendo simbólicamente cada año el episodio fundacional ocurrido en Culhuacán.`,

  'descubrimiento-del-maiz': `Los mexicas distinguían al menos cuatro colores de maíz —blanco, amarillo, rojo y negro— y algunas versiones del mito narran que Quetzalcoatl no encontró uno solo sino varios tipos de granos dentro de la montaña, cada uno destinado después a una región distinta del territorio mexica según el clima y el suelo disponibles. En algunas variantes del relato, es la pareja primordial Oxomoco y Cipactónal, inventores del calendario adivinatorio, quienes ayudan a interpretar mediante sus artes de adivinación en qué momento exacto del año debía sembrarse cada variedad para asegurar una cosecha exitosa.`,

  'encuentro-de-mixcoatl-y-chimalma': `El hijo nacido de este encuentro recibió el nombre calendárico de Ce Ácatl, "Uno-Caña", correspondiente a la fecha exacta de su nacimiento según el calendario ritual mexica —una práctica habitual entre los pueblos nahuas, donde el nombre de nacimiento quedaba fijado para siempre por el día sagrado en que alguien venía al mundo. Ese mismo nombre calendárico, Ce Ácatl, adquiriría siglos después una segunda capa de significado trágico: sería también, según algunas crónicas, el año en que los mexicas creyeron ver cumplida la profecía del regreso de Quetzalcoatl con la llegada de los conquistadores españoles.`,

  'caceria-de-los-centzon-mimixcoa': `Los mexicas identificaban a estos guerreros estelares directamente con las estrellas visibles agrupadas hacia el norte del cielo nocturno, y consideraban que la propia Vía Láctea era el rastro luminoso dejado por Mixcóatl durante su larga persecución, un camino de polvo estelar que los cazadores nocturnos usaban todavía como referencia para orientarse en sus propias expediciones. El paralelismo con el mito de Huitzilopochtli y los Centzon Huitznahua del sur no era casual: ambos relatos reforzaban la misma idea central de la religión mexica, que el propio movimiento del cielo dependía de un sacrificio violento renovado sin descanso.`,

  'huida-del-joven-nezahualcoyotl': `Décadas más tarde, ya como tlatoani de Texcoco, Nezahualcóyotl aplicaría la misma paciencia aprendida aquel día al gobierno de su ciudad: mandó construir un elaborado sistema de diques, acueductos y jardines escalonados en el cercano cerro de Texcotzingo —cuyas ruinas, con baños tallados directamente en roca viva, siguen siendo visitables hoy—, y se le atribuyen decenas de poemas sobre la fugacidad de la existencia, muchos de ellos compuestos, según la tradición, mientras recordaba las largas noches de exilio que había sobrevivido desde aquel escondite improvisado en un tronco hueco.`,

  'tlalocan-paraiso-de-tlaloc': `Los sacerdotes describían Tlalocan con un detalle casi sensorial: colibríes y mariposas revoloteando sin descanso entre flores que jamás perdían su color, estanques de agua siempre tibia, y milpas de maíz, chile y calabaza que crecían y se cosechaban solas, sin que nadie tuviera que sembrar ni cuidar la tierra. Contrastaba deliberadamente con la dureza del viaje al Mictlán —cuatro años de obstáculos crecientes— para subrayar una idea central de la religión mexica: la manera de morir, más que cualquier virtud acumulada en vida, era lo que determinaba el destino final de cada persona en el más allá.`,

  'viaje-diario-del-sol': `Se creía que, tras cuatro años acompañando a Tonatiuh en su recorrido más luminoso, los guerreros caídos regresaban a la tierra convertidos en colibríes de plumas brillantes, libando el néctar de las flores bajo la luz del mismo sol al que habían servido; las Cihuateteo, en cambio, permanecían asociadas al ocaso y a los cruces de caminos, veneradas de día como protectoras pero temidas de noche, cuando se creía que descendían a provocar enfermedades repentinas entre los niños pequeños —el mismo relevo diario que escoltaba al sol convertido, en la vida cotidiana mexica, en una fuente constante tanto de honor como de temor.`,

  'confesion-ante-tlazolteotl': `Los primeros cronistas españoles que documentaron esta práctica, entre ellos fray Bernardino de Sahagún, no pudieron evitar compararla abiertamente con el sacramento católico de la confesión, sorprendidos de encontrar un ritual tan estructurado de perdón moral en una religión que, por lo demás, consideraban completamente ajena a la suya. A Tlazolteotl se le representaba a menudo sosteniendo una escoba, símbolo directo de "barrer" las faltas confesadas, y con la boca manchada de negro alrededor de los labios —la marca visible de la diosa que literalmente "devoraba" la inmundicia moral que los mortales le entregaban una sola vez en toda su vida.`,

  'caida-final-de-tollan-bajo-huemac': `Uno de los episodios que más contribuyó a la ruina de Huémac fue su propio desafío a los Tlaloque, los ayudantes de Tláloc: los retó a un juego de pelota apostando jades y plumas de quetzal contra el maíz que ellos ofrecían, y al ganar exigió recibir riquezas reales en vez del maíz simbólico entregado, burlándose abiertamente de la ofrenda de los dioses de la lluvia. Ofendidos, los Tlaloque se negaron a hacer llover sobre Tollan durante años, precipitando la hambruna que, sumada a las plagas y las luchas internas, terminaría por completar la destrucción que Topiltzin Quetzalcoatl había dejado ya en marcha generaciones antes.`
};

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-azteca'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-azteca".');
  return filas[0].id;
}

async function main() {
  console.log('Ampliando historias de Mitologia Azteca...\n');
  const libroId = await obtenerLibroId();

  const [filas] = await pool.query('SELECT id, slug, titulo, texto_completo FROM historias WHERE libro_id = ?', [libroId]);
  const porSlug = {};
  filas.forEach(f => { porSlug[f.slug] = f; });

  for (const [slug, extra] of Object.entries(EXTRA)) {
    const historia = porSlug[slug];
    if (!historia) {
      console.log(`  ! Historia "${slug}" no encontrada, se salta.`);
      continue;
    }
    if (historia.texto_completo.includes(extra.slice(0, 40))) {
      console.log(`  - "${historia.titulo}" ya tenía este agregado.`);
      continue;
    }
    const nuevoTexto = `${historia.texto_completo}\n\n${extra}`;
    await pool.query('UPDATE historias SET texto_completo = ? WHERE id = ?', [nuevoTexto, historia.id]);
    console.log(`  - "${historia.titulo}" ampliada.`);
  }

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
