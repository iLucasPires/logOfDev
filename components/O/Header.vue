<script lang="ts" setup>
const langMenuIsOpen = ref(false);
</script>

<template>
  <header class="w-full border-b-1 border-neutral-800/20">
    <div class="maxp items-center flex justify-between">
      <NuxtLinkLocale class="flex gap-4" to="/">
        <NuxtImg 
          src="/logo.svg" 
          alt="Logo"
          width="34"
          height="34" 
        />
      </NuxtLinkLocale>
      <MMenuNav />
      <div class="flex items-center gap-2 relative">
        <AButton
          v-on:click="langMenuIsOpen = !langMenuIsOpen"
          class="p-2"
          size="none"
          icon="i-carbon-globe"
        />
        <AButton class="p-2" size="none" icon="i-carbon-light" />
        <MMenuLang
          v-show="langMenuIsOpen"
          v-on:close="langMenuIsOpen = false"
        />
      </div>
    </div>
  </header>
</template>
