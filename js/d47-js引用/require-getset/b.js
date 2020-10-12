/*
 * @Description: description
 * @Author: Ask
 * @LastEditors  : Ask
 * @Date: 2020-01-15 19:35:35
 * @LastEditTime : 2020-01-15 19:39:42
 */
// a.js

let mod = require("./a.js");
console.log("b.js-1", mod.count); // 

mod.plusCount();

console.log("b.js-2", mod.count);

setTimeout(() => {
  mod.count = 3;
  console.log("b.js-3", mod.count);
}, 2000);

// 1 1 2 3
// 1 1 2 2