// ============================================================
// pagos.js
// ------------------------------------------------------------
// Todo lo relacionado a comprar un nivel de acceso: traer los
// precios reales desde la API (para no repetirlos hardcodeados acá)
// y arrancar una compra mandando al usuario a la página de pago de
// MercadoPago.
//
// Se carga en libro/index.html, después de auth.js (usa
// "window.authHeaders()") y antes de app.js (que usa
// "window.PRECIOS" y "window.comprarNivel" para armar los botones de
// las hojas bloqueadas).
// ============================================================

// Ruta relativa: server.js sirve este frontend como archivos
// estaticos, asi que frontend y API comparten origen siempre.
const PAGOS_API_URL = '/api/pagos';
const DESCUENTOS_API_URL = '/api/descuentos';

// Precios reales en las dos monedas ({clp, usd, monedaSugerida}, tal
// cual devuelve GET /precios), cargados al arrancar. Hasta que la
// respuesta llegue, construirHojaBloqueada() en app.js simplemente no
// muestra montos (ver ahí el fallback).
window.PRECIOS = null;

// Descuento general activo para ESTE libro (si el admin creó uno desde
// admin/descuentos.html), o null si no hay ninguno. Es puramente
// informativo -- solo sirve para mostrar el precio ya rebajado en los
// botones de compra; el monto que de verdad se cobra siempre lo vuelve
// a calcular el backend en POST /preferencia (ver routes/pagos.js), sin
// confiar en nada de esto.
window.DESCUENTO_GENERAL = null;

// Código que el usuario escribió y quedó validado (ver
// aplicarCodigoDescuento). Si existe, le gana al descuento general
// automático -- el usuario lo pidió a propósito.
window.CODIGO_DESCUENTO_ACTUAL = null;

async function cargarPrecios() {
  try {
    const [respuestaPrecios, descuentoGeneral] = await Promise.all([
      fetch(`${PAGOS_API_URL}/precios`).then(r => r.ok ? r.json() : null),
      fetch(`${DESCUENTOS_API_URL}/general?libro=${encodeURIComponent(window.LIBRO_ACTUAL)}`)
        .then(r => r.ok ? r.json() : null)
    ]);
    // GET /precios devuelve el monto en las dos monedas a la vez, mas
    // "monedaSugerida" (CLP o USD, segun de donde geolocalizamos al
    // visitante -- ver routes/pagos.js). Los botones de compra
    // muestran las dos juntas (mismo criterio que el catalogo del
    // landing, ver construirBloquePrecio en landing.js), asi que
    // guardamos el objeto completo tal cual.
    if (respuestaPrecios) {
      window.PRECIOS = respuestaPrecios;
    }
    window.DESCUENTO_GENERAL = descuentoGeneral;
  } catch (error) {
    console.error('No se pudieron cargar los precios:', error);
  }
}
cargarPrecios();

// Calcula el precio final a MOSTRAR para un nivel dado, en las dos
// monedas a la vez, aplicando el código activo (si hay uno validado)
// o si no el descuento general (si existe). Devuelve
// {clp: {original, final}, usd: {original, final} | null, porcentaje}
// -- "usd" es null si no habia tipo de cambio disponible (ver
// GET /api/pagos/precios); "porcentaje" es 0 si no hay descuento.
function calcularPrecioMostrado(nivelAcceso) {
  const descuento = window.CODIGO_DESCUENTO_ACTUAL
    ? window.CODIGO_DESCUENTO_ACTUAL.porcentaje
    : (window.DESCUENTO_GENERAL ? window.DESCUENTO_GENERAL.porcentaje : 0);

  // CLP se redondea a entero; USD a centavos -- mismo criterio que
  // construirBloquePrecio en landing.js, para que el mismo descuento
  // no se vea redondeado distinto en una pagina y en la otra.
  function paraMoneda(precios, decimales) {
    if (!precios) return null;
    const original = precios[nivelAcceso];
    if (original === null || original === undefined) return null;
    const factor = Math.pow(10, decimales);
    const final = descuento ? Math.round(original * (1 - descuento / 100) * factor) / factor : original;
    return { original, final };
  }

  if (!window.PRECIOS) return { clp: null, usd: null, porcentaje: descuento };
  return {
    clp: paraMoneda(window.PRECIOS.clp, 0),
    usd: paraMoneda(window.PRECIOS.usd, 2),
    porcentaje: descuento
  };
}
window.calcularPrecioMostrado = calcularPrecioMostrado;

// Valida un código contra el backend y, si es válido, lo guarda como
// el código activo para la próxima compra. Devuelve la respuesta tal
// cual (para que app.js decida qué mostrar).
async function aplicarCodigoDescuento(codigo) {
  try {
    const respuesta = await fetch(`${DESCUENTOS_API_URL}/validar?libro=${encodeURIComponent(window.LIBRO_ACTUAL)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...window.authHeaders() },
      body: JSON.stringify({ codigo })
    });
    const datos = await respuesta.json();
    window.CODIGO_DESCUENTO_ACTUAL = datos.valido ? { codigo, porcentaje: datos.porcentaje } : null;
    return datos;
  } catch (error) {
    window.CODIGO_DESCUENTO_ACTUAL = null;
    return { valido: false, error: 'No se pudo conectar con el servidor' };
  }
}
window.aplicarCodigoDescuento = aplicarCodigoDescuento;

// Formatea un monto en la moneda que devuelva la API. CLP no usa
// decimales; USD (el precio referencial para visitantes fuera de
// Chile, ver GET /api/pagos/precios) si los necesita, porque sale de
// convertir un monto en pesos con un tipo de cambio -- sin decimales
// se vería siempre redondeado a un numero entero de dolares.
function formatearMonto(monto, moneda) {
  const maximumFractionDigits = moneda === 'CLP' ? 0 : 2;
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: moneda, maximumFractionDigits }).format(monto);
}
window.formatearMonto = formatearMonto;

// Arranca la compra de "nivelAcceso" ('flipbook' o 'completo'):
// pide la preferencia de pago al backend y redirige al usuario a
// MercadoPago. Si no hay sesión, abre el modal de login en su lugar
// (no tiene sentido cobrarle a alguien que no sabemos quién es).
async function comprarNivel(nivelAcceso) {
  if (!window.SESION || !window.SESION.autenticado) {
    window.abrirModalAuth('login');
    return;
  }

  try {
    // El libro va como query param (no en el body): la ruta del
    // backend resuelve el libro con el mismo middleware que usan las
    // demas rutas (resolverLibro), que siempre lee "?libro=" de la URL.
    const respuesta = await fetch(`${PAGOS_API_URL}/preferencia?libro=${encodeURIComponent(window.LIBRO_ACTUAL)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...window.authHeaders() },
      body: JSON.stringify({
        nivel_acceso: nivelAcceso,
        codigo_descuento: window.CODIGO_DESCUENTO_ACTUAL ? window.CODIGO_DESCUENTO_ACTUAL.codigo : null
      })
    });
    const datos = await respuesta.json();
    if (!respuesta.ok) {
      alert(datos.error || 'No se pudo iniciar el pago');
      return;
    }
    window.location.href = datos.init_point;
  } catch (error) {
    alert('No se pudo conectar con el servidor de pagos');
  }
}
window.comprarNivel = comprarNivel;

// ------------------------------------------------------------
// Vuelta desde MercadoPago: los back_urls que configuramos en el
// backend traen "payment_id" y "external_reference" como parámetros
// en la URL. Si están presentes, hay que confirmar el pago contra
// nuestra API (que a su vez lo verifica contra la API real de
// MercadoPago) antes de refrescar la sesión.
// ------------------------------------------------------------
async function confirmarVueltaDePago() {
  const params = new URLSearchParams(window.location.search);
  const paymentId = params.get('payment_id');
  const externalReference = params.get('external_reference');
  if (!paymentId || !externalReference) return;

  const aviso = document.createElement('div');
  aviso.className = 'pago-aviso';
  aviso.textContent = 'Confirmando tu pago...';
  document.body.appendChild(aviso);

  // Limpiamos los parámetros de la URL para que un F5 no vuelva a
  // disparar la confirmación (y para que la URL se vea prolija).
  window.history.replaceState({}, '', window.location.pathname);

  try {
    const url = `${PAGOS_API_URL}/confirmar?payment_id=${encodeURIComponent(paymentId)}&external_reference=${encodeURIComponent(externalReference)}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    if (respuesta.ok && datos.estado === 'aprobado') {
      aviso.textContent = '¡Pago aprobado! Actualizando tu acceso...';
      await cargarSesion(); // definida en auth.js
      location.reload();
      return;
    }
    if (datos.estado === 'pendiente') {
      aviso.textContent = 'Tu pago está pendiente de confirmación. Puede tardar unos minutos.';
    } else {
      aviso.textContent = 'El pago no se pudo confirmar. Si ya pagaste, escríbenos.';
    }
    setTimeout(() => aviso.remove(), 6000);
  } catch (error) {
    aviso.remove();
  }
}

document.addEventListener('DOMContentLoaded', confirmarVueltaDePago);
