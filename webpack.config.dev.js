var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './example/example.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/example/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules|dist/
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}