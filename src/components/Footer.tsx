import { site } from "../data/content";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {year} {site.shortName}
        </p>
        <p className={styles.role}>{site.role}</p>
      </div>
    </footer>
  );
}
