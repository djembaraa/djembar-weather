import styles from "./WeatherCard.module.css";
import { WeatherData } from "@/types/weather";
import Image from "next/image";
import { Wind, Droplets, Gauge, MapPin } from "lucide-react";

interface Props {
  data: WeatherData;
}

export default function WeatherCard({ data }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.location}>
          <div className={styles.cityWrapper}>
            <MapPin size={24} className={styles.pinIcon} />
            <h2 className={styles.city}>{data.name}</h2>
          </div>
          <p className={styles.desc}>{data.weather[0].description}</p>
        </div>

        <div className={styles.weatherIcon}>
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt={data.weather[0].description}
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className={styles.mainTemp}>
        {Math.round(data.main.temp)}
        <span className={styles.degree}>°C</span>
      </div>

      <div className={styles.detailsGrid}>
        <div className={styles.detailItem}>
          <Droplets size={24} className={styles.detailIcon} />
          <span>Humidity</span>
          <strong>{data.main.humidity}%</strong>
        </div>

        <div className={styles.detailItem}>
          <Wind size={24} className={styles.detailIcon} />
          <span>Wind</span>
          <strong>{data.wind.speed} m/s</strong>
        </div>

        <div className={styles.detailItem}>
          <Gauge size={24} className={styles.detailIcon} />
          <span>Pressure</span>
          <strong>{data.main.pressure} hPa</strong>
        </div>
      </div>
    </div>
  );
}
