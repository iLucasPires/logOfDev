<script setup lang="ts">
  const { createdAt } = defineProps<{
    title: string;
    cover: string;
    tags: string[];
    timeToRead: number;
    description: string;
    createdAt: string;
  }>();
</script>

<template>
  <div class="group border-primary p-4 hover:(border-rainbow bg-primary-20)">
    <div class="space-y-2">
      <div class="flex flex-col-reverse gap-4 md:(flex-row items-center justify-between)">
        <h3 v-text="title" />
        <time class="text-sm" v-text="createdAt" />
      </div>
      <p class="hidden md:block" v-text="description" />
      <div class="flex justify-between items-center">
        <div class="flex gap-4 mt-4">
          <ul class="flex gap-4">
            <li v-for="tag in tags" v-text="tag" />
          </ul>
          <span> • {{ timeToRead }} min read</span>
        </div>
      </div>
    </div>
  </div>
</template>
