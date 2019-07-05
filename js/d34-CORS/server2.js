const http = require("http");
http.createServer((req,res)=>{
  res.writeHead(200,{
    // "Content-Type":"text/json",
    "Access-Control-Allow-Origin":"*",
    // "suiyixiede":"hahah",
    // "Access-Control-Allow-Headers":"X-Requested-With"
  })
  // console.log(req);
  res.end(JSON.stringify({
    errNo:200,
    data:{

    },
    errStr:"success"
  }));
}).listen(8889);

console.log("listen 8889 sucess")