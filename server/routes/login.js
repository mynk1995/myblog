import express from 'express';
const router = express.Router();
const getPostById = router.get('/getPostById',function(request,response){
	console.log(request.app.locals.settings.db);
	response.send({
		status:200
	});
});

module.exports = getPostById;
