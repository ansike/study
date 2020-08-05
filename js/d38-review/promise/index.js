const fs = require("fs");
const path = require("path");
const util = require("util");

// 异步回调
// fs.readFile(path.resolve(__dirname, './data.txt'), 'utf-8', (error, data) => {
//   if (error) throw error;
//   console.log(data);
// })

// 将异步回调改为promise
// const promisefyReadFile = util.promisify(fs.readFile);
// promisefyReadFile(path.resolve(__dirname, './data.txt'), 'utf-8').then(res => {
//   console.log(res);
// })

// 实现一个promisefy

function customPromiseFy(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      const widthCallBackArgs = [...args, function (error, content) {
        if (error) reject(error);
        resolve(content)
      }]
      fn.apply(fn, widthCallBackArgs);
    })
  }
}

const promisefyReadFile = customPromiseFy(fs.readFile);
promisefyReadFile(path.resolve(__dirname, './data.txt'), 'utf-8').then(res => {
  console.log(res);
})