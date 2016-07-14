module.exports = {
  entry: './app/main.tsx',
  output: {
    path: './dist/',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  }
};