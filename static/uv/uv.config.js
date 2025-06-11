// UV bares take if u want

self.__uv$config = {
    prefix: '/static/load/',
    bare:'https://web.cloudflared.cf/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
}

// Alternate Bares (use if not working)

// https://frog.tracbras.com.br/bare/
// https://historicalfiction.vpn.net.br/bare/ - slow
// https://web.cloudflared.cf/
