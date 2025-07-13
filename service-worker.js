self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("loan-app-cache").then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/loan-details.html",
        "/available-balance.html",
        "/style.css",  // if used
         "/icon-192.png",
         "/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
