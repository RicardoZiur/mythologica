// ============================================================
// middleware/auth.js
// ------------------------------------------------------------
// Maneja la sesion del usuario a partir de un token JWT que el
// frontend manda en el header "Authorization: Bearer <token>".
//
// Usamos un header en vez de una cookie a proposito: el frontend
// (Live Server, ej. http://127.0.0.1:5500) y el backend (Node, ej.
// http://localhost:3001) corren en distinto host, y las cookies con
// SameSite=Lax NO viajan entre "sitios" distintos (127.0.0.1 y
// localhost cuentan como sitios distintos para el navegador, aunque
// ambos sean tu propia maquina). Un header no tiene ese problema, y
// ademas sigue funcionando igual el dia que frontend y backend vivan
// en dominios reales distintos.
// ============================================================

const jwt = require('jsonwebtoken');
const pool = require('../config/db');

// Orden de niveles de acceso, de menor a mayor. Un usuario con un
// nivel puede ver todo lo que pida un nivel igual o menor.
const JERARQUIA_NIVELES = { ninguno: 0, flipbook: 1, completo: 2 };

// Libro que se usa cuando una peticion no especifica "?libro=<slug>"
// (hoy es el unico libro que existe; el dia que haya un segundo libro,
// esto hace que todo lo que el frontend actual ya pide sin ese parametro
// se siga comportando exactamente igual).
const LIBRO_POR_DEFECTO = 'mitologia-griega';

// ------------------------------------------------------------
// Middleware que SIEMPRE deja pasar la peticion, pero si trae un
// header "Authorization: Bearer <token>" valido, agrega los datos
// del usuario en "req.usuario". Si no hay token o es invalido/vencido,
// "req.usuario" queda en null (usuario anonimo / no logueado).
//
// El token solo confirma la IDENTIDAD (id del usuario); el rol y los
// niveles de acceso los volvemos a leer de la base de datos en cada
// peticion, en vez de confiar en lo que quedo guardado en el token
// al momento del login. Si no hicieramos esto, cuando subas el nivel
// de acceso de alguien que ya pago, esa persona seguiria viendo el
// contenido bloqueado hasta que cierre sesion y vuelva a entrar.
//
// El nivel de acceso es por LIBRO (tabla "accesos"), no global: un
// usuario puede tener "completo" en un libro y "ninguno" en otro. Por
// eso "req.usuario.accesosPorLibro" es un mapa {libro_id: nivel}, no
// un solo valor.
//
// Se monta globalmente en server.js para que cualquier ruta pueda
// revisar "req.usuario" si lo necesita.
// ------------------------------------------------------------
async function autenticarOpcional(req, res, next) {
  const encabezado = req.headers.authorization || '';
  const token = encabezado.startsWith('Bearer ') ? encabezado.slice(7) : null;
  req.usuario = null;

  if (token) {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      const [filas] = await pool.query(
        'SELECT id, nombre, email, rol, email_verificado FROM usuarios WHERE id = ?',
        [payload.id]
      );
      if (filas.length > 0) {
        const usuario = filas[0];
        const [accesos] = await pool.query(
          'SELECT libro_id, nivel_acceso FROM accesos WHERE usuario_id = ?',
          [usuario.id]
        );
        usuario.accesosPorLibro = {};
        for (const acceso of accesos) {
          usuario.accesosPorLibro[acceso.libro_id] = acceso.nivel_acceso;
        }
        req.usuario = usuario;
      }
    } catch (error) {
      req.usuario = null; // token invalido o vencido: tratamos como anonimo
    }
  }

  next();
}

// ------------------------------------------------------------
// Devuelve true si "usuario" (req.usuario) tiene al menos el nivel
// de acceso pedido PARA ESE LIBRO. Los administradores siempre tienen
// acceso total, en cualquier libro.
// ------------------------------------------------------------
function tieneNivel(usuario, libroId, nivelRequerido) {
  if (usuario && usuario.rol === 'admin') return true;
  const nivelUsuario = usuario && usuario.accesosPorLibro ? usuario.accesosPorLibro[libroId] : undefined;
  return JERARQUIA_NIVELES[nivelUsuario || 'ninguno'] >= JERARQUIA_NIVELES[nivelRequerido];
}

// ------------------------------------------------------------
// Busca el libro por slug (o el libro por defecto si la peticion no
// especifica "?libro=<slug>") y lo deja en "req.libro".
// ------------------------------------------------------------
async function resolverLibro(req, res, next) {
  try {
    const slug = req.query.libro || LIBRO_POR_DEFECTO;
    const [filas] = await pool.query('SELECT id, slug, titulo FROM libros WHERE slug = ?', [slug]);
    if (filas.length === 0) {
      return res.status(404).json({ error: `El libro "${slug}" no existe` });
    }
    req.libro = filas[0];
    next();
  } catch (error) {
    console.error('Error al resolver el libro:', error);
    res.status(500).json({ error: 'No se pudo resolver el libro' });
  }
}

// ------------------------------------------------------------
// Middleware "de corte": para rutas donde TODO el contenido exige
// el mismo nivel (ej. el PDF completo), sin logica de preview por
// item de por medio. Resuelve el libro (via "?libro=<slug>" o el
// default) y lo deja en "req.libro" para que la ruta lo reuse.
// ------------------------------------------------------------
function requiereNivel(nivelRequerido) {
  return [
    resolverLibro,
    (req, res, next) => {
      if (tieneNivel(req.usuario, req.libro.id, nivelRequerido)) return next();
      res.status(403).json({
        error: 'No tienes acceso a este contenido',
        requiere: nivelRequerido,
        libro: req.libro.slug
      });
    }
  ];
}

// Middleware para rutas exclusivas de administrador (ej. gestionar el
// nivel de acceso de otros usuarios).
function requiereAdmin(req, res, next) {
  if (req.usuario && req.usuario.rol === 'admin') return next();
  res.status(403).json({ error: 'Solo un administrador puede hacer esto' });
}

// Middleware para rutas que exigen estar logueado, sin importar el
// nivel de acceso (ej. iniciar una compra: hace falta saber QUIEN
// esta pagando).
function requiereSesion(req, res, next) {
  if (req.usuario) return next();
  res.status(401).json({ error: 'Tienes que iniciar sesión para hacer esto' });
}

module.exports = {
  autenticarOpcional,
  requiereNivel,
  requiereAdmin,
  requiereSesion,
  tieneNivel,
  resolverLibro,
  LIBRO_POR_DEFECTO,
  JERARQUIA_NIVELES
};
