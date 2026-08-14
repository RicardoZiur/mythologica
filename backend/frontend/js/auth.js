// ============================================================
// auth.js
// ------------------------------------------------------------
// Maneja todo lo relacionado a la sesion del usuario en el
// frontend: consultar quien esta logueado, mostrar el modal de
// login/registro, y actualizar la topbar (nombre de usuario,
// boton de PDF) segun el nivel de acceso.
//
// La sesion se guarda como un token en localStorage (NO en una
// cookie): el frontend (Live Server) y el backend (Node) corren en
// hosts distintos (127.0.0.1 vs localhost), y las cookies no viajan
// entre "sitios" distintos. Un token propio, mandado a mano en el
// header "Authorization: Bearer <token>" en cada peticion, no tiene
// ese problema.
//
// Se carga ANTES que app.js (ver index.html) porque app.js usa
// "window.authHeaders()" y "window.SESION" para saber que pedir y
// que mostrar en cada pagina bloqueada.
// ============================================================

// Rutas relativas: server.js sirve este frontend como archivos
// estaticos, asi que frontend y API comparten origen siempre (no
// importa si accedes por localhost, por un tunel o por el dominio real).
const AUTH_API_URL = '/api/auth';
const PDF_URL = '/api/pdf';
const CLAVE_TOKEN = 'mythologica_token';

// Que libro esta mostrando esta pagina: se lee de "?libro=<slug>" en
// la URL (ej. libro/index.html?libro=mitologia-egipcia). Sin ese
// parametro, es el libro griego -- asi los links que ya existian
// antes de que hubiera mas de un libro siguen funcionando igual, sin
// tener que cambiarlos.
window.LIBRO_ACTUAL = new URLSearchParams(location.search).get('libro') || 'mitologia-griega';

// Sesion actual, disponible globalmente para app.js.
window.SESION = { autenticado: false };

// El nivel de acceso es por libro (ver "accesos" en la respuesta de
// GET /api/auth/yo). "sesion.nivel_acceso" es un campo aplanado que
// el backend arma SOLO para el libro griego (por compatibilidad con
// paginas viejas) -- para cualquier otro libro hay que buscarlo en
// "sesion.accesos". Esta funcion sirve para los dos casos.
function nivelAccesoLibroActual() {
  const sesion = window.SESION;
  if (!sesion.autenticado) return 'ninguno';
  if (sesion.rol === 'admin') return 'completo';
  const acceso = (sesion.accesos || []).find(a => a.libro === window.LIBRO_ACTUAL);
  return acceso ? acceso.nivel_acceso : 'ninguno';
}

// Header listo para agregar a cualquier fetch(): trae el token si
// hay sesion guardada, o un objeto vacio si no hay nadie logueado.
window.authHeaders = function authHeaders() {
  const token = localStorage.getItem(CLAVE_TOKEN);
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// ------------------------------------------------------------
// Si hay un token guardado, le pregunta al backend si sigue siendo
// valido y trae los datos frescos del usuario (nivel_acceso puede
// haber cambiado desde el ultimo login). Si el token ya no sirve
// (vencido, o el usuario fue borrado), lo limpiamos.
// ------------------------------------------------------------
async function cargarSesion() {
  const token = localStorage.getItem(CLAVE_TOKEN);

  if (!token) {
    window.SESION = { autenticado: false };
    pintarAuthStatus();
    pintarBotonPdf();
    return;
  }

  try {
    const respuesta = await fetch(`${AUTH_API_URL}/yo`, { headers: window.authHeaders() });
    window.SESION = await respuesta.json();
    if (!window.SESION.autenticado) localStorage.removeItem(CLAVE_TOKEN);
  } catch (error) {
    console.error('No se pudo consultar la sesión:', error);
    window.SESION = { autenticado: false };
  }

  pintarAuthStatus();
  pintarBotonPdf();
}

// ------------------------------------------------------------
// Pinta el area de la topbar: "Iniciar sesión / Crear cuenta" si
// nadie esta logueado, o el nombre + nivel + "Salir" si si.
// ------------------------------------------------------------
function pintarAuthStatus() {
  const contenedor = document.getElementById('authStatus');
  const sesion = window.SESION;

  if (!sesion.autenticado) {
    contenedor.innerHTML = `
      <button class="auth-link" id="btnAbrirLogin">Iniciar sesión</button>
      <button class="auth-link" id="btnAbrirRegistro">Crear cuenta</button>
    `;
    document.getElementById('btnAbrirLogin').addEventListener('click', () => abrirModal('login'));
    document.getElementById('btnAbrirRegistro').addEventListener('click', () => abrirModal('registro'));
    return;
  }

  const etiquetasNivel = { ninguno: 'Sin acceso', flipbook: 'Acceso flipbook', completo: 'Acceso completo' };
  const nivel = sesion.rol === 'admin' ? 'Administrador' : etiquetasNivel[nivelAccesoLibroActual()];

  // Si el admin registro la cuenta o el usuario ya verifico, no
  // mostramos nada extra. Si no, un aviso chico con boton para
  // reenviar el email (util mientras el envio esta simulado -- ver
  // backend/utils/email.js -- para volver a ver el link en la
  // consola del backend).
  const avisoVerificacion = (sesion.rol !== 'admin' && !sesion.email_verificado)
    ? `<button class="auth-link verificar" id="btnReenviarVerificacion">Verificar email</button>`
    : '';

  // Link al dashboard de admin: ruta absoluta ("/admin/...") porque
  // server.js sirve todo el frontend desde un solo origen (ver
  // server.js), asi funciona igual sin importar desde que pagina se
  // este mirando esto. No lo mostramos si ya estamos DENTRO de
  // /admin/ (esas paginas ya tienen su propia navegacion, seria
  // redundante).
  const linkDashboard = (sesion.rol === 'admin' && !location.pathname.startsWith('/admin/'))
    ? `<a class="admin-link" href="/admin/index.html">Panel de admin</a>`
    : '';

  contenedor.innerHTML = `
    <div class="auth-user">
      <span class="nombre">${sesion.nombre}</span>
      <span class="nivel-tag">${nivel}</span>
      ${avisoVerificacion}
      ${linkDashboard}
      <button class="salir" id="btnSalir">Salir</button>
    </div>
  `;
  document.getElementById('btnSalir').addEventListener('click', cerrarSesion);
  const btnVerificar = document.getElementById('btnReenviarVerificacion');
  if (btnVerificar) btnVerificar.addEventListener('click', reenviarVerificacion);
}

// ------------------------------------------------------------
// Pide que se reenvie el email de verificacion (el usuario ya tiene
// sesion iniciada, pero todavia no confirmo el email).
// ------------------------------------------------------------
async function reenviarVerificacion(e) {
  const boton = e.target;
  const textoOriginal = boton.textContent;
  boton.textContent = 'Enviando...';
  boton.disabled = true;
  try {
    const respuesta = await fetch(`${AUTH_API_URL}/reenviar-verificacion`, {
      method: 'POST',
      headers: window.authHeaders()
    });
    const datos = await respuesta.json();
    mostrarAviso(respuesta.ok
      ? 'Te reenviamos el email de verificación.'
      : (datos.error || 'No se pudo reenviar el email.'));
  } catch (error) {
    mostrarAviso('No se pudo conectar con el servidor.');
  } finally {
    boton.textContent = textoOriginal;
    boton.disabled = false;
  }
}

// ------------------------------------------------------------
// Aviso flotante simple (reusa el estilo .pago-aviso ya definido en
// css/style.css para la confirmacion de pagos).
// ------------------------------------------------------------
function mostrarAviso(texto, duracionMs = 5000) {
  const aviso = document.createElement('div');
  aviso.className = 'pago-aviso';
  aviso.textContent = texto;
  document.body.appendChild(aviso);
  setTimeout(() => aviso.remove(), duracionMs);
}

// ------------------------------------------------------------
// Si venimos de clickear el link de verificacion del email
// (backend/routes/auth.js redirige con "?verificado=1" o "?verificado=0"),
// mostramos el resultado y limpiamos la URL.
// ------------------------------------------------------------
function revisarResultadoVerificacion() {
  const params = new URLSearchParams(window.location.search);
  if (!params.has('verificado')) return;

  const aprobado = params.get('verificado') === '1';
  mostrarAviso(aprobado
    ? '¡Email verificado! Ya puedes comprar el acceso completo.'
    : 'El link de verificación no es válido o venció. Pedí uno nuevo desde tu cuenta.');
  window.history.replaceState({}, '', window.location.pathname);
}

// ------------------------------------------------------------
// El boton de PDF solo descarga de verdad si el usuario tiene nivel
// "completo" (o es admin). Como la peticion necesita el header
// Authorization, no puede ser un simple link <a href>: lo pedimos
// por JavaScript como archivo binario (blob) y disparamos la
// descarga nosotros mismos.
// En cualquier otro caso el boton queda como aviso: invita a
// loguearse, o explica que falta el nivel de acceso (todavia no hay
// pasarela de pago conectada, asi que por ahora el upgrade de nivel
// lo hace el administrador a mano).
// ------------------------------------------------------------
// Pide el PDF y dispara la descarga en el navegador. "botonEstado" es
// el elemento cuyo texto se pone en "Generando..." mientras dura la
// peticion, y ademas se muestra un overlay a pantalla completa con un
// spinner (ver #pdfLoadingOverlay en libro/index.html): Puppeteer
// puede tardar varios segundos en armar el PDF entero, y el texto del
// boton solo era facil de no notar.
async function descargarPdf(botonEstado) {
  const textoOriginal = botonEstado.textContent;
  botonEstado.textContent = 'Generando...';
  const overlay = document.getElementById('pdfLoadingOverlay');
  if (overlay) overlay.hidden = false;
  // El PDF ya sale con tu nombre/email marcados en cada pagina (ver
  // backend/routes/pdf.js) -- este aviso es solo para que quede claro
  // ANTES de que se descargue, no depende de que lo veas.
  mostrarAviso('Este PDF queda identificado a tu nombre. Es para tu uso personal — no lo compartas ni lo revendas.', 6000);
  try {
    const url = `${PDF_URL}?libro=${encodeURIComponent(window.LIBRO_ACTUAL)}`;
    const respuesta = await fetch(url, { headers: window.authHeaders() });
    if (!respuesta.ok) throw new Error('No se pudo generar el PDF');

    // El nombre del archivo sale del propio header que manda el backend
    // (ya incluye el libro, ver routes/pdf.js) -- asi no hay que
    // repetir esa logica de nombrado en dos lugares. Si por algun
    // motivo el header no viene con el formato esperado, caemos a un
    // nombre generico con el slug del libro en vez de romper la descarga.
    const disposicion = respuesta.headers.get('content-disposition') || '';
    const coincidencia = disposicion.match(/filename="([^"]+)"/);
    const nombreArchivo = coincidencia ? coincidencia[1] : `mythologica-${window.LIBRO_ACTUAL}.pdf`;

    const blob = await respuesta.blob();
    const urlTemporal = URL.createObjectURL(blob);
    const enlaceTemporal = document.createElement('a');
    enlaceTemporal.href = urlTemporal;
    enlaceTemporal.download = nombreArchivo;
    enlaceTemporal.click();
    URL.revokeObjectURL(urlTemporal);
  } catch (error) {
    alert('No se pudo descargar el PDF. Intenta de nuevo.');
  } finally {
    botonEstado.textContent = textoOriginal;
    if (overlay) overlay.hidden = true;
  }
}

function pintarBotonPdf() {
  const boton = document.getElementById('pdfBtn');
  // Paginas que no son el flipbook (ej. admin/pagos.html) cargan
  // auth.js para la sesion, pero no tienen este boton.
  if (!boton) return;
  const sesion = window.SESION;
  const tieneAccesoCompleto = nivelAccesoLibroActual() === 'completo';

  boton.removeAttribute('href');
  boton.classList.toggle('locked', !tieneAccesoCompleto);
  boton.textContent = tieneAccesoCompleto ? 'Descargar PDF' : 'Adquirir PDF';

  boton.onclick = async (e) => {
    e.preventDefault();

    if (!tieneAccesoCompleto) {
      if (!sesion.autenticado) {
        abrirModal('login');
      } else {
        alert('Tu cuenta todavía no tiene el nivel "acceso completo". Escríbenos para desbloquear la descarga del PDF.');
      }
      return;
    }

    await descargarPdf(boton);
  };
}

function cerrarSesion() {
  localStorage.removeItem(CLAVE_TOKEN);
  location.reload();
}

// ------------------------------------------------------------
// Modal de login / registro
// ------------------------------------------------------------
function abrirModal(pestañaInicial) {
  document.getElementById('authBackdrop').classList.add('open');
  cambiarPestaña(pestañaInicial);
}

function cerrarModal() {
  document.getElementById('authBackdrop').classList.remove('open');
  document.getElementById('loginError').textContent = '';
  document.getElementById('registroError').textContent = '';
}

function cambiarPestaña(pestaña) {
  const esLogin = pestaña === 'login';
  document.getElementById('tabLogin').classList.toggle('active', esLogin);
  document.getElementById('tabRegistro').classList.toggle('active', !esLogin);
  document.getElementById('formLogin').hidden = !esLogin;
  document.getElementById('formRegistro').hidden = esLogin;
}

// Hace la peticion de login/registro, guarda el token si todo sale
// bien y recarga la pagina (para que app.js reconstruya el libro
// completo con el nuevo nivel de acceso). Devuelve el mensaje de
// error si algo fallo, o null si todo salio bien.
async function enviarFormularioAuth(endpoint, datos) {
  try {
    const respuesta = await fetch(`${AUTH_API_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });
    const cuerpo = await respuesta.json();
    if (!respuesta.ok) return cuerpo.error || 'Ocurrió un error inesperado';

    localStorage.setItem(CLAVE_TOKEN, cuerpo.token);
    location.reload();
    return null;
  } catch (error) {
    return 'No se pudo conectar con el servidor';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Otras paginas que dependen de la sesion (ej. admin/pagos.html)
  // necesitan poder esperar a que esto termine antes de decidir que
  // mostrar -- "window.SESION.autenticado" existe desde la linea 26
  // de este archivo (arranca en "false"), asi que no sirve para
  // saber si cargarSesion() ya trajo los datos reales o no.
  window.sesionListaPromise = cargarSesion();
  revisarResultadoVerificacion();

  document.getElementById('authClose').addEventListener('click', cerrarModal);
  document.getElementById('authBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'authBackdrop') cerrarModal();
  });
  document.getElementById('tabLogin').addEventListener('click', () => cambiarPestaña('login'));
  document.getElementById('tabRegistro').addEventListener('click', () => cambiarPestaña('registro'));

  document.getElementById('formLogin').addEventListener('submit', async (e) => {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(e.target));
    const error = await enviarFormularioAuth('login', datos);
    if (error) document.getElementById('loginError').textContent = error;
  });

  document.getElementById('formRegistro').addEventListener('submit', async (e) => {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(e.target));
    const error = await enviarFormularioAuth('registro', datos);
    if (error) document.getElementById('registroError').textContent = error;
  });
});

// app.js llama a esto desde el boton de las hojas bloqueadas
window.abrirModalAuth = abrirModal;
