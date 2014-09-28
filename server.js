// Include http module and url modulevar http = require('http');var url = require('url');var join = require('path').join;var parse = require('url').parse;var fs = require('fs');var qs = require('querystring');var items = [];var mongoose = require('mongoose');// Create server on http module with request callbackvar server = http.createServer(function(req, res){  // Grab the index number  var pathName = url.parse(req.url).pathname;  var i = parseInt(pathName.slice(1),10);  var fourHundred = function(){    res.statusCode = 400;    res.end('Item id not valid');  };  var fourHundredFour = function() {    res.statusCode = 404;    res.end('Item not found');  };  // switches on the req.method to use POST  switch (req.method) {    case 'POST':      var item = '';      req.setEncoding('utf8');      req.on('data', function(chunk) {        item += chunk;      });      req.on('end', function() {        items.push(item);        res.end('The item: "' + item + '" was added.\n');      });      break;    case 'GET':      //  user accesses form through path called '/form'      if (pathName === '/form') {        fs.readFile('./index.html', function(err, data) {          res.write(data);          res.end();        });        break;      } else {        items.forEach(function(item, i) {          res.write(i + '. ' + item + '\n');        });      res.end();      break;      }    case 'PUT':      if (isNaN(i)) {        fourHundred();      }      else if (!items[i]) {        fourHundredFour();      }      else {        req.on('data', function(chunk) {          items[i] = chunk;        });        res.end('Item updated');      }      break;    case 'DELETE':      if (isNaN(i)) {        fourHundred();      }      else if (!items[i]) {        fourHundredFour();      }      else {        items.splice(i, 1);        res.end('Item deleted');      }      break;  }});server.listen(9000, function(){  console.log('listening on 9000');});var db = mongoose.connection;db.on('error', function callback() {  console.error('connection error');});db.once('open', function callback() {  console.error('connection success');});// COMPREHENSION CHECK// how do you get a hold of the HTTP verb from the request?// use req.method// how is the data delivered from Node's HTTP Parser?// through POST// What does the following code do `req.on('data', function(chunk){});`?// Each time the parser sends the 'data' event it will run the function.