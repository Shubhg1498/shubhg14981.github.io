# Project media

Add images or videos here, then reference them in `src/data/content.ts`.

## Image (local file)

```ts
media: { type: "image", src: "projects/neura-demo.jpg", alt: "Robot demo" }
```

## Video (local file, e.g. MP4)

Keep files under ~10–20 MB for GitHub Pages. Prefer short clips.

```ts
media: {
  type: "video",
  src: "projects/teleop-demo.mp4",
  poster: "projects/teleop-poster.jpg", // optional
}
```

## YouTube (recommended for long demos)

Upload unlisted/public on YouTube, then use the video ID:

```ts
media: { type: "youtube", id: "dQw4w9WgXcQ" }
```

Push to `master` and wait for the GitHub Actions deploy to `gh-pages`.
