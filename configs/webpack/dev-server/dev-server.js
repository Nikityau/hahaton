BUILD_F.push(() => {
    WEBPACK_CONFIG.devServer = {
        static: {
            directory: ENV.srcPath
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

})