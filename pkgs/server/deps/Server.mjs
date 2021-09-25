import http2 from 'http2'
import { readFile } from 'fs/promises'

const key = await readFile('./deps/certs/localhost-privkey.pem')
const cert = await readFile('./deps/certs/localhost-cert.pem')

export const secureServer = http2.createSecureServer({
    key, cert
})

secureServer.on('error', (err) => {
    console.error({err})
})
