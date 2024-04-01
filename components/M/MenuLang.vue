<script lang="ts" setup>
const emit = defineEmits(["close"]);
const { setLocale } = useI18n();

const changeLocale = (locale: string) => {
  document.documentElement.lang = locale;
  setLocale(locale);
  emit("close");
};
const getEmoji = (locale: string) => {
  switch (locale) {
    case "en":
      return "🇺🇸";
    case "pt":
      return "🇧🇷";
    default:
      return "🌐";
  }
};
</script>

<template>
  <div class="absolute top-10 rounded border-1 border-neutral-800 p-1">
    <ul class="size-full divide-y-1 divide-neutral-800">
      <li v-for="locale in $i18n.availableLocales" v-bind:key="locale">
        <button
          v-on:click="changeLocale(locale)"
          class="flex gap-2 items-center py-1 px-4 hover:bg-neutral-800/20"
        >
          <span v-text="getEmoji(locale)" />
          <span class="uppercase text-sm" v-text="locale" />
        </button>
      </li>
    </ul>
  </div>
</template>
