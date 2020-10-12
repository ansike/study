/*
 * @Description: description
 * @Author: Ask
 * @LastEditors  : Ask
 * @Date: 2020-01-15 19:08:16
 * @LastEditTime : 2020-01-15 19:10:31
 */
exports.done = false;
const a = require("./a.js");
console.log("a.js", a.done);
exports.done = true;
console.log("b.js finish", a.done);
