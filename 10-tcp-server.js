var net = require('net');
var port = process.argv[2];

function zeroFill(i) {
	return (i < 10)
		? '0' + i
		: i;
}

net.createServer(function(socket) {
	var date = new Date();
	// "YYYY-MM-DD hh:mm"
	var monthNum = zeroFill(date.getMonth() + 1);
	var dateString = zeroFill(date.getFullYear()) + '-' + monthNum + '-' + zeroFill(date.getDate());
	var timeString = zeroFill(date.getHours()) + ':' + zeroFill(date.getMinutes());
	var data = dateString + ' ' + timeString + '\n';

	socket.end(data);
}).listen(port);
