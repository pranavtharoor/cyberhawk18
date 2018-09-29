// importScripts(
//   'precache-manifest.1304d9a5f63cf1adf4a148acea357e9f.js',
//   'https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js'
// );

// const workboxSW = new WorkboxSW();
// workboxSW.precache([]);
// workboxSW.router.registerRoute('/', workboxSW.strategies.cacheFirst());
// workboxSW.router.registerRoute('/login', workboxSW.strategies.cacheFirst());
// workboxSW.router.registerRoute('/register', workboxSW.strategies.cacheFirst());

// workboxSW.router.registerRoute(
//   new RegExp('/api/initgame'),
//   workboxSW.strategies.networkFirst({ cacheName: 'dynamic-cache' })
// );
// workboxSW.router.registerRoute(
//   new RegExp('/api/getTries'),
//   workboxSW.strategies.networkFirst({ cacheName: 'dynamic-cache' })
// );
// workboxSW.router.registerRoute(
//   new RegExp('/api/getTries'),
//   workboxSW.strategies.networkFirst({ cacheName: 'dynamic-cache' })
// );
// workboxSW.router.registerRoute(
//   new RegExp('/api/getStats'),
//   workboxSW.strategies.networkFirst({ cacheName: 'dynamic-cache' })
// );

// workboxSW.router.registerRoute(
//   new RegExp('^https://fonts\\.googleapis\\.com'),
//   workboxSW.strategies.cacheFirst({
//     cacheName: 'googleapis',
//     cacheExpiration: {
//       maxEntries: 20
//     },
//     cacheableResponse: { statuses: [0, 200] }
//   })
// );

// workboxSW.router.registerRoute(
//   new RegExp('^https://cdnjs\\.cloudflare\\.com/ajax/libs/font-awesome'),
//   workboxSW.strategies.cacheFirst({
//     cacheName: 'iconfonts',
//     cacheExpiration: {
//       maxEntries: 20
//     },
//     cacheableResponse: { statuses: [0, 200] }
//   })
// );

// workboxSW.router.registerRoute(
//   new RegExp('^https://fonts\\.gstatic\\.com'),
//   workboxSW.strategies.cacheFirst({
//     cacheName: 'googleapis',
//     cacheExpiration: {
//       maxEntries: 20
//     },
//     cacheableResponse: { statuses: [0, 200] }
//   })
// );
