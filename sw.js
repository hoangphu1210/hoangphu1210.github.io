/* Poker Trainer service worker — generated at build time (see vite.config.ts). */
const CACHE = 'poker-trainer-8c45a6eb0168';
const PRECACHE = [
  "./",
  "./index.html",
  "./apple-touch-icon.png",
  "./favicon-32.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./manifest.webmanifest",
  "./assets/index-C4t7xcRO.js",
  "./assets/AIEditor-DptSZZbD.js",
  "./assets/CareerScreen-c-ANlXr7.js",
  "./assets/Icon-C1DnhSMV.js",
  "./assets/LearnHub-vabyYaJd.js",
  "./assets/SessionSummaryScreen-Dm-n3BNW.js",
  "./assets/drills-DET_xE3W.js",
  "./assets/analysis.worker-D2AHcgED.js",
  "./assets/home-photo-CFWxnIDu.webp",
  "./assets/index-BBVBtoZg.css"
];

// A new version installs in the background and waits: the page shows "Update ready" and
// switches over when you tap it (message 'skipWaiting'), so an open page never loses files.
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)));
});

self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    // Pages: network first so updates arrive, cached copy when offline.
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html')),
    );
    return;
  }
  // Built assets have hashed names, so a cached copy is always correct.
  event.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        }),
    ),
  );
});
