import { researchInterests } from "../data/content";
import { SectionIntro } from "./SectionIntro";
import styles from "./ResearchInterests.module.css";

export function ResearchInterests() {
  return (
    <section id="research" className={`section ${styles.section}`}>
      <div className="container">
        <SectionIntro
          label="Research interests"
          title="What I'm exploring next."
          lead="Topics I want to pursue in PhD and research-oriented roles."
        />
        <ul className={styles.list}>
          {researchInterests.map((topic) => (
            <li key={topic}>
              <span className={styles.item}>{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
