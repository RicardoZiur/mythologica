# Mythologica — Frontend

## Requisito: el backend debe estar corriendo

Antes de abrir esto, asegúrate de tener el backend levantado (`npm run dev` dentro de `backend/`), y que `http://localhost:3001/api/personajes` te muestre datos en el navegador.

## Cómo correr el frontend

**No abras los `.html` con doble click.** Los navegadores bloquean el `fetch()` cuando el archivo se abre directo desde el disco (protocolo `file://`).

El backend (`server.js`) sirve este frontend directamente como archivos estáticos, en el mismo puerto que la API — es la forma más simple y la que hay que usar siempre que se prueben pagos (ver más abajo):

1. Corré el backend (`npm run dev` dentro de `backend/`).
2. Abrí `http://localhost:3001/` — eso ya es el landing. El flipbook está en `http://localhost:3001/libro/index.html`.

`js/*.js` piden la API con rutas relativas (`/api/...`), así que esto funciona igual sin importar si accedes por `localhost`, por un túnel público (necesario para probar MercadoPago, que no acepta `back_urls` en `localhost`/`127.0.0.1`) o por el dominio real el día de mañana.

(Todavía se puede usar **Live Server** aparte para edición rápida con recarga automática, pero ojo: si accedés por `127.0.0.1:5500` en vez de por el backend, quedás en un origen distinto — el login funciona igual, pero la vuelta de un pago de MercadoPago no, porque la sesión vive en `localStorage`, que es por origen.)

## Qué hay en cada página

- **`index.html` (landing)**: la puerta de entrada del sitio. Vende la propuesta, muestra capturas
  reales del libro y manda con su CTA a `libro/index.html`. `js/landing.js` solo trae la cantidad
  real de personajes/historias para mostrarla en el hero (nada de negocio ni auth acá).
- **`libro/index.html` (flipbook)**: el visor real del libro. `js/app.js` pide los datos a la API,
  arma cada "hoja" en HTML y se las entrega a **StPageFlip** para el libro navegable. `js/auth.js`
  maneja la sesión (login/registro/nivel de acceso) y el botón de descarga del PDF.

## Qué hace `js/app.js`

1. Pide la lista de personajes e historias a `/api/personajes` y `/api/historias`.
2. Por cada uno, pide su ficha completa (con símbolos, poderes, familia y fuentes).
3. Convierte cada uno en una "hoja" de HTML con todo junto.
4. Le entrega esas hojas a la librería **StPageFlip** para armar el libro navegable.

## Estructura

```
frontend/
├── index.html         → landing de venta (puerta de entrada del sitio)
├── libro/index.html   → el flipbook, carga StPageFlip + auth.js + app.js
├── css/
│   ├── landing.css    → estilos del landing
│   └── style.css      → estilos del flipbook (editorial oscuro)
├── js/
│   ├── landing.js      → estadísticas reales en el hero del landing
│   ├── auth.js          → sesión, modal login/registro, botón de PDF
│   └── app.js            → conexión a la API + construcción de las páginas
└── img/landing/        → capturas del libro usadas en el landing
```

## Próximos pasos
- Cuando exista un segundo libro en el catálogo (ver `GET /api/libros`), conectar la sección
  "Catálogo" del landing a esa API en vez del teaser estático actual.
- Agregar retratos reales a los personajes que todavía no tienen imagen (ver nota de bugs abajo).
- Mover el editor de páginas a una vista real conectada a la API.

## Imágenes de personajes

Viven en `backend/public/images/<slug-del-libro>/<slug-del-personaje>.jpg` (ej.
`backend/public/images/mitologia-griega/medusa.jpg`) — una subcarpeta por libro, para que cuando
haya más de uno cada uno tenga las suyas separadas. `routes/personajes.js` arma esa ruta solo
(tanto al subir por `POST /:slug/imagen` como al armar la URL pública), buscando el libro del
personaje en la base.

## Bugs conocidos, sin resolver todavía
- 4 imágenes de personajes en `backend/public/images/mitologia-griega/` (`aquiles.jpg`,
  `medusa.jpg`, `minotauro.jpg`, `orfeo.jpg`) en realidad son páginas HTML de error guardadas con
  extensión `.jpg` (descarga fallida), no imágenes reales. Se ven rotas en el flipbook y en el PDF.
  (`ares.jpg` y `artemis.jpg` tenían el mismo problema y ya se reemplazaron.)
- La portada del flipbook (StPageFlip, tapa "hard") a veces renderiza con un texto fantasma
  superpuesto la primera vez que se muestra. Es cosmético, no afecta la lectura.
