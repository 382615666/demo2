const ConfigPlugin = require('./ConfigPlugin')

module.exports = {
  publicPath: '/demo2',
  configureWebpack: {
    optimization: {
      minimize: false
    },
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter'
    },
    plugins: [
      new ConfigPlugin()
    ]
  }
}
