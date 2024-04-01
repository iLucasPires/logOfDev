<script setup lang="ts">
defineProps<{
  pages: {
    name: string;
    path: string;
    icon: string;
  }[];
}>();

const isOpen = ref(false);
const handleRoute = (path: string) => {
  const router = useRouter();
  isOpen.value = false;
  router.push(path);
};
</script>

<template>
  <AButton
    class="p-2 md:hidden"
    size="none"
    v-bind:icon="isOpen ? 'i-carbon-close' : 'i-carbon-menu'"
    v-on:click="isOpen = !isOpen"
  />

  <span
    class="fixed inset-0 z-10 bg-neutral-900/60 block"
    v-show="isOpen"
    v-on:click="isOpen = false"
  />

  <nav
    class="fixed inset-x-0 bottom-0 top-1/4 z-20 bg-neutral-950 transition-transform duration-500"
    v-bind:class="isOpen ? 'translate-y-0' : 'translate-y-full'"
  >
    <button
      class="h-2 w-20 m-(x-auto t-4) block rounded bg-neutral-700"
      v-on:click="isOpen = !isOpen"
    />

    <menu class="space-y-2 p-4">
      <AButton
        class="w-full"
        position="left"
        v-bind:key="page.name"
        v-bind:icon="page.icon"
        v-bind:text="page.name"
        v-on:click="handleRoute(page.path)"
        v-for="page in pages"
      />
    </menu>
  </nav>
</template>
