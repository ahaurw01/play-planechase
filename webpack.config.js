module.exports = {
  devtool: 'eval-source-map',

  entry: './src/index.js',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  devServer: {
    contentBase: './public',
    colors: 'true',
    historyApiFallback: true,
    inline: true
  }
};
