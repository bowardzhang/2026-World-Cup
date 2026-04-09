# 2026 World Cup Schedule (Static Web)

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

## Deployment

This repository is configured to auto-deploy through Netlify (via GitHub Actions build hook trigger).

To keep schedule updated, edit and commit `data/schedule.json`, then push to `main`.

## Netlify automatic redeploy on GitHub updates

This repository now includes `.github/workflows/netlify-redeploy.yml`.

It triggers a Netlify redeploy whenever `main` is updated (or when manually dispatched).

### Setup

1. In Netlify, open your site settings and create a **Build hook**.
2. Copy the build hook URL.
3. In GitHub, open this repository's **Settings -> Secrets and variables -> Actions**.
4. Add a repository secret named `NETLIFY_BUILD_HOOK_URL` with the copied URL.

After this setup, every push to `main` will trigger Netlify redeploy automatically.
