// ============================================================
// routes/personajes.js
// ------------------------------------------------------------
// Aqui definimos los "endpoints" (URLs) relacionados a personajes.
// Un router de Express es como una mini aplicacion que despues
// "enchufamos" al servidor principal (server.js).
// ============================================================

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();       // creamos un router propio para este archivo
const pool = require('../config/db');  // importamos la conexion a MySQL que armamos antes
const { tieneNivel, resolverLibro } = require('../middleware/auth');

// ------------------------------------------------------------
// Configuracion de multer para la subida de imagenes de personajes.
// Guarda el archivo en backend/public/images/<slug-del-libro>/ (una
// subcarpeta por libro, para que cuando haya mas de un libro cada uno
// tenga sus propias imagenes separadas), nombrado como
// "<slug-del-personaje>.<extension>".
// ------------------------------------------------------------
const EXTENSION_POR_MIMETYPE = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp'
};

const storageImagenes = multer.diskStorage({
  destination: async (req, file, cb) => {
    try {
      const [filas] = await pool.query(
        `SELECT l.slug AS libro_slug FROM personajes p
         JOIN libros l ON l.id = p.libro_id
         WHERE p.slug = ?`,
        [req.params.slug]
      );
      if (filas.length === 0) return cb(new Error('Personaje no encontrado'));

      const carpeta = path.join(__dirname, '../public/images', filas[0].libro_slug);
      fs.mkdirSync(carpeta, { recursive: true });
      cb(null, carpeta);
    } catch (error) {
      cb(error);
    }
  },
  filename: (req, file, cb) => {
    const extension = EXTENSION_POR_MIMETYPE[file.mimetype];
    cb(null, `${req.params.slug}${extension}`);
  }
});

const uploadImagen = multer({
  storage: storageImagenes,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB maximo
  fileFilter: (req, file, cb) => {
    if (!EXTENSION_POR_MIMETYPE[file.mimetype]) {
      return cb(new Error('Formato no soportado. Usa JPG, PNG o WEBP.'));
    }
    cb(null, true);
  }
});

// ------------------------------------------------------------
// GET /api/personajes
// Devuelve la lista de TODOS los personajes (version resumida,
// sin todos los detalles) para mostrar, por ejemplo, en el
// indice del editor.
// Soporta un filtro opcional por tipo: /api/personajes?tipo=dios
// Y un filtro opcional de libro: /api/personajes?libro=<slug>
// (si no se manda, usa el libro por defecto -- ver middleware/auth.js --
// asi el frontend actual, que nunca manda "libro", sigue viendo solo
// los personajes del libro griego aunque mas adelante se agreguen otros).
// ------------------------------------------------------------
router.get('/', resolverLibro, async (req, res) => {
  try {
    const { tipo } = req.query; // req.query lee los parametros despues del "?" en la URL

    let sql = `
      SELECT id, tipo, nombre, epitetos, descripcion_corta, slug, es_preview
      FROM personajes
      WHERE libro_id = ?
    `;
    const params = [req.libro.id];

    // Si vino el filtro ?tipo=..., lo agregamos a la consulta de forma segura
    // (usando "?" y params, NUNCA concatenando texto directamente, para evitar
    // inyeccion SQL)
    if (tipo) {
      sql += ' AND tipo = ?';
      params.push(tipo);
    }

    sql += ' ORDER BY nombre ASC';

    // pool.query devuelve un arreglo: [filas, informacionExtra]
    // por eso "desestructuramos" y solo nos quedamos con las filas
    const [filas] = await pool.query(sql, params);

    res.json(filas); // Express convierte el arreglo de JS a JSON automaticamente
  } catch (error) {
    console.error('Error al obtener personajes:', error);
    res.status(500).json({ error: 'No se pudo obtener la lista de personajes' });
  }
});

// ------------------------------------------------------------
// GET /api/personajes/:slug
// Devuelve la ficha COMPLETA de un personaje: datos base,
// simbolos, poderes y familia. Es la consulta que alimenta
// la pagina tipo "ficha de personaje" del libro.
// El ":slug" es un parametro dinamico, ej: /api/personajes/medusa
// ------------------------------------------------------------
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    // 1. Datos base del personaje
    const [personajeRows] = await pool.query(
      'SELECT * FROM personajes WHERE slug = ?',
      [slug]
    );

    if (personajeRows.length === 0) {
      return res.status(404).json({ error: 'Personaje no encontrado' });
    }

    const personaje = personajeRows[0];

    // Control de acceso: si este personaje NO es parte de la muestra
    // gratuita (es_preview), hay que estar logueado con nivel
    // "flipbook" o superior (o ser admin) para ver su ficha completa.
    // Devolvemos igual los datos basicos (nombre, epitetos, tipo,
    // imagen) para que el frontend pueda mostrar una "hoja bloqueada"
    // con el nombre visible en vez de un error generico.
    if (!personaje.es_preview && !tieneNivel(req.usuario, personaje.libro_id, 'flipbook')) {
      return res.status(403).json({
        error: 'Contenido bloqueado',
        requiere: 'flipbook',
        bloqueado: true,
        nombre: personaje.nombre,
        epitetos: personaje.epitetos,
        tipo: personaje.tipo,
        slug: personaje.slug,
        imagen_principal: personaje.imagen_principal
      });
    }

    // 2. Simbolos asociados (usamos JOIN para traer el nombre del simbolo,
    // no solo su id)
    const [simbolos] = await pool.query(
      `SELECT s.id, s.nombre, s.icono_url
       FROM simbolos s
       JOIN personaje_simbolos ps ON ps.simbolo_id = s.id
       WHERE ps.personaje_id = ?`,
      [personaje.id]
    );

    // 3. Poderes del personaje, ordenados como los cargamos
    const [poderes] = await pool.query(
      'SELECT id, nombre, descripcion FROM poderes WHERE personaje_id = ? ORDER BY orden ASC',
      [personaje.id]
    );

    // 4. Familia / relaciones: traemos el nombre del personaje relacionado,
    // no solo su id, para no tener que hacer otra consulta despues
    const [familia] = await pool.query(
      `SELECT p.nombre, p.slug, rp.tipo_relacion
       FROM relaciones_personajes rp
       JOIN personajes p ON p.id = rp.personaje_relacionado_id
       WHERE rp.personaje_id = ?`,
      [personaje.id]
    );

    // 5. Historias en las que participa este personaje, con su rol.
    // Esto es lo que nos permite, desde la ficha de un personaje,
    // enlazar directo a las historias donde aparece.
    const [historias] = await pool.query(
      `SELECT h.titulo, h.slug, hp.rol
       FROM historia_personajes hp
       JOIN historias h ON h.id = hp.historia_id
       WHERE hp.personaje_id = ?`,
      [personaje.id]
    );

    // 6. Imagenes registradas para este personaje en la tabla "multimedia"
    // (con su licencia y texto alternativo). "imagen_principal" sigue
    // siendo el campo que usa el frontend para mostrar la portada; esto
    // es el detalle de procedencia/licencia de esa y otras imagenes.
    const [imagenes] = await pool.query(
      `SELECT id, url, texto_alt, licencia, orden
       FROM multimedia
       WHERE entidad_tipo = 'personaje' AND entidad_id = ? AND tipo = 'imagen'
       ORDER BY orden ASC`,
      [personaje.id]
    );

    // 7. Armamos un solo objeto de respuesta con todo junto.
    // El "..." (spread) copia todos los campos de "personaje"
    // y despues le agregamos los arreglos relacionados.
    res.json({
      ...personaje,
      simbolos,
      poderes,
      familia,
      historias,
      imagenes
    });
  } catch (error) {
    console.error('Error al obtener el personaje:', error);
    res.status(500).json({ error: 'No se pudo obtener el personaje' });
  }
});

// ------------------------------------------------------------
// POST /api/personajes/:slug/imagen
// Sube (o reemplaza) la imagen principal de un personaje.
// Espera un form-data con:
//   - "imagen": el archivo (JPG, PNG o WEBP, maximo 5MB)
//   - "licencia" (opcional): de donde sale la imagen y bajo que
//     licencia (ej. "Generada con IA (Leonardo.ai) - uso propio",
//     "Wikipedia - dominio publico", etc.)
//   - "texto_alt" (opcional): texto alternativo/accesibilidad
//
// Guarda el archivo en public/images/<slug>.<ext>, deja registro
// en la tabla "multimedia" (con su licencia) y actualiza
// personajes.imagen_principal para que el frontend la muestre.
// ------------------------------------------------------------
router.post('/:slug/imagen', uploadImagen.single('imagen'), async (req, res) => {
  try {
    const { slug } = req.params;

    if (!req.file) {
      return res.status(400).json({ error: 'Falta el archivo "imagen" en la peticion' });
    }

    const [personajeRows] = await pool.query(
      `SELECT p.id, l.slug AS libro_slug FROM personajes p
       JOIN libros l ON l.id = p.libro_id
       WHERE p.slug = ?`,
      [slug]
    );
    if (personajeRows.length === 0) {
      return res.status(404).json({ error: 'Personaje no encontrado' });
    }
    const personajeId = personajeRows[0].id;

    const urlPublica = `${req.protocol}://${req.get('host')}/images/${personajeRows[0].libro_slug}/${req.file.filename}`;
    const licencia = req.body.licencia || 'Generada con IA (uso propio, sin restricciones de terceros)';
    const textoAlt = req.body.texto_alt || slug;

    // Solo mantenemos UNA imagen principal (orden 0) por personaje en
    // multimedia por ahora: si ya existia, la reemplazamos.
    const [existente] = await pool.query(
      `SELECT id FROM multimedia
       WHERE entidad_tipo = 'personaje' AND entidad_id = ? AND tipo = 'imagen' AND orden = 0`,
      [personajeId]
    );

    if (existente.length > 0) {
      await pool.query(
        'UPDATE multimedia SET url = ?, texto_alt = ?, licencia = ? WHERE id = ?',
        [urlPublica, textoAlt, licencia, existente[0].id]
      );
    } else {
      await pool.query(
        `INSERT INTO multimedia (entidad_tipo, entidad_id, tipo, url, texto_alt, licencia, orden)
         VALUES ('personaje', ?, 'imagen', ?, ?, ?, 0)`,
        [personajeId, urlPublica, textoAlt, licencia]
      );
    }

    await pool.query('UPDATE personajes SET imagen_principal = ? WHERE id = ?', [urlPublica, personajeId]);

    res.json({ slug, url: urlPublica, licencia, texto_alt: textoAlt });
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    res.status(500).json({ error: 'No se pudo guardar la imagen' });
  }
});

module.exports = router;
