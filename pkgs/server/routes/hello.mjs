const helloHandler = (stream, headers) => {

    stream.respond({
        'content-type': 'text/html; charset=utf-8',
        ':status': 200
    })
    stream.end(`<h1>Hello World</h1>`)

}

export const helloRoute = {
    path: '/hello',
    permissions: '*',
    cacheStrategy: false,
    handler: helloHandler
}
