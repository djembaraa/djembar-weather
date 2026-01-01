"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { CloudSun, Github } from "lucide-react";
import styles from "./Navbar.module.css";

const ThemeToggle = dynamic(() => import("../ThemeToggle/ThemeToggle"), {
  ssr: false,
  loading: () => <div style={{ width: "20px", height: "20px" }} />,
});

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="https://github.com/djembaraa" className={styles.logo}>
          <CloudSun className={styles.logoIcon} size={28} />
          <span className={styles.logoText}>Djembaraa Weather App</span>
        </Link>

        <div className={styles.links}>
          <ThemeToggle />

          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkItem}
          >
            <Github size={20} />
            <span className={styles.githubText}>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
