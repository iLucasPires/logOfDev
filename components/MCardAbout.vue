<script setup lang="ts">
defineProps<{
  title: string;
  icon: string;
  text: string;
  skills: { name: string; icon: string; level: string }[];
}>();
</script>

<template>
  <div
    class="flex flex-col gap-4 h-md rounded border-1 border-neutral-800 p-4 group hover:(border-rainbow)"
  >
    <div class="flex items-center gap-4 p-2">
      <i :class="`text-2xl ${icon} group-hover:icon-rainbow'}`" />
      <h2 class="text-2xl group-hover:text-rainbow">
        {{ title }}
      </h2>
    </div>
    <p class="text-neutral-500 group-hover:text-neutral-400 flex-1">
      {{ text }}
    </p>
    <ul class="grid grid-cols-3 grid-rows-2 gap-4 justify-items-center">
      <li
        v-for="i in skills"
        :key="i.name"
        class="flex flex-col items-center cursor-pointer gap-2"
      >
        <i
          :class="`text-2xl group-hover:icon-rainbow text-neutral-500 ${i.icon}`"
        />
        <span class="text-neutral-500 group-hover:text-neutral-400">
          {{ i.name }}
        </span>
      </li>
    </ul>
  </div>
</template>
