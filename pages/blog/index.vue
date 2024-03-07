<template>
  <main class="">
    <h2 class="text-4xl font-black uppercase text-rainbow">
      Log of dev (blog)
    </h2>
    <div class="mt-6 flex flex-col gap-6">
      <ContentList path="/blog">
        <template #default="{ list }">
          <div v-for="article in list" :key="article._path">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </template>

        <template #not-found>
          <h2>in construction</h2>
        </template>
      </ContentList>
    </div>
  </main>
</template>
