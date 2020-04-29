module.exports = {
  css: {
    extract: false
  },
  assetsDir: 'static', // 指定`build`时,在静态文件上一层添加static目录
  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')
      // 使用cdn
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter'
      })
      // 定制首页
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })

    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.js')
      // 定制首页
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  }

//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://127.0.0.1:8000/', // 对应自己的接口
//         changeOrigin: true,
//         ws: true,
//         pathRewrite: {
//           '^/api': ''
//         }
//       }
//     }
//   }
}
