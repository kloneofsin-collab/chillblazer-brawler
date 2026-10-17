// generated at build time
const CACHE = 'chillblazer-brawler-33d78dd62b';
const PRECACHE = ["./","./assets/amp-enforcer-portrait-160-BKeciZtK.jpg","./assets/amp-portrait-160-CA6N4QRy.jpg","./assets/calm-field-BvnmzyPR.png","./assets/calm-strike-DaqE85_k.png","./assets/chill-blast-C4oYLnSI.png","./assets/hero-face-BNunNYdQ.png","./assets/holo-atlas-Cd4475eH.webp","./assets/index-bDw5uElk.js","./assets/index-h6_Js3Ca.css","./assets/jump-CH-GmXY1.png","./assets/lock-on-lWSpzaNS.png","./assets/logo-800-CfWehud7.png","./assets/lose-VxtNXVRd.jpg","./assets/portrait-71rFsCbQ.jpg","./assets/signs-atlas-OiKJRqLS.webp","./assets/title-key-BLJG8Hq4.jpg","./assets/win-qJhfotmv.jpg","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./manifest.webmanifest"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k.startsWith('chillblazer-brawler-')).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => req.mode === 'navigate' ? caches.match('./index.html') : Response.error()))
  );
});
