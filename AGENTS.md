# AGENTS.md

## Cursor Cloud specific instructions

This is a **static HTML/CSS/JS website** (GitHub Pages resource bookmarks site). There is no build step, no backend, no database, and no test framework.

### Running the dev server

```bash
npx serve -l 3000 .
```

Serves the site at `http://localhost:3000/`. The entry point is `index.html`.

### Key files

- `index.html` — main page with search/filter UI
- `src/js/data.js` — bookmark entries data (~1300 lines)
- `src/images/` — icons and illustrations
- `sources/` — standalone HTML/CSS/JS demo projects (not part of the main site)

### Notes

- `package.json` lists `astro` as a dependency but it is **not used**. There is no Astro config or project structure. The dependency is vestigial.
- There is no ESLint, Prettier, TypeScript, or any linter/formatter configured.
- There are no automated tests (`npm test` just echoes an error message).
- The site loads external resources (Chatra chat widget from CDN, icon images from remote URLs). These require internet access but are not critical for local development.
