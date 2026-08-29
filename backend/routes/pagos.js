// ============================================================
// routes/pagos.js
// ------------------------------------------------------------
// Integración con MercadoPago (Checkout Pro): el usuario elige un
// nivel de acceso, lo mandamos a pagar a una página alojada por
// MercadoPago (nunca vemos ni tocamos datos de tarjeta nosotros), y
// cuando el pago se aprueba le subimos el nivel de acceso en la
// tabla "accesos" (ver middleware/auth.js).
//
// Regla de oro de esta integración: NUNCA le damos acceso a nadie
// por lo que diga el navegador o la URL de vuelta. Tanto el webhook
// como la confirmación por redirect usan el id de pago para volver a
// preguntarle a la API de MercadoPago "¿este pago realmente se
// aprobó?" antes de tocar la base de datos. Lo único que hacemos con
// datos que llegan de afuera sin verificar es usarlos para saber
// A QUÉ pago consultar, nunca para decidir el resultado.
// ============================================================

const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const { MercadoPagoConfig, Preference, Payment } = require('mercadopago');
const { requiereSesion, requiereAdmin, tieneNivel, JERARQUIA_NIVELES } = require('../middleware/auth');
const { calcularDescuentoAplicable } = require('./descuentos');
const { enviarEmailCompra } = require('../utils/email');

// Precios en pesos chilenos (CLP no usa decimales). Única fuente de
// verdad: el frontend los pide a GET /precios en vez de tenerlos
// escritos en dos lugares distintos.
//
// Dos componentes, no dos productos fijos: "flipbook" es el acceso al
// libro en el sitio, "pdf" es la descarga. "completo" (comprado de una
// sola vez) es la suma de los dos -- pero si el usuario YA tiene
// "flipbook" y solo le falta el PDF, se le cobra nada más que
// PRECIOS.pdf (ver precioParaNivel más abajo), nunca la suma completa
// de nuevo. Así comprarlo en dos partes cuesta exactamente lo mismo
// que comprarlo junto, nunca más.
const PRECIOS = { flipbook: 6640, pdf: 9990 };
const MONEDA = 'CLP';
const NIVELES_VALIDOS = ['flipbook', 'completo'];

// Precio real de agregar "nivelAcceso" para alguien que ya tiene
// "nivelActual" en ese libro ('ninguno' si no tiene nada todavía).
// Devuelve tambien "esActualizacion": true cuando lo que se está
// cobrando es solo el PDF sobre un flipbook ya comprado (para que el
// carrito y el checkout de MercadoPago lo dejen claro en vez de
// mostrar "acceso completo" como si fuera la compra desde cero).
function precioParaNivel(nivelAcceso, nivelActual) {
  if (nivelAcceso === 'flipbook') {
    return { precio: PRECIOS.flipbook, esActualizacion: false };
  }
  if (nivelActual === 'flipbook') {
    return { precio: PRECIOS.pdf, esActualizacion: true };
  }
  return { precio: PRECIOS.flipbook + PRECIOS.pdf, esActualizacion: false };
}

function obtenerCliente() {
  if (!process.env.MERCADOPAGO_ACCESS_TOKEN) return null;
  return new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN });
}

// ------------------------------------------------------------
// PRECIO MOSTRADO EN USD PARA VISITANTES FUERA DE CHILE
// ------------------------------------------------------------
// Esto es SOLO para lo que se ve en pantalla. El cobro real en
// Mercado Pago (ver POST /pedido mas abajo) siempre queda en
// CLP: la cuenta de Mercado Pago detras de esta integracion es
// chilena, y Checkout Pro no permite cobrar en otra moneda sin una
// cuenta/integracion aparte por pais. A un visitante fuera de Chile
// simplemente le mostramos el precio convertido a dolares como
// referencia; al momento de pagar, Mercado Pago sigue cobrando en
// CLP y es la propia tarjeta internacional del comprador la que hace
// la conversion real, igual que en cualquier compra internacional.
const TTL_TASA_CAMBIO_MS = 12 * 60 * 60 * 1000; // 12 horas
let cacheTasaCambio = { valor: null, expiraEn: 0 };

// Cuantos dolares vale un peso chileno ahora mismo, cacheado para no
// golpear la API externa en cada visita. Si la API falla, devuelve
// null y quien llama se queda mostrando CLP en vez de romper la
// pagina por un servicio externo caido.
async function obtenerTasaClpAUsd() {
  if (cacheTasaCambio.valor && Date.now() < cacheTasaCambio.expiraEn) {
    return cacheTasaCambio.valor;
  }
  try {
    const respuesta = await fetch('https://open.er-api.com/v6/latest/CLP');
    const datos = await respuesta.json();
    const tasa = datos?.rates?.USD;
    if (!tasa) return null;
    cacheTasaCambio = { valor: tasa, expiraEn: Date.now() + TTL_TASA_CAMBIO_MS };
    return tasa;
  } catch (error) {
    console.error('No se pudo obtener el tipo de cambio CLP/USD:', error.message);
    return null;
  }
}

// Geolocaliza una IP a un codigo de pais ("CL", "AR", "US"...).
// Devuelve null si no se pudo determinar (IP local en desarrollo,
// servicio externo caido o con su limite gratuito agotado) -- en ese
// caso quien llama se queda con CLP, la opcion segura por defecto.
async function obtenerPaisDesdeIp(ip) {
  if (!ip || ip === '::1' || ip.startsWith('127.') || ip.startsWith('192.168.') || ip.startsWith('10.')) {
    return null; // IP local/privada -- ni vale la pena consultar
  }
  try {
    const respuesta = await fetch(`https://ipwho.is/${ip}?fields=success,country_code`, { signal: AbortSignal.timeout(2500) });
    const datos = await respuesta.json();
    return (datos.success && /^[A-Z]{2}$/.test(datos.country_code)) ? datos.country_code : null;
  } catch (error) {
    return null;
  }
}

// ------------------------------------------------------------
// GET /api/pagos/precios
// Público. Devuelve el precio en AMBAS monedas siempre (el landing
// los muestra juntos, CLP con el equivalente en USD entre paréntesis,
// ver frontend/js/landing.js) mas "monedaSugerida": la moneda con la
// que conviene encabezar el precio segun de donde geolocalizamos al
// visitante ("USD" fuera de Chile, "CLP" en Chile o si la
// geolocalizacion no se pudo determinar) -- la usan los botones de
// compra del flipbook y la seccion "Precios" del landing, que solo
// tienen espacio para mostrar una moneda a la vez.
// ------------------------------------------------------------
router.get('/precios', async (req, res) => {
  const pais = await obtenerPaisDesdeIp(req.ip);
  const tasa = await obtenerTasaClpAUsd();

  const aUsd = (montoClp) => tasa ? Math.round(montoClp * tasa * 100) / 100 : null;
  const precioCompleto = PRECIOS.flipbook + PRECIOS.pdf;

  res.json({
    clp: { flipbook: PRECIOS.flipbook, pdf: PRECIOS.pdf, completo: precioCompleto, moneda: 'CLP' },
    usd: { flipbook: aUsd(PRECIOS.flipbook), pdf: aUsd(PRECIOS.pdf), completo: aUsd(precioCompleto), moneda: 'USD' },
    monedaSugerida: (pais && pais !== 'CL' && tasa) ? 'USD' : 'CLP'
  });
});

// ------------------------------------------------------------
// Busca un libro por slug (para el carrito, que puede traer varios
// libros distintos en un mismo pedido -- a diferencia de
// "resolverLibro" en middleware/auth.js, que resuelve UN libro desde
// "?libro=" en la query y no sirve aca).
// ------------------------------------------------------------
async function resolverLibroPorSlug(slug) {
  const [filas] = await pool.query('SELECT id, slug, titulo, estado FROM libros WHERE slug = ?', [slug]);
  return filas[0] || null;
}

// ------------------------------------------------------------
// Valida el carrito (mismas reglas para cotizar y para pagar de
// verdad, asi el precio que se muestra en el resumen es EXACTAMENTE
// el que despues se cobra): resuelve cada libro por slug, valida
// nivel_acceso, y calcula el precio final de cada item aplicando el
// descuento que corresponda -- el mismo codigo puede aplicar a un
// item y no a otro (ver calcularDescuentoAplicable en
// routes/descuentos.js, ya soporta descuentos limitados a un libro).
// Devuelve { items, total } o { error } si algo no es valido.
// ------------------------------------------------------------
async function calcularCarrito(usuario, itemsCarrito, codigoDescuento) {
  if (!Array.isArray(itemsCarrito) || itemsCarrito.length === 0) {
    return { error: 'El carrito está vacío' };
  }

  const items = [];
  for (const itemCarrito of itemsCarrito) {
    const libro = await resolverLibroPorSlug(itemCarrito.libro);
    // Mismo criterio que "resolverLibro" en middleware/auth.js: un libro
    // no publicado se trata como si no existiera, salvo para un admin.
    const esAdmin = usuario && usuario.rol === 'admin';
    if (!libro || (libro.estado !== 'publicado' && !esAdmin)) {
      return { error: `El libro "${itemCarrito.libro}" no existe` };
    }

    const nivelAcceso = itemCarrito.nivel_acceso;
    if (!NIVELES_VALIDOS.includes(nivelAcceso)) {
      return { error: `nivel_acceso debe ser uno de: ${NIVELES_VALIDOS.join(', ')}` };
    }

    // Si ya tiene ese nivel o uno mayor para ESE libro, no tiene
    // sentido cobrarle de nuevo -- se rechaza el carrito entero (mas
    // simple que sacar el item solo) nombrando el libro en conflicto,
    // para que lo saque del carrito y reintente.
    if (tieneNivel(usuario, libro.id, nivelAcceso)) {
      return { error: `Ya tienes acceso a "${libro.titulo}" en ese nivel (o uno mayor) -- sácalo del carrito` };
    }

    // Cuanto le toca pagar depende de lo que ya tenga de ESE libro:
    // si ya tiene "flipbook" y esta agregando "completo", solo se le
    // cobra el PDF (ver precioParaNivel), no el paquete entero de nuevo.
    const nivelActual = (usuario.accesosPorLibro && usuario.accesosPorLibro[libro.id]) || 'ninguno';
    const { precio: precioBase, esActualizacion } = precioParaNivel(nivelAcceso, nivelActual);

    // Si el codigo no aplica a ESTE libro (esta limitado a otro), el
    // item se queda a precio de lista sin mas -- recien es un error
    // si no aplico a NINGUN item del carrito (chequeo despues del
    // for, con la lista de items ya completa). Los codigos son de un
    // solo uso por usuario (ver calcularDescuentoAplicable en
    // routes/descuentos.js): si ya lo uso antes, esto tambien devuelve
    // null, y el item queda a precio de lista igual que si el codigo
    // no existiera.
    const descuento = await calcularDescuentoAplicable(libro.id, codigoDescuento, usuario.id);

    const precioOriginal = precioBase;
    const precioFinal = descuento
      ? Math.round(precioOriginal * (1 - descuento.porcentaje / 100))
      : precioOriginal;

    items.push({
      libro: libro.slug,
      libroId: libro.id,
      titulo: libro.titulo,
      nivel_acceso: nivelAcceso,
      precio_original: precioOriginal,
      precio_final: precioFinal,
      es_actualizacion: esActualizacion,
      descuento_id: descuento ? descuento.id : null,
      descuento_porcentaje: descuento ? descuento.porcentaje : 0
    });
  }

  // Si se mando un codigo y NINGUN item del carrito lo aprovecho, es
  // que el codigo no aplica a nada de lo que hay en el carrito --
  // ahi si es un error real, se lo decimos en vez de cobrar de lista
  // en silencio.
  if (codigoDescuento && items.every(item => !item.descuento_id)) {
    return { error: 'Código de descuento inválido, vencido, ya usado, o no aplica a los libros del carrito' };
  }

  const total = items.reduce((suma, item) => suma + item.precio_final, 0);
  return { items, total };
}

// ------------------------------------------------------------
// POST /api/pagos/cotizar-carrito
// Requiere sesión. Body: { items: [{libro, nivel_acceso}], codigo_descuento? }
// Puramente informativo (para pintar frontend/carrito.html antes de
// pagar) -- calcula el precio real de cada item con las mismas
// reglas que POST /pedido, para que el resumen nunca muestre un
// numero distinto al que despues se cobra de verdad.
// ------------------------------------------------------------
router.post('/cotizar-carrito', requiereSesion, async (req, res) => {
  try {
    const { items, codigo_descuento: codigoDescuento } = req.body;
    const resultado = await calcularCarrito(req.usuario, items, codigoDescuento);
    if (resultado.error) return res.status(400).json({ error: resultado.error });

    res.json({
      items: resultado.items.map(({ libro, titulo, nivel_acceso, precio_original, precio_final, descuento_porcentaje, es_actualizacion }) =>
        ({ libro, titulo, nivel_acceso, precio_original, precio_final, descuento_porcentaje, es_actualizacion })),
      total: resultado.total,
      moneda: MONEDA
    });
  } catch (error) {
    console.error('Error al cotizar el carrito:', error);
    res.status(500).json({ error: 'No se pudo cotizar el carrito' });
  }
});

// ------------------------------------------------------------
// POST /api/pagos/pedido
// Requiere sesión. Body: { items: [{libro, nivel_acceso}], codigo_descuento? }
// Crea el pedido (una fila en "pedidos" + una fila en "pagos" por
// cada item del carrito, todas apuntando a ese pedido) y la
// "preferencia" de pago en MercadoPago con un item de checkout por
// cada item del carrito -- un solo pago cubre todo el pedido.
// ------------------------------------------------------------
router.post('/pedido', requiereSesion, async (req, res) => {
  try {
    const cliente = obtenerCliente();
    if (!cliente) {
      return res.status(500).json({ error: 'Los pagos todavía no están configurados en el servidor' });
    }

    // El admin no necesita verificar el email para probar cosas; para
    // un lector normal, es el unico lugar donde de verdad importa
    // saber que el email es real (hay plata de por medio).
    if (req.usuario.rol !== 'admin' && !req.usuario.email_verificado) {
      return res.status(403).json({ error: 'Verifica tu email antes de comprar', requiereVerificacion: true });
    }

    const { items, codigo_descuento: codigoDescuento } = req.body;
    const resultado = await calcularCarrito(req.usuario, items, codigoDescuento);
    if (resultado.error) return res.status(400).json({ error: resultado.error });

    const [resultadoPedido] = await pool.query(
      `INSERT INTO pedidos (usuario_id, monto_total, moneda, estado)
       VALUES (?, ?, ?, 'pendiente')`,
      [req.usuario.id, resultado.total, MONEDA]
    );
    const pedidoId = resultadoPedido.insertId;

    for (const item of resultado.items) {
      await pool.query(
        `INSERT INTO pagos (usuario_id, libro_id, nivel_acceso, monto, moneda, estado, descuento_id, pedido_id)
         VALUES (?, ?, ?, ?, ?, 'pendiente', ?, ?)`,
        [req.usuario.id, item.libroId, item.nivel_acceso, item.precio_final, MONEDA, item.descuento_id, pedidoId]
      );
    }

    const urlFrontend = process.env.URL_FRONTEND;
    const urlBackend = process.env.URL_BACKEND;

    const preference = new Preference(cliente);
    const resultadoPreferencia = await preference.create({
      body: {
        items: resultado.items.map(item => ({
          id: `${item.nivel_acceso}-${item.libro}`,
          title: item.nivel_acceso === 'completo'
            ? (item.es_actualizacion
                ? `${item.titulo} — Descarga en PDF`
                : `${item.titulo} — Acceso completo (flipbook + PDF)`)
            : `${item.titulo} — Acceso al flipbook`,
          quantity: 1,
          unit_price: item.precio_final,
          currency_id: MONEDA
        })),
        external_reference: String(pedidoId),
        back_urls: {
          success: `${urlFrontend}/carrito.html`,
          pending: `${urlFrontend}/carrito.html`,
          failure: `${urlFrontend}/carrito.html`
        },
        // "auto_return" hace que MercadoPago redirija solo de vuelta a
        // back_urls.success apenas se aprueba el pago (sin esto, el
        // usuario tiene que hacer click en un boton "Volver al sitio").
        // MercadoPago exige que back_urls.success sea una URL PUBLICA
        // HTTPS para aceptar auto_return -- con localhost/127.0.0.1
        // rechaza directamente el pago ("Algo salió mal"), no es solo
        // cosmetico. Por eso esto se activa solo, dinamicamente, segun
        // si URL_FRONTEND (.env) es una URL publica en ese momento (un
        // tunel como localtunnel/ngrok mientras se desarrolla, o el
        // dominio real cuando el sitio este publicado) o sigue siendo
        // localhost/127.0.0.1 (ahi ni se manda auto_return, para no
        // romper la creacion de la preferencia).
        ...(urlFrontend.startsWith('https://') ? { auto_return: 'approved' } : {}),
        notification_url: `${urlBackend}/api/pagos/webhook`
        // Se intento excluir "account_money" (pagar con saldo de
        // cuenta de Mercado Pago) para evitar el error 106 con
        // compradores de otro pais, pero la propia API de Mercado
        // Pago lo rechaza con 400 "account_money cannot be excluded"
        // -- no es un tipo de pago que Checkout Pro deje sacar de la
        // lista. Se queda sin restringir: el escenario mas comun
        // (pagar como invitado con tarjeta) ya funciona bien tal como
        // esta, sin necesitar esto.
      }
    });

    await pool.query('UPDATE pedidos SET mercadopago_preference_id = ? WHERE id = ?', [resultadoPreferencia.id, pedidoId]);

    // Confirmado por soporte de MercadoPago: este Checkout Pro NO usa
    // el flujo de sandbox tradicional. "sandbox_init_point" es solo un
    // dato de diagnóstico -- SIEMPRE hay que redirigir con
    // "init_point", tanto en pruebas (con credenciales de cuenta de
    // prueba, prefijo APP_USR-) como en producción. Antes usábamos
    // sandbox_init_point pensando que era necesario para probar sin
    // cobrar de verdad, pero el ambiente de prueba lo da el tipo de
    // cuenta detrás del access token, no la URL.
    res.json({ init_point: resultadoPreferencia.init_point, pedido_id: pedidoId });
  } catch (error) {
    console.error('Error al crear el pedido:', error);
    res.status(500).json({ error: 'No se pudo iniciar el pago' });
  }
});

// ------------------------------------------------------------
// POST /api/pagos/pedido-gratis
// Requiere sesión. Body: { items: [{libro, nivel_acceso}], codigo_descuento? }
// Para cuando un código de descuento deja el carrito en $0 -- Mercado
// Pago ni siquiera acepta cobrar $0, así que en ese caso el pedido
// nace "aprobado" directo (sin preferencia ni redirect a Mercado
// Pago) y se otorga el acceso en el momento.
// El total SIEMPRE se vuelve a calcular acá con "calcularCarrito"
// (las mismas reglas que /pedido) y se rechaza si no da exactamente
// $0 -- nunca confiar en que el frontend solo llama a esta ruta
// cuando corresponde, o cualquiera podría "regalarse" un libro pago
// mandando este endpoint en vez de /pedido.
// ------------------------------------------------------------
router.post('/pedido-gratis', requiereSesion, async (req, res) => {
  try {
    const { items, codigo_descuento: codigoDescuento } = req.body;
    const resultado = await calcularCarrito(req.usuario, items, codigoDescuento);
    if (resultado.error) return res.status(400).json({ error: resultado.error });
    if (resultado.total !== 0) {
      return res.status(400).json({ error: 'Este carrito no está totalmente cubierto por el descuento' });
    }

    const [resultadoPedido] = await pool.query(
      `INSERT INTO pedidos (usuario_id, monto_total, moneda, estado)
       VALUES (?, 0, ?, 'aprobado')`,
      [req.usuario.id, MONEDA]
    );
    const pedidoId = resultadoPedido.insertId;

    for (const item of resultado.items) {
      await pool.query(
        `INSERT INTO pagos (usuario_id, libro_id, nivel_acceso, monto, moneda, estado, descuento_id, pedido_id)
         VALUES (?, ?, ?, 0, ?, 'aprobado', ?, ?)`,
        [req.usuario.id, item.libroId, item.nivel_acceso, MONEDA, item.descuento_id, pedidoId]
      );
    }

    await otorgarAccesos({ id: pedidoId, usuario_id: req.usuario.id, monto_total: 0, moneda: MONEDA });

    res.json({
      items: resultado.items.map(({ libro, nivel_acceso }) => ({ libro, nivel_acceso }))
    });
  } catch (error) {
    console.error('Error al procesar el pedido gratuito:', error);
    res.status(500).json({ error: 'No se pudo procesar la descarga gratuita' });
  }
});

// ------------------------------------------------------------
// GET /api/pagos/todos
// Solo administradores. Alimenta el panel frontend/admin/pagos.html:
// lista todos los pagos con el nombre/email de quien compró y el
// libro, mas reciente primero.
// ------------------------------------------------------------
router.get('/todos', requiereAdmin, async (req, res) => {
  try {
    const [filas] = await pool.query(`
      SELECT
        p.id, p.nivel_acceso, p.monto, p.moneda, p.estado,
        p.mercadopago_payment_id, p.status_detail, p.creado_en, p.actualizado_en,
        u.nombre AS usuario_nombre, u.email AS usuario_email,
        l.titulo AS libro_titulo,
        d.tipo AS descuento_tipo, d.codigo AS descuento_codigo, d.porcentaje AS descuento_porcentaje
      FROM pagos p
      JOIN usuarios u ON u.id = p.usuario_id
      JOIN libros l ON l.id = p.libro_id
      LEFT JOIN descuentos d ON d.id = p.descuento_id
      ORDER BY p.creado_en DESC
    `);
    res.json(filas);
  } catch (error) {
    console.error('Error al listar los pagos:', error);
    res.status(500).json({ error: 'No se pudieron obtener los pagos' });
  }
});

// ------------------------------------------------------------
// GET /api/pagos/resumen
// Solo administradores. Numeros agregados para las tarjetas del
// dashboard (frontend/admin/index.html). Los calculamos en SQL (no
// trayendo todos los pagos/usuarios al frontend y sumando ahi), para
// que esto siga siendo rapido aunque haya miles de filas.
// ------------------------------------------------------------
router.get('/resumen', requiereAdmin, async (req, res) => {
  try {
    const [[pagosResumen]] = await pool.query(`
      SELECT
        COALESCE(SUM(CASE WHEN estado = 'aprobado' THEN monto END), 0) AS recaudado_total,
        COUNT(CASE WHEN estado = 'aprobado' THEN 1 END) AS pagos_aprobados,
        COUNT(CASE WHEN estado = 'pendiente' THEN 1 END) AS pagos_pendientes,
        COUNT(CASE WHEN estado = 'rechazado' THEN 1 END) AS pagos_rechazados
      FROM pagos
    `);

    const [[usuariosResumen]] = await pool.query(`
      SELECT
        COUNT(*) AS usuarios_total,
        COUNT(CASE WHEN email_verificado = 1 THEN 1 END) AS usuarios_verificados
      FROM usuarios
    `);

    const [[accesosResumen]] = await pool.query(`
      SELECT COUNT(DISTINCT usuario_id) AS usuarios_con_acceso
      FROM accesos
      WHERE nivel_acceso <> 'ninguno'
    `);

    res.json({
      moneda: MONEDA,
      recaudado_total: pagosResumen.recaudado_total,
      pagos_aprobados: pagosResumen.pagos_aprobados,
      pagos_pendientes: pagosResumen.pagos_pendientes,
      pagos_rechazados: pagosResumen.pagos_rechazados,
      usuarios_total: usuariosResumen.usuarios_total,
      usuarios_verificados: usuariosResumen.usuarios_verificados,
      usuarios_con_acceso: accesosResumen.usuarios_con_acceso
    });
  } catch (error) {
    console.error('Error al calcular el resumen:', error);
    res.status(500).json({ error: 'No se pudo calcular el resumen' });
  }
});

// ------------------------------------------------------------
// Sube el nivel de acceso de cada item de un pedido YA aprobado (sea
// porque MercadoPago lo confirmo, o porque el pedido nacio aprobado
// por ser $0, ver POST /pedido-gratis mas arriba) y manda el email de
// confirmacion. Nunca BAJA un nivel de acceso: si el usuario ya tenía
// "completo" de un libro y el pedido incluia "flipbook" para ese
// mismo libro (por error, o dos pestañas a la vez), el nivel más alto
// se mantiene.
// ------------------------------------------------------------
async function otorgarAccesos(pedido) {
  const [items] = await pool.query(
    `SELECT p.libro_id, p.nivel_acceso, l.titulo
     FROM pagos p JOIN libros l ON l.id = p.libro_id
     WHERE p.pedido_id = ?`,
    [pedido.id]
  );

  for (const item of items) {
    const [accesoActual] = await pool.query(
      'SELECT nivel_acceso FROM accesos WHERE usuario_id = ? AND libro_id = ?',
      [pedido.usuario_id, item.libro_id]
    );
    const nivelActual = accesoActual.length > 0 ? accesoActual[0].nivel_acceso : 'ninguno';

    if (JERARQUIA_NIVELES[item.nivel_acceso] > JERARQUIA_NIVELES[nivelActual]) {
      await pool.query(
        `INSERT INTO accesos (usuario_id, libro_id, nivel_acceso)
         VALUES (?, ?, ?)
         ON DUPLICATE KEY UPDATE nivel_acceso = VALUES(nivel_acceso)`,
        [pedido.usuario_id, item.libro_id, item.nivel_acceso]
      );
    }
  }

  // El email es un "extra": si falla (proveedor caido, etc.) no
  // tiene que tirar abajo la confirmacion del pago -- el acceso ya
  // quedo dado arriba de todas formas.
  try {
    const [usuarios] = await pool.query('SELECT nombre, email FROM usuarios WHERE id = ?', [pedido.usuario_id]);
    if (usuarios.length > 0) {
      await enviarEmailCompra(usuarios[0], items, pedido.monto_total, pedido.moneda);
    }
  } catch (error) {
    console.error('No se pudo enviar el email de confirmación de compra:', error);
  }
}

// ------------------------------------------------------------
// Procesa el resultado de un PEDIDO ya verificado contra la API de
// MercadoPago (un pedido puede cubrir varios libros/niveles a la vez,
// ver POST /pedido mas arriba). Idempotente: si el pedido ya estaba
// aprobado en nuestra base, no vuelve a tocar nada (el webhook puede
// llegar más de una vez para el mismo pago).
// ------------------------------------------------------------
async function procesarResultadoPedido(pedidoId, estadoMercadoPago, mercadopagoPaymentId, statusDetail) {
  const [filas] = await pool.query('SELECT * FROM pedidos WHERE id = ?', [pedidoId]);
  if (filas.length === 0) return { encontrado: false };
  const pedido = filas[0];

  if (pedido.estado === 'aprobado') return { encontrado: true, pedido }; // ya procesado, no hacer nada de nuevo

  const nuevoEstado = estadoMercadoPago === 'approved' ? 'aprobado'
    : estadoMercadoPago === 'rejected' ? 'rechazado'
    : 'pendiente';

  await pool.query(
    'UPDATE pedidos SET estado = ?, mercadopago_payment_id = ?, status_detail = ? WHERE id = ?',
    [nuevoEstado, mercadopagoPaymentId || pedido.mercadopago_payment_id, statusDetail || null, pedidoId]
  );
  await pool.query(
    'UPDATE pagos SET estado = ?, mercadopago_payment_id = ?, status_detail = ? WHERE pedido_id = ?',
    [nuevoEstado, mercadopagoPaymentId || pedido.mercadopago_payment_id, statusDetail || null, pedidoId]
  );

  if (nuevoEstado === 'aprobado') {
    await otorgarAccesos(pedido);
  }

  return { encontrado: true, pedido: { ...pedido, estado: nuevoEstado } };
}

// ------------------------------------------------------------
// GET /api/pagos/confirmar?payment_id=&external_reference=
// Llamado por el frontend justo después de que MercadoPago redirige
// de vuelta al usuario. "external_reference" es nuestro pedidos.id;
// "payment_id" es el id que le asignó MercadoPago al pago. Volvemos
// a consultar la API real antes de confirmar nada (ver nota arriba).
// ------------------------------------------------------------
router.get('/confirmar', async (req, res) => {
  try {
    const cliente = obtenerCliente();
    if (!cliente) return res.status(500).json({ error: 'Los pagos todavía no están configurados en el servidor' });

    const { payment_id: paymentId, external_reference: externalReference } = req.query;
    if (!paymentId || !externalReference) {
      return res.status(400).json({ error: 'Faltan payment_id y/o external_reference' });
    }

    const payment = new Payment(cliente);
    const pagoMercadoPago = await payment.get({ id: paymentId });

    if (String(pagoMercadoPago.external_reference) !== String(externalReference)) {
      return res.status(400).json({ error: 'El pago no corresponde a esta compra' });
    }

    const resultado = await procesarResultadoPedido(Number(externalReference), pagoMercadoPago.status, paymentId, pagoMercadoPago.status_detail);
    if (!resultado.encontrado) return res.status(404).json({ error: 'Compra no encontrada' });

    res.json({ estado: resultado.pedido.estado });
  } catch (error) {
    console.error('Error al confirmar el pago:', error);
    res.status(500).json({ error: 'No se pudo confirmar el pago' });
  }
});

// ------------------------------------------------------------
// POST /api/pagos/webhook
// Lo llama MercadoPago (no el navegador del usuario) cuando cambia
// el estado de un pago. Es el mecanismo confiable para producción
// (a diferencia de la confirmación por redirect, que depende de que
// el usuario efectivamente vuelva a nuestra página). No alcanzable
// desde localhost sin un túnel público (ngrok o similar) — ver
// README de pagos.
// ------------------------------------------------------------
router.post('/webhook', async (req, res) => {
  try {
    // Respondemos 200 enseguida: si tardamos o fallamos, MercadoPago
    // reintenta, y no queremos que un intento nuestro fallido bloquee
    // al usuario (la confirmacion por redirect ya lo desbloquea).
    res.sendStatus(200);

    const cliente = obtenerCliente();
    if (!cliente) return;

    const paymentId = req.query['data.id'] || req.body?.data?.id;
    const tipo = req.query.type || req.body?.type;
    if (tipo !== 'payment' || !paymentId) return;

    const payment = new Payment(cliente);
    const pagoMercadoPago = await payment.get({ id: paymentId });
    if (!pagoMercadoPago.external_reference) return;

    await procesarResultadoPedido(Number(pagoMercadoPago.external_reference), pagoMercadoPago.status, paymentId, pagoMercadoPago.status_detail);
  } catch (error) {
    console.error('Error al procesar el webhook de MercadoPago:', error);
  }
});

module.exports = router;
