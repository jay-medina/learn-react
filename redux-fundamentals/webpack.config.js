// @ts-check

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @type webpack.Configuration
 */
module.exports = {
  entry: './app/main.ts',
  mode: 'development',
  devServer: {
    port: 8080,
    disableHostCheck: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html',
    title: 'Redux demo'
  })]
};
