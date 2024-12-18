import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import DefaultText from './DefaultText';
import { weatherIcons } from '@/constants';
import ForecastItem from './ForecastItem';
import { ForecastDataProps } from '@/types/types';

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const WeatherForecast = ({ data }: ForecastDataProps) => {
  const newDays = data?.list.filter((item) => item.dt_txt.includes('00:00:00'));
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <View>
      <DefaultText
        text={`Forecast for the next ${newDays.length} days ⬇️`}
        bold
        textStyle="text-primary-500 text-xl ml-2"
      />
      <ScrollView
        horizontal
        className="py-2 px-3"
        showsHorizontalScrollIndicator={false}
      >
        {newDays?.map((item, idx) => (
          <ForecastItem key={idx} data={item} day={forecastDays[idx]} />
        ))}
      </ScrollView>
    </View>
  );
};

export default WeatherForecast;
