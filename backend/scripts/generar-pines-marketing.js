// ============================================================
// scripts/generar-pines-marketing.js
// ------------------------------------------------------------
// Genera imagenes verticales (1000x1500, formato "pin" 2:3 que
// recomienda Pinterest, tambien sirve para posts de Instagram) para
// publicar en redes -- NO son parte del sitio, no se sirven por URL,
// solo se generan a disco para subirlas a mano. Dos tipos:
//
//   - Pin de libro: portada-fondo.jpg + emblema + titulo/subtitulo,
//     uno por cada libro publicado.
//   - Pin de personaje: imagen_principal de un personaje puntual +
//     su nombre, para el personaje/libro que se le pida por CLI.
//
// Mismo patron que scripts/generar-og-imagenes.js: Puppeteer renderiza
// HTML/CSS a resolucion alta (deviceScaleFactor) y hace el screenshot;
// sharp solo hace el resize/encode final. Imagenes de fondo como data
// URI (igual que "comoDataUriParaPdf" en routes/pdf.js) para no lidiar
// con rutas "file://" en Windows.
//
// COMO CORRERLO (desde backend/):
//   node scripts/generar-pines-marketing.js libro <slug-libro>
//   node scripts/generar-pines-marketing.js libro --todos
//   node scripts/generar-pines-marketing.js personaje <slug-libro> <slug-personaje>
//
// Los archivos quedan en scripts/_pines-marketing/ (no se commitea:
// son para descargar y publicar a mano, no para el sitio).
// ============================================================

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const sharp = require('sharp');
const pool = require('../config/db');

const ANCHO = 1000;
const ALTO = 1500;
const ESCALA = 2;
const CARPETA_SALIDA = path.join(__dirname, '_pines-marketing');

async function comoDataUri(rutaArchivo, mimeType) {
  const buffer = await fs.promises.readFile(rutaArchivo);
  return `data:${mimeType};base64,${buffer.toString('base64')}`;
}

const ESTILOS_BASE = `
  *{ margin:0; padding:0; box-sizing:border-box; }
  body{
    width:${ANCHO}px; height:${ALTO}px; overflow:hidden;
    display:flex; flex-direction:column; justify-content:flex-end;
    padding:70px 56px; font-family:'IBM Plex Mono', monospace;
    background-size:cover; background-position:center;
  }
  .marca{ color:#c9a24c; font-size:22px; font-weight:500; letter-spacing:3px; margin-bottom:auto; }
  .emblema{ width:88px; height:88px; border-radius:50%; border:2px solid #c9a24c; object-fit:cover; margin-bottom:26px; }
  .eyebrow{ color:#7a9186; font-size:17px; letter-spacing:3px; text-transform:uppercase; margin-bottom:16px; }
  h1{ font-family:'Fraunces', serif; font-weight:700; color:#ece8e0; font-size:64px; line-height:1.08; margin-bottom:16px; }
  .subtitulo{ color:#a6a196; font-size:20px; line-height:1.4; margin-bottom:30px; }
  .cta{ color:#726d63; font-size:14px; letter-spacing:1px; border-top:1px solid rgba(255,255,255,0.14); padding-top:18px; }
`;

function construirHtmlLibro({ fondoDataUri, emblemaDataUri, titulo, subtitulo }) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  ${ESTILOS_BASE}
  body{ background-image: linear-gradient(180deg, rgba(19,18,23,0.3), rgba(19,18,23,0.95)), url('${fondoDataUri}'); }
</style>
</head>
<body>
  <div class="marca">MYTHOLOGICA</div>
  <img class="emblema" src="${emblemaDataUri}">
  <div class="eyebrow">Mitología ilustrada</div>
  <h1>${titulo}</h1>
  <div class="subtitulo">${subtitulo || ''}</div>
  <div class="cta">Lee gratis en mythologica-digital.com</div>
</body>
</html>`;
}

function construirHtmlPersonaje({ fondoDataUri, emblemaDataUri, nombre, lineaSecundaria, libroTitulo }) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  ${ESTILOS_BASE}
  body{ background-image: linear-gradient(180deg, rgba(19,18,23,0.05) 40%, rgba(19,18,23,0.97)), url('${fondoDataUri}'); }
</style>
</head>
<body>
  <img class="emblema" src="${emblemaDataUri}">
  <div class="eyebrow">${lineaSecundaria}</div>
  <h1>${nombre}</h1>
  <div class="subtitulo">${libroTitulo}</div>
  <div class="cta">mythologica-digital.com</div>
</body>
</html>`;
}

async function renderizarYGuardar(browser, html, nombreArchivo) {
  if (!fs.existsSync(CARPETA_SALIDA)) fs.mkdirSync(CARPETA_SALIDA, { recursive: true });

  const htmlPath = path.join(__dirname, `_tmp-pin-${nombreArchivo}.html`);
  fs.writeFileSync(htmlPath, html, 'utf8');

  const page = await browser.newPage();
  await page.setViewport({ width: ANCHO, height: ALTO, deviceScaleFactor: ESCALA });
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  const rawPath = path.join(__dirname, `_tmp-pin-${nombreArchivo}-raw.png`);
  await page.screenshot({ path: rawPath });
  await page.close();

  const destino = path.join(CARPETA_SALIDA, `${nombreArchivo}.jpg`);
  await sharp(rawPath).resize(ANCHO, ALTO).jpeg({ quality: 88, mozjpeg: true }).toFile(destino);

  fs.unlinkSync(htmlPath);
  fs.unlinkSync(rawPath);
  console.log(`  - Generado: ${destino}`);
  return destino;
}

async function generarPinLibro(browser, libro) {
  const carpetaLibro = path.join(__dirname, '../public/images', libro.slug);
  const rutaFondo = path.join(carpetaLibro, 'portada-fondo.jpg');
  const rutaEmblema = path.join(carpetaLibro, 'portada-emblema.png');
  if (!fs.existsSync(rutaFondo) || !fs.existsSync(rutaEmblema)) {
    console.log(`  ! "${libro.slug}" no tiene portada-fondo/emblema todavia, se salta.`);
    return null;
  }
  const [fondoDataUri, emblemaDataUri] = await Promise.all([
    comoDataUri(rutaFondo, 'image/jpeg'),
    comoDataUri(rutaEmblema, 'image/png')
  ]);
  const html = construirHtmlLibro({ fondoDataUri, emblemaDataUri, titulo: libro.titulo, subtitulo: libro.subtitulo });
  return renderizarYGuardar(browser, html, `libro-${libro.slug}`);
}

async function generarPinPersonaje(browser, libro, personaje) {
  const rutaEmblema = path.join(__dirname, '../public/images', libro.slug, 'portada-emblema.png');
  const { pathname } = new URL(personaje.imagen_principal, 'http://localhost');
  const rutaImagen = path.join(__dirname, '../public', decodeURIComponent(pathname));
  if (!fs.existsSync(rutaImagen) || !fs.existsSync(rutaEmblema)) {
    console.log(`  ! Faltan imagenes para "${personaje.slug}", se salta.`);
    return null;
  }
  const [fondoDataUri, emblemaDataUri] = await Promise.all([
    comoDataUri(rutaImagen, 'image/jpeg'),
    comoDataUri(rutaEmblema, 'image/png')
  ]);
  const lineaSecundaria = personaje.epitetos || personaje.tipo.toUpperCase();
  const html = construirHtmlPersonaje({
    fondoDataUri, emblemaDataUri,
    nombre: personaje.nombre,
    lineaSecundaria,
    libroTitulo: `Mythologica · ${libro.titulo}`
  });
  return renderizarYGuardar(browser, html, `personaje-${libro.slug}-${personaje.slug}`);
}

async function main() {
  const [modo, ...resto] = process.argv.slice(2);
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'] });

  if (modo === 'libro') {
    const [slug] = resto;
    const [libros] = await pool.query(
      `SELECT slug, titulo, subtitulo FROM libros WHERE estado = 'publicado'${slug && slug !== '--todos' ? ' AND slug = ?' : ''} ORDER BY slug ASC`,
      slug && slug !== '--todos' ? [slug] : []
    );
    console.log(`Generando ${libros.length} pin(es) de libro...\n`);
    for (const libro of libros) await generarPinLibro(browser, libro);
  } else if (modo === 'personaje') {
    const [slugLibro, slugPersonaje] = resto;
    const [[libro]] = await pool.query('SELECT id, slug, titulo FROM libros WHERE slug = ?', [slugLibro]);
    if (!libro) { console.error(`No existe el libro "${slugLibro}".`); process.exit(1); }
    const [[personaje]] = await pool.query(
      'SELECT slug, nombre, tipo, epitetos, imagen_principal FROM personajes WHERE libro_id = ? AND slug = ?',
      [libro.id, slugPersonaje]
    );
    if (!personaje) { console.error(`No existe el personaje "${slugPersonaje}" en "${slugLibro}".`); process.exit(1); }
    console.log('Generando pin de personaje...\n');
    await generarPinPersonaje(browser, libro, personaje);
  } else {
    console.error('Uso: node scripts/generar-pines-marketing.js libro <slug|--todos>');
    console.error('     node scripts/generar-pines-marketing.js personaje <slug-libro> <slug-personaje>');
    process.exit(1);
  }

  await browser.close();
  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
