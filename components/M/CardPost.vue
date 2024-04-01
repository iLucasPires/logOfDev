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
  <div class="size-full rounded-lg p-4 border border-neutral-900 group hover:(border-rainbow bg-neutral-900/60)">
    <NuxtImg
      v-if="cover"
      class="rounded-lg w-full h-48 object-cover saturate-0 group-hover:saturate-100 transition-all"
      v-on:src="cover"
      v-on:alt="title"
      width="400"
      height="200"
    />
    <div class="space-y-2 mt-4">
      <h4 class="text-xl font-bold" v-text="title" />
      <p v-text="description" />

      <div class="flex justify-between items-center">
        <div class="flex items center space-x-2">
          <time
            class="text-neutral-500"
            v-on:datetime="createdAt"
            v-text="createdAt"
          />
          <span class="text-neutral-500">•</span>
          <span class="text-neutral-500">{{ timeToRead }} min read</span>
        </div>
      </div>
    </div>
  </div>
</template>
