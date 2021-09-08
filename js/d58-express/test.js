/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-08-16 23:31:04
 * @LastEditTime: 2021-08-16 23:31:49
 */
const obj = {
  a: {
    aa: 1,
  },
  b: { bb: 2 },
  c: { cc: 3 },
};

const obj2 = {
  a: {
    aa2: 1,
  },
  b: { bb2: 2 },
  c: { cc2: 3 },
};

function merge(obj1, obj2) {
  const newObj = {};
  const keys = Object.keys(obj1);
  keys.forEach((item) => {
    newObj[item] = Object.assign({}, obj1[item], obj2[item]);
  });
  return newObj;
}

const res = merge(obj, obj2);
console.log(res);