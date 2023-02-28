import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "../components/NavFavourites";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View className="bg-white text-center flex-1 p-2">
      <View className="flex-shrink">
        <Text className="text-center text-xl pt-5 pb-2 font-semibold">
          Good morning, Vladimir
        </Text>
        <View className="border-t border-gray-200 pt-2">
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            debounce={400}
            nearbyPlacesAPI="GoogleReverseGeocoding"
            styles={toInputBoxStyles}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: "en",
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            fetchDetails={true}
            returnKeyType={"search"}
            enablePoweredByContainer={false}
          />
        </View>
        <NavFavourites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-400`}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptionsCard")}
          style={tw`bg-black flex-row w-24 px-4 py-3 justify-between rounded-full`}
        >
          <Icon name="car" type="font-awesome" color={"white"} size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-black flex-row w-24 px-4 py-3 justify-between rounded-full`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color={"white"}
            size={16}
          />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 0,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
    borderRadius: 10,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
    zIndex: 20,
  },
});
