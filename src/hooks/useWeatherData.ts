// src/hooks/useWeatherData.ts
import { useEffect, useState } from 'react';
import {
  WeatherDataPoint,
  WindSpeedHistoryPoint,
  RainfallHistoryPoint,
} from '../type';
import { simulateReading } from '../utils/sensorSimulator'; // or use fetchThingSpeakData

export const useWeatherData = () => {
  const [currentData, setCurrentData] = useState<WeatherDataPoint | null>(null);
  const [windSpeedHistory, setWindSpeedHistory] = useState<WindSpeedHistoryPoint[]>([]);
  const [rainfallHistory, setRainfallHistory] = useState<RainfallHistoryPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await simulateReading(); // Or use fetchThingSpeakData()
        setCurrentData(data);

        const time = new Date(data.timestamp).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });

        // Update wind speed chart
        setWindSpeedHistory((prev) => [
          ...prev.slice(-19),
          { time, speed: data.windSpeed },
        ]);

        // ✅ Update rainfall intensity chart (dynamic)
        setRainfallHistory((prev) => [
          ...prev.slice(-19),
          {
            time,
            rainfallIntensity: data.rainfallIntensity ?? 0,
          },
        ]);

        setIsLoading(false);
        setError(null);
      } catch (err) {
        setError('Failed to fetch weather data.');
        setIsLoading(false);
      }
    };

    const interval = setInterval(fetchData, 5000); // every 5 sec
    fetchData(); // initial fetch

    return () => clearInterval(interval);
  }, []);

  return {
    currentData,
    windSpeedHistory,
    rainfallHistory,
    isLoading,
    error,
  };
};
