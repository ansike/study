const https = require('https');
const fs = require('fs');
const net = require('net');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// create tunnel
function connect(cReq, clientSock, head) {
	console.log('connect');
	var serverSock = net
		// 注意此处的隧道不仅可以与当前服务建立，也可以和任意服务建立，如果和其他服务建立之后，之后的数据通信将通过该服务直接转发
		.connect('8001', '127.0.0.1', function() {
			// .connect('8888', '127.0.0.1', function() {
			console.log('connect:8001');
			clientSock.write('HTTP/1.1 200 Connection Established\r\nProxy-agent: Node.js-Proxy\r\n\r\n');
			// clientSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
			clientSock.write(head);
			serverSock.pipe(clientSock);
			clientSock.pipe(serverSock);
		})
		.on('error', function(e) {
			clientSock.end();
		});
}

var options = {
	key: fs.readFileSync('./server.key'),
	cert: fs.readFileSync('./server.crt')
};

const server = https.createServer(options, (req, res) => {
	res.end('visit');
});
server.on('connect', connect);
server.listen(8888, '127.0.0.1', () => {
	console.log('服务8888开始启动');
});
