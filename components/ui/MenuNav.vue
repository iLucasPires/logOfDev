<script lang="ts" setup>
  defineProps<{
    pages: {
      name: string;
      path: string;
      icon: string;
    }[];
  }>();
</script>

<template>
  <nav class="hidden md:block">
    <menu class="row gap-2">

      <li v-for="page in pages">
        <NuxtLinkLocale
          class="row gap-2 items-center py-1 px-4"
          :key="page.name"
          :to="page.path"
          :aria-label="`go to ${page.name}`"
        >
          <span :class="page.icon" />
          <span class="uppercase text-sm" v-text="page.name" />
        </NuxtLinkLocale>
      </li>
    </menu>
  </nav>
</template>
