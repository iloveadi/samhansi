// Service Worker for 최치원 오언시 눈도장 한시 암기 PWA
const CACHE_NAME = 'choi-chiwon-poems-v7';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './data/poems.js',
  './assets/images/icon.svg',
  './assets/images/icon-192.jpg',
  './assets/images/icon-512.jpg',
  './assets/images/scene1.jpg',
  './assets/images/scene2.jpg',
  './assets/images/scene3.jpg',
  './assets/images/scene4.jpg',
  './assets/images/chokgyu1.jpg',
  './assets/images/chokgyu2.jpg',
  './assets/images/chokgyu3.jpg',
  './assets/images/chokgyu4.jpg',
  './assets/images/gangnam1.jpg',
  './assets/images/gangnam2.jpg',
  './assets/images/gangnam3.jpg',
  './assets/images/gangnam4.jpg',
  './assets/images/gangnam5.jpg',
  './assets/images/gangnam6.jpg',
  './assets/images/wunbong1.svg',
  './assets/images/wunbong2.svg',
  './assets/images/wunbong3.svg',
  './assets/images/wunbong4.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching offline assets for all 4 poems (v4)');
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('[Service Worker] Caching error:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Network-first for HTML / navigation so updates apply immediately
  if (event.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
          return networkResponse;
        })
        .catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first for images and other static assets
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
        }
        return networkResponse;
      });
    })
  );
});
