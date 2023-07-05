### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by `web` applications
- `utlis`: helper funcs shared by `web` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `tailwindconfig`: used throughout the monorepo

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
yarn install
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
yarn install
yarn dev
```

### Filter on endpoint

```
students?q=terry&limit=1&skip=0
```

### Test

To test all apps and packages, run the following command:

```
yarn install

yarn test
yarn test:watch

yarn test:ui
yarn test:ui:watch

yarn test:web
yarn test:web:watch
```


