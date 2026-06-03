import { achievements } from "../data/content";
import { SectionIntro } from "./SectionIntro";
import styles from "./Achievements.module.css";

export function Achievements() {
  return (
    <section id="achievements" className={`section ${styles.section}`}>
      <div className="container">
        <SectionIntro label="Achievements" title="Proven track record." />
        <ul className={styles.grid}>
          {achievements.map((item) => (
            <li key={item.label}>
              <article className={styles.card}>
                <p className={styles.value}>{item.value}</p>
                <h3 className={styles.label}>{item.label}</h3>
                <p className={styles.detail}>{item.detail}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
