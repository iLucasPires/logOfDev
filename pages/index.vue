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
      <AText
        tag="p"
        size="sm"
        text="Front-end Developer"
        weight="light"
        fontCase="upper"
        custom="md:tracking-3 tracking-widest"
      />
      <AText
        tag="h1"
        weight="bold"
        fontCase="upper"
        color="rainbow"
        size="lg"
        custom="md:text-8xl"
        text="Lucas Pires"
      />
    </div>

    <div class="flex items-center gap-4">
      <AButton
        icon="i-carbon-document-pdf"
        custom="w-42 md:w-72"
        position="left"
        :text="t('home.btn_resume')"
        v-on:click="handleResume"
      />

      <AButton
        icon="i-carbon-email"
        text="Email"
        position="left"
        custom="w-42 md:w-72"
        v-on:click="handleContact"
      />
    </div>
  </main>
</template>
