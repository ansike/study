const http = require("http");
http.createServer((req,res)=>{
  let domains = ["http://localhost:8888", "http://localhost:8890"];
  console.log(req.headers.referer);
  // console.log(domains.find(item => item === req.headers.referer.replace(/\/$/,"")));
  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With,X-Requested-Withs"
  });

    // domains.find(
    //   item => item === req.headers.referer.replace(/\/$/, "")
    // )
    // "Content-Type":"text/json",
    // "suiyixiede":"hahah",
  // console.log(req);
  res.end(JSON.stringify({
    errNo:200,
    data:{

    },
    errStr:"success"
  }));
}).listen(8889);

console.log("listen 8889 sucess")