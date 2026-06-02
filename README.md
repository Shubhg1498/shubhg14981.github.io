# Shubham Ghogare — Portfolio

Dark, robotics-themed portfolio for a mechatronics engineer (React + Vite + TypeScript).

Live site (after deploy): **https://shubhg1498.github.io/**

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Customize

Edit **`src/data/content.ts`** — bio, experience, projects, skills, and social links.

**Instagram:** set `site.social.instagram` to your photography profile URL (e.g. `https://www.instagram.com/your_handle/`).

## Deploy to GitHub Pages

### Option A — This repo (`shubham-portfolio`)

1. Push this folder to GitHub (e.g. `Shubhg1498/shubham-portfolio`).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`; the workflow publishes `dist/` automatically.
4. For a user site at `shubhg1498.github.io`, either use **Option B** or set the repo name to `shubhg1498.github.io`.

### Option B — User site repo (`shubhg1498.github.io`)

1. Build locally: `npm run build`
2. Copy `dist/*` into your `shubhg1498.github.io` repo root and push.
3. **Settings → Pages → Deploy from branch `main` / root**, or enable the same GitHub Actions workflow there.

`vite.config.ts` uses `base: "/"` for `username.github.io`. For a project page at `github.io/repo-name/`, change `base` to `"/repo-name/"`.

## Stack

- React 19, TypeScript, Vite 6
- Static export — no backend required
