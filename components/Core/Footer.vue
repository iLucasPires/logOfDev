<template>
  <footer class="p-5 w-full border-t-1 border-neutral-800/30">
    <div class="col w-rel mx-a md:row items-center gap-4 text-neutral-500">
      <p class="text-center">
        &copy;{{ new Date().getFullYear() }} - {{ $t("footer.corpyright") }}
      </p>
    </div>
  </footer>
</template>
