// ============================================================
// routes/libros.js
// ------------------------------------------------------------
// Catalogo de libros (mitologia griega hoy, otras mitologias
// despues). Publico: no requiere sesion, es lo que va a alimentar el
// landing page para mostrar que libros hay a la venta.
// ============================================================

const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const { requiereAdmin } = require('../middleware/auth');

// ------------------------------------------------------------
// GET /api/libros
// Lista los libros publicados del catalogo ("estado = 'publicado'":
// los que estan en 'borrador' o 'en_revision' no se muestran en
// publico, ver scripts/migrar-multi-libro.js para el porque de este
// campo en vez de un simple "activo").
// ------------------------------------------------------------
router.get('/', async (req, res) => {
  try {
    const [filas] = await pool.query(
      `SELECT id, slug, titulo, subtitulo, descripcion, portada_url
       FROM libros
       WHERE estado = 'publicado'
       ORDER BY titulo ASC`
    );
    res.json(filas);
  } catch (error) {
    console.error('Error al obtener los libros:', error);
    res.status(500).json({ error: 'No se pudo obtener la lista de libros' });
  }
});

// ------------------------------------------------------------
// GET /api/libros/todos
// Solo administradores. Publicados, en borrador y en revision, con
// la cuenta real de personajes/historias de cada uno para el panel
// (ver frontend/admin/libros.html).
// ------------------------------------------------------------
router.get('/todos', requiereAdmin, async (req, res) => {
  try {
    const [filas] = await pool.query(
      `SELECT l.id, l.slug, l.titulo, l.subtitulo, l.estado, l.creado_en,
              (SELECT COUNT(*) FROM personajes p WHERE p.libro_id = l.id) AS total_personajes,
              (SELECT COUNT(*) FROM historias h WHERE h.libro_id = l.id) AS total_historias
       FROM libros l
       ORDER BY l.creado_en DESC`
    );
    res.json(filas);
  } catch (error) {
    console.error('Error al listar todos los libros:', error);
    res.status(500).json({ error: 'No se pudo obtener la lista de libros' });
  }
});

// ------------------------------------------------------------
// PUT /api/libros/:id
// Solo administradores. Body: { estado } -- 'borrador' | 'en_revision' | 'publicado'.
// Habilita/deshabilita un libro en el catalogo publico (ver GET /
// arriba, que solo devuelve los publicados).
// ------------------------------------------------------------
router.put('/:id', requiereAdmin, async (req, res) => {
  try {
    const { estado } = req.body;
    const estadosValidos = ['borrador', 'en_revision', 'publicado'];
    if (!estadosValidos.includes(estado)) {
      return res.status(400).json({ error: 'Estado inválido' });
    }

    const [resultado] = await pool.query('UPDATE libros SET estado = ? WHERE id = ?', [estado, req.params.id]);
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ error: 'No encontrado' });
    }
    res.json({ ok: true });
  } catch (error) {
    console.error('Error al actualizar el libro:', error);
    res.status(500).json({ error: 'No se pudo actualizar' });
  }
});

module.exports = router;
