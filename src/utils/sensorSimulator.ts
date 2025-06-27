import { WeatherDataPoint } from '../type';        

const ESP32_IP = 'http://192.168.68.144'; // Replace with your ESP32 IP address

export const simulateReading = async (): Promise<WeatherDataPoint> => {
  try {
    const response = await fetch(`${ESP32_IP}/data`);
    const data = await response.json();

    return {
      timestamp: Date.now(),
      temperature: parseFloat(data.temperature),
      humidity: parseFloat(data.humidity),
      pressure: parseFloat(data.pressure),
      windSpeed: parseFloat(data.windSpeed),
      windDirection: parseFloat(data.windDirection),
      rainfall: parseFloat(data.rainfall ?? '0'), // Default to 0 if missing
        rainfallIntensity: parseFloat(data.rainfallIntensity ?? '0'),
    };
  } catch (error) {
    console.error('❌ Failed to fetch from ESP32:', error);

    // Fallback data in case of failure
    return {
      timestamp: Date.now(),
      temperature: 0,
      humidity: 0,
      pressure: 0,
      windSpeed: 0,
      windDirection: 0,
      rainfall: 0,
         rainfallIntensity: 0, 
    };
  }
};
