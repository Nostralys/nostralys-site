# Nostralys website

Website of the Nostralys Game Studio built with [astro](https://astro.build/).

## Setup project locally

### Requirements

- [node](https://nodejs.org/en) v24
  > You can install it using [nodeenv](https://github.com/ekalinin/nodeenv) or [asdf](https://asdf-vm.com)
- [pnpm](https://pnpm.io)

### Setup steps

1. Run `pnpm install`
   > Husky should be now set up, and a commit linter as well as prettier will run automatically.
2. Run `pnpm dev`
3. You're good to go!

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 📚 News posts

To add a news post, create a new markdown file in the [news](src/data/news) directory.

> The file name will be used as the slug for the post, so make sure to use a descriptive name (in **kebab case!**).

The file must contain frontmatter with the following fields to be recognized by astro:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post" # This will be displayed on the post card
publishDate: "2025-07-11"
image:
  src: /images/... # The image must be put in the `public/images` directory
  alt: "An image description"
relatedPosts: # Optional, links to other posts
  - un-autre-post # Slug of another post to link to (should correspond to a file in the `news` directory without the `.md` extension)
---
```

All news posts are then accessible at `/news`, and individual posts can be accessed at `/news/{slug}`.

### 🧰 Configuration

> Astro content collections documentation [here](https://docs.astro.build/en/guides/content-collections/)

If you want to change the fields of the frontmatter, you can do so in the [content.config.ts](src/content.config.ts)` file.
