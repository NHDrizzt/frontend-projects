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
                ],
                test: /.(css)$/,
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
