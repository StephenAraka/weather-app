import { animations, weatherIcons } from '@/constants';

export const getWeatherIcon = (iconKey: string): any => {
  const key = `icon${iconKey}` as keyof typeof weatherIcons;
  return weatherIcons[key] ?? weatherIcons.unknown;
};

const getIconOrAnimation = (key: string) => {
  switch (key) {
    case '01d':
      return { animate: true, animation: animations.sun }

    case '01n':
      return { animate: true, animation: animations.moon }

    case '02d':
    case '02n':
    case '03d':
    case '03n':
      return { animate: true, animation: animations.suncloud }

    case '04d':
    case '04n':
      return { animate: true, animation: animations.cloud }

    case '09d':
    case '09n':
    case '10d':
    case '10n':
      return { animate: true, animation: animations.rain }

    case '11d':
    case '11n':
      return { animate: true, animation: animations.thunderstorm }

    default:
      return { animate: false, animation: null }
  }
}

export const getCurrentWeatherIcon = (iconKey: string): { animate: boolean, animation: any } => {
  const { animate, animation } = getIconOrAnimation(iconKey);
  if (animate) {
    return { animate: true, animation }
  }
  
  const key = `icon${iconKey}` as keyof typeof weatherIcons;
  return { animate: false, animation: weatherIcons[key] ?? weatherIcons.unknown};
};