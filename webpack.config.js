"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./webpack.declarations.d.ts" />
var webpack = require("webpack");
// import * as chalk from 'chalk';
var path = require("path");
var CircularDependencyPlugin = require("circular-dependency-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
exports.config = {
    target: 'web',
    context: path.resolve(__dirname, 'src'),
    devtool: 'cheap-module-eval-source-map',
    entry: {
        /* Common */ polyfills: [
            'reflect-metadata',
            'core-js/es6',
            'core-js/es7',
            'zone.js/dist/zone',
            'whatwg-fetch'
        ],
        /* Common */ materialize: [
            'jquery',
            'hammerjs',
            './materialize/css/materialize.min.css',
            './materialize/js/materialize.min.js'
        ],
        /* Common */ vue: [
            'vue',
            'vuex'
        ],
        // styles: './scss/main.scss',
        app: './main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'deploy'),
        filename: '[name].[chunkhash].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.ts', '.js', '.html'],
        modules: ['node_modules'],
        alias: {
            'apeden': path.resolve(__dirname, 'src/'),
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        host: 'localhost',
        port: 4000,
        https: true,
        historyApiFallback: true,
        contentBase: [path.join(__dirname, 'src')]
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.ts$/,
                use: [{
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: path.resolve(__dirname, 'src', 'tsconfig.json')
                        }
                    }]
            },
            {
                test: /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
                use: 'url-loader?name=[name].[hash:20].[ext]&limit=10000'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            showErrors: true,
            inject: 'body',
            chunksSortMode: 'dependency',
            minify: false,
            title: 'Learning Vuex'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vue', 'materialize', 'polyfills'],
            // tells Webpack we really only want what we specified in the entry
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'runtime' }),
        new webpack.NamedModulesPlugin(),
        new webpack.NamedChunksPlugin(function (chunk) {
            return chunk.name || chunk.mapModules(function (m) { return path.relative(m.context, m.request); }).join('_');
        }),
        new ExtractTextPlugin({ filename: '[name].css', allChunks: false }),
        new CircularDependencyPlugin({ exclude: /node_modules/ }),
        new CleanWebpackPlugin(['deploy'])
    ]
};
exports.default = exports.config;
