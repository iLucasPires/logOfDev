<script setup lang="ts">
  const i18nHead = useLocaleHead({});

  useSeoMeta({
    title: "Log of dev",
    ogTitle: "Log of dev",
    description: "my personal blog about programming and technology",
    ogDescription: "my personal blog about programming and technology",
  });

  useHead({
    htmlAttrs: { lang: i18nHead.value.htmlAttrs!.lang },
    link: [...(i18nHead.value.link || [])],
    meta: [...(i18nHead.value.meta || [])],
  });
</script>

<template>
  <NuxtLayout>
    <CoreNavBar />
    <div class="flex-1">
      <NuxtPage />
    </div>
    <CoreFooter />
  </NuxtLayout>
</template>
