const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/to_do_db',{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error while connectiong to database:'));
db.once('open', function() {
  // we're connected!
  console.log("succcessful connection to database");
});