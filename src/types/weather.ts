export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];
  wind: {
    speed: number;
  };
  dt: number;
}

export interface WeatherStore {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  searchHistory: string[];
  fetchWeather: (city: string) => Promise<void>;
  addToHistory: (city: string) => void;
}
