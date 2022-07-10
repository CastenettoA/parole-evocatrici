const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Parole Evocatrici',
    display: 'fullscreen',
    themeColor: '#4DBA87', // slate green
    workboxOptions: {
      exclude: [/_redirects/]
    },
    assetsVersion: 1 // against cache
  }
})
