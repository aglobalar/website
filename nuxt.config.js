const pkg = require('./package')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/website/'
  }
} : {}

module.exports = {
  mode: 'universal',

  ...routerBase,

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.min.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:400,700'},
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: './assets/css/main.css' }
    ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/owl.js', ssr: false },
    { src: '~/plugins/scroll-to.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
