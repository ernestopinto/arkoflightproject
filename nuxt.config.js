export default {

  ssr: false,

  // case deploying on local or award
  /*router: {
    base: '/arcadeluz/'
  },*/

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

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
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    BASE_URL: process.env.API_URL
  },

  // case proxy needed
  /*proxy: {
    '/api/': { target: process.env.API_URL, pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },*/

  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.access_token',
          type: 'Bearer'
        },
        user: {
          property: 'data.user',
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: {url: '/user', method: 'get' }
        }
      }
    }
  },

  // case deploying on local or award
  router: {
    //base: '/arcadeluz/'
    middleware: 'auth'
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  //https://auth.nuxtjs.org/guide/setup
  compilerOptions: {
    "types": [
      "@nuxtjs/auth-next",
    ]
  },
}
