/*
* @Author: ansike
* @Date:   2018-07-20 13:04:24
* @Last Modified by:   ask
* @Last Modified time: 2018-07-20 21:30:10
*/
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.base.conf.js')

module.exports = merge(webpackConfig,{
    mode: "production",
    resolve:{
        // modules: [
        //     // path.join(__dirname, "js/helpers"),
        //     "node_modules"
        // ]
    },
    plugins:[
        new webpack.optimize.SplitChunksPlugin({
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                //打包重复出现的代码
                vendor: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0, // This is example is too small to create commons chunks
                    name: 'vendor'
                },
                //打包第三方类库
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: Infinity
                }
            }
        }),
    ]
})