// ============================================================
// scripts/generar-iconos-pwa.js
// ------------------------------------------------------------
// Genera los iconos que pide el manifest de la PWA (192x192 y
// 512x512) a partir del mismo diseño que ya tiene
// frontend/img/apple-touch-icon.png (una "M" en Fraunces sobre el
// fondo oscuro de la marca) -- en vez de agrandar ese PNG existente
// (quedaria borroso, es de solo 180x180), se vuelve a renderizar
// nativamente a la resolucion final con Puppeteer, mismo patron que
// scripts/generar-emblemas-simples.js y generar-og-imagenes.js.
//
// La "M" queda bien adentro del lienzo (no toca los bordes) para que
// sirva tambien como icono "maskable": si el sistema operativo le
// aplica una mascara circular o de esquinas redondeadas, no corta
// ninguna parte del diseño.
//
// COMO CORRERLO (desde backend/):
//   node scripts/generar-iconos-pwa.js
// ============================================================

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const sharp = require('sharp');

const TAMANOS = [192, 512];
const ESCALA = 2; // supersampling, igual que los otros scripts de generacion de imagenes

function construirHtml(tamano) {
  // La "M" ocupa mas o menos el 45% del lienzo, dejando bastante aire
  // alrededor -- el mismo respiro que ya tiene apple-touch-icon.png,
  // pensado para que una mascara circular (icono "maskable") no la
  // corte.
  const tamanoFuente = Math.round(tamano * 0.5);
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700&display=swap" rel="stylesheet">
<style>
  *{ margin:0; padding:0; }
  body{
    width:${tamano}px; height:${tamano}px; background:#131217;
    display:flex; align-items:center; justify-content:center;
  }
  span{
    font-family:'Fraunces', serif; font-weight:700; color:#c9a24c;
    font-size:${tamanoFuente}px; line-height:1;
  }
</style>
</head>
<body><span>M</span></body>
</html>`;
}

async function generarUno(browser, tamano) {
  const htmlPath = path.join(__dirname, `_tmp-icono-${tamano}.html`);
  fs.writeFileSync(htmlPath, construirHtml(tamano), 'utf8');

  const page = await browser.newPage();
  await page.setViewport({ width: tamano, height: tamano, deviceScaleFactor: ESCALA });
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  const rawPath = path.join(__dirname, `_tmp-icono-${tamano}-raw.png`);
  await page.screenshot({ path: rawPath });
  await page.close();

  const destino = path.join(__dirname, '../frontend/img', `icon-${tamano}.png`);
  await sharp(rawPath).resize(tamano, tamano, { kernel: sharp.kernel.lanczos3 }).png().toFile(destino);

  fs.unlinkSync(htmlPath);
  fs.unlinkSync(rawPath);
  console.log(`  - Generado: ${destino}`);
}

async function main() {
  console.log('Generando iconos de la PWA...\n');
  const browser = await puppeteer.launch({ headless: 'new' });
  for (const tamano of TAMANOS) {
    await generarUno(browser, tamano);
  }
  await browser.close();
  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('\nError:', error);
  process.exit(1);
});
