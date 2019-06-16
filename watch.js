const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const path = require('path')

const config = require('./webpack.config.js')
const contentBase = path.resolve(__dirname, './', 'build')

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
  inline: true,
  contentBase,
  historyApiFallback: true,
  publicPath: '/',
  quiet: false,
  stats: { colors: true, errorDetails: true }
})

server.listen(9966, '0.0.0.0', 'localhost')
