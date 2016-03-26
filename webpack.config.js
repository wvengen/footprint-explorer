'use strict';

var webpack = require('webpack');

var env = process.env.ENV || 'development';
var production  = (env == 'production');
var development = (env == 'development');

function compact(ary) {
  return ary.filter(function (e) { return e; });
}

module.exports = {
  context: __dirname,
  devServer: {
    hot: true,
    inline: true
  },
  entry: compact([
    development ? 'webpack/hot/only-dev-server' : null,
    'babel-polyfill',
    './src/index'
  ]),
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|jpg|svgz?)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: compact([
    development ? new webpack.HotModuleReplacementPlugin() : null,
    new webpack.NoErrorsPlugin()
  ]),
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
