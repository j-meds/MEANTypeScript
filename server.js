///<reference path="./typings/tsd.d.ts"/>
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.set('views', path.join(__dirname, 'views'));
// app.engine('.html', require('ejs').renderFile);
// app.set('view engine', 'ejs');
// app.set('view options', { layout: false });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var indexRoute = require('./routes/index.js');
app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
app.use('/', indexRoute);
app.use(function (req, res) {
    res.status(404);
    if (req.accepts('html'))
        return res.render('404.html');
    if (req.accepts('json'))
        return res.send({ error: 'Not found' });
    res.type('txt').send('Not found');
});
app.use(function (err, req, res, next) {
    res.status(400);
    if (req.accepts('json'))
        return res.send({ error: err });
    res.send(err);
});
app.listen(3000, function (req, res) {
    console.log('connected');
});
