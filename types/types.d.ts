import { TextInputProps, TouchableOpacityProps } from "react-native";

declare interface InputFieldProps extends TextInputProps {
  icon?: any;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
  loading?: boolean;
}

declare interface Location {
  city: string,
  country: string,
  countryCode: string,
  id: number,
  latitude: number,
  longitude: number,
  name: string,
  population: number,
  region: string,
  regionCode: string,
  regionWdId: string,
  type: string,
  wikiDataId: string
}

declare interface WeatherData {
  base: string;
  city: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: Array<{
    description: string;
    icon: string;
    id: number;
    main: string;
  }>;
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

declare interface WeatherDataProps {
  data: WeatherData;
}

declare interface WeatherForecast {
  city: {
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: Array<{
    clouds: {
      all: number;
    };
    dt: number;
    dt_txt: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
    };
    pop: number;
    rain?: {
      [key: string]: number;
    };
    sys: {
      pod: string;
    };
    visibility: number;
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
  }>;
  message: number;
}

declare interface ForecastDataProps {
  data: WeatherForecast;
}