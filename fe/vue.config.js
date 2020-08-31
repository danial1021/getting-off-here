const path = require('path')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  // outputDir : path.resolve(__dirname, "../be/public/"),
  devServer: { 
    proxy: { // proxyTable 설정 
      '/api/*': {
        target: 'https://gettingoffhere.kro.kr/', //
        changeOrigin: true
      }
    } 
  },
  pwa: {
    name: 'GOH',
    themeColor: '#0f4c81',
    msTileColor: '#0f4c81',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'dev/sw.js',
    //   // ...other Workbox xoptions...
    // },
    manifestOptions: {
      "name": "GOH",
      "short_name": "GOH",
      "start_url": "/",
      "display": "standalone",
      // "background_color": "#0f4c81"
    },
    // iconPaths: {
    //   favicon32: 'img/icons/favicon-32x32.png',
    //   favicon16: 'img/icons/favicon-16x16.png',
    //   appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
    //   maskIcon: 'img/icons/safari-pinned-tab.svg',
    //   msTileImage: 'img/icons/msapplication-icon-144x144.png'
    // }
  }
}