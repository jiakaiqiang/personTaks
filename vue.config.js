const {defineConfig} = require('@vue/cli-service')
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
        },
        // windicss: {
        //     preflight: false,
        //     // 具体配置请查看 https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
        //   },
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.

        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    //配置服务器代理
    devServer: {
        port: 3000,
        proxy:{
        ' /':{
            target:'http://192.168.146.173:3001',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^api/': ''
            }
        }
        }
    }
})
