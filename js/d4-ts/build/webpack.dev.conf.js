/*
* @Author: ansike
* @Date:   2018-07-20 14:16:20
* @Last Modified by:   ask
* @Last Modified time: 2018-07-20 14:58:32
*/
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.base.conf.js')

module.exports = merge(webpackConfig,{
    devServer: {
        contentBase: '../dist',
        host: 'localhost',      // 默认是localhost
        port: 3000,             // 端口
        open: true,             // 自动打开浏览器
        hot: true               // 开启热更新
    },
    plugins:[
        // 热替换，热替换不是刷新
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    ]
})