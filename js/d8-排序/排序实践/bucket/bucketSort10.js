/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-10-05 16:36:11
 * @LastEditTime: 2019-10-05 17:36:30
 */
const fs = require('fs');
function bucketSort() {
  let bucketLength = 10;
  let bucket = Array.from({ length: bucketLength }, () => []);
  console.log(bucket);
  for (let index = 1; index <= 10; index++) {
    let data = require('../data/' + index + '.json');
    data.forEach(element => {
      bucket[Math.floor(element.age / 10)].push(element);
    });
  }
  bucket.forEach((item, i) => {
    item.sort((a, b) => a.age - b.age);
    console.log(`年龄在${i * 10}~${i * 10 + 9}的学生人数有${item.length}`);
    fs.writeFile(
      '../data/bucket' + (i + 1) + '.json',
      JSON.stringify(item),
      'utf-8',
      res => {
        // console.log(res);
      }
    );
  });
}
console.time('bucketSort');
bucketSort();
console.timeEnd('bucketSort');
