var express = require('express');

var app = express();
var apiRouter = express.Router();

function logger (req, res, next) {
	console.log(new Date(), req.method, req.originalUrl);
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

apiRouter.use(logger);
app.use('/api', apiRouter);
app.use(hello, bye);

var server = app.listen(3000);
console.log('Listening 3000...');