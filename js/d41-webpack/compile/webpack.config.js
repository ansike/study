const webpack = require("webpack");

const compiler = webpack({
  mode: "development"
})

compiler.run((err, stats) => {
  if (err || stats.hasErrors()) {
    // 
    console.log(err, stats);
  }
})