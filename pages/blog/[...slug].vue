<template>
  <ContentDoc
    :query="{
      path: `/blog/${$route.params.slug}`,
      locale: $i18n.locale,
    }"
  >
    <template #default="{ doc }">
      <article>
        <ContentRenderer
          class="prose max-w-4xl [&_a]:(no-underline) [&_ul]:space-y-4"
          :value="doc"
        />
      </article>
    </template>
    <template #not-found>
      <h1>Not found</h1>
    </template>
  </ContentDoc>
</template>
