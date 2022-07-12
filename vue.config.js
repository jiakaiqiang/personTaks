const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  /**
   * __dirname：当前文件夹所在的绝对路径
   */
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
    }
    ,
    configureWebpack: {
      // provide the app's title in webpack's name field, so that
      // it can be accessed in index.html to inject the correct title.

      resolve: {
        alias: {
          '@': resolve('src')
        }
      }
    },
  })
