const http = require("http");
const fs = require("fs");
http.createServer((req,res)=>{
  let file = fs.readFileSync("./index.html",{encoding:"utf-8"});
  res.writeHead(200,{
    "Content-Type":"text/html"
  })
  res.end(file);
}).listen(8888);

console.log("listen 8888 sucess")