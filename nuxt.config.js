
import axios from 'axios'

export default {

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Arcadeluz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
    'bootstrap-vue/nuxt'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    BASE_URL: process.env.API_URL
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.access_token',
          type: 'Bearer'
        },
        user: {
          property: 'data.user',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          register: { url: '/register', method: 'post' },
          user: {url: '/user', method: 'get' }
        }
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      home:'/home'
    },
  },


  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  build: {
    extractCSS: true,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    },
    extend (config, ctx) {
      config.performance.maxAssetSize = 700 * 1024
    }
  },

  //https://auth.nuxtjs.org/guide/setup
  compilerOptions: {
    "types": [
      "@nuxtjs/auth-next",
    ]
  },

  router: {
    //base: '/arcadeluz/',
    middleware: 'auth'
  },


}
