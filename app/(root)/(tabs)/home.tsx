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
  fetchCities,
  GEO_API_OPTIONS,
  GEO_API_URL,
  searchWeatherData,
} from '@/lib/api';
import { Location } from '../../../types/types';
import CitySearch from '@/components/CitySearch';

const Home = () => {
  const [cityName, setCityName] = useState('');
  const [showLocations, setShowLocations] = useState(false);

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);



  const handleLocation = async (selected: Location) => {
    setShowLocations(false);
    const { city, countryCode, latitude, longitude } = selected;
    const label = `${city}, ${countryCode}`;

    try {
      // Await the data returned by the async function
      const { currentWeather, forecast } = await searchWeatherData({ city: label, latitude, longitude });
  
      // Update state with the fetched data
      setCurrentWeather({ city, ...currentWeather });
      setForecast({ city, ...forecast });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
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
    <SafeAreaView className=" flex flex-1 bg-primary-100">
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
