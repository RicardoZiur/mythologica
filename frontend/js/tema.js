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

// Actualiza el texto del boton para que siempre diga a que modo pasas
// si lo tocas (no el modo en el que estas).
function pintarBotonTema() {
  const boton = document.getElementById('btnTema');
  if (!boton) return;
  boton.textContent = temaActual() === 'claro' ? '☾ Modo oscuro' : '☀ Modo claro';
}

document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('btnTema');
  if (!boton) return;
  boton.addEventListener('click', alternarTema);
  pintarBotonTema();
});
