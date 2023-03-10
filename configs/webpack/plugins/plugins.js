const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

BUILD_F.push(() => {
    WEBPACK_CONFIG.plugins = [
        new HtmlWebpackPlugin({
            template: path.resolve(ENV.publicPath, 'index.html'),
            favicon: path.resolve(ENV.publicPath, 'assets', 'favicon.png'),
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].bundle.css'
        }),
    ]
})