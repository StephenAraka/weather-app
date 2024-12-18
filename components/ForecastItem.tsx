import { View, Text, Image } from 'react-native';
import React from 'react';
import DefaultText from './DefaultText';
import { weatherIcons } from '@/constants';

const ForecastItem = () => {
  return (
    <View className="bg-general-200 flex items-center py-2 px-4 rounded-xl mr-4">
      <DefaultText text="Monday" bold textStyle="text-sm" />
      <DefaultText text="clear sky" textStyle="text-sm" />
      <Image source={weatherIcons.icon02n} className="w-16 h-16" />
      <DefaultText text="21°C" bold textStyle="" />
    </View>
  );
};

export default ForecastItem;
