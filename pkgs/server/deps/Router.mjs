import {URLPattern} from 'urlpattern-polyfill'

console.log({URLPattern})

export class Router {
    routes = new Set()
    defaultRoute = null
    constructor({defaultRoute = null}) {
        this.defaultRoute = defaultRoute
    }

    addRoute(route) {
        this.routes.add(route)
    }

    matchRoute(path) {

        for (let route of this.routes) {
            if (route.path && route.path === path) return route
            // TODO: route match
            if (route.pathMatch) return route
        }

        return this.defaultRoute
    }
}
