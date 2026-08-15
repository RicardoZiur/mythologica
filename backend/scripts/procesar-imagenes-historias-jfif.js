// ============================================================
// scripts/procesar-imagenes-historias-jfif.js
// ------------------------------------------------------------
// Igual que procesar-imagenes-jfif.js (personajes/portada), pero para
// los banners de historias: convierte a .jpg los .jfif que se hayan
// colocado a mano en public/images/<libro>/historias/, y deja
// "historias.imagen_url" apuntando al archivo convertido -- mismo
// mecanismo manual que scripts/migrar-imagenes-historias.js usa para
// el griego (no hay endpoint de subida propio para banners de
// historia todavia).
//
// COMO CORRERLO (desde backend/):
//   node scripts/procesar-imagenes-historias-jfif.js <slug-del-libro>
//   node scripts/procesar-imagenes-historias-jfif.js mitologia-egipcia
// ============================================================

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pool = require('../config/db');

const LIBRO_SLUG = process.argv[2];
if (!LIBRO_SLUG) {
  console.error('Uso: node scripts/procesar-imagenes-historias-jfif.js <slug-del-libro>');
  process.exit(1);
}

const CARPETA = path.join(__dirname, '../public/images', LIBRO_SLUG, 'historias');
// Ruta relativa (no absoluta con dominio): asi sirve igual en local,
// en Railway o en cualquier dominio que use el sitio despues, sin
// tener que volver a correr esto si el dominio cambia.
const URL_BASE = `/images/${LIBRO_SLUG}/historias`;

// Mismo criterio que procesar-imagenes-jfif.js: no borra el .jfif
// original (sharp/libvips en Windows a veces lo deja bloqueado un
// instante despues de leerlo), y no molesta dejarlo -- nada lo
// referencia una vez que existe el .jpg.
async function convertirJfifAJpg(nombreBase) {
  const origen = path.join(CARPETA, `${nombreBase}.jfif`);
  if (!fs.existsSync(origen)) return false;

  const destino = path.join(CARPETA, `${nombreBase}.jpg`);
  await sharp(origen).jpeg({ quality: 85, mozjpeg: true }).toFile(destino);
  return true;
}

async function main() {
  if (!fs.existsSync(CARPETA)) {
    console.error(`No existe la carpeta ${CARPETA}`);
    process.exit(1);
  }

  const [historias] = await pool.query(
    `SELECT h.id, h.slug FROM historias h JOIN libros l ON l.id = h.libro_id WHERE l.slug = ? ORDER BY h.id ASC`,
    [LIBRO_SLUG]
  );

  console.log(`Encontradas ${historias.length} historias en "${LIBRO_SLUG}". Procesando imagenes...\n`);

  let actualizadas = 0;
  const sinImagen = [];

  for (const historia of historias) {
    await convertirJfifAJpg(historia.slug);

    const rutaJpg = path.join(CARPETA, `${historia.slug}.jpg`);
    if (fs.existsSync(rutaJpg)) {
      const url = `${URL_BASE}/${historia.slug}.jpg`;
      await pool.query('UPDATE historias SET imagen_url = ? WHERE id = ?', [url, historia.id]);
      console.log(`✓ ${historia.slug}`);
      actualizadas++;
    } else {
      sinImagen.push(historia.slug);
    }
  }

  console.log(`\n=== Resumen ===`);
  console.log(`imagen_url actualizado: ${actualizadas} / ${historias.length}`);
  if (sinImagen.length > 0) {
    console.log(`Sin imagen todavia: ${sinImagen.join(', ')}`);
  }

  process.exit(0);
}

main().catch((error) => {
  console.error('Error general del script:', error);
  process.exit(1);
});
