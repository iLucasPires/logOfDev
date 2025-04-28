# Cria A P\*\*\*\* De Um Blog (versão Nuxt)

Recentemente vi no canal do Eduardo a ideia de criar seu próprio blog e não depender de algoritmos ou restrições de plataformas como o X ou o Instagram. Achei a ideia bastante da hora, e com isso gostaria de colaborar um pouco, tanto escrevendo posts na "P\*\*\*\* do meu blog" quanto ensinando como você pode fazer o seu.

## Ok, como posso fazer a p\*\*\*\* do meu blog ? (sim, gostei muito dessa expressão)

Vale lembrar que existem várias formas de fazer um blog. Podemos usar ferramentas prontas, diferentes tipos de frameworks, ou até arquiteturas diferentes.  
Mas, geralmente, é mais simples gerar o conteúdo de forma estática, já que o blog não muda o tempo todo. Assim, podemos usar frameworks que têm esse foco.  
No nosso caso, vamos usar o **Nuxt** (perfeito para quem programa com Vue) — apesar de o foco principal dele não ser exatamente esse, dentro do ecossistema existem o **Nuxt Content** e o **Nuxt Studio**, que conseguem fazer esse serviço muito bem.

---

## Iniciando o projeto da p\*\*\*\* do blog

Vamos precisar do **Node.js** (ou qualquer runtime de JavaScript que o Nuxt suporte — a maioria funciona) instalado, e também do **Git**.  
Depois, podemos rodar o seguinte comando, usando seu gerenciador de pacotes favorito — no meu caso, é o **pnpm**:

```bash
pnpm create nuxt@latest
```

Nesse momento, a CLI do Nuxt vai fazer algumas perguntas, como:  
- nome do projeto,  
- se você quer inicializar um repositório Git,  
- e o mais importante: se você gostaria de instalar alguns módulos.

No nosso caso, **sim**, vamos instalar o **@nuxt/content** e, opcionalmente, o **@nuxt/ui**.  
Se você acabou passando direto e não instalou, sem estresse — dá para instalar depois, seguindo o tutorial na documentação: [https://content.nuxt.com/](https://content.nuxt.com/).

---

## Estrutura

O Nuxt tem uma estrutura de diretórios bem simples. Você pode conferir mais detalhes aqui: [https://nuxt.com/docs/guide/directory-structure](https://nuxt.com/docs/guide/directory-structure/app).

Mas no nosso caso, vamos usar apenas as pastas:  
- `pages`,  
- `public`,  
- `components`,  
- `content`.

As outras pastas, como `server` (que já vem criada por padrão), podemos apagar sem problema.

Na raiz do projeto, também será necessário criar um arquivo para configurar o Content, no caso o `content.config.ts`, e colocar o seguinte:

```ts
// content.config.ts
import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
```

---

## Criando as páginas

Dentro da pasta `pages`, vamos criar nossas páginas (Avá, é mesmo ?).  
Nesse caso, vamos criar dois arquivos: `index.vue` e `[slug].vue`.

**index.vue**:

```vue
<script lang="ts" setup>
const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog').all()
})
</script>

<template>
  <div>
    <ul>
      <li 
        v-for="(post, index) in posts" 
        :key="index"
        @click="navigateTo(post._path)"
      >
        {{ post.title }}
      </li> 
    </ul>
  </div>
</template>
```

**[slug].vue**:

```vue
<script lang="ts" setup>
const route = useRoute()
const slug = route.params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("blog").path(`/blog/${slug}`).first();
})
</script>

<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div v-html="post.body"></div>
  </div>
</template>
```

---

Agora, com tudo isso pronto, basta rodar:

```bash
pnpm install
pnpm run dev
```

E devemos ter tudo funcionando!  
Claro, vai estar **bastante feio** ainda, porque não adicionamos nenhum CSS, e também não vai ter nenhum post ainda, porque não criamos os arquivos `.md`.

---

## Adicionando Posts na P\*\*\*\* do Blog

Para adicionar posts, podemos criar uma pasta chamada `blog` dentro da `content`.  
Dentro dessa pasta `blog`, podemos adicionar qualquer arquivo `.md`, por exemplo: `primeiro-post-da-p****-do-blog.md`.

---

## Melhorando a UI

Agora é a parte pessoal — melhorar o visual do blog.

Isso vai depender de um certo conhecimento em TailwindCSS ou CSS puro.  
Para quem ainda não tem nenhum conhecimento, eu vou deixar um template no meu GitHub.  
Para quem já tem alguma noção, dá pra usar facilmente o plugin Tailwind Typography e aplicar a classe `prose` na `div` do `[slug].vue`.

---

# Fim ✌️