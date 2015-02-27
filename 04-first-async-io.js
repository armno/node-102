var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
	var content = data.toString();
	var lines = content.split('\n').length - 1;
	console.log(lines);
});
