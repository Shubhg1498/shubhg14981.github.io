import { useEffect, useState } from "react";
import { navLinks, site } from "../data/content";
import styles from "./Header.module.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo} onClick={() => setMenuOpen(false)}>
          {site.name.split(" ")[0]}
          <span className={styles.logoDot} aria-hidden />
        </a>

        <nav
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Main"
        >
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
          Get in touch
        </a>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
