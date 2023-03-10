const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (conf, publicPath) => {
    conf.plugins = [
        new HtmlWebpackPlugin({
            template: path.resolve(publicPath, 'index.html'),
            favicon: path.resolve(publicPath, 'assets', 'favicon.png'),
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].bundle.css'
        }),
    ]
}