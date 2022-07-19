const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        fallback: {
            "path": false,
            "crypto": false,
            "zlib": false,
            "stream": false,
            "buffer": false,
            "https": false,
            "http": false,
            "url": false,
            "vm": false,
            "querystring": false,
            "os": false,
            "fs": false,
            "esbuild": false,
            "uglify-js": false,
            "module": false,
            "@swc/core": false,
            "worker_threads": false,
            "child_process": false,
            "constants": false,
            "assert": false,
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};