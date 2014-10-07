var mongoose = require('mongoose');

mongoose.connect('mongodb://gwolfe2007:rubi12_m@ds039860.mongolab.com:39860/thinkful-db');

var db = mongoose.connection;
console.log(db);

db.on('error', function callback() {
  console.error('connection error');
});
db.once('open', function callback() {
  console.error('connection success');
});

module.exports = db;
