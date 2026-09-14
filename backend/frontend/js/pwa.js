// ============================================================
// pwa.js
// ------------------------------------------------------------
// Registra el service worker (ver sw.js) para que el sitio se pueda
// "instalar" (icono en el celular/escritorio, se abre en su propia
// ventana). Se carga en todas las paginas publicas -- si el navegador
// no soporta service workers (o el registro falla por lo que sea), el
// sitio sigue funcionando exactamente igual, esto es una mejora
// aparte, no una dependencia.
// ============================================================

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((error) => {
      console.error('No se pudo registrar el service worker:', error);
    });
  });
}
