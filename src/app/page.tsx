"use client";

import { useEffect } from "react";
import { useWeatherStore } from "@/store/useWeatherStore";
import WeatherCard from "@/components/WeatherCard/WeatherCard";
import SearchBar from "@/components/SearchBar/SearchBar";
import Loader from "@/components/Loader/Loader";
import { AlertCircle, History } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  const { weather, loading, error, fetchWeather, searchHistory } =
    useWeatherStore();

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Weather Forecast</h1>

        <SearchBar onSearch={fetchWeather} isLoading={loading} />

        {error && (
          <div className={styles.errorCard}>
            <AlertCircle size={24} />
            <span>{error}</span>
          </div>
        )}

        {loading && <Loader />}

        {!loading && !error && weather && <WeatherCard data={weather} />}

        {!weather && !loading && searchHistory.length > 0 && (
          <div className={styles.historySection}>
            <div className={styles.historyHeader}>
              <History size={16} />
              <h3>Recent Searches</h3>
            </div>
            <div className={styles.tags}>
              {searchHistory.map((city, index) => (
                <button
                  key={`${city}-${index}`}
                  onClick={() => fetchWeather(city)}
                  className={styles.tag}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
