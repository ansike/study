/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-08-17 10:08:44
 * @LastEditTime: 2019-08-17 17:40:02
 */
// ========================类型判断一=================================
// const checkType = (val, type)=>{
//   return Object.prototype.toString.call(val) === `[object ${type}]`;
// }
// const isString = checkType("String");
// console.log(checkType("a", "String"));

// ========================类型判断二=================================
// const checkType = type => {
//   return val => {
//     return Object.prototype.toString.call(val) === `[object ${type}]`;
//   };
// };
// const types = ["String", "Number", "Boolean"];
// let utils = {};
// types.forEach(type => {
//   utils["is" + type] = checkType(type);
// });
// console.log(utils.isString("asd"));
// console.log(utils.isNumber(346));
// console.log(utils.isBoolean(false));

// ========================类型判断三(柯里化)=================================

const curry = (fn, arr = []) => {
  let len = fn.length;
  return (...argv) => {
    arr = arr.concat(argv);
    if (arr.length === len) {
      return fn(...arr);
    }
    return curry(fn, arr);
  };
};

// 不定参执行
const add = (a, b, c, d, e) => {
  return a + b + c + d + e;
};
console.log(curry(add)(1, 2)(3, 4)(5));

// 
const types = ["String", "Number", "Boolean"];
let utils = {};
types.forEach(type => {
  utils["is" + type] = curry(
    item => Object.prototype.toString.call(item) === `[object ${type}]`
  );
});

console.log(utils.isString("456"));
console.log(utils.isNumber(456));
