<script setup lang="ts">
const props = defineProps<{
  name: string;
  path: string;
  icon: string;
}>();

const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <NuxtLink :to="localePath(name)" class="flex gap-2 items-center py-1 px-4">
    <i :class="icon" />
    <span class="uppercase text-sm">{{ t(name) }}</span>
  </NuxtLink>
</template>
