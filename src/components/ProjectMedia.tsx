import type { ProjectMedia as ProjectMediaType } from "../data/content";
import { assetUrl } from "../utils/assets";
import styles from "./ProjectMedia.module.css";

type Props = {
  media: ProjectMediaType;
  title: string;
};

export function ProjectMedia({ media, title }: Props) {
  if (media.type === "youtube") {
    return (
      <div className={styles.embedWrap}>
        <iframe
          className={styles.embed}
          src={`https://www.youtube-nocookie.com/embed/${media.id}`}
          title={`${title} video`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (media.type === "video") {
    return (
      <video
        className={styles.media}
        controls
        playsInline
        preload="metadata"
        poster={media.poster ? assetUrl(media.poster) : undefined}
      >
        <source src={assetUrl(media.src)} />
      </video>
    );
  }

  return (
    <img
      className={styles.media}
      src={assetUrl(media.src)}
      alt={media.alt ?? title}
      loading="lazy"
    />
  );
}

export function ProjectMediaPlaceholder({ title }: { title: string }) {
  return (
    <div className={styles.placeholder} aria-label={`${title} — media coming soon`}>
      <span className={styles.placeholderIcon} aria-hidden>
        ◫
      </span>
      <span className={styles.placeholderText}>Photo or video slot</span>
    </div>
  );
}
