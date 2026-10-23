// ============================================================
// carrito.js
// ------------------------------------------------------------
// Estado del carrito de compras: que libros (con que nivel de
// acceso) el usuario quiere comprar, guardado en localStorage (mismo
// criterio que el token de sesion o el tema -- no hace falta que
// sobreviva entre dispositivos, es un carrito de compra rapida).
//
// Se carga en cualquier pagina donde se pueda agregar algo al
// carrito (landing, flipbook) o pagarlo (carrito.html). El link
// "Carrito" del header con su contador lo arma pintarAuthStatus() en
// auth.js -- este archivo solo llena el numero del contador
// (#carritoCount) y expone las funciones para agregar/quitar/leer.
// ============================================================

const CLAVE_CARRITO = 'mythologica_carrito';

function leerCarrito() {
  try {
    const guardado = localStorage.getItem(CLAVE_CARRITO);
    return guardado ? JSON.parse(guardado) : [];
  } catch (error) {
    return [];
  }
}

function guardarCarrito(items) {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(items));
  window.pintarContadorCarrito();
}

// Agrega un libro con un nivel de acceso. Si ese libro ya estaba en
// el carrito, REEMPLAZA su nivel en vez de duplicar la fila -- no
// tiene sentido tener "flipbook" y "completo" del mismo libro a la
// vez, "completo" ya incluye lo otro.
window.agregarAlCarrito = function agregarAlCarrito(libroSlug, nivelAcceso) {
  const items = leerCarrito().filter(item => item.libro !== libroSlug);
  items.push({ libro: libroSlug, nivel_acceso: nivelAcceso });
  guardarCarrito(items);
};

window.quitarDelCarrito = function quitarDelCarrito(libroSlug) {
  guardarCarrito(leerCarrito().filter(item => item.libro !== libroSlug));
};

window.obtenerCarrito = function obtenerCarrito() {
  return leerCarrito();
};

window.contarCarrito = function contarCarrito() {
  return leerCarrito().length;
};

window.vaciarCarrito = function vaciarCarrito() {
  localStorage.removeItem(CLAVE_CARRITO);
  window.pintarContadorCarrito();
};

// Aparte de en el DOMContentLoaded de mas abajo, auth.js llama esto
// de nuevo al final de pintarAuthStatus() (si esta funcion existe):
// esa funcion reconstruye TODO el contenido de #authStatus (incluido
// el span vacio del contador) cada vez que corre, asi que hay que
// repintar el numero despues, o se pierde.
window.pintarContadorCarrito = function pintarContadorCarrito() {
  const span = document.getElementById('carritoCount');
  if (!span) return;
  const cantidad = window.contarCarrito();
  span.textContent = cantidad > 0 ? String(cantidad) : '';
};

document.addEventListener('DOMContentLoaded', window.pintarContadorCarrito);

// ------------------------------------------------------------
// Codigo de descuento por enlace: "?codigo=LEXICO50" en cualquier
// pagina lo guarda para que carrito.html lo aplique solo (ver
// iniciarCarrito en carrito-resumen.js), sin que haya que escribirlo.
// Es solo una comodidad: el servidor lo valida igual que si se
// escribiera a mano, y si no sirve se descarta en el carrito.
// ------------------------------------------------------------
const CLAVE_CODIGO = 'mythologica_codigo';

window.obtenerCodigoGuardado = function obtenerCodigoGuardado() {
  try {
    return localStorage.getItem(CLAVE_CODIGO);
  } catch (error) {
    return null;
  }
};

window.olvidarCodigoGuardado = function olvidarCodigoGuardado() {
  try {
    localStorage.removeItem(CLAVE_CODIGO);
  } catch (error) {
    // Sin localStorage no habia nada guardado.
  }
};

(function capturarCodigoDeLaUrl() {
  const params = new URLSearchParams(window.location.search);
  const codigo = (params.get('codigo') || '').trim().toUpperCase().slice(0, 50);
  if (!codigo) return;

  try {
    localStorage.setItem(CLAVE_CODIGO, codigo);
  } catch (error) {
    return;
  }
  // Se saca de la URL para que no quede en el historial ni se comparta sin querer.
  params.delete('codigo');
  const resto = params.toString();
  window.history.replaceState({}, '', window.location.pathname + (resto ? `?${resto}` : '') + window.location.hash);

  document.addEventListener('DOMContentLoaded', () => {
    const aviso = document.createElement('div');
    aviso.className = 'pago-aviso';
    aviso.textContent = `Tu código ${codigo} quedó guardado: se aplicará en el carrito.`;
    document.body.appendChild(aviso);
    setTimeout(() => aviso.remove(), 6000);
  });
})();
