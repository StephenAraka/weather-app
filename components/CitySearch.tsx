import InputField from '@/components/InputField';
import WeatherForecast from '@/components/WeatherForecast';
import { icons } from '@/constants';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';

const CitySearch = ({ cityName, setShowLocations, setCityName, isLoading, locations, showLocations, handleLocation }: any) => {
  return (
    <>
      <InputField
        placeholder="Search city"
        icon={icons.search}
        value={cityName}
        onChangeText={(value) => {
          setShowLocations(true);
          setCityName(value);
        }}
        loading={isLoading}
      />
      {locations?.data?.length > 0 && showLocations && (
        <View className="absolute w-full bg-primary-100 top-16 rounded-3xl mt-2 z-10">
          {locations.data.map((location: any, index: number) => {
            let showBorder = index + 1 !== locations.length;
            const borderClass = showBorder
              ? ' border-b-2 border-b-general-100'
              : '';
            return (
              <TouchableOpacity
                key={index}
                className={`flex-row items-center border-0 p-3 px-4 mb-1
                      ${borderClass}`}
                onPress={() => handleLocation(location)}
              >
                <Image
                  source={icons.pin}
                  resizeMode="contain"
                  className="w-6 h-6 mr-4"
                />
                <Text>{`${location.name}, ${location.countryCode}`}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </>
  );
};

export default CitySearch;
