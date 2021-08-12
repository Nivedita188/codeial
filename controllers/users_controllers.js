const passport = require('passport');
const User  = require('../models/user');

module.exports.profile=function(req,res){
    // return res.end('<h1>users Profile</h1>');
    return res.render('users', {
        title: "UsersProfile"
    });
}

// render sign in page
module.exports.signin=function(req,res){
    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in', {
        title: "Codeial|| Sign in"
    });
}
// render sign up page
module.exports.signup=function(req,res){
    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up', {
        title: "Codeial|| Sign up"
    });
}

module.exports.create=function(req,res){
    console.log(req.body);
    if(req.body.password != req.body.confirmPassword)
    {
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user)
    {
        if(err){console.log('Error in finding user in sign up!')
                return;}
        if(!user)
        {
            User.create(req.body,function(err,user)
            {
                if(err){console.log('Error in creating user in sign up!')
                return;}
                return res.redirect('/users/sign-in');
            })
        }
        else
        {
            return res.redirect('back');
        }
    });
    }

    module.exports.createSession=function(req,res){
        //    todo later
        return res.redirect('/');
        }
    module.exports.destroySession=function(req,res){
            //    todo later
            req.logout();
            return res.redirect('back');
            } 
        
        
