const webpack = require("webpack");
// TODO 自定义文件系统的实现
const MemoryFS = require("memory-fs");

const fs = new MemoryFS();

const compiler = webpack({
  mode: "development"
})
compiler.outputFileSystem = fs;

const watching = compiler.watch({

}, (err, stats) => {
  console.log('watching ...');

  if (err || stats.hasErrors()) {
    // 
    console.log(stats.hasErrors());
  }
  // 之后读取输出：
  // const content = fs.readFileSync("./dist/main.js");
})

// console.log(watching);