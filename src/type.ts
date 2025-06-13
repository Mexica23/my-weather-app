
export interface WeatherDataPoint {
  timestamp: number;
  temperature: number; // °C
  humidity: number;    // %
  pressure: number;    // hPa
  windSpeed: number;   // m/s
  windDirection: number; // 0-359 degrees
}

export interface WindSpeedHistoryPoint {
  time: string; // Formatted time for chart axis
  speed: number;
}
