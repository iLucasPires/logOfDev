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
    class="size-full rounded-lg p-4 border border-neutral-9 group hover:(border-rainbow bg-neutral-9/60)"
  >
    <NuxtImg
      v-if="cover"
      class="rounded-lg h-75 object-cover w-full saturate-0 group-hover:saturate-100 transition-all"
      :src="cover"
      :alt="title"
      width="400"
      height="200"
    />
    <div class="space-y-2 mt-4">
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
