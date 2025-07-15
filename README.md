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
