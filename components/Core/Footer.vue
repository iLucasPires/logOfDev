<script setup lang="ts">
  const socialNetworks = [
    {
      text: "GitHub",
      icon: "i-carbon-logo-github",
      link: "https://github.com/iLucasPires",
    },
    {
      text: "LinkedIn",
      icon: "i-carbon-logo-linkedin",
      link: "https://linkedin.com/in/iLucasPires",
    },
    {
      text: "Twitter",
      icon: "i-carbon-logo-twitter",
      link: "https://twitter.com/lpires_n",
    },
  ];

  const currentYear = new Date().getFullYear();
  function openLink(link: string) {
    window.open(link, "_blank");
  }
</script>

<template>
  <footer class="p-5 w-full">
    <div
      class="col w-rel mx-a md:(row justify-between) items-center gap-4 text-neutral-500"
    >
      <div class="row gap-4">
        <button
          v-for="social in socialNetworks"
          :key="social.text"
          class="text-xl flex"
          @click="openLink(social.link)"
        >
          <span :class="social.icon" />
          <span class="sr-only" v-text="social.text" />
        </button>
      </div>

      <p class="text-center">
        &copy;{{ currentYear }} -
        <span v-text="$t('footer.corpyright')" />
      </p>
    </div>
  </footer>
</template>
