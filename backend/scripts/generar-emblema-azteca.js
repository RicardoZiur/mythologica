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
//
// v2: formas SOLIDAS (rellenas), no solo trazo delgado -- la
// primera version usaba lineas finas para todo, y a esa escala
// (320px) el resultado se veia como un amasijo de hilos en vez de
// un simbolo reconocible. Ahora el cuerpo de cada elemento es una
// silueta rellena en dorado (como un escudo/crest), y el detalle
// interno (espinas, plumas) se graba encima con lineas negras
// finas -- mismo truco que un grabado en madera o una moneda.
function escenaCentral() {
  const solido = `fill="${GOLD}" stroke="none"`;
  const grabado = `fill="none" stroke="${BG}" stroke-width="1.6" stroke-linecap="round"`;
  const acento = `fill="none" stroke="${GOLD}" stroke-width="2" stroke-linecap="round"`;

  return `
    <g transform="translate(${CENTER},${CENTER})">

      <!-- suelo / islote -->
      <path d="M -30,101 Q 0,107 30,101" ${acento} />

      <!-- nopal: pala base (forma de raqueta, rellena) -->
      <path d="M -17,98 L -19,58 Q -19,30 0,28 Q 19,30 19,58 L 17,98 Q 0,104 -17,98 Z" ${solido} />
      <path d="M -13,50 l -5,-2 M -14,66 l -6,-1 M -14,84 l -6,-1 M 13,50 l 5,-2 M 14,66 l 6,-1 M 14,84 l 6,-1" ${grabado} />

      <!-- nopal: pala izquierda (rama ancha, rellena) -->
      <path d="M -10,58 C -28,55 -50,42 -60,16 C -52,10 -40,13 -31,22 C -19,35 -10,47 -7,58 Z" ${solido} />
      <path d="M -34,26 l -6,-3 M -47,15 l -6,-4" ${grabado} />

      <!-- nopal: pala derecha (espejo) -->
      <path d="M 10,58 C 28,55 50,42 60,16 C 52,10 40,13 31,22 C 19,35 10,47 7,58 Z" ${solido} />
      <path d="M 34,26 l 6,-3 M 47,15 l 6,-4" ${grabado} />

      <!-- garras sobre la pala base -->
      <path d="M -9,28 l -5,7 M -9,28 l 3,8 M 9,28 l 5,7 M 9,28 l -3,8" ${acento} stroke-width="2.2" />

      <!-- cuerpo del aguila (relleno) -->
      <path d="M -9,26 C -11,12 -10,-4 0,-18 C 10,-4 11,12 9,26 C 5,31 -5,31 -9,26 Z" ${solido} />

      <!-- cola, rellena -->
      <path d="M -7,24 C -8,33 -4,40 0,44 C 4,40 8,33 7,24 Z" ${solido} />

      <!-- ala izquierda: ovalo solido, mas horizontal que vertical para
           dejar libre la zona de arriba (cabeza) y de la derecha
           (serpiente) -->
      <ellipse cx="-40" cy="-19" rx="33" ry="11" transform="rotate(-16 -40 -19)" fill="${GOLD}" stroke="${BG}" stroke-width="1.8" />
      <path d="M -22,-14 L -48,-24 M -26,-8 L -52,-16" ${grabado} />

      <!-- ala derecha: espejo, corta para no invadir el camino de la serpiente -->
      <ellipse cx="34" cy="-16" rx="24" ry="9" transform="rotate(10 34 -16)" fill="${GOLD}" stroke="${BG}" stroke-width="1.8" />
      <path d="M 20,-13 L 42,-18 M 22,-8 L 46,-11" ${grabado} />

      <!-- cuello: trazo grueso solido, une el cuerpo con la cabeza -->
      <path d="M 0,-17 C -2,-26 -1,-34 3,-40" fill="none" stroke="${GOLD}" stroke-width="8" stroke-linecap="round" />

      <!-- cabeza -->
      <circle cx="5" cy="-41" r="9" ${solido} />
      <!-- pico, apuntando hacia la serpiente -->
      <path d="M 12,-40 L 27,-34 L 12,-31 Z" ${solido} />
      <!-- ojo, grabado -->
      <circle cx="7" cy="-43" r="1.6" fill="${BG}" />

      <!-- serpiente: cinta gruesa colgando del pico, con un borde oscuro
           fino para que quede separada del ala cuando se cruzan -->
      <path d="M 27,-33 C 48,-22 34,2 50,14 C 33,25 47,40 30,52" fill="none" stroke="${BG}" stroke-width="12.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 27,-33 C 48,-22 34,2 50,14 C 33,25 47,40 30,52" fill="none" stroke="${GOLD}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
      <!-- cabeza de la serpiente -->
      <ellipse cx="32" cy="58" rx="9.5" ry="6.8" transform="rotate(25 32 58)" fill="${GOLD}" stroke="${BG}" stroke-width="1.8" />
      <path d="M 36,64 l -2,7 M 36,64 l 4,6" ${acento} stroke-width="1.6" />
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
