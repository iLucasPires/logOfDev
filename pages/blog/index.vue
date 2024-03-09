<script setup lang="ts">
interface Post {
  _path: string;
  title: string;
  cover: string;
  timeToRead: number;
  description: string;
  tags: string[];
  createdAt: string;
  lastUpdate: string;
}
import { useI18n } from "#imports";
const {
  locale: { value: localCode },
} = useI18n();

const { data: posts } = await useAsyncData("posts", () =>
  queryContent(localCode)
    .only([
      "_path",
      "_id",
      "_name",
      "title",
      "description",
      "cover",
      "timeToRead",
      "createdAt",
      "lastUpdate",
    ])
    .find()
);
const lastTwoPosts = (posts?.value as Post[])?.slice(0, 2) ?? [];
const otherPosts = (posts?.value as Post[])?.slice(2) ?? [];

const dateFormatted = (date: string) => new Date(date).toLocaleDateString();
const calculateTimeToRead = (text: string) => {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
};
</script>

<template>
  <main class="space-y-4">
    <h2 class="text-4xl font-black uppercase text-rainbow">
      Log of dev (blog)
    </h2>
    <p class="my-4 w-4/5">
      log of dev is a project that I started to share my experiences and
      knowledge in the world of development, I hope you like it and that it is
      useful to you.
    </p>
    <h3 class="text-2xl font-bold">Last post</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NuxtLink v-for="post in lastTwoPosts" :key="post._path" :to="post._path">
        <MCardPost
          :key="post._path"
          :title="post.title"
          :cover="post.cover"
          :description="post.description"
          :createdAt="dateFormatted(post.createdAt)"
          :timeToRead="calculateTimeToRead(post.description)"
        />
      </NuxtLink>
    </div>
    <h3 v-if="otherPosts.length" class="text-2xl font-bold">Other posts</h3>
    <div class="flex flex-col">
      <NuxtLink v-for="post in otherPosts" :key="post._path" :to="post._path">
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
  </main>
</template>
