/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-11-23 22:20:04
 * @LastEditTime: 2021-11-24 00:21:33
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
      },
    ],
  },
  devServer: {
    port: 8090,
  },
};
