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
    "nuxt-content-assets",
    "vue3-carousel-nuxt",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
  ],
  i18n: {
    customRoutes: "config",
    pages: {
      index: {
        pt: "/pt",
        en: "/",
      },
      about: {
        pt: "/sobre",
        en: "/about",
      },
      projects: {
        pt: "/projetos",
        en: "/projects",
      },
    },
  },
  googleFonts: {
    families: {
      "Exo 2": [400, 500, 600, 700],
    },
  },
  runtimeConfig: {
    public: {
      imgProfile: "https://avatars.githubusercontent.com/u/68610729?v=4",
    },
  },
});
