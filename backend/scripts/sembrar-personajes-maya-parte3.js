// ============================================================
// scripts/sembrar-personajes-maya-parte3.js
// ------------------------------------------------------------
// Tercer y ultimo lote de contenido para Mitologia Maya: 5
// mortales, ligados a dos leyendas yucatecas de tradicion oral
// (Sac-Nicte y Canek; Xkeban y Utz-Colel, origen de la Xtabay).
// Idempotente via slug+libro_id.
//
// COMO CORRERLO (desde backend/):
//   node scripts/sembrar-personajes-maya-parte3.js
// ============================================================

const pool = require('../config/db');

const PERSONAJES = [
  {
    tipo: 'mortal', slug: 'sac-nicte', nombre: 'Sac-Nicté', nombre_griego: 'Sak Nikte\'',
    epitetos: 'Flor Blanca, la Princesa de Mayapán',
    descripcion_corta: 'Princesa maya cuyo amor prohibido por el príncipe Canek desencadena, según la leyenda, la caída de Mayapán y Chichén Itzá.',
    descripcion_larga: `Sac-Nicté, "flor blanca", es la protagonista de una de las leyendas yucatecas más contadas y adaptadas, ambientada en el ocaso del poder de las grandes ciudades mayas del posclásico. Hija del gobernante de Mayapán, Sac-Nicté había sido prometida en matrimonio a Ah Ulil, señor de la ciudad de Izamal, en una alianza política pensada para fortalecer los lazos entre ambos señoríos. Pero desde niña había crecido enamorada de Canek, joven príncipe de Chichén Itzá, con quien compartía un vínculo mucho más antiguo y sincero que el pactado por conveniencia entre las familias gobernantes.
El día mismo de su boda con Ah Ulil, Canek irrumpe en la ceremonia y se la lleva consigo, desatando la furia y la humillación pública del novio rechazado. Ah Ulil, incapaz de aceptar el agravio, reúne a sus aliados y declara la guerra contra Chichén Itzá, un conflicto que —según la versión más difundida de la leyenda— termina por debilitar fatalmente a ambas ciudades, precipitando su decadencia definitiva en las décadas siguientes. La historia de Sac-Nicté combina de forma deliberada el mito romántico con la memoria histórica real de la caída del poder de Chichén Itzá y Mayapán a finales del periodo posclásico maya.`,
    origen: 'Princesa de Mayapán, prometida a Ah Ulil, enamorada de Canek desde la infancia.',
    dominio: 'El amor prohibido', naturaleza: 'Princesa legendaria', es_preview: 1
  },
  {
    tipo: 'mortal', slug: 'canek', nombre: 'Canek', nombre_griego: 'Kanek\'',
    epitetos: 'Serpiente Negra, Príncipe de Chichén Itzá',
    descripcion_corta: 'Príncipe de Chichén Itzá que rapta a Sac-Nicté el día de su boda con otro hombre, desatando la guerra que debilitaría a ambas ciudades rivales.',
    descripcion_larga: `Canek, cuyo nombre significa "serpiente negra", es el príncipe de Chichén Itzá enamorado de Sac-Nicté desde que ambos eran niños, un vínculo que las obligaciones políticas de sus respectivas familias amenazan con romper de forma definitiva cuando ella es prometida al señor de Izamal, Ah Ulil. Lejos de resignarse, Canek decide actuar en el momento de mayor riesgo posible: irrumpe durante la propia ceremonia nupcial y se lleva a Sac-Nicté consigo, un acto de amor y desafío político simultáneo que ninguna de las dos ciudades involucradas podía ignorar.
La huida de la pareja desata la guerra que Ah Ulil declara contra Chichén Itzá para vengar su honor, un conflicto que las versiones más extendidas de la leyenda presentan como el detonante final de la decadencia de ambas ciudades rivales, ya debilitadas por tensiones políticas previas. Algunas variantes del relato tienen un final trágico —los amantes se arrojan juntos a un cenote sagrado antes que separarse—, mientras otras narran que lograron escapar y fundar juntos un nuevo asentamiento lejos del conflicto; esta ambigüedad en el desenlace es habitual en las leyendas de tradición oral yucateca, transmitidas con variaciones de una comunidad a otra durante generaciones.`,
    origen: 'Príncipe de Chichén Itzá, enamorado de Sac-Nicté desde la infancia.',
    dominio: 'El desafío al destino impuesto', naturaleza: 'Príncipe legendario', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'ah-ulil', nombre: 'Ah Ulil', nombre_griego: 'Ah Ulil',
    epitetos: 'Señor de Izamal, el Novio Deshonrado',
    descripcion_corta: 'Señor de Izamal, prometido de Sac-Nicté hasta que Canek se la lleva el día de la boda — su guerra de venganza precipita la caída de dos grandes ciudades.',
    descripcion_larga: `Ah Ulil es el gobernante de la ciudad de Izamal y prometido oficial de Sac-Nicté, unión pactada entre las familias gobernantes de Mayapán e Izamal como parte de las alianzas políticas habituales entre las grandes ciudades mayas del posclásico yucateco. Su papel en la leyenda es el del agraviado: la humillación pública que sufre cuando Canek irrumpe en su propia boda y se lleva a la novia ante los ojos de todos los invitados no es solo una pérdida personal, sino un golpe directo al prestigio político de toda su ciudad.
La respuesta de Ah Ulil es reunir a sus aliados y declarar la guerra abierta contra Chichén Itzá, un conflicto que las versiones más difundidas de la leyenda presentan como el factor que termina por debilitar fatalmente a ambas ciudades rivales, ya fragilizadas por tensiones internas previas al episodio romántico. A diferencia de Canek, presentado siempre con simpatía como el amante desafiante, la tradición oral trata a Ah Ulil con mayor ambigüedad: su reacción es comprensible dado el agravio sufrido, pero su insistencia en la guerra es también, según ciertas versiones, la causa directa de la ruina que termina alcanzando a las propias ciudades que pretendía defender con su honor.`,
    origen: 'Señor de Izamal, prometido oficial de Sac-Nicté antes del rapto de Canek.',
    dominio: 'El honor agraviado y la venganza política', naturaleza: 'Gobernante legendario', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'xkeban', nombre: 'Xkeban', nombre_griego: 'Xkeban',
    epitetos: 'La Pecadora de Corazón Compasivo',
    descripcion_corta: 'Mujer de vida licenciosa pero de bondad genuina hacia los pobres y enfermos — al morir, de su cuerpo nace la flor fragante del xtabentún.',
    descripcion_larga: `Xkeban es la protagonista de una de las leyendas morales más conocidas del folclore yucateco, ambientada en un pueblo donde vivía señalada y despreciada por la mayoría de sus vecinos debido a su conducta sexual libre, considerada escandalosa según las normas de la comunidad. Pese al rechazo social constante, Xkeban era, en secreto, la persona más generosa del pueblo: cuidaba a los enfermos que nadie más quería atender, alimentaba a los animales abandonados y ayudaba económicamente a quien lo necesitara, sin buscar jamás reconocimiento ni agradecimiento público por sus actos.
Cuando Xkeban muere, un aroma dulce y extraordinario comienza a emanar de su humilde vivienda, tan intenso que los vecinos, sorprendidos, deciden finalmente entrar a investigar la causa. Al llegar a su tumba tiempo después, descubren que de ella ha brotado una flor blanca de fragancia inconfundible, conocida desde entonces como xtabentún, cuyo perfume se convirtió en la prueba física e innegable de que la verdadera bondad de Xkeban había sido, todo el tiempo, mucho más profunda que los juicios superficiales de quienes la habían despreciado en vida.`,
    origen: 'Mujer del pueblo, señalada por su conducta pero secretamente compasiva.',
    dominio: 'La compasión oculta tras el juicio social', naturaleza: 'Mujer legendaria', es_preview: 0
  },
  {
    tipo: 'mortal', slug: 'utz-colel', nombre: 'Utz-Colel', nombre_griego: 'Utz Kolel',
    epitetos: 'La Mujer Virtuosa de Corazón Frío',
    descripcion_corta: 'Mujer respetada por su virtud aparente pero fría y desdeñosa con los necesitados — al morir, se transforma en el origen del espíritu Xtabay.',
    descripcion_larga: `Utz-Colel, "mujer buena" o "mujer virtuosa" en su traducción literal, es la contraparte directa de Xkeban en la leyenda yucateca que explica el origen de la flor xtabentún y del espíritu Xtabay: una mujer del mismo pueblo, admirada públicamente por su comportamiento intachable, su recato y su reputación impecable, pero que en privado trataba con frialdad y desprecio a cualquiera que considerara indigno de su atención, negando ayuda a los pobres y enfermos que Xkeban, en cambio, socorría sin condiciones.
Cuando Utz-Colel muere el mismo día que Xkeban, el pueblo entero espera un funeral digno de su reputación intachable, pero un hedor insoportable comienza a emanar de su cuerpo casi de inmediato, para sorpresa y desconcierto de todos los presentes. De su tumba brota después un cactus de flor hermosa pero completamente desprovista de aroma —belleza sin sustancia, exactamente como su virtud había sido pública pero vacía de compasión real—. Según la versión más extendida de la leyenda, es precisamente el espíritu de Utz-Colel, y no el de Xkeban, el que se transforma con el tiempo en la Xtabay, la seductora nocturna que acecha a los hombres solitarios junto a los caminos yucatecos.`,
    origen: 'Mujer del pueblo, respetada públicamente pero fría con los necesitados.',
    dominio: 'La virtud aparente sin compasión real', naturaleza: 'Mujer legendaria', es_preview: 0
  }
];

async function obtenerLibroId() {
  const [filas] = await pool.query("SELECT id FROM libros WHERE slug = 'mitologia-maya'");
  if (filas.length === 0) throw new Error('No existe el libro "mitologia-maya" -- créalo primero.');
  return filas[0].id;
}

async function main() {
  console.log('Sembrando mortales de Mitologia Maya (parte 3)...\n');
  const libroId = await obtenerLibroId();

  for (const p of PERSONAJES) {
    const [existente] = await pool.query('SELECT id FROM personajes WHERE slug = ? AND libro_id = ?', [p.slug, libroId]);
    if (existente.length > 0) {
      console.log(`  - Personaje "${p.nombre}" ya existía.`);
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
