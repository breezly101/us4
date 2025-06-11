self.__uv$config = {
    prefix: '/static/load/',
    bare:'https://frog.vpn.net.br/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
}

// Alternate Bares (use if not working)
// https://frog.tracbras.com.br/bare/
// https://introducing.wine-software.com/bare/
// https://historicalfiction.vpn.net.br/bare/
// https://web.cloudflared.cf/
