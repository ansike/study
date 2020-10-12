/*
 * @Description: description
 * @Author: Ask
 * @LastEditors  : Ask
 * @Date: 2020-01-15 19:08:16
 * @LastEditTime : 2020-01-15 19:10:03
 */
exports.done = false;
const b = require("./b.js");
console.log("b.js", b.done);
exports.done = true;
console.log("a.js finish", b.done);