let mysql = require('mysql');
let connMySQL = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
};

module.exports = function () {
    return connMySQL;
};