// this is not the same as official results
// that makes use of for loop to make 3 http requests
// which avoid code repetition. +1

var http = require('http');
var bl = require('bl');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

http.get(url1, function(response1) {
	response1.pipe(bl(function(err, data) {
		if (err) {
			return err;
		}

		console.log(data.toString());

		http.get(url2, function(response2) {
			response2.pipe(bl(function(err, data2) {
				if (err) {
					return err;
				}

				console.log(data2.toString());

				http.get(url3, function(response3) {
					response3.pipe(bl(function(err, data3) {
						if (err) {
							return err;
						}

						console.log(data3.toString());
					}));
				});
			}));
		});
	}));
});
