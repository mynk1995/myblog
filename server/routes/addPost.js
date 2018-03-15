import express from 'express';
const router = express.Router();

let validateData = (post) =>{
  if(post.title && post.body && post.authorName && post.authorId && post.likes && post.comments && post.tags && post.category){
    return true;
  } else {
    return false
  }
}

const addPost = router.post('/post',function(request,response){
  let postData = request.body.postData;
  postData.createdAt = new Date();
  postData.updatedAt = new Date();
  const db = request.app.locals.settings.db;
  if(validateData(postData)) {
    var myobj = postData;
    db.collection("posts").insertOne(myobj, function(err, res) {
      if (err) return response.json({status:404, error:err});
      else {
        response.send({
          status:200,
          added:'query executed',
          result:res
        });
      }
      console.log("1 document inserted");
    });




  } else {
    response.send({
  		status:403,
      added:'error',
      error:'minimum required fields are not fullfilled'
  	});
  }

});

module.exports = addPost;
