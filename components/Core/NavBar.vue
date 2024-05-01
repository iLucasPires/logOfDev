<script setup lang="ts">
  const { t } = useI18n();
  const langMenuIsOpen = ref(false);

  const pages = computed(() => [
    { name: t("nav.home"), path: "/", icon: "i-carbon-home" },
    { name: t("nav.about"), path: "about", icon: "i-carbon-user" },
    { name: t("nav.blog"), path: "blog", icon: "i-carbon-blog" },
  ]);
</script>

<template>
  <header
    class="border-b-1 border-neutral-800/30 p-5 w-rel"
  >
    <div class="items-center flex justify-between">
      <NuxtLinkLocale class="flex gap-4" to="/">
        <NuxtImg src="/logo.svg" alt="Logo" width="34" height="34" />
      </NuxtLinkLocale>
      <MMenuNav v-bind:pages="pages" />
      <div class="flex items-center gap-2 relative">
        <button
          class="btn-neutral p-2 flex"
          @click="langMenuIsOpen = !langMenuIsOpen"
        >
          <span class="i-carbon-translate" />
        </button>
        <MMenuLang v-show="langMenuIsOpen" @close="langMenuIsOpen = false" />
        <MMenuMobile v-bind:pages="pages" />
      </div>
    </div>
  </header>
</template>
