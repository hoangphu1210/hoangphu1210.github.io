/* Poker Trainer service worker — generated at build time (see vite.config.ts). */
const CACHE = 'poker-trainer-c2589e0605fe';
const PRECACHE = [
  "./",
  "./index.html",
  "./apple-touch-icon.png",
  "./favicon-32.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./manifest.webmanifest",
  "./assets/index-CZvq1w4p.js",
  "./assets/AIEditor-gqqgXzJw.js",
  "./assets/CareerRank-CwxzByCX.js",
  "./assets/CareerScreen-Crubw5oG.js",
  "./assets/LearnHub-S4hSWaIR.js",
  "./assets/ReviewModal-B30I9sOE.js",
  "./assets/SessionSummaryScreen-Am11ecyf.js",
  "./assets/WelcomeLetter-B8DlczW7.js",
  "./assets/coachRecord-CHyB_Nxz.js",
  "./assets/coachViz-CyPpuWro.js",
  "./assets/i18n-DshT7Suy.js",
  "./assets/analysis.worker-DVhk9xO7.js",
  "./assets/banner-bartender-j1m7PJg2.webp",
  "./assets/banner-cigar-lounge-b6N4gwcB.webp",
  "./assets/banner-cocktails-BQi5-OBr.webp",
  "./assets/banner-decanter-BUy7re1g.webp",
  "./assets/banner-royal-flush-BnhL0SSV.webp",
  "./assets/banner-salon-BJCkU8tu.webp",
  "./assets/home-photo-CFWxnIDu.webp",
  "./assets/index-Cwt2VyPd.css",
  "./assets/playfair-display-cyrillic-wght-italic-D5dBZ3aJ.woff2",
  "./assets/playfair-display-cyrillic-wght-normal-5WvUvBgz.woff2",
  "./assets/playfair-display-latin-ext-wght-italic-ze_cPdSg.woff2",
  "./assets/playfair-display-latin-ext-wght-normal-CT1r92Rl.woff2",
  "./assets/playfair-display-latin-wght-italic-DmbndNpe.woff2",
  "./assets/playfair-display-latin-wght-normal-BOwq7MWX.woff2",
  "./assets/playfair-display-vietnamese-wght-italic-DUEcMSM3.woff2",
  "./assets/playfair-display-vietnamese-wght-normal-Cabi7G8-.woff2"
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
