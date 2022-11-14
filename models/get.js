let connection;
const { createPool } = require('mysql');

var tempResultJson = '';

function dbConnectFunc(sqlQuery, callback) {


	const mysqlPool = createPool({
		host: "localhost",
		user: "myUser",
		password: "myPassword",
		database: 'myDatabase',
		connectionLimit: 10
	});



	mysqlPool.query(sqlQuery, (error, result, fields) => {
		if (error) return console.log('Error is ', error);
		if (result) {
			for (var i = 0; i < result.length; i++) {
				console.log('result[i]', result[i]);
				tempResultJson = tempResultJson + '{\"id\" : \"' + result[i].ID + '\" , \"courseName\" : \"' + result[i].COURSE_NAME + '\" , \"rating\" : \"' + result[i].RATING + '\" , \"price\" : \"' + result[i].PRICE + '\" , \"trainerName\" : \"' + result[i].TRAINER_NAME + '\" , \"numberOfDays\" : \"' + result[i].NUMBER_OF_DAYS + '\"},';
			}
			resultJson = `[ ${tempResultJson.substring(0, tempResultJson.length - 1)} ]`;
				tempResultJson = '';
				console.log('resultJson is', resultJson);
				callback(resultJson);
		};


	})

	
}

exports.dbConnectFunc = dbConnectFunc;