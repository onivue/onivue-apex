# onivue-apex — Next.js & Tailwind CSS Monorepo Template

This is a monorepo template using:

- 📏 [TypeScript 5.0](https://www.typescriptlang.org/)
- ⚡️ [Next.js 13.2](https://nextjs.org/)
- ⚛️ [React 18.2](https://reactjs.org/)
- 🌬️ [Tailwind CSS 3.3](https://tailwindcss.com/)
- 📕 [Storybook 7.0](https://storybook.js.org/)
- 🧪 [Testing Library](https://testing-library.com/)
- 🃏 [Jest](https://jestjs.io/)
- 💡 [Lighthouse](https://developer.chrome.com/docs/lighthouse/)
- 🧹 [ESLint](https://eslint.org/)
- 🤖 [CommitLint](https://commitlint.js.org/)
- 💖 [Prettier](https://prettier.io/)
- 📦 [pnpm](https://pnpm.io/)
- 🏎️ [Turborepo](https://turbo.build/repo)
- 👷 [Github Actions](https://github.com/features/actions)

## What's inside?

This monorepo includes a few apps and packages.

### Apps and Packages

- `apps/website`: another Next.js app with Tailwind CSS
- `packages/ui`: a stub React component library with Tailwind CSS
- `packages/utils`: shared utilities
- `packages/eslint-config-onivue`: shared ESLint configuration
- `packages/jest-config`: shared Jest configuration
- `packages/lighthouse-config`: shared Lighthouse configuration
- `packages/tailwindcss-config`: shared Tailwind CSS configuration
- `packages/typescript-config`: shared `tsconfig.json` files

## Using this template

Run the following command:

```
npx degit onivue/onivue-apex my-monorepo
cd my-monorepo
pnpm install
```

### Develop Next.js

If you want to start `apps/*` in development mode, and watch for changes in `packages/ui`, run at the root:

```
pnpm dev
```

### Build Next.js

If you want to build `apps/*` for production, run at the root:

```
pnpm build
```

If you want to see an analysis of the generated bundles, specify the `ANALYZE` environment variable:

```
ANALYZE=true pnpm build
```

### Preview Next.js

If you want to preview production builds of `apps/*`, run at the root:

```
pnpm start
```

### Develop Storybook

If you want to start all Storybook projects in development mode, run at the root:

```
pnpm storybook:dev
```

### Develop Storybook

If you want to build all Storybook projects, run at the root:

```
pnpm storybook:build
```

### Unit tests

If you want to run unit tests for all projects, run at the root:

```
pnpm test:unit
```

### End-to-end tests

--> todo

```
pnpm test:e2e
```

### Lint

If you want to run linting for all projects, run at the root:

```
pnpm lint
```

---

### ❤️ inspired by

[https://github.com/myopic-design/monorepo-nextjs-tailwindcss-template](https://github.com/myopic-design/monorepo-nextjs-tailwindcss-template)
