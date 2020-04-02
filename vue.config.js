// vue.config.js
module.exports = {
  // 选项...
    publicPath:'/',   //部署应用包时的基本 URL
    outputDir: process.env.outputDir,  //打包生成目录   
    lintOnSave: false,  
    runtimeCompiler:true,
    devServer: {
      open: false,
      port: 9588,
     //  proxy: { // 方向代理
     //    '/api': {
     //     ws: false,
     //     target: 'http://apidev.teenstyle.cn',
     //     changeOrigin: true
     //   }
     // }
  },
}