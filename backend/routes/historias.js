// ============================================================
// routes/historias.js
// ------------------------------------------------------------
// Mismo patron que routes/personajes.js: un endpoint para listar
// y otro para traer la ficha completa de una historia, incluyendo
// los personajes que participan (con su rol) y las fuentes clasicas.
// ============================================================

const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const { tieneNivel, resolverLibro } = require('../middleware/auth');

// Los textos vienen con parrafos separados por doble salto de linea
// (\n\n, mismo criterio que el frontend usa para renderizarlos como
// <p> separados) -- para la muestra gratuita alcanza con el primero.
function primerParrafo(texto) {
  return (texto || '').split(/\n\s*\n/)[0];
}

// ------------------------------------------------------------
// GET /api/historias
// Lista resumida de todas las historias (para el indice). Soporta un
// filtro opcional de libro: /api/historias?libro=<slug> (si no se
// manda, usa el libro por defecto -- ver middleware/auth.js).
// ------------------------------------------------------------
router.get('/', resolverLibro, async (req, res) => {
  try {
    const [filas] = await pool.query(
      `SELECT id, titulo, resumen, tipo, periodo, slug, es_preview
       FROM historias
       WHERE libro_id = ?
       ORDER BY id ASC`,
      [req.libro.id]
    );
    res.json(filas);
  } catch (error) {
    console.error('Error al obtener historias:', error);
    res.status(500).json({ error: 'No se pudo obtener la lista de historias' });
  }
});

// ------------------------------------------------------------
// GET /api/historias/:slug
// Ficha completa de una historia: texto completo, personajes
// que participan (con su rol) y fuentes clasicas que la respaldan.
// ------------------------------------------------------------
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    const [historiaRows] = await pool.query(
      'SELECT * FROM historias WHERE slug = ?',
      [slug]
    );

    if (historiaRows.length === 0) {
      return res.status(404).json({ error: 'Historia no encontrada' });
    }

    const historia = historiaRows[0];

    // Control de acceso: mismo criterio que en personajes.js.
    const tieneAccesoReal = tieneNivel(req.usuario, historia.libro_id, 'flipbook');
    if (!historia.es_preview && !tieneAccesoReal) {
      return res.status(403).json({
        error: 'Contenido bloqueado',
        requiere: 'flipbook',
        bloqueado: true,
        titulo: historia.titulo,
        resumen: historia.resumen,
        tipo: historia.tipo,
        slug: historia.slug
      });
    }

    // Si llega hasta aca por ser parte de la muestra gratuita (y no
    // porque el usuario de verdad tenga acceso), se recorta el texto
    // al primer parrafo -- la muestra gratuita da un adelanto, no la
    // historia entera. "muestra_limitada" le avisa al frontend que
    // agregue el aviso/CTA de "sigue leyendo" al final (ver
    // construirPaginaHistoria en frontend/js/app.js).
    const muestraLimitada = !tieneAccesoReal;
    if (muestraLimitada) {
      historia.texto_completo = primerParrafo(historia.texto_completo);
    }

    // Personajes que participan, con su rol (protagonista, antagonista, etc.)
    // Este es el dato clave para poder armar los "anexos" automaticos
    // que querias desde el principio.
    const [personajes] = await pool.query(
      `SELECT p.nombre, p.slug, p.tipo, hp.rol
       FROM historia_personajes hp
       JOIN personajes p ON p.id = hp.personaje_id
       WHERE hp.historia_id = ?
       ORDER BY FIELD(hp.rol, 'protagonista','antagonista','secundario','mencionado')`,
      [historia.id]
    );

    // Fuentes clasicas que respaldan esta historia
    const [fuentes] = await pool.query(
      `SELECT f.autor, f.obra, f.anio_aprox
       FROM historia_fuentes hf
       JOIN fuentes f ON f.id = hf.fuente_id
       WHERE hf.historia_id = ?`,
      [historia.id]
    );

    res.json({
      ...historia,
      personajes,
      fuentes,
      muestra_limitada: muestraLimitada
    });
  } catch (error) {
    console.error('Error al obtener la historia:', error);
    res.status(500).json({ error: 'No se pudo obtener la historia' });
  }
});

module.exports = router;
