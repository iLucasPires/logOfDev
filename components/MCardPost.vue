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
    class="size-full rounded-lg p-4 border border-neutral-900 group hover:(border-rainbow bg-neutral-900/60)"
  >
    <NuxtImg
      v-if="cover"
      class="rounded-lg w-full h-48 object-cover saturate-0 group-hover:saturate-100 transition-all"
      :src="cover"
      :alt="title"
      width="400"
      height="200"
    />
    <div class="space-y-2 mt-4">
      <h4 class="text-xl font-bold">{{ title }}</h4>
      <p>{{ description }}</p>

      <div class="flex justify-between items-center">
        <div class="flex items center space-x-2">
          <time :datetime="createdAt" class="text-neutral-500">{{
            createdAt
          }}</time>
          <span class="text-neutral-500">•</span>
          <span class="text-neutral-500">{{ timeToRead }} min read</span>
        </div>
      </div>
    </div>
  </div>
</template>
