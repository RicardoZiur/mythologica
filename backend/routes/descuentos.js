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
//     "gaste" cada comprador.
// ------------------------------------------------------------
async function calcularDescuentoAplicable(libroId, codigoTexto, usuarioId) {
  if (codigoTexto) {
    const [filas] = await pool.query(
      `SELECT * FROM descuentos
       WHERE tipo = 'codigo' AND activo = 1 AND codigo = ?
         AND (libro_id IS NULL OR libro_id = ?)`,
      [String(codigoTexto).trim().toUpperCase(), libroId]
    );
    const descuento = filas[0];
    if (!descuento) return null;

    if (usuarioId) {
      const [usados] = await pool.query(
        `SELECT 1 FROM pagos WHERE usuario_id = ? AND descuento_id = ? AND estado = 'aprobado' LIMIT 1`,
        [usuarioId, descuento.id]
      );
      if (usados.length > 0) return null;
    }

    return descuento;
  }

  const [filas] = await pool.query(
    `SELECT * FROM descuentos
     WHERE tipo = 'general' AND activo = 1
       AND (libro_id IS NULL OR libro_id = ?)
     ORDER BY porcentaje DESC
     LIMIT 1`,
    [libroId]
  );
  return filas[0] || null;
}

// ------------------------------------------------------------
// GET /api/descuentos
// Solo administradores. Alimenta frontend/admin/descuentos.html.
// ------------------------------------------------------------
router.get('/', requiereAdmin, async (req, res) => {
  try {
    const [filas] = await pool.query(`
      SELECT d.id, d.tipo, d.codigo, d.porcentaje, d.libro_id, d.activo, d.creado_en,
             l.titulo AS libro_titulo
      FROM descuentos d
      LEFT JOIN libros l ON l.id = d.libro_id
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
// porcentaje, libro_id? } -- "libro_id" ausente/null = aplica a todos.
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

    const [resultado] = await pool.query(
      `INSERT INTO descuentos (tipo, codigo, porcentaje, libro_id, creado_por)
       VALUES (?, ?, ?, ?, ?)`,
      [tipo, codigo, porcentajeNum, libroIdFinal, req.usuario.id]
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

module.exports = router;
module.exports.calcularDescuentoAplicable = calcularDescuentoAplicable;
