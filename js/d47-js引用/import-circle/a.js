/*
 * @Description: description
 * @Author: Ask
 * @LastEditors  : Ask
 * @Date: 2020-01-15 19:08:16
 * @LastEditTime : 2020-01-15 19:54:10
 */
import { bar } from "./b.js";

export function foo() {
  console.log("foo");

  bar();

  console.log("执行完毕");
}

foo();
