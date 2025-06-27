// type.ts

// This defines the shape of one reading from your weather station
export interface WeatherDataPoint {      
  timestamp: number;       // Unix time when data was recorded
  temperature: number;     // °C
  humidity: number;        // %
  pressure: number;        // hPa
  windSpeed: number;       // m/s
  windDirection: number;   // 0–359 degrees
  rainfall: number;        // mm/hr (simulated or from sensor)
   rainfallIntensity: number;
}

// For graphing wind speed over time
export interface WindSpeedHistoryPoint {
  time: string;            // e.g. "12:45:30 PM"
  speed: number;           // m/s
}

// For graphing rainfall intensity over time
export interface RainfallHistoryPoint {
  time: string; // formatted time string (e.g., "14:05")
  rainfallIntensity: number; // mm/hr      
}
