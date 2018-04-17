const express = require('express')
const app = express()
app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>')
})
app.get('/data', function (req, res) {
    res.json({name: 'Imooc React App', type: 'IT'})
})
app.listen(9093, function () {
    console.log('Node app start at port 9093');
})