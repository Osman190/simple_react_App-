const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var config = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Zamalek SC',
            h2: 'Hello WOrld',
            template: '!!pug-loader!src/template/index.pug'
        })
    ]
};
module.exports = config;
