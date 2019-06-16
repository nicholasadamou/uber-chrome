const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    browser: './src/index.js',
    background: './src/background.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-0']
          }
        }
      }
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      chunks: ['browser']
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src', 'manifest.json'),
        to: path.resolve(__dirname, 'build')
      },
      {
        from: path.resolve(__dirname, 'src', 'assets/'),
        to: path.resolve(__dirname, 'build', 'assets')
      },
      {
        from: path.resolve(__dirname, 'src', '_locales/'),
        to: path.resolve(__dirname, 'build', '_locales')
      },
      {
        from: path.resolve(__dirname, 'src', 'index.css'),
        to: path.resolve(__dirname, 'build')
      }
    ])
  ]
}
