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

// --- Anillo de rayos puntiagudos (como un engranaje) -----------
// En la piedra real, justo alrededor del Nahui Ollin hay una
// corona de puntas triangulares parejas (el "anillo de rayos
// solares") antes de llegar a los signos de los dias -- distinta
// de los brazos anchos del Ollin y del zigzag exterior.
function anilloRayos() {
  const N = 24;
  const rBase = 100;
  const rPunta = 111;
  const medioAnchoGrados = (360 / N) * 0.34;
  let dientes = `<circle cx="${CENTER}" cy="${CENTER}" r="${rBase}" fill="none" stroke="${GOLD}" stroke-width="1.2" />`;
  for (let i = 0; i < N; i++) {
    const anguloCentro = (i / N) * 360;
    const a0 = (anguloCentro - medioAnchoGrados) * Math.PI / 180;
    const a1 = (anguloCentro + medioAnchoGrados) * Math.PI / 180;
    const aC = anguloCentro * Math.PI / 180;
    const x0 = CENTER + rBase * Math.sin(a0), y0 = CENTER - rBase * Math.cos(a0);
    const x1 = CENTER + rBase * Math.sin(a1), y1 = CENTER - rBase * Math.cos(a1);
    const xp = CENTER + rPunta * Math.sin(aC), yp = CENTER - rPunta * Math.cos(aC);
    dientes += `<path d="M ${x0.toFixed(2)},${y0.toFixed(2)} L ${xp.toFixed(2)},${yp.toFixed(2)} L ${x1.toFixed(2)},${y1.toFixed(2)} Z" fill="${GOLD}" stroke="none" />`;
  }
  return dientes;
}

// --- Anillo de glifos de los dias -----------------------------
// En la Piedra del Sol real, entre la corona de rayos y el borde
// hay una franja con los 20 signos de los dias del calendario.
// Replicar cada glifo exacto no es viable a esta escala, pero una
// hilera de 20 marcas rectangulares parejas, cada una orientada en
// forma radial, evoca esa franja sin pretender ser un facsimil.
function anilloGlifos() {
  const N = 20;
  const r = 118;
  let marcas = '';
  for (let i = 0; i < N; i++) {
    const angulo = (i / N) * 360;
    const a = angulo * Math.PI / 180;
    const x = CENTER + r * Math.sin(a);
    const y = CENTER - r * Math.cos(a);
    marcas += `<rect x="${(x - 4).toFixed(2)}" y="${(y - 5.5).toFixed(2)}" width="8" height="11" rx="1.5" transform="rotate(${angulo.toFixed(2)} ${x.toFixed(2)} ${y.toFixed(2)})" fill="none" stroke="${GOLD}" stroke-width="1.3" />`;
  }
  return marcas;
}

// --- Anillo de cuentas -----------------------------------------
// Una hilera fina de cuentas redondas, como las que separan la
// franja de los dias del borde exterior en la piedra real.
function anilloCuentas() {
  const N = 40;
  const r = 128;
  let cuentas = '';
  for (let i = 0; i < N; i++) {
    const angulo = (i / N) * Math.PI * 2;
    const x = CENTER + r * Math.sin(angulo);
    const y = CENTER - r * Math.cos(angulo);
    cuentas += `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="2" fill="${GOLD}" stroke="none" />`;
  }
  return cuentas;
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

  // "Nahui Ollin" (los cuatro movimientos): en la piedra real, la
  // cara de Tonatiuh esta enmarcada por 4 brazos anchos en las
  // diagonales, con punta redondeada -- no un sol de 8 picos
  // finos. Cada brazo se arma igual que un diente del anillo, pero
  // usando curvas Q hacia la punta en vez de un pico recto.
  const rInner = 46;
  const rTip = 98;
  const medioAnchoGrados = 21;
  const spreadCtrlGrados = 9;
  const rCtrl = rTip * 0.9;
  let brazos = '';
  [45, 135, 225, 315].forEach(anguloCentro => {
    const a0 = (anguloCentro - medioAnchoGrados) * Math.PI / 180;
    const a1 = (anguloCentro + medioAnchoGrados) * Math.PI / 180;
    const ac0 = (anguloCentro - spreadCtrlGrados) * Math.PI / 180;
    const ac1 = (anguloCentro + spreadCtrlGrados) * Math.PI / 180;
    const aC = anguloCentro * Math.PI / 180;
    const x0 = (rInner * Math.sin(a0)).toFixed(2), y0 = (-rInner * Math.cos(a0)).toFixed(2);
    const x1 = (rInner * Math.sin(a1)).toFixed(2), y1 = (-rInner * Math.cos(a1)).toFixed(2);
    const cx0 = (rCtrl * Math.sin(ac0)).toFixed(2), cy0 = (-rCtrl * Math.cos(ac0)).toFixed(2);
    const cx1 = (rCtrl * Math.sin(ac1)).toFixed(2), cy1 = (-rCtrl * Math.cos(ac1)).toFixed(2);
    const xp = (rTip * Math.sin(aC)).toFixed(2), yp = (-rTip * Math.cos(aC)).toFixed(2);
    brazos += `<path d="M ${x0},${y0} Q ${cx0},${cy0} ${xp},${yp} Q ${cx1},${cy1} ${x1},${y1} Z" ${solido} stroke="${BG}" stroke-width="1.4" stroke-linejoin="round" />`;
  });

  return `
    <g transform="translate(${CENTER},${CENTER})">

      <!-- brazos del Nahui Ollin, detras de la cara -->
      ${brazos}

      <!-- cara: disco solido -->
      <circle cx="0" cy="0" r="${rInner}" ${solido} stroke="${BG}" stroke-width="2.2" />

      <!-- cejas, grabadas -->
      <path d="M -30,-13 Q -19,-20 -8,-13" fill="none" stroke="${BG}" stroke-width="2.4" stroke-linecap="round" />
      <path d="M 30,-13 Q 19,-20 8,-13" fill="none" stroke="${BG}" stroke-width="2.4" stroke-linecap="round" />

      <!-- ojos: almendrados, huecos -->
      <path d="M -25,-8 Q -18,-14 -9,-8 Q -18,-3 -25,-8 Z" ${hueco} />
      <path d="M 25,-8 Q 18,-14 9,-8 Q 18,-3 25,-8 Z" ${hueco} />
      <circle cx="-17" cy="-8" r="2.4" ${solido} />
      <circle cx="17" cy="-8" r="2.4" ${solido} />

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
    ${anilloCuentas()}
    ${anilloGlifos()}
    ${anilloRayos()}
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
