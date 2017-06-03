/**
 * Created by mikegraham on 9/20/16.
 */
var express = require('express');
var app = express();

var customers = [
    {firstName:'Peter', lastName: 'Pan', age:13},
    {firstName:'Captain', lastName:'Hook', age:35}
];

app.get('/customers/', function(req, res) {
    res.type('text/plain');
    res.json(customers);
});

app.post('/customers/', function(req, res) {
    res.type('text/plain');
    res.json(customers);
});

app.use('/', express.static(__dirname + '/public/'));

app.listen(1234);