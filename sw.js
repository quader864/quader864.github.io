importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

if (self.workbox) {
  console.log('[SW] Workbox loaded successfully 🎉');
  
  // Disable console debug logs in production to keep developer panel clean, set to true to debug
  self.workbox.setConfig({ debug: false });

  // 1. Precise Precaching of the Core App Shell & Scripts
  const PRECACHE_MANIFEST = [
    { url: '/', revision: '1' },
    { url: '/index.html', revision: '1' },
    { url: '/manifest.json', revision: '1' },
    { url: '/types.ts', revision: '1' },
    { url: '/constants.ts', revision: '1' },
    { url: '/index.tsx', revision: '1' }
  ];

  // Essential external assets to precache (Vite and system dependencies used by the app layout)
  const EXTERNAL_LIBS = [
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.170.0/three.module.min.js',
    'https://aistudiocdn.com/react@^19.2.0',
    'https://aistudiocdn.com/react-dom@^19.2.0/',
    'https://aistudiocdn.com/react-router-dom@^7.9.6',
    'https://aistudiocdn.com/framer-motion@^12.23.24',
    'https://aistudiocdn.com/lucide-react@^0.555.0',
    'https://esm.sh/react-dom@^19.2.4'
  ];

  // Register precached app shell resources
  self.workbox.precaching.precacheAndRoute([
    ...PRECACHE_MANIFEST,
    ...EXTERNAL_LIBS.map(url => ({ url, revision: '1' }))
  ]);

  // SPA navigation fallback: Redirect page navigations directly to precached index.html
  self.workbox.routing.registerRoute(
    new self.workbox.routing.NavigationRoute(
      self.workbox.precaching.createHandlerBoundToURL('/index.html')
    )
  );

  // 2. Dynamic Asset Routing (Using Stale-While-Revalidate)

  // A. JavaScript & CSS chunks
  self.workbox.routing.registerRoute(
    ({ request }) => request.destination === 'script' || request.destination === 'style',
    new self.workbox.strategies.StaleWhileRevalidate({
      cacheName: 'quader-static-resources',
      plugins: [
        new self.workbox.expiration.ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days Cache Duration
        }),
      ],
    })
  );

  // B. Media & Images (covers relative images, Unsplash, postimg links, YouTube thumbnails, etc.)
  self.workbox.routing.registerRoute(
    ({ request, url }) => {
      const isImageDest = request.destination === 'image';
      const isImageHost = url.hostname.includes('postimg.cc') || 
                          url.hostname.includes('img.youtube.com') || 
                          url.hostname.includes('images.unsplash.com');
      const isImageExt = /\.(png|jpg|jpeg|svg|webp|gif|ico)/i.test(url.pathname);
      
      return isImageDest || isImageHost || isImageExt;
    },
    new self.workbox.strategies.StaleWhileRevalidate({
      cacheName: 'quader-images-cache',
      plugins: [
        // Ensure successful cross-origin fetch responses are cacheable
        new self.workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200]
        }),
        new self.workbox.expiration.ExpirationPlugin({
          maxEntries: 120,
          maxAgeSeconds: 60 * 24 * 60 * 60, // 60 Days Cache Duration
          purgeOnQuotaError: true,
        }),
      ],
    })
  );

  // C. Fonts (Google Fonts, webfonts, etc.)
  self.workbox.routing.registerRoute(
    ({ request }) => request.destination === 'font',
    new self.workbox.strategies.StaleWhileRevalidate({
      cacheName: 'quader-fonts-cache',
      plugins: [
        new self.workbox.expiration.ExpirationPlugin({
          maxEntries: 20,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 Year Cache Duration
        }),
      ],
    })
  );

  // 3. API Cached Routing (Network-First state with cache fallback)
  self.workbox.routing.registerRoute(
    ({ url }) => url.origin.includes('api.quader864.ir'),
    new self.workbox.strategies.NetworkFirst({
      cacheName: 'quader-api-cache',
      plugins: [
        new self.workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200]
        }),
        new self.workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days Validation Window
        }),
      ],
    })
  );

  // Support user-triggered SKIP_WAITING updates instantly
  self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  // Enable fast claim when the service worker is activated
  self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
  });

} else {
  console.error('[SW] Workbox could not be initialized from the Google CDN.');
}
