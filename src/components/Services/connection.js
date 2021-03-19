var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'DemoDb',
})

var cn = connection.connect();

// connection.query('insert INTO tbluser VALUES(null,"uname","pwd","email")', function (err, rows, fields) {
//     if (err) throw err

//     console.log('The solution is: ', rows[0].solution)
// })

module.exports = { connection, cn };