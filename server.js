'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', function (req, res) {
  //set the appropriate HTTP header
  res.setHeader('Content-Type', 'text/html');
  res.send('<h1>Hello, Welcome to first Srini Jenkinds Docker Apps ! </h1>');

});

app.get('/', function (req, res) {
 //send multiple responses to the client
  for (var i=1; i <= 5; i++) 
  {
		res.send('<h1>This is the response Loop Iteration#: ' + i + '</h1>');		
   }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
