# Collectio Rituum (1954) – Roman Ritual

Static site (React + Vite) for GitHub Pages.

## Deploy
1. Create a GitHub repo and push this folder to the `main` branch.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The included workflow builds and publishes on every push. Done.

## Local
`npm install && npm run dev`

## Adding or editing rites
Each rite lives in its own file under `src/data/rites/` — see `src/data/rites/README.md`.

## Fonts
The typefaces offered in Settings are bundled with the app (nothing is loaded from Google); see `src/fonts.ts`.
The versicle and response signs (℣ ℟) use EB Garamond whenever the chosen font lacks them.

Reference scan: `public/Collectio_Rituum_1954.pdf`.
