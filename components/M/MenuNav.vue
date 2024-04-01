<script lang="ts" setup>
const pages = [
  { name: "home", path: "/", icon: "i-carbon-home" },
  { name: "about", path: "about", icon: "i-carbon-user" },
  { name: "blog", path: "blog", icon: "i-carbon-blog" },
];
const localePath = useLocalePath();
</script>

<template>
  <nav class="hidden md:block">
    <menu class="flex flex-row gap-2">
      <NuxtLinkLocale
        class="flex gap-2 items-center py-1 px-4"
        v-bind:key="page.name"
        v-bind:to="localePath(page.path)"
        v-for="page in pages"
      >
        <i v-bind:class="page.icon" />
        <span class="uppercase text-sm" v-text="$t(`nav.${page.name}`)" />
      </NuxtLinkLocale>
    </menu>
  </nav>
</template>
