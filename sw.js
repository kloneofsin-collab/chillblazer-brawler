// generated at build time
const CACHE = 'chillblazer-brawler-r1-2a8bc84246'; // r1 = content round 1; old 'chillblazer-brawler-*' caches are purged on the first navigation onto this build
const PRECACHE = ["./","./assets/alley-wcwoZFB4.webp","./assets/amp-enforcer-portrait-160-BKeciZtK.jpg","./assets/amp-portrait-160-CA6N4QRy.jpg","./assets/calm-field-BvnmzyPR.png","./assets/calm-strike-DaqE85_k.png","./assets/canopy-B7gnCDog.webp","./assets/chill-blast-C4oYLnSI.png","./assets/chill-drop-128-pLilQkmo.webp","./assets/drone-CWvdx_ZT.webp","./assets/grid-row-XOaSoD_h.webp","./assets/hero-C2O18wf3.webp","./assets/hero-face-BNunNYdQ.png","./assets/holo-atlas-Cd4475eH.webp","./assets/hypeman-B7obpUbG.webp","./assets/index-DtxfdKPz.js","./assets/index-hfoKG9E-.css","./assets/jump-CH-GmXY1.png","./assets/last-stand-CZuZTu6F.webp","./assets/lock-on-lWSpzaNS.png","./assets/logo-800-CfWehud7.png","./assets/long-blast-badge-128-DmSPsUs6.webp","./assets/lose-VxtNXVRd.jpg","./assets/mast-gate-D8WgS_wx.webp","./assets/night-park-OIvp2sgh.webp","./assets/portrait-71rFsCbQ.jpg","./assets/shield-BHod08OK.webp","./assets/signs-atlas-OiKJRqLS.webp","./assets/speedster-CER6s6YY.webp","./assets/storm-CmWjaNw1.webp","./assets/story-00-intro-CPXNzGbJ.webp","./assets/story-01-noodle-row-C4gDtFY-.webp","./assets/story-02-bass-alley-B7UcUmF6.webp","./assets/story-03-laundromat-block-BHHjDrsV.webp","./assets/story-04-rooftop-relay-fC960_NG.webp","./assets/story-05-night-market-grIl5fk-.webp","./assets/story-06-southside-metro-DdvxLycK.webp","./assets/story-07-twist-enforcer-D28lfdng.webp","./assets/story-08-amp-tower-BDrGUveX.webp","./assets/story-09-ending-CCoX4_oJ.webp","./assets/subway-Q5a9lyD0.webp","./assets/title-key-BLJG8Hq4.jpg","./assets/win-qJhfotmv.jpg","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./manifest.webmanifest","./sfx/CREDITS.txt","./sfx/boss_amp_truck_horn.mp3","./sfx/boss_ground_strike.mp3","./sfx/boss_intro_stinger.mp3","./sfx/boss_phase_change.mp3","./sfx/boss_telegraph_warning.mp3","./sfx/combat_blast_fire.mp3","./sfx/combat_blast_impact.mp3","./sfx/combat_enemy_death_pop.mp3","./sfx/enemy_cage_slam.mp3","./sfx/hero_dash.mp3","./sfx/hero_death.mp3","./sfx/hero_hurt.mp3","./sfx/hero_jump.mp3","./sfx/hero_leaf_pickup.mp3","./sfx/ui_cutscene_panel_advance.mp3","./sfx/ui_level_complete_jingle.mp3","./sfx/ui_menu_move.mp3","./sfx/ui_menu_select.mp3"];
// The previous build's SW purges every other 'chillblazer-brawler-*' cache on each navigation it serves, which can
// delete this cache while it is still being filled. So install retries until the cache survives intact, and activate
// tops up anything that went missing before claiming the page.
const fill = async (tries) => {
  try { const c = await caches.open(CACHE); await c.addAll(PRECACHE); if (!(await caches.has(CACHE))) throw new Error('precache purged'); }
  catch (err) { if (tries <= 0) throw err; await new Promise((r) => setTimeout(r, 400)); return fill(tries - 1); }
};
const topUp = async () => {
  const c = await caches.open(CACHE); const have = new Set((await c.keys()).map((r) => new URL(r.url).pathname));
  const missing = PRECACHE.filter((u) => !have.has(new URL(u, location.href).pathname));
  if (missing.length) await c.addAll(missing).catch(() => {});
};
self.addEventListener('install', (e) => {
  e.waitUntil(fill(4).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(topUp().then(() => self.clients.claim()));
});
// Old 'chillblazer-brawler-*' caches stay until a page actually navigates onto this build, so a tab still running the
// previous build keeps loading its own assets; the first navigation served here purges them.
const purgeOld = () => caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k.startsWith('chillblazer-brawler-')).map((k) => caches.delete(k))));
// a page running this build asks for the purge too (old builds never send this, so an old tab keeps its assets)
self.addEventListener('message', (e) => { if (e.data === 'purge-old') e.waitUntil(purgeOld()); });
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // page loads: network first (so a returning player gets the new build), cached index.html when offline
  if (req.mode === 'navigate') {
    // keep the worker alive (waitUntil registered synchronously) until index.html is stored and the old caches are gone
    const net = fetch(req);
    const copy = net.then((res) => (res.ok ? res.clone() : null)); // chained first, so it clones before the page reads the body
    e.respondWith(net.catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match('./index.html'))));
    e.waitUntil(copy.then((c) => c && caches.open(CACHE).then((cache) => cache.put('./index.html', c)).then(purgeOld)).catch(() => {}));
    return;
  }
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => req.mode === 'navigate' ? caches.match('./index.html') : Response.error()))
  );
});
