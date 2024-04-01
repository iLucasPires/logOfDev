<script setup lang="ts">
interface iProps {
  _path: string;
  title: string;
  cover: string;
  timeToRead: number;
  description: string;
  createdAt: string;
  lastUpdate: string;
}

const {
  locale: { value: localCode },
} = useI18n();
</script>

<template>
  <main class="space-y-8">
    <AText
      tag="h1"
      color="rainbow"
      weight="bold"
      fontCase="upper"
      text="Log of dev (blog)"
    />

    <p class="my-4 w-4/5" v-text="$t('blog.description')" />
    <ContentList :path="localCode">
      <template #default="{ list }">
        <div class="space-y-4">
          <h3 class="text-2xl font-bold" v-text="$t('blog.lastPosts')" />
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NuxtLink
              :key="post._path"
              :to="post._path"
              v-for="post in list.slice(0, 2) as iProps[]"
            >
              <MCardPost
                :title="post.title"
                :cover="post.cover || '/img/eric-cartman.gif'"
                :description="post.description"
                :createdAt="dateFormatted(post.createdAt)"
                :timeToRead="calculateTimeToRead(post.description)"
              />
            </NuxtLink>
          </div>
        </div>
        <div v-if="list.length > 2" class="space-y-4">
          <h3 class="text-2xl font-bold" v-text="$t('blog.otherPosts')" />
          <div class="flex flex-col">
            <NuxtLink
              :key="post._path"
              :to="post._path"
              v-for="post in list.slice(2) as iProps[]"
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

      <template #not-found>
        <div>
          <h3
            class="text-2xl font-semibold"
            v-text="$t('blog.notFound.title')"
          />
          <p v-text="$t('blog.notFound.description')" />
        </div>
      </template>
    </ContentList>
  </main>
</template>
