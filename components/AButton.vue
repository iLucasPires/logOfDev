<script setup lang="ts">
withDefaults(
  defineProps<{
    text?: string;
    icon?: string;
    neutral?: boolean;
    animate?: boolean;
  }>(),
  {
    animate: true,
    neutral: false,
  }
);
</script>

<template>
  <button
    class="flex items-center gap-2 rounded"
    :class="[
      animate && 'active:(scale-95 brightness-95) transition-all duration-200',
      neutral
        ? 'border-neutral-800 hover:border-neutral-600 border'
        : 'bg-rainbow text-neutral-900 hover:bg-neutral-900 hover:text-neutral-200',
    ]"
  >
    <i v-if="icon" :class="icon" />
    <span v-if="text" v-text="text" />
  </button>
</template>
