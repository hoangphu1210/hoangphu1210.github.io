/* Poker Trainer service worker — generated at build time (see vite.config.ts). */
const CACHE = 'poker-trainer-7f1497ea24cf';
const PRECACHE = [
  "./",
  "./index.html",
  "./favicon-32.png",
  "./manifest.webmanifest",
  "./assets/index--QBjjCTe.js",
  "./assets/AIEditor-CiBcx3SO.js",
  "./assets/CareerScreen-C06qPxT8.js",
  "./assets/Glossary-Cf6w6XBF.js",
  "./assets/Icon-M4hsn5QN.js",
  "./assets/LearnHub-BJ2QfUnC.js",
  "./assets/RegularCard-DTdrlNvE.js",
  "./assets/ReviewModal-SJqzTP49.js",
  "./assets/SessionSummaryScreen-2pnOUlTC.js",
  "./assets/TableScreen-DPT2bi1x.js",
  "./assets/WelcomeLetter-Dw3Yj1f1.js",
  "./assets/analyze-DCrtoTX3.js",
  "./assets/coachEngine-C-F381ao.js",
  "./assets/coachRecord-NqBWHgo7.js",
  "./assets/currentRank-CuI_i53J.js",
  "./assets/focus-DF2nAVdp.js",
  "./assets/gradeLater-CprAmtmL.js",
  "./assets/i18n-D4OHKxP3.js",
  "./assets/i18nCore-BSaD_n76.js",
  "./assets/levels-B3amd-LL.js",
  "./assets/lobbyAdvice-DAqnduup.js",
  "./assets/masterNotes-D2PTWqSS.js",
  "./assets/mistakes-ek1bIrSm.js",
  "./assets/playoutClient-tgnnlus-.js",
  "./assets/preload-helper-BUnExHJu.js",
  "./assets/profile-BgvGGqmg.js",
  "./assets/range-Dbq8tZJN.js",
  "./assets/rangeModel-ALoy-AVl.js",
  "./assets/ranks-D8Rlw8_0.js",
  "./assets/regrade-Dmy8FPWR.js",
  "./assets/repo-DokSX_Iv.js",
  "./assets/rich-CgmI6-_q.js",
  "./assets/routine-DUrlKVG6.js",
  "./assets/routineProgress-CnsTpq4G.js",
  "./assets/scenario-DHm24GG3.js",
  "./assets/stats-agJ3H2KQ.js",
  "./assets/tableEvents-C4fNdvbj.js",
  "./assets/tuning-CvPxaQRI.js",
  "./assets/useSpotAnalysis-JTl79ocr.js",
  "./assets/analysis.worker-B3UId4jd.js",
  "./assets/banner-bartender-j1m7PJg2.webp",
  "./assets/banner-cigar-lounge-b6N4gwcB.webp",
  "./assets/banner-cocktails-BQi5-OBr.webp",
  "./assets/banner-decanter-BUy7re1g.webp",
  "./assets/banner-royal-flush-BnhL0SSV.webp",
  "./assets/banner-salon-BJCkU8tu.webp",
  "./assets/home-photo-CFWxnIDu.webp",
  "./assets/index-DV_bKJ_h.css",
  "./assets/mtt.worker-CcrUilCT.js",
  "./assets/playfair-display-latin-ext-wght-italic-ze_cPdSg.woff2",
  "./assets/playfair-display-latin-ext-wght-normal-CT1r92Rl.woff2",
  "./assets/playfair-display-latin-wght-italic-DmbndNpe.woff2",
  "./assets/playfair-display-latin-wght-normal-BOwq7MWX.woff2",
  "./assets/playfair-display-vietnamese-wght-italic-DUEcMSM3.woff2",
  "./assets/playfair-display-vietnamese-wght-normal-Cabi7G8-.woff2",
  "./assets/playout.worker-DLx71J-u.js",
  "./assets/memberNotes-Bq-MyB6_.js"
];
/** How long a page waits for the server before this version's own copy opens instead (ms). */
const PAGE_WAIT = 3000;

// A new version installs in the background and waits: the page asks you to update and switches
// over when you tap it (message 'skipWaiting'), so an open page never loses files. A built file has
// its content's hash in its name, so one kept from an earlier version is the same file: an update
// downloads only what changed.
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      const earlier = (await caches.keys()).filter((k) => k !== CACHE);
      await Promise.all(
        PRECACHE.map(async (url) => {
          const hashed = url.startsWith('./assets/');
          if (hashed) {
            for (const k of earlier) {
              const kept = await (await caches.open(k)).match(url);
              if (kept) return cache.put(url, kept);
            }
          }
          // The page and the files without a hash (icons, the manifest) are checked with the server.
          const res = await fetch(new Request(url, { cache: hashed ? 'default' : 'no-cache' }));
          if (!res.ok) throw new Error(`${url}: ${res.status}`);
          return cache.put(url, res);
        }),
      );
    })(),
  );
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
    // Pages: from the server, so a new version opens at once — but on a slow or failing connection,
    // after PAGE_WAIT, this version's own page, which opens with the files cached with it (a newer
    // version then comes as an update).
    const own = caches.open(CACHE).then((c) => c.match('./index.html'));
    event.respondWith(
      new Promise((resolve) => {
        let settled = false;
        const answer = (res) => {
          if (settled || !res) return;
          settled = true;
          resolve(res);
        };
        const wait = setTimeout(() => own.then(answer), PAGE_WAIT);
        fetch(req).then(
          (res) => {
            clearTimeout(wait);
            answer(res);
          },
          () => {
            clearTimeout(wait);
            own.then((hit) => answer(hit ?? Response.error()));
          },
        );
      }),
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
