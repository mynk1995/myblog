import express from 'express';
const router = express.Router();
var ObjectId = require('mongodb').ObjectId;
const postById = router.get('/post/:id',function(request,response){
	const id=request.params.id;
	console.log(id);
	const query={ "_id": ObjectId(id)};
	const db = request.app.locals.settings.db;
	const posts = db.collection('posts');

  posts.find(query).toArray((error,result)=>{
  		if(error){
  			response.send({
  				status:403,
  				error:error
  			});
  		}
  		else{
  			console.log(result);
  			response.send({
  				status:200,
  				result:result
  			});
  		}


  });

});
module.exports = postById;
