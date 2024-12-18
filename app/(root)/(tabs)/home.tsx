import CurrentWeatherCard from '@/components/CurrentWeather';
import WeatherForecast from '@/components/WeatherForecast';
import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@tanstack/react-query';
import { fetchCities, searchWeatherData } from '@/lib/api';
import { Location } from '../../../types/types';
import CitySearch from '@/components/CitySearch';
import LottieView from 'lottie-react-native';
import { animations } from '@/constants';

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
      const { currentWeather, forecast } = await searchWeatherData({
        city: label,
        latitude,
        longitude,
      });

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

        {/*//- EMPTY STATE  */}
        {!forecast && !currentWeather && (
          <View className="flex-1 justify-center items-center p-4">
            <LottieView
              loop
              source={animations.sun}
              autoPlay
              style={{
                height: 360,
                marginTop: 20,
                width: 360,
              }}
            />
            <Text className="text-2xl font-bold text-blue-800 mb-2">
              🌤️ Welcome to AnyWeather!
            </Text>
            <Text className="text-lg text-gray-700 text-center mb-4">
              Find out the current weather and few days forecast for any city in
              the world. Start by searching for a city above.
            </Text>
            <Text className="text-sm text-gray-500 mt-4 text-center">
              Your perfect travel companion for staying ahead of the weather!
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
