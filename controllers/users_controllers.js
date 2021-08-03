module.exports.profile=function(req,res){
    // return res.end('<h1>users Profile</h1>');
    return res.render('users', {
        title: "UsersProfile"
    });
}