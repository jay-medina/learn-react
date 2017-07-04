const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app/index.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  devtool: "cheap-eval-source-map",
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
