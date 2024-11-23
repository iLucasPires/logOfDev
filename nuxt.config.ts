// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  css: [
    "@unocss/reset/tailwind.css",
    "~/assets/css/rainbow.css",
    "~/assets/css/main.css",
  ],

  features: {
    inlineStyles: false,
  },

  modules: [
    "@unocss/nuxt",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "nuxt-content-assets",
    "@nuxtjs/color-mode",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],

  robots: {
    UserAgent: "*",
    Disallow: "",
  },

  i18n: {
    customRoutes: "config",
    baseUrl: "https://www.logofdev.software/",
    strategy: "prefix_and_default",
    langDir: "locales/",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en-US.json",
      },
      {
        code: "pt",
        iso: "pt-BR",
        name: "Português",
        file: "pt-BR.json",
      },
    ],
    pages: {
      about: {
        en: "/about",
        pt: "/sobre",
      },
      contact: {
        en: "/contact",
        pt: "/contato",
      },

      projects: {
        en: "/projects",
        pt: "/projetos",
      },
    },
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },

  runtimeConfig: {
    public: {
      imgProfile: "https://avatars.githubusercontent.com/u/68610729?v=4",
      email: process.env.EMAIL,
    },
  },

  compatibilityDate: "2024-11-23",
});