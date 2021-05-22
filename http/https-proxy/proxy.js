const http = require('http');
const https = require('https');
const fs = require('fs');
const net = require('net');

//禁用证书验证，不然自签名的证书无法建立 TLS 连接
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const request = (cReq, cRes) => {
	console.log('request');
	const options = {
		hostname: cReq.hostname,
		// 在这儿改了端口
		port: '8001',
		path: cReq.path,
		method: cReq.method,
		headers: cReq.headers,
	};
	const newReq = http
		.request(options, (nRes) => {
			cRes.writeHead(nRes.statusCode, nRes.headers);
			nRes.pipe(cRes);
		})
		.on('error', (e) => {
			console.log(e);
			cRes.end('error');
		});
	cReq.pipe(newReq);
};

// create tunnel
function connect(cReq, clientSock) {
	console.log('connect');
	var serverSock = net
		.connect('8001', '127.0.0.1', function() {
			console.log('connect:8001');
			clientSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
			serverSock.pipe(clientSock);
		})
		.on('error', function(e) {
			clientSock.end();
		});
	clientSock.pipe(serverSock);
}

var options = {
	key: fs.readFileSync('./server.key'),
	cert: fs.readFileSync('./server.crt')
};

const server = https.createServer(options);
server.on('connect', connect);
server.on('request', request);
server.listen(8888, '127.0.0.1', () => {
	console.log('服务8888开始启动');
});
