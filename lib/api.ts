import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const GEO_API_KEY = process.env.GEO_API_KEY;
export const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const GEO_API_OPTIONS = {
  headers: {
    "X-RapidAPI-Key": GEO_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

// Axios instance
const axiosInstance = axios.create({
  baseURL: WEATHER_API_URL,
  params: {
    units: 'metric',
    appid: WEATHER_API_KEY,
  },
});

export const searchWeatherData = async (selectedCity: {
  city: string;
  latitude: number;
  longitude: number;
}) => {
  const { city, latitude, longitude } = selectedCity;

  try {
    // Use Promise.all to fetch current weather and forecast concurrently
    const [currentWeatherResponse, forecastResponse] = await Promise.all([
      axiosInstance.get('/weather', {
        params: { lat: latitude, lon: longitude },
      }),
      axiosInstance.get('/forecast', {
        params: { lat: latitude, lon: longitude },
      }),
    ]);

    // Return combined data
    return {
      city,
      currentWeather: currentWeatherResponse.data,
      forecast: forecastResponse.data,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

export const fetchCities = async (query: string) => {
  if (!query) return { data: [] };
  const response = await axios.get(
    `${GEO_API_URL}?minPopulation=1000000&namePrefix=${query}`,
    GEO_API_OPTIONS
  );
  return response.data;
};
