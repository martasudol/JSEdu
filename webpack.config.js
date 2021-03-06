const HtmlWebpackPlugin = require("html-webpack-plugin");


const config = {
    mode: "development",
    module: {
        rules: [
            {
              test : /\.js$/,
              use : ["babel-loader"]
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
    })]
};

module.exports = config;