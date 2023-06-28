Stop posting like it’s 1999.
![](https://github.com/elmarsto/sbstr8/blob/main/public/media/sbstr8.svg)
```

        ,--.              ,--.            ,---.
 ,---.  |  |-.   ,---.  ,-'  '-. ,--.--. |  o  |
(  .-'  | .-. ' (  .-'  '-.  .-' |  .--' .'   '.
.-'  `) | `-' | .-'  `)   |  |   |  |    |  o  |
`----'   `---'  `----'    `--'   `--'     `---'

```
# TODO (2023-06-22)

At the moment, an enormous amount of forward development has occurred in a private repo (hosting [lizmars.net](https://lizmars.net).

Over the next week I will be backporting as much as I can to sbstr8. This will involve refactoring things so that sbstr8 related components
are in their own subdirectory of the project, etc. I'm hard at work on sbstr8, stay tuned.

# UPDATE (2023-06-26)

See [a writeup of the procedure I'm using to do a comprehensive refactor](https://lizmars.net/post/2023-06-26.refactoring). Good things are brewing!

# What is sbstr8? (Prounounced ‘substrate’)

 - A maximalist, ultra-modern, opinionated blog starter for rich, interactive storytelling by creatives who code in Typescript React.

## Why another starter?

Because ‘small and simple’ usually means ‘limited’. Your posts could be more than just plain text; they could be *experiences*. Go ahead, flex your creative (o)pinions. 🪽

If you really want a minimalist no-JS blogging engine, you could do much worse than [Soupault](https://soupault.app), and if you *really, really* hate complexity, there is the elegant, spare [Gemini](https://gemini.circumlunar.space). For good and for ill, that’s not what Substrate is about.

But what if you want to do media-rich storytelling, but coding in Typescript and React isn’t your jam? In this case, please do check out the professional choice for interactive storytelling, the superlative [Vev](https://vev.design). Yet it’s not open source, and is not optimal for hosting e.g. arbitrary chunks of React. Vev low-code/no-code, which is great for professional journalists, but less great for those of us who don’t feel we’ve done any real work until there’s a `.tsx`.

By contrast, Substrate is code-first and [clastic](https://en.wiktionary.org/wiki/clastic). With Substrate, and a basic knowledge of Typescript and React, your only limit is the imagination. And while we rely on [Next’s tree shaking](https://nextjs.org/blog/next-10-2) to keep bundle size down, we prioritize immersiveness and creative freedom over counting kilobytes. The bundle size will be what the bundle size needs to be. **Because Substrate is for creatives who code.**

## Caveats

  - **Currently in alpha!** Caveat Forker.
  - Mostly I’m just assembling my favourite libraries into a coherent whole; I stand upon the shoulders of veritable giants. I try to get out of the way as much as possible. E.g. you talk directly to Headless UI, Framer Motion, Babylon, etc. This also means that I hereby punt on most documentation issues; if you have a question about how to use one of the provided libraries, see the documentation for that library.

## Ingredients

 - [Apollo](https://www.apollographql.com) GraphQL to keep you **integrated** with modern APIs (both client and server!)
 - [Babylon.js 6](https://babylonjs.com) to give you **depth**
 - [CodeMirror](https://codemirror.net) to keep your code examples **interactive and syntax highlighted**
 - [Commitlint](https://commitlint.js.org) to keep you **clear**
 - [ESLint](https://eslint.org) to keep you **neat**
 - [EditorConfig](https://editorconfig.org/) to keep you **consistent**
 - [Font Awesome](https://fontawesome.com/) to keep you **iconic**
 - [Framer Motion](https://www.framer.com/) to keep you **animated**
 - [Headless-UI](https://headlessui.com) to keep you **interactive**
 - [Husky](https://typicode.github.io/husky/#/) to keep you **moving forward**
 - [Immer](https://immerjs.github.io/immer/) to keep you **immutable**
 - [Jest](https://jestjs.io/) to keep you **covered**
 - [Lint-staged](https://github.com/okonet/lint-staged) to keep you **clean**
 - [Mirrorful](https://github.com/Mirrorful/mirrorful) to keep you **themed**
 - [Next.js 13](https://nextjs.org) to keep you **Based**
 - [Plot](https://observablehq.com/plot) to keep you and your data **visual**
 - [Prettier](https://prettier.io) to keep you **beautiful**
 - [Ramda](https://ramdajs.com/) to keep you **functional**
 - [React 18](https://react.dev) to keep you **responsive**
 - [Renovate](https://mend.io) to keep you **up-to-date**
 - [Storybook](https://storybook.js.org) to keep you **modular**
 - [Tailwind.css](https://tailwindcss.com), [Twin](https://github.com/ben-rogerson/twin.macro#readme), and [Emotion](https://emotion.sh/docs/introduction) to keep you **stylish**
 - [TypeScript 5](https://typescriptlang.org) to keep you **strict**
 - [Unified](https://unifiedjs.org)/Remark, [AsciiMath](https://asciimath.org) and [Mermaid](https://mermaid.js.org), to keep you **expressive**
 - [Use-sound](https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/) to keep you **lush**
 - [Video.js](https://videojs.com), to keep your audience **watching**
 - [Zustand](https://zustand-demo.pmnd.rs), to keep you **stateful**
 - ...and lots more besides! See [package.json](package.json) for a complete list.

## Features
 - RSS feed
 - Sitemap
 - SSR-by-default, for great SEO


Thanks to Next.js and [tree shaking](https://en.wikipedia.org/wiki/Tree_shaking), your finished site will only contain the libraries you choose to use, page by page. But it’s all there if you need it. <3

### Coming soon
 - Posts that demo the lovely bouquet of libraries
 - K8S example
 - A **CLI** so you can manage your posts and components with ease
 - [CI/CD](https://github.blog/2022-02-02-build-ci-cd-pipeline-github-actions-four-steps/) via [GitHub Actions](https://github.com/features/actions)
 - **Deploy** conveniently on one of:
   - Azure
   - AWS
   - Cloudflare
   - Docker & K8s (& K3s, for that matter)
   - [Fly](https://fly.io)
   - GCP
   - [Northflank](https://northflank.com)
   - [Vercel](https://vercel.com)
   - ...Or your own wildcat [nginx](https://nginx.com) or [Apache](https://apache.org) instance, because some of us keep the old ways ;D
 - Automatically **promote** and **cross-post** your work on your choice of:
   - [Discord](https://discord.com)
   - Facebook
   - Instagram
   - [Mastodon](https://mastodon.social)
   - [Medium](https://medium.com)
   - [Telegram](https://telegram.org)
   - ~~Twitter~~ (Hey Elon, unbreak the API pls. <small>And the rest of Twitter, too, while you’re at it.</small>)

 - **Automatically notify** search engines when you have new or updated content:
   - Bing
   - Google
   - DuckDuckGo


## Quick start
 1. `git clone https://github.com/elmarsto/substrate <your-project-name>`
 2. `npm install`
 3. `npx mirrorful &` (pick your colours and export)
 4. `npx storybook &` (design your components in a sandbox)
 5. `npx run dev` happy hacking
 6. `npx run build`


## Land acknowledgment

 - Substrate was put together in part on the unceded and ancestral territory of the hən̓q̓əmin̓əm̓ and Sḵwx̱wú7mesh speaking peoples, the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ (Tsleil-Waututh) Nations. I, Elizabeth Marston, am an uninvited guest here, and I’m looking for ways to give back. If you have thoughts on how this project could help the indigenous Coast Salish peoples decolonize, let me know!

## Why is the license GPL, and not MIT?

 - Because the now-routine scraping of GitHub by its owner to train AI‌s that regurgitate FOSS‌ code verbatim is a form of license-washing. MIT‌ License provides no cover or resistance to this, and therefore, in 2023, is obsolete.
 - Because the GPL still allows you to customize and build your own unique product with this tool, and host it. However, it motivates contributors *to the codebase* to do so in the open.
