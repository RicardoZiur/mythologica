// ============================================================
// admin-dashboard.js
// ------------------------------------------------------------
// Pantalla de "Resumen" del dashboard de admin (admin/index.html):
// tarjetas con los numeros agregados de GET /api/pagos/resumen.
// ============================================================

const API_URL = '/api';

function formatearMonto(monto, moneda) {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: moneda, maximumFractionDigits: 0 }).format(monto);
}

function construirTarjetas(resumen) {
  const tarjetas = [
    { valor: formatearMonto(resumen.recaudado_total, resumen.moneda), etiqueta: 'Recaudado' },
    { valor: resumen.pagos_aprobados, etiqueta: 'Pagos aprobados' },
    { valor: resumen.pagos_pendientes, etiqueta: 'Pagos pendientes' },
    { valor: resumen.usuarios_total, etiqueta: 'Usuarios registrados' },
    { valor: resumen.usuarios_verificados, etiqueta: 'Emails verificados' },
    { valor: resumen.usuarios_con_acceso, etiqueta: 'Usuarios con acceso pago' }
  ];

  return `
    <div class="admin-cards">
      ${tarjetas.map(t => `<div class="admin-card"><b>${t.valor}</b><span>${t.etiqueta}</span></div>`).join('')}
    </div>
  `;
}

async function cargarDashboard() {
  const contenedor = document.getElementById('adminContenido');
  document.getElementById('adminNav').innerHTML = construirNavAdmin('resumen');

  if (!(await esperarSesionAdmin(contenedor))) return;

  try {
    const respuesta = await fetch(`${API_URL}/pagos/resumen`, { headers: window.authHeaders() });
    if (!respuesta.ok) throw new Error('No se pudo obtener el resumen');
    const resumen = await respuesta.json();
    contenedor.innerHTML = construirTarjetas(resumen);
  } catch (error) {
    contenedor.innerHTML = '<p class="admin-vacio">No se pudo cargar el resumen. Revisa que el backend esté corriendo.</p>';
  }
}

document.addEventListener('DOMContentLoaded', cargarDashboard);
