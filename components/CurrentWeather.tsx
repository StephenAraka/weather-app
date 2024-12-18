import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { animations } from '@/constants';
import DefaultText from './DefaultText';
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { WeatherDataProps } from '@/types/types';

const CurrentWeatherCard = ({ data }: WeatherDataProps ) => {
  return (
    <View className="w-full bg-primary-500 rounded-3xl">
      <View className="flex flex-col justify-center items-center mt-4">
        <DefaultText bold text={data.city} textStyle="text-2xl"></DefaultText>
        <LottieView
          loop
          source={animations.thunderstorm}
          autoPlay
          style={{
            height: 240,
            marginTop: 20,
            width: 240,
          }}
        />
        <Text className="text-primary-100 font-bold text-6xl mt-4 mb-2">
        {Math.round(data.main.temp)}°C
        </Text>
        <DefaultText text={data.weather[0].description} textStyle="text-xl" />
      </View>

      <View className="m-4 border-primary-400 border-[1px]" />

      <View className="flex flex-row justify-between mx-8 mb-8">
        {/* TOP ROW */}
        <View className="flex justify-between flex-column gap-4">
          <View className="flex flex-row gap-2 items-center">
            <Entypo name="air" size={24} color="white" />
            <View>
              <DefaultText text={`${data.wind.speed} m/s`} />
              <DefaultText text="Wind" />
            </View>
          </View>

          <View className="flex flex-row gap-2 items-center">
            <FontAwesome name="thermometer" size={24} color="white" />
            <View>
              <DefaultText text={`${data.main.pressure} hPa`} />
              <DefaultText text="Pressure" />
            </View>
          </View>
        </View>

        {/* BOTTOM ROW */}
        <View className="flex justify-between flex-column gap-4">
          <View className="flex flex-row gap-2 items-center">
            <Fontisto name="rain" size={24} color="white" />
            <View>
              <DefaultText text={`${data.clouds.all}%`} />
              <DefaultText text="Chance of rain" />
            </View>
          </View>

          <View className="flex flex-row gap-2 items-center">
            <FontAwesome6 name="droplet" size={24} color="white" />
            <View>
              <DefaultText text={`${data.main.humidity}%`} />
              <DefaultText text="Humidity" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CurrentWeatherCard;
