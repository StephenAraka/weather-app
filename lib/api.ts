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
