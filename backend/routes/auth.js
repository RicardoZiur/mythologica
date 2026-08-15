// ============================================================
// routes/auth.js
// ------------------------------------------------------------
// Registro, login y consulta de la sesion actual. El "logout" no
// necesita ruta propia: como la sesion vive como un token en
// localStorage del navegador (no hay estado guardado en el
// servidor), cerrar sesion es simplemente borrar ese token en el
// frontend.
// Tambien hay un endpoint de administrador para cambiar el nivel de
// acceso de un lector a mano (mientras no este integrada una
// pasarela de pago real).
// ============================================================

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const rateLimit = require('express-rate-limit');
const router = express.Router();
const pool = require('../config/db');
const { requiereAdmin, requiereSesion, LIBRO_POR_DEFECTO } = require('../middleware/auth');
const { enviarEmailVerificacion, enviarEmailRecuperacion } = require('../utils/email');

const DURACION_SESION = '30d';
const HORAS_VALIDEZ_TOKEN_VERIFICACION = 24;
const MINUTOS_VALIDEZ_TOKEN_RECUPERACION = 60;
const INTENTOS_MAXIMOS_LOGIN = 5;
const MINUTOS_BLOQUEO_LOGIN = 15;

// Limite propio para "olvidé mi contraseña": sin esto alguien podria
// usarlo para saturar de correos la casilla de otra persona. Mas
// permisivo que el de login (aca no hay una contraseña que probar, asi
// que no aporta nada de fuerza bruta) pero igual acotado.
const limitadorRecuperacion = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiados pedidos de recuperación desde esta conexión. Prueba de nuevo más tarde.' }
});

// Limite por IP, ademas del bloqueo por cuenta de mas abajo: cubre el
// caso de alguien probando muchas cuentas distintas desde la misma
// IP (el bloqueo por cuenta no lo cubre, porque cada cuenta lleva su
// propio contador). 15 intentos cada 15 minutos por IP.
const limitadorLogin = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiados intentos de inicio de sesión desde esta conexión. Prueba de nuevo más tarde.' }
});

// Genera el token de sesion. El frontend lo guarda en localStorage y
// lo manda en cada peticion como header "Authorization: Bearer <token>"
// (ver frontend/js/auth.js). El token SOLO guarda el id: el rol y los
// niveles de acceso se leen siempre frescos desde la base de datos en
// cada peticion (ver middleware/auth.js), para que un cambio de nivel
// se refleje al instante sin que el usuario tenga que volver a
// loguearse.
//
// Un usuario recien registrado no tiene nivel_acceso todavia (recien
// se crea al pagar/al asignarlo un admin), asi que el token solo
// necesita el id.
function generarSesion(usuario) {
  const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: DURACION_SESION });

  return {
    token,
    usuario: {
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol
    }
  };
}

// ------------------------------------------------------------
// POST /api/auth/registro
// Crea una cuenta de LECTOR (nunca de administrador: eso solo se
// hace desde el script de servidor scripts/crear-admin.js, para que
// nadie pueda auto-asignarse el rol admin desde este formulario
// publico). No tiene acceso a ningun libro hasta que pague (no hace
// falta insertar nada en "accesos": sin fila ahi, el nivel efectivo ya
// es "ninguno" en todos los libros, ver tieneNivel en middleware/auth.js).
//
// La cuenta arranca con email_verificado=0 y se manda (o simula, ver
// utils/email.js) un email con un link de confirmacion. Verificar el
// email NO bloquea usar la app (leer la muestra gratis, loguearse) —
// solo bloquea comprar (ver POST /api/pagos/preferencia), que es
// donde de verdad importa saber que el email es real.
// ------------------------------------------------------------
router.post('/registro', async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
      return res.status(400).json({ error: 'Faltan datos: nombre, email y password son obligatorios' });
    }
    if (password.length < 8) {
      return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' });
    }

    const [existentes] = await pool.query('SELECT id FROM usuarios WHERE email = ?', [email]);
    if (existentes.length > 0) {
      return res.status(409).json({ error: 'Ya existe una cuenta con ese email' });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const tokenVerificacion = crypto.randomBytes(32).toString('hex');
    const tokenExpira = new Date(Date.now() + HORAS_VALIDEZ_TOKEN_VERIFICACION * 60 * 60 * 1000);

    const [resultado] = await pool.query(
      `INSERT INTO usuarios (nombre, email, password_hash, rol, token_verificacion, token_verificacion_expira)
       VALUES (?, ?, ?, 'lector', ?, ?)`,
      [nombre, email, passwordHash, tokenVerificacion, tokenExpira]
    );

    const usuario = {
      id: resultado.insertId,
      nombre,
      email,
      rol: 'lector'
    };

    // El envio del email es "best effort": la cuenta ya quedo creada en
    // la fila de arriba, asi que si esto falla (ej. SMTP mal configurado,
    // credenciales invalidas, o el hosting bloqueando el puerto SMTP
    // saliente) NO puede tumbar toda la peticion -- eso le devolvia un
    // 500 al usuario ("no se pudo crear la cuenta") cuando la cuenta SI
    // se habia creado, dejandolo sin el token de sesion y sin ningun
    // aviso de que en realidad si funciono. El usuario puede reenviar el
    // email de verificacion despues (ver POST /reenviar-verificacion).
    try {
      await enviarEmailVerificacion(usuario, tokenVerificacion);
    } catch (errorEmail) {
      console.error('No se pudo mandar el email de verificación (la cuenta se creó igual):', errorEmail);
    }

    res.status(201).json(generarSesion(usuario));
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'No se pudo crear la cuenta' });
  }
});

// ------------------------------------------------------------
// GET /api/auth/verificar-email?token=...
// El link que llega en el email de verificacion. No requiere sesion
// (el usuario puede clickearlo desde cualquier lado, incluso sin
// tener la app abierta). Redirige de vuelta al flipbook con
// ?verificado=1 o ?verificado=0 segun el resultado, para que
// frontend/js/auth.js pueda mostrar un aviso.
// ------------------------------------------------------------
router.get('/verificar-email', async (req, res) => {
  const destino = `${process.env.URL_FRONTEND}/libro/index.html`;
  try {
    const { token } = req.query;
    if (!token) return res.redirect(`${destino}?verificado=0`);

    const [filas] = await pool.query(
      `SELECT id FROM usuarios
       WHERE token_verificacion = ? AND token_verificacion_expira > NOW()`,
      [token]
    );
    if (filas.length === 0) return res.redirect(`${destino}?verificado=0`);

    await pool.query(
      `UPDATE usuarios SET email_verificado = 1, token_verificacion = NULL, token_verificacion_expira = NULL
       WHERE id = ?`,
      [filas[0].id]
    );

    res.redirect(`${destino}?verificado=1`);
  } catch (error) {
    console.error('Error al verificar el email:', error);
    res.redirect(`${destino}?verificado=0`);
  }
});

// ------------------------------------------------------------
// POST /api/auth/reenviar-verificacion
// Requiere sesion. Sirve para cuando el primer email de verificacion
// se perdio (hoy, mientras esta simulado -- ver utils/email.js --
// para volver a verlo impreso en la consola del backend).
// ------------------------------------------------------------
router.post('/reenviar-verificacion', requiereSesion, async (req, res) => {
  try {
    if (req.usuario.email_verificado) {
      return res.status(400).json({ error: 'Tu email ya está verificado' });
    }

    const tokenVerificacion = crypto.randomBytes(32).toString('hex');
    const tokenExpira = new Date(Date.now() + HORAS_VALIDEZ_TOKEN_VERIFICACION * 60 * 60 * 1000);

    await pool.query(
      'UPDATE usuarios SET token_verificacion = ?, token_verificacion_expira = ? WHERE id = ?',
      [tokenVerificacion, tokenExpira, req.usuario.id]
    );

    await enviarEmailVerificacion(req.usuario, tokenVerificacion);

    res.json({ ok: true });
  } catch (error) {
    console.error('Error al reenviar la verificación:', error);
    res.status(500).json({ error: 'No se pudo reenviar el email de verificación' });
  }
});

// ------------------------------------------------------------
// POST /api/auth/olvide-password
// Pide el link de recuperacion por email. Siempre responde "ok" (haya
// o no una cuenta con ese email): si dijeramos "ese email no existe"
// cualquiera podria usar este formulario para averiguar que emails
// estan registrados.
// ------------------------------------------------------------
router.post('/olvide-password', limitadorRecuperacion, async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Falta el email' });
    }

    const [filas] = await pool.query('SELECT id, nombre, email FROM usuarios WHERE email = ?', [email]);
    if (filas.length > 0) {
      const usuario = filas[0];
      const tokenRecuperacion = crypto.randomBytes(32).toString('hex');
      const tokenExpira = new Date(Date.now() + MINUTOS_VALIDEZ_TOKEN_RECUPERACION * 60 * 1000);

      await pool.query(
        'UPDATE usuarios SET token_recuperacion = ?, token_recuperacion_expira = ? WHERE id = ?',
        [tokenRecuperacion, tokenExpira, usuario.id]
      );

      // Mismo criterio que en /registro: si el envio del email falla, no
      // tumbamos la peticion -- ademas, este endpoint esta pensado para
      // responder "ok" siempre (ver el comentario de arriba), asi que un
      // 500 aca por un problema de SMTP terminaba filtrando indirectamente
      // si el email existia o no (200 si fallaba el envio -> no existia
      // la cuenta; 500 -> si existia y fallo el email).
      try {
        await enviarEmailRecuperacion(usuario, tokenRecuperacion);
      } catch (errorEmail) {
        console.error('No se pudo mandar el email de recuperación:', errorEmail);
      }
    }

    res.json({ ok: true });
  } catch (error) {
    console.error('Error al pedir la recuperación de contraseña:', error);
    res.status(500).json({ error: 'No se pudo procesar el pedido' });
  }
});

// ------------------------------------------------------------
// POST /api/auth/restablecer-password
// El formulario que abre el link del email de arriba. No requiere
// sesion (el usuario justamente no puede loguearse, por eso esta
// aca): la identidad la da el token, que es de un solo uso y vence a
// la hora.
// ------------------------------------------------------------
router.post('/restablecer-password', async (req, res) => {
  try {
    const { token, password } = req.body;
    if (!token || !password) {
      return res.status(400).json({ error: 'Faltan datos' });
    }
    if (password.length < 8) {
      return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' });
    }

    const [filas] = await pool.query(
      `SELECT id FROM usuarios
       WHERE token_recuperacion = ? AND token_recuperacion_expira > NOW()`,
      [token]
    );
    if (filas.length === 0) {
      return res.status(400).json({ error: 'El link de recuperación no es válido o venció. Pide uno nuevo.' });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    await pool.query(
      `UPDATE usuarios
       SET password_hash = ?, token_recuperacion = NULL, token_recuperacion_expira = NULL,
           intentos_fallidos = 0, bloqueado_hasta = NULL
       WHERE id = ?`,
      [passwordHash, filas[0].id]
    );

    res.json({ ok: true });
  } catch (error) {
    console.error('Error al restablecer la contraseña:', error);
    res.status(500).json({ error: 'No se pudo restablecer la contraseña' });
  }
});

// ------------------------------------------------------------
// POST /api/auth/login
// Bloquea la cuenta por un rato despues de varios intentos fallidos
// seguidos (fuerza bruta contra una cuenta puntual). Esto es ademas
// del limite por IP que ya frena server.js con express-rate-limit
// (cubre el caso de alguien probando muchas cuentas distintas desde
// la misma IP, que esto no cubre).
// ------------------------------------------------------------
router.post('/login', limitadorLogin, async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Faltan email y/o password' });
    }

    const [filas] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    if (filas.length === 0) {
      return res.status(401).json({ error: 'Email o contraseña incorrectos' });
    }

    const usuario = filas[0];

    if (usuario.bloqueado_hasta && new Date(usuario.bloqueado_hasta) > new Date()) {
      const minutosRestantes = Math.ceil((new Date(usuario.bloqueado_hasta) - new Date()) / 60000);
      return res.status(429).json({
        error: `Demasiados intentos fallidos. Prueba de nuevo en ${minutosRestantes} minuto(s).`
      });
    }

    const passwordValida = await bcrypt.compare(password, usuario.password_hash);
    if (!passwordValida) {
      const intentos = usuario.intentos_fallidos + 1;
      const bloqueadoHasta = intentos >= INTENTOS_MAXIMOS_LOGIN
        ? new Date(Date.now() + MINUTOS_BLOQUEO_LOGIN * 60 * 1000)
        : null;

      await pool.query(
        'UPDATE usuarios SET intentos_fallidos = ?, bloqueado_hasta = ? WHERE id = ?',
        [intentos, bloqueadoHasta, usuario.id]
      );

      if (bloqueadoHasta) {
        return res.status(429).json({
          error: `Demasiados intentos fallidos. Prueba de nuevo en ${MINUTOS_BLOQUEO_LOGIN} minutos.`
        });
      }
      return res.status(401).json({ error: 'Email o contraseña incorrectos' });
    }

    if (usuario.intentos_fallidos > 0 || usuario.bloqueado_hasta) {
      await pool.query('UPDATE usuarios SET intentos_fallidos = 0, bloqueado_hasta = NULL WHERE id = ?', [usuario.id]);
    }

    res.json(generarSesion(usuario));
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'No se pudo iniciar sesión' });
  }
});

// ------------------------------------------------------------
// GET /api/auth/yo
// Le dice al frontend quien esta logueado (o si nadie lo esta),
// para poder mostrar el flipbook completo/parcial y el boton de PDF
// segun corresponda.
//
// El nivel de acceso es por libro (ver middleware/auth.js), asi que
// devolvemos "accesos": el nivel del usuario en cada libro del
// catalogo. Ademas devolvemos "nivel_acceso" aplanado (el nivel en
// LIBRO_POR_DEFECTO) porque el frontend actual (ver frontend/js/auth.js)
// todavia solo conoce un libro y lee ese campo directo; el dia que se
// arme el selector de libro, el frontend puede pasar a leer "accesos"
// y este campo se puede borrar.
// ------------------------------------------------------------
router.get('/yo', async (req, res) => {
  if (!req.usuario) {
    return res.json({ autenticado: false });
  }

  try {
    const [libros] = await pool.query('SELECT id, slug, titulo FROM libros');
    const accesos = libros.map((libro) => ({
      libro: libro.slug,
      titulo: libro.titulo,
      nivel_acceso: req.usuario.rol === 'admin'
        ? 'completo'
        : (req.usuario.accesosPorLibro[libro.id] || 'ninguno')
    }));
    const accesoPorDefecto = accesos.find((a) => a.libro === LIBRO_POR_DEFECTO);

    res.json({
      autenticado: true,
      id: req.usuario.id,
      nombre: req.usuario.nombre,
      email: req.usuario.email,
      rol: req.usuario.rol,
      email_verificado: !!req.usuario.email_verificado,
      nivel_acceso: accesoPorDefecto ? accesoPorDefecto.nivel_acceso : 'ninguno',
      accesos
    });
  } catch (error) {
    console.error('Error al consultar la sesión:', error);
    res.status(500).json({ error: 'No se pudo consultar la sesión' });
  }
});

// ------------------------------------------------------------
// GET /api/auth/usuarios
// Solo administradores. Lista todos los usuarios registrados, para el
// dashboard de admin. Nunca devuelve "password_hash" ni los tokens de
// verificacion -- se seleccionan a mano solo las columnas que hacen
// falta, en vez de "SELECT *". El nivel de acceso que trae es el del
// libro por defecto (LEFT JOIN: si el usuario no tiene fila en
// "accesos" para ese libro, queda "ninguno").
// ------------------------------------------------------------
router.get('/usuarios', requiereAdmin, async (req, res) => {
  try {
    const [usuarios] = await pool.query(
      `SELECT
        u.id, u.nombre, u.email, u.rol, u.email_verificado, u.creado_en,
        COALESCE(a.nivel_acceso, 'ninguno') AS nivel_acceso
       FROM usuarios u
       LEFT JOIN libros l ON l.slug = ?
       LEFT JOIN accesos a ON a.usuario_id = u.id AND a.libro_id = l.id
       ORDER BY u.creado_en DESC`,
      [LIBRO_POR_DEFECTO]
    );
    res.json(usuarios);
  } catch (error) {
    console.error('Error al listar usuarios:', error);
    res.status(500).json({ error: 'No se pudieron obtener los usuarios' });
  }
});

// ------------------------------------------------------------
// PUT /api/auth/usuarios/:id/nivel
// Solo administradores. Permite subir (o bajar) el nivel de acceso
// de un lector a mano, para usarlo mientras no haya una pasarela de
// pago conectada (o para casos de soporte/venta manual despues).
//
// El nivel de acceso es por libro: el body puede traer "libro" (el
// slug, ej. "mitologia-griega"); si no se manda, se usa el libro por
// defecto (compatible con como se usaba este endpoint antes de que
// existiera mas de un libro).
// ------------------------------------------------------------
router.put('/usuarios/:id/nivel', requiereAdmin, async (req, res) => {
  try {
    const { nivel_acceso } = req.body;
    const slugLibro = req.body.libro || LIBRO_POR_DEFECTO;
    const nivelesValidos = ['ninguno', 'flipbook', 'completo'];

    if (!nivelesValidos.includes(nivel_acceso)) {
      return res.status(400).json({ error: `nivel_acceso debe ser uno de: ${nivelesValidos.join(', ')}` });
    }

    const [usuarios] = await pool.query('SELECT id FROM usuarios WHERE id = ?', [req.params.id]);
    if (usuarios.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const [libros] = await pool.query('SELECT id FROM libros WHERE slug = ?', [slugLibro]);
    if (libros.length === 0) {
      return res.status(404).json({ error: `El libro "${slugLibro}" no existe` });
    }

    await pool.query(
      `INSERT INTO accesos (usuario_id, libro_id, nivel_acceso)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE nivel_acceso = VALUES(nivel_acceso)`,
      [req.params.id, libros[0].id, nivel_acceso]
    );

    res.json({ ok: true, id: Number(req.params.id), libro: slugLibro, nivel_acceso });
  } catch (error) {
    console.error('Error al cambiar el nivel de acceso:', error);
    res.status(500).json({ error: 'No se pudo actualizar el nivel de acceso' });
  }
});

module.exports = router;
