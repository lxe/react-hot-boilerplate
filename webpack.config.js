var path = require('path');
var webpack = require('webpack');

var EXTERNAL_URL = process.env.EXTERNAL_URL || 'http://localhost:3000';

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?' + EXTERNAL_URL,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
