import { about } from "../data/content";
import { SectionIntro } from "./SectionIntro";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionIntro label="About" title={about.title} />
        <div className={styles.content}>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className={styles.paragraph}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
