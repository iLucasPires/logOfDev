<script lang="ts" setup>
defineProps<{
  title: string;
  cover: string;
  description: string;
  timeToRead: number;

  createdAt: string;
}>();
</script>

<template>
  <div
    class="flex justify-between items-start p-4 border-t border-neutral-900 hover:(bg-neutral-900/60)"
  >
    <div>
      <div class="mb-4">
        <h3 class="text-xl font-semibold">{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      <p class="text-neutral-5">{{ timeToRead }} min read</p>
    </div>
    <p>{{ createdAt }}</p>
  </div>
</template>
