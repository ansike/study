const http = require('http');
const fs = require('fs');

const server = http.createServer((cReq, cRes)=>{
  console.log('新的请求');
  fs.ReadStream('./server.js').pipe(cRes)
})

server.listen(8001);
console.log('服务启动8001');