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

// --- Escena central: insignia compacta al estilo del dibujo de
// referencia que mando el usuario (contorno de 4 lobulos con
// paneles, no anillos concentricos como la piedra real) ----------
// Coordenadas locales centradas en (0,0), luego trasladadas al
// centro del lienzo con un <g transform="translate(...)">. El
// fondo negro alrededor no molesta: el circulo dorado fino que
// dibuja anilloEscalonado ya marca el borde del medallon, y todo
// lo que sobre dentro de ese circulo se ve como espacio vacio del
// mismo color que el resto de la pagina.
function escenaCentral() {
  const solido = `fill="${GOLD}" stroke="none"`;
  const hueco = `fill="${BG}" stroke="none"`;
  const linea = `fill="none" stroke="${GOLD}" stroke-width="2.4" stroke-linecap="round"`;

  // Los 4 paneles con un glifo simple (punto - barra - punto) en
  // las diagonales, igual que los 4 recuadros con los soles
  // anteriores que enmarcan la cara en el dibujo de referencia.
  let paneles = '';
  [45, 135, 225, 315].forEach(angulo => {
    const a = angulo * Math.PI / 180;
    const cx = 72 * Math.sin(a), cy = -72 * Math.cos(a);
    paneles += `
      <g transform="translate(${cx.toFixed(2)},${cy.toFixed(2)}) rotate(${angulo})">
        <rect x="-19" y="-22" width="38" height="44" rx="5" fill="none" stroke="${GOLD}" stroke-width="2.4" />
        <circle cx="0" cy="-10" r="3.2" ${solido} />
        <rect x="-8" y="-2" width="16" height="6" rx="2" ${solido} />
        <circle cx="0" cy="12" r="3.2" ${solido} />
      </g>
    `;
  });

  // Ganchos/espirales que rellenan los huecos entre paneles (arriba,
  // abajo y a los costados), como el grequizado que conecta los
  // paneles en la referencia.
  let ganchos = '';
  [0, 90, 180, 270].forEach(angulo => {
    const a = angulo * Math.PI / 180;
    const cx = 66 * Math.sin(a), cy = -66 * Math.cos(a);
    ganchos += `
      <g transform="translate(${cx.toFixed(2)},${cy.toFixed(2)}) rotate(${angulo})">
        <path d="M -11,12 Q -16,-2 -1,-4 Q 12,-6 10,-16" fill="none" stroke="${GOLD}" stroke-width="3.2" stroke-linecap="round" />
      </g>
    `;
  });

  return `
    <g transform="translate(${CENTER},${CENTER})">

      <!-- garras inferiores, como en la referencia -->
      <path d="M -58,64 Q -80,58 -86,74 Q -73,70 -68,80 Q -78,84 -74,94 Q -58,90 -52,76 Z" ${solido} stroke="${BG}" stroke-width="1.6" stroke-linejoin="round" />
      <path d="M 58,64 Q 80,58 86,74 Q 73,70 68,80 Q 78,84 74,94 Q 58,90 52,76 Z" ${solido} stroke="${BG}" stroke-width="1.6" stroke-linejoin="round" />

      <!-- corona/penacho arriba de la cara -->
      <path d="M -13,-80 L 0,-104 L 13,-80 Z" ${solido} stroke="${BG}" stroke-width="1.6" stroke-linejoin="round" />
      <path d="M -22,-72 Q -32,-82 -22,-90 Q -22,-78 -14,-74 Z" ${solido} stroke="${BG}" stroke-width="1.4" stroke-linejoin="round" />
      <path d="M 22,-72 Q 32,-82 22,-90 Q 22,-78 14,-74 Z" ${solido} stroke="${BG}" stroke-width="1.4" stroke-linejoin="round" />

      <!-- ganchos entre paneles -->
      ${ganchos}

      <!-- paneles de los 4 soles -->
      ${paneles}

      <!-- cara: disco solido -->
      <circle cx="0" cy="0" r="42" ${solido} stroke="${BG}" stroke-width="2.2" />

      <!-- vincha con 3 plumas, sobre la frente -->
      <rect x="-20" y="-38" width="40" height="7" rx="2" ${hueco} />
      <rect x="-10" y="-46" width="5" height="9" rx="1.5" ${hueco} />
      <rect x="-2.5" y="-49" width="5" height="12" rx="1.5" ${hueco} />
      <rect x="5" y="-46" width="5" height="9" rx="1.5" ${hueco} />

      <!-- cejas, grabadas -->
      <path d="M -27,-12 Q -18,-18 -9,-12" fill="none" stroke="${BG}" stroke-width="2.2" stroke-linecap="round" />
      <path d="M 27,-12 Q 18,-18 9,-12" fill="none" stroke="${BG}" stroke-width="2.2" stroke-linecap="round" />

      <!-- ojos: almendrados, huecos -->
      <path d="M -23,-7 Q -17,-13 -8,-7 Q -17,-2 -23,-7 Z" ${hueco} />
      <path d="M 23,-7 Q 17,-13 8,-7 Q 17,-2 23,-7 Z" ${hueco} />
      <circle cx="-15.5" cy="-7" r="2.2" ${solido} />
      <circle cx="15.5" cy="-7" r="2.2" ${solido} />

      <!-- nariz -->
      <path d="M -5,-1 L 5,-1 L 0,9 Z" ${hueco} />

      <!-- boca abierta, con dientes -->
      <rect x="-16" y="13" width="32" height="13" rx="3" ${hueco} />
      <rect x="-12" y="13" width="4.5" height="6" ${solido} />
      <rect x="-4" y="13" width="4.5" height="6" ${solido} />
      <rect x="3.5" y="13" width="4.5" height="6" ${solido} />
      <rect x="11" y="13" width="4.5" height="6" ${solido} />

      <!-- lengua: cuchillo de pedernal (tecpatl) asomando de la boca -->
      <path d="M -6,26 L 6,26 L 3.5,38 L 0,43 L -3.5,38 Z" ${solido} stroke="${BG}" stroke-width="1.5" stroke-linejoin="round" />

      <!-- orejeras -->
      <circle cx="-37" cy="4" r="7" ${solido} stroke="${BG}" stroke-width="1.6" />
      <circle cx="37" cy="4" r="7" ${solido} stroke="${BG}" stroke-width="1.6" />
      <circle cx="-37" cy="4" r="2.3" ${hueco} />
      <circle cx="37" cy="4" r="2.3" ${hueco} />
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
