const webpack = require("webpack");
const selfPlugin = require("./lib/plugins/self-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const compiler = webpack({
  // mode: "production",
  mode: "development",
  // plugins: [new selfPlugin()]
  plugins: [new HtmlWebpackPlugin()],
  module:{
    rules:[
      {test:/\.css$/, use:"./lib/loaders/css.loader.js"}
    ]
  }
})

compiler.run((err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
})