<script setup lang="ts">
  definePageMeta({
    title: "blog.title",
  });

  interface iProps {
    _dir: string;
    title: string;
    cover: string;
    status: string;
    tags: string[];
    timeToRead: number;
    description: string;
    createdAt: string;
    lastUpdate: string;
  }

  const {
    locale: { value: localCode },
  } = useI18n();

  const { data: posts } = await useAsyncData("blogPosts", () =>
    queryContent("").where({ lang: localCode, status: "published" }).find()
  );

  const lastPosts = posts.value?.slice(0, 2) as iProps[] | [];
  const otherPosts = posts.value?.slice(2) as iProps[] | [];
</script>

<template>
  <NuxtLayout name="section">
    <template #title>Log of dev (blog)</template>
    <template #desc>{{ $t("blog.description") }}</template>

    <template v-if="posts?.length != 0">
      <div class="space-y-4">
        <h2 class="uppercase" v-text="$t('blog.latestPosts')" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NuxtLinkLocale
            :key="post._dir"
            :to="'/blog/' + post._dir"
            v-for="post in lastPosts"
          >
            <MCardPost
              :title="post.title"
              :cover="post.cover"
              :description="post.description"
              :createdAt="post.createdAt"
              :tags="['tag1', 'tag2']"
              :timeToRead="calculateTimeToRead(post.description)"
            />
          </NuxtLinkLocale>
        </div>
      </div>
      <div v-if="posts?.length && posts?.length > 2" class="space-y-4">
        <h2 class="uppercase" v-text="$t('blog.otherPosts')" />
        <div class="flex flex-col">
          <NuxtLinkLocale
            :key="post._dir"
            :to="'/blog/' + post._dir"
            v-for="post in otherPosts"
          >
            <MCardPostCompact
              :key="post._dir"
              :title="post.title"
              :cover="post.cover"
              :tags="post.tags"
              :description="post.description"
              :createdAt="post.createdAt"
              :timeToRead="post.timeToRead"
            />
          </NuxtLinkLocale>
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
