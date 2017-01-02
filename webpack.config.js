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
        include: __dirname + '/src',
        query: {
        presets: ['es2015','stage-0', 'react']
      }
    },
    {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ]
    }
    ]
  }
}
