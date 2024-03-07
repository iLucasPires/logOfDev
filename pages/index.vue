<script setup lang="ts">



</script>

<template>
  <main class="size-full flex flex-col gap-4 items-center justify-center">
    <div class="text-center uppercase">
      <p class="md:text-lg md:tracking-3 tracking-widest">Garoto de Programa</p>
      <h1 class="md:text-8xl text-5xl font-bold text-rainbow">Lucas Pires</h1>
    </div>

    <div class="flex items-center gap-4">
      <AButton
        class="w-42 md:w-72 p-2"
        text="Curriculo"
        icon="i-carbon-document"
        href="/resume.pdf"
        neutral
      />
      <AButton
        class="w-42 md:w-72 p-2"
        text="Contato"
        icon="i-carbon-email"
        href="mailto:"
        neutral
      />
    </div>
  </main>
</template>
