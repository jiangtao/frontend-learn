import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import fs from 'fs';
const node_modules = path.resolve(__dirname, 'node_modules');
const targetDir    = path.resolve(__dirname, './src');
let entry = {};
fs.readdirSync(targetDir).forEach( file => {
    entry[file.replace(/\.jsx?$/, '')] = path.join(targetDir, file);
});
let webpackConfig = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        //filename: 'bundle.js?v=[chunkhash]',
        filename: '[name].js?v=[chunkhash]',
        publicPath: '/dist/js/'
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'template/async.html',
            filename: '../async.html',
            chunks: '*',
            inject: 'body'
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: [node_modules],
            loader: 'babel-loader',
            query: {
                //presets: ['es2015', 'stage-0'],
                //plugins: ['transform-runtime']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
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
