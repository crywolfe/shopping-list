// Include http module and url module
var http = require('http');
var url = require('url');
var join = require('path').join;
var parse = require('url').parse;
var fs = require('fs');
var qs = require('querystring');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var items = [];
var myitems = require('./items');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.post('/', myitems.create);

  //   case 'GET':
  //     //  user accesses form through path called '/form'
  //     if (pathName === '/form') {
  //       fs.readFile('./index.html', function(err, data) {
  //         res.write(data);
  //         res.end();
  //       });
  //       break;
  //     } else {
  //       items.forEach(function(item, i) {
  //         res.write(i + '. ' + item + '\n');
  //       });
  //     res.end();
  //     break;
  //     }
  //
  //   case 'PUT':
  //     if (isNaN(i)) {
  //       fourHundred();
  //     }
  //     else if (!items[i]) {
  //       fourHundredFour();
  //     }
  //     else {
  //       req.on('data', function(chunk) {
  //         items[i] = chunk;
  //       });
  //       res.end('Item updated');
  //     }
  //     break;
  //
  //   case 'DELETE':
  //     if (isNaN(i)) {
  //       fourHundred();
  //     }
  //     else if (!items[i]) {
  //       fourHundredFour();
  //     }
  //     else {
  //       items.splice(i, 1);
  //       res.end('Item deleted');
  //     }
  //     break;
  // // }


app.listen(9000, function(){
  console.log('listening on 9000');
});


// got connection error when using crywolfe:rubi12_m@ds...



// COMPREHENSION CHECK

// how do you get a hold of the HTTP verb from the request?
// use req.method

// how is the data delivered from Node's HTTP Parser?
// through POST

// What does the following code do `req.on('data', function(chunk){});`?
// Each time the parser sends the 'data' event it will run the function.
