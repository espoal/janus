const notFoundHandler = (stream, headers) => {

    stream.respond({
        'content-type': 'text/html; charset=utf-8',
        ':status': 404
    })
    stream.end(`<h1>Sorry not found</h1>`)

}

export const notFoundRoute = {
    pathMatch: '*',
    permissions: '*',
    cacheStrategy: false,
    handler: notFoundHandler
}

