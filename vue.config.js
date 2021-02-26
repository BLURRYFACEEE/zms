module.exports ={
  publicPath:'./',
  // assetsDir: 'static',
  configureWebpack:{
    resolve:{
    alias:{
      'aassets':'src/assets',
      'common':'src/common',
      'components':'src/components',
      'network':'src/network',
      'views':'src/views'
    }
    }
  }
}
