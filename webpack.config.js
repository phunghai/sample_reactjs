const path = require("path");
const webpack = require("webpack")
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfiguration = env => require(`./config/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return webpackMerge ({
            mode,
            entry: "./src/index.js",
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "bundled.js"
            },
            devServer: {
                hot: true,
                open: true
            },
            module: {
                rules: [
                 {
                    test: /\.jpe?g|png$/,
                    exclude: /node_modules/,
                    loader: ["url-loader", "file-loader"]
                },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
                new webpack.HotModuleReplacementPlugin(),
            ]
        },
        modeConfiguration(mode));
};