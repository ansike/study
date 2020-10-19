/*
* @Author: ansike
* @Date:   2018-07-20 11:59:47
* @Last Modified by:   ask
* @Last Modified time: 2018-07-20 20:12:50
*/
process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require("path")
const chalk = require("chalk")
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf.js')

const spinner = ora('building...')
spinner.start()

rm(path.resolve(__dirname,'../dist/'), err => {
    if (err) throw err
    webpack(webpackConfig, (err, stats) => {
        if (err) throw err
        spinner.stop();
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
})
