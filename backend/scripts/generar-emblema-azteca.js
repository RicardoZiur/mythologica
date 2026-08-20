// ============================================================
// scripts/generar-emblema-azteca.js
// ------------------------------------------------------------
// Genera public/images/mitologia-azteca/portada-emblema.png
// (320x320, linea dorada sobre negro) con el mismo formato que
// los emblemas de los otros libros (ver p.ej.
// public/images/mitologia-griega/portada-emblema.png), pero con
// el motivo central del aguila sobre el nopal devorando la
// serpiente -- la imagen de la fundacion de Tenochtitlan, el
// mito mas reconocible del libro -- rodeada de un anillo
// escalonado (xicalcoliuhqui / greca mesoamericana) en vez del
// meandro griego o las runas nordicas de los otros emblemas.
//
// Se construye como SVG (para que el patron del anillo se pueda
// calcular con trigonometria en vez de escribirlo a mano) y se
// rasteriza con Puppeteer a 3x y se reduce con sharp a 320x320
// para que el trazo quede nitido.
//
// COMO CORRERLO (desde backend/):
//   node scripts/generar-emblema-azteca.js
// ============================================================

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const sharp = require('sharp');

const GOLD = '#c9a24c';
const BG = '#050403';
const SIZE = 320;
const CENTER = SIZE / 2;

// --- Anillo escalonado (xicalcoliuhqui) ------------------------
// Un poligono en zigzag que alterna entre r_out y r_mid en cada
// paso, mas un circulo interior de cierre -- el equivalente
// mesoamericano geometrico al meandro griego o las almenas de un
// templo escalonado.
function anilloEscalonado() {
  const N = 40; // cantidad de "dientes" alrededor del circulo
  const rOut = 148;
  const rMid = 136;
  const rIn = 126;
  const puntos = [];
  for (let i = 0; i <= N; i++) {
    const angulo = (i / N) * Math.PI * 2;
    const r = i % 2 === 0 ? rOut : rMid;
    const x = CENTER + r * Math.sin(angulo);
    const y = CENTER - r * Math.cos(angulo);
    puntos.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(2)},${y.toFixed(2)}`);
  }
  const zigzag = puntos.join(' ') + ' Z';

  return `
    <circle cx="${CENTER}" cy="${CENTER}" r="152" fill="none" stroke="${GOLD}" stroke-width="1.2" />
    <path d="${zigzag}" fill="none" stroke="${GOLD}" stroke-width="1.6" stroke-linejoin="round" />
    <circle cx="${CENTER}" cy="${CENTER}" r="${rIn}" fill="none" stroke="${GOLD}" stroke-width="1.2" />
    <circle cx="${CENTER}" cy="${CENTER}" r="112" fill="none" stroke="${GOLD}" stroke-width="0.8" />
  `;
}

// --- Escena central: aguila sobre el nopal devorando la serpiente
// Coordenadas locales centradas en (0,0), luego trasladadas al
// centro del lienzo con un <g transform="translate(...)">.
function escenaCentral() {
  return `
    <g transform="translate(${CENTER},${CENTER})" fill="none" stroke="${GOLD}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">

      <!-- suelo / islote -->
      <path d="M -28,99 Q 0,104 28,99" stroke-width="1.6" />

      <!-- nopal: pala base (forma de raqueta) -->
      <path d="M -15,96 L -17,60 Q -17,34 0,32 Q 17,34 17,60 L 15,96 Q 0,101 -15,96 Z" />
      <path d="M -12,52 l -5,-2 M -13,68 l -6,-1 M -13,84 l -6,-1 M 12,52 l 5,-2 M 13,68 l 6,-1 M 13,84 l 6,-1" stroke-width="1.1" />

      <!-- nopal: pala izquierda (rama ancha, bien separada del aguila) -->
      <path d="M -9,58 C -26,56 -46,44 -56,20 C -49,15 -38,18 -30,26 C -18,38 -10,48 -8,58 Z" />
      <path d="M -32,26 l -6,-3 M -44,16 l -6,-4" stroke-width="1.1" />

      <!-- nopal: pala derecha (espejo) -->
      <path d="M 9,58 C 26,56 46,44 56,20 C 49,15 38,18 30,26 C 18,38 10,48 8,58 Z" />
      <path d="M 32,26 l 6,-3 M 44,16 l 6,-4" stroke-width="1.1" />

      <!-- garras sobre la pala base, unicamente -->
      <path d="M -8,29 l -4,6 M -8,29 l 3,7 M 8,29 l 4,6 M 8,29 l -3,7" stroke-width="1.5" />

      <!-- cuerpo del aguila -->
      <path d="M -7,27 C -9,14 -8,0 0,-14 C 8,0 9,14 7,27 C 3,31 -3,31 -7,27 Z" />

      <!-- cola, compacta entre las patas -->
      <path d="M -5,25 C -6,32 -3,37 0,40 C 3,37 6,32 5,25" stroke-width="1.7" />

      <!-- ala izquierda: una sola forma de hoja/pluma alzada (mas legible que varias lineas finas) -->
      <path d="M -2,-13 C -20,-20 -38,-26 -50,-48 C -38,-36 -22,-24 -10,-15 Z" />
      <path d="M -12,-18 L -34,-34 M -18,-15 L -40,-27" stroke-width="1.2" />

      <!-- ala derecha: espejo -->
      <path d="M 2,-13 C 20,-20 38,-26 50,-48 C 38,-36 22,-24 10,-15 Z" />
      <path d="M 12,-18 L 34,-34 M 18,-15 L 40,-27" stroke-width="1.2" />

      <!-- cuello y cabeza -->
      <path d="M 0,-14 C -2,-24 -1,-33 3,-40" />
      <circle cx="5" cy="-39" r="7.5" />
      <!-- pico, mirando hacia la serpiente -->
      <path d="M 12,-38 L 25,-33 L 12,-31 Z" />

      <!-- serpiente: cuelga a la derecha, en el hueco entre el ala y el nopal -->
      <path d="M 25,-33 C 45,-24 30,-4 47,8 C 30,18 44,33 29,45" stroke-width="2.6" />
      <ellipse cx="32" cy="50" rx="7.5" ry="5.5" transform="rotate(25 32 50)" />
      <path d="M 35,55 l -2,7 M 35,55 l 4,6" stroke-width="1.3" />
    </g>
  `;
}

function construirSvg() {
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  html,body{ margin:0; padding:0; background:${BG}; }
  svg{ display:block; }
</style>
</head>
<body>
  <svg width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="${SIZE}" height="${SIZE}" fill="${BG}" />
    ${anilloEscalonado()}
    ${escenaCentral()}
  </svg>
</body>
</html>`;
}

async function main() {
  const carpetaSalida = path.join(__dirname, '../public/images/mitologia-azteca');
  if (!fs.existsSync(carpetaSalida)) fs.mkdirSync(carpetaSalida, { recursive: true });

  const htmlPath = path.join(__dirname, '_tmp-emblema-azteca.html');
  fs.writeFileSync(htmlPath, construirSvg(), 'utf8');

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: SIZE, height: SIZE, deviceScaleFactor: 3 });
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  const rawPath = path.join(__dirname, '_tmp-emblema-azteca-raw.png');
  await page.screenshot({ path: rawPath });
  await browser.close();

  const destino = path.join(carpetaSalida, 'portada-emblema.png');
  await sharp(rawPath)
    .resize(SIZE, SIZE, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(destino);

  fs.unlinkSync(htmlPath);
  fs.unlinkSync(rawPath);

  console.log(`Emblema generado: ${destino}`);
  process.exit(0);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
