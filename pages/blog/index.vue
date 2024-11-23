<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("blog.title"),
});

interface iProps {
  _dir: string;
  _path: string;
  title: string;
  status: string;
  tags: string[];
  timeToRead: number;
  description: string;
  createdAt: string;
  lastUpdate: string;
}

const { locale} = useI18n();

const { data } = await useAsyncData("blogPosts", () =>
  queryContent('blog')
    .locale(locale.value)
    .find()
);


const lastPosts = data.value?.slice(0, 2) as iProps[] | [];
const otherPosts = data.value?.slice(2) as iProps[] | [];

console.log(data.value);
</script>

<template>
  <NuxtLayout name="section">
    <template #title>Log of dev (blog)</template>
    <template #desc>{{ $t("blog.description") }}</template>
    
    <template v-if="data?.length != 0">
      <div class="space-y-4">
        <h2 class="uppercase" v-text="$t('blog.latestPosts')" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NuxtLinkLocale
            :key="post._dir"
            :to="post._path"
            v-for="post in lastPosts"
          >
            <UiCardPost
              :title="post.title"
              :description="post.description"
              :createdAt="post.createdAt"
              :tags="post.tags"
              :timeToRead="calculateTimeToRead(post.description)"
            />
          </NuxtLinkLocale>
        </div>
      </div>
      <div v-if="data?.length && data?.length > 2" class="space-y-4">
        <h2 class="uppercase" v-text="$t('blog.otherPosts')" />
        <div class="flex flex-col">
          <NuxtLinkLocale
            :key="post._dir"
            :to="'/blog/' + post._dir"
            v-for="post in otherPosts"
          >
            <UiCardPostCompact
              :title="post.title"
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
        <h3 v-text="$t('blog.notFound.title')" />
        <p v-text="$t('blog.notFound.description')" />
      </div>
    </template>
  </NuxtLayout>
</template>
