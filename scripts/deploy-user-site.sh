#!/usr/bin/env bash
# Deploy to https://shubhg1498.github.io/ (correct user Pages repo)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TARGET_REPO="https://github.com/Shubhg1498/shubhg1498.github.io.git"
WORKDIR="${TMPDIR:-/tmp}/shubhg1498-pages-deploy"

cd "$ROOT"

if command -v pixi >/dev/null 2>&1; then
  pixi run npm run build:user-site
else
  npm run build:user-site
fi

rm -rf "$WORKDIR"
git clone --depth=1 "$TARGET_REPO" "$WORKDIR"

find "$WORKDIR" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -r dist/* "$WORKDIR"/
touch "$WORKDIR/.nojekyll"

cd "$WORKDIR"
git add -A
if git diff --staged --quiet; then
  echo "No changes to deploy."
  exit 0
fi

git commit -m "Deploy portfolio $(date -u +%Y-%m-%dT%H:%MZ)"
git push origin main

echo ""
echo "Deployed. Enable Pages once if needed:"
echo "  https://github.com/Shubhg1498/shubhg1498.github.io/settings/pages"
echo "  Source: Deploy from branch → main → / (root)"
echo "  Site:   https://shubhg1498.github.io/"
