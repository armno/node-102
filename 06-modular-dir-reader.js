var fs = require('fs');
var path = require('path');

var filteredLs = function(dirname, ext, cb) {
	fs.readdir(dirname, function doneReadDir(err, list) {
		if (err) {
			return cb(err);
		}

		//list.forEach(function(file) {
		//	if (path.extname(file) === '.' + ext) {
		//		matchedFiles.push(file);
		//	}
		//});

		var matchedFiles = list.filter(function(file) {
			return path.extname(file) === '.' + ext;
		});

		cb(null, matchedFiles);
	});
};

module.exports = filteredLs;
