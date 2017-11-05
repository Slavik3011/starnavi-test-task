const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        './src/main.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        extends: path.join(__dirname, '.babelrc')
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "src"),
        port: 5000
    }
};