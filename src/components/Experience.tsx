import { experience } from "../data/content";
import { SectionIntro } from "./SectionIntro";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionIntro label="Experience" title="Where I've contributed." />
        <ol className={styles.list}>
          {experience.map((item) => (
            <li key={`${item.period}-${item.org}`} className={styles.item}>
              <time className={styles.period}>{item.period}</time>
              <div>
                <h3 className={styles.title}>
                  {item.title}
                  <span className={styles.org}> · {item.org}</span>
                </h3>
                <p className={styles.detail}>{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
