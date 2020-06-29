
const cacheList = [
  '/',
  'manifest.json',
  '/css/app.5de1f60e.css/',
  '/img/logo.82b9c7a5.png',
  '/img/icons/android-chrome-192x192.png',
  '/img/icons/android-chrome-512x512.png',
  '/img/icons/android-chrome-maskable-192x192.png',
  '/img/icons/android-chrome-maskable-512x512.png',
  '/img/icons/apple-touch-icon.png',
  '/img/icons/apple-touch-icon-60x60.png',
  '/img/icons/apple-touch-icon-76x76.png',
  '/img/icons/apple-touch-icon-120x120.png',
  '/img/icons/apple-touch-icon-152x152.png',
  '/img/icons/apple-touch-icon-180x180.png',
  '/img/icons/favicon-16x16.png',
  '/img/icons/favicon-32x32.png',
  '/img/icons/msapplication-icon-144x144.png',
  '/img/icons/mstile-150x150.png',
  '/img/icons/icon-192x192.png',
  '/img/icons/icon-512x512.png',
  '/js/about.d223de02.js',
  '/js/about.d223de02.js.map',
  '/js/app.e94e504f.js',
  '/js/app.e94e504f.js.map',
  '/js/chunk-vendors.66fa6dc8.js',
  '/js/chunk-vendors.66fa6dc8.js.map',
  'favicon.ico',
  'index.html'
];

const log = msg => {
  console.log(`[ServiceWorker ${_version}] ${msg}`);
}

// Life cycle: INSTALL
self.addEventListener('install', event => {
  self.skipWaiting();
  log('INSTALL');
  caches.open(cacheName).then(cache => {
    log('Caching app shell');
    return cache.addAll(cacheList);
  })
});

// Life cycle: ACTIVATE
self.addEventListener('activate', event => {
  log('Activate');
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== cacheName) {
          log('Removing old cache ' + key);
          return caches.delete(key);
        }
      }));
    })
  );
});