import { i18n } from "./locales";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Coozin",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: 'preload',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
        href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css'
      }
    ],
  },
  css: [
    "@/assets/css/main.css",
    "@assets/css/tailwind.css"
  ],
  axios: {
    baseUrl: 'https://testbackend.coozin.uz/api/'
  },
  plugins: [
    { src: "~/plugins/axios.js" },
    { src: '@/plugins/yandex.js', ssr: false},
    {src: '~/plugins/vee-validate.js', ssr: false},
    { src: "~/plugins/tools.js", defer: true },
    { src: '@/plugins/routerPusher.js'},
    {src: '~/plugins/bridge.js'},
    {src: '~/plugins/langGetKeyValues.js'},
    {src: '~/plugins/others.js'}
  ],
  components: true,
  loading: false,
  buildModules: [
    "@nuxtjs/dotenv",
      '@nuxt/postcss8'
  ],
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/axios",
    "@nuxtjs/dayjs",
    "@nuxtjs/auth-next",
    '@nuxtjs/toast',
    'cookie-universal-nuxt',
    ['cookie-universal-nuxt', { alias: 'cookiz' }]
  ],
  toast: {
    duration: 3000,
    position: 'bottom-right'
  },
  dayjs: {
    locales: ["en", "ja"],
    defaultLocale: "en",
    plugins: [], // Your Day.js plugin
  },
  auth: {
    localStorage: false,
    cookie: {
      expires: 7
    },
    strategies: {
      local: {
        token: {
          property: 'jwt',
          type: 'Bearer'
        },
        user:{
          property: '',
          autoFetch:false

        },
        endpoints: {
          login: { url: '/users-permissions/login_otp', method: 'post', propertyName: 'jwt' },
          user: { url: '/users/me', method: 'get', propertyName: false  },
          logout: false
        }
      }
    }
  },
  i18n: i18n,
  router: {
    // mode: 'hash',
    // middleware: ['auth'],
    prefetchLinks: false
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
