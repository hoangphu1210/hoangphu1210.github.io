/* Poker Trainer service worker — generated at build time (see vite.config.ts). */
const CACHE = 'poker-trainer-eca221528913';
const PRECACHE = [
  "./",
  "./index.html",
  "./favicon-32.png",
  "./manifest.webmanifest",
  "./assets/index-B5c95v9L.js",
  "./assets/AIEditor-bh_K5UA5.js",
  "./assets/CareerScreen-DW68tsWf.js",
  "./assets/Explain-Dvw6obNb.js",
  "./assets/Glossary-DvIKx49p.js",
  "./assets/Icon-D7AtAOci.js",
  "./assets/LearnHub-CZv40IIG.js",
  "./assets/ReviewModal-BxaqCRjx.js",
  "./assets/SessionSummaryScreen-CkLlJXGL.js",
  "./assets/TableScreen-DAN1o7d2.js",
  "./assets/WelcomeLetter-C6Otc3ZH.js",
  "./assets/coachRecord-CHyB_Nxz.js",
  "./assets/currentRank-DjNUTsdv.js",
  "./assets/gradeLater-YSM_hMWd.js",
  "./assets/i18n-DS2iAWuZ.js",
  "./assets/i18nCore-BSaD_n76.js",
  "./assets/opponentModel-C1RRJCnS.js",
  "./assets/positions-PwmGlU2m.js",
  "./assets/profile-Bs-96VV5.js",
  "./assets/range-CdOpeP3P.js",
  "./assets/rankings-CazNMA63.js",
  "./assets/ranks-BJR5bj-4.js",
  "./assets/repo-Dwo9OLVd.js",
  "./assets/rng-cS8mkU1p.js",
  "./assets/routine-DIOHldY2.js",
  "./assets/routineProgress-XkH3XEVh.js",
  "./assets/scenario-BgJIP30Y.js",
  "./assets/useSpotAnalysis-zgsm--08.js",
  "./assets/analysis.worker-BTfAEni0.js",
  "./assets/banner-bartender-j1m7PJg2.webp",
  "./assets/banner-cigar-lounge-b6N4gwcB.webp",
  "./assets/banner-cocktails-BQi5-OBr.webp",
  "./assets/banner-decanter-BUy7re1g.webp",
  "./assets/banner-royal-flush-BnhL0SSV.webp",
  "./assets/banner-salon-BJCkU8tu.webp",
  "./assets/home-photo-CFWxnIDu.webp",
  "./assets/index-Dh-kcMTf.css",
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
