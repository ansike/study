/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2020-01-15 19:46:14
 * @LastEditTime: 2020-01-15 19:53:49
 */
import { foo } from "./a.js";

export function bar() {
  console.log("bar");

  if (Math.random() > 0.5) {
    foo();
  }
}
