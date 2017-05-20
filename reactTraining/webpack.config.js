const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './app/index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {test: /\.jsx?$/, use: 'babel-loader', exclude: ['node_modules']},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};

if(process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;
