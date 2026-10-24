// ============================================================
// routes/descuentos.js
// ------------------------------------------------------------
// Códigos de descuento y descuentos generales automáticos (ver tabla
// "descuentos", creada en scripts/migrar-descuentos.js). Un
// descuento puede ser:
//   - "codigo": el comprador lo escribe antes de pagar.
//   - "general": se aplica solo, sin que nadie escriba nada.
// Y puede aplicar a UN libro (libro_id) o a TODOS (libro_id NULL).
//
// El calculo del monto real a cobrar vive en routes/pagos.js, que
// reusa "calcularDescuentoAplicable" de este archivo -- la regla de
// oro sigue siendo la misma que en pagos.js: lo que el navegador
// mande (un codigo) solo se usa para saber QUE buscar, nunca para
// decidir el porcentaje. Eso siempre se vuelve a leer de la base.
// ============================================================

const crypto = require('crypto');
const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const { requiereAdmin, requiereSesion, resolverLibro } = require('../middleware/auth');

// ------------------------------------------------------------
// Busca, para un libro y un codigo (opcional) dados, el descuento que
// corresponde aplicar:
//   - Si viene "codigoTexto", busca ESE codigo puntual (activo, y que
//     aplique a este libro o a todos). Si no existe/no esta activo,
//     devuelve null (quien llama decide si eso es un error o no). Los
//     codigos son de un solo uso POR USUARIO (no por compra): si se
//     pasa "usuarioId" y esa persona ya tiene un pago APROBADO con
//     este mismo codigo (de este libro o de cualquier otro, si el
//     codigo aplica a todos), tambien devuelve null -- ya lo gasto.
//     Solo cuenta un pago aprobado de verdad, no uno pendiente o
//     rechazado (un intento que no se completo no deberia quemar el
//     codigo).
//   - Si no viene codigo, busca el mejor descuento "general" activo
//     que aplique a este libro (el de mayor porcentaje, por si hay
//     mas de uno enredado a proposito o por error). Los "general" no
//     tienen limite de uso -- son una promo del sitio, no algo que
//     "gaste" cada comprador. Si hay "usuarioId", compite ademas con
//     el codigo PERSONAL vigente de esa persona (ver
//     otorgarRecompensaPrimeraCompra): se queda el de mayor porcentaje,
//     asi el regalo se aplica solo, sin escribir nada.
//
// Los codigos personales (usuario_id con valor) solo valen para su
// dueño y solo para un libro NUEVO: nunca para "agregar el PDF" a un
// libro que ya tiene ("esActualizacion"). "soloGeneral" deja afuera
// los personales (lo usa calcularCarrito para los libros que quedan
// fuera del limite de un codigo).
// ------------------------------------------------------------
async function calcularDescuentoAplicable(libroId, codigoTexto, usuarioId, { esActualizacion = false, soloGeneral = false } = {}) {
  if (codigoTexto) {
    const [filas] = await pool.query(
      `SELECT * FROM descuentos
       WHERE tipo = 'codigo' AND activo = 1 AND codigo = ?
         AND (libro_id IS NULL OR libro_id = ?)
         AND (vence_en IS NULL OR vence_en > NOW())`,
      [String(codigoTexto).trim().toUpperCase(), libroId]
    );
    const descuento = filas[0];
    if (!descuento) return null;
    if (descuento.usuario_id && (descuento.usuario_id !== usuarioId || esActualizacion)) return null;
    if (usuarioId && await yaLoUso(usuarioId, descuento.id)) return null;
    return descuento;
  }

  const [filas] = await pool.query(
    `SELECT * FROM descuentos
     WHERE tipo = 'general' AND activo = 1
       AND (libro_id IS NULL OR libro_id = ?)
       AND (vence_en IS NULL OR vence_en > NOW())
     ORDER BY porcentaje DESC
     LIMIT 1`,
    [libroId]
  );
  const general = filas[0] || null;
  if (!usuarioId || soloGeneral || esActualizacion) return general;

  const personal = (await descuentosPersonalesVigentes(usuarioId))
    .find(d => d.libro_id === null || d.libro_id === libroId) || null;
  if (!personal) return general;
  return !general || personal.porcentaje > general.porcentaje ? personal : general;
}

async function yaLoUso(usuarioId, descuentoId) {
  const [usados] = await pool.query(
    `SELECT 1 FROM pagos WHERE usuario_id = ? AND descuento_id = ? AND estado = 'aprobado' LIMIT 1`,
    [usuarioId, descuentoId]
  );
  return usados.length > 0;
}

// Codigos personales de una persona que todavia puede usar (activos,
// sin vencer y sin una compra aprobada con ellos), el mayor primero.
async function descuentosPersonalesVigentes(usuarioId) {
  const [filas] = await pool.query(
    `SELECT d.* FROM descuentos d
     WHERE d.usuario_id = ? AND d.tipo = 'codigo' AND d.activo = 1
       AND (d.vence_en IS NULL OR d.vence_en > NOW())
       AND NOT EXISTS (SELECT 1 FROM pagos p WHERE p.usuario_id = d.usuario_id AND p.descuento_id = d.id AND p.estado = 'aprobado')
     ORDER BY d.porcentaje DESC, d.vence_en ASC`,
    [usuarioId]
  );
  return filas;
}

// ------------------------------------------------------------
// Regalo por la PRIMERA compra pagada: un codigo personal de 25% para
// un libro mas, valido 30 dias. Lo llama otorgarAccesos (routes/pagos.js)
// cada vez que se aprueba un pedido; solo crea el codigo si es el
// primer pedido aprobado con monto mayor a $0 de esa persona (un
// pedido gratis, con un codigo del 100%, no cuenta como compra) y si
// todavia no recibio este regalo. Devuelve el codigo creado, o null.
// ------------------------------------------------------------
const RECOMPENSA_PRIMERA_COMPRA = { porcentaje: 25, dias: 30 };

async function otorgarRecompensaPrimeraCompra(pedido) {
  if (!(pedido.monto_total > 0)) return null;

  const [[{ pagados }]] = await pool.query(
    `SELECT COUNT(*) AS pagados FROM pedidos WHERE usuario_id = ? AND estado = 'aprobado' AND monto_total > 0`,
    [pedido.usuario_id]
  );
  if (pagados !== 1) return null;

  const [ya] = await pool.query(
    `SELECT 1 FROM descuentos WHERE usuario_id = ? AND origen = 'primera_compra' LIMIT 1`,
    [pedido.usuario_id]
  );
  if (ya.length > 0) return null;

  const { porcentaje, dias } = RECOMPENSA_PRIMERA_COMPRA;
  for (let intento = 0; intento < 5; intento++) {
    const codigo = `GRACIAS-${crypto.randomBytes(4).toString('hex').toUpperCase().slice(0, 6)}`;
    try {
      await pool.query(
        `INSERT INTO descuentos (tipo, codigo, porcentaje, libro_id, usuario_id, origen, max_items, vence_en)
         VALUES ('codigo', ?, ?, NULL, ?, 'primera_compra', 1, DATE_ADD(NOW(), INTERVAL ? DAY))`,
        [codigo, porcentaje, pedido.usuario_id, dias]
      );
      const [[creado]] = await pool.query('SELECT codigo, porcentaje, vence_en FROM descuentos WHERE codigo = ?', [codigo]);
      return creado;
    } catch (error) {
      if (error.code !== 'ER_DUP_ENTRY') throw error; // codigo repetido por azar: se prueba otro
    }
  }
  return null;
}

// ------------------------------------------------------------
// GET /api/descuentos
// Solo administradores. Alimenta frontend/admin/descuentos.html.
// ------------------------------------------------------------
router.get('/', requiereAdmin, async (req, res) => {
  try {
    const [filas] = await pool.query(`
      SELECT d.id, d.tipo, d.codigo, d.porcentaje, d.libro_id, d.max_items, d.vence_en, d.activo, d.creado_en,
             l.titulo AS libro_titulo, u.email AS usuario_email, d.origen,
             (SELECT COUNT(DISTINCT p.pedido_id) FROM pagos p
              WHERE p.descuento_id = d.id AND p.estado = 'aprobado') AS compras_aprobadas
      FROM descuentos d
      LEFT JOIN libros l ON l.id = d.libro_id
      LEFT JOIN usuarios u ON u.id = d.usuario_id
      ORDER BY d.creado_en DESC
    `);
    res.json(filas);
  } catch (error) {
    console.error('Error al listar los descuentos:', error);
    res.status(500).json({ error: 'No se pudieron obtener los descuentos' });
  }
});

// ------------------------------------------------------------
// POST /api/descuentos
// Solo administradores. Body: { tipo: 'codigo'|'general', codigo?,
// porcentaje, libro_id?, max_items?, vence_en? } -- "libro_id"
// ausente/null = aplica a todos.
// ------------------------------------------------------------
router.post('/', requiereAdmin, async (req, res) => {
  try {
    const { tipo, porcentaje, libro_id: libroId } = req.body;

    if (tipo !== 'codigo' && tipo !== 'general') {
      return res.status(400).json({ error: 'tipo debe ser "codigo" o "general"' });
    }

    const porcentajeNum = Number(porcentaje);
    if (!Number.isInteger(porcentajeNum) || porcentajeNum < 1 || porcentajeNum > 100) {
      return res.status(400).json({ error: 'porcentaje debe ser un entero entre 1 y 100' });
    }

    // Los "general" nunca llevan codigo, aunque el body mande uno --
    // si alguien lo necesita como codigo, es un tipo "codigo", no "general".
    let codigo = null;
    if (tipo === 'codigo') {
      codigo = String(req.body.codigo || '').trim().toUpperCase();
      if (!codigo) {
        return res.status(400).json({ error: 'Los descuentos de tipo "codigo" necesitan un código' });
      }
    }

    const libroIdFinal = libroId ? Number(libroId) : null;

    // Limites opcionales (ver scripts/migrar-descuentos-limites.js):
    // "max_items" vacio = aplica a todos los libros del carrito;
    // "vence_en" es una fecha (AAAA-MM-DD) y vale hasta el final de ese dia.
    let maxItems = null;
    if (req.body.max_items !== undefined && req.body.max_items !== null && req.body.max_items !== '') {
      maxItems = Number(req.body.max_items);
      if (!Number.isInteger(maxItems) || maxItems < 1 || maxItems > 50) {
        return res.status(400).json({ error: 'max_items debe ser un entero entre 1 y 50 (o vacío = sin límite)' });
      }
    }
    let venceEn = null;
    if (req.body.vence_en) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(String(req.body.vence_en))) {
        return res.status(400).json({ error: 'vence_en debe ser una fecha AAAA-MM-DD' });
      }
      venceEn = `${req.body.vence_en} 23:59:59`;
    }

    const [resultado] = await pool.query(
      `INSERT INTO descuentos (tipo, codigo, porcentaje, libro_id, max_items, vence_en, creado_por)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [tipo, codigo, porcentajeNum, libroIdFinal, maxItems, venceEn, req.usuario.id]
    );

    res.status(201).json({ id: resultado.insertId });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'Ese código ya existe' });
    }
    if (error.code === 'ER_NO_REFERENCED_ROW' || error.code === 'ER_NO_REFERENCED_ROW_2') {
      return res.status(400).json({ error: 'El libro seleccionado no existe' });
    }
    console.error('Error al crear el descuento:', error);
    res.status(500).json({ error: 'No se pudo crear el descuento' });
  }
});

// ------------------------------------------------------------
// PUT /api/descuentos/:id
// Solo administradores. Body: { activo?, porcentaje? } -- pensado
// sobre todo para prender/apagar una promo (mismo espiritu que
// PUT /api/auth/usuarios/:id/nivel).
// ------------------------------------------------------------
router.put('/:id', requiereAdmin, async (req, res) => {
  try {
    const { activo, porcentaje } = req.body;
    const campos = [];
    const valores = [];

    if (activo !== undefined) {
      campos.push('activo = ?');
      valores.push(activo ? 1 : 0);
    }
    if (porcentaje !== undefined) {
      const porcentajeNum = Number(porcentaje);
      if (!Number.isInteger(porcentajeNum) || porcentajeNum < 1 || porcentajeNum > 100) {
        return res.status(400).json({ error: 'porcentaje debe ser un entero entre 1 y 100' });
      }
      campos.push('porcentaje = ?');
      valores.push(porcentajeNum);
    }

    if (campos.length === 0) {
      return res.status(400).json({ error: 'Nada para actualizar' });
    }

    valores.push(req.params.id);
    const [resultado] = await pool.query(`UPDATE descuentos SET ${campos.join(', ')} WHERE id = ?`, valores);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: 'Descuento no encontrado' });
    }
    res.json({ ok: true });
  } catch (error) {
    console.error('Error al actualizar el descuento:', error);
    res.status(500).json({ error: 'No se pudo actualizar el descuento' });
  }
});

// ------------------------------------------------------------
// GET /api/descuentos/general?libro=<slug>
// Público. Devuelve el descuento general activo para ese libro (o
// null) -- SOLO para que el frontend muestre el precio ya rebajado
// en los botones de compra. El monto real a cobrar se vuelve a
// calcular en routes/pagos.js, nunca se confía en esto para cobrar.
// ------------------------------------------------------------
router.get('/general', resolverLibro, async (req, res) => {
  try {
    const descuento = await calcularDescuentoAplicable(req.libro.id, null);
    res.json(descuento ? { porcentaje: descuento.porcentaje } : null);
  } catch (error) {
    console.error('Error al buscar el descuento general:', error);
    res.status(500).json({ error: 'No se pudo consultar el descuento' });
  }
});

// ------------------------------------------------------------
// POST /api/descuentos/validar?libro=<slug>
// Requiere sesión (mismo criterio que iniciar una compra: no tiene
// sentido validar un código sin saber quién está por comprar). Body:
// { codigo }. Devuelve { valido: true, porcentaje } o { valido: false, error }.
// ------------------------------------------------------------
router.post('/validar', requiereSesion, resolverLibro, async (req, res) => {
  try {
    const { codigo } = req.body;
    if (!codigo) {
      return res.status(400).json({ valido: false, error: 'Falta el código' });
    }

    const descuento = await calcularDescuentoAplicable(req.libro.id, codigo, req.usuario.id);
    if (!descuento) {
      return res.json({ valido: false, error: 'Código inválido, vencido, o ya lo usaste antes' });
    }
    res.json({ valido: true, porcentaje: descuento.porcentaje });
  } catch (error) {
    console.error('Error al validar el código de descuento:', error);
    res.status(500).json({ valido: false, error: 'No se pudo validar el código' });
  }
});

// ------------------------------------------------------------
// GET /api/descuentos/mios
// Requiere sesión. Los codigos personales que la persona todavia puede
// usar (hoy: el regalo por su primera compra), para mostrarlos en "Mis
// libros". En el carrito se aplican solos, sin escribirlos.
// ------------------------------------------------------------
router.get('/mios', requiereSesion, async (req, res) => {
  try {
    const descuentos = await descuentosPersonalesVigentes(req.usuario.id);
    res.json(descuentos.map(d => ({ codigo: d.codigo, porcentaje: d.porcentaje, vence_en: d.vence_en, max_items: d.max_items })));
  } catch (error) {
    console.error('Error al listar los descuentos personales:', error);
    res.status(500).json({ error: 'No se pudieron obtener tus descuentos' });
  }
});

module.exports = router;
module.exports.calcularDescuentoAplicable = calcularDescuentoAplicable;
module.exports.otorgarRecompensaPrimeraCompra = otorgarRecompensaPrimeraCompra;
