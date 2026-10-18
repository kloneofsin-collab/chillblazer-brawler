// generated at build time
const CACHE = 'chillblazer-brawler-r1-423b761ce0'; // r1 = content round 1; old 'chillblazer-brawler-*' caches are purged on the first navigation onto this build
const PRECACHE = ["./","./assets/alley-wcwoZFB4.webp","./assets/amp-enforcer-portrait-160-BKeciZtK.jpg","./assets/amp-portrait-160-CA6N4QRy.jpg","./assets/calm-field-BvnmzyPR.png","./assets/calm-strike-DaqE85_k.png","./assets/canopy-B7gnCDog.webp","./assets/chill-blast-C4oYLnSI.png","./assets/drone-CWvdx_ZT.webp","./assets/grid-row-XOaSoD_h.webp","./assets/hero-C2O18wf3.webp","./assets/hero-face-BNunNYdQ.png","./assets/holo-atlas-Cd4475eH.webp","./assets/hypeman-B7obpUbG.webp","./assets/index-3JI8wbgw.js","./assets/index-D5okVTQw.css","./assets/jump-CH-GmXY1.png","./assets/last-stand-CZuZTu6F.webp","./assets/lock-on-lWSpzaNS.png","./assets/logo-800-CfWehud7.png","./assets/lose-VxtNXVRd.jpg","./assets/mast-gate-D8WgS_wx.webp","./assets/night-park-OIvp2sgh.webp","./assets/portrait-71rFsCbQ.jpg","./assets/shield-BHod08OK.webp","./assets/signs-atlas-OiKJRqLS.webp","./assets/speedster-CER6s6YY.webp","./assets/storm-CmWjaNw1.webp","./assets/subway-Q5a9lyD0.webp","./assets/title-key-BLJG8Hq4.jpg","./assets/win-qJhfotmv.jpg","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./manifest.webmanifest","./sfx/CREDITS.txt","./sfx/boss_amp_truck_horn.mp3","./sfx/boss_ground_strike.mp3","./sfx/boss_intro_stinger.mp3","./sfx/boss_phase_change.mp3","./sfx/boss_telegraph_warning.mp3","./sfx/combat_blast_fire.mp3","./sfx/combat_blast_impact.mp3","./sfx/combat_enemy_death_pop.mp3","./sfx/enemy_cage_slam.mp3","./sfx/hero_dash.mp3","./sfx/hero_death.mp3","./sfx/hero_hurt.mp3","./sfx/hero_jump.mp3","./sfx/hero_leaf_pickup.mp3","./sfx/ui_cutscene_panel_advance.mp3","./sfx/ui_level_complete_jingle.mp3","./sfx/ui_menu_move.mp3","./sfx/ui_menu_select.mp3"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});
// Old 'chillblazer-brawler-*' caches stay until a page actually navigates onto this build, so a tab still running the
// previous build keeps loading its own assets; the first navigation served here purges them.
const purgeOld = () => caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k.startsWith('chillblazer-brawler-')).map((k) => caches.delete(k))));
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // page loads: network first (so a returning player gets the new build), cached index.html when offline
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((res) => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('./index.html', copy)); e.waitUntil(purgeOld()); } return res; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match('./index.html'))));
    return;
  }
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => req.mode === 'navigate' ? caches.match('./index.html') : Response.error()))
  );
});
