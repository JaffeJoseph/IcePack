const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');



module.exports = {

  entry: {
    bundle:
      './src/index.js'
  },
  output: {
    filename: 'bundle-[hash].js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),

    new HTMLWebpackPlugin({
      template: 'src/index.html'
    }),
    new HTMLWebpackHarddiskPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        use: [{
          loader: "style-loader"
        },{
          loader: "css-loader"
        },{
          loader: "sass-loader"
        }],
        test: /\.scss$/
      }]
  }
};
