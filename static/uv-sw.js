importScripts("/static/uv/uv.sw.js");

const sw = new UVServiceWorker();

const blocked = [
  "xvideos.com",
  "xnxx.com",
  "redtube.com",
  "ome.tv",
  // your blocked domains
];

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Only block top-level navigations (page loads)
  if (event.request.mode === 'navigate') {
    const isBlocked = blocked.some(domain =>
      url.hostname === domain || url.hostname.endsWith('.' + domain)
    );

    if (isBlocked) {
      // Redirect to your block page (make sure this exists and is accessible)
      event.respondWith(
        Response.redirect('/pages/blocked.html', 302)
      );
      return;  // Don't call UV fetch handler
    }
  }

  // Not blocked: delegate to Ultraviolet's fetch handler
  event.respondWith(sw.fetch(event));
});


// importScripts("/static/uv/uv.sw.js");

// const sw = new UVServiceWorker();

// self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
