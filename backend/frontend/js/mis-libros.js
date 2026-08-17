// ============================================================
// mis-libros.js
// ------------------------------------------------------------
// Pantalla "Mi biblioteca" (frontend/mis-libros.html): todos los
// libros del catalogo, marcando cuales tiene comprados el usuario
// logueado (clickeables, llevan al flipbook) y cuales no (se ven
// deshabilitados). El nivel de acceso por libro ya viene en
// GET /api/auth/yo (ver "sesion.accesos" en auth.js) -- no hace
// falta pedirlo aparte.
// ============================================================

const API_URL = '/api';

function escaparHtml(texto) {
  const div = document.createElement('div');
  div.textContent = texto || '';
  return div.innerHTML;
}

const ETIQUETAS_NIVEL = {
  completo: 'Acceso completo',
  flipbook: 'Acceso al flipbook',
  ninguno: 'No comprado'
};

function construirTarjeta(libro, nivelAcceso) {
  const disponible = nivelAcceso === 'flipbook' || nivelAcceso === 'completo';
  const emblemaUrl = `/images/${libro.slug}/portada-emblema.png`;
  const subtitulo = libro.subtitulo ? `<p class="mislibros-card-subtitle">${escaparHtml(libro.subtitulo)}</p>` : '';

  const contenido = `
    <div class="mislibros-card-emblem" style="background-image:url('${emblemaUrl}');"></div>
    <h3 class="mislibros-card-title">${escaparHtml(libro.titulo)}</h3>
    ${subtitulo}
    <span class="mislibros-card-badge ${disponible ? 'disponible' : 'bloqueado'}">${ETIQUETAS_NIVEL[nivelAcceso]}</span>
  `;

  if (disponible) {
    return `
      <a class="mislibros-card mislibros-card--disponible" href="libro/index.html?libro=${encodeURIComponent(libro.slug)}">
        ${contenido}
      </a>
    `;
  }

  return `
    <div class="mislibros-card mislibros-card--bloqueado" aria-disabled="true">
      ${contenido}
    </div>
  `;
}

async function cargarMisLibros() {
  const contenedor = document.getElementById('misLibrosContenido');

  await window.sesionListaPromise;

  if (!window.SESION.autenticado) {
    contenedor.innerHTML = `
      <p class="admin-denegado">Inicia sesión para ver tu biblioteca.</p>
    `;
    window.abrirModalAuth('login');
    return;
  }

  try {
    const libros = await fetch(`${API_URL}/libros`).then(r => {
      if (!r.ok) throw new Error('No se pudo obtener el catálogo');
      return r.json();
    });

    const tarjetasHtml = libros.map(libro => {
      const acceso = (window.SESION.accesos || []).find(a => a.libro === libro.slug);
      const nivelAcceso = window.SESION.rol === 'admin' ? 'completo' : (acceso ? acceso.nivel_acceso : 'ninguno');
      return construirTarjeta(libro, nivelAcceso);
    }).join('');

    contenedor.innerHTML = `<div class="mislibros-grid">${tarjetasHtml}</div>`;
  } catch (error) {
    console.error('No se pudo cargar la biblioteca:', error);
    contenedor.innerHTML = '<p class="admin-vacio">No se pudo cargar tu biblioteca. Intenta de nuevo más tarde.</p>';
  }
}

document.addEventListener('DOMContentLoaded', cargarMisLibros);
