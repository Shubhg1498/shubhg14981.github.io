import { projects } from "../data/content";
import { ProjectMedia, ProjectMediaPlaceholder } from "./ProjectMedia";
import { SectionIntro } from "./SectionIntro";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="projects" className={`section ${styles.section}`}>
      <div className="container">
        <SectionIntro label="Featured projects" title="Selected work." />
        <ul className={styles.list}>
          {projects.map((project, index) => (
            <li key={project.title}>
              <article
                className={`${styles.card} ${index % 2 === 1 ? styles.cardReverse : ""}`}
              >
                <div className={styles.mediaCol}>
                  {project.media ? (
                    <ProjectMedia media={project.media} title={project.title} />
                  ) : (
                    <ProjectMediaPlaceholder title={project.title} />
                  )}
                </div>
                <div className={styles.body}>
                  <p className={styles.subtitle}>{project.subtitle}</p>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.org}>{project.org}</p>
                  <p className={styles.desc}>{project.description}</p>
                  {project.highlight ? (
                    <p className={styles.highlight}>{project.highlight}</p>
                  ) : null}
                  <ul className={styles.tags}>
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <span className="tag">{tag}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.links}>
                    {project.href ? (
                      <a href={project.href} className={styles.link}>
                        View project →
                      </a>
                    ) : null}
                    {project.repo ? (
                      <a
                        href={project.repo}
                        className={styles.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source code →
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
