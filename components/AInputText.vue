<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: string | "text" | "password" | "email";
    placeholder?: string;
    neutral?: boolean;
    animate?: boolean;
  }>(),
  {
    type: "text",
    placeholder: "Type here",
    neutral: false,
    animate: true,
  }
);
</script>

<template>
  <input
    class="w-full h-10 mt-2 p-4 rounded"
    :class="
      neutral
        ? 'border-neutral-800 hover:border-neutral-600 border'
        : 'bg-neutral-300 text-neutral-900 hover:bg-neutral-500'
    "
    :placeholder="placeholder"
    :type="type"
  />
</template>
