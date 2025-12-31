"use client";

import { useState, useEffect } from "react";
import { useWeatherStore } from "@/store/useWeatherStore";
import WeatherCard from "@/components/WeatherCard/WeatherCard";
import styles from "./page.module.css";

export default function Home() {
  const [city, setCity] = useState("");

  const { weather, loading, error, fetchWeather, searchHistory } =
    useWeatherStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Weather App</h1>

        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Search city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={styles.input}
            disabled={loading}
          />
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "..." : "Search"}
          </button>
        </form>

        {error && <div className={styles.error}>{error}</div>}

        {weather && !error && <WeatherCard data={weather} />}

        {!weather && searchHistory.length > 0 && (
          <div className={styles.history}>
            <h3>Recent Searches:</h3>
            <div className={styles.tags}>
              {searchHistory.map((hist) => (
                <span
                  key={hist}
                  onClick={() => fetchWeather(hist)}
                  className={styles.tag}
                >
                  {hist}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
