const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: './',
  // outputDir: 'dist',
  // assetsDir: 'static',
  lintOnSave: false,
  devServer: {
    proxy: {
        '/softApi': {
            target: 'http://42.193.174.155',
            changeOrigin: true,
            ws: true,
            logLevel:'debug',
            // pathRewrite: {
            //   '^/api': ''
            // }
        }
    }
},
chainWebpack: (config) => {
  config.resolve.alias
    .set('@', resolve('src'))
    .set('@assets',resolve('src/assets'))
    // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
},
    css: {
        loaderOptions: {
          css: {},
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 37.5
              })
            ]
          }
        }
    }
}