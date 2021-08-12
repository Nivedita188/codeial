const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/codeial1_db',{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true,
useFindAndModify: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("successfully,we're connected to mongDB!");
  // we're connected!
});
module.exports=db;