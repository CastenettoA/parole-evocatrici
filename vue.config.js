const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Parole Evocatrici',
    themeColor: '#4DBA87', // slate green
  },
  // workboxOptions: {
  //   exclude: [/_redirects/]
  // }
})
