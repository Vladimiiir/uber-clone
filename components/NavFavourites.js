import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "234",
    icon: "home",
    name: "Home",
    location: { lat: 5.4945, lng: -0.4118 },
    destination: "Code Street, London, UK",
  },
  {
    id: "567",
    icon: "briefcase",
    name: "Work",
    location: { lat: 5.5497, lng: -0.3522 },
    destination: "London Eye, London, UK",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      className="bg-white"
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View className="border-b-0.5 border-gray-500" />
      )}
      renderItem={({ item: { id, icon, name, location, destination } }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <Icon
            style={tw`mr-4 p-3 rounded-full bg-gray-300`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text className="font-semibold text-lg">{name}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
