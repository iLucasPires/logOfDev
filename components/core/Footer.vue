<script setup lang="ts">
  const { t } = useI18n();

  const currentYear = new Date().getFullYear();

  const madeby = computed(() =>
    t("footer.credits", {
      nuxt: `<a class="font-bold" href="https://nuxt.com" target="_blank">Nuxt.js</a>`,
      unocss: `<a class="font-bold" href="https://unocss.dev" target="_blank">Uno.css</a>`,
    })
  );
</script>

<template>
  <footer class="p-5 w-rel text-center row justify-between">
    <div class="row gap-1">
      <span v-html="madeby" />
      <NuxtLinkLocale class="font-bold" to="about">Lucas Pires</NuxtLinkLocale>
    </div>

    <div>
      <NuxtLink to="https://creativecommons.org/licenses/by/4.0/" target="_blank">
        CC BY 4.0
      </NuxtLink>
      © {{ currentYear }} Lucas Pires
    </div>
  </footer>
</template>
