const pkg = require('./package')

module.exports = {
  mode: 'universal',

  server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },  

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'es'
    },
    title: 'AGlobal - Soluciones y Servicios TI',
meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', hid: 'description', content: 'Somos una empresa joven proveedora de soluciones y servicios integrados de Tecnologías y comunicaciones basados en una amplia experiencia en redes, seguridad, infraestructura ti, colaboracion, servicios profesionales y gerenciados.'},
      { name: 'keyword', content:'seguridad en redes, comunicaciones, wireless, cyberseguridad, amenazas, mfa, primera linea de defensa, consultoria, cisco partner'},
      // Open Graph
      { name: 'og:title', content: 'AGlobal' },
      { name: 'og:description', content: 'Somos una empresa joven proveedora de soluciones y servicios integrados de Tecnologías y comunicaciones basados en una amplia experiencia en redes, seguridad, infraestructura ti, colaboracion, servicios profesionales y gerenciados.'},
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://aglobal.com.ar/' },
      { name: 'og:image', content: 'https://aglobal.com.ar/og-image.png' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@aglobal_it' },
      { name: 'twitter:title', content: 'AGlobal' },
      { name: 'twitter:description', content: 'Somos una empresa joven proveedora de soluciones y servicios integrados de Tecnologías y comunicaciones basados en una amplia experiencia en redes, seguridad, infraestructura ti, colaboracion, servicios profesionales y gerenciados.'},
      { name: 'twitter:image', content: 'https://aglobal.com.ar/og-image.png' },   
    ],
    script: [
      {
        src: 'https://cdn.fromdoppler.com/formgenerator/latest/vendor.js?95776138'
      }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.fromdoppler.com/formgenerator/latest/styles.css?95776138'},
      { rel: 'icon', type: 'image/x-icon', href: 'https://aglobal.com.ar/favicon.ico' },
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
    { src: '~/plugins/scroll-to.js', ssr: false },
    { src: '~/plugins/aos.js', ssr: false } // https://github.com/michalsnik/aos#animations
  ],

  /*
  ** Nuxt.js modules
  */
 modules: [
 ['nuxt-cname-module', { baseUrl: 'aglobal.com.ar' }],
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
