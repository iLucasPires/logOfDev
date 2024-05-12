<script lang="ts" setup>
  const { data: post } = await useAsyncData("post", () =>
    queryContent(useRoute().params.slug[0])
      .where({ lang: useI18n().locale.value, status: "published" })
      .findOne()
  );

  useSeoMeta({
    title: post?.value?.title,
    description: post?.value?.description,
  });
  
</script>

<template>
  <NuxtLayout name="section" class="" layout="article">
    <ContentRenderer :content="post">
      <template v-if="post">
        <h1 v-text="post?.title" class="my-8" />
        <ContentRendererMarkdown class="space-y-4 lg:(w-4/6)" :value="post" />
      </template>
    </ContentRenderer>
  </NuxtLayout>
</template>
