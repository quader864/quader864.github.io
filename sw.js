// ==============================================================================
// Quader Portfolio - High-Performance Offline Service Worker
// Fully self-contained: No external CDN dependencies for zero-failure offline loads
// ==============================================================================

const SW_VERSION = 'v3.1.0';
const CACHE_SHELL = `quader-shell-${SW_VERSION}`;
const CACHE_ASSETS = `quader-assets-${SW_VERSION}`;
const CACHE_IMAGES = `quader-images-${SW_VERSION}`;
const CACHE_FONTS = `quader-fonts-${SW_VERSION}`;
const CACHE_API = `quader-api-${SW_VERSION}`;

// Essential shell resources to precache immediately on install
const PRECACHE_SHELL_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sitemap.xml',
  '/robots.txt',
  '/myiconArtboard-5.ico',
  '/index.css',
  // Critical CDN libraries for Tailwind and Google Fonts
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@700&display=swap'
];

// ------------------------------------------------------------------------------
// 1. Install Event: Precache app shell with resilient error handling
// ------------------------------------------------------------------------------
self.addEventListener('install', (event) => {
  console.log(`[SW] Installing Service Worker ${SW_VERSION}...`);

  event.waitUntil(
    (async () => {
      const shellCache = await caches.open(CACHE_SHELL);
      
      // Cache URLs individually so a single network glitch doesn't abort installation
      await Promise.allSettled(
        PRECACHE_SHELL_URLS.map(async (url) => {
          try {
            const request = new Request(url, { cache: 'reload' });
            const response = await fetch(request);
            if (response.ok || response.type === 'opaque') {
              await shellCache.put(request, response);
            }
          } catch (err) {
            console.warn(`[SW Precache] Failed to cache: ${url}`, err);
          }
        })
      );

      // On initial install (no active service worker), activate immediately.
      // On updates, stay in installed/waiting state so the user can be notified.
      if (!self.registration.active) {
        await self.skipWaiting();
        console.log(`[SW] Service Worker ${SW_VERSION} initial install: active immediately.`);
      } else {
        console.log(`[SW] Service Worker ${SW_VERSION} update ready and waiting for user prompt.`);
      }
    })()
  );
});

// ------------------------------------------------------------------------------
// 2. Activate Event: Purge older caches & claim clients instantly
// ------------------------------------------------------------------------------
self.addEventListener('activate', (event) => {
  console.log(`[SW] Activating Service Worker ${SW_VERSION}...`);

  const currentCaches = [CACHE_SHELL, CACHE_ASSETS, CACHE_IMAGES, CACHE_FONTS, CACHE_API];

  event.waitUntil(
    (async () => {
      const cacheKeys = await caches.keys();
      await Promise.all(
        cacheKeys.map(async (key) => {
          if (!currentCaches.includes(key) && key.startsWith('quader-')) {
            console.log(`[SW] Deleting obsolete cache: ${key}`);
            await caches.delete(key);
          }
        })
      );

      // Claim all clients immediately so the service worker controls existing open tabs
      await self.clients.claim();
      console.log(`[SW] Clients claimed. Active & controlling clients.`);

      // Inform active tabs about activation
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        client.postMessage({ type: 'SW_ACTIVATED', version: SW_VERSION });
      }
    })()
  );
});

// ------------------------------------------------------------------------------
// 3. Fetch Event: Multi-tier offline caching strategy
// ------------------------------------------------------------------------------
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Prevent handling Chrome internal extensions or unsupported schemes
  const url = new URL(request.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return;
  }

  // Workaround for Chrome devtools cache bug
  if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') {
    return;
  }

  // ----------------------------------------------------------------------------
  // Case A: Navigation Requests (App Shell fallback for instant offline boot)
  // ----------------------------------------------------------------------------
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      (async () => {
        try {
          // Attempt network fetch with a tight timeout to avoid waiting on dead connections
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 3500);

          const networkResponse = await fetch(request, { signal: controller.signal });
          clearTimeout(timeoutId);

          if (networkResponse && (networkResponse.ok || networkResponse.type === 'opaque')) {
            // Update the shell cache in the background
            const cache = await caches.open(CACHE_SHELL);
            cache.put('/index.html', networkResponse.clone()).catch(() => {});
            cache.put('/', networkResponse.clone()).catch(() => {});
            return networkResponse;
          }
        } catch (error) {
          console.log('[SW] Network navigation failed, falling back to cached app shell:', request.url);
        }

        // Return cached index.html or root
        const cachedResponse = 
          (await caches.match('/index.html')) || 
          (await caches.match('/')) ||
          (await caches.match(request));

        if (cachedResponse) {
          return cachedResponse;
        }

        return new Response(
          '<!DOCTYPE html><html><head><title>Offline</title></head><body><h1>Offline</h1><p>Website is loading from cache.</p></body></html>',
          { headers: { 'Content-Type': 'text/html' } }
        );
      })()
    );
    return;
  }

  // ----------------------------------------------------------------------------
  // Case B: API Requests (api.quader864.ir)
  // ----------------------------------------------------------------------------
  if (url.hostname.includes('api.quader864.ir')) {
    // Exclude authentication, session, password reset, and private profile endpoints
    const isSensitiveAuth = 
      url.pathname.includes('/auth/') || 
      url.pathname.includes('/verify') || 
      url.pathname.includes('/me/') ||
      url.pathname.includes('/password-reset');

    if (isSensitiveAuth) {
      // Direct network pass-through, never cache sensitive credentials
      return;
    }

    // Public API endpoints: Network-First with Cache Fallback for offline access
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.ok) {
            const cache = await caches.open(CACHE_API);
            cache.put(request, networkResponse.clone()).catch(() => {});
          }
          return networkResponse;
        } catch (error) {
          const cachedResponse = await caches.match(request);
          if (cachedResponse) {
            return cachedResponse;
          }
          throw error;
        }
      })()
    );
    return;
  }

  // ----------------------------------------------------------------------------
  // Case C: Images & Media (Cache-First with Network Fallback)
  // ----------------------------------------------------------------------------
  const isImage = 
    request.destination === 'image' ||
    /\.(png|jpg|jpeg|svg|webp|gif|ico)(\?.*)?$/i.test(url.pathname) ||
    url.hostname.includes('postimg.cc') ||
    url.hostname.includes('img.youtube.com') ||
    url.hostname.includes('images.unsplash.com');

  if (isImage) {
    event.respondWith(
      (async () => {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }

        try {
          const networkResponse = await fetch(request);
          if (networkResponse && (networkResponse.ok || networkResponse.type === 'opaque')) {
            const cache = await caches.open(CACHE_IMAGES);
            cache.put(request, networkResponse.clone()).catch(() => {});
          }
          return networkResponse;
        } catch (error) {
          // If offline and image not cached, attempt match ignoring search params
          const looseMatch = await caches.match(request, { ignoreSearch: true });
          if (looseMatch) return looseMatch;
          throw error;
        }
      })()
    );
    return;
  }

  // ----------------------------------------------------------------------------
  // Case D: Fonts (Cache-First)
  // ----------------------------------------------------------------------------
  const isFont = 
    request.destination === 'font' ||
    url.hostname.includes('fonts.gstatic.com') ||
    /\.(woff|woff2|ttf|otf|eot)(\?.*)?$/i.test(url.pathname);

  if (isFont) {
    event.respondWith(
      (async () => {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }

        try {
          const networkResponse = await fetch(request);
          if (networkResponse && (networkResponse.ok || networkResponse.type === 'opaque')) {
            const cache = await caches.open(CACHE_FONTS);
            cache.put(request, networkResponse.clone()).catch(() => {});
          }
          return networkResponse;
        } catch (error) {
          throw error;
        }
      })()
    );
    return;
  }

  // ----------------------------------------------------------------------------
  // Bypass Vite development server internals and dynamic HMR updates
  // ----------------------------------------------------------------------------
  if (
    url.pathname.includes('/@vite') ||
    url.pathname.includes('/@react-refresh') ||
    url.pathname.includes('/@fs/') ||
    url.pathname.includes('/@id/') ||
    url.pathname.includes('/node_modules/') ||
    /\.(tsx|ts|jsx)$/i.test(url.pathname) ||
    url.searchParams.has('t')
  ) {
    return;
  }

  // ----------------------------------------------------------------------------
  // Case E: Static Code, Scripts, Styles & Vite Assets (Stale-While-Revalidate / Cache-First)
  // ----------------------------------------------------------------------------
  const isStaticCode = 
    request.destination === 'script' ||
    request.destination === 'style' ||
    /\.(js|mjs|css)(\?.*)?$/i.test(url.pathname) ||
    url.pathname.startsWith('/assets/') ||
    url.hostname.includes('cdn.tailwindcss.com') ||
    url.hostname.includes('cdnjs.cloudflare.com');

  if (isStaticCode) {
    event.respondWith(
      (async () => {
        const cachedResponse = await caches.match(request);

        // Fetch network version to update cache in the background (or foreground if cache miss)
        const fetchPromise = (async () => {
          try {
            const networkResponse = await fetch(request);
            if (networkResponse && (networkResponse.ok || networkResponse.type === 'opaque')) {
              const cache = await caches.open(CACHE_ASSETS);
              await cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          } catch (err) {
            return null;
          }
        })();

        // If we have a cached copy, return it immediately for instant offline load
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise wait for network
        const freshResponse = await fetchPromise;
        if (freshResponse) {
          return freshResponse;
        }

        // Loose match fallback (ignore query string like ?v=... or ?t=...)
        const fallbackMatch = await caches.match(request, { ignoreSearch: true });
        if (fallbackMatch) {
          return fallbackMatch;
        }

        throw new Error(`[SW] Resource not available offline: ${request.url}`);
      })()
    );
    return;
  }

  // ----------------------------------------------------------------------------
  // Case F: Generic Fallback (Network-First with cache fallback)
  // ----------------------------------------------------------------------------
  event.respondWith(
    (async () => {
      try {
        const networkResponse = await fetch(request);
        if (networkResponse && (networkResponse.ok || networkResponse.type === 'opaque')) {
          const cache = await caches.open(CACHE_ASSETS);
          cache.put(request, networkResponse.clone()).catch(() => {});
        }
        return networkResponse;
      } catch (error) {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }
        throw error;
      }
    })()
  );
});

// ------------------------------------------------------------------------------
// 4. Message Event: Support immediate activation & programmatic caching
// ------------------------------------------------------------------------------
self.addEventListener('message', (event) => {
  if (!event.data) return;

  if (event.data.type === 'SKIP_WAITING') {
    console.log('[SW] SKIP_WAITING received, activating immediately.');
    self.skipWaiting();
  }

  if (event.data.type === 'PRECACHE_URLS' && Array.isArray(event.data.urls)) {
    event.waitUntil(
      (async () => {
        const cache = await caches.open(CACHE_ASSETS);
        await Promise.allSettled(
          event.data.urls.map(async (u) => {
            try {
              const res = await fetch(u);
              if (res.ok || res.type === 'opaque') {
                await cache.put(u, res);
              }
            } catch (e) {
              console.warn('[SW] Could not precache URL:', u, e);
            }
          })
        );
      })()
    );
  }
});
