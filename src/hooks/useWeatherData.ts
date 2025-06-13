
import { useState, useEffect, useCallback } from 'react';
import { WeatherDataPoint, WindSpeedHistoryPoint } from '../type';
import { simulateReading } from '../utils/sensorSimulator';

const MAX_HISTORY_POINTS = 30; // Number of data points for the wind speed chart
const UPDATE_INTERVAL_MS = 2500; // Update data every 2.5 seconds

export const useWeatherData = () => {
  const [currentData, setCurrentData] = useState<WeatherDataPoint | null>(null);
  const [windSpeedHistory, setWindSpeedHistory] = useState<WindSpeedHistoryPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(() => {
    try {
      const newData = simulateReading();
      setCurrentData(newData);
      setWindSpeedHistory(prevHistory => {
        const newPoint = {
          time: new Date(newData.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          speed: newData.windSpeed,
        };
        const updatedHistory = [...prevHistory, newPoint];
        // Keep only the last MAX_HISTORY_POINTS
        return updatedHistory.length > MAX_HISTORY_POINTS
          ? updatedHistory.slice(updatedHistory.length - MAX_HISTORY_POINTS)
          : updatedHistory;
      });
      if (isLoading) setIsLoading(false); // Set loading to false after first successful fetch
      if (error) setError(null); // Clear error on successful fetch
    } catch (err) {
      console.error("Error simulating data:", err);
      setError("Failed to simulate sensor data. Please try refreshing.");
      setIsLoading(false); // Also set loading to false on error
    }
  }, [isLoading, error]); // Include isLoading and error to allow resetting them

  useEffect(() => {
    fetchData(); // Initial fetch
    const intervalId = setInterval(fetchData, UPDATE_INTERVAL_MS);
    return () => clearInterval(intervalId); // Cleanup interval on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData]); // fetchData is memoized.

  return { currentData, windSpeedHistory, isLoading, error };
};
