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

// Traduccion de "status_detail" (el motivo puntual que da MercadoPago,
// mas especifico que nuestro "estado" de 3 valores -- ver
// procesarResultadoPedido en routes/pagos.js) a texto entendible. Lista
// no exhaustiva (MercadoPago tiene bastantes mas codigos), pero cubre
// los motivos de rechazo de tarjeta mas comunes; lo que no este
// mapeado se muestra tal cual (el codigo crudo) en vez de esconderse.
const MOTIVOS_STATUS_DETAIL = {
  accredited: 'Acreditado',
  cc_rejected_bad_filled_card_number: 'Número de tarjeta mal ingresado',
  cc_rejected_bad_filled_date: 'Fecha de vencimiento mal ingresada',
  cc_rejected_bad_filled_other: 'Datos de la tarjeta mal ingresados',
  cc_rejected_bad_filled_security_code: 'Código de seguridad (CVV) mal ingresado',
  cc_rejected_blacklist: 'Tarjeta rechazada por el banco/MercadoPago',
  cc_rejected_call_for_authorize: 'El comprador debe autorizar el pago con su banco',
  cc_rejected_card_disabled: 'Tarjeta deshabilitada — el comprador debe llamar a su banco',
  cc_rejected_card_error: 'No se pudo procesar la tarjeta',
  cc_rejected_duplicated_payment: 'Ya se hizo un pago igual hace poco',
  cc_rejected_high_risk: 'Rechazado por el sistema antifraude de Mercado Pago',
  cc_rejected_insufficient_amount: 'Fondos insuficientes',
  cc_rejected_invalid_installments: 'Cantidad de cuotas inválida',
  cc_rejected_max_attempts: 'Se superó el máximo de intentos permitidos',
  cc_rejected_other_reason: 'Rechazado por el banco, sin motivo específico',
  cc_rejected_time_out: 'Se agotó el tiempo de espera con el banco',
  cc_amount_rate_limit_exceeded: 'Se superó el límite de monto permitido',
  pending_contingency: 'Pendiente — MercadoPago está validando el pago',
  pending_review_manual: 'Pendiente — en revisión manual'
};

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

// Solo vale la pena mostrar el motivo cuando el pago NO quedo
// aprobado -- "accredited" en un pago aprobado no dice nada que el
// badge de "Aprobado" no diga ya, asi que ahi se omite.
function motivoStatusDetail(p) {
  if (!p.status_detail || p.estado === 'aprobado') return '';
  const texto = MOTIVOS_STATUS_DETAIL[p.status_detail] || p.status_detail;
  return `<br><span class="admin-email-secundario" title="${p.status_detail}">${texto}</span>`;
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
      <td><span class="admin-estado ${p.estado}">${ETIQUETAS_ESTADO[p.estado] || p.estado}</span>${motivoStatusDetail(p)}</td>
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
