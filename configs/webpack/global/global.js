ENV = {
    mode: "DEV",
    device: "WEB",
    root: "/",
    srcPath: "/",
    buildPath: "/",
    publicPath: "/",
    exclude: /node_modules/
}

WEBPACK_CONFIG = {}

BUILD_F = []

module.exports = BUILD_WEBPACK_CONFIG = () => {
    for(let i = 0; i < BUILD_F.length; ++i) {
        BUILD_F[i]()
    }
}