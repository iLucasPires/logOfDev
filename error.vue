<template>
  <div class="flex flex-col items-center justify-center h-screen space-y-4">
    <h1 class="text-4xl font-bold" v-text="$t('404.title')" />
    <NuxtImg
      class="rounded-lg shadow-lg w-80"
      src="/img/the-office.gif"
      alt="404"
      width="400"
      height="300"
    />

    <NuxtLinkLocale 
      to="/" 
      class="underline" 
      v-text="$t('404.text')" 
    />
  </div>
</template>
