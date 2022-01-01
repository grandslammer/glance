# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## To initialize a new project

This project has already been initialized by `create-svelte`

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

This project has been initialized with:

✔ Which Svelte app template? › SvelteKit demo app      - Svelte app template
✔ Use TypeScript? … No / Yes                           - Yes 
✔ Add ESLint for code linting? … No / Yes              - Yes
✔ Add Prettier for code formatting? … No / Yes         - Yes

## Developing

Once you've created a project and installed dependencies with:

```bash
npm install
npm run dev --port 3000

# or start the server and open the app in a new browser tab
npm run dev -- --open --port 3000
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
