const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;


// for layout
const expressLayouts=require('express-ejs-layouts');

// to store the data in database
const db=require('./config/mongoose');

// to require session cookie
const session=require('express-session');
const passport=require('passport');
const LocalStrategy = require('./config/passport-local-strategy');

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



// to set view engine as ejs
app.set('view engine', 'ejs');
app.set('views', './view');

app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.checkAuthenticatedUser);
// use express router
app.use('/',require('./routes'));
// for every url require routes 

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
});