import { photography, site } from "../data/content";
import styles from "./Photography.module.css";

export function Photography() {
  return (
    <section id="photography" className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <p className="section-label">{photography.title}</p>
        <h2 className="section-title">Beyond engineering</h2>
        <p className={styles.lead}>{photography.lead}</p>
        <div className={styles.grid} aria-hidden>
          <div className={styles.tile} />
          <div className={styles.tile} />
          <div className={styles.tile} />
        </div>
        <a
          href={site.social.instagram}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          {photography.cta}
        </a>
      </div>
    </section>
  );
}
