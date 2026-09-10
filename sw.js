// Service Worker for 최치원 오언시 눈도장 한시 암기 PWA
const CACHE_NAME = 'choi-chiwon-poems-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
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
  './assets/images/gangnam6.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching offline assets for all 3 poems');
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
  
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        return networkResponse;
      }).catch(() => {
        return caches.match('./index.html');
      });
    })
  );
});
