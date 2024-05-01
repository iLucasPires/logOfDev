<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const handleContact = () => {
  const email = useRuntimeConfig().public.email;
  const msg = `mailto:${email}?subject=Contact&body=${t("home.email_body")}`;

  navigator.clipboard.writeText(email);
  confirm(t("home.email_confirm")) && window.open(msg);
};

const handleResume = () => {
  window.open("/pdf/resume.pdf");
};
</script>

<template>
  <main class="size-full flex flex-col gap-4 items-center justify-center">
    <div class="text-center uppercase">
      <p class="tracking-widest md:tracking-3">Frontend Developer</p>
      <h1 class="text-rainbow uppercase text-6xl md:text-8xl font-black">Lucas Pires</h1>
    </div>

    <div class="flex items-center gap-4">
      <button
        class="btn-neutral w-42 md:w-72 flex gap-2 animate-click"
        v-on:click="handleResume"
      >
        <span class="i-carbon-document-pdf" />
        <span class="uppercase text-sm" v-text="$t('home.btn_resume')" />
      </button>

      <button
        class="btn-neutral w-42 md:w-72 flex gap-2 animate-click"
        v-on:click="handleContact"
      >
        <span class="i-carbon-email" />
        <span class="uppercase text-sm">Email</span>
      </button>
    </div>
  </main>
</template>
