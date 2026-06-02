import { certifications, education } from "../data/content";
import styles from "./Education.module.css";

export function Education() {
  return (
    <section id="education" className={`section ${styles.section}`}>
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-title">Academic background</h2>
        <ol className={styles.list}>
          {education.map((item) => (
            <li key={item.school} className={styles.item}>
              <time className={styles.period}>{item.period}</time>
              <div>
                <h3 className={styles.degree}>{item.degree}</h3>
                <p className={styles.school}>{item.school}</p>
                <p className={styles.detail}>{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className={styles.certs}>
          <h3 className={styles.certsTitle}>Certifications</h3>
          <ul className={styles.certsList}>
            {certifications.map((c) => (
              <li key={c}>
                <span className="tag">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
