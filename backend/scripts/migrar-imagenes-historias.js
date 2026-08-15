// ============================================================
// scripts/migrar-imagenes-historias.js
// ------------------------------------------------------------
// Agrega la columna "imagen_url" a "historias" (banner de la
// historia, mismo concepto que "personajes.imagen_principal" pero
// sin endpoint de subida propio -- por ahora se sube el archivo a
// mano a backend/public/images/<libro>/historias/<slug>.jpg y se
// setea la URL con este mismo script) y carga las 20 URLs del
// griego, que ya tiene sus imagenes generadas.
//
// Idempotente: se puede volver a correr sin romper nada.
// ============================================================

const pool = require('../config/db');

const HISTORIAS_CON_IMAGEN_GRIEGO = [
  'origen-del-cosmos', 'titanomaquia', 'reparto-del-cosmos', 'perseo-y-medusa',
  'teseo-y-el-minotauro', 'doce-trabajos-de-heracles', 'jason-y-el-vellocino-de-oro',
  'guerra-de-troya', 'odisea-regreso-de-odiseo', 'rapto-de-persefone', 'orfeo-y-euridice',
  'io-y-argos', 'belerofonte-y-la-quimera', 'amor-de-ares-y-afrodita', 'icaro-y-el-vuelo',
  'atalanta-carrera-manzanas', 'tifon-contra-zeus', 'nacimiento-de-dioniso',
  'artemis-y-acteon', 'edipo-y-la-esfinge'
];

async function agregarColumna() {
  const [columnas] = await pool.query('SHOW COLUMNS FROM historias LIKE ?', ['imagen_url']);
  if (columnas.length > 0) {
    console.log('  - La columna "imagen_url" ya existía.');
    return;
  }
  await pool.query('ALTER TABLE historias ADD COLUMN imagen_url VARCHAR(255) NULL AFTER periodo');
  console.log('  - Columna "imagen_url" creada.');
}

async function poblarUrlsGriego() {
  let n = 0;
  for (const slug of HISTORIAS_CON_IMAGEN_GRIEGO) {
    const url = `/images/mitologia-griega/historias/${slug}.jpg`;
    const [r] = await pool.query(
      'UPDATE historias SET imagen_url = ? WHERE slug = ? AND (imagen_url IS NULL OR imagen_url != ?)',
      [url, slug, url]
    );
    if (r.affectedRows === 1) n++;
  }
  console.log(`  - ${n} historias del griego actualizadas con su imagen_url (de ${HISTORIAS_CON_IMAGEN_GRIEGO.length}).`);
}

async function main() {
  console.log('Migrando imagenes de historias...\n');
  await agregarColumna();
  await poblarUrlsGriego();
  console.log('\nListo.');
  process.exit(0);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
