<script setup lang="ts">
  const { t } = useI18n();

  const currentYear = new Date().getFullYear();

  const madeby = computed(() =>
    t("footer.credits", {
      nuxt: `<a href="https://nuxt.com" class="hover:underline" rel="noopener noreferrer" target="_blank">Nuxt.js</a>`,
      unocss: `<a href="https://unocss.dev" class="hover:underline" rel="noopener noreferrer" target="_blank">Uno.css</a>`,
    })
  );
</script>

<template>
  <footer class="p-5 w-rel col items-center md:(row gap-10 justify-between)">
    <p v-html="madeby" />
    <p>
      <NuxtLink
        target="_blank"
        rel="noopener noreferrer"
        class="hover:underline"
        to="https://creativecommons.org/licenses/by/4.0/"
      >
        CC BY 4.0
      </NuxtLink>
      © {{ currentYear }}
      <NuxtLinkLocale to="/about"> Lucas Pires </NuxtLinkLocale>
    </p>
  </footer>
</template>
