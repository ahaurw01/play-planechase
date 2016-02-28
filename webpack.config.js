module.exports = {
  devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : '',

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
        test: /\.jsx?$/,
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
    ],
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: /node_modules/
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
  },

  plugins: [
    require('webpack-fail-plugin')
  ]
};
