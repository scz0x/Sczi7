// ===============================================
// Service Worker for Sczi7.com Portfolio
// Enables offline functionality and caching
// ===============================================

const CACHE_NAME = 'sczi7-portfolio-v1.0.0';
const OFFLINE_URL = '/offline.html';

// Assets to cache on install
const urlsToCache = [
  '/',
  '/index.html',
  '/src/assets/css/styles.css',
  '/src/assets/js/script.js',
  '/src/assets/js/language.js',
  '/src/assets/js/translations.js',
  '/src/assets/images/MyPhoto.jpg',
  '/src/assets/icon/icon.png',
  '/manifest.json',
  // Add CDN resources
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
];

// ===============================================
// INSTALL EVENT
// ===============================================
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[ServiceWorker] Install complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[ServiceWorker] Install failed:', error);
      })
  );
});

// ===============================================
// ACTIVATE EVENT
// ===============================================
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activating...');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[ServiceWorker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('[ServiceWorker] Activation complete');
      return self.clients.claim();
    })
  );
});

// ===============================================
// FETCH EVENT - Cache First Strategy
// ===============================================
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin) &&
      !event.request.url.includes('cdnjs.cloudflare.com') &&
      !event.request.url.includes('fonts.googleapis.com') &&
      !event.request.url.includes('fonts.gstatic.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          console.log('[ServiceWorker] Serving from cache:', event.request.url);
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        })
        .catch(() => {
          // If both cache and network fail, show offline page
          if (event.request.mode === 'navigate') {
            return caches.match(OFFLINE_URL);
          }
        });
      })
  );
});

// ===============================================
// BACKGROUND SYNC (Optional)
// ===============================================
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

function syncData() {
  console.log('[ServiceWorker] Background sync triggered');
  // Add your sync logic here
  return Promise.resolve();
}

// ===============================================
// PUSH NOTIFICATIONS (Optional - for future use)
// ===============================================
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/src/assets/icon/icon.png',
    badge: '/src/assets/icon/icon.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View',
        icon: '/src/assets/icon/icon.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/src/assets/icon/icon.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Sczi7 Portfolio', options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// ===============================================
// MESSAGE EVENT
// ===============================================
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => cache.addAll(event.data.urls))
    );
  }
});

console.log('[ServiceWorker] Loaded successfully');
