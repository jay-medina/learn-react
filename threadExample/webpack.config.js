module.exports = {
  entry: {
    app: './app/main.tsx',
  },
  output: {
    path: 'dist',
    filename: 'index.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension. 
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
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