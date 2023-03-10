const path = require('path')

const build = require('./configs/webpack/global/global')

require('./configs/webpack/entry/entry')
require('./configs/webpack/resolve/resolve')
require('./configs/webpack/output/output')
require('./configs/webpack/optimization/optimization')
require('./configs/webpack/dev-server/dev-server')
require('./configs/webpack/plugins/plugins')
require('./configs/webpack/module/module')

module.exports = (env) => {

    ENV.root = path.resolve(__dirname)
    ENV.srcPath = path.resolve(ENV.root, 'src')
    ENV.buildPath = path.resolve(ENV.root, 'build')

    ENV.publicPath = path.resolve(ENV.root, 'public')

    ENV.mode = env.MODE
    ENV.device = env.DEVICE

    ENV.exclude = /node_modules/

    WEBPACK_CONFIG.mode = ENV.mode === "PROD" ? "production" : "development"

    build()

    return WEBPACK_CONFIG
}