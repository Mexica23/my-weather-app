
import { WeatherDataPoint } from '../type';

let simState = {
  temperature: 20 + (Math.random() - 0.5) * 10, // Start with some randomness
  humidity: 50 + (Math.random() - 0.5) * 20,
  pressure: 1012 + (Math.random() - 0.5) * 10,
  windSpeed: 5 + (Math.random() - 0.5) * 5,
  windDirection: Math.random() * 360,
};

const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);

export const simulateReading = (): WeatherDataPoint => {
  // Simulate temperature fluctuation
  simState.temperature += (Math.random() - 0.5) * 0.5; // Fluctuate by +/- 0.25 C
  simState.temperature = parseFloat(clamp(simState.temperature, -20, 45).toFixed(1));

  // Simulate humidity fluctuation
  simState.humidity += (Math.random() - 0.5) * 2; // Fluctuate by +/- 1%
  simState.humidity = parseFloat(clamp(simState.humidity, 10, 99).toFixed(1));

  // Simulate pressure fluctuation
  simState.pressure += (Math.random() - 0.5) * 1; // Fluctuate by +/- 0.5 hPa
  simState.pressure = parseFloat(clamp(simState.pressure, 970, 1060).toFixed(1));

  // Simulate wind speed fluctuation
  simState.windSpeed += (Math.random() - 0.5) * 1.5; // Fluctuate by +/- 0.75 m/s
  simState.windSpeed = parseFloat(clamp(simState.windSpeed, 0, 35).toFixed(1));

  // Simulate wind direction fluctuation
  simState.windDirection += (Math.random() - 0.5) * 15; // Fluctuate by +/- 7.5 degrees
  if (simState.windDirection < 0) simState.windDirection += 360;
  if (simState.windDirection >= 360) simState.windDirection -= 360;
  simState.windDirection = parseFloat(simState.windDirection.toFixed(0));

  return {
    timestamp: Date.now(),
    temperature: simState.temperature,
    humidity: simState.humidity,
    pressure: simState.pressure,
    windSpeed: simState.windSpeed,
    windDirection: simState.windDirection,
  };
};




