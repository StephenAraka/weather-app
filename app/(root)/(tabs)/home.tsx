import CurrentWeatherCard from "@/components/CurrentWeather";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const [cityName, setCityName] = useState('');
  const [locations, setLocations] = useState([1,2,3]);
  const [showLocations, setShowLocations] = useState(false);

  const handleLocation = (loc: any) => {
    console.log('====================================');
    console.log(loc);
    console.log('====================================');
  }

  return (
    <SafeAreaView className=" flex flex-1 bg-general-100">
      <View className="mx-4">
        <InputField
          placeholder="Search city"
          icon={icons.search}
          value={cityName}
          onChangeText={(value) => setCityName(value)}
        />
        {
          locations.length > 0 && showLocations && (
            <View className="absolute w-full bg-primary-100 top-16 rounded-3xl mt-2">
              {
                locations.map((location, index) => {
                  let showBorder = index + 1 !== locations.length;
                  const borderClass = showBorder ? " border-b-2 border-b-general-100" : "";
                  return (
                    <TouchableOpacity
                      key={index}
                      className={`flex-row items-center border-0 p-3 px-4 mb-1
                      ${borderClass}`}
                      onPress={() => handleLocation(location)}
                    >
                      <Image source={icons.pin} resizeMode="contain" className="w-6 h-6 mr-4" />
                      <Text>London, United Kingdom</Text>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          )
        }
      </View>
      {/* CURRENT WEATHER */}
      <View className="mt-4 mx-4">
        <CurrentWeatherCard />
      </View>
    </SafeAreaView>
  );
};

export default Home;

