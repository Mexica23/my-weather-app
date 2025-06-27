import { WeatherDataPoint } from '../type';

export const fetchThingSpeakData = async (): Promise<WeatherDataPoint> => {
  const response = await fetch('https://api.thingspeak.com/channels/2994214/feeds.json?results=1');
  const data = await response.json();
  const latest = data.feeds[0];

  return {
    timestamp: new Date(latest.created_at).getTime(),
    temperature: parseFloat(latest.field1 ?? '0'),
    humidity: parseFloat(latest.field2 ?? '0'),
    pressure: parseFloat(latest.field4 ?? '0'),        // Adjust if you store it in a different field
    windSpeed: parseFloat(latest.field5 ?? '0'),
    windDirection: parseFloat(latest.field7 ?? '0'), 
    rainfall: parseFloat(latest.field8 ?? '0'),         // Assuming field8 = total rainfall
    rainfallIntensity: 0                                // TEMP: Default value, or compute if needed
  };
};
