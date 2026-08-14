// ============================================================
// admin-descuentos.js
// ------------------------------------------------------------
// Pantalla "Descuentos" del panel de admin (admin/descuentos.html):
// formulario para crear codigos de descuento o un descuento general
// automatico, mas la tabla de los que ya existen con un boton para
// activar/desactivar cada uno.
// ============================================================

const API_URL = '/api';

function formatearFecha(fechaIso) {
  return new Date(fechaIso).toLocaleString('es-CL', { dateStyle: 'medium', timeStyle: 'short' });
}

// El <select> "Aplica a" se llena una sola vez con GET /api/libros
// (ruta publica, no hace falta sesion para leerla) y se reusa tanto
// para el formulario como, en el futuro, para filtros.
async function cargarOpcionesDeLibro() {
  const selectLibro = document.getElementById('selLibro');
  try {
    const libros = await fetch(`${API_URL}/libros`).then(r => r.json());
    const opcionesHtml = libros.map(l => `<option value="${l.id}">${l.titulo}</option>`).join('');
    selectLibro.insertAdjacentHTML('beforeend', opcionesHtml);
  } catch (error) {
    // Si esto falla, el select se queda solo con "Todos los libros" -- no bloquea el resto.
  }
}

function etiquetaLibro(d) {
  return d.libro_titulo || 'Todos los libros';
}

function construirTablaDescuentos(descuentos) {
  const filasHtml = descuentos.map(d => `
    <tr>
      <td>${d.tipo === 'codigo' ? d.codigo : 'General'}</td>
      <td>${d.porcentaje}%</td>
      <td>${etiquetaLibro(d)}</td>
      <td><span class="admin-estado ${d.activo ? 'aprobado' : 'rechazado'}">${d.activo ? 'Activo' : 'Inactivo'}</span></td>
      <td>${formatearFecha(d.creado_en)}</td>
      <td><button class="admin-toggle" data-id="${d.id}" data-activo="${d.activo}">${d.activo ? 'Desactivar' : 'Activar'}</button></td>
    </tr>
  `).join('');

  return `
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>%</th>
            <th>Aplica a</th>
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
  const contenedorTabla = document.getElementById('tablaDescuentos');
  try {
    const respuesta = await fetch(`${API_URL}/descuentos`, { headers: window.authHeaders() });
    if (!respuesta.ok) throw new Error('No se pudieron obtener los descuentos');
    const descuentos = await respuesta.json();

    contenedorTabla.innerHTML = descuentos.length === 0
      ? '<p class="admin-vacio">Todavía no hay descuentos creados.</p>'
      : construirTablaDescuentos(descuentos);

    contenedorTabla.querySelectorAll('.admin-toggle').forEach(boton => {
      boton.addEventListener('click', async () => {
        boton.disabled = true;
        const activoActual = boton.dataset.activo === '1' || boton.dataset.activo === 'true';
        await fetch(`${API_URL}/descuentos/${boton.dataset.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', ...window.authHeaders() },
          body: JSON.stringify({ activo: !activoActual })
        });
        await cargarTabla();
      });
    });
  } catch (error) {
    contenedorTabla.innerHTML = '<p class="admin-vacio">No se pudieron cargar los descuentos.</p>';
  }
}

function actualizarVisibilidadCodigo() {
  const esCodigo = document.getElementById('selTipo').value === 'codigo';
  document.getElementById('labelCodigo').hidden = !esCodigo;
  document.getElementById('inputCodigo').required = esCodigo;
}

async function manejarEnvioFormulario(evento) {
  evento.preventDefault();
  const form = evento.target;
  const errorEl = document.getElementById('formError');
  errorEl.textContent = '';

  const tipo = form.tipo.value;
  const cuerpo = {
    tipo,
    porcentaje: Number(form.porcentaje.value),
    libro_id: form.libro_id.value || null
  };
  if (tipo === 'codigo') cuerpo.codigo = form.codigo.value;

  try {
    const respuesta = await fetch(`${API_URL}/descuentos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...window.authHeaders() },
      body: JSON.stringify(cuerpo)
    });
    const datos = await respuesta.json();
    if (!respuesta.ok) {
      errorEl.textContent = datos.error || 'No se pudo crear el descuento';
      return;
    }
    form.reset();
    actualizarVisibilidadCodigo();
    await cargarTabla();
  } catch (error) {
    errorEl.textContent = 'No se pudo conectar con el servidor';
  }
}

function construirFormulario() {
  return `
    <div class="admin-card admin-form-card">
      <h2>Crear descuento</h2>
      <form id="formDescuento" class="auth-form">
        <label>Tipo
          <select name="tipo" id="selTipo">
            <option value="codigo">Código (el comprador lo escribe)</option>
            <option value="general">General (se aplica solo)</option>
          </select>
        </label>
        <label id="labelCodigo">Código
          <input type="text" name="codigo" id="inputCodigo" placeholder="VERANO20" required>
        </label>
        <label>Porcentaje de descuento
          <input type="number" name="porcentaje" min="1" max="100" required>
        </label>
        <label>Aplica a
          <select name="libro_id" id="selLibro">
            <option value="">Todos los libros</option>
          </select>
        </label>
        <p class="auth-error" id="formError"></p>
        <button type="submit" class="auth-submit">Crear descuento</button>
      </form>
    </div>
  `;
}

async function cargarPagina() {
  const contenedor = document.getElementById('adminContenido');
  document.getElementById('adminNav').innerHTML = construirNavAdmin('descuentos');

  if (!(await esperarSesionAdmin(contenedor))) return;

  contenedor.innerHTML = `${construirFormulario()}<div id="tablaDescuentos"><p class="admin-cargando">Cargando...</p></div>`;

  document.getElementById('selTipo').addEventListener('change', actualizarVisibilidadCodigo);
  document.getElementById('formDescuento').addEventListener('submit', manejarEnvioFormulario);

  await Promise.all([cargarOpcionesDeLibro(), cargarTabla()]);
}

document.addEventListener('DOMContentLoaded', cargarPagina);
