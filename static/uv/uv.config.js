self.__uv$config = {
    prefix: '/static/load/',
    bare: 'https://vplaza.org/bare/',
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
// https://web.cloudflared.cf/ - not working atm
// https://vplaza.org/bare/ - fast
// https://v2202412246404304352.megasrv.de/bare/ - mid
// https://muddy-rice-ba72.acsessremote.workers.dev/
// https://backend.infrared.bomberfish.ca/ - mid

// Blocked Websites

