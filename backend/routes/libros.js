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

module.exports = router;
