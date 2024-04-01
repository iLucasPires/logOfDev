<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  tags: string[];
}>();
</script>

<template>
  <div class="group rounded border-1 border-neutral-800 p-4 gap-4 flex flex-col hover:border-rainbow">
    <h2 class="text-2xl text-rainbow" v-text="title" />
    <p v-text="description" />
    <ul class="flex-1 grid grid-cols-3 gap-4 justify-items-center">
      <li v-on:key="tag" class="spce-y-2 cursor-pointer" v-for="tag in tags">
        <i class="text-2xl group-hover:icon-rainbow i-mdi:projector" />
        <span class="text-neutral-400 group-hover:text-rainbow" v-text="tag" />
      </li>
    </ul>
  </div>
</template>
