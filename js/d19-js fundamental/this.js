/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2020-10-13 23:08:10
 * @LastEditTime: 2020-10-13 23:09:34
 */
const a = {
  a: "1",
  fn1:function fn1() {
    console.log(this.a);
    return a.fn1;
  }
}
const a1 = a.fn1();
a1()