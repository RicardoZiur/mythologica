// ============================================================
// db.js
// ------------------------------------------------------------
// Este archivo se encarga UNICAMENTE de conectar Node con MySQL.
// Lo separamos del resto del codigo para que, si el dia de mañana
// cambias de base de datos o de credenciales, solo tengas que
// tocar este archivo y nada mas.
// ============================================================

// "require" es como el "import" de JS moderno, pero en la sintaxis
// clasica de Node (CommonJS). mysql2/promise nos da una version
// del driver de MySQL que funciona con async/await en vez de
// callbacks, que es mas facil de leer.
const mysql = require('mysql2/promise');

// dotenv lee el archivo .env y carga sus variables en "process.env"
// Por eso mas abajo podemos usar process.env.DB_HOST, etc.
require('dotenv').config();

// Un "pool" de conexiones es mas eficiente que abrir y cerrar una
// conexion nueva cada vez que llega una peticion: el pool mantiene
// varias conexiones abiertas y las reutiliza.
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true, // si no hay conexiones libres, espera en vez de fallar
  connectionLimit: 10,      // maximo de conexiones simultaneas abiertas
  queueLimit: 0             // 0 = sin limite de peticiones esperando en la cola
});

// Exportamos el pool para poder usarlo (hacer consultas) desde
// cualquier otro archivo del proyecto con: const pool = require('../config/db')
module.exports = pool;
