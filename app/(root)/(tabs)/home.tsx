import CurrentWeatherCard from '@/components/CurrentWeather';
import InputField from '@/components/InputField';
import WeatherForecast from '@/components/WeatherForecast';
import { icons } from '@/constants';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import {
  GEO_API_OPTIONS,
  GEO_API_URL,
  WEATHER_API_KEY,
  WEATHER_API_URL,
} from '@/lib/api';
import { Location } from '../../../types/types';
import CitySearch from '@/components/CitySearch';

const Home = () => {
  const [cityName, setCityName] = useState('');
  const [showLocations, setShowLocations] = useState(false);

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const searchWeatherData = (selectedCity: {
    city: string;
    latitude: number;
    longitude: number;
  }) => {
    const { city, longitude, latitude } = selectedCity;
    const lon = longitude.toString();
    const lat = latitude.toString();

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city, ...weatherResponse });
        setForecast({ city, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  const handleLocation = (selected: Location) => {
    setShowLocations(false);
    const { city, countryCode, latitude, longitude } = selected;
    const label = `${city}, ${countryCode}`;

    searchWeatherData({ city: label, latitude, longitude });
  };

  const fetchCities = async (query: string) => {
    if (!query) return { data: [] };
    const response = await axios.get(
      `${GEO_API_URL}?minPopulation=1000000&namePrefix=${query}`,
      GEO_API_OPTIONS
    );
    return response.data;
  };

  const {
    data: locations,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cities', cityName],
    queryFn: () => fetchCities(cityName),
    enabled: cityName.length > 2,
    staleTime: 5 * 60 * 1000,
  });

  return (
    <SafeAreaView className=" flex flex-1 bg-general-100">
      <View className="mx-4">
        {/*//- INPUT FIELD */}
        <CitySearch
          cityName={cityName}
          setShowLocations={setShowLocations}
          setCityName={setCityName}
          isLoading={isLoading}
          locations={locations}
          showLocations={showLocations}
          handleLocation={handleLocation}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/*//- CURRENT WEATHER */}
        {currentWeather && (
          <View className="mt-4 mx-4">
            <CurrentWeatherCard data={currentWeather} />
          </View>
        )}

        {/*//- FORECAST  */}
        {forecast && (
          <View className="mt-4 mx-4">
            <WeatherForecast data={forecast} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
