import { cvUrl } from "../utils/assets";
import { heroCredentials, site } from "../data/content";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className="container">
        <p className={styles.eyebrow}>{site.role}</p>
        <p className={styles.location}>{site.locationLine}</p>
        <h1 className={styles.headline}>{site.headline}</h1>
        <p className={styles.tagline}>{site.tagline}</p>
        <ul className={styles.credentials} aria-label="Highlights">
          {heroCredentials.map((item) => (
            <li key={item}>
              <span className={styles.credential}>{item}</span>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <a href={cvUrl()} className="btn btn-primary" download>
            Download CV
          </a>
          <a href="#about" className="btn">
            Learn more ↓
          </a>
        </div>
      </div>
    </section>
  );
}
