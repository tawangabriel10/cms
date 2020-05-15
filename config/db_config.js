/**
 * File that creates and exports a connection to the database
 */
var mysql = require('mysql');

var connMySQL = function() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'cms'
    });
}

module.exports = function() {
   return connMySQL;
};