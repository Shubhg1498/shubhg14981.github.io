import { experience } from "../data/content";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience" className={`section ${styles.section}`}>
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've worked</h2>
        <ol className={styles.list}>
          {experience.map((item) => (
            <li key={item.period} className={styles.item}>
              <time className={styles.period} dateTime={item.period}>
                {item.period}
              </time>
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
