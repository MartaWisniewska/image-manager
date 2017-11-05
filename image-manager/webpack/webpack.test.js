'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { exclude: /node_modules/, loader: 'tslint-loader', test: /\.ts$/ },
      { loader: 'raw', test: /\.(css|html)$/ },
      { exclude: /node_modules/, loader: 'ts-loader', test: /\.ts$/ },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.ts'],
    modules: [
      'node_modules',
      path.resolve('.', 'src')]
  }
};
