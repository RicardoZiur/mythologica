// ============================================================
// app.js
// ------------------------------------------------------------
// Este archivo hace 3 cosas, en orden:
//   1. Pide los datos a tu backend Node (fetch)
//   2. Convierte cada personaje en un pedazo de HTML (una "hoja")
//   3. Le entrega esas hojas a StPageFlip para que arme el libro
// ============================================================

// Ruta relativa: el backend (server.js) sirve este mismo frontend como
// archivos estaticos, asi que frontend y API viven en el mismo origen
// (mismo host y puerto) sin importar si accedes por localhost, por un
// tunel (localtunnel/ngrok) o por el dominio real el dia de mañana.
const API_URL = '/api';

// Iconos de cada "sello" (simbolo/poder), elegidos por TEMA segun lo
// que dice el nombre -- antes se asignaban por posicion en la lista
// (i % 8), asi que "El rayo" de Zeus podia terminar con el icono de
// la luna solo por casualidad. Ahora se busca el nombre normalizado
// (sin tildes, minusculas) contra estas listas de palabras clave; si
// ningun tema matchea (nombres muy propios, ej. "El collar
// Brisingamen"), cae en una rotacion de iconos neutros de respaldo.
//
// Mas adelante, cuando haya iconos reales (icono_url en la tabla
// simbolos), esto se reemplaza por una imagen <img>.
const PATRON_DIACRITICOS = new RegExp('[' + String.fromCharCode(0x0300) + '-' + String.fromCharCode(0x036f) + ']', 'g');
function normalizarTexto(texto) {
  return texto.toLowerCase().normalize('NFD').replace(PATRON_DIACRITICOS, '');
}

const TEMAS_ICONOS = [
  { icono: '☼', claves: ['sol', 'solar', 'radiante', 'luz creadora', 'amanecer'] },
  { icono: '☾', claves: ['luna', 'creciente'] },
  { icono: '✦', claves: ['estrella', 'cielo', 'cosmic', 'universo', 'universal', 'galaxia', 'constelacion'] },
  { icono: '⌁', claves: ['rayo', 'trueno', 'tormenta', 'vajra', 'relampago'] },
  { icono: '✹', claves: ['fuego', 'llama', 'incendio', 'ascua', 'forja', 'fragua', 'ardient', 'antorcha', 'volcan', 'yunque'] },
  { icono: '≈', claves: ['agua', 'acuatic', 'mar', 'mares', 'marin', 'marea', 'oceano', 'rio', 'lluvia', 'humedad', 'nilo', 'ganges'] },
  { icono: '◉', claves: ['ojo', 'ojos', 'mirada', 'vision'] },
  { icono: '∾', claves: ['serpiente', 'vibora', 'veneno', 'cobra', 'escama'] },
  { icono: '⟿', claves: ['aguila', 'halcon', 'buitre', 'cuervo', 'paloma', 'ibis', 'ganso', 'cisne', 'pavo', 'garza', 'buho'] },
  { icono: '❧', claves: ['caballo', 'cabra', 'ciervo', 'gata', 'gato', 'leon', 'toro', 'cocodrilo', 'chacal', 'carnero', 'elefante', 'raton', 'jabali', 'oso', 'lobo', 'perro', 'mangosta', 'antilope', 'escorpion', 'escarabajo', 'hipopotamo'] },
  { icono: '⛨', claves: ['escudo', 'armadura', 'casco', 'yelmo', 'proteccion'] },
  { icono: '⚔', claves: ['espada', 'lanza', 'arco', 'flecha', 'maza', 'martillo', 'clava', 'tridente', 'hacha', 'cadena', 'gada'] },
  { icono: '♚', claves: ['corona', 'trono', 'cetro', 'realeza'] },
  { icono: '◈', claves: ['oro', 'dorad', 'joya', 'tesoro', 'moneda', 'collar', 'anillo', 'perla', 'riqueza'] },
  { icono: '♡', claves: ['amor', 'deseo', 'bellez', 'flor', 'rosa'] },
  { icono: '†', claves: ['muerte', 'inframundo', 'tumba', 'calaver', 'craneo', 'funerari', 'canopic', 'duelo', 'cadaver', 'amapola'] },
  { icono: '✎', claves: ['sabidur', 'magia', 'magic', 'conocimiento', 'escritura', 'escriba', 'libro', 'veda', 'runa'] },
  { icono: '⚖', claves: ['justicia', 'juicio', 'balanza', 'ley'] },
  { icono: '⧗', claves: ['tiempo', 'destino', 'profecia', 'edad'] },
  { icono: '➳', claves: ['veloz', 'velocidad', 'viaje', 'mensajer', 'vuelo', 'alas', 'sandalias'] },
  { icono: '♪', claves: ['lira', 'arpa', 'flauta', 'siringa', 'canto', 'musica', 'danza'] },
  { icono: '⌂', claves: ['hogar', 'casa', 'llave', 'cuna'] },
  { icono: '❈', claves: ['transformacion', 'metamorfosis', 'caos', 'cabezas'] },
  { icono: '◆', claves: ['fuerza', 'poder', 'invulnerab', 'resistencia', 'regeneracion'] }
];

// Rotacion de respaldo para nombres muy propios que no calzan en
// ningun tema de arriba (ej. "El collar Brisingamen", "Laberinto").
const ICONOS_RESPALDO = ['⟡', '⚷', '❖', '✧', '◇', '❋'];

// Palabras cortas donde el prefijo libre engancha otra palabra
// distinta por casualidad -- "mar" adentro de "MARtillo", "lanza"
// adentro de "LANZAdera de tejer" (el huso de tejer de Neith, nada
// que ver con una lanza). Para estas se exige la palabra completa.
const CLAVES_EXACTAS = new Set(['mar', 'rio', 'oro', 'ley', 'lanza']);

// Compara por LIMITE DE PALABRA (\b), no por substring libre -- un
// simple ".includes()" hacia que "Metamorfosis" matcheara la clave
// "amor" (esta escondida ahi: met-AMOR-fosis) y le pusiera un corazon
// a ese poder. Por defecto solo exige el limite AL INICIO de la clave
// (para seguir soportando raices como "dorad" -> dorado/dorada/
// doradas), salvo las CLAVES_EXACTAS de arriba, que exigen la palabra
// completa en ambos extremos.
function coincideClave(normalizado, clave) {
  const escapada = clave.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const patron = CLAVES_EXACTAS.has(clave) ? ('\\b' + escapada + '\\b') : ('\\b' + escapada);
  return new RegExp(patron).test(normalizado);
}

// Devuelve el icono del tema que matchea con el nombre, o null si
// ninguno matchea (para que el llamador decida el respaldo).
function iconoTematico(nombre) {
  const normalizado = normalizarTexto(nombre);
  const tema = TEMAS_ICONOS.find(t => t.claves.some(clave => coincideClave(normalizado, clave)));
  return tema ? tema.icono : null;
}

// ------------------------------------------------------------
// PASO 1: pedir los datos a la API
// ------------------------------------------------------------

// "window.authHeaders()" (definida en auth.js, que se carga antes que
// este archivo) agrega el header "Authorization: Bearer <token>"
// cuando hay sesion guardada, o no agrega nada si el usuario es
// anonimo. Sin esto, el backend nunca sabria quien esta logueado y
// todo se veria como contenido bloqueado.

// Esta funcion pide la lista resumida de personajes. "?libro=" le
// dice a la API cual de los libros mostrar (ver window.LIBRO_ACTUAL
// en auth.js) -- sin esto, el backend siempre traeria el griego.
async function obtenerListaPersonajes() {
  const respuesta = await fetch(`${API_URL}/personajes?libro=${encodeURIComponent(window.LIBRO_ACTUAL)}`, { headers: window.authHeaders() });
  if (!respuesta.ok) throw new Error('No se pudo obtener la lista de personajes');
  return respuesta.json();
}

// Esta funcion pide la ficha COMPLETA de un personaje (por su slug).
// Si el personaje no es parte de la muestra gratuita y el usuario no
// tiene el nivel de acceso necesario, el backend responde 403 con
// los datos basicos (nombre, epitetos, tipo) y "bloqueado: true" en
// vez de la ficha completa; en ese caso NO lanzamos error, devolvemos
// ese mismo objeto para que la pagina se arme como una "hoja bloqueada".
async function obtenerPersonajeCompleto(slug) {
  const respuesta = await fetch(`${API_URL}/personajes/${slug}`, { headers: window.authHeaders() });
  const datos = await respuesta.json();
  if (!respuesta.ok && !datos.bloqueado) {
    throw new Error(`No se pudo obtener el personaje ${slug}`);
  }
  return datos;
}

// Esta funcion pide la lista resumida de historias (mismo criterio de
// "?libro=" que obtenerListaPersonajes)
async function obtenerListaHistorias() {
  const respuesta = await fetch(`${API_URL}/historias?libro=${encodeURIComponent(window.LIBRO_ACTUAL)}`, { headers: window.authHeaders() });
  if (!respuesta.ok) throw new Error('No se pudo obtener la lista de historias');
  return respuesta.json();
}

// Esta funcion pide la ficha COMPLETA de una historia (por su slug).
// Mismo criterio que obtenerPersonajeCompleto: un 403 con
// "bloqueado: true" no es un error, es una hoja bloqueada valida.
async function obtenerHistoriaCompleta(slug) {
  const respuesta = await fetch(`${API_URL}/historias/${slug}`, { headers: window.authHeaders() });
  const datos = await respuesta.json();
  if (!respuesta.ok && !datos.bloqueado) {
    throw new Error(`No se pudo obtener la historia ${slug}`);
  }
  return datos;
}

// ------------------------------------------------------------
// PASO 2: convertir un personaje (objeto JSON) en HTML
// ------------------------------------------------------------

// Arma la fila de "sellos" (simbolos + poderes juntos, como pediste:
// que aparezca todo lo que tenga el personaje en una sola hoja)
function renderizarSellos(personaje) {
  const items = [
    ...personaje.simbolos.map(s => ({ nombre: s.nombre })),
    ...personaje.poderes.map(p => ({ nombre: p.nombre }))
  ];

  if (items.length === 0) return '';

  let indiceRespaldo = 0;
  const sellosHtml = items.map((item) => {
    const icono = iconoTematico(item.nombre) || ICONOS_RESPALDO[indiceRespaldo++ % ICONOS_RESPALDO.length];
    return `
    <div class="seal">
      <div class="seal-icon">${icono}</div>
      <div class="seal-label">${item.nombre.toUpperCase()}</div>
    </div>
  `;
  }).join('');

  return `
    <div class="divider"><span>Símbolos y poderes</span></div>
    <div class="seals">${sellosHtml}</div>
  `;
}

// Arma la franja de familia/vinculos
function renderizarFamilia(personaje) {
  if (!personaje.familia || personaje.familia.length === 0) return '';

  const itemsHtml = personaje.familia.map(f => `
    <div class="family-item">
      <b>${f.nombre}</b>${f.tipo_relacion}
    </div>
  `).join('');

  return `
    <div class="divider"><span>Vínculos familiares</span></div>
    <div class="family-strip">${itemsHtml}</div>
  `;
}

// Arma la franja de datos adicionales: origen, dominio (dioses),
// guarida y amenaza (monstruos). Solo muestra los campos que
// realmente tengan valor, para no dejar espacios vacios.
function renderizarInfoAdicional(personaje) {
  const campos = [
    { etiqueta: 'Origen', valor: personaje.origen },
    { etiqueta: 'Dominio', valor: personaje.dominio },
    { etiqueta: 'Guarida', valor: personaje.guarida },
    { etiqueta: 'Amenaza', valor: personaje.amenaza }
  ].filter(c => c.valor); // nos quedamos solo con los que tienen dato

  if (campos.length === 0) return '';

  const itemsHtml = campos.map(c => `
    <div class="info-item">
      <span class="info-label">${c.etiqueta}</span>
      <span class="info-value">${c.valor}</span>
    </div>
  `).join('');

  return `<div class="info-strip">${itemsHtml}</div>`;
}

// Arma la fila de historias relacionadas, cada una clickeable para
// saltar directo a esa historia. "mapaHistorias" es un diccionario
// slug -> numero de pagina, que armamos antes en iniciarLibro().
function renderizarHistoriasRelacionadas(personaje, mapaHistorias) {
  if (!personaje.historias || personaje.historias.length === 0) return '';

  const itemsHtml = personaje.historias.map(h => {
    const pagina = mapaHistorias[h.slug];
    // Si por algun motivo no encontramos la pagina, mostramos el
    // texto igual pero sin el atributo data-page (no sera clickeable)
    const atributoPagina = pagina !== undefined ? `data-page="${pagina}"` : '';
    return `<span class="chip-link" ${atributoPagina}>${h.titulo}</span>`;
  }).join('');

  return `
    <div class="divider"><span>Historias relacionadas</span></div>
    <div class="chip-row">${itemsHtml}</div>
  `;
}
// Arma el texto de un boton de compra con su precio: si hay un
// descuento aplicable (codigo activo o el general del libro, ver
// calcularPrecioMostrado en pagos.js) muestra el precio de lista
// tachado junto al rebajado; si no, solo el precio de lista. Sin
// precios cargados todavia (ver cargarPrecios en pagos.js), devuelve
// solo la etiqueta, sin monto.
function etiquetaConPrecio(nivel, etiqueta) {
  if (!window.calcularPrecioMostrado) return etiqueta;
  const { precioOriginal, precioFinal, porcentaje } = window.calcularPrecioMostrado(nivel);
  if (precioOriginal === null) return etiqueta;
  if (porcentaje > 0) {
    return `${etiqueta} — <s>${window.formatearMonto(precioOriginal, window.PRECIOS.moneda)}</s> ${window.formatearMonto(precioFinal, window.PRECIOS.moneda)}`;
  }
  return `${etiqueta} — ${window.formatearMonto(precioOriginal, window.PRECIOS.moneda)}`;
}

// Despues de aplicar un codigo de descuento (ver aplicarCodigoDesdeUI
// mas abajo), hay que refrescar el precio mostrado en CADA boton de
// compra que este montado en el libro en ese momento -- StPageFlip
// monta TODAS las hojas del libro de una sola vez (no solo la que se
// esta viendo), asi que puede haber varias hojas bloqueadas con su
// propio boton al mismo tiempo.
function actualizarPreciosEnPagina() {
  document.querySelectorAll('.locked-cta[data-nivel]').forEach(boton => {
    boton.innerHTML = etiquetaConPrecio(boton.dataset.nivel, boton.dataset.etiqueta);
  });
}
window.actualizarPreciosEnPagina = actualizarPreciosEnPagina;

// Muestra el mini-formulario de "tengo un codigo" de una hoja
// bloqueada en particular (identificada por su slug, para no chocar
// con los de otras hojas bloqueadas montadas al mismo tiempo).
window.mostrarFormularioCodigo = function mostrarFormularioCodigo(slug) {
  const form = document.getElementById(`codigoForm-${slug}`);
  if (form) form.hidden = false;
};

// Valida el codigo escrito en la hoja bloqueada "slug" contra el
// backend (ver aplicarCodigoDescuento en pagos.js) y, si es valido,
// refresca los precios mostrados en TODO el libro para reflejarlo.
window.aplicarCodigoDesdeUI = async function aplicarCodigoDesdeUI(slug) {
  const input = document.getElementById(`codigoInput-${slug}`);
  const mensaje = document.getElementById(`codigoMsg-${slug}`);
  if (!input || !mensaje || !input.value.trim()) return;

  mensaje.textContent = 'Validando...';
  const resultado = await window.aplicarCodigoDescuento(input.value.trim());
  if (resultado.valido) {
    mensaje.textContent = `Código aplicado: ${resultado.porcentaje}% de descuento.`;
    actualizarPreciosEnPagina();
  } else {
    mensaje.textContent = resultado.error || 'Código inválido';
  }
};

// Arma los botones de la hoja bloqueada segun haya o no sesion:
//   - Sin sesion: invita a loguearse (todavia no sabemos a quien cobrarle).
//   - Con sesion: botones de compra reales, con el precio real (si ya
//     cargo desde la API, ver pagos.js) para cada nivel que le falte,
//     mas un mini-formulario para ingresar un codigo de descuento.
//     Si ya tiene "flipbook" pero no "completo", solo ofrece ese.
function construirAccionesBloqueadas(slug) {
  const sesion = window.SESION;

  if (!sesion || !sesion.autenticado) {
    return `<button class="locked-cta" onclick="window.abrirModalAuth('login')">Iniciar sesión</button>`;
  }

  const nivelActual = nivelAccesoLibroActual();
  const nivelesAOfrecer = ['flipbook', 'completo'].filter(nivel => {
    const jerarquia = { ninguno: 0, flipbook: 1, completo: 2 };
    return jerarquia[nivel] > jerarquia[nivelActual];
  });

  const etiquetas = { flipbook: 'Acceso al flipbook', completo: 'Acceso completo (+ PDF)' };
  const botonesHtml = nivelesAOfrecer.map(nivel => {
    const claseExtra = nivel === 'flipbook' && nivelesAOfrecer.length > 1 ? 'secundario' : '';
    return `<button class="locked-cta ${claseExtra}" data-nivel="${nivel}" data-etiqueta="${etiquetas[nivel]}" onclick="window.comprarNivel('${nivel}')">${etiquetaConPrecio(nivel, etiquetas[nivel])}</button>`;
  }).join('');

  return `
    <div class="locked-actions">${botonesHtml}</div>
    <div class="codigo-wrap">
      <button type="button" class="codigo-toggle" onclick="window.mostrarFormularioCodigo('${slug}')">¿Tenés un código de descuento?</button>
      <div class="codigo-form" id="codigoForm-${slug}" hidden>
        <input type="text" id="codigoInput-${slug}" class="codigo-input" placeholder="CÓDIGO" maxlength="50">
        <button type="button" class="locked-cta secundario" onclick="window.aplicarCodigoDesdeUI('${slug}')">Aplicar</button>
      </div>
      <p class="codigo-msg" id="codigoMsg-${slug}"></p>
    </div>
  `;
}

// Arma una hoja "bloqueada": se usa cuando el backend respondio 403
// porque el personaje/historia no es parte de la muestra gratuita y
// el usuario no tiene el nivel de acceso necesario. "titulo" es el
// nombre/titulo real (eso SI se muestra, como enganche) pero el
// contenido de adentro no.
function construirHojaBloqueada(slug, titulo, subtitulo, eyebrow) {
  return `
    <div class="p-face locked-face" data-slug="${slug}">
      <div class="eyebrow">${eyebrow}</div>
      <div class="title">${titulo}</div>
      <div class="subtitle">${subtitulo || ''}</div>
      <div class="locked-icon">🔒</div>
      <p class="locked-msg">Este contenido es parte del libro completo. Inicia sesión o consigue acceso para seguir leyendo.</p>
      ${construirAccionesBloqueadas(slug)}
    </div>
  `;
}

// Arma la hoja completa de un personaje: TODO en un solo lugar
// (a diferencia de la version anterior, que partia esto en dos hojas)
// "mapaHistorias" nos permite convertir los nombres de historias
// relacionadas en links clickeables.
function construirPaginaPersonaje(personaje, mapaHistorias) {
  if (personaje.bloqueado) {
    return construirHojaBloqueada(personaje.slug, personaje.nombre, personaje.epitetos, personaje.tipo);
  }

  // Si descripcion_larga viene vacia o nula, usamos un texto de respaldo
  // en vez de dejar que la pagina se rompa. Igual que en las historias,
  // si trae parrafos separados por linea en blanco (\n\n) los
  // respetamos como <p> propios en vez de un bloque unico corrido.
  const descripcion = personaje.descripcion_larga || 'Descripción pendiente de completar.';
  const parrafosPersonaje = descripcion.split(/\n\s*\n/);
  const primerParrafoPersonaje = parrafosPersonaje[0];
  const primeraLetra = primerParrafoPersonaje.charAt(0);
  const restoTexto = primerParrafoPersonaje.slice(1);
  const parrafosSiguientesHtml = parrafosPersonaje.slice(1).map(p => `<p>${p}</p>`).join('');

  // El retrato ahora flota DENTRO de ".page-scroll", pegado al texto
  // (igual que en el PDF impreso), en vez de ir aparte, centrado
  // arriba como un avatar circular chico -- asi se aprovecha mejor el
  // espacio y el personaje se ve mas grande y reconocible de entrada.
  const imagenHtml = personaje.imagen_principal
    ? `<img class="portrait" src="${personaje.imagen_principal}" alt="${personaje.nombre}">`
    : '';

  return `
    <div class="p-face" data-slug="${personaje.slug}">
      <div class="eyebrow">${personaje.tipo}${personaje.naturaleza ? ' · ' + personaje.naturaleza : ''}</div>
      <div class="title">${personaje.nombre}</div>
      <div class="subtitle">${personaje.epitetos || ''}</div>

      <div class="page-scroll">
        ${imagenHtml}
        <div class="body-txt">
          <p><span class="drop">${primeraLetra}</span>${restoTexto}</p>
          ${parrafosSiguientesHtml}
        </div>

        ${renderizarInfoAdicional(personaje)}
        ${renderizarSellos(personaje)}
        ${renderizarFamilia(personaje)}
        ${renderizarHistoriasRelacionadas(personaje, mapaHistorias)}
      </div>

      <div class="footer">— ${personaje.tipo.toUpperCase()} —</div>
    </div>
  `;
}

// Arma la hoja completa de una historia: resumen + texto completo
// + personajes que participan (clickeables) + fuente clasica.
// "mapaPersonajes" convierte los nombres de personajes en links.
function construirPaginaHistoria(historia, mapaPersonajes) {
  if (historia.bloqueado) {
    return construirHojaBloqueada(historia.slug, historia.titulo, historia.resumen, historia.tipo);
  }

  // Los textos de historias vienen con parrafos separados por doble
  // salto de linea (\n\n). Los separamos para renderizar cada uno
  // como un <p> real, en vez de un bloque unico de texto corrido.
  const parrafos = historia.texto_completo.split(/\n\s*\n/);
  const primerParrafo = parrafos[0];
  const primeraLetra = primerParrafo.charAt(0);
  const restoPrimerParrafo = primerParrafo.slice(1);

  const parrafosHtml = [
    `<p><span class="drop">${primeraLetra}</span>${restoPrimerParrafo}</p>`,
    ...parrafos.slice(1).map(p => `<p>${p}</p>`)
  ].join('');

  const personajesHtml = (historia.personajes || []).map(p => {
    const pagina = mapaPersonajes[p.slug];
    const atributoPagina = pagina !== undefined ? `data-page="${pagina}"` : '';
    return `<span class="chip-link" ${atributoPagina}>${p.nombre} <i>(${p.rol})</i></span>`;
  }).join('');

  const fuenteTexto = (historia.fuentes && historia.fuentes.length > 0)
    ? historia.fuentes.map(f => `${f.autor}, ${f.obra}`).join(' · ')
    : '';

  // Banner horizontal arriba del texto, como portada del capitulo (no
  // todos los libros tienen todavia sus imagenes de historia generadas,
  // por eso el chequeo -- ver scripts/migrar-imagenes-historias.js).
  const bannerHtml = historia.imagen_url
    ? `<img class="historia-banner" src="${historia.imagen_url}" alt="${historia.titulo}">`
    : '';

  return `
    <div class="p-face" data-slug="${historia.slug}">
      <div class="eyebrow">${historia.tipo}${historia.periodo ? ' · ' + historia.periodo : ''}</div>
      <div class="title" style="font-size:23px;">${historia.titulo}</div>
      <div class="subtitle">${historia.resumen || ''}</div>

      <div class="page-scroll">
        ${bannerHtml}
        <div class="body-txt">${parrafosHtml}</div>

        ${personajesHtml ? `
          <div class="divider"><span>Personajes</span></div>
          <div class="chip-row">${personajesHtml}</div>
        ` : ''}
      </div>

      <div class="footer">${fuenteTexto || '— historia —'}</div>
    </div>
  `;
}

// Paginas fijas que no vienen de la base de datos (portada, indice).
// "tituloLibro" viene YA resuelto desde "iniciarLibro()" (que lo pide
// junto con las listas de historias/personajes, ver
// "obtenerLibroActual()") -- si por lo que sea no llego a tiempo,
// caemos a un texto armado a partir del slug de la URL en vez de
// dejarlo vacio o, peor, con un libro fijo escrito a mano.
function construirPortada(tituloLibro) {
  const textoMitologia = tituloLibro || window.LIBRO_ACTUAL
    .replace(/-/g, ' ')
    .replace(/\b\w/g, letra => letra.toUpperCase());

  // La imagen de fondo es por libro (misma carpeta que el resto de
  // sus imagenes), asi que la armamos en JS con el slug real
  // (window.LIBRO_ACTUAL, ver auth.js) en vez de dejarla fija en el
  // CSS -- fija, TODOS los libros mostraban la escena griega de
  // fondo. Si el libro todavia no tiene su propia imagen (los otros 3
  // catalogos, por ahora), el navegador simplemente no pinta esa capa
  // y queda el degrade solo -- no rompe nada.
  //
  // OJO: el estilo va en un DIV APARTE (".cover-fondo"), no en el
  // "p-face" de afuera. StPageFlip pisa el atributo "style" de cada
  // hoja completo (no lo combina, lo REEMPLAZA) apenas la posiciona
  // en el libro -- si el fondo fuera un estilo inline del propio
  // "p-face", la libreria se lo comia y la portada quedaba sin
  // imagen. Un hijo aparte no lo toca.
  const fondoUrl = `/images/${window.LIBRO_ACTUAL}/portada-fondo.jpg`;
  const estiloFondo = `background-image: linear-gradient(180deg, rgba(19,18,23,0.35), rgba(19,18,23,0.6) 55%, rgba(19,18,23,0.92)), url('${fondoUrl}');`;

  return `
    <div class="p-face hard cover-inner cover-portada" data-density="hard">
      <div class="cover-fondo" style="${estiloFondo}"></div>
      <div class="cover-spacer-top"></div>
      <h1 class="cover-title">MYTHOLOGICA</h1>
      <div class="cover-mitologia">${textoMitologia}</div>
      <div class="cover-sub">Cosmogonía · Dioses · Héroes · Monstruos</div>
      <div class="cover-spacer-bottom"></div>
    </div>
  `;
}

// Cuantos items entran comodamente en una hoja de indice
// (si en el futuro haces la pagina mas grande, puedes subir este numero)
const ITEMS_POR_PAGINA_INDICE = 9;

// Funcion generica de indice: sirve tanto para historias como para
// personajes. "items" debe traer {nombre, tipo} cada uno (por eso,
// para historias, mapeamos "titulo" a "nombre" antes de llamarla).
// "tituloSeccion" es el encabezado que se ve en la hoja (ej: "Historias").
function construirIndice(items, inicioPagina, tituloSeccion) {
  const hojas = [];

  for (let i = 0; i < items.length; i += ITEMS_POR_PAGINA_INDICE) {
    const grupo = items.slice(i, i + ITEMS_POR_PAGINA_INDICE);

    const itemsHtml = grupo.map((item, j) => {
      const numeroDePaginaEnElLibro = inicioPagina + i + j;
      return `<li data-page="${numeroDePaginaEnElLibro}"><b>${item.nombre}</b><span>${item.tipo}</span></li>`;
    }).join('');

    hojas.push(`
      <div class="p-face">
        <div class="eyebrow">Contenidos</div>
        <div class="title" style="font-size:22px;">${tituloSeccion}</div>
        <ul class="idx-list">${itemsHtml}</ul>
        <div class="footer">— índice —</div>
      </div>
    `);
  }

  return hojas;
}

function construirContraportada() {
  // El emblema va aca (no en la portada, que ya tiene bastante con el
  // titulo sobre la imagen de fondo). Igual que el fondo de la portada,
  // va como background-image de un DIV hijo -- no como <img> -- para que
  // si el libro todavia no tiene su propio emblema (los catalogos sin
  // imagenes aun) simplemente no se pinte nada, en vez de mostrar el
  // icono roto de una imagen que no existe.
  const emblemaUrl = `/images/${window.LIBRO_ACTUAL}/portada-emblema.png`;
  return `
    <div class="p-face hard cover-inner" data-density="hard">
      <div class="cover-emblem" style="background-image:url('${emblemaUrl}');"></div>
      <div class="cover-sub">MYTHOLOGICA</div>
    </div>
  `;
}

// Hoja vacia usada solo para corregir la paridad del total de paginas
// (ver el comentario junto a "necesitaRelleno" en iniciarLibro). No es
// una pagina real del libro, por eso no lleva ningun contenido.
function construirHojaEnBlanco() {
  return `<div class="p-face"></div>`;
}

// ------------------------------------------------------------
// PASO 3: armar el libro completo e inicializar StPageFlip
// ------------------------------------------------------------

let pageFlip; // la guardamos afuera de la funcion para poder usarla en los botones

// Trae el titulo real del libro actual y de paso actualiza la topbar
// y el <title> de la pestaña (en vez del texto fijo que hay en el
// HTML) -- asi el flipbook egipcio no dice "conectado a tu base de
// datos" sin decir de que libro se trata. Esos dos elementos ya
// existen desde que carga la pagina, asi que no hay problema en
// tocarlos apenas responde el fetch.
//
// Devuelve el titulo (o null si algo falla) para que "iniciarLibro()"
// pueda escribirlo DIRECTO en el HTML de la portada en vez de andar
// parcheando el DOM despues: si se lo dejaba como un simple
// "dispara y no esperes" en paralelo, el fetch de "/api/libros" (una
// sola llamada chica) muchas veces terminaba ANTES de que la portada
// existiera en el DOM -- sobre todo en libros con pocos personajes o
// historias, donde el resto de "iniciarLibro()" tarda menos -- y el
// nombre de la mitologia en la portada se quedaba pegado en el valor
// de respaldo ("Mitología Griega") para cualquier libro.
async function obtenerLibroActual() {
  try {
    const libros = await fetch(`${API_URL}/libros`).then(r => r.json());
    const libro = libros.find(l => l.slug === window.LIBRO_ACTUAL);
    if (!libro) return null;
    const spanBrand = document.querySelector('.brand span');
    if (spanBrand) spanBrand.textContent = `VISTA DE LECTURA · ${libro.titulo.toUpperCase()}`;
    document.title = `Mythologica — ${libro.titulo}`;
    return libro;
  } catch (error) {
    // Si esto falla, el texto fijo del HTML se queda como esta -- no rompe nada.
    return null;
  }
}

async function iniciarLibro() {
  const bookEl = document.getElementById('book');
  const tocSelect = document.getElementById('tocSelect');

  try {
    // 1. Traemos las listas resumidas (historias y personajes) Y el
    // libro actual (para la topbar y el titulo real de la portada) en
    // paralelo -- ver el comentario en "obtenerLibroActual()" sobre
    // por que este ultimo NO va suelto de fondo sin esperarlo.
    const [listaHistorias, listaPersonajes, libroActual] = await Promise.all([
      obtenerListaHistorias(),
      obtenerListaPersonajes(),
      obtenerLibroActual()
    ]);

    // 2. Traemos la ficha COMPLETA de cada historia y cada personaje,
    // tambien en paralelo, para no esperar de a uno
    const [historiasCompletas, personajesCompletos] = await Promise.all([
      Promise.all(listaHistorias.map(h => obtenerHistoriaCompleta(h.slug))),
      Promise.all(listaPersonajes.map(p => obtenerPersonajeCompleto(p.slug)))
    ]);

    // 3. Calculamos EN QUE NUMERO DE PAGINA va a caer cada seccion,
    // antes de generar ningun HTML. El orden final del libro es:
    //   portada -> indice (historias y personajes juntos, sin separar) ->
    //   -> paginas de historias -> paginas de personajes -> contraportada
    const totalItemsIndice = historiasCompletas.length + personajesCompletos.length;
    const numHojasIndice = Math.ceil(totalItemsIndice / ITEMS_POR_PAGINA_INDICE);

    const inicioIndice = 1; // pagina 0 = portada
    const inicioHistorias = inicioIndice + numHojasIndice;
    const inicioPersonajes = inicioHistorias + historiasCompletas.length;

    // 4. Armamos dos "diccionarios" slug -> numero de pagina.
    // Esto es lo que permite que, desde la ficha de Medusa, el link
    // a "Perseo y Medusa" sepa exactamente a que pagina saltar (y viceversa).
    const mapaHistorias = {};
    historiasCompletas.forEach((h, i) => { mapaHistorias[h.slug] = inicioHistorias + i; });

    const mapaPersonajes = {};
    personajesCompletos.forEach((p, i) => { mapaPersonajes[p.slug] = inicioPersonajes + i; });

    // 5. Ahora si, construimos el HTML de cada seccion. El indice va
    // TODO junto en una sola lista (historias y personajes sin separar
    // en dos secciones tituladas distintas): como las paginas de
    // contenido tambien van consecutivas -- primero todas las
    // historias, despues todos los personajes, sin huecos entre medio
    // -- el item "i" de esta lista combinada cae siempre en la pagina
    // "inicioHistorias + i", sin importar si es una historia o un
    // personaje.
    const hojasIndice = construirIndice(
      [
        ...historiasCompletas.map(h => ({ nombre: h.titulo, tipo: h.tipo })),
        ...personajesCompletos.map(p => ({ nombre: p.nombre, tipo: p.tipo }))
      ],
      inicioHistorias,
      'Índice'
    );

    const paginasSinContraportada = [
      construirPortada(libroActual ? libroActual.titulo : null),
      ...hojasIndice,
      ...historiasCompletas.map(h => construirPaginaHistoria(h, mapaPersonajes)),
      ...personajesCompletos.map(p => construirPaginaPersonaje(p, mapaHistorias))
    ];

    // StPageFlip (con showCover:true) necesita que el total de paginas
    // sea IMPAR para que la portada y la contraportada queden cada una
    // sola en su propio lado del libro -- con un total par, la ultima
    // pagina termina sin pareja y se dibuja superpuesta con la anterior
    // (se detecto este bug real en libros con un numero par de
    // personajes+historias, ej. el hindu con 64 paginas). Si el total
    // daria par, agregamos una hoja en blanco justo antes de la
    // contraportada para corregirlo -- funciona para cualquier libro,
    // sin importar cuantos personajes/historias tenga.
    const necesitaRelleno = (paginasSinContraportada.length + 1) % 2 === 0;

    const paginasHtml = [
      ...paginasSinContraportada,
      ...(necesitaRelleno ? [construirHojaEnBlanco()] : []),
      construirContraportada()
    ];

    bookEl.innerHTML = paginasHtml.join('');

    // 6. Inicializamos StPageFlip. Agrandamos un poco la pagina respecto
    // a la version anterior, para que quepa mas texto sin que se corte.
    // "stretch" (en vez de "fixed") es lo que permite que el libro
    // crezca al entrar en pantalla completa: se ajusta al ancho de
    // ".stage-wrap", que en style.css tiene un max-width bastante mas
    // grande cuando <body> tiene la clase "is-fullscreen" (ver
    // iniciarBotonFullscreen). Subimos maxWidth/maxHeight para que ese
    // crecimiento no quede topado por el limite viejo (pensado solo
    // para el tamaño de lectura normal, no pantalla completa).
    pageFlip = new St.PageFlip(bookEl, {
      width: 420,
      height: 600,
      size: 'stretch',
      minWidth: 320,
      maxWidth: 820,
      minHeight: 460,
      maxHeight: 1160,
      showCover: true,
      usePortrait: false,
      maxShadowOpacity: 0.6,
      flippingTime: 700,
      mobileScrollSupport: false
    });

    pageFlip.loadFromHTML(document.querySelectorAll('#book .p-face'));

    // 7. Llenamos el selector superior con el nombre real de cada pagina.
    // Tiene que haber exactamente una opcion por cada "hoja" fisica que
    // cargamos arriba (para que los indices calcen), asi que si se
    // agrego la hoja en blanco de relleno, le sumamos una opcion oculta
    // en el mismo lugar -- nunca aparece en la lista desplegable, pero
    // mantiene sincronizados los indices con StPageFlip.
    const opciones = [
      'Portada',
      ...hojasIndice.map((_, i) => `Índice ${i + 1}`),
      ...historiasCompletas.map(h => h.titulo),
      ...personajesCompletos.map(p => p.nombre),
      ...(necesitaRelleno ? [null] : []), // null = hoja de relleno, opcion oculta
      'Contraportada'
    ];
    tocSelect.innerHTML = opciones
      .map((nombre, i) => nombre === null
        ? `<option value="${i}" hidden></option>`
        : `<option value="${i}">${nombre}</option>`)
      .join('');

    // 8. Conectamos los controles (botones y selector) a la libreria
    const indicator = document.getElementById('pageIndicator');
    const total = paginasHtml.length;

    function actualizarIndicador() {
      const actual = pageFlip.getCurrentPageIndex();
      indicator.textContent = `Página ${actual + 1} / ${total}`;
      tocSelect.value = actual;
    }

    pageFlip.on('flip', actualizarIndicador);
    actualizarIndicador();

    document.getElementById('nextBtn').addEventListener('click', () => pageFlip.flipNext());
    document.getElementById('prevBtn').addEventListener('click', () => pageFlip.flipPrev());
    tocSelect.addEventListener('change', e => pageFlip.flip(parseInt(e.target.value)));

    // 9. Hacemos clickeable CUALQUIER elemento con data-page: los nombres
    // del indice, los chips de "historias relacionadas" en cada personaje,
    // y los chips de "personajes" en cada historia. Usamos capture:true
    // para interceptar el click antes que StPageFlip (que tambien
    // escucha clicks para pasar hoja).
    document.addEventListener('click', (e) => {
      const item = e.target.closest('[data-page]');
      if (!item) return;

      e.preventDefault();
      e.stopPropagation();

      const numeroDePagina = parseInt(item.dataset.page);
      pageFlip.flip(numeroDePagina);
    }, true);

  } catch (error) {
    // Si algo falla (ej: el backend no esta corriendo), avisamos claro en pantalla
    console.error(error);
    bookEl.innerHTML = `
      <div class="loading-msg">
        No se pudo conectar con la API en ${API_URL}.<br>
        Verifica que el backend este corriendo (npm run dev).
      </div>`;
  }
}

// ------------------------------------------------------------
// Boton de pantalla completa: pone TODA la pagina en fullscreen (no
// solo el libro) para que la topbar y los botones de siguiente/
// anterior sigan estando ahi -- si solo pusieramos el libro en
// fullscreen, esos controles (que viven fuera de "stage-wrap" en el
// HTML) quedarian inaccesibles.
// ------------------------------------------------------------
function iniciarBotonFullscreen() {
  const boton = document.getElementById('btnFullscreen');
  if (!boton) return;

  function enFullscreen() {
    return Boolean(document.fullscreenElement);
  }

  function pintarBoton() {
    const activo = enFullscreen();
    boton.textContent = activo ? '⛶ Salir de pantalla completa' : '⛶ Pantalla completa';
    // ".is-fullscreen" en <body> es lo que hace crecer ".stage-wrap"
    // en style.css (StPageFlip esta en modo "stretch": se ajusta al
    // ancho de su contenedor). El "resize" disparado a mano es
    // necesario porque la libreria solo vuelve a medir su contenedor
    // cuando el viewport cambia de tamaño -- aca el viewport SI cambia
    // al entrar/salir de pantalla completa, pero lo disparamos igual
    // por las dudas (ej. si el cambio de layout no dispara uno solo).
    document.body.classList.toggle('is-fullscreen', activo);
    if (pageFlip) {
      requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
    }
  }

  boton.addEventListener('click', async () => {
    try {
      if (enFullscreen()) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      // Algunos navegadores/entornos (ej. un iframe sin permiso) pueden
      // rechazar la solicitud -- no rompemos nada, el boton simplemente
      // no logra cambiar de modo.
      console.error('No se pudo cambiar el modo de pantalla completa:', error);
    }
  });

  document.addEventListener('fullscreenchange', pintarBoton);
  pintarBoton();
}

// Arrancamos todo cuando el HTML ya esta listo
iniciarLibro();
iniciarBotonFullscreen();
