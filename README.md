# Jan 20 2024 - This project is now archived.

## Why?

Because the world doesn't need another JS site generator. 

I'm proud of this project, but since completing it, I now have a job where I work in NextJS full-time, and I'm just not enthused to do more of the same work in the evening. Ironically, I used skills I earned building this site to get that job -- but that now means this project is not a priority.  What I want to do instead is *write*, and that means finding a platform that I'm also not making.

I was really into this Wagnerian idea of 'Totallkunst', i.e. making _every part_ of the blog a piece of 'artwork' (if you could call it such.) 

But realistically, I don't have _time_ to do my own blogging engine, just like I don't have time to make my own clothes, make paintings instead of smartphone pics, or, some nights, my own dinner. 

If I'm going to do something, I want to do it well. And that means walking away from this. 

I'm still using a personal version of this package to host my own website, but that will change shortly as well. I might do [blot.im](//blot.im), or I might use [lume](//lume.land). Or maybe [soupault](//soupault.app) again. Or maybe (and this is an idea that appeals to me greatly,

I'm enormously grateful I did this project, and I'm enormously grateful to walk away.

See you in the streets!









<p align="center">
  <img src="https://github.com/elmarsto/sbstr8/blob/main/public/media/logo-full.svg" width="204" height="277" alt="sbstr8 logo" />
</p>

# SBSTR8

# What is sbstr8? (Prounounced ‘substrate’)

 A nearly-unstyled, hackable, ultra-modern, ultra-clean scaffold for rich, interactive storytelling, journalism and blogging. Fork this repo and get to work. See [Lizmars.net](https://lizmars.net) for an example of what is possible.

## Why another starter?

Because ‘small and simple’ usually means ‘limited’. Your posts could be more than just plain text; they could be *experiences*. Go ahead, flex your creative (o)pinions. 🪽

If you really want a minimalist no-JS blogging engine, you could do much worse than [Soupault](https://soupault.app), and if you *really, really* hate complexity, there is the elegant, spare [Gemini](https://gemini.circumlunar.space). For good and for ill, that’s not what Sbstr8 is about.

But what if you want to do media-rich storytelling, but coding in Typescript and React isn’t your jam? In this case, please do check out the professional choice for interactive storytelling, the superlative [Vev](https://vev.design). Yet it’s not open source, and is not optimal for hosting e.g. arbitrary chunks of React. Vev low-code/no-code, which is great for professional journalists, but less great for those of us who don’t feel we’ve done any real work until there’s a `.tsx`.

By contrast, Sbstr8 is code-first and [clastic](https://en.wiktionary.org/wiki/clastic). With Sbstr8, and a basic knowledge of Typescript and React, your only limit is the imagination. And while we rely on [Next’s tree shaking](https://nextjs.org/blog/next-10-2) to keep bundle size down, we prioritize immersiveness and creative freedom over counting kilobytes. The bundle size will be what the bundle size needs to be. **Because Sbstr8 is for creatives who code.**

## Caveats

  - **Currently in alpha!** Caveat Forker.

## Ingredients

 - [Apollo](https://www.apollographql.com) GraphQL to keep you **integrated** with modern APIs (both client and server!)
 - [Commitlint](https://commitlint.js.org) to keep you **clear**
 - [ESLint](https://eslint.org) to keep you **neat**
 - [EditorConfig](https://editorconfig.org/) to keep you **consistent**
 - [Font Awesome](https://fontawesome.com/) to keep you **iconic**
 - [Headless-UI](https://headlessui.com) to keep you **interactive**
 - [Husky](https://typicode.github.io/husky/#/) to keep you **moving forward**
 - [Jest](https://jestjs.io/) to keep you **covered**
 - [Lint-staged](https://github.com/okonet/lint-staged) to keep you **clean**
 - [Next.js 13](https://nextjs.org) to keep you **Based**
 - [Plot](https://observablehq.com/plot) to keep you and your data **visual**
 - [Prettier](https://prettier.io) to keep you **beautiful**
 - [Ramda](https://ramdajs.com/) to keep you **functional**
 - [React 18](https://react.dev) to keep you **responsive**
 - [Renovate](https://mend.io) to keep you **up-to-date**
 - [Storybook](https://storybook.js.org) to keep you **modular**
 - [Tailwind.css](https://tailwindcss.com) to keep you **stylish**
 - [TypeScript 5](https://typescriptlang.org) to keep you **strict**
 - [Unified](https://unifiedjs.org)/Remark and [Mermaid](https://mermaid.js.org), to keep you **expressive**
 - [Video.js](https://videojs.com), to keep your audience **watching**

## Features
 - RSS feed
 - Sitemap
 - Proper OpenGraph annotation
 - SSR-by-default, for great SEO
 - **NEW!** not one but two theming systems: a CSS-based system, for simple themes, and a Dependency Injection model for overriding sbstr8's built-in React components with your own custom React components.


Thanks to Next.js and [tree shaking](https://en.wikipedia.org/wiki/Tree_shaking), your finished site will only contain the libraries you choose to use, page by page. But it’s all there if you need it. <3

### Coming soon
 - Kubernetes support
 - A **CLI**, so you can manage your posts and components with ease
 - [CI/CD](https://github.blog/2022-02-02-build-ci-cd-pipeline-github-actions-four-steps/) via [GitHub Actions](https://github.com/features/actions)
 - Documentation (sorry folks, I know it’s a big deal, but it’s also been a moving target)


## Quick start
 1. `git clone https://github.com/elmarsto/substrate <your-project-name>`
 2. `npm install`
 3. `npx husky install` (you only have to do this once per repo)
 4. `npx storybook &` (design your components in a sandbox)
 5. `npx run dev` happy hacking
 6. `npx run build`

## NEW! Even quicker start

If you’re hashtag-blessed and run [Nix](//nix.dev) or, even better, [NixOS](https://nixos.org), with support for [Flakes](https://nixos.wiki/wiki/Flakes), then you can actually spin up a local demo with:

`nix run github:elmarsto/sbstr8`

Yep, that’s it.

## Nix features

Supporting the following on most installs of Nix supporting flakes:

 - `nix develop` -> minimal development shell, including typescript language server. You’ll need to `npm install`, and then `npm run dev`. Then, have at it!
 - `nix run` -> build and spin up a distributable Nix derivation
 - `nix build` -> get a working distributable folder at `./result`
 - `nix build '.#k8s'` -> WIP: generates a currently-unusable kubernetes spec at ./result
 - `nix build '.#docker'` -> next steps:
 ```
docker load < result
# outputs something like localhost/sbstr8:1234567890ABCDEF
rm -rf result
docker run localhost/sbstr8:1234567890ABCDEF
```

## Land acknowledgment

 - Sbstr8 was put together in part on the unceded and ancestral territory of the hən̓q̓əmin̓əm̓ and Sḵwx̱wú7mesh speaking peoples, the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ (Tsleil-Waututh) Nations. I, Elizabeth Marston, am an uninvited guest here, and I’m looking for ways to give back. If you have thoughts on how this project could help the indigenous Coast Salish peoples decolonize, let me know!

## Why is the license GPL, and not MIT?

 - Because the now-routine scraping of GitHub by its owner to train AI‌s that regurgitate FOSS‌ code verbatim is a form of license-washing. MIT‌ License provides no cover or resistance to this, and therefore, in 2023, is obsolete.
 - Because the GPL still allows you to customize and build your own unique product with this tool, and host it. However, it motivates contributors *to the codebase* to do so in the open.
