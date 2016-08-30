var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 
 
module.exports = {
  context:__dirname,   
  resolveLoader: {
      extensions: ['', '.js', '.jsx', '.css'],
      modulesDirectories: [
        './node_modules'
      ]        
  },
  entry: './jsx/main.jsx',
  output: { path: path.join(__dirname, 'build'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['babel-preset-es2015', 'babel-preset-react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  plugins: [
     new ExtractTextPlugin('bundle.css')]
};