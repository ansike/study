/*
 * @Description: description
 * @Author: Ask
 * @LastEditors  : Ask
 * @Date: 2020-01-08 17:36:32
 * @LastEditTime : 2020-01-09 21:42:13
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
const staticPath = path.resolve(__dirname, "../static/files/");
app.use(
  KoaBody({
    multipart: true,
    formidable: {
      maxFieldsSize: 20 * 1024 * 1024,
      uploadDir: staticPath,
      keepExtensions: true
    }
  })
);

// =============== 路由=============
KoaRouter.get("/", async ctx => {
  ctx.body = "首页";
});

KoaRouter.post("/upload", async ctx => {
  const { name, type, chunkCount, index, token } = ctx.request.body;
  const file = ctx.request.files.file;
  const fName = name;
  const fPath = file.path;
  console.log(index);
  // const md5 = hash.createFileHashSync(fPath);
  fs.renameSync(fPath, staticPath + "/" + token + "-" + index + "-" + fName);
  if (type === "merge") {
    const ws = fs.createWriteStream(staticPath + "/" + token + "-" + fName);
    ws.on("data", function(chunk) {
      console.log("DATA:", chunk);
    });
    ws.on("end", function() {
      console.log("END");
    });

    ws.on("error", function(err) {
      console.log("ERROR: " + err);
    });
    let curIndex = 0;
    const merge = () => {
      const curFile = staticPath + "/" + token + "-" + curIndex + "-" + fName;
      console.log("merge", curFile);
      const rs = fs.createReadStream(curFile);
      rs.pipe(ws, { end: false });
      rs.on("end", () => {
        fs.unlink(curFile, err => console.log(err));
        console.log(curIndex, chunkCount);
        if (curIndex < chunkCount - 1) {
          curIndex++;
          merge();
        } else {
          ws.end();
        }
      });
    };
    merge();
    ctx.body = "merge";
  } else {
    ctx.body = [
      {
        url:
          "http://localhost:90/files/" +
          staticPath +
          "/" +
          token +
          "-" +
          index +
          "-" +
          fName
      }
    ];
  }
});

app.use(KoaRouter.routes());
app.use(KoaRouter.allowedMethods());

app.listen(port);
console.log("server is listen port " + port);
