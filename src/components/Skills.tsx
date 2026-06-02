import { skills } from "../data/content";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Tools & technologies</h2>
        <ul className={styles.list}>
          {skills.map((skill) => (
            <li key={skill}>
              <span className={styles.item}>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
