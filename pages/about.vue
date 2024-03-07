<script setup lang="ts">
const aboutMeList = [
  {
    title: "Quem sou eu?",
    text: `Eu sou um desenvolvedor web, com foco em desenvolvimento front-end. 
           Atualmente estou trabalhando com Nuxt e Tailwind, e também estou estudando Next.js. 
           Também estou estudando desenvolvimento back-end com Django e FastAPI.`,
  },
  {
    title: "O que estou procurando?",
    text: `Estou procurando oportunidades para trabalhar com desenvolvimento web, com foco em desenvolvimento front-end. 
           Também estou procurando oportunidades para trabalhar com Python e C/C++.`,
  },
  {
    title: "O que estou estudando?",
    text: `Estou estudando desenvolvimento web com Nuxt e Tailwind, e também estou estudando Next.js. 
           Também estou estudando desenvolvimento back-end com Django e FastAPI. 
           Também estou estudando C/C++ e Python.`, 
  },
];

const skillMeList = [
  {
    title: "Front-end",
    icon: "i-mdi:drawing",
    skills: [
      {
        name: "TypeScript",
        icon: "i-tabler:brand-typescript",
        level: "begginner",
      },
      { name: "Nuxt", icon: "i-tabler:brand-nuxt", level: "intermediate" },
      { name: "Next", icon: "i-tabler:brand-nextjs", level: "intermediate" },
      {
        name: "Tailwind",
        icon: "i-tabler:brand-tailwind",
        level: "intermediate",
      },
      { name: "React", icon: "i-tabler:brand-react", level: "begginner" },
      { name: "Svelte", icon: "i-tabler:brand-svelte", level: "begginner" },
    ],
    text: `I have experience with front-end development, working with Nuxt and Tailwind. 
           I am also studying Next.js and Svelte.`,
  },
  {
    title: "Back-end",
    icon: "i-mdi:server-minus",
    skills: [
      { name: "Python", icon: "i-tabler:brand-python", level: "begginner" },
      { name: "Rust", icon: "i-tabler:brand-rust", level: "begginner" },
      { name: "C/C++", icon: "i-tabler:brand-cpp", level: "intermediate" },
      { name: "Django", icon: "i-tabler:brand-django", level: "intermediate" },
    ],
    text: `I am studying back-end development with Django and FastAPI.
           I am also studying Python and C/C++.`,
  },
  {
    title: "Tools and Others",
    icon: "i-mdi:tools",
    skills: [
      { name: "Git", icon: "i-tabler:brand-git", level: "intermediate" },
      { name: "Docker", icon: "i-tabler:brand-docker", level: "intermediate" },
    ],
    text: `I have experience with DevOps, working with Git and Docker.`,
  },
];
</script>

<template>
  <main class="space-y-10">
    <h1 class="text-4xl font-black uppercase text-rainbow">About Me</h1>
    <div class="space-y-5">
      <h2 class="text-3xl font-bold">My Bio</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <ul class="space-y-4">
          <li v-for="item in aboutMeList" :key="item.title">
            <h3 class="text-xl font-semibold">{{ item.title }}</h3>
            <p>{{ item.text }}</p>
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
      <h2 class="text-3xl font-black">My Skills</h2>
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
