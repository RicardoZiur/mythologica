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
