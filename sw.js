/* Poker Trainer service worker — generated at build time (see vite.config.ts). */
const CACHE = 'poker-trainer-270b1c581a3c';
const PRECACHE = [
  "./",
  "./index.html",
  "./favicon-32.png",
  "./manifest.webmanifest",
  "./assets/index-D0PJNbLV.js",
  "./assets/AIEditor-DvWAZFat.js",
  "./assets/CareerScreen-B52X4Lfv.js",
  "./assets/Glossary-DMDb8OSg.js",
  "./assets/Icon-ZGjS0zwb.js",
  "./assets/LearnHub-DAsnOVCm.js",
  "./assets/RegularCard-B7XbgBfj.js",
  "./assets/ReviewModal-ChC0i5jI.js",
  "./assets/SessionSummaryScreen-DRSR7sCD.js",
  "./assets/TableScreen-C7daVsbO.js",
  "./assets/WelcomeLetter-BHDuMrMF.js",
  "./assets/coachEngine-CWH7cjen.js",
  "./assets/coachRecord-CBhB6fOG.js",
  "./assets/currentRank-ByzP4Be5.js",
  "./assets/firstGuess-CJ39vvlc.js",
  "./assets/focus-Btev2K9N.js",
  "./assets/funTable-D-PtMSgW.js",
  "./assets/gradeLater-B_4f6AV0.js",
  "./assets/hand-D0yJYoRI.js",
  "./assets/i18n-DtBNLXed.js",
  "./assets/i18nCore-BSaD_n76.js",
  "./assets/levels-SfEvOmh7.js",
  "./assets/lobbyAdvice-Cgz4oMq-.js",
  "./assets/masterNotes-DmZqcMGV.js",
  "./assets/mistakes-BTz7F7cR.js",
  "./assets/opponentModel-B39D_hxY.js",
  "./assets/preload-helper-BUnExHJu.js",
  "./assets/profile-CwwCB2Fm.js",
  "./assets/range-M3mAY_pR.js",
  "./assets/rangeModel-oFeNC66I.js",
  "./assets/rankings-DjrgzPEc.js",
  "./assets/ranks-D2fIPrEO.js",
  "./assets/regrade-BUs5JjNE.js",
  "./assets/repo-Bl63zn79.js",
  "./assets/routine-DoVCbigp.js",
  "./assets/routineProgress-XkH3XEVh.js",
  "./assets/scenario-amj9Kgq0.js",
  "./assets/stats-Bmuyijwj.js",
  "./assets/tableEvents-ZnGKgEps.js",
  "./assets/tuning-tVbjRpsE.js",
  "./assets/useSpotAnalysis-CHcMLy_r.js",
  "./assets/analysis.worker-DKEmANoU.js",
  "./assets/banner-bartender-j1m7PJg2.webp",
  "./assets/banner-cigar-lounge-b6N4gwcB.webp",
  "./assets/banner-cocktails-BQi5-OBr.webp",
  "./assets/banner-decanter-BUy7re1g.webp",
  "./assets/banner-royal-flush-BnhL0SSV.webp",
  "./assets/banner-salon-BJCkU8tu.webp",
  "./assets/home-photo-CFWxnIDu.webp",
  "./assets/index-BMej6i2V.css",
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
