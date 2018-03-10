import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';
import mongodb from 'mongodb';
import config from '../configurations/config.js';

import webpackConfig from '../webpack.config.dev.js';
import route from './routes/index.js';


var MongoClient = require('mongodb').MongoClient;
const router = express.Router();
let app = express();
const compiler = webpack(webpackConfig);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

MongoClient.connect(config.mongodb.host+':'+config.mongodb.port, function (err, database) {
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
