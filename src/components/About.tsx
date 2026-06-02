import { about, site } from "../data/content";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">A bit about me</h2>
        <div className={styles.grid}>
          <div className={styles.content}>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <dl className={styles.meta}>
            <div>
              <dt>Based in</dt>
              <dd>{site.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{about.focus}</dd>
            </div>
            <div>
              <dt>Currently</dt>
              <dd>{site.currently}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
