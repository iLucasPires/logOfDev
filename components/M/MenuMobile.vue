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
  <button class="btn-neutral p-2 md:hidden flex" @click="handleClick">
    <i v-bind:class="menuIsOpen ? 'i-carbon-close' : 'i-carbon-menu'" />
  </button>

  <span
    class="fixed inset-0 z-10 bg-neutral-900/60 block"
    @click="handleClick"
    v-show="menuIsOpen"
  />

  <nav
    class="fixed inset-x-0 bottom-0 top-0 z-20 bg-neutral-950 transition-transform duration-300 rounded-t-xl"
    v-bind:style="{
      transform: menuIsOpen ? `translateY(${sizeMenu}%)` : 'translateY(100%)',
    }"
  >
    <button
      class="w-full h-4 flex items-center justify-center p-4"
      @touchstart="buttonDown = true"
      @touchend="handleTouchEnd"
      @click="handleClick"
      @touchmove="handleTouch"
    >
      <div
        class="rounded bg-neutral-700 active:bg-neutral-600 hover:bg-neutral-600 w-20 h-2"
      />
    </button>

    <menu class="space-y-2 p-4">
      <button
        class="btn-neutral animate-click block w-full"
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
