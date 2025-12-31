import { useState } from "react";
import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";

interface Props {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export default function SearchBar({ onSearch, isLoading }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles.inputGroup}>
        <Search className={styles.icon} size={20} />
        <input
          type="text"
          placeholder="Search city name (e.g., Jakarta)..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        className={styles.button}
        disabled={isLoading || !input.trim()}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}
