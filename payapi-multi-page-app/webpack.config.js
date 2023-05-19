const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "build.js"
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                        parserOpts: {
                            throwIfNamespace: false,
                        },
                    },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                test: /.(css|sass|scss)$/,
            },
            {
                type: "asset",
                test: /\.(svg|jpg|png)$/,
            },
            {
                test:/\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
        })
    ]
}
