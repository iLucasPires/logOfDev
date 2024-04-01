// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
  ],
  i18n: {
    customRoutes: "config",
    strategy: "prefix_and_default",
    langDir: "locales/",
    defaultLocale: "en",
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

  runtimeConfig: {
    public: {
      imgProfile: "https://avatars.githubusercontent.com/u/68610729?v=4",
      email: process.env.EMAIL,
    },
  },
});
