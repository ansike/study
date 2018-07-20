/*
* @Author: ansike
* @Date:   2018-07-19 19:53:26
* @Last Modified by:   ask
* @Last Modified time: 2018-07-20 11:38:49
*/
const path = require("path")
const chalk = require("chalk")
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const extractCSS = new ExtractTextPlugin('[name].css');

const webpackConfig = {
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
    // devServer: {
    //     inline: false,
    //     contentBase: "../dist",
    // },
    module:{
        rules:[
            // { test: /\.tsx?$/, loader: 'ts-loader', },
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
webpack(webpackConfig, (err, stats) => {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
})