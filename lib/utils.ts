import { weatherIcons } from '@/constants';

export const getWeatherIcon = (iconKey: string): any => {
  const key = `icon${iconKey}` as keyof typeof weatherIcons;
  return weatherIcons[key] ?? weatherIcons.unknown;
};