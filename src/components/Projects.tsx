import { projects } from "../data/content";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Selected work</h2>
        <ul className={styles.grid}>
          {projects.map((project) => (
            <li key={project.title}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <ul className={styles.tags}>
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <span className="tag">{tag}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.links}>
                  {project.href && (
                    <a href={project.href} className={styles.link}>
                      Live demo →
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      className={styles.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source →
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
