const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/codeial1_db',{useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("successfully,we're connected!");
  // we're connected!
});