var webpack = require('webpack');
var path = require('path');
console.log(__dirname);
var BUILD_DIR = path.resolve(__dirname, 'web/build');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: [
        'babel-polyfill',
        APP_DIR + '/index.js'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: APP_DIR,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
                loader: 'imports?define=>false&this=>window'
            }
        ]
    }
};

module.exports = config;