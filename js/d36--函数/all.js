/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-08-17 10:41:01
 * @LastEditTime: 2019-08-17 17:42:27
 */
// 1.读数据 node异步
const fs = require("fs");
let school = {}
const after = (times, fn) => {
  return () => {
    if (--times === 0) {
      fn();
    }
  };
};
// 执行两次
const anyMethods = after(2, () => {
  console.log(school);
});

fs.readFile("name.txt", "utf8", (err, data) => {
  school["name"] = data;
  anyMethods();
});

fs.readFile("age.txt", "utf8", (err, data) => {
  school["age"] = data;
  anyMethods();
});
