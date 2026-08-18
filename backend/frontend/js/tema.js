// ============================================================
// tema.js
// ------------------------------------------------------------
// Alterna el sitio entre modo oscuro (por defecto) y modo claro
// (mismos colores que el PDF "para imprimir", ver PALETAS.claro en
// backend/routes/pdf.js). El estado se guarda en localStorage y se
// aplica como atributo "data-theme" en <html>.
//
// El cambio de tema en si (para que no haya parpadeo del oscuro por
// defecto antes de pasar al claro guardado) lo hace un script chico
// INLINE en el <head> de cada pagina, ANTES de este archivo y antes
// del <link> a la hoja de estilos -- ver index.html, libro/index.html
// y admin/*.html. Este archivo solo arma el boton y su click.
// ============================================================

const CLAVE_TEMA = 'mythologica_tema';

function temaActual() {
  return document.documentElement.getAttribute('data-theme') === 'claro' ? 'claro' : 'oscuro';
}

function aplicarTema(tema) {
  if (tema === 'claro') {
    document.documentElement.setAttribute('data-theme', 'claro');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  localStorage.setItem(CLAVE_TEMA, tema);
}

function alternarTema() {
  aplicarTema(temaActual() === 'claro' ? 'oscuro' : 'claro');
  pintarBotonTema();
}

// Solo el icono adentro del boton (ver .theme-toggle en style.css/
// landing.css) -- el texto de a que modo pasas si lo tocas (no el
// modo en el que estas) va como title/aria-label, se ve al pasar el
// mouse en vez de ocupar lugar en el header todo el tiempo.
function pintarBotonTema() {
  const boton = document.getElementById('btnTema');
  if (!boton) return;
  const pasarA = temaActual() === 'claro' ? 'Modo oscuro' : 'Modo claro';
  boton.textContent = temaActual() === 'claro' ? '☾' : '☀';
  boton.title = pasarA;
  boton.setAttribute('aria-label', pasarA);
}

document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('btnTema');
  if (!boton) return;
  boton.addEventListener('click', alternarTema);
  pintarBotonTema();
});
