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
  <div class="w-rel p-5">
    <article class="w-4/6">
      <ContentRenderer :content="post">
        <template v-if="post">
          <h1 v-text="post?.title" class="my-8" />
          <ContentRendererMarkdown class="space-y-4" :value="post" />
        </template>
      </ContentRenderer>
    </article>
  </div>
</template>
