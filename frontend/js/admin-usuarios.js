// ============================================================
// admin-usuarios.js
// ------------------------------------------------------------
// Pantalla "Usuarios" del dashboard de admin (admin/usuarios.html):
// tabla de solo lectura de GET /api/auth/usuarios.
// ============================================================

const API_URL = '/api';

const ETIQUETAS_NIVEL = { ninguno: 'Sin acceso', flipbook: 'Flipbook', completo: 'Completo (+ PDF)' };

function formatearFecha(fechaIso) {
  return new Date(fechaIso).toLocaleString('es-CL', { dateStyle: 'medium', timeStyle: 'short' });
}

function construirTabla(usuarios) {
  const filasHtml = usuarios.map(u => `
    <tr>
      <td>${u.nombre}<br><span class="admin-email-secundario">${u.email}</span></td>
      <td>${u.rol === 'admin' ? 'Administrador' : 'Lector'}</td>
      <td>${u.email_verificado ? '✓ Verificado' : '— Sin verificar'}</td>
      <td>${ETIQUETAS_NIVEL[u.nivel_acceso] || u.nivel_acceso}</td>
      <td>${formatearFecha(u.creado_en)}</td>
    </tr>
  `).join('');

  return `
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Email</th>
            <th>Acceso</th>
            <th>Registrado</th>
          </tr>
        </thead>
        <tbody>${filasHtml}</tbody>
      </table>
    </div>
  `;
}

async function cargarUsuarios() {
  const contenedor = document.getElementById('adminContenido');
  document.getElementById('adminNav').innerHTML = construirNavAdmin('usuarios');

  if (!(await esperarSesionAdmin(contenedor))) return;

  try {
    const respuesta = await fetch(`${API_URL}/auth/usuarios`, { headers: window.authHeaders() });
    if (!respuesta.ok) throw new Error('No se pudieron obtener los usuarios');
    const usuarios = await respuesta.json();

    if (usuarios.length === 0) {
      contenedor.innerHTML = '<p class="admin-vacio">Todavía no hay usuarios registrados.</p>';
      return;
    }

    contenedor.innerHTML = construirTabla(usuarios);
  } catch (error) {
    contenedor.innerHTML = '<p class="admin-vacio">No se pudieron cargar los usuarios. Revisa que el backend esté corriendo.</p>';
  }
}

document.addEventListener('DOMContentLoaded', cargarUsuarios);
