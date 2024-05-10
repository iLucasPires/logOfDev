<script setup lang="ts">
  const { t } = useI18n();

  const aboutMeList = [
    {
      title: t("about.bio.p1.title"),
      text: t("about.bio.p1.text"),
    },
    {
      title: t("about.bio.p2.title"),
      text: t("about.bio.p2.text"),
    },
    {
      title: t("about.bio.p3.title"),
      text: t("about.bio.p3.text"),
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
    <template #description>{{ $t("about.description") }}</template>

    <div class="space-y-5">
      <h2 class="uppercase" v-text="$t('about.bio.title')" />
      <div class="row">
        <ul class="space-y-4">
          <li :key="item.title" v-for="item in aboutMeList">
            <h3 class="text-bold" v-text="item.title" />
            <p class="text-neutral-500" v-html="item.text" />
          </li>
        </ul>
        <div class="size-full relative -top-12 left-5 hidden lg:block">
          <NuxtImg
            src="https://media.licdn.com/dms/image/D4D03AQFisb1NlQRllg/profile-displayphoto-shrink_800_800/0/1715300067160?e=1720656000&v=beta&t=D3GpOXrEiXWewvgaEucADL5bl2stQksaD18QSSY_cBk"
            class="rounded  m-auto saturate-1"
            alt="Lucas Pires"
            width="400"
            height="400"
          />
        </div>
      </div>
    </div>

    <div class="space-y-5">
      <h2 class="uppercase" v-text="$t('about.skills.title')" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="item in skillMeList" :key="item.title">
          <MCardAbout
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
