<script setup lang="ts">
const { t } = useI18n();

const madeby = computed(() =>
  t("footer.credits", {
    nuxt: `<a href="https://nuxt.com" class="hover:underline" rel="noopener noreferrer" target="_blank">Nuxt.js</a>`,
    unocss: `<a href="https://unocss.dev" class="hover:underline" rel="noopener noreferrer" target="_blank">Uno.css</a>`,
  })
);

const socialNetworks = [
  {
    text: "GitHub",
    icon: "i-carbon-logo-github",
    link: "https://github.com/iLucasPires",
  },
  {
    text: "LinkedIn",
    icon: "i-carbon-logo-linkedin",
    link: "https://linkedin.com/in/iLucasPires",
  },
  {
    text: "Twitter",
    icon: "i-carbon-logo-twitter",
    link: "https://twitter.com/lpires_n",
  },
  {
    text: "Linktree",
    icon: "i-carbon-link",
    link: "https://linktr.ee/lpiresn",
  },
];

</script>

<template>
  <footer class="p-5 center">
    <div class="flex items-center gap-2">
      <NuxtLink 
        v-for="social in socialNetworks" 
        :key="social.text" 
        :to="social.link" 
        class="center p-2 gap-2 hover:(underline)"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span :class="social.icon" />
        <span v-text="social.text" class="hidden md:block uppercase text-sm" />
      </NuxtLink>
    </div>
  </footer>
</template>
