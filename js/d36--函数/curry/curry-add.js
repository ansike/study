/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-10-02 23:40:39
 * @LastEditTime: 2019-10-03 11:02:29
 */
// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add(...args) {
  let _add;
  this.arr = [].concat(args);
  _add = function(...data) {
    this.arr = this.arr.concat(data);
    return _add;
  };
  _add.toString = () => {
    return this.arr.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
  };

  return _add;
}

let a = add(1)(2)(3)(4)(5) + 0;

console.log(a);
