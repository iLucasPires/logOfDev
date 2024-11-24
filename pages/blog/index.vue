<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: "Log of dev (blog)",
  ogTitle: "Log of dev (blog)",
  description: t("blog.description"),
  ogDescription: t("blog.description"),
});

</script>

<template>
  <NuxtLayout name="section">
    <template #title>Log of dev (blog)</template>
    <template #desc>{{ $t("blog.description") }}</template>
    <ContentList
      :query="{
        path: '/blog',
        locale: $i18n.locale,
      }"
    >
      <template #default="{ list }">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NuxtLinkLocale
            v-for="article in list.slice(0, 2)"
            :key="article._path"
            :to="article._path"
          >
            <UiCardPost
              :title="article.title!"
              :description="article.description"
              :createdAt="article.createdAt"
              :tags="article.tags"
              :timeToRead="calculateTimeToRead(article.description)"
            />
          </NuxtLinkLocale>

          <NuxtLinkLocale v-for="article in list.slice(2)" :key="article._path">
            <UiCardPostCompact
              :title="article.title!"
              :description="article.description"
              :createdAt="article.createdAt"
              :timeToRead="calculateTimeToRead(article.description)"
            />
          </NuxtLinkLocale>
        </div>
      </template>

      <template #not-found>
        <div>
          <h3 v-text="$t('blog.notFound.title')" />
          <p v-text="$t('blog.notFound.description')" />
        </div>
      </template>
    </ContentList>
  </NuxtLayout>
</template>
