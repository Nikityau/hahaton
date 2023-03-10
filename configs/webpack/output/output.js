const path = require("path");

BUILD_F.push(() => {
    function outputPathByDevice(device) {
        const buildPath = ENV.buildPath

        if (device === "WEB") return path.join(buildPath, 'web')
        if (device === "WEBVIEW") return path.join(buildPath, 'webview')
    }

    WEBPACK_CONFIG.output = {
        filename: "[name].[contenthash].bundle.js",
        assetModuleFilename: "assets/[name][ext]",
        sourceMapFilename: "[name].js.map",
        path: outputPathByDevice(ENV.device),
        publicPath: ENV.device === "WEBVIEW" ? "./" : "/",
        clean: true
    }
})