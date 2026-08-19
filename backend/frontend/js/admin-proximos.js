// ============================================================
// admin-proximos.js
// ------------------------------------------------------------
// Pantalla "Próximos libros" del panel de admin
// (admin/proximos.html): formulario para agregar una mitología/tema
// a la vitrina del landing, mas la tabla de las que ya existen con un
// botón para activar/desactivar cada una. Mismo patrón que
// admin-descuentos.js.
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

function construirTabla(items) {
  const filasHtml = items.map(p => `
    <tr>
      <td>${escaparHtml(p.nombre)}</td>
      <td>${escaparHtml(p.descripcion)}</td>
      <td>${p.orden}</td>
      <td><span class="admin-estado ${p.activo ? 'aprobado' : 'rechazado'}">${p.activo ? 'Visible' : 'Oculto'}</span></td>
      <td>${formatearFecha(p.creado_en)}</td>
      <td>
        <button class="admin-toggle" data-accion="toggle" data-id="${p.id}" data-activo="${p.activo}">${p.activo ? 'Ocultar' : 'Mostrar'}</button>
        <button class="admin-toggle" data-accion="borrar" data-id="${p.id}" data-nombre="${escaparHtml(p.nombre)}">Borrar</button>
      </td>
    </tr>
  `).join('');

  return `
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Orden</th>
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
  const contenedorTabla = document.getElementById('tablaProximos');
  try {
    const respuesta = await fetch(`${API_URL}/proximos/todos`, { headers: window.authHeaders() });
    if (!respuesta.ok) throw new Error('No se pudieron obtener los próximos libros');
    const items = await respuesta.json();

    contenedorTabla.innerHTML = items.length === 0
      ? '<p class="admin-vacio">Todavía no hay ninguno agregado.</p>'
      : construirTabla(items);

    contenedorTabla.querySelectorAll('[data-accion="toggle"]').forEach(boton => {
      boton.addEventListener('click', async () => {
        boton.disabled = true;
        const activoActual = boton.dataset.activo === '1' || boton.dataset.activo === 'true';
        await fetch(`${API_URL}/proximos/${boton.dataset.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', ...window.authHeaders() },
          body: JSON.stringify({ activo: !activoActual })
        });
        await cargarTabla();
      });
    });

    contenedorTabla.querySelectorAll('[data-accion="borrar"]').forEach(boton => {
      boton.addEventListener('click', async () => {
        if (!confirm(`¿Borrar "${boton.dataset.nombre}" de la lista? No se puede deshacer.`)) return;
        boton.disabled = true;
        await fetch(`${API_URL}/proximos/${boton.dataset.id}`, {
          method: 'DELETE',
          headers: window.authHeaders()
        });
        await cargarTabla();
      });
    });
  } catch (error) {
    contenedorTabla.innerHTML = '<p class="admin-vacio">No se pudieron cargar los próximos libros.</p>';
  }
}

async function manejarEnvioFormulario(evento) {
  evento.preventDefault();
  const form = evento.target;
  const errorEl = document.getElementById('formError');
  errorEl.textContent = '';

  try {
    const respuesta = await fetch(`${API_URL}/proximos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...window.authHeaders() },
      body: JSON.stringify({
        nombre: form.nombre.value,
        descripcion: form.descripcion.value
      })
    });
    const datos = await respuesta.json();
    if (!respuesta.ok) {
      errorEl.textContent = datos.error || 'No se pudo agregar';
      return;
    }
    form.reset();
    await cargarTabla();
  } catch (error) {
    errorEl.textContent = 'No se pudo conectar con el servidor';
  }
}

function construirFormulario() {
  return `
    <div class="admin-card admin-form-card">
      <h2>Agregar a la vitrina</h2>
      <form id="formProximo" class="auth-form">
        <label>Nombre
          <input type="text" name="nombre" placeholder="Azteca" maxlength="80" required>
        </label>
        <label>Descripción (una línea, se ve en el landing)
          <input type="text" name="descripcion" placeholder="Dioses del sol, la guerra y el sacrificio" maxlength="200" required>
        </label>
        <p class="auth-error" id="formError"></p>
        <button type="submit" class="auth-submit">Agregar</button>
      </form>
    </div>
  `;
}

async function cargarPagina() {
  const contenedor = document.getElementById('adminContenido');
  document.getElementById('adminNav').innerHTML = construirNavAdmin('proximos');

  if (!(await esperarSesionAdmin(contenedor))) return;

  contenedor.innerHTML = `${construirFormulario()}<div id="tablaProximos"><p class="admin-cargando">Cargando...</p></div>`;

  document.getElementById('formProximo').addEventListener('submit', manejarEnvioFormulario);

  await cargarTabla();
}

document.addEventListener('DOMContentLoaded', cargarPagina);
