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
    document.body.style.overflow = menuIsOpen.value ? "hidden" : "auto";
  };

  const handleTouch = (event: TouchEvent) => {
    if (buttonDown.value) {
      const value = (event.touches[0].clientY / window.innerHeight) * 100;
      sizeMenu.value = Math.max(
        MIN_SIZE,
        Math.min(MAX_SIZE, Math.round(value))
      );
    }
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (sizeMenu.value >= MAX_SIZE || sizeMenu.value <= MIN_SIZE) {
      menuIsOpen.value = false;
      document.body.style.overflow = "auto";
    }
    sizeMenu.value = 50;
  };

  const navigateTo = (path: string) => {
    const localePath = useLocalePath();
    const router = useRouter();

    document.body.style.overflow = "auto";
    router.push(localePath(path));
    menuIsOpen.value = false;
  };
</script>

<template>
  <button class="p-2 md:hidden flex" @click="handleClick">
    <span v-bind:class="menuIsOpen ? 'i-carbon-close' : 'i-carbon-menu'" />
    <span class="sr-only">menu</span>
  </button>

  <span
    class="fixed inset-0 z-10 bg-neutral-900/60 block"
    @click="handleClick"
    v-show="menuIsOpen"
  />

  <nav
    class="fixed inset-x-0 bottom-0 top-0 z-20 bg-primary transition-transform duration-300 rounded-t-xl"
    v-bind:style="{
      transform: menuIsOpen ? `translateY(${sizeMenu}%)` : 'translateY(100%)',
    }"
  >
    <button
      class="w-full h-4 center p-4"
      @touchstart="buttonDown = true"
      @touchend="handleTouchEnd"
      @click="handleClick"
      @touchmove="handleTouch"
    >
      <span
        class="rounded bg-neutral-5/50 active:bg-neutral-5 hover:bg-neutral-5 w-20 h-2"
      />
      <span class="sr-only">close menu</span>
    </button>

    <menu class="space-y-2 p-4">
      <button
        class="btn-primary animate-click block w-full"
        v-for="page in pages"
        v-bind:key="page.name"
        @click="navigateTo(page.path)"
      >
        <i v-bind:icon="page.icon" />
        <span v-text="page.name" />
      </button>
    </menu>
  </nav>
</template>
