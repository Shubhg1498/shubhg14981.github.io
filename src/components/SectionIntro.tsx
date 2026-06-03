import styles from "./SectionIntro.module.css";

type Props = {
  label: string;
  title: string;
  lead?: string;
};

export function SectionIntro({ label, title, lead }: Props) {
  return (
    <header className={styles.intro}>
      <p className="section-label">{label}</p>
      <h2 className={styles.title}>{title}</h2>
      {lead ? <p className={styles.lead}>{lead}</p> : null}
    </header>
  );
}
