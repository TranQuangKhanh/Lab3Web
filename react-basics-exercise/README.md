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
