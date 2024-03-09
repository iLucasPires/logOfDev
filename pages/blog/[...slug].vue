<script lang="ts" setup>
const { fullPath } = useRoute();
</script>

<template>
  <article class="prose">
    <ContentDoc v-bind:path="(fullPath as string)" v-slot="{ doc }">
      <header>
        <h1>{{ doc.title }}</h1>
        <p>{{ doc.description }}</p>
      </header>

      <div class="mt-6 markdown">
        <ContentRenderer v-bind:value="doc" />
      </div>
    </ContentDoc>
  </article>
</template>
