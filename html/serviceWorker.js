const staticDevFutebol = "v1"
const assets = [
   "/index",
  "/marcacao/upliadImage.html",
  "/marcacao/login.html",
  "/marcacao/editarJogador.html",
  "/marcacao/criarJogdor.html",
  "/css/login.css",
  "/css/styles.css",
  "/css/w3.css",
  "/css/lista_pontos.css",
  "/javascript/criarJogador.js",
  "/javascript/editarJogador.js",
  "/javascript/gols.js",
  "/javascript/pontos.js",
  "/javascript/login.js",
  "/javascript/templates.js",
  "/javascript/uploadImage.js",
  "/images/img_fundo/bolamurcha.jpg",
  "/images/img_fundo/campo.jpg",
  "/images/img_fundo/favicon.ico",
  "/images/img_fundo/silhueta.svg",
  "/images/img_fundo/androichrome-192x192.png",
  "/images/img_fundo/androichrome-512x512.png",
   "/images/img_fundo/apple-touch-icon.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevFutebol).then(cache => {
      cache.addAll(assets)
    })
  )
})




self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})





self.addEventListener('activate', event => {
  const cacheWhitelist = [];
  cacheWhitelist.push(staticDevFutebol);
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName);
        }
      })
    ))
  );
});



self.addEventListener("message", function (messageEvent) {
  if (messageEvent.data === "recurring") {
    // If the value of the event is "recurring", we launch the above function
    generateNumbers();
  } else {
    // Post a message back to the main JS
    self.postMessage("Hello to you too !");
  }
});