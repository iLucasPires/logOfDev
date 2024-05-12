<script setup lang="ts">
  const { t } = useI18n();

  const currentYear = new Date().getFullYear();

  const madeby = computed(() =>
    t("footer.credits", {
      nuxt: `<a class="text-neutral-300 light:text-neutral-700" href="https://nuxt.com" target="_blank">Nuxt.js</a>`,
      unocss: `<a class="text-neutral-300 light:text-neutral-700" href="https://unocss.dev" target="_blank">Uno.css</a>`,
    })
  );
</script>

<template>
  <footer class="p-5 w-rel col items-center md:(row justify-between)">
    <span v-html="madeby" />
    <div>
      <NuxtLink
        class="text-neutral-300 light:text-neutral-700"
        target="_blank"
        to="https://creativecommons.org/licenses/by/4.0/"
      >
        CC BY 4.0
      </NuxtLink>
      © {{ currentYear }} Lucas Pires
    </div>
  </footer>
</template>
