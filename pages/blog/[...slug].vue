<script lang="ts" setup>
const { slug } = useRoute().params;
</script>

<template>
  <article class="prose">
    <ContentDoc v-bind:path="(slug as string)" v-slot="{ doc }">
      <header>
        <h1>{{ doc.title }}</h1>
        <p>{{ doc.description }}</p>
      </header>

      <div class="mt-6">
        <ContentRenderer v-bind:value="doc" />
      </div>
    </ContentDoc>
  </article>
</template>
