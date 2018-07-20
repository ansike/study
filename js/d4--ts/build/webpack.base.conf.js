/*
* @Author: ansike
* @Date:   2018-07-19 19:53:26
* @Last Modified by:   ask
* @Last Modified time: 2018-07-20 14:34:07
*/
const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
    mode: 'development',
    entry:{
        app:'./index.ts'
    },
    output:{
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    resolve:{
        extensions:['.tsx','.ts','.js']
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
                //babel-loader?presets=es2015!ts-loader
            },
            {
                test: /\.css$/,
                loader: extractCSS.extract(['css'])
            },
            {
                test: /\.scss$/,
                loader: extractCSS.extract(['css'])
            },
            {
                test: /\.(png|jpe?g|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: { limit: 8000, name: 'assets/image/[name][hash:6].[ext]' }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/index.html'),
            template: 'index.html',
            inject: true,
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true,
            //     removeAttributeQuotes: true
            //     // more options:
            //     // https://github.com/kangax/html-minifier#options-quick-reference
            // },
            chunksSortMode: 'dependency'
        }),
        extractCSS
    ]
}