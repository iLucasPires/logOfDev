<script lang="ts" setup>
const pages = [
  { name: "home", path: "/", icon: "i-carbon-home" },
  { name: "about", path: "/about", icon: "i-carbon-user" },
  { name: "blog", path: "/blog", icon: "i-carbon-blog" },
  { name: "projects", path: "/projects", icon: "i-carbon-portfolio" },
];

import { useLocalePath } from '#imports';

const localePath = useLocalePath();
const langMenuIsOpen = ref(false);
</script>

<template>
  <header class="w-full border-b-1 border-neutral-800/20">
    <div class="maxp items-center flex justify-between">
      <NuxtLinkLocale class="flex gap-4" to="/">
        <NuxtImg src="/logo.svg" alt="Logo" width="34" height="34" />
      </NuxtLinkLocale>
      <nav class="hidden lg:block">

        <menu class="flex flex-row gap-2">
          <NuxtLinkLocale
          v-for="page in pages"
          :key="page.name"
          :to="page.path"
          class="flex gap-2 items-center py-1 px-4"
          >

            <i :class="page.icon" />
            <span class="uppercase text-sm">{{ $t(`nav.${page.name}`) }}</span>
          </NuxtLinkLocale>
        </menu>
      </nav>
      <div class="flex items-center gap-2 relative">
        <AButton
          @click="langMenuIsOpen = !langMenuIsOpen"
          class="p-1"
          icon="i-carbon-globe"
          neutral
        />
        <AButton class="p-1" icon="i-carbon-light" neutral />
        <AMenuLang v-show="langMenuIsOpen" @close="langMenuIsOpen = false" />
        <MMenuMobile :pages="pages" />
      </div>
    </div>
  </header>
</template>
