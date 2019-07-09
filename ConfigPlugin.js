function ConfigPlugin(options) {}

ConfigPlugin.prototype.apply = function (compiler) {

  compiler.hooks.emit.tap('ConfigPlugin', function (compilation) {

    const keys = Object.keys(compilation.assets)

    const cssFiles = keys.filter(item => /.css$/.test(item)).map(item => `${compiler.options.output.publicPath || '/'}${item}`)

    const chunkVendorsFile = `${compiler.options.output.publicPath || '/'}` + keys.find(item => /\/chunk-vendors(\.\w+)?.js$/.test(item))
    const appFile = `${compiler.options.output.publicPath || '/'}` + keys.find(item => /\/app(\.\w+)?.js$/.test(item))
    const jsFiles = [chunkVendorsFile, appFile]

    let content = `
      window.jw = window.jw || {}
      window.jw.assets = window.jw.assets || []
      window.jw.assets.push({
        js: ${JSON.stringify(jsFiles)},
        css: ${JSON.stringify(cssFiles)}
      })
    `
    compilation.assets['js/config.js'] = {
      source: function() {
        return content;
      },
      size: function() {
        return content.length;
      }
    };
  })
}


module.exports = ConfigPlugin
