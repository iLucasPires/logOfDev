<script lang="ts" setup>
const emit = defineEmits(["close"]);
const { setLocale } = useI18n();

const changeLocale = (locale: string) => {
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
  <div class="absolute top-8 rounded border-1 border-neutral-800 p-1">
    <ul class="size-full divide-y-1 divide-neutral-800">
      <li v-for="locale in $i18n.availableLocales" :key="locale">
        <button
          @click="changeLocale(locale)"
          class="flex gap-2 items-center py-1 px-4 hover:bg-neutral-800/20"
        >
          <span>{{ getEmoji(locale) }}</span>
          <span class="uppercase text-sm">{{ locale }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>
