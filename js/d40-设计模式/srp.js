/*
 * @Description: 将函数按照单一职责拆分,compose函数操作合并,产生新的函数
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-11-27 17:28:16
 * @LastEditTime: 2019-11-27 18:02:09
 */
function compose(...fns) {
  // return fns.reduce((prev, cur) => {
  return fns.reduceRight((prev, cur) => {
    return (...data) => {
      return prev(cur(...data));
    };
  });
}

function a(data) {
  console.log("a")
  return data.toUpperCase();
}
function b(data) {
  console.log("b")
  return data
    .split("")
    .reverse()
    .join("");
}
function c(data) {
  console.log("c")
  return (data += "2");
}

let t = compose(a, b, c);

let res = t("ab");

console.log(res);
