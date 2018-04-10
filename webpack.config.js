const webpack = require('webpack');

let config = {
  entry: './app/script.js',
  output: {
    filename: 'bundle.js'
  },
  mode: 'development'
}

module.exports = config;