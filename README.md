# Shubham Ghogare — Portfolio

React + Vite portfolio. **Read this before deploying** — there are two GitHub repos involved.

## Why deployment failed

1. **Wrong repo name:** Your portfolio was pushed to [`shubhg14981.github.io`](https://github.com/Shubhg1498/shubhg14981.github.io) (extra `1`). That can **never** be `https://shubhg1498.github.io/` — only a repo named exactly `shubhg1498.github.io` gets the root URL.

2. **Pages not turned on:** GitHub returns 404 until you enable Pages under **Settings → Pages**.

3. **Wrong asset path:** Vite `base` must match the repo name for project sites.

---

## Option A — Main site (recommended): `https://shubhg1498.github.io/`

Use the **correct** repo: [`Shubhg1498/shubhg1498.github.io`](https://github.com/Shubhg1498/shubhg1498.github.io).

```bash
cd ~/shubham-portfolio
chmod +x scripts/deploy-user-site.sh
./scripts/deploy-user-site.sh
```

**One-time in GitHub:**

1. Open [shubhg1498.github.io → Settings → Pages](https://github.com/Shubhg1498/shubhg1498.github.io/settings/pages)
2. **Build and deployment → Source:** `Deploy from a branch`
3. **Branch:** `main`, folder **`/ (root)`**
4. Save. Wait 1–2 minutes, then open **https://shubhg1498.github.io/**

---

## Option B — Keep using `shubhg14981.github.io` repo (typo name)

After each push, enable Pages on **that** repo:

1. [Settings → Pages](https://github.com/Shubhg1498/shubhg14981.github.io/settings/pages)
2. **Source:** `Deploy from a branch`
3. **Branch:** `gh-pages`, folder **`/ (root)`**
4. The workflow (`.github/workflows/deploy.yml`) builds and pushes to `gh-pages` automatically.

**URL:** https://shubhg1498.github.io/shubhg14981.github.io/

To fix the name long-term: delete or archive `shubhg14981.github.io` and only use `shubhg1498.github.io` (Option A).

---

## Local preview

```bash
npm install   # or: pixi run npm install
npm run dev
```

For preview matching the typo repo URL:

```bash
VITE_BASE=/shubhg14981.github.io/ npm run build && npm run preview
```

---

## Customize

Edit `src/data/content.ts` (bio, links, projects). Set `site.social.instagram` to your photography profile URL.

## Update git remote (optional)

Your folder may still point at the old name:

```bash
git remote set-url origin https://github.com/Shubhg1498/shubhg14981.github.io.git
```
