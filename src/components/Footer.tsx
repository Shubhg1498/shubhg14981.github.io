import { site } from "../data/content";
import styles from "./Footer.module.css";

const socialLinks = [
  { label: "GitHub", href: site.social.github },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Instagram", href: site.social.instagram },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {year} {site.shortName}
        </p>
        <nav className={styles.nav} aria-label="Social">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
