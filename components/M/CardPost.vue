<script setup lang="ts">
  const { createdAt } = defineProps<{
    title: string;
    cover: string;
    timeToRead: number;
    description: string;
    createdAt: string;
  }>();
</script>

<template>
  <div
    class="size-full rounded-lg p-4 border-primary group hover:(border-rainbow bg-primary-20)"
  >
    <div class="space-y-2">
      <h4 class="text-xl font-bold" v-text="title" />
      <p v-text="description" />

      <div class="flex justify-between items-center">
        <div class="flex items center space-x-2">
          <time v-text="createdAt" />
          <span>•</span>
          <span>{{ timeToRead }} min read</span>
        </div>
      </div>
    </div>
  </div>
</template>
