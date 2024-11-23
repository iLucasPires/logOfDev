<script setup lang="ts">
const { createdAt } = defineProps<{
  title: string;

  tags: string[];
  timeToRead: number;
  description: string;
  createdAt: string;
}>();
</script>

<template>
  <div class="group border-primary p-4 hover:(border-rainbow bg-primary-20)">
    <div class="space-y-4">
      <div class="flex flex-col-reverse gap-4 md:(flex-row items-center justify-between)">
        <h3 v-text="title" />
      </div>
      
      <p class="hidden md:block" v-text="description" />

      <div>{{ timeToRead }} min read</div>


      <div class="flex justify-between items-center">
        <ul class="flex gap-4">
          <li v-for="tag in tags" v-text="tag" class="underline" />
        </ul>
      </div>
    </div>
  </div>
</template>
