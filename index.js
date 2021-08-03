const express = require('express');
const port = 8000;
const app = express();

// for layout
const expressLayouts=require('express-ejs-layouts');
app.use(expressLayouts);

// extract style and script from sub pages to layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// to use css and js files (middleware)
app.use(express.static('assets'));

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