<script lang="ts" setup>
const { t } = useI18n()
const localePath = useLocalePath()
const pages = [
  { name: "home", path: "/", icon: "i-carbon-home" },
  { name: "about", path: "/about", icon: "i-carbon-user" },
  { name: "blog", path: "/blog", icon: "i-carbon-blog" },
  { name: "projects", path: "/projects", icon: "i-carbon-portfolio" },
];
</script>

<template>
  <header class="w-full border-b-1 border-neutral-800/20">
    <div class="maxp items-center flex justify-between">
      <NuxtLink 
    
      class="flex gap-4" :to="localePath('/')">
        <NuxtImg src="/logo.svg" alt="Logo" width="34" height="34" />
      </NuxtLink>
      <nav class="hidden lg:block">
        <menu class="flex flex-row gap-2">
          <ALinkButton
            v-for="page in pages"
            :path="page.path"
            :icon="page.icon"
            :name="page.name"
            :key="page.name"
          />
        </menu>
      </nav>
      <div class="flex items-center gap-2">
        <AButton class="p-1" icon="i-carbon-globe" neutral />
        <AButton class="p-1" icon="i-carbon-light" neutral />
        <MMenuMobile :pages="pages" />
      </div>
    </div>
  </header>
</template>
