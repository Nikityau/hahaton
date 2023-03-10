const path = require('path')

BUILD_F.push(() => {
    console.log(ENV.root)

    WEBPACK_CONFIG.entry = path.resolve(ENV.root, 'src', 'index.tsx')
})
