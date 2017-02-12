module.exports = {
 entry: {
    app: __dirname + '/src',
    components: [__dirname + '/src/App.js']
  },
  output: {
    path: 'bundles',
    filename: '[name].js',
    publicPath: '/bundles/'
  },
  module: {
    loaders: [
      {

        test: /.js/,
        loader: 'babel',
		exclude: /node_modules/,
        query: {
		plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0', 'react'],
      }
    },
    {
                test: /\.css$/,
                loaders: [ 'style', 'css', 'sass' ]
    },
     { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "url-loader" }
    ]
  }
}
