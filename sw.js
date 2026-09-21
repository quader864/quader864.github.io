// ==============================================================================
// Quader Portfolio - Scalable High-Performance Offline Service Worker
// Version: v4.3.0
// Architecture: Multi-Tier Cache-First / Stale-While-Revalidate with SPA Fallback
// ==============================================================================

const SW_VERSION = 'v4.4.0';
const CACHE_SHELL = `quader-shell-${SW_VERSION}`;
const CACHE_ASSETS = `quader-assets-${SW_VERSION}`;
const CACHE_IMAGES = `quader-images-${SW_VERSION}`;
const CACHE_FONTS = `quader-fonts-${SW_VERSION}`;
const CACHE_API = `quader-api-${SW_VERSION}`;

const CURRENT_CACHES = [
  CACHE_SHELL,
  CACHE_ASSETS,
  CACHE_IMAGES,
  CACHE_FONTS,
  CACHE_API
];

// Essential application shell resources to precache immediately
const PRECACHE_SHELL_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/index.css',
  '/sitemap.xml',
  '/robots.txt',
  '/myiconArtboard-5.ico',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-maskable-192.png',
  '/icon-maskable-512.png',
  '/apple-touch-icon.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Space+Grotesk:wght@500;600;700&display=swap'
];

// ------------------------------------------------------------------------------
// 1. Install Event: Precache app shell and immediately activate
// ------------------------------------------------------------------------------
self.addEventListener('install', (event) => {
  console.log(`[SW] Installing Service Worker ${SW_VERSION}...`);
  self.skipWaiting();

  event.waitUntil(
    (async () => {
      try {
        const shellCache = await caches.open(CACHE_SHELL);
        await Promise.allSettled(
          PRECACHE_SHELL_URLS.map(async (url) => {
            try {
              const request = new Request(url, { cache: 'reload' });
              const response = await fetch(request);
              if (response && (response.ok || response.type === 'opaque')) {
                await shellCache.put(request, response);
              }
            } catch (err) {
              console.debug(`[SW Precache] Optional resource skipped: ${url}`);
            }
          })
        );
        console.log(`[SW] Precache shell completed for ${SW_VERSION}`);
      } catch (err) {
        console.warn('[SW] Precache encountered non-fatal error:', err);
      }
    })()
  );
});

// ------------------------------------------------------------------------------
// 2. Activate Event: Clean up outdated caches & claim all open clients immediately
// ------------------------------------------------------------------------------
self.addEventListener('activate', (event) => {
  console.log(`[SW] Activating Service Worker ${SW_VERSION}...`);

  event.waitUntil(
    (async () => {
      // 1. Purge older versions of caches
      const cacheKeys = await caches.keys();
      await Promise.all(
        cacheKeys.map(async (key) => {
          if (!CURRENT_CACHES.includes(key) && key.startsWith('quader-')) {
            console.log(`[SW] Purging obsolete cache: ${key}`);
            await caches.delete(key);
          }
        })
      );

      // 2. Claim all open browser tabs immediately
      await self.clients.claim();
      console.log(`[SW] Claimed all clients under ${SW_VERSION}`);

      // 3. Notify active window tabs
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        client.postMessage({ type: 'SW_ACTIVATED', version: SW_VERSION });
      }
    })()
  );
});

// ------------------------------------------------------------------------------
// 3. Fetch Event: Intelligent multi-tier caching
// ------------------------------------------------------------------------------
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only intercept GET requests
  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);

  // Ignore unsupported protocols (chrome-extension, blob, data, etc.)
  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    return;
  }

  // Workaround for Chrome devtools cache bug
  if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') {
    return;
  }

  // Bypass Vite development internal websocket, HMR, and source module requests
  if (
    url.pathname.startsWith('/@') ||
    url.pathname.includes('__vite') ||
    url.pathname.includes('hot-update') ||
    url.searchParams.has('import') ||
    url.pathname.endsWith('.tsx') ||
    url.pathname.endsWith('.ts')
  ) {
    return;
  }

  // ----------------------------------------------------------------------------
  // Strategy A: HTML Navigation (SPA App Shell Fallback)
  // ----------------------------------------------------------------------------
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      (async () => {
        try {
          // Attempt network first to ensure fresh HTML
          const networkResponse = await fetch(request);
          if (networkResponse && (networkResponse.ok || networkResponse.type === 'opaque')) {
            const cache = await caches.open(CACHE_SHELL);
            cache.put('/index.html', networkResponse.clone()).catch(() => {});
            cache.put('/', networkResponse.clone()).catch(() => {});
            return networkResponse;
          }
        } catch (error) {
          console.debug('[SW] Network navigation offline, serving App Shell:', request.url);
        }

        // Offline Fallback: Return cached App Shell
        const cachedShell =
          (await caches.match('/index.html')) ||
          (await caches.match('/')) ||
          (await caches.match(request));

        if (cachedShell) {
          return cachedShell;
        }

        return new Response(
          '<!DOCTYPE html><html><head><title>Quader Portfolio</title><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="background:#020617;color:#fff;font-family:sans-serif;padding:2rem;text-align:center;"><h1>Quader Portfolio</h1><p>Offline App Shell loading...</p><a href="/" style="color:#38bdf8;">Reload</a></body></html>',
          { headers: { 'Content-Type': 'text/html' } }
        );
      })()
    );
    return;
  }

  // ----------------------------------------------------------------------------
  // Strategy B: JavaScript Chunks, CSS, and Build Assets (Stale-While-Revalidate)
  // ----------------------------------------------------------------------------
  const isStaticAsset =
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'worker' ||
    url.pathname.includes('/assets/') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.wasm') ||
    url.hostname.includes('cdn.tailwindcss.com');

  if (isStaticAsset) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_ASSETS);

        // 1. Check direct cache match
        const cachedResponse = await cache.match(request);

        // 2. Fetch fresh version from network in parallel
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && (networkResponse.ok || networkResponse.type === 'opaque')) {
              cache.put(request, networkResponse.clone()).catch(() => {});
            }
            return networkResponse;
          })
          .catch(async (fetchErr) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Loose match fallback (ignore query string)
            const looseMatch = await cache.match(request, { ignoreSearch: true });
            if (looseMatch) {
              return looseMatch;
            }
            throw fetchErr;
          });

        // If we have cached version, return immediately; otherwise wait for network
        return cachedResponse || fetchPromise;
      })()
    );
    return;
  }

  // ----------------------------------------------------------------------------
  // Strategy C: Images and Media (Cache-First with Network Fallback)
  // ----------------------------------------------------------------------------
  const isImage =
    request.destination === 'image' ||
    /\.(png|jpg|jpeg|svg|webp|gif|ico|avif)(\?.*)?$/i.test(url.pathname) ||
    url.hostname.includes('postimg.cc') ||
    url.hostname.includes('img.youtube.com') ||
    url.hostname.includes('images.unsplash.com');

  if (isImage) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_IMAGES);
        const cachedResponse = await cache.match(request);

        if (cachedResponse) {
          return cachedResponse;
        }

        try {
          const networkResponse = await fetch(request);
          if (networkResponse && (networkResponse.ok || networkResponse.type === 'opaque')) {
            cache.put(request, networkResponse.clone()).catch(() => {});
          }
          return networkResponse;
        } catch (error) {
          const looseMatch = await cache.match(request, { ignoreSearch: true });
          if (looseMatch) return looseMatch;
          throw error;
        }
      })()
    );
    return;
  }

  // ----------------------------------------------------------------------------
  // Strategy D: Web Fonts (Cache-First)
  // ----------------------------------------------------------------------------
  const isFont =
    request.destination === 'font' ||
    url.hostname.includes('fonts.gstatic.com') ||
    /\.(woff|woff2|ttf|otf|eot)(\?.*)?$/i.test(url.pathname);

  if (isFont) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_FONTS);
        const cachedResponse = await cache.match(request);

        if (cachedResponse) {
          return cachedResponse;
        }

        try {
          const networkResponse = await fetch(request);
          if (networkResponse && (networkResponse.ok || networkResponse.type === 'opaque')) {
            cache.put(request, networkResponse.clone()).catch(() => {});
          }
          return networkResponse;
        } catch (error) {
          const looseMatch = await cache.match(request, { ignoreSearch: true });
          if (looseMatch) return looseMatch;
          throw error;
        }
      })()
    );
    return;
  }

  // ----------------------------------------------------------------------------
  // Strategy E: Public API Responses (Network-First with Cache Fallback)
  // ----------------------------------------------------------------------------
  if (url.hostname.includes('api.quader864.ir')) {
    const isSensitiveAuth =
      url.pathname.includes('/auth/') ||
      url.pathname.includes('/verify') ||
      url.pathname.includes('/me/') ||
      url.pathname.includes('/password-reset');

    // Never cache private authentication requests
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
          // Serve cached API response when offline
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
  // Strategy F: General Default (Network with Cache Fallback & Auto-Cache)
  // ----------------------------------------------------------------------------
  event.respondWith(
    (async () => {
      try {
        const response = await fetch(request);
        if (response && response.status === 200 && response.type === 'basic') {
          const cache = await caches.open(CACHE_ASSETS);
          cache.put(request, response.clone()).catch(() => {});
        }
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
// 4. Message Event: Client coordination, precaching & responsiveness checks
// ------------------------------------------------------------------------------
self.addEventListener('message', (event) => {
  if (!event.data) return;

  // Responsiveness health check
  if (event.data.type === 'PING') {
    if (event.source && 'postMessage' in event.source) {
      event.source.postMessage({ type: 'PONG', version: SW_VERSION, timestamp: Date.now() });
    }
  }

  // Immediate update trigger
  if (event.data.type === 'SKIP_WAITING') {
    console.log('[SW] SKIP_WAITING received');
    self.skipWaiting();
  }

  // Precache dynamic chunk URLs sent from the client
  if (event.data.type === 'PRECACHE_URLS' && Array.isArray(event.data.urls)) {
    event.waitUntil(
      (async () => {
        const cache = await caches.open(CACHE_ASSETS);
        await Promise.allSettled(
          event.data.urls.map(async (u) => {
            try {
              const res = await fetch(u);
              if (res && (res.ok || res.type === 'opaque')) {
                await cache.put(u, res);
              }
            } catch (e) {
              console.debug('[SW] Could not precache URL:', u);
            }
          })
        );
      })()
    );
  }

  // Show rich notification directly from worker
  if (event.data.type === 'SHOW_NOTIFICATION') {
    const { title, options } = event.data;
    event.waitUntil(self.registration.showNotification(title, options));
  }

  // Schedule notification even when app/tab is closed
  if (event.data.type === 'SCHEDULE_NOTIFICATION') {
    const { title, options, delayMs = 5000 } = event.data;
    event.waitUntil(
      new Promise((resolve) => {
        setTimeout(async () => {
          try {
            await self.registration.showNotification(title, options);
          } catch (err) {
            console.warn('[SW] Scheduled notification error:', err);
          }
          resolve();
        }, delayMs);
      })
    );
  }
});

// ------------------------------------------------------------------------------
// 5. Web Push Notification Event
// ------------------------------------------------------------------------------
self.addEventListener('push', (event) => {
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
// 6. Notification Click & Action Routing
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
// 7. Background Sync Event
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
