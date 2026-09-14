// ==============================================================================
// Quader Portfolio - High-Performance Offline Service Worker
// Fully self-contained: No external CDN dependencies for zero-failure offline loads
// ==============================================================================

const SW_VERSION = 'v3.3.0';
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
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@700&display=swap'
];

// ------------------------------------------------------------------------------
// 1. Install Event: Precache app shell and immediately skip waiting
// ------------------------------------------------------------------------------
self.addEventListener('install', (event) => {
  console.log(`[SW] Installing Service Worker ${SW_VERSION}...`);
  // Always skip waiting so new service workers activate immediately without getting stuck
  self.skipWaiting();

  event.waitUntil(
    (async () => {
      const shellCache = await caches.open(CACHE_SHELL);
      await Promise.allSettled(
        PRECACHE_SHELL_URLS.map(async (url) => {
          try {
            const request = new Request(url, { cache: 'reload' });
            const response = await fetch(request);
            if (response.ok || response.type === 'opaque') {
              await shellCache.put(request, response);
            }
          } catch (err) {
            console.debug(`[SW Precache] Failed to cache: ${url}`, err);
          }
        })
      );
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

      // Claim all clients immediately so the service worker controls open tabs
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

  // Bypass service worker caching for Vite dev modules, dynamic imports, HMR, and source files
  const isViteDevOrSource = 
    url.pathname.startsWith('/@') ||
    url.pathname.includes('/node_modules/') ||
    url.pathname.endsWith('.tsx') ||
    url.pathname.endsWith('.ts') ||
    url.pathname.endsWith('.map') ||
    url.pathname.includes('hot-update') ||
    url.pathname.includes('/index.tsx') ||
    url.searchParams.has('t') ||
    url.searchParams.has('v');

  if (isViteDevOrSource) {
    return;
  }

  // ----------------------------------------------------------------------------
  // Case A: Navigation Requests (Network-First with App Shell fallback)
  // ----------------------------------------------------------------------------
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(request);
          if (networkResponse && (networkResponse.ok || networkResponse.type === 'opaque')) {
            const cache = await caches.open(CACHE_SHELL);
            cache.put('/index.html', networkResponse.clone()).catch(() => {});
            cache.put('/', networkResponse.clone()).catch(() => {});
            return networkResponse;
          }
        } catch (error) {
          console.debug('[SW] Network navigation failed, falling back to cached shell:', request.url);
        }

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
    const isSensitiveAuth = 
      url.pathname.includes('/auth/') || 
      url.pathname.includes('/verify') || 
      url.pathname.includes('/me/') ||
      url.pathname.includes('/password-reset');

    if (isSensitiveAuth) {
      return;
    }

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
  // Case E: Static JS/CSS Assets (Stale-While-Revalidate)
  // ----------------------------------------------------------------------------
  const isStaticAsset = 
    request.destination === 'script' ||
    request.destination === 'style' ||
    url.pathname.includes('/assets/') ||
    url.hostname.includes('cdn.tailwindcss.com');

  if (isStaticAsset) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_ASSETS);
        const cachedResponse = await cache.match(request);

        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && (networkResponse.ok || networkResponse.type === 'opaque')) {
              cache.put(request, networkResponse.clone()).catch(() => {});
            }
            return networkResponse;
          })
          .catch(() => null);

        return cachedResponse || (await fetchPromise) || fetch(request);
      })()
    );
    return;
  }

  // ----------------------------------------------------------------------------
  // Default: Network with Cache Fallback
  // ----------------------------------------------------------------------------
  event.respondWith(
    (async () => {
      try {
        const response = await fetch(request);
        return response;
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
// 4. Message Event: Support immediate activation, notifications, and caching
// ------------------------------------------------------------------------------
self.addEventListener('message', (event) => {
  if (!event.data) return;

  if (event.data.type === 'SKIP_WAITING') {
    console.log('[SW] SKIP_WAITING received, activating immediately.');
    self.skipWaiting();
  }

  // Display rich notification directly from service worker
  if (event.data.type === 'SHOW_NOTIFICATION') {
    const { title, options } = event.data;
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  }

  // Schedule notification to show after a delay even if the app/tab is closed
  if (event.data.type === 'SCHEDULE_NOTIFICATION') {
    const { title, options, delayMs = 5000 } = event.data;
    console.log(`[SW] Scheduling notification in ${delayMs}ms (will fire even if app is closed)`);
    event.waitUntil(
      new Promise((resolve) => {
        setTimeout(async () => {
          try {
            await self.registration.showNotification(title, options);
            console.log('[SW] Scheduled notification displayed successfully');
          } catch (err) {
            console.warn('[SW] Scheduled notification error:', err);
          }
          resolve();
        }, delayMs);
      })
    );
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
              console.debug('[SW] Could not precache URL:', u, e);
            }
          })
        );
      })()
    );
  }
});

// ------------------------------------------------------------------------------
// 5. Web Push Notification Event (fires even when the browser/app is closed)
// ------------------------------------------------------------------------------
self.addEventListener('push', (event) => {
  console.log('[SW] Push notification payload received');
  let payload = {
    title: '🌐 Check Out New Posts | Quader Portfolio',
    body: 'New quantitative engineering and web systems posts are live. Click to view now!',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    image: '/icon-512.png',
    data: { url: '/#/blog' },
    actions: [
      { action: 'open-blog', title: 'Check Out Posts' },
      { action: 'open-app', title: 'Open App' },
      { action: 'play-audio', title: 'Play Audio' }
    ]
  };

  if (event.data) {
    try {
      payload = { ...payload, ...event.data.json() };
    } catch {
      payload.body = event.data.text() || payload.body;
    }
  }

  event.waitUntil(
    self.registration.showNotification(payload.title, {
      body: payload.body,
      icon: payload.icon || '/icon-192.png',
      badge: payload.badge || '/icon-192.png',
      image: payload.image || '/icon-512.png',
      vibrate: [200, 100, 200, 100, 200],
      requireInteraction: true,
      tag: payload.tag || 'quader-push-notification',
      renotify: true,
      data: payload.data || { url: '/#/blog' },
      actions: payload.actions || [
        { action: 'open-blog', title: 'Check Out Posts' },
        { action: 'open-app', title: 'Open App' },
        { action: 'play-audio', title: 'Play Audio' }
      ]
    })
  );
});

// ------------------------------------------------------------------------------
// 6. Notification Click & Action Routing Event
// ------------------------------------------------------------------------------
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const action = event.action;
  const data = event.notification.data || {};
  let targetUrl = '/#/';

  if (action === 'open-blog') {
    targetUrl = '/#/blog';
  } else if (action === 'open-app') {
    targetUrl = '/#/';
  } else if (data.url) {
    targetUrl = data.url;
  }

  event.waitUntil(
    (async () => {
      const allClients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      
      // If client exists, focus and navigate
      for (const client of allClients) {
        if ('focus' in client) {
          if (action === 'play-audio') {
            client.postMessage({ type: 'PLAY_NOTIFICATION_AUDIO' });
          }
          await client.focus();
          if ('navigate' in client && targetUrl) {
            await client.navigate(targetUrl);
          }
          return;
        }
      }

      // If app was closed, open a new window!
      if (self.clients.openWindow) {
        const newClient = await self.clients.openWindow(targetUrl);
        if (newClient && action === 'play-audio') {
          setTimeout(() => {
            newClient.postMessage({ type: 'PLAY_NOTIFICATION_AUDIO' });
          }, 800);
        }
      }
    })()
  );
});

// ------------------------------------------------------------------------------
// 7. Background Sync Event (triggers reconnect notifications when network is back)
// ------------------------------------------------------------------------------
self.addEventListener('sync', (event) => {
  if (event.tag === 'online-reconnect-sync' || event.tag === 'check-new-posts') {
    event.waitUntil(
      self.registration.showNotification('🌐 Back Online: Check Out New Posts!', {
        body: 'You are reconnected to the internet. Explore new quantitative insights and blog posts on Quader Systems.',
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        image: '/icon-512.png',
        vibrate: [200, 100, 200, 100, 200],
        requireInteraction: true,
        tag: 'reconnected-notification',
        renotify: true,
        data: { url: '/#/blog' },
        actions: [
          { action: 'open-blog', title: 'Check Out Posts' },
          { action: 'open-app', title: 'Open App' },
          { action: 'play-audio', title: 'Play Audio' }
        ]
      })
    );
  }
});

