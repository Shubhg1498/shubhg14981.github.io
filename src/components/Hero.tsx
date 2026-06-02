import { site } from "../data/content";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className="container">
        <p className={styles.eyebrow}>
          <span className={styles.status} aria-hidden />
          Open to roles in robotics & autonomous systems (DE/EU)
        </p>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>{site.shortName}</span>
        </h1>
        <p className={styles.role}>{site.role}</p>
        <p className={styles.tagline}>{site.tagline}</p>
        <div className={styles.actions}>
          <a href="#projects" className="btn btn-primary">
            View projects
          </a>
          <a
            href={site.social.linkedin}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={site.social.github}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className={styles.glow} aria-hidden />
    </section>
  );
}
