const http = require('http');

const server = http.createServer((cReq, cRes)=>{
  const options = {
    hostname: cReq.hostname,
    // 在这儿改了端口
    port: "8001",
    path: cReq.path,
    method: cReq.method,
    headers: cReq.headers,
  }
  const newReq = http.request(options, (nRes)=>{
    cRes.writeHead(nRes.statusCode, nRes.headers);
    nRes.pipe(cRes);
  }).on("error", (e)=>{
    console.log(e);
    cRes.end("error")
  })
  cReq.pipe(newReq);
})

server.listen(8888);
console.log("服务8888开始启动")