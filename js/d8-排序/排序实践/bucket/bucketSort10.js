/*
 * @Description: 10个桶排序
 * @Date: 2019-10-05 16:36:11
 * @LastEditTime: 2021-12-26 00:03:22
 */
const fs = require("fs");
const path = require("path");
const dirpath = path.resolve(__dirname, "./data");

console.time("bucketSort");
bucketSort();
console.timeEnd("bucketSort");

function bucketSort() {
  const bucketLength = 10;
  const ageRange = 100;
  // 此处创建的桶在内存中, 在限制内存的场景中需要放在硬盘上
  const bucket = Array.from({ length: bucketLength }, () => []);
  for (let index = 1; index <= 10; index++) {
    const data = require(path.resolve(dirpath, index + ".json"));
    data.forEach((element) => {
      bucket[Math.floor(element.age / bucketLength)].push(element);
    });
  }
  bucket.forEach((item, i) => {
    item.sort((a, b) => a.age - b.age);
    console.log(
      `年龄在${(i * ageRange) / bucketLength}~${
        (i * ageRange) / bucketLength + 9
      }的学生人数有${item.length}`
    );
  });
}
