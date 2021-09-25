import { secureServer } from "./deps/Server.mjs"
import { streamHandler } from "./routes.mjs"

secureServer.on('stream', streamHandler)

secureServer.listen(8443)
