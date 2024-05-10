<script setup lang="ts">
  defineProps<{
    title: string;
    icon: string;
    text: string;
    skills: { name: string; icon: string }[];
  }>();
</script>

<template>
  <div
    class="col gap-4 h-md rounded border-primary p-4 group hover:(border-rainbow bg-primary-20)"
  >
    <div class="flex items-center gap-4 p-2">
      <i class="text-2xl group-hover:icon-rainbow" v-bind:class="icon" />
      <h3 class="text-2xl group-hover:text-rainbow" v-text="title" />
    </div>
    <p class="group-hover:text-neutral-400 flex-1" v-text="text" />
    <ul class="grid grid-cols-3 grid-rows-2 gap-4 justify-items-center">
      <li
        class="col items-center cursor-pointer gap-2"
        v-bind:key="skill.name"
        v-for="skill in skills"
      >
        <i
          class="text-2xl group-hover:icon-rainbow"
          v-bind:class="skill.icon"
        />
        <span class="group-hover:text-neutral-400" v-text="skill.name" />
      </li>
    </ul>
  </div>
</template>
