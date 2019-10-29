/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-10-04 23:32:44
 * @LastEditTime: 2019-10-05 17:36:21
 */
const fs = require('fs');
// 构建100000个json数据放到文件中
let size = 1000000;
for (let i = 0; i < 10; i++) {
  let index = 0;
  let arr = Array.from({ length: size }, () => {
    return { id: index++ + i * size, age: Math.floor(Math.random() * 99 + 1) };
  });

  fs.writeFile('../data/'+(i + 1) + '.json', JSON.stringify(arr), 'utf-8', res => {
    console.log(res);
  });
}

// sort源码理解
// console.time('sort');
// arr.sort((a, b) => a.age - b.age);
// console.timeEnd('sort');

