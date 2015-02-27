var myDirReader = require('./06-modular-dir-reader');

myDirReader(process.argv[2], process.argv[3], function(err, files) {
	if (err) {
		console.log('oops!, there are some errors occurred.');
	}

	files.forEach(function(file) {
		console.log(file);
	});
});
