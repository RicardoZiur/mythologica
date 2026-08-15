// ============================================================
// utils/email.js
// ------------------------------------------------------------
// Envio de emails transaccionales (por ahora, solo el de
// verificacion de cuenta). Usa variables SMTP genericas (ver .env)
// para no atarse a ningun proveedor en particular: sirve Gmail (con
// "contraseña de aplicación"), el correo que de tu hosting cuando
// publiques el sitio, o cualquier servicio que hable SMTP.
//
// Mientras SMTP_HOST este vacio (todavia no hay cuenta de correo
// real), no se manda nada de verdad: se imprime en la consola del
// backend. Asi se puede probar el flujo completo de principio a fin
// sin depender de un servicio externo (mismo criterio que se uso con
// MERCADOPAGO_ACCESS_TOKEN vacio en routes/pagos.js).
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

// ------------------------------------------------------------
// Envia un email, o lo simula (console.log) si no hay SMTP
// configurado todavia.
// ------------------------------------------------------------
async function enviarEmail({ to, subject, html }) {
  const transportador = obtenerTransportador();

  if (!transportador) {
    console.log('\n[email simulado] ------------------------------');
    console.log('Para:', to);
    console.log('Asunto:', subject);
    console.log('Contenido:\n', html);
    console.log('------------------------------------------------\n');
    return;
  }

  await transportador.sendMail({
    from: process.env.SMTP_FROM || 'Mythologica <no-reply@mythologica.cl>',
    to,
    subject,
    html
  });
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
    html: `
      <p>Hola ${usuario.nombre},</p>
      <p>Confirma tu cuenta de Mythologica haciendo click en este link:</p>
      <p><a href="${link}">${link}</a></p>
      <p>Si no creaste esta cuenta, puedes ignorar este email.</p>
    `
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
    html: `
      <p>Hola ${usuario.nombre},</p>
      <p>Pediste recuperar tu contraseña de Mythologica. Haz click en este link para elegir una nueva:</p>
      <p><a href="${link}">${link}</a></p>
      <p>Este link vence en 1 hora. Si no pediste esto, puedes ignorar este email: tu contraseña actual sigue funcionando.</p>
    `
  });
}

module.exports = { enviarEmail, enviarEmailVerificacion, enviarEmailRecuperacion };
