// ============================================================
// scripts/generar-emblemas-simples.js
// ------------------------------------------------------------
// Regenera portada-emblema.png para Griega, Egipcia, Hindu y
// Nordica con el mismo patron simple y contundente que se uso
// para Mitologia Azteca (ver generar-emblema-azteca.js): un solo
// icono solido y reconocible en el centro (rayo, flor de loto,
// martillo, ankh) mas un anillo fino de marcas -- reemplazando
// los emblemas anteriores, generados con una IA externa, por algo
// mas simple y parejo entre los 5 libros del catalogo.
//
// COMO CORRERLO (desde backend/):
//   node scripts/generar-emblemas-simples.js
// ============================================================

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const sharp = require('sharp');

const GOLD = '#c9a24c';
const BG = '#050403';
const SIZE = 320;
const CENTER = SIZE / 2;

// --- Anillo de marcas radiales, comun a los 4 ------------------
// Mismo "patron" que el anillo interior del emblema azteco: una
// fila fareja de trazos cortos, para que los 5 libros compartan
// el mismo lenguaje de borde.
function anilloMarcas(r0, r1, N) {
  let out = '';
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    const x0 = CENTER + r0 * Math.sin(a), y0 = CENTER - r0 * Math.cos(a);
    const x1 = CENTER + r1 * Math.sin(a), y1 = CENTER - r1 * Math.cos(a);
    out += `<line x1="${x0.toFixed(2)}" y1="${y0.toFixed(2)}" x2="${x1.toFixed(2)}" y2="${y1.toFixed(2)}" stroke="${GOLD}" stroke-width="2.6" stroke-linecap="round" />`;
  }
  return out;
}

function circulo(r, stroke) {
  return `<circle cx="${CENTER}" cy="${CENTER}" r="${r}" fill="none" stroke="${GOLD}" stroke-width="${stroke}" />`;
}

// ---------------------------------------------------------------
// GRIEGA: el rayo de Zeus. Silueta solida en zigzag con dos
// pequenas aletas triangulares en las puntas (la forma clasica
// del rayo de Zeus, distinta de un simple emoji de rayo).
function iconoRayo() {
  const solido = `fill="${GOLD}" stroke="none"`;
  return `
    <g transform="translate(${CENTER},${CENTER})">
      <path d="M 10,-92 L -22,6 L 2,6 L -13,92 L 30,-8 L 4,-8 Z" ${solido} />
      <path d="M -22,6 L -40,-4 L -34,16 Z" ${solido} />
      <path d="M 30,-8 L 48,2 L 42,-18 Z" ${solido} />
    </g>
  `;
}

// ---------------------------------------------------------------
// HINDU: la flor de loto, vista desde arriba -- 8 petalos anchos
// calculados por trigonometria (mismo truco que los rayos y los
// brazos del Ollin del emblema azteca) mas un centro solido.
function iconoLoto() {
  const solido = `fill="${GOLD}" stroke="none"`;
  const N = 8;
  const rInner = 14;
  const rTip = 80;
  const medioAnchoGrados = 27;
  const spreadCtrlGrados = 15;
  const rCtrl = rTip * 0.82;
  let petalos = '';
  for (let i = 0; i < N; i++) {
    const anguloCentro = (i / N) * 360;
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
    petalos += `<path d="M ${x0},${y0} Q ${cx0},${cy0} ${xp},${yp} Q ${cx1},${cy1} ${x1},${y1} Z" ${solido} stroke="${BG}" stroke-width="1.6" stroke-linejoin="round" />`;
  }
  return `
    <g transform="translate(${CENTER},${CENTER})">
      ${petalos}
      <circle cx="0" cy="0" r="${rInner}" ${solido} stroke="${BG}" stroke-width="1.6" />
    </g>
  `;
}

// ---------------------------------------------------------------
// NORDICA: el martillo de Thor (Mjolnir). Cabeza trapezoidal solida
// mas mango corto con la argolla para la correa.
function iconoMartillo() {
  const solido = `fill="${GOLD}" stroke="none"`;
  return `
    <g transform="translate(${CENTER},${CENTER})">
      <path d="M -34,-78 L 34,-78 L 46,-14 L -46,-14 Z" ${solido} />
      <rect x="-12" y="-14" width="24" height="66" rx="4" ${solido} />
      <circle cx="0" cy="60" r="13" fill="none" stroke="${GOLD}" stroke-width="7" />
    </g>
  `;
}

// ---------------------------------------------------------------
// EGIPCIA: el ankh (cruz ansada), el simbolo mas reconocible de
// Egipto. Argolla como anillo grueso mas travesano y barra
// vertical solidos.
function iconoAnkh() {
  const solido = `fill="${GOLD}" stroke="none"`;
  return `
    <g transform="translate(${CENTER},${CENTER})">
      <circle cx="0" cy="-52" r="30" fill="none" stroke="${GOLD}" stroke-width="17" />
      <rect x="-10" y="-24" width="20" height="112" rx="3" ${solido} />
      <rect x="-46" y="2" width="92" height="17" rx="3" ${solido} />
    </g>
  `;
}

// ---------------------------------------------------------------
// SUMERIA: la estrella de ocho puntas de Inanna/Ishtar, el simbolo
// mesopotamico mas reconocible (sellos, joyeria, kudurru). Mismo
// truco trigonometrico que el loto, pero con puntas afiladas (sin
// curvas Q) en vez de petalos redondeados.
function iconoEstrella() {
  const solido = `fill="${GOLD}" stroke="none"`;
  const N = 8;
  const rInner = 20;
  const rTip = 84;
  const medioAnchoGrados = 14;
  let puntas = '';
  for (let i = 0; i < N; i++) {
    const anguloCentro = (i / N) * 360;
    const a0 = (anguloCentro - medioAnchoGrados) * Math.PI / 180;
    const a1 = (anguloCentro + medioAnchoGrados) * Math.PI / 180;
    const aC = anguloCentro * Math.PI / 180;
    const x0 = (rInner * Math.sin(a0)).toFixed(2), y0 = (-rInner * Math.cos(a0)).toFixed(2);
    const x1 = (rInner * Math.sin(a1)).toFixed(2), y1 = (-rInner * Math.cos(a1)).toFixed(2);
    const xp = (rTip * Math.sin(aC)).toFixed(2), yp = (-rTip * Math.cos(aC)).toFixed(2);
    puntas += `<path d="M ${x0},${y0} L ${xp},${yp} L ${x1},${y1} Z" ${solido} stroke="${BG}" stroke-width="1.6" stroke-linejoin="round" />`;
  }
  return `
    <g transform="translate(${CENTER},${CENTER})">
      ${puntas}
      <circle cx="0" cy="0" r="${rInner}" ${solido} stroke="${BG}" stroke-width="1.6" />
    </g>
  `;
}

// ---------------------------------------------------------------
// MAYA: la piramide escalonada (tipo El Castillo de Chichen Itza),
// el icono mas reconocible de la cultura maya -- silueta solida de
// cuatro cuerpos escalonados con la escalinata central marcada por
// un corte en negativo, mas un pequeno templo/remate en la cima.
function iconoPiramide() {
  const solido = `fill="${GOLD}" stroke="none"`;
  const niveles = 4;
  const anchoBase = 88;
  const anchoTope = 30;
  const altoTotal = 84;
  const altoNivel = altoTotal / niveles;
  const anchoEscalinata = 15;
  let cuerpos = '';
  for (let i = 0; i < niveles; i++) {
    const y0 = 40 - i * altoNivel;
    const y1 = y0 - altoNivel;
    const w0 = anchoBase - (anchoBase - anchoTope) * (i / niveles);
    const w1 = anchoBase - (anchoBase - anchoTope) * ((i + 1) / niveles);
    cuerpos += `<path d="M ${-w0 / 2},${y0} L ${-w1 / 2},${y1} L ${w1 / 2},${y1} L ${w0 / 2},${y0} Z" ${solido} stroke="${BG}" stroke-width="1.6" stroke-linejoin="round" />`;
  }
  const yTope = 40 - altoTotal;
  const escalinata = `<path d="M ${-anchoEscalinata / 2},40 L ${-anchoEscalinata * 0.32},${yTope} L ${anchoEscalinata * 0.32},${yTope} L ${anchoEscalinata / 2},40 Z" fill="${BG}" stroke="none" />`;
  const templo = `<rect x="${-anchoTope * 0.42}" y="${yTope - 16}" width="${anchoTope * 0.84}" height="16" ${solido} stroke="${BG}" stroke-width="1.6" />`;
  return `
    <g transform="translate(${CENTER},${CENTER})">
      ${cuerpos}
      ${escalinata}
      ${templo}
    </g>
  `;
}

// ---------------------------------------------------------------
// JAPONESA: el crisantemo imperial de dieciseis petalos (kikukamon),
// el sello mas reconocible de Japon y simbolo directo del linaje de
// Amaterasu. Mismo truco trigonometrico que el loto de 8 petalos,
// con el doble de petalos y puntas mas redondeadas y superpuestas.
function iconoCrisantemo() {
  const solido = `fill="${GOLD}" stroke="none"`;
  const N = 16;
  const rInner = 10;
  const rTip = 82;
  const medioAnchoGrados = 15;
  const spreadCtrlGrados = 9;
  const rCtrl = rTip * 0.86;
  let petalos = '';
  for (let i = 0; i < N; i++) {
    const anguloCentro = (i / N) * 360;
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
    petalos += `<path d="M ${x0},${y0} Q ${cx0},${cy0} ${xp},${yp} Q ${cx1},${cy1} ${x1},${y1} Z" ${solido} stroke="${BG}" stroke-width="1.4" stroke-linejoin="round" />`;
  }
  return `
    <g transform="translate(${CENTER},${CENTER})">
      ${petalos}
      <circle cx="0" cy="0" r="${rInner}" fill="${BG}" stroke="${GOLD}" stroke-width="3" />
    </g>
  `;
}

// ---------------------------------------------------------------
// CHINA: un dragon chino (long) enroscado en circulo, mordiendo o
// persiguiendo su propia cola -- el motivo mas reconocible de la
// mitologia china, construido a mano como una serie de segmentos
// serpenteantes en vez de con el truco trigonometrico de petalos.
function iconoDragon() {
  const solido = `fill="${GOLD}" stroke="none"`;
  const r = 78;
  const grosor = 15;
  const vueltas = 1.3;
  const pasos = 64;
  let cuerpo = '';
  const puntos = [];
  for (let i = 0; i <= pasos; i++) {
    const t = i / pasos;
    const angulo = t * Math.PI * 2 * vueltas - Math.PI / 2;
    const radio = r * (0.28 + 0.72 * t);
    const x = radio * Math.cos(angulo);
    const y = radio * Math.sin(angulo);
    puntos.push([x, y, t]);
  }
  for (let i = 0; i < puntos.length - 1; i++) {
    const [x0, y0, t0] = puntos[i];
    const [x1, y1] = puntos[i + 1];
    const ancho = grosor * (1 - t0 * 0.7);
    cuerpo += `<line x1="${x0.toFixed(2)}" y1="${y0.toFixed(2)}" x2="${x1.toFixed(2)}" y2="${y1.toFixed(2)}" stroke="${GOLD}" stroke-width="${ancho.toFixed(2)}" stroke-linecap="round" />`;
  }
  const [hx, hy, ] = puntos[puntos.length - 1];
  const [px, py] = puntos[puntos.length - 2];
  const anguloTangente = Math.atan2(hy - py, hx - px) * 180 / Math.PI;
  const cabeza = `
    <g transform="translate(${hx.toFixed(2)},${hy.toFixed(2)}) rotate(${anguloTangente.toFixed(1)})">
      <path d="M -6,-9 L 16,-4 L 20,3 L 14,9 L -6,9 Z" ${solido} />
      <path d="M 16,-4 L 26,-9 L 22,-1 Z" ${solido} />
      <path d="M -2,-9 L 2,-20 L 8,-9 Z" ${solido} />
      <path d="M 6,-9 L 12,-19 L 15,-8 Z" ${solido} />
    </g>
  `;
  return `
    <g transform="translate(${CENTER},${CENTER})">
      ${cuerpo}
      ${cabeza}
    </g>
  `;
}

// ---------------------------------------------------------------
// CELTA: el triskel (triple espiral celta), el simbolo mas antiguo
// y reconocible de toda la tradicion celta -- tres brazos espirales
// identicos con simetria de 120 grados, construidos con el mismo
// truco de segmentos barridos y grosor decreciente que el dragon
// chino, pero triplicados por rotacion en vez de enroscados en uno solo.
function iconoTriskel() {
  const grosorBase = 17;
  const vueltas = 0.72;
  const rMax = 92;
  const rMin = 12;
  const pasos = 40;
  const puntos = [];
  for (let i = 0; i <= pasos; i++) {
    const t = i / pasos;
    const angulo = t * Math.PI * 2 * vueltas;
    const radio = rMin + (rMax - rMin) * t;
    puntos.push([radio * Math.cos(angulo), radio * Math.sin(angulo), t]);
  }
  let brazo = '';
  for (let i = 0; i < puntos.length - 1; i++) {
    const [x0, y0, t0] = puntos[i];
    const [x1, y1] = puntos[i + 1];
    const ancho = grosorBase * (1 - t0 * 0.78);
    brazo += `<line x1="${x0.toFixed(2)}" y1="${y0.toFixed(2)}" x2="${x1.toFixed(2)}" y2="${y1.toFixed(2)}" stroke="${GOLD}" stroke-width="${ancho.toFixed(2)}" stroke-linecap="round" />`;
  }
  let brazos = '';
  for (let k = 0; k < 3; k++) {
    brazos += `<g transform="rotate(${k * 120})">${brazo}</g>`;
  }
  return `
    <g transform="translate(${CENTER},${CENTER})">
      ${brazos}
      <circle cx="0" cy="0" r="10" fill="${GOLD}" stroke="none" />
    </g>
  `;
}

// ---------------------------------------------------------------
// MAPUCHE: el kultrun, el tambor ceremonial sagrado de las machis,
// uno de los simbolos mas reconocibles de la cultura mapuche. Aro
// solido con la piel tensada (circulo interior) y la cruz de los
// cuatro puntos cardinales pintada sobre la piel, mas pequenos
// triangulos (representando montañas/rayos) alrededor del borde.
function iconoKultrun() {
  const solido = `fill="${GOLD}" stroke="none"`;
  const rAro = 86;
  const grosorAro = 10;
  const rPiel = rAro - grosorAro / 2 - 2;
  const rCruzInterior = 16;
  const rCruzExterior = rPiel - 8;
  let cruz = '';
  for (let i = 0; i < 4; i++) {
    const angulo = (i / 4) * Math.PI * 2;
    const x0 = rCruzInterior * Math.sin(angulo), y0 = -rCruzInterior * Math.cos(angulo);
    const x1 = rCruzExterior * Math.sin(angulo), y1 = -rCruzExterior * Math.cos(angulo);
    cruz += `<line x1="${x0.toFixed(2)}" y1="${y0.toFixed(2)}" x2="${x1.toFixed(2)}" y2="${y1.toFixed(2)}" stroke="${GOLD}" stroke-width="6" stroke-linecap="round" />`;
  }
  const N = 16;
  let dientes = '';
  for (let i = 0; i < N; i++) {
    const anguloCentro = (i / N) * 360;
    const medioAncho = 7;
    const a0 = (anguloCentro - medioAncho) * Math.PI / 180;
    const a1 = (anguloCentro + medioAncho) * Math.PI / 180;
    const aC = anguloCentro * Math.PI / 180;
    const rBase = rAro + grosorAro / 2;
    const rTip = rBase + 12;
    const x0 = (rBase * Math.sin(a0)).toFixed(2), y0 = (-rBase * Math.cos(a0)).toFixed(2);
    const x1 = (rBase * Math.sin(a1)).toFixed(2), y1 = (-rBase * Math.cos(a1)).toFixed(2);
    const xp = (rTip * Math.sin(aC)).toFixed(2), yp = (-rTip * Math.cos(aC)).toFixed(2);
    dientes += `<path d="M ${x0},${y0} L ${xp},${yp} L ${x1},${y1} Z" ${solido} />`;
  }
  return `
    <g transform="translate(${CENTER},${CENTER})">
      ${dientes}
      <circle cx="0" cy="0" r="${rAro}" fill="none" stroke="${GOLD}" stroke-width="${grosorAro}" />
      <circle cx="0" cy="0" r="${rPiel}" fill="${BG}" stroke="${GOLD}" stroke-width="2" />
      ${cruz}
      <circle cx="0" cy="0" r="9" ${solido} />
    </g>
  `;
}

const LIBROS = [
  { slug: 'mitologia-griega', icono: iconoRayo, rMarcas: [96, 108], nMarcas: 28 },
  { slug: 'mitologia-hindu', icono: iconoLoto, rMarcas: [96, 108], nMarcas: 28 },
  { slug: 'mitologia-nordica', icono: iconoMartillo, rMarcas: [96, 108], nMarcas: 28 },
  { slug: 'mitologia-egipcia', icono: iconoAnkh, rMarcas: [96, 108], nMarcas: 28 },
  { slug: 'mitologia-sumeria', icono: iconoEstrella, rMarcas: [96, 108], nMarcas: 28 },
  { slug: 'mitologia-maya', icono: iconoPiramide, rMarcas: [96, 108], nMarcas: 28 },
  { slug: 'mitologia-japonesa', icono: iconoCrisantemo, rMarcas: [96, 108], nMarcas: 28 },
  { slug: 'mitologia-china', icono: iconoDragon, rMarcas: [96, 108], nMarcas: 28 },
  { slug: 'mitologia-celta', icono: iconoTriskel, rMarcas: [96, 108], nMarcas: 28 },
  { slug: 'mitologia-mapuche', icono: iconoKultrun, rMarcas: [110, 122], nMarcas: 28 }
];

function construirSvg(libro) {
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
    ${circulo(118, 1.4)}
    ${anilloMarcas(libro.rMarcas[0], libro.rMarcas[1], libro.nMarcas)}
    ${circulo(84, 1)}
    ${libro.icono()}
  </svg>
</body>
</html>`;
}

async function generarUno(browser, libro) {
  const carpetaSalida = path.join(__dirname, '../public/images', libro.slug);
  if (!fs.existsSync(carpetaSalida)) fs.mkdirSync(carpetaSalida, { recursive: true });

  const htmlPath = path.join(__dirname, `_tmp-emblema-${libro.slug}.html`);
  fs.writeFileSync(htmlPath, construirSvg(libro), 'utf8');

  const page = await browser.newPage();
  await page.setViewport({ width: SIZE, height: SIZE, deviceScaleFactor: 3 });
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  const rawPath = path.join(__dirname, `_tmp-emblema-${libro.slug}-raw.png`);
  await page.screenshot({ path: rawPath });
  await page.close();

  const destino = path.join(carpetaSalida, 'portada-emblema.png');
  await sharp(rawPath)
    .resize(SIZE, SIZE, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(destino);

  fs.unlinkSync(htmlPath);
  fs.unlinkSync(rawPath);

  console.log(`Emblema generado: ${destino}`);
}

async function main() {
  // Filtro opcional por slug (ej. "node scripts/generar-emblemas-simples.js mitologia-sumeria")
  // para regenerar un solo libro sin tocar los que ya estan desplegados.
  const filtro = process.argv[2];
  const librosAGenerar = filtro ? LIBROS.filter(l => l.slug === filtro) : LIBROS;
  if (filtro && librosAGenerar.length === 0) {
    console.error(`No hay ningun libro con slug "${filtro}".`);
    process.exit(1);
  }

  const browser = await puppeteer.launch({ headless: 'new' });
  for (const libro of librosAGenerar) {
    await generarUno(browser, libro);
  }
  await browser.close();
  process.exit(0);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
