const path = require('path');
const webpack = require('webpack');
module.exports ={
  entry : [
    path.join(__dirname,'client/index.js'),
    'webpack-hot-middleware/client'
  ],

  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename:'bundle.js'
  },
  plugins:[
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.join(__dirname,'/client'),
        loaders: [ 'react-hot-loader/webpack','babel-loader','babel-loader?presets[]=es2015,presets[]=es2016,presets[]=react,presets[]=stage-3,plugins[]=transform-class-properties'],
      }, {
              test: /\.css$/,
              loaders: [ 'style-loader', 'css-loader' ],
      }, {
            test   : /\.(png|jpg)$/,
            loader : 'url-loader?limit=8192'
      }, {
            test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader : 'file-loader'
      }
          ]
  },
  resolve: {
    extensions : ['.js','.css','jsx']
  }
}
