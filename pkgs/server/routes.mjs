import { Router } from "./deps/Router.mjs"

import { notFoundRoute } from "./routes/notFound.mjs"
import { helloRoute } from "./routes/hello.mjs"
import { assetsRoute } from "./routes/assetHandler.mjs"

export const routes = new Router({
    defaultRoute: notFoundRoute
})

routes.addRoute(helloRoute)
routes.addRoute(assetsRoute)

export const streamHandler = (stream, headers) => {

    const path = headers[':path']

    const route = routes.matchRoute(path)

    route.handler(stream,headers)

}

