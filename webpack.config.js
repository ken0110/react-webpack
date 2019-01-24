const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VENDOR_LIBS = [
    'axios',
    'jquery',
    'bootstrap',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-thunk'
]

module.exports = {
    entry : {
        bundle : './src/index.js',
        vendor :  VENDOR_LIBS
    },
    output : {
        path : path.join(__dirname, 'dist'),
        filename : '[chunkhash].[name].js'
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                use : [
                    'style-loader',
                    'css-loader'
                ],
                test : /\.css$/
            },
            {
                use : 'file-loader',
                test : /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/

            }
        ]
    },
    mode : 'development',
    plugins : [
        new webpack.ProvidePlugin({
            '$' : 'jquery',
            'jQuery' : 'jquery',
            'window.$' : 'jquery',
            'window.jQuery' : 'jquery',
            'Popper' : ['popper.js', 'default']
        }),
        new HtmlWebpackPlugin({
            template : 'src/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                name: 'manifest',
                chunks: 'initial'
                }
            }
        }
    }
}

