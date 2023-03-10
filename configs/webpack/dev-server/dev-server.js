module.exports = (conf, src) => {
    conf.devServer = {
        static: {
            directory: src
        },
        historyApiFallback: true,
        compress: false,
        port: 8080,
        open: true,
        hot: true,
        client: {
            reconnect: true
        }
    }
}