// ============================================================
// scripts/descargar-imagenes.js
// ------------------------------------------------------------
// Este script hace 3 cosas por cada personaje de tu base de datos:
//   1. Busca en la API publica de Wikipedia una imagen para su nombre
//   2. Descarga esa imagen y la guarda en backend/public/images/
//   3. Actualiza el campo imagen_principal en la base de datos
//
// Es un SCRIPT, no un servidor: se corre una sola vez desde la
// terminal (no queda corriendo como server.js), hace su trabajo,
// y termina solo.
//
// COMO CORRERLO:
//   Desde la carpeta backend/, con el mismo Node que ya usas:
//   node scripts/descargar-imagenes.js
//
// Requiere Node 18 o superior (para tener "fetch" disponible sin
// instalar nada adicional). Si te da error de que "fetch" no existe,
// avisame y lo resolvemos.
// ============================================================

const fs = require('fs');
const path = require('path');
const pool = require('../config/db');

const CARPETA_IMAGENES = path.join(__dirname, '../public/images');
// Ruta relativa (no absoluta con dominio): asi sirve igual en local,
// en Railway o en cualquier dominio que use el sitio despues.
const URL_BASE_LOCAL = '/images';

// Pequeña pausa entre peticiones, para ser respetuosos con la API
// publica de Wikipedia y no saturarla de golpe.
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Busca en una Wikipedia (segun el "idioma") una imagen para un nombre dado.
// A diferencia de la version anterior, esta usa el BUSCADOR de Wikipedia
// (generator=search) en vez de pedir el titulo exacto — asi encuentra el
// articulo aunque el nombre no calce letra por letra con el titulo real.
async function buscarImagenEnWikipedia(nombre, idioma = 'es') {
  const termino = idioma === 'es'
    ? `${nombre} mitología griega`
    : `${nombre} Greek mythology`;

  const url = `https://${idioma}.wikipedia.org/w/api.php?` + new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: termino,
    gsrlimit: '1',       // solo nos interesa el primer resultado
    prop: 'pageimages',
    pithumbsize: '500',
    format: 'json'
  });

  const respuesta = await fetch(url);
  const data = await respuesta.json();

  const paginas = data.query?.pages;
  if (!paginas) return null;

  const pagina = Object.values(paginas)[0];
  return pagina?.thumbnail?.source || null;
}

// Intenta primero en Wikipedia en español; si no encuentra nada,
// reintenta en Wikipedia en ingles (que suele tener mas articulos
// ilustrados de mitologia).
async function buscarImagenConRespaldo(nombre) {
  let url = await buscarImagenEnWikipedia(nombre, 'es');
  if (url) return url;

  await esperar(200);
  return buscarImagenEnWikipedia(nombre, 'en');
}

// Descarga una imagen desde una URL y la guarda en disco
async function descargarImagen(url, rutaDestino) {
  const respuesta = await fetch(url);
  const arrayBuffer = await respuesta.arrayBuffer();
  fs.writeFileSync(rutaDestino, Buffer.from(arrayBuffer));
}

async function main() {
  // Nos aseguramos de que la carpeta de imagenes exista
  if (!fs.existsSync(CARPETA_IMAGENES)) {
    fs.mkdirSync(CARPETA_IMAGENES, { recursive: true });
  }

  const [personajes] = await pool.query('SELECT id, nombre, slug FROM personajes ORDER BY nombre ASC');

  console.log(`Encontrados ${personajes.length} personajes. Empezando busqueda de imagenes...\n`);

  let exitosos = 0;
  let fallidos = [];

  for (const personaje of personajes) {
    try {
      const urlImagen = await buscarImagenConRespaldo(personaje.nombre);

      if (!urlImagen) {
        console.log(`✗ ${personaje.nombre}: no se encontro imagen en Wikipedia`);
        fallidos.push(personaje.nombre);
        await esperar(300);
        continue;
      }

      // Guardamos siempre como .jpg por simplicidad, sin importar
      // el formato original (el navegador igual la muestra bien)
      const nombreArchivo = `${personaje.slug}.jpg`;
      const rutaDestino = path.join(CARPETA_IMAGENES, nombreArchivo);

      await descargarImagen(urlImagen, rutaDestino);

      // Actualizamos la base de datos con la URL local
      const urlLocal = `${URL_BASE_LOCAL}/${nombreArchivo}`;
      await pool.query('UPDATE personajes SET imagen_principal = ? WHERE id = ?', [urlLocal, personaje.id]);

      console.log(`✓ ${personaje.nombre}: imagen guardada`);
      exitosos++;

    } catch (error) {
      console.log(`✗ ${personaje.nombre}: error - ${error.message}`);
      fallidos.push(personaje.nombre);
    }

    // Pausa breve entre cada personaje para no saturar la API
    await esperar(300);
  }

  console.log(`\n=== Resumen ===`);
  console.log(`Imagenes descargadas: ${exitosos} / ${personajes.length}`);
  if (fallidos.length > 0) {
    console.log(`\nNo se encontraron imagenes para: ${fallidos.join(', ')}`);
    console.log(`Para estos, tendras que buscar la imagen manualmente y agregarla a mano.`);
  }

  process.exit(0); // cerramos el script (si no, se queda colgado por la conexion a MySQL)
}

main().catch(error => {
  console.error('Error general del script:', error);
  process.exit(1);
});
