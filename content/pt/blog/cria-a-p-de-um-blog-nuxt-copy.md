# Cria A P\*\*\*\* De Um Blog (versão Nuxt)

Recentemente vi no canal do Eduardo a ideia de criar seu próprio blog e não depender de algoritmos ou restrições de plataformas como o X (antigo Twitter) ou Instagram. Achei a ideia **bastante da hora**, e com isso gostaria de colaborar um pouco — tanto escrevendo posts na "P\*\*\*\* do meu blog", quanto ensinando como você pode fazer o seu.

## Ok, como posso fazer a p\*\*\*\* do meu blog?

Existem várias formas de criar um blog hoje em dia. Você pode usar plataformas prontas, frameworks diversos ou até arquiteturas diferentes (tipo Jamstack).\:brMas, geralmente, a maneira mais simples e eficiente é gerar o conteúdo de forma **estática**, já que blogs não mudam o tempo todo. Assim, a gente consegue sites rápidos, fáceis de hospedar e baratos.

Nesse post, vamos usar o **Nuxt** (perfeito para quem programa com Vue). Apesar de o foco principal do Nuxt ser **aplicações web universais**, ele tem ferramentas no ecossistema que encaixam perfeitamente em blogs:

- **Nuxt Content** — para ler arquivos Markdown e gerar páginas automaticamente;
- **Nuxt Studio** — para criar, editar e organizar o blog de forma low code.

## Pré-requisitos

Antes de começar, você precisa ter algumas coisas prontas:

- **Conta no GitHub** — O Nuxt Studio conecta diretamente no seu repositório.
- **Node.js** instalado — Se quiser rodar localmente (opcional).
- **Noções básicas de Git** — Para clonar o projeto e fazer commits (nada avançado).
- **Vontade de escrever na P\*\*\*\* do seu blog**.

## Criando a p\*\*\*\* do blog

Para facilitar todo o processo, vamos usar o [**Nuxt Studio**](https://nuxt.studio/) — uma plataforma oficial do Nuxt que te ajuda a gerenciar conteúdo de projetos sem precisar de muito código.

E para ficar ainda mais fácil, eu mesmo criei um template pronto::br👉 [Template Nuxt Studio Blog (GitHub)](https://github.com/iLucasPires/nuxtstudio-template-blog) 👈

O template já vem com:

- TailwindCSS configurado para estilizar o blog;
- Estrutura de conteúdo com Nuxt Content;
- Suporte a SEO básico;
- Sistema de posts e páginas;
- Layout responsivo.

### Passo a passo

1. **Fork** o repositório do template no seu GitHub.
2. Acesse o **Nuxt Studio** e conecte sua conta do GitHub.
3. O projeto do seu fork vai aparecer na sua lista de projetos do Nuxt Studio.
4. Abra e comece a editar dentro da sessão `content`
5. Para o deploy tu pode usar o próprio GitHub pages que pode ser configurado na sessão `deploy`

Pronto! Sem precisar configurar nada no começo.

### Rodando localmente (opcional)

Se quiser rodar o blog no seu computador para ver como está ficando:

```bash
git clone https://github.com/seu-usuario/seu-repo-forkado.git
cd seu-repo-forkado
npm install
npm run dev
```

Assim você vê ao vivo qualquer mudança antes de publicar.

## Melhorando a P\*\*\*\*

O template é bem básico para ser fácil de personalizar.

Quer deixar seu blog com a sua cara?

- Customize o TailwindCSS (`tailwind.config.ts`);
- Melhore o SEO adicionando Open Graph, títulos dinâmicos, etc.;
- Capriche no CSS usando `prose` da `@tailwindcss/typography` para formatar os textos automaticamente.

## Conclusão

Criar seu próprio espaço na internet é bastente facil.\:brCom Nuxt, Nuxt Content e Nuxt Studio, você consegue montar um blog, rápido e do seu jeito — sem depender de redes sociais e seus algoritmos malucos.

Então, **cria a P\*\*\*\* do seu blog!!!**
