<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("about.title"),
});

const socialNetworks = [
  {
    text: "GitHub",
    icon: "i-carbon-logo-github",
    link: "https://github.com/iLucasPires",
  },
  {
    text: "LinkedIn",
    icon: "i-carbon-logo-linkedin",
    link: "https://linkedin.com/in/iLucasPires",
  },
  {
    text: "Twitter",
    icon: "i-carbon-logo-twitter",
    link: "https://twitter.com/lpires_n",
  },
  {
    text: "Linktree",
    icon: "i-carbon-link",
    link: "https://linktr.ee/lpiresn",
  },
];

const skillMeList = [
  {
    title: t("about.skills.frontend.title"),
    text: t("about.skills.frontend.text"),
    icon: "i-mdi:drawing",
    skills: [
      { name: "TypeScript", icon: "i-tabler:brand-typescript" },
      { name: "Nuxt", icon: "i-tabler:brand-nuxt" },
      { name: "Next", icon: "i-tabler:brand-nextjs" },
      { name: "Tailwind", icon: "i-tabler:brand-tailwind" },
      { name: "React", icon: "i-tabler:brand-react" },
      { name: "Svelte", icon: "i-tabler:brand-svelte" },
    ],
  },
  {
    title: t("about.skills.backend.title"),
    text: t("about.skills.backend.text"),
    icon: "i-mdi:server-minus",
    skills: [
      { name: "Python", icon: "i-tabler:brand-python" },
      { name: "Rust", icon: "i-tabler:brand-rust" },
      { name: "C/C++", icon: "i-tabler:brand-cpp" },
      { name: "Django", icon: "i-tabler:brand-django" },
    ],
  },
  {
    title: t("about.skills.other.title"),
    text: t("about.skills.other.text"),
    icon: "i-mdi:tools",
    skills: [
      { name: "Git", icon: "i-tabler:brand-git" },
      { name: "Docker", icon: "i-tabler:brand-docker" },
    ],
  },
];
</script>

<template>
  <NuxtLayout name="section">
    <template #title>{{ $t("about.title") }}</template>
    <template #desc>{{ $t("about.description") }}</template>

    <div class="space-y-4">
      <div class="row gap-8">
        <div class="hidden w-1/2 lg:block">
          <NuxtImg 
            src="/img/me.jpg" 
            class="rounded size-full m-auto saturate-1 object-cover" 
            alt="Lucas Pires"
            width="400" 
            height="400" 
          />
        </div>
        <div class="w-full space-y-4">
          <h2 class="uppercase" v-text="$t('about.bio.title')" />
          <div class="space-y-4 md:w-3/4">
            <div class="space-y-4">
              <p v-text="$t('about.bio.p1')" />
              <p v-text="$t('about.bio.p2')" />
              <p v-text="$t('about.bio.p3')" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <h2 class="uppercase" v-text="$t('about.skills.title')" />
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div v-for="item in skillMeList" :key="item.title">
          <UiCardAbout 
            :title="item.title" 
            :icon="item.icon" 
            :text="item.text" 
            :skills="item.skills" 
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
