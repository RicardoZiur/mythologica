// ============================================================
// scripts/generar-emblema-azteca.js
// ------------------------------------------------------------
// Genera public/images/mitologia-azteca/portada-emblema.png
// (320x320, dorado sobre negro) con el mismo formato que los
// emblemas de los otros libros (ver p.ej.
// public/images/mitologia-griega/portada-emblema.png).
//
// v7: el usuario mando un icono de referencia (sol abstracto,
// estilo flat-icon): punto central, anillo de marcas radiales,
// anillo de ganchos en espiral, y anillo exterior de rayos
// organicos de largo irregular. Sin cara, sin anillos concentricos
// "realistas" como las versiones anteriores que imitaban la Piedra
// del Sol -- esta calca la composicion exacta de esa referencia.
//
// Se construye como SVG (todo calculado por trigonometria, para
// que cada anillo salga parejo sin ajustar coordenadas a mano) y
// se rasteriza con Puppeteer a 3x, reducido con sharp a 320x320
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

// --- Anillo exterior de rayos organicos -------------------------
// Petalos con punta redondeada (curvas Q, no picos rectos), largo
// variable entre ellos para el efecto "irregular a mano" de la
// referencia en vez de un sol de picos todos iguales.
function anilloRayos() {
  const N = 18;
  const rInner = 90;
  const largos = [132, 145, 136, 148, 130, 142];
  const medioAnchoGrados = (360 / N) * 0.32;
  const spreadCtrlGrados = medioAnchoGrados * 0.45;
  let out = '';
  for (let i = 0; i < N; i++) {
    const anguloCentro = (i / N) * 360;
    const rPunta = largos[i % largos.length];
    const rCtrl = rPunta * 0.92;
    const a0 = (anguloCentro - medioAnchoGrados) * Math.PI / 180;
    const a1 = (anguloCentro + medioAnchoGrados) * Math.PI / 180;
    const ac0 = (anguloCentro - spreadCtrlGrados) * Math.PI / 180;
    const ac1 = (anguloCentro + spreadCtrlGrados) * Math.PI / 180;
    const aC = anguloCentro * Math.PI / 180;
    const x0 = CENTER + rInner * Math.sin(a0), y0 = CENTER - rInner * Math.cos(a0);
    const x1 = CENTER + rInner * Math.sin(a1), y1 = CENTER - rInner * Math.cos(a1);
    const cx0 = CENTER + rCtrl * Math.sin(ac0), cy0 = CENTER - rCtrl * Math.cos(ac0);
    const cx1 = CENTER + rCtrl * Math.sin(ac1), cy1 = CENTER - rCtrl * Math.cos(ac1);
    const xp = CENTER + rPunta * Math.sin(aC), yp = CENTER - rPunta * Math.cos(aC);
    out += `<path d="M ${x0.toFixed(2)},${y0.toFixed(2)} Q ${cx0.toFixed(2)},${cy0.toFixed(2)} ${xp.toFixed(2)},${yp.toFixed(2)} Q ${cx1.toFixed(2)},${cy1.toFixed(2)} ${x1.toFixed(2)},${y1.toFixed(2)} Z" fill="${GOLD}" stroke="none" />`;
  }
  return out;
}

// --- Anillo de ganchos en espiral --------------------------------
// Cada unidad es una cola curva (trazo grueso) que termina en un
// circulo -- una espiral simplificada tipo "coma", repetida
// alrededor del anillo. Mismo espiritu que la greca escalonada de
// las versiones anteriores, pero curva en vez de angular, para
// calcar la referencia.
function anilloGanchos() {
  const N = 10;
  let out = '';
  for (let i = 0; i < N; i++) {
    const angulo = (i / N) * 360;
    out += `
      <g transform="translate(${CENTER},${CENTER}) rotate(${angulo})">
        <path d="M 0,-80 Q -21,-70 -17,-59" fill="none" stroke="${GOLD}" stroke-width="7.5" stroke-linecap="round" />
        <circle cx="-18" cy="-56" r="8" fill="${GOLD}" stroke="none" />
      </g>
    `;
  }
  return out;
}

// --- Anillo de marcas radiales -----------------------------------
// Una fila fina de trazos cortos, como los "tics" de un reloj,
// entre el punto central y el anillo de ganchos.
function anilloMarcas() {
  const N = 20;
  const r0 = 28, r1 = 39;
  let out = '';
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    const x0 = CENTER + r0 * Math.sin(a), y0 = CENTER - r0 * Math.cos(a);
    const x1 = CENTER + r1 * Math.sin(a), y1 = CENTER - r1 * Math.cos(a);
    out += `<line x1="${x0.toFixed(2)}" y1="${y0.toFixed(2)}" x2="${x1.toFixed(2)}" y2="${y1.toFixed(2)}" stroke="${GOLD}" stroke-width="2.8" stroke-linecap="round" />`;
  }
  return out;
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
    ${anilloRayos()}
    ${anilloGanchos()}
    ${anilloMarcas()}
    <circle cx="${CENTER}" cy="${CENTER}" r="16" fill="${GOLD}" stroke="none" />
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
