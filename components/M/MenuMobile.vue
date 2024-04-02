<script setup lang="ts">
defineProps<{
  pages: {
    name: string;
    path: string;
    icon: string;
  }[];
}>();
const MAX_SIZE = 77;
const MIN_SIZE = 33;

const menuIsOpen = ref(false);
const buttonDown = ref(false);
const sizeMenu = ref(50);

const handleClick = () => {
  menuIsOpen.value = !menuIsOpen.value;
};

const handleTouch = (event: TouchEvent) => {
  if (buttonDown.value) {
    const value = (event.touches[0].clientY / window.innerHeight) * 100;
    sizeMenu.value = Math.max(MIN_SIZE, Math.min(MAX_SIZE, Math.round(value)));
  }
};

const handleTouchEnd = () => {
  if (sizeMenu.value >= MAX_SIZE || sizeMenu.value <= MIN_SIZE) {
    menuIsOpen.value = false;
  }
  sizeMenu.value = 50;
};

const navigateTo = (path: string) => {
  const localePath = useLocalePath();
  const router = useRouter();

  router.push(localePath(path));
  menuIsOpen.value = false;
};
</script>

<template>
  <AButton
    class="p-2 md:hidden"
    size="none"
    v-bind:icon="menuIsOpen ? 'i-carbon-close' : 'i-carbon-menu'"
    v-on:click="handleClick"
  />
  <div>
    <span
      class="fixed inset-0 z-10 bg-neutral-900/60 block"
      v-on:click="handleClick"
      v-show="menuIsOpen"
    />

    <nav
      class="fixed inset-x-0 bottom-0 top-0 z-20 bg-neutral-950 transition-transform duration-300 rounded-t-xl"
      v-bind:style="{
        transform: menuIsOpen ? `translateY(${sizeMenu}%)` : 'translateY(100%)',
      }"
    >
      <button
        class="h-2 w-20 m-(x-auto t-4) block rounded bg-neutral-700"
        v-on:touchstart="buttonDown = true"
        v-on:touchend="handleTouchEnd"
        v-on:click="handleClick"
        v-on:touchmove="handleTouch"
      />

      <menu class="space-y-2 p-4">
        <AButton
          custom="w-full text-sm"
          position="left"
          v-bind:key="page.name"
          v-bind:icon="page.icon"
          v-bind:text="page.name"
          v-on:click="navigateTo(page.path)"
          v-for="page in pages"
        />
      </menu>
    </nav>
  </div>
</template>
