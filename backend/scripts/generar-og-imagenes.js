// ============================================================
// scripts/generar-og-imagenes.js
// ------------------------------------------------------------
// Genera la imagen de Open Graph (1200x630, la que se ve al
// compartir el link de un libro en redes/WhatsApp) para cada libro
// publicado, a partir de su "portada-fondo.jpg" + "portada-emblema.png"
// ya existentes. La usa routes/paginaLibro.js como og:image/twitter:image
// de GET /libro/<slug>.
//
// Mismo patron que scripts/generar-emblemas-simples.js: Puppeteer
// renderiza un HTML/CSS a resolucion alta (deviceScaleFactor) y saca
// un screenshot; sharp solo hace el resize/encode final. Las imagenes
// de fondo se pasan como data URI en vez de "file://" (mismo truco
// que "comoDataUriParaPdf" en routes/pdf.js) para no lidiar con el
// formato de rutas de archivo de Windows en el HTML temporal.
//
// COMO CORRERLO (desde backend/):
//   node scripts/generar-og-imagenes.js                  -> todos los libros publicados
//   node scripts/generar-og-imagenes.js mitologia-japonesa -> solo ese libro
// ============================================================

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const sharp = require('sharp');
const pool = require('../config/db');

const ANCHO = 1200;
const ALTO = 630;
const ESCALA = 2; // supersampling: se renderiza a 2400x1260 y se reduce a 1200x630 al final

async function comoDataUri(rutaArchivo, mimeType) {
  const buffer = await fs.promises.readFile(rutaArchivo);
  return `data:${mimeType};base64,${buffer.toString('base64')}`;
}

function construirHtml({ fondoDataUri, emblemaDataUri, titulo, subtitulo }) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  *{ margin:0; padding:0; box-sizing:border-box; }
  body{
    width:${ANCHO}px; height:${ALTO}px; overflow:hidden;
    background-image: linear-gradient(160deg, rgba(19,18,23,0.35), rgba(19,18,23,0.92)), url('${fondoDataUri}');
    background-size:cover; background-position:center;
    display:flex; flex-direction:column; justify-content:flex-end;
    padding:56px 64px; font-family:'IBM Plex Mono', monospace;
  }
  .marca{ color:#c9a24c; font-size:20px; font-weight:500; letter-spacing:3px; margin-bottom:auto; }
  .emblema{ width:96px; height:96px; border-radius:50%; border:2px solid #c9a24c; object-fit:cover; margin-bottom:22px; }
  .eyebrow{ color:#7a9186; font-size:15px; letter-spacing:3px; text-transform:uppercase; margin-bottom:14px; }
  h1{ font-family:'Fraunces', serif; font-weight:700; color:#ece8e0; font-size:58px; line-height:1.08; margin-bottom:14px; max-width:920px; }
  .subtitulo{ color:#a6a196; font-size:19px; max-width:820px; line-height:1.4; }
</style>
</head>
<body>
  <div class="marca">MYTHOLOGICA</div>
  <img class="emblema" src="${emblemaDataUri}">
  <div class="eyebrow">Mitología ilustrada</div>
  <h1>${titulo}</h1>
  <div class="subtitulo">${subtitulo || ''}</div>
</body>
</html>`;
}

async function generarUno(browser, libro) {
  const carpetaLibro = path.join(__dirname, '../public/images', libro.slug);
  const rutaFondo = path.join(carpetaLibro, 'portada-fondo.jpg');
  const rutaEmblema = path.join(carpetaLibro, 'portada-emblema.png');

  if (!fs.existsSync(rutaFondo) || !fs.existsSync(rutaEmblema)) {
    console.log(`  ! "${libro.slug}" no tiene portada-fondo.jpg y/o portada-emblema.png todavia, se salta.`);
    return;
  }

  const [fondoDataUri, emblemaDataUri] = await Promise.all([
    comoDataUri(rutaFondo, 'image/jpeg'),
    comoDataUri(rutaEmblema, 'image/png')
  ]);

  const html = construirHtml({
    fondoDataUri,
    emblemaDataUri,
    titulo: libro.titulo,
    subtitulo: libro.subtitulo
  });

  const htmlPath = path.join(__dirname, `_tmp-og-${libro.slug}.html`);
  fs.writeFileSync(htmlPath, html, 'utf8');

  const page = await browser.newPage();
  await page.setViewport({ width: ANCHO, height: ALTO, deviceScaleFactor: ESCALA });
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  const rawPath = path.join(__dirname, `_tmp-og-${libro.slug}-raw.png`);
  await page.screenshot({ path: rawPath });
  await page.close();

  const destino = path.join(carpetaLibro, 'og-image.jpg');
  await sharp(rawPath)
    .resize(ANCHO, ALTO)
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(destino);

  fs.unlinkSync(htmlPath);
  fs.unlinkSync(rawPath);

  console.log(`  - Imagen OG generada: ${destino}`);
}

async function main() {
  const filtro = process.argv[2];
  const [libros] = await pool.query(
    `SELECT slug, titulo, subtitulo FROM libros WHERE estado = 'publicado'${filtro ? ' AND slug = ?' : ''} ORDER BY slug ASC`,
    filtro ? [filtro] : []
  );
  if (filtro && libros.length === 0) {
    console.error(`No hay ningun libro publicado con slug "${filtro}".`);
    process.exit(1);
  }

  console.log(`Generando ${libros.length} imagen(es) de Open Graph...\n`);
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'] });
  for (const libro of libros) {
    await generarUno(browser, libro);
  }
  await browser.close();

  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
