import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WeatherStore } from "@/types/weather";
import { isAxiosError } from "axios";
import { weatherApi } from "@/lib/axios";

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set, get) => ({
      weather: null,
      loading: false,
      error: null,
      searchHistory: [],

      fetchWeather: async (city: string) => {
        set({ loading: true, error: null });
        try {
          const response = await weatherApi.get(`/weather?q=${city}`);
          set({ weather: response.data, loading: false });

          get().addToHistory(response.data.name);
        } catch (error) {
          let errMsg = "An unexpected error occurred.";

          if (isAxiosError(error)) {
            if (error.response?.status === 404) {
              errMsg = "City not found. Please check the city name.";
            } else {
              errMsg = error.response?.data?.message || errMsg;
            }
          }
          set({ error: errMsg, loading: false, weather: null });
        }
      },

      addToHistory: (city: string) => {
        const history = get().searchHistory;
        if (!history.includes(city)) {
          set({ searchHistory: [city, ...history].slice(0, 5) });
        }
      },
    }),
    {
      name: "weather-storage",
      partialize: (state) => ({
        searchHistory: state.searchHistory,
        weather: state.weather,
      }),
    }
  )
);
