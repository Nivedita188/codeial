// module.exports.home=function(req,res){
//         return res.end('<h1>Express is up for codeial</h1>');
//     }
//     console.log("controller connected");
const Post  = require('../models/post');

/*module.exports.home = function(req, res){
    
    Post.find({},function(err,posts)
    {
        if(err)
        {
            console.log("Error in fetching posts from DB");
            return;
        }
    return res.render('home', {
        title: "Home",
        all_posts: posts
    });
});
}
*/
module.exports.home = function(req, res){
    
    Post.find({}).populate('user').exec(function(err,posts)
    {
        if(err)
        {
            console.log("Error in fetching posts from DB");
            return;
        }
    return res.render('home', {
        title: "Home",
        all_posts: posts
    });
});
}