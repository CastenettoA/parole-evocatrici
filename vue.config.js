const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Parole Evocatrici.com',
    themeColor: '#4DBA87', // slate green
  }
})
