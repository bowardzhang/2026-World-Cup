

# <img src="logo.png" width="48"> 2026 World Cup Schedule (Static Web)

A static website for displaying 2026 World Cup fixtures with:
- Group stage as list cards
- Knockout stage as a horizontal bracket
- Language support: English (default), 中文, Français, Deutsch, Español

## Data source

All match data comes from `data/schedule.json`.

The front-end fetches this JSON file on every page load (`cache: no-store`) so updates in GitHub are reflected immediately after deployment.

## Local preview

Because the page uses `fetch`, run a local server instead of opening `index.html` directly:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages deployment

This repo includes `.github/workflows/deploy.yml`:
- Triggers on pushes to `main`
- Deploys the repository root as a static artifact

To keep schedule updated, only edit and commit `data/schedule.json`. GitHub Actions will redeploy automatically.
