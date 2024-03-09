<template>
  <footer class="w-full border-t-1 border-neutral-800/20">
    <div
      class="maxp flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-neutral-500"
    >
      <div class="flex gap-4 justify-center">
        <NuxtLink class="flex items-center gap-2 cursor-pointer">
          <i class="i-carbon-logo-linkedin" />
          <span>LinkedIn</span>
        </NuxtLink>

        <NuxtLink class="flex items-center gap-2 cursor-pointer">
          <i class="i-carbon-logo-github" />
          <span>GitHub</span>
        </NuxtLink>

        <NuxtLink class="flex items-center gap-2 cursor-pointer">
          <i class="i-carbon-logo-twitter" />
          <span>Twitter</span>
        </NuxtLink>
      </div>
      <p class="text-sm">
        &copy; {{ new Date().getFullYear() }} - {{ $t("footer.corpyright") }}
      </p>
    </div>
  </footer>
</template>
