// ============================================================
// admin-comun.js
// ------------------------------------------------------------
// Lo que comparten las 3 paginas de frontend/admin/ (index.html
// "dashboard", pagos.html, usuarios.html): el chequeo de "sos admin
// logueado, si no mostra el aviso" y la mini navegacion entre las
// tres. Se carga despues de auth.js (usa "window.sesionListaPromise"
// y "window.SESION") y antes del script propio de cada pagina.
// ============================================================

// Nombre de la pagina activa (para resaltarla en la nav) -> se pasa
// como argumento, no se adivina por la URL, asi queda explicito.
function construirNavAdmin(paginaActiva) {
  const paginas = [
    { id: 'resumen', href: 'index.html', etiqueta: 'Resumen' },
    { id: 'pagos', href: 'pagos.html', etiqueta: 'Pagos' },
    { id: 'usuarios', href: 'usuarios.html', etiqueta: 'Usuarios' },
    { id: 'libros', href: 'libros.html', etiqueta: 'Libros' },
    { id: 'descuentos', href: 'descuentos.html', etiqueta: 'Descuentos' },
    { id: 'proximos', href: 'proximos.html', etiqueta: 'Próximos libros' },
    { id: 'cambios', href: 'cambios.html', etiqueta: 'Cambios' }
  ];

  const itemsHtml = paginas.map(p =>
    `<a class="admin-nav-item ${p.id === paginaActiva ? 'activo' : ''}" href="${p.href}">${p.etiqueta}</a>`
  ).join('');

  return `<nav class="admin-nav">${itemsHtml}</nav>`;
}

// Espera a que auth.js termine de resolver la sesion (ver
// window.sesionListaPromise en js/auth.js) y devuelve true/false segun
// si hay que mostrar el contenido de admin. Si no, ya deja el mensaje
// de acceso denegado pintado en "contenedor".
async function esperarSesionAdmin(contenedor) {
  await window.sesionListaPromise;

  if (window.SESION.autenticado && window.SESION.rol === 'admin') return true;

  contenedor.innerHTML = `<p class="admin-denegado">Esta página es solo para administradores. ${
    window.SESION.autenticado ? '' : 'Inicia sesión con una cuenta de administrador.'
  }</p>`;
  return false;
}

// Numero de version chico junto al logo (ver GET /api/version en
// backend/routes/version.js) -- solo si la pagina tiene el hueco
// "#versionTag" (no todas lo tienen todavia). Si el pedido falla (sin
// sesion admin, o el backend no responde) se deja vacio, sin romper
// nada -- no es informacion critica para usar el panel.
async function cargarVersion() {
  const tag = document.getElementById('versionTag');
  if (!tag) return;
  try {
    const respuesta = await fetch('/api/version', { headers: window.authHeaders() });
    if (!respuesta.ok) return;
    const datos = await respuesta.json();
    tag.textContent = `v${datos.version}`;
  } catch (error) {
    // Sin version visible no rompe nada.
  }
}
document.addEventListener('DOMContentLoaded', cargarVersion);
