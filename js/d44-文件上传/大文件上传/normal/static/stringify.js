/*
 * @Description: 序列化
 * @Author: Ask
 * @LastEditors  : Ask
 * @Date: 2020-01-08 22:11:43
 * @LastEditTime : 2020-01-09 01:04:59
 */
// 序列化get请求

const a = {
  a: 1,
  b: [1, [[3]], { a: 1, c: [2] }], // b[1]a=1
  c: 2
};

function sequenceData(data) {
  if (Object.prototype.toString.call(data) !== "[object Object]")
    throw new Error("Type Error argument is must object");
  let res = [];
  const deal = (data, name) => {
    if (typeof data !== "object" || data === null) {
      res.push(name.replace(/^\[([a-zA-Z-_0-9]+)\]/, ($1, $2) => $2) + "=" + data);
      return;
    }
    for (let key in data) {
      deal(data[key], name + "[" + key + "]");
    }
  };
  deal(data, "");
  return res.join("&");
}
console.log("sequenceData", sequenceData(a));

// function deepClone(data) {
//   let res = {};
//   if (typeof data !== "object" || data === null) return data;
//   if (Array.isArray(data)) res = [];
//   for (let key in data) {
//     res[key] = deepClone(data[key]);
//   }
//   return res;
// }
// console.log(deepClone(a));
