/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-12-25 21:57:00
 * @LastEditTime: 2021-12-26 00:12:53
 */
const fs = require("fs");
function bucketSort() {
  let bucketLength = 20;
  const ageRange = 100;
  let bucket = Array.from({ length: bucketLength }, () => []);
  for (let index = 1; index <= 10; index++) {
    let data = require("./data/" + index + ".json");
    data.forEach((element) => {
      bucket[Math.floor(element.age / (ageRange / bucketLength))].push(element);
    });
  }
  bucket.forEach((item, i) => {
    // item.sort((a, b) => a.age - b.age);
    console.log(
      `年龄在${i * (ageRange / bucketLength)}~${
        i * (ageRange / bucketLength) + 4
      }的学生人数有${item.length}`
    );
  });
}
console.time("bucketSort");
bucketSort();
console.timeEnd("bucketSort");
