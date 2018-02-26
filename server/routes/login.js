import express from 'express';
const router = express.Router();
const login = router.get('/login',function(request,response){
	console.log(request.app.locals.settings.db);
	response.send({
		status:200
	});
});

module.exports = login;
