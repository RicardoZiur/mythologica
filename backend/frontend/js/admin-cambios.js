// ============================================================
// admin-cambios.js
// ------------------------------------------------------------
// Pantalla "Cambios" del panel de admin (admin/cambios.html):
// version actual del sitio y su registro de cambios (ver
// GET /api/version en backend/routes/version.js). Solo lectura --
// el changelog se edita a mano en backend/config/changelog.json,
// no hay formulario para crear entradas desde acá.
// ============================================================

const API_URL = '/api';

function formatearFecha(fechaIso) {
  // El changelog guarda fechas como "AAAA-MM-DD" (sin hora), asi que
  // basta con un formato corto de fecha, sin toLocaleString completo.
  return new Date(`${fechaIso}T00:00:00`).toLocaleDateString('es-CL', { dateStyle: 'long' });
}

function construirEntrada(entrada) {
  const cambiosHtml = entrada.cambios.map(c => `<li>${c}</li>`).join('');
  return `
    <article class="cambios-entrada">
      <div class="cambios-entrada-header">
        <span class="cambios-version">v${entrada.version}</span>
        <span class="cambios-fecha">${formatearFecha(entrada.fecha)}</span>
      </div>
      <ul class="cambios-lista">${cambiosHtml}</ul>
    </article>
  `;
}

async function cargarPagina() {
  const contenedor = document.getElementById('adminContenido');
  document.getElementById('adminNav').innerHTML = construirNavAdmin('cambios');

  if (!(await esperarSesionAdmin(contenedor))) return;

  try {
    const respuesta = await fetch(`${API_URL}/version`, { headers: window.authHeaders() });
    if (!respuesta.ok) throw new Error('No se pudo obtener el registro de cambios');
    const datos = await respuesta.json();

    const entradasHtml = datos.changelog.map(construirEntrada).join('');
    contenedor.innerHTML = `
      <div class="admin-resumen">
        <div><b>v${datos.version}</b><span> versión actual</span></div>
      </div>
      <div class="cambios-lista-entradas">${entradasHtml}</div>
    `;
  } catch (error) {
    contenedor.innerHTML = '<p class="admin-vacio">No se pudo cargar el registro de cambios.</p>';
  }
}

document.addEventListener('DOMContentLoaded', cargarPagina);
