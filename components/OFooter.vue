<script setup lang="ts">
const socialNetworks = [
  { text: "GitHub", icon: "i-carbon-logo-github" },
  { text: "LinkedIn", icon: "i-carbon-logo-linkedin" },
  { text: "Twitter", icon: "i-carbon-logo-twitter" },
];
</script>

<template>
  <footer class="w-full border-t-1 border-neutral-800/20">
    <div
      class="maxp flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-neutral-500"
    >
      <div class="flex gap-4 justify-center">
        <NuxtLink
          v-for="network in socialNetworks"
          class="flex items-center gap-2 cursor-pointer"
        >
          <i :class="network.icon" />
          <span>{{ network.text }}</span>
        </NuxtLink>
      </div>
      <p class="text-neutral-400">
        Made by <span class="text-rainbow">ilucaspires</span>
      </p>
    </div>
  </footer>
</template>
