// ============================================================
// routes/paginaLibro.js
// ------------------------------------------------------------
// Pagina de aterrizaje publica por libro (GET /libro/<slug>), pensada
// para compartir en redes/WhatsApp y para que Google la indexe -- a
// diferencia del lector interactivo (frontend/libro/index.html), que
// lee el "?libro=" por JS del lado del cliente y por eso queda
// "noindex" (los crawlers de redes sociales y buscadores no ejecutan
// ese JS, asi que siempre verian el mismo titulo/imagen generico sin
// importar que libro se comparta).
//
// Esta ruta arma el HTML entero en el servidor (mismo patron que ya
// usa "construirDocumentoCompleto" en routes/pdf.js para el PDF, pero
// mucho mas simple: alcanza con enlazar las hojas de estilo ya
// existentes en vez de reescribir CSS inline) con meta tags dinamicos
// por libro (title, description, og:*, twitter:*, JSON-LD) y un CTA
// grande hacia el lector real.
//
// Se monta directo en server.js (no bajo /api, porque devuelve HTML,
// no JSON), antes del "express.static(frontend)".
// ============================================================

const express = require('express');
const router = express.Router();
const pool = require('../config/db');

const DOMINIO = 'https://mythologica-digital.com';

function escaparHtml(texto) {
  return String(texto || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// La meta description no deberia pasar de ~160 caracteres (Google la
// corta igual, pero mas largo solo agrega ruido) -- si "descripcion"
// viene mas larga, se corta en el ultimo espacio antes del limite en
// vez de partir una palabra a la mitad.
function acortarDescripcion(texto, limite = 155) {
  const plano = String(texto || '').replace(/\s+/g, ' ').trim();
  if (plano.length <= limite) return plano;
  const cortado = plano.slice(0, limite);
  const ultimoEspacio = cortado.lastIndexOf(' ');
  return `${cortado.slice(0, ultimoEspacio > 0 ? ultimoEspacio : limite)}…`;
}

function paginaNoEncontrada() {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="robots" content="noindex, nofollow">
      <title>Libro no encontrado — Mythologica</title>
    </head>
    <body style="background:#131217;color:#ece8e0;font-family:sans-serif;text-align:center;padding:80px 20px;">
      <h1>Este libro no existe</h1>
      <p><a href="/" style="color:#c9a24c;">Volver al catálogo</a></p>
    </body>
    </html>
  `;
}

function construirHtmlPaginaLibro(libro, conteos, personajesDestacados) {
  const urlPagina = `${DOMINIO}/libro/${libro.slug}`;
  const urlLector = `/libro/index.html?libro=${encodeURIComponent(libro.slug)}`;
  const urlEmblema = `${DOMINIO}/images/${libro.slug}/portada-emblema.png`;
  const urlFondo = `${DOMINIO}/images/${libro.slug}/portada-fondo.jpg`;
  const urlOgImage = `${DOMINIO}/images/${libro.slug}/og-image.jpg`;
  const descripcionCorta = acortarDescripcion(libro.descripcion || libro.subtitulo);
  const titulo = `${libro.titulo} — Mythologica`;

  const personajesHtml = personajesDestacados.length > 0
    ? `
      <div class="ll-personajes">
        <div class="ll-personajes-label">Algunos de sus personajes</div>
        <div class="ll-personajes-lista">${personajesDestacados.map(p => `<span>${escaparHtml(p.nombre)}</span>`).join('')}</div>
      </div>`
    : '';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: libro.titulo,
    description: descripcionCorta,
    image: urlOgImage,
    url: urlPagina,
    publisher: { '@type': 'Organization', name: 'Mythologica' }
  };

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KK7M7VG3');</script>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32.png">
    <link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escaparHtml(titulo)}</title>
    <meta name="description" content="${escaparHtml(descripcionCorta)}">
    <link rel="canonical" href="${urlPagina}">
    <meta name="robots" content="index, follow">
    <meta property="og:type" content="book">
    <meta property="og:url" content="${urlPagina}">
    <meta property="og:title" content="${escaparHtml(titulo)}">
    <meta property="og:description" content="${escaparHtml(descripcionCorta)}">
    <meta property="og:image" content="${urlOgImage}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escaparHtml(titulo)}">
    <meta name="twitter:description" content="${escaparHtml(descripcionCorta)}">
    <meta name="twitter:image" content="${urlOgImage}">
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    <script>(function(){ if(localStorage.getItem('mythologica_tema')==='claro') document.documentElement.setAttribute('data-theme','claro'); })();</script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;1,500&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/landing.css">
    <link rel="stylesheet" href="/css/libro-landing.css">
    </head>
    <body>
      <div class="lp-wrap">
        <header class="lp-header">
          <a class="lp-brand" href="/">MYTHOLOGICA</a>
          <a class="lp-header-cta" href="/">Ver todo el catálogo</a>
        </header>
      </div>

      <section class="ll-hero" style="background-image:linear-gradient(180deg, rgba(19,18,23,0.55), rgba(19,18,23,0.95)), url('${urlFondo}');">
        <div class="lp-wrap ll-hero-inner">
          <img class="ll-emblema" src="${urlEmblema}" alt="Emblema de ${escaparHtml(libro.titulo)}">
          <div class="ll-eyebrow">Mitología ilustrada</div>
          <h1>${escaparHtml(libro.titulo)}</h1>
          <p class="ll-subtitulo">${escaparHtml(libro.subtitulo || '')}</p>
        </div>
      </section>

      <div class="lp-wrap">
        <section class="ll-cuerpo">
          <p class="ll-descripcion">${escaparHtml(libro.descripcion || '')}</p>

          <div class="ll-stats">
            <div><strong>${conteos.personajes}</strong><span>personajes</span></div>
            <div><strong>${conteos.historias}</strong><span>historias</span></div>
          </div>

          ${personajesHtml}

          <div class="ll-cta-final">
            <a class="lp-cta-primary" href="${urlLector}">Empezar a leer →</a>
          </div>
        </section>
      </div>
    </body>
    </html>
  `;
}

router.get('/libro/:slug', async (req, res) => {
  try {
    const [librosEncontrados] = await pool.query(
      `SELECT id, slug, titulo, subtitulo, descripcion
       FROM libros WHERE slug = ? AND estado = 'publicado'`,
      [req.params.slug]
    );
    if (librosEncontrados.length === 0) {
      return res.status(404).type('html').send(paginaNoEncontrada());
    }
    const libro = librosEncontrados[0];

    const [filasPersonajes, filasHistorias, filasDestacados] = await Promise.all([
      pool.query('SELECT COUNT(*) AS total FROM personajes WHERE libro_id = ?', [libro.id]),
      pool.query('SELECT COUNT(*) AS total FROM historias WHERE libro_id = ?', [libro.id]),
      pool.query(
        `SELECT nombre FROM personajes WHERE libro_id = ? AND tipo = 'dios' ORDER BY nombre LIMIT 6`,
        [libro.id]
      )
    ]);
    const totalPersonajes = filasPersonajes[0][0].total;
    const totalHistorias = filasHistorias[0][0].total;

    let destacados = filasDestacados[0];
    if (destacados.length === 0) {
      const [otros] = await pool.query(
        'SELECT nombre FROM personajes WHERE libro_id = ? ORDER BY nombre LIMIT 6',
        [libro.id]
      );
      destacados = otros;
    }

    const html = construirHtmlPaginaLibro(
      libro,
      { personajes: totalPersonajes, historias: totalHistorias },
      destacados
    );
    res.type('html').send(html);
  } catch (error) {
    console.error('Error al armar la pagina del libro:', error);
    res.status(500).send('No se pudo cargar esta página.');
  }
});

module.exports = router;
