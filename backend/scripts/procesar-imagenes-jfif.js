// ============================================================
// scripts/procesar-imagenes-jfif.js
// ------------------------------------------------------------
// Convierte a .jpg (o .png para el emblema) las imagenes .jfif que
// se hayan colocado a mano en public/images/<libro>/, y deja
// "imagen_principal" de cada personaje apuntando al archivo
// convertido -- es el mismo paso que hace la ruta de subida
// (routes/personajes.js POST /:slug/imagen), pero para cuando las
// imagenes se copian directo a la carpeta en vez de subirlas de a
// una por el formulario.
//
// COMO CORRERLO (desde backend/):
//   node scripts/procesar-imagenes-jfif.js <slug-del-libro>
//   node scripts/procesar-imagenes-jfif.js mitologia-egipcia
// ============================================================

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pool = require('../config/db');

const LIBRO_SLUG = process.argv[2];
if (!LIBRO_SLUG) {
  console.error('Uso: node scripts/procesar-imagenes-jfif.js <slug-del-libro>');
  process.exit(1);
}

const CARPETA = path.join(__dirname, '../public/images', LIBRO_SLUG);
const URL_BASE = `http://localhost:3001/images/${LIBRO_SLUG}`;

// Convierte "<nombreBase>.jfif" a "<nombreBase>.<extension>" en la misma
// carpeta (si el .jfif existe). Devuelve true si convirtio algo.
// (No borra el .jfif original: sharp/libvips en Windows a veces deja el
// archivo bloqueado un instante despues de leerlo, y el .jfif de sobra no
// molesta -- nada lo referencia una vez que existe el .jpg/.png.)
async function convertirJfif(nombreBase, extension, opcionesSharp) {
  const origen = path.join(CARPETA, `${nombreBase}.jfif`);
  if (!fs.existsSync(origen)) return false;

  const destino = path.join(CARPETA, `${nombreBase}.${extension}`);
  await opcionesSharp(sharp(origen)).toFile(destino);
  return true;
}

async function main() {
  if (!fs.existsSync(CARPETA)) {
    console.error(`No existe la carpeta ${CARPETA}`);
    process.exit(1);
  }

  // Portada: fondo (jpg) y emblema (png, para que combine con el
  // formato que ya usa el emblema griego en el resto del sitio).
  const fondoConvertido = await convertirJfif('portada-fondo', 'jpg', s => s.jpeg({ quality: 85, mozjpeg: true }));
  const emblemaConvertido = await convertirJfif('portada-emblema', 'png', s => s.png());
  console.log(`portada-fondo: ${fondoConvertido ? 'convertida' : 'sin cambios (no habia .jfif o ya era .jpg)'}`);
  console.log(`portada-emblema: ${emblemaConvertido ? 'convertida' : 'sin cambios (no habia .jfif o ya era .png)'}`);

  const [personajes] = await pool.query(
    `SELECT p.id, p.slug FROM personajes p JOIN libros l ON l.id = p.libro_id WHERE l.slug = ? ORDER BY p.nombre ASC`,
    [LIBRO_SLUG]
  );

  console.log(`\nEncontrados ${personajes.length} personajes en "${LIBRO_SLUG}". Procesando imagenes...\n`);

  let actualizados = 0;
  const sinImagen = [];

  for (const personaje of personajes) {
    await convertirJfif(personaje.slug, 'jpg', s => s.jpeg({ quality: 85, mozjpeg: true }));

    const rutaJpg = path.join(CARPETA, `${personaje.slug}.jpg`);
    if (fs.existsSync(rutaJpg)) {
      const url = `${URL_BASE}/${personaje.slug}.jpg`;
      await pool.query('UPDATE personajes SET imagen_principal = ? WHERE id = ?', [url, personaje.id]);
      console.log(`✓ ${personaje.slug}`);
      actualizados++;
    } else {
      sinImagen.push(personaje.slug);
    }
  }

  console.log(`\n=== Resumen ===`);
  console.log(`imagen_principal actualizado: ${actualizados} / ${personajes.length}`);
  if (sinImagen.length > 0) {
    console.log(`Sin imagen todavia: ${sinImagen.join(', ')}`);
  }

  process.exit(0);
}

main().catch(error => {
  console.error('Error general del script:', error);
  process.exit(1);
});
