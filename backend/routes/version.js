// ============================================================
// routes/version.js
// ------------------------------------------------------------
// Version actual del sitio (package.json) y su registro de cambios
// (config/changelog.json), para el panel de admin
// (frontend/admin/cambios.html). Solo administradores por ahora --
// no esta decidido todavia si conviene mostrarselo tambien a los
// usuarios comunes.
// ============================================================

const express = require('express');
const router = express.Router();
const { requiereAdmin } = require('../middleware/auth');
const pkg = require('../package.json');
const changelog = require('../config/changelog.json');

router.get('/', requiereAdmin, (req, res) => {
  res.json({ version: pkg.version, changelog });
});

module.exports = router;
