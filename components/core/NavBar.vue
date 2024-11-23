<script setup lang="ts">
  const { t } = useI18n();
  const langMenuIsOpen = ref(false);

  const colorMode = useColorMode();
  const icon = ref("");

  onMounted(() => {
    icon.value = colorMode.preference === "dark" ? "i-carbon-moon" : "i-carbon-sun";

  });

  const pages = computed(() => [
    { name: t("nav.home"), path: "/", icon: "i-carbon-home" },
    { name: t("nav.about"), path: "/about", icon: "i-carbon-user" },
    { name: t("nav.blog"), path: "/blog", icon: "i-carbon-blog" },
  ]);

  function toggleTheme() {
    colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";

    icon.value =
      colorMode.preference === "dark" ? "i-carbon-moon" : "i-carbon-sun";
  }
</script>

<template>
  <header class="p-5 w-full">
    <div class="items-center flex justify-between">
      <CoreLogo />
      <UiMenuNav :pages="pages" />
      <div class="flex items-center gap-2 relative">
        <button class="center p-2 gap-2" @click="langMenuIsOpen = !langMenuIsOpen">
          <div class="i-carbon-globe" />
          <span v-text="$i18n.locale" class="hidden md:block uppercase text-sm" />
          <span class="sr-only">change language</span>
        </button>
        <button class="center p-2 gap-2" @click="toggleTheme">
          <div :class="icon" />
          <span v-text="colorMode.value" class="hidden md:block uppercase text-sm" />
          <span class="sr-only">change theme</span>
        </button>
        <UiMenuMobile :pages="pages" />
        <UiMenuLang v-show="langMenuIsOpen" @close="langMenuIsOpen = false" />
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
