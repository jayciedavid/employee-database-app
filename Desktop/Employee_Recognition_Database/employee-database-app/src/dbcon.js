// dbcon.js database connection file for GeminiDB

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: '---',
	port: 3306,
    user: '---',
    password: '---',
    database: 'geminidb'
});
module.exports.pool = pool;