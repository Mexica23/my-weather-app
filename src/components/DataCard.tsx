
import React from 'react';

interface DataCardProps {
  title: string;
  value: string | number;
  unit: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'stable'; // Optional: for future trend indicators
  description?: string;
}

const DataCard: React.FC<DataCardProps> = ({ title, value, unit, icon, description }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-sky-500/30 transition-shadow duration-300 flex flex-col justify-between min-h-[160px]">
      <div>
        <div className="flex items-center justify-between text-slate-400 mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          {icon && <span className="text-sky-400">{icon}</span>}
        </div>
        <p className="text-4xl font-bold text-slate-100">
          {value}
          <span className="text-2xl font-normal text-slate-300 ml-1">{unit}</span>
        </p>
      </div>
      {description && <p className="text-sm text-slate-500 mt-3">{description}</p>}
    </div>
  );
};

export default DataCard;
