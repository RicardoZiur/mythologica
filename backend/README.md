# Mythologica — Backend

Guía paso a paso para dejar el backend funcionando en tu computador.

## 1. Requisitos previos
- Node.js instalado (verifica con `node -v` en la terminal — debe mostrar una versión, ej. `v20.x.x`)
- XAMPP con Apache y MySQL **iniciados** desde el Panel de Control
- La base de datos `mitologia_griega` ya creada en phpMyAdmin, con los archivos `.sql` importados en este orden:
  1. `mitologia_schema.sql`
  2. `datos_01_dioses.sql`
  3. `datos_02_poderes_olimpicos.sql`
  4. `datos_03_heroes.sql`
  5. `datos_04_monstruos.sql`
  6. `datos_05_personajes_secundarios.sql`
  7. `datos_06_historias.sql`

## 2. Instalar las dependencias

Abre la terminal en VS Code, ubícate dentro de la carpeta `backend/` y ejecuta:

```bash
npm install
```

Esto lee el `package.json` y descarga automáticamente: `express` (el framework del servidor), `mysql2` (el driver para hablar con MySQL), `cors` (para permitir que el frontend consulte esta API) y `dotenv` (para leer el archivo `.env`). También instala `nodemon`, que reinicia el servidor solo cada vez que guardas un cambio.

## 3. Configurar las variables de entorno

Copia el archivo `.env.example` y renómbralo a `.env`. Si tu XAMPP usa la configuración por defecto (usuario `root`, sin contraseña), no necesitas cambiar nada.

## 4. Levantar el servidor

```bash
npm run dev
```

Deberías ver en la terminal:

```
Servidor corriendo en http://localhost:3001
```

## 5. Probar que funciona

Abre el navegador en:
- `http://localhost:3001/` → debería mostrar un mensaje de texto simple
- `http://localhost:3001/api/personajes` → debería mostrar un JSON con todos los personajes
- `http://localhost:3001/api/personajes/medusa` → debería mostrar la ficha completa de Medusa, con sus símbolos, poderes y familia

Si ves esos JSON, ¡el backend está funcionando y conectado a tu base de datos real!

## Estructura del proyecto

```
backend/
├── config/
│   └── db.js           → conexión a MySQL (pool de conexiones)
├── routes/
│   └── personajes.js   → endpoints relacionados a personajes
├── .env                → tus credenciales (no se comparte)
├── .env.example        → plantilla de las credenciales
├── server.js           → arranca el servidor y conecta las rutas
└── package.json        → lista de dependencias y comandos
```

## Próximos pasos
- Agregar `routes/historias.js` con el mismo patrón que `personajes.js`
- Conectar el frontend (HTML/CSS/JS) a estos endpoints con `fetch()`
- Más adelante: endpoint para generar el PDF con Puppeteer

## Descargar imágenes automáticamente

En vez de buscar cada imagen a mano, puedes correr:

```bash
node scripts/descargar-imagenes.js
```

Esto busca en Wikipedia en español una imagen para cada personaje de tu base de datos, la descarga a `public/images/` y actualiza `imagen_principal` automáticamente. Al final te muestra un resumen con cuántas encontró y cuáles nombres no tuvieron resultado (esos los tendrás que agregar manualmente, como antes).

**Nota sobre licencias**: las imágenes de Wikipedia suelen ser de dominio público o de uso libre, pero si en algún momento piensas publicar o vender el libro, revisa la licencia específica de cada imagen en su página de Wikimedia Commons antes de usarla comercialmente.
