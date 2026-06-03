import { cvUrl } from "../utils/assets";
import { contactCta, site } from "../data/content";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={styles.ctaBand}>
          <h2 className={styles.ctaTitle}>{contactCta.title}</h2>
          <p className={styles.ctaLead}>{contactCta.lead}</p>
          <div className={styles.ctaActions}>
            <a href={cvUrl()} className="btn btn-primary" download>
              Download CV
            </a>
            <a href={`mailto:${site.email}`} className="btn">
              Get in touch
            </a>
          </div>
        </div>

        <footer className={styles.connect}>
          <p className={styles.connectTitle}>Let's connect.</p>
          <p className={styles.connectDetail}>
            {site.location} ·{" "}
            <a href={`mailto:${site.email}`} className={styles.email}>
              {site.email}
            </a>
          </p>
          <div className={styles.social}>
            <a href={site.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.social.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={site.social.instagram} target="_blank" rel="noreferrer">
              Photography
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
