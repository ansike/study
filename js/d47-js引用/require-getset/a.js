/*
 * @Description: description
 * @Author: Ask
 * @LastEditors  : Ask
 * @Date: 2020-01-15 19:35:35
 * @LastEditTime : 2020-01-15 19:40:54
 */
let count = 1;

let plusCount = () => {
  count++;
};

setTimeout(() => {
  console.log("a.js-1", count);
}, 1000);

module.exports = {
  // count,
  get count() { // 只设置get属性
    return count;
  },
  // set count(newVal) {
  //   count = newVal;
  // },
  plusCount
};
