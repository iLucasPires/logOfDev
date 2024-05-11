<script setup lang="ts">
  definePageMeta({
    title: "blog.title",
  });

  interface iProps {
    _path: string;
    title: string;
    cover: string;
    status: string;
    timeToRead: number;
    description: string;
    createdAt: string;
    lastUpdate: string;
  }

  const {
    locale: { value: localCode },
  } = useI18n();

  const { data } = await useAsyncData("blogPosts", () =>
    queryContent("").where({ lang: localCode, status: "published" }).find()
  );

  const blogPosts = data.value as iProps[] | [];
  const lastPosts = blogPosts?.slice(0, 2) as iProps[] | [];
  const otherPosts = blogPosts?.slice(2) as iProps[] | [];
  const token = process.env.GITHUB_TOKEN;
</script>

<template>
  <NuxtLayout name="section">
    <template #title>Log of dev (blog)</template>
    <template #desc>{{ $t("blog.description") }}</template>

    <template v-if="blogPosts.length != 0">
      <div class="space-y-4">
        <h3 class="font-bold" v-text="$t('blog.latestPosts')" />
        <div class="col gap-4">
          <NuxtLink
          :key="post._path"
          :to="'/blog' + post._path"
          v-for="post in lastPosts"
          >
            <MCardPost
              :title="post.title"
              :cover="post.cover"
              :description="post.description"
              :createdAt="post.createdAt"
              :timeToRead="calculateTimeToRead(post.description)"
            />
          </NuxtLink>
        </div>
      </div>
      <div v-if="blogPosts.length > 2" class="space-y-4">
        <h3 class="font-bold" v-text="$t('blog.otherPosts')" />
        <div class="flex flex-col">
          <NuxtLink
            :key="post._path"
            :to="post._path"
            v-for="post in otherPosts"
          >
            <MCardPostCompact
              :key="post._path"
              :title="post.title"
              :cover="post.cover"
              :description="post.description"
              :createdAt="post.createdAt"
              :timeToRead="post.timeToRead"
            />
          </NuxtLink>
        </div>
      </div>
    </template>

    <template v-else>
      <div>
        <h3 class="font-semibold" v-text="$t('blog.notFound.title')" />
        <p v-text="$t('blog.notFound.description')" />
      </div>
    </template>
  </NuxtLayout>
</template>
