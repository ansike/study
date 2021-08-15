/*
 * @Description: 试用express
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-08-15 11:36:22
 * @LastEditTime: 2021-08-15 14:25:41
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
