// ============================================================
// routes/pdf.js
// ------------------------------------------------------------
// Esta ruta arma el libro COMPLETO como un documento HTML largo
// (no como el flipbook interactivo, sino como paginas normales,
// una despues de otra) y usa Puppeteer -un Chrome invisible que
// corre en el servidor- para "imprimirlo" a un archivo PDF real.
//
// La ventaja de este enfoque es que el PDF se ve EXACTAMENTE
// como el HTML/CSS que diseñamos, con la misma tipografia,
// colores y sellos, en vez de una captura de pantalla fea.
// ============================================================

const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs/promises');
const sharp = require('sharp');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const { requiereNivel } = require('../middleware/auth');

// ------------------------------------------------------------
// IMAGENES: de URL a data URI liviano, ANTES de imprimir
// ------------------------------------------------------------
// Chrome (via Puppeteer) no reusa el JPEG original al "imprimir" a
// PDF: rasteriza cada imagen tal cual la carga y la vuelve a
// codificar, y para fotos eso puede inflar el peso ~10x (un retrato
// de 150KB terminaba pesando >1.5MB DENTRO del PDF). La solucion no es
// evitar que Chrome haga eso -- es no darle de comer una imagen mas
// grande de lo que realmente se va a ver impresa: la recortamos al
// tamaño real del recuadro (con margen para que no se vea pixelada) y
// la recomprimimos ANTES, como data URI embebido en el HTML.
const CACHE_IMAGENES_PDF = new Map();

async function comoDataUriParaPdf(urlAbsoluta, anchoObjetivo, altoObjetivo) {
  if (!urlAbsoluta) return null;
  const claveCache = `${urlAbsoluta}|${anchoObjetivo}x${altoObjetivo}`;
  if (CACHE_IMAGENES_PDF.has(claveCache)) return CACHE_IMAGENES_PDF.get(claveCache);

  try {
    const { pathname } = new URL(urlAbsoluta);
    const rutaArchivo = path.join(__dirname, '..', 'public', decodeURIComponent(pathname));
    const buffer = await fs.readFile(rutaArchivo);
    const jpeg = await sharp(buffer)
      .resize(anchoObjetivo, altoObjetivo, { fit: 'cover' })
      .jpeg({ quality: 78, mozjpeg: true })
      .toBuffer();
    const dataUri = `data:image/jpeg;base64,${jpeg.toString('base64')}`;
    CACHE_IMAGENES_PDF.set(claveCache, dataUri);
    return dataUri;
  } catch (error) {
    console.error('No se pudo preparar imagen para el PDF:', urlAbsoluta, error.message);
    return null;
  }
}

// Los retratos/banners se ven a 200x280 / ancho-completo x260 en el
// HTML del PDF (ver .retrato/.historia-banner en construirEstilos);
// generamos las imagenes a ~2x ese tamaño para que se vean nitidas
// impresas sin quedar tan pesadas como el original sin recortar.
async function prepararImagenesPdf(historias, personajes) {
  await Promise.all([
    ...personajes.map(async (p) => {
      p.imagen_principal = await comoDataUriParaPdf(p.imagen_principal, 400, 560);
    }),
    ...historias.map(async (h) => {
      h.imagen_url = await comoDataUriParaPdf(h.imagen_url, 1200, 480);
    })
  ]);
}

// ------------------------------------------------------------
// FUNCIONES PARA TRAER LOS DATOS
// (muy parecidas a las de routes/historias.js y routes/personajes.js,
// pero las repetimos aca para que este archivo se entienda solo,
// sin tener que ir a buscar codigo a otros archivos)
// ------------------------------------------------------------

async function obtenerTodasLasHistorias(libroId) {
  const [historias] = await pool.query('SELECT * FROM historias WHERE libro_id = ? ORDER BY id ASC', [libroId]);

  // Para cada historia, le agregamos sus personajes y fuentes
  for (const historia of historias) {
    const [personajes] = await pool.query(
      `SELECT p.nombre, p.slug, hp.rol
       FROM historia_personajes hp
       JOIN personajes p ON p.id = hp.personaje_id
       WHERE hp.historia_id = ?
       ORDER BY FIELD(hp.rol, 'protagonista','antagonista','secundario','mencionado')`,
      [historia.id]
    );
    const [fuentes] = await pool.query(
      `SELECT f.autor, f.obra FROM historia_fuentes hf
       JOIN fuentes f ON f.id = hf.fuente_id
       WHERE hf.historia_id = ?`,
      [historia.id]
    );
    historia.personajes = personajes;
    historia.fuentes = fuentes;
  }

  return historias;
}

async function obtenerTodosLosPersonajes(libroId) {
  const [personajes] = await pool.query('SELECT * FROM personajes WHERE libro_id = ? ORDER BY nombre ASC', [libroId]);

  for (const personaje of personajes) {
    const [simbolos] = await pool.query(
      `SELECT s.nombre FROM simbolos s
       JOIN personaje_simbolos ps ON ps.simbolo_id = s.id
       WHERE ps.personaje_id = ?`,
      [personaje.id]
    );
    const [poderes] = await pool.query(
      'SELECT nombre FROM poderes WHERE personaje_id = ? ORDER BY orden ASC',
      [personaje.id]
    );
    const [familia] = await pool.query(
      `SELECT p.nombre, rp.tipo_relacion FROM relaciones_personajes rp
       JOIN personajes p ON p.id = rp.personaje_relacionado_id
       WHERE rp.personaje_id = ?`,
      [personaje.id]
    );
    personaje.simbolos = simbolos;
    personaje.poderes = poderes;
    personaje.familia = familia;
  }

  return personajes;
}

// ------------------------------------------------------------
// FUNCIONES QUE ARMAN EL HTML DE CADA TIPO DE PAGINA
// (version "impresa": sin scroll ni tamaño fijo, el contenido
// simplemente fluye a la pagina siguiente si no alcanza el espacio,
// tal como pasa en un libro real)
// ------------------------------------------------------------

function paginaHistoria(historia, compacta = false, alturaBanner = ALTURA_BANNER_MIN) {
  const parrafos = historia.texto_completo
    .split(/\n\s*\n/)
    .map(p => `<p>${p}</p>`)
    .join('');

  // Banner horizontal arriba del texto (si la historia tiene imagen
  // generada -- todavia no todos los libros la tienen, ver
  // scripts/migrar-imagenes-historias.js). La altura es la mas grande
  // que entra sin pasarse de una hoja para ESTA historia en particular
  // (ver "medirHistorias" en el handler de la ruta) -- las que tienen
  // texto corto de sobra usan un banner mas grande, para aprovechar
  // ese espacio en vez de dejarlo en blanco.
  const bannerHtml = historia.imagen_url
    ? `<img class="historia-banner" src="${historia.imagen_url}" style="height:${alturaBanner}px;">`
    : '';

  const personajesHtml = (historia.personajes || [])
    .map(p => `<span class="chip">${p.nombre} <i>(${p.rol})</i></span>`)
    .join('');

  const fuenteTexto = (historia.fuentes || [])
    .map(f => `${f.autor}, ${f.obra}`)
    .join(' · ');

  // "Personajes" + chips + pie de fuente van juntos en un solo bloque
  // ("cierre") con break-inside:avoid, para que si no caben en lo que
  // resta de la pagina, el motor de impresion los mueva TODOS juntos
  // a la pagina siguiente en vez de dejar el pie de fuente solo y
  // huerfano (que es justo lo que pasaba antes: el "avoid" en .pie
  // por si solo no bastaba porque .chips tenia su propio
  // break-inside:avoid y no habia margen para "tirar" del pie hacia
  // atras sin partir ese bloque).
  const cierreHtml = `
    <div class="cierre">
      ${personajesHtml ? `<div class="divisor">Personajes</div><div class="chips">${personajesHtml}</div>` : ''}
      <div class="pie">${fuenteTexto}</div>
    </div>
  `;

  return `
    <section class="pdf-page pagina-historia${compacta ? ' compacta' : ''}" id="hist-${historia.slug}">
      <div class="eyebrow">${historia.tipo}${historia.periodo ? ' · ' + historia.periodo : ''}</div>
      <h2 class="titulo">${historia.titulo}</h2>
      <div class="subtitulo">${historia.resumen || ''}</div>
      ${bannerHtml}
      <div class="cuerpo">${parrafos}</div>
      ${cierreHtml}
    </section>
  `;
}

function paginaPersonaje(personaje) {
  // Igual que en las historias: si la descripcion tiene parrafos
  // separados por linea en blanco, los respetamos como <p> propios en
  // vez de aplastarlos en un solo bloque de texto corrido.
  const descripcionHtml = (personaje.descripcion_larga || 'Descripción pendiente de completar.')
    .split(/\n\s*\n/)
    .map(p => `<p>${p}</p>`)
    .join('');

  const camposInfo = [
    { etiqueta: 'Origen', valor: personaje.origen },
    { etiqueta: 'Dominio', valor: personaje.dominio },
    { etiqueta: 'Guarida', valor: personaje.guarida },
    { etiqueta: 'Amenaza', valor: personaje.amenaza }
  ].filter(c => c.valor);

  const infoHtml = camposInfo.length ? `
    <div class="info-strip">
      ${camposInfo.map(c => `<div class="info-item"><span>${c.etiqueta}</span>${c.valor}</div>`).join('')}
    </div>` : '';

  const sellos = [...personaje.simbolos.map(s => s.nombre), ...personaje.poderes.map(p => p.nombre)];
  const sellosHtml = sellos.length ? `
    <div class="divisor">Símbolos y poderes</div>
    <div class="chips">${sellos.map(s => `<span class="chip">${s}</span>`).join('')}</div>` : '';

  const familiaHtml = (personaje.familia || []).length ? `
    <div class="divisor">Vínculos familiares</div>
    <div class="chips">${personaje.familia.map(f => `<span class="chip">${f.nombre} <i>(${f.tipo_relacion})</i></span>`).join('')}</div>` : '';

  const imagenHtml = personaje.imagen_principal
    ? `<img class="retrato" src="${personaje.imagen_principal}">`
    : '';

  return `
    <section class="pdf-page" id="per-${personaje.slug}">
      <div class="eyebrow">${personaje.tipo}${personaje.naturaleza ? ' · ' + personaje.naturaleza : ''}</div>
      <h2 class="titulo">${personaje.nombre}</h2>
      <div class="subtitulo">${personaje.epitetos || ''}</div>
      ${imagenHtml}
      <div class="cuerpo">${descripcionHtml}</div>
      ${infoHtml}
      ${sellosHtml}
      ${familiaHtml}
    </section>
  `;
}

// ------------------------------------------------------------
// EL DOCUMENTO HTML COMPLETO (portada + historias + personajes)
// ------------------------------------------------------------

// Una sola paleta: la version clara pensada para imprimir en papel (un
// fondo oscuro a pagina completa gastaria muchisima tinta). Antes
// existia tambien una version oscura a juego con el flipbook web,
// pero se decidio dejar solo esta -- es la que de verdad se usa para
// imprimir o leer offline, y mantener dos versiones duplicaba trabajo
// de mantenimiento sin necesidad real.
const PALETA = {
  fondo: '#fbf9f4',
  texto: '#241f18',
  textoTenue: '#4a4436',
  textoDebil: '#8a8272',
  dorado: '#8d723c',
  doradoSuave: '#6b5730',
  salvia: '#4f6a60',
  linea: 'rgba(36,31,24,0.14)',
  lineaFuerte: 'rgba(36,31,24,0.22)'
};

function construirEstilos(paleta, fondoPortada) {
  // "@page margin: 0" + padding en .pdf-page es lo que permite que el
  // fondo crema llegue hasta el borde de cada hoja impresa (un margen
  // de @page DE VERDAD deja SIEMPRE un marco blanco alrededor -- el
  // navegador no lo pinta con el background del body, sin importar
  // que color le pongamos -- y en un libro pensado para imprimirse en
  // papel color crema, ese marco blanco se ve como un error, no como
  // un margen prolijo).
  //
  // El problema que esto traia antes (y la razon por la que en algun
  // momento probamos el margen de @page real): cuando una
  // historia/personaje no entra completo en una hoja, el padding es
  // del BLOQUE de contenido, que ya "gasto" su padding superior en la
  // primera hoja -- la parte que se desborda a la hoja siguiente
  // arrancaba pegada al borde de arriba, sin nada de aire. La
  // solucion real (sin sacrificar el fondo crema) es
  // "box-decoration-break: clone": le dice al motor de impresion que
  // repita el padding/borde/fondo del bloque en CADA fragmento cuando
  // se corta entre hojas, en vez de tratarlo como una sola caja que
  // solo tiene padding en las puntas.
  //
  // Las reglas "break-*" / "page-break-*" de aca abajo son la
  // correccion al problema de "paginas huerfanas": antes, cuando el
  // contenido de una historia/personaje no cabia completo en una
  // hoja A4, el salto de pagina podia caer justo antes del pie de
  // fuente ("Apolodoro, Biblioteca mitologica"), dejandolo solo en
  // una pagina nueva con el resto en blanco. "break-before: avoid"
  // en .pie le dice al motor de impresion que prefiera empujar mas
  // texto del parrafo anterior junto con el pie antes que dejarlo
  // huerfano; "break-inside: avoid" en los bloques chicos (chips,
  // info-strip, divisor) evita que esos se corten a la mitad.
  return `
    @page { size: A4; margin: 0; }
    * { box-sizing: border-box; }
    html, body { background:${paleta.fondo}; margin:0; }
    body { font-family:'IBM Plex Sans', sans-serif; color:${paleta.texto}; }
    .pdf-page {
      position:relative; page-break-after: always; background:${paleta.fondo};
      border:1px solid ${paleta.linea}; padding:8mm 10mm 18mm;
      box-decoration-break: clone; -webkit-box-decoration-break: clone;
    }
    .pdf-page:last-child { page-break-after: auto; }
    /* Forzar una altura minima de una hoja entera SOLO tiene sentido en
       paginas que sabemos que jamas se desbordan (portada, aviso legal):
       ahi evita que se vean chicas y descentradas. En historias,
       personajes o los indices (que pueden crecer con el contenido, ver
       "Índice · Personajes" con 54 filas) el mismo min-height causaba un
       bug: cuando el contenido SI se pasaba de una hoja, el motor de
       impresion rellenaba con blanco de mas el comienzo de la hoja
       siguiente en vez de arrancar el contenido pegado arriba, dejando
       un salto de pagina con un hueco raro antes del texto. Sin
       min-height, cada hoja mide exactamente lo que su contenido
       necesita -- una sola si entra, o tantas como haga falta si no. */
    .pdf-page-fija { min-height:297mm; }
    /* Marca de agua: el texto se define UNA sola vez, en la variable
       CSS "--marca-agua" (puesta en <body>, ver construirDocumentoCompleto),
       y como las variables CSS heredan hacia abajo, aparece igual en
       CADA pagina via este "::after" -- sin tener que agregarla a mano
       en cada una de las funciones que arman paginas (portada, indices,
       historias, personajes...). Chica y de bajo contraste a proposito:
       tiene que ser legible si hace falta identificar la copia, pero
       sin ensuciar la lectura normal del libro. */
    .pdf-page::after {
      content: var(--marca-agua);
      position:absolute; left:0; right:0; bottom:7mm;
      text-align:center; font-family:'IBM Plex Mono', monospace;
      font-size:6.5px; letter-spacing:0.3px; color:${paleta.textoDebil};
      opacity:0.7; pointer-events:none;
    }
    /* La portada es la unica hoja del PDF que puede romper la paleta
       clara del resto del libro: si hay imagen de fondo (no todos los
       libros la tienen todavia), lleva la misma ilustracion oscura que
       la portada del flipbook web, con un degrade encima para que el
       titulo (en texto claro, solo en ESTA hoja) se siga leyendo bien.
       Sin imagen, se queda con el tratamiento claro de siempre -- por
       eso el estilo con fondo esta en su propia clase
       ".portada-con-fondo" en vez de pisar ".portada" directamente. */
    .portada { display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; }
    /* Bajan el bloque de texto a mitad de camino entre el centro y el
       borde inferior de la hoja (3 partes de espacio arriba, 1 abajo)
       -- mismo criterio que ".cover-spacer-top/bottom" en el flipbook web. */
    .portada .cover-spacer-top { flex:3; }
    .portada .cover-spacer-bottom { flex:1; }
    .portada h1 { font-family:'Fraunces', serif; font-weight:700; font-size:44px; letter-spacing:0.5px; color:${paleta.texto}; margin:0 0 10px; }
    .portada .cover-mitologia { font-family:'Fraunces', serif; font-style:italic; font-weight:500; font-size:17px; color:${paleta.dorado}; margin:0 0 8px; }
    ${fondoPortada ? `
    .portada.portada-con-fondo {
      background-image: linear-gradient(180deg, rgba(15,14,18,0.35), rgba(15,14,18,0.6) 55%, rgba(15,14,18,0.92)), url('${fondoPortada}');
      background-size:cover; background-position:center;
    }
    .portada.portada-con-fondo h1 { color:#f5f1e6; text-shadow:0 2px 12px rgba(0,0,0,0.6); }
    .portada.portada-con-fondo .cover-mitologia { text-shadow:0 2px 10px rgba(0,0,0,0.6); }
    .portada.portada-con-fondo .eyebrow { color:${paleta.dorado}; text-shadow:0 1px 8px rgba(0,0,0,0.6); }
    ` : ''}
    /* Emblema de la contraportada (ver paginaContraportada). Circular,
       mismo tratamiento de borde que el retrato de personaje. */
    .contraportada-emblema { width:170px; height:170px; border-radius:50%; object-fit:cover; border:1px solid ${paleta.doradoSuave}; }
    .eyebrow { font-family:'IBM Plex Mono', monospace; font-size:10.5px; letter-spacing:2px; text-transform:uppercase; color:${paleta.dorado}; text-align:center; }
    .titulo { font-family:'Fraunces', serif; font-weight:700; font-size:25px; text-align:center; margin:4px 0 6px; color:${paleta.texto}; }
    .subtitulo { text-align:center; font-family:'Fraunces', serif; font-style:italic; font-weight:500; font-size:12.5px; color:${paleta.textoTenue}; margin-bottom:14px; }
    .cuerpo { font-size:13px; line-height:1.6; text-align:left; color:${paleta.textoTenue}; }
    .cuerpo p { margin:0 0 10px; orphans:3; widows:3; }
    /* El retrato flota a la derecha y el texto lo contornea (en vez de
       quedar apilado arriba, centrado). Rectangular con esquinas
       apenas redondeadas -- se ve mejor impreso que un circulo, y de
       paso se aprovecha mas superficie de la ilustracion generada
       (que ya viene en formato vertical, no cuadrado). Mas grande que
       antes (era 150x210) para que se note bien de un vistazo quien
       es el personaje. */
    .retrato { float:right; width:230px; height:322px; border-radius:8px; margin:0 0 12px 20px; object-fit:cover; border:1px solid ${paleta.doradoSuave}; break-inside:avoid; page-break-inside:avoid; }
    /* Banner de historia: a diferencia del retrato, va a todo el ancho
       y ARRIBA del texto (no flotando al costado) -- el objetivo es
       mostrar la escena completa antes de leer, como la portada de un
       capitulo, no acompañar la lectura de costado. */
    .historia-banner { display:block; width:100%; height:260px; object-fit:cover; border-radius:8px; border:1px solid ${paleta.doradoSuave}; margin:0 0 14px; }
    /* Las historias tienen que entrar SIEMPRE en una sola hoja (a
       diferencia de los personajes, que pueden ocupar 2 si hace
       falta): banner mas chico y menos aire entre parrafos/secciones,
       en las 20 historias sin excepcion. Todo escopado bajo
       ".pagina-historia" para no afectar el tamaño de letra de las
       paginas de personaje, que comparten las mismas clases (.cuerpo,
       .divisor, .pie...).
       El tamaño de letra del cuerpo, en cambio, NO se achica siempre:
       queda igual que en los personajes (13px/1.6) salvo en las
       historias mas largas, que no entran completas en una hoja ni
       aun con el banner y los margenes ya reducidos -- esas (medidas
       en el servidor antes de armar el PDF final, ver
       "medirHistorias" en el handler de la ruta) reciben ademas
       la clase ".compacta", que SI achica la letra lo justo y
       necesario para que quepan. La mayoria de las historias no la
       necesitan y se leen del mismo tamaño que un personaje. La altura
       del banner (".historia-banner") NO se toca aca por CSS -- cada
       historia trae la suya en un estilo inline, calculada en el
       servidor segun cuanto espacio le sobra a esa historia en
       particular (ver "medirHistorias" en el handler de la ruta). */
    .pagina-historia .subtitulo { margin-bottom:8px; }
    .pagina-historia .cuerpo { font-size:13px; line-height:1.6; }
    .pagina-historia .cuerpo p { margin:0 0 5px; }
    .pagina-historia .divisor { margin:8px 0 5px; }
    .pagina-historia .pie { margin-top:8px; }
    .pagina-historia.compacta .cuerpo { font-size:11px; line-height:1.42; }
    /* "clear:both" en lo que sigue del cuerpo asegura que esas secciones
       arranquen siempre DEBAJO del retrato, sin importar si el texto de
       la biografia alcanzo a "bajar" mas que la imagen o no. */
    .divisor { clear:both; font-family:'IBM Plex Mono', monospace; font-size:9.5px; letter-spacing:1.5px; text-transform:uppercase; color:${paleta.textoDebil}; text-align:center; margin:14px 0 8px; border-top:1px solid ${paleta.linea}; padding-top:8px; break-after:avoid; page-break-after:avoid; break-inside:avoid; page-break-inside:avoid; }
    .chips { display:flex; flex-wrap:wrap; justify-content:center; gap:6px; break-inside:avoid; page-break-inside:avoid; }
    .chip { font-family:'IBM Plex Mono', monospace; font-size:9.5px; border:1px solid ${paleta.lineaFuerte}; color:${paleta.textoTenue}; padding:4px 9px; border-radius:10px; }
    .chip i { color:${paleta.textoDebil}; }
    .info-strip { clear:both; display:flex; flex-wrap:wrap; justify-content:center; gap:8px 24px; margin:12px 0; padding:10px 0; border-top:1px solid ${paleta.linea}; border-bottom:1px solid ${paleta.linea}; font-size:11px; break-inside:avoid; page-break-inside:avoid; }
    .info-item { color:${paleta.textoTenue}; text-align:center; }
    .info-item span { display:block; font-family:'IBM Plex Mono', monospace; font-size:8px; text-transform:uppercase; color:${paleta.salvia}; margin-bottom:2px; }
    .pie { text-align:center; font-family:'IBM Plex Mono', monospace; font-size:9px; color:${paleta.textoDebil}; margin-top:14px; }
    .cierre { break-inside:avoid; page-break-inside:avoid; }
    .indice-item { display:flex; justify-content:space-between; padding:7px 0; border-bottom:1px solid ${paleta.linea}; font-size:12px; text-decoration:none; color:${paleta.texto}; }
    .indice-item b { font-weight:500; }
    .indice-item span { font-family:'IBM Plex Mono', monospace; font-size:10px; color:${paleta.dorado}; }
    /* Visualmente invisible pero SIGUE existiendo como encabezado real
       en el documento (a diferencia de "display:none", que muchos
       lectores de PDF ignoran directamente al armar el arbol de
       marcadores) -- ver el comentario junto a ".marcador-indice" en
       el HTML. */
    .marcador-indice { display:block; font-size:6px; color:${paleta.fondo}; margin:0; padding:0; }
  `;
}

// Saca comillas y caracteres que puedan romper el atributo HTML o el
// string CSS donde va a terminar este texto (nombre/email del
// comprador). Nada de esto se ejecuta como HTML/CSS de otra persona
// (el PDF solo lo ve quien lo compro), pero igual mejor no arriesgarse
// a que un nombre con caracteres raros rompa la maquetacion.
function limpiarParaAtributo(texto) {
  return String(texto || '').replace(/["'<>&]/g, '');
}

// Contraportada: se agrega SIEMPRE al final del PDF, con el emblema del
// libro si ya existe (mismo archivo "portada-emblema.png" que usa la
// contraportada del flipbook web -- ver construirContraportada() en
// frontend/js/app.js). Reusa la clase ".portada" (mismo centrado flex
// vertical que la portada) pero SIN ".portada-con-fondo": se queda con
// el fondo claro de papel de siempre, no la imagen oscura de la tapa.
// Si el libro todavia no tiene emblema, "emblema" llega null y la
// pagina sale igual, solo con el nombre -- nunca un icono roto.
function paginaContraportada(emblema) {
  const emblemaHtml = emblema
    ? `<img class="contraportada-emblema" src="${emblema}" alt="">`
    : '';
  return `
    <section class="pdf-page pdf-page-fija portada">
      ${emblemaHtml}
      <div class="eyebrow" style="margin-top:18px;">MYTHOLOGICA</div>
    </section>
  `;
}

// Pagina de aviso legal / copia personal: se inserta justo despues de
// la portada, en TODOS los PDF (ambos temas). No impide tecnicamente
// que alguien comparta el archivo (ningun PDF puede evitar eso del
// todo), pero deja constancia formal de que es una copia personal,
// a nombre de quien la compro.
function paginaAvisoLegal(usuario, libro) {
  const nombre = limpiarParaAtributo(usuario.nombre);
  const email = limpiarParaAtributo(usuario.email);
  const fecha = new Date().toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' });

  return `
    <section class="pdf-page pdf-page-fija">
      <div class="eyebrow">Aviso legal</div>
      <h1 class="titulo">Copia personal</h1>
      <div class="cuerpo">
        <p>Este ejemplar digital de <strong>${libro.titulo}</strong> fue adquirido por
        <strong>${nombre}</strong> (${email}) el ${fecha}, para su uso personal exclusivamente.</p>
        <p>Queda prohibida su reproducción, distribución, publicación o reventa —total o
        parcial, con o sin fines de lucro— sin autorización previa y por escrito. Todos los
        textos e ilustraciones de este libro son propiedad de Mythologica.</p>
      </div>
    </section>
  `;
}

// "numerosPagina" (opcional) es el resultado de encontrarNumerosDePagina():
// un mapa "hist-slug"/"per-slug" -> numero de pagina. En la primera
// pasada (el borrador que se usa solo para medir) no lo tenemos
// todavia, asi que el indice sale sin numero -- nadie lo ve, ese PDF
// se descarta.
function construirDocumentoCompleto(historias, personajes, usuario, libro, numerosPagina = {}, fondoPortada = null, medidasHistorias = new Map(), fondoEmblema = null) {
  const estilos = construirEstilos(PALETA, fondoPortada);

  // Un solo indice continuo (historias primero, personajes despues),
  // sin separarlos en dos secciones tituladas distintas -- mismo
  // criterio que el indice del flipbook web (ver construirIndice en
  // frontend/js/app.js).
  const indiceCompleto = [
    ...historias.map(h => {
      const numero = numerosPagina[`hist-${h.slug}`];
      return `<a class="indice-item" href="#hist-${h.slug}"><b>${h.titulo}</b><span>${numero || ''}</span></a>`;
    }),
    ...personajes.map(p => {
      const numero = numerosPagina[`per-${p.slug}`];
      return `<a class="indice-item" href="#per-${p.slug}"><b>${p.nombre}</b><span>${numero || ''}</span></a>`;
    })
  ].join('');

  const nombre = limpiarParaAtributo(usuario.nombre);
  const email = limpiarParaAtributo(usuario.email);
  const marcaAgua = `Copia personal de ${nombre} (${email}) — uso personal, prohibida su reventa o redistribución`;

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Mythologica — ${libro.titulo}</title>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,700;1,500&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
      <style>${estilos}</style>
    </head>
    <body style="--marca-agua:&quot;${marcaAgua}&quot;;">

      <section class="pdf-page pdf-page-fija portada${fondoPortada ? ' portada-con-fondo' : ''}">
        <div class="cover-spacer-top"></div>
        <h1>MYTHOLOGICA</h1>
        <div class="cover-mitologia">${libro.titulo}</div>
        <div class="eyebrow">Cosmogonía · Dioses · Héroes · Monstruos</div>
        <div class="cover-spacer-bottom"></div>
      </section>

      ${paginaAvisoLegal(usuario, libro)}

      <section class="pdf-page">
        <h1 class="titulo">Índice</h1>
        ${indiceCompleto}
      </section>

      <!-- Encabezados invisibles (0x0, recortados) SOLO para que el
           panel de marcadores del lector de PDF anide bien cada
           titulo de historia/personaje bajo su seccion -- sin esto,
           como el indice va junto al principio del libro (a pedido),
           TODOS los h2 de mas abajo quedarian anidados bajo el h1 de
           "Índice" por ser el ultimo encabezado antes de que empiece
           el contenido, sin importar si son historias o personajes.
           No agregan una hoja nueva ni se ven en el libro, solo
           existen para el arbol de marcadores. -->
      <h1 class="marcador-indice">Historias</h1>
      ${historias.map(h => {
        const medida = medidasHistorias.get(h.slug);
        return paginaHistoria(h, medida ? medida.compacta : false, medida ? medida.alturaBanner : ALTURA_BANNER_MIN);
      }).join('')}

      <h1 class="marcador-indice">Personajes</h1>
      ${personajes.map(paginaPersonaje).join('')}

      ${paginaContraportada(fondoEmblema)}

    </body>
    </html>
  `;
}

// ------------------------------------------------------------
// INDICE CON NUMERO DE PAGINA DE VERDAD
// ------------------------------------------------------------
// El indice del PDF (paginas "Indice · Historias/Personajes") mostraba
// solo el tipo de cada entrada, sin numero de pagina: funcionaba en
// pantalla porque los links son clickeables, pero en papel impreso un
// indice sin numero no sirve de nada. El problema es que NO hay forma
// de saber en que pagina va a caer cada historia/personaje ANTES de
// imprimir -- Chrome decide la paginacion final segun el contenido
// real (texto, imagenes, saltos de pagina).
//
// La solucion es un render en dos pasadas: la primera arma el PDF SIN
// numeros (solo para medirlo), la segunda ya sabe en que pagina cayo
// cada uno y los imprime de verdad. Para "medir", usamos pdfjs-dist
// para leer el texto de cada pagina del borrador y buscar el titulo de
// cada historia/personaje -- coincide con el trabajo de un lector
// buscando manualmente en que pagina esta cada capitulo, pero
// automatico.
//
// Un detalle no trivial: la fuente Fraunces (embebida via Google
// Fonts) usa ligaduras para ciertos pares de letras (como "an" o "om")
// que pdfjs no siempre puede mapear de vuelta a texto Unicode normal
// -- el caracter extraido sale como " " en esa posicion. Por eso
// la comparacion de mas abajo trata " " como comodin (coincide
// con cualquier letra) en vez de exigir una igualdad de texto exacta.
function coincideConTitulo(textoPaginaLimpio, tituloLimpio) {
  if (textoPaginaLimpio.length !== tituloLimpio.length) return false;
  for (let j = 0; j < tituloLimpio.length; j++) {
    const c = textoPaginaLimpio[j];
    if (c !== ' ' && c !== tituloLimpio[j]) return false;
  }
  return true;
}

// Busca, para cada historia y personaje, en que pagina del PDF
// (borrador) aparece su titulo/nombre como encabezado de pagina --
// filtramos por tamaño de letra (>=15pt) para no confundirlo con una
// mencion mas chica del mismo texto en otro lado (un link del propio
// indice, un chip de "vinculos familiares", el nombre de un personaje
// dentro del titulo de otra historia, etc).
async function encontrarNumerosDePagina(pdfBuffer, historias, personajes) {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const documento = await pdfjsLib.getDocument({
    data: new Uint8Array(pdfBuffer),
    disableFontFace: true,
    isEvalSupported: false
  }).promise;

  const objetivos = [
    ...historias.map(h => [`hist-${h.slug}`, h.titulo.replace(/\s+/g, '')]),
    ...personajes.map(p => [`per-${p.slug}`, p.nombre.replace(/\s+/g, '')])
  ];
  const pendientes = new Map(objetivos);
  const numeros = {};

  for (let i = 1; i <= documento.numPages && pendientes.size > 0; i++) {
    const pagina = await documento.getPage(i);
    const contenido = await pagina.getTextContent();
    const textoGrande = contenido.items
      .filter(item => item.height >= 15)
      .map(item => item.str)
      .join('')
      .replace(/ /g, '');

    for (const [clave, tituloLimpio] of pendientes) {
      if (coincideConTitulo(textoGrande, tituloLimpio)) {
        numeros[clave] = i;
        pendientes.delete(clave);
      }
    }
  }

  return numeros;
}

// Escribe el numero de pagina en la esquina inferior derecha de cada
// hoja, directamente sobre el PDF ya generado (ver el comentario en
// el handler de la ruta sobre por que no usamos el "footer" nativo de
// Chrome). Salta la portada y el aviso legal (las primeras 2 paginas) y
// tambien la ULTIMA (la contraportada, ver paginaContraportada) -- ni
// la tapa ni la contratapa de un libro impreso llevan numero, y ahi es
// tambien donde "encontrarNumerosDePagina" empieza/termina de buscar.
async function agregarNumerosDePagina(pdfBuffer, libro) {
  const PAGINAS_SIN_NUMERAR = 2;
  const pdfDoc = await PDFDocument.load(pdfBuffer);

  // Metadata real del documento: es lo que muestran la pestaña del
  // navegador y la mayoria de los lectores de PDF (Adobe, Vista previa
  // de macOS, etc.) en vez del nombre del archivo -- sin esto, todos
  // los libros aparecian con el mismo titulo generico ("about:blank" o
  // el nombre del archivo temporal). El <title> del HTML (ver
  // construirDocumentoCompleto) alcanza para Chrome al imprimir, pero
  // lo fijamos aca tambien para que sea confiable sin importar el
  // motor de impresion.
  pdfDoc.setTitle(`Mythologica — ${libro.titulo}`);
  pdfDoc.setAuthor('Mythologica');
  pdfDoc.setCreator('Mythologica');
  pdfDoc.setProducer('Mythologica');

  const fuente = await pdfDoc.embedFont(StandardFonts.Courier);
  const color = rgb(0x8a / 255, 0x82 / 255, 0x72 / 255); // paleta.textoDebil
  const tamanoFuente = 8;
  const margenDerecho = 40; // puntos (~14mm), a juego con el padding horizontal de .pdf-page
  const margenInferior = 22; // puntos (~7.8mm), dentro del padding inferior reservado para la marca de agua

  const paginas = pdfDoc.getPages();
  const indiceContraportada = paginas.length - 1;

  paginas.forEach((pagina, indice) => {
    if (indice < PAGINAS_SIN_NUMERAR || indice === indiceContraportada) return;
    const texto = String(indice + 1);
    const anchoTexto = fuente.widthOfTextAtSize(texto, tamanoFuente);
    pagina.drawText(texto, {
      x: pagina.getWidth() - margenDerecho - anchoTexto,
      y: margenInferior,
      size: tamanoFuente,
      font: fuente,
      color
    });
  });

  const bytesFinal = await pdfDoc.save();
  return Buffer.from(bytesFinal);
}

// Alto util de una hoja A4 para el contenido de una historia, con el
// padding actual de ".pdf-page" (8mm arriba, 18mm abajo -- ver
// construirEstilos). Historias mas altas que esto en su tamaño normal
// (13px/1.6, igual que los personajes, banner al minimo) no entran en
// una sola hoja y necesitan la clase ".compacta".
const ALTO_UTIL_HISTORIA_PX = (297 - 8 - 18) * 96 / 25.4;
// El banner nunca es mas chico que esto (lo justo para que las 4
// historias "compactas" quepan) ni mas grande que esto (mas alto que
// eso empieza a recortar demasiado los costados de una imagen
// panoramica 3:2/16:9 al recortarla con object-fit:cover). Un colchon
// de 15px de margen de seguridad evita que quede al borde justo por
// cualquier diferencia minima entre esta medicion y el render final.
const ALTURA_BANNER_MIN = 150;
const ALTURA_BANNER_MAX = 260;
const COLCHON_SEGURIDAD_PX = 15;

// Mide, en un HTML de prueba (sin PDF, mas rapido que renderizar uno),
// cuanto ocupa cada historia con su tamaño de letra NORMAL y el banner
// al minimo, y devuelve para cada una si necesita ".compacta" (no
// entra en una hoja ni asi) y que tan grande puede ser su banner --
// las que sobran de espacio con letra normal reciben un banner mas
// grande, para aprovechar ese espacio en vez de dejarlo en blanco. Es
// una pasada extra ademas de las dos que ya haciamos para el
// borrador/numeros de pagina (ver mas abajo), pero mucho mas liviana
// al no llamar a page.pdf().
async function medirHistorias(historias, personajes, usuario, libro, fondoPortada, browser) {
  const htmlSinCompactar = construirDocumentoCompleto(historias, personajes, usuario, libro, {}, fondoPortada);
  const pageMedicion = await browser.newPage();
  try {
    await pageMedicion.setContent(htmlSinCompactar, { waitUntil: 'networkidle0' });
    const alturas = await pageMedicion.evaluate(() => {
      const resultado = {};
      document.querySelectorAll('.pdf-page[id^="hist-"]').forEach((el) => {
        resultado[el.id.replace('hist-', '')] = el.getBoundingClientRect().height;
      });
      return resultado;
    });

    const resultado = new Map();
    for (const [slug, altura] of Object.entries(alturas)) {
      if (altura > ALTO_UTIL_HISTORIA_PX) {
        resultado.set(slug, { compacta: true, alturaBanner: ALTURA_BANNER_MIN });
        continue;
      }
      const holgura = ALTO_UTIL_HISTORIA_PX - altura - COLCHON_SEGURIDAD_PX;
      const alturaBanner = Math.min(ALTURA_BANNER_MIN + Math.max(0, holgura), ALTURA_BANNER_MAX);
      resultado.set(slug, { compacta: false, alturaBanner });
    }
    return resultado;
  } finally {
    await pageMedicion.close();
  }
}

// ------------------------------------------------------------
// GENERACION DEL PDF (una sola version -- la pensada para imprimir en
// papel u hojear offline sin gastar tinta de fondo; antes habia
// tambien una variante oscura a juego con el flipbook web, pero se dio
// de baja para no mantener dos layouts del mismo contenido).
// ------------------------------------------------------------
// Arma el PDF completo de un libro y devuelve el Buffer final. Separada
// del handler de la ruta (que solo se ocupa de autenticacion y de
// mandar la respuesta HTTP) para poder generar un PDF de prueba desde
// un script suelto sin tener que pasar por un login real -- ver
// "module.exports.generarPdfLibro" al final del archivo.
async function generarPdfLibro(libro, usuario) {
  let browser;
  try {
    const [historias, personajes] = await Promise.all([
      obtenerTodasLasHistorias(libro.id),
      obtenerTodosLosPersonajes(libro.id)
    ]);

    await prepararImagenesPdf(historias, personajes);
    // Imagen de fondo de la portada: un archivo fijo por libro (no
    // depende de ningun registro de la base), en la misma carpeta que
    // el resto de las imagenes de ese libro. Si el libro todavia no
    // tiene la suya (los otros 3 catalogos aun no), comoDataUriParaPdf
    // devuelve null y el CSS de mas abajo se encarga de no romper nada
    // -- la portada se queda con el tratamiento claro de siempre.
    const fondoPortada = await comoDataUriParaPdf(`http://localhost/images/${libro.slug}/portada-fondo.jpg`, 900, 1614);
    // Emblema de la contraportada (ver paginaContraportada): mismo archivo
    // que usa la contraportada del flipbook web. Si el libro todavia no
    // lo tiene, tambien sale null y esa hoja se queda sin imagen.
    const fondoEmblema = await comoDataUriParaPdf(`http://localhost/images/${libro.slug}/portada-emblema.png`, 400, 400);

    // Lanzamos el Chrome invisible. Lo usamos para TRES pasadas: una
    // liviana (sin generar PDF) para medir que historias no entran en
    // una sola hoja con su letra normal, un borrador ya con esas
    // historias compactadas para medir en que pagina cae cada
    // historia/personaje (ver "encontrarNumerosDePagina"), y el
    // documento final con todo eso ya resuelto.
    browser = await puppeteer.launch();

    const medidasHistorias = await medirHistorias(historias, personajes, usuario, libro, fondoPortada, browser);

    const htmlBorrador = construirDocumentoCompleto(historias, personajes, usuario, libro, {}, fondoPortada, medidasHistorias, fondoEmblema);
    const pageBorrador = await browser.newPage();
    await pageBorrador.setContent(htmlBorrador, { waitUntil: 'networkidle0' });
    const pdfBorrador = await pageBorrador.pdf({ format: 'A4', printBackground: true });
    await pageBorrador.close();

    const numerosPagina = await encontrarNumerosDePagina(Buffer.from(pdfBorrador), historias, personajes);

    const html = construirDocumentoCompleto(historias, personajes, usuario, libro, numerosPagina, fondoPortada, medidasHistorias, fondoEmblema);
    const page = await browser.newPage();

    // Le pasamos nuestro HTML directamente (no una URL)
    // "networkidle0" espera a que carguen las fuentes de Google Fonts
    await page.setContent(html, { waitUntil: 'networkidle0' });

    // page.pdf() en versiones recientes de Puppeteer devuelve un
    // Uint8Array, no un Buffer de Node. Express no reconoce el
    // Uint8Array como datos binarios puros y lo puede corromper
    // al enviarlo. Por eso lo convertimos explicitamente con
    // Buffer.from() antes de mandarlo.
    const pdfUint8Array = await page.pdf({
      format: 'A4',
      printBackground: true,
      // Genera el panel de marcadores/indice navegable del lector de
      // PDF a partir de los encabezados del HTML: h1 para portada,
      // aviso legal y cada pagina de "Indice ·..." (nivel superior), y
      // h2 para el titulo de cada historia/personaje (ver
      // paginaHistoria/paginaPersonaje), que quedan anidados bajo su
      // "Indice ·..." correspondiente por venir justo despues en el
      // documento. Es un indice de verdad, clickeable, ademas de las
      // paginas de indice que ya existian dentro del propio contenido.
      outline: true
    });

    await browser.close();
    browser = null;

    // El numero de pagina NO sale del "footer" nativo de Chrome: ese
    // mecanismo necesita reservar un margen de @page de verdad para
    // dibujar ahi el numero, y ese margen queda SIEMPRE en blanco (el
    // navegador no lo pinta con el fondo crema de la pagina, sin
    // importar el color que le pongamos) -- exactamente el marco
    // blanco alrededor de una hoja crema que no queremos. En vez de
    // eso, agregamos el numero DESPUES, escribiendolo directamente
    // sobre el PDF ya generado con pdf-lib, en el mismo hueco que ya
    // dejamos libre para la marca de agua (el padding inferior de
    // ".pdf-page"). Ademas asi podemos saltarnos facil la portada y el
    // aviso legal (paginas 1 y 2), como en un libro de verdad.
    const pdfBuffer = await agregarNumerosDePagina(Buffer.from(pdfUint8Array), libro);

    return pdfBuffer;
  } catch (error) {
    if (browser) await browser.close();
    throw error;
  }
}

// GET /api/pdf -- genera el PDF completo y lo envia como archivo descargable.
// Arma el mismo HTML impreso que usa generarPdfLibro (con las mismas
// imagenes, numeros de pagina y alturas de banner ya resueltas) pero
// SIN convertirlo a PDF -- para capturas de pantalla de la version
// impresa (ej. las miniaturas del landing) alcanza con renderizar este
// HTML en una pestaña y hacerle screenshot a la seccion ".pdf-page"
// que corresponda, mucho mas simple y confiable que abrir el visor de
// PDF de Chrome y navegar sus paginas.
async function generarHtmlLibro(libro, usuario) {
  let browser;
  try {
    const [historias, personajes] = await Promise.all([
      obtenerTodasLasHistorias(libro.id),
      obtenerTodosLosPersonajes(libro.id)
    ]);
    await prepararImagenesPdf(historias, personajes);
    const fondoPortada = await comoDataUriParaPdf(`http://localhost/images/${libro.slug}/portada-fondo.jpg`, 900, 1614);
    const fondoEmblema = await comoDataUriParaPdf(`http://localhost/images/${libro.slug}/portada-emblema.png`, 400, 400);

    browser = await puppeteer.launch();
    const medidasHistorias = await medirHistorias(historias, personajes, usuario, libro, fondoPortada, browser);

    const htmlBorrador = construirDocumentoCompleto(historias, personajes, usuario, libro, {}, fondoPortada, medidasHistorias, fondoEmblema);
    const pageBorrador = await browser.newPage();
    await pageBorrador.setContent(htmlBorrador, { waitUntil: 'networkidle0' });
    const pdfBorrador = await pageBorrador.pdf({ format: 'A4', printBackground: true });
    await pageBorrador.close();

    const numerosPagina = await encontrarNumerosDePagina(Buffer.from(pdfBorrador), historias, personajes);
    return construirDocumentoCompleto(historias, personajes, usuario, libro, numerosPagina, fondoPortada, medidasHistorias, fondoEmblema);
  } finally {
    if (browser) await browser.close();
  }
}

router.get('/', requiereNivel('completo'), async (req, res) => {
  try {
    const pdfBuffer = await generarPdfLibro(req.libro, req.usuario);

    // Le decimos al navegador que esto es un PDF para descargar,
    // no para mostrar como texto. El nombre incluye el slug del libro
    // (ya viene sin acentos ni espacios, ver "libros.slug") para que
    // alguien con varios libros comprados no termine con un monton de
    // archivos "mythologica.pdf", "mythologica (1).pdf", etc. sin
    // forma de distinguirlos.
    const nombreArchivo = `mythologica-${req.libro.slug}.pdf`;
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${nombreArchivo}"`
    });
    res.send(pdfBuffer);
  } catch (error) {
    console.error('Error al generar el PDF:', error);
    res.status(500).json({ error: 'No se pudo generar el PDF' });
  }
});

module.exports = router;
module.exports.generarPdfLibro = generarPdfLibro;
module.exports.generarHtmlLibro = generarHtmlLibro;
