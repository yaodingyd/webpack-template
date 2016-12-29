'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // A publicPath is required because HMR only works in the way that modified bundle is served from memory 
    // at the relative path specified in publicPath. It will not be written to your configured output directory. 
    publicPath: '/assets/'
  },
  watch: true,
  devServer: {
    // inline is for auto refresh
    inline: true,
    hot: true,
    contentBase: "./",
    stats: { chunks: false }
  },
  devtool: "eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ]
}
