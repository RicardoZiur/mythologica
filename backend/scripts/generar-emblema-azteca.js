// ============================================================
// scripts/generar-emblema-azteca.js
// ------------------------------------------------------------
// Genera public/images/mitologia-azteca/portada-emblema.png
// (320x320, linea dorada sobre negro) con el mismo formato que
// los emblemas de los otros libros (ver p.ej.
// public/images/mitologia-griega/portada-emblema.png).
//
// v3: el motivo central paso de "aguila sobre el nopal" (dificil
// de leer a esta escala por ser una figura organica asimetrica) a
// la cara solar de la Piedra del Sol / Tonatiuh -- radialmente
// simetrica, así que es mucho mas facil que salga limpia y legible,
// y conecta directo con la cosmogonia del libro (Los Cinco Soles).
// Sigue rodeada del mismo anillo escalonado (xicalcoliuhqui /
// greca mesoamericana) en vez del meandro griego o las runas
// nordicas de los otros emblemas.
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

// --- Escena central: la cara solar de la Piedra del Sol (Tonatiuh)
// Coordenadas locales centradas en (0,0), luego trasladadas al
// centro del lienzo con un <g transform="translate(...)">.
//
// Al ser radialmente simetrica (rayos calculados por trigonometria,
// como el anillo exterior) es mucho mas facil que quede limpia a
// 320px que una figura organica como un aguila -- sin partes que
// se puedan pellizcar o fundirse entre si.
function escenaCentral() {
  const solido = `fill="${GOLD}" stroke="none"`;
  const hueco = `fill="${BG}" stroke="none"`;

  // Rayos solares: 8 puntas, alternando largas y cortas, calculadas
  // igual que los dientes del anillo exterior.
  const N = 8;
  const rInner = 44;
  const anchoBaseGrados = 14;
  let rayos = '';
  for (let i = 0; i < N; i++) {
    const anguloCentro = (i / N) * 360;
    const rPunta = i % 2 === 0 ? 98 : 76;
    const a0 = (anguloCentro - anchoBaseGrados) * Math.PI / 180;
    const a1 = (anguloCentro + anchoBaseGrados) * Math.PI / 180;
    const aC = anguloCentro * Math.PI / 180;
    const x0 = (rInner * Math.sin(a0)).toFixed(2), y0 = (-rInner * Math.cos(a0)).toFixed(2);
    const x1 = (rInner * Math.sin(a1)).toFixed(2), y1 = (-rInner * Math.cos(a1)).toFixed(2);
    const xp = (rPunta * Math.sin(aC)).toFixed(2), yp = (-rPunta * Math.cos(aC)).toFixed(2);
    rayos += `<path d="M ${x0},${y0} L ${xp},${yp} L ${x1},${y1} Z" ${solido} stroke="${BG}" stroke-width="1.4" stroke-linejoin="round" />`;
  }

  return `
    <g transform="translate(${CENTER},${CENTER})">

      <!-- rayos solares, detras de la cara -->
      ${rayos}

      <!-- cara: disco solido -->
      <circle cx="0" cy="0" r="${rInner}" ${solido} stroke="${BG}" stroke-width="2.2" />

      <!-- cejas / marco de los ojos, grabado -->
      <path d="M -30,-9 Q -20,-18 -10,-9" fill="none" stroke="${BG}" stroke-width="2.4" stroke-linecap="round" />
      <path d="M 30,-9 Q 20,-18 10,-9" fill="none" stroke="${BG}" stroke-width="2.4" stroke-linecap="round" />

      <!-- ojos: rombos huecos -->
      <rect x="-19" y="-15" width="15" height="15" transform="rotate(45 -11.5 -7.5)" ${hueco} />
      <rect x="4" y="-15" width="15" height="15" transform="rotate(45 11.5 -7.5)" ${hueco} />
      <circle cx="-11.5" cy="-7.5" r="2.6" ${solido} />
      <circle cx="11.5" cy="-7.5" r="2.6" ${solido} />

      <!-- nariz -->
      <path d="M -6,-2 L 6,-2 L 0,10 Z" ${hueco} />

      <!-- boca abierta, con dientes -->
      <rect x="-18" y="14" width="36" height="15" rx="3" ${hueco} />
      <rect x="-13" y="14" width="5" height="7" ${solido} />
      <rect x="-4.5" y="14" width="5" height="7" ${solido} />
      <rect x="4" y="14" width="5" height="7" ${solido} />
      <rect x="12.5" y="14" width="5" height="7" ${solido} />

      <!-- lengua: cuchillo de pedernal (tecpatl) asomando de la boca -->
      <path d="M -7,29 L 7,29 L 4,44 L 0,50 L -4,44 Z" ${solido} stroke="${BG}" stroke-width="1.6" stroke-linejoin="round" />

      <!-- adornos laterales (orejeras), simples y solidos -->
      <circle cx="-40" cy="6" r="8" ${solido} stroke="${BG}" stroke-width="1.8" />
      <circle cx="40" cy="6" r="8" ${solido} stroke="${BG}" stroke-width="1.8" />
      <circle cx="-40" cy="6" r="2.6" ${hueco} />
      <circle cx="40" cy="6" r="2.6" ${hueco} />
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
