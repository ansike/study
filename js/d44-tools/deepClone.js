/**
 * 实现深拷贝
 * 不考虑function的情况
 */
// function deepClone(obj) {
//     if (typeof obj !== "object" || obj === null) {
//         return obj;
//     }
//     let res;
//     Array.isArray(obj) ? res = [] : res = {};
//     for (let key in obj) {
//         res[key] = deepClone(obj[key]);
//     }
//     return res;
// }
// console.log(deepClone({ aa: 1, c: [1, { d: 2, a: [2] }] }))

function deepClone(data) {
  if (typeof data !== 'object' || data === null) {
    return data;
  }
  const res = Array.isArray(data) ? [] : {};
  for (const key in data) {
    res[key] = deepClone(data[key]);
  }
  return res;
}
conosle.log(deepClone({ a: 1, b: [{ a: 1 }, 3] }))