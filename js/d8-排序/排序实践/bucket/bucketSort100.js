/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-10-05 16:36:11
 * @LastEditTime: 2021-12-26 00:12:43
 */
const fs = require("fs");
function bucketSort() {
  let bucketLength = 100;
  const ageRange = 100;
  let bucket = Array.from({ length: bucketLength }, () => []);
  for (let index = 1; index <= 10; index++) {
    let data = require("./data/" + index + ".json");
    data.forEach((element) => {
      bucket[Math.floor(element.age / (ageRange / bucketLength))].push(element);
    });
  }
  bucket.forEach((item, i) => {
    console.log(
      `年龄在${i * (ageRange / bucketLength)}的学生人数有${item.length}`
    );
  });
}
console.time("bucketSort");
bucketSort();
console.timeEnd("bucketSort");
