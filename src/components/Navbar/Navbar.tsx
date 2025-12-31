import Link from "next/link";
import { CloudSun, Github } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <CloudSun className={styles.logoIcon} size={28} />
          <span className={styles.logoText}>Djembaraa</span>
        </Link>

        <div className={styles.links}>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkItem}
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
