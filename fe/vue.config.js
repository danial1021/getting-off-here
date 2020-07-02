var path = require("path")

module.exports = {
    outputDir : path.resolve(__dirname, "../be/public/"),
    devServer: { 
        proxy: { // proxyTable 설정 
        '/api': { 
            target: 'http://localhost:3000/api', 
            changeOrigin: true	, 
            pathRewrite:{ 
                "^/api" : '' 
                } 
            } 
        } 
    },

    pwa: {
        name: 'My App',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
    
        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          // swSrc is required in InjectManifest mode.
          swSrc: 'src/sw.js',
          // ...other Workbox options...
        }
      }
}