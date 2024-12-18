import { View, Image } from 'react-native';
import React from 'react';
import DefaultText from './DefaultText';
import { getWeatherIcon } from '@/lib/utils';

const ForecastItem = ({ data, day }: any) => {
  return (
    <View className="bg-secondary-500 flex items-center py-2 px-4 rounded-xl mr-4 w-[112] justify-between">
      <DefaultText text={day} bold textStyle="text-sm text-center text-black" />
      <DefaultText text={data.weather[0].description} textStyle="text-sm text-center text-primary-700" />
      <Image source={getWeatherIcon(data.weather[0].icon)} className="w-16 h-16" />
      <DefaultText text={`${Math.round(data.main.temp_max)}°C / ${Math.round(data.main.temp_min)}°C`} bold textStyle="" />
    </View>
  );
};

export default ForecastItem;
