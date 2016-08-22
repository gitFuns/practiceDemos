var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: {
        index: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            path.resolve(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].bundle.js?[hash]"
    },
    resolve: {
        extension: ['', '.js', '.jsx', '.json'],
        alias: {}
    },
    devtool: 'source-map',
    "display-error-details": true,
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js?[hash]'),
        new HtmlWebpackPlugin({
            title: 'zhufeng-react-tutorial',
            template: './src/index.html'
        })
    ]
};

module.exports = config;