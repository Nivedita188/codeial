const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;


// for layout
const expressLayouts=require('express-ejs-layouts');

// to store the data in database
const db=require('./config/mongoose');

// for parsing the data submitted through form
// app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// to use css and js files (middleware)
app.use(express.static('assets'));

app.use(expressLayouts);
// extract style and script from sub pages to layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// use express router
app.use('/',require('./routes'));
// for every url require routes

// to set view engine as ejs
app.set('view engine', 'ejs');
app.set('views', './view');



app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
});