const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User  = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email',
  },
  function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
      if (err) {
        console.log("error in finding user -->passport")  
        return done(err); }
      if (!user || user.password!=password) {
           console.log("invalid usernasme/password");
           return done(null, false);
           // error=null & authentication =false
      }
      return done(null, user);
    });
  }
));

// serializing the user to decide which key is to be kept in cookies


passport.serializeUser(function(user,done){
    done(null,user.id);
});

// deserializing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user)
    {
        if (err) {
            console.log("error in finding user -->passport")  
            return done(err); }
       return done(null,user);
    });
});

// to check if the user is authenticated
passport.checkAuthentication=function(req,res,next)
{
  // if the user is signed in then pass the request to next function(controller's action)
  if(req.isAuthenticated())
  {
    return next();
  }
  // if the user is not signed in
  else
  {
    return res.redirect('/users/sign-in')
  }
}

// locals will contain user if user is signed in
passport.checkAuthenticatedUser=function(req,res,next)
{
  // req.user contains the current signed in user from the session and we are just sending this to the locals for the views
  if(req.isAuthenticated())
  {
    res.locals.user=req.user;
  }
  
  next();
}
module.exports=passport;