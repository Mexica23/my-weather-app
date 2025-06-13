
export const getCardinalDirection = (angle: number): string => {
  if (typeof angle !== 'number' || angle < 0 || angle > 360) { // Allow 360 for N
    return 'N/A';
  }
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(angle / 22.5) % 16;
  return directions[index];
};
