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
  <main class="space-y-10">
    <h1 class="text-4xl font-black uppercase text-rainbow">
      {{ $t("about.title") }}
    </h1>
    <div class="space-y-5">
      <h2 class="text-3xl font-bold">{{ $t("about.bio.title") }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <ul class="space-y-4">
          <li class="space-y-2" v-for="item in aboutMeList" :key="item.title">
            <h3 class="text-xl font-semibold">{{ item.title }}</h3>
            <p class="text-neutral-500">{{ item.text }}</p>
          </li>
        </ul>
        <div class="size-full flex flex-col items-center">
          <NuxtImg
            src="https://github.com/ilucaspires.png"
            alt="Lucas Pires"
            width="400"
            height="400"
            class="rounded hidden md:block m-auto"
          />
        </div>
      </div>
    </div>

    <div class="space-y-5">
      <h2 class="text-3xl font-black">{{ $t("about.skills.title") }}</h2>
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
  </main>
</template>
