import { i18n } from "./locales";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Agromart new",
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
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],
// target: 'static',
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/axios.js" },
    { src: "~/plugins/tools.js", defer: true },
    { src: "~/plugins/swaper.js", defer: true },
    { src: "~/plugins/vue-modal", mode: "client", defer: true },
    { src: "~/plugins/client-libraries", mode: "client", defer: true },
    { src: "~/plugins/vue-validate", mode: "client", defer: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  loading: false,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/dotenv"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/axios",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/dayjs",
    "@nuxtjs/auth"
  ],
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
          property: 'token',
          maxAge: 30 * 24 * 60 * 60,
          global: true,
          type: 'Bearer'
        },
        // user: {
        //   property: 'user',
        //   autoFetch: true
        // },
        endpoints: {
          login: { url: '/auth/local', method: 'post' },
          // refresh: { url: '/auth/token/refresh', method: 'post' },
          user: false,
          logout: false
          // tokenRequired: true,
          // tokenType: 'Bearer',
          // facebook: {
          //   client_id: 'your facebook app id',
          //   userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email',
          //   scope: ['public_profile', 'email']
          // },
          // google: { client_id: 'your gcloud oauth app client id' }
        },
        redirect: {
          login: '/',
          logout: '/',
          user: '/profile',
          callback: '/'
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
    }
  },
};
