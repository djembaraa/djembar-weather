import styles from "./Loader.module.css";
import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className={styles.container}>
      <Loader2 className={styles.spinner} size={48} />
      <p>Loading please wait...</p>
    </div>
  );
}
