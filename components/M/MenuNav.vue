<script lang="ts" setup>
  defineProps<{
    pages: {
      name: string;
      path: string;
      icon: string;
    }[];
  }>();
  const localePath = useLocalePath();
</script>

<template>
  <nav class="hidden md:block">
    <menu class="row gap-2">
      <NuxtLinkLocale
        class="row gap-2 items-center py-1 px-4"
        v-bind:key="page.name"
        v-bind:to="localePath(page.path)"
        v-for="page in pages"
      >
        <i v-bind:class="page.icon" />
        <span class="uppercase text-sm" v-text="page.name" />
      </NuxtLinkLocale>
    </menu>
  </nav>
</template>
