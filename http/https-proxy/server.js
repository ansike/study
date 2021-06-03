const https = require('https');
const fs = require('fs');

const options = {
	key: fs.readFileSync('./server.key'),
	cert: fs.readFileSync('./server.crt')
};
//禁用证书验证，不然自签名的证书无法建立 TLS 连接
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const server = https.createServer(options);
const request = (cReq, cRes) => {
	console.log('新的请求');
	fs.ReadStream('./server.key').pipe(cRes);
};
server.on('request', request);
server.listen(8001);
console.log('服务启动8001');
