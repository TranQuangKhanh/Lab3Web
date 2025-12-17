# React Basics Exercise

This is a Vite + React (React 17) project skeleton with components built to satisfy the lab exercises.

How to run locally:

1. npm install
2. npm run dev

Vite will start a dev server, typically at http://localhost:5173

Notes:

- `index.html` is the HTML entry which mounts the React app to `<div id="root">`.
- `src/main.jsx` bootstraps React and renders `<App />`.
- `src/App.jsx` is the application root where components are composed and demonstrated.

Key implemented components:

- `UserProfile.jsx` (prop validation & default theme)
- `Counter.jsx` (useState example)
- `Login.jsx` (controlled inputs + form)
- `Card.jsx`, `Accordion.jsx`, `Panel.jsx` (composition & lifted state)
- `TodoApp.jsx`, `TodoForm.jsx`, `TodoList.jsx`, `TodoItem.jsx` (capstone todo app)

You can open React DevTools in your browser while the app is running to introspect component state and props.

Deployment on Vercel:

- If Vercel build fails with `vite: command not found` or `Command "vite build" exited with 127`/`126`, use one of the following fixes:
  - **Quick (recommended for CI):** In your Vercel Project → Settings → Build & Development Settings set **Build Command** to `npm run vercel-build`. This script runs `npm install --include=dev` then the normal build so `vite` (a devDependency) is available.
  - **Alternative:** Set the environment variable `NPM_CONFIG_PRODUCTION=false` in Vercel Project → Settings → Environment Variables so devDependencies are installed during the build.
  - **Less ideal:** Move `vite` into `dependencies` in `package.json` so it is installed in production.

Using `npm run vercel-build` is the simplest way to ensure the build has access to dev-only tooling such as Vite.
