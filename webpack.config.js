var webpack = require("webpack");
var path = require("path");
var expand = require("expand");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/osshome.js",
  output: {
    path: "./target",
    filename: "js/osshome.js"
  },
  module: {
    loaders: [
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},
    ]
  },
  plugins: [
    // $importantNote uncomment before pushing.  Comment during local development for faster webpack build times
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: false,
      output: {
        comments: false,
      },
    }),
    new CopyWebpackPlugin([
      { from: 'src/css', to: 'css' },
      { from: 'src/img', to: 'img' },
      { from: 'src/packages', to: 'packages' },
      { from: 'src/index.html', to: 'index.html' },
    ]),
  ]
}