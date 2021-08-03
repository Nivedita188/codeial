const express = require('express');
const port = 8000;
const app = express();

// use express router
app.use('/',require('./routes'));
// for every url require routes


app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
});