const Post  = require('../models/post');

module.exports.create=function(req,res){
    Post.create({
        content: req.body.content,
        user:req.user._id
        // as we saved info of authenticated user(res.locals.user=req.user)
    },function(err,post)
            {
                if(err){console.log('Error in creating user a post!')
                return;}
                return res.redirect('back');
            })
}