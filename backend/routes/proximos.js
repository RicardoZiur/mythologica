// ============================================================
// routes/proximos.js
// ------------------------------------------------------------
// "Próximos libros": la vitrina de mitologías/temas que todavía no
// son un libro real, mostrada atenuada en el landing (ver
// frontend/js/landing.js) y administrable desde
// frontend/admin/proximos.html. Mismo espíritu que routes/descuentos.js
// (activo/inactivo con un botón, nada de estados intermedios).
// ============================================================

const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const { requiereAdmin } = require('../middleware/auth');

// ------------------------------------------------------------
// GET /api/proximos
// Público. Solo los activos, en el orden en que deben mostrarse --
// alimenta la sección "Próximos libros" del landing.
// ------------------------------------------------------------
router.get('/', async (req, res) => {
  try {
    const [filas] = await pool.query(
      'SELECT id, nombre, descripcion FROM proximos_libros WHERE activo = 1 ORDER BY orden ASC, id ASC'
    );
    res.json(filas);
  } catch (error) {
    console.error('Error al listar los próximos libros:', error);
    res.status(500).json({ error: 'No se pudieron obtener los próximos libros' });
  }
});

// ------------------------------------------------------------
// GET /api/proximos/todos
// Solo administradores. Activos e inactivos, para el panel.
// ------------------------------------------------------------
router.get('/todos', requiereAdmin, async (req, res) => {
  try {
    const [filas] = await pool.query(
      'SELECT * FROM proximos_libros ORDER BY orden ASC, id ASC'
    );
    res.json(filas);
  } catch (error) {
    console.error('Error al listar los próximos libros:', error);
    res.status(500).json({ error: 'No se pudieron obtener los próximos libros' });
  }
});

// ------------------------------------------------------------
// POST /api/proximos
// Solo administradores. Body: { nombre, descripcion, orden? }
// ------------------------------------------------------------
router.post('/', requiereAdmin, async (req, res) => {
  try {
    const nombre = String(req.body.nombre || '').trim();
    const descripcion = String(req.body.descripcion || '').trim();
    if (!nombre || !descripcion) {
      return res.status(400).json({ error: 'Nombre y descripción son obligatorios' });
    }

    // Nuevo entra al final de la lista por defecto (mayor orden + 1),
    // salvo que se mande uno explicito.
    let orden = req.body.orden;
    if (orden === undefined || orden === null || orden === '') {
      const [[fila]] = await pool.query('SELECT COALESCE(MAX(orden), -1) AS maxOrden FROM proximos_libros');
      orden = fila.maxOrden + 1;
    }

    const [resultado] = await pool.query(
      'INSERT INTO proximos_libros (nombre, descripcion, orden) VALUES (?, ?, ?)',
      [nombre, descripcion, Number(orden)]
    );
    res.status(201).json({ id: resultado.insertId });
  } catch (error) {
    console.error('Error al crear el próximo libro:', error);
    res.status(500).json({ error: 'No se pudo crear' });
  }
});

// ------------------------------------------------------------
// PUT /api/proximos/:id
// Solo administradores. Body: { nombre?, descripcion?, orden?, activo? }
// ------------------------------------------------------------
router.put('/:id', requiereAdmin, async (req, res) => {
  try {
    const { nombre, descripcion, orden, activo } = req.body;
    const campos = [];
    const valores = [];

    if (nombre !== undefined) { campos.push('nombre = ?'); valores.push(String(nombre).trim()); }
    if (descripcion !== undefined) { campos.push('descripcion = ?'); valores.push(String(descripcion).trim()); }
    if (orden !== undefined) { campos.push('orden = ?'); valores.push(Number(orden)); }
    if (activo !== undefined) { campos.push('activo = ?'); valores.push(activo ? 1 : 0); }

    if (campos.length === 0) {
      return res.status(400).json({ error: 'Nada para actualizar' });
    }

    valores.push(req.params.id);
    const [resultado] = await pool.query(`UPDATE proximos_libros SET ${campos.join(', ')} WHERE id = ?`, valores);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: 'No encontrado' });
    }
    res.json({ ok: true });
  } catch (error) {
    console.error('Error al actualizar el próximo libro:', error);
    res.status(500).json({ error: 'No se pudo actualizar' });
  }
});

// ------------------------------------------------------------
// DELETE /api/proximos/:id
// Solo administradores.
// ------------------------------------------------------------
router.delete('/:id', requiereAdmin, async (req, res) => {
  try {
    const [resultado] = await pool.query('DELETE FROM proximos_libros WHERE id = ?', [req.params.id]);
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: 'No encontrado' });
    }
    res.json({ ok: true });
  } catch (error) {
    console.error('Error al borrar el próximo libro:', error);
    res.status(500).json({ error: 'No se pudo borrar' });
  }
});

module.exports = router;
