

import React from 'react';
import WeatherDashboard from './components/WeatherDashboards';
 

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-900">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-sky-400">ESP32 Weather Station Monitor</h1>
        <p className="text-slate-400 mt-2">Simulated live data from your virtual weather sensors</p>
      </header>
      <main className="w-full max-w-6xl">
        <WeatherDashboard />
      </main>
      <footer className="mt-12 text-center text-sm text-slate-500">
        <p>&copy; ${new Date().getFullYear()} Simulated Weather Station. All rights reserved (not really).</p>
      </footer>
    </div>
  );
};

export default App;