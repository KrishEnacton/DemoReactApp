const { json } = require('express');
const express = require('express');
const cors = require('cors')
const { connection, cn } = require('./connection');
const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
    //console.log(req.query);
    connection.query(`select * from tbluser `, function (err, rows, fields) {
        if (err) throw err
        console.log('Inserted:', rows);
        res.send(rows);
    })
    // res.send('Hello World!');
})

app.get('/insert', (req, res) => {
    console.log(req.query);
    connection.query(`insert INTO tbluser VALUES(null,'${req.query.uname}','${req.query.pwd}','${req.query.email}')`, function (err, rows, fields) {
        if (err) throw err
        console.log('Inserted');
    })
    //var st = res.statusCode;
    res.json({ status: res.statusCode })
    // res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
