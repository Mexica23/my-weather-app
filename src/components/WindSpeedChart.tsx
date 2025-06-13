import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { WindSpeedHistoryPoint } from '../type';
import { WindIcon } from '../constants';

interface WindSpeedChartProps {
  data: WindSpeedHistoryPoint[];
}

const WindSpeedChart: React.FC<WindSpeedChartProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-slate-800 p-6 rounded-xl shadow-lg h-[400px] flex items-center justify-center text-slate-400">
        Waiting for wind speed data...
      </div>
    );
  }

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-sky-500/30 transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <WindIcon className="w-6 h-6 text-sky-400 mr-2" />
        <h3 className="text-xl font-semibold text-slate-100">Wind Speed Over Time</h3>
      </div>
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="time" stroke="#94a3b8" tick={{ fontSize: 12 }} />
            <YAxis unit=" m/s" stroke="#94a3b8" tick={{ fontSize: 12 }} domain={['auto', 'auto']} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(30, 41, 59, 0.95)',
                borderColor: '#475569',
                borderRadius: '0.375rem',
              }}
              labelStyle={{ color: '#cbd5e1' }}
              itemStyle={{ color: '#38bdf8' }}
            />
            <Legend wrapperStyle={{ color: '#e2e8f0', paddingTop: 10 }} />
            <Line
              type="monotone"
              dataKey="speed"
              name="Wind Speed"
              stroke="#38bdf8"
              strokeWidth={2}
              activeDot={{ r: 6 }}
              dot={{ r: 2, fill: '#0ea5e9' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WindSpeedChart;