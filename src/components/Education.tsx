import { certifications, education } from "../data/content";
import { assetUrl } from "../utils/assets";
import { SectionIntro } from "./SectionIntro";
import styles from "./Education.module.css";

export function Education() {
  return (
    <section id="education" className={`section ${styles.section}`}>
      <div className="container">
        <SectionIntro label="Academic background" title="Education." />
        <ul className={styles.list}>
          {education.map((item) => (
            <li key={item.school}>
              <article className={styles.card}>
                <div className={styles.header}>
                  {item.logo ? (
                    <img
                      className={styles.logo}
                      src={assetUrl(item.logo)}
                      alt=""
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  ) : null}
                  <div>
                    <h3 className={styles.degree}>{item.degree}</h3>
                    <p className={styles.school}>
                      {item.school} — {item.location}
                    </p>
                    <p className={styles.period}>{item.period}</p>
                  </div>
                </div>
                <p className={styles.detail}>{item.detail}</p>
                <dl className={styles.stats}>
                  {item.stats.map((stat) => (
                    <div key={stat.label} className={styles.stat}>
                      <dt>{stat.label}</dt>
                      <dd>{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </li>
          ))}
        </ul>
        <div className={styles.certs}>
          <h3 className={styles.certsTitle}>Certifications</h3>
          <ul className={styles.certsList}>
            {certifications.map((cert) => (
              <li key={cert.name + cert.year}>
                <a
                  href={cert.url}
                  className={styles.certLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.certName}>{cert.name}</span>
                  <span className={styles.certMeta}>
                    {cert.issuer}
                    {cert.year ? ` · ${cert.year}` : ""}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
