import express from 'express';
const router = express.Router();
const getPosts = router.get('/posts',function(request,response){
	const db = request.app.locals.settings.db;
	const posts = db.collection('posts');
	posts.find().sort({createdAt:-1}).toArray((error,result)=>{
		if(error){
			response.send({
				status:403,
				error:error
			});
		} else{
			console.log(result);
			response.send({
				status:200,
				result:result
			});
		}
	})

});

module.exports = getPosts;
