// module.exports.home=function(req,res){
//         return res.end('<h1>Express is up for codeial</h1>');
//     }
//     console.log("controller connected");

module.exports.home = function(req, res){
    
    return res.render('home', {
        title: "Home"
    });
}
