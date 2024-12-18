import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { animations } from '@/constants';
import DefaultText from './DefaultText';
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const CurrentWeatherCard = () => {
  return (
    <View className="w-full bg-primary-500 rounded-3xl">
      <View className="flex flex-col justify-center items-center mt-4">
        <DefaultText bold text="Nairobi, KE" textStyle="text-2xl"></DefaultText>
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
          24°C
        </Text>
        <DefaultText text="Heavy rain" textStyle="text-xl" />
      </View>

      <View className="m-4 border-primary-400 border-[1px]" />

      <View className="flex flex-row justify-between mx-8 mb-8">
        {/* TOP ROW */}
        <View className="flex justify-between flex-column gap-4">
          <View className="flex flex-row gap-2 items-center">
            <Entypo name="air" size={24} color="white" />
            <View>
              <DefaultText text="3.7 km/h" />
              <DefaultText text="Wind" />
            </View>
          </View>

          <View className="flex flex-row gap-2 items-center">
            <FontAwesome name="thermometer" size={24} color="white" />
            <View>
              <DefaultText text="1010 mbar" />
              <DefaultText text="Pressure" />
            </View>
          </View>
        </View>

        {/* BOTTOM ROW */}
        <View className="flex justify-between flex-column gap-4">
          <View className="flex flex-row gap-2 items-center">
            <Fontisto name="rain" size={24} color="white" />
            <View>
              <DefaultText text="74%" />
              <DefaultText text="Chance of rain" />
            </View>
          </View>

          <View className="flex flex-row gap-2 items-center">
            <FontAwesome6 name="droplet" size={24} color="white" />
            <View>
              <DefaultText text="83%" />
              <DefaultText text="Humidity" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CurrentWeatherCard;
