// ============================================================
// admin-pagos.js
// ------------------------------------------------------------
// Panel de solo lectura para que el admin vea los pagos: quien
// compro, que, cuando y en que estado. Se carga en
// admin/pagos.html, despues de auth.js (usa "window.SESION" y
// "window.authHeaders()").
// ============================================================

// Ruta relativa: server.js sirve este frontend como archivos
// estaticos, asi que frontend y API comparten origen siempre.
const API_URL = '/api';

const ETIQUETAS_NIVEL = { flipbook: 'Flipbook', completo: 'Completo (+ PDF)' };
const ETIQUETAS_ESTADO = { aprobado: 'Aprobado', pendiente: 'Pendiente', rechazado: 'Rechazado' };

function formatearMonto(monto, moneda) {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: moneda, maximumFractionDigits: 0 }).format(monto);
}

function formatearFecha(fechaIso) {
  return new Date(fechaIso).toLocaleString('es-CL', { dateStyle: 'medium', timeStyle: 'short' });
}

function construirResumen(pagos) {
  const aprobados = pagos.filter(p => p.estado === 'aprobado');
  const totalRecaudado = aprobados.reduce((suma, p) => suma + p.monto, 0);
  const moneda = pagos[0]?.moneda || 'CLP';

  return `
    <div class="admin-resumen">
      <div><b>${pagos.length}</b>Pagos totales</div>
      <div><b>${aprobados.length}</b>Aprobados</div>
      <div><b>${formatearMonto(totalRecaudado, moneda)}</b>Recaudado</div>
    </div>
  `;
}

// "p.descuento_tipo" viene null si el pago no uso ningun descuento
// (ver el LEFT JOIN en GET /api/pagos/todos).
function etiquetaDescuento(p) {
  if (!p.descuento_tipo) return '—';
  return p.descuento_tipo === 'codigo'
    ? `${p.descuento_codigo} (${p.descuento_porcentaje}%)`
    : `General (${p.descuento_porcentaje}%)`;
}

function construirTabla(pagos) {
  const filasHtml = pagos.map(p => `
    <tr>
      <td>${formatearFecha(p.creado_en)}</td>
      <td>${p.usuario_nombre}<br><span class="admin-email-secundario">${p.usuario_email}</span></td>
      <td>${p.libro_titulo}</td>
      <td>${ETIQUETAS_NIVEL[p.nivel_acceso] || p.nivel_acceso}</td>
      <td>${formatearMonto(p.monto, p.moneda)}</td>
      <td>${etiquetaDescuento(p)}</td>
      <td><span class="admin-estado ${p.estado}">${ETIQUETAS_ESTADO[p.estado] || p.estado}</span></td>
    </tr>
  `).join('');

  return `
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Usuario</th>
            <th>Libro</th>
            <th>Nivel</th>
            <th>Monto</th>
            <th>Descuento</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>${filasHtml}</tbody>
      </table>
    </div>
  `;
}

async function cargarPanel() {
  const contenedor = document.getElementById('adminContenido');
  document.getElementById('adminNav').innerHTML = construirNavAdmin('pagos');

  if (!(await esperarSesionAdmin(contenedor))) return;

  try {
    const respuesta = await fetch(`${API_URL}/pagos/todos`, { headers: window.authHeaders() });
    if (!respuesta.ok) throw new Error('No se pudieron obtener los pagos');
    const pagos = await respuesta.json();

    if (pagos.length === 0) {
      contenedor.innerHTML = '<p class="admin-vacio">Todavía no hay pagos registrados.</p>';
      return;
    }

    contenedor.innerHTML = construirResumen(pagos) + construirTabla(pagos);
  } catch (error) {
    contenedor.innerHTML = '<p class="admin-vacio">No se pudieron cargar los pagos. Revisa que el backend esté corriendo.</p>';
  }
}

document.addEventListener('DOMContentLoaded', cargarPanel);
