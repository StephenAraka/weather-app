import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import DefaultText from './DefaultText';
import { weatherIcons } from '@/constants';
import ForecastItem from './ForecastItem';

const WeatherForecast = () => {
  return (
    <View>
      <DefaultText text='Forecast for the next few days ⬇️' bold textStyle='text-primary-500 text-xl ml-2' />
      <ScrollView
        horizontal
        className='py-2 px-3'
        showsHorizontalScrollIndicator={false}
      >
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
      </ScrollView>
    </View>
  )
}

export default WeatherForecast;
