// ============================================================
// utils/email.js
// ------------------------------------------------------------
// Envio de emails transaccionales (por ahora, verificacion de cuenta
// y recuperacion de contraseña).
//
// Dos formas de mandarlos, en este orden de preferencia:
// 1) RESEND_API_KEY (API HTTP de Resend, sobre el puerto 443 normal):
//    la preferida en produccion. La mayoria de los hosting en la nube
//    (Railway incluido) BLOQUEAN las conexiones salientes por SMTP
//    (puerto 587/465) para evitar spam -- con SMTP el pedido se queda
//    colgado hasta que Node tira "Connection timeout", lo que ademas
//    rompe el aviso de "cuenta creada" en el frontend porque la
//    peticion de registro entera termina en error 500 (ver
//    routes/auth.js) aunque el usuario ya haya quedado creado en la
//    base. La API HTTP evita ese problema de raiz.
// 2) SMTP generico (ver SMTP_HOST/PORT/USER/PASSWORD en .env): sigue
//    disponible para otros proveedores o para correr esto en un host
//    que si permita SMTP saliente (ej. un VPS propio).
//
// Si ninguna de las dos esta configurada, no se manda nada de verdad:
// se imprime en la consola del backend. Asi se puede probar el flujo
// completo de principio a fin sin depender de un servicio externo
// (mismo criterio que se uso con MERCADOPAGO_ACCESS_TOKEN vacio en
// routes/pagos.js).
// ============================================================

const nodemailer = require('nodemailer');

function obtenerTransportador() {
  if (!process.env.SMTP_HOST) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD }
  });
}

async function enviarConResendApi({ from, to, subject, html }) {
  const respuesta = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ from, to, subject, html })
  });
  if (!respuesta.ok) {
    const cuerpo = await respuesta.text();
    throw new Error(`Resend respondio ${respuesta.status}: ${cuerpo}`);
  }
}

// ------------------------------------------------------------
// Envia un email por la mejor via disponible (ver arriba), o lo
// simula (console.log) si no hay ninguna configurada todavia.
// ------------------------------------------------------------
async function enviarEmail({ to, subject, html }) {
  const from = process.env.SMTP_FROM || 'Mythologica <no-reply@mythologica.cl>';

  if (process.env.RESEND_API_KEY) {
    await enviarConResendApi({ from, to, subject, html });
    return;
  }

  const transportador = obtenerTransportador();
  if (transportador) {
    await transportador.sendMail({ from, to, subject, html });
    return;
  }

  console.log('\n[email simulado] ------------------------------');
  console.log('Para:', to);
  console.log('Asunto:', subject);
  console.log('Contenido:\n', html);
  console.log('------------------------------------------------\n');
}

// ------------------------------------------------------------
// PLANTILLA VISUAL COMPARTIDA
// ------------------------------------------------------------
// Todos los emails transaccionales pasan por aca en vez de mandar
// parrafos sueltos: mismo look del sitio (fondo oscuro, acento
// dorado, tipografia serif en los titulos) traducido a HTML de email
// -- con estilos EN LINEA y tablas para el layout (no flexbox/grid:
// Outlook y varios clientes de correo los ignoran), que es lo unico
// que se puede confiar que sobrevive across Gmail/Outlook/Apple Mail.
// Nada de fuentes propias (Fraunces) tampoco -- casi ningun cliente
// de correo carga @font-face, asi que el titulo usa Georgia/serif del
// sistema como aproximacion.
//
// "preheader" es el texto gris que Gmail/Outlook muestran junto al
// asunto en la bandeja de entrada, antes de abrir el email -- va
// oculto en el HTML (display:none) solo para eso.
// ------------------------------------------------------------
function plantillaEmail({ preheader, titulo, cuerpoHtml, ctaTexto, ctaUrl }) {
  const botonHtml = (ctaTexto && ctaUrl) ? `
    <tr>
      <td align="center" style="padding:8px 0 4px;">
        <a href="${ctaUrl}" style="display:inline-block; background:#c9a24c; color:#1a1610; font-family:Arial,Helvetica,sans-serif; font-size:14px; font-weight:bold; text-decoration:none; padding:13px 28px; border-radius:6px;">${ctaTexto}</a>
      </td>
    </tr>
  ` : '';

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${titulo}</title>
  </head>
  <body style="margin:0; padding:0; background:#0e0d11; font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none; max-height:0; overflow:hidden; opacity:0;">${preheader || ''}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0e0d11;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px; background:#1c1b21; border:1px solid rgba(255,255,255,0.09); border-radius:12px; overflow:hidden;">
            <tr>
              <td align="center" style="padding:28px 24px 18px; border-bottom:1px solid rgba(255,255,255,0.09);">
                <span style="font-family:Georgia,'Times New Roman',serif; font-size:20px; letter-spacing:2px; color:#c9a24c;">MYTHOLOGICA</span>
              </td>
            </tr>
            <tr>
              <td style="padding:30px 32px 8px;">
                <h1 style="margin:0 0 18px; font-family:Georgia,'Times New Roman',serif; font-size:22px; font-weight:normal; color:#ece8e0;">${titulo}</h1>
                <div style="font-size:14px; line-height:1.7; color:#a6a196;">${cuerpoHtml}</div>
              </td>
            </tr>
            ${botonHtml}
            <tr>
              <td style="padding:10px 32px 30px;"></td>
            </tr>
            <tr>
              <td align="center" style="padding:18px 24px; border-top:1px solid rgba(255,255,255,0.09); font-family:Arial,Helvetica,sans-serif; font-size:11px; color:#726d63;">
                Mythologica — mitología ilustrada, en tu biblioteca digital.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

// ------------------------------------------------------------
// Email de verificacion de cuenta: manda el link que activa
// GET /api/auth/verificar-email?token=...
// ------------------------------------------------------------
async function enviarEmailVerificacion(usuario, token) {
  const link = `${process.env.URL_BACKEND}/api/auth/verificar-email?token=${token}`;
  await enviarEmail({
    to: usuario.email,
    subject: 'Confirma tu cuenta de Mythologica',
    html: plantillaEmail({
      preheader: 'Confirma tu cuenta para empezar a leer.',
      titulo: 'Confirma tu cuenta',
      cuerpoHtml: `
        <p style="margin:0 0 14px;">Hola ${usuario.nombre},</p>
        <p style="margin:0 0 14px;">Gracias por crear tu cuenta en Mythologica. Confírmala con el botón de abajo para poder comprar el acceso a los libros y guardar tu progreso.</p>
        <p style="margin:0;">Si no creaste esta cuenta, puedes ignorar este email.</p>
      `,
      ctaTexto: 'Confirmar mi cuenta',
      ctaUrl: link
    })
  });
}

// ------------------------------------------------------------
// Email de recuperacion de contraseña: manda el link que abre el
// flipbook con "?resetToken=..." (ver frontend/js/auth.js), donde el
// usuario elige una contraseña nueva.
// ------------------------------------------------------------
async function enviarEmailRecuperacion(usuario, token) {
  const link = `${process.env.URL_FRONTEND}/libro/index.html?resetToken=${token}`;
  await enviarEmail({
    to: usuario.email,
    subject: 'Recupera tu contraseña de Mythologica',
    html: plantillaEmail({
      preheader: 'Elige una contraseña nueva para tu cuenta.',
      titulo: 'Recupera tu contraseña',
      cuerpoHtml: `
        <p style="margin:0 0 14px;">Hola ${usuario.nombre},</p>
        <p style="margin:0 0 14px;">Pediste recuperar tu contraseña de Mythologica. Elige una nueva con el botón de abajo.</p>
        <p style="margin:0;">Este link vence en 1 hora. Si no pediste esto, puedes ignorar este email: tu contraseña actual sigue funcionando.</p>
      `,
      ctaTexto: 'Elegir contraseña nueva',
      ctaUrl: link
    })
  });
}

// ------------------------------------------------------------
// Email de confirmacion de compra: se manda desde
// procesarResultadoPedido (routes/pagos.js) apenas un pedido queda
// "aprobado" -- despues de que el acceso ya quedo actualizado en la
// base, nunca antes (si el email falla, la compra ya esta bien igual).
// "items" es la lista de {titulo, nivel_acceso} de ese pedido.
// ------------------------------------------------------------
const ETIQUETAS_NIVEL_EMAIL = {
  flipbook: 'Acceso al libro en el sitio',
  completo: 'Acceso completo + descarga en PDF'
};

async function enviarEmailCompra(usuario, items, montoTotal, moneda) {
  const formatearMonto = (monto) =>
    new Intl.NumberFormat('es-CL', { style: 'currency', currency: moneda, maximumFractionDigits: 0 }).format(monto);

  const filasItems = items.map(item => `
    <tr>
      <td style="padding:10px 0; border-top:1px solid rgba(255,255,255,0.09); font-size:13px; color:#ece8e0;">
        ${item.titulo}<br>
        <span style="font-size:11.5px; color:#726d63;">${ETIQUETAS_NIVEL_EMAIL[item.nivel_acceso] || item.nivel_acceso}</span>
      </td>
    </tr>
  `).join('');

  await enviarEmail({
    to: usuario.email,
    subject: '¡Tu compra en Mythologica está lista!',
    html: plantillaEmail({
      preheader: 'Tu compra fue aprobada. Ya puedes leer tus libros.',
      titulo: '¡Gracias por tu compra!',
      cuerpoHtml: `
        <p style="margin:0 0 14px;">Hola ${usuario.nombre},</p>
        <p style="margin:0 0 18px;">Tu pago fue aprobado y tu acceso ya está activo. Esto es lo que compraste:</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">${filasItems}</table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding-top:10px; border-top:1px solid rgba(255,255,255,0.09); font-size:14px; color:#ece8e0;">Total pagado</td>
            <td align="right" style="padding-top:10px; border-top:1px solid rgba(255,255,255,0.09); font-size:14px; color:#c9a24c; font-weight:bold;">${formatearMonto(montoTotal)}</td>
          </tr>
        </table>
      `,
      ctaTexto: 'Ir a mis libros',
      ctaUrl: `${process.env.URL_FRONTEND}/mis-libros.html`
    })
  });
}

module.exports = { enviarEmail, enviarEmailVerificacion, enviarEmailRecuperacion, enviarEmailCompra };
