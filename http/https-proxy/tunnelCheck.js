var https = require('https');

var options = {
	hostname: '127.0.0.1',
	port: 8888,
	path: '/',
	method: 'CONNECT'
};

//禁用证书验证，不然自签名的证书无法建立 TLS 连接
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var req = https.request(options);

req.on('connect', (res, socket) => {
	console.log('connect');
	socket.write('GET / HTTP/1.1\r\n' + 'Host: 127.0.0.1\r\n' + 'Connection: Close\r\n' + '\r\n');
	let str = '';
	socket.on('data', function(chunk) {
		str += chunk.toString();
	});

	socket.on('end', function() {
		console.log('socket end.');
		console.log(str);
	});
});

req.end();
