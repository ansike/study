const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    console.log(req.url);
    let file;
    switch (req.url) {
      case "/":
        file = fs.readFileSync("./index.html", { encoding: "utf-8" });
        break;
      case "/test":
        file = fs.readFileSync("./test.html", { encoding: "utf-8" });
        break;
      default:
        break;
    }
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(file);
  })
  .listen(8888);

console.log("listen 8888 sucess");
