<script lang="ts" setup>
const route = useRoute()
const { locale } = useI18n();


const { data: post } = await useAsyncData("post", () =>
  queryContent('/blog')
    .locale(locale.value)
    .where({ _path: `/blog/${route.params.slug}` })
    .findOne()
);
</script>

<template>
  <NuxtLayout name="section">
    <template #title>{{ post?.title }}</template>

    <ContentRenderer :content="post">
      <div class="prose max-w-4xl text-justify [&_a]:(no-underline) [&_ul]:space-y-4 ">

        <template v-if="post">
          <ContentRendererMarkdown class="space-y-4 " :value="post" />
        </template>
      </div>
    </ContentRenderer>
  </NuxtLayout>
</template>
