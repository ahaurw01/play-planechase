module.exports = {
  devtool: 'eval-source-map',

  entry: './src/index.js',
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
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
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },

  stylus: {
    use: [require('nib')],
    import: ['~nib/lib/nib/index.styl']
  },

  devServer: {
    contentBase: './public',
    colors: 'true',
    historyApiFallback: true,
    inline: true
  }
};
