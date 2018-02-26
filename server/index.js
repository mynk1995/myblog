import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';
import route from './routes/index.js';

var MongoClient = require('mongodb').MongoClient;
const router = express.Router();
let app = express();
const compiler = webpack(webpackConfig);
MongoClient.connect("mongodb://localhost:27017/config", function (err, database) {
     if(err) throw err;
     const mydb = database.db('config');
    app.set('db',mydb);      
});

for (var x in route ){
	app.use('/api',require(path.join(__dirname+'/routes/',route[x])));
}

app.use(webpackMiddleware(compiler,{
  hot: true,
  publicPath : webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname,'../public/index.html'));
});



app.listen(3333,()=>{
  console.log('Running Local Server at Port: ' + 3333);
});
