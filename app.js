var express = require('express');

var app = express();

function logger (req, res, next) {
	console.log(new Date(), req.method, req.url);
	next();
}

function hello (req, res, next) {
	res.write('Hello \n');
	next();
}

function bye (req, res, next) {
  res.write('Bye \n');
  res.end();
}

app.use(logger);
app.get('/hello', hello, bye);

var server = app.listen(3000);
console.log('Listening 3000...');