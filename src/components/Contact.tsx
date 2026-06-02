import { site } from "../data/content";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className={`container ${styles.inner}`}>
        <p className="section-label">Contact</p>
        <h2 className={styles.title}>Let's connect</h2>
        <p className={styles.lead}>
          Open to internships, thesis collaborations, and full-time roles in
          robotics, ADAS, and autonomous systems across Germany and Europe.
        </p>
        <div className={styles.actions}>
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            {site.email}
          </a>
          <a
            href={site.social.linkedin}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={site.social.github}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href={site.social.instagram}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Photography
          </a>
        </div>
      </div>
    </section>
  );
}
