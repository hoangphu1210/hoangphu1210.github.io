/* Poker Trainer service worker — generated at build time (see vite.config.ts). */
const CACHE = 'poker-trainer-e2149102a335';
const PRECACHE = [
  "./",
  "./index.html",
  "./favicon-32.png",
  "./manifest.webmanifest",
  "./assets/index-BRG2Rmdo.js",
  "./assets/AIEditor-Dh34-p2y.js",
  "./assets/CareerRank-DXlnWhGV.js",
  "./assets/CareerScreen-fT5JsuGc.js",
  "./assets/Explain-rk-nXdF7.js",
  "./assets/Glossary-DIhVJpCv.js",
  "./assets/Icon-Bb_7WDSK.js",
  "./assets/LearnHub-Djb4Vqm3.js",
  "./assets/ReviewModal-DykIm-oR.js",
  "./assets/SessionSummaryScreen-DkrEfjDd.js",
  "./assets/TableScreen-CI1Pfg9H.js",
  "./assets/WelcomeLetter-COAb8CfY.js",
  "./assets/coachRecord-QsMxBlf-.js",
  "./assets/currentRank-BMxvP1bp.js",
  "./assets/gradeLater-Cu34xtZU.js",
  "./assets/i18n-CsVBZWU4.js",
  "./assets/i18nCore-BSaD_n76.js",
  "./assets/positions-lfMGG6Ey.js",
  "./assets/profile-MIVrglKA.js",
  "./assets/range-CdOpeP3P.js",
  "./assets/rankings-0eh9-Mo-.js",
  "./assets/ranks-DrgATtFk.js",
  "./assets/repo-wNsWwOVw.js",
  "./assets/routine-ZdQSYKgn.js",
  "./assets/routineProgress-XkH3XEVh.js",
  "./assets/scenario-CzuYgTU1.js",
  "./assets/useSpotAnalysis-ChOByGrd.js",
  "./assets/analysis.worker-CgLgrM2r.js",
  "./assets/banner-bartender-j1m7PJg2.webp",
  "./assets/banner-cigar-lounge-b6N4gwcB.webp",
  "./assets/banner-cocktails-BQi5-OBr.webp",
  "./assets/banner-decanter-BUy7re1g.webp",
  "./assets/banner-royal-flush-BnhL0SSV.webp",
  "./assets/banner-salon-BJCkU8tu.webp",
  "./assets/home-photo-CFWxnIDu.webp",
  "./assets/index-3npanRO-.css",
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
