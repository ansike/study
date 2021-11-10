/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-10-21 22:27:27
 * @LastEditTime: 2021-10-21 23:08:48
 */
import a, { done as aDone } from "./a.js";
import b, { done as bDone } from "./b.js";

console.log("in index.js");
console.log(`in index.js aDone=${aDone} a=${a} bDone=${bDone} b=${b}`);

export default { a: 1 };
