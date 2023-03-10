const TerserPlugin = require("terser-webpack-plugin");

module.exports = (conf, mode) => {
    conf.optimization = {
        minimize: mode === "PROD",
        minimizer: mode === "PROD" ? [
            new TerserPlugin({
                minify: TerserPlugin.uglifyJsMinify
            })
        ] : []
    }
}