'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _htmlWebpackPlugin = require('html-webpack-plugin');

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

var _extractTextWebpackPlugin = require('extract-text-webpack-plugin');

var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var node_modules = _path2.default.resolve(__dirname, 'node_modules');
var _rootName = __dirname;
var targetDir = _path2.default.resolve(__dirname, './src');
var entry = {};
_fs2.default.readdirSync(targetDir).forEach(function (file) {
    entry[file.replace(/\.jsx?$/, '')] = _path2.default.join(targetDir, file);
});
console.log(entry);
var webpackConfig = {
    entry: entry,
    output: {
        path: _path2.default.resolve(_rootName, 'dist'),
        filename: '[name].js?v=[chunkhash]',
        publicPath: 'dist'
    },
    plugins: [
    //new webpack.optimize.CommonsChunkPlugin(),
    new _extractTextWebpackPlugin2.default('styles.css'), new _htmlWebpackPlugin2.default(), new _htmlWebpackPlugin2.default({
        template: 'async.html',
        filename: 'async.html',
        chunks: Object.keys(entry),
        inject: 'body'
    })],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: [node_modules],
            loader: 'babel',
            query: {
                "presets": ["es2015", "react"]
            }
        }, {
            test: /\.css$/,
            loader: _extractTextWebpackPlugin2.default.extract("style-loader", "css-loader")
        }, {
            test: /\.s(a|c)ss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(png|jpe?g)$/,
            loader: 'url?limit=30000'
        }, {
            test: /\.woff$/,
            loader: 'url?limit=10240'
        }]
    }
};

module.exports = webpackConfig;
