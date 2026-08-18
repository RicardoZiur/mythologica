// ============================================================
// carrito-resumen.js
// ------------------------------------------------------------
// Logica propia de carrito.html: pinta los items del carrito con su
// precio real (vía POST /pagos/cotizar-carrito -- el precio mostrado
// nunca sale de lo que haya en localStorage, siempre se vuelve a
// calcular en el servidor), deja aplicar un código de descuento, y
// arranca el pago de verdad (POST /pagos/pedido) que manda a
// MercadoPago. También atiende la vuelta desde MercadoPago
// (?payment_id=&external_reference=) -- antes eso vivía en pagos.js
// y volvía a libro/index.html, pero una compra ya no es de UN libro
// puntual, así que ahora vuelve acá.
// ============================================================

const PAGOS_API_URL = '/api/pagos';

const ETIQUETAS_NIVEL = {
  completo: 'Acceso completo + descarga en PDF',
  flipbook: 'Acceso al libro en el sitio'
};

// Código que el usuario escribió y quedó validado contra al menos un
// ítem del carrito (ver aplicarCodigo). null si no hay ninguno.
window.CODIGO_DESCUENTO_ACTUAL = null;

function formatearMonto(monto, moneda) {
  const maximumFractionDigits = moneda === 'CLP' ? 0 : 2;
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: moneda, maximumFractionDigits }).format(monto);
}

function escaparHtml(texto) {
  const div = document.createElement('div');
  div.textContent = texto || '';
  return div.innerHTML;
}

// Pide el precio real de cada ítem del carrito al backend. Tira si
// el carrito ya no es válido (algo ya comprado, o el código no aplica
// a ningún ítem) -- quien llama decide qué hacer con ese error.
async function cotizarCarrito() {
  const respuesta = await fetch(`${PAGOS_API_URL}/cotizar-carrito`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...window.authHeaders() },
    body: JSON.stringify({
      items: window.obtenerCarrito(),
      codigo_descuento: window.CODIGO_DESCUENTO_ACTUAL
    })
  });
  const datos = await respuesta.json();
  if (!respuesta.ok) throw new Error(datos.error || 'No se pudo cotizar el carrito');
  return datos;
}

function construirFilaItem(item) {
  const emblemaUrl = `/images/${item.libro}/portada-emblema.png`;
  const precioHtml = item.descuento_porcentaje > 0
    ? `<s>${formatearMonto(item.precio_original, 'CLP')}</s> ${formatearMonto(item.precio_final, 'CLP')} <span class="carrito-item-descuento">-${item.descuento_porcentaje}%</span>`
    : formatearMonto(item.precio_final, 'CLP');

  return `
    <div class="carrito-item">
      <div class="carrito-item-emblem" style="background-image:url('${emblemaUrl}');"></div>
      <div class="carrito-item-info">
        <p class="carrito-item-titulo">${escaparHtml(item.titulo)}</p>
        <p class="carrito-item-nivel">${ETIQUETAS_NIVEL[item.nivel_acceso] || item.nivel_acceso}</p>
      </div>
      <div class="carrito-item-precio">${precioHtml}</div>
      <button type="button" class="carrito-item-quitar" data-libro="${item.libro}">Quitar</button>
    </div>
  `;
}

// Pinta todo el contenido de la pantalla a partir del carrito actual.
// Si hay un código activo y resulta que ya no es válido (o dejó de
// aplicar a algo), reintenta SIN el código en vez de dejar la
// pantalla en blanco -- el usuario no pierde de vista su carrito solo
// por escribir mal un código.
// Mensaje de error CON forma de salir: sin esto, un item invalido en
// el carrito (ej. quedo guardado con un bug ya corregido, o el libro
// se borro) dejaba la pantalla trabada -- cotizar-carrito rechaza el
// carrito ENTERO si un solo item no es valido, y antes no habia forma
// de vaciarlo sin abrir las herramientas de desarrollador.
function pintarErrorCarrito(contenedor, mensaje) {
  contenedor.innerHTML = `
    <p class="admin-vacio">${escaparHtml(mensaje)}</p>
    <p class="admin-vacio"><button type="button" class="carrito-item-quitar" id="btnVaciarCarrito">Vaciar carrito</button></p>
  `;
  document.getElementById('btnVaciarCarrito').addEventListener('click', () => {
    window.vaciarCarrito();
    pintarCarrito();
  });
}

async function pintarCarrito() {
  const contenedor = document.getElementById('carritoContenido');

  if (window.obtenerCarrito().length === 0) {
    contenedor.innerHTML = `
      <p class="admin-vacio">Tu carrito está vacío. <a href="mis-libros.html">Ver mi biblioteca</a> o <a href="index.html#catalogo">ver el catálogo</a>.</p>
    `;
    return;
  }

  contenedor.innerHTML = '<p class="admin-cargando">Cargando...</p>';

  let cotizacion;
  let errorCodigo = null;
  try {
    cotizacion = await cotizarCarrito();
  } catch (error) {
    if (!window.CODIGO_DESCUENTO_ACTUAL) {
      pintarErrorCarrito(contenedor, error.message);
      return;
    }
    errorCodigo = error.message;
    window.CODIGO_DESCUENTO_ACTUAL = null;
    try {
      cotizacion = await cotizarCarrito();
    } catch (error2) {
      pintarErrorCarrito(contenedor, error2.message);
      return;
    }
  }

  const itemsHtml = cotizacion.items.map(construirFilaItem).join('');

  contenedor.innerHTML = `
    <div class="carrito-items">${itemsHtml}</div>
    <div class="carrito-codigo">
      <input type="text" id="carritoCodigoInput" placeholder="CÓDIGO DE DESCUENTO" maxlength="50">
      <button type="button" class="locked-cta secundario" id="btnAplicarCodigo">Aplicar</button>
    </div>
    <p class="carrito-codigo-msg" id="carritoCodigoMsg">${errorCodigo ? escaparHtml(errorCodigo) : ''}</p>
    <div class="carrito-total">
      <span>Total</span>
      <strong>${formatearMonto(cotizacion.total, cotizacion.moneda)}</strong>
    </div>
    <button type="button" class="pdf-btn carrito-pagar" id="btnPagar">Pagar</button>
  `;

  document.querySelectorAll('.carrito-item-quitar').forEach(boton => {
    boton.addEventListener('click', () => {
      window.quitarDelCarrito(boton.dataset.libro);
      pintarCarrito();
    });
  });
  document.getElementById('btnAplicarCodigo').addEventListener('click', aplicarCodigo);
  document.getElementById('btnPagar').addEventListener('click', pagar);
}

async function aplicarCodigo() {
  const input = document.getElementById('carritoCodigoInput');
  if (!input.value.trim()) return;
  window.CODIGO_DESCUENTO_ACTUAL = input.value.trim();
  await pintarCarrito();
}

async function pagar() {
  const boton = document.getElementById('btnPagar');
  boton.disabled = true;
  boton.textContent = 'Redirigiendo a Mercado Pago...';

  try {
    const respuesta = await fetch(`${PAGOS_API_URL}/pedido`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...window.authHeaders() },
      body: JSON.stringify({
        items: window.obtenerCarrito(),
        codigo_descuento: window.CODIGO_DESCUENTO_ACTUAL
      })
    });
    const datos = await respuesta.json();
    if (!respuesta.ok) {
      alert(datos.error || 'No se pudo iniciar el pago');
      boton.disabled = false;
      boton.textContent = 'Pagar';
      return;
    }
    window.location.href = datos.init_point;
  } catch (error) {
    alert('No se pudo conectar con el servidor de pagos');
    boton.disabled = false;
    boton.textContent = 'Pagar';
  }
}

// ------------------------------------------------------------
// Vuelta desde MercadoPago: los back_urls que configuramos en el
// backend traen "payment_id" y "external_reference" como parámetros
// en la URL. Si están presentes, hay que confirmar el pago contra
// nuestra API (que a su vez lo verifica contra la API real de
// MercadoPago) antes de refrescar la sesión y vaciar el carrito.
// ------------------------------------------------------------
async function confirmarVueltaDePago() {
  const params = new URLSearchParams(window.location.search);
  const paymentId = params.get('payment_id');
  const externalReference = params.get('external_reference');
  if (!paymentId || !externalReference) return false;

  const aviso = document.createElement('div');
  aviso.className = 'pago-aviso';
  aviso.textContent = 'Confirmando tu pago...';
  document.body.appendChild(aviso);

  window.history.replaceState({}, '', window.location.pathname);

  try {
    const url = `${PAGOS_API_URL}/confirmar?payment_id=${encodeURIComponent(paymentId)}&external_reference=${encodeURIComponent(externalReference)}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    if (respuesta.ok && datos.estado === 'aprobado') {
      aviso.textContent = '¡Pago aprobado! Actualizando tu biblioteca...';
      window.vaciarCarrito();
      await cargarSesion(); // definida en auth.js
      setTimeout(() => aviso.remove(), 4000);
      return true;
    }
    if (datos.estado === 'pendiente') {
      aviso.textContent = 'Tu pago está pendiente de confirmación. Puede tardar unos minutos.';
    } else {
      aviso.textContent = 'El pago no se pudo confirmar. Si ya pagaste, escríbenos.';
    }
    setTimeout(() => aviso.remove(), 6000);
    return true;
  } catch (error) {
    aviso.remove();
    return true;
  }
}

async function iniciarCarrito() {
  const contenedor = document.getElementById('carritoContenido');
  await window.sesionListaPromise;

  if (!window.SESION.autenticado) {
    contenedor.innerHTML = `<p class="admin-denegado">Inicia sesión para ver tu carrito.</p>`;
    window.abrirModalAuth('login');
    return;
  }

  await confirmarVueltaDePago();
  await pintarCarrito();
}

document.addEventListener('DOMContentLoaded', iniciarCarrito);
