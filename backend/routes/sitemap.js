// ============================================================
// routes/sitemap.js
// ------------------------------------------------------------
// GET /sitemap.xml -- se arma dinamicamente a partir de los libros
// publicados en vez de ser un archivo estatico, para que se
// mantenga correcto solo con publicar/despublicar libros (ver
// admin/libros.html), sin tener que regenerarlo a mano.
//
// A proposito NO incluye "libro/index.html?libro=..." (el lector
// interactivo): esas paginas ya quedaron "noindex" en un cambio
// anterior (contenido duplicado entre libros, todas comparten el
// mismo HTML). Solo el landing y las paginas de aterrizaje por libro
// (routes/paginaLibro.js) son las que se quieren indexadas.
// ============================================================

const express = require('express');
const router = express.Router();
const pool = require('../config/db');

const DOMINIO = 'https://mythologica-digital.com';

router.get('/sitemap.xml', async (req, res) => {
  try {
    const [libros] = await pool.query(
      "SELECT slug FROM libros WHERE estado = 'publicado' ORDER BY slug ASC"
    );

    const urls = [
      `<url><loc>${DOMINIO}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`,
      ...libros.map(l => `<url><loc>${DOMINIO}/libro/${l.slug}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`)
    ].join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
    res.type('application/xml').send(xml);
  } catch (error) {
    console.error('Error al armar el sitemap:', error);
    res.status(500).send('No se pudo generar el sitemap.');
  }
});

module.exports = router;
