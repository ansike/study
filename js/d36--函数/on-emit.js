/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-08-17 10:41:01
 * @LastEditTime: 2019-08-17 10:58:16
 */
// 1.读数据 node异步
const fs = require("fs");
let school = {}

// ============================================发布订阅
let e = {
  arr:[],
  on(fn){
    this.arr.push(fn);
  },
  emit(){
    this.arr.forEach(element => {
      element();
    });
  }
}
e.on(()=>{
  if (Object.keys(school).length === 2) {
    console.log(school);
  }
})

fs.readFile("name.txt", "utf8", (err, data) => {
  school["name"] = data;
  e.emit()
});

fs.readFile("age.txt", "utf8", (err, data) => {
  school["age"] = data;
  e.emit()
});

// ============================================观察者
