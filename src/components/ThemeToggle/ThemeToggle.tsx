"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <button
      className={styles.toggleBtn}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle Dark Mode"
    >
      {resolvedTheme === "dark" ? (
        <Sun size={20} className={styles.iconSun} />
      ) : (
        <Moon size={20} className={styles.iconMoon} />
      )}
    </button>
  );
}
