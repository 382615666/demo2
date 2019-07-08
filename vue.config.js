module.exports = {
  publicPath: '/demo2',
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter'
    }
  }
}
