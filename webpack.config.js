const path = require('path')

const entryConf = require('./configs/webpack/entry/entry')
const resolveConf = require('./configs/webpack/resolve/resolve')
const outputConf = require('./configs/webpack/output/output')
const optimizationConf = require('./configs/webpack/optimization/optimization')
const devServerConf = require('./configs/webpack/dev-server/dev-server')
const pluginConf = require('./configs/webpack/plugins/plugins')
const moduleConf = require('./configs/webpack/module/module')

module.exports = (env) => {

    const root = path.resolve(__dirname)
    const srcPath = path.resolve(root, 'src')
    const buildPath = path.resolve(root, 'build')

    const publicPath = path.resolve(root, 'public')

    const mode = env.MODE
    const device = env.DEVICE

    const config = {
        mode: mode === "PROD" ? "production" : "development",
    }

    entryConf(config, root)
    resolveConf(config)
    outputConf(config, device, buildPath)
    optimizationConf(config, mode)
    devServerConf(config, srcPath)
    pluginConf(config, publicPath)
    moduleConf(config, srcPath, mode)

    return config
}