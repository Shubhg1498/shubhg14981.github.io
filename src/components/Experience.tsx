import { experience } from "../data/content";
import { assetUrl } from "../utils/assets";
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
              {item.logo ? (
                <img
                  className={styles.logo}
                  src={assetUrl(item.logo)}
                  alt=""
                  width={48}
                  height={48}
                  loading="lazy"
                />
              ) : (
                <span className={styles.logoFallback} aria-hidden>
                  {item.org.charAt(0)}
                </span>
              )}
              <div className={styles.body}>
                <time className={styles.period}>{item.period}</time>
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
