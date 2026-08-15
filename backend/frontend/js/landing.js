// ============================================================
// landing.js
// ------------------------------------------------------------
// Dos cosas: (1) armar el catálogo de libros ("elige tu libro") a
// partir de datos reales de la API, con la cuenta real de
// personajes/historias de cada uno -- nada hardcodeado, para que un
// libro nuevo aparezca solo en cuanto se publique; y (2) traer los
// precios reales para el bloque de precios (mismo precio para
// cualquier libro).
// ============================================================

// Ruta relativa: server.js sirve este frontend como archivos
// estaticos, asi que frontend y API comparten origen siempre.
const API_URL = '/api';

function escaparHtml(texto) {
  const div = document.createElement('div');
  div.textContent = texto || '';
  return div.innerHTML;
}

// CLP no usa decimales; USD (precio referencial para visitantes fuera
// de Chile, ver GET /api/pagos/precios) si, porque sale de convertir
// un monto en pesos con un tipo de cambio.
function formatearMonto(monto, moneda) {
  const maximumFractionDigits = moneda === 'CLP' ? 0 : 2;
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: moneda, maximumFractionDigits }).format(monto);
}

// Fila de emblemas arriba del titulo del hero, uno por cada libro del
// catalogo (antes era una sola imagen fija con el emblema griego
// nomas, sin importar cuantos libros hubiera). Mismo truco de
// background-image de siempre para degradar bien si a algun libro
// todavia le falta el suyo: esa posicion simplemente no pinta nada.
function pintarEmblemasDelHero(libros) {
  const contenedor = document.getElementById('lpHeroEmblems');
  if (!contenedor) return;
  contenedor.innerHTML = libros.map(libro => `
    <div class="lp-hero-emblem" style="background-image:url('/images/${libro.slug}/portada-emblema.png');" title="${escaparHtml(libro.titulo)}"></div>
  `).join('');
}

// Trae los libros publicados y, para cada uno, su cuenta real de
// personajes/historias, mas si tiene un descuento general activo (ver
// GET /api/descuentos/general en backend/routes/descuentos.js -- el
// mismo endpoint que usa el flipbook para mostrar el precio rebajado
// en los botones de compra). Los precios de lista se piden una sola
// vez para todas las tarjetas (son los mismos para cualquier libro).
async function cargarCatalogo() {
  const contenedor = document.getElementById('lpBooks');

  try {
    const [libros, precios] = await Promise.all([
      fetch(`${API_URL}/libros`).then(r => {
        if (!r.ok) throw new Error('No se pudo obtener el catálogo');
        return r.json();
      }),
      fetch(`${API_URL}/pagos/precios`).then(r => r.ok ? r.json() : null)
    ]);

    pintarEmblemasDelHero(libros);

    const tarjetas = await Promise.all(libros.map(async (libro) => {
      const [personajes, historias, descuento] = await Promise.all([
        fetch(`${API_URL}/personajes?libro=${encodeURIComponent(libro.slug)}`).then(r => r.ok ? r.json() : []),
        fetch(`${API_URL}/historias?libro=${encodeURIComponent(libro.slug)}`).then(r => r.ok ? r.json() : []),
        fetch(`${API_URL}/descuentos/general?libro=${encodeURIComponent(libro.slug)}`).then(r => r.ok ? r.json() : null)
      ]);
      return construirTarjetaLibro(libro, personajes.length, historias.length, precios, descuento);
    }));

    contenedor.innerHTML = tarjetas.join('');
  } catch (error) {
    console.error('No se pudo cargar el catálogo:', error);
    // Si la API no responde, al menos dejamos el link directo al libro
    // griego (el que casi seguro existe) en vez de una sección vacía.
    contenedor.innerHTML = `
      <article class="lp-book-card">
        <p class="lp-book-desc">No se pudo cargar el catálogo. Puedes intentar entrar directo:</p>
        <a class="lp-cta-primary" href="libro/index.html">Abrir el libro →</a>
      </article>
    `;
  }
}

// Arma el bloque de precio de una tarjeta del catálogo: SIEMPRE se
// muestra (antes solo aparecía si había descuento), en CLP con el
// equivalente en USD entre paréntesis como referencia (ver GET
// /api/pagos/precios en backend/routes/pagos.js -- ahora devuelve las
// dos monedas juntas, no una sola segun geolocalización, justo para
// poder mostrarlas así). "descuento" viene de GET
// /api/descuentos/general (null si no hay ninguno activo para este
// libro); cuando hay uno, tacha el precio de lista y aplica el mismo
// % a las dos monedas.
function construirBloquePrecio(precios, descuento) {
  if (!precios) return '';

  const precioClp = precios.clp.completo;
  const precioUsd = precios.usd.completo; // puede ser null si el tipo de cambio no estaba disponible
  const porcentaje = descuento ? descuento.porcentaje : 0;

  const clpFinal = porcentaje ? Math.round(precioClp * (1 - porcentaje / 100)) : precioClp;
  const usdFinal = (porcentaje && precioUsd !== null) ? Math.round(precioUsd * (1 - porcentaje / 100) * 100) / 100 : precioUsd;
  const textoUsd = precioUsd !== null ? ` (${formatearMonto(usdFinal, 'USD')})` : '';

  if (!porcentaje) {
    return `<div class="lp-book-precio">CLP ${formatearMonto(clpFinal, 'CLP')}${textoUsd}</div>`;
  }

  return `
    <div class="lp-book-oferta">
      <span class="lp-book-oferta-badge">-${porcentaje}%</span>
      <span class="lp-book-oferta-precio">
        <s>CLP ${formatearMonto(precioClp, 'CLP')}</s>
        CLP ${formatearMonto(clpFinal, 'CLP')}${textoUsd}
      </span>
    </div>
  `;
}

function construirTarjetaLibro(libro, totalPersonajes, totalHistorias, precios, descuento) {
  const subtitulo = libro.subtitulo ? `<p class="lp-book-subtitle">${escaparHtml(libro.subtitulo)}</p>` : '';
  const descripcion = libro.descripcion ? `<p class="lp-book-desc">${escaparHtml(libro.descripcion)}</p>` : '';
  const ofertaHtml = construirBloquePrecio(precios, descuento);

  // El emblema es el mismo "portada-emblema.png" que ya se usa en la
  // contraportada del flipbook (ver construirContraportada en app.js)
  // y en el hero de esta misma landing, uno por libro. Va como
  // background-image de un DIV (no un <img>) por la misma razon de
  // siempre: si algun libro todavia no tiene el suyo, simplemente no
  // se pinta nada en vez de mostrar un icono de imagen rota.
  const emblemaUrl = `/images/${libro.slug}/portada-emblema.png`;

  return `
    <article class="lp-book-card lp-book-card--disponible">
      <div class="lp-book-emblem" style="background-image:url('${emblemaUrl}');"></div>
      <div class="lp-book-eyebrow">Disponible ahora</div>
      ${ofertaHtml}
      <h3 class="lp-book-title">${escaparHtml(libro.titulo)}</h3>
      ${subtitulo}
      ${descripcion}
      <div class="lp-book-stats">
        <span><strong>${totalPersonajes}</strong> personajes</span>
        <span><strong>${totalHistorias}</strong> historias</span>
      </div>
      <a class="lp-cta-primary" href="libro/index.html?libro=${encodeURIComponent(libro.slug)}">Leer la muestra gratis →</a>
    </article>
  `;
}

// Trae los precios reales (misma fuente de verdad que usa el flipbook
// para los botones de compra, ver GET /api/pagos/precios en
// backend/routes/pagos.js) para no repetirlos a mano en el HTML. El
// precio es el mismo para cualquier libro del catálogo.
async function cargarPrecios() {
  const elFlipbook = document.getElementById('precioFlipbook');
  const elCompleto = document.getElementById('precioCompleto');
  const notaUsd = document.getElementById('notaMonedaUsd');

  try {
    const respuesta = await fetch(`${API_URL}/pagos/precios`);
    if (!respuesta.ok) throw new Error('No se pudieron obtener los precios');
    const datos = await respuesta.json();
    // "monedaSugerida" viene en USD solo para visitantes geolocalizados
    // fuera de Chile (ver GET /api/pagos/precios) -- el cobro real
    // siempre se procesa en CLP, asi que dejamos esa aclaracion a la
    // vista en ese caso.
    const precios = datos.monedaSugerida === 'USD' ? datos.usd : datos.clp;

    elFlipbook.textContent = formatearMonto(precios.flipbook, precios.moneda);
    elCompleto.textContent = formatearMonto(precios.completo, precios.moneda);
    if (notaUsd) notaUsd.hidden = datos.monedaSugerida === 'CLP';
  } catch (error) {
    console.error('No se pudieron cargar los precios:', error);
    elFlipbook.textContent = 'Ver en el libro';
    elCompleto.textContent = 'Ver en el libro';
  }
}

cargarCatalogo();
cargarPrecios();
