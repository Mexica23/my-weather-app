
import React from 'react';

export const ThermometerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.608a8.287 8.287 0 003 2.56m0-4.828v-.005A4.5 4.5 0 0012 3C10.51 3 9.247 3.974 8.638 5.214M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75V15"/>
  </svg>
);

export const DropletIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.27 6.27A7.5 7.5 0 105.152 13.911l-.03.045A4.502 4.502 0 014.5 9.75a4.5 4.5 0 014.5-4.5c1.455 0 2.76.696 3.626 1.791l.004.005z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM12.375 14.25A2.625 2.625 0 0015 11.625V11.25a.375.375 0 00-.375-.375H9.375a.375.375 0 00-.375.375v.375a2.625 2.625 0 002.625 2.625h.75z" />
  </svg>
);

export const BarometerIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.838 0 4.5 4.5 0 01-1.41 8.775H5.25z" />
</svg>
);

export const WindIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
</svg>
);

export const CompassIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m0-15.75S11.25 6 9 6m3 0S12.75 6 15 6m-3 12S11.25 18 9 18m3 0S12.75 18 15 18M3 12h2.25m13.5 0H21m-15.75 0S6 11.25 6 9m0 3S6 12.75 6 15m12-3S18 11.25 18 9m0 3S18 12.75 18 15m-4.328-5.672L8.672 15.328m6.656-6.656l-6.656 6.656" />
</svg>
);
