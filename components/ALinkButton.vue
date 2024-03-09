<script setup lang="ts">
defineProps<{
  name: string;
  path: string;
  icon: string;
}>();
</script>

<template>
  <NuxtLinkLocale :to="path" class="flex gap-2 items-center py-1 px-4">
    <i :class="icon" />
    <span class="uppercase text-sm">{{ $t(`nav.${name}`) }}</span>
  </NuxtLinkLocale>
</template>
