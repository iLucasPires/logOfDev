<script setup lang="ts">
const socialMedia = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/iLucasPires" },
  { name: "GitHub", link: "https://www.github.com/iLucasPires" },
  { name: "Twitter", link: "https://www.twitter.com/lpires_n" },
];

const { t } = useI18n();
const year = new Date().getFullYear();
const corpyright = `&copy; ${year} - ${t("footer.corpyright")}`;
</script>

<template>
  <footer class="w-full border-t-1 border-neutral-800/20">
    <div
      class="maxp flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500"
    >
      <div
        class="space-x-6 border-b-1 md:(border-b-0 pb-0) pb-4 border-neutral-800/10"
      >
        <NuxtLink
          target="_blank"
          class="cursor-pointer"
          v-for="item in socialMedia"
          v-bind:key="item.name"
          v-bind:to="item.link"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <p class="text-center" v-html="corpyright" />
    </div>
  </footer>
</template>
