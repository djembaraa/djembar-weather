import styles from "./WeatherCard.module.css";
import { WeatherData } from "@/types/weather";
import Image from "next/image";

interface Props {
  data: WeatherData;
}

export default function WeatherCard({ data }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.city}>{data.name}</h2>
          <p className={styles.desc}>{data.weather[0].description}</p>
        </div>
        <div className={styles.iconWrapper}>
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
            width={80}
            height={80}
          />
        </div>
      </div>

      <div className={styles.mainTemp}>{Math.round(data.main.temp)}&deg;C</div>

      <div className={styles.detailsGrid}>
        <div className={styles.detailItem}>
          <span>Humidity</span>
          <strong>{data.main.humidity}%</strong>
        </div>
        <div className={styles.detailItem}>
          <span>Wind</span>
          <strong>{data.wind.speed} m/s</strong>
        </div>
        <div className={styles.detailItem}>
          <span>Pressure</span>
          <strong>{data.main.pressure} hPa</strong>
        </div>
      </div>
    </div>
  );
}
