import { skillGroups } from "../data/content";
import { SectionIntro } from "./SectionIntro";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionIntro
          label="Technical strengths"
          title="What I work with."
        />
        <ul className={styles.grid}>
          {skillGroups.map((group) => (
            <li key={group.title}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{group.title}</h3>
                <ul className={styles.items}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
