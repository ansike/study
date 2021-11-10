/*
 * @Description: 试用express
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-08-15 11:36:22
 * @LastEditTime: 2021-10-21 22:25:12
 */
const express = require("./express");
const PORT = 8000;
const app = new express();

app.use((req, res, next) => {
  console.log("middleware");
  next();
});

app.get("/api/hello", (req, res) => {
  console.log("get /api/hello");

  res.end("hello worlds");
});

app.post("/api/hello", (req, res) => {
  res.end("hello world");
});

app.listen(PORT, () => {
  console.log(`服务启动在: ${PORT}端口`);
});

const cityData = [
  { id: 1, name: "深圳", children: [{ id: 11, name: "南山区", children: [] }] },
  { id: 2, name: "北京", children: [] },
];

function find(data, id) {
  
}
