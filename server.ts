///<reference path="./typings/tsd.d.ts"/>
import express = require('express');
import bodyParser = require('body-parser');
import path = require('path');
let app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('view options', { layout: false });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let indexRoute = require('./routes/index.js');

app.get('/', (req, res, next) => {
  res.render('index.html')
})
app.use('/', indexRoute);

app.use((req, res) => {
	res.status(404);
  if (req.accepts('html')) return res.render('404.html');
  if (req.accepts('json')) return res.send({ error: 'Not found' });
  res.type('txt').send('Not found');
});

app.use((err: Error, req: express.Request, res: express.Response, next: any) => {
  res.status(400);
  if(req.accepts('json')) return res.send({error: err});
  res.send(err);
});

app.listen(3000, function(req, res) {
  console.log('connected');
});
