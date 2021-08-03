module.exports.profile=function(req,res){
    // return res.end('<h1>users Profile</h1>');
    return res.render('users', {
        title: "UsersProfile"
    });
}

// render sign in page
module.exports.signin=function(req,res){
    return res.render('user_sign_in', {
        title: "Codeial|| Sign in"
    });
}
// render sign up page
module.exports.signup=function(req,res){
    return res.render('user_sign_up', {
        title: "Codeial|| Sign up"
    });
}
