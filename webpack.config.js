var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: {
    app: './source/js/main.js'
  },
  output: {
    path: './source/javascripts',
    filename: 'all.js'
  },
  resolve: {
    root: [path.resolve('./source/js')]
  }
};

