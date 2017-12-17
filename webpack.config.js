var webpack = require('webpack');
var path = require('path');
var distPath = path.resolve(__dirname + '/dist');
var libraryName = 'react-font-size-resizer';

var config = {
  entry: [__dirname + '/src/index.js'],
  output: {
    path: distPath,
    filename: 'bundle.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.svg$/,
      loader: 'babel!svg-react'
    }]
  },
  resolve: {
    root: path.resolve('.'),
    extensions: ['', '.js'],
  },
  plugins: [
    new webpack.optimize.DedupePlugin()
  ],
  node: {
    global: false
  }
};

module.exports = config;
