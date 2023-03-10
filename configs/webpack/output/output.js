const path = require("path");


module.exports = (conf, device ,buildPath) => {
    function outputPathByDevice(device) {
        if(device === "WEB") return path.join(buildPath, 'web')
        if(device === "WEBVIEW") return path.join(buildPath, 'webview')
    }


    conf.output = {
        filename: "[name].[contenthash].bundle.js",
        assetModuleFilename: "assets/[name][ext]",
        sourceMapFilename: "[name].js.map",
        path: outputPathByDevice(device),
        publicPath: device === "WEBVIEW" ? "./" : "/",
        clean: true
    }
}