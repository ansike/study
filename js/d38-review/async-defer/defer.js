/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-10-16 22:46:10
 * @LastEditTime: 2019-10-16 22:58:02
 */
// setTimeout(() => {
console.time("s")
let arr = [];
for (let index = 0; index < 10000000; index++) {
  arr.push(index);
}
console.timeEnd("s")
console.log('defer1');
// }, 0);
