<script lang="ts" setup>

const { data: post } = await useAsyncData("post", () =>
  queryContent(useRoute().fullPath).findOne()
);

if (!post.value) {
  throw createError({
    statusCode: 404,
    message: "Post not found",
  });
}
</script>

<template>
  <article class="prose">
    <ContentRenderer :content="post">
      <h1 v-text="post?.title" />
      <template v-if="post">
        <ContentRendererMarkdown :value="post" />
      </template>
    </ContentRenderer>
  </article>
</template>
