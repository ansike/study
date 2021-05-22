var http = require('http');
var net = require('net');

const server = http.createServer((req, res) => {
	console.log('start server');
	connectRequest(res);
});

// create tunnel
function connect(cReq, clientSock) {
	var serverSock = net
		.connect('8001', 'localhost', function() {
			console.log('connect:8001');
			clientSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
			serverSock.pipe(clientSock);
		})
		.on('error', function(e) {
			clientSock.end();
		});
	clientSock.pipe(serverSock);
}

const connectRequest = (response) => {
	const options = {
		port: 8888,
		host: '127.0.0.1',
		method: 'CONNECT'
	};

	const req = http.request(options);
	req.end();
	req.on('connect', (res, socket, head) => {
		console.log('got connected!');
		let data = '';
		// Make a request over an HTTP tunnel
		socket.write('GET / HTTP/1.1\r\n' + 'Host: \r\n' + 'Connection: close\r\n' + '\r\n');
		socket.on('data', (chunk) => {
			data += chunk;
		});
		socket.on('end', () => {
			response.end(data);
			// server.close();
		});
	});
};

server.on('connect', connect);
server.listen(8888);
