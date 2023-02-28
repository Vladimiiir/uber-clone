import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

// pricing
const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  const data = [
    {
      id: "Uber-X-123",
      title: "UberX",
      multiplier: 1,
      image: "https://links.papareact.com/3pn",
    },
    {
      id: "Uber-XL-456",
      title: "Uber XL",
      multiplier: 1.2,
      image: "https://links.papareact.com/5w8",
    },
    {
      id: "Uber-LUX-789",
      title: "Uber LUX",
      multiplier: 1.75,
      image: "https://links.papareact.com/7pf",
    },
  ];

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`absolute bg-black z-50 top-3 left-5 p-3 rounded-full`}
        >
          <Icon
            name="chevron-left"
            type="fontawesome"
            color={"white"}
            size={22}
          />
        </TouchableOpacity>
        <Text className="bg-zinc-600 text-center text-white py-5 text-xl">
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            className="flex-row items-center justify-between px-10"
            style={tw`${id === selected?.id && "bg-gray-200"}`}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                resizeMode: "contain",
                marginLeft: -25,
                marginRight: 10,
              }}
              source={{
                uri: image,
              }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text style={tw`text-xs`}>
                {travelTimeInformation?.duration?.text} Travel Time
              </Text>
            </View>
            <Text style={tw`text-xl `}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "GBP",
              }).format(
                (travelTimeInformation?.duration?.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 rounded-lg ${!selected && "bg-gray-300"}`}
        >
          <Text
            style={tw`text-center text-white text-xl ${
              !selected && "text-gray-500 font-semibold"
            }`}
          >
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
