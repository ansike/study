/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-09-30 09:03:48
 * @LastEditTime: 2019-09-30 09:15:13
 */

function main(a, b) {
  console.log(this.a);
  console.log(a + b);
}
const obj = {
  a: 2
};

main.bind(obj)(2,3)

Function.prototype.selfBind = function selfBind(context) {
  const fn = this;
  if (typeof this !== 'function') {
    throw '调用者必须是函数!';
  }
  return function(...arg) {
    fn.apply(context, arg);
  };
};
main.selfBind(obj)(1, 2);
