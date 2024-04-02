<script lang="ts" setup>
const { t } = useI18n();
const langMenuIsOpen = ref(false);

const pages = computed(() => [
  { name: t("nav.home"), path: "/", icon: "i-carbon-home" },
  { name: t("nav.about"), path: "about", icon: "i-carbon-user" },
  { name: t("nav.blog"), path: "blog", icon: "i-carbon-blog" },
]);
</script>

<template>
  <header class="w-full border-b-1 border-neutral-800/20">
    <div class="maxp items-center flex justify-between">
      <NuxtLinkLocale class="flex gap-4" to="/">
        <NuxtImg src="/logo.svg" alt="Logo" width="34" height="34" />
      </NuxtLinkLocale>
      <MMenuNav v-bind:pages="pages" />
      <div class="flex items-center gap-2 relative">
        <AButton
          v-on:click="langMenuIsOpen = !langMenuIsOpen"
          class="p-2"
          size="none"
          icon="i-carbon-globe"
        />
        <AButton class="p-2" size="none" icon="i-carbon-light" />
        <MMenuLang
          v-show="langMenuIsOpen"
          v-on:close="langMenuIsOpen = false"
        />
        <MMenuMobile v-bind:pages="pages" />
      </div>
    </div>
  </header>
</template>
