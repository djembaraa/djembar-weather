import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {year} Djembaraa Weather App. Built by Djembar Arafat.</p>
        <p className={styles.subtext}>Data provided by OpenWeatherMap API</p>
      </div>
    </footer>
  );
}
