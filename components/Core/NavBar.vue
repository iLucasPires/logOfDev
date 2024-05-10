<script setup lang="ts">
  const { t } = useI18n();
  const langMenuIsOpen = ref(false);

  const pages = computed(() => [
    { name: t("nav.home"), path: "/", icon: "i-carbon-home" },
    { name: t("nav.about"), path: "about", icon: "i-carbon-user" },
    { name: t("nav.blog"), path: "blog", icon: "i-carbon-blog" },
  ]);

  const iconTheme = computed(() =>
    colorMode.value === "dark" ? "i-carbon-moon" : "i-carbon-sun"
  );

  const colorMode = useColorMode();

  const switchColorMode = () => {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  };
</script>

<template>
  <header class="mb-10 p-5 w-rel">
    <div class="items-center flex justify-between">
      <NuxtLinkLocale class="flex gap-2" to="/">
        <span class="text-lg font-medium">Log of dev</span>
      </NuxtLinkLocale>
      <MMenuNav v-bind:pages="pages" />
      <div class="flex items-center gap-2 relative">
        <button class="p-2" @click="langMenuIsOpen = !langMenuIsOpen">
          <div class="i-carbon-translate" />
        </button>
        <button class="p-2" @click="switchColorMode">
          <div :class="iconTheme" />
        </button>
        <MMenuMobile v-bind:pages="pages" />
        <MMenuLang v-show="langMenuIsOpen" @close="langMenuIsOpen = false" />
      </div>
    </div>
  </header>
  <Teleport to="body">
    <span
      class="fixed w-full h-screen z-1 inset-0"
      @click="langMenuIsOpen = false"
      v-show="langMenuIsOpen"
    />
  </Teleport>
</template>
