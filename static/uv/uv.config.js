self.__uv$config = {
    prefix: '/static/load/',
    bare:'https://web.cloudflared.cf',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
}

// Alternate Bares (use if not working)

// https://frog.tracbras.com.br/bare/ - not working
// https://historicalfiction.vpn.net.br/bare/ - slow
// https://web.cloudflared.cf/ - fastest but search always undefinied
// https://vplaza.org/bare/ - fast
// https://v2202412246404304352.megasrv.de/bare/
// https://muddy-rice-ba72.acsessremote.workers.dev/

// Blocked Websites

const blocked = [
  // Adult / Pornography
  "xvideos.com",
  "xnxx.com",
  "redtube.com",
  "youporn.com",
  "xhamster.com",
  "brazzers.com",
  "tnaflix.com",
  "spankwire.com",
  "tube8.com",
  "porn.com",
  "porndig.com",
  "beeg.com",
  "sunporno.com",
  "motherless.com",
  "fapdu.com",
  "nuvid.com",
  "javhd.com",
  "javlibrary.com",
  "javhub.net",
  
  // Gambling
  "pokerstars.com",
  "bet365.com",
  "williamhill.com",
  "888casino.com",
  "betway.com",
  "ladbrokes.com",
  "bovada.lv",
  "draftkings.com",
  "fanduel.com",
  "unibet.com",
  "casino.com",
  "partycasino.com",
  "betfred.com",
  
  // Violence / Hate / Extremism
  "stormfront.org",
  "8chan.moe",
  "8kun.top",
  "dailyhate.com",
  "hatewatch.org",
  "thepiratebay.org",
  "gab.com",
  "infowars.com",
  
  // Drugs / Illegal substances
  "silkroad7rn2puhj.onion",
  "alphabaymarket.net",
  "drugstore.com",
  "drugs.com",
  "weedmaps.com",
  "cannabis.com",
  "420science.com",
  "bluelight.org",
  
  // Risky Social & Chat Platforms
  "ome.tv",
  "omegle.com",
  "chatroulette.com",
  "chathub.cam",
  "cam4.com",
  "bazoocam.org",
  "camsurf.com",
  "tinychat.com",
  "liveme.com",
  
  // Other risky sites
  "4chan.org",
  "9gag.com",
  "9anime.to",
  "mangadex.org",
  "fakku.net",
  "fapello.com",
  "rule34.xxx",
  "e621.net",
  "hentaihaven.xxx",
  "nhentai.net",
  "sexting.com",
  
  // Misc or regional questionable sites
  "porn555.com",
  "myfreecams.com",
  "livejasmin.com",
  "cams.com",
  "chaturbate.com",
  "bonga.com",
  
  // Additional gambling & betting
  "coral.co.uk",
  "skybet.com",
  "betfair.com",
  
  // Others flagged by some filters
  "4tube.com",
  "youjizz.com",
  "xvideos2.com",
  "yobt.com"
];

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Only intercept navigation requests (page loads)
  if (event.request.mode === 'navigate') {
    // Check if hostname matches or ends with blocked domain
    const isBlocked = blocked.some(domain => 
      url.hostname === domain || url.hostname.endsWith('.' + domain)
    );

    if (isBlocked) {
      console.log(`Blocked navigation to: ${url.hostname}`);

      // Redirect to the blocked page
      event.respondWith(
        Response.redirect('/pages/blocked.html', 302)
      );
      return;
    }
  }

  // For all other requests, let them pass through
  event.respondWith(fetch(event.request));
});
