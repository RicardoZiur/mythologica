// ============================================================
// admin-libros.js
// ------------------------------------------------------------
// Pantalla "Libros" del panel de admin (admin/libros.html): tabla
// con todos los libros del catalogo (publicados, en borrador o en
// revision) y un boton para habilitarlos/deshabilitarlos -- alterna
// "estado" entre 'publicado' y 'borrador' (GET /api/libros solo
// devuelve los publicados, asi que esto controla directamente si el
// libro aparece en el landing/catalogo publico). Mismo patron que
// admin-proximos.js.
// ============================================================

const API_URL = '/api';

function formatearFecha(fechaIso) {
  return new Date(fechaIso).toLocaleString('es-CL', { dateStyle: 'medium', timeStyle: 'short' });
}

function escaparHtml(texto) {
  const div = document.createElement('div');
  div.textContent = texto || '';
  return div.innerHTML;
}

const ETIQUETAS_ESTADO = {
  publicado: { texto: 'Publicado', clase: 'aprobado' },
  en_revision: { texto: 'En revisión', clase: 'pendiente' },
  borrador: { texto: 'Borrador', clase: 'rechazado' }
};

function construirTabla(libros) {
  const filasHtml = libros.map(l => {
    const estado = ETIQUETAS_ESTADO[l.estado] || ETIQUETAS_ESTADO.borrador;
    const publicado = l.estado === 'publicado';
    return `
      <tr>
        <td>${escaparHtml(l.titulo)}<br><span class="admin-email-secundario">${escaparHtml(l.subtitulo || '')}</span></td>
        <td>${l.total_personajes}</td>
        <td>${l.total_historias}</td>
        <td><span class="admin-estado ${estado.clase}">${estado.texto}</span></td>
        <td>${formatearFecha(l.creado_en)}</td>
        <td>
          <a class="admin-toggle" href="../libro/index.html?libro=${encodeURIComponent(l.slug)}" target="_blank" rel="noopener">Ver</a>
          <button class="admin-toggle" data-accion="toggle" data-id="${l.id}" data-publicado="${publicado}">${publicado ? 'Deshabilitar' : 'Habilitar'}</button>
        </td>
      </tr>
    `;
  }).join('');

  return `
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Libro</th>
            <th>Personajes</th>
            <th>Historias</th>
            <th>Estado</th>
            <th>Creado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>${filasHtml}</tbody>
      </table>
    </div>
  `;
}

async function cargarTabla() {
  const contenedorTabla = document.getElementById('tablaLibros');
  try {
    const respuesta = await fetch(`${API_URL}/libros/todos`, { headers: window.authHeaders() });
    if (!respuesta.ok) throw new Error('No se pudieron obtener los libros');
    const libros = await respuesta.json();

    contenedorTabla.innerHTML = libros.length === 0
      ? '<p class="admin-vacio">Todavía no hay ningún libro creado.</p>'
      : construirTabla(libros);

    contenedorTabla.querySelectorAll('[data-accion="toggle"]').forEach(boton => {
      boton.addEventListener('click', async () => {
        boton.disabled = true;
        const publicadoActual = boton.dataset.publicado === 'true';
        await fetch(`${API_URL}/libros/${boton.dataset.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', ...window.authHeaders() },
          body: JSON.stringify({ estado: publicadoActual ? 'borrador' : 'publicado' })
        });
        await cargarTabla();
      });
    });
  } catch (error) {
    contenedorTabla.innerHTML = '<p class="admin-vacio">No se pudieron cargar los libros.</p>';
  }
}

async function cargarPagina() {
  const contenedor = document.getElementById('adminContenido');
  document.getElementById('adminNav').innerHTML = construirNavAdmin('libros');

  if (!(await esperarSesionAdmin(contenedor))) return;

  contenedor.innerHTML = `
    <div class="admin-card admin-form-card">
      <h2>Libros del catálogo</h2>
      <p class="auth-hint">Habilitar un libro lo hace aparecer en el landing y el catálogo público de inmediato. Deshabilitarlo lo vuelve a dejar en borrador, sin borrar nada de su contenido.</p>
    </div>
    <div id="tablaLibros"><p class="admin-cargando">Cargando...</p></div>
  `;

  await cargarTabla();
}

document.addEventListener('DOMContentLoaded', cargarPagina);
