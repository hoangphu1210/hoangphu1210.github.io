/* Poker Trainer service worker — generated at build time (see vite.config.ts). */
const CACHE = 'poker-trainer-7bfcf5e0bcb5';
const PRECACHE = [
  "./",
  "./index.html",
  "./favicon-32.png",
  "./manifest.webmanifest",
  "./assets/index-CIS4MbKh.js",
  "./assets/AIEditor-DGvj3J9A.js",
  "./assets/CareerScreen-DwTt8rDE.js",
  "./assets/Glossary-DFOGsiTZ.js",
  "./assets/LearnHub-BHltuuR1.js",
  "./assets/RegularCard-RApY07f7.js",
  "./assets/ReviewModal-TbB4CeqW.js",
  "./assets/SessionSummaryScreen-CNmIzS0u.js",
  "./assets/TableScreen-Cx6uUtKi.js",
  "./assets/WelcomeLetter-D698N-4h.js",
  "./assets/analyze-CecbUp9S.js",
  "./assets/coachRecord-D-zYa7JI.js",
  "./assets/core-t97MwnmT.js",
  "./assets/currentRank-BRMciEe8.js",
  "./assets/focus-BTIDh4ms.js",
  "./assets/gradeLater-DlTwl_AO.js",
  "./assets/levels-_L2EyDP4.js",
  "./assets/lobbyAdvice-Cy57CpfR.js",
  "./assets/masterNotes-CR5ZfBkJ.js",
  "./assets/mistakes-D3lUhTYA.js",
  "./assets/playoutClient-TnHjXYme.js",
  "./assets/ranks-DRcPiRDO.js",
  "./assets/regrade--_nrw0Tw.js",
  "./assets/rolldown-runtime-BpQH8Ho1.js",
  "./assets/routine-DaRTu1hV.js",
  "./assets/routineProgress-C3KbxJaU.js",
  "./assets/scenario-CzkZVq41.js",
  "./assets/useSpotAnalysis-D8twhn4Q.js",
  "./assets/vendor-CbvoTWq0.js",
  "./assets/analysis.worker-OIXTEMej.js",
  "./assets/banner-bartender-j1m7PJg2.webp",
  "./assets/banner-cigar-lounge-b6N4gwcB.webp",
  "./assets/banner-cocktails-BQi5-OBr.webp",
  "./assets/banner-decanter-BUy7re1g.webp",
  "./assets/banner-royal-flush-BnhL0SSV.webp",
  "./assets/banner-salon-BJCkU8tu.webp",
  "./assets/home-photo-v2UVFhdX.webp",
  "./assets/index-DrrJXyQP.css",
  "./assets/memberNotes-CXyo36a_.json",
  "./assets/mtt.worker-Cq67LMA_.js",
  "./assets/playfair-display-latin-ext-wght-italic-ze_cPdSg.woff2",
  "./assets/playfair-display-latin-ext-wght-normal-CT1r92Rl.woff2",
  "./assets/playfair-display-latin-wght-italic-DmbndNpe.woff2",
  "./assets/playfair-display-latin-wght-normal-BOwq7MWX.woff2",
  "./assets/playfair-display-vietnamese-wght-italic-DUEcMSM3.woff2",
  "./assets/playfair-display-vietnamese-wght-normal-Cabi7G8-.woff2",
  "./assets/playout.worker-CJvUlGUc.js"
];
/**
 * This version's files that load only when needed (the Vietnamese and Chinese dictionaries, the
 * session pictures, the title font's Cyrillic files): not downloaded at install, but one an earlier
 * version cached (it was used) is kept — a hashed name is the same file — so an update doesn't lose
 * it (an offline launch after an update still opens in your language).
 */
const ON_DEMAND = [
  "./assets/vi-rest-akR76Sq3.js",
  "./assets/vi-start-BoPogqez.js",
  "./assets/zh-rest-uUAyl78G.js",
  "./assets/zh-start-DhXbzQuv.js",
  "./assets/brief-1@68-BNCq_gNJ.webp",
  "./assets/brief-2@47-Tbn027pP.webp",
  "./assets/fortune-1@44-vZRYm14s.webp",
  "./assets/fortune-2@44-DA80DzWx.webp",
  "./assets/fortune-3@38-DcvkTgMr.webp",
  "./assets/honour-1-CQwa84An.webp",
  "./assets/honour-2@56-PLJ3MxVS.webp",
  "./assets/honour-3-C0xtgPTQ.webp",
  "./assets/lesson-1@45-w2U6Fd0I.webp",
  "./assets/lesson-2@45-sAcynawT.webp",
  "./assets/lesson-3@42-Dd3Rllhc.webp",
  "./assets/playfair-display-cyrillic-wght-italic-D5dBZ3aJ.woff2",
  "./assets/playfair-display-cyrillic-wght-normal-5WvUvBgz.woff2",
  "./assets/ruin-1@47-CSOLCUbG.webp",
  "./assets/ruin-2-PJjkBzrQ.webp",
  "./assets/ruin-3@52-3h9xVav0.webp",
  "./assets/ruin-4@57-CzEvOyyU.webp",
  "./assets/triumph-1-CEwiYAe5.webp",
  "./assets/triumph-2@15-BIDI5Df-.webp",
  "./assets/triumph-3-9t5e4HnR.webp",
  "./assets/victory-1@43-srvqHWa1.webp",
  "./assets/victory-2@53-s8vcIy0G.webp",
  "./assets/victory-3-GDJc3cVY.webp"
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
      // What an earlier version fetched when needed, and this version still uses: kept (never fetched here).
      await Promise.all(
        ON_DEMAND.map(async (url) => {
          for (const k of earlier) {
            const kept = await (await caches.open(k)).match(url);
            if (kept) return cache.put(url, kept);
          }
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
