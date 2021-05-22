const http = require('http');
const https = require('https');
const fs = require('fs');
const net = require('net');

// create tunnel
function connect(cReq, clientSock) {
	console.log('connect');
	var serverSock = net
		.connect('8001', '127.0.0.1', function() {
		// .connect('8888', '127.0.0.1', function() {
			console.log('connect:8001');
			clientSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
			clientSock.write('这是一段文本');
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
server.listen(8888, '127.0.0.1', () => {
	console.log('服务8888开始启动');
});
