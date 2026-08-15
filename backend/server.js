// ============================================================
// server.js
// ------------------------------------------------------------
// Este es el punto de entrada del backend: aqui se arma el
// servidor Express, se conectan los middlewares (funciones que
// procesan cada peticion antes de llegar a las rutas) y se
// "enchufan" las rutas de cada recurso (personajes, historias, etc).
// ============================================================

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const { autenticarOpcional } = require('./middleware/auth');

const app = express(); // creamos la aplicacion Express

// En produccion, public/images vive en un volumen persistente (ver
// Railway) para que las imagenes que suba el admin sobrevivan a los
// redeploys -- pero un volumen nuevo arranca vacio, y eso taparia las
// imagenes que ya vienen versionadas en el repo. Por eso esas viven
// en public/images-seed (versionada en git) y, si public/images
// todavia no existe (primer arranque sobre un volumen vacio, o en
// local recien clonado), se copian una sola vez. Despues de esa
// primera vez, tanto las imagenes originales como las que suba el
// admin quedan en public/images para siempre.
const carpetaImagenes = path.join(__dirname, 'public/images');
const carpetaSemillaImagenes = path.join(__dirname, 'public/images-seed');
if (!fs.existsSync(carpetaImagenes) && fs.existsSync(carpetaSemillaImagenes)) {
  fs.cpSync(carpetaSemillaImagenes, carpetaImagenes, { recursive: true });
}

// Si el servidor corre detras de un proxy/tunel (nginx, ngrok,
// localtunnel, etc.), Express por defecto ve la IP del proxy, no la
// del visitante real. Con esto, "req.ip" lee el header
// "X-Forwarded-For" que pone el proxy, y queda con la IP real del
// visitante -- necesario para GET /api/pagos/precios, que geolocaliza
// esa IP para decidir si mostrar el precio en CLP o en USD (ver
// routes/pagos.js).
app.set('trust proxy', true);

// ------------------------------------------------------------
// MIDDLEWARES
// Se ejecutan en orden, ANTES de que la peticion llegue a las rutas
// ------------------------------------------------------------

// cors() permite que tu frontend (que correra en otro puerto/origen,
// ej. http://127.0.0.1:5500 con Live Server) pueda pedirle datos a
// este backend sin que el navegador lo bloquee por seguridad. La
// sesion viaja en un header "Authorization" (no en una cookie), asi
// que no necesitamos "credentials: true" aqui.
app.use(cors());

// express.json() le permite al servidor entender peticiones que
// traen datos en formato JSON en el body (util para cuando el editor
// guarde cambios, mas adelante).
app.use(express.json());

// Revisa el header "Authorization: Bearer <token>" en CADA peticion
// y deja el usuario logueado (o null) en "req.usuario", para que
// cualquier ruta pueda usarlo.
app.use(autenticarOpcional);

// Esto convierte la carpeta backend/public/images en una carpeta
// "publica": cualquier archivo que pongas ahi queda disponible en
// una URL como http://localhost:3001/images/medusa.jpg
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Servimos el frontend (landing, flipbook, panel de admin) desde el
// MISMO servidor/puerto que la API, en vez de necesitar Live Server
// aparte. Con esto, frontend/js/*.js pueden pedir la API con rutas
// relativas ("/api/...") en vez de "http://localhost:3001/api/...":
// mismo origen siempre, sin importar si se accede por localhost, por
// un tunel (localtunnel/ngrok) o por el dominio real el dia de
// mañana -- y de paso evita el aviso de "acceso a la red local" que
// Chrome muestra cuando un sitio publico (el tunel) le pide datos a
// localhost. http://localhost:3001/ sirve frontend/index.html (el
// landing) automaticamente.
app.use(express.static(path.join(__dirname, 'frontend')));

// ------------------------------------------------------------
// RUTAS
// Cada archivo dentro de /routes maneja un "recurso" de tu base
// de datos. Por ahora solo tenemos personajes; mas adelante
// agregaremos historias.js, libros.js, etc. con el mismo patron.
// ------------------------------------------------------------
const personajesRouter = require('./routes/personajes');
const historiasRouter = require('./routes/historias');
const pdfRouter = require('./routes/pdf');
const authRouter = require('./routes/auth');
const librosRouter = require('./routes/libros');
const pagosRouter = require('./routes/pagos');
const descuentosRouter = require('./routes/descuentos');

// Registro, login, logout y consulta de la sesion actual
app.use('/api/auth', authRouter);

// Catalogo de libros (mitologia griega hoy, otras mitologias despues)
app.use('/api/libros', librosRouter);

// Compra de niveles de acceso (MercadoPago)
app.use('/api/pagos', pagosRouter);

// Códigos de descuento y descuentos generales (panel de admin)
app.use('/api/descuentos', descuentosRouter);

// Todo lo que llegue a una URL que empiece con /api/personajes
// se lo pasamos al router que armamos en routes/personajes.js
app.use('/api/personajes', personajesRouter);

// Lo mismo para historias
app.use('/api/historias', historiasRouter);

// Y para la generacion del PDF completo
app.use('/api/pdf', pdfRouter);

// ------------------------------------------------------------
// INICIAR EL SERVIDOR
// ------------------------------------------------------------
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
