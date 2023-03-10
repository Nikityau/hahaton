const TerserPlugin = require("terser-webpack-plugin");

BUILD_F.push(() => {
    WEBPACK_CONFIG.optimization = {
        minimize: ENV.mode === "PROD",
        minimizer: ENV.mode === "PROD" ? [
            new TerserPlugin({
                minify: TerserPlugin.uglifyJsMinify
            })
        ] : []
    }

})