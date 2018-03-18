import express from 'express';
const router = express.Router();
const updateLikes = router.post('/updateLikes',function(request,response){
	const db = request.app.locals.settings.db;
	const likes = db.collection('likes');
	const likesData = request.body.data;
	console.log(likesData);
	const currentDate = new Date(Date.now()).toISOString();
	const insertingFormIntoLikesDatabase = Object.assign({},likesData,{likeStatus:1});
	let bool = false;
	const updatingLikesForPost = (error,result)=>{
		if(error){
			response.send({
				status:403,
				error:error
			});
		} else {
			response.send({
					status:200,
					result:result
				});
		}
	}

	const insertingLikesForPost = (error,result)=>{
		if(error){
			response.send({
				status:403,
				error:error
			});
		} else {
			response.send({
					status:200,
					error:result
				});
		}
	}
	const findingLikesInfoFromDatabase = (error,result)=>{
		if(error){
			response.send({
				status:403,
				error:error
			});
		} else{
			if(result.length==1){
				bool = result[0].bool;
				insertingFormIntoLikesDatabase.bool = !bool;
				likes.update({userId:likesData.userId,postId:likesData.postId},insertingFormIntoLikesDatabase,{upsert:true},updatingLikesForPost);
			} else if (result.length==0){
				likes.insertOne(likesData,insertingLikesForPost);
			} else {
				response.send({
					status:403,
					error:error
				});
			}
		}
	}
	likes.find({userId:likesData.userId, postId:likesData.postId}).toArray(findingLikesInfoFromDatabase);


});
module.exports = updateLikes;