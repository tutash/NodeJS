var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
	//Let's see how this handles comments
  res.end('Okay... lets get to writing some services that connect with mongo. But first, some html\n');
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');