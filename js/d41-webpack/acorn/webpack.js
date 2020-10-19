const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


const compiler = webpack({
  mode: "development",
  // mode: "production",
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use: "./acorn.js"
      }
    ]
  },
  plugins:[new HtmlWebpackPlugin()]
});
compiler.run();