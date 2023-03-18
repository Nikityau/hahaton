const MiniCssExtractPlugin = require("mini-css-extract-plugin");

BUILD_F.push(() => {
    const moduleConfByMode = () => {
        if (ENV.mode === "DEV") {
            WEBPACK_CONFIG.module.rules.unshift({
                test: /\.tsx?$/,
                enforce: "pre",
                exclude: ENV.exclude,
                use: [
                    {
                        options: {
                            eslintPath: require.resolve('eslint')
                        },
                        loader: require.resolve('eslint-loader')
                    }
                ]
            },)
        }
    }

    WEBPACK_CONFIG.module = {
        rules: [
            {
                test: /\.[jt]sx?/,
                include: ENV.srcPath,
                exclude: ENV.exclude,
                use: ['swc-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.s[ac]ss$/,
                exclude: ENV.exclude,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource'
            },
        ]
    }

    //moduleConfByMode()
})