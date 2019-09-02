const fs = require("fs");
const http = require("http");
http.createServer((req,res)=>{
  let file = fs.readFileSync("./test.html", { encoding: "utf-8" });
  
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end(file);
}).listen(8890);

console.log("listen 8890 sucess")