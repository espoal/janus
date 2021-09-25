
const assetsHandler = (stream, headers) => {

    stream.respond({
        ':status': 404
    })
    stream.end()

}

export const assetsRoute = {
    pathMatch: '.ico',
    permissions: '*',
    cacheStrategy: true,
    handler: assetsHandler

}
