var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(request, response) {
	if (request.method !== 'GET') {
		response.end('das ist kein GET!');
	}

	var urlParts = url.parse(request.url, true);

	var isoDate = new Date(urlParts.query.iso);
	var responseObject;

	if (urlParts.pathname === '/api/parsetime') {
		responseObject = {
			hour: isoDate.getHours(),
			minute: isoDate.getMinutes(),
			second: isoDate.getSeconds()
		};
	} else if (urlParts.pathname === '/api/unixtime') {
		responseObject = {
			unixtime: isoDate.getTime()
		};
	}

	if (typeof response === 'undefined') {
		response.writeHead(404);
		response.end();
	} else {
		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.end(JSON.stringify(responseObject));
	}
});

server.listen(port);
