const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (conf, src ,mode) => {
    const exclude_var = /node_modules/

    conf.module = {
        rules: [
            {
                test: /\.[jt]sx?/,
                include: src,
                exclude: exclude_var,
                use: ['swc-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.s[ac]ss$/,
                exclude: exclude_var,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource'
            },
        ]
    }

    if(mode === "DEV") {
        conf.module.rules.unshift( {
            test: /\.tsx?$/,
            enforce: "pre",
            exclude: exclude_var,
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