const path = require('path')

module.exports = (conf, route) => {
    conf.entry = path.resolve(route, 'src', 'index.tsx')
}