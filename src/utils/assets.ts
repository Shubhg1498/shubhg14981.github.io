/** Resolve paths for GitHub Pages base (e.g. /shubhg14981.github.io/). */
export function assetUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
}

export const cvUrl = () => assetUrl("cv.pdf");
