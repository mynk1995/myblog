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

  if(validateData(postData)) {

    let dbResponse = addData(postData);

    response.send({
  		status:200,
      added:'query executed',
      result:dbResponse 
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
