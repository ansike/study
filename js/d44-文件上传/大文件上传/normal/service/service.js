/*
 * @Description: description
 * @Author: Ask
 * @LastEditors  : Ask
 * @Date: 2020-01-08 17:36:32
 * @LastEditTime : 2020-01-09 16:12:59
 */
const path = require("path");
const fs = require("fs");
const Koa = require("koa2");
const KoaStatic = require("koa-static");
const KoaRouter = require("koa-router")();
const KoaBody = require("koa-body");
const hash = require("./hash.js");
const port = 3000;
const app = new Koa();
const filePath = "../static/files";
app.use(
  KoaBody({
    multipart: true,
    formidable: {
      uploadDir: path.resolve(__dirname, filePath),
      keepExtensions: true
    }
  })
);

// =============== 路由=============
KoaRouter.get("/", async ctx => {
  ctx.body = "首页";
});

KoaRouter.post("/upload", async ctx => {
  const files = ctx.request.files.file;
  let result = [];
  files.forEach(item => {
    const fName = item.name;
    const fPath = item.path;
    const md5 = hash.createFileHashSync(fPath);
    const newName = md5 + "-" + fName
    fs.renameSync(fPath, path.resolve(__dirname, filePath + "/" + newName));
    result.push({ url: "http://localhost:90/files/" + newName });
  });
  ctx.body = result;
});

app.use(KoaRouter.routes());
app.use(KoaRouter.allowedMethods());

app.listen(port);
console.log("server is listen port " + port);
