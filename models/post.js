let connection;
var mysql = require('mysql');



function dbConnectFunc(sqlQuery,callback) {
	var resultJson = 'tryresultJson' ;

	let connection = mysql.createConnection({
		host: "localhost",
		user: "myUser",
		password: "myPassword",
		database: 'myDatabase'
	});

	connection.connect(function(err) {
		if (err) {
			return console.error('error: ' + err.message);
		  }
		
		  connection.query(sqlQuery, function(err, results, fields) {
			if (err) {
			  console.log(err.message);
			}
			console.log(results.affectedRows);	
			resultJson = '['+results.affectedRows+']';					 
			callback(resultJson) ;					
		  });
		  
		  connection.end(function(err) {
			if (err) {
			  return console.log(err.message);
			}
		  });

	});
	
}

exports.dbConnectFunc = dbConnectFunc;