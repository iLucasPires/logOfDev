<script setup lang="ts">
interface iProps {
  pages: {
    name: string;
    path: string;
    icon: string;
  }[];
}

defineProps<iProps>();
const isOpen = ref(false);
</script>

<template>
  <AButton
    class="md:hidden p-1"
    :icon="isOpen ? 'i-carbon-close' : 'i-carbon-menu'"
    @click="isOpen = !isOpen"
    neutral
  />

  <nav
    class="fixed inset-x-0 bottom-0 top-1/4 z-10 bg-neutral-900 transition-transform duration-500"
    :class="isOpen ? 'translate-y-0' : 'translate-y-full'"
  >
    <button
      class="h-2 w-20 m-(x-auto t-4) block rounded bg-neutral-700"
      @click="isOpen = !isOpen"
    />

    <menu class="space-y-2 p-4">
      <AButton
        class="w-full px-5 py-2 mx-auto"
        v-for="page in pages"
        :key="page.name"
        :path="page.path"
        :icon="page.icon"
        :text="page.name"
        neutral
        @click="
          isOpen = !isOpen;
          $router.push(page.path);
        "
      />
    </menu>
  </nav>
</template>
