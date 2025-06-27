// src/components/WeatherDashboard.tsx
import React from 'react';
import { useWeatherData } from '../hooks/useWeatherData';
import DataCard from './DataCard';
import WindSpeedChart from './WindSpeedChart';
import RainfallChart from './RainfallChart';
import {
  ThermometerIcon,
  DropletIcon,
  BarometerIcon,
  CompassIcon,
  RainfallIcon,
} from '../constants';
import { getCardinalDirection } from '../utils/formatters';

const WeatherDashboard: React.FC = () => {
  const { currentData, windSpeedHistory, rainfallHistory, isLoading, error } = useWeatherData();

  if (isLoading) {
    return <div className="text-center text-xl text-slate-300 py-10">Initializing Sensor Network... Please Wait...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-400 bg-red-900/30 p-6 rounded-lg">{error}</div>;
  }

  if (!currentData) {
    return <div className="text-center text-xl text-slate-400 py-10">No weather data available.</div>;
  }

  const windDirectionCardinal = getCardinalDirection(currentData.windDirection);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <DataCard
          title="Temperature"
          value={currentData.temperature}
          unit="°C"
          icon={<ThermometerIcon className="w-8 h-8" />}
          description="Ambient air temperature."
        />
        <DataCard
          title="Humidity"
          value={currentData.humidity}
          unit="%"
          icon={<DropletIcon className="w-8 h-8" />}
          description="Relative humidity level."
        />
        <DataCard
          title="Barometric Pressure"
          value={currentData.pressure}
          unit="hPa"
          icon={<BarometerIcon className="w-8 h-8" />}
          description="Atmospheric pressure."
        />
        <DataCard
          title="Wind Direction"
          value={`${currentData.windDirection}°`}
          unit={windDirectionCardinal}
          icon={<CompassIcon className="w-8 h-8" />}
          description={`Direction wind is blowing from.`}
        />
        <DataCard
          title="Rainfall"
          value={currentData.rainfallIntensity}
          unit="mm/hr"
          icon={<RainfallIcon className="w-8 h-8" />}
          description="Current rainfall intensity."
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WindSpeedChart data={windSpeedHistory} />
        <RainfallChart data={rainfallHistory} />
      </div>
    </div>
  );
};

export default WeatherDashboard;        
