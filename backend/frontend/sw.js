// ============================================================
// sw.js -- Service worker de la PWA
// ------------------------------------------------------------
// Objetivo minimo y a proposito conservador: que el sitio sea
// "instalable" (icono en el celular, se abre en su propia ventana sin
// la barra del navegador) y que las cosas realmente estaticas (CSS,
// JS, iconos) carguen mas rapido en visitas repetidas. NO intenta
// hacer que el sitio funcione "offline" de verdad -- el contenido
// (historias, personajes, el carrito, el catalogo) siempre depende de
// una sesion y de datos que pueden cambiar, asi que cachearlo traeria
// mas problemas (mostrar contenido pago viejo, o de otra sesion) que
// beneficios.
//
// Se registra con scope "/" (ver frontend/js/pwa.js) porque este
// archivo vive en la raiz del sitio estatico -- controla TODAS las
// paginas (landing, lector, admin), pero solo intercepta pedidos
// GET del propio sitio que no sean ni la API ni una pagina dinamica.
// ============================================================

const CACHE_NOMBRE = 'mythologica-v1';

self.addEventListener('install', () => {
  // No usamos self.skipWaiting()+un precache fijo con cache.addAll():
  // si UN solo archivo de esa lista fallara (404, red caida), toda la
  // instalacion del service worker fallaria con el. En vez de eso, el
  // cache se va llenando solo, pedido por pedido, en el handler de
  // "fetch" de mas abajo -- mas simple y sin ese riesgo de todo o nada.
  self.skipWaiting();
});

self.addEventListener('activate', (evento) => {
  // Borra caches de versiones anteriores (si el dia de mañana se sube
  // un sw.js con un CACHE_NOMBRE nuevo) para no ir acumulando basura
  // vieja en el disco del usuario para siempre.
  evento.waitUntil(
    caches.keys().then((claves) =>
      Promise.all(claves.filter((clave) => clave !== CACHE_NOMBRE).map((clave) => caches.delete(clave)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evento) => {
  const { request } = evento;
  const url = new URL(request.url);

  // Solo tocamos pedidos GET del propio origen -- todo lo demas
  // (POST/PUT/DELETE, o pedidos a otro dominio como Google Fonts o
  // MercadoPago) sigue su curso normal, sin pasar por el cache.
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  // La API y las paginas dinamicas (el lector interactivo y las
  // paginas de aterrizaje por libro) NUNCA se cachean: dependen de la
  // sesion, del nivel de acceso comprado, o de contenido que puede
  // cambiar -- cachearlas arriesgaria mostrarle a alguien contenido
  // pago viejo, o de otra cuenta.
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/libro/')) return;

  // El resto (CSS, JS, imagenes, iconos, las paginas estaticas del
  // catalogo/carrito/admin): cache primero, y si no esta todavia, se
  // pide a la red y se guarda una copia para la proxima visita.
  evento.respondWith(
    caches.open(CACHE_NOMBRE).then((cache) =>
      cache.match(request).then((respuestaCacheada) => {
        if (respuestaCacheada) return respuestaCacheada;
        return fetch(request).then((respuestaRed) => {
          if (respuestaRed.ok) cache.put(request, respuestaRed.clone());
          return respuestaRed;
        });
      })
    )
  );
});
