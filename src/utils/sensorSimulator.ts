import { WeatherDataPoint } from '../type';

const THINGSPEAK_CHANNEL_ID = '2994214'; // 🔁 Replace with your real channel ID
const url = `https://api.thingspeak.com/channels/${THINGSPEAK_CHANNEL_ID}/feeds.json?results=1`;

export const simulateReading = async (): Promise<WeatherDataPoint> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const latest = data.feeds[0];

    return {
      timestamp: new Date(latest.created_at).getTime(),
      temperature: parseFloat(latest.field1),
      humidity: parseFloat(latest.field2),
      rainfall: parseFloat(latest.field3),
      pressure: parseFloat(latest.field4),
      windSpeed: parseFloat(latest.field5),
      windDirection: parseFloat(latest.field6),
      rainfallIntensity: parseFloat(latest.field7),
    };
  } catch (error) {
    console.error('❌ Failed to fetch from ThingSpeak:', error);
    return {
      timestamp: Date.now(),
      temperature: 0,
      humidity: 0,
      rainfall: 0,
      pressure: 0,
      windSpeed: 0,
      windDirection: 0,
      rainfallIntensity: 0,
    };
  }
};
